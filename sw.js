const cacheName = 'my-site-cache-v1';
const urlsToCache = [
  '/pokeemu/',
  '/pokeemu/terms.html',
  '/pokeemu/readme.md'
  '/pokeemu/icon/fox.png',
  '/pokeemu/index.js',
  '/pokeemu/style.css',
  '/pokeemu/icon/fox.png',
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
