!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t},a=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.RequestWidget=void 0;const c=o(n(1)),s=n(2),u=n(4);n(5),t.RequestWidget=e=>{let[t,n]=c.useState(!1),[i,r]=c.useState(""),[o,s]=c.useState(""),l=u.useToast();return c.createElement(u.WidgetWrapper,{className:"simple-request-button"},c.createElement("div",{style:{cursor:"pointer",flex:1,display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>n(!0)},c.createElement("div",{className:"icon"})),t&&function(){return c.createElement(u.Modal,{className:"simple-request",title:"Register Request",show:t,onClose:()=>n(!1)},c.createElement("div",{style:{width:"600px",marginLeft:"auto",marginRight:"auto",flex:1,flexDirection:"column",justifyContent:"flex-start",padding:"20px",alignItems:"space-between",display:"flex"}},c.createElement("div",{style:{padding:"10px"}},c.createElement(u.Input,{value:o,onChange:e=>s(e),placeholder:"Give us a summary"})),c.createElement("div",{style:{padding:"10px"}},c.createElement("textarea",{rows:5,className:"sr",value:i,onChange:e=>r(e.target.value),placeholder:"Tell us about your problem in depth"})),c.createElement(u.AsyncButton,{title:"Submit",onClick:()=>a(this,void 0,void 0,(function*(){return yield function(){return a(this,void 0,void 0,(function*(){try{if(!o)throw"Please specify a subject";if(!i)throw"Please specify a description";yield e.uxpContext.executeAction("SimpleRequest","RegisterRequest",{subject:o,description:i},{json:!0});n(!1),s(""),r(""),l.success("Submitted")}catch(e){l.error(e)}}))}()}))})))}())},s.registerWidget({id:"simple-request",name:"Simple Request",widget:t.RequestWidget,configs:{layout:{}}})},function(e,t){e.exports=React},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.registerUI=t.registerLink=t.registerWidget=void 0;const r=i(n(3));t.registerWidget=function(e){let t=Object.assign({},e,{id:(r.default.id+"/widget/"+e.id).toLowerCase()});window.registerWidget?window.registerWidget(t):console.error("This code is not being run within the context of UXP")},t.registerLink=function(e){let t=Object.assign({},e,{id:(r.default.id+"/sidebarlink/"+e.id).toLowerCase()});window.registerLink?(console.log("registering link....",t.id),window.registerLink(t)):console.error("This is not is not being run within the UXP context")},t.registerUI=function(e){let t=Object.assign({},e,{id:(r.default.id+"/ui/"+e.id).toLowerCase()});window.registerUI?(console.log("registering link....",t.id),window.registerUI(t)):console.error("This is not is not being run within the UXP context")}},function(e){e.exports=JSON.parse('{"id":"e1331fc4-4063-4a4e-c35b-ee440c42c86e","author":"eutech","widgets":[{"id":"simple-request","title":"Simple Request","description":"A UI to accept a simple request or complaint from a user"}]}')},function(e,t){e.exports=UXPComponents},function(e,t,n){var i=n(6),r=n(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=c(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:b(f,t),references:1}),i.push(l)}return i}function u(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var g=null,m=0;function b(e,t){var n,i,r;if(t.singleton){var o=m++;n=g||(g=u(t)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=u(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=c(n[i]);a[r].references--}for(var o=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},function(e,t,n){(t=n(8)(!1)).push([e.i,".simple-request textarea.sr{width:100%;height:auto;border:none;outline:none;padding:15px 20px;border-radius:10px;font-size:12px;color:#424242;background-color:#f8f8f8;transition:0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),0.3s box-shadow,0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12)}.simple-request .modal-panel{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTU5OSIgaGVpZ2h0PSIyNTcuODkiIHZpZXdCb3g9IjAgMCAxNTk5IDI1Ny44OSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuMjc4IiB5MT0iLTAuMTA0IiB4Mj0iMC44ODUiIHkyPSIwLjY2NyIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1NzUyYzkiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzk1MjdiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cGF0aCBpZD0iUGF0aF8xMzY2MCIgZGF0YS1uYW1lPSJQYXRoIDEzNjYwIiBkPSJNMC0xMzguMjA2UzQ4LjA3Miw0MS45NjEsMzQ1LjcxMiwxNS4yODVzNjIxLjU3OCw5MC42NzMsODc0LjMzNCw2NC40MzRTMTU5OS0yOC4zODYsMTU5OS0yOC4zODZ2MTQ4LjA3SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEzOC4yMDYpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KPC9zdmc+Cg==);background-position:0% 100%;background-repeat:no-repeat;background-size:contain}.simple-request-button{flex:1}.simple-request-button .icon{background-image:url(https://static.iviva.com/images/lift_widget/pending_requests.svg);width:33%;height:33%;background-size:contain;background-position:center;background-repeat:no-repeat}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}}]);
//# sourceMappingURL=main.js.map