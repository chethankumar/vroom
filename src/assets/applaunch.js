import axios from 'axios';
import _ from 'lodash';

export default class AppLaunchService {
  constructor() {
    this.url = 'https://applaunch.ng.bluemix.net/applaunch/v1/apps/';
    this.isInitialized = false;
    this.isUserRegistered = false;
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
      axios.post(`${baseurl}devices`, deviceData, {
        headers: {
          clientSecret: this.clientsecret,
          'Content-Type': 'application/json',
        },
      }).then((RegistrationRes) => {
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
          const result = JSON.stringify(res.data);
          this.features = result.features;
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
    }));
    return promise;
  }

  hasFeatureWith(code) {
    console.log('ALlib: hasFeatureWith');
    let hasFeature = false;
    for (let i = 0; i < this.features.length; i += 1) {
      if (code === this.features[i].code) {
        hasFeature = true;
        break;
      }
    }
    return hasFeature;
  }

  getValueFor(featureWithCode, propertyWithCode) {
    console.log('ALlib: getValueFor');
    let val = '';
    for (let i = 0; i < this.features.length; i += 1) {
      if (featureWithCode === this.features[i].code) {
        const properties = this.features[i].properties;
        for (let j = 0; j < properties.length; j += 1) {
          if (propertyWithCode === properties[j].code) {
            val = properties[j].value;
            break;
          }
        }
      }
    }
    return val;
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

