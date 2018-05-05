// Writing to the dom
const writeEx = (ex) => {
  let domstring = '';
  domstring += `<div class="card">`;
  domstring += `<img class="img-rounded" src="${ex.image}" width="50%">`;
  domstring += `<h1>${ex.name}</h1>`;
  domstring += `<p>Age: ${ex.age}</p>`;
  domstring += `<p>Flaws: ${ex.flaws}</p>`;
  domstring += `</div>`;
  return domstring;
};

const writeLocations = (locations) => {
  let domstring = '';
  locations.forEach((location) => {
    domstring += `<div class="locCard">`;
    domstring += `<img src="${location.locationImage}" width="40%">`;
    domstring += `<p>${location.name}</p>`;
    domstring += `<p>${location.locationAddress}</p>`;
    domstring += `<p>${location.timeThatExNormallyGoes}</p>`;
    domstring += `</div>`;
  });
  return domstring;
};

module.exports = {
  writeEx,
  writeLocations,
};
