// Writing to the dom
const exOutputDiv = $('#exSpot');
const locationOutputDiv = $('#exLocation');
// const mainOutputDiv = $('#main');

const writeEx = (exes) => {
  exes.forEach((ex) => {
    let domStrang = '';
    domStrang += `<div class="card clickCard">`;
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
    domString += `<div class="locCard">`;
    domString += `<img src="${location.locationImage}" width="40%">`;
    domString += `<p class="search">${location.name}</p>`;
    domString += `<p class="search">${location.locationAddress}</p>`;
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

// const singleEx = () => {
//   let pup = {};
//   return getAllPups().then((pups) => {
//     pup = pups[0];
//     return Promise.all([firstFoodJSON(), secondFoodJSON(), thirdFoodJSON(),]);
//   }).then((foodz) => {
//     const allTheFood = [...foodz[0], ...foodz[1], ...foodz[2],];
//     const matching = allTheFood.filter((food) => {
//       if (pup.favFoodId === food.key) {
//         return true;
//       };
//       return false;
//     });
//     pup.favFood = matching;
//     return Promise.resolve(pup);
//   });
// };

// const printToDom3 = (singleEx) => {
//   mainOutputDiv.html(singleEx);
// };

module.exports = {
  writeEx,
  writeLocations,
};
