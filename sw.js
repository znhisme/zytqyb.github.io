"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f612c665c78acc6fe73a97fa6da6b8cc",url:"./2021/05/30/hello-world/index.html"},{revision:"e5de4a48f57ba36a09a71cf00c2880f9",url:"./2021/05/31/新增文章添加测试/index.html"},{revision:"22b6ec814451ee45670dbaa539f9184f",url:"./404.html"},{revision:"8330260a579209726043ee1e2814c832",url:"./about/index.html"},{revision:"af688411b5b3921ab52341e3826146ce",url:"./archives/2021/05/index.html"},{revision:"e59d70f695b1d84224990e3ba5af6ab6",url:"./archives/2021/index.html"},{revision:"bca13ce8df4772dbfc75d9cfc56008ff",url:"./archives/index.html"},{revision:"66c1845252568dcacae4d08d0340443b",url:"./artitalk/index.html"},{revision:"7b60ad37e3de8b146e7ec614057181aa",url:"./atom.xml"},{revision:"85f7d5d1bcfe266b25d2c4cb8ca4d364",url:"./categories/index.html"},{revision:"d9cd7b7f5fc539e356398d6d7ee3f6c0",url:"./categories/web前端/index.html"},{revision:"9c645dde4ff3bebdf590b8caa9ccf8ee",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"aeeec632dd75192b2ffef78b41c8cd29",url:"./img/siteicon/browserconfig.xml"},{revision:"7bf8c56589560223140901e9a1ab6bfe",url:"./img/siteicon/README.html"},{revision:"8a9c8360a6c5658f935779ff0cec4c13",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"45a7b4d70f23fb20c5c2638d4b6d9ef1",url:"./link/index.html"},{revision:"ce251e75cd9a1404b861a999e64da347",url:"./manifest.json"},{revision:"0561bbae75ecfd4752590a95e09bf56d",url:"./pic/index.html"},{revision:"418bf09defccfcd49d90f8519303317c",url:"./search.xml"},{revision:"53175954ce2345287d4a7f337901cd74",url:"./service-worker.js"},{revision:"03d504d135b8b16835304c03e52f3c61",url:"./tags/index.html"},{revision:"ca0dbcb8a961140d16901041ef35f1b3",url:"./tags/测试/index.html"},{revision:"0497fcadf6b83c75ec4df94ab5067d20",url:"./workbox-f7715658.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();