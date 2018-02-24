"use strict";var precacheConfig=[["/index.html","c48a9100bdd755939b48daa655c0d803"],["/static/css/main.1d0c7be3.css","fab55edd96f984422280bb1b2c528e2d"],["/static/js/main.eb595f61.js","eeb883798d9d3863dbf2d9614e919c50"],["/static/media/DSC_0398.d4163c91.jpg","d4163c9155a1a31755b72a51b05385ad"],["/static/media/DSC_0444.a54d45f6.jpg","a54d45f6a4cf28c134eae6269c5480b2"],["/static/media/DSC_0531.6f535e2e.jpg","6f535e2e4b27178d9d808016b97850f0"],["/static/media/DSC_1039.7884868f.jpg","7884868fc3b281d6a2a7fa41cf77432b"],["/static/media/DSC_1239.f6303db3.jpg","f6303db33ab1b9f97f9c215a16f92643"],["/static/media/DSC_1263.2fc673af.jpg","2fc673af5ee0cdb342bcc3f9ef6529e0"],["/static/media/DSC_1989.e47121a6.jpg","e47121a6f25a8d0ff32143857a46f87c"],["/static/media/DSC_2016.960d6d5a.jpg","960d6d5a6e755f0064f46e911bbc76a3"],["/static/media/DSC_2038.98ee4147.jpg","98ee4147652f7d7b40707d5773399b39"],["/static/media/DSC_2086.4ad89676.jpg","4ad89676a619d2820cdb0b55256043b5"],["/static/media/DSC_2305.b50629a7.jpg","b50629a7f62f063b36a6cfa3d731802d"],["/static/media/DSC_2353.f11a58f0.jpg","f11a58f03b12cb30c1a2990310731477"],["/static/media/DSC_2392.b4d7378b.jpg","b4d7378ba4998439e6e3c3621144dd9a"],["/static/media/DSC_3905.293611e5.jpg","293611e57b0904721d4f4c9738a21948"],["/static/media/DSC_4069.254f3251.jpg","254f32513c374438a848f4bb3bfd52ea"],["/static/media/DSC_6717.4da5f619.jpg","4da5f619a8d82cea7d14909a9c1193ae"],["/static/media/DSC_6841.10dc1e31.jpg","10dc1e31283fd3f0ec63ca47481f4a44"],["/static/media/DSC_7398.f4d391b6.jpg","f4d391b629234d54867ac3b60dd0ca58"],["/static/media/DSC_7416.4cdeaa40.jpg","4cdeaa40632558a03f8d06e4df57d2a8"],["/static/media/DSC_7418.5e542182.jpg","5e542182a52cdc6005f8aa5097dc99f6"],["/static/media/DSC_7835.a876aea0.jpg","a876aea0e60ca29ff74e856d2d7dfdb4"],["/static/media/DSC_8101.cc7a6658.jpg","cc7a66586393aa277ace6d0ff498539f"],["/static/media/DSC_8108.fbc6e492.jpg","fbc6e492dd4aa28d0d22c3e267814c3a"],["/static/media/DSC_8316.066b64a6.jpg","066b64a6219ce154fcdebee949895421"],["/static/media/DSC_8337.c317615d.jpg","c317615d777697fce0f0bb2530bd1180"],["/static/media/DSC_8385.83f99cf3.jpg","83f99cf3796e8f290d5d63af36866641"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});