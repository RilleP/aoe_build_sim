'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "26ab0db90d72e28ad0ba1e22ee510510",
"/.git/config": "9998c730b2a4c930291260d783a4d194",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "f4e486c0f5a0ce414004d10afd0fe3be",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "6e845c9827c463cd5a92289220d23299",
"/.git/logs/refs/heads/master": "6e845c9827c463cd5a92289220d23299",
"/.git/logs/refs/remotes/origin/master": "97c89443d9a6253756a96acb86286321",
"/.git/objects/08/ad2df9e55363cd1fc5f41399fcbafffb6fd91c": "681708318b6e4ae70d305023c8f88850",
"/.git/objects/0d/c0d72c862c86ac74b9530d9990edee30c10c3d": "0a36bebc853df47dc2e1dc085401102a",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/0f/e645bd96c23c15b03cfbc7feaf85a8a731931d": "712f2ee05db46ba9161a348db9039c68",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/20/a5c7381b49b6206a2e04309c0ec6fbf557e9b4": "5bf1b23a72be29ca11d226f3d2e1cf71",
"/.git/objects/25/36f8235549d302208329e228808fe8e3b0d66a": "979a2381ff019d9c2ca783fe12378aea",
"/.git/objects/26/29e47d9e3c7ed5c258ad7a76ff4819ad0e9806": "8be5bb1229033492b9331d6cd098fa24",
"/.git/objects/3c/c3b94925b8fa72c8b400f8c734fe1588ea6f34": "8c37d296c86fd8ec8e2d3ae11a84032e",
"/.git/objects/3e/3f8df2f50fed095ea9dba825b44e3e2e2f5d69": "f230cc0d5545accb2ba4a861808dfd68",
"/.git/objects/3f/17d680824fbf4472c28a18ef893bd5ee4f5ae2": "492e8f76061456258a5893af2413673c",
"/.git/objects/4c/b72fcd4fffe4787b105f68e782ed0b3e4b329f": "460060dc908c5789471333599b6ae79f",
"/.git/objects/57/f7b82a40c0b19f7017bc965da570fce6749164": "57c94d5c263372a5288da9e81e18b92b",
"/.git/objects/58/a27ea0b72142ceb9ea33400f2efb72670a694c": "be213eeb4b4aac2d5830b2e0273439c1",
"/.git/objects/5c/d7410fed9f81ee6a0c161d15e9fe0f2698f5f5": "f52e519d6e486095a9e527a7aaf10940",
"/.git/objects/6a/1b0edfa5e2b6e52697fb708f9fdd0ceb2e5640": "ce90454f2585ded7fce82e0a02aed555",
"/.git/objects/6a/464059c97e2a83828d793ce25c2f60e84bed7f": "5505c5b5ae796ed5344a9640c5688b87",
"/.git/objects/79/0c1cc5045c8f7a4a2c0a9e64a9780180ff041e": "80e8d1a7d78571d21cd69b86525c53ad",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/82/03dcb3043f1d39ab065275fe3aba46a0e7fa89": "598e6969bba1996e6d249264ba76a478",
"/.git/objects/86/6dbc33a4c0daf69b0f945957e070dc3ee99211": "a12c84def1044d5579f152fc5ce9ccdd",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/17a090fc847484740ba4c66977e67d9e31fd34": "b77e4c2631defae647634714ce8f181c",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/99/25689c67b8fb56952ced00162208b0c27db750": "eb7042fc4aad96565e2c27928f6784ae",
"/.git/objects/a2/843419086ec76aef8be67dc70d14d837a38e6e": "25605d696200b256e26d89953ba4cd21",
"/.git/objects/a6/c539319c2a47c949ff23d7e6b0586ba7dc5ae6": "7bd26ec05c0dc43133b29e2ecf68c0a4",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/c2/b7211abfee62a57866cbdcd843f7f75124e318": "c3dc222beb1264fcf354152e89a00a5b",
"/.git/objects/ca/58ac2ced98e00b954b4c2f93a0a8acef41a6f4": "e3f8911c1fb052db2367ef3c5e9e0683",
"/.git/objects/d2/6b310d878a2cc05d97dd2d3250fdffe7df930a": "5df14c6ff825c5603b49b31f385b078b",
"/.git/objects/d5/907cd662dfa3eef6ce299c107dac70e8e4fd04": "f2c7fa167a84a79ef8d9faa8c822018e",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/e1/ad73c83f5a04dcf8bb58b6b61fd748eab77914": "d953bf2b5d53f35b41d800c4817d6dcc",
"/.git/objects/e5/6495d8aa2faadad86d5a7b83bf01bed3174627": "fdcbffb5a37036b71f04bce1ee2575e1",
"/.git/objects/f2/c1c2a9c52aa62a1a6f47b688c7c586add55be6": "374485221134602a51bc730b44393283",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/fd/a82c5ae2d2f80e1de0ea6b7fb54639a7b3e384": "f3bd31093a561ae84bfdb262a8893319",
"/.git/refs/heads/master": "0017bbcf5475696b63ab40a198fdaed8",
"/.git/refs/remotes/origin/master": "0017bbcf5475696b63ab40a198fdaed8",
"/assets/AssetManifest.json": "be1623071a6ad223b4629adbdb5ea597",
"/assets/assets/berries.jpg": "b5fe4d39ba9124bce222ebc9e5938e16",
"/assets/assets/boar_lured.jpg": "6aad75f0f43a276bf6b7e2701d91dc96",
"/assets/assets/boar_lured.jpg~": "a5f00f05a2f483590107105fb96bad1d",
"/assets/assets/build.png": "de40a3e093f49c6b7b8c430ce1e63eb5",
"/assets/assets/castleage.png": "11c2798b409814cf25f87f8789cc718e",
"/assets/assets/events.png": "06ef558f91588fef4f8cce98f0248c0c",
"/assets/assets/farm.jpeg": "e9e5cd73272bd31607e20450f56ce798",
"/assets/assets/feudalage.png": "647153d60355d3656bdfe6f832aac8a8",
"/assets/assets/gold.png": "2a9b9ee84070b31f06da2b8a826a2224",
"/assets/assets/house.png": "f031e9cb118f46ca950b11d6d828652c",
"/assets/assets/idle.png": "6ee93cac1d13422eb5bb4353803456a6",
"/assets/assets/imperialage.png": "fe22f13eb021d92661ab0be119192dfb",
"/assets/assets/loom.jpg": "35acf38e6ba506904ab6fb7b9d91f2de",
"/assets/assets/lumbercamp.jpeg": "503e466dcde8f196366478fdfd7e4665",
"/assets/assets/lure_boar.jpg": "2ce48b139d2586be884ab0da116571cf",
"/assets/assets/lure_boar2.jpg": "0c1090040d787f0415a6585bdd6a6f46",
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
"/assets/LICENSE": "b1a5775006f3853aa8fc79becd0ce655",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/file_saver.js": "ad18ad953b201d277419d884ea63f962",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "98e3b880dd8f6d5f7568bdec562c9e68",
"/main.dart.js": "83c6be3d74b5ece030aba35f514dc323",
"/manifest.json": "3d29fe1c1d07958b8e30e6fee2c409a1"
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
