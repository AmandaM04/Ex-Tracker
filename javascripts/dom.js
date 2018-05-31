// Writing to the dom
const exOutputDiv = $('#exSpot');
const locationOutputDiv = $('#exLocation');
const mainOutputDiv = $('#main');

const writeEx = (exes) => {
  exes.forEach((ex) => {
    let domStrang = '';
    domStrang += `<div class="card">`;
    domStrang += `<img class="img-rounded images" src="${ex.image}" width="50%">`;
    domStrang += `<h1>${ex.name}</h1>`;
    domStrang += `<p>Age: ${ex.age}</p>`;
    domStrang += `<p>Flaws: ${ex.flaws}</p>`;
    domStrang += `</div>`;
    printToDom(domStrang);
  });
};

const writeLocations = (locations) => {
  locations.forEach((location) => {
    let domString = '';
    domString += `<div class="locCard ${location.timeThatExNormallyGoes}">`;
    domString += `<img src="${location.locationImage}" width="40%">`;
    domString += `<p>${location.name}</p>`;
    domString += `<p>${location.locationAddress}</p>`;
    domString += `<p>${location.timeThatExNormallyGoes}</p>`;
    domString += `</div>`;
    printToDom2(domString);
  });
};

const printToDom = (exes) => {
  exOutputDiv.append(exes);
};

const printToDom2 = (locations) => {
  locationOutputDiv.append(locations);
};

// should my printEx actually be the smashExCations
const printEx = (ex, locations) => {
  let exString = '';
  exString += `<div class="container-fluid">`;
  exString += `<div class="col-md-8 col-md-offset-2 singleEx text-center">`;
  exString += `<button class="clickCard">Back</button>`;
  exString += `<img src="${ex.image}" width="40%">`;;
  exString += `<h1>${ex.name}</h1>`;
  exString += `<p>Age: ${ex.age}</p>`;
  exString += `<p>Flaws: ${ex.flaws}</p>`;
  exString += `</div>`;
  exString += `</div>`;

  ex.places.forEach((place) => {
    locations.forEach((location) => {
      if (place === location.locationId) {
        exString += `<div class="col-sm-4">`;
        exString += `<img src="${location.locationImage}" width="40%">`;;
        exString += `<p>${location.name}</p>`;
        exString += `</div>`;
      }
    });
  });
  exString += `</div>`;
  replaceDom(exString);
};

const replaceDom = (exString) => {
  mainOutputDiv.html(exString);
};

module.exports = {
  writeEx,
  writeLocations,
  printEx,
};
