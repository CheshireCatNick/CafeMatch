'use strict';
/**
 * @description: update information div
 * @author: Nicky
*/
/*
<tr>
  <td>key</td>
  <td>value</td>
<tr>
*/
function updateInfo(shop) {
  const table = document.getElementById('info-table');
  table.innerHTML = '';
  let context = '';
  const info = [];
  info.push({ key: 'Name', value: shop.name });
  info.push({ key: 'Open', value: (shop.time) ? shop.time : 'unknown' });
  info.push({ key: 'Closest MRT Station', value: shop.mrt });
  info.push({ key: 'Wifi', value: (shop.wifi) ? 'yes' : 'no' });
  info.push({ key: 'Outlet', value: (shop.plug) ?  'yes' : 'no' });

  info.push({ key: 'Address', value: shop.address });
  info.push({ key: 'Website', value: (shop.web) ? `<a href="${shop.web}">${shop.web}</a>` : '無'});

  for (let i of info) {
    context += '<tr>';
    context += `<td>${i.key}</td>`;
    context += `<td>${i.value}</td>`;
    context += '</tr>';
  }
  table.innerHTML = context;
}
function resetInfo() {
  $('#info-table').html('');
}