'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f47394a7cba14e7b05c5e93e3aacf452",
"version.json": "009c9e65172e010890f7f65fde438006",
"launcher.png": "d2ab82a7cb4ee9ef019d887c6b6ae6a6",
"index.html": "b7236a69b9d0cb17f905eb27bbb58a30",
"/": "b7236a69b9d0cb17f905eb27bbb58a30",
"main.dart.js": "944302aa1ef823f95f31955663f059fa",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "f4ef6e62e208f1f220d10f302ebd50d2",
"assets/NOTICES": "95720857ec27dd54c6e0b6b7a5a7aa74",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "db56e6a1aabdb79fcb8b3ed05e4d1eee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2db610217ad9f7dcf0ad3d904a63f8b7",
"assets/fonts/MaterialIcons-Regular.otf": "ee15ad2f7a9b2155991198ed7f5f52be",
"assets/assets/images/jira.png": "9b30a9d999f901d406ab1d0cedfaaf62",
"assets/assets/images/git.png": "42f2cb3c804c535583c156cf20f2beb1",
"assets/assets/images/whisper-icon.png": "cd90dadd465bfa186b032aedf446f399",
"assets/assets/images/metropia-logo.png": "8a24049cfa3833ad022443c96c1fa575",
"assets/assets/images/flutter.png": "026afa02d18994e67ec00de6a66e4e7b",
"assets/assets/images/freelancer-logo.png": "eec3a3fbd79eb84f529d6096e67fdcc1",
"assets/assets/images/portfolio-logo.png": "68a46d0e4dd63bb1152fb667421af465",
"assets/assets/images/firebase.png": "c956738c985dceb39da977105ae2fa4b",
"assets/assets/images/java.png": "521b4d733ab8528c755c667cc6033403",
"assets/assets/images/uic-logo.png": "be2e802580fde76cbda44eab3b7c122c",
"assets/assets/images/android.png": "c7c5f364f00c25e250676ed9223bd518",
"assets/assets/images/pacerfect-icon.png": "4aabab66bd868e83847246d80347bc00",
"assets/assets/images/diary-icon.png": "46e68085826f63f7c58556068a24ab1a",
"assets/assets/images/diary-portfolio-2.png": "77f9e635e8df5278dbde734cef3e0ddf",
"assets/assets/images/avatar.png": "5225bb606086de3b4bf13979d023cede",
"assets/assets/images/diary-portfolio-1.png": "90069a74b8ce70688ac53ba9cc15faae",
"assets/assets/images/recipe-portfolio-2.png": "3528b1ecc8aa2deac75dc69092fab09f",
"assets/assets/images/postman.png": "5b435cf1abff992744bda329d6f2c36b",
"assets/assets/images/recipe-portfolio-1.png": "a1c24a3e7ed606e38af524ee049e2a72",
"assets/assets/images/recipe-icon.png": "6529c2924b07aeb10864a181600bcf5e",
"assets/assets/images/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/images/whisper-portfolio-1.png": "cf561a5241fcedabf5aad54884dc115c",
"assets/assets/images/whisper-portfolio-2.png": "271b131b44a7b9b0b9657dffaaa42522",
"assets/assets/images/pacerfect-portfolio-2.png": "a2e8ce4cda67962ae023f9d42e77a8b1",
"assets/assets/images/dart.png": "fa159c09e72cb38d6c840c90b8371604",
"assets/assets/images/pacerfect-portfolio-1.png": "f3eed9080fc47d2f623195a178c107a2",
"assets/assets/images/kotlin.png": "748170ff1ac02219c361dfdf9f84bd8b",
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
