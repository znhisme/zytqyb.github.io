"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d1028dd038affe534c139fd936cfb0e7",url:"./2021/05/30/hello-world/index.html"},{revision:"e666d332cb13da4b421d5c6fb37a173d",url:"./2021/05/31/新增文章添加测试/index.html"},{revision:"ce861491eb3c5d85b5c9f48b4446de81",url:"./404.html"},{revision:"8d5118b551b2dd2af1dae873a423074f",url:"./about/index.html"},{revision:"b8748623de0d38a9671fe65cab8e0d67",url:"./archives/2021/05/index.html"},{revision:"34e9e84df17d0edd372ab62ddea91a3d",url:"./archives/2021/index.html"},{revision:"0def70094b2981f558803ca8a5f00194",url:"./archives/index.html"},{revision:"9127a566c5dfc1098ff5b73407c4e037",url:"./artitalk/index.html"},{revision:"7b60ad37e3de8b146e7ec614057181aa",url:"./atom.xml"},{revision:"5a4898d54c10d875d4d3ade2b2d02d1e",url:"./categories/index.html"},{revision:"3f69b89bf57d6c2021299c5b90b978d1",url:"./categories/web前端/index.html"},{revision:"405e64b4990c68064b6bc172f1d2d85d",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"aeeec632dd75192b2ffef78b41c8cd29",url:"./img/siteicon/browserconfig.xml"},{revision:"eeb5c22c0050b6cf60914c25397d915b",url:"./img/siteicon/README.html"},{revision:"53f162530a6758b9cc5826e290d88d65",url:"./index.html"},{revision:"8b90fde9f2a602c2c2925d19db73ac06",url:"./js/main.js"},{revision:"9f72ef8b8fdda25a767a787cd4bf9121",url:"./js/search/algolia.js"},{revision:"656225e010a039446b846893d54891ba",url:"./js/search/local-search.js"},{revision:"0310e94ad716c794eadcb0fddfab0a2a",url:"./js/tw_cn.js"},{revision:"269e9db5c04d551f7c32339357f608dc",url:"./js/utils.js"},{revision:"aaa25b66e35a7ed19c2b4547a1771d23",url:"./link/index.html"},{revision:"ce251e75cd9a1404b861a999e64da347",url:"./manifest.json"},{revision:"418bf09defccfcd49d90f8519303317c",url:"./search.xml"},{revision:"33bd7cec7d5e7b16d3c7ac42c949e3e9",url:"./service-worker.js"},{revision:"2a1fbd916016abeee51ff35b9b3e2d2c",url:"./tags/index.html"},{revision:"c15172d0fb724d9e839aa02e80b0b621",url:"./tags/测试/index.html"},{revision:"0497fcadf6b83c75ec4df94ab5067d20",url:"./workbox-f7715658.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();