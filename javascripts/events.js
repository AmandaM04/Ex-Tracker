// Attaching all event listeners
$(':button').click(function () {
  if (this.id === 'Morning') {
    console.log('Morning clicked');
  }
  if (this.id === 'Afternoon') {
    console.log('Afternoon clicked');
  }
  if (this.id === 'Evening') {
    console.log('Evening clicked');
  }
  else if (this.id === 'After Dark') {
    console.log('After Dark clicked');
  }
});
