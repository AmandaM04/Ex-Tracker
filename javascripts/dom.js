// Writing to the dom
const exOutputDiv = $('#exSpot');
const locationOutputDiv = $('#exLocation');

const writeEx = (exes) => {
  exes.forEach((ex) => {
    let domStrang = '';
    domStrang += `<div class="card">`;
    domStrang += `<img class="img-rounded" src="${ex.image}" width="50%">`;
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

module.exports = {
  writeEx,
  writeLocations,
};
