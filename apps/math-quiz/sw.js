var cacheName = 'math-quiz-pwa';
var filesToCache = [
  '/',
  '/apps/math-quiz/index.html',
  '/apps/math-quiz/about.html',
  '/apps/math-quiz/settings.html',
  '/apps/math-quiz/easy-level.html',
  '/apps/math-quiz/hard-level.html',
  '/apps/math-quiz/play.html',
  '/apps/math-quiz/css/font-awesome.min.css',
  '/apps/math-quiz/css/font-family-allerta-stencil.css',
  '/apps/math-quiz/css/HTx0L209KT-LmIE9N7OR6eiycOe1_Db2.woff2',
  '/apps/math-quiz/css/w3.css',
  '/apps/math-quiz/fonts/fontawesome-webfont.eot',
  '/apps/math-quiz/fonts/fontawesome-webfont.svg',
  '/apps/math-quiz/fonts/fontawesome-webfont.ttf',
  '/apps/math-quiz/fonts/fontawesome-webfont.woff',
  '/apps/math-quiz/fonts/fontawesome-webfont.woff2',
  '/apps/math-quiz/js/main.js',
  '/apps/math-quiz/js/quiz.js',
  '/apps/math-quiz/js/stopwatch.js',
  '/apps/math-quiz/js/util.js',
  '/apps/math-quiz/snd/correct.mp3',
  '/apps/math-quiz/snd/wrong.mp3'
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
