'use strict';
/**
 * @description: search for shops that match query and sort by distance
 * @author: Nicky
*/
/** search spec
 * name: string or undefined (don't care)
 * wifi: true / false (don't care)
 * plug: true / false (don't care)
 * coffee: 0 ~ 5 / undefined (don't care)
 * price: same
 * quiet: same
 * mrt: id, only used for sorting
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
  let result = shops
    .filter(nameFilter)
    .filter(wifiPlugFilter)
    .filter(coffeePriceQuietFilter);
  // sort result by distance and MRT

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
  if (_query.coffee) coffeeOK = (_query.coffee <= shop.coffee);
  else coffeeOK = true;
  if (_query.price) priceOK = (_query.price <= shop.price);
  else priceOK = true;
  if (_query.quiet) quietOK = (_query.quiet <= shop.quiet);
  else quietOK = true;
  return (coffeeOK && priceOK && quietOK);
};
