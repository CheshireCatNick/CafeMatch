var mrtMaker = [];
var map;
var mapCenter;

var infoWindow = null;  // 設定氣泡框 (message bubble)，顯示地標相關的資訊
var markerShops = [];   // 設定標記叢集 (marker clusterer)
mapCenterTry = undefined

function initMap() {
  /* put in drop func*/
  const withoutPOI = [{
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  }];
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 25.0373, lng: 121.5287},
    styles: withoutPOI
  });
  
  // console.log(mrts);
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
    map.setZoom(16);
  } else{
    map.setCenter({lat: 25.0373, lng: 121.5287});
    map.setZoom(13);
  }
  
  for ( var i = 0; i < searchResult.length; i++){
    //console.log(searchResult[i].id);
    shopIcon = {
      //url: 'https://cheshirecatnick.github.io/CafeMatch/data/cafe.png',
      url: './pic/cafe.png',
      scaledSize: new google.maps.Size(35, 35), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    var markerShop = new google.maps.Marker({
        position: searchResult[i].pos,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: shopIcon
    });
    markerShop.shop = searchResult[i];
    markerShop.setMap(map);
    markerShops.push(markerShop);
    var html = "<h3>" + searchResult[i].name + "</h3><p>"
                + "營業時間: "+ searchResult[i].time +"</p><p>"
                + "地址: "+ searchResult[i].address +"</p><p>" 
                + `<a href="${searchResult[i].web}">網頁</a>` +"</p>";
    addListener(markerShop, map);
    bindInfoWindow(markerShop, map, infoWindow, html);
  }
}

function addListener(markerShop, map) {
  google.maps.event.addListener(markerShop, 'click', () => {
    if (markerShop.getAnimation() !== null) {
      // bouncing
      markerShop.setAnimation(null);
      removeShopData(markerShop.shop);
    }
    else {
      // not bouncing
      markerShop.setAnimation(google.maps.Animation.BOUNCE);
      addShopData(markerShop.shop);
    }
    // update info
    updateInfo(markerShop.shop);
  });
}
// 設定地圖標記 (marker) 點開後的對話氣泡框 (message bubble)
function bindInfoWindow(markerShop, map, infoWindow, html) {
  // 除了 click 事件，也可以用 mouseover 等事件觸發氣泡框顯示
  google.maps.event.addListener(markerShop, 'mouseover', () => { 
    infoWindow.setContent(html);
    infoWindow.open(map, markerShop);
  });
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
      url: './pic/mrt.png',
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