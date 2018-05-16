// Error and success functions for AJAX call
const dom = require('./dom');

const whenExLoads = () => {
  // console.log('data', data);
  // $('#exSpot').append(writeBoth.writeEx(data.ex));
  return new Promise((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        resolve(data.exes);
      })
      .fail((error) => {
        reject('Something is not quite right!', error);
      });
  });
};

const whenLocationsLoads = () => {
  // console.log('data', data);
  // $('#exLocation').append(writeBoth.writeLocations(data.locations));
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((error) => {
        reject('Something is not quite right!', error);
      });
  });
};

const exCations = () => {
  let exes = [];
  let locations = [];
  return whenExLoads()
    .then((result) => {
      exes = [...result,];

      return whenLocationsLoads();
    }).then((result2) => {
      locations = [...exes, ...result2,];
      return Promise.resolve(exes, locations);
    }).catch((errorMsg) => {
      console.error(errorMsg);
    });
};
// const whenFails = (error) => {
//   console.log('error', error);
// };

const initializer = () => {
  exCations().then((exes, locations) => {
    dom.writeEx(exes);
    dom.writeLocations(locations);
  });
  // loadEx(whenExLoads, whenFails);
  // loadLocations(whenLocationsLoads, whenFails);
};

module.exports = initializer;
