"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"662641395f739879db9c5635a33456ff",url:"./2021/05/30/hello-world/index.html"},{revision:"6128ff40355271d08db2b2ea32321cba",url:"./2021/05/31/新增文章添加测试/index.html"},{revision:"d2965510b35150197ef34efbebd19a50",url:"./404.html"},{revision:"de1ba58533987579325e9094479b8ade",url:"./about/index.html"},{revision:"6d15cfeb5b9d7b7b61fb4a369a1dfa68",url:"./archives/2021/05/index.html"},{revision:"641985d9869ebd02cd3b45d17644ca3d",url:"./archives/2021/index.html"},{revision:"7a774d1a4aad3873afa1ea1bf703f614",url:"./archives/index.html"},{revision:"730e861a7c08717afbd3b6732cdb5f50",url:"./artitalk/index.html"},{revision:"7b60ad37e3de8b146e7ec614057181aa",url:"./atom.xml"},{revision:"2bc3dc36a41c7200fe2e3de3bd4847c8",url:"./categories/index.html"},{revision:"c7c72f4814331abb1073653bcb586f23",url:"./categories/web前端/index.html"},{revision:"17307a68a46d8d220d39c887cb204dce",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"aeeec632dd75192b2ffef78b41c8cd29",url:"./img/siteicon/browserconfig.xml"},{revision:"c8c7a28cff50f753f88709382441ee05",url:"./img/siteicon/README.html"},{revision:"aba57745d064f48b505fd7c3eb29c77b",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"2b06de658fcc99e0b2d6196458d5f0b5",url:"./link/index.html"},{revision:"ce251e75cd9a1404b861a999e64da347",url:"./manifest.json"},{revision:"418bf09defccfcd49d90f8519303317c",url:"./search.xml"},{revision:"199e2bfdd157dd03ff789905fb9826c6",url:"./service-worker.js"},{revision:"309321ae4c7f7de49f7887da528dc748",url:"./tags/index.html"},{revision:"5e058e932fe2e91436c12fd3326863ad",url:"./tags/测试/index.html"},{revision:"0497fcadf6b83c75ec4df94ab5067d20",url:"./workbox-f7715658.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();