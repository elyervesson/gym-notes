"use strict";

const CACHE_NAME = "gym-notes-static-v0";

const FILES_TO_CACHE = [
  "css/bootstrap.min.css",
  "css/styles.css",
  "icons/favicon.ico",
  "icons/152.png",
  "images/logo.png",
  "js/app.js",
  "js/bootstrap.bundle.min.js",
  "offline.html",
];

//Install the Service Worker
self.addEventListener("install", (evt) => {
  console.log("Service Worker is being installed");

  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker is adding the static cache");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

//Activate the Service Worker
self.addEventListener("activate", (evt) => {
  console.log("Service Worker is being activated");

  evt.waitUntil(
    caches.keys().then((keylist) => {
      return Promise.all(
        keylist.map((key) => {
          if (key !== CACHE_NAME) {
            // Remove the old items that are not listed on the new cache
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

//Enable the offline page
self.addEventListener("fetch", (evt) => {
  if (evt.request.mode !== "navigate") {
    return;
  }

  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match("offline.html");
      });
    })
  );
});
