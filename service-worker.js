const CACHE_NAME = "pwa-calendar-v1";
const ASSETS = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/manifest.json",
    "/service-worker.js",
    "/images/icon-192.png",
    "/images/icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});