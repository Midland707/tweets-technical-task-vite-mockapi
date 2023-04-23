import{L as He,j as w,r as X,u as Ie}from"./index-929c46de.js";import{H as Me}from"./Helmet-a02abc0d.js";import{s as E}from"./styled-components.browser.esm-4785dde9.js";const ze=E(He)`
  display: block;
  text-align: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  width: 100px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px;
  color: #373737;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`,qe=()=>w.jsx(w.Fragment,{}),Je=E.li`
  list-style: none;
`,$e=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`,Ve=E.img`
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  z-index: 3;
`,We=E.img`
  display: block;
  width: 308px;
  height: 168px;
  margin-bottom: 90px;
  z-index: 2;
`,ve=E.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`,Ke=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  overflow: hidden;

  position: absolute;
  top: 180px;
  width: 80px;
  height: 80px;
`,Ge=E.img`
  display: block;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #5736a3;
`,Xe=E.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0 0 16px;
`,Qe=E.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0 0 26px;
`,Ye=E.button`
  width: 196px;
  height: 50px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  cursor: pointer;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
  margin-bottom: 36px;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`,Ze="/tweets-technical-task-vite-mockapi/assets/logo-aec7c177.svg",et="/tweets-technical-task-vite-mockapi/assets/image-fee3a66f.png",tt=({user:e,handelOnClick:t})=>{const{tweets:n,followers:r,avatar:s,id:i}=e,o=r.toString(),l=[o.slice(0,o.length-3),",",o.slice(o.length-3)].join("");return w.jsx(Je,{children:w.jsxs($e,{children:[w.jsx(Ve,{alt:"card logo",src:Ze}),w.jsx(We,{alt:"card image",src:et}),w.jsx(ve,{}),w.jsx(Ke,{children:w.jsx(Ge,{alt:"avatar",src:s})}),w.jsxs(Xe,{children:[n," Tweets"]}),w.jsxs(Qe,{children:[l," Followers"]}),w.jsx(Ye,{onClick:()=>t(i),children:"Follow"})]})})},nt=E.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
  padding: 0;
`;function we(e,t){return function(){return e.apply(t,arguments)}}const{toString:rt}=Object.prototype,{getPrototypeOf:te}=Object,z=(e=>t=>{const n=rt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>z(t)===e),q=e=>t=>typeof t===e,{isArray:F}=Array,k=q("undefined");function st(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const be=T("ArrayBuffer");function ot(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&be(e.buffer),t}const it=q("string"),A=q("function"),xe=q("number"),ne=e=>e!==null&&typeof e=="object",at=e=>e===!0||e===!1,U=e=>{if(z(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ct=T("Date"),lt=T("File"),ut=T("Blob"),ft=T("FileList"),dt=e=>ne(e)&&A(e.pipe),pt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=z(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},ht=T("URLSearchParams"),mt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],t.call(null,e[l],l,e)}}function Ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ge=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Se=e=>!k(e)&&e!==ge;function Q(){const{caseless:e}=Se(this)&&this||{},t={},n=(r,s)=>{const i=e&&Ee(t,s)||s;U(t[i])&&U(r)?t[i]=Q(t[i],r):U(r)?t[i]=Q({},r):F(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const yt=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,i)=>{n&&A(s)?e[i]=we(s,n):e[i]=s},{allOwnKeys:r}),e),wt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},xt=(e,t,n,r)=>{let s,i,o;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Et=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},gt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},St=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),Rt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Ot=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},At=T("HTMLFormElement"),Tt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Nt=T("RegExp"),Re=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},Pt=e=>{Re(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ct=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return F(e)?r(e):r(String(e).split(t)),n},Ft=()=>{},jt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),W="abcdefghijklmnopqrstuvwxyz",ce="0123456789",Oe={DIGIT:ce,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+ce},kt=(e=16,t=Oe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Lt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Bt=e=>{const t=new Array(10),n=(r,s)=>{if(ne(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=F(r)?[]:{};return L(r,(o,l)=>{const d=n(o,s+1);!k(d)&&(i[l]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:F,isArrayBuffer:be,isBuffer:st,isFormData:pt,isArrayBufferView:ot,isString:it,isNumber:xe,isBoolean:at,isObject:ne,isPlainObject:U,isUndefined:k,isDate:ct,isFile:lt,isBlob:ut,isRegExp:Nt,isFunction:A,isStream:dt,isURLSearchParams:ht,isTypedArray:St,isFileList:ft,forEach:L,merge:Q,extend:yt,trim:mt,stripBOM:wt,inherits:bt,toFlatObject:xt,kindOf:z,kindOfTest:T,endsWith:Et,toArray:gt,forEachEntry:Rt,matchAll:Ot,isHTMLForm:At,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Re,freezeMethods:Pt,toObjectSet:Ct,toCamelCase:Tt,noop:Ft,toFiniteNumber:jt,findKey:Ee,global:ge,isContextDefined:Se,ALPHABET:Oe,generateString:kt,isSpecCompliantForm:Lt,toJSONObject:Bt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ae=m.prototype,Te={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Te[e]={value:e}});Object.defineProperties(m,Te);Object.defineProperty(Ae,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Ae);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Dt=null;function Y(e){return a.isPlainObject(e)||a.isArray(e)}function Ne(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function le(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ne(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Ut(e){return a.isArray(e)&&!e.some(Y)}const _t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,R){let g=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Ut(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(g=a.toArray(f)))return h=Ne(h),g.forEach(function(D,_e){!(a.isUndefined(D)||D===null)&&t.append(o===!0?le([h],_e,i):o===null?h:h+"[]",c(D))}),!1}return Y(f)?!0:(t.append(le(R,h,i),c(f)),!1)}const p=[],x=Object.assign(_t,{defaultVisitor:u,convertValue:c,isVisitable:Y});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(g,P){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(P)?P.trim():P,h,x))===!0&&y(g,h?h.concat(P):[P])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ue(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&J(e,this,t)}const Pe=re.prototype;Pe.append=function(t,n){this._pairs.push([t,n])};Pe.toString=function(t){const n=t?function(r){return t.call(this,r,ue)}:ue;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ht(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ce(e,t,n){if(!t)return e;const r=n&&n.encode||Ht,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class It{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fe=It,Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mt=typeof URLSearchParams<"u"?URLSearchParams:re,zt=typeof FormData<"u"?FormData:null,qt=typeof Blob<"u"?Blob:null,Jt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),$t=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Mt,FormData:zt,Blob:qt},isStandardBrowserEnv:Jt,isStandardBrowserWebWorkerEnv:$t,protocols:["http","https","file","blob","url","data"]};function Vt(e,t){return J(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Wt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function vt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function je(e){function t(n,r,s,i){let o=n[i++];const l=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!l):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=vt(s[o])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Wt(r),s,n,0)}),n}return null}const Kt={"Content-Type":void 0};function Gt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const $={transitional:Fe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return J(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Gt(t)):t}],transformResponse:[function(t){const n=this.transitional||$.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){$.headers[t]={}});a.forEach(["post","put","patch"],function(t){$.headers[t]=a.merge(Kt)});const se=$,Xt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Xt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},de=Symbol("internals");function j(e){return e&&String(e).trim().toLowerCase()}function _(e){return e===!1||e==null?e:a.isArray(e)?e.map(_):String(e)}function Yt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Zt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function v(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function en(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function tn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(l,d,c){const u=j(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=_(l))}const o=(l,d)=>a.forEach(l,(c,u)=>i(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Zt(t)?o(Qt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=j(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Yt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=j(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||v(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=j(o),o){const l=a.findKey(r,o);l&&(!n||v(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||v(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=_(s),delete n[i];return}const l=t?en(i):String(i).trim();l!==i&&delete n[i],n[l]=_(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[de]=this[de]={accessors:{}}).accessors,s=this.prototype;function i(o){const l=j(o);r[l]||(tn(s,o),r[l]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(V.prototype);a.freezeMethods(V);const O=V;function K(e,t){const n=this||se,r=t||n,s=O.from(r.headers);let i=r.data;return a.forEach(e,function(l){i=l.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function ke(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function nn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const rn=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function sn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function on(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Le(e,t){return e&&!sn(t)?on(e,t):t}const an=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const l=a.isString(o)?s(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function cn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ln(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[i];o||(o=c),n[s]=d,r[s]=c;let p=i,x=0;for(;p!==s;)x+=n[p++],p=p%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const y=u&&c-u;return y?Math.round(x*1e3/y):void 0}}function pe(e,t){let n=0;const r=ln(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,l=i-n,d=r(l),c=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:l,rate:d||void 0,estimated:d&&o&&c?(o-i)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const un=typeof XMLHttpRequest<"u",fn=un&&function(e){return new Promise(function(n,r){let s=e.data;const i=O.from(e.headers).normalize(),o=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}const u=Le(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ce(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};nn(function(g){n(g),d()},function(g){r(g),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Fe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||an(u))&&e.xsrfCookieName&&rn.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new B(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const x=cn(u);if(x&&S.protocols.indexOf(x)===-1){r(new m("Unsupported protocol "+x+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},H={http:Dt,xhr:fn};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const dn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?H[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function he(e){return G(e),e.headers=O.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),dn.getAdapter(e.adapter||se.adapter)(e).then(function(r){return G(e),r.data=K.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return ke(r)||(G(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const me=e=>e instanceof O?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function i(c,u){if(!a.isUndefined(u))return r(void 0,u)}function o(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u)=>s(me(c),me(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const p=d[u]||s,x=p(e[u],t[u],u);a.isUndefined(x)&&p!==l||(n[u]=x)}),n}const Be="1.3.6",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ye={};oe.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Be+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ye[o]&&(ye[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,l):!0}};function pn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const l=e[i],d=l===void 0||o(l,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const Z={assertOptions:pn,validators:oe},N=Z.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Z.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=O.concat(o,i);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,x;if(!d){const f=[he.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),x=f.length,u=Promise.resolve(n);p<x;)u=u.then(f[p++],f[p++]);return u}x=l.length;let y=n;for(p=0;p<x;){const f=l[p++],h=l[p++];try{y=f(y)}catch(R){h.call(this,R);break}}try{u=he.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,x=c.length;p<x;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=C(this.defaults,t);const n=Le(t.baseURL,t.url);return Ce(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,l){return this.request(C(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const I=M;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,l){r.reason||(r.reason=new B(i,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const hn=ie;function mn(e){return function(n){return e.apply(null,n)}}function yn(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});const wn=ee;function De(e){const t=new I(e),n=we(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return De(C(e,s))},n}const b=De(se);b.Axios=I;b.CanceledError=B;b.CancelToken=hn;b.isCancel=ke;b.VERSION=Be;b.toFormData=J;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=mn;b.isAxiosError=yn;b.mergeConfig=C;b.AxiosHeaders=O;b.formToJSON=e=>je(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=wn;b.default=b;const Ue=b;Ue.defaults.baseURL="https://6442f9d390738aa7c0699804.mockapi.io/";async function bn(){return await Ue.get("users")}const xn=()=>{const[e,t]=X.useState([]);X.useEffect(()=>{bn().then(r=>{t(r.data)}).catch(r=>{console.error(r.message)})},[]);const n=r=>{console.log("id = ",r)};return w.jsx(nt,{children:e.map(r=>w.jsx(tt,{user:r,handelOnClick:n},r.id))})},Rn=()=>{var n;const e=Ie(),t=X.useRef(((n=e.state)==null?void 0:n.from)??"/");return w.jsxs("main",{children:[w.jsx(Me,{children:w.jsx("title",{children:"Tweets"})}),w.jsx(ze,{to:t.current,children:"Go back"}),w.jsx(qe,{}),w.jsx(xn,{})]})};export{Rn as default};