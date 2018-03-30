// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  const selectedHeight = $('#input_height').val();
  const selectedWidth = $('#input_width').val();
  const myTable = $('#pixel_canvas');
  const newRow = $('<tr>');
  const newCell = $('<td>');
  //Check input values
  if (selectedHeight < 1 || selectedHeight > 50 || selectedWidth < 1 || selectedWidth > 50) {
    alert('Height and width must be values between 1 and 50');
    return false;
  }
  //Remove old myTable
  $(myTable).children().remove();
  for (let columns = 0; columns < selectedWidth; columns++) {
      $(newRow).append(newCell.clone());
  }
  for (let rows = 0; rows < selectedHeight; rows++) {
      $(myTable).append(newRow.clone());
      }
}

$('input[type=submit]').on('click', function(event) {
  event.preventDefault();
  makeGrid();
});

$('#colorPicker').on('change', function(event) {
  selectedColour = $('#colorPicker').val();
  return selectedColour;
});

$('#pixel_canvas').on('mousedown', 'td', function(event) {
  selectedColour = $('#colorPicker').val();
  $(this).css('background-color', selectedColour);
});
