"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"56b6a53ab397a92f2c1126ac53ce1b96",url:"./2021/05/30/hello-world/index.html"},{revision:"fa2b836e49226c892323f941d1c203fb",url:"./2021/05/31/新增文章添加测试/index.html"},{revision:"2a3545ec7cb57bc3c6d316b95c98e3be",url:"./404.html"},{revision:"44e2821be169c265e9d0c4d7d7ea5e40",url:"./about/index.html"},{revision:"e36db58308cb7fa2c07fec549164331a",url:"./archives/2021/05/index.html"},{revision:"0f38be199b7d22d77c02786d2d1ab587",url:"./archives/2021/index.html"},{revision:"8a188efb059f961f97e017aa06784ed9",url:"./archives/index.html"},{revision:"c6e48d9de5cede7b1262a5bd720000fc",url:"./artitalk/index.html"},{revision:"7b60ad37e3de8b146e7ec614057181aa",url:"./atom.xml"},{revision:"23b2d3bdf34a054010dbe50521713a1b",url:"./categories/index.html"},{revision:"ebd2305a912cfabf18cc2d3fda05be01",url:"./categories/web前端/index.html"},{revision:"9c645dde4ff3bebdf590b8caa9ccf8ee",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"aeeec632dd75192b2ffef78b41c8cd29",url:"./img/siteicon/browserconfig.xml"},{revision:"5debf1e686e273b03574d4c9c09d9cf5",url:"./img/siteicon/README.html"},{revision:"f500d01e949a6fc29ed116afc29f4ef8",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"d79cae1209666501ae8c473c2a8d292d",url:"./link/index.html"},{revision:"ce251e75cd9a1404b861a999e64da347",url:"./manifest.json"},{revision:"418bf09defccfcd49d90f8519303317c",url:"./search.xml"},{revision:"0f4c1231cb7eeebcbdce4b7433e15063",url:"./service-worker.js"},{revision:"1613cafbc488c6b13cdc6deee592a03e",url:"./tags/index.html"},{revision:"2ef20996e5e78357bd840f90e682da51",url:"./tags/测试/index.html"},{revision:"0497fcadf6b83c75ec4df94ab5067d20",url:"./workbox-f7715658.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();