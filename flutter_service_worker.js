'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "727d98c650bb3f772a87a74814bdfb1d",
"/assets/assets/build.png": "de40a3e093f49c6b7b8c430ce1e63eb5",
"/assets/assets/castleage.png": "11c2798b409814cf25f87f8789cc718e",
"/assets/assets/farm.jpeg": "e9e5cd73272bd31607e20450f56ce798",
"/assets/assets/feudalage.png": "647153d60355d3656bdfe6f832aac8a8",
"/assets/assets/gold.png": "2a9b9ee84070b31f06da2b8a826a2224",
"/assets/assets/house.png": "f031e9cb118f46ca950b11d6d828652c",
"/assets/assets/idle.png": "6ee93cac1d13422eb5bb4353803456a6",
"/assets/assets/imperialage.png": "fe22f13eb021d92661ab0be119192dfb",
"/assets/assets/loom.jpg": "35acf38e6ba506904ab6fb7b9d91f2de",
"/assets/assets/lumbercamp.jpeg": "503e466dcde8f196366478fdfd7e4665",
"/assets/assets/mill.png": "291bc8c2fefc01d752b5a5e8a8a75bb9",
"/assets/assets/miningcamp.jpeg": "eae36a9ceb234b79ed8f002c04e2ab43",
"/assets/assets/stone.png": "fc69327fb79882289dd6e958fdcf5916",
"/assets/assets/tcfood.png": "a520ff2332c8d914c0f6e021fd4e4c7e",
"/assets/assets/towncenter.jpeg": "47ea9ccec6e0880a85ef9e43671d5670",
"/assets/assets/towncenter.jpg": "cc6ac9ba3f1d5f0f5614fa0ee2087d90",
"/assets/assets/villager_female.jpeg": "0bff1fd08b1a36b2408b03e7414930fe",
"/assets/assets/villager_male.jpeg": "ebe636f1512e41a5f091ec1b7170d6d7",
"/assets/assets/wood.png": "840f9b8b02bc91748a6c4134dec17fc1",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "ecb8b9561e492ab4bc0d3941e9c4f474",
"/main.dart.js": "11fa289e4c33357e798957d1461ad123",
"/manifest.json": "b54a2e1f5e854524dd66584926c3df5e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
