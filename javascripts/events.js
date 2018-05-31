// Attaching all event listeners

const filterLocations = () => {
  $('.btn').on('click', () => {
    $('#exLocation .locCard').show();
    const button = $(event.target).html();
    if (button === 'Morning') {
      $('#exLocation .locCard').not('.Morning').toggle();
    } else if (button === 'Afternoon') {
      $('#exLocation .locCard').not('.Afternoon').toggle();
    } else if (button === 'Evening') {
      $('#exLocation .locCard').not('.Evening').toggle();
    } else if (button === 'After Dark') {
      $('#exLocation .locCard').not('.After-Dark').toggle();
    }
  });
};

jQuery.expr[':'].iContains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const letsSearch = () => {
  $('#search').keypress((event) => {
    if (event.which === 13) {
      const userInput = $('#search').val();
      $(`#exLocation .locCard:not(:iContains(${userInput}))`).hide();
    }
  });
};

const clickEx = () => {
  $(document).on('click', '.singleEx',(e) => {
  });
  clickEx();
};

module.exports = {
  letsSearch,
  filterLocations,
};
