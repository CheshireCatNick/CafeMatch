'use strict';
/**
 * @description: search for shops that match query and sort by distance
 * @author: Nicky
*/
let query = {
  name: undefined,
  wifi: true,
  coffee: 4,
  price: 5,
  MRT: 1,
  plug: true,
  quiet: 3
};
function search(query) {
  let result = shops
    .filter(nameFilter)
    .filter(wifiPlugFilter)
    .filter(coffeePriceQuietFilter);
  // sort result by distance and MRT
  return result;
}

function nameFilter(shop) {


};
function wifiPlugFilter(shop) {


};
function coffeePriceQuietFilter(shop) {


};
