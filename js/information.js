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
  info.push({ key: '店名', value: shop.name });
  info.push({ key: '營業時間', value: (shop.time) ? shop.time : '未知' });
  info.push({ key: '最近捷運站', value: shop.mrt });
  info.push({ key: 'Wi-Fi', value: (shop.wifi) ? '有' : '無' });
  info.push({ key: '插座', value: (shop.plug) ?  '有' : '無' });

  info.push({ key: '地址', value: shop.address });
  info.push({ key: '網頁', value: (shop.web) ? `<a href="${shop.web}">${shop.web}</a>` : '無'});

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