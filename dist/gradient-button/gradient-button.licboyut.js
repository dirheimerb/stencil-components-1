/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='gradient-button']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,e,t,o,i){"use strict";function c(n,e,t,o,i,c,l){let f=t.n+(o||W),u=t[f];if(u||(u=t[f=t.n+W]),u){let o=e.e;if(e.t)if(1===t.encapsulation)o=i.shadowRoot;else for(;i=e.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[f]){l=u.content.cloneNode(!0);const t=o.querySelectorAll("[data-styles]");e.c(o,l,t.length&&t[t.length-1].nextSibling||o.l),c[f]=!0,n.i.set(o,c)}}}function l(n){return{f:n[0],u:n[1],r:!!n[2],s:!!n[3],a:!!n[4]}}function f(n,e){if(O(e)){if(n===Boolean||3===n)return"false"!==e&&(""===e||!!e);if(n===Number||4===n)return parseFloat(e)}return e}function u(n,e,t,o){const i=n.p.get(e);i&&((o=i.$activeLoading)&&((t=o.indexOf(e))>-1&&o.splice(t,1),!o.length&&i.$initLoad()),n.p.delete(e))}function r(n,e,t){let o,i=!1,c=!1;for(var l=arguments.length;l-- >2;)A.push(arguments[l]);for(;A.length;)if((t=A.pop())&&void 0!==t.pop)for(l=t.length;l--;)A.push(t[l]);else"boolean"==typeof t&&(t=null),(c="function"!=typeof n)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(c=!1)),c&&i?o[o.length-1].d+=t:void 0===o?o=[c?s(t):t]:o.push(c?s(t):t),i=c;const f=new L;if(f.m=n,f.y=o,e&&(f.b=e,f.w=e.v,f.M=e.ref,e.className&&(e.class=e.className),"object"==typeof e.class)){for(l in e.class)e.class[l]&&A.push(l);e.class=A.join(" "),A.length=0}return f}function s(n){const e=new L;return e.d=n,e}function a(n,e){n.k.has(e)||(n.k.set(e,!0),n.g.add(()=>{(function n(e,t,o,i,c){if(e.k.delete(t),!e.C.has(t)){let l;if(i=e.W.get(t),o=!i){if((c=e.p.get(t))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(e,t)});i=function l(n,e,t,o,i,c){try{(function l(n,e,t,o,i,c){for(c in n.N.set(o,t),n.j.has(t)||n.j.set(t,{}),(i=Object.assign({color:{type:String}},e.properties)).mode={type:String},i)d(n,i[c],t,o,c)})(n,o=n.S(e).O,e,t=new o),function f(n,e,t){if(e){const o=n.N.get(t);e.forEach(e=>{t[e.method]={emit:t=>{n.x(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:t})}}})}}(n,o.events,t)}catch(o){t={},n.T(o,7,e,!0)}return n.W.set(e,t),t}(e,t);try{i.componentWillLoad&&(l=i.componentWillLoad())}catch(n){e.T(n,3,t)}}l&&l.then?l.then(()=>p(e,t,i,o)):p(e,t,i,o)}})(n,e)},n.A?1:3))}function p(n,e,t,o){(function i(n,e,t,o,c){try{const i=e.O.host;if(o.render||o.hostData||i){n.L=!0;const i=o.render&&o.render();let l;n.L=!1;const f=n.P.get(t)||new L;f.R=t,n.P.set(t,n.render(f,r(null,l,i),c,n.q.get(t),n.B.get(t),e.O.encapsulation))}n.D(n,n.H,e,o.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}catch(e){n.L=!1,n.T(e,8,t,!0)}})(n,n.S(e),e,t,!o);try{o?e.$initLoad():M(n.P.get(e))}catch(t){n.T(t,6,e,!0)}}function d(n,e,t,o,i){if(e.type||e.state){const c=n.j.get(t);if(!e.state){if(e.attr&&(void 0===c[i]||""===c[i])){const o=n.H.F(t,e.attr);null!=o&&(c[i]=f(e.type,o))}t.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=t[i]),delete t[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),e.watchCallbacks&&(c[P+i]=e.watchCallbacks.slice()),y(o,i,function c(e){return(e=n.j.get(n.N.get(this)))&&e[i]},function l(t,o){(o=n.N.get(this))&&(e.state||e.mutable)&&m(n,o,i,t)})}else e.elementRef&&h(o,i,t)}function m(n,e,t,o,i,c,l){(i=n.j.get(e))||n.j.set(e,i={}),o!==i[t]&&(i[t]=o,n.W.get(e)&&(i[P+t],!n.L&&e.$rendered&&a(n,e)))}function h(n,e,t){Object.defineProperty(n,e,{configurable:!0,value:t})}function y(n,e,t,o){Object.defineProperty(n,e,{configurable:!0,get:t,set:o})}function b(n,e,t,o,i){const c=11===t.R.nodeType&&t.R.host?t.R.host:t.R,l=e&&e.b||E,f=t.b||E;for(i in l)f&&null!=f[i]||null==l[i]||w(n,c,i,l[i],void 0,o);for(i in f)i in l&&f[i]===("value"===i||"checked"===i?c[i]:l[i])||w(n,c,i,l[i],f[i],o)}function w(n,e,t,o,i,c,l,f){if("class"!==t||c)if("style"===t){for(l in o=o||E,i=i||E,o)i[l]||(e.style[l]="");for(l in i)i[l]!==o[l]&&(e.style[l]=i[l])}else if("o"!==t[0]||"n"!==t[1]||t in e)if("list"!==t&&"type"!==t&&!c&&(t in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.S(e);o&&o.z&&o.z[t]?v(e,t,i):"ref"!==t&&(v(e,t,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(t))}else null!=i&&(l=t!==(t=t.replace(/^xlink\:?/,"")),1!==R[t]||i&&"false"!==i?"function"!=typeof i&&(l?e.setAttributeNS(q,x(t),i):e.setAttribute(t,i)):l?e.removeAttributeNS(q,x(t)):e.removeAttribute(t));else t=x(t.substring(2)),i?i!==o&&n.H.I(e,t,i):n.H.Q(e,t);else if(o!==i){const n=null==o||""===o?N:o.trim().split(/\s+/),t=null==i||""===i?N:i.trim().split(/\s+/);let c=null==e.className||""===e.className?N:e.className.trim().split(/\s+/);for(l=0,f=n.length;l<f;l++)-1===t.indexOf(n[l])&&(c=c.filter(e=>e!==n[l]));for(l=0,f=t.length;l<f;l++)-1===n.indexOf(t[l])&&(c=[...c,t[l]]);e.className=c.join(" ")}}function v(n,e,t){try{n[e]=t}catch(n){}}function M(n,e){n&&(n.M&&n.M(e?null:n.R),n.y&&n.y.forEach(n=>{M(n,e)}))}function $(n,e,t,o,i){const c=n.U(e);let l,f,u,r;if(i&&1===c){(f=n.F(e,C))&&(u=f.split("."))[0]===o&&((r=new L).m=n.G(r.R=e),t.y||(t.y=[]),t.y[u[1]]=r,t=r,i=""!==u[2]);for(let c=0;c<e.childNodes.length;c++)$(n,e.childNodes[c],t,o,i)}else 3===c&&(l=e.previousSibling)&&8===n.U(l)&&"s"===(u=n.J(l).split("."))[0]&&u[1]===o&&((r=s(n.J(e))).R=e,t.y||(t.y=[]),t.y[u[2]]=r)}function k(n,e,t,o){return function(){const i=arguments;return function c(n,e,t){return new Promise(o=>{let i=e[t];i||(i=n.K.querySelector(t)),i||(i=e[t]=n.V(t),n.X(n.K,i)),i.componentOnReady(o)})}(n,e,t).then(n=>n[o].apply(n,i))}}const g="data-ssrv",C="data-ssrc",W="$",E={},N=[],j={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},O=n=>void 0!==n&&null!==n,S=n=>void 0===n||null===n,x=n=>n.toLowerCase(),T=()=>{},A=[];class L{}const P="wc-",R={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},q="http://www.w3.org/1999/xlink";let B=!1;(function D(e,t,o,i,s,p){const d={html:{}},w={},v=o[e]=o[e]||{},C=function E(n,e,t){n.Y||(n.Y=((n,e,t,o)=>n.addEventListener(e,t,o)),n.Z=((n,e,t,o)=>n.removeEventListener(e,t,o)));const o=new WeakMap,i={_:t.documentElement,e:t.head,K:t.body,nn:!1,U:n=>n.nodeType,V:n=>t.createElement(n),en:(n,e)=>t.createElementNS(n,e),tn:n=>t.createTextNode(n),on:n=>t.createComment(n),c:(n,e,t)=>n.insertBefore(e,t),in:n=>n.remove(),X:(n,e)=>n.appendChild(e),cn:n=>n.childNodes,o:n=>n.parentNode,ln:n=>n.nextSibling,G:n=>x(n.tagName),J:n=>n.textContent,fn:(n,e)=>n.textContent=e,F:(n,e)=>n.getAttribute(e),un:(n,e,t)=>n.setAttribute(e,t),rn:(n,e,t,o)=>n.setAttributeNS(e,t,o),sn:(n,e)=>n.removeAttribute(e),an:(n,o)=>"child"===o?n.firstElementChild:"parent"===o?i.pn(n):"body"===o?i.K:"document"===o?t:"window"===o?e:n,I:(e,t,c,l,f,u,r,s)=>{const a=t;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof u?p=i.an(e,u):"object"==typeof u?p=u:(s=t.split(":")).length>1&&(p=i.an(e,s[0]),t=s[1]),!p)return;let m=c;(s=t.split(".")).length>1&&(t=s[0],m=(n=>{n.keyCode===j[s[1]]&&c(n)})),r=i.nn?{capture:!!l,passive:!!f}:!!l,n.Y(p,t,m,r),d||o.set(e,d={}),d[a]=(()=>{p&&n.Z(p,t,m,r),d[a]=null})},Q:(n,e)=>{const t=o.get(n);t&&(e?t[e]&&t[e]():Object.keys(t).forEach(n=>{t[n]&&t[n]()}))},dn:(n,e)=>n.attachShadow(e)};i.t=!!i._.attachShadow,i.mn=((n,t,o)=>n&&n.dispatchEvent(new e.CustomEvent(t,o)));try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.nn=!0}))}catch(n){}return i.pn=((n,e)=>(e=i.o(n))&&11===i.U(e)?e.host:e),i}(v,o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=s,t.emit=((n,e,o)=>C.mn(n,t.eventNameFn?t.eventNameFn(e):e,o)),v.h=r,v.Context=t;const N=o.$definedCmps=o.$definedCmps||{},A={hn:function P(n,e){e.mode||(e.mode=C.F(e,"mode")||t.mode),C.F(e,g)||function o(n,e){return n&&1===e.encapsulation}(C.t,n)||function i(n,e,t,o,c,l,f,u,r){for(t.$defaultHolder||e.c(t,t.$defaultHolder=e.on(""),o[0]),r=0;r<o.length;r++)c=o[r],1===e.U(c)&&null!=(l=e.F(c,"slot"))?(u=u||{})[l]?u[l].push(c):u[l]=[c]:f?f.push(c):f=[c];n.q.set(t,f),n.B.set(t,u)}(A,C,e,e.childNodes),C.t||1!==n.encapsulation||(e.shadowRoot=e)},H:C,yn:function R(n,e){if(!N[n.n]){N[n.n]=!0,function t(n,e,o,i){o.connectedCallback=function(){(function t(n,e,o){n.C.delete(o),n.bn.has(o)||(n.bn.set(o,!0),function i(n,e,t){for(t=e;t=n.H.pn(t);)if(n.wn(t)){n.vn.has(e)||(n.p.set(e,t),(t.$activeLoading=t.$activeLoading||[]).push(e));break}}(n,o),n.g.add(()=>{n.hn(e,o),n.loadBundle(e,o.mode,()=>a(n,o))},3))})(n,e,this)},o.attributeChangedCallback=function(n,t,o){(function i(n,e,t,o,c,l){if(o!==c&&n)for(l in t=x(t),n)if(n[l].Mn===t){e[l]=f(n[l].$n,c);break}})(e.z,this,n,t,o)},o.disconnectedCallback=function(){(function e(n,t,o){!n.kn&&function i(n,e){for(;e;){if(!n.o(e))return 9!==n.U(e);e=n.o(e)}}(n.H,t)&&(n.C.set(t,!0),u(n,t),M(n.P.get(t),!0),n.H.Q(t),n.gn.delete(t))})(n,this)},o.componentOnReady=function(e,t){return e||(t=new Promise(n=>e=n)),function o(n,e,t,i){n.C.has(e)||(n.vn.has(e)?t(e):((i=n.Cn.get(e)||[]).push(t),n.Cn.set(e,i)))}(n,this,e),t},o.$initLoad=function(){(function e(n,t,o,i,c){if(!n.vn.has(t)&&n.W.get(t)&&!n.C.has(t)&&(!t.$activeLoading||!t.$activeLoading.length)){delete t.$activeLoading,n.vn.set(t,!0);try{M(n.P.get(t)),(c=n.Cn.get(t))&&(c.forEach(n=>n(t)),n.Cn.delete(t))}catch(e){n.T(e,4,t)}t.classList.add(o),u(n,t)}})(n,this,i)},o.forceUpdate=function(){a(n,this)},function c(n,e,t){e&&Object.keys(e).forEach(o=>{const i=e[o].Wn;1===i||2===i?y(t,o,function e(){return(n.j.get(this)||{})[o]},function e(t){m(n,this,o,t)}):6===i&&h(t,o,T)})}(n,e.z,o)}(A,n,e.prototype,p);{const t=[];for(const e in n.z)n.z[e].Mn&&t.push(n.z[e].Mn);e.observedAttributes=t}o.customElements.define(n.n,e)}},x:t.emit,S:n=>d[C.G(n)],En:n=>t[n],isClient:!0,wn:n=>!(!N[C.G(n)]&&!A.S(n)),loadBundle:function q(n,e,t){if(n.O)t();else{const o="string"==typeof n.Nn?n.Nn:n.Nn[e],i=s+o+(function o(n,e){return 2===e.encapsulation||1===e.encapsulation&&!n}(C.t,n)?".sc":"")+".js";import(i).then(e=>{try{n.O=e[(n=>x(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,e,t){const o=t.style;if(o){const i=t.is+(t.styleMode||W);if(!e[i]){const t=n.V("template");e[i]=t,t.innerHTML=`<style>${o}</style>`,n.X(n.e,t)}}}(C,n,n.O)}catch(e){n.O=class{}}t()}).catch(n=>void 0)}},T:(n,e,t)=>void 0,jn:n=>(function e(n,t,o){return{create:k(n,t,o,"create"),componentOnReady:k(n,t,o,"componentOnReady")}})(C,w,n),g:function D(e,t,o,i){function c(){for(;s.length>0;)s.shift()();o=!1}function l(n){for(n=u(),c();a.length>0&&u()-n<40;)a.shift()();(i=a.length>0)&&e.raf(f)}function f(n){for(c(),n=4+u();a.length>0&&u()<n;)a.shift()();(i=a.length>0)&&e.raf(l)}const u=()=>t.performance.now(),r=Promise.resolve(),s=[],a=[];return e.raf||(e.raf=n.requestAnimationFrame.bind(n)),{add:(n,t)=>{3===t?(s.push(n),o||(o=!0,r.then(c))):(a.push(n),i||(i=!0,e.raf(l)))}}}(v,o),p:new WeakMap,i:new WeakMap,q:new WeakMap,bn:new WeakMap,gn:new WeakMap,vn:new WeakMap,N:new WeakMap,W:new WeakMap,C:new WeakMap,k:new WeakMap,B:new WeakMap,Cn:new WeakMap,On:new WeakMap,P:new WeakMap,j:new WeakMap};A.render=function H(n,e){function t(o,i,l,f,u,r,m,h,y){if("function"==typeof o.m&&(o=o.m(Object.assign({},o.b,{Sn:o.y}))),!p&&"slot"===o.m){if((s||a)&&(d&&e.un(i,d+"-slot",""),m=o.b&&o.b.name,h=O(m)?a&&a[m]:s,O(h))){for(n.kn=!0,f=0;f<h.length;f++)r=h[f],e.in(r),e.X(i,r),8!==r.nodeType&&(y=!0);!y&&o.y&&c(i,[],o.y),n.kn=!1}return null}if(O(o.d))o.R=e.tn(o.d);else{u=o.R=e.V(o.m),b(n,null,o,B),null!==d&&u.xn!==d&&e.un(u,u.xn=d,"");const i=o.y;if(i)for(f=0;f<i.length;++f)(r=t(i[f],u))&&e.X(u,r)}return o.R}function o(n,o,i,c,l,f,u){const r=n.$defaultHolder&&e.o(n.$defaultHolder)||n;for(;c<=l;++c)u=i[c],O(u)&&(f=O(u.d)?e.tn(u.d):t(u,n),O(f)&&(u.R=f,e.c(r,f,o)))}function i(n,t,o){for(;t<=o;++t)O(n[t])&&e.in(n[t].R)}function c(n,c,r){let s,a,p,d,m=0,h=0,y=c.length-1,b=c[0],w=c[y],v=r.length-1,M=r[0],$=r[v];for(;m<=y&&h<=v;)null==b?b=c[++m]:null==w?w=c[--y]:null==M?M=r[++h]:null==$?$=r[--v]:l(b,M)?(u(b,M),b=c[++m],M=r[++h]):l(w,$)?(u(w,$),w=c[--y],$=r[--v]):l(b,$)?(u(b,$),e.c(n,b.R,e.ln(w.R)),b=c[++m],$=r[--v]):l(w,M)?(u(w,M),e.c(n,w.R,b.R),w=c[--y],M=r[++h]):(S(s)&&(s=f(c,m,y)),a=s[M.w],S(a)?(d=t(M,n),M=r[++h]):((p=c[a]).m!==M.m?d=t(M,n):(u(p,M),c[a]=void 0,d=p.R),M=r[++h]),d&&e.c(b.R&&b.R.parentNode||n,d,b.R));m>y?o(n,null==r[v+1]?null:r[v+1].R,r,h,v):h>v&&i(c,m,y)}function l(n,e){return n.m===e.m&&n.w===e.w}function f(n,e,t){const o={};let i,c,l;for(i=e;i<=t;++i)null!=(l=n[i])&&void 0!==(c=l.w)&&(o.Tn=i);return o}function u(t,l){const f=l.R=t.R,u=t.y,r=l.y;let s;if(S(l.d))"slot"!==l.m&&b(n,t,l,B),O(u)&&O(r)?c(f,u,r):O(r)?(O(t.d)&&e.fn(f,""),o(f,null,r,0,r.length-1)):O(u)&&i(u,0,u.length-1);else if(s=n.q.get(f)){const t=s[0].parentElement;e.fn(t,l.d),n.q.set(f,[t.childNodes[0]])}else t.d!==l.d&&e.fn(f,l.d)}let r,s,a,p,d;return function n(t,o,i,c,l,f,m){return r=i,s=c,a=l,d="scoped"===f||"shadow"===f&&!e.t?"data-"+e.G(t.R):null,p="shadow"===f&&e.t,r||(p?t.R=e.dn(t.R,{mode:"open"}):d&&e.un(t.R,d+"-host","")),u(t,o),o}}(A,C);const F=C._;F.$rendered=!0,F.$activeLoading=[],F.$initLoad=(()=>{A.vn.set(F,v.loaded=A.A=!0),C.mn(o,"appload",{detail:{namespace:e}})}),function z(n,e,t){const o=t.querySelectorAll(`[${g}]`),i=o.length;let c,l,f,u,r,s;if(i>0)for(n.vn.set(t,!0),u=0;u<i;u++)for(c=o[u],l=e.F(c,g),(f=new L).m=e.G(f.R=c),n.P.set(c,f),r=0,s=c.childNodes.length;r<s;r++)$(e,c.childNodes[r],f,l,!0)}(A,C,F),A.D=c,(v.components||[]).map(n=>(function e(n,t,o,i){const c={n:n[0],z:{color:{Mn:"color"}}};c.Nn=n[1];const f=n[3];if(f)for(o=0;o<f.length;o++)i=f[o],c.z[i[0]]={Wn:i[1],Mn:"string"==typeof i[2]?i[2]:i[2]?i[0]:0,$n:i[3]};return c.encapsulation=n[4],n[5]&&(c.An=n[5].map(l)),t[c.n]=c})(n,d)).forEach(n=>A.yn(n,class extends HTMLElement{})),v.initialized=!0,C.mn(n,"appinit",{detail:{namespace:e}})})(o,t,n,e,i,hydratedCssClass)})(window,document,Context,appNamespace,publicPath);
})({},"GradientButton","hydrated","/build/gradient-button/");