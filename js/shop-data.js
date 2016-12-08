/*
 * @description: data of cofe shop
 */

// shop object example
const shop = {
  id: '0'
  name: 'shopName',
  hasWifi: true,
  seatAvailability: 2.5,
  quiet: 2.5,
  coffeeQuality: 2.5,
  price: 2.5
  decoration: 2.5
  distanceFromMRT: 2.5
  time: '09:00-18:00 (週二公休)',
  mrt: '大直',
  address: '台北市中山區北安路458巷41弄52號',
  hasTimeLimit: true,
  hasPlug: true,
  hasStandWorkPlace: true,
  recommender: 'Philip',
  comment: 'A nice place for studying~',
  webpage: 'https://www.facebook.com/puchispace',
  pos: {
    lat: 25.09,
    lan: 121.46
  }
};
// store all the shop data in a shop array
const shops = [];