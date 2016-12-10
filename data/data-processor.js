'use strict';
/*
 * @description: process data
 * @author: Nicky
 */
const shops = require('./shop-data');
const mrts = require('./mrt-data');

// return square distance from two pos
function calcDistance(pos1, pos2) {
  let a = pos1.lat, b = pos1.lon;
  let c = pos2.lat, d = pos2.lon;
  return (a - c) * (a - c) + (b - d) * (b - d);
}

function makeDistances() {
  for (let shop of shops) {
    let distances = [];
    for (let mrt of mrts)
      distances.push(calcDistance(shop.pos, mrt.pos))
    shop.distances = distances;

    
    // check if this is the closest mrt
    let min = shop.distances[0];
    let id = 0;
    for (let i = 0; i < mrts.length; i++)
      if (shop.distances[i] < min) {
        min = shop.distances[i];
        id = i;
      }
    if (id != shop.mrt_id)
      console.log(shop.id);
    
  }
}

function modifyIDPos() {
  for (let shop of shops) {
    shop.id = shop.id - 1;
    let newPos = {
      lat: shop.pos.lat,
      lng: shop.pos.lon
    };
    shop.pos = newPos;
    shop.mrt_id = shop.mrt_id - 1;
    shop.distances = shop.distances.slice(1, shop.distances.length);
  }
}
modifyIDPos();
console.log(shops);