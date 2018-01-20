import axios from 'axios';

const bikesUrl = 'https://my-json-server.typicode.com/SangeetManghnani/vroom/bikes';
const scootersUrl = 'https://my-json-server.typicode.com/SangeetManghnani/vroom/scooters';

export function getAllBikes(callback) {
  axios.get(bikesUrl)
    .then(response => response.data)
    .then((allBikes) => {
      console.log(`all bikes ${JSON.stringify(allBikes)}`);
      callback(null, allBikes);
    })
    .catch((err) => {
      console.log(`error in getting bikes ${JSON.stringify(err)}`);
      callback(err);
    });
}

export function getAllScooters(callback) {
  axios.get(scootersUrl)
    .then(response => response.data)
    .then((allScooters) => {
      console.log(`all scooters ${JSON.stringify(allScooters)}`);
      callback(null, allScooters);
    })
    .catch((err) => {
      console.log(`error in getting scooters ${JSON.stringify(err)}`);
      callback(err);
    });
}
