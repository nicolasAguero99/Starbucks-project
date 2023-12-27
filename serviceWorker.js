const staticStarbucks = "Starbucks-Cafe";
const assets = [
  "./",
  "./index.html",
  "./styles/style.css",
  "./js/app.js",

  "./assets/app-starbucks.png",
  "./assets/cafe-muffin-starbucks.png",
  "./assets/cafe-muffin-starbucks.png",
  "./assets/frappuccino-avellana-starbucks.png",
  "./assets/frappuccino-banana-starbucks.png",
  "./assets/frappuccino-chocolate-starbucks.png",
  "./assets/frappuccino-fresa-starbucks.png",
  "./assets/frappuccino-maple-starbucks.png",
  "./assets/frappuccino-nutella-starbucks.png",
  "./assets/frappuccino-vainilla-starbucks.png",
  "./assets/illustracion-cafe-starbucks.webp",
  "./assets/matcha-starbucks.png",
  "./assets/menu-mobile.png",
  "./assets/starbucks-amigos.jpg",
  "./assets/starbucks-local.jpg",
  "./assets/starbucks-logo.ico",
  "./assets/starbucks-logo.svg",
  "./assets/starbucks-playa-oscuro.jpg",
  "./assets/starbucks-vaso.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticStarbucks).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
