"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"66fa5258c441ca6fac5cda5ee484a104",url:"./2021/05/31/新增文章添加测试/index.html"},{revision:"7225cf3139372fd77abedb7add4d0b66",url:"./2021/06/03/hello-world/index.html"},{revision:"239ce40b6a6a8305db4b4a6e30032645",url:"./404.html"},{revision:"03e59c0f35fac48eab39e1e97dc596ed",url:"./about/index.html"},{revision:"a471f224ec2aaddcaed9d32cc2a54af2",url:"./archives/2021/05/index.html"},{revision:"1f4736a66b166b0c596384120aea8900",url:"./archives/2021/06/index.html"},{revision:"5375fc30a1b2859d640316a79a7b0321",url:"./archives/2021/index.html"},{revision:"b01f2fe83ca6d271e95ca0b9ac375cdf",url:"./archives/index.html"},{revision:"ab58781f6dc1c3bf51315694e6026272",url:"./artitalk/index.html"},{revision:"3b40805f4dd26cee0c1ddec610aa0196",url:"./atom.xml"},{revision:"8e075748ec05e5ec8dea2f3859ed242c",url:"./categories/index.html"},{revision:"01cb569229d2874de5b7f4b51b820144",url:"./categories/web前端/index.html"},{revision:"9c645dde4ff3bebdf590b8caa9ccf8ee",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"aeeec632dd75192b2ffef78b41c8cd29",url:"./img/siteicon/browserconfig.xml"},{revision:"fbd19b0a7a36e72d4e5ef37ee1c9d102",url:"./img/siteicon/README.html"},{revision:"91acac47d256fd674299b311775c7a6e",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"3c41c6a8e3d2213216c52aaa43e59ac5",url:"./link/index.html"},{revision:"ce251e75cd9a1404b861a999e64da347",url:"./manifest.json"},{revision:"aebd8579d31d79e3e2b7b77ad9f958ff",url:"./search.xml"},{revision:"0e94727c588bb80c10f062b85b72f70e",url:"./service-worker.js"},{revision:"a02d19bc69189dcff2d1a24f59287872",url:"./tags/index.html"},{revision:"316dffb5af69bafaf5fd6d49d261c2eb",url:"./tags/测试/index.html"},{revision:"0497fcadf6b83c75ec4df94ab5067d20",url:"./workbox-f7715658.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();