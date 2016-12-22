var mrtMaker = [];
var map;
var mapCenter;



var infoWindow = null; // 設定氣泡框 (message bubble)，顯示地標相關的資訊
var markerShops = [];   // 設定標記叢集 (marker clusterer)
mapCenterTry = undefined
//{lat: 25.0261342, lng: 121.522922};

function initMap() {
      /* put in drop func*/
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 25.0373, lng: 121.5287}
  });
  
  console.log(mrts);
  infoWindow = new google.maps.InfoWindow("");
}

//Use this function
function trySearchResult(){
  showSearchResult(shops,mapCenterTry);
}

function showSearchResult(searchResult,center){
  clearMarkers();
  

  //看有無選取mrt
  if(center !== undefined){
    map.setCenter(center);
    map.setZoom(18);
  } else{
    map.setCenter({lat: 25.0373, lng: 121.5287});
    map.setZoom(13);
  }
  


  for ( var i = 0; i < searchResult.length; i++){
    console.log(searchResult.id);

    shopIcon = {
      url: 'https://cheshirecatnick.github.io/CafeMatch/data/cafe.png',
      scaledSize: new google.maps.Size(30, 30), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    var markerShop = new google.maps.Marker({
        position: searchResult[i].pos,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: shopIcon
    });
    markerShop.setMap(map);
    markerShops.push(markerShop);
    var html = "<h3>" + searchResult[i].name + "</h3><p>" + "營業時間: "+ searchResult[i].time +"</p><p>" +"地址: "+ searchResult[i].address +"</p><p>" +"網頁: "+ searchResult[i].web +"</p>";
    bounce(markerShop, map);
    bindInfoWindow(markerShop, map, infoWindow, html);
  }
}

function bounce(markerShop, map){
  google.maps.event.addListener(markerShop, 'click',function() {
      if (markerShop.getAnimation() !== null) {
        markerShop.setAnimation(null);
      } else {
        markerShop.setAnimation(google.maps.Animation.BOUNCE); 
   }});
}
// 設定地圖標記 (marker) 點開後的對話氣泡框 (message bubble)
function bindInfoWindow(markerShop, map, infoWindow, html) {
  // 除了 click 事件，也可以用 mouseover 等事件觸發氣泡框顯示
  google.maps.event.addListener(markerShop, 'mouseover', function() { 
  infoWindow.setContent(html);
  infoWindow.open(map, markerShop);
   });
}

function toggleBounce(){
  if (markerShop.getAnimation() !== null) {
  markerShop.setAnimation(null);
} else {
  markerShop.setAnimation(google.maps.Animation.BOUNCE);
}
}


function clearMarkers() {
  for (var i = 0; i < markerShops.length; i++) {
    markerShops[i].setMap(null);
  }
  markerShops = [];
}

/*I think map already show the info of mrt*/

function drawMrt(mrtdata){
    
  for (var i = 0; i < mrtdata.length; i++){
    mrtIcon = {
      url: './data/mrt.png',
      scaledSize: new google.maps.Size(20, 20), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    
    marker_mrt = new google.maps.Marker({
      position: mrtdata[i].pos,
      map: map,
      label: mrtdata[i].station,
      icon: mrtIcon
    });
    marker_mrt.setMap(map);

    mrtMaker.push(marker_mrt);
  }
}