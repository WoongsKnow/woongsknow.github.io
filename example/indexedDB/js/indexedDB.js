let db;
let airbnbRequest = window.indexedDB.open('airbnb', 2);
console.log('airbnbRequest', airbnbRequest);
airbnbRequest.onsuccess = (event) => { // request.result 에 대해 무언가를 한다!
  console.log('onsuccess');
  db = event.target.result;
  console.log(db); // let store = db.createObjectStore('test', {keyPath: 'id'});
  let tracsaction = db.transaction(['room']);
  console.log('tracsaction', tracsaction);
  let objectStore = tracsaction.objectStore('room');
  console.log('objectStore', objectStore);
  let data = objectStore.getAll();
  console.log(data);
};
airbnbRequest.onupgradeneeded = (event) => {
  console.log('onupgradeneeded')
  const db = event.target.result;
  var objectStore = db.createObjectStore("room", { keyPath: "roomId" });
  objectStore.createIndex('roomId', 'roomId', { unique: true,  });
  objectStore.createIndex('name', 'name', { unique: false, });
  objectStore.createIndex('image', 'image', { unique: false, });

  for (let i in roomData) {
    objectStore.add(roomData[i]);
  }
  console.log(objectStore);
};
airbnbRequest.onerror = (event) => { // request.errorCode 에 대해 무언가를 한다!
  console.log('onerror');
};