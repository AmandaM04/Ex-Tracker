// Writing to the dom
const writeEx = (ex) => {
  let domstring = '';
  domstring += `<div>`;
  domstring += `<img src="${ex.image}">`;
  domstring += `<p>${ex.name}</p>`;
  domstring += `<p>${ex.age}</p>`;
  domstring += `<p>${ex.flaws}</p>`;
  domstring += `</div>`;
  return domstring;
};

module.exports = writeEx;
