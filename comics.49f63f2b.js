function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("kyEFX",(function(t,n){var a,i;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("eXIOw",(function(n,a){e(n.exports,"default",(function(){return f}));var i=o("la1XE"),s=o("2shzp"),r=o("dSs1Y");let l=!0;const c="f31807a60270db8c1d9152910dc43c3a",m="e096f5c83a35e96c2f1b391e0633321a9c1b55af";let d={PUBLICK:c,PRIVAT:m,MD5:t(i)(1+m+c)};console.log(d);const u=s.default.create({validateStatus:function(e){return e>=200&&e<300},baseURL:"https://gateway.marvel.com/v1/public",params:{apikey:d.PUBLICK,hash:d.MD5,ts:1},onDownloadProgress:function(e){l&&r.Loading.dots({svgColor:"rgba(255,0,0)",backgroundColor:"#171717ba"}),l=!1,r.Loading.remove(1e3)}});class f{static getLastThreeComics(e="/comics",t={}){return u(e,t)}static getRandomCharacter(e="/characters",t={}){return u(e,t)}static getIndexSearch({nameStartsWith:e="",limit:t=32}){return console.log(e),u("/characters",{params:{...e&&{nameStartsWith:e},...t&&{limit:t}}})}static getComicById(e="11111",t={}){return console.log(e),u(`/comics/${e}`,t)}static getComicsCharactersById(e="spider",t={}){return console.log(e),u(`/comics/${e}/characters`)}}})),o.register("dSs1Y",(function(e,t){var a,i;a=void 0!==n?n:"undefined"!=typeof window?window:e.exports,i=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",a="Hourglass",i="Circle",o="Arrows",s="Dots",r="Pulse",l="Custom",c="Notiflix",m={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},d=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(d('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},f=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var a=function(n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t&&"[object Object]"===Object.prototype.toString.call(n[a])?e[a]=f(e[a],n[a]):e[a]=n[a])};n<arguments.length;n++)a(arguments[n]);return e},g=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},h=function(c,p,h,v,b){if(!u("body"))return!1;t||y.Loading.init({});var k=f(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof h&&!Array.isArray(h)){var x={};"object"==typeof p?x=p:"object"==typeof h&&(x=h),t=f(!0,t,x)}var w,C,L="";if("string"==typeof p&&p.length>0&&(L=p),v){var S="";(L=L.length>t.messageMaxLength?g(L).toString().substring(0,t.messageMaxLength)+"...":g(L).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+L+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var N="";if(c===n)w=t.svgSize,C=t.svgColor,w||(w="60px"),C||(C="#32c682"),N='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+C+'" width="'+w+'" height="'+w+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===a)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===i)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===o)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===r)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)N=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)N='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return d('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;N=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var M=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),E=e.innerWidth,j=M>=E?E-40+"px":M+"px",I='<div style="width:'+j+"; height:"+j+';" class="'+t.className+"-icon"+(L.length>0?" nx-with-message":"")+'">'+N+"</div>",T=e.document.createElement("div");T.id=m.ID,T.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),T.style.zIndex=t.zindex,T.style.background=t.backgroundColor,T.style.animationDuration=t.cssAnimationDuration+"ms",T.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',T.style.display="flex",T.style.flexWrap="wrap",T.style.flexDirection="column",T.style.alignItems="center",T.style.justifyContent="center",t.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.innerHTML=I+S,e.document.getElementById(T.id)||(e.document.body.appendChild(T),t.clickToClose&&e.document.getElementById(T.id).addEventListener("click",(function(){T.classList.add("nx-remove");var e=setTimeout((function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(m.ID))var A=e.document.getElementById(m.ID),O=setTimeout((function(){A.classList.add("nx-remove");var e=setTimeout((function(){null!==A.parentNode&&(A.parentNode.removeChild(A),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(O)}),b);t=f(!0,t,k)},y={Loading:{init:function(n){t=f(!0,m,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var a=e.document.createElement("style");a.id=n,a.innerHTML=t(),e.document.head.appendChild(a)}}(p,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return d("You have to initialize the Loading module before call Merge function."),!1;t=f(!0,t,e)},standard:function(e,t){h(n,e,t,!0,0)},hourglass:function(e,t){h(a,e,t,!0,0)},circle:function(e,t){h(i,e,t,!0,0)},arrows:function(e,t){h(o,e,t,!0,0)},dots:function(e,t){h(s,e,t,!0,0)},pulse:function(e,t){h(r,e,t,!0,0)},custom:function(e,t){h(l,e,t,!0,0)},notiflix:function(e,t){h(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),h(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var a=e.document.getElementById(m.ID);if(a)if(n.length>0){n=n.length>t.messageMaxLength?g(n).substring(0,t.messageMaxLength)+"...":g(n);var i=a.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=n,a.appendChild(o)}}else d("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?f(!0,e.Notiflix,{Loading:y.Loading}):{Loading:y.Loading}},"function"==typeof define&&define.amd?define([],(function(){return i(a)})):"object"==typeof e.exports?e.exports=i(a):a.Notiflix=i(a)})),o.register("krGWQ",(function(t,n){e(t.exports,"default",(function(){return a}));var a={IndexLastThreeComics:document.querySelector(".lastComics-list"),IndexRandomCharacter:document.querySelector(".characters-image"),indexSearch:document.querySelector(".header__input "),indexSearchResult:document.querySelector(".characters-page-list"),indexLastComics:document.querySelector("#slides-container"),
//!<=== Modal
indexComicsModal:document.querySelector("[data-comics-modal]"),"#modalCloseBtn":null,".modal-comics-characters .items":null,indexComicsModalOpenRenderHbs:document.querySelector(".modal-comics"),indexRandomUlRef:document.querySelector("#characters-list-index-renndom"),refresh(){Object.entries(this).forEach(((e,t)=>this[e[0]]=e[1]??document.querySelector(e[0])));return console.warn("Refs was Refreshed!")}}})),o("kyEFX").register(JSON.parse('{"7bk21":"comics.49f63f2b.js","7kCeP":"sprite.7097512d.svg","4UfOE":"comics.943af45b.css","jvhRa":"characters.f3d27e8c.js"}'));let s=document.querySelector(".header");s.classList.remove("sticky"),window.addEventListener("scroll",(()=>{0==!scrollY?s.classList.add("sticky"):s.classList.remove("sticky")})),o("eXIOw");var r=o("eXIOw");var l=t(o("amrNH")).template({1:function(e,t,n,a,i){var o=e.lambda,s=e.escapeExpression,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='lastComics-item slide'>\n    <img\n      class='lastComics-img'\n      data-id='"+s(o(null!=t?r(t,"id"):t,t))+"'\n      class='lastComics-img'\n      src='"+s(o(null!=t?r(t,"urlImg"):t,t))+"'\n      alt=''\n    />\n    <div class='lastComics-span'>\n      <p class='lastComics-date'>"+s(o(null!=t?r(t,"title"):t,t))+"</p>\n      <p class='lastComics-name'>"+s(o(null!=t?r(t,"creators"):t,t))+"</p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:15,column:9}}}))?o:""},useData:!0});var c=t(o("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o,s=e.lambda,r=e.escapeExpression,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,m="function",d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<div class='modal-comics'>\n  <svg\n    id='modalCloseBtn'\n    class='modal-close'\n    width='28'\n    height='28'\n    viewBox='0 0 28 28'\n    fill='white'\n    xmlns='http://www.w3.org/2000/svg'\n  >\n    <path\n      d='M21 7L7 21'\n      stroke='#FAFAFA'\n      stroke-width='2'\n      stroke-linecap='round'\n      stroke-linejoin='round'\n    ></path>\n    <path\n      d='M7 7L21 21'\n      stroke='#FAFAFA'\n      stroke-width='2'\n      stroke-linecap='round'\n      stroke-linejoin='round'\n    ></path>\n  </svg>\n\n  <div class='modal-comics-preview'>\n    <img class='modal-preview-img' src='"+r(s(null!=t?d(t,"path"):t,t))+"."+r(typeof(o=null!=(o=d(n,"extension")||(null!=t?d(t,"extension"):t))?o:c)===m?o.call(l,{name:"extension",hash:{},data:i,loc:{start:{line:32,column:54},end:{line:32,column:67}}}):o)+"' alt='' />\n    <ul class='modal-comics-preview-items'>\n      <li><img\n          class='items'\n          src='./images/desktop/pop up1/pop-up1.png'\n          alt=''\n        /></li>\n      <li><img\n          class='items'\n          src='./images/desktop/pop up1/pop-up2.png'\n          alt=''\n        /></li>\n      <li><img\n          class='items'\n          src='./images/desktop/pop up1/pop-up3.png'\n          alt=''\n        /></li>\n    </ul>\n  </div>\n  <div class='modal-comics-desc'>\n    <div class='desc'>\n      <h3 class='desc-title'>"+r(s(null!=t?d(t,"title"):t,t))+"</h3>\n      <span>"+r(s(null!=t?d(t,"creatorsName"):t,t))+"\n        |\n        "+r(s(null!=t?d(t,"dates"):t,t))+"</span>\n\n    </div>\n    <svg class='icon icon-x'><use xlink:href='#icon-x'></use></svg>\n    <p>In the most shocking issue of Chip Zdarsky and Marco Checchetto’s\n      landmark DAREDEVIL epic yet, Elektra finds herself at the center of an\n      international incident that threatens to put her, Matt Murdock and\n      everything they hold dear on a collision course with the Avengers – after\n      which, things may never be the same!</p>\n    <ul class='modal-comics-detials'>\n      <li>FORMAT<p>"+r(s(null!=t?d(t,"format"):t,t))+"</p></li>\n      <li>YEAR RELEASED<p>"+r(s(null!=t?d(t,"dates"):t,t))+"</p></li>\n      <li>PAGES<p>"+r(s(null!=t?d(t,"pageCount"):t,t))+"</p></li>\n      <li>PRICE<p>$"+r(s(null!=t?d(t,"prices"):t,t))+"</p></li>\n    </ul>\n    <div class='modal-comics-creatorSection'>\n      <h3>Creator</h3>\n      <div class='desc'>\n        <img width='60' src='' alt='' />\n        <div class='writer'>\n          <span>"+r(s(null!=t?d(t,"creatorsRole"):t,t))+"</span>\n          <p>"+r(typeof(o=null!=(o=d(n,"creatorsName")||(null!=t?d(t,"creatorsName"):t))?o:c)===m?o.call(l,{name:"creatorsName",hash:{},data:i,loc:{start:{line:77,column:13},end:{line:77,column:29}}}):o)+"</p>\n\n        </div>\n      </div>\n    </div>\n    <div class='modal-comics-characters'>\n      <h3>Characters</h3>\n      <ul class='items'>\n      </ul>\n    </div>\n  </div>\n</div>"},useData:!0});var m=t(o("amrNH")).template({1:function(e,t,n,a,i){var o=e.lambda,s=e.escapeExpression,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='item'>\n    <img src='"+s(o(null!=t?r(t,"path"):t,t))+"."+s(o(null!=t?r(t,"extension"):t,t))+"' alt='' />\n    <p>"+s(o(null!=t?r(t,"name"):t,t))+"</p>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:6,column:9}}}))?o:""},useData:!0}),d=o("krGWQ");new URL(o("kyEFX").resolve("7kCeP"),import.meta.url).toString(),r.default.getLastThreeComics("/comics",{params:{limit:3,dateDescriptor:"thisMonth"}}).then((e=>{const t=e.data.data.results;console.log(t);const n=t.map((e=>({title:e.title,id:e.id,urlImg:e.images[0].path+"/portrait_incredible."+e.images[0].extension,creators:e.creators.items[0].name})));d.default.IndexLastThreeComics.innerHTML=l(n)})).then(console.log("then")).catch((e=>console.dir(e))),d.default.indexLastComics.addEventListener("click",(function(e){d.default.indexComicsModal.classList.remove("is-hidden"),document.body.style.overflowY="hidden",d.default.refresh(),console.log("hiden"),"IMG"===e.target.nodeName&&r.default.getComicById(e.target.dataset.id).then((({data:{data:{results:e}}})=>e[0])).then((e=>(console.log(e),e))).then((({id:e,title:t,prices:n,format:a,thumbnail:{path:i,extension:o},ups:s,digitalId:r,pageCount:l,creators:c,dates:m})=>({id:e,title:t,prices:n[0].price,format:a,creatorsName:c.items[0].name,creatorsRole:c.items[0].role,path:i,extension:o,ups:s,digitalId:r,pageCount:l,dates:new Date(m[1].date).getFullYear()}))).then((e=>(d.default.indexComicsModal.innerHTML=c(e),e))).then((e=>(d.default.refresh(),d.default["#modalCloseBtn"].addEventListener("click",u),e))).then(f).catch(console.log)}),{});const u=e=>{d.default.indexComicsModal.classList.add("is-hidden"),document.body.style.overflowY="auto",d.default.indexComicsModal.innerHTML="",console.log("click"),d.default["#modalCloseBtn"]=null};async function f({digitalId:e}){const t=await r.default.getComicsCharactersById(e),{data:{data:{results:n}}}=t;console.log(t);const a=n.map((({thumbnail:{path:e,extension:t},name:n})=>({path:e,extension:t,name:n})));console.log(a),d.default[".modal-comics-characters .items"].insertAdjacentHTML("afterbegin",m(a)),console.log(d.default[".modal-comics-characters .items"]),console.log(t)}r=o("eXIOw");var g=t(o("amrNH")).template({1:function(e,t,n,a,i){var o=e.lambda,s=e.escapeExpression,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li id='"+s(o(null!=t?r(t,"id"):t,t))+"' class='characters-item'>\n    \x3c!-- <a href=\"\" class=\"characters-link\"> --\x3e\n    <h3 class='characters-small-title'>"+s(o(null!=t?r(t,"name"):t,t))+"</h3>\n    <p class='characters-text'>"+s(o(null!=t?r(t,"description"):t,t))+"\n    </p>\n    \x3c!-- </a> --\x3e\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:9,column:9}}}))?o:""},useData:!0});d=o("krGWQ");r.default.getRandomCharacter("/characters",{params:{limit:50}}).then((e=>{let{results:t}=e.data.data;t=[...t].filter((({description:e,thumbnail:{path:t}})=>e.length&&!t.includes("not_available")));const n=Math.floor(Math.random()*t.length);return d.default.IndexRandomCharacter.src=t[n].thumbnail.path+"."+t[n].thumbnail.extension,d.default.IndexRandomCharacter.id=t[n].id,t})).then((e=>{console.log(d.default.indexRandomUlRef),d.default.indexRandomUlRef.innerHTML="",d.default.indexRandomUlRef.insertAdjacentHTML("afterbegin",g(e))})).catch(console.log);var p=o("2mgJe");var h=t(o("amrNH")).template({1:function(e,t,n,a,i){var o,s=e.lambda,r=e.escapeExpression,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"        <li class='modal-comics-item'>\n"+(null!=(o=l(n,"each").call(null!=t?t:e.nullContext||{},null!=t?l(t,"images"):t,{name:"each",hash:{},fn:e.program(2,i,0),inverse:e.noop,data:i,loc:{start:{line:42,column:10},end:{line:50,column:17}}}))?o:"")+"        <div class='comics-desc-container'>\n          <h3 class='comics-name'>"+r(s(null!=t?l(t,"title"):t,t))+"</h3>\n          <p class='actress'>"+r(s(null!=t?l(t,"creators"):t,t))+"</p>\n        </div>\n      </li>\n"},2:function(e,t,n,a,i){var o=e.lambda,s=e.escapeExpression,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"        <img\n          class='comics-img-container'\n          src='"+s(o(null!=t?r(t,"path"):t,t))+"/standard_fantastic."+s(o(null!=t?r(t,"extension"):t,t))+"'\n          alt='"+s(o(null!=t?r(t,"title"):t,t))+"'\n          width='263px'\n          height='263px'\n        />\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o,s=e.lambda,r=e.escapeExpression,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<div class='modal-gallery js-modal-gallery'>\n  <div class='container-img-max js-img-max-conteiner'>\n    <img\n      class='js-img-max'\n      src='"+r(s(null!=t?l(t,"path"):t,t))+"/portrait_uncanny."+r(s(null!=t?l(t,"extension"):t,t))+"'\n      alt='"+r(s(null!=t?l(t,"name"):t,t))+"'\n      width='295'\n      height='387'\n    />\n  </div>\n  <div class='container-img-min'>\n    <ul class='img-list js-img-list'>\n      <li class='img-item'>\n        <img\n          class='js-img-min'\n          src='"+r(s(null!=t?l(t,"path"):t,t))+"/standard_medium."+r(s(null!=t?l(t,"extension"):t,t))+"'\n          alt='"+r(s(null!=t?l(t,"name"):t,t))+"'\n          width='80'\n          height='80'\n        />\n      </li>\n    </ul>\n  </div>\n</div>\n<div class='container-modal-about-char'>\n  <div class='modal-about-char js-modal-about-char'>\n    <h2 class='modal-char-title'>"+r(s(null!=t?l(t,"name"):t,t))+"</h2>\n    <p class='date-comics-modal'>\n      "+r(s(null!=t?l(t,"month"):t,t))+"\n      "+r(s(null!=t?l(t,"day"):t,t))+",\n      "+r(s(null!=t?l(t,"year"):t,t))+"\n    </p>\n    <p class='about-char-description'>\n      "+r(s(null!=t?l(t,"description"):t,t))+"\n    </p>\n  </div>\n  <div class='container-modal-list-comics'>\n    <h3 class='modal-comics-list-title'>List of comics</h3>\n    <ul class='modal-comics-list js-modal-comics-list'>\n"+(null!=(o=l(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:40,column:6},end:{line:56,column:15}}}))?o:"")+"    </ul>\n  </div>\n</div>"},useData:!0});const y=new(0,p.MarvelApi),v={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backDrop:document.querySelector("[data-backdrop]"),modalAboutCharacters:document.querySelector(".js-modal-characters"),serhCharacters:document.querySelector(".js-characters-page-list"),imgMaxConteiner:document.querySelector(".js-img-max-conteiner"),imgMax:document.querySelector(".js-img-max"),imgMinList:document.querySelector(".js-img-list")};async function b(e){console.log(e.target);try{const n=await Promise.allSettled([y.getCharactersById(e.target.id),y.getCharactersByIdComics(e.target.id)]),[{value:{data:{data:{results:a}}}},{value:{data:{data:{results:i}}}}]=n;console.log(i),console.log(a);const o=a.map((e=>({modified:e.modified,path:e.thumbnail.path,extension:e.thumbnail.extension,name:e.name,description:e.description})));console.log(o);const s=i.map((e=>({title:e.title.slice(0,18).concat(" ..."),creators:e.creators.items[0].name,images:0!==e.images.length?e.images.slice(0,1):[{extension:"jpg",path:"http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4badb223f33c9"}]})));console.log(s);const r=new Date(o[0].modified),l=[{year:r.getFullYear(),month:(t=r.getMonth(),["January","February","March","April","May","June","July","August","September","October","November","December"][t-1]),day:r.getDate()}],c=Object.assign({},...o,comics=s,...l);console.log(c),v.modalAboutCharacters.insertAdjacentHTML("beforeend",h(c)),v.modal.classList.toggle("is-hidden"),setTimeout((()=>{document.addEventListener("keydown",x),v.backDrop.addEventListener("click",x),v.closeModalBtn.addEventListener("click",(()=>{k(),w()}))}),1e3)}catch(e){console.log(e)}var t}function k(){v.modal.classList.add("is-hidden"),document.removeEventListener("keydown",x),v.backDrop.removeEventListener("click",x)}function x(e){"Escape"===e.code&&(k(),w()),e.target===v.backDrop&&(k(),w())}function w(){v.modalAboutCharacters.innerHTML=""}v.openModalBtn.addEventListener("click",b),setTimeout((()=>{document.querySelectorAll("[data-characters-random]").forEach((e=>{e.addEventListener("click",b)}))}),1e3);
//# sourceMappingURL=comics.49f63f2b.js.map
