(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();var Ot=/([:*])(\w+)/g,At="([^/]+)",Pt=/\*/g,Rt="?(?:.*)",St=/\/\?/g,Ct="/?([^/]+|)",xt="(?:/^|^)",Tt="";function tt(t){return t===void 0&&(t="/"),M()?location.pathname+location.search+location.hash:t}function h(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function x(t){return typeof t=="string"}function Ft(t){return typeof t=="function"}function T(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function Ht(t,n){return n.length===0||!t?null:t.slice(1,t.length).reduce(function(e,a,r){return e===null&&(e={}),e[n[r]]=decodeURIComponent(a),e},null)}function F(t){var n=h(t).split(/\?(.*)?$/);return[h(n[0]),n.slice(1).join("")]}function $(t){for(var n={},e=t.split("&"),a=0;a<e.length;a++){var r=e[a].split("=");if(r[0]!==""){var o=decodeURIComponent(r[0]);n[o]?(Array.isArray(n[o])||(n[o]=[n[o]]),n[o].push(decodeURIComponent(r[1]||""))):n[o]=decodeURIComponent(r[1]||"")}}return n}function et(t,n){var e=F(h(t.currentLocationPath)),a=e[0],r=e[1],o=r===""?null:$(r),l=[],f;if(x(n.path)){if(f=xt+h(n.path).replace(Ot,function(L,b,O){return l.push(O),At}).replace(Pt,Rt).replace(St,Ct)+"$",h(n.path)===""&&h(a)==="")return{url:a,queryString:r,hashString:T(t.to),route:n,data:null,params:o}}else f=n.path;var g=new RegExp(f,Tt),p=a.match(g);if(p){var A=x(n.path)?Ht(p,l):p.groups?p.groups:p.slice(1);return{url:h(a.replace(new RegExp("^"+t.instance.root),"")),queryString:r,hashString:T(t.to),route:n,data:A,params:o}}return!1}function nt(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function E(t,n){return typeof t[n]>"u"||t[n]===!0}function jt(t){if(!t)return{};var n=t.split(","),e={},a;return n.forEach(function(r){var o=r.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(o[0]){case"historyAPIMethod":e.historyAPIMethod=o[1];break;case"resolveOptionsStrategy":a||(a={}),a.strategy=o[1];break;case"resolveOptionsHash":a||(a={}),a.hash=o[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":e[o[0]]=o[1]==="true";break}}),a&&(e.resolveOptions=a),e}function M(){return typeof window<"u"}function qt(t,n){return t===void 0&&(t=[]),n===void 0&&(n={}),t.filter(function(e){return e}).forEach(function(e){["before","after","already","leave"].forEach(function(a){e[a]&&(n[a]||(n[a]=[]),n[a].push(e[a]))})}),n}function m(t,n,e){var a=n||{},r=0;(function o(){if(!t[r]){e&&e(a);return}Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](a)?t[r][1]:t[r][2])),o()):t[r](a,function(l){typeof l>"u"||l===!0?(r+=1,o()):e&&e(a)})})()}m.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};function Y(t,n){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=tt(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function D(t,n){for(var e=0;e<t.instance.routes.length;e++){var a=t.instance.routes[e],r=et(t,a);if(r&&(t.matches||(t.matches=[]),t.matches.push(r),t.resolveOptions.strategy==="ONE")){n();return}}n()}function Dt(t,n){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function Nt(t,n){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}var K=M(),Ut=nt();function It(t,n){if(E(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),a=K&&t.resolveOptions&&t.resolveOptions.hash===!0;Ut?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",a?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!a){var r=location.hash;location.hash="",location.hash=r}t.instance.__freezeListening=!1},1))):K&&(window.location.href=t.to)}n()}function it(t,n){var e=t.instance;if(!e.lastResolved()){n();return}m(e.lastResolved().map(function(a){return function(r,o){if(!a.route.hooks||!a.route.hooks.leave){o();return}var l=!1,f=t.instance.matchLocation(a.route.path,t.currentLocationPath,!1);if(a.route.path!=="*")l=!f;else{var g=t.matches?t.matches.find(function(p){return a.route.path===p.route.path}):!1;l=!g}if(E(t.navigateOptions,"callHooks")&&l){m(a.route.hooks.leave.map(function(p){return function(A,L){return p(function(b){b===!1?t.instance.__markAsClean(t):L()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return o()}]));return}else o()}}),{},function(){return n()})}function $t(t,n){t.match.route.hooks&&t.match.route.hooks.before&&E(t.navigateOptions,"callHooks")?m(t.match.route.hooks.before.map(function(e){return function(r,o){return e(function(l){l===!1?t.instance.__markAsClean(t):o()},t.match)}}).concat([function(){return n()}])):n()}function Mt(t,n){E(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()}function Bt(t,n){t.match.route.hooks&&t.match.route.hooks.after&&E(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(e){return e(t.match)}),n()}function Wt(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString){e.forEach(function(a){a.route.hooks&&a.route.hooks.already&&E(t.navigateOptions,"callHooks")&&a.route.hooks.already.forEach(function(r){return r(t.match)})}),n(!1);return}n()}function zt(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var a=F(t.currentLocationPath),r=a[0],o=a[1],l=T(t.to);e.path=h(r);var f={url:e.path,queryString:o,hashString:l,data:null,route:e,params:o!==""?$(o):null};t.matches=[f],t.match=f}n()}function Gt(t,n){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),n()}function Vt(t,n){t.instance._setCurrent(null),n()}function at(t,n){E(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var rt=[Wt,$t,Mt,Bt],Q=[it,zt,m.if(function(t){var n=t.notFoundHandled;return n},rt.concat([at]),[Gt,Vt])];function U(){return U=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},U.apply(this,arguments)}function J(t,n){var e=0;function a(){if(e===t.matches.length){at(t,n);return}m(rt,U({},t,{match:t.matches[e]}),function(){e+=1,a()})}it(t,a)}function N(t){t.instance.__markAsClean(t)}function I(){return I=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},I.apply(this,arguments)}var Z="[data-navigo]";function Xt(t,n){var e=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Z},a=this,r="/",o=null,l=[],f=!1,g,p=nt(),A=M();t?r=h(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function L(i){return i.indexOf("#")>=0&&(e.hash===!0?i=i.split("#")[1]||"/":i=i.split("#")[0]),i}function b(i){return h(r+"/"+h(i))}function O(i,s,c,d){return i=x(i)?b(i):i,{name:d||h(String(i)),path:i,handler:s,hooks:qt(c)}}function ct(i,s,c){var d=this;return typeof i=="object"&&!(i instanceof RegExp)?(Object.keys(i).forEach(function(u){if(typeof i[u]=="function")d.on(u,i[u]);else{var v=i[u],P=v.uses,kt=v.as,Lt=v.hooks;l.push(O(u,P,[g,Lt],kt))}}),this):(typeof i=="function"&&(c=s,s=i,i=r),l.push(O(i,s,[g,c])),this)}function B(i,s){if(a.__dirty){a.__waiting.push(function(){return a.resolve(i,s)});return}else a.__dirty=!0;i=i?h(r)+"/"+h(i):void 0;var c={instance:a,to:i,currentLocationPath:i,navigateOptions:{},resolveOptions:I({},e,s)};return m([Y,D,m.if(function(d){var u=d.matches;return u&&u.length>0},J,Q)],c,N),c.matches?c.matches:!1}function W(i,s){if(a.__dirty){a.__waiting.push(function(){return a.navigate(i,s)});return}else a.__dirty=!0;i=h(r)+"/"+h(i);var c={instance:a,to:i,navigateOptions:s||{},resolveOptions:s&&s.resolveOptions?s.resolveOptions:e,currentLocationPath:L(i)};m([Dt,Nt,D,m.if(function(d){var u=d.matches;return u&&u.length>0},J,Q),It,N],c,N)}function lt(i,s,c){var d=G(i,s);return d!==null?(W(d.replace(new RegExp("^/?"+r),""),c),!0):!1}function ut(i){return this.routes=l=l.filter(function(s){return x(i)?h(s.path)!==h(i):Ft(i)?i!==s.handler:String(s.path)!==String(i)}),this}function dt(){p&&(this.__popstateListener=function(){a.__freezeListening||B()},window.addEventListener("popstate",this.__popstateListener))}function ht(){this.routes=l=[],p&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=f=!0}function ft(i,s){return a._notFoundRoute=O("*",i,[g,s],"__NOT_FOUND__"),this}function z(){if(A)return pt().forEach(function(i){if(i.getAttribute("data-navigo")==="false"||i.getAttribute("target")==="_blank"){i.hasListenerAttached&&i.removeEventListener("click",i.navigoHandler);return}i.hasListenerAttached||(i.hasListenerAttached=!0,i.navigoHandler=function(s){if((s.ctrlKey||s.metaKey)&&s.target.tagName.toLowerCase()==="a")return!1;var c=i.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var d=new URL(c);c=d.pathname+d.search}catch{}var u=jt(i.getAttribute("data-navigo-options"));f||(s.preventDefault(),s.stopPropagation(),a.navigate(h(c),u))},i.addEventListener("click",i.navigoHandler))}),a}function pt(){return A?[].slice.call(document.querySelectorAll(e.linksSelector||Z)):[]}function vt(i){return"/"+r+"/"+h(i)}function mt(i){return g=i,this}function gt(){return o}function G(i,s,c){var d=l.find(function(P){return P.name===i}),u=null;if(d){if(u=d.path,s)for(var v in s)u=u.replace(":"+v,s[v]);u=u.match(/^\//)?u:"/"+u}return u&&c&&!c.includeRoot&&(u=u.replace(new RegExp("^/"+r),"")),u}function bt(i){return i.getAttribute("href")}function V(i){var s=F(h(i)),c=s[0],d=s[1],u=d===""?null:$(d),v=T(i),P=O(c,function(){},[g],c);return{url:c,queryString:d,hashString:v,route:P,data:null,params:u}}function yt(){return V(h(tt(r)).replace(new RegExp("^"+r),""))}function _t(i){var s={instance:a,currentLocationPath:i,to:i,navigateOptions:{},resolveOptions:e};return D(s,function(){}),s.matches?s.matches:!1}function wt(i,s,c){typeof s<"u"&&(typeof c>"u"||c)&&(s=b(s));var d={instance:a,to:s,currentLocationPath:s};Y(d,function(){}),typeof i=="string"&&(i=typeof c>"u"||c?b(i):i);var u=et(d,{name:String(i),path:i,handler:function(){},hooks:{}});return u||!1}function C(i,s,c){return typeof s=="string"&&(s=X(s)),s?(s.hooks[i]||(s.hooks[i]=[]),s.hooks[i].push(c),function(){s.hooks[i]=s.hooks[i].filter(function(d){return d!==c})}):(console.warn("Route doesn't exists: "+s),function(){})}function X(i){return typeof i=="string"?l.find(function(s){return s.name===b(i)}):l.find(function(s){return s.handler===i})}function Et(i){i.instance.__dirty=!1,i.instance.__waiting.length>0&&i.instance.__waiting.shift()()}this.root=r,this.routes=l,this.destroyed=f,this.current=o,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Et,this.on=ct,this.off=ut,this.resolve=B,this.navigate=W,this.navigateByName=lt,this.destroy=ht,this.notFound=ft,this.updatePageLinks=z,this.link=vt,this.hooks=mt,this.extractGETParameters=function(i){return F(L(i))},this.lastResolved=gt,this.generate=G,this.getLinkPath=bt,this.match=_t,this.matchLocation=wt,this.getCurrentLocation=yt,this.addBeforeHook=C.bind(this,"before"),this.addAfterHook=C.bind(this,"after"),this.addAlreadyHook=C.bind(this,"already"),this.addLeaveHook=C.bind(this,"leave"),this.getRoute=X,this._pathToMatchObject=V,this._clean=h,this._checkForAHash=L,this._setCurrent=function(i){return o=a.current=i},dt.call(this),z.call(this)}const k=new Xt("/",{linksSelector:"a",hash:!0});let _=[],H=0,st=null,ot=null,y=[],j=0;const Yt=(t,n=100)=>{let e=null;return(...a)=>{e&&clearTimeout(e),e=setTimeout(()=>t(...a),n)}},R=(t,n)=>{n.innerHTML=t(),st=t,ot=n,_.forEach(e=>{e.cb()})},Kt=Yt(()=>{j=0,H=0,ot.innerHTML=st(),_.forEach(t=>{var e;(!t.nextDeps||((e=t.nextDeps)==null?void 0:e.some((a,r)=>{var o;return a!==((o=t==null?void 0:t.prevDeps)==null?void 0:o[r])})))&&t.cb()})}),q=t=>{let n,e=j;y[e]!==void 0?n=y[e]:n=y[e]=t;const a=r=>{if(r===void 0)throw new Error("New state must not be undefined");typeof r=="function"?y[e]=r(y[e]):y[e]=r,Kt()};return j++,[n,a]},w=(t,n)=>{let e=H;_[e]?_[e]={cb:t,prevDeps:_[e].nextDeps,nextDeps:n}:_.push({cb:t,prevDeps:null,nextDeps:n}),H++};k.on("/*",()=>{},{before(t,n){y=[],j=0,_=[],H=0,t()}});const Qt=function(){const n=new URLSearchParams(window.location.search).get("id"),[e,a]=q([]);return w(function(){fetch(`http://localhost:3000/users/${n}`).then(function(r){return r.json()}).then(function(r){a(r)})},[]),w(function(){document.querySelector("#btn_update").addEventListener("click",function(){document.querySelector("#image");const r=document.querySelector("#name").value,o=document.querySelector("#nam").value,l=document.querySelector("#text").value,f={id:n,nam:o,name:r,text:l};fetch(`http://localhost:3000/users/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),window.location.href="/"})}),console.log(e),`
    <style>


		input {
			padding: 0.5rem;
			width: -webkit-fill-available;
			border-radius: 0.25rem;
			border: 1px solid rgb(189, 189, 189);
		}
		input:focus {
			outline: none;
		}


    </style>
    <div>
        <p>anh:<input type="file" name="avatar"  multiple id="image" value="${e.image}"  required />
        <p>tên: <input id="name" type="text" class="border"  value="${e.name}"/></p>
        <p>năm: <input id="nam" type="text" class="border"  value="${e.nam}"/></p>
        <p>giới thiệu:<input id="text" type="text" class="border"  value="${e.text}"/></p>
        <button id="btn_update">sửa</button>
        <button ><a id="button" href ="/xoa">xóa</a></button>
        <button ><a id="button" href ="/page/add">thêm</a></button>

    </div>
        `},Jt=()=>`<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <script src="https://cdn.tailwindcss.com"><\/script>

    <body>

        <div class="max-w-4xl mx-auto m-4 px-5 ">
            <div class="flex justify-end">
                <button id="button" class="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor"
                        class="bi bi-justify" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>
            <div class="">
                <ul id="menu" class="md:flex md:space-x-4 font-bold text-[20px] flex justify-end hidden ">
                    <li><a href="index.html" class="hover:text-red-600">home</a></li>

            </div>
            <script>
                const menu = document.getElementById( "menu" );
                const button = document.getElementById( "button" );

                button.addEventListener( "click", function ()
                {
                    menu.classList.toggle( "hidden" );
                } );
            <\/script>
            <div class="md:w-[700px]">
                <h1 class="font-bold text-[44px] py-8">Blog</h1>
                <div id="products">

                </div>

                <div>
                    <div class="flex space-x-4 justify-center my-8">
                        <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654405086/z3467811922052_c695fa08a2e8cc9f73a493dc18fbefc3_jkqycd.jpg"
                            alt="">
                        <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654405104/z3467811904282_1c5be99c6c5f54f72ca1dedf9683e31f_kolit8.jpg"
                            alt="">
                        <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654405112/kk_x3sbs4.jpg" alt="">
                        <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654405097/z3467811887304_82e66009d06c03c016d8f74c2846ee79_xzkdf9.jpg"
                            alt="">
                    </div>

                    <div class="justify-center flex my-2">
                        <span>Copyright ©2020 All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
        <script type="module" src="./javacript/blog.js"><\/script>
    </body>

</html>`,Zt=function(){new URLSearchParams(window.location.search).get("id");const[n,e]=q([]);return w(function(){fetch("http://localhost:3000/users").then(function(a){return a.json()}).then(function(a){e(a)})},[]),w(function(){document.querySelector("#btn_them").addEventListener("click",function(){const a=document.querySelector("#name").value,r=document.querySelector("#nam").value,o=document.querySelector("#text").value;document.querySelector("#image"),fetch("http://localhost:3000/users",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nam:r,name:a,text:o})})})}),`
    <style>

form {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
		input {
			padding: 0.5rem;
			width: -webkit-fill-available;
			border-radius: 0.25rem;
			border: 1px solid rgb(189, 189, 189);
		}
		input:focus {
			outline: none;
		}


    </style>
    <div>
        <p>anh:<input type="file" multiple name="avatar" id="image" />
        <p>tên: <input id="name" type="text" class="border"/></p>
        <p>năm: <input id="nam" type="text" class="border"/></p>
        <p>giới thiệu:<input id="text" type="text" class="border"/></p>
        <button id="btn_them">them</button>
    </div>
        `},te=function(){const[t,n]=q([]);return w(function(){fetch("http://localhost:3000/users").then(function(e){return e.json()}).then(function(e){n(e)})},[]),w(()=>{const e=document.querySelectorAll(".btn-remove");for(let a of e)a.addEventListener("click",function(){const r=this.dataset.id;fetch(`http://localhost:3000/users/${r}`,{method:"DELETE"}).then(()=>{const o=projects.filter(l=>projects.id!=r);n(o)})})}),`
        <table>
       <thead>
    <tr>
    <th>id</th>
    <th>img</th>
    <th>name</th>
    <th>nam</th>
    <th>giới thiệu</th>
    </tr> 
  </thead>
  <tbody>
  ${t.map((e,a)=>`
  <tr>
  <td>${a+1} </td>
  <td>${e.image}</td>
  <td>${e.name}</td>
  <td>${e.nam}</td>
  <td>${e.text}</td>
  <td>
  <button data-id="${e.id}" class="btn btn-danger btn-remove" >xóa </button>
  </td>
  
  </tr>
  `)}
  
  
  
  
  
  </tbody>
  </table>

        `},ee=function(){const[t,n]=q([]);return w(function(){fetch("http://localhost:3000/users").then(function(e){return e.json()}).then(function(e){n(e)})},[]),`
      <!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- google font -->


        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet" />
        <!-- main css -->
        <link rel="stylesheet" href="./style.css" />
        <title>Portfolio</title>
    </head>

    <body>

        <!-- overlay -->
        <section id="overlay"></section>
        <!-- header -->
        <header>
            <div class="container">
                <div id="app">
                    <nav class="navbar">
                        <!-- logo -->
                        <div class="navbar__logo">
                            <img src="./img/logo.svg" alt="website logo" />
                        </div>
                        <!-- links -->
                        <ul class="navbar__links" id="app">

                            <li class="navbar__link"><a href="#productWorks">Work</a></li>
                            <li class="navbar__link"><a href="#things">About</a></li>
                            <li class="navbar__link"><a href=" ">Blog</a></li>
                            <a href="#contact"><button class="navbar__btn">Contact</button></a>
                        </ul>
                        <!-- menu button -->
                        <div class="">
                            <div class=""></div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        <!-- banner -->
        <section id="banner">
            <div class="container">
                <!-- img -->
                <div class="banner__img">
                    <img src="./img/banner-img.png" alt="" />
                </div>
                <!-- heading -->
                <div class="banner__heading">
                    <h1>Hello, i am giang </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate a
                        est culpa soluta modi beatae unde incidunt dolorem placeat maiores?
                    </p>
                    <a target="_blank" href=" https://drive.google.com/file/d/1a-87_FTKai1j6WUVFqrEw1QSrzOEOqd5/view"><button
                            class="banner__btn" >MY Resume</button></a>
                    <div class="banner__socials">
                        <a href="#"><i class="fab fa-dribbble"></i></a>
                        <a href="#"><i class="fab fa-behance"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </section>
        <!-- things -->
        <section id="things">
            <div class="container">
                <!-- dec -->
                <div class="things__dec">
                    <img src="./img/things-dec-l.png" alt="illustration of leaf" />
                </div>
                <!-- dec -->
                <div class="things__dec">
                    <img src="./img/things-dec-r.png" alt="illustration of leaf" />
                </div>
                <!-- heading -->
                <h2>Things I Do</h2>
                <!-- item 1 -->
                <div class="things__item">
                    <!-- img -->
                    <img src="./316267351_584000617061638_1848260812688891873_n.jpg" alt="illustration of women" />
                    <!-- text -->
                    <div class="things__item--heading">
                        <h3>Một chút về bản thân </h3>
                        <p>
                            Tôi đang là sinh viên kì 5 của trường Cao Đẳng FPT POLYTECHNICH chuyên ngành thiết kế
                            WEBSITE
                            thời gian chủ yếu là mình tự học mình thường tự học trên f8 hoặc là trên các nền tảng
                            youtube ....

                            Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục
                            tiêu hiện tại
                            của mình là trở
                            thành một lập trình viên Frontend.
                        </p>
                    </div>
                </div>
                <!-- item 2 -->


            </div>
        </section>
        <!-- works -->

        <h2 style=" text-align: center;">Recent Works</h2>
        <!-- img -->
    
        <div id="productWorks" class=" gap-10">
    
            <div class="grid grid-cols-1 md:grid-cols-3 mx-auto w-[1200px] gap-10" >
           ${t.map(e=>`
 <div class="w-[400px] transition duration-150 ease-in-out">
                  <div class="mt-2">
                        <img  src="${e.image}"
                            width="480px" height="480px" alt="">
                    </div>
                    <div class="mx-4">
                        <h3 class="font-bold text-[30px] ">${e.name}</h3>
                        <div class="my-3">
                            <span class=" bg-[#142850] text-[#FFFFFF] rounded-xl px-2 w-[62px] text-[18px] ">${e.nam}</span>
                            <span class="text-[#8695A4] pl-2">Dashboard</span>
                        </div>
                        <p class="text-[16px] pb-2">${e.text}</p>
                    </div>
                    <div class="w-full py-2 text-center bg-gray-200 dark:bg-slate-600">
                    <a id="button" href ="/create?id=${e.id}">View in github</a>
                    
                    </div>
                    
                </div >
`).join("")}
            </div>

        </div>

        <div class="works__btn">
            <a target="_blank" href="https://github.com/anhgiang22112003/assm_giang"><button>View Works</button></a>
        </div>



        <!-- blog-->

        <!-- btn -->

        <!-- footer -->

        <section class="contact" id="contact">
            <div class="heading white" style="text-align: center; color: aliceblue; margin-top: 20px;">
                <h1>Contact US</h1>
                <p>I'm a Front End Web Developer.</p>
            </div>
            <div class="content">
                <div class="contactInfo">
                    <h3>Contact Info</h3>
                    <div class="contactInfoBx">
                        <div class="box">
                            <div class="icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="text">
                                <h3>Address</h3>
                                <p>Hà Nội <br> Viet Nam</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="text">
                                <h3>Phone</h3>
                                <p>0343883727</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <i class="fa fa-envelope-o"></i>
                            </div>
                            <div class="text">
                                <h3>Email</h3>
                                <p>honggiang22112003@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="formBx">
                    <form>
                        <h3> Message Me</h3>
                        <input type="text" name="" placeholder="Full Name">
                        <input type="email" name="" placeholder="Email">
                        <textarea placeholder="Your Message"></textarea>
                        <input type="submit" value="Send">
                    </form>
                </div>
            </div>
        </section>
        <!-- fontawesome -->
        <script src="https://kit.fontawesome.com/28c0af3030.js" crossorigin="anonymous"><\/script>
        <!-- main js -->
        <script src="./main.js"><\/script>
        <!-- footer-->
        <div style="text-align: center ; background-color: black; color: aliceblue;" class="">
            Designed and made with ❤ by<!-- -->

            <span class="">giangnhph</span>
            <p>© 2023 </p>
        </div>

    </body>

</html>
        `};var S=document.querySelector("#app");k.on("/page/add",()=>R(Zt,S));k.on("/blog",()=>R(Jt,S));k.on("/create",()=>R(Qt,S));k.on("/",()=>R(ee,S));k.on("/xoa",()=>R(te,S));k.resolve();
