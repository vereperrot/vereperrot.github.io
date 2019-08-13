var cacheName = 'interval-alarm-pwa';
var filesToCache = [
  '/',
  '/apps/interval-alarm/index.html'

];
//console.log('in sw.js');
/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
        //console.log('install');
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
        //console.log('fetch');
      return response || fetch(e.request);
    })
  );
});
