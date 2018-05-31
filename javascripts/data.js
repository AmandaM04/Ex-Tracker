// Error and success functions for AJAX call
const dom = require('./dom');
const events = require('./events');

const whenExLoads = () => {
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
  // let exes = [];
  // let locations = [];
  return whenExLoads()
    .then((exes) => {
      // exes = [...result,];
      dom.writeEx(exes);
      return whenLocationsLoads()
        .then((locations) => {
          dom.writeLocations(locations);
          return Promise.resolve(exes, locations);
        });
    });
};

const smashedData = () => {
  return whenLocationsLoads()
    .then((locations) => {
      dom.writeLocations(locations);
      return whenExLoads()
        .then((exes) => {
          dom.writeEx(exes);
          const exCationsSmash = dataSmash(exes, locations);
          console.error('what I need', exCationsSmash);
          return Promise.resolve(exCations);
        });
    });
};

const dataSmash = (exes, locations) => {
  const allData = [];
  // this is where the smash work happens
  exes.forEach((ex) => {
    const singleEx = ex;
    singleEx.relatedLocations = [];
    for (let i = 0; i < ex.places.length; i++) {
      locations.forEach((location) => {
        if (ex.places[i] === location.locationId) {
          singleEx.relatedLocations.push(location);
        };
      });
    };
    allData.push(singleEx);
  });
  return allData;
};

const initializer = () => {
  exCations();
  events.letsSearch();
  events.filterLocations();
};

module.exports = {
  initializer,
  smashedData,
};
