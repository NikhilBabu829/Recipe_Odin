(()=>{var n={426:(n,t,e)=>{"use strict";e.d(t,{Z:()=>u});var r=e(81),o=e.n(r),i=e(645),a=e.n(i),s=e(667),c=e.n(s),d=new URL(e(376),e.b),p=a()(o()),l=c()(d);p.push([n.id,`body {\n\tmargin: 0;\n\tpadding: 0;\n    width: 100vw;\n}\n#content{\n    width: 100%;\n}\n\n.navBar{\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    top: 0px;\n    background-color: #273952;\n\tfont-family: 'Lexend Giga', sans-serif;\n    padding: 0 10px 0 10px;\n}\n\n.navBar a{\n    color: #B6FFF9;\n    border: none;\n    border-radius: 5px;\n    text-decoration: none;\n    transition: 1s;\n}\n\n.navBar p{\n    font-size: x-large;\n    color: #B6FFF9;\n    border: none;\n    border-radius: 5px;\n    text-decoration: none;\n    transition: 1s;\n}\n\n.navBar a:hover{\n    text-decoration: underline;\n}\n\n.recipiesContent{\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tmin-height: 100vh;\n\tgap: 10%;\n\tdisplay: grid;\n\tpadding: 5% 10% 5% 10%;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tgrid-template-rows: 6fr 6fr 6fr;\n}\n\n.card{\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 4fr 3fr;\n\tbackground-color: #4C6983;\n\tpadding: 5%;\n\tborder-radius: 20px;\n}\n\n.imagePart{\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tborder-radius: 15px;\n}\n\n.image{\n\tposition: relative;\n\twidth: 100%;\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 8fr;\n\tgrid-template-rows: 1fr;\n\t\n}\n.image::before{\n\tcontent: "";\n\tbackground-image: url(${l});\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tposition: absolute;\n\ttop: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n\topacity: 0.40;\n}\n\n.informationSpace{\n\tgrid-column: 2/3;\n\tgrid-row: 1/2;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tz-index: 1;\n\tfont-size: 1rem;\n}\n.informationSpace h1{\n\tfont-family: 'Lexend Giga', sans-serif;\n\tfont-size: 3rem;\n\tmargin: 0;\n\tcolor: #273952;\n}\n.informationSpace :first-child{\n\tcolor: #4C6983;\n\tfont-family: 'Lexend Giga', sans-serif;\n}\n.informationSpace p{\n\tcolor: #38556A;\n\tfont-family: serif;\n\tfont-size: 1.1rem;\n\twidth: 60%;\n}\n.menu_btn{\n\tfont-family: serif;\n\tborder: none;\n\tbackground-color: #B6FFF9;\n\tcolor: #273952;\n\tfont-size: 1.2rem;\n\tpadding: 2%;\n\tborder-radius: 10px;\t\n}\n.menu_btn:hover{\n\tbackground-color: rgb(237, 237, 237);\n}\n\n.anotherBlock{\n\tmargin: 2% 0 2% 0;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n.storySection{\n\twidth: 80%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n.intro{\n\ttext-align: center;\n\twidth: 80%;\n}\n.intro h1{\n\tfont-family: 'Lexend Giga', sans-serif;\n\tcolor: #273952;\n}\n.intro :first-child{\n\tcolor: #4C6983;\n\tfont-family: 'Lexend Giga', sans-serif;\n}\n.intro p{\n\tcolor: #38556A;\n\tfont-family: serif;\n}\n.nameOfFame h2{\n\tcolor: #4C6983;\n\tfont-family: 'Lexend Giga', sans-serif;\n}\n.newestAddons{\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: minmax(250px, 300px);\n\tgap: 20px;\n}\nimg{\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit:cover;\n}\n\n.ingredients{\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 30vh;\n\tbackground-color: rgb(239, 239, 239);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgap: 20px;\n\talign-items: center;\n\tpadding: 3%;\n}\n\n.title{\n\ttext-align: center;\n}\n.title h1{\n\tcolor: #273952;\n}\n\n.title p{\n\tcolor: #38556A;\n}\n\n.ingred\th2{\n\tcolor: #273952;\n}\n.ingred:first-child{\n\tcolor: #4C6983;\n}\n\n`,""]);const u=p},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},667:n=>{"use strict";n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var u=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var g=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:g,references:1})}a.push(l)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=r(n,o),d=0;d<i.length;d++){var p=e(i[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=c}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},855:(n,t,e)=>{var r={"./foodImage1.jpg":960,"./foodImage2.jpg":585,"./foodImage3.jpg":130,"./foodImage4.jpg":629,"./foodImage5.jpg":896,"./foodImage6.jpg":318,"./foodImage7.jpg":111,"./foodImage8.jpg":443,"./foodImage9.jpg":124};function o(n){var t=i(n);return e(t)}function i(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=855},376:(n,t,e)=>{"use strict";n.exports=e.p+"25523c1a3bb8621adf69.jpg"},960:(n,t,e)=>{"use strict";n.exports=e.p+"26de2d590874902aa907.jpg"},585:(n,t,e)=>{"use strict";n.exports=e.p+"e3b667d03069b36cfa98.jpg"},130:(n,t,e)=>{"use strict";n.exports=e.p+"f6b6709d387f389cb25d.jpg"},629:(n,t,e)=>{"use strict";n.exports=e.p+"8aef2057ac9d041e7c71.jpg"},896:(n,t,e)=>{"use strict";n.exports=e.p+"fbd1330084427528df01.jpg"},318:(n,t,e)=>{"use strict";n.exports=e.p+"2cb2c125d80a568106a5.jpg"},111:(n,t,e)=>{"use strict";n.exports=e.p+"54e20425b8bbf7ad3f1f.jpg"},443:(n,t,e)=>{"use strict";n.exports=e.p+"2b6d57576f1ba86efcca.jpg"},124:(n,t,e)=>{"use strict";n.exports=e.p+"0884365e431bf1fec30d.jpg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{"use strict";e.p,e.p;var n=e(379),t=e.n(n),r=e(795),o=e.n(r),i=e(569),a=e.n(i),s=e(565),c=e.n(s),d=e(216),p=e.n(d),l=e(589),u=e.n(l),f=e(426),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const m=document.querySelector("#content");m.append(function(){const n=document.createElement("div");n.classList.add("navBar");const t=document.createElement("a");t.innerText="BON APPÉTIT",t.classList.add("home");const e=document.createElement("p");e.innerText="Get Eating!";const r=document.createElement("a");return r.innerText="Menu",r.classList.add("menu"),n.appendChild(t),n.appendChild(e),n.appendChild(r),n}()),m.append(function(){const n=document.createElement("div");return n.classList.add("recipiesContent"),function(n){for(let t=1;t<=9;t++){const r=e(855)(`./foodImage${t}.jpg`),o=document.createElement("div");o.classList.add("card"),console.log(r);const i=document.createElement("div");i.classList.add("imagePart"),i.style.backgroundImage=`url(${r})`;const a=document.createElement("div");a.classList.add("informationPart"),o.appendChild(i),o.appendChild(a),n.append(o)}}(n),n}())})()})();