/*! For license information please see main.min.js.LICENSE.txt */
!function(){var e={711:function(e){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=(i(n(1)),n(6)),o=i(s),a=i(n(7)),l=i(n(8)),c=i(n(9)),u=i(n(10)),d=i(n(11)),h=i(n(14)),p=[],f=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},g=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(f=!0),f)return p=(0,d.default)(p,m),(0,u.default)(p,m.once),p},v=function(){p=(0,h.default)(),g()},y=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},b=function(e){return!0===e||"mobile"===e&&c.default.mobile()||"phone"===e&&c.default.phone()||"tablet"===e&&c.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){m=r(m,e),p=(0,h.default)();var t=document.all&&!window.atob;return b(m.disable)||t?y():(m.disableMutationObserver||l.default.isSupported()||(m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?g(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){g(!0)})):document.addEventListener(m.startEvent,(function(){g(!0)})),window.addEventListener("resize",(0,a.default)(g,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,a.default)(g,m.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)((function(){(0,u.default)(p,m.once)}),m.throttleDelay)),m.disableMutationObserver||l.default.ready("[data-aos]",v),p)};e.exports={init:w,refresh:g,refreshHard:v}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=m,i=g;return m=g=void 0,T=t,y=e.apply(i,n)}function s(e){return T=e,b=setTimeout(u,t),E?i(e):y}function o(e){var n=t-(e-w);return k?x(n,v-(e-T)):n}function l(e){var n=e-w;return void 0===w||n>=t||n<0||k&&e-T>=v}function u(){var e=C();return l(e)?d(e):void(b=setTimeout(u,o(e)))}function d(e){return b=void 0,A&&m?i(e):(m=g=void 0,y)}function h(){void 0!==b&&clearTimeout(b),T=0,m=w=g=b=void 0}function p(){return void 0===b?y:d(C())}function f(){var e=C(),n=l(e);if(m=arguments,g=this,w=e,n){if(void 0===b)return s(w);if(k)return b=setTimeout(u,t),i(w)}return void 0===b&&(b=setTimeout(u,t)),y}var m,g,v,y,b,w,T=0,E=!1,k=!1,A=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,r(n)&&(E=!!n.leading,v=(k="maxWait"in n)?_(a(n.maxWait)||0,t):v,A="trailing"in n?!!n.trailing:A),f.cancel=h,f.flush=p,f}function i(e,t,i){var s=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return r(i)&&(s="leading"in i?!!i.leading:s,o="trailing"in i?!!i.trailing:o),n(e,t,{leading:s,maxWait:t,trailing:o})}function r(e){var t=void 0===e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function s(e){return!!e&&"object"==(void 0===e?"undefined":l(e))}function o(e){return"symbol"==(void 0===e?"undefined":l(e))||s(e)&&w.call(e)==d}function a(e){if("number"==typeof e)return e;if(o(e))return u;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var n=f.test(e);return n||m.test(e)?g(e.slice(2),n?2:8):p.test(e)?u:+e}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",u=NaN,d="[object Symbol]",h=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,g=parseInt,v="object"==(void 0===t?"undefined":l(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,b=v||y||Function("return this")(),w=Object.prototype.toString,_=Math.max,x=Math.min,C=function(){return b.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function r(t){var n=m,i=g;return m=g=void 0,T=t,y=e.apply(i,n)}function s(e){return T=e,b=setTimeout(u,t),E?r(e):y}function a(e){var n=t-(e-C);return k?_(n,v-(e-T)):n}function c(e){var n=e-C;return void 0===C||n>=t||n<0||k&&e-T>=v}function u(){var e=x();return c(e)?d(e):void(b=setTimeout(u,a(e)))}function d(e){return b=void 0,A&&m?r(e):(m=g=void 0,y)}function h(){void 0!==b&&clearTimeout(b),T=0,m=C=g=b=void 0}function p(){return void 0===b?y:d(x())}function f(){var e=x(),n=c(e);if(m=arguments,g=this,C=e,n){if(void 0===b)return s(C);if(k)return b=setTimeout(u,t),r(C)}return void 0===b&&(b=setTimeout(u,t)),y}var m,g,v,y,b,C,T=0,E=!1,k=!1,A=!0;if("function"!=typeof e)throw new TypeError(l);return t=o(t)||0,i(n)&&(E=!!n.leading,v=(k="maxWait"in n)?w(o(n.maxWait)||0,t):v,A="trailing"in n?!!n.trailing:A),f.cancel=h,f.flush=p,f}function i(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":a(e))}function s(e){return"symbol"==(void 0===e?"undefined":a(e))||r(e)&&b.call(e)==u}function o(e){if("number"==typeof e)return e;if(s(e))return c;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||f.test(e)?m(e.slice(2),n?2:8):h.test(e)?c:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",c=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,g="object"==(void 0===t?"undefined":a(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,y=g||v||Function("return this")(),b=Object.prototype.toString,w=Math.max,_=Math.min,x=function(){return y.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,i=void 0;for(t=0;t<e.length;t+=1){if((i=e[t]).dataset&&i.dataset.aos)return!0;if(i.children&&n(i.children))return!0}return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!i()}function s(e,t){var n=window.document,r=new(i())(o);a=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(i)))return a()}))}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){};t.default={isSupported:r,ready:s}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){n(this,e)}return r(e,[{key:"phone",value:function(){var e=i();return!(!s.test(e)&&!o.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!a.test(e)&&!l.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},i=function(e,t){var i=window.pageYOffset,r=window.innerHeight;e.forEach((function(e,s){n(e,r+i,t)}))};t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(12)),s=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)})),e};t.default=s},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(13)),s=function(e,t){var n=0,i=0,s=window.innerHeight,o={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(o.offset&&!isNaN(o.offset)&&(i=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(e=document.querySelectorAll(o.anchor)[0]),n=(0,r.default)(e).top,o.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=s/2;break;case"bottom-center":n+=s/2+e.offsetHeight;break;case"center-center":n+=s/2+e.offsetHeight/2;break;case"top-top":n+=s;break;case"bottom-top":n+=e.offsetHeight+s;break;case"center-top":n+=e.offsetHeight/2+s}return o.anchorPlacement||o.offset||isNaN(t)||(i=t),n+i};t.default=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},840:function(e,t,n){var i;!function(r,s,o,a){"use strict";var l,c=["","webkit","Moz","MS","ms","o"],u=s.createElement("div"),d="function",h=Math.round,p=Math.abs,f=Date.now;function m(e,t,n){return setTimeout(x(e,n),t)}function g(e,t,n){return!!Array.isArray(e)&&(v(e,n[t],n),!0)}function v(e,t,n){var i;if(e)if(e.forEach)e.forEach(t,n);else if(e.length!==a)for(i=0;i<e.length;)t.call(n,e[i],i,e),i++;else for(i in e)e.hasOwnProperty(i)&&t.call(n,e[i],i,e)}function y(e,t,n){var i="DEPRECATED METHOD: "+t+"\n"+n+" AT \n";return function(){var t=new Error("get-stack-trace"),n=t&&t.stack?t.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=r.console&&(r.console.warn||r.console.log);return s&&s.call(r.console,i,n),e.apply(this,arguments)}}l="function"!=typeof Object.assign?function(e){if(e===a||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(t[r]=i[r])}return t}:Object.assign;var b=y((function(e,t,n){for(var i=Object.keys(t),r=0;r<i.length;)(!n||n&&e[i[r]]===a)&&(e[i[r]]=t[i[r]]),r++;return e}),"extend","Use `assign`."),w=y((function(e,t){return b(e,t,!0)}),"merge","Use `assign`.");function _(e,t,n){var i,r=t.prototype;(i=e.prototype=Object.create(r)).constructor=e,i._super=r,n&&l(i,n)}function x(e,t){return function(){return e.apply(t,arguments)}}function C(e,t){return typeof e==d?e.apply(t&&t[0]||a,t):e}function T(e,t){return e===a?t:e}function E(e,t,n){v(S(t),(function(t){e.addEventListener(t,n,!1)}))}function k(e,t,n){v(S(t),(function(t){e.removeEventListener(t,n,!1)}))}function A(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}function $(e,t){return e.indexOf(t)>-1}function S(e){return e.trim().split(/\s+/g)}function D(e,t,n){if(e.indexOf&&!n)return e.indexOf(t);for(var i=0;i<e.length;){if(n&&e[i][n]==t||!n&&e[i]===t)return i;i++}return-1}function j(e){return Array.prototype.slice.call(e,0)}function q(e,t,n){for(var i=[],r=[],s=0;s<e.length;){var o=t?e[s][t]:e[s];D(r,o)<0&&i.push(e[s]),r[s]=o,s++}return n&&(i=t?i.sort((function(e,n){return e[t]>n[t]})):i.sort()),i}function O(e,t){for(var n,i,r=t[0].toUpperCase()+t.slice(1),s=0;s<c.length;){if((i=(n=c[s])?n+r:t)in e)return i;s++}return a}var L=1;function N(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||r}var P="ontouchstart"in r,z=O(r,"PointerEvent")!==a,M=P&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),I="touch",R="mouse",H=25,F=1,W=2,B=4,U=8,G=1,V=2,Y=4,X=8,Z=16,Q=V|Y,K=X|Z,J=Q|K,ee=["x","y"],te=["clientX","clientY"];function ne(e,t){var n=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){C(e.options.enable,[e])&&n.handler(t)},this.init()}function ie(e,t,n){var i=n.pointers.length,r=n.changedPointers.length,s=t&F&&i-r==0,o=t&(B|U)&&i-r==0;n.isFirst=!!s,n.isFinal=!!o,s&&(e.session={}),n.eventType=t,function(e,t){var n=e.session,i=t.pointers,r=i.length;n.firstInput||(n.firstInput=re(t));r>1&&!n.firstMultiple?n.firstMultiple=re(t):1===r&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,l=o?o.center:s.center,c=t.center=se(i);t.timeStamp=f(),t.deltaTime=t.timeStamp-s.timeStamp,t.angle=ce(l,c),t.distance=le(l,c),function(e,t){var n=t.center,i=e.offsetDelta||{},r=e.prevDelta||{},s=e.prevInput||{};t.eventType!==F&&s.eventType!==B||(r=e.prevDelta={x:s.deltaX||0,y:s.deltaY||0},i=e.offsetDelta={x:n.x,y:n.y});t.deltaX=r.x+(n.x-i.x),t.deltaY=r.y+(n.y-i.y)}(n,t),t.offsetDirection=ae(t.deltaX,t.deltaY);var u=oe(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=u.x,t.overallVelocityY=u.y,t.overallVelocity=p(u.x)>p(u.y)?u.x:u.y,t.scale=o?(d=o.pointers,h=i,le(h[0],h[1],te)/le(d[0],d[1],te)):1,t.rotation=o?function(e,t){return ce(t[1],t[0],te)+ce(e[1],e[0],te)}(o.pointers,i):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length,function(e,t){var n,i,r,s,o=e.lastInterval||t,l=t.timeStamp-o.timeStamp;if(t.eventType!=U&&(l>H||o.velocity===a)){var c=t.deltaX-o.deltaX,u=t.deltaY-o.deltaY,d=oe(l,c,u);i=d.x,r=d.y,n=p(d.x)>p(d.y)?d.x:d.y,s=ae(c,u),e.lastInterval=t}else n=o.velocity,i=o.velocityX,r=o.velocityY,s=o.direction;t.velocity=n,t.velocityX=i,t.velocityY=r,t.direction=s}(n,t);var d,h;var m=e.element;A(t.srcEvent.target,m)&&(m=t.srcEvent.target);t.target=m}(e,n),e.emit("hammer.input",n),e.recognize(n),e.session.prevInput=n}function re(e){for(var t=[],n=0;n<e.pointers.length;)t[n]={clientX:h(e.pointers[n].clientX),clientY:h(e.pointers[n].clientY)},n++;return{timeStamp:f(),pointers:t,center:se(t),deltaX:e.deltaX,deltaY:e.deltaY}}function se(e){var t=e.length;if(1===t)return{x:h(e[0].clientX),y:h(e[0].clientY)};for(var n=0,i=0,r=0;r<t;)n+=e[r].clientX,i+=e[r].clientY,r++;return{x:h(n/t),y:h(i/t)}}function oe(e,t,n){return{x:t/e||0,y:n/e||0}}function ae(e,t){return e===t?G:p(e)>=p(t)?e<0?V:Y:t<0?X:Z}function le(e,t,n){n||(n=ee);var i=t[n[0]]-e[n[0]],r=t[n[1]]-e[n[1]];return Math.sqrt(i*i+r*r)}function ce(e,t,n){n||(n=ee);var i=t[n[0]]-e[n[0]],r=t[n[1]]-e[n[1]];return 180*Math.atan2(r,i)/Math.PI}ne.prototype={handler:function(){},init:function(){this.evEl&&E(this.element,this.evEl,this.domHandler),this.evTarget&&E(this.target,this.evTarget,this.domHandler),this.evWin&&E(N(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&k(this.element,this.evEl,this.domHandler),this.evTarget&&k(this.target,this.evTarget,this.domHandler),this.evWin&&k(N(this.element),this.evWin,this.domHandler)}};var ue={mousedown:F,mousemove:W,mouseup:B},de="mousedown",he="mousemove mouseup";function pe(){this.evEl=de,this.evWin=he,this.pressed=!1,ne.apply(this,arguments)}_(pe,ne,{handler:function(e){var t=ue[e.type];t&F&&0===e.button&&(this.pressed=!0),t&W&&1!==e.which&&(t=B),this.pressed&&(t&B&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:R,srcEvent:e}))}});var fe={pointerdown:F,pointermove:W,pointerup:B,pointercancel:U,pointerout:U},me={2:I,3:"pen",4:R,5:"kinect"},ge="pointerdown",ve="pointermove pointerup pointercancel";function ye(){this.evEl=ge,this.evWin=ve,ne.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(ge="MSPointerDown",ve="MSPointerMove MSPointerUp MSPointerCancel"),_(ye,ne,{handler:function(e){var t=this.store,n=!1,i=e.type.toLowerCase().replace("ms",""),r=fe[i],s=me[e.pointerType]||e.pointerType,o=s==I,a=D(t,e.pointerId,"pointerId");r&F&&(0===e.button||o)?a<0&&(t.push(e),a=t.length-1):r&(B|U)&&(n=!0),a<0||(t[a]=e,this.callback(this.manager,r,{pointers:t,changedPointers:[e],pointerType:s,srcEvent:e}),n&&t.splice(a,1))}});var be={touchstart:F,touchmove:W,touchend:B,touchcancel:U};function we(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,ne.apply(this,arguments)}function _e(e,t){var n=j(e.touches),i=j(e.changedTouches);return t&(B|U)&&(n=q(n.concat(i),"identifier",!0)),[n,i]}_(we,ne,{handler:function(e){var t=be[e.type];if(t===F&&(this.started=!0),this.started){var n=_e.call(this,e,t);t&(B|U)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:I,srcEvent:e})}}});var xe={touchstart:F,touchmove:W,touchend:B,touchcancel:U},Ce="touchstart touchmove touchend touchcancel";function Te(){this.evTarget=Ce,this.targetIds={},ne.apply(this,arguments)}function Ee(e,t){var n=j(e.touches),i=this.targetIds;if(t&(F|W)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,s,o=j(e.changedTouches),a=[],l=this.target;if(s=n.filter((function(e){return A(e.target,l)})),t===F)for(r=0;r<s.length;)i[s[r].identifier]=!0,r++;for(r=0;r<o.length;)i[o[r].identifier]&&a.push(o[r]),t&(B|U)&&delete i[o[r].identifier],r++;return a.length?[q(s.concat(a),"identifier",!0),a]:void 0}_(Te,ne,{handler:function(e){var t=xe[e.type],n=Ee.call(this,e,t);n&&this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:I,srcEvent:e})}});var ke=2500;function Ae(){ne.apply(this,arguments);var e=x(this.handler,this);this.touch=new Te(this.manager,e),this.mouse=new pe(this.manager,e),this.primaryTouch=null,this.lastTouches=[]}function $e(e,t){e&F?(this.primaryTouch=t.changedPointers[0].identifier,Se.call(this,t)):e&(B|U)&&Se.call(this,t)}function Se(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var n={x:t.clientX,y:t.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout((function(){var e=i.indexOf(n);e>-1&&i.splice(e,1)}),ke)}}function De(e){for(var t=e.srcEvent.clientX,n=e.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],s=Math.abs(t-r.x),o=Math.abs(n-r.y);if(s<=25&&o<=25)return!0}return!1}_(Ae,ne,{handler:function(e,t,n){var i=n.pointerType==I,r=n.pointerType==R;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)$e.call(this,t,n);else if(r&&De.call(this,n))return;this.callback(e,t,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var je=O(u.style,"touchAction"),qe=je!==a,Oe="compute",Le="auto",Ne="manipulation",Pe="none",ze="pan-x",Me="pan-y",Ie=function(){if(!qe)return!1;var e={},t=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){e[n]=!t||r.CSS.supports("touch-action",n)})),e}();function Re(e,t){this.manager=e,this.set(t)}Re.prototype={set:function(e){e==Oe&&(e=this.compute()),qe&&this.manager.element.style&&Ie[e]&&(this.manager.element.style[je]=e),this.actions=e.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var e=[];return v(this.manager.recognizers,(function(t){C(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))})),function(e){if($(e,Pe))return Pe;var t=$(e,ze),n=$(e,Me);if(t&&n)return Pe;if(t||n)return t?ze:Me;if($(e,Ne))return Ne;return Le}(e.join(" "))},preventDefaults:function(e){var t=e.srcEvent,n=e.offsetDirection;if(this.manager.session.prevented)t.preventDefault();else{var i=this.actions,r=$(i,Pe)&&!Ie[Pe],s=$(i,Me)&&!Ie[Me],o=$(i,ze)&&!Ie[ze];if(r){var a=1===e.pointers.length,l=e.distance<2,c=e.deltaTime<250;if(a&&l&&c)return}if(!o||!s)return r||s&&n&Q||o&&n&K?this.preventSrc(t):void 0}},preventSrc:function(e){this.manager.session.prevented=!0,e.preventDefault()}};var He=1,Fe=2,We=4,Be=8,Ue=Be,Ge=16,Ve=32;function Ye(e){this.options=l({},this.defaults,e||{}),this.id=L++,this.manager=null,this.options.enable=T(this.options.enable,!0),this.state=He,this.simultaneous={},this.requireFail=[]}function Xe(e){return e&Ge?"cancel":e&Be?"end":e&We?"move":e&Fe?"start":""}function Ze(e){return e==Z?"down":e==X?"up":e==V?"left":e==Y?"right":""}function Qe(e,t){var n=t.manager;return n?n.get(e):e}function Ke(){Ye.apply(this,arguments)}function Je(){Ke.apply(this,arguments),this.pX=null,this.pY=null}function et(){Ke.apply(this,arguments)}function tt(){Ye.apply(this,arguments),this._timer=null,this._input=null}function nt(){Ke.apply(this,arguments)}function it(){Ke.apply(this,arguments)}function rt(){Ye.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function st(e,t){return(t=t||{}).recognizers=T(t.recognizers,st.defaults.preset),new ot(e,t)}Ye.prototype={defaults:{},set:function(e){return l(this.options,e),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(e){if(g(e,"recognizeWith",this))return this;var t=this.simultaneous;return t[(e=Qe(e,this)).id]||(t[e.id]=e,e.recognizeWith(this)),this},dropRecognizeWith:function(e){return g(e,"dropRecognizeWith",this)||(e=Qe(e,this),delete this.simultaneous[e.id]),this},requireFailure:function(e){if(g(e,"requireFailure",this))return this;var t=this.requireFail;return-1===D(t,e=Qe(e,this))&&(t.push(e),e.requireFailure(this)),this},dropRequireFailure:function(e){if(g(e,"dropRequireFailure",this))return this;e=Qe(e,this);var t=D(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(e){return!!this.simultaneous[e.id]},emit:function(e){var t=this,n=this.state;function i(n){t.manager.emit(n,e)}n<Be&&i(t.options.event+Xe(n)),i(t.options.event),e.additionalEvent&&i(e.additionalEvent),n>=Be&&i(t.options.event+Xe(n))},tryEmit:function(e){if(this.canEmit())return this.emit(e);this.state=Ve},canEmit:function(){for(var e=0;e<this.requireFail.length;){if(!(this.requireFail[e].state&(Ve|He)))return!1;e++}return!0},recognize:function(e){var t=l({},e);if(!C(this.options.enable,[this,t]))return this.reset(),void(this.state=Ve);this.state&(Ue|Ge|Ve)&&(this.state=He),this.state=this.process(t),this.state&(Fe|We|Be|Ge)&&this.tryEmit(t)},process:function(e){},getTouchAction:function(){},reset:function(){}},_(Ke,Ye,{defaults:{pointers:1},attrTest:function(e){var t=this.options.pointers;return 0===t||e.pointers.length===t},process:function(e){var t=this.state,n=e.eventType,i=t&(Fe|We),r=this.attrTest(e);return i&&(n&U||!r)?t|Ge:i||r?n&B?t|Be:t&Fe?t|We:Fe:Ve}}),_(Je,Ke,{defaults:{event:"pan",threshold:10,pointers:1,direction:J},getTouchAction:function(){var e=this.options.direction,t=[];return e&Q&&t.push(Me),e&K&&t.push(ze),t},directionTest:function(e){var t=this.options,n=!0,i=e.distance,r=e.direction,s=e.deltaX,o=e.deltaY;return r&t.direction||(t.direction&Q?(r=0===s?G:s<0?V:Y,n=s!=this.pX,i=Math.abs(e.deltaX)):(r=0===o?G:o<0?X:Z,n=o!=this.pY,i=Math.abs(e.deltaY))),e.direction=r,n&&i>t.threshold&&r&t.direction},attrTest:function(e){return Ke.prototype.attrTest.call(this,e)&&(this.state&Fe||!(this.state&Fe)&&this.directionTest(e))},emit:function(e){this.pX=e.deltaX,this.pY=e.deltaY;var t=Ze(e.direction);t&&(e.additionalEvent=this.options.event+t),this._super.emit.call(this,e)}}),_(et,Ke,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Pe]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||this.state&Fe)},emit:function(e){if(1!==e.scale){var t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}this._super.emit.call(this,e)}}),_(tt,Ye,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Le]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,i=e.distance<t.threshold,r=e.deltaTime>t.time;if(this._input=e,!i||!n||e.eventType&(B|U)&&!r)this.reset();else if(e.eventType&F)this.reset(),this._timer=m((function(){this.state=Ue,this.tryEmit()}),t.time,this);else if(e.eventType&B)return Ue;return Ve},reset:function(){clearTimeout(this._timer)},emit:function(e){this.state===Ue&&(e&&e.eventType&B?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),_(nt,Ke,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Pe]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||this.state&Fe)}}),_(it,Ke,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Q|K,pointers:1},getTouchAction:function(){return Je.prototype.getTouchAction.call(this)},attrTest:function(e){var t,n=this.options.direction;return n&(Q|K)?t=e.overallVelocity:n&Q?t=e.overallVelocityX:n&K&&(t=e.overallVelocityY),this._super.attrTest.call(this,e)&&n&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers==this.options.pointers&&p(t)>this.options.velocity&&e.eventType&B},emit:function(e){var t=Ze(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)}}),_(rt,Ye,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ne]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,i=e.distance<t.threshold,r=e.deltaTime<t.time;if(this.reset(),e.eventType&F&&0===this.count)return this.failTimeout();if(i&&r&&n){if(e.eventType!=B)return this.failTimeout();var s=!this.pTime||e.timeStamp-this.pTime<t.interval,o=!this.pCenter||le(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,o&&s?this.count+=1:this.count=1,this._input=e,0===this.count%t.taps)return this.hasRequireFailures()?(this._timer=m((function(){this.state=Ue,this.tryEmit()}),t.interval,this),Fe):Ue}return Ve},failTimeout:function(){return this._timer=m((function(){this.state=Ve}),this.options.interval,this),Ve},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ue&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),st.VERSION="2.0.7",st.defaults={domEvents:!1,touchAction:Oe,enable:!0,inputTarget:null,inputClass:null,preset:[[nt,{enable:!1}],[et,{enable:!1},["rotate"]],[it,{direction:Q}],[Je,{direction:Q},["swipe"]],[rt],[rt,{event:"doubletap",taps:2},["tap"]],[tt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function ot(e,t){var n;this.options=l({},st.defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((n=this).options.inputClass||(z?ye:M?Te:P?Ae:pe))(n,ie),this.touchAction=new Re(this,this.options.touchAction),at(this,!0),v(this.options.recognizers,(function(e){var t=this.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])}),this)}function at(e,t){var n,i=e.element;i.style&&(v(e.options.cssProps,(function(r,s){n=O(i.style,s),t?(e.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=e.oldCssProps[n]||""})),t||(e.oldCssProps={}))}ot.prototype={set:function(e){return l(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},stop:function(e){this.session.stopped=e?2:1},recognize:function(e){var t=this.session;if(!t.stopped){var n;this.touchAction.preventDefaults(e);var i=this.recognizers,r=t.curRecognizer;(!r||r&&r.state&Ue)&&(r=t.curRecognizer=null);for(var s=0;s<i.length;)n=i[s],2===t.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(e),!r&&n.state&(Fe|We|Be)&&(r=t.curRecognizer=n),s++}},get:function(e){if(e instanceof Ye)return e;for(var t=this.recognizers,n=0;n<t.length;n++)if(t[n].options.event==e)return t[n];return null},add:function(e){if(g(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},remove:function(e){if(g(e,"remove",this))return this;if(e=this.get(e)){var t=this.recognizers,n=D(t,e);-1!==n&&(t.splice(n,1),this.touchAction.update())}return this},on:function(e,t){if(e!==a&&t!==a){var n=this.handlers;return v(S(e),(function(e){n[e]=n[e]||[],n[e].push(t)})),this}},off:function(e,t){if(e!==a){var n=this.handlers;return v(S(e),(function(e){t?n[e]&&n[e].splice(D(n[e],t),1):delete n[e]})),this}},emit:function(e,t){this.options.domEvents&&function(e,t){var n=s.createEvent("Event");n.initEvent(e,!0,!0),n.gesture=t,t.target.dispatchEvent(n)}(e,t);var n=this.handlers[e]&&this.handlers[e].slice();if(n&&n.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](t),i++}},destroy:function(){this.element&&at(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},l(st,{INPUT_START:F,INPUT_MOVE:W,INPUT_END:B,INPUT_CANCEL:U,STATE_POSSIBLE:He,STATE_BEGAN:Fe,STATE_CHANGED:We,STATE_ENDED:Be,STATE_RECOGNIZED:Ue,STATE_CANCELLED:Ge,STATE_FAILED:Ve,DIRECTION_NONE:G,DIRECTION_LEFT:V,DIRECTION_RIGHT:Y,DIRECTION_UP:X,DIRECTION_DOWN:Z,DIRECTION_HORIZONTAL:Q,DIRECTION_VERTICAL:K,DIRECTION_ALL:J,Manager:ot,Input:ne,TouchAction:Re,TouchInput:Te,MouseInput:pe,PointerEventInput:ye,TouchMouseInput:Ae,SingleTouchInput:we,Recognizer:Ye,AttrRecognizer:Ke,Tap:rt,Pan:Je,Swipe:it,Pinch:et,Rotate:nt,Press:tt,on:E,off:k,each:v,merge:w,extend:b,assign:l,inherit:_,bindFn:x,prefixed:O}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=st,(i=function(){return st}.call(t,n,t,e))===a||(e.exports=i)}(window,document)},587:function(e,t,n){var i,r,s;r=[n(755)],i=function(e){e.extend(e.fn,{validate:function(t){if(this.length){var n=e.data(this[0],"validator");return n||(this.attr("novalidate","novalidate"),n=new e.validator(t,this[0]),e.data(this[0],"validator",n),n.settings.onsubmit&&(this.on("click.validate",":submit",(function(t){n.submitButton=t.currentTarget,e(this).hasClass("cancel")&&(n.cancelSubmit=!0),void 0!==e(this).attr("formnovalidate")&&(n.cancelSubmit=!0)})),this.on("submit.validate",(function(t){function i(){var i,r;return n.submitButton&&(n.settings.submitHandler||n.formSubmitted)&&(i=e("<input type='hidden'/>").attr("name",n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)),!(n.settings.submitHandler&&!n.settings.debug)||(r=n.settings.submitHandler.call(n,n.currentForm,t),i&&i.remove(),void 0!==r&&r)}return n.settings.debug&&t.preventDefault(),n.cancelSubmit?(n.cancelSubmit=!1,i()):n.form()?n.pendingRequest?(n.formSubmitted=!0,!1):i():(n.focusInvalid(),!1)}))),n)}t&&t.debug&&window.console},valid:function(){var t,n,i;return e(this[0]).is("form")?t=this.validate().form():(i=[],t=!0,n=e(this[0].form).validate(),this.each((function(){(t=n.element(this)&&t)||(i=i.concat(n.errorList))})),n.errorList=i),t},rules:function(t,n){var i,r,s,o,a,l,c=this[0],u=void 0!==this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=c&&(!c.form&&u&&(c.form=this.closest("form")[0],c.name=this.attr("name")),null!=c.form)){if(t)switch(r=(i=e.data(c.form,"validator").settings).rules,s=e.validator.staticRules(c),t){case"add":e.extend(s,e.validator.normalizeRule(n)),delete s.messages,r[c.name]=s,n.messages&&(i.messages[c.name]=e.extend(i.messages[c.name],n.messages));break;case"remove":return n?(l={},e.each(n.split(/\s/),(function(e,t){l[t]=s[t],delete s[t]})),l):(delete r[c.name],s)}return(o=e.validator.normalizeRules(e.extend({},e.validator.classRules(c),e.validator.attributeRules(c),e.validator.dataRules(c),e.validator.staticRules(c)),c)).required&&(a=o.required,delete o.required,o=e.extend({required:a},o)),o.remote&&(a=o.remote,delete o.remote,o=e.extend(o,{remote:a})),o}}});var t,n=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};e.extend(e.expr.pseudos||e.expr[":"],{blank:function(t){return!n(""+e(t).val())},filled:function(t){var i=e(t).val();return null!==i&&!!n(""+i)},unchecked:function(t){return!e(t).prop("checked")}}),e.validator=function(t,n){this.settings=e.extend(!0,{},e.validator.defaults,t),this.currentForm=n,this.init()},e.validator.format=function(t,n){return 1===arguments.length?function(){var n=e.makeArray(arguments);return n.unshift(t),e.validator.format.apply(this,n)}:(void 0===n||(arguments.length>2&&n.constructor!==Array&&(n=e.makeArray(arguments).slice(1)),n.constructor!==Array&&(n=[n]),e.each(n,(function(e,n){t=t.replace(new RegExp("\\{"+e+"\\}","g"),(function(){return n}))}))),t)},e.extend(e.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:e([]),errorLabelContainer:e([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(e){this.lastActive=e,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,e,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(e)))},onfocusout:function(e){this.checkable(e)||!(e.name in this.submitted)&&this.optional(e)||this.element(e)},onkeyup:function(t,n){var i=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===n.which&&""===this.elementValue(t)||-1!==e.inArray(n.keyCode,i)||(t.name in this.submitted||t.name in this.invalid)&&this.element(t)},onclick:function(e){e.name in this.submitted?this.element(e):e.parentNode.name in this.submitted&&this.element(e.parentNode)},highlight:function(t,n,i){"radio"===t.type?this.findByName(t.name).addClass(n).removeClass(i):e(t).addClass(n).removeClass(i)},unhighlight:function(t,n,i){"radio"===t.type?this.findByName(t.name).removeClass(n).addClass(i):e(t).removeClass(n).addClass(i)}},setDefaults:function(t){e.extend(e.validator.defaults,t)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:e.validator.format("Please enter no more than {0} characters."),minlength:e.validator.format("Please enter at least {0} characters."),rangelength:e.validator.format("Please enter a value between {0} and {1} characters long."),range:e.validator.format("Please enter a value between {0} and {1}."),max:e.validator.format("Please enter a value less than or equal to {0}."),min:e.validator.format("Please enter a value greater than or equal to {0}."),step:e.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){this.labelContainer=e(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||e(this.currentForm),this.containers=e(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var t,n=this.currentForm,i=this.groups={};function r(t){var i=void 0!==e(this).attr("contenteditable")&&"false"!==e(this).attr("contenteditable");if(!this.form&&i&&(this.form=e(this).closest("form")[0],this.name=e(this).attr("name")),n===this.form){var r=e.data(this.form,"validator"),s="on"+t.type.replace(/^validate/,""),o=r.settings;o[s]&&!e(this).is(o.ignore)&&o[s].call(r,this,t)}}e.each(this.settings.groups,(function(t,n){"string"==typeof n&&(n=n.split(/\s/)),e.each(n,(function(e,n){i[n]=t}))})),t=this.settings.rules,e.each(t,(function(n,i){t[n]=e.validator.normalizeRule(i)})),e(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",r).on("click.validate","select, option, [type='radio'], [type='checkbox']",r),this.settings.invalidHandler&&e(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),e.extend(this.submitted,this.errorMap),this.invalid=e.extend({},this.errorMap),this.valid()||e(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var e=0,t=this.currentElements=this.elements();t[e];e++)this.check(t[e]);return this.valid()},element:function(t){var n,i,r=this.clean(t),s=this.validationTargetFor(r),o=this,a=!0;return void 0===s?delete this.invalid[r.name]:(this.prepareElement(s),this.currentElements=e(s),(i=this.groups[s.name])&&e.each(this.groups,(function(e,t){t===i&&e!==s.name&&(r=o.validationTargetFor(o.clean(o.findByName(e))))&&r.name in o.invalid&&(o.currentElements.push(r),a=o.check(r)&&a)})),n=!1!==this.check(s),a=a&&n,this.invalid[s.name]=!n,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e(t).attr("aria-invalid",!n)),a},showErrors:function(t){if(t){var n=this;e.extend(this.errorMap,t),this.errorList=e.map(this.errorMap,(function(e,t){return{message:e,element:n.findByName(t)[0]}})),this.successList=e.grep(this.successList,(function(e){return!(e.name in t)}))}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){e.fn.resetForm&&e(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var t=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(t)},resetElements:function(e){var t;if(this.settings.unhighlight)for(t=0;e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,""),this.findByName(e[t].name).removeClass(this.settings.validClass);else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(e){var t,n=0;for(t in e)void 0!==e[t]&&null!==e[t]&&!1!==e[t]&&n++;return n},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(e){e.not(this.containers).text(""),this.addWrapper(e).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{e(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(e){}},findLastActive:function(){var t=this.lastActive;return t&&1===e.grep(this.errorList,(function(e){return e.element.name===t.name})).length&&t},elements:function(){var t=this,n={};return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function(){var i=this.name||e(this).attr("name"),r=void 0!==e(this).attr("contenteditable")&&"false"!==e(this).attr("contenteditable");return!i&&t.settings.debug&&window.console,r&&(this.form=e(this).closest("form")[0],this.name=i),!(this.form!==t.currentForm||i in n||!t.objectLength(e(this).rules())||(n[i]=!0,0))}))},clean:function(t){return e(t)[0]},errors:function(){var t=this.settings.errorClass.split(" ").join(".");return e(this.settings.errorElement+"."+t,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=e([]),this.toHide=e([])},reset:function(){this.resetInternals(),this.currentElements=e([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(e){this.reset(),this.toHide=this.errorsFor(e)},elementValue:function(t){var n,i,r=e(t),s=t.type,o=void 0!==r.attr("contenteditable")&&"false"!==r.attr("contenteditable");return"radio"===s||"checkbox"===s?this.findByName(t.name).filter(":checked").val():"number"===s&&void 0!==t.validity?t.validity.badInput?"NaN":r.val():(n=o?r.text():r.val(),"file"===s?"C:\\fakepath\\"===n.substr(0,12)?n.substr(12):(i=n.lastIndexOf("/"))>=0||(i=n.lastIndexOf("\\"))>=0?n.substr(i+1):n:"string"==typeof n?n.replace(/\r/g,""):n)},check:function(t){t=this.validationTargetFor(this.clean(t));var n,i,r,s,o=e(t).rules(),a=e.map(o,(function(e,t){return t})).length,l=!1,c=this.elementValue(t);for(i in"function"==typeof o.normalizer?s=o.normalizer:"function"==typeof this.settings.normalizer&&(s=this.settings.normalizer),s&&(c=s.call(t,c),delete o.normalizer),o){r={method:i,parameters:o[i]};try{if("dependency-mismatch"===(n=e.validator.methods[i].call(this,c,t,r.parameters))&&1===a){l=!0;continue}if(l=!1,"pending"===n)return void(this.toHide=this.toHide.not(this.errorsFor(t)));if(!n)return this.formatAndAdd(t,r),!1}catch(e){throw this.settings.debug&&window.console,e instanceof TypeError&&(e.message+=".  Exception occurred when checking element "+t.id+", check the '"+r.method+"' method."),e}}if(!l)return this.objectLength(o)&&this.successList.push(t),!0},customDataMessage:function(t,n){return e(t).data("msg"+n.charAt(0).toUpperCase()+n.substring(1).toLowerCase())||e(t).data("msg")},customMessage:function(e,t){var n=this.settings.messages[e];return n&&(n.constructor===String?n:n[t])},findDefined:function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]},defaultMessage:function(t,n){"string"==typeof n&&(n={method:n});var i=this.findDefined(this.customMessage(t.name,n.method),this.customDataMessage(t,n.method),!this.settings.ignoreTitle&&t.title||void 0,e.validator.messages[n.method],"<strong>Warning: No message defined for "+t.name+"</strong>"),r=/\$?\{(\d+)\}/g;return"function"==typeof i?i=i.call(this,n.parameters,t):r.test(i)&&(i=e.validator.format(i.replace(r,"{$1}"),n.parameters)),i},formatAndAdd:function(e,t){var n=this.defaultMessage(e,t);this.errorList.push({message:n,element:e,method:t.method}),this.errorMap[e.name]=n,this.submitted[e.name]=n},addWrapper:function(e){return this.settings.wrapper&&(e=e.add(e.parent(this.settings.wrapper))),e},defaultShowErrors:function(){var e,t,n;for(e=0;this.errorList[e];e++)n=this.errorList[e],this.settings.highlight&&this.settings.highlight.call(this,n.element,this.settings.errorClass,this.settings.validClass),this.showLabel(n.element,n.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(e=0;this.successList[e];e++)this.showLabel(this.successList[e]);if(this.settings.unhighlight)for(e=0,t=this.validElements();t[e];e++)this.settings.unhighlight.call(this,t[e],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return e(this.errorList).map((function(){return this.element}))},showLabel:function(t,n){var i,r,s,o,a=this.errorsFor(t),l=this.idOrName(t),c=e(t).attr("aria-describedby");a.length?(a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),a.html(n)):(i=a=e("<"+this.settings.errorElement+">").attr("id",l+"-error").addClass(this.settings.errorClass).html(n||""),this.settings.wrapper&&(i=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(i):this.settings.errorPlacement?this.settings.errorPlacement.call(this,i,e(t)):i.insertAfter(t),a.is("label")?a.attr("for",l):0===a.parents("label[for='"+this.escapeCssMeta(l)+"']").length&&(s=a.attr("id"),c?c.match(new RegExp("\\b"+this.escapeCssMeta(s)+"\\b"))||(c+=" "+s):c=s,e(t).attr("aria-describedby",c),(r=this.groups[t.name])&&(o=this,e.each(o.groups,(function(t,n){n===r&&e("[name='"+o.escapeCssMeta(t)+"']",o.currentForm).attr("aria-describedby",a.attr("id"))}))))),!n&&this.settings.success&&(a.text(""),"string"==typeof this.settings.success?a.addClass(this.settings.success):this.settings.success(a,t)),this.toShow=this.toShow.add(a)},errorsFor:function(t){var n=this.escapeCssMeta(this.idOrName(t)),i=e(t).attr("aria-describedby"),r="label[for='"+n+"'], label[for='"+n+"'] *";return i&&(r=r+", #"+this.escapeCssMeta(i).replace(/\s+/g,", #")),this.errors().filter(r)},escapeCssMeta:function(e){return void 0===e?"":e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(e){return this.groups[e.name]||(this.checkable(e)?e.name:e.id||e.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name)),e(t).not(this.settings.ignore)[0]},checkable:function(e){return/radio|checkbox/i.test(e.type)},findByName:function(t){return e(this.currentForm).find("[name='"+this.escapeCssMeta(t)+"']")},getLength:function(t,n){switch(n.nodeName.toLowerCase()){case"select":return e("option:selected",n).length;case"input":if(this.checkable(n))return this.findByName(n.name).filter(":checked").length}return t.length},depend:function(e,t){return!this.dependTypes[typeof e]||this.dependTypes[typeof e](e,t)},dependTypes:{boolean:function(e){return e},string:function(t,n){return!!e(t,n.form).length},function:function(e,t){return e(t)}},optional:function(t){var n=this.elementValue(t);return!e.validator.methods.required.call(this,n,t)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,e(t).addClass(this.settings.pendingClass),this.pending[t.name]=!0)},stopRequest:function(t,n){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[t.name],e(t).removeClass(this.settings.pendingClass),n&&0===this.pendingRequest&&this.formSubmitted&&this.form()&&0===this.pendingRequest?(e(this.currentForm).trigger("submit"),this.submitButton&&e("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!n&&0===this.pendingRequest&&this.formSubmitted&&(e(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(t,n){return n="string"==typeof n&&n||"remote",e.data(t,"previousValue")||e.data(t,"previousValue",{old:null,valid:!0,message:this.defaultMessage(t,{method:n})})},destroy:function(){this.resetForm(),e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(t,n){t.constructor===String?this.classRuleSettings[t]=n:e.extend(this.classRuleSettings,t)},classRules:function(t){var n={},i=e(t).attr("class");return i&&e.each(i.split(" "),(function(){this in e.validator.classRuleSettings&&e.extend(n,e.validator.classRuleSettings[this])})),n},normalizeAttributeRule:function(e,t,n,i){/min|max|step/.test(n)&&(null===t||/number|range|text/.test(t))&&(i=Number(i),isNaN(i)&&(i=void 0)),i||0===i?e[n]=i:t===n&&"range"!==t&&(e["date"===t?"dateISO":n]=!0)},attributeRules:function(t){var n,i,r={},s=e(t),o=t.getAttribute("type");for(n in e.validator.methods)"required"===n?(""===(i=t.getAttribute(n))&&(i=!0),i=!!i):i=s.attr(n),this.normalizeAttributeRule(r,o,n,i);return r.maxlength&&/-1|2147483647|524288/.test(r.maxlength)&&delete r.maxlength,r},dataRules:function(t){var n,i,r={},s=e(t),o=t.getAttribute("type");for(n in e.validator.methods)""===(i=s.data("rule"+n.charAt(0).toUpperCase()+n.substring(1).toLowerCase()))&&(i=!0),this.normalizeAttributeRule(r,o,n,i);return r},staticRules:function(t){var n={},i=e.data(t.form,"validator");return i.settings.rules&&(n=e.validator.normalizeRule(i.settings.rules[t.name])||{}),n},normalizeRules:function(t,n){return e.each(t,(function(i,r){if(!1!==r){if(r.param||r.depends){var s=!0;switch(typeof r.depends){case"string":s=!!e(r.depends,n.form).length;break;case"function":s=r.depends.call(n,n)}s?t[i]=void 0===r.param||r.param:(e.data(n.form,"validator").resetElements(e(n)),delete t[i])}}else delete t[i]})),e.each(t,(function(e,i){t[e]="function"==typeof i&&"normalizer"!==e?i(n):i})),e.each(["minlength","maxlength"],(function(){t[this]&&(t[this]=Number(t[this]))})),e.each(["rangelength","range"],(function(){var e;t[this]&&(Array.isArray(t[this])?t[this]=[Number(t[this][0]),Number(t[this][1])]:"string"==typeof t[this]&&(e=t[this].replace(/[\[\]]/g,"").split(/[\s,]+/),t[this]=[Number(e[0]),Number(e[1])]))})),e.validator.autoCreateRanges&&(null!=t.min&&null!=t.max&&(t.range=[t.min,t.max],delete t.min,delete t.max),null!=t.minlength&&null!=t.maxlength&&(t.rangelength=[t.minlength,t.maxlength],delete t.minlength,delete t.maxlength)),t},normalizeRule:function(t){if("string"==typeof t){var n={};e.each(t.split(/\s/),(function(){n[this]=!0})),t=n}return t},addMethod:function(t,n,i){e.validator.methods[t]=n,e.validator.messages[t]=void 0!==i?i:e.validator.messages[t],n.length<3&&e.validator.addClassRules(t,e.validator.normalizeRule(t))},methods:{required:function(t,n,i){if(!this.depend(i,n))return"dependency-mismatch";if("select"===n.nodeName.toLowerCase()){var r=e(n).val();return r&&r.length>0}return this.checkable(n)?this.getLength(t,n)>0:null!=t&&t.length>0},email:function(e,t){return this.optional(t)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},url:function(e,t){return this.optional(t)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)},date:(t=!1,function(e,n){return t||(t=!0,this.settings.debug&&window.console),this.optional(n)||!/Invalid|NaN/.test(new Date(e).toString())}),dateISO:function(e,t){return this.optional(t)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)},number:function(e,t){return this.optional(t)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e,t){return this.optional(t)||/^\d+$/.test(e)},minlength:function(e,t,n){var i=Array.isArray(e)?e.length:this.getLength(e,t);return this.optional(t)||i>=n},maxlength:function(e,t,n){var i=Array.isArray(e)?e.length:this.getLength(e,t);return this.optional(t)||i<=n},rangelength:function(e,t,n){var i=Array.isArray(e)?e.length:this.getLength(e,t);return this.optional(t)||i>=n[0]&&i<=n[1]},min:function(e,t,n){return this.optional(t)||e>=n},max:function(e,t,n){return this.optional(t)||e<=n},range:function(e,t,n){return this.optional(t)||e>=n[0]&&e<=n[1]},step:function(t,n,i){var r,s=e(n).attr("type"),o="Step attribute on input type "+s+" is not supported.",a=["text","number","range"],l=new RegExp("\\b"+s+"\\b"),c=function(e){var t=(""+e).match(/(?:\.(\d+))?$/);return t&&t[1]?t[1].length:0},u=function(e){return Math.round(e*Math.pow(10,r))},d=!0;if(s&&!l.test(a.join()))throw new Error(o);return r=c(i),(c(t)>r||u(t)%u(i)!=0)&&(d=!1),this.optional(n)||d},equalTo:function(t,n,i){var r=e(i);return this.settings.onfocusout&&r.not(".validate-equalTo-blur").length&&r.addClass("validate-equalTo-blur").on("blur.validate-equalTo",(function(){e(n).valid()})),t===r.val()},remote:function(t,n,i,r){if(this.optional(n))return"dependency-mismatch";r="string"==typeof r&&r||"remote";var s,o,a,l=this.previousValue(n,r);return this.settings.messages[n.name]||(this.settings.messages[n.name]={}),l.originalMessage=l.originalMessage||this.settings.messages[n.name][r],this.settings.messages[n.name][r]=l.message,i="string"==typeof i&&{url:i}||i,a=e.param(e.extend({data:t},i.data)),l.old===a?l.valid:(l.old=a,s=this,this.startRequest(n),(o={})[n.name]=t,e.ajax(e.extend(!0,{mode:"abort",port:"validate"+n.name,dataType:"json",data:o,context:s.currentForm,success:function(e){var i,o,a,c=!0===e||"true"===e;s.settings.messages[n.name][r]=l.originalMessage,c?(a=s.formSubmitted,s.resetInternals(),s.toHide=s.errorsFor(n),s.formSubmitted=a,s.successList.push(n),s.invalid[n.name]=!1,s.showErrors()):(i={},o=e||s.defaultMessage(n,{method:r,parameters:t}),i[n.name]=l.message=o,s.invalid[n.name]=!0,s.showErrors(i)),l.valid=c,s.stopRequest(n,c)}},i)),"pending")}}});var i,r={};return e.ajaxPrefilter?e.ajaxPrefilter((function(e,t,n){var i=e.port;"abort"===e.mode&&(r[i]&&r[i].abort(),r[i]=n)})):(i=e.ajax,e.ajax=function(t){var n=("mode"in t?t:e.ajaxSettings).mode,s=("port"in t?t:e.ajaxSettings).port;return"abort"===n?(r[s]&&r[s].abort(),r[s]=i.apply(this,arguments),r[s]):i.apply(this,arguments)}),e},void 0===(s="function"==typeof i?i.apply(t,r):i)||(e.exports=s)},755:function(e,t){var n;!function(t,n){"use strict";"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(i,r){"use strict";var s=[],o=Object.getPrototypeOf,a=s.slice,l=s.flat?function(e){return s.flat.call(e)}:function(e){return s.concat.apply([],e)},c=s.push,u=s.indexOf,d={},h=d.toString,p=d.hasOwnProperty,f=p.toString,m=f.call(Object),g={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},b=i.document,w={type:!0,src:!0,nonce:!0,noModule:!0};function _(e,t,n){var i,r,s=(n=n||b).createElement("script");if(s.text=e,t)for(i in w)(r=t[i]||t.getAttribute&&t.getAttribute(i))&&s.setAttribute(i,r);n.head.appendChild(s).parentNode.removeChild(s)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[h.call(e)]||"object":typeof e}var C="3.6.4",T=function(e,t){return new T.fn.init(e,t)};function E(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}T.fn=T.prototype={jquery:C,constructor:T,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(T.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:s.sort,splice:s.splice},T.extend=T.fn.extend=function(){var e,t,n,i,r,s,o=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[a]||{},a++),"object"==typeof o||v(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&o!==i&&(c&&i&&(T.isPlainObject(i)||(r=Array.isArray(i)))?(n=o[t],s=r&&!Array.isArray(n)?[]:r||T.isPlainObject(n)?n:{},r=!1,o[t]=T.extend(c,s,i)):void 0!==i&&(o[t]=i));return o},T.extend({expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==h.call(e))&&(!(t=o(e))||"function"==typeof(n=p.call(t,"constructor")&&t.constructor)&&f.call(n)===m)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){_(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(E(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(E(Object(e))?T.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,s=e.length,o=!n;r<s;r++)!t(e[r],r)!==o&&i.push(e[r]);return i},map:function(e,t,n){var i,r,s=0,o=[];if(E(e))for(i=e.length;s<i;s++)null!=(r=t(e[s],s,n))&&o.push(r);else for(s in e)null!=(r=t(e[s],s,n))&&o.push(r);return l(o)},guid:1,support:g}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=s[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){d["[object "+t+"]"]=t.toLowerCase()}));var k=function(e){var t,n,i,r,s,o,a,l,c,u,d,h,p,f,m,g,v,y,b,w="sizzle"+1*new Date,_=e.document,x=0,C=0,T=le(),E=le(),k=le(),A=le(),$=function(e,t){return e===t&&(d=!0),0},S={}.hasOwnProperty,D=[],j=D.pop,q=D.push,O=D.push,L=D.slice,N=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",z="[\\x20\\t\\r\\n\\f]",M="(?:\\\\[\\da-fA-F]{1,6}"+z+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",I="\\["+z+"*("+M+")(?:"+z+"*([*^$|!~]?=)"+z+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+z+"*\\]",R=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",H=new RegExp(z+"+","g"),F=new RegExp("^"+z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+z+"+$","g"),W=new RegExp("^"+z+"*,"+z+"*"),B=new RegExp("^"+z+"*([>+~]|"+z+")"+z+"*"),U=new RegExp(z+"|>"),G=new RegExp(R),V=new RegExp("^"+M+"$"),Y={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+z+"*(even|odd|(([+-]|)(\\d*)n|)"+z+"*(?:([+-]|)"+z+"*(\\d+)|))"+z+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+z+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+z+"*((?:-\\d)?\\d*)"+z+"*\\)|)(?=[^-]|$)","i")},X=/HTML$/i,Z=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+z+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,re=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},se=function(){h()},oe=we((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{O.apply(D=L.call(_.childNodes),_.childNodes),D[_.childNodes.length].nodeType}catch(e){O={apply:D.length?function(e,t){q.apply(e,L.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function ae(e,t,i,r){var s,a,c,u,d,f,v,y=t&&t.ownerDocument,_=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==_&&9!==_&&11!==_)return i;if(!r&&(h(t),t=t||p,m)){if(11!==_&&(d=J.exec(e)))if(s=d[1]){if(9===_){if(!(c=t.getElementById(s)))return i;if(c.id===s)return i.push(c),i}else if(y&&(c=y.getElementById(s))&&b(t,c)&&c.id===s)return i.push(c),i}else{if(d[2])return O.apply(i,t.getElementsByTagName(e)),i;if((s=d[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(i,t.getElementsByClassName(s)),i}if(n.qsa&&!A[e+" "]&&(!g||!g.test(e))&&(1!==_||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===_&&(U.test(e)||B.test(e))){for((y=ee.test(e)&&ve(t.parentNode)||t)===t&&n.scope||((u=t.getAttribute("id"))?u=u.replace(ie,re):t.setAttribute("id",u=w)),a=(f=o(e)).length;a--;)f[a]=(u?"#"+u:":scope")+" "+be(f[a]);v=f.join(",")}try{return O.apply(i,y.querySelectorAll(v)),i}catch(t){A(e,!0)}finally{u===w&&t.removeAttribute("id")}}}return l(e.replace(F,"$1"),t,i,r)}function le(){var e=[];return function t(n,r){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function ce(e){return e[w]=!0,e}function ue(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function de(e,t){for(var n=e.split("|"),r=n.length;r--;)i.attrHandle[n[r]]=t}function he(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function me(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&oe(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function ge(e){return ce((function(t){return t=+t,ce((function(n,i){for(var r,s=e([],n.length,t),o=s.length;o--;)n[r=s[o]]&&(n[r]=!(i[r]=n[r]))}))}))}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ae.support={},s=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!X.test(t||n&&n.nodeName||"HTML")},h=ae.setDocument=function(e){var t,r,o=e?e.ownerDocument||e:_;return o!=p&&9===o.nodeType&&o.documentElement?(f=(p=o).documentElement,m=!s(p),_!=p&&(r=p.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",se,!1):r.attachEvent&&r.attachEvent("onunload",se)),n.scope=ue((function(e){return f.appendChild(e).appendChild(p.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.cssHas=ue((function(){try{return p.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),n.attributes=ue((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ue((function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=K.test(p.getElementsByClassName),n.getById=ue((function(e){return f.appendChild(e).id=w,!p.getElementsByName||!p.getElementsByName(w).length})),n.getById?(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n,i,r,s=t.getElementById(e);if(s){if((n=s.getAttributeNode("id"))&&n.value===e)return[s];for(r=t.getElementsByName(e),i=0;s=r[i++];)if((n=s.getAttributeNode("id"))&&n.value===e)return[s]}return[]}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,s=t.getElementsByTagName(e);if("*"===e){for(;n=s[r++];)1===n.nodeType&&i.push(n);return i}return s},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&m)return t.getElementsByClassName(e)},v=[],g=[],(n.qsa=K.test(p.querySelectorAll))&&(ue((function(e){var t;f.appendChild(e).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+z+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+z+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+w+"-]").length||g.push("~="),(t=p.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||g.push("\\["+z+"*name"+z+"*="+z+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+w+"+*").length||g.push(".#.+[+~]"),e.querySelectorAll("\\\f"),g.push("[\\r\\n\\f]")})),ue((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+z+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),f.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")}))),(n.matchesSelector=K.test(y=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ue((function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",R)})),n.cssHas||g.push(":has"),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),t=K.test(f.compareDocumentPosition),b=t||K.test(f.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},$=t?function(e,t){if(e===t)return d=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e==p||e.ownerDocument==_&&b(_,e)?-1:t==p||t.ownerDocument==_&&b(_,t)?1:u?N(u,e)-N(u,t):0:4&i?-1:1)}:function(e,t){if(e===t)return d=!0,0;var n,i=0,r=e.parentNode,s=t.parentNode,o=[e],a=[t];if(!r||!s)return e==p?-1:t==p?1:r?-1:s?1:u?N(u,e)-N(u,t):0;if(r===s)return he(e,t);for(n=e;n=n.parentNode;)o.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;o[i]===a[i];)i++;return i?he(o[i],a[i]):o[i]==_?-1:a[i]==_?1:0},p):p},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(h(e),n.matchesSelector&&m&&!A[t+" "]&&(!v||!v.test(t))&&(!g||!g.test(t)))try{var i=y.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){A(t,!0)}return ae(t,p,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=p&&h(e),b(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=p&&h(e);var r=i.attrHandle[t.toLowerCase()],s=r&&S.call(i.attrHandle,t.toLowerCase())?r(e,t,!m):void 0;return void 0!==s?s:n.attributes||!m?e.getAttribute(t):(s=e.getAttributeNode(t))&&s.specified?s.value:null},ae.escape=function(e){return(e+"").replace(ie,re)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,i=[],r=0,s=0;if(d=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort($),d){for(;t=e[s++];)t===e[s]&&(r=i.push(s));for(;r--;)e.splice(i[r],1)}return u=null,e},r=ae.getText=function(e){var t,n="",i=0,s=e.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===s||4===s)return e.nodeValue}else for(;t=e[i++];)n+=r(t);return n},i=ae.selectors={cacheLength:50,createPseudo:ce,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&G.test(n)&&(t=o(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+z+")"+e+"("+z+"|$)"))&&T(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(i){var r=ae.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(H," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var s="nth"!==e.slice(0,3),o="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,h,p,f,m=s!==o?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(g){if(s){for(;m;){for(h=t;h=h[m];)if(a?h.nodeName.toLowerCase()===v:1===h.nodeType)return!1;f=m="only"===e&&!f&&"nextSibling"}return!0}if(f=[o?g.firstChild:g.lastChild],o&&y){for(b=(p=(c=(u=(d=(h=g)[w]||(h[w]={}))[h.uniqueID]||(d[h.uniqueID]={}))[e]||[])[0]===x&&c[1])&&c[2],h=p&&g.childNodes[p];h=++p&&h&&h[m]||(b=p=0)||f.pop();)if(1===h.nodeType&&++b&&h===t){u[e]=[x,p,b];break}}else if(y&&(b=p=(c=(u=(d=(h=t)[w]||(h[w]={}))[h.uniqueID]||(d[h.uniqueID]={}))[e]||[])[0]===x&&c[1]),!1===b)for(;(h=++p&&h&&h[m]||(b=p=0)||f.pop())&&((a?h.nodeName.toLowerCase()!==v:1!==h.nodeType)||!++b||(y&&((u=(d=h[w]||(h[w]={}))[h.uniqueID]||(d[h.uniqueID]={}))[e]=[x,b]),h!==t)););return(b-=r)===i||b%i==0&&b/i>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return r[w]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ce((function(e,n){for(var i,s=r(e,t),o=s.length;o--;)e[i=N(e,s[o])]=!(n[i]=s[o])})):function(e){return r(e,0,n)}):r}},pseudos:{not:ce((function(e){var t=[],n=[],i=a(e.replace(F,"$1"));return i[w]?ce((function(e,t,n,r){for(var s,o=i(e,null,r,[]),a=e.length;a--;)(s=o[a])&&(e[a]=!(t[a]=s))})):function(e,r,s){return t[0]=e,i(t,null,s,n),t[0]=null,!n.pop()}})),has:ce((function(e){return function(t){return ae(e,t).length>0}})),contains:ce((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||r(t)).indexOf(e)>-1}})),lang:ce((function(e){return V.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:me(!1),disabled:me(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ge((function(){return[0]})),last:ge((function(e,t){return[t-1]})),eq:ge((function(e,t,n){return[n<0?n+t:n]})),even:ge((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:ge((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:ge((function(e,t,n){for(var i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e})),gt:ge((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}},i.pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pe(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=fe(t);function ye(){}function be(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function we(e,t,n){var i=t.dir,r=t.next,s=r||i,o=n&&"parentNode"===s,a=C++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||o)return e(t,n,r);return!1}:function(t,n,l){var c,u,d,h=[x,a];if(l){for(;t=t[i];)if((1===t.nodeType||o)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||o)if(u=(d=t[w]||(t[w]={}))[t.uniqueID]||(d[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((c=u[s])&&c[0]===x&&c[1]===a)return h[2]=c[2];if(u[s]=h,h[2]=e(t,n,l))return!0}return!1}}function _e(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function xe(e,t,n,i,r){for(var s,o=[],a=0,l=e.length,c=null!=t;a<l;a++)(s=e[a])&&(n&&!n(s,i,r)||(o.push(s),c&&t.push(a)));return o}function Ce(e,t,n,i,r,s){return i&&!i[w]&&(i=Ce(i)),r&&!r[w]&&(r=Ce(r,s)),ce((function(s,o,a,l){var c,u,d,h=[],p=[],f=o.length,m=s||function(e,t,n){for(var i=0,r=t.length;i<r;i++)ae(e,t[i],n);return n}(t||"*",a.nodeType?[a]:a,[]),g=!e||!s&&t?m:xe(m,h,e,a,l),v=n?r||(s?e:f||i)?[]:o:g;if(n&&n(g,v,a,l),i)for(c=xe(v,p),i(c,[],a,l),u=c.length;u--;)(d=c[u])&&(v[p[u]]=!(g[p[u]]=d));if(s){if(r||e){if(r){for(c=[],u=v.length;u--;)(d=v[u])&&c.push(g[u]=d);r(null,v=[],c,l)}for(u=v.length;u--;)(d=v[u])&&(c=r?N(s,d):h[u])>-1&&(s[c]=!(o[c]=d))}}else v=xe(v===o?v.splice(f,v.length):v),r?r(null,o,v,l):O.apply(o,v)}))}function Te(e){for(var t,n,r,s=e.length,o=i.relative[e[0].type],a=o||i.relative[" "],l=o?1:0,u=we((function(e){return e===t}),a,!0),d=we((function(e){return N(t,e)>-1}),a,!0),h=[function(e,n,i){var r=!o&&(i||n!==c)||((t=n).nodeType?u(e,n,i):d(e,n,i));return t=null,r}];l<s;l++)if(n=i.relative[e[l].type])h=[we(_e(h),n)];else{if((n=i.filter[e[l].type].apply(null,e[l].matches))[w]){for(r=++l;r<s&&!i.relative[e[r].type];r++);return Ce(l>1&&_e(h),l>1&&be(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(F,"$1"),n,l<r&&Te(e.slice(l,r)),r<s&&Te(e=e.slice(r)),r<s&&be(e))}h.push(n)}return _e(h)}return ye.prototype=i.filters=i.pseudos,i.setFilters=new ye,o=ae.tokenize=function(e,t){var n,r,s,o,a,l,c,u=E[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=i.preFilter;a;){for(o in n&&!(r=W.exec(a))||(r&&(a=a.slice(r[0].length)||a),l.push(s=[])),n=!1,(r=B.exec(a))&&(n=r.shift(),s.push({value:n,type:r[0].replace(F," ")}),a=a.slice(n.length)),i.filter)!(r=Y[o].exec(a))||c[o]&&!(r=c[o](r))||(n=r.shift(),s.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ae.error(e):E(e,l).slice(0)},a=ae.compile=function(e,t){var n,r=[],s=[],a=k[e+" "];if(!a){for(t||(t=o(e)),n=t.length;n--;)(a=Te(t[n]))[w]?r.push(a):s.push(a);a=k(e,function(e,t){var n=t.length>0,r=e.length>0,s=function(s,o,a,l,u){var d,f,g,v=0,y="0",b=s&&[],w=[],_=c,C=s||r&&i.find.TAG("*",u),T=x+=null==_?1:Math.random()||.1,E=C.length;for(u&&(c=o==p||o||u);y!==E&&null!=(d=C[y]);y++){if(r&&d){for(f=0,o||d.ownerDocument==p||(h(d),a=!m);g=e[f++];)if(g(d,o||p,a)){l.push(d);break}u&&(x=T)}n&&((d=!g&&d)&&v--,s&&b.push(d))}if(v+=y,n&&y!==v){for(f=0;g=t[f++];)g(b,w,o,a);if(s){if(v>0)for(;y--;)b[y]||w[y]||(w[y]=j.call(l));w=xe(w)}O.apply(l,w),u&&!s&&w.length>0&&v+t.length>1&&ae.uniqueSort(l)}return u&&(x=T,c=_),b};return n?ce(s):s}(s,r)),a.selector=e}return a},l=ae.select=function(e,t,n,r){var s,l,c,u,d,h="function"==typeof e&&e,p=!r&&o(e=h.selector||e);if(n=n||[],1===p.length){if((l=p[0]=p[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===t.nodeType&&m&&i.relative[l[1].type]){if(!(t=(i.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;h&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(s=Y.needsContext.test(e)?0:l.length;s--&&(c=l[s],!i.relative[u=c.type]);)if((d=i.find[u])&&(r=d(c.matches[0].replace(te,ne),ee.test(l[0].type)&&ve(t.parentNode)||t))){if(l.splice(s,1),!(e=r.length&&be(l)))return O.apply(n,r),n;break}}return(h||a(e,p))(r,t,!m,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=w.split("").sort($).join("")===w,n.detectDuplicates=!!d,h(),n.sortDetached=ue((function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))})),ue((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||de("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ue((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||de("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ue((function(e){return null==e.getAttribute("disabled")}))||de(P,(function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),ae}(i);T.find=k,T.expr=k.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=k.uniqueSort,T.text=k.getText,T.isXMLDoc=k.isXML,T.contains=k.contains,T.escapeSelector=k.escape;var A=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&T(e).is(n))break;i.push(e)}return i},$=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},S=T.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var j=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function q(e,t,n){return v(t)?T.grep(e,(function(e,i){return!!t.call(e,i,e)!==n})):t.nodeType?T.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?T.grep(e,(function(e){return u.call(t,e)>-1!==n})):T.filter(t,e,n)}T.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?T.find.matchesSelector(i,e)?[i]:[]:T.find.matches(e,T.grep(t,(function(e){return 1===e.nodeType})))},T.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(T(e).filter((function(){for(t=0;t<i;t++)if(T.contains(r[t],this))return!0})));for(n=this.pushStack([]),t=0;t<i;t++)T.find(e,r[t],n);return i>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(q(this,e||[],!1))},not:function(e){return this.pushStack(q(this,e||[],!0))},is:function(e){return!!q(this,"string"==typeof e&&S.test(e)?T(e):e||[],!1).length}});var O,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||O,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),j.test(i[1])&&T.isPlainObject(t))for(i in t)v(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(r=b.getElementById(i[2]))&&(this[0]=r,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,O=T(b);var N=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};function z(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0}))},closest:function(e,t){var n,i=0,r=this.length,s=[],o="string"!=typeof e&&T(e);if(!S.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(s.length>1?T.uniqueSort(s):s)},index:function(e){return e?"string"==typeof e?u.call(T(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return A(e,"parentNode")},parentsUntil:function(e,t,n){return A(e,"parentNode",n)},next:function(e){return z(e,"nextSibling")},prev:function(e){return z(e,"previousSibling")},nextAll:function(e){return A(e,"nextSibling")},prevAll:function(e){return A(e,"previousSibling")},nextUntil:function(e,t,n){return A(e,"nextSibling",n)},prevUntil:function(e,t,n){return A(e,"previousSibling",n)},siblings:function(e){return $((e.parentNode||{}).firstChild,e)},children:function(e){return $(e.firstChild)},contents:function(e){return null!=e.contentDocument&&o(e.contentDocument)?e.contentDocument:(D(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},(function(e,t){T.fn[e]=function(n,i){var r=T.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=T.filter(i,r)),this.length>1&&(P[e]||T.uniqueSort(r),N.test(e)&&r.reverse()),this.pushStack(r)}}));var M=/[^\x20\t\r\n\f]+/g;function I(e){return e}function R(e){throw e}function H(e,t,n,i){var r;try{e&&v(r=e.promise)?r.call(e).done(t).fail(n):e&&v(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}T.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return T.each(e.match(M)||[],(function(e,n){t[n]=!0})),t}(e):T.extend({},e);var t,n,i,r,s=[],o=[],a=-1,l=function(){for(r=r||e.once,i=t=!0;o.length;a=-1)for(n=o.shift();++a<s.length;)!1===s[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=s.length,n=!1);e.memory||(n=!1),t=!1,r&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(a=s.length-1,o.push(n)),function t(n){T.each(n,(function(n,i){v(i)?e.unique&&c.has(i)||s.push(i):i&&i.length&&"string"!==x(i)&&t(i)}))}(arguments),n&&!t&&l()),this},remove:function(){return T.each(arguments,(function(e,t){for(var n;(n=T.inArray(t,s,n))>-1;)s.splice(n,1),n<=a&&a--})),this},has:function(e){return e?T.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return r=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return r=o=[],n||t||(s=n=""),this},locked:function(){return!!r},fireWith:function(e,n){return r||(n=[e,(n=n||[]).slice?n.slice():n],o.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},T.extend({Deferred:function(e){var t=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],n="pending",r={state:function(){return n},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},pipe:function(){var e=arguments;return T.Deferred((function(n){T.each(t,(function(t,i){var r=v(e[i[4]])&&e[i[4]];s[i[1]]((function(){var e=r&&r.apply(this,arguments);e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,r){var s=0;function o(e,t,n,r){return function(){var a=this,l=arguments,c=function(){var i,c;if(!(e<s)){if((i=n.apply(a,l))===t.promise())throw new TypeError("Thenable self-resolution");c=i&&("object"==typeof i||"function"==typeof i)&&i.then,v(c)?r?c.call(i,o(s,t,I,r),o(s,t,R,r)):(s++,c.call(i,o(s,t,I,r),o(s,t,R,r),o(s,t,I,t.notifyWith))):(n!==I&&(a=void 0,l=[i]),(r||t.resolveWith)(a,l))}},u=r?c:function(){try{c()}catch(i){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(i,u.stackTrace),e+1>=s&&(n!==R&&(a=void 0,l=[i]),t.rejectWith(a,l))}};e?u():(T.Deferred.getStackHook&&(u.stackTrace=T.Deferred.getStackHook()),i.setTimeout(u))}}return T.Deferred((function(i){t[0][3].add(o(0,i,v(r)?r:I,i.notifyWith)),t[1][3].add(o(0,i,v(e)?e:I)),t[2][3].add(o(0,i,v(n)?n:R))})).promise()},promise:function(e){return null!=e?T.extend(e,r):r}},s={};return T.each(t,(function(e,i){var o=i[2],a=i[5];r[i[1]]=o.add,a&&o.add((function(){n=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),o.add(i[3].fire),s[i[0]]=function(){return s[i[0]+"With"](this===s?void 0:this,arguments),this},s[i[0]+"With"]=o.fireWith})),r.promise(s),e&&e.call(s,s),s},when:function(e){var t=arguments.length,n=t,i=Array(n),r=a.call(arguments),s=T.Deferred(),o=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?a.call(arguments):n,--t||s.resolveWith(i,r)}};if(t<=1&&(H(e,s.done(o(n)).resolve,s.reject,!t),"pending"===s.state()||v(r[n]&&r[n].then)))return s.then();for(;n--;)H(r[n],o(n),s.reject);return s.promise()}});var F=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,t){i.console&&i.console.warn&&e&&F.test(e.name)&&i.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},T.readyException=function(e){i.setTimeout((function(){throw e}))};var W=T.Deferred();function B(){b.removeEventListener("DOMContentLoaded",B),i.removeEventListener("load",B),T.ready()}T.fn.ready=function(e){return W.then(e).catch((function(e){T.readyException(e)})),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==e&&--T.readyWait>0||W.resolveWith(b,[T]))}}),T.ready.then=W.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?i.setTimeout(T.ready):(b.addEventListener("DOMContentLoaded",B),i.addEventListener("load",B));var U=function(e,t,n,i,r,s,o){var a=0,l=e.length,c=null==n;if("object"===x(n))for(a in r=!0,n)U(e,t,a,n[a],!0,s,o);else if(void 0!==i&&(r=!0,v(i)||(o=!0),c&&(o?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(T(e),n)})),t))for(;a<l;a++)t(e[a],n,o?i:i.call(e[a],a,t(e[a],n)));return r?e:c?t.call(e):l?t(e[0],n):s},G=/^-ms-/,V=/-([a-z])/g;function Y(e,t){return t.toUpperCase()}function X(e){return e.replace(G,"ms-").replace(V,Y)}var Z=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=T.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Z(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[X(t)]=n;else for(i in t)r[X(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in i?[t]:t.match(M)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||T.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var K=new Q,J=new Q,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g;function ne(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}J.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return J.hasData(e)||K.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return K.access(e,t,n)},_removeData:function(e,t){K.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,i,r,s=this[0],o=s&&s.attributes;if(void 0===e){if(this.length&&(r=J.get(s),1===s.nodeType&&!K.get(s,"hasDataAttrs"))){for(n=o.length;n--;)o[n]&&0===(i=o[n].name).indexOf("data-")&&(i=X(i.slice(5)),ne(s,i,r[i]));K.set(s,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each((function(){J.set(this,e)})):U(this,(function(t){var n;if(s&&void 0===t)return void 0!==(n=J.get(s,e))||void 0!==(n=ne(s,e))?n:void 0;this.each((function(){J.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){J.remove(this,e)}))}}),T.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=K.get(e,t),n&&(!i||Array.isArray(n)?i=K.access(e,t,T.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),i=n.length,r=n.shift(),s=T._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete s.stop,r.call(e,(function(){T.dequeue(e,t)}),s)),!i&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return K.get(e,n)||K.access(e,n,{empty:T.Callbacks("once memory").add((function(){K.remove(e,[t+"queue",n])}))})}}),T.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each((function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){T.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=T.Deferred(),s=this,o=this.length,a=function(){--i||r.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)(n=K.get(s[o],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,re=new RegExp("^(?:([+-])=|)("+ie+")([a-z%]*)$","i"),se=["Top","Right","Bottom","Left"],oe=b.documentElement,ae=function(e){return T.contains(e.ownerDocument,e)},le={composed:!0};oe.getRootNode&&(ae=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(le)===e.ownerDocument});var ce=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ae(e)&&"none"===T.css(e,"display")};function ue(e,t,n,i){var r,s,o=20,a=i?function(){return i.cur()}:function(){return T.css(e,t,"")},l=a(),c=n&&n[3]||(T.cssNumber[t]?"":"px"),u=e.nodeType&&(T.cssNumber[t]||"px"!==c&&+l)&&re.exec(T.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;o--;)T.style(e,t,u+c),(1-s)*(1-(s=a()/l||.5))<=0&&(o=0),u/=s;u*=2,T.style(e,t,u+c),n=n||[]}return n&&(u=+u||+l||0,r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var de={};function he(e){var t,n=e.ownerDocument,i=e.nodeName,r=de[i];return r||(t=n.body.appendChild(n.createElement(i)),r=T.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),de[i]=r,r)}function pe(e,t){for(var n,i,r=[],s=0,o=e.length;s<o;s++)(i=e[s]).style&&(n=i.style.display,t?("none"===n&&(r[s]=K.get(i,"display")||null,r[s]||(i.style.display="")),""===i.style.display&&ce(i)&&(r[s]=he(i))):"none"!==n&&(r[s]="none",K.set(i,"display",n)));for(s=0;s<o;s++)null!=r[s]&&(e[s].style.display=r[s]);return e}T.fn.extend({show:function(){return pe(this,!0)},hide:function(){return pe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ce(this)?T(this).show():T(this).hide()}))}});var fe,me,ge=/^(?:checkbox|radio)$/i,ve=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ye=/^$|^module$|\/(?:java|ecma)script/i;fe=b.createDocumentFragment().appendChild(b.createElement("div")),(me=b.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),fe.appendChild(me),g.checkClone=fe.cloneNode(!0).cloneNode(!0).lastChild.checked,fe.innerHTML="<textarea>x</textarea>",g.noCloneChecked=!!fe.cloneNode(!0).lastChild.defaultValue,fe.innerHTML="<option></option>",g.option=!!fe.lastChild;var be={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function we(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?T.merge([e],n):n}function _e(e,t){for(var n=0,i=e.length;n<i;n++)K.set(e[n],"globalEval",!t||K.get(t[n],"globalEval"))}be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,g.option||(be.optgroup=be.option=[1,"<select multiple='multiple'>","</select>"]);var xe=/<|&#?\w+;/;function Ce(e,t,n,i,r){for(var s,o,a,l,c,u,d=t.createDocumentFragment(),h=[],p=0,f=e.length;p<f;p++)if((s=e[p])||0===s)if("object"===x(s))T.merge(h,s.nodeType?[s]:s);else if(xe.test(s)){for(o=o||d.appendChild(t.createElement("div")),a=(ve.exec(s)||["",""])[1].toLowerCase(),l=be[a]||be._default,o.innerHTML=l[1]+T.htmlPrefilter(s)+l[2],u=l[0];u--;)o=o.lastChild;T.merge(h,o.childNodes),(o=d.firstChild).textContent=""}else h.push(t.createTextNode(s));for(d.textContent="",p=0;s=h[p++];)if(i&&T.inArray(s,i)>-1)r&&r.push(s);else if(c=ae(s),o=we(d.appendChild(s),"script"),c&&_e(o),n)for(u=0;s=o[u++];)ye.test(s.type||"")&&n.push(s);return d}var Te=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Ae(e,t){return e===function(){try{return b.activeElement}catch(e){}}()==("focus"===t)}function $e(e,t,n,i,r,s){var o,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)$e(e,a,n,i,t[a],s);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=ke;else if(!r)return e;return 1===s&&(o=r,r=function(e){return T().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=T.guid++)),e.each((function(){T.event.add(this,t,r,i,n)}))}function Se(e,t,n){n?(K.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var i,r,s=K.get(this,t);if(1&e.isTrigger&&this[t]){if(s.length)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(s=a.call(arguments),K.set(this,t,s),i=n(this,t),this[t](),s!==(r=K.get(this,t))||i?K.set(this,t,!1):r={},s!==r)return e.stopImmediatePropagation(),e.preventDefault(),r&&r.value}else s.length&&(K.set(this,t,{value:T.event.trigger(T.extend(s[0],T.Event.prototype),s.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===K.get(e,t)&&T.event.add(e,t,Ee)}T.event={global:{},add:function(e,t,n,i,r){var s,o,a,l,c,u,d,h,p,f,m,g=K.get(e);if(Z(e))for(n.handler&&(n=(s=n).handler,r=s.selector),r&&T.find.matchesSelector(oe,r),n.guid||(n.guid=T.guid++),(l=g.events)||(l=g.events=Object.create(null)),(o=g.handle)||(o=g.handle=function(t){return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(M)||[""]).length;c--;)p=m=(a=Te.exec(t[c])||[])[1],f=(a[2]||"").split(".").sort(),p&&(d=T.event.special[p]||{},p=(r?d.delegateType:d.bindType)||p,d=T.event.special[p]||{},u=T.extend({type:p,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&T.expr.match.needsContext.test(r),namespace:f.join(".")},s),(h=l[p])||((h=l[p]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,i,f,o)||e.addEventListener&&e.addEventListener(p,o)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?h.splice(h.delegateCount++,0,u):h.push(u),T.event.global[p]=!0)},remove:function(e,t,n,i,r){var s,o,a,l,c,u,d,h,p,f,m,g=K.hasData(e)&&K.get(e);if(g&&(l=g.events)){for(c=(t=(t||"").match(M)||[""]).length;c--;)if(p=m=(a=Te.exec(t[c])||[])[1],f=(a[2]||"").split(".").sort(),p){for(d=T.event.special[p]||{},h=l[p=(i?d.delegateType:d.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=h.length;s--;)u=h[s],!r&&m!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(h.splice(s,1),u.selector&&h.delegateCount--,d.remove&&d.remove.call(e,u));o&&!h.length&&(d.teardown&&!1!==d.teardown.call(e,f,g.handle)||T.removeEvent(e,p,g.handle),delete l[p])}else for(p in l)T.event.remove(e,p+t[c],n,i,!0);T.isEmptyObject(l)&&K.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,s,o,a=new Array(arguments.length),l=T.event.fix(e),c=(K.get(this,"events")||Object.create(null))[l.type]||[],u=T.event.special[l.type]||{};for(a[0]=l,t=1;t<arguments.length;t++)a[t]=arguments[t];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(o=T.event.handlers.call(this,l,c),t=0;(r=o[t++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,n=0;(s=r.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==s.namespace&&!l.rnamespace.test(s.namespace)||(l.handleObj=s,l.data=s.data,void 0!==(i=((T.event.special[s.origType]||{}).handle||s.handler).apply(r.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,i,r,s,o,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(s=[],o={},n=0;n<l;n++)void 0===o[r=(i=t[n]).selector+" "]&&(o[r]=i.needsContext?T(r,this).index(c)>-1:T.find(r,this,null,[c]).length),o[r]&&s.push(i);s.length&&a.push({elem:c,handlers:s})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ge.test(t.type)&&t.click&&D(t,"input")&&Se(t,"click",Ee),!1},trigger:function(e){var t=this||e;return ge.test(t.type)&&t.click&&D(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return ge.test(t.type)&&t.click&&D(t,"input")&&K.get(t,"click")||D(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},(function(e,t){T.event.special[e]={setup:function(){return Se(this,e,Ae),!1},trigger:function(){return Se(this,e),!0},_default:function(t){return K.get(t.target,e)},delegateType:t}})),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||T.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}})),T.fn.extend({on:function(e,t,n,i){return $e(this,e,t,n,i)},one:function(e,t,n,i){return $e(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,T(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each((function(){T.event.remove(this,e,n,t)}))}});var De=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Oe(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ne(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,i,r,s,o,a;if(1===t.nodeType){if(K.hasData(e)&&(a=K.get(e).events))for(r in K.remove(t,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)T.event.add(t,r,a[r][n]);J.hasData(e)&&(s=J.access(e),o=T.extend({},s),J.set(t,o))}}function ze(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ge.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Me(e,t,n,i){t=l(t);var r,s,o,a,c,u,d=0,h=e.length,p=h-1,f=t[0],m=v(f);if(m||h>1&&"string"==typeof f&&!g.checkClone&&je.test(f))return e.each((function(r){var s=e.eq(r);m&&(t[0]=f.call(this,r,s.html())),Me(s,t,n,i)}));if(h&&(s=(r=Ce(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=s),s||i)){for(a=(o=T.map(we(r,"script"),Le)).length;d<h;d++)c=r,d!==p&&(c=T.clone(c,!0,!0),a&&T.merge(o,we(c,"script"))),n.call(e[d],c,d);if(a)for(u=o[o.length-1].ownerDocument,T.map(o,Ne),d=0;d<a;d++)c=o[d],ye.test(c.type||"")&&!K.access(c,"globalEval")&&T.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?T._evalUrl&&!c.noModule&&T._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):_(c.textContent.replace(qe,""),c,u))}return e}function Ie(e,t,n){for(var i,r=t?T.filter(t,e):e,s=0;null!=(i=r[s]);s++)n||1!==i.nodeType||T.cleanData(we(i)),i.parentNode&&(n&&ae(i)&&_e(we(i,"script")),i.parentNode.removeChild(i));return e}T.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,s,o,a=e.cloneNode(!0),l=ae(e);if(!(g.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(o=we(a),i=0,r=(s=we(e)).length;i<r;i++)ze(s[i],o[i]);if(t)if(n)for(s=s||we(e),o=o||we(a),i=0,r=s.length;i<r;i++)Pe(s[i],o[i]);else Pe(e,a);return(o=we(a,"script")).length>0&&_e(o,!l&&we(e,"script")),a},cleanData:function(e){for(var t,n,i,r=T.event.special,s=0;void 0!==(n=e[s]);s++)if(Z(n)){if(t=n[K.expando]){if(t.events)for(i in t.events)r[i]?T.event.remove(n,i):T.removeEvent(n,i,t.handle);n[K.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),T.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return U(this,(function(e){return void 0===e?T.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Me(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)}))},prepend:function(){return Me(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(we(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return T.clone(this,e,t)}))},html:function(e){return U(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!De.test(e)&&!be[(ve.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(we(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Me(this,arguments,(function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(we(this)),n&&n.replaceChild(t,this))}),e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){T.fn[e]=function(e){for(var n,i=[],r=T(e),s=r.length-1,o=0;o<=s;o++)n=o===s?this:this.clone(!0),T(r[o])[t](n),c.apply(i,n.get());return this.pushStack(i)}}));var Re=new RegExp("^("+ie+")(?!px)[a-z%]+$","i"),He=/^--/,Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=i),t.getComputedStyle(e)},We=function(e,t,n){var i,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];for(r in i=n.call(e),t)e.style[r]=s[r];return i},Be=new RegExp(se.join("|"),"i"),Ue="[\\x20\\t\\r\\n\\f]",Ge=new RegExp("^"+Ue+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Ue+"+$","g");function Ve(e,t,n){var i,r,s,o,a=He.test(t),l=e.style;return(n=n||Fe(e))&&(o=n.getPropertyValue(t)||n[t],a&&o&&(o=o.replace(Ge,"$1")||void 0),""!==o||ae(e)||(o=T.style(e,t)),!g.pixelBoxStyles()&&Re.test(o)&&Be.test(t)&&(i=l.width,r=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=o,o=n.width,l.width=i,l.minWidth=r,l.maxWidth=s)),void 0!==o?o+"":o}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",oe.appendChild(c).appendChild(u);var e=i.getComputedStyle(u);n="1%"!==e.top,l=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",s=12===t(u.offsetWidth/3),oe.removeChild(c),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,s,o,a,l,c=b.createElement("div"),u=b.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",g.clearCloneStyle="content-box"===u.style.backgroundClip,T.extend(g,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),s},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=b.createElement("table"),t=b.createElement("tr"),n=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",oe.appendChild(e).appendChild(t).appendChild(n),r=i.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,oe.removeChild(e)),a}}))}();var Xe=["Webkit","Moz","ms"],Ze=b.createElement("div").style,Qe={};function Ke(e){var t=T.cssProps[e]||Qe[e];return t||(e in Ze?e:Qe[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;n--;)if((e=Xe[n]+t)in Ze)return e}(e)||e)}var Je=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"};function nt(e,t,n){var i=re.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function it(e,t,n,i,r,s){var o="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(l+=T.css(e,n+se[o],!0,r)),i?("content"===n&&(l-=T.css(e,"padding"+se[o],!0,r)),"margin"!==n&&(l-=T.css(e,"border"+se[o]+"Width",!0,r))):(l+=T.css(e,"padding"+se[o],!0,r),"padding"!==n?l+=T.css(e,"border"+se[o]+"Width",!0,r):a+=T.css(e,"border"+se[o]+"Width",!0,r));return!i&&s>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-l-a-.5))||0),l}function rt(e,t,n){var i=Fe(e),r=(!g.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,i),s=r,o=Ve(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);if(Re.test(o)){if(!n)return o;o="auto"}return(!g.boxSizingReliable()&&r||!g.reliableTrDimensions()&&D(e,"tr")||"auto"===o||!parseFloat(o)&&"inline"===T.css(e,"display",!1,i))&&e.getClientRects().length&&(r="border-box"===T.css(e,"boxSizing",!1,i),(s=a in e)&&(o=e[a])),(o=parseFloat(o)||0)+it(e,t,n||(r?"border":"content"),s,i,o)+"px"}function st(e,t,n,i,r){return new st.prototype.init(e,t,n,i,r)}T.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ve(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,s,o,a=X(t),l=He.test(t),c=e.style;if(l||(t=Ke(a)),o=T.cssHooks[t]||T.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:c[t];"string"===(s=typeof n)&&(r=re.exec(n))&&r[1]&&(n=ue(e,t,r),s="number"),null!=n&&n==n&&("number"!==s||l||(n+=r&&r[3]||(T.cssNumber[a]?"":"px")),g.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var r,s,o,a=X(t);return He.test(t)||(t=Ke(a)),(o=T.cssHooks[t]||T.cssHooks[a])&&"get"in o&&(r=o.get(e,!0,n)),void 0===r&&(r=Ve(e,t,i)),"normal"===r&&t in tt&&(r=tt[t]),""===n||n?(s=parseFloat(r),!0===n||isFinite(s)?s||0:r):r}}),T.each(["height","width"],(function(e,t){T.cssHooks[t]={get:function(e,n,i){if(n)return!Je.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?rt(e,t,i):We(e,et,(function(){return rt(e,t,i)}))},set:function(e,n,i){var r,s=Fe(e),o=!g.scrollboxSize()&&"absolute"===s.position,a=(o||i)&&"border-box"===T.css(e,"boxSizing",!1,s),l=i?it(e,t,i,a,s):0;return a&&o&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(s[t])-it(e,t,"border",!1,s)-.5)),l&&(r=re.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),nt(0,n,l)}}})),T.cssHooks.marginLeft=Ye(g.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ve(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),T.each({margin:"",padding:"",border:"Width"},(function(e,t){T.cssHooks[e+t]={expand:function(n){for(var i=0,r={},s="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+se[i]+t]=s[i]||s[i-2]||s[0];return r}},"margin"!==e&&(T.cssHooks[e+t].set=nt)})),T.fn.extend({css:function(e,t){return U(this,(function(e,t,n){var i,r,s={},o=0;if(Array.isArray(t)){for(i=Fe(e),r=t.length;o<r;o++)s[t[o]]=T.css(e,t[o],!1,i);return s}return void 0!==n?T.style(e,t,n):T.css(e,t)}),e,t,arguments.length>1)}}),T.Tween=st,st.prototype={constructor:st,init:function(e,t,n,i,r,s){this.elem=e,this.prop=n,this.easing=r||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=s||(T.cssNumber[n]?"":"px")},cur:function(){var e=st.propHooks[this.prop];return e&&e.get?e.get(this):st.propHooks._default.get(this)},run:function(e){var t,n=st.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):st.propHooks._default.set(this),this}},st.prototype.init.prototype=st.prototype,st.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||!T.cssHooks[e.prop]&&null==e.elem.style[Ke(e.prop)]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}},st.propHooks.scrollTop=st.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=st.prototype.init,T.fx.step={};var ot,at,lt=/^(?:toggle|show|hide)$/,ct=/queueHooks$/;function ut(){at&&(!1===b.hidden&&i.requestAnimationFrame?i.requestAnimationFrame(ut):i.setTimeout(ut,T.fx.interval),T.fx.tick())}function dt(){return i.setTimeout((function(){ot=void 0})),ot=Date.now()}function ht(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=se[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function pt(e,t,n){for(var i,r=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),s=0,o=r.length;s<o;s++)if(i=r[s].call(n,t,e))return i}function ft(e,t,n){var i,r,s=0,o=ft.prefilters.length,a=T.Deferred().always((function(){delete l.elem})),l=function(){if(r)return!1;for(var t=ot||dt(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),s=0,o=c.tweens.length;s<o;s++)c.tweens[s].run(i);return a.notifyWith(e,[c,i,n]),i<1&&o?n:(o||a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:ot||dt(),duration:n.duration,tweens:[],createTween:function(t,n){var i=T.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(!function(e,t){var n,i,r,s,o;for(n in e)if(r=t[i=X(n)],s=e[n],Array.isArray(s)&&(r=s[1],s=e[n]=s[0]),n!==i&&(e[i]=s,delete e[n]),(o=T.cssHooks[i])&&"expand"in o)for(n in s=o.expand(s),delete e[i],s)n in e||(e[n]=s[n],t[n]=r);else t[i]=r}(u,c.opts.specialEasing);s<o;s++)if(i=ft.prefilters[s].call(c,e,u,c.opts))return v(i.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return T.map(u,pt,c),v(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,re.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(M);for(var n,i=0,r=e.length;i<r;i++)n=e[i],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,s,o,a,l,c,u,d="width"in t||"height"in t,h=this,p={},f=e.style,m=e.nodeType&&ce(e),g=K.get(e,"fxshow");for(i in n.queue||(null==(o=T._queueHooks(e,"fx")).unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,h.always((function(){h.always((function(){o.unqueued--,T.queue(e,"fx").length||o.empty.fire()}))}))),t)if(r=t[i],lt.test(r)){if(delete t[i],s=s||"toggle"===r,r===(m?"hide":"show")){if("show"!==r||!g||void 0===g[i])continue;m=!0}p[i]=g&&g[i]||T.style(e,i)}if((l=!T.isEmptyObject(t))||!T.isEmptyObject(p))for(i in d&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(c=g&&g.display)&&(c=K.get(e,"display")),"none"===(u=T.css(e,"display"))&&(c?u=c:(pe([e],!0),c=e.style.display||c,u=T.css(e,"display"),pe([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===T.css(e,"float")&&(l||(h.done((function(){f.display=c})),null==c&&(u=f.display,c="none"===u?"":u)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",h.always((function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))),l=!1,p)l||(g?"hidden"in g&&(m=g.hidden):g=K.access(e,"fxshow",{display:c}),s&&(g.hidden=!m),m&&pe([e],!0),h.done((function(){for(i in m||pe([e]),K.remove(e,"fxshow"),p)T.style(e,i,p[i])}))),l=pt(m?g[i]:0,i,h),i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),T.speed=function(e,t,n){var i=e&&"object"==typeof e?T.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return T.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in T.fx.speeds?i.duration=T.fx.speeds[i.duration]:i.duration=T.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){v(i.old)&&i.old.call(this),i.queue&&T.dequeue(this,i.queue)},i},T.fn.extend({fadeTo:function(e,t,n,i){return this.filter(ce).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=T.isEmptyObject(e),s=T.speed(t,n,i),o=function(){var t=ft(this,T.extend({},e),s);(r||K.get(this,"finish"))&&t.stop(!0)};return o.finish=o,r||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,r=null!=e&&e+"queueHooks",s=T.timers,o=K.get(this);if(r)o[r]&&o[r].stop&&i(o[r]);else for(r in o)o[r]&&o[r].stop&&ct.test(r)&&i(o[r]);for(r=s.length;r--;)s[r].elem!==this||null!=e&&s[r].queue!==e||(s[r].anim.stop(n),t=!1,s.splice(r,1));!t&&n||T.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=K.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],s=T.timers,o=i?i.length:0;for(n.finish=!0,T.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish}))}}),T.each(["toggle","show","hide"],(function(e,t){var n=T.fn[t];T.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ht(t,!0),e,i,r)}})),T.each({slideDown:ht("show"),slideUp:ht("hide"),slideToggle:ht("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){T.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(ot=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),ot=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){at||(at=!0,ut())},T.fx.stop=function(){at=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(e,t){return e=T.fx&&T.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var r=i.setTimeout(t,e);n.stop=function(){i.clearTimeout(r)}}))},function(){var e=b.createElement("input"),t=b.createElement("select").appendChild(b.createElement("option"));e.type="checkbox",g.checkOn=""!==e.value,g.optSelected=t.selected,(e=b.createElement("input")).value="t",e.type="radio",g.radioValue="t"===e.value}();var mt,gt=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return U(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){T.removeAttr(this,e)}))}}),T.extend({attr:function(e,t,n){var i,r,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===e.getAttribute?T.prop(e,t,n):(1===s&&T.isXMLDoc(e)||(r=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=T.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!g.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(M);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=gt[t]||T.find.attr;gt[t]=function(e,t,i){var r,s,o=t.toLowerCase();return i||(s=gt[o],gt[o]=r,r=null!=n(e,t,i)?o:null,gt[o]=s),r}}));var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function bt(e){return(e.match(M)||[]).join(" ")}function wt(e){return e.getAttribute&&e.getAttribute("class")||""}function _t(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(M)||[]}T.fn.extend({prop:function(e,t){return U(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[T.propFix[e]||e]}))}}),T.extend({prop:function(e,t,n){var i,r,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&T.isXMLDoc(e)||(t=T.propFix[t]||t,r=T.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){T.propFix[this.toLowerCase()]=this})),T.fn.extend({addClass:function(e){var t,n,i,r,s,o;return v(e)?this.each((function(t){T(this).addClass(e.call(this,t,wt(this)))})):(t=_t(e)).length?this.each((function(){if(i=wt(this),n=1===this.nodeType&&" "+bt(i)+" "){for(s=0;s<t.length;s++)r=t[s],n.indexOf(" "+r+" ")<0&&(n+=r+" ");o=bt(n),i!==o&&this.setAttribute("class",o)}})):this},removeClass:function(e){var t,n,i,r,s,o;return v(e)?this.each((function(t){T(this).removeClass(e.call(this,t,wt(this)))})):arguments.length?(t=_t(e)).length?this.each((function(){if(i=wt(this),n=1===this.nodeType&&" "+bt(i)+" "){for(s=0;s<t.length;s++)for(r=t[s];n.indexOf(" "+r+" ")>-1;)n=n.replace(" "+r+" "," ");o=bt(n),i!==o&&this.setAttribute("class",o)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,i,r,s,o=typeof e,a="string"===o||Array.isArray(e);return v(e)?this.each((function(n){T(this).toggleClass(e.call(this,n,wt(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=_t(e),this.each((function(){if(a)for(s=T(this),r=0;r<n.length;r++)i=n[r],s.hasClass(i)?s.removeClass(i):s.addClass(i);else void 0!==e&&"boolean"!==o||((i=wt(this))&&K.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||!1===e?"":K.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+bt(wt(n))+" ").indexOf(t)>-1)return!0;return!1}});var xt=/\r/g;T.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=v(e),this.each((function(n){var r;1===this.nodeType&&(null==(r=i?e.call(this,n,T(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=T.map(r,(function(e){return null==e?"":e+""}))),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}))):r?(t=T.valHooks[r.type]||T.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(xt,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:bt(T.text(e))}},select:{get:function(e){var t,n,i,r=e.options,s=e.selectedIndex,o="select-one"===e.type,a=o?null:[],l=o?s+1:r.length;for(i=s<0?l:o?s:0;i<l;i++)if(((n=r[i]).selected||i===s)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=T(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,s=T.makeArray(t),o=r.length;o--;)((i=r[o]).selected=T.inArray(T.valHooks.option.get(i),s)>-1)&&(n=!0);return n||(e.selectedIndex=-1),s}}}}),T.each(["radio","checkbox"],(function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},g.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),g.focusin="onfocusin"in i;var Ct=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(e,t,n,r){var s,o,a,l,c,u,d,h,f=[n||b],m=p.call(e,"type")?e.type:e,g=p.call(e,"namespace")?e.namespace.split("."):[];if(o=h=a=n=n||b,3!==n.nodeType&&8!==n.nodeType&&!Ct.test(m+T.event.triggered)&&(m.indexOf(".")>-1&&(g=m.split("."),m=g.shift(),g.sort()),c=m.indexOf(":")<0&&"on"+m,(e=e[T.expando]?e:new T.Event(m,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=g.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:T.makeArray(t,[e]),d=T.event.special[m]||{},r||!d.trigger||!1!==d.trigger.apply(n,t))){if(!r&&!d.noBubble&&!y(n)){for(l=d.delegateType||m,Ct.test(l+m)||(o=o.parentNode);o;o=o.parentNode)f.push(o),a=o;a===(n.ownerDocument||b)&&f.push(a.defaultView||a.parentWindow||i)}for(s=0;(o=f[s++])&&!e.isPropagationStopped();)h=o,e.type=s>1?l:d.bindType||m,(u=(K.get(o,"events")||Object.create(null))[e.type]&&K.get(o,"handle"))&&u.apply(o,t),(u=c&&o[c])&&u.apply&&Z(o)&&(e.result=u.apply(o,t),!1===e.result&&e.preventDefault());return e.type=m,r||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(f.pop(),t)||!Z(n)||c&&v(n[m])&&!y(n)&&((a=n[c])&&(n[c]=null),T.event.triggered=m,e.isPropagationStopped()&&h.addEventListener(m,Tt),n[m](),e.isPropagationStopped()&&h.removeEventListener(m,Tt),T.event.triggered=void 0,a&&(n[c]=a)),e.result}},simulate:function(e,t,n){var i=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(i,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each((function(){T.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}}),g.focusin||T.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){T.event.simulate(t,e.target,T.event.fix(e))};T.event.special[t]={setup:function(){var i=this.ownerDocument||this.document||this,r=K.access(i,t);r||i.addEventListener(e,n,!0),K.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=K.access(i,t)-1;r?K.access(i,t,r):(i.removeEventListener(e,n,!0),K.remove(i,t))}}}));var Et=i.location,kt={guid:Date.now()},At=/\?/;T.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new i.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||T.error("Invalid XML: "+(n?T.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t};var $t=/\[\]$/,St=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(e,t,n,i){var r;if(Array.isArray(t))T.each(t,(function(t,r){n||$t.test(e)?i(e,r):qt(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)}));else if(n||"object"!==x(t))i(e,t);else for(r in t)qt(e+"["+r+"]",t[r],n,i)}T.param=function(e,t){var n,i=[],r=function(e,t){var n=v(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,(function(){r(this.name,this.value)}));else for(n in e)qt(n,e[n],t,r);return i.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!ge.test(e))})).map((function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,(function(e){return{name:t.name,value:e.replace(St,"\r\n")}})):{name:t.name,value:n.replace(St,"\r\n")}})).get()}});var Ot=/%20/g,Lt=/#.*$/,Nt=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,zt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Rt={},Ht="*/".concat("*"),Ft=b.createElement("a");function Wt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,s=t.toLowerCase().match(M)||[];if(v(n))for(;i=s[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function Bt(e,t,n,i){var r={},s=e===Rt;function o(a){var l;return r[a]=!0,T.each(e[a]||[],(function(e,a){var c=a(t,n,i);return"string"!=typeof c||s||r[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)})),l}return o(t.dataTypes[0])||!r["*"]&&o("*")}function Ut(e,t){var n,i,r=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&T.extend(!0,e,i),e}Ft.href=Et.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ht,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ut(Ut(e,T.ajaxSettings),t):Ut(T.ajaxSettings,e)},ajaxPrefilter:Wt(It),ajaxTransport:Wt(Rt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,r,s,o,a,l,c,u,d,h,p=T.ajaxSetup({},t),f=p.context||p,m=p.context&&(f.nodeType||f.jquery)?T(f):T.event,g=T.Deferred(),v=T.Callbacks("once memory"),y=p.statusCode||{},w={},_={},x="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(c){if(!o)for(o={};t=Pt.exec(s);)o[t[1].toLowerCase()+" "]=(o[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=o[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=_[e.toLowerCase()]=_[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==c&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)C.always(e[C.status]);else for(t in e)y[t]=[y[t],e[t]];return this},abort:function(e){var t=e||x;return n&&n.abort(t),E(0,t),this}};if(g.promise(C),p.url=((e||p.url||Et.href)+"").replace(Mt,Et.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(M)||[""],null==p.crossDomain){l=b.createElement("a");try{l.href=p.url,l.href=l.href,p.crossDomain=Ft.protocol+"//"+Ft.host!=l.protocol+"//"+l.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=T.param(p.data,p.traditional)),Bt(It,p,t,C),c)return C;for(d in(u=T.event&&p.global)&&0==T.active++&&T.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!zt.test(p.type),r=p.url.replace(Lt,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Ot,"+")):(h=p.url.slice(r.length),p.data&&(p.processData||"string"==typeof p.data)&&(r+=(At.test(r)?"&":"?")+p.data,delete p.data),!1===p.cache&&(r=r.replace(Nt,"$1"),h=(At.test(r)?"&":"?")+"_="+kt.guid+++h),p.url=r+h),p.ifModified&&(T.lastModified[r]&&C.setRequestHeader("If-Modified-Since",T.lastModified[r]),T.etag[r]&&C.setRequestHeader("If-None-Match",T.etag[r])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Ht+"; q=0.01":""):p.accepts["*"]),p.headers)C.setRequestHeader(d,p.headers[d]);if(p.beforeSend&&(!1===p.beforeSend.call(f,C,p)||c))return C.abort();if(x="abort",v.add(p.complete),C.done(p.success),C.fail(p.error),n=Bt(Rt,p,t,C)){if(C.readyState=1,u&&m.trigger("ajaxSend",[C,p]),c)return C;p.async&&p.timeout>0&&(a=i.setTimeout((function(){C.abort("timeout")}),p.timeout));try{c=!1,n.send(w,E)}catch(e){if(c)throw e;E(-1,e)}}else E(-1,"No Transport");function E(e,t,o,l){var d,h,b,w,_,x=t;c||(c=!0,a&&i.clearTimeout(a),n=void 0,s=l||"",C.readyState=e>0?4:0,d=e>=200&&e<300||304===e,o&&(w=function(e,t,n){for(var i,r,s,o,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)s=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){s=r;break}o||(o=r)}s=s||o}if(s)return s!==l[0]&&l.unshift(s),n[s]}(p,C,o)),!d&&T.inArray("script",p.dataTypes)>-1&&T.inArray("json",p.dataTypes)<0&&(p.converters["text script"]=function(){}),w=function(e,t,n,i){var r,s,o,a,l,c={},u=e.dataTypes.slice();if(u[1])for(o in e.converters)c[o.toLowerCase()]=e.converters[o];for(s=u.shift();s;)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=s,s=u.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(!(o=c[l+" "+s]||c["* "+s]))for(r in c)if((a=r.split(" "))[1]===s&&(o=c[l+" "+a[0]]||c["* "+a[0]])){!0===o?o=c[r]:!0!==c[r]&&(s=a[0],u.unshift(a[1]));break}if(!0!==o)if(o&&e.throws)t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+l+" to "+s}}}return{state:"success",data:t}}(p,w,C,d),d?(p.ifModified&&((_=C.getResponseHeader("Last-Modified"))&&(T.lastModified[r]=_),(_=C.getResponseHeader("etag"))&&(T.etag[r]=_)),204===e||"HEAD"===p.type?x="nocontent":304===e?x="notmodified":(x=w.state,h=w.data,d=!(b=w.error))):(b=x,!e&&x||(x="error",e<0&&(e=0))),C.status=e,C.statusText=(t||x)+"",d?g.resolveWith(f,[h,x,C]):g.rejectWith(f,[C,x,b]),C.statusCode(y),y=void 0,u&&m.trigger(d?"ajaxSuccess":"ajaxError",[C,p,d?h:b]),v.fireWith(f,[C,x]),u&&(m.trigger("ajaxComplete",[C,p]),--T.active||T.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],(function(e,t){T[t]=function(e,n,i,r){return v(n)&&(r=r||i,i=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:r,data:n,success:i},T.isPlainObject(e)&&e))}})),T.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),T._evalUrl=function(e,t,n){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t,n)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){T(this).wrapInner(e.call(this,t))})):this.each((function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e);return this.each((function(n){T(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){T(this).replaceWith(this.childNodes)})),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(e){}};var Gt={0:200,1223:204},Vt=T.ajaxSettings.xhr();g.cors=!!Vt&&"withCredentials"in Vt,g.ajax=Vt=!!Vt,T.ajaxTransport((function(e){var t,n;if(g.cors||Vt&&!e.crossDomain)return{send:function(r,s){var o,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)a[o]=e.xhrFields[o];for(o in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(o,r[o]);t=function(e){return function(){t&&(t=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(Gt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),n=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&i.setTimeout((function(){t&&n()}))},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),T.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),T.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(i,r){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),b.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Yt,Xt=[],Zt=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||T.expando+"_"+kt.guid++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",(function(e,t,n){var r,s,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||T.error(r+" was not called"),o[0]},e.dataTypes[0]="json",s=i[r],i[r]=function(){o=arguments},n.always((function(){void 0===s?T(i).removeProp(r):i[r]=s,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&v(s)&&s(o[0]),o=s=void 0})),"script"})),g.createHTMLDocument=((Yt=b.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Yt.childNodes.length),T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(g.createHTMLDocument?((i=(t=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,t.head.appendChild(i)):t=b),s=!n&&[],(r=j.exec(e))?[t.createElement(r[1])]:(r=Ce([e],t,s),s&&s.length&&T(s).remove(),T.merge([],r.childNodes)));var i,r,s},T.fn.load=function(e,t,n){var i,r,s,o=this,a=e.indexOf(" ");return a>-1&&(i=bt(e.slice(a)),e=e.slice(0,a)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),o.length>0&&T.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done((function(e){s=arguments,o.html(i?T("<div>").append(T.parseHTML(e)).find(i):e)})).always(n&&function(e,t){o.each((function(){n.apply(this,s||[e.responseText,t,e])}))}),this},T.expr.pseudos.animated=function(e){return T.grep(T.timers,(function(t){return e===t.elem})).length},T.offset={setOffset:function(e,t,n){var i,r,s,o,a,l,c=T.css(e,"position"),u=T(e),d={};"static"===c&&(e.style.position="relative"),a=u.offset(),s=T.css(e,"top"),l=T.css(e,"left"),("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1?(o=(i=u.position()).top,r=i.left):(o=parseFloat(s)||0,r=parseFloat(l)||0),v(t)&&(t=t.call(e,n,T.extend({},a))),null!=t.top&&(d.top=t.top-a.top+o),null!=t.left&&(d.left=t.left-a.left+r),"using"in t?t.using.call(e,d):u.css(d)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){T.offset.setOffset(this,e,t)}));var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===T.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),r.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-T.css(i,"marginTop",!0),left:t.left-r.left-T.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||oe}))}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;T.fn[e]=function(i){return U(this,(function(e,i,r){var s;if(y(e)?s=e:9===e.nodeType&&(s=e.defaultView),void 0===r)return s?s[t]:e[i];s?s.scrollTo(n?s.pageXOffset:r,n?r:s.pageYOffset):e[i]=r}),e,i,arguments.length)}})),T.each(["top","left"],(function(e,t){T.cssHooks[t]=Ye(g.pixelPosition,(function(e,n){if(n)return n=Ve(e,t),Re.test(n)?T(e).position()[t]+"px":n}))})),T.each({Height:"height",Width:"width"},(function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,i){T.fn[i]=function(r,s){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===s?"margin":"border");return U(this,(function(t,n,r){var s;return y(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===r?T.css(t,n,a):T.style(t,n,r,a)}),t,o?r:void 0,o)}}))})),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){T.fn[t]=function(e){return this.on(t,e)}})),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var Qt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;T.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return i=a.call(arguments,2),r=function(){return e.apply(t||this,i.concat(a.call(arguments)))},r.guid=e.guid=e.guid||T.guid++,r},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=D,T.isFunction=v,T.isWindow=y,T.camelCase=X,T.type=x,T.now=Date.now,T.isNumeric=function(e){var t=T.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},T.trim=function(e){return null==e?"":(e+"").replace(Qt,"$1")},void 0===(n=function(){return T}.apply(t,[]))||(e.exports=n);var Kt=i.jQuery,Jt=i.$;return T.noConflict=function(e){return i.$===T&&(i.$=Jt),e&&i.jQuery===T&&(i.jQuery=Kt),T},void 0===r&&(i.jQuery=i.$=T),T}))},9:function(){!function(e,t,n,i){function r(t,n){this.settings=null,this.options=e.extend({},r.Defaults,n),this.$element=e(t),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},e.each(["onResize","onThrottledResize"],e.proxy((function(t,n){this._handlers[n]=e.proxy(this[n],this)}),this)),e.each(r.Plugins,e.proxy((function(e,t){this._plugins[e.charAt(0).toLowerCase()+e.slice(1)]=new t(this)}),this)),e.each(r.Workers,e.proxy((function(t,n){this._pipe.push({filter:n.filter,run:e.proxy(n.run,this)})}),this)),this.setup(),this.initialize()}r.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:t,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},r.Width={Default:"default",Inner:"inner",Outer:"outer"},r.Type={Event:"event",State:"state"},r.Plugins={},r.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(e){e.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(e){var t=this.settings.margin||"",n=!this.settings.autoWidth,i=this.settings.rtl,r={width:"auto","margin-left":i?t:"","margin-right":i?"":t};!n&&this.$stage.children().css(r),e.css=r}},{filter:["width","items","settings"],run:function(e){var t=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,n=null,i=this._items.length,r=!this.settings.autoWidth,s=[];for(e.items={merge:!1,width:t};i--;)n=this._mergers[i],n=this.settings.mergeFit&&Math.min(n,this.settings.items)||n,e.items.merge=n>1||e.items.merge,s[i]=r?t*n:this._items[i].width();this._widths=s}},{filter:["items","settings"],run:function(){var t=[],n=this._items,i=this.settings,r=Math.max(2*i.items,4),s=2*Math.ceil(n.length/2),o=i.loop&&n.length?i.rewind?r:Math.max(r,s):0,a="",l="";for(o/=2;o>0;)t.push(this.normalize(t.length/2,!0)),a+=n[t[t.length-1]][0].outerHTML,t.push(this.normalize(n.length-1-(t.length-1)/2,!0)),l=n[t[t.length-1]][0].outerHTML+l,o-=1;this._clones=t,e(a).addClass("cloned").appendTo(this.$stage),e(l).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var e=this.settings.rtl?1:-1,t=this._clones.length+this._items.length,n=-1,i=0,r=0,s=[];++n<t;)i=s[n-1]||0,r=this._widths[this.relative(n)]+this.settings.margin,s.push(i+r*e);this._coordinates=s}},{filter:["width","items","settings"],run:function(){var e=this.settings.stagePadding,t=this._coordinates,n={width:Math.ceil(Math.abs(t[t.length-1]))+2*e,"padding-left":e||"","padding-right":e||""};this.$stage.css(n)}},{filter:["width","items","settings"],run:function(e){var t=this._coordinates.length,n=!this.settings.autoWidth,i=this.$stage.children();if(n&&e.items.merge)for(;t--;)e.css.width=this._widths[this.relative(t)],i.eq(t).css(e.css);else n&&(e.css.width=e.items.width,i.css(e.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(e){e.current=e.current?this.$stage.children().index(e.current):0,e.current=Math.max(this.minimum(),Math.min(this.maximum(),e.current)),this.reset(e.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var e,t,n,i,r=this.settings.rtl?1:-1,s=2*this.settings.stagePadding,o=this.coordinates(this.current())+s,a=o+this.width()*r,l=[];for(n=0,i=this._coordinates.length;n<i;n++)e=this._coordinates[n-1]||0,t=Math.abs(this._coordinates[n])+s*r,(this.op(e,"<=",o)&&this.op(e,">",a)||this.op(t,"<",o)&&this.op(t,">",a))&&l.push(n);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],r.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=e("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(e("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},r.prototype.initializeItems=function(){var t=this.$element.find(".owl-item");if(t.length)return this._items=t.get().map((function(t){return e(t)})),this._mergers=this._items.map((function(){return 1})),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},r.prototype.initialize=function(){var e,t,n;(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading"))&&(e=this.$element.find("img"),t=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:i,n=this.$element.children(t).width(),e.length&&n<=0&&this.preloadAutoWidthImages(e));this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},r.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},r.prototype.setup=function(){var t=this.viewport(),n=this.options.responsive,i=-1,r=null;n?(e.each(n,(function(e){e<=t&&e>i&&(i=Number(e))})),"function"==typeof(r=e.extend({},this.options,n[i])).stagePadding&&(r.stagePadding=r.stagePadding()),delete r.responsive,r.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+i))):r=e.extend({},this.options),this.trigger("change",{property:{name:"settings",value:r}}),this._breakpoint=i,this.settings=r,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},r.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},r.prototype.prepare=function(t){var n=this.trigger("prepare",{content:t});return n.data||(n.data=e("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(t)),this.trigger("prepared",{content:n.data}),n.data},r.prototype.update=function(){for(var t=0,n=this._pipe.length,i=e.proxy((function(e){return this[e]}),this._invalidated),r={};t<n;)(this._invalidated.all||e.grep(this._pipe[t].filter,i).length>0)&&this._pipe[t].run(r),t++;this._invalidated={},!this.is("valid")&&this.enter("valid")},r.prototype.width=function(e){switch(e=e||r.Width.Default){case r.Width.Inner:case r.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},r.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},r.prototype.onThrottledResize=function(){t.clearTimeout(this.resizeTimer),this.resizeTimer=t.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},r.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},r.prototype.registerEventHandlers=function(){e.support.transition&&this.$stage.on(e.support.transition.end+".owl.core",e.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(t,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",e.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",(function(){return!1}))),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",e.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",e.proxy(this.onDragEnd,this)))},r.prototype.onDragStart=function(t){var i=null;3!==t.which&&(e.support.transform?i={x:(i=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===i.length?12:4],y:i[16===i.length?13:5]}:(i=this.$stage.position(),i={x:this.settings.rtl?i.left+this.$stage.width()-this.width()+this.settings.margin:i.left,y:i.top}),this.is("animating")&&(e.support.transform?this.animate(i.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===t.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=e(t.target),this._drag.stage.start=i,this._drag.stage.current=i,this._drag.pointer=this.pointer(t),e(n).on("mouseup.owl.core touchend.owl.core",e.proxy(this.onDragEnd,this)),e(n).one("mousemove.owl.core touchmove.owl.core",e.proxy((function(t){var i=this.difference(this._drag.pointer,this.pointer(t));e(n).on("mousemove.owl.core touchmove.owl.core",e.proxy(this.onDragMove,this)),Math.abs(i.x)<Math.abs(i.y)&&this.is("valid")||(t.preventDefault(),this.enter("dragging"),this.trigger("drag"))}),this)))},r.prototype.onDragMove=function(e){var t=null,n=null,i=null,r=this.difference(this._drag.pointer,this.pointer(e)),s=this.difference(this._drag.stage.start,r);this.is("dragging")&&(e.preventDefault(),this.settings.loop?(t=this.coordinates(this.minimum()),n=this.coordinates(this.maximum()+1)-t,s.x=((s.x-t)%n+n)%n+t):(t=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),n=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),i=this.settings.pullDrag?-1*r.x/5:0,s.x=Math.max(Math.min(s.x,t+i),n+i)),this._drag.stage.current=s,this.animate(s.x))},r.prototype.onDragEnd=function(t){var i=this.difference(this._drag.pointer,this.pointer(t)),r=this._drag.stage.current,s=i.x>0^this.settings.rtl?"left":"right";e(n).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==i.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(r.x,0!==i.x?s:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=s,(Math.abs(i.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",(function(){return!1}))),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},r.prototype.closest=function(t,n){var r=-1,s=this.width(),o=this.coordinates();return this.settings.freeDrag||e.each(o,e.proxy((function(e,a){return"left"===n&&t>a-30&&t<a+30?r=e:"right"===n&&t>a-s-30&&t<a-s+30?r=e+1:this.op(t,"<",a)&&this.op(t,">",o[e+1]!==i?o[e+1]:a-s)&&(r="left"===n?e+1:e),-1===r}),this)),this.settings.loop||(this.op(t,">",o[this.minimum()])?r=t=this.minimum():this.op(t,"<",o[this.maximum()])&&(r=t=this.maximum())),r},r.prototype.animate=function(t){var n=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),n&&(this.enter("animating"),this.trigger("translate")),e.support.transform3d&&e.support.transition?this.$stage.css({transform:"translate3d("+t+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):n?this.$stage.animate({left:t+"px"},this.speed(),this.settings.fallbackEasing,e.proxy(this.onTransitionEnd,this)):this.$stage.css({left:t+"px"})},r.prototype.is=function(e){return this._states.current[e]&&this._states.current[e]>0},r.prototype.current=function(e){if(e===i)return this._current;if(0===this._items.length)return i;if(e=this.normalize(e),this._current!==e){var t=this.trigger("change",{property:{name:"position",value:e}});t.data!==i&&(e=this.normalize(t.data)),this._current=e,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},r.prototype.invalidate=function(t){return"string"===e.type(t)&&(this._invalidated[t]=!0,this.is("valid")&&this.leave("valid")),e.map(this._invalidated,(function(e,t){return t}))},r.prototype.reset=function(e){(e=this.normalize(e))!==i&&(this._speed=0,this._current=e,this.suppress(["translate","translated"]),this.animate(this.coordinates(e)),this.release(["translate","translated"]))},r.prototype.normalize=function(e,t){var n=this._items.length,r=t?0:this._clones.length;return!this.isNumeric(e)||n<1?e=i:(e<0||e>=n+r)&&(e=((e-r/2)%n+n)%n+r/2),e},r.prototype.relative=function(e){return e-=this._clones.length/2,this.normalize(e,!0)},r.prototype.maximum=function(e){var t,n,i,r=this.settings,s=this._coordinates.length;if(r.loop)s=this._clones.length/2+this._items.length-1;else if(r.autoWidth||r.merge){if(t=this._items.length)for(n=this._items[--t].width(),i=this.$element.width();t--&&!((n+=this._items[t].width()+this.settings.margin)>i););s=t+1}else s=r.center?this._items.length-1:this._items.length-r.items;return e&&(s-=this._clones.length/2),Math.max(s,0)},r.prototype.minimum=function(e){return e?0:this._clones.length/2},r.prototype.items=function(e){return e===i?this._items.slice():(e=this.normalize(e,!0),this._items[e])},r.prototype.mergers=function(e){return e===i?this._mergers.slice():(e=this.normalize(e,!0),this._mergers[e])},r.prototype.clones=function(t){var n=this._clones.length/2,r=n+this._items.length,s=function(e){return e%2==0?r+e/2:n-(e+1)/2};return t===i?e.map(this._clones,(function(e,t){return s(t)})):e.map(this._clones,(function(e,n){return e===t?s(n):null}))},r.prototype.speed=function(e){return e!==i&&(this._speed=e),this._speed},r.prototype.coordinates=function(t){var n,r=1,s=t-1;return t===i?e.map(this._coordinates,e.proxy((function(e,t){return this.coordinates(t)}),this)):(this.settings.center?(this.settings.rtl&&(r=-1,s=t+1),n=this._coordinates[t],n+=(this.width()-n+(this._coordinates[s]||0))/2*r):n=this._coordinates[s]||0,n=Math.ceil(n))},r.prototype.duration=function(e,t,n){return 0===n?0:Math.min(Math.max(Math.abs(t-e),1),6)*Math.abs(n||this.settings.smartSpeed)},r.prototype.to=function(e,t){var n=this.current(),i=null,r=e-this.relative(n),s=(r>0)-(r<0),o=this._items.length,a=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(r)>o/2&&(r+=-1*s*o),(i=(((e=n+r)-a)%o+o)%o+a)!==e&&i-r<=l&&i-r>0&&(n=i-r,e=i,this.reset(n))):e=this.settings.rewind?(e%(l+=1)+l)%l:Math.max(a,Math.min(l,e)),this.speed(this.duration(n,e,t)),this.current(e),this.isVisible()&&this.update()},r.prototype.next=function(e){e=e||!1,this.to(this.relative(this.current())+1,e)},r.prototype.prev=function(e){e=e||!1,this.to(this.relative(this.current())-1,e)},r.prototype.onTransitionEnd=function(e){if(e!==i&&(e.stopPropagation(),(e.target||e.srcElement||e.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},r.prototype.viewport=function(){var i;return this.options.responsiveBaseElement!==t?i=e(this.options.responsiveBaseElement).width():t.innerWidth?i=t.innerWidth:n.documentElement&&n.documentElement.clientWidth&&(i=n.documentElement.clientWidth),i},r.prototype.replace=function(t){this.$stage.empty(),this._items=[],t&&(t=t instanceof jQuery?t:e(t)),this.settings.nestedItemSelector&&(t=t.find("."+this.settings.nestedItemSelector)),t.filter((function(){return 1===this.nodeType})).each(e.proxy((function(e,t){t=this.prepare(t),this.$stage.append(t),this._items.push(t),this._mergers.push(1*t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)}),this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},r.prototype.add=function(t,n){var r=this.relative(this._current);n=n===i?this._items.length:this.normalize(n,!0),t=t instanceof jQuery?t:e(t),this.trigger("add",{content:t,position:n}),t=this.prepare(t),0===this._items.length||n===this._items.length?(0===this._items.length&&this.$stage.append(t),0!==this._items.length&&this._items[n-1].after(t),this._items.push(t),this._mergers.push(1*t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[n].before(t),this._items.splice(n,0,t),this._mergers.splice(n,0,1*t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[r]&&this.reset(this._items[r].index()),this.invalidate("items"),this.trigger("added",{content:t,position:n})},r.prototype.remove=function(e){(e=this.normalize(e,!0))!==i&&(this.trigger("remove",{content:this._items[e],position:e}),this._items[e].remove(),this._items.splice(e,1),this._mergers.splice(e,1),this.invalidate("items"),this.trigger("removed",{content:null,position:e}))},r.prototype.preloadAutoWidthImages=function(t){t.each(e.proxy((function(t,n){this.enter("pre-loading"),n=e(n),e(new Image).one("load",e.proxy((function(e){n.attr("src",e.target.src),n.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()}),this)).attr("src",n.attr("src")||n.attr("data-src")||n.attr("data-src-retina"))}),this))},r.prototype.destroy=function(){for(var i in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),e(n).off(".owl.core"),!1!==this.settings.responsive&&(t.clearTimeout(this.resizeTimer),this.off(t,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[i].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},r.prototype.op=function(e,t,n){var i=this.settings.rtl;switch(t){case"<":return i?e>n:e<n;case">":return i?e<n:e>n;case">=":return i?e<=n:e>=n;case"<=":return i?e>=n:e<=n}},r.prototype.on=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on"+t,n)},r.prototype.off=function(e,t,n,i){e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent&&e.detachEvent("on"+t,n)},r.prototype.trigger=function(t,n,i,s,o){var a={item:{count:this._items.length,index:this.current()}},l=e.camelCase(e.grep(["on",t,i],(function(e){return e})).join("-").toLowerCase()),c=e.Event([t,"owl",i||"carousel"].join(".").toLowerCase(),e.extend({relatedTarget:this},a,n));return this._supress[t]||(e.each(this._plugins,(function(e,t){t.onTrigger&&t.onTrigger(c)})),this.register({type:r.Type.Event,name:t}),this.$element.trigger(c),this.settings&&"function"==typeof this.settings[l]&&this.settings[l].call(this,c)),c},r.prototype.enter=function(t){e.each([t].concat(this._states.tags[t]||[]),e.proxy((function(e,t){this._states.current[t]===i&&(this._states.current[t]=0),this._states.current[t]++}),this))},r.prototype.leave=function(t){e.each([t].concat(this._states.tags[t]||[]),e.proxy((function(e,t){this._states.current[t]--}),this))},r.prototype.register=function(t){if(t.type===r.Type.Event){if(e.event.special[t.name]||(e.event.special[t.name]={}),!e.event.special[t.name].owl){var n=e.event.special[t.name]._default;e.event.special[t.name]._default=function(e){return!n||!n.apply||e.namespace&&-1!==e.namespace.indexOf("owl")?e.namespace&&e.namespace.indexOf("owl")>-1:n.apply(this,arguments)},e.event.special[t.name].owl=!0}}else t.type===r.Type.State&&(this._states.tags[t.name]?this._states.tags[t.name]=this._states.tags[t.name].concat(t.tags):this._states.tags[t.name]=t.tags,this._states.tags[t.name]=e.grep(this._states.tags[t.name],e.proxy((function(n,i){return e.inArray(n,this._states.tags[t.name])===i}),this)))},r.prototype.suppress=function(t){e.each(t,e.proxy((function(e,t){this._supress[t]=!0}),this))},r.prototype.release=function(t){e.each(t,e.proxy((function(e,t){delete this._supress[t]}),this))},r.prototype.pointer=function(e){var n={x:null,y:null};return(e=(e=e.originalEvent||e||t.event).touches&&e.touches.length?e.touches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e).pageX?(n.x=e.pageX,n.y=e.pageY):(n.x=e.clientX,n.y=e.clientY),n},r.prototype.isNumeric=function(e){return!isNaN(parseFloat(e))},r.prototype.difference=function(e,t){return{x:e.x-t.x,y:e.y-t.y}},e.fn.owlCarousel=function(t){var n=Array.prototype.slice.call(arguments,1);return this.each((function(){var i=e(this),s=i.data("owl.carousel");s||(s=new r(this,"object"==typeof t&&t),i.data("owl.carousel",s),e.each(["next","prev","to","destroy","refresh","replace","add","remove"],(function(t,n){s.register({type:r.Type.Event,name:n}),s.$element.on(n+".owl.carousel.core",e.proxy((function(e){e.namespace&&e.relatedTarget!==this&&(this.suppress([n]),s[n].apply(this,[].slice.call(arguments,1)),this.release([n]))}),s))}))),"string"==typeof t&&"_"!==t.charAt(0)&&s[t].apply(s,n)}))},e.fn.owlCarousel.Constructor=r}(window.Zepto||window.jQuery,window,document),function(e,t,n,i){var r=function(t){this._core=t,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":e.proxy((function(e){e.namespace&&this._core.settings.autoRefresh&&this.watch()}),this)},this._core.options=e.extend({},r.Defaults,this._core.options),this._core.$element.on(this._handlers)};r.Defaults={autoRefresh:!0,autoRefreshInterval:500},r.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=t.setInterval(e.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},r.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},r.prototype.destroy=function(){var e,n;for(e in t.clearInterval(this._interval),this._handlers)this._core.$element.off(e,this._handlers[e]);for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},e.fn.owlCarousel.Constructor.Plugins.AutoRefresh=r}(window.Zepto||window.jQuery,window,document),function(e,t,n,i){var r=function(t){this._core=t,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":e.proxy((function(t){if(t.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(t.property&&"position"==t.property.name||"initialized"==t.type)){var n=this._core.settings,i=n.center&&Math.ceil(n.items/2)||n.items,r=n.center&&-1*i||0,s=(t.property&&undefined!==t.property.value?t.property.value:this._core.current())+r,o=this._core.clones().length,a=e.proxy((function(e,t){this.load(t)}),this);for(n.lazyLoadEager>0&&(i+=n.lazyLoadEager,n.loop&&(s-=n.lazyLoadEager,i++));r++<i;)this.load(o/2+this._core.relative(s)),o&&e.each(this._core.clones(this._core.relative(s)),a),s++}}),this)},this._core.options=e.extend({},r.Defaults,this._core.options),this._core.$element.on(this._handlers)};r.Defaults={lazyLoad:!1,lazyLoadEager:0},r.prototype.load=function(n){var i=this._core.$stage.children().eq(n),r=i&&i.find(".owl-lazy");!r||e.inArray(i.get(0),this._loaded)>-1||(r.each(e.proxy((function(n,i){var r,s=e(i),o=t.devicePixelRatio>1&&s.attr("data-src-retina")||s.attr("data-src")||s.attr("data-srcset");this._core.trigger("load",{element:s,url:o},"lazy"),s.is("img")?s.one("load.owl.lazy",e.proxy((function(){s.css("opacity",1),this._core.trigger("loaded",{element:s,url:o},"lazy")}),this)).attr("src",o):s.is("source")?s.one("load.owl.lazy",e.proxy((function(){this._core.trigger("loaded",{element:s,url:o},"lazy")}),this)).attr("srcset",o):((r=new Image).onload=e.proxy((function(){s.css({"background-image":'url("'+o+'")',opacity:"1"}),this._core.trigger("loaded",{element:s,url:o},"lazy")}),this),r.src=o)}),this)),this._loaded.push(i.get(0)))},r.prototype.destroy=function(){var e,t;for(e in this.handlers)this._core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.Lazy=r}(window.Zepto||window.jQuery,window,document),function(e,t,n,i){var r=function(n){this._core=n,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":e.proxy((function(e){e.namespace&&this._core.settings.autoHeight&&this.update()}),this),"changed.owl.carousel":e.proxy((function(e){e.namespace&&this._core.settings.autoHeight&&"position"===e.property.name&&this.update()}),this),"loaded.owl.lazy":e.proxy((function(e){e.namespace&&this._core.settings.autoHeight&&e.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()}),this)},this._core.options=e.extend({},r.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var i=this;e(t).on("load",(function(){i._core.settings.autoHeight&&i.update()})),e(t).resize((function(){i._core.settings.autoHeight&&(null!=i._intervalId&&clearTimeout(i._intervalId),i._intervalId=setTimeout((function(){i.update()}),250))}))};r.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},r.prototype.update=function(){var t=this._core._current,n=t+this._core.settings.items,i=this._core.settings.lazyLoad,r=this._core.$stage.children().toArray().slice(t,n),s=[],o=0;e.each(r,(function(t,n){s.push(e(n).height())})),(o=Math.max.apply(null,s))<=1&&i&&this._previousHeight&&(o=this._previousHeight),this._previousHeight=o,this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)},r.prototype.destroy=function(){var e,t;for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.AutoHeight=r}(window.Zepto||window.jQuery,window,document),function(e,t,n,i){var r=function(t){this._core=t,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":e.proxy((function(e){e.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})}),this),"resize.owl.carousel":e.proxy((function(e){e.namespace&&this._core.settings.video&&this.isInFullScreen()&&e.preventDefault()}),this),"refreshed.owl.carousel":e.proxy((function(e){e.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()}),this),"changed.owl.carousel":e.proxy((function(e){e.namespace&&"position"===e.property.name&&this._playing&&this.stop()}),this),"prepared.owl.carousel":e.proxy((function(t){if(t.namespace){var n=e(t.content).find(".owl-video");n.length&&(n.css("display","none"),this.fetch(n,e(t.content)))}}),this)},this._core.options=e.extend({},r.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",e.proxy((function(e){this.play(e)}),this))};r.Defaults={video:!1,videoHeight:!1,videoWidth:!1},r.prototype.fetch=function(e,t){var n=e.attr("data-vimeo-id")?"vimeo":e.attr("data-vzaar-id")?"vzaar":"youtube",i=e.attr("data-vimeo-id")||e.attr("data-youtube-id")||e.attr("data-vzaar-id"),r=e.attr("data-width")||this._core.settings.videoWidth,s=e.attr("data-height")||this._core.settings.videoHeight,o=e.attr("href");if(!o)throw new Error("Missing video URL.");if((i=o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")>-1)n="youtube";else if(i[3].indexOf("vimeo")>-1)n="vimeo";else{if(!(i[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");n="vzaar"}i=i[6],this._videos[o]={type:n,id:i,width:r,height:s},t.attr("data-video",o),this.thumbnail(e,this._videos[o])},r.prototype.thumbnail=function(t,n){var i,r,s=n.width&&n.height?"width:"+n.width+"px;height:"+n.height+"px;":"",o=t.find("img"),a="src",l="",c=this._core.settings,u=function(n){'<div class="owl-video-play-icon"></div>',i=c.lazyLoad?e("<div/>",{class:"owl-video-tn "+l,srcType:n}):e("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+n+")"}),t.after(i),t.after('<div class="owl-video-play-icon"></div>')};if(t.wrap(e("<div/>",{class:"owl-video-wrapper",style:s})),this._core.settings.lazyLoad&&(a="data-src",l="owl-lazy"),o.length)return u(o.attr(a)),o.remove(),!1;"youtube"===n.type?(r="//img.youtube.com/vi/"+n.id+"/hqdefault.jpg",u(r)):"vimeo"===n.type?e.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+n.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){r=e[0].thumbnail_large,u(r)}}):"vzaar"===n.type&&e.ajax({type:"GET",url:"//vzaar.com/api/videos/"+n.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){r=e.framegrab_url,u(r)}})},r.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},r.prototype.play=function(t){var n,i=e(t.target).closest("."+this._core.settings.itemClass),r=this._videos[i.attr("data-video")],s=r.width||"100%",o=r.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),i=this._core.items(this._core.relative(i.index())),this._core.reset(i.index()),(n=e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height",o),n.attr("width",s),"youtube"===r.type?n.attr("src","//www.youtube.com/embed/"+r.id+"?autoplay=1&rel=0&v="+r.id):"vimeo"===r.type?n.attr("src","//player.vimeo.com/video/"+r.id+"?autoplay=1"):"vzaar"===r.type&&n.attr("src","//view.vzaar.com/"+r.id+"/player?autoplay=true"),e(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")),this._playing=i.addClass("owl-video-playing"))},r.prototype.isInFullScreen=function(){var t=n.fullscreenElement||n.mozFullScreenElement||n.webkitFullscreenElement;return t&&e(t).parent().hasClass("owl-video-frame")},r.prototype.destroy=function(){var e,t;for(e in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.Video=r}(window.Zepto||window.jQuery,window,document),function(e,t,n,i){var r=function(t){this.core=t,this.core.options=e.extend({},r.Defaults,this.core.options),this.swapping=!0,this.previous=i,this.next=i,this.handlers={"change.owl.carousel":e.proxy((function(e){e.namespace&&"position"==e.property.name&&(this.previous=this.core.current(),this.next=e.property.value)}),this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":e.proxy((function(e){e.namespace&&(this.swapping="translated"==e.type)}),this),"translate.owl.carousel":e.proxy((function(e){e.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()}),this)},this.core.$element.on(this.handlers)};r.Defaults={animateOut:!1,animateIn:!1},r.prototype.swap=function(){if(1===this.core.settings.items&&e.support.animation&&e.support.transition){this.core.speed(0);var t,n=e.proxy(this.clear,this),i=this.core.$stage.children().eq(this.previous),r=this.core.$stage.children().eq(this.next),s=this.core.settings.animateIn,o=this.core.settings.animateOut;this.core.current()!==this.previous&&(o&&(t=this.core.coordinates(this.previous)-this.core.coordinates(this.next),i.one(e.support.animation.end,n).css({left:t+"px"}).addClass("animated owl-animated-out").addClass(o)),s&&r.one(e.support.animation.end,n).addClass("animated owl-animated-in").addClass(s))}},r.prototype.clear=function(t){e(t.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},r.prototype.destroy=function(){var e,t;for(e in this.handlers)this.core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.Animate=r}(window.Zepto||window.jQuery,window,document),function(e,t,n,i){var r=function(t){this._core=t,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":e.proxy((function(e){e.namespace&&"settings"===e.property.name?this._core.settings.autoplay?this.play():this.stop():e.namespace&&"position"===e.property.name&&this._paused&&(this._time=0)}),this),"initialized.owl.carousel":e.proxy((function(e){e.namespace&&this._core.settings.autoplay&&this.play()}),this),"play.owl.autoplay":e.proxy((function(e,t,n){e.namespace&&this.play(t,n)}),this),"stop.owl.autoplay":e.proxy((function(e){e.namespace&&this.stop()}),this),"mouseover.owl.autoplay":e.proxy((function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()}),this),"mouseleave.owl.autoplay":e.proxy((function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()}),this),"touchstart.owl.core":e.proxy((function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()}),this),"touchend.owl.core":e.proxy((function(){this._core.settings.autoplayHoverPause&&this.play()}),this)},this._core.$element.on(this._handlers),this._core.options=e.extend({},r.Defaults,this._core.options)};r.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},r.prototype._next=function(i){this._call=t.setTimeout(e.proxy(this._next,this,i),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||n.hidden||this._core.next(i||this._core.settings.autoplaySpeed)},r.prototype.read=function(){return(new Date).getTime()-this._time},r.prototype.play=function(n,i){var r;this._core.is("rotating")||this._core.enter("rotating"),n=n||this._core.settings.autoplayTimeout,r=Math.min(this._time%(this._timeout||n),n),this._paused?(this._time=this.read(),this._paused=!1):t.clearTimeout(this._call),this._time+=this.read()%n-r,this._timeout=n,this._call=t.setTimeout(e.proxy(this._next,this,i),n-r)},r.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,t.clearTimeout(this._call),this._core.leave("rotating"))},r.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,t.clearTimeout(this._call))},r.prototype.destroy=function(){var e,t;for(e in this.stop(),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},e.fn.owlCarousel.Constructor.Plugins.autoplay=r}(window.Zepto||window.jQuery,window,document),function(e,t,n,i){"use strict";var r=function(t){this._core=t,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":e.proxy((function(t){t.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")}),this),"added.owl.carousel":e.proxy((function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,0,this._templates.pop())}),this),"remove.owl.carousel":e.proxy((function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,1)}),this),"changed.owl.carousel":e.proxy((function(e){e.namespace&&"position"==e.property.name&&this.draw()}),this),"initialized.owl.carousel":e.proxy((function(e){e.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))}),this),"refreshed.owl.carousel":e.proxy((function(e){e.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))}),this)},this._core.options=e.extend({},r.Defaults,this._core.options),this.$element.on(this._handlers)};r.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},r.prototype.initialize=function(){var t,n=this._core.settings;for(t in this._controls.$relative=(n.navContainer?e(n.navContainer):e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=e("<"+n.navElement+">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click",e.proxy((function(e){this.prev(n.navSpeed)}),this)),this._controls.$next=e("<"+n.navElement+">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click",e.proxy((function(e){this.next(n.navSpeed)}),this)),n.dotsData||(this._templates=[e('<button role="button">').addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]),this._controls.$absolute=(n.dotsContainer?e(n.dotsContainer):e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",e.proxy((function(t){var i=e(t.target).parent().is(this._controls.$absolute)?e(t.target).index():e(t.target).parent().index();t.preventDefault(),this.to(i,n.dotsSpeed)}),this)),this._overrides)this._core[t]=e.proxy(this[t],this)},r.prototype.destroy=function(){var e,t,n,i,r;for(e in r=this._core.settings,this._handlers)this.$element.off(e,this._handlers[e]);for(t in this._controls)"$relative"===t&&r.navContainer?this._controls[t].html(""):this._controls[t].remove();for(i in this.overides)this._core[i]=this._overrides[i];for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},r.prototype.update=function(){var e,t,n=this._core.clones().length/2,i=n+this._core.items().length,r=this._core.maximum(!0),s=this._core.settings,o=s.center||s.autoWidth||s.dotsData?1:s.dotsEach||s.items;if("page"!==s.slideBy&&(s.slideBy=Math.min(s.slideBy,s.items)),s.dots||"page"==s.slideBy)for(this._pages=[],e=n,t=0,0;e<i;e++){if(t>=o||0===t){if(this._pages.push({start:Math.min(r,e-n),end:e-n+o-1}),Math.min(r,e-n)===r)break;t=0}t+=this._core.mergers(this._core.relative(e))}},r.prototype.draw=function(){var t,n=this._core.settings,i=this._core.items().length<=n.items,r=this._core.relative(this._core.current()),s=n.loop||n.rewind;this._controls.$relative.toggleClass("disabled",!n.nav||i),n.nav&&(this._controls.$previous.toggleClass("disabled",!s&&r<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!s&&r>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!n.dots||i),n.dots&&(t=this._pages.length-this._controls.$absolute.children().length,n.dotsData&&0!==t?this._controls.$absolute.html(this._templates.join("")):t>0?this._controls.$absolute.append(new Array(t+1).join(this._templates[0])):t<0&&this._controls.$absolute.children().slice(t).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(e.inArray(this.current(),this._pages)).addClass("active"))},r.prototype.onTrigger=function(t){var n=this._core.settings;t.page={index:e.inArray(this.current(),this._pages),count:this._pages.length,size:n&&(n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items)}},r.prototype.current=function(){var t=this._core.relative(this._core.current());return e.grep(this._pages,e.proxy((function(e,n){return e.start<=t&&e.end>=t}),this)).pop()},r.prototype.getPosition=function(t){var n,i,r=this._core.settings;return"page"==r.slideBy?(n=e.inArray(this.current(),this._pages),i=this._pages.length,t?++n:--n,n=this._pages[(n%i+i)%i].start):(n=this._core.relative(this._core.current()),i=this._core.items().length,t?n+=r.slideBy:n-=r.slideBy),n},r.prototype.next=function(t){e.proxy(this._overrides.to,this._core)(this.getPosition(!0),t)},r.prototype.prev=function(t){e.proxy(this._overrides.to,this._core)(this.getPosition(!1),t)},r.prototype.to=function(t,n,i){var r;!i&&this._pages.length?(r=this._pages.length,e.proxy(this._overrides.to,this._core)(this._pages[(t%r+r)%r].start,n)):e.proxy(this._overrides.to,this._core)(t,n)},e.fn.owlCarousel.Constructor.Plugins.Navigation=r}(window.Zepto||window.jQuery,window,document),function(e,t,n,i){"use strict";var r=function(n){this._core=n,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":e.proxy((function(n){n.namespace&&"URLHash"===this._core.settings.startPosition&&e(t).trigger("hashchange.owl.navigation")}),this),"prepared.owl.carousel":e.proxy((function(t){if(t.namespace){var n=e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!n)return;this._hashes[n]=t.content}}),this),"changed.owl.carousel":e.proxy((function(n){if(n.namespace&&"position"===n.property.name){var i=this._core.items(this._core.relative(this._core.current())),r=e.map(this._hashes,(function(e,t){return e===i?t:null})).join();if(!r||t.location.hash.slice(1)===r)return;t.location.hash=r}}),this)},this._core.options=e.extend({},r.Defaults,this._core.options),this.$element.on(this._handlers),e(t).on("hashchange.owl.navigation",e.proxy((function(e){var n=t.location.hash.substring(1),i=this._core.$stage.children(),r=this._hashes[n]&&i.index(this._hashes[n]);undefined!==r&&r!==this._core.current()&&this._core.to(this._core.relative(r),!1,!0)}),this))};r.Defaults={URLhashListener:!1},r.prototype.destroy=function(){var n,i;for(n in e(t).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(n,this._handlers[n]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},e.fn.owlCarousel.Constructor.Plugins.Hash=r}(window.Zepto||window.jQuery,window,document),function(e,t,n,i){var r=e("<support>").get(0).style,s="Webkit Moz O ms".split(" "),o={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},a=function(){return!!u("transform")},l=function(){return!!u("perspective")},c=function(){return!!u("animation")};function u(t,n){var o=!1,a=t.charAt(0).toUpperCase()+t.slice(1);return e.each((t+" "+s.join(a+" ")+a).split(" "),(function(e,t){if(r[t]!==i)return o=!n||t,!1})),o}function d(e){return u(e,!0)}(function(){return!!u("transition")})()&&(e.support.transition=new String(d("transition")),e.support.transition.end=o.transition.end[e.support.transition]),c()&&(e.support.animation=new String(d("animation")),e.support.animation.end=o.animation.end[e.support.animation]),a()&&(e.support.transform=new String(d("transform")),e.support.transform3d=l())}(window.Zepto||window.jQuery,window,document)},686:function(e,t,n){var i,r,s;r=[n(755)],i=function(e){var t=function(){if(e&&e.fn&&e.fn.select2&&e.fn.select2.amd)var t=e.fn.select2.amd;var n,i,r;return t&&t.requirejs||(t?i=t:t={},function(e){var t,s,o,a,l={},c={},u={},d={},h=Object.prototype.hasOwnProperty,p=[].slice,f=/\.js$/;function m(e,t){return h.call(e,t)}function g(e,t){var n,i,r,s,o,a,l,c,d,h,p,m=t&&t.split("/"),g=u.map,v=g&&g["*"]||{};if(e){for(o=(e=e.split("/")).length-1,u.nodeIdCompat&&f.test(e[o])&&(e[o]=e[o].replace(f,"")),"."===e[0].charAt(0)&&m&&(e=m.slice(0,m.length-1).concat(e)),d=0;d<e.length;d++)if("."===(p=e[d]))e.splice(d,1),d-=1;else if(".."===p){if(0===d||1===d&&".."===e[2]||".."===e[d-1])continue;d>0&&(e.splice(d-1,2),d-=2)}e=e.join("/")}if((m||v)&&g){for(d=(n=e.split("/")).length;d>0;d-=1){if(i=n.slice(0,d).join("/"),m)for(h=m.length;h>0;h-=1)if((r=g[m.slice(0,h).join("/")])&&(r=r[i])){s=r,a=d;break}if(s)break;!l&&v&&v[i]&&(l=v[i],c=d)}!s&&l&&(s=l,a=c),s&&(n.splice(0,a,s),e=n.join("/"))}return e}function v(t,n){return function(){var i=p.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),s.apply(e,i.concat([t,n]))}}function y(e){return function(t){return g(t,e)}}function b(e){return function(t){l[e]=t}}function w(n){if(m(c,n)){var i=c[n];delete c[n],d[n]=!0,t.apply(e,i)}if(!m(l,n)&&!m(d,n))throw new Error("No "+n);return l[n]}function _(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function x(e){return e?_(e):[]}function C(e){return function(){return u&&u.config&&u.config[e]||{}}}o=function(e,t){var n,i=_(e),r=i[0],s=t[1];return e=i[1],r&&(n=w(r=g(r,s))),r?e=n&&n.normalize?n.normalize(e,y(s)):g(e,s):(r=(i=_(e=g(e,s)))[0],e=i[1],r&&(n=w(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},a={require:function(e){return v(e)},exports:function(e){var t=l[e];return void 0!==t?t:l[e]={}},module:function(e){return{id:e,uri:"",exports:l[e],config:C(e)}}},t=function(t,n,i,r){var s,u,h,p,f,g,y,_=[],C=typeof i;if(g=x(r=r||t),"undefined"===C||"function"===C){for(n=!n.length&&i.length?["require","exports","module"]:n,f=0;f<n.length;f+=1)if("require"===(u=(p=o(n[f],g)).f))_[f]=a.require(t);else if("exports"===u)_[f]=a.exports(t),y=!0;else if("module"===u)s=_[f]=a.module(t);else if(m(l,u)||m(c,u)||m(d,u))_[f]=w(u);else{if(!p.p)throw new Error(t+" missing "+u);p.p.load(p.n,v(r,!0),b(u),{}),_[f]=l[u]}h=i?i.apply(l[t],_):void 0,t&&(s&&s.exports!==e&&s.exports!==l[t]?l[t]=s.exports:h===e&&y||(l[t]=h))}else t&&(l[t]=i)},n=i=s=function(n,i,r,l,c){if("string"==typeof n)return a[n]?a[n](i):w(o(n,x(i)).f);if(!n.splice){if((u=n).deps&&s(u.deps,u.callback),!i)return;i.splice?(n=i,i=r,r=null):n=e}return i=i||function(){},"function"==typeof r&&(r=l,l=c),l?t(e,n,i,r):setTimeout((function(){t(e,n,i,r)}),4),s},s.config=function(e){return s(e)},n._defined=l,(r=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),m(l,e)||m(c,e)||(c[e]=[e,t,n])}).amd={jQuery:!0}}(),t.requirejs=n,t.require=i,t.define=r),t.define("almond",(function(){})),t.define("jquery",[],(function(){var t=e||$;return null==t&&console&&console.error,t})),t.define("select2/utils",["jquery"],(function(e){var t={};function n(e){var t=e.prototype,n=[];for(var i in t)"function"==typeof t[i]&&"constructor"!==i&&n.push(i);return n}t.Extend=function(e,t){var n={}.hasOwnProperty;function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},t.Decorate=function(e,t){var i=n(t),r=n(e);function s(){var n=Array.prototype.unshift,i=t.prototype.constructor.length,r=e.prototype.constructor;i>0&&(n.call(arguments,e.prototype.constructor),r=t.prototype.constructor),r.apply(this,arguments)}function o(){this.constructor=s}t.displayName=e.displayName,s.prototype=new o;for(var a=0;a<r.length;a++){var l=r[a];s.prototype[l]=e.prototype[l]}for(var c=function(e){var n=function(){};e in s.prototype&&(n=s.prototype[e]);var i=t.prototype[e];return function(){return Array.prototype.unshift.call(arguments,n),i.apply(this,arguments)}},u=0;u<i.length;u++){var d=i[u];s.prototype[d]=c(d)}return s};var i=function(){this.listeners={}};i.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},i.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),n[0]._type=e,e in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},i.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},t.Observable=i,t.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},t.bind=function(e,t){return function(){e.apply(t,arguments)}},t._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var r=0;r<n.length;r++){var s=n[r];(s=s.substring(0,1).toLowerCase()+s.substring(1))in i||(i[s]={}),r==n.length-1&&(i[s]=e[t]),i=i[s]}delete e[t]}}return e},t.hasScroll=function(t,n){var i=e(n),r=n.style.overflowX,s=n.style.overflowY;return(r!==s||"hidden"!==s&&"visible"!==s)&&("scroll"===r||"scroll"===s||i.innerHeight()<n.scrollHeight||i.innerWidth()<n.scrollWidth)},t.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,(function(e){return t[e]}))},t.appendMany=function(t,n){if("1.7"===e.fn.jquery.substr(0,3)){var i=e();e.map(n,(function(e){i=i.add(e)})),n=i}t.append(n)},t.__cache={};var r=0;return t.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++r),t=r.toString())),t},t.StoreData=function(e,n,i){var r=t.GetUniqueElementId(e);t.__cache[r]||(t.__cache[r]={}),t.__cache[r][n]=i},t.GetData=function(n,i){var r=t.GetUniqueElementId(n);return i?t.__cache[r]&&null!=t.__cache[r][i]?t.__cache[r][i]:e(n).data(i):t.__cache[r]},t.RemoveData=function(e){var n=t.GetUniqueElementId(e);null!=t.__cache[n]&&delete t.__cache[n],e.removeAttribute("data-select2-id")},t})),t.define("select2/results",["jquery","./utils"],(function(e,t){function n(e,t,i){this.$element=e,this.data=i,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&t.attr("aria-multiselectable","true"),this.$results=t,t},n.prototype.clear=function(){this.$results.empty()},n.prototype.displayMessage=function(t){var n=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var i=e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),r=this.options.get("translations").get(t.message);i.append(n(r(t.args))),i[0].className+=" select2-results__message",this.$results.append(i)},n.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},n.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],r=this.option(i);t.push(r)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},n.prototype.position=function(e,t){t.find(".select2-results").append(e)},n.prototype.sort=function(e){return this.options.get("sorter")(e)},n.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");t.length>0?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},n.prototype.setClasses=function(){var n=this;this.data.current((function(i){var r=e.map(i,(function(e){return e.id.toString()}));n.$results.find(".select2-results__option[aria-selected]").each((function(){var n=e(this),i=t.GetData(this,"data"),s=""+i.id;null!=i.element&&i.element.selected||null==i.element&&e.inArray(s,r)>-1?n.attr("aria-selected","true"):n.attr("aria-selected","false")}))}))},n.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},n.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},n.prototype.option=function(n){var i=document.createElement("li");i.className="select2-results__option";var r={role:"option","aria-selected":"false"},s=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var o in(null!=n.element&&s.call(n.element,":disabled")||null==n.element&&n.disabled)&&(delete r["aria-selected"],r["aria-disabled"]="true"),null==n.id&&delete r["aria-selected"],null!=n._resultId&&(i.id=n._resultId),n.title&&(i.title=n.title),n.children&&(r.role="group",r["aria-label"]=n.text,delete r["aria-selected"]),r){var a=r[o];i.setAttribute(o,a)}if(n.children){var l=e(i),c=document.createElement("strong");c.className="select2-results__group",e(c),this.template(n,c);for(var u=[],d=0;d<n.children.length;d++){var h=n.children[d],p=this.option(h);u.push(p)}var f=e("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});f.append(u),l.append(c),l.append(f)}else this.template(n,i);return t.StoreData(i,"data",n),i},n.prototype.bind=function(n,i){var r=this,s=n.id+"-results";this.$results.attr("id",s),n.on("results:all",(function(e){r.clear(),r.append(e.data),n.isOpen()&&(r.setClasses(),r.highlightFirstItem())})),n.on("results:append",(function(e){r.append(e.data),n.isOpen()&&r.setClasses()})),n.on("query",(function(e){r.hideMessages(),r.showLoading(e)})),n.on("select",(function(){n.isOpen()&&(r.setClasses(),r.options.get("scrollAfterSelect")&&r.highlightFirstItem())})),n.on("unselect",(function(){n.isOpen()&&(r.setClasses(),r.options.get("scrollAfterSelect")&&r.highlightFirstItem())})),n.on("open",(function(){r.$results.attr("aria-expanded","true"),r.$results.attr("aria-hidden","false"),r.setClasses(),r.ensureHighlightVisible()})),n.on("close",(function(){r.$results.attr("aria-expanded","false"),r.$results.attr("aria-hidden","true"),r.$results.removeAttr("aria-activedescendant")})),n.on("results:toggle",(function(){var e=r.getHighlightedResults();0!==e.length&&e.trigger("mouseup")})),n.on("results:select",(function(){var e=r.getHighlightedResults();if(0!==e.length){var n=t.GetData(e[0],"data");"true"==e.attr("aria-selected")?r.trigger("close",{}):r.trigger("select",{data:n})}})),n.on("results:previous",(function(){var e=r.getHighlightedResults(),t=r.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var i=n-1;0===e.length&&(i=0);var s=t.eq(i);s.trigger("mouseenter");var o=r.$results.offset().top,a=s.offset().top,l=r.$results.scrollTop()+(a-o);0===i?r.$results.scrollTop(0):a-o<0&&r.$results.scrollTop(l)}})),n.on("results:next",(function(){var e=r.getHighlightedResults(),t=r.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var i=t.eq(n);i.trigger("mouseenter");var s=r.$results.offset().top+r.$results.outerHeight(!1),o=i.offset().top+i.outerHeight(!1),a=r.$results.scrollTop()+o-s;0===n?r.$results.scrollTop(0):o>s&&r.$results.scrollTop(a)}})),n.on("results:focus",(function(e){e.element.addClass("select2-results__option--highlighted")})),n.on("results:message",(function(e){r.displayMessage(e)})),e.fn.mousewheel&&this.$results.on("mousewheel",(function(e){var t=r.$results.scrollTop(),n=r.$results.get(0).scrollHeight-t+e.deltaY,i=e.deltaY>0&&t-e.deltaY<=0,s=e.deltaY<0&&n<=r.$results.height();i?(r.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):s&&(r.$results.scrollTop(r.$results.get(0).scrollHeight-r.$results.height()),e.preventDefault(),e.stopPropagation())})),this.$results.on("mouseup",".select2-results__option[aria-selected]",(function(n){var i=e(this),s=t.GetData(this,"data");"true"!==i.attr("aria-selected")?r.trigger("select",{originalEvent:n,data:s}):r.options.get("multiple")?r.trigger("unselect",{originalEvent:n,data:s}):r.trigger("close",{})})),this.$results.on("mouseenter",".select2-results__option[aria-selected]",(function(n){var i=t.GetData(this,"data");r.getHighlightedResults().removeClass("select2-results__option--highlighted"),r.trigger("results:focus",{data:i,element:e(this)})}))},n.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},n.prototype.destroy=function(){this.$results.remove()},n.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,i=e.offset().top,r=this.$results.scrollTop()+(i-n),s=i-n;r-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(s>this.$results.outerHeight()||s<0)&&this.$results.scrollTop(r)}},n.prototype.template=function(t,n){var i=this.options.get("templateResult"),r=this.options.get("escapeMarkup"),s=i(t,n);null==s?n.style.display="none":"string"==typeof s?n.innerHTML=r(s):e(n).append(s)},n})),t.define("select2/keys",[],(function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}})),t.define("select2/selection/base",["jquery","../utils","../keys"],(function(e,t,n){function i(e,t){this.$element=e,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,t.Observable),i.prototype.render=function(){var n=e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=t.GetData(this.$element[0],"old-tabindex")?this._tabindex=t.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),n.attr("title",this.$element.attr("title")),n.attr("tabindex",this._tabindex),n.attr("aria-disabled","false"),this.$selection=n,n},i.prototype.bind=function(e,t){var i=this,r=e.id+"-results";this.container=e,this.$selection.on("focus",(function(e){i.trigger("focus",e)})),this.$selection.on("blur",(function(e){i._handleBlur(e)})),this.$selection.on("keydown",(function(e){i.trigger("keypress",e),e.which===n.SPACE&&e.preventDefault()})),e.on("results:focus",(function(e){i.$selection.attr("aria-activedescendant",e.data._resultId)})),e.on("selection:update",(function(e){i.update(e.data)})),e.on("open",(function(){i.$selection.attr("aria-expanded","true"),i.$selection.attr("aria-owns",r),i._attachCloseHandler(e)})),e.on("close",(function(){i.$selection.attr("aria-expanded","false"),i.$selection.removeAttr("aria-activedescendant"),i.$selection.removeAttr("aria-owns"),i.$selection.trigger("focus"),i._detachCloseHandler(e)})),e.on("enable",(function(){i.$selection.attr("tabindex",i._tabindex),i.$selection.attr("aria-disabled","false")})),e.on("disable",(function(){i.$selection.attr("tabindex","-1"),i.$selection.attr("aria-disabled","true")}))},i.prototype._handleBlur=function(t){var n=this;window.setTimeout((function(){document.activeElement==n.$selection[0]||e.contains(n.$selection[0],document.activeElement)||n.trigger("blur",t)}),1)},i.prototype._attachCloseHandler=function(n){e(document.body).on("mousedown.select2."+n.id,(function(n){var i=e(n.target).closest(".select2");e(".select2.select2-container--open").each((function(){this!=i[0]&&t.GetData(this,"element").select2("close")}))}))},i.prototype._detachCloseHandler=function(t){e(document.body).off("mousedown.select2."+t.id)},i.prototype.position=function(e,t){t.find(".selection").append(e)},i.prototype.destroy=function(){this._detachCloseHandler(this.container)},i.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},i.prototype.isEnabled=function(){return!this.isDisabled()},i.prototype.isDisabled=function(){return this.options.get("disabled")},i})),t.define("select2/selection/single",["jquery","./base","../utils","../keys"],(function(e,t,n,i){function r(){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),r.prototype.render=function(){var e=r.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},r.prototype.bind=function(e,t){var n=this;r.__super__.bind.apply(this,arguments);var i=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",(function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})})),this.$selection.on("focus",(function(e){})),this.$selection.on("blur",(function(e){})),e.on("focus",(function(t){e.isOpen()||n.$selection.trigger("focus")}))},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return e("<span></span>")},r.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),i=this.display(t,n);n.empty().append(i);var r=t.title||t.text;r?n.attr("title",r):n.removeAttr("title")}else this.clear()},r})),t.define("select2/selection/multiple",["jquery","./base","../utils"],(function(e,t,n){function i(e,t){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},i.prototype.bind=function(t,r){var s=this;i.__super__.bind.apply(this,arguments),this.$selection.on("click",(function(e){s.trigger("toggle",{originalEvent:e})})),this.$selection.on("click",".select2-selection__choice__remove",(function(t){if(!s.isDisabled()){var i=e(this).parent(),r=n.GetData(i[0],"data");s.trigger("unselect",{originalEvent:t,data:r})}}))},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},i.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],i=0;i<e.length;i++){var r=e[i],s=this.selectionContainer(),o=this.display(r,s);s.append(o);var a=r.title||r.text;a&&s.attr("title",a),n.StoreData(s[0],"data",r),t.push(s)}var l=this.$selection.find(".select2-selection__rendered");n.appendMany(l,t)}},i})),t.define("select2/selection/placeholder",["../utils"],(function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(t.length>1||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},t})),t.define("select2/selection/allowClear",["jquery","../keys","../utils"],(function(e,t,n){function i(){}return i.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error,this.$selection.on("mousedown",".select2-selection__clear",(function(e){i._handleClear(e)})),t.on("keypress",(function(e){i._handleKeyboardClear(e,t)}))},i.prototype._handleClear=function(e,t){if(!this.isDisabled()){var i=this.$selection.find(".select2-selection__clear");if(0!==i.length){t.stopPropagation();var r=n.GetData(i[0],"data"),s=this.$element.val();this.$element.val(this.placeholder.id);var o={data:r};if(this.trigger("clear",o),o.prevented)this.$element.val(s);else{for(var a=0;a<r.length;a++)if(o={data:r[a]},this.trigger("unselect",o),o.prevented)return void this.$element.val(s);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},i.prototype._handleKeyboardClear=function(e,n,i){i.isOpen()||n.which!=t.DELETE&&n.which!=t.BACKSPACE||this._handleClear(n)},i.prototype.update=function(t,i){if(t.call(this,i),!(this.$selection.find(".select2-selection__placeholder").length>0||0===i.length)){var r=this.options.get("translations").get("removeAllItems"),s=e('<span class="select2-selection__clear" title="'+r()+'">&times;</span>');n.StoreData(s[0],"data",i),this.$selection.find(".select2-selection__rendered").prepend(s)}},i})),t.define("select2/selection/search",["jquery","../utils","../keys"],(function(e,t,n){function i(e,t,n){e.call(this,t,n)}return i.prototype.render=function(t){var n=e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');this.$searchContainer=n,this.$search=n.find("input");var i=t.call(this);return this._transferTabIndex(),i},i.prototype.bind=function(e,i,r){var s=this,o=i.id+"-results";e.call(this,i,r),i.on("open",(function(){s.$search.attr("aria-controls",o),s.$search.trigger("focus")})),i.on("close",(function(){s.$search.val(""),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.trigger("focus")})),i.on("enable",(function(){s.$search.prop("disabled",!1),s._transferTabIndex()})),i.on("disable",(function(){s.$search.prop("disabled",!0)})),i.on("focus",(function(e){s.$search.trigger("focus")})),i.on("results:focus",(function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")})),this.$selection.on("focusin",".select2-search--inline",(function(e){s.trigger("focus",e)})),this.$selection.on("focusout",".select2-search--inline",(function(e){s._handleBlur(e)})),this.$selection.on("keydown",".select2-search--inline",(function(e){if(e.stopPropagation(),s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented(),e.which===n.BACKSPACE&&""===s.$search.val()){var i=s.$searchContainer.prev(".select2-selection__choice");if(i.length>0){var r=t.GetData(i[0],"data");s.searchRemoveChoice(r),e.preventDefault()}}})),this.$selection.on("click",".select2-search--inline",(function(e){s.$search.val()&&e.stopPropagation()}));var a=document.documentMode,l=a&&a<=11;this.$selection.on("input.searchcheck",".select2-search--inline",(function(e){l?s.$selection.off("input.search input.searchcheck"):s.$selection.off("keyup.search")})),this.$selection.on("keyup.search input.search",".select2-search--inline",(function(e){if(l&&"input"===e.type)s.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=n.SHIFT&&t!=n.CTRL&&t!=n.ALT&&t!=n.TAB&&s.handleSearch(e)}}))},i.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},i.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},i.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},i.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},i.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},i.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";e=""!==this.$search.attr("placeholder")?this.$selection.find(".select2-selection__rendered").width():.75*(this.$search.val().length+1)+"em",this.$search.css("width",e)},i})),t.define("select2/selection/eventRelay",["jquery"],(function(e){function t(){}return t.prototype.bind=function(t,n,i){var r=this,s=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];t.call(this,n,i),n.on("*",(function(t,n){if(-1!==e.inArray(t,s)){n=n||{};var i=e.Event("select2:"+t,{params:n});r.$element.trigger(i),-1!==e.inArray(t,o)&&(n.prevented=i.isDefaultPrevented())}}))},t})),t.define("select2/translation",["jquery","require"],(function(e,t){function n(e){this.dict=e||{}}return n.prototype.all=function(){return this.dict},n.prototype.get=function(e){return this.dict[e]},n.prototype.extend=function(t){this.dict=e.extend({},t.all(),this.dict)},n._cache={},n.loadPath=function(e){if(!(e in n._cache)){var i=t(e);n._cache[e]=i}return new n(n._cache[e])},n})),t.define("select2/diacritics",[],(function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}})),t.define("select2/data/base",["../utils"],(function(e){function t(e,n){t.__super__.constructor.call(this)}return e.Extend(t,e.Observable),t.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},t.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},t.prototype.bind=function(e,t){},t.prototype.destroy=function(){},t.prototype.generateResultId=function(t,n){var i=t.id+"-result-";return i+=e.generateChars(4),null!=n.id?i+="-"+n.id.toString():i+="-"+e.generateChars(4),i},t})),t.define("select2/data/select",["./base","../utils","jquery"],(function(e,t,n){function i(e,t){this.$element=e,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,e),i.prototype.current=function(e){var t=[],i=this;this.$element.find(":selected").each((function(){var e=n(this),r=i.item(e);t.push(r)})),e(t)},i.prototype.select=function(e){var t=this;if(e.selected=!0,n(e.element).is("option"))return e.element.selected=!0,void this.$element.trigger("input").trigger("change");if(this.$element.prop("multiple"))this.current((function(i){var r=[];(e=[e]).push.apply(e,i);for(var s=0;s<e.length;s++){var o=e[s].id;-1===n.inArray(o,r)&&r.push(o)}t.$element.val(r),t.$element.trigger("input").trigger("change")}));else{var i=e.id;this.$element.val(i),this.$element.trigger("input").trigger("change")}},i.prototype.unselect=function(e){var t=this;if(this.$element.prop("multiple")){if(e.selected=!1,n(e.element).is("option"))return e.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current((function(i){for(var r=[],s=0;s<i.length;s++){var o=i[s].id;o!==e.id&&-1===n.inArray(o,r)&&r.push(o)}t.$element.val(r),t.$element.trigger("input").trigger("change")}))}},i.prototype.bind=function(e,t){var n=this;this.container=e,e.on("select",(function(e){n.select(e.data)})),e.on("unselect",(function(e){n.unselect(e.data)}))},i.prototype.destroy=function(){this.$element.find("*").each((function(){t.RemoveData(this)}))},i.prototype.query=function(e,t){var i=[],r=this;this.$element.children().each((function(){var t=n(this);if(t.is("option")||t.is("optgroup")){var s=r.item(t),o=r.matches(e,s);null!==o&&i.push(o)}})),t({results:i})},i.prototype.addOptions=function(e){t.appendMany(this.$element,e)},i.prototype.option=function(e){var i;e.children?(i=document.createElement("optgroup")).label=e.text:void 0!==(i=document.createElement("option")).textContent?i.textContent=e.text:i.innerText=e.text,void 0!==e.id&&(i.value=e.id),e.disabled&&(i.disabled=!0),e.selected&&(i.selected=!0),e.title&&(i.title=e.title);var r=n(i),s=this._normalizeItem(e);return s.element=i,t.StoreData(i,"data",s),r},i.prototype.item=function(e){var i={};if(null!=(i=t.GetData(e[0],"data")))return i;if(e.is("option"))i={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){i={text:e.prop("label"),children:[],title:e.prop("title")};for(var r=e.children("option"),s=[],o=0;o<r.length;o++){var a=n(r[o]),l=this.item(a);s.push(l)}i.children=s}return(i=this._normalizeItem(i)).element=e[0],t.StoreData(e[0],"data",i),i},i.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});var t={selected:!1,disabled:!1};return null!=(e=n.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),n.extend({},t,e)},i.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},i})),t.define("select2/data/array",["./select","../utils","jquery"],(function(e,t,n){function i(e,t){this._dataToConvert=t.get("data")||[],i.__super__.constructor.call(this,e,t)}return t.Extend(i,e),i.prototype.bind=function(e,t){i.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},i.prototype.select=function(e){var t=this.$element.find("option").filter((function(t,n){return n.value==e.id.toString()}));0===t.length&&(t=this.option(e),this.addOptions(t)),i.__super__.select.call(this,e)},i.prototype.convertToOptions=function(e){var i=this,r=this.$element.find("option"),s=r.map((function(){return i.item(n(this)).id})).get(),o=[];function a(e){return function(){return n(this).val()==e.id}}for(var l=0;l<e.length;l++){var c=this._normalizeItem(e[l]);if(n.inArray(c.id,s)>=0){var u=r.filter(a(c)),d=this.item(u),h=n.extend(!0,{},c,d),p=this.option(h);u.replaceWith(p)}else{var f=this.option(c);if(c.children){var m=this.convertToOptions(c.children);t.appendMany(f,m)}o.push(f)}}return o},i})),t.define("select2/data/ajax",["./array","../utils","jquery"],(function(e,t,n){function i(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),i.__super__.constructor.call(this,e,t)}return t.Extend(i,e),i.prototype._applyDefaults=function(e){var t={data:function(e){return n.extend({},e,{q:e.term})},transport:function(e,t,i){var r=n.ajax(e);return r.then(t),r.fail(i),r}};return n.extend({},t,e,!0)},i.prototype.processResults=function(e){return e},i.prototype.query=function(e,t){var i=this;null!=this._request&&(n.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var r=n.extend({type:"GET"},this.ajaxOptions);function s(){var s=r.transport(r,(function(r){var s=i.processResults(r,e);i.options.get("debug")&&window.console&&console.error&&(!s||!s.results||n.isArray(s.results)),t(s)}),(function(){(!("status"in s)||0!==s.status&&"0"!==s.status)&&i.trigger("results:message",{message:"errorLoading"})}));i._request=s}"function"==typeof r.url&&(r.url=r.url.call(this.$element,e)),"function"==typeof r.data&&(r.data=r.data.call(this.$element,e)),this.ajaxOptions.delay&&null!=e.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(s,this.ajaxOptions.delay)):s()},i})),t.define("select2/data/tags",["jquery"],(function(e){function t(t,n,i){var r=i.get("tags"),s=i.get("createTag");void 0!==s&&(this.createTag=s);var o=i.get("insertTag");if(void 0!==o&&(this.insertTag=o),t.call(this,n,i),e.isArray(r))for(var a=0;a<r.length;a++){var l=r[a],c=this._normalizeItem(l),u=this.option(c);this.$element.append(u)}}return t.prototype.query=function(e,t,n){var i=this;function r(e,s){for(var o=e.results,a=0;a<o.length;a++){var l=o[a],c=null!=l.children&&!r({results:l.children},!0);if((l.text||"").toUpperCase()===(t.term||"").toUpperCase()||c)return!s&&(e.data=o,void n(e))}if(s)return!0;var u=i.createTag(t);if(null!=u){var d=i.option(u);d.attr("data-select2-tag",!0),i.addOptions([d]),i.insertTag(o,u)}e.results=o,n(e)}this._removeOldTags(),null!=t.term&&null==t.page?e.call(this,t,r):e.call(this,t,n)},t.prototype.createTag=function(t,n){var i=e.trim(n.term);return""===i?null:{id:i,text:i}},t.prototype.insertTag=function(e,t,n){t.unshift(n)},t.prototype._removeOldTags=function(t){this.$element.find("option[data-select2-tag]").each((function(){this.selected||e(this).remove()}))},t})),t.define("select2/data/tokenizer",["jquery"],(function(e){function t(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)}return t.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},t.prototype.query=function(t,n,i){var r=this;function s(t){var n=r._normalizeItem(t);if(!r.$element.find("option").filter((function(){return e(this).val()===n.id})).length){var i=r.option(n);i.attr("data-select2-tag",!0),r._removeOldTags(),r.addOptions([i])}o(n)}function o(e){r.trigger("select",{data:e})}n.term=n.term||"";var a=this.tokenizer(n,this.options,s);a.term!==n.term&&(this.$search.length&&(this.$search.val(a.term),this.$search.trigger("focus")),n.term=a.term),t.call(this,n,i)},t.prototype.tokenizer=function(t,n,i,r){for(var s=i.get("tokenSeparators")||[],o=n.term,a=0,l=this.createTag||function(e){return{id:e.term,text:e.term}};a<o.length;){var c=o[a];if(-1!==e.inArray(c,s)){var u=o.substr(0,a),d=l(e.extend({},n,{term:u}));null!=d?(r(d),o=o.substr(a+1)||"",a=0):a++}else a++}return{term:o}},t})),t.define("select2/data/minimumInputLength",[],(function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e})),t.define("select2/data/maximumInputLength",[],(function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",this.maximumInputLength>0&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e})),t.define("select2/data/maximumSelectionLength",[],(function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",(function(){i._checkIfMaximumSelected()}))},e.prototype.query=function(e,t,n){var i=this;this._checkIfMaximumSelected((function(){e.call(i,t,n)}))},e.prototype._checkIfMaximumSelected=function(e,t){var n=this;this.current((function(e){var i=null!=e?e.length:0;n.maximumSelectionLength>0&&i>=n.maximumSelectionLength?n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}}):t&&t()}))},e})),t.define("select2/dropdown",["jquery","./utils"],(function(e,t){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<span class="select2-dropdown"><span class="select2-results"></span></span>');return t.attr("dir",this.options.get("dir")),this.$dropdown=t,t},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n})),t.define("select2/dropdown/search",["jquery","../utils"],(function(e,t){function n(){}return n.prototype.render=function(t){var n=t.call(this),i=e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=i,this.$search=i.find("input"),n.prepend(i),n},n.prototype.bind=function(t,n,i){var r=this,s=n.id+"-results";t.call(this,n,i),this.$search.on("keydown",(function(e){r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented()})),this.$search.on("input",(function(t){e(this).off("keyup")})),this.$search.on("keyup input",(function(e){r.handleSearch(e)})),n.on("open",(function(){r.$search.attr("tabindex",0),r.$search.attr("aria-controls",s),r.$search.trigger("focus"),window.setTimeout((function(){r.$search.trigger("focus")}),0)})),n.on("close",(function(){r.$search.attr("tabindex",-1),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.val(""),r.$search.trigger("blur")})),n.on("focus",(function(){n.isOpen()||r.$search.trigger("focus")})),n.on("results:all",(function(e){null!=e.query.term&&""!==e.query.term||(r.showSearch(e)?r.$searchContainer.removeClass("select2-search--hide"):r.$searchContainer.addClass("select2-search--hide"))})),n.on("results:focus",(function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")}))},n.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},n.prototype.showSearch=function(e,t){return!0},n})),t.define("select2/dropdown/hidePlaceholder",[],(function(){function e(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;i>=0;i--){var r=t[i];this.placeholder.id===r.id&&n.splice(i,1)}return n},e})),t.define("select2/dropdown/infiniteScroll",["jquery"],(function(e){function t(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return t.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},t.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("query",(function(e){i.lastParams=e,i.loading=!0})),t.on("query:append",(function(e){i.lastParams=e,i.loading=!0})),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},t.prototype.loadMoreIfNeeded=function(){var t=e.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&t&&this.$results.offset().top+this.$results.outerHeight(!1)+50>=this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)&&this.loadMore()},t.prototype.loadMore=function(){this.loading=!0;var t=e.extend({},{page:1},this.lastParams);t.page++,this.trigger("query:append",t)},t.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},t.prototype.createLoadingMore=function(){var t=e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),n=this.options.get("translations").get("loadingMore");return t.html(n(this.lastParams)),t},t})),t.define("select2/dropdown/attachBody",["jquery","../utils"],(function(e,t){function n(t,n,i){this.$dropdownParent=e(i.get("dropdownParent")||document.body),t.call(this,n,i)}return n.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("open",(function(){i._showDropdown(),i._attachPositioningHandler(t),i._bindContainerResultHandlers(t)})),t.on("close",(function(){i._hideDropdown(),i._detachPositioningHandler(t)})),this.$dropdownContainer.on("mousedown",(function(e){e.stopPropagation()}))},n.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},n.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},n.prototype.render=function(t){var n=e("<span></span>"),i=t.call(this);return n.append(i),this.$dropdownContainer=n,n},n.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},n.prototype._bindContainerResultHandlers=function(e,t){if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",(function(){n._positionDropdown(),n._resizeDropdown()})),t.on("results:append",(function(){n._positionDropdown(),n._resizeDropdown()})),t.on("results:message",(function(){n._positionDropdown(),n._resizeDropdown()})),t.on("select",(function(){n._positionDropdown(),n._resizeDropdown()})),t.on("unselect",(function(){n._positionDropdown(),n._resizeDropdown()})),this._containerResultsHandlersBound=!0}},n.prototype._attachPositioningHandler=function(n,i){var r=this,s="scroll.select2."+i.id,o="resize.select2."+i.id,a="orientationchange.select2."+i.id,l=this.$container.parents().filter(t.hasScroll);l.each((function(){t.StoreData(this,"select2-scroll-position",{x:e(this).scrollLeft(),y:e(this).scrollTop()})})),l.on(s,(function(n){var i=t.GetData(this,"select2-scroll-position");e(this).scrollTop(i.y)})),e(window).on(s+" "+o+" "+a,(function(e){r._positionDropdown(),r._resizeDropdown()}))},n.prototype._detachPositioningHandler=function(n,i){var r="scroll.select2."+i.id,s="resize.select2."+i.id,o="orientationchange.select2."+i.id;this.$container.parents().filter(t.hasScroll).off(r),e(window).off(r+" "+s+" "+o)},n.prototype._positionDropdown=function(){var t=e(window),n=this.$dropdown.hasClass("select2-dropdown--above"),i=this.$dropdown.hasClass("select2-dropdown--below"),r=null,s=this.$container.offset();s.bottom=s.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=s.top,o.bottom=s.top+o.height;var a={height:this.$dropdown.outerHeight(!1)},l={top:t.scrollTop(),bottom:t.scrollTop()+t.height()},c=l.top<s.top-a.height,u=l.bottom>s.bottom+a.height,d={left:s.left,top:o.bottom},h=this.$dropdownParent;"static"===h.css("position")&&(h=h.offsetParent());var p={top:0,left:0};(e.contains(document.body,h[0])||h[0].isConnected)&&(p=h.offset()),d.top-=p.top,d.left-=p.left,n||i||(r="below"),u||!c||n?!c&&u&&n&&(r="below"):r="above",("above"==r||n&&"below"!==r)&&(d.top=o.top-p.top-a.height),null!=r&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+r),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+r)),this.$dropdownContainer.css(d)},n.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},n.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},n})),t.define("select2/dropdown/minimumResultsForSearch",[],(function(){function e(t){for(var n=0,i=0;i<t.length;i++){var r=t[i];r.children?n+=e(r.children):n++}return n}function t(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)}return t.prototype.showSearch=function(t,n){return!(e(n.data.results)<this.minimumResultsForSearch)&&t.call(this,n)},t})),t.define("select2/dropdown/selectOnClose",["../utils"],(function(e){function t(){}return t.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",(function(e){i._handleSelectOnClose(e)}))},t.prototype._handleSelectOnClose=function(t,n){if(n&&null!=n.originalSelect2Event){var i=n.originalSelect2Event;if("select"===i._type||"unselect"===i._type)return}var r=this.getHighlightedResults();if(!(r.length<1)){var s=e.GetData(r[0],"data");null!=s.element&&s.element.selected||null==s.element&&s.selected||this.trigger("select",{data:s})}},t})),t.define("select2/dropdown/closeOnSelect",[],(function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",(function(e){i._selectTriggered(e)})),t.on("unselect",(function(e){i._selectTriggered(e)}))},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e})),t.define("select2/i18n/en",[],(function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}})),t.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],(function(e,t,n,i,r,s,o,a,l,c,u,d,h,p,f,m,g,v,y,b,w,_,x,C,T,E,k,A,$){function S(){this.reset()}return S.prototype.apply=function(u){if(null==(u=e.extend(!0,{},this.defaults,u)).dataAdapter){if(null!=u.ajax?u.dataAdapter=f:null!=u.data?u.dataAdapter=p:u.dataAdapter=h,u.minimumInputLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,v)),u.maximumInputLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,y)),u.maximumSelectionLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,b)),u.tags&&(u.dataAdapter=c.Decorate(u.dataAdapter,m)),null==u.tokenSeparators&&null==u.tokenizer||(u.dataAdapter=c.Decorate(u.dataAdapter,g)),null!=u.query){var d=t(u.amdBase+"compat/query");u.dataAdapter=c.Decorate(u.dataAdapter,d)}if(null!=u.initSelection){var $=t(u.amdBase+"compat/initSelection");u.dataAdapter=c.Decorate(u.dataAdapter,$)}}if(null==u.resultsAdapter&&(u.resultsAdapter=n,null!=u.ajax&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,C)),null!=u.placeholder&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,x)),u.selectOnClose&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,k))),null==u.dropdownAdapter){if(u.multiple)u.dropdownAdapter=w;else{var S=c.Decorate(w,_);u.dropdownAdapter=S}if(0!==u.minimumResultsForSearch&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,E)),u.closeOnSelect&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,A)),null!=u.dropdownCssClass||null!=u.dropdownCss||null!=u.adaptDropdownCssClass){var D=t(u.amdBase+"compat/dropdownCss");u.dropdownAdapter=c.Decorate(u.dropdownAdapter,D)}u.dropdownAdapter=c.Decorate(u.dropdownAdapter,T)}if(null==u.selectionAdapter){if(u.multiple?u.selectionAdapter=r:u.selectionAdapter=i,null!=u.placeholder&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,s)),u.allowClear&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,o)),u.multiple&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,a)),null!=u.containerCssClass||null!=u.containerCss||null!=u.adaptContainerCssClass){var j=t(u.amdBase+"compat/containerCss");u.selectionAdapter=c.Decorate(u.selectionAdapter,j)}u.selectionAdapter=c.Decorate(u.selectionAdapter,l)}u.language=this._resolveLanguage(u.language),u.language.push("en");for(var q=[],O=0;O<u.language.length;O++){var L=u.language[O];-1===q.indexOf(L)&&q.push(L)}return u.language=q,u.translations=this._processTranslations(u.language,u.debug),u},S.prototype.reset=function(){function t(e){function t(e){return d[e]||e}return e.replace(/[^\u0000-\u007E]/g,t)}function n(i,r){if(""===e.trim(i.term))return r;if(r.children&&r.children.length>0){for(var s=e.extend(!0,{},r),o=r.children.length-1;o>=0;o--)null==n(i,r.children[o])&&s.children.splice(o,1);return s.children.length>0?s:n(i,s)}var a=t(r.text).toUpperCase(),l=t(i.term).toUpperCase();return a.indexOf(l)>-1?r:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:c.escapeMarkup,language:{},matcher:n,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},S.prototype.applyFromElement=function(e,t){var n=e.language,i=this.defaults.language,r=t.prop("lang"),s=t.closest("[lang]").prop("lang"),o=Array.prototype.concat.call(this._resolveLanguage(r),this._resolveLanguage(n),this._resolveLanguage(i),this._resolveLanguage(s));return e.language=o,e},S.prototype._resolveLanguage=function(t){if(!t)return[];if(e.isEmptyObject(t))return[];if(e.isPlainObject(t))return[t];var n;n=e.isArray(t)?t:[t];for(var i=[],r=0;r<n.length;r++)if(i.push(n[r]),"string"==typeof n[r]&&n[r].indexOf("-")>0){var s=n[r].split("-")[0];i.push(s)}return i},S.prototype._processTranslations=function(t,n){for(var i=new u,r=0;r<t.length;r++){var s=new u,o=t[r];if("string"==typeof o)try{s=u.loadPath(o)}catch(e){try{o=this.defaults.amdLanguageBase+o,s=u.loadPath(o)}catch(e){n&&window.console&&console.warn}}else s=e.isPlainObject(o)?new u(o):o;i.extend(s)}return i},S.prototype.set=function(t,n){var i={};i[e.camelCase(t)]=n;var r=c._convertData(i);e.extend(!0,this.defaults,r)},new S})),t.define("select2/options",["require","jquery","./defaults","./utils"],(function(e,t,n,i){function r(t,r){if(this.options=t,null!=r&&this.fromElement(r),null!=r&&(this.options=n.applyFromElement(this.options,r)),this.options=n.apply(this.options),r&&r.is("input")){var s=e(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=i.Decorate(this.options.dataAdapter,s)}}return r.prototype.fromElement=function(e){var n=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),i.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn,i.StoreData(e[0],"data",i.GetData(e[0],"select2Tags")),i.StoreData(e[0],"tags",!0)),i.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn,e.attr("ajax--url",i.GetData(e[0],"ajaxUrl")),i.StoreData(e[0],"ajax-Url",i.GetData(e[0],"ajaxUrl")));var r={};function s(e,t){return t.toUpperCase()}for(var o=0;o<e[0].attributes.length;o++){var a=e[0].attributes[o].name,l="data-";if(a.substr(0,l.length)==l){var c=a.substring(l.length),u=i.GetData(e[0],c);r[c.replace(/-([a-z])/g,s)]=u}}t.fn.jquery&&"1."==t.fn.jquery.substr(0,2)&&e[0].dataset&&(r=t.extend(!0,{},e[0].dataset,r));var d=t.extend(!0,{},i.GetData(e[0]),r);for(var h in d=i._convertData(d))t.inArray(h,n)>-1||(t.isPlainObject(this.options[h])?t.extend(this.options[h],d[h]):this.options[h]=d[h]);return this},r.prototype.get=function(e){return this.options[e]},r.prototype.set=function(e,t){this.options[e]=t},r})),t.define("select2/core",["jquery","./options","./utils","./keys"],(function(e,t,n,i){var r=function(e,i){null!=n.GetData(e[0],"select2")&&n.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),i=i||{},this.options=new t(i,e),r.__super__.constructor.call(this);var s=e.attr("tabindex")||0;n.StoreData(e[0],"old-tabindex",s),e.attr("tabindex","-1");var o=this.options.get("dataAdapter");this.dataAdapter=new o(e,this.options);var a=this.render();this._placeContainer(a);var l=this.options.get("selectionAdapter");this.selection=new l(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,a);var c=this.options.get("dropdownAdapter");this.dropdown=new c(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,a);var u=this.options.get("resultsAdapter");this.results=new u(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var d=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current((function(e){d.trigger("selection:update",{data:e})})),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),n.StoreData(e[0],"select2",this),e.data("select2",this)};return n.Extend(r,n.Observable),r.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+n.generateChars(2):n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},r.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},r.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"style");return null!=i?i:this._resolveWidth(e,"element")}if("element"==t){var r=e.outerWidth(!1);return r<=0?"auto":r+"px"}if("style"==t){var s=e.attr("style");if("string"!=typeof s)return null;for(var o=s.split(";"),a=0,l=o.length;a<l;a+=1){var c=o[a].replace(/\s/g,"").match(n);if(null!==c&&c.length>=1)return c[1]}return null}return"computedstyle"==t?window.getComputedStyle(e[0]).width:t},r.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},r.prototype._registerDomEvents=function(){var e=this;this.$element.on("change.select2",(function(){e.dataAdapter.current((function(t){e.trigger("selection:update",{data:t})}))})),this.$element.on("focus.select2",(function(t){e.trigger("focus",t)})),this._syncA=n.bind(this._syncAttributes,this),this._syncS=n.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=t?(this._observer=new t((function(t){e._syncA(),e._syncS(null,t)})),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",e._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",e._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",e._syncS,!1))},r.prototype._registerDataEvents=function(){var e=this;this.dataAdapter.on("*",(function(t,n){e.trigger(t,n)}))},r.prototype._registerSelectionEvents=function(){var t=this,n=["toggle","focus"];this.selection.on("toggle",(function(){t.toggleDropdown()})),this.selection.on("focus",(function(e){t.focus(e)})),this.selection.on("*",(function(i,r){-1===e.inArray(i,n)&&t.trigger(i,r)}))},r.prototype._registerDropdownEvents=function(){var e=this;this.dropdown.on("*",(function(t,n){e.trigger(t,n)}))},r.prototype._registerResultsEvents=function(){var e=this;this.results.on("*",(function(t,n){e.trigger(t,n)}))},r.prototype._registerEvents=function(){var e=this;this.on("open",(function(){e.$container.addClass("select2-container--open")})),this.on("close",(function(){e.$container.removeClass("select2-container--open")})),this.on("enable",(function(){e.$container.removeClass("select2-container--disabled")})),this.on("disable",(function(){e.$container.addClass("select2-container--disabled")})),this.on("blur",(function(){e.$container.removeClass("select2-container--focus")})),this.on("query",(function(t){e.isOpen()||e.trigger("open",{}),this.dataAdapter.query(t,(function(n){e.trigger("results:all",{data:n,query:t})}))})),this.on("query:append",(function(t){this.dataAdapter.query(t,(function(n){e.trigger("results:append",{data:n,query:t})}))})),this.on("keypress",(function(t){var n=t.which;e.isOpen()?n===i.ESC||n===i.TAB||n===i.UP&&t.altKey?(e.close(t),t.preventDefault()):n===i.ENTER?(e.trigger("results:select",{}),t.preventDefault()):n===i.SPACE&&t.ctrlKey?(e.trigger("results:toggle",{}),t.preventDefault()):n===i.UP?(e.trigger("results:previous",{}),t.preventDefault()):n===i.DOWN&&(e.trigger("results:next",{}),t.preventDefault()):(n===i.ENTER||n===i.SPACE||n===i.DOWN&&t.altKey)&&(e.open(),t.preventDefault())}))},r.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},r.prototype._isChangeMutation=function(t,n){var i=!1,r=this;if(!t||!t.target||"OPTION"===t.target.nodeName||"OPTGROUP"===t.target.nodeName){if(n)if(n.addedNodes&&n.addedNodes.length>0)for(var s=0;s<n.addedNodes.length;s++)n.addedNodes[s].selected&&(i=!0);else n.removedNodes&&n.removedNodes.length>0?i=!0:e.isArray(n)&&e.each(n,(function(e,t){if(r._isChangeMutation(e,t))return i=!0,!1}));else i=!0;return i}},r.prototype._syncSubtree=function(e,t){var n=this._isChangeMutation(e,t),i=this;n&&this.dataAdapter.current((function(e){i.trigger("selection:update",{data:e})}))},r.prototype.trigger=function(e,t){var n=r.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in i){var s=i[e],o={prevented:!1,name:e,args:t};if(n.call(this,s,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},r.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},r.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},r.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},r.prototype.isEnabled=function(){return!this.isDisabled()},r.prototype.isDisabled=function(){return this.options.get("disabled")},r.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},r.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},r.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},r.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn,null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},r.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn;var e=[];return this.dataAdapter.current((function(t){e=t})),e},r.prototype.val=function(t){if(this.options.get("debug")&&window.console&&console.warn,null==t||0===t.length)return this.$element.val();var n=t[0];e.isArray(n)&&(n=e.map(n,(function(e){return e.toString()}))),this.$element.val(n).trigger("input").trigger("change")},r.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",n.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),n.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},r.prototype.render=function(){var t=e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return t.attr("dir",this.options.get("dir")),this.$container=t,this.$container.addClass("select2-container--"+this.options.get("theme")),n.StoreData(t[0],"element",this.$element),t},r})),t.define("jquery-mousewheel",["jquery"],(function(e){return e})),t.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],(function(e,t,n,i,r){if(null==e.fn.select2){var s=["open","close","destroy"];e.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each((function(){var i=e.extend(!0,{},t);new n(e(this),i)})),this;if("string"==typeof t){var i,o=Array.prototype.slice.call(arguments,1);return this.each((function(){var e=r.GetData(this,"select2");null==e&&window.console&&console.error,i=e[t].apply(e,o)})),e.inArray(t,s)>-1?this:i}throw new Error("Invalid arguments for Select2: "+t)}}return null==e.fn.select2.defaults&&(e.fn.select2.defaults=i),n})),{define:t.define,require:t.require}}(),n=t.require("jquery.select2");return e.fn.select2.amd=t,n},void 0===(s="function"==typeof i?i.apply(t,r):i)||(e.exports=s)},153:function(e,t,n){"use strict";e.exports=n.p+"./assets/images/avatar-profile..png"},279:function(e,t,n){"use strict";e.exports=n.p+"./assets/images/button-go-top..svg"},332:function(e,t,n){"use strict";e.exports=n.p+"./assets/images/icon-images-preview-avatar..svg"},673:function(e,t,n){"use strict";e.exports=n.p+"./assets/images/icon-profile..svg"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){"use strict";n(587),n(686);const e=jQuery,t=n(711),i=(n(9),n(153),n(279),n(332),n(673),e(window).width()),r=document.documentElement;let s="",o=!1,a=!1;e.extend(e.validator.messages,{required:"Este campo es obligatorio."}),e.validator.addMethod("emailValidate",(function(e,t){return!!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(e)}),"Ingrese un correo electrónico válido"),e.validator.addMethod("letterwithbasicpunc",(function(e,t){return!!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*$/.test(e)}),"Ingrese solo letras y espacios"),e.validator.addMethod("captcha",(function(e,t){return""!=e}),"Por favor, completa el captcha.");let l=!1,c=!1,u=!1;function d(){if(e(".page-node-type-rules-home-content .slider-home").length){e("#sliderHome").find(".field--name-media-banner").addClass("owl-carousel owl-theme");e(".slider-home .field--name-media-banner").owlCarousel({items:1,nav:!0,dots:!0,loop:!0,autoplay:!0,autoplayTimeout:8e3,autoplayHoverPause:!0,animateOut:"fadeOut",animateIn:"fadeIn",lazyLoad:!0,responsive:{768:{nav:!0,dots:!0}}})}}function h(){e(".view-filters .form-filter-list").append('<div class="content-button"><button class="button-pink">Cerrar</button></div>')}function p(){e(".block-form-filter-list").length&&(e("html").removeAttr("style"),e("body").removeClass("show-filter-mobile"),e('.block-form-filter-list .form-filter-list select[name="rule_category_target_id"]').select2({minimumResultsForSearch:1/0}),e('.block-form-filter-list .form-filter-list select[name="specification_category_target_id"]').select2({minimumResultsForSearch:1/0}),e('.block-form-filter-list .form-filter-list select[name="rule_subcategory_target_id"]').select2({minimumResultsForSearch:1/0}),e('.block-form-filter-list .form-filter-list select[name="specification_subcategory_target_id"]').select2({minimumResultsForSearch:1/0}),e('.block-form-filter-list .form-filter-list select[name="tipo_de_norma"]').select2({minimumResultsForSearch:1/0}),e('.block-form-filter-list .form-filter-list select[name="sort_by"]').select2({minimumResultsForSearch:1/0}),e('.block-form-filter-list .form-filter-list select[name="sort_by"]').length&&(e(".form-item-sort-by label").appendTo(".content-filter .alphabetic-filtert"),e(".form-item-sort-by .select2-container").appendTo(".content-filter .alphabetic-filtert"),e('.block-form-filter-list .form-filter-list select[name="sort_by"]').on("select2:open",(function(t){e(".select2-container--open").addClass("select2-container--open-sort")})),e('.block-form-filter-list .form-filter-list select[name="sort_by"]').on("change",(function(){f()}))),e('select[name="rule_category_target_id"], select[name="rule_subcategory_target_id"], select[name="specification_category_target_id"], select[name="specification_subcategory_target_id"]').on("change",(function(){o=!0})),e("body.path-normas .block-form-filter-list .form-filter-list .form-actions input, body.path-especificaciones .block-form-filter-list .form-filter-list .form-actions input").on("click",(function(){o=!0})),e("body").on("click",".clear-filter",(function(){window.location.reload()})),e("body").on("click",".header-filter-results .tag-button",(function(){e(".views-element-container").addClass("showFilters");let t=e(this).attr("data-typeInput");switch(e(this).closest(".tag").remove(),t){case"selectCategories":g("select",'select[name="rule_category_target_id"]');break;case"selectCategoriesEspe":g("select",'select[name="specification_category_target_id"]');break;case"selectSubCategories":g("select",'select[name="rule_subcategory_target_id"]');break;case"selectSubCategoriesEspe":g("select",'select[name="specification_subcategory_target_id"]');break;case"inputSearch":g("input",'input[name="combine"]');break;case"inputDate":case"inputDateEspe":g("input",'input[name="effective_date_value"]')}})),e(".path-normas .field-button-mobile .button-filter-mobile, .path-especificaciones .field-button-mobile .button-filter-mobile, .view__indice .button-filter-mobile").on("click",(function(){e("html").css("overflow","hidden"),e("body").addClass("show-filter-mobile"),e(".views-element-container .view-filters").show("slow"),c=!0})),i<992&&(e(".form-filter-list .content-button").length||h(),e(window).on("resize",(function(){e(".form-filter-list .content-button").length||h()}))),e("body").on("click",".views-element-container .view-filters .form-filter-list .content-button button",(function(t){t.preventDefault(),e("html").removeAttr("style"),e("body").removeClass("show-filter-mobile"),e(".views-element-container .view-filters").hide("slow"),c=!1})))}function f(){document.querySelector(".block-form-filter-list .form-actions .form-submit").click()}function m(){if(e(".path-buscador").length){let t=e(".views-element-container"),n=e(".block-form-filter-list"),r=e('input[name="combine"]').val(),a=e('select[name="tipo_de_norma"]'),l=a.find("option:first").val().trim(),u=e('input[name="effective_date_value"]'),d=e(".header-filter-results .filters-show"),h=a.val();if(h!==l&&""!==h){d.addClass("active");let y=`<div class="tag">\n                              <span class="tag-text">${a.find('option[value="'+h+'"]').text().trim()}</span>\n                              <span class="tag-button" data-typeInput="selectTypeNorma" idSelect="${h}">x</span>\n                            </div>`;d.find(".clear-filter").before(y)}if(""!==r&&void 0!==r){d.addClass("active");let b=`<div class="tag">\n                              <span class="tag-text">${r.trim()}</span>\n                              <span class="tag-button" data-typeInput="inputSearchName">x</span>\n                            </div>`;d.find(".clear-filter").before(b)}let p=u.val();if(""!==p&&void 0!==p){d.addClass("active");let w=`<div class="tag">\n                              <span class="tag-text">${p.trim()}</span>\n                              <span class="tag-button" data-typeInput="inputDateNorma">x</span>\n                            </div>`;d.find(".clear-filter").before(w)}function m(){const t=`<div class="content-button" style="background-color: ${e(".path-buscador .block-form-filter-list").attr("style").split(": ")[1]}"><button class="button-pink">Cerrar</button></div>`;e(".path-buscador form").parent().append(t)}function v(){let t=e('form .form-filter-list input[name="combine"]').val();""!==t?e(".hero .hero__info-title").text(t):e(".hero .hero__info-title").text(s)}n.find('.form-filter-list select[name="tipo_de_norma"]').select2({minimumResultsForSearch:1/0}),e(t.find(".view-empty")).length?e(".content-filter .alphabetic-filtert .select2-container").remove():(n.find('.form-filter-list select[name="sort_by"]').select2({minimumResultsForSearch:1/0}),n.find('.form-filter-list select[name="sort_by"]').length&&(e(".form-item-sort-by label").appendTo(".content-filter .alphabetic-filtert"),e(".form-item-sort-by .select2-container").appendTo(".content-filter .alphabetic-filtert"),n.find('.form-filter-list select[name="sort_by"]').on("select2:open",(function(t){e(".select2-container--open").addClass("select2-container--open-sort")})),n.find('.form-filter-list select[name="sort_by"]').on("change",(function(){f()})))),i<992&&(e(".path-buscador .content-button").length||m(),e(window).on("resize",(function(){e(".path-buscador .content-button").length||m()}))),e(".path-buscador .button-filter-mobile").on("click",(function(){e("html").css("overflow","hidden"),e("body").addClass("show-filter-mobile"),e(".path-buscador .views-exposed-form").show("slow"),c=!0})),e("body.path-buscador .content-button button").on("click",(function(t){t.preventDefault(),e("html").removeAttr("style"),e("body").removeClass("show-filter-mobile"),e(".path-buscador .views-exposed-form").hide("slow"),c=!1})),v(),e("body").on("click",".views-element-container .content-filter .tag-button",(function(){let t=e(this).attr("data-typeInput");switch(e(this).closest(".tag").remove(),0==e(".views-element-container .content-filter .filters-show .tag").length&&location.reload(),t){case"selectTypeNorma":g("select",'select[name="tipo_de_norma"]');break;case"inputSearchName":g("input",'input[name="combine"]');break;case"inputDateNorma":g("input",'input[name="effective_date_value"]')}})),e('select[name="tipo_de_norma"]').on("change",(function(){o=!0})),e("body.path-buscador .block-form-filter-list .form-filter-list .form-actions input").on("click",(function(){o=!0})),e("body").on("click",".clear-filter",(function(){window.location.href=`${window.location.origin}${window.location.pathname}`}))}}function g(t,n){if("select"==t){let t=e(""+n),i=t.find("option:first").val().trim();t.val(i),f()}"input"==t&&(e(""+n).val(""),f())}function v(){if(e(".comment-item").length&&drupalSettings.is_admin){function t(){e(".comment-item .content-links").each((function(){e(this).show()}))}if(e(".comment-item .comment-item-content .content-links a.js-ajax-comments-edit").on("click",(function(t){u=!0,e(this).closest("article").attr("data-editing-to-comment",!0)})),u){t();let n=e('.comment[data-editing-to-comment="true"]'),i=n.next();return n.find(".content-links").hide(),i.find(".form-actions input:first").attr("value","Actualizar"),n.removeAttr("data-editing-to-comment"),void(u=!1)}t()}}function y(){if(e(".comment-item").length){function t(){e(".comment-item .content-links").each((function(){e(this).show()}))}if(e("form.comment-form .form-actions input").on("click",(function(e){e.preventDefault(),a=!0})),e(".comment-item .comment-item-content .content-links a.js-ajax-comments-reply").on("click",(function(t){l=!0,e(this).closest("article").attr("data-replying-to-comment",!0)})),l){t();let n=e('.comment[data-replying-to-comment="true"]');return n.next().appendTo(e(n).find(".comment-item-content")),e(n).find(".content-links").hide(),n.removeAttr("data-replying-to-comment"),void(l=!1)}t()}}function b(t,n,i){let r=document.querySelector(`.${CSS.escape(i)} .dialog`);r.querySelector(".dialog-header .dialog-header-title").innerHTML=t,r.querySelector(".dialog-body .dialog-body-description").innerHTML=n,r.show(),e("body").addClass("show-modal"),e("html").css("overflow","hidden")}function w(){let t=location.hash;const n=()=>{e("main").addClass("hidden-loader"),e(".show-loader").remove(),e(".dialog-off-canvas-main-canvas").css({"overflow-y":"auto"}).addClass("h100")};t?(n(),e("html, body").animate({scrollTop:e(t).offset().top-250},1500)):n()}function _(){if(e(".user-data-profile .profile-content").length&&e("body.user-profile form.user-form").length){e("body.user-profile .block-user .block-user-form form.user-form").appendTo(e("#editUserModal .modal-body")),e(".block-user").remove();let t=e("#editUserModal .modal-body form.user-form"),n='<div class="form-info-edit">\n                        <div class="form-info-edit-images"><p>El tamaño de la imagen debe ser de 240 x 240</p></div>\n                        <div class="form-info-edit-data"></div>\n                    </div>',i=t.find(".field--name-user-picture"),r=t.find(".form-type-password"),s=t.find(".form-type-email"),o=t.find(".form-item-name");t.find(".password-strength").prependTo(t.find(".form-type-password-confirm"));let a=t.find(".form-type-password-confirm"),l=t.find(".form-item-profession-or-occupation-0-value"),c=t.find(".form-item-company-0-value"),u=t.find(".form-item-notifications-value"),d=t.find(".form-item-terms-and-conditions-value"),h='<button type="button" class="btn-close-modal-edit" id="btnCloseModalEdit" data-bs-dismiss="modal">Close</button>';if(t.prepend(n),i.appendTo(t.find(".form-info-edit-images")),o.appendTo(t.find(".form-info-edit-data")),s.appendTo(t.find(".form-info-edit-data")),l.appendTo(t.find(".form-info-edit-data")),c.appendTo(t.find(".form-info-edit-data")),r.appendTo(t.find(".form-info-edit-data")),a.appendTo(t.find(".form-info-edit-data")),u.appendTo(t.find(".form-info-edit-data")),d.appendTo(t.find(".form-info-edit-data")),t.find(".form-actions").prepend(h),0==t.find(".form-info-edit-images .image-preview").length){let e='<div class="image-preview">\n          <img src="/themes/custom/likinormas/dist/assets/images/icon-images-preview-avatar..svg" alt="images preview" class="img-fluid images-default-avatar">\n        </div>';t.find(".form-info-edit-images .form-managed-file").prepend(e)}e(".user-logged-in.path-user #editUserModal form.user-form").length&&e("#editUserModal .modal-body form.user-form").validate({rules:{name:{required:!0,letterwithbasicpunc:!0,minlength:5,maxlength:50},mail:{required:!0,emailValidate:!0},"profession_or_occupation[0][value]":{required:!0,minlength:3,maxlength:100},current_pass:{required:{depends:function(t){return e('.password-field[name="pass[pass1]"]').val().length>0}},minlength:12},"pass[pass1]":{minlength:12},"pass[pass2]":{minlength:12,equalTo:'.password-field[name="pass[pass1]"]'},"terms_and_conditions[value]":{required:!0}},messages:{name:{minlength:"Por favor ingrese al menos 5 caracteres",maxlength:"Solo se permiten 50 caracteres"},"profession_or_occupation[0][value]":{minlength:"Por favor ingrese al menos 5 caracteres",maxlength:"Solo se permiten 100 caracteres"},current_pass:{required:"Por favor ingresar la contraseña actual",minlength:"Por favor ingrese al menos 12 caracteres"},"pass[pass1]":{minlength:"Por favor ingrese al menos 12 caracteres"},"pass[pass2]":{minlength:"Por favor ingrese al menos 12 caracteres",equalTo:"Las contraseñas deben coincidir"}},errorPlacement:function(e,t){"terms_and_conditions[value]"===t.attr("name")?e.insertAfter(t.parent()):e.insertAfter(t)},highlight:function(t,n,i){e(t).parent(".form-item").addClass("error-input").removeClass("valid-input")},unhighlight:function(t,n,i){e(t).parent(".form-item").addClass("valid-input").removeClass("error-input")},onkeyup:function(e){this.checkable(e)||!(e.name in this.submitted)&&this.optional(e)||this.element(e)}}),function(){if(e("body.user-profile #editUserModal .modal-body form.user-form").length){if(e("#editUserModal form .form-item--error-message").length){let t=e("#editUserModal form .form-item--error-message");return b("Error al guardar",t.text().trim(),"user-profile"),void t.remove()}if(e("body.user-profile .alert.alert-success").length){let t=e("body.user-profile .alert.alert-success");b("Actualización",t.text().trim().split("\n")[1].trim(),"user-profile"),t.remove()}}}()}}function x(){if(e("body.path-buscador").length||e("body.path-normas").length||e("body.path-especificaciones").length){let t,n=0,i=10,r=3;if(e("body.path-buscador").length&&(t=jQuery(".views-element-container .view-content .views-row"),n=t.length,n>i&&e('<nav class="pager" role="navigation" aria-labelledby="pagination-heading" aria-label="Paginación"><ul class="pagination js-pager__items"></ul></nav>').insertAfter(".views-element-container .view-content")),(e("body.path-normas").length||e("body.path-especificaciones").length)&&(t=jQuery(".views-element-container .view-filters-list .views-row"),n=t.length,n>i&&e('<nav class="pager" role="navigation" aria-labelledby="pagination-heading" aria-label="Paginación"><ul class="pagination js-pager__items"></ul></nav>').insertAfter(".views-element-container .view-filters-list")),n>i){t.slice(i).hide();let s=Math.ceil(n/i);for(let a=1;a<=s;a++)1==a?e(".pager .pagination").append(`\n            <li class="page-item pager__item--previous" style="display:none;">\n              <button class="page-link page-link-prev" title="Ir a la página siguiente">Anterior</button>\n            </li>\n            <li class="page-item is-active active">\n              <button class="page-link" title="Ir a la página ${a}" data-page="${a}">${a}</button>\n            </li>\n          `):a>r?e(".pager .pagination").append(`\n              <li class="page-item" style="display:none;">\n                <button class="page-link" title="Ir a la página ${a}" data-page="${a}">${a}</button>\n              </li>\n            `):e(".pager .pagination").append(`\n                <li class="page-item">\n                  <button class="page-link" title="Ir a la página ${a}" data-page="${a}">${a}</button>\n                </li>\n              `);function o(e){let n=(e-1)*i,r=e*i;t.hide().slice(n,r).show()}s>r&&e(".pager .pagination").append('\n          <li class="page-item pager__item--next">\n            <button class="page-link page-link-next" title="Ir a la página siguiente">Siguiente</button>\n          </li>\n        '),e(".pager .pagination .page-link").on("click",(function(){e("html, body").animate({scrollTop:e("form").offset().top-100},300);let t=e(this).attr("data-page");if(t)o(t),e(this).closest(".pager").find(".page-item.is-active").removeClass("is-active active"),e(this).closest(".page-item").addClass("is-active active"),1==t&&(e(".pager .pagination .page-item.pager__item--next").show(),e(".pager .pagination .page-item.pager__item--previous").hide()),t>1&&e(".pager .pagination .page-item.pager__item--previous").show(),t==s&&(e(".pager .pagination .page-item.pager__item--next").hide(),e(".pager .pagination .page-item.pager__item--previous").show());else{let t=e(".pager .pagination .page-item.is-active");if(e(this).hasClass("page-link-next")){let n=t.find(".page-link").attr("data-page"),i=parseInt(n)+1;e(".pager .pagination .page-item.pager__item--previous").show(),i>r&&(e(".pager .pagination .page-item").hide(),e(".pager .pagination .page-item.pager__item--next").show(),e(".pager .pagination .page-item.pager__item--previous").show(),e(".pager .pagination .page-item.is-active").show(),e(".pager .pagination .page-item.is-active").prevAll().slice(0,r-2).show()),i<=s&&(o(i),t.removeClass("is-active active"),t.next().addClass("is-active active").show(),i==s&&e(".pager .pagination .page-item.pager__item--next").hide())}if(e(this).hasClass("page-link-prev")){let n=t.find(".page-link").attr("data-page"),i=parseInt(n)-1;if(i>=1){if(i>r-2)e(".pager .pagination .page-item").hide(),e(".pager .pagination .page-item.pager__item--next").show(),e(".pager .pagination .page-item.pager__item--previous").show(),e(".pager .pagination .page-item.is-active").show(),e(".pager .pagination .page-item.is-active").prevAll().slice(0,r-1).show();else{e(".pager .pagination .page-item").hide();for(let t=0;t<=r-1;t++)e(".pager .pagination .page-item").not(".pager__item--next, .pager__item--previous").eq(t).show();e(".pager .pagination .page-item.pager__item--next").show(),e(".pager .pagination .page-item.pager__item--previous").show()}o(i),t.removeClass("is-active active"),t.prev().addClass("is-active active").show(),1==i&&e(".pager .pagination .page-item.pager__item--previous").hide()}}}}))}}}e((function(){e(".path-buscador").length&&(s=e(".hero .hero__info-title").text()),location.hash&&w(),document.querySelectorAll(".user-profile.user-logged-in.path-user .modal-contact-now").forEach((e=>{let t=e.nextElementSibling;for(;t;){if(t.matches(".dialog")){t.style.display="none",document.querySelector("body").classList.add("no-show-second-modal");break}t=t.nextElementSibling}})),function(){if(e("#toolbar-administration").length){let t=e("#toolbar-administration").innerHeight();document.documentElement.style.setProperty("--heigh-toolbar-administration",`${t}px`)}}(),function(){let t=e(".region-nav-branding #block-likinormas-branding");const n=e(".region-nav-branding #block-logofijomenuprincipal");n.on("click",(function(){window.location.href="/"})),e("body.path-taxonomy.is-term-pdf").length?(e("header").addClass("scroll"),t.hide(),n.show()):e(window).on("scroll",(function(){e(this).scrollTop()>0?(e("header").addClass("scroll"),t.hide(),n.show()):(e("header").removeClass("scroll"),t.show(),n.hide())}))}(),function(){if(e(".page-node-type-rules-home-content .form-search-all").length){let t=e(".page-node-type-rules-home-content .form-search-all").parent(),n=e("#sliderHome").parent();t.appendTo(n),t.find('.form-item select[name="tipo_de_norma"]').select2({minimumResultsForSearch:1/0}),t.find(".form-item-title input").attr("placeholder","Buscar")}}(),d(),function(){if(e(".page-node-type-rules-home-content .container-card").length&&i<992){function t(){e(".page-node-type-rules-home-content .container-card .block-card-images img").each((function(){let t=e(this).height();e(this).closest(".container-card").find(".block-card-info .block-card-body").css("min-height",`${t}px`)}))}t(),e(window).on("resize ",(function(){t()}))}}(),e(".page-node-type-rules-home-content .container-card")&&(e(".container-card.pos-der").length&&e(".container-card.pos-der").each((function(){let t=e(this).find(".block-card-info .block-card-body"),n=e(this).find(".block-card-images");t.find(".title-secondary, .block-card-body-text, .field--name-section-button").attr("data-aos","zoom-in-down"),n.find("img").attr("data-aos","fade-up")})),e(".container-card.pos-izq").length&&e(".container-card.pos-izq").each((function(){let t=e(this).find(".block-card-info .block-card-body"),n=e(this).find(".block-card-images");t.find(".title-secondary, .block-card-body-text, .field--name-section-button").attr("data-aos","zoom-in-down"),n.find("img").attr("data-aos","fade-up")})),e(".container-card-100").length&&e(".container-card-100").each((function(){e(this).find(".block-card-info .block-card-body").find(".title-secondary, .block-card-body-text, .field--name-background-banner-button a").attr("data-aos","zoom-out-up")})),e(".block-contact").length&&e(".block-contact").each((function(){let t=e(this).find(".block-contact-info"),n=e(this).find(".block-contact-form");t.find(".title-secondary, .block-contact-data-text, .field--name-contact-button a").attr("data-aos","zoom-in"),n.find("form").attr("data-aos","zoom-in-down")}))),p(),m(),function(){if(e("body.path-normas").length||e("body.path-especificaciones").length){let t=e(".hero").attr("style").split(": ")[1];r.style.setProperty("--background-list-normas-especifications",t);let n=e(".view-filters .block-form-filter-list").attr("style").split(": ")[1];r.style.setProperty("--background-form-filter-list",n)}}(),e('input[type="password"]').length&&e('input[type="password"]').each((function(){e(this).parent().append('<div class="icon-show-password hidden-password"></div>')})),e("form.user-login-form").length&&e(".form-item--error-message").insertBefore(e(".form-forgot-pass")),function(){if(e(".user-data-profile .profile-content").length){if(e("body").addClass("user-profile"),e("body.user-profile .modal-contact-now").length){let t=e("body.user-profile .modal-contact-now .modal-content");t.find(".modal-footer button").appendTo(t.find(".modal-body .form-actions ")),t.find(".modal-footer").remove(),e("body.user-profile .modal-contact-now form").validate({rules:{your_name:{required:!0,letterwithbasicpunc:!0,minlength:5,maxlength:50},your_email:{required:!0,emailValidate:!0},user_message:{required:!0,minlength:10,maxlength:800}}})}e("body").on("click","#btnCloseModalEdit",(function(){e('.ui-dialog.ui-corner-all[role="dialog"]').remove(),e(".ui-widget-overlay.ui-front").remove()}))}}(),e(window).on("scroll",(function(){e(this).scrollTop()>100?e(".go-top-button").fadeIn():e(".go-top-button").fadeOut()})),e(".go-top-button").on("click",(function(){jQuery("html, body").animate({scrollTop:0},800)})),jQuery(".view-filters .views-exposed-form .form-actions input").on("click",(function(t){e(".views-element-container").addClass("showFilters")})),jQuery("body.path-buscador .block-form-filter-list .form-filter-list .form-actions input").on("click",(function(t){e(".views-element-container").addClass("showFilters")})),e(document).ajaxError((function(t,n,i,r){(e(".user-logged-in .list-specifications-comments form").length||e(".user-logged-in .list-technical-comments form").length)&&4==n.readyState&&500==n.status&&location.reload()})),e(document).ajaxStart((function(){e(".comment-item").length&&e("form.comment-form .form-actions input").each((function(){e(this).prop("disabled",!0)}))})),e(document).ajaxComplete((function(){if((e("body.path-buscador").length||e("body.path-normas").length||e("body.path-especificaciones").length)&&o&&e(".views-element-container .pager").remove(),e('.block-form-filter-list .form-filter-list select[name="rule_subcategory_target_id"]').next().hasClass("select2")&&e('.block-form-filter-list .form-filter-list select[name="rule_subcategory_target_id"]').next().remove(),e('.block-form-filter-list .form-filter-list select[name="specification_subcategory_target_id"]').next().hasClass("select2")&&e('.block-form-filter-list .form-filter-list select[name="specification_subcategory_target_id"]').next().remove(),jQuery(".view-filters .views-exposed-form .form-actions input").on("click",(function(t){e(".views-element-container").addClass("showFilters")})),jQuery("body.path-buscador .block-form-filter-list .form-filter-list .form-actions input").on("click",(function(t){e(".views-element-container").addClass("showFilters")})),e(".user-logged-in .comments")){if(e(".js-ajax-comments-messages"))if(e(".comments .js-ajax-comments-messages.alert-error").length)b("Error","El campo de texto no puede dejarse en blanco. Por favor, asegurate de no dejarlo en blanco.","comments"),e(".comments .js-ajax-comments-messages.alert-error").remove();else if(e(".comments .js-ajax-comments-messages").length){b("Estado del comentario",e(".js-ajax-comments-messages").text().trim().split("\n")[1].trim(),"comments"),e(".js-ajax-comments-messages").remove()}y(),v()}e("body.path-normas").length||e("body.path-especificaciones").length||e("body .hero__indice").length?(p(),m(),i<992&&c&&(e("html").css("overflow","hidden"),e("body").addClass("show-filter-mobile"),e(".views-element-container .view-filters").show("slow"))):(e(".user-logged-in .list-specifications-comments form").length||e(".user-logged-in .list-technical-comments form").length)&&(p(),m(),v(),i<992&&c&&(e("html").css("overflow","hidden"),e("body").addClass("show-filter-mobile"),e(".views-element-container .view-filters").show("slow")),e(".js-ajax-comments-messages.alert-error").length&&(b("Error","El campo de texto no puede dejarse en blanco. Por favor, asegurate de no dejarlo en blanco.","list-comments"),e(".js-ajax-comments-messages.alert-error").remove())),e(".path-buscador").length&&(p(),m(),i<992&&(e("html").removeAttr("style"),e("body").removeClass("show-filter-mobile"),e(".path-buscador .views-exposed-form").hide("slow"),c=!1)),e(".form-info-edit .form-info-edit-images .image-widget").length&&function(){if(e(".form-info-edit .form-info-edit-images .image-widget").length){let t=e(".form-info-edit .form-info-edit-images .image-widget");if(0==t.find(".image-preview").length){const n='<div class="image-preview">\n                                  <img src="/themes/custom/likinormas/dist/assets/images/icon-images-preview-avatar..svg" alt="images preview" class="img-fluid images-default-avatar">\n                                </div>';t.prepend(n);let i=t.find(".image-widget-data input.form-file").attr("id");t.find(".image-preview").append(`<label class="upload-images" for="${i}"></label>`),e(".upload-images").trigger("click")}}}(),o&&x(),(e("body.path-buscador").length||e("body.path-normas").length||e("body.path-especificaciones").length)&&o&&(e(".pager .pagination .page-item.is-active .page-link").trigger("click"),o=!1)})),e(document).on("ajaxStop",(function(){jQuery(".header-filter-results .filters-show .tag").remove(),jQuery(".header-filter-results .filters-show").removeClass("active"),e(".views-element-container").hasClass("showFilters")&&(!function(){let t=e(".header-filter-results .filters-show"),n=e('input[name="combine"]');if(e("body.path-especificaciones").length){let i=e('select[name="specification_category_target_id"]'),r=i.find("option:first").val().trim(),s=e('select[name="specification_subcategory_target_id"]'),o=s.find("option:first").val().trim(),a=e('input[name="effective_date_value"]'),l=i.val();if(l!==r&&""!==l){t.addClass("active");let e=`<div class="tag">\n                              <span class="tag-text">${i.find('option[value="'+l+'"]').text().trim()}</span>\n                              <span class="tag-button" data-typeInput="selectCategoriesEspe" idSelect="${l}">x</span>\n                            </div>`;t.find(".clear-filter").before(e)}let c=s.val();if(c!==o&&""!==c){t.addClass("active");let e=`<div class="tag">\n                              <span class="tag-text">${s.find('option[value="'+c+'"]').text().trim()}</span>\n                              <span class="tag-button" data-typeInput="selectSubCategoriesEspe" idSelect="${c}">x</span>\n                            </div>`;t.find(".clear-filter").before(e)}let u=n.val();if(""!==u&&void 0!==u){t.addClass("active");let e=`<div class="tag">\n                              <span class="tag-text">${u.trim()}</span>\n                              <span class="tag-button" data-typeInput="inputSearch">x</span>\n                            </div>`;t.find(".clear-filter").before(e)}let d=a.val();if(""!==d&&void 0!==d){t.addClass("active");let e=`<div class="tag">\n                              <span class="tag-text">${d.trim()}</span>\n                              <span class="tag-button" data-typeInput="inputDateEspe">x</span>\n                            </div>`;t.find(".clear-filter").before(e)}}if(e("body.path-normas").length){let i=e('select[name="rule_category_target_id"]'),r=i.find("option:first").val().trim(),s=e('select[name="rule_subcategory_target_id"]'),o=s.find("option:first").val().trim(),a=e('input[name="effective_date_value"]'),l=i.val();if(l!==r&&""!==l){t.addClass("active");let e=`<div class="tag">\n                              <span class="tag-text">${i.find('option[value="'+l+'"]').text().trim()}</span>\n                              <span class="tag-button" data-typeInput="selectCategories" idSelect="${l}">x</span>\n                            </div>`;t.find(".clear-filter").before(e)}let c=s.val();if(c!==o&&""!==c){t.addClass("active");let e=`<div class="tag">\n                              <span class="tag-text">${s.find('option[value="'+c+'"]').text().trim()}</span>\n                              <span class="tag-button" data-typeInput="selectSubCategories" idSelect="${c}">x</span>\n                            </div>`;t.find(".clear-filter").before(e)}let u=n.val();if(""!==u&&void 0!==u){t.addClass("active");let e=`<div class="tag">\n                              <span class="tag-text">${u.trim()}</span>\n                              <span class="tag-button" data-typeInput="inputSearch">x</span>\n                            </div>`;t.find(".clear-filter").before(e)}let d=a.val();if(""!==d&&void 0!==d){t.addClass("active");let e=`<div class="tag">\n                              <span class="tag-text">${d.trim()}</span>\n                              <span class="tag-button" data-typeInput="inputDate">x</span>\n                            </div>`;t.find(".clear-filter").before(e)}}}(),m(),setTimeout((()=>{e(".views-element-container").removeClass("showFilters")}),2e3)),y()}))})),e(window).on("load",(function(n){setTimeout((()=>{i<992?(function(){const t=document.documentElement,n=e("header .field--name-fixed-logo-image img").attr("src");if(e("body").find(".block-logo-enel").remove(),e(`<div class="block-logo-enel"><img src="${n}" alt="fixed_logo" title="fixed_logo" loading="lazy" class="img-fluid"><button class="close-menu-mobile" id="closeMenuMobile"></button></div>`).insertBefore("header .navbar-collapse .region-nav-main"),e(".menu-item--expanded .menu-level-1").length&&(e(".menu-item--expanded .menu-level-1").each((function(){let t=e(this).closest(".menu-item--expanded");e(this).appendTo(t)})),e(".menu-item--expanded span, .menu-item--expanded a").on("click",(function(){e(this).toggleClass("show-subitem"),e(this).closest(".menu-item--expanded").find(".menu-level-1").slideToggle()}))),e("body.user-logged-in").length){let t=e(".region-nav-additional .block-profile-picture-block"),n=e(".region-nav-additional .menu--account > .navbar-nav > .nav-item > .nav-link").text().trim();t.append(`<p class="name-user-logged">${n}</p>`),t.append('<button class="show-submenu" id="showMenuLogout"></button></div>'),e(".menu-mobile .region-nav-additional").addClass("opacity-0"),e("body").on("click","#showMenuLogout",(function(){e(".region-nav-additional .nav.navbar-nav ul").toggleClass("show")}))}else{let t='<li class="menu-item"><a href="/user/login" class="nav-link" data-drupal-link-system-path="user/login">Iniciar sesión</a><div class="menu_link_content menu-link-contentmain"> <div class="field field--name-icono field--type-image"> <img src="/themes/custom/likinormas/dist/assets/images/icon-profile..svg" alt="iniciar sesión" title="iniciar sesión" loading="lazy" class="img-fluid"></div></div></li>';e(".navbar-collapse .region-nav-main .menu.menu-level-0").append(t),e(".navbar-collapse .region-nav-additional").remove()}e(".navbar-toggler").on("click",(function(){e(".menu-mobile").toggleClass("show"),e(".menu-mobile .region-nav-additional").toggleClass("opacity-0"),e("html").toggleClass("overflow-hidden")})),e(".navbar .menu.menu-level-0 .menu-item a").on("click",(function(){e(this).attr("href").includes("/#")&&(setTimeout((()=>{e(".navbar-toggler").trigger("click")}),500),setTimeout((()=>{let e=jQuery(window).scrollTop(),t=jQuery("header").innerHeight();t+=50,window.scrollTo(0,e-t)}),1100))})),e("body").on("click","#closeMenuMobile",(function(){setTimeout((()=>{e(".navbar-toggler").trigger("click")}),500)})),t.style.setProperty("--height-windows",`${window.innerHeight}px`)}(),new Hammer(document.querySelector("body .navbar-collapse")).on("panright",(function(t){setTimeout((()=>{e(".navbar-toggler").trigger("click")}),500),setTimeout((()=>{e("html").removeClass("overflow-hidden")}),600)}))):e("body").find(".block-logo-enel").remove(),function(){const t=document.documentElement;e(window).on("resize",(function(){t.style.setProperty("--height-windows",`${window.innerHeight}px`)}))}(),e(".block-contact .block-contact-form form").length&&(e('.block-contact .block-contact-form form select[name="asunto"]').select2({minimumResultsForSearch:1/0}),e('.block-contact .block-contact-form form select[name="asunto"] option:first').val(""),e('.block-contact .block-contact-form form input[name="norma"]').on("keydown",(function(){let t=e(this).width();r.style.setProperty("--width-input-normal",`${t}px`)})),e('.block-contact .block-contact-form form input[name="norma"]').attr("placeholder","Buscar"),e(".block-contact .block-contact-form form").validate({rules:{nombre_completo:{required:!0,letterwithbasicpunc:!0,minlength:5,maxlength:30},email:{required:!0,emailValidate:!0},norma:{equalTo:{param:".ui-helper-hidden-accessible div",depends:function(t){if(e('.block-contact .block-contact-form form input[name="norma"]').val().length>0)return!(e(".ui-helper-hidden-accessible div").text()==e('.block-contact .block-contact-form form input[name="norma"]').val())}}},asunto:{required:!0},mensaje:{required:!0,minlength:10,maxlength:800},captcha:{required:!0,captcha:!0}},messages:{captcha:{required:"Por favor, completa el captcha."}},errorPlacement:function(t,n){e(n).is("select")?t.insertAfter(n.parent().find(".select2")):t.insertAfter(n)},submitHandler:function(t){grecaptcha.getResponse()?(e("body .r-captcha-error").remove(),t.submit()):e("body .r-captcha-error").length||e('<span class="r-captcha-error" style="color:red;font-size: 1.4rem;text-align: center;width: 100%;display: block;">Error en captcha, este campo es requerido.</span>').insertAfter(".captcha")}})),(e("body.path-especificaciones").length||e("body.path-normas").length||e("body.path-buscador").length)&&e(".alert.alert-success").length&&(b("Estado del comentario",e(".alert.alert-status.alert-success").text().trim().split("\n")[1].trim(),"list-comments"),e(".alert.alert-success").remove()),e('input[type="password"]').length&&e('input[type="password"]').each((function(){let t=e(this).parent();e(this),t.find(".icon-show-password").on("click",(function(){let t=e(this).parent().find("input");"password"==t.attr("type")?e('input[type="password"]').each((function(){e(this).attr("type","text"),e(this).parent().find(".icon-show-password").removeClass("hidden-password").addClass("show-password")})):"text"==t.attr("type")&&e(".form-item.form-type-password input").each((function(){e(this).attr("type","password"),e(this).parent().find(".icon-show-password").removeClass("show-password").addClass("hidden-password")}))}))})),function(){if(e(".user-logged-in.path-user .reset-new-pass-form").length)e(".alert").length&&(b("Actualización",e(".alert").text().trim().split("\n")[1].trim(),"user-form"),e(".alert").remove());else if(e(".path-user .user-pass").length){if(e(".alert.alert-success").length)return b("Envío exitoso",e(".alert").text().trim().split("\n")[1].trim(),"path-user"),void e(".alert").remove();if(e(".alert.alert-danger").length)b("Error en el envío",e(".alert").text().trim().split("\n")[1].trim(),"path-user"),e(".alert").remove()}}(),e(".dialog").length&&e("body").on("click",".dialog .dialog-close",(function(t){document.querySelector(".dialog").close(),e("body").removeClass("show-modal"),e("html").removeAttr("style"),e(".path-user .reset-email-form").length&&(location.href="/"),e(".comments .js-ajax-comments-messages").length&&e(".comments .js-ajax-comments-messages").remove()})),function(){function t(){setTimeout((()=>{e("header .region-nav-additional .nav.navbar-nav > .nav-item > ul").addClass("pages-user-form")}),800)}if(e(".path-user .block-user-form").length){if(e("form.user-pass-reset").length)return e("form.user-pass-reset").appendTo(".block-user .section-info .block-user-form"),void t();if(e(".user-logged-in.path-user form > .reset-new-pass-form").length){let n=e("form.user-form"),i=n.find(".field--name-background-image"),r=n.find(".field--name-title-section h1").text(),s=n.find(".field--name-description-section").text();return e(".section-info .block-user-data .block-user-data-title").text(r),e(".section-info .block-user-data .block-user-data-description").text(s),i.remove(),n.find(".field--name-title-section").remove(),n.find(".field--name-description-section").remove(),n.appendTo(".block-user .section-info .block-user-form"),void t()}if(e(".childre-form").closest("form").length)return e(".childre-form").closest("form").appendTo(".block-user .section-info .block-user-form"),void t();if(e("form.user-form > .field--name-user-picture").length){let n=e("form.user-form > .field--name-user-picture").closest("form"),i=n.find(".field--name-user-picture .form-item");n.addClass("user-register-form register-with-facebook"),n.find('.form-wrapper[data-drupal-selector="edit-account"]').append('<div class="content-profession-company"></div>'),n.find(".field--name-profession-or-occupation").appendTo(n.find(".content-profession-company")),n.find(".field--name-company").appendTo(n.find(".content-profession-company")),i.find("label").remove(),i.find(".form-managed-file .image-widget-data").remove(),i.find("div.description").remove(),n.appendTo(".block-user .section-info .block-user-form"),t()}}}(),e("form.user-login-form").length?e("form.user-login-form").validate({rules:{name:{required:!0,minlength:5},pass:{required:!0}},messages:{name:{minlength:"Por favor ingrese al menos 5 caracteres"}},highlight:function(t,n,i){e(t).parent(".form-item").addClass("error-input").removeClass("valid-input")},unhighlight:function(t,n,i){e(t).parent(".form-item").addClass("valid-input").removeClass("error-input")},onkeyup:function(e){this.checkable(e)||!(e.name in this.submitted)&&this.optional(e)||this.element(e)},submitHandler:function(t){grecaptcha.getResponse()?(e("body .r-captcha-error").remove(),t.submit()):e("body .r-captcha-error").length||e('<span class="r-captcha-error" style="color:red;font-size: 1.4rem;text-align: center;width: 100%;display: block;">Error en captcha, este campo es requerido.</span>').insertAfter(".captcha")}}):e("form.user-pass").length?e("form.user-pass").validate({rules:{name:{required:!0,emailValidate:!0}}}):e("form.user-register-form").length?e("form.user-register-form").validate({rules:{name:{required:!0,letterwithbasicpunc:!0,minlength:5},mail:{required:!0,emailValidate:!0},"profession_or_occupation[0][value]":{required:!0,minlength:3},"pass[pass1]":{required:!0,minlength:6},"pass[pass2]":{required:!0,minlength:6,equalTo:"#edit-pass-pass1"},"terms_and_conditions[value]":{required:!0}},messages:{name:{minlength:"Por favor ingrese al menos 5 caracteres"},"pass[pass1]":{minlength:"Por favor ingrese al menos 6 caracteres"},"pass[pass2]":{minlength:"Por favor ingrese al menos 6 caracteres",equalTo:"Las contraseñas deben coincidir"}},errorPlacement:function(e,t){"terms_and_conditions[value]"===t.attr("name")?e.insertAfter(t.parent()):e.insertAfter(t)},highlight:function(t,n,i){e(t).parent(".form-item").addClass("error-input").removeClass("valid-input")},unhighlight:function(t,n,i){e(t).parent(".form-item").addClass("valid-input").removeClass("error-input")},onkeyup:function(e){this.checkable(e)||!(e.name in this.submitted)&&this.optional(e)||this.element(e)},submitHandler:function(t){grecaptcha.getResponse()?(e("body .r-captcha-error").remove(),t.submit()):e("body .r-captcha-error").length||e('<span class="r-captcha-error" style="color:red;font-size: 1.4rem;text-align: center;width: 100%;display: block;">Error en captcha, este campo es requerido.</span>').insertAfter(".captcha")}}):e("form .reset-new-pass-form").length&&e("form.user-form").validate({rules:{current_pass:{required:{depends:function(t){return e("#edit-pass-pass1").val().length>0}},minlength:6},"pass[pass1]":{required:!0,minlength:6},"pass[pass2]":{required:!0,minlength:6,equalTo:"#edit-pass-pass1"}},messages:{current_pass:{required:"Por favor ingresar la contraseña actual",minlength:"Por favor ingrese al menos 6 caracteres"},"pass[pass1]":{minlength:"Por favor ingrese al menos 6 caracteres"},"pass[pass2]":{minlength:"Por favor ingrese al menos 6 caracteres",equalTo:"Las contraseñas deben coincidir"}}}),v(),y(),_(),i>1023&&e(".user-logged-in header .region-nav-additional .navbar-nav > .nav-item > .nav-link").on("click",(function(t){t.preventDefault(),e(".region-nav-additional .block-menu > .navbar-nav ul").slideToggle()})),function(){(e(".page-node-type-rules-technical-specifications").length||e(".page-node-type-rules-technical-rules").length)&&(e(this).css("margin-bottom","11vh"),e("div > table").each((function(){let t=e(this).parent().width();e(this).css("width",`${t}px`),e(this).parent().removeAttr("style"),e(this).wrap('<div class="table-responsive"></div>')})))}(),function(){if(e(".page-node-type-rules-technical-specifications").length||e(".page-node-type-rules-technical-rules").length){function t(t,n){e(".info-details .headings").prependTo(e(""+n)),e(t+" .card").prepend('<h5 class="card-header text-white" style="background-color: #41B9E6; padding: 13px 20px; font-weight:bolder;">CONTENIDO</h5>'),e(".headings li:first").remove()}if(e(".headings").length){if(e(".page-node-type-rules-technical-specifications").length)return void t(".technical-specification",".technical-specification .card");if(e(".page-node-type-rules-technical-rules").length)t(".technical-rules",".technical-rules .card")}}}(),e(".view__indice").length&&(e(".hero__indice h1").addClass("title-primary"),0==e(".view__indice .pager").length&&e(".view__indice").append('<div class="no-pager"></div>')),x(),w()}),800),function(){let t,n,i=e(".technical-external-rule img"),r=e("#showcase-modal"),s=r.find(".close");i.on("click",(function(e){t=e.target.getAttribute("src"),n=e.target.getAttribute("title"),r.modal("show")})),s.on("click",(function(){r.modal("hide")})),r.on("show.bs.modal",(function(e){let i=r.find(".showcase-img");r.modal("handleUpdate"),i.attr("src",t),i.attr("title",n)}))}(),(e(".page-node-type-rules-technical-specifications").length||e(".page-node-type-rules-technical-rules").length)&&window.addEventListener("hashchange",(function(){setTimeout((()=>{let e=jQuery(window).scrollTop(),t=jQuery("header .navbar").innerHeight();t+=100,window.scrollTo(0,e-t)}),800)})),t.init({delay:100})}));n(840)}()}();;
/**
 * @file
 * Attaches behaviors for Drupal's active link marking.
 */

(function (Drupal, drupalSettings) {
  /**
   * Append is-active class.
   *
   * The link is only active if its path corresponds to the current path, the
   * language of the linked path is equal to the current language, and if the
   * query parameters of the link equal those of the current request, since the
   * same request with different query parameters may yield a different page
   * (e.g. pagers, exposed View filters).
   *
   * Does not discriminate based on element type, so allows you to set the
   * is-active class on any element: a, li…
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.activeLinks = {
    attach(context) {
      // Start by finding all potentially active links.
      const path = drupalSettings.path;
      const queryString = JSON.stringify(path.currentQuery);
      const querySelector = path.currentQuery
        ? `[data-drupal-link-query='${queryString}']`
        : ':not([data-drupal-link-query])';
      const originalSelectors = [
        `[data-drupal-link-system-path="${path.currentPath}"]`,
      ];
      let selectors;

      // If this is the front page, we have to check for the <front> path as
      // well.
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      // Add language filtering.
      selectors = [].concat(
        // Links without any hreflang attributes (most of them).
        originalSelectors.map((selector) => `${selector}:not([hreflang])`),
        // Links with hreflang equals to the current language.
        originalSelectors.map(
          (selector) => `${selector}[hreflang="${path.currentLanguage}"]`,
        ),
      );

      // Add query string selector for pagers, exposed filters.
      selectors = selectors.map((current) => current + querySelector);

      // Query the DOM.
      const activeLinks = context.querySelectorAll(selectors.join(','));
      const il = activeLinks.length;
      for (let i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach(context, settings, trigger) {
      if (trigger === 'unload') {
        const activeLinks = context.querySelectorAll(
          '[data-drupal-link-system-path].is-active',
        );
        const il = activeLinks.length;
        for (let i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    },
  };
})(Drupal, drupalSettings);
;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

;
/**
 * @file
 * Progress bar.
 */

(function ($, Drupal) {
  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *   The id for the progress bar.
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return (
      `<div id="${id}" class="progress" aria-live="polite">` +
      '<div class="progress__label">&nbsp;</div>' +
      '<div class="progress__track"><div class="progress__bar"></div></div>' +
      '<div class="progress__percentage"></div>' +
      '<div class="progress__description">&nbsp;</div>' +
      '</div>'
    );
  };

  /**
   * A progressbar object. Initialized with the given id. Must be inserted into
   * the DOM afterwards through progressBar.element.
   *
   * Method is the function which will perform the HTTP request to get the
   * progress bar state. Either "GET" or "POST".
   *
   * @example
   * pb = new Drupal.ProgressBar('myProgressBar');
   * some_element.appendChild(pb.element);
   *
   * @constructor
   *
   * @param {string} id
   *   The id for the progressbar.
   * @param {function} updateCallback
   *   Callback to run on update.
   * @param {string} method
   *   HTTP method to use.
   * @param {function} errorCallback
   *   Callback to call on error.
   */
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    // The WAI-ARIA setting aria-live="polite" will announce changes after
    // users
    // have completed their current activity and not interrupt the screen
    // reader.
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(
    Drupal.ProgressBar.prototype,
    /** @lends Drupal.ProgressBar# */ {
      /**
       * Set the percentage and status message for the progressbar.
       *
       * @param {number} percentage
       *   The progress percentage.
       * @param {string} message
       *   The message to show the user.
       * @param {string} label
       *   The text for the progressbar label.
       */
      setProgress(percentage, message, label) {
        if (percentage >= 0 && percentage <= 100) {
          $(this.element)
            .find('div.progress__bar')
            .css('width', `${percentage}%`);
          $(this.element)
            .find('div.progress__percentage')
            .html(`${percentage}%`);
        }
        $('div.progress__description', this.element).html(message);
        $('div.progress__label', this.element).html(label);
        if (this.updateCallback) {
          this.updateCallback(percentage, message, this);
        }
      },

      /**
       * Start monitoring progress via Ajax.
       *
       * @param {string} uri
       *   The URI to use for monitoring.
       * @param {number} delay
       *   The delay for calling the monitoring URI.
       */
      startMonitoring(uri, delay) {
        this.delay = delay;
        this.uri = uri;
        this.sendPing();
      },

      /**
       * Stop monitoring progress via Ajax.
       */
      stopMonitoring() {
        clearTimeout(this.timer);
        // This allows monitoring to be stopped from within the callback.
        this.uri = null;
      },

      /**
       * Request progress data from server.
       */
      sendPing() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (this.uri) {
          const pb = this;
          // When doing a post request, you need non-null data. Otherwise a
          // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
          let uri = this.uri;
          if (uri.indexOf('?') === -1) {
            uri += '?';
          } else {
            uri += '&';
          }
          uri += '_format=json';
          $.ajax({
            type: this.method,
            url: uri,
            data: '',
            dataType: 'json',
            success(progress) {
              // Display errors.
              if (progress.status === 0) {
                pb.displayError(progress.data);
                return;
              }
              // Update display.
              pb.setProgress(
                progress.percentage,
                progress.message,
                progress.label,
              );
              // Schedule next timer.
              pb.timer = setTimeout(() => {
                pb.sendPing();
              }, pb.delay);
            },
            error(xmlhttp) {
              const e = new Drupal.AjaxError(xmlhttp, pb.uri);
              pb.displayError(`<pre>${e.message}</pre>`);
            },
          });
        }
      },

      /**
       * Display errors on the page.
       *
       * @param {string} string
       *   The error message to show the user.
       */
      displayError(string) {
        const error = $('<div class="messages messages--error"></div>').html(
          string,
        );
        $(this.element).before(error).hide();

        if (this.errorCallback) {
          this.errorCallback(this);
        }
      },
    },
  );
})(jQuery, Drupal);
;
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/**
 * @file
 * Provides Ajax page updating via jQuery $.ajax.
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with `#ajax['url']` and
 * `#ajax['wrapper']` properties. If set, this file will automatically be
 * included to provide Ajax capabilities.
 */

(function (
  $,
  window,
  Drupal,
  drupalSettings,
  loadjs,
  { isFocusable, tabbable },
) {
  /**
   * Attaches the Ajax behavior to each Ajax form element.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Initialize all {@link Drupal.Ajax} objects declared in
   *   `drupalSettings.ajax` or initialize {@link Drupal.Ajax} objects from
   *   DOM elements having the `use-ajax-submit` or `use-ajax` css class.
   * @prop {Drupal~behaviorDetach} detach
   *   During `unload` remove all {@link Drupal.Ajax} objects related to
   *   the removed content.
   */
  Drupal.behaviors.AJAX = {
    attach(context, settings) {
      function loadAjaxBehavior(base) {
        const elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = `#${base}`;
        }
        // Use jQuery selector instead of a native selector for
        // backwards compatibility.
        once('drupal-ajax', $(elementSettings.selector)).forEach((el) => {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      // Load all Ajax behaviors specified in the settings.
      Object.keys(settings.ajax || {}).forEach(loadAjaxBehavior);

      Drupal.ajax.bindAjaxLinks(document.body);

      // This class means to submit the form to the action using Ajax.
      once('ajax', '.use-ajax-submit').forEach((el) => {
        const elementSettings = {};

        // Ajax submits specified in this manner automatically submit to the
        // normal form action.
        elementSettings.url = $(el.form).attr('action');
        // Form submit button clicks need to tell the form what was clicked so
        // it gets passed in the POST request.
        elementSettings.setClick = true;
        // Form buttons use the 'click' event rather than mousedown.
        elementSettings.event = 'click';
        // Clicked form buttons look better with the throbber than the progress
        // bar.
        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = el.id;
        elementSettings.element = el;

        Drupal.ajax(elementSettings);
      });
    },

    detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach((instance) => {
          // Set this to null and allow garbage collection to reclaim
          // the memory.
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    },
  };

  /**
   * Extends Error to provide handling for Errors in Ajax.
   *
   * @constructor
   *
   * @augments Error
   *
   * @param {XMLHttpRequest} xmlhttp
   *   XMLHttpRequest object used for the failed request.
   * @param {string} uri
   *   The URI where the error occurred.
   * @param {string} customMessage
   *   The custom message.
   */
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    let statusCode;
    let statusText;
    let responseText;
    if (xmlhttp.status) {
      statusCode = `\n${Drupal.t('An AJAX HTTP error occurred.')}\n${Drupal.t(
        'HTTP Result Code: !status',
        {
          '!status': xmlhttp.status,
        },
      )}`;
    } else {
      statusCode = `\n${Drupal.t(
        'An AJAX HTTP request terminated abnormally.',
      )}`;
    }
    statusCode += `\n${Drupal.t('Debugging information follows.')}`;
    const pathText = `\n${Drupal.t('Path: !uri', { '!uri': uri })}`;
    statusText = '';
    // In some cases, when statusCode === 0, xmlhttp.statusText may not be
    // defined. Unfortunately, testing for it with typeof, etc, doesn't seem to
    // catch that and the test causes an exception. So we need to catch the
    // exception here.
    try {
      statusText = `\n${Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim(),
      })}`;
    } catch (e) {
      // Empty.
    }

    responseText = '';
    // Again, we don't have a way to know for sure whether accessing
    // xmlhttp.responseText is going to throw an exception. So we'll catch it.
    try {
      responseText = `\n${Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim(),
      })}`;
    } catch (e) {
      // Empty.
    }

    // Make the responseText more readable by stripping HTML tags and newlines.
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    // We don't need readyState except for status == 0.
    const readyStateText =
      xmlhttp.status === 0
        ? `\n${Drupal.t('ReadyState: !readyState', {
            '!readyState': xmlhttp.readyState,
          })}`
        : '';

    customMessage = customMessage
      ? `\n${Drupal.t('CustomMessage: !customMessage', {
          '!customMessage': customMessage,
        })}`
      : '';

    /**
     * Formatted and translated error message.
     *
     * @type {string}
     */
    this.message =
      statusCode +
      pathText +
      statusText +
      customMessage +
      responseText +
      readyStateText;

    /**
     * Used by some browsers to display a more accurate stack trace.
     *
     * @type {string}
     */
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  /**
   * Provides Ajax page updating via jQuery $.ajax.
   *
   * This function is designed to improve developer experience by wrapping the
   * initialization of {@link Drupal.Ajax} objects and storing all created
   * objects in the {@link Drupal.ajax.instances} array.
   *
   * @example
   * Drupal.behaviors.myCustomAJAXStuff = {
   *   attach: function (context, settings) {
   *
   *     var ajaxSettings = {
   *       url: 'my/url/path',
   *       // If the old version of Drupal.ajax() needs to be used those
   *       // properties can be added
   *       base: 'myBase',
   *       element: $(context).find('.someElement')
   *     };
   *
   *     var myAjaxObject = Drupal.ajax(ajaxSettings);
   *
   *     // Declare a new Ajax command specifically for this Ajax object.
   *     myAjaxObject.commands.insert = function (ajax, response, status) {
   *       $('#my-wrapper').append(response.data);
   *       alert('New content was appended to #my-wrapper');
   *     };
   *
   *     // This command will remove this Ajax object from the page.
   *     myAjaxObject.commands.destroyObject = function (ajax, response, status) {
   *       Drupal.ajax.instances[this.instanceIndex] = null;
   *     };
   *
   *     // Programmatically trigger the Ajax request.
   *     myAjaxObject.execute();
   *   }
   * };
   *
   * @param {object} settings
   *   The settings object passed to {@link Drupal.Ajax} constructor.
   * @param {string} [settings.base]
   *   Base is passed to {@link Drupal.Ajax} constructor as the 'base'
   *   parameter.
   * @param {HTMLElement} [settings.element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   *
   * @return {Drupal.Ajax}
   *   The created Ajax object.
   *
   * @see Drupal.AjaxCommands
   */
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error(
        'Drupal.ajax() function must be called with one configuration object only',
      );
    }
    // Map those config keys to variables for the old Drupal.ajax function.
    const base = settings.base || false;
    const element = settings.element || false;
    delete settings.base;
    delete settings.element;

    // By default do not display progress for ajax calls without an element.
    if (!settings.progress && !element) {
      settings.progress = false;
    }

    const ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  /**
   * Contains all created Ajax objects.
   *
   * @type {Array.<Drupal.Ajax|null>}
   */
  Drupal.ajax.instances = [];

  /**
   * List all objects where the associated element is not in the DOM
   *
   * This method ignores {@link Drupal.Ajax} objects not bound to DOM elements
   * when created with {@link Drupal.ajax}.
   *
   * @return {Array.<Drupal.Ajax>}
   *   The list of expired {@link Drupal.Ajax} objects.
   */
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(
      (instance) =>
        instance &&
        instance.element !== false &&
        !document.body.contains(instance.element),
    );
  };

  /**
   * Bind Ajax functionality to links that use the 'use-ajax' class.
   *
   * @param {HTMLElement} element
   *   Element to enable Ajax functionality for.
   */
  Drupal.ajax.bindAjaxLinks = (element) => {
    // Bind Ajax behaviors to all items showing the class.
    once('ajax', '.use-ajax', element).forEach((ajaxLink) => {
      const $linkElement = $(ajaxLink);

      const elementSettings = {
        // Clicked links look better with the throbber than the progress bar.
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink,
      };
      const href = $linkElement.attr('href');
      /**
       * For anchor tags, these will go to the target of the anchor rather than
       * the usual location.
       */
      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  /**
   * Settings for an Ajax object.
   *
   * @typedef {object} Drupal.Ajax~elementSettings
   *
   * @prop {string} url
   *   Target of the Ajax request.
   * @prop {?string} [event]
   *   Event bound to settings.element which will trigger the Ajax request.
   * @prop {boolean} [keypress=true]
   *   Triggers a request on keypress events.
   * @prop {?string} selector
   *   jQuery selector targeting the element to bind events to or used with
   *   {@link Drupal.AjaxCommands}.
   * @prop {string} [effect='none']
   *   Name of the jQuery method to use for displaying new Ajax content.
   * @prop {string|number} [speed='none']
   *   Speed with which to apply the effect.
   * @prop {string} [method]
   *   Name of the jQuery method used to insert new content in the targeted
   *   element.
   * @prop {object} [progress]
   *   Settings for the display of a user-friendly loader.
   * @prop {string} [progress.type='throbber']
   *   Type of progress element, core provides `'bar'`, `'throbber'` and
   *   `'fullscreen'`.
   * @prop {string} [progress.message=Drupal.t('Please wait...')]
   *   Custom message to be used with the bar indicator.
   * @prop {object} [submit]
   *   Extra data to be sent with the Ajax request.
   * @prop {boolean} [submit.js=true]
   *   Allows the PHP side to know this comes from an Ajax request.
   * @prop {object} [dialog]
   *   Options for {@link Drupal.dialog}.
   * @prop {string} [dialogType]
   *   One of `'modal'` or `'dialog'`.
   * @prop {string} [prevent]
   *   List of events on which to stop default action and stop propagation.
   */

  /**
   * Ajax constructor.
   *
   * The Ajax request returns an array of commands encoded in JSON, which is
   * then executed to make any changes that are necessary to the page.
   *
   * Drupal uses this file to enhance form elements with `#ajax['url']` and
   * `#ajax['wrapper']` properties. If set, this file will automatically be
   * included to provide Ajax capabilities.
   *
   * @constructor
   *
   * @param {string} [base]
   *   Base parameter of {@link Drupal.Ajax} constructor
   * @param {HTMLElement} [element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   * @param {Drupal.Ajax~elementSettings} elementSettings
   *   Settings for this Ajax object.
   */
  Drupal.Ajax = function (base, element, elementSettings) {
    const defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? `#${base}` : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...'),
      },
      submit: {
        js: true,
      },
    };

    $.extend(this, defaults, elementSettings);

    /**
     * @type {Drupal.AjaxCommands}
     */
    this.commands = new Drupal.AjaxCommands();

    /**
     * @type {boolean|number}
     */
    this.instanceIndex = false;

    // @todo Remove this after refactoring the PHP code to:
    //   - Call this 'selector'.
    //   - Include the '#' for ID-based selectors.
    //   - Support non-ID-based selectors.
    if (this.wrapper) {
      /**
       * @type {string}
       */
      this.wrapper = `#${this.wrapper}`;
    }

    /**
     * @type {HTMLElement}
     */
    this.element = element;

    /**
     * @type {Drupal.Ajax~elementSettings}
     */
    this.elementSettings = elementSettings;

    // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
    // bind Ajax to links as well.
    if (this.element && this.element.form) {
      /**
       * @type {jQuery}
       */
      this.$form = $(this.element.form);
    }

    // If no Ajax callback URL was given, use the link href or form action.
    if (!this.url) {
      const $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
    // the server detect when it needs to degrade gracefully.
    // There are four scenarios to check for:
    // 1. /nojs/
    // 2. /nojs$ - The end of a URL string.
    // 3. /nojs? - Followed by a query (e.g. path/nojs?destination=foobar).
    // 4. /nojs# - Followed by a fragment (e.g.: path/nojs#my-fragment).
    const originalUrl = this.url;

    /**
     * Processed Ajax URL.
     *
     * @type {string}
     */
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
    // If the 'nojs' version of the URL is trusted, also trust the 'ajax'
    // version.
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    // Set the options for the ajaxSubmit function.
    // The 'this' variable will not persist inside of the options object.
    const ajax = this;

    /**
     * Options for the jQuery.ajax function.
     *
     * @name Drupal.Ajax#options
     *
     * @type {object}
     *
     * @prop {string} url
     *   Ajax URL to be called.
     * @prop {object} data
     *   Ajax payload.
     * @prop {function} beforeSerialize
     *   Implement jQuery beforeSerialize function to call
     *   {@link Drupal.Ajax#beforeSerialize}.
     * @prop {function} beforeSubmit
     *   Implement jQuery beforeSubmit function to call
     *   {@link Drupal.Ajax#beforeSubmit}.
     * @prop {function} beforeSend
     *   Implement jQuery beforeSend function to call
     *   {@link Drupal.Ajax#beforeSend}.
     * @prop {function} success
     *   Implement jQuery success function to call
     *   {@link Drupal.Ajax#success}.
     * @prop {function} complete
     *   Implement jQuery success function to clean up ajax state and trigger an
     *   error if needed.
     * @prop {string} dataType='json'
     *   Type of the response expected.
     * @prop {string} type='POST'
     *   HTTP method to use for the Ajax request.
     */
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      isInProgress() {
        return ajax.ajaxing;
      },
      beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success(response, status, xmlhttprequest) {
        // Sanity check for browser support (object expected).
        // When using iFrame uploads, responses must be returned as a string.
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        // Prior to invoking the response's commands, verify that they can be
        // trusted by checking for a response header. See
        // \Drupal\Core\EventSubscriber\AjaxResponseSubscriber for details.
        // - Empty responses are harmless so can bypass verification. This
        //   avoids an alert message for server-generated no-op responses that
        //   skip Ajax rendering.
        // - Ajax objects with trusted URLs (e.g., ones defined server-side via
        //   #ajax) can bypass header verification. This is especially useful
        //   for Ajax with multipart forms. Because IFRAME transport is used,
        //   the response headers cannot be accessed for verification.
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            const customMessage = Drupal.t(
              'The response failed verification so will not be processed.',
            );
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return (
          // Ensure that the return of the success callback is a Promise.
          // When the return is a Promise, using resolve will unwrap it, and
          // when the return is not a Promise we make sure it can be used as
          // one. This is useful for code that overrides the success method.
          Promise.resolve(ajax.success(response, status))
            // Ajaxing status is back to false when all the AJAX commands have
            // finished executing.
            .then(() => {
              ajax.ajaxing = false;
              // jQuery normally triggers the ajaxSuccess, ajaxComplete, and
              // ajaxStop events after the "success" function passed to $.ajax()
              // returns, but we prevented that via
              // $.event.special[EVENT_NAME].trigger in order to wait for the
              // commands to finish executing. Now that they have, re-trigger
              // those events.
              $(document).trigger('ajaxSuccess', [xmlhttprequest, this]);
              $(document).trigger('ajaxComplete', [xmlhttprequest, this]);
              if (--$.active === 0) {
                $(document).trigger('ajaxStop');
              }
            })
        );
      },
      error(xmlhttprequest, status, error) {
        ajax.ajaxing = false;
      },
      complete(xmlhttprequest, status) {
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST',
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    // Ensure that we have a valid URL by adding ? when no query parameter is
    // yet available, otherwise append using &.
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }
    // If this element has a dialog type use if for the wrapper if not use 'ajax'.
    let wrapper = `drupal_${elementSettings.dialogType || 'ajax'}`;
    if (elementSettings.dialogRenderer) {
      wrapper += `.${elementSettings.dialogRenderer}`;
    }
    ajax.options.url += `${Drupal.ajax.WRAPPER_FORMAT}=${wrapper}`;

    // Bind the ajaxSubmit function to the element event.
    $(ajax.element).on(elementSettings.event, function (event) {
      if (
        !drupalSettings.ajaxTrustedUrl[ajax.url] &&
        !Drupal.url.isLocal(ajax.url)
      ) {
        throw new Error(
          Drupal.t('The callback URL is not local and not trusted: !url', {
            '!url': ajax.url,
          }),
        );
      }
      return ajax.eventResponse(this, event);
    });

    // If necessary, enable keyboard submission so that Ajax behaviors
    // can be triggered through keyboard input as well as e.g. a mousedown
    // action.
    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    // If necessary, prevent the browser default action of an additional event.
    // For example, prevent the browser default action of a click, even if the
    // Ajax behavior binds to mousedown.
    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  /**
   * URL query attribute to indicate the wrapper used to render a request.
   *
   * The wrapper format determines how the HTML is wrapped, for example in a
   * modal dialog.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  /**
   * Request parameter to indicate that a request is a Drupal Ajax request.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  /**
   * Execute the ajax request.
   *
   * Allows developers to execute an Ajax request manually without specifying
   * an event to respond to.
   *
   * @return {object}
   *   Returns the jQuery.Deferred object underlying the Ajax request. If
   *   pre-serialization fails, the Deferred will be returned in the rejected
   *   state.
   */
  Drupal.Ajax.prototype.execute = function () {
    // Do not perform another ajax command if one is already in progress.
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      // Return the jqXHR so that external code can hook into the Deferred API.
      return $.ajax(this.options);
    } catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      this.ajaxing = false;
      window.alert(
        `An error occurred while attempting to process ${this.options.url}: ${e.message}`,
      );
      // For consistency, return a rejected Deferred (i.e., jqXHR's superclass)
      // so that calling code can take appropriate action.
      return $.Deferred().reject();
    }
  };

  /**
   * Handle a key press.
   *
   * The Ajax object will, if instructed, bind to a key press response. This
   * will test to see if the key press is valid to trigger this event and
   * if it is, trigger it for us and prevent other keypresses from triggering.
   * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
   * and 32. RETURN is often used to submit a form when in a textfield, and
   * SPACE is often used to activate an element without submitting.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    // Create a synonym for this to reduce code confusion.
    const ajax = this;

    // Detect enter key and space bar and allow the standard response for them,
    // except for form elements of type 'text', 'tel', 'number' and 'textarea',
    // where the spacebar activation causes inappropriate activation if
    // #ajax['keypress'] is TRUE. On a text-type widget a space should always
    // be a space.
    if (
      event.which === 13 ||
      (event.which === 32 &&
        element.type !== 'text' &&
        element.type !== 'textarea' &&
        element.type !== 'tel' &&
        element.type !== 'number')
    ) {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  /**
   * Handle an event that triggers an Ajax response.
   *
   * When an event that triggers an Ajax response happens, this method will
   * perform the actual Ajax call. It is bound to the event using
   * bind() in the constructor, and it uses the options specified on the
   * Ajax object.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    // Create a synonym for this to reduce code confusion.
    const ajax = this;

    // Do not perform another Ajax command if one is already in progress.
    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        // If setClick is set, we must set this to ensure that the button's
        // value is passed.
        if (ajax.setClick) {
          // Mark the clicked button. 'form.clk' is a special variable for
          // ajaxSubmit that tells the system which element got clicked to
          // trigger the submit. Without it there would be no 'op' or
          // equivalent.
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      ajax.ajaxing = false;
      window.alert(
        `An error occurred while attempting to process ${ajax.options.url}: ${e.message}`,
      );
    }
  };

  /**
   * Handler for the form serialization.
   *
   * Runs before the beforeSend() handler (see below), and unlike that one, runs
   * before field data is collected.
   *
   * @param {object} [element]
   *   Ajax object's `elementSettings`.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    // Allow detaching behaviors to update field values before collecting them.
    // This is only needed when field values are added to the POST data, so only
    // when there is a form such that this.$form.ajaxSubmit() is used instead of
    // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
    // isn't called, but don't rely on that: explicitly check this.$form.
    if (this.$form && document.body.contains(this.$form.get(0))) {
      const settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    // Inform Drupal that this is an AJAX request.
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    // Allow Drupal to return new JavaScript and CSS files to load without
    // returning the ones already loaded.
    // @see \Drupal\Core\Theme\AjaxBasePageNegotiator
    // @see \Drupal\Core\Asset\LibraryDependencyResolverInterface::getMinimalRepresentativeSubset()
    // @see system_js_settings_alter()
    const pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  /**
   * Modify form values prior to form submission.
   *
   * @param {Array.<object>} formValues
   *   Processed form values.
   * @param {jQuery} element
   *   The form node as a jQuery object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {
    // This function is left empty to make it simple to override for modules
    // that wish to add functionality here.
  };

  /**
   * Prepare the Ajax request before it is sent.
   *
   * @param {XMLHttpRequest} xmlhttprequest
   *   Native Ajax object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    // For forms without file inputs, the jQuery Form plugin serializes the
    // form values, and then calls jQuery's $.ajax() function, which invokes
    // this handler. In this circumstance, options.extraData is never used. For
    // forms with file inputs, the jQuery Form plugin uses the browser's normal
    // form submission mechanism, but captures the response in a hidden IFRAME.
    // In this circumstance, it calls this handler first, and then appends
    // hidden fields to the form to submit the values in options.extraData.
    // There is no simple way to know which submission mechanism will be used,
    // so we add to extraData regardless, and allow it to be ignored in the
    // former case.
    if (this.$form) {
      options.extraData = options.extraData || {};

      // Let the server know when the IFRAME submission mechanism is used. The
      // server can use this information to wrap the JSON response in a
      // TEXTAREA, as per http://jquery.malsup.com/form/#file-upload.
      options.extraData.ajax_iframe_upload = '1';

      // The triggering element is about to be disabled (see below), but if it
      // contains a value (e.g., a checkbox, textfield, select, etc.), ensure
      // that value is included in the submission. As per above, submissions
      // that use $.ajax() are already serialized prior to the element being
      // disabled, so this is only needed for IFRAME submissions.
      const v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    // Disable the element that received the change to prevent user interface
    // interaction while the Ajax request is in progress. ajax.ajaxing prevents
    // the element from triggering a new request, but does not prevent the user
    // from changing its value.
    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    // Insert progress indicator.
    const progressIndicatorMethod = `setProgressIndicator${this.progress.type
      .slice(0, 1)
      .toUpperCase()}${this.progress.type.slice(1).toLowerCase()}`;
    if (
      progressIndicatorMethod in this &&
      typeof this[progressIndicatorMethod] === 'function'
    ) {
      this[progressIndicatorMethod].call(this);
    }
  };

  /**
   * An animated progress throbber and container element for AJAX operations.
   *
   * @param {string} [message]
   *   (optional) The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressThrobber = (message) => {
    // Build markup without adding extra white space since it affects rendering.
    const messageMarkup =
      typeof message === 'string'
        ? Drupal.theme('ajaxProgressMessage', message)
        : '';
    const throbber = '<div class="throbber">&nbsp;</div>';

    return `<div class="ajax-progress ajax-progress-throbber">${throbber}${messageMarkup}</div>`;
  };

  /**
   * An animated progress throbber and container element for AJAX operations.
   *
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressIndicatorFullscreen = () =>
    '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';

  /**
   * Formats text accompanying the AJAX progress throbber.
   *
   * @param {string} message
   *   The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressMessage = (message) =>
    `<div class="message">${message}</div>`;

  /**
   * Provide a wrapper for the AJAX progress bar element.
   *
   * @param {jQuery} $element
   *   Progress bar element.
   * @return {string}
   *   The HTML markup for the progress bar.
   */
  Drupal.theme.ajaxProgressBar = ($element) =>
    $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);

  /**
   * Sets the progress bar progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    const progressBar = new Drupal.ProgressBar(
      `ajax-progress-${this.element.id}`,
      $.noop,
      this.progress.method,
      $.noop,
    );
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(
        this.progress.url,
        this.progress.interval || 1500,
      );
    }
    this.progress.element = $(
      Drupal.theme('ajaxProgressBar', progressBar.element),
    );
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(
      Drupal.theme('ajaxProgressThrobber', this.progress.message),
    );
    if ($(this.element).closest('[data-drupal-ajax-container]').length) {
      $(this.element)
        .closest('[data-drupal-ajax-container]')
        .after(this.progress.element);
    } else {
      $(this.element).after(this.progress.element);
    }
  };

  /**
   * Sets the fullscreen progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  /**
   * Helper method to make sure commands are executed in sequence.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   *
   * @return {Promise}
   *  The promise that will resolve once all commands have finished executing.
   */
  Drupal.Ajax.prototype.commandExecutionQueue = function (response, status) {
    const ajaxCommands = this.commands;
    return Object.keys(response || {}).reduce(
      // Add all commands to a single execution queue.
      (executionQueue, key) =>
        executionQueue.then(() => {
          const { command } = response[key];
          if (command && ajaxCommands[command]) {
            // When a command returns a promise, the remaining commands will not
            // execute until that promise has been fulfilled. This is typically
            // used to ensure JavaScript files added via the 'add_js' command
            // have loaded before subsequent commands execute.
            return ajaxCommands[command](this, response[key], status);
          }
        }),
      Promise.resolve(),
    );
  };

  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   *
   * @return {Promise}
   * The promise that will resolve once all commands have finished executing.
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    const elementParents = $(this.element)
      .parents('[data-drupal-selector]')
      .addBack()
      .toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    const focusChanged = Object.keys(response || {}).some((key) => {
      const { command, method } = response[key];
      return (
        command === 'focusFirst' || (command === 'invoke' && method === 'focus')
      );
    });

    return (
      this.commandExecutionQueue(response, status)
        // If the focus hasn't been changed by the AJAX commands, try to refocus
        // the triggering element or one of its parents if that element does not
        // exist anymore.
        .then(() => {
          if (
            !focusChanged &&
            this.element &&
            !$(this.element).data('disable-refocus')
          ) {
            let target = false;

            for (let n = elementParents.length - 1; !target && n >= 0; n--) {
              target = document.querySelector(
                `[data-drupal-selector="${elementParents[n].getAttribute(
                  'data-drupal-selector',
                )}"]`,
              );
            }
            if (target) {
              $(target).trigger('focus');
            }
          }
          // Reattach behaviors, if they were detached in beforeSerialize(). The
          // attachBehaviors() called on the new content from processing the
          // response commands is not sufficient, because behaviors from the
          // entire form need to be reattached.
          if (this.$form && document.body.contains(this.$form.get(0))) {
            const settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
          }
          // Remove any response-specific settings so they don't get used on the
          // next call by mistake.
          this.settings = null;
        })
        .catch((error) =>
          // eslint-disable-next-line no-console
          console.error(
            Drupal.t(
              'An error occurred during the execution of the Ajax response: !error',
              {
                '!error': error,
              },
            ),
          ),
        )
    );
  };

  /**
   * Build an effect object to apply an effect when adding new HTML.
   *
   * @param {object} response
   *   Drupal Ajax response.
   * @param {string} [response.effect]
   *   Override the default value of {@link Drupal.Ajax#elementSettings}.
   * @param {string|number} [response.speed]
   *   Override the default value of {@link Drupal.Ajax#elementSettings}.
   *
   * @return {object}
   *   Returns an object with `showEffect`, `hideEffect` and `showSpeed`
   *   properties.
   */
  Drupal.Ajax.prototype.getEffect = function (response) {
    const type = response.effect || this.effect;
    const speed = response.speed || this.speed;

    const effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = `${type}Toggle`;
      effect.hideEffect = `${type}Toggle`;
      effect.showSpeed = speed;
    }

    return effect;
  };

  /**
   * Handler for the form redirection error.
   *
   * @param {object} xmlhttprequest
   *   Native XMLHttpRequest object.
   * @param {string} uri
   *   Ajax Request URI.
   * @param {string} [customMessage]
   *   Extra message to print with the Ajax error.
   */
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    // Undo hide.
    $(this.wrapper).show();
    // Re-enable the element.
    $(this.element).prop('disabled', false);
    // Reattach behaviors, if they were detached in beforeSerialize(), and the
    // form is still part of the document.
    if (this.$form && document.body.contains(this.$form.get(0))) {
      const settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  /**
   * Provide a wrapper for new content via Ajax.
   *
   * Wrap the inserted markup when inserting multiple root elements with an
   * ajax effect.
   *
   * @param {jQuery} $newContent
   *   Response elements after parsing.
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   The response from the Ajax request.
   *
   * @deprecated in drupal:8.6.0 and is removed from drupal:10.0.0.
   *   Use data with desired wrapper.
   *
   * @see https://www.drupal.org/node/2940704
   *
   * @todo Add deprecation warning after it is possible. For more information
   *   see: https://www.drupal.org/project/drupal/issues/2973400
   */
  Drupal.theme.ajaxWrapperNewContent = ($newContent, ajax, response) =>
    (response.effect || ajax.effect) !== 'none' &&
    $newContent.filter(
      (i) =>
        !(
          // We can not consider HTML comments or whitespace text as separate
          // roots, since they do not cause visual regression with effect.
          (
            $newContent[i].nodeName === '#comment' ||
            ($newContent[i].nodeName === '#text' &&
              /^(\s|\n|\r)*$/.test($newContent[i].textContent))
          )
        ),
    ).length > 1
      ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent)
      : $newContent;

  /**
   * Provide a wrapper for multiple root elements via Ajax.
   *
   * @param {jQuery} $elements
   *   Response elements after parsing.
   *
   * @deprecated in drupal:8.6.0 and is removed from drupal:10.0.0.
   *   Use data with desired wrapper.
   *
   * @see https://www.drupal.org/node/2940704
   *
   * @todo Add deprecation warning after it is possible. For more information
   *   see: https://www.drupal.org/project/drupal/issues/2973400
   */
  Drupal.theme.ajaxWrapperMultipleRootElements = ($elements) =>
    $('<div></div>').append($elements);

  /**
   * @typedef {object} Drupal.AjaxCommands~commandDefinition
   *
   * @prop {string} command
   * @prop {string} [method]
   * @prop {string} [selector]
   * @prop {string} [data]
   * @prop {object} [settings]
   * @prop {boolean} [asterisk]
   * @prop {string} [text]
   * @prop {string} [title]
   * @prop {string} [url]
   * @prop {object} [argument]
   * @prop {string} [name]
   * @prop {string} [value]
   * @prop {string} [old]
   * @prop {string} [new]
   * @prop {boolean} [merge]
   * @prop {Array} [args]
   *
   * @see Drupal.AjaxCommands
   */

  /**
   * Provide a series of commands that the client will perform.
   *
   * @constructor
   */
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    /**
     * Command to insert new content into the DOM.
     *
     * @param {Drupal.Ajax} ajax
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   The data to use with the jQuery method.
     * @param {string} [response.method]
     *   The jQuery DOM manipulation method to be used.
     * @param {string} [response.selector]
     *   An optional jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     */
    insert(ajax, response) {
      // Get information from the response. If it is not there, default to
      // our presets.
      const $wrapper = response.selector
        ? $(response.selector)
        : $(ajax.wrapper);
      const method = response.method || ajax.method;
      const effect = ajax.getEffect(response);

      // Apply any settings from the returned JSON if available.
      const settings = response.settings || ajax.settings || drupalSettings;

      // Parse response.data into an element collection.
      let $newContent = $($.parseHTML(response.data, document, true));
      // For backward compatibility, in some cases a wrapper will be added. This
      // behavior will be removed before Drupal 9.0.0. If different behavior is
      // needed, the theme functions can be overridden.
      // @see https://www.drupal.org/node/2940704
      $newContent = Drupal.theme(
        'ajaxWrapperNewContent',
        $newContent,
        ajax,
        response,
      );

      // If removing content from the wrapper, detach behaviors first.
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      // Add the new content to the page.
      $wrapper[method]($newContent);

      // Immediately hide the new content if we're using any effects.
      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      // Determine which effect to use and what content will receive the
      // effect, then show the new content.
      const $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      // Attach all JavaScript behaviors to the new content, if it was
      // successfully added to the page, this if statement allows
      // `#ajax['wrapper']` to be optional.
      if ($newContent.parents('html').length) {
        // Attach behaviors to all element nodes.
        $newContent.each((index, element) => {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },

    /**
     * Command to remove a chunk from the page.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    remove(ajax, response, status) {
      const settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector)
        .each(function () {
          Drupal.detachBehaviors(this, settings);
        })
        .remove();
    },

    /**
     * Command to mark a chunk changed.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response object from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {boolean} [response.asterisk]
     *   An optional CSS selector. If specified, an asterisk will be
     *   appended to the HTML inside the provided selector.
     * @param {number} [status]
     *   The request status.
     */
    changed(ajax, response, status) {
      const $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element
            .find(response.asterisk)
            .append(
              ` <abbr class="ajax-changed" title="${Drupal.t(
                'Changed',
              )}">*</abbr> `,
            );
        }
      }
    },

    /**
     * Command to provide an alert.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} response.text
     *   The text that will be displayed in an alert dialog.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    alert(ajax, response, status) {
      window.alert(response.text);
    },

    /**
     * Command to provide triggers audio UAs to read the supplied text.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} [response.text]
     *   The text that will be read.
     * @param {string} [response.priority]
     *   An optional priority that will be used for the announcement.
     */
    announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },

    /**
     * Command to set the window.location, redirecting the browser.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.url
     *   The URL to redirect to.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    redirect(ajax, response, status) {
      window.location = response.url;
    },

    /**
     * Command to provide the jQuery css() function.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} response.argument
     *   An array of key/value pairs to set in the CSS for the selector.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },

    /**
     * Command to set the settings used for other commands in this response.
     *
     * This method will also remove expired `drupalSettings.ajax` settings.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {boolean} response.merge
     *   Determines whether the additional settings should be merged to the
     *   global settings.
     * @param {object} response.settings
     *   Contains additional settings to add to the global settings.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    settings(ajax, response, status) {
      const ajaxSettings = drupalSettings.ajax;

      // Clean up drupalSettings.ajax.
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach((instance) => {
          // If the Ajax object has been created through drupalSettings.ajax
          // it will have a selector. When there is no selector the object
          // has been initialized with a special class name picked up by the
          // Ajax behavior.

          if (instance.selector) {
            const selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },

    /**
     * Command to attach data using jQuery's data API.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.name
     *   The name or key (in the key value pair) of the data attached to this
     *   selector.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {string|object} response.value
     *   The value of to be attached.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },

    /**
     * Command to focus the first tabbable element within a container.
     *
     * If no tabbable elements are found and the container is focusable, then
     * focus will move to that container.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A query selector string of the container to focus within.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    focusFirst(ajax, response, status) {
      let focusChanged = false;
      const container = document.querySelector(response.selector);
      if (container) {
        // Find all tabbable elements within the container.
        const tabbableElements = tabbable(container);

        // Move focus to the first tabbable item found.
        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          // If no tabbable elements are found, but the container is focusable,
          // move focus to the container.
          container.focus();
          focusChanged = true;
        }
      }

      // If no items were available to receive focus, return focus to the
      // triggering element.
      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },

    /**
     * Command to apply a jQuery method.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.args
     *   An array of arguments to the jQuery method, if any.
     * @param {string} response.method
     *   The jQuery method to invoke.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    invoke(ajax, response, status) {
      const $element = $(response.selector);
      $element[response.method](...response.args);
    },

    /**
     * Command to restripe a table.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    restripe(ajax, response, status) {
      // :even and :odd are reversed because jQuery counts from 0 and
      // we count from 1, so we're out of sync.
      // Match immediate children of the parent element to allow nesting.
      $(response.selector)
        .find('> tbody > tr:visible, > tr:visible')
        .removeClass('odd even')
        .filter(':even')
        .addClass('odd')
        .end()
        .filter(':odd')
        .addClass('even');
    },

    /**
     * Command to update a form's build ID.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.old
     *   The old form build ID.
     * @param {string} response.new
     *   The new form build ID.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    update_build_id(ajax, response, status) {
      document
        .querySelectorAll(
          `input[name="form_build_id"][value="${response.old}"]`,
        )
        .forEach((item) => {
          item.value = response.new;
        });
    },

    /**
     * Command to add css.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   A string that contains the styles to be added.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },

    /**
     * Command to add a message to the message area.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.messageWrapperQuerySelector
     *   The zone where to add the message. If null, the default will be used.
     * @param {string} response.message
     *   The message text.
     * @param {string} response.messageOptions
     *   The options argument for Drupal.Message().add().
     * @param {boolean} response.clearPrevious
     *   If true, clear previous messages.
     */
    message(ajax, response) {
      const messages = new Drupal.Message(
        document.querySelector(response.messageWrapperQuerySelector),
      );
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    },

    /**
     * Command to add JS.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.data
     *   An array of objects of script attributes.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_js(ajax, response, status) {
      const parentEl = document.querySelector(response.selector || 'body');
      const settings = ajax.settings || drupalSettings;
      const allUniqueBundleIds = response.data.map((script) => {
        // loadjs requires a unique ID, and an AJAX instance's `instanceIndex`
        // is guaranteed to be unique.
        // @see Drupal.behaviors.AJAX.detach
        const uniqueBundleId = script.src + ajax.instanceIndex;
        loadjs(script.src, uniqueBundleId, {
          // The default loadjs behavior is to load script with async, in Drupal
          // we need to explicitly tell scripts to load async, this is set in
          // the before callback below if necessary.
          async: false,
          before(path, scriptEl) {
            // This allows all attributes to be added, like defer, async and
            // crossorigin.
            Object.keys(script).forEach((attributeKey) => {
              scriptEl.setAttribute(attributeKey, script[attributeKey]);
            });

            // By default, loadjs appends the script to the head. When scripts
            // are loaded via AJAX, their location has no impact on
            // functionality. But, since non-AJAX loaded scripts can choose
            // their parent element, we provide that option here for the sake of
            // consistency.
            parentEl.appendChild(scriptEl);
            // Return false to bypass loadjs' default DOM insertion mechanism.
            return false;
          },
        });
        return uniqueBundleId;
      });
      // Returns the promise so that the next AJAX command waits on the
      // completion of this one to execute, ensuring the JS is loaded before
      // executing.
      return new Promise((resolve, reject) => {
        loadjs.ready(allUniqueBundleIds, {
          success() {
            Drupal.attachBehaviors(parentEl, settings);
            // All JS files were loaded and new and old behaviors have
            // been attached. Resolve the promise and let the remaining
            // commands execute.
            resolve();
          },
          error(depsNotFound) {
            const message = Drupal.t(
              `The following files could not be loaded: @dependencies`,
              { '@dependencies': depsNotFound.join(', ') },
            );
            reject(message);
          },
        });
      });
    },
  };

  /**
   * Delay jQuery's global completion events until after commands have executed.
   *
   * jQuery triggers the ajaxSuccess, ajaxComplete, and ajaxStop events after
   * a successful response is returned and local success and complete events
   * are triggered. However, Drupal Ajax responses contain commands that run
   * asynchronously in a queue, so the following stops these events from getting
   * triggered until after the Promise that executes the command queue is
   * resolved.
   */
  const stopEvent = (xhr, settings) => {
    return (
      // Only interfere with Drupal's Ajax responses.
      xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' &&
      // The isInProgress() function might not be defined if the Ajax request
      // was initiated without Drupal.ajax() or new Drupal.Ajax().
      settings.isInProgress &&
      // Until this is false, the Ajax request isn't completely done (the
      // response's commands might still be running).
      settings.isInProgress()
    );
  };
  $.extend(true, $.event.special, {
    ajaxSuccess: {
      trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          return false;
        }
      },
    },
    ajaxComplete: {
      trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          // jQuery decrements its internal active ajax counter even when we
          // stop the ajaxComplete event, but we don't want that counter
          // decremented, because for our purposes this request is still active
          // while commands are executing. By incrementing it here, the net
          // effect is that it remains unchanged. By remaining above 0, the
          // ajaxStop event is also prevented.
          $.active++;
          return false;
        }
      },
    },
  });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);
;
/**
 * @file
 * Some basic behaviors and utility functions for Views.
 */

(function ($, Drupal, drupalSettings) {
  /**
   * @namespace
   */
  Drupal.Views = {};

  /**
   * Helper function to parse a querystring.
   *
   * @param {string} query
   *   The querystring to parse.
   *
   * @return {object}
   *   A map of query parameters.
   */
  Drupal.Views.parseQueryString = function (query) {
    const args = {};
    const pos = query.indexOf('?');
    if (pos !== -1) {
      query = query.substring(pos + 1);
    }
    let pair;
    const pairs = query.split('&');
    for (let i = 0; i < pairs.length; i++) {
      pair = pairs[i].split('=');
      // Ignore the 'q' path argument, if present.
      if (pair[0] !== 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] =
          decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
    return args;
  };

  /**
   * Helper function to return a view's arguments based on a path.
   *
   * @param {string} href
   *   The href to check.
   * @param {string} viewPath
   *   The views path to check.
   *
   * @return {object}
   *   An object containing `view_args` and `view_path`.
   */
  Drupal.Views.parseViewArgs = function (href, viewPath) {
    const returnObj = {};
    const path = Drupal.Views.getPath(href);
    // Get viewPath url without baseUrl portion.
    const viewHref = Drupal.url(viewPath).substring(
      drupalSettings.path.baseUrl.length,
    );
    // Ensure we have a correct path.
    if (viewHref && path.substring(0, viewHref.length + 1) === `${viewHref}/`) {
      returnObj.view_args = decodeURIComponent(
        path.substring(viewHref.length + 1, path.length),
      );
      returnObj.view_path = path;
    }
    return returnObj;
  };

  /**
   * Strip off the protocol plus domain from an href.
   *
   * @param {string} href
   *   The href to strip.
   *
   * @return {string}
   *   The href without the protocol and domain.
   */
  Drupal.Views.pathPortion = function (href) {
    // Remove e.g. http://example.com if present.
    const protocol = window.location.protocol;
    if (href.substring(0, protocol.length) === protocol) {
      // 2 is the length of the '//' that normally follows the protocol.
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };

  /**
   * Return the Drupal path portion of an href.
   *
   * @param {string} href
   *   The href to check.
   *
   * @return {string}
   *   An internal path.
   */
  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(drupalSettings.path.baseUrl.length, href.length);
    // 3 is the length of the '?q=' added to the url without clean urls.
    if (href.substring(0, 3) === '?q=') {
      href = href.substring(3, href.length);
    }
    const chars = ['#', '?', '&'];
    for (let i = 0; i < chars.length; i++) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Handles AJAX fetching of views, including filter submission and response.
 */

(function ($, Drupal, drupalSettings) {
  /**
   * Attaches the AJAX behavior to exposed filters forms and key View links.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches ajaxView functionality to relevant elements.
   */
  Drupal.behaviors.ViewsAjaxView = {};
  Drupal.behaviors.ViewsAjaxView.attach = function (context, settings) {
    if (settings && settings.views && settings.views.ajaxViews) {
      const {
        views: { ajaxViews },
      } = settings;
      Object.keys(ajaxViews || {}).forEach((i) => {
        Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
      });
    }
  };
  Drupal.behaviors.ViewsAjaxView.detach = (context, settings, trigger) => {
    if (trigger === 'unload') {
      if (settings && settings.views && settings.views.ajaxViews) {
        const {
          views: { ajaxViews },
        } = settings;
        Object.keys(ajaxViews || {}).forEach((i) => {
          const selector = `.js-view-dom-id-${ajaxViews[i].view_dom_id}`;
          if ($(selector, context).length) {
            delete Drupal.views.instances[i];
            delete settings.views.ajaxViews[i];
          }
        });
      }
    }
  };

  /**
   * @namespace
   */
  Drupal.views = {};

  /**
   * @type {object.<string, Drupal.views.ajaxView>}
   */
  Drupal.views.instances = {};

  /**
   * JavaScript object for a certain view.
   *
   * @constructor
   *
   * @param {object} settings
   *   Settings object for the ajax view.
   * @param {string} settings.view_dom_id
   *   The DOM id of the view.
   */
  Drupal.views.ajaxView = function (settings) {
    const selector = `.js-view-dom-id-${settings.view_dom_id}`;
    this.$view = $(selector);

    // Retrieve the path to use for views' ajax.
    let ajaxPath = drupalSettings.views.ajax_path;

    // If there are multiple views this might've ended up showing up multiple
    // times.
    if (ajaxPath.constructor.toString().indexOf('Array') !== -1) {
      ajaxPath = ajaxPath[0];
    }

    // Check if there are any GET parameters to send to views.
    let queryString = window.location.search || '';
    if (queryString !== '') {
      // Remove the question mark and Drupal path component if any.
      queryString = queryString
        .slice(1)
        .replace(/q=[^&]+&?|&?render=[^&]+/, '');
      if (queryString !== '') {
        // If there is a '?' in ajaxPath, clean url are on and & should be
        // used to add parameters.
        queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
      }
    }

    this.element_settings = {
      url: ajaxPath + queryString,
      submit: settings,
      setClick: true,
      event: 'click',
      selector,
      progress: { type: 'fullscreen' },
    };

    this.settings = settings;

    // Add the ajax to exposed forms.
    this.$exposed_form = $(
      `form#views-exposed-form-${settings.view_name.replace(
        /_/g,
        '-',
      )}-${settings.view_display_id.replace(/_/g, '-')}`,
    );
    once('exposed-form', this.$exposed_form).forEach(
      $.proxy(this.attachExposedFormAjax, this),
    );

    // Add the ajax to pagers.
    once(
      'ajax-pager',
      this.$view
        // Don't attach to nested views. Doing so would attach multiple behaviors
        // to a given element.
        .filter($.proxy(this.filterNestedViews, this)),
    ).forEach($.proxy(this.attachPagerAjax, this));

    // Add a trigger to update this view specifically. In order to trigger a
    // refresh use the following code.
    //
    // @code
    // $('.view-name').trigger('RefreshView');
    // @endcode
    const selfSettings = $.extend({}, this.element_settings, {
      event: 'RefreshView',
      base: this.selector,
      element: this.$view.get(0),
    });
    this.refreshViewAjax = Drupal.ajax(selfSettings);
  };

  /**
   * @method
   */
  Drupal.views.ajaxView.prototype.attachExposedFormAjax = function () {
    const that = this;
    this.exposedFormAjax = [];
    // Exclude the reset buttons so no AJAX behaviors are bound. Many things
    // break during the form reset phase if using AJAX.
    $(
      'input[type=submit], button[type=submit], input[type=image]',
      this.$exposed_form,
    )
      .not('[data-drupal-selector=edit-reset]')
      .each(function (index) {
        const selfSettings = $.extend({}, that.element_settings, {
          base: $(this).attr('id'),
          element: this,
        });
        that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
      });
  };

  /**
   * @return {boolean}
   *   If there is at least one parent with a view class return false.
   */
  Drupal.views.ajaxView.prototype.filterNestedViews = function () {
    // If there is at least one parent with a view class, this view
    // is nested (e.g., an attachment). Bail.
    return !this.$view.parents('.view').length;
  };

  /**
   * Attach the ajax behavior to each link.
   */
  Drupal.views.ajaxView.prototype.attachPagerAjax = function () {
    this.$view
      .find(
        'ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a',
      )
      .each($.proxy(this.attachPagerLinkAjax, this));
  };

  /**
   * Attach the ajax behavior to a singe link.
   *
   * @param {string} [id]
   *   The ID of the link.
   * @param {HTMLElement} link
   *   The link element.
   */
  Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function (id, link) {
    const $link = $(link);
    const viewData = {};
    const href = $link.attr('href');
    // Construct an object using the settings defaults and then overriding
    // with data specific to the link.
    $.extend(
      viewData,
      this.settings,
      Drupal.Views.parseQueryString(href),
      // Extract argument data from the URL.
      Drupal.Views.parseViewArgs(href, this.settings.view_base_path),
    );

    const selfSettings = $.extend({}, this.element_settings, {
      submit: viewData,
      base: false,
      element: link,
    });
    this.pagerAjax = Drupal.ajax(selfSettings);
  };

  /**
   * Views scroll to top ajax command.
   *
   * @param {Drupal.Ajax} [ajax]
   *   A {@link Drupal.ajax} object.
   * @param {object} response
   *   Ajax response.
   * @param {string} response.selector
   *   Selector to use.
   */
  Drupal.AjaxCommands.prototype.viewsScrollTop = function (ajax, response) {
    // Scroll to the top of the view. This will allow users
    // to browse newly loaded content after e.g. clicking a pager
    // link.
    const offset = $(response.selector).offset();
    // We can't guarantee that the scrollable object should be
    // the body, as the view could be embedded in something
    // more complex such as a modal popup. Recurse up the DOM
    // and scroll the first element that has a non-zero top.
    let scrollTarget = response.selector;
    while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
      scrollTarget = $(scrollTarget).parent();
    }
    // Only scroll upward.
    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
      $(scrollTarget).animate({ scrollTop: offset.top - 10 }, 500);
    }
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * better_exposed_filters.js
 *
 * Provides some client-side functionality for the Better Exposed Filters module.
 */

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.betterExposedFilters = {
    attach: function (context, settings) {
      // Add highlight class to checked checkboxes for better theming.
      $('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]')
        // Highlight newly selected checkboxes.
        .change(function () {
          _bef_highlight(this, context);
        })
        .filter(':checked').closest('.form-item', context).addClass('highlight');
    }
  };

  /*
   * Helper functions
   */

  /**
   * Adds/Removes the highlight class from the form-item div as appropriate.
   */
  function _bef_highlight(elem, context) {
    $elem = $(elem, context);
    $elem.attr('checked')
      ? $elem.closest('.form-item', context).addClass('highlight')
      : $elem.closest('.form-item', context).removeClass('highlight');
  }

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Renders BigPipe placeholders using Drupal's Ajax system.
 */

(function (Drupal, drupalSettings) {
  /**
   * Maps textContent of <script type="application/vnd.drupal-ajax"> to an AJAX response.
   *
   * @param {string} content
   *   The text content of a <script type="application/vnd.drupal-ajax"> DOM node.
   * @return {Array|boolean}
   *   The parsed Ajax response containing an array of Ajax commands, or false in
   *   case the DOM node hasn't fully arrived yet.
   */
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  /**
   * Executes Ajax commands in <script type="application/vnd.drupal-ajax"> tag.
   *
   * These Ajax commands replace placeholders with HTML and load missing CSS/JS.
   *
   * @param {HTMLScriptElement} placeholderReplacement
   *   Script tag created by BigPipe.
   */
  function bigPipeProcessPlaceholderReplacement(placeholderReplacement) {
    const placeholderId = placeholderReplacement.getAttribute(
      'data-big-pipe-replacement-for-placeholder-with-id',
    );
    const content = placeholderReplacement.textContent.trim();
    // Ignore any placeholders that are not in the known placeholder list. Used
    // to avoid someone trying to XSS the site via the placeholdering mechanism.
    if (
      typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined'
    ) {
      const response = mapTextContentToAjaxResponse(content);
      // If we try to parse the content too early (when the JSON containing Ajax
      // commands is still arriving), textContent will be empty or incomplete.
      if (response === false) {
        /**
         * Mark as unprocessed so this will be retried later.
         * @see bigPipeProcessDocument()
         */
        once.remove('big-pipe', placeholderReplacement);
      } else {
        // Create a Drupal.Ajax object without associating an element, a
        // progress indicator or a URL.
        const ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false,
        });
        // Then, simulate an AJAX response having arrived, and let the Ajax
        // system handle it.
        ajaxObject.success(response, 'success');
      }
    }
  }

  // The frequency with which to check for newly arrived BigPipe placeholders.
  // Hence 50 ms means we check 20 times per second. Setting this to 100 ms or
  // more would cause the user to see content appear noticeably slower.
  const interval = drupalSettings.bigPipeInterval || 50;

  // The internal ID to contain the watcher service.
  let timeoutID;

  /**
   * Processes a streamed HTML document receiving placeholder replacements.
   *
   * @param {HTMLDocument} context
   *   The HTML document containing <script type="application/vnd.drupal-ajax">
   *   tags generated by BigPipe.
   *
   * @return {bool}
   *   Returns true when processing has been finished and a stop signal has been
   *   found.
   */
  function bigPipeProcessDocument(context) {
    // Make sure we have BigPipe-related scripts before processing further.
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    // Attach Drupal behaviors early, if possible.
    once('big-pipe-early-behaviors', 'body', context).forEach((el) => {
      Drupal.attachBehaviors(el);
    });

    once(
      'big-pipe',
      'script[data-big-pipe-replacement-for-placeholder-with-id]',
      context,
    ).forEach(bigPipeProcessPlaceholderReplacement);

    // If we see the stop signal, clear the timeout: all placeholder
    // replacements are guaranteed to be received and processed.
    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(() => {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();

  // If something goes wrong, make sure everything is cleaned up and has had a
  // chance to be processed with everything loaded.
  window.addEventListener('load', () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    bigPipeProcessDocument(document);
  });
})(Drupal, drupalSettings);
;
