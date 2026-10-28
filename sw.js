const CACHE_NAME = 'mates-primaria-v2'; // Sube la versión aquí cuando hagas cambios importantes
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instalación inmediata del Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Fuerza a tomar el control inmediatamente
});

// Activación y limpieza de cachés antiguas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Estrategia: Buscar primero en la red (si hay internet, trae la última versión), y si falla, tirar de caché (offline)
self.addEventListener('fetch', (e) => {
  e.responseWith = e.respondWith(
    fetch(e.request)
      .then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => caches.match(e.request))
  );
});
