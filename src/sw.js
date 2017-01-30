import 'regenerator-runtime/runtime';

var CACHE_NAME = 'fika-cache-v1';
var urlsToCache = [
  '/',
  '/index.js',
  'https://uosdxsnu6j.execute-api.eu-central-1.amazonaws.com/latest/all',
  'https://fonts.googleapis.com/css?family=Nunito'
];


self.addEventListener('install', function (event) {
  event.waitUntil(addToCache());

  async function addToCache() {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(urlsToCache);
  }
});

self.addEventListener('fetch', function (event) {
  event.respondWith(getResponse());

  async function getResponse() {
    const hit = await caches.match(event.request);
    if (hit) {
      return hit;
    }

    // Clone request stream
    const fetchRequest =  event.request.clone();
    try {
      const response = await fetch(fetchRequest);
      // Cache here
      return response;
    } catch (error) {
      console.log('No response for request', event.request);
    }
  }
});
