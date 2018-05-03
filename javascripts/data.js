// Error and success functions for AJAX call
const loadEx = require('./ex');
const writeEx = require('./dom');

const whenExLoads = (data) => {
  // console.log('data', data);
  $('#exSpot').append(writeEx(data.ex));
};

const whenExFails = (error) => {
  console.log('error', error);
};

const initializer = () => {
  loadEx(whenExLoads, whenExFails);
};

module.exports = initializer;
