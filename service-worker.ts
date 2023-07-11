const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = ['/', '/index.html', '/static/css/main.css', '/static/js/main.js'];

self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});