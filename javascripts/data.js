// Error and success functions for AJAX call
const loadEx = require('./ex');
const loadLocations = require('./locations');
const writeBoth = require('./dom');

const whenExLoads = (data) => {
  // console.log('data', data);
  $('#exSpot').append(writeBoth.writeEx(data.ex));
};

const whenLocationsLoads = (data) => {
  // console.log('data', data);
  $('#exLocation').append(writeBoth.writeLocations(data.locations));
};

const whenFails = (error) => {
  console.log('error', error);
};

const initializer = () => {
  loadEx(whenExLoads, whenFails);
  loadLocations(whenLocationsLoads, whenFails);
};

module.exports = initializer;
