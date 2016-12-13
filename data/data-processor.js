'use strict';
/*
 * @description: process data
 * @author: Nicky
 */
const shops = require('./shop-data');
const mrts = require('./mrt-data');

// return square distance from two pos
function calcDistance(pos1, pos2) {
  let a = pos1.lat, b = pos1.lng;
  let c = pos2.lat, d = pos2.lng;
  return (a - c) * (a - c) + (b - d) * (b - d);
}

function makeDistances() {
  for (let shop of shops) {
    let distances = [];
    for (let mrt of mrts)
      distances.push(calcDistance(shop.pos, mrt.pos))
    shop.distances = distances;

    
    // check if this is the closest mrt
    /*
    let min = shop.distances[0];
    let id = 0;
    for (let i = 0; i < mrts.length; i++)
      if (shop.distances[i] < min) {
        min = shop.distances[i];
        id = i;
      }
    if (id != shop.mrt_id)
      console.log(shop.id);
    */
  }
}

function modifyIDPos() {
  for (let shop of shops) {
    shop.availibility = shop.avaliblility;
    delete shop.avaliblility;
    //shop.mrt_id = shop.mrt_id - 1;
  }

}


modifyIDPos();
//makeDistances();
console.log(shops);