"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,n=new Array(r);i<r;i++)n[i]=e[i];return n}function asyncGeneratorStep(e,r,i,n,a,c,o){try{var t=e[c](o),s=t.value}catch(e){return void i(e)}t.done?r(s):Promise.resolve(s).then(n,a)}function _asyncToGenerator(t){return function(){var e=this,o=arguments;return new Promise(function(r,i){var n=t.apply(e,o);function a(e){asyncGeneratorStep(n,r,i,a,c,"next",e)}function c(e){asyncGeneratorStep(n,r,i,a,c,"throw",e)}a(void 0)})}}var e,i,c;self.define||(e=function(n){"require"!==n&&(n+=".js");var e=Promise.resolve();return(e=!c[n]?new Promise(function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"document"in self?((i=document.createElement("script")).src=n,document.head.appendChild(i),i.onload=r):(importScripts(n),r());case 1:case"end":return e.stop()}},e)}));return function(e){return r.apply(this,arguments)}}()):e).then(function(){if(!c[n])throw new Error("Module ".concat(n," didn’t register its module"));return c[n]})},i=function(r,i){Promise.all(r.map(e)).then(function(e){return i(1===e.length?e[0]:e)})},c={require:Promise.resolve(i)},self.define=function(r,a,o){c[r]||(c[r]=Promise.resolve().then(function(){var i={},n={uri:location.origin+r.slice(1)};return Promise.all(a.map(function(r){switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(function(e){e=o.apply(void 0,_toConsumableArray(e));return i.default||(i.default=e),i})}))}),define("./service-worker.js",["./workbox-f7715658"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"2021/05/30/hello-world/index.html",revision:"2b1da4f1a948dcfae5836546b5ba8778"},{url:"2021/05/31/新增文章添加测试/index.html",revision:"91789117d4e58cc74fc8fe9db8a30dca"},{url:"404.html",revision:"16c3d58d53fee5307fe84ef0294e89f4"},{url:"about/index.html",revision:"01679f1be3586cd3c69d4b49c7c93810"},{url:"archives/2021/05/index.html",revision:"c2a0e1bdacf13d8d1dce71aba07f8a35"},{url:"archives/2021/index.html",revision:"155551e326c4b02ca0aeae396dcee137"},{url:"archives/index.html",revision:"3e045e7f5a37a28fed36490c3e32053b"},{url:"artitalk/index.html",revision:"06ab18344808c43c925fc2e496fba79c"},{url:"categories/index.html",revision:"41c6281688c3486c0c2d966cb055d116"},{url:"categories/web前端/index.html",revision:"f14aa891516680998a2b0ecc62f62df8"},{url:"css/index.css",revision:"3d9dfea778d2b5016fa373eb64639344"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/siteicon/android-chrome-144x144.png",revision:"47317ca0915a9a9b7eefce6f51eeeccb"},{url:"img/siteicon/android-chrome-192x192.png",revision:"25bce2796f014ccc9cbf40dd03141c60"},{url:"img/siteicon/android-chrome-256x256.png",revision:"f5350287ffc99b843821772cd7ab6886"},{url:"img/siteicon/android-chrome-36x36.png",revision:"2827aea0ae32853946f3173e4ece5ec8"},{url:"img/siteicon/android-chrome-384x384.png",revision:"f37698c9d4d1e02f54fed02454b159b7"},{url:"img/siteicon/android-chrome-48x48.png",revision:"7ece9a0316460df00e0b213b986c63d5"},{url:"img/siteicon/android-chrome-72x72.png",revision:"223a9500c6451a0e887ad34cdc9ceb9b"},{url:"img/siteicon/android-chrome-96x96.png",revision:"9c07df4e38de19c3846f6824ce635775"},{url:"img/siteicon/apple-touch-icon.png",revision:"45b27c66dc4cf2ac3359745db6a85329"},{url:"img/siteicon/favicon-16x16.png",revision:"68a29ce8bc4ab818055f6e98fb9e34d4"},{url:"img/siteicon/favicon-32x32.png",revision:"545e7df0a47e29d4f3e466c1020a899a"},{url:"img/siteicon/mstile-150x150.png",revision:"617e311b778ae7e385e3e25390852c07"},{url:"img/siteicon/README.html",revision:"17ff35f569edb46d0f0211e8300c84ae"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"cc95fc29270f1e8dc869206bf1ec5920"},{url:"index.html",revision:"f249ef908cc7aaf58f56e7db25a41bf4"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"bc551b4d87a0d80e6c473d077cf56384"},{url:"tags/index.html",revision:"9b4b2e79c51bfa4a1bc09cb08d1d58f3"},{url:"tags/测试/index.html",revision:"f6a8b6736291a61851e6bbf587708295"}],{})});