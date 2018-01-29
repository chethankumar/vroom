import axios from 'axios';
import _ from 'lodash';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

function saveData(key, value) {
  storage.save({
    key,
    data: value,
  });
}

function getData(key, callback) {
  storage.load({
    key,
  }).then((ret) => {
    console.log(`[DB] value for ${key} is ${JSON.stringify(ret)}`);
    return callback(null, ret);
  }).catch((err) => {
    console.log(`[DB] Error in getting data for ${key}`);
    return callback(err);
  });
}

function deleteData(key) {
  storage.remove({
    key,
  });
}


export default class AppLaunchService {
  constructor() {
    this.url = 'https://applaunch.ng.bluemix.net/applaunch/v1/apps/';
    this.isInitialized = false;
    this.isUserRegistered = false;
  }

  shouldReinit(region, applicationId, clientSecret, deviceId, config, callback) {
    getData('initData', (err, data) => {
      if (data) {
        delete data.user;
        delete data.attributes;
        callback(!_.isEqual(data, {
          url: this.url,
          region,
          applicationId,
          clientSecret,
          deviceId,
          config,
        }));
      }
      callback(true);
    });
  }

  shouldUpdateUser(region, applicationId, clientSecret, deviceId, config, user, attributes, callback) {
    getData('initData', (err, data) => {
      if (data) {
        if (_.isEqual(data.user, user) && _.isEqual(data.attributes, attributes)) {
          callback(false);
        }
        callback(true);
      }
    });
  }

  initialize(region, applicationId, clientSecret, deviceId, config, user, attributes) {
    console.log('ALlib: initialize');
    const baseurl = `${this.url + applicationId}/`;
    this.applicationId = applicationId;
    this.clientsecret = clientSecret;
    this.region = region;
    this.deviceId = deviceId;
    this.userId = user.userId;
    this.platform = user.platform;
    this.attributes = attributes;

    const deviceData = {
      userId: this.userId,
      deviceId: this.deviceId,
      platform: user.platform,
    };
    if (attributes && !_.isEmpty(attributes)) {
      deviceData.attributes = attributes;
    }

    const promise = new Promise(((resolve, reject) => {
      this.shouldReinit(region, applicationId, clientSecret, deviceId, config, (val) => {
        if (val) {
          axios.post(`${baseurl}devices`, deviceData, {
            headers: {
              clientSecret: this.clientsecret,
              'Content-Type': 'application/json',
            },
          }).then((RegistrationRes) => {
            saveData('initData', {
              url: this.url,
              region,
              applicationId,
              clientSecret,
              deviceId,
              config,
              user,
              attributes,
            });
            this.isUserRegistered = true;
            // this.result = this.userId;
            this.isInitialized = true;
            // format is users + userID + actions
            let actionsRegUrl = `${baseurl}devices`;
            actionsRegUrl += '/';
            actionsRegUrl += this.deviceId;
            actionsRegUrl += '/actions';
            // Get with clientsecret and content-type
            // Get with clientsecret and content-type
            axios.get(actionsRegUrl, {
              headers: {
                clientSecret: this.clientsecret,
                'Content-Type': 'application/json',
              },
            }).then((res) => {
              const result = res.data;
              this.features = result.features;
              saveData('features', result.features);
              resolve(result);
            }, (err) => {
              console.log(`ALlib: Error - ${err.statusText}`);
              reject(err.status);
            });
          }, (RegistrationErr) => {
            this.isUserRegistered = false;
            console.log(`ALlib: Error - ${RegistrationErr.statusText}`);
            reject(RegistrationErr.status);
          });
        }
      });
      this.shouldUpdateUser(region, applicationId, clientSecret, deviceId, config, user, attributes, (val) => {
        if (val) {
          axios.put(`${baseurl}devices/${deviceData.deviceId}`, deviceData, {
            headers: {
              clientSecret: this.clientsecret,
              'Content-Type': 'application/json',
            },
          }).then((RegistrationRes) => {
            saveData('initData', {
              url: this.url,
              region,
              applicationId,
              clientSecret,
              deviceId,
              config,
              user,
              attributes,
            });
            this.isUserRegistered = true;
            // this.result = this.userId;
            this.isInitialized = true;
            // format is users + userID + actions
            let actionsRegUrl = `${baseurl}devices`;
            actionsRegUrl += '/';
            actionsRegUrl += this.deviceId;
            actionsRegUrl += '/actions';
            // Get with clientsecret and content-type
            // Get with clientsecret and content-type
            axios.get(actionsRegUrl, {
              headers: {
                clientSecret: this.clientsecret,
                'Content-Type': 'application/json',
              },
            }).then((res) => {
              const result = res.data;
              this.features = result.features;
              saveData('features', result.features);
              resolve(result);
            }, (err) => {
              console.log(`ALlib: Error - ${err.statusText}`);
              reject(err.status);
            });
          }, (RegistrationErr) => {
            this.isUserRegistered = false;
            console.log(`ALlib: Error - ${RegistrationErr.statusText}`);
            reject(RegistrationErr.status);
          });
        }
      });
    }));
    return promise;
  }

  hasFeatureWith(code, callback) {
    console.log('ALlib: hasFeatureWith');
    let hasFeature = false;
    getData('features', (err, features) => {
      if (features) {
        for (let i = 0; i < features.length; i += 1) {
          if (code === features[i].code) {
            hasFeature = true;
            break;
          }
        }
      }
      return callback(hasFeature);
    });
  }

  getValueFor(featureWithCode, propertyWithCode, callback) {
    console.log('ALlib: getValueFor');
    let val = '';
    getData('features', (err, features) => {
      if (features) {
        for (let i = 0; i < features.length; i += 1) {
          if (featureWithCode === features[i].code) {
            const properties = features[i].properties;
            for (let j = 0; j < properties.length; j += 1) {
              if (propertyWithCode === properties[j].code) {
                val = properties[j].value;
                break;
              }
            }
          }
        }
        return callback(null, val);
      }
      return callback(err);
    });
  }

  sendMetricsWith(code) {
    console.log('ALlib: sendMetricsWith');
    const promise = new Promise(((resolve, reject) => {
      const baseurl = `${this.url + this.applicationId}/`;
      if (this.isInitialized && this.isUserRegistered) {
        const deviceData = {
          metricCodes: [code],
        };
        const deviceRegURL = 'devices';
        let metricRegUrl = baseurl + deviceRegURL;
        metricRegUrl += '/';
        metricRegUrl += this.deviceId;
        metricRegUrl += '/events';
        metricRegUrl += '/metrics';
        // Need to pass DeviceID as param
        // Need to pass DeviceID as param
        axios.post(metricRegUrl, deviceData, {
          headers: {
            clientSecret: this.clientsecret,
            'Content-Type': 'application/json',
          },
        }).subscribe((res) => {
          const result = JSON.stringify(res);
          resolve(result);
        }, (err) => {
          console.log(`ALlib: Error - ${err.statusText}`);
          reject(err.status);
        });
      }
    }));
    return promise;
  }

  updateUserWith(userId, attribute, value) {
    console.log('ALlib: updateUserWith');
    const deviceData = {
      deviceId: this.deviceId,
      MODEL: '',
      userId: this.userId,
      APP_NAME: '',
    };
    const deviceRegURL = 'devices';
    let userRegURL = this.url + deviceRegURL;
    userRegURL += '/';
    userRegURL += this.deviceId;
    deviceData[attribute] = value;
    this.http.post(userRegURL, deviceData, {
      headers: {
        clientSecret: this.clientsecret,
        'Content-Type': 'application/json',
      },
    }).subscribe((res) => {
      this.isUserRegistered = true;
      this.userId = userId;
      return true;
    }, (err) => {
      console.log(`ALlib: Error - ${err.statusText}`);
      this.isUserRegistered = false;
    });
    return false;
  }
}

