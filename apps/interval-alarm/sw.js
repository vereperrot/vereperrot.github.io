var cacheName = 'interval-alarm-pwa';
var filesToCache = [
  '/',
  '/apps/interval-alarm/index.html',
  '/apps/interval-alarm/about.html',
  '/apps/interval-alarm/settings.html',
  '/apps/interval-alarm/css/font-awesome.min.css',
  '/apps/interval-alarm/css/font-family-allerta-stencil.css',
  '/apps/interval-alarm/css/HTx0L209KT-LmIE9N7OR6eiycOe1_Db2.woff2',
  '/apps/interval-alarm/css/w3.css',
  '/apps/interval-alarm/fonts/fontawesome-webfont.eot',
  '/apps/interval-alarm/fonts/fontawesome-webfont.svg',
  '/apps/interval-alarm/fonts/fontawesome-webfont.ttf',
  '/apps/interval-alarm/fonts/fontawesome-webfont.woff',
  '/apps/interval-alarm/fonts/fontawesome-webfont.woff2',
  '/apps/interval-alarm/js/main.js',
  '/apps/interval-alarm/snd/alarm.mp3',
  '/apps/interval-alarm/snd/alarm.ogg',
  '/apps/interval-alarm/snd/alarm.wav'
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
