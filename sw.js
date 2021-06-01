const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ad9c2b3a205f19346f3675d3eaae2f91","url":"./2021/05/30/hello-world/index.html"},{"revision":"3fb9924a7b5ac8b9bd54a5b8bc946262","url":"./2021/05/31/新增文章添加测试/index.html"},{"revision":"520a538853620e31950b4d8d277420b5","url":"./404.html"},{"revision":"46cd9396adc1f96a632f00d58d5af4bf","url":"./archives/2021/05/index.html"},{"revision":"69c5f515d35bf8a83f5401a406dec768","url":"./archives/2021/index.html"},{"revision":"3da63dbd604b94858634ba87b04be9f7","url":"./archives/index.html"},{"revision":"b34c3dd05aba53f879829d9a61416d80","url":"./artitalk/index.html"},{"revision":"7b60ad37e3de8b146e7ec614057181aa","url":"./atom.xml"},{"revision":"8d4e3ea199a9451c2ac2e1e21cabfdf9","url":"./categories/index.html"},{"revision":"62d0f277a45c77b152408953d4e3f192","url":"./categories/web前端/index.html"},{"revision":"db28cc7ab5547de7bb6f9ec735150846","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4678baf74dc874b6ef1b9a72b8d7503c","url":"./img/siteicon/browserconfig.xml"},{"revision":"2ba15ee3ea5bcadbe4df0dd4871efb40","url":"./img/siteicon/manifest.json"},{"revision":"6af48116eac8b4e07c895e9d2f799fdc","url":"./img/siteicon/README.html"},{"revision":"4805123e05b540d722250abf79f7d72a","url":"./index.html"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"09789fa939d9b0f3417f388b1d4f924e","url":"./link/index.html"},{"revision":"dea60018316a24bffb9e647958798941","url":"./manifest.json"},{"revision":"418bf09defccfcd49d90f8519303317c","url":"./search.xml"},{"revision":"5d3d8752a995be1127f34ca0452f0e89","url":"./service-worker.js"},{"revision":"f24f547cf64e095ea21c8eed8028fb5a","url":"./tags/index.html"},{"revision":"74944df75e16456b297b6a7dc935b055","url":"./tags/测试/index.html"},{"revision":"0497fcadf6b83c75ec4df94ab5067d20","url":"./workbox-f7715658.js"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 可选内容 start 都选可能造成缓存过多 酌情保留。
// 图片资源
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 字体文件
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 谷歌字体
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// jsdelivr的CDN资源
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
// 可选内容 end 都选可能造成缓存过多 酌情保留。
workbox.googleAnalytics.initialize();
