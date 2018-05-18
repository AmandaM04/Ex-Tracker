// Error and success functions for AJAX call
const dom = require('./dom');
const events = require('./events');

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
  // let exes = [];
  // let locations = [];
  return whenExLoads()
    .then((exes) => {
      // exes = [...result,];
      dom.writeEx(exes);
      return whenLocationsLoads();
    }).then((locations) => {
      // locations = [...exes, ...result2,];
      dom.writeLocations(locations);
      // return Promise.resolve(exes, locations);
    }).catch((errorMsg) => {
      console.error(errorMsg);
    });
};
// const whenFails = (error) => {
//   console.log('error', error);
// };

const initializer = () => {
  exCations();
  letsSearch();
  events.filterLocations();
  // loadEx(whenExLoads, whenFails);
  // loadLocations(whenLocationsLoads, whenFails);
};

jQuery.expr[':'].iContains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const letsSearch = () => {
  $('#search').keypress((event) => {
    if (event.which === 13) {
      $('.locCard').show();
      const userInput = $('#search').val();
      $(`#exLocation .locCard:not(:iContains(${userInput}))`).hide();
    }
  });
};

module.exports = initializer;
