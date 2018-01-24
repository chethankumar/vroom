import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

export default storage;

export function saveData(key, value) {
  storage.save({
    key,
    data: value,
  });
}

export function getData(key, callback) {
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

export function deleteData(key) {
  storage.remove({
    key,
  });
}