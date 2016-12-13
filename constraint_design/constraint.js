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
    ticks: [0, 100, 200, 300, 400],
    ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
    ticks_snap_bounds: 30,
    step: 100
});
function search() {
  console.log("test");
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
    price: price,
    MRT: 1,
    plug: outlet,
    quiet: quiet 
  };
}