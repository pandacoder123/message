const cacheName = 'my-site-cache-v2';
const urlsToCache = [
  '/message/',
  '/message/terms.html',
  '/message/readme.md'
  '/message/icon/fox.png',
  '/message/index.js',
  '/message/style.css',
  '/message/icon/fox.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );
});
