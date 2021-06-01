"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,n=new Array(r);i<r;i++)n[i]=e[i];return n}function asyncGeneratorStep(e,r,i,n,a,o,t){try{var c=e[o](t),s=c.value}catch(e){return void i(e)}c.done?r(s):Promise.resolve(s).then(n,a)}function _asyncToGenerator(c){return function(){var e=this,t=arguments;return new Promise(function(r,i){var n=c.apply(e,t);function a(e){asyncGeneratorStep(n,r,i,a,o,"next",e)}function o(e){asyncGeneratorStep(n,r,i,a,o,"throw",e)}a(void 0)})}}var e,i,r;self.define||(e=function(n){"require"!==n&&(n+=".js");var e=Promise.resolve();return(e=!r[n]?new Promise(function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"document"in self?((i=document.createElement("script")).src=n,document.head.appendChild(i),i.onload=r):(importScripts(n),r());case 1:case"end":return e.stop()}},e)}));return function(e){return r.apply(this,arguments)}}()):e).then(function(){if(!r[n])throw new Error("Module ".concat(n," didn’t register its module"));return r[n]})},i=function(r,i){Promise.all(r.map(e)).then(function(e){return i(1===e.length?e[0]:e)})},r={require:Promise.resolve(i)},self.define=function(a,o,t){r[a]||(r[a]=Promise.resolve().then(function(){var i={},n={uri:location.origin+a.slice(1)};return Promise.all(o.map(function(r){switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(function(e){e=t.apply(void 0,_toConsumableArray(e));return i.default||(i.default=e),i})}))}),define("./service-worker.js",["./workbox-f7715658"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"2021/05/30/hello-world/index.html",revision:"662641395f739879db9c5635a33456ff"},{url:"2021/05/31/新增文章添加测试/index.html",revision:"6128ff40355271d08db2b2ea32321cba"},{url:"404.html",revision:"b92863dbe8e9d9f317dce7544752a715"},{url:"about/index.html",revision:"3dd442d074cde68a0ac34f9ea63b9a30"},{url:"archives/2021/05/index.html",revision:"6e98c35bf67f91120d65e355643ff2b7"},{url:"archives/2021/index.html",revision:"98f5e829b0a090a20e875a56c8f971c3"},{url:"archives/index.html",revision:"018672d287ee9f8ef1b068880064e597"},{url:"artitalk/index.html",revision:"3cda31a50d31a65fefb432b7d8a9c3d0"},{url:"categories/index.html",revision:"8292aa8e6bf59f8d8cdb8f488e8fed6a"},{url:"categories/web前端/index.html",revision:"4e3d8c0ee0c71c63cf6eacb8cc179602"},{url:"css/index.css",revision:"3d9dfea778d2b5016fa373eb64639344"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/siteicon/android-chrome-144x144.png",revision:"47317ca0915a9a9b7eefce6f51eeeccb"},{url:"img/siteicon/android-chrome-192x192.png",revision:"25bce2796f014ccc9cbf40dd03141c60"},{url:"img/siteicon/android-chrome-256x256.png",revision:"f5350287ffc99b843821772cd7ab6886"},{url:"img/siteicon/android-chrome-36x36.png",revision:"2827aea0ae32853946f3173e4ece5ec8"},{url:"img/siteicon/android-chrome-384x384.png",revision:"f37698c9d4d1e02f54fed02454b159b7"},{url:"img/siteicon/android-chrome-48x48.png",revision:"7ece9a0316460df00e0b213b986c63d5"},{url:"img/siteicon/android-chrome-72x72.png",revision:"223a9500c6451a0e887ad34cdc9ceb9b"},{url:"img/siteicon/android-chrome-96x96.png",revision:"9c07df4e38de19c3846f6824ce635775"},{url:"img/siteicon/apple-touch-icon.png",revision:"45b27c66dc4cf2ac3359745db6a85329"},{url:"img/siteicon/favicon-16x16.png",revision:"68a29ce8bc4ab818055f6e98fb9e34d4"},{url:"img/siteicon/favicon-32x32.png",revision:"545e7df0a47e29d4f3e466c1020a899a"},{url:"img/siteicon/mstile-150x150.png",revision:"617e311b778ae7e385e3e25390852c07"},{url:"img/siteicon/README.html",revision:"e8b1e6ba2cfa3d942a417301c3914c97"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"cc95fc29270f1e8dc869206bf1ec5920"},{url:"index.html",revision:"8a6491d706450e96b3a5ed43f4ad3c86"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"50049bff8c6afcce0b2343a58d2f6d3f"},{url:"tags/index.html",revision:"fac1b02bddaf22a107783db511679068"},{url:"tags/测试/index.html",revision:"1bbe37cc8fd006fec87332b4594703ad"}],{})});