'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0435e02469e33cf308d310895fe1f748",
"assets/assets/avatars/avatar1.png": "d917c6ac9a2a9ed7c1d286fb272cad2e",
"assets/assets/avatars/avatar2.png": "5a8a4aca317724babb1c425f19da74f5",
"assets/assets/avatars/avatar3.png": "69c8e22d04afadbd89b2e8144ccc554e",
"assets/assets/avatars/avatar4.png": "9ef966b1e819b6a4667da0e7c96658f0",
"assets/assets/avatars/avatar5.png": "91b206fbac939389fe8a0a7c3c40c109",
"assets/assets/avatars/avatar6.png": "78a1f5ebc5ef080ebc242fda89c87038",
"assets/assets/dishes/dishes1.png": "096cf259645ea38cc4c8f1f1995a4728",
"assets/assets/dishes/dishes2.png": "194efefbbdf218c6693817567ba0a17c",
"assets/assets/dishes/dishes3.png": "28c16fc29bb6f5171b2f95a0566cae42",
"assets/assets/dishes/dishes4.png": "87ccb74f19d5c4e6e037df3ba7e762d3",
"assets/assets/dishes/dishes5.png": "33879532f9f29e05a8d084cabc45881f",
"assets/assets/dishes/dishes6.png": "09e8c7c79619a4f81b3e82649349970b",
"assets/assets/dishes/dishes7.png": "6f6091571d360721ad1467b7092fb8c0",
"assets/assets/dishes/dishes8.png": "a8d7e694b6cbfc848410c103abb2d0e2",
"assets/assets/dishes/dishes9.png": "d8f0d35bd243063d211986c8968be3ba",
"assets/assets/icons/About%2520Us.png": "6442656d552dcd946733785d9a959f7a",
"assets/assets/icons/Add.png": "62645111a4ee833903a88a72f7434b73",
"assets/assets/icons/Appereance.png": "b0f47a5863494d6a22d6501d8272c7e4",
"assets/assets/icons/Arrow%2520-%2520Down.png": "d681b5680fdac875eb91590b8aa32a88",
"assets/assets/icons/Arrow%2520-%2520Up.png": "6c9a67dc51f660077942258c94c4264a",
"assets/assets/icons/Back.png": "4f0769581a8d3ec5698ac4e5e7fc0180",
"assets/assets/icons/Card.png": "f360fe2339762a30a16ec02c4948ba98",
"assets/assets/icons/Coin.png": "4fdbc91fa50fcfb0673c115325012309",
"assets/assets/icons/Customer.png": "dbbcc585e2f4d5ab4ef3e03f03ccb3a6",
"assets/assets/icons/Dashboard.png": "cf733b2d05d7d831dfbf71fb6b43a4ca",
"assets/assets/icons/Discount.png": "f71d70c72fc006286ba960e08f98e814",
"assets/assets/icons/Edit.png": "b96bb6071154468ab53401eb9fe1577b",
"assets/assets/icons/Export.png": "6f3c13da59b45de7de71afba2e0f7c9f",
"assets/assets/icons/Home.png": "d564fa1694f71b8af7b4696e47519212",
"assets/assets/icons/Log%2520Out.png": "c68b8b946bd4ca5c4121234903bd531b",
"assets/assets/icons/Logo.png": "2c6a69b2267d9860ce256581637947de",
"assets/assets/icons/Message.png": "f00ecaf625f082aad0fb404e0055a15f",
"assets/assets/icons/Notification.png": "7224031d445f597bdb2b9d67695b62cb",
"assets/assets/icons/Option.png": "3f0664e70369e1599fc87e42caa741be",
"assets/assets/icons/Order.png": "d82069c16f6d379a5c972663bca3be6a",
"assets/assets/icons/Paypal.png": "64d518da2a6c6d3afe650aee9dbcf48e",
"assets/assets/icons/Print.png": "1ccf4c1d6640bbc5b753e3400a68c394",
"assets/assets/icons/Restaurant.png": "da0b7b57644c87b7890e9d043adac02e",
"assets/assets/icons/Security.png": "be9bea73a072733e5f5331040f2a28d0",
"assets/assets/icons/Setting.png": "9abd3785d4169459257e765e46cafa22",
"assets/assets/icons/Trash.png": "35f16b9ca9d315255aa2e10bcc9d13a7",
"assets/assets/icons/Wallet.png": "ac865eb6cd13a5990ef97dbaf7f67e59",
"assets/assets/selectedmenu.png": "26581dac149adf676e02e77b0c3eb990",
"assets/assets/selectedmenu.svg": "8f797c88e2e9b9732f4f065f851ff811",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e58d77c63e8e61b5c6de1f156ad54837",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b4f8ae0178596efcc2b2764d8360ea55",
"/": "b4f8ae0178596efcc2b2764d8360ea55",
"main.dart.js": "6168a224abc1382ce9bf1ca3937d9fdb",
"manifest.json": "414a167e5bdc4e7f34a3d8077e7f93d4",
"version.json": "98c8dcc98b18fa4b25e80a0589f55853"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
