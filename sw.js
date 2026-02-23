const CACHE_NAME = 'adeline-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Network first for Firebase requests
  if (event.request.url.includes('firestore') || event.request.url.includes('googleapis')) {
    return event.respondWith(fetch(event.request).catch(() => new Response('', { status: 503 })));
  }
  // Cache first for app shell
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
