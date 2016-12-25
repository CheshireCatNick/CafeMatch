var slider1 = new Slider("#coffee", {
    ticks: [1, 2, 3, 4, 5],
    ticks_labels: ['1', '2', '3', '4', '5'],
    ticks_snap_bounds: 30
});
var slider2 = new Slider("#quiet", {
    ticks: [1, 2, 3, 4, 5],
    ticks_labels: ['1', '2', '3', '4', '5'],
    ticks_snap_bounds: 30
});
var slider3 = new Slider("#price", {
    ticks: [1, 2, 3, 4, 5],
    ticks_labels: ['$50', '$100', '$150', '$200', '$250'],
    ticks_snap_bounds: 30,
    step: 1
});

let _id = undefined;

function selectMRT(id) {
  // alert('MRT station ' + id + ' is selected.');
  _id = id;
  $('#modal-btn').html(mrts[id].station);
  // close modal
  $('#mrt-modal').modal('hide');
  return false;
}
function reset() {
  $('#name').val('');
  $('#wifi').prop('checked', false);
  $('#outlet').prop('checked', false);
  slider1.setValue(1);
  slider2.setValue(1);
  slider3.setValue(5);
  _id = undefined;
  $('#modal-btn').html('Select MRT');
}

function submit() {
  let name = document.getElementById('name').value;
  let wifi = document.getElementById('wifi').checked;
  let outlet = document.getElementById('outlet').checked;
  let coffee = slider1.getValue();
  let quiet = slider2.getValue();
  let price = slider3.getValue();

  let query = {
    name: name,
    wifi: wifi,
    coffee: coffee,
    price: 6 - price,
    MRT: (_id) ? mrts[_id] : undefined,
    plug: outlet,
    quiet: quiet 
  };
  const result = search(query);
  // console.log(result);
  if (_id)
    showSearchResult(result, mrts[_id].pos);
  else
    showSearchResult(result, undefined);


}