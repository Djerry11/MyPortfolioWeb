'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4c568efe989b7378b13c9226a6b51b87",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"/": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"main.dart.js": "325729305b1ee2a6a294abcc46f6a6a8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "8397342f237180dd4cf1228f943cef50",
"assets/NOTICES": "6937d5ceace86264f3c206fa0ed31201",
"assets/FontManifest.json": "158490315554d991fee4814a46477d3e",
"assets/AssetManifest.bin.json": "151eb91602ff5bc23e2b8654c712f06d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2e372eb7eba278403c6be15037aa2760",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e58db2c8e514d0ddf74fe9193586ae12",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bf1b75fdc8645c7fda526de866a44eda",
"assets/fonts/MaterialIcons-Regular.otf": "04b115ae8666564645bb76d22fdc359c",
"assets/assets/images/c%2523_logo.png": "a2ac4142b22beebab6ab6db956f66f5d",
"assets/assets/images/winforms-logo.png": "fd08e38f3ebbd56c5e71f89d086c850b",
"assets/assets/images/ezgif-3-7162fb7e6d.gif": "769e343cec3de9f638911859aa679fca",
"assets/assets/images/flutterimg.png": "05ad3ca19a2f2666f9368eee460aea0b",
"assets/assets/images/flutter.png": "bb75a8da0b85488d87e59a2e522115c0",
"assets/assets/images/applogo.png": "d16aa23585ca56426b78a0f1696b951f",
"assets/assets/images/api-interface.png": "7fbf522543b89a958fa310aaec76d74d",
"assets/assets/images/githublogo.png": "3d5e73d93eb444d2b38f3ac2caf53c05",
"assets/assets/images/sql.png": "0eebb1788ad1e46530a84cee76aa27c1",
"assets/assets/images/firebase.png": "978bd80e3cdf987dbaddb44a9c9b8434",
"assets/assets/images/java.png": "3239d13f6545753a92b8daa6ed29053c",
"assets/assets/images/sqlserver_logo.png": "3620c268adf3c72a2d9959519b92d9ac",
"assets/assets/images/figma.png": "16feaa6fbde1aeb849cd3a4d99ccb801",
"assets/assets/images/logo.png": "2c5e577d3a911cda7a79171924aaeade",
"assets/assets/images/weather_api_logo.jpg": "567ed81b604748b156c0946742f425a1",
"assets/assets/images/postman-icon.png": "872de4667c364065586a18df922bdf31",
"assets/assets/images/android_logo.png": "6225755a721ff7757ce35fb0031c5aa2",
"assets/assets/images/php.png": "d220f28a1d60d04530bb2c81c41e3683",
"assets/assets/images/hand_weaving.gif": "5a555338873b1e27a5bdfff52d1e28bf",
"assets/assets/images/dart.png": "6e9cdfb3178b7d68e392fa8399630f0c",
"assets/assets/images/profile-pic.png": "b295292ba39210ce2a999b053e89a933",
"assets/assets/images/sqlite_logo.png": "4189991610dc7769f7063dd566c8bbe8",
"assets/assets/project_banners/news_app_logo.png": "a78fc7eae387bc544ee5929ba7cd66c9",
"assets/assets/project_banners/tetris_logo.png": "9d83f0fce1fc05452e8a7a3179e3d359",
"assets/assets/project_banners/tetris_banner_1.png": "c173ab62e4d2a9eda4f635db00c8a3a0",
"assets/assets/project_banners/imagify_banner_2.png": "ba80b6403ea736276ccc87bdcf1c3c3e",
"assets/assets/project_banners/tetris_banner_2.jpg": "e9f3b1cfca558f01d803a39d9ee0773e",
"assets/assets/project_banners/imagify_banner_1.png": "280ae7a3655681b6ecfa9cd351140ff1",
"assets/assets/project_banners/hamroclz_banner_2.jpg": "302f54fc7bbace022e95967cf7c1588b",
"assets/assets/project_banners/hamroclz_banner_1.png": "15e7df4811b6b7ec49d42b2727edafdd",
"assets/assets/project_banners/hamroclz_logo.png": "83ebaa325b7d4930b660999693c28bbe",
"assets/assets/project_banners/imagify_logo.png": "2165917735c358ba1d28b2ebcc0bd137",
"assets/assets/project_banners/newspulse_banner_1.png": "d95fc0b4b7dd83a0109a36a389531a49",
"assets/assets/project_banners/newspulse_banner_2.png": "de0bea8b929791317edfbe3557bcf69a",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
