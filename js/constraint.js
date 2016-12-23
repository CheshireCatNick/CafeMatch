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
function submit() {
  let name = document.getElementById('name').value;
  let wifi = document.getElementById('wifi').checked;
  let outlet = document.getElementById('outlet').checked;
  let coffee = slider1.getValue();
  let quiet = slider2.getValue();
  let price = slider3.getValue();
  console.log(name);
  console.log(wifi);
  console.log(outlet);
  console.log(coffee);console.log(quiet);console.log(price);
  let query = {
    name: name,
    wifi: wifi,
    coffee: coffee,
    price: 6 - price,
    MRT: undefined,
    plug: outlet,
    quiet: quiet 
  };
  const result = search(query);
  // console.log(result);
  showSearchResult(result, mrts[0].pos);


}