if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QxfhfSq5Urk_iRX0qU9y4/_buildManifest.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/QxfhfSq5Urk_iRX0qU9y4/_middlewareManifest.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/QxfhfSq5Urk_iRX0qU9y4/_ssgManifest.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/chunks/569-8b1410c135677432.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/chunks/main-ec95d66e0c86d60d.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/chunks/pages/_app-19425516165713a1.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/chunks/pages/index-6b0db5743e31fada.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/chunks/webpack-514908bffb652963.js",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/_next/static/css/8aa5f59ee1837de1.css",revision:"QxfhfSq5Urk_iRX0qU9y4"},{url:"/favicon.ico",revision:"fc4ed0601a685d3b46ba858c0a6402b2"},{url:"/icon-192x192.png",revision:"17bd52d4713aaf1c068ce76cafa02ebf"},{url:"/icon-256x256.png",revision:"400d80ed96a92f5a86681cf3c2b177f1"},{url:"/icon-384x384.png",revision:"8187b5457caec0215acb4204ec7d8f3c"},{url:"/icon-512x512.png",revision:"2360fb56ca13974dcb40a932d5331eef"},{url:"/manifest.json",revision:"982641520aeb3f2e29ed6bbfb99a8b22"},{url:"/robots.txt",revision:"72f84dadd7ba921a02f0b7abb7cbfaa7"},{url:"/sitemap.xml",revision:"20bc3f9db05c95280d1fddf936a1d718"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
