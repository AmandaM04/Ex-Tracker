// Attaching all event listeners
// $(':button').click(function () {
//   if (this.id === 'Morning') {
//     console.log('Morning clicked');
//   }
//   if (this.id === 'Afternoon') {
//     console.log('Afternoon clicked');
//   }
//   if (this.id === 'Evening') {
//     console.log('Evening clicked');
//   }
//   else if (this.id === 'After Dark') {
//     console.log('After Dark clicked');
//   }
// });

// const filterLocations = () => {
//   $('btn').on('click', () => {
//     $('#locateMe .location-card').show();
//     const button = $(event.target).html();
//     if (button === 'Morning') {
//       $('#locateMe').not('.Morning').toggle();
//     } else if (button === 'Afternoon') {
//       $('#locateMe .location-card').not('.Afternoon').toggle();
//     } else if (button === 'Evening') {
//       $('#locateMe .location-card').not('.Evening').toggle();
//     } else if (button === 'After-Dark') {
//       $('#locateMe .location-card').not('.After-Dark').toggle();
//     }
//   });
// };

// jQuery.expr[':'].iContains = function (a, i, m) {
//   return jQuery(a).text().toUpperCase()
//     .indexOf(m[3].toUpperCase()) >= 0;
// };

// const letsSearch = () => {
//   $('#search').keypress((event) => {
//     if (event.which === 13) {
//       const userInput = $('#search').val();
//       $(`#exLocation .locCard:not(:iContains(${userInput}))`).hide();
//     }
//   });
// };

// $('.clickCard').click((e) => {
//   /* data.singlePup is a function that returns a promise */
//   alert($('.clickCard').index(this));
//   // data.singlePup().then((pup) => {
//   //   dom.printPup(pup);
//   // });
// });

module.exports = {
  // letsSearch,
};
