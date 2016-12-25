'use strict';
/**
 * @description: search for shops that match query and sort by distance
 * @author: Nicky
*/
/** search spec
 * name: string; empty string or undefined (don't care)
 * wifi: true / false (don't care)
 * plug: true / false (don't care)
 * coffee: 0 ~ 5 / undefined (don't care)
 * price: same
 * quiet: same
 * mrt: id, only used for sorting / undefined, don't sort the result
 */
let _query = {
  name: undefined,
  wifi: true,
  coffee: 4,
  price: 5,
  MRT: 1,
  plug: true,
  quiet: 3
};
function search(query) {
  _query = query;
  if (_query.name)
    // request for name; ignore other conditions
    return shops.filter(nameFilter);
  // name is undefined or ''; filter only by condition
  let result = shops
    .filter(wifiPlugFilter)
    .filter(coffeePriceQuietFilter);
  // sort result by distance and MRT
  if (_query.MRT !== undefined)
    result = result.sort(compareDist);
  return result;
}

function nameFilter(shop) {
  if (_query.name) return (_query.name === shop.name);
  else return true;
};
function wifiPlugFilter(shop) {
  if (_query.wifi)
    if (_query.plug)
      // ask for wifi and plug
      return (shop.wifi && shop.plug);
    else
      // ask for wifi only
      return (shop.wifi);
  else
    if (_query.plug)
      // ask for plug only
      return (shop.plug);
    else
      // ask for nothing
      return true;
};
function coffeePriceQuietFilter(shop) {
  let coffeeOK, priceOK, quietOK;
  if (_query.coffee !== undefined) coffeeOK = (_query.coffee <= shop.coffee);
  else coffeeOK = true;
  if (_query.price !== undefined) priceOK = (_query.price <= shop.price);
  else priceOK = true;
  if (_query.quiet !== undefined) quietOK = (_query.quiet <= shop.quiet);
  else quietOK = true;
  return (coffeeOK && priceOK && quietOK);
};
function compareDist(a, b) {
  return a.distances[_query.MRT] - b.distances[_query.MRT];
}