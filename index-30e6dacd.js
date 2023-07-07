(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Ll(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const nt={},gs=[],pn=()=>{},Hm=()=>!1,km=/^on[^a-z]/,No=t=>km.test(t),Pl=t=>t.startsWith("onUpdate:"),xt=Object.assign,Il=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vm=Object.prototype.hasOwnProperty,Ye=(t,e)=>Vm.call(t,e),De=Array.isArray,_s=t=>Fo(t)==="[object Map]",Hh=t=>Fo(t)==="[object Set]",He=t=>typeof t=="function",ht=t=>typeof t=="string",Ul=t=>typeof t=="symbol",it=t=>t!==null&&typeof t=="object",kh=t=>it(t)&&He(t.then)&&He(t.catch),Vh=Object.prototype.toString,Fo=t=>Vh.call(t),Gm=t=>Fo(t).slice(8,-1),Gh=t=>Fo(t)==="[object Object]",Dl=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ho=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wm=/-(\w)/g,Ln=Bo(t=>t.replace(Wm,(e,n)=>n?n.toUpperCase():"")),Xm=/\B([A-Z])/g,Is=Bo(t=>t.replace(Xm,"-$1").toLowerCase()),zo=Bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=Bo(t=>t?`on${zo(t)}`:""),fr=(t,e)=>!Object.is(t,e),la=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ym=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sc;const ja=()=>Sc||(Sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ol(t){if(De(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ht(i)?Km(i):Ol(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ht(t))return t;if(it(t))return t}}const qm=/;(?![^(]*\))/g,jm=/:([^]+)/,$m=/\/\*[^]*?\*\//g;function Km(t){const e={};return t.replace($m,"").split(qm).forEach(n=>{if(n){const i=n.split(jm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ni(t){let e="";if(ht(t))e=t;else if(De(t))for(let n=0;n<t.length;n++){const i=Ni(t[n]);i&&(e+=i+" ")}else if(it(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jm=Ll(Zm);function Wh(t){return!!t||t===""}const Xh=t=>ht(t)?t:t==null?"":De(t)||it(t)&&(t.toString===Vh||!He(t.toString))?JSON.stringify(t,Yh,2):String(t),Yh=(t,e)=>e&&e.__v_isRef?Yh(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Hh(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!De(e)&&!Gh(e)?String(e):e;let on;class Qm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function eg(t,e=on){e&&e.active&&e.effects.push(t)}function tg(){return on}const Nl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qh=t=>(t.w&gi)>0,jh=t=>(t.n&gi)>0,ng=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gi},ig=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];qh(s)&&!jh(s)?s.delete(t):e[n++]=s,s.w&=~gi,s.n&=~gi}e.length=n}},$a=new WeakMap;let js=0,gi=1;const Ka=30;let cn;const Fi=Symbol(""),Za=Symbol("");class Fl{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,eg(this,i)}run(){if(!this.active)return this.fn();let e=cn,n=ci;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=cn,cn=this,ci=!0,gi=1<<++js,js<=Ka?ng(this):wc(this),this.fn()}finally{js<=Ka&&ig(this),gi=1<<--js,cn=this.parent,ci=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cn===this?this.deferStop=!0:this.active&&(wc(this),this.onStop&&this.onStop(),this.active=!1)}}function wc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ci=!0;const $h=[];function Us(){$h.push(ci),ci=!1}function Ds(){const t=$h.pop();ci=t===void 0?!0:t}function Vt(t,e,n){if(ci&&cn){let i=$a.get(t);i||$a.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Nl()),Kh(s)}}function Kh(t,e){let n=!1;js<=Ka?jh(t)||(t.n|=gi,n=!qh(t)):n=!t.has(cn),n&&(t.add(cn),cn.deps.push(t))}function jn(t,e,n,i,s,r){const o=$a.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&De(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":De(t)?Dl(n)&&a.push(o.get("length")):(a.push(o.get(Fi)),_s(t)&&a.push(o.get(Za)));break;case"delete":De(t)||(a.push(o.get(Fi)),_s(t)&&a.push(o.get(Za)));break;case"set":_s(t)&&a.push(o.get(Fi));break}if(a.length===1)a[0]&&Ja(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ja(Nl(l))}}function Ja(t,e){const n=De(t)?t:[...t];for(const i of n)i.computed&&bc(i);for(const i of n)i.computed||bc(i)}function bc(t,e){(t!==cn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const sg=Ll("__proto__,__v_isRef,__isVue"),Zh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ul)),rg=Bl(),og=Bl(!1,!0),ag=Bl(!0),Tc=lg();function lg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=je(this);for(let r=0,o=this.length;r<o;r++)Vt(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(je)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const i=je(this)[e].apply(this,n);return Ds(),i}}),t}function cg(t){const e=je(this);return Vt(e,"has",t),e.hasOwnProperty(t)}function Bl(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?bg:nd:e?td:ed).get(i))return i;const o=De(i);if(!t){if(o&&Ye(Tc,s))return Reflect.get(Tc,s,r);if(s==="hasOwnProperty")return cg}const a=Reflect.get(i,s,r);return(Ul(s)?Zh.has(s):sg(s))||(t||Vt(i,"get",s),e)?a:Rt(a)?o&&Dl(s)?a:a.value:it(a)?t?id(a):Rr(a):a}}const ug=Jh(),hg=Jh(!0);function Jh(t=!1){return function(n,i,s,r){let o=n[i];if(Ss(o)&&Rt(o)&&!Rt(s))return!1;if(!t&&(!yo(s)&&!Ss(s)&&(o=je(o),s=je(s)),!De(n)&&Rt(o)&&!Rt(s)))return o.value=s,!0;const a=De(n)&&Dl(i)?Number(i)<n.length:Ye(n,i),l=Reflect.set(n,i,s,r);return n===je(r)&&(a?fr(s,o)&&jn(n,"set",i,s):jn(n,"add",i,s)),l}}function dg(t,e){const n=Ye(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&jn(t,"delete",e,void 0),i}function fg(t,e){const n=Reflect.has(t,e);return(!Ul(e)||!Zh.has(e))&&Vt(t,"has",e),n}function pg(t){return Vt(t,"iterate",De(t)?"length":Fi),Reflect.ownKeys(t)}const Qh={get:rg,set:ug,deleteProperty:dg,has:fg,ownKeys:pg},mg={get:ag,set(t,e){return!0},deleteProperty(t,e){return!0}},gg=xt({},Qh,{get:og,set:hg}),zl=t=>t,Ho=t=>Reflect.getPrototypeOf(t);function Br(t,e,n=!1,i=!1){t=t.__v_raw;const s=je(t),r=je(e);n||(e!==r&&Vt(s,"get",e),Vt(s,"get",r));const{has:o}=Ho(s),a=i?zl:n?Vl:pr;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function zr(t,e=!1){const n=this.__v_raw,i=je(n),s=je(t);return e||(t!==s&&Vt(i,"has",t),Vt(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Hr(t,e=!1){return t=t.__v_raw,!e&&Vt(je(t),"iterate",Fi),Reflect.get(t,"size",t)}function Ac(t){t=je(t);const e=je(this);return Ho(e).has.call(e,t)||(e.add(t),jn(e,"add",t,t)),this}function Rc(t,e){e=je(e);const n=je(this),{has:i,get:s}=Ho(n);let r=i.call(n,t);r||(t=je(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?fr(e,o)&&jn(n,"set",t,e):jn(n,"add",t,e),this}function Cc(t){const e=je(this),{has:n,get:i}=Ho(e);let s=n.call(e,t);s||(t=je(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&jn(e,"delete",t,void 0),r}function Lc(){const t=je(this),e=t.size!==0,n=t.clear();return e&&jn(t,"clear",void 0,void 0),n}function kr(t,e){return function(i,s){const r=this,o=r.__v_raw,a=je(o),l=e?zl:t?Vl:pr;return!t&&Vt(a,"iterate",Fi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Vr(t,e,n){return function(...i){const s=this.__v_raw,r=je(s),o=_s(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?zl:e?Vl:pr;return!e&&Vt(r,"iterate",l?Za:Fi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Kn(t){return function(...e){return t==="delete"?!1:this}}function _g(){const t={get(r){return Br(this,r)},get size(){return Hr(this)},has:zr,add:Ac,set:Rc,delete:Cc,clear:Lc,forEach:kr(!1,!1)},e={get(r){return Br(this,r,!1,!0)},get size(){return Hr(this)},has:zr,add:Ac,set:Rc,delete:Cc,clear:Lc,forEach:kr(!1,!0)},n={get(r){return Br(this,r,!0)},get size(){return Hr(this,!0)},has(r){return zr.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:kr(!0,!1)},i={get(r){return Br(this,r,!0,!0)},get size(){return Hr(this,!0)},has(r){return zr.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:kr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Vr(r,!1,!1),n[r]=Vr(r,!0,!1),e[r]=Vr(r,!1,!0),i[r]=Vr(r,!0,!0)}),[t,n,e,i]}const[vg,xg,Eg,Mg]=_g();function Hl(t,e){const n=e?t?Mg:Eg:t?xg:vg;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ye(n,s)&&s in i?n:i,s,r)}const yg={get:Hl(!1,!1)},Sg={get:Hl(!1,!0)},wg={get:Hl(!0,!1)},ed=new WeakMap,td=new WeakMap,nd=new WeakMap,bg=new WeakMap;function Tg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ag(t){return t.__v_skip||!Object.isExtensible(t)?0:Tg(Gm(t))}function Rr(t){return Ss(t)?t:kl(t,!1,Qh,yg,ed)}function Rg(t){return kl(t,!1,gg,Sg,td)}function id(t){return kl(t,!0,mg,wg,nd)}function kl(t,e,n,i,s){if(!it(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Ag(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function vs(t){return Ss(t)?vs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ss(t){return!!(t&&t.__v_isReadonly)}function yo(t){return!!(t&&t.__v_isShallow)}function sd(t){return vs(t)||Ss(t)}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function rd(t){return Mo(t,"__v_skip",!0),t}const pr=t=>it(t)?Rr(t):t,Vl=t=>it(t)?id(t):t;function od(t){ci&&cn&&(t=je(t),Kh(t.dep||(t.dep=Nl())))}function ad(t,e){t=je(t);const n=t.dep;n&&Ja(n)}function Rt(t){return!!(t&&t.__v_isRef===!0)}function $s(t){return ld(t,!1)}function Cg(t){return ld(t,!0)}function ld(t,e){return Rt(t)?t:new Lg(t,e)}class Lg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:je(e),this._value=n?e:pr(e)}get value(){return od(this),this._value}set value(e){const n=this.__v_isShallow||yo(e)||Ss(e);e=n?e:je(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pr(e),ad(this))}}function Bi(t){return Rt(t)?t.value:t}const Pg={get:(t,e,n)=>Bi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Rt(s)&&!Rt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function cd(t){return vs(t)?t:new Proxy(t,Pg)}class Ig{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Fl(e,()=>{this._dirty||(this._dirty=!0,ad(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=je(this);return od(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ug(t,e,n=!1){let i,s;const r=He(t);return r?(i=t,s=pn):(i=t.get,s=t.set),new Ig(i,s,r||!s,n)}function ui(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){ko(r,e,n)}return s}function mn(t,e,n,i){if(He(t)){const r=ui(t,e,n,i);return r&&kh(r)&&r.catch(o=>{ko(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(mn(t[r],e,n,i));return s}function ko(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ui(l,null,10,[t,o,a]);return}}Dg(t,n,s,i)}function Dg(t,e,n,i=!0){console.error(t)}let mr=!1,Qa=!1;const At=[];let An=0;const xs=[];let kn=null,Ui=0;const ud=Promise.resolve();let Gl=null;function hd(t){const e=Gl||ud;return t?e.then(this?t.bind(this):t):e}function Og(t){let e=An+1,n=At.length;for(;e<n;){const i=e+n>>>1;gr(At[i])<t?e=i+1:n=i}return e}function Wl(t){(!At.length||!At.includes(t,mr&&t.allowRecurse?An+1:An))&&(t.id==null?At.push(t):At.splice(Og(t.id),0,t),dd())}function dd(){!mr&&!Qa&&(Qa=!0,Gl=ud.then(pd))}function Ng(t){const e=At.indexOf(t);e>An&&At.splice(e,1)}function Fg(t){De(t)?xs.push(...t):(!kn||!kn.includes(t,t.allowRecurse?Ui+1:Ui))&&xs.push(t),dd()}function Pc(t,e=mr?An+1:0){for(;e<At.length;e++){const n=At[e];n&&n.pre&&(At.splice(e,1),e--,n())}}function fd(t){if(xs.length){const e=[...new Set(xs)];if(xs.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((n,i)=>gr(n)-gr(i)),Ui=0;Ui<kn.length;Ui++)kn[Ui]();kn=null,Ui=0}}const gr=t=>t.id==null?1/0:t.id,Bg=(t,e)=>{const n=gr(t)-gr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pd(t){Qa=!1,mr=!0,At.sort(Bg);const e=pn;try{for(An=0;An<At.length;An++){const n=At[An];n&&n.active!==!1&&ui(n,null,14)}}finally{An=0,At.length=0,fd(),mr=!1,Gl=null,(At.length||xs.length)&&pd()}}function zg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||nt;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||nt;d&&(s=n.map(p=>ht(p)?p.trim():p)),h&&(s=n.map(Ym))}let a,l=i[a=aa(e)]||i[a=aa(Ln(e))];!l&&r&&(l=i[a=aa(Is(e))]),l&&mn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mn(c,t,6,s)}}function md(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!He(t)){const l=c=>{const u=md(c,e,!0);u&&(a=!0,xt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(it(t)&&i.set(t,null),null):(De(r)?r.forEach(l=>o[l]=null):xt(o,r),it(t)&&i.set(t,o),o)}function Vo(t,e){return!t||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(t,e[0].toLowerCase()+e.slice(1))||Ye(t,Is(e))||Ye(t,e))}let dn=null,gd=null;function So(t){const e=dn;return dn=t,gd=t&&t.type.__scopeId||null,e}function Hg(t,e=dn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Vc(-1);const r=So(e);let o;try{o=t(...s)}finally{So(r),i._d&&Vc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ca(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:_,inheritAttrs:x}=t;let m,f;const b=So(t);try{if(n.shapeFlag&4){const S=s||i;m=bn(u.call(S,S,h,r,p,d,_)),f=l}else{const S=e;m=bn(S.length>1?S(r,{attrs:l,slots:a,emit:c}):S(r,null)),f=e.props?l:kg(l)}}catch(S){er.length=0,ko(S,t,1),m=jt(_r)}let M=m;if(f&&x!==!1){const S=Object.keys(f),{shapeFlag:R}=M;S.length&&R&7&&(o&&S.some(Pl)&&(f=Vg(f,o)),M=ws(M,f))}return n.dirs&&(M=ws(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),m=M,So(b),m}const kg=t=>{let e;for(const n in t)(n==="class"||n==="style"||No(n))&&((e||(e={}))[n]=t[n]);return e},Vg=(t,e)=>{const n={};for(const i in t)(!Pl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Gg(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Ic(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Vo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ic(i,o,c):!0:!!o;return!1}function Ic(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Vo(n,r))return!0}return!1}function Wg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xg=t=>t.__isSuspense;function Yg(t,e){e&&e.pendingBranch?De(t)?e.effects.push(...t):e.effects.push(t):Fg(t)}const Gr={};function fo(t,e,n){return _d(t,e,n)}function _d(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=nt){var a;const l=tg()===((a=St)==null?void 0:a.scope)?St:null;let c,u=!1,h=!1;if(Rt(t)?(c=()=>t.value,u=yo(t)):vs(t)?(c=()=>t,i=!0):De(t)?(h=!0,u=t.some(S=>vs(S)||yo(S)),c=()=>t.map(S=>{if(Rt(S))return S.value;if(vs(S))return ds(S);if(He(S))return ui(S,l,2)})):He(t)?e?c=()=>ui(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),mn(t,l,3,[p])}:c=pn,e&&i){const S=c;c=()=>ds(S())}let d,p=S=>{d=b.onStop=()=>{ui(S,l,4)}},_;if(xr)if(p=pn,e?n&&mn(e,l,3,[c(),h?[]:void 0,p]):c(),s==="sync"){const S=V_();_=S.__watcherHandles||(S.__watcherHandles=[])}else return pn;let x=h?new Array(t.length).fill(Gr):Gr;const m=()=>{if(b.active)if(e){const S=b.run();(i||u||(h?S.some((R,L)=>fr(R,x[L])):fr(S,x)))&&(d&&d(),mn(e,l,3,[S,x===Gr?void 0:h&&x[0]===Gr?[]:x,p]),x=S)}else b.run()};m.allowRecurse=!!e;let f;s==="sync"?f=m:s==="post"?f=()=>Ft(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),f=()=>Wl(m));const b=new Fl(c,f);e?n?m():x=b.run():s==="post"?Ft(b.run.bind(b),l&&l.suspense):b.run();const M=()=>{b.stop(),l&&l.scope&&Il(l.scope.effects,b)};return _&&_.push(M),M}function qg(t,e,n){const i=this.proxy,s=ht(t)?t.includes(".")?vd(i,t):()=>i[t]:t.bind(i,i);let r;He(e)?r=e:(r=e.handler,n=e);const o=St;bs(this);const a=_d(s,r.bind(i),n);return o?bs(o):zi(),a}function vd(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ds(t,e){if(!it(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Rt(t))ds(t.value,e);else if(De(t))for(let n=0;n<t.length;n++)ds(t[n],e);else if(Hh(t)||_s(t))t.forEach(n=>{ds(n,e)});else if(Gh(t))for(const n in t)ds(t[n],e);return t}function bi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Us(),mn(l,n,8,[t.el,a,t,e]),Ds())}}function xd(t,e){return He(t)?(()=>xt({name:t.name},e,{setup:t}))():t}const po=t=>!!t.type.__asyncLoader,Ed=t=>t.type.__isKeepAlive;function jg(t,e){Md(t,"a",e)}function $g(t,e){Md(t,"da",e)}function Md(t,e,n=St){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Go(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ed(s.parent.vnode)&&Kg(i,e,n,s),s=s.parent}}function Kg(t,e,n,i){const s=Go(e,t,i,!0);Sd(()=>{Il(i[e],s)},n)}function Go(t,e,n=St,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),bs(n);const a=mn(e,n,t,o);return zi(),Ds(),a});return i?s.unshift(r):s.push(r),r}}const $n=t=>(e,n=St)=>(!xr||t==="sp")&&Go(t,(...i)=>e(...i),n),Zg=$n("bm"),yd=$n("m"),Jg=$n("bu"),Qg=$n("u"),e_=$n("bum"),Sd=$n("um"),t_=$n("sp"),n_=$n("rtg"),i_=$n("rtc");function s_(t,e=St){Go("ec",t,e)}const wd="components";function r_(t,e){return a_(wd,t,!0,e)||t}const o_=Symbol.for("v-ndc");function a_(t,e,n=!0,i=!1){const s=dn||St;if(s){const r=s.type;if(t===wd){const a=z_(r,!1);if(a&&(a===e||a===Ln(e)||a===zo(Ln(e))))return r}const o=Uc(s[t]||r[t],e)||Uc(s.appContext[t],e);return!o&&i?r:o}}function Uc(t,e){return t&&(t[e]||t[Ln(e)]||t[zo(Ln(e))])}function l_(t,e,n,i){let s;const r=n&&n[i];if(De(t)||ht(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(it(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const el=t=>t?Dd(t)?$l(t)||t.proxy:el(t.parent):null,Qs=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>el(t.parent),$root:t=>el(t.root),$emit:t=>t.emit,$options:t=>Xl(t),$forceUpdate:t=>t.f||(t.f=()=>Wl(t.update)),$nextTick:t=>t.n||(t.n=hd.bind(t.proxy)),$watch:t=>qg.bind(t)}),ua=(t,e)=>t!==nt&&!t.__isScriptSetup&&Ye(t,e),c_={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ua(i,e))return o[e]=1,i[e];if(s!==nt&&Ye(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ye(c,e))return o[e]=3,r[e];if(n!==nt&&Ye(n,e))return o[e]=4,n[e];tl&&(o[e]=0)}}const u=Qs[e];let h,d;if(u)return e==="$attrs"&&Vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==nt&&Ye(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ye(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ua(s,e)?(s[e]=n,!0):i!==nt&&Ye(i,e)?(i[e]=n,!0):Ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==nt&&Ye(t,o)||ua(e,o)||(a=r[0])&&Ye(a,o)||Ye(i,o)||Ye(Qs,o)||Ye(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Dc(t){return De(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let tl=!0;function u_(t){const e=Xl(t),n=t.proxy,i=t.ctx;tl=!1,e.beforeCreate&&Oc(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:f,beforeUnmount:b,destroyed:M,unmounted:S,render:R,renderTracked:L,renderTriggered:I,errorCaptured:V,serverPrefetch:y,expose:A,inheritAttrs:ie,components:fe,directives:k,filters:Y}=e;if(c&&h_(c,i,null),o)for(const G in o){const W=o[G];He(W)&&(i[G]=W.bind(n))}if(s){const G=s.call(n,n);it(G)&&(t.data=Rr(G))}if(tl=!0,r)for(const G in r){const W=r[G],he=He(W)?W.bind(n,n):He(W.get)?W.get.bind(n,n):pn,oe=!He(W)&&He(W.set)?W.set.bind(n):pn,Te=en({get:he,set:oe});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>Te.value,set:N=>Te.value=N})}if(a)for(const G in a)bd(a[G],i,n,G);if(l){const G=He(l)?l.call(n):l;Reflect.ownKeys(G).forEach(W=>{mo(W,G[W])})}u&&Oc(u,t,"c");function se(G,W){De(W)?W.forEach(he=>G(he.bind(n))):W&&G(W.bind(n))}if(se(Zg,h),se(yd,d),se(Jg,p),se(Qg,_),se(jg,x),se($g,m),se(s_,V),se(i_,L),se(n_,I),se(e_,b),se(Sd,S),se(t_,y),De(A))if(A.length){const G=t.exposed||(t.exposed={});A.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:he=>n[W]=he})})}else t.exposed||(t.exposed={});R&&t.render===pn&&(t.render=R),ie!=null&&(t.inheritAttrs=ie),fe&&(t.components=fe),k&&(t.directives=k)}function h_(t,e,n=pn){De(t)&&(t=nl(t));for(const i in t){const s=t[i];let r;it(s)?"default"in s?r=Xn(s.from||i,s.default,!0):r=Xn(s.from||i):r=Xn(s),Rt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Oc(t,e,n){mn(De(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function bd(t,e,n,i){const s=i.includes(".")?vd(n,i):()=>n[i];if(ht(t)){const r=e[t];He(r)&&fo(s,r)}else if(He(t))fo(s,t.bind(n));else if(it(t))if(De(t))t.forEach(r=>bd(r,e,n,i));else{const r=He(t.handler)?t.handler.bind(n):e[t.handler];He(r)&&fo(s,r,t)}}function Xl(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>wo(l,c,o,!0)),wo(l,e,o)),it(e)&&r.set(e,l),l}function wo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&wo(t,r,n,!0),s&&s.forEach(o=>wo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=d_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const d_={data:Nc,props:Fc,emits:Fc,methods:Ks,computed:Ks,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:Ks,directives:Ks,watch:p_,provide:Nc,inject:f_};function Nc(t,e){return e?t?function(){return xt(He(t)?t.call(this,this):t,He(e)?e.call(this,this):e)}:e:t}function f_(t,e){return Ks(nl(t),nl(e))}function nl(t){if(De(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ks(t,e){return t?xt(Object.create(null),t,e):e}function Fc(t,e){return t?De(t)&&De(e)?[...new Set([...t,...e])]:xt(Object.create(null),Dc(t),Dc(e??{})):e}function p_(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const i in e)n[i]=Pt(t[i],e[i]);return n}function Td(){return{app:null,config:{isNativeTag:Hm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let m_=0;function g_(t,e){return function(i,s=null){He(i)||(i=xt({},i)),s!=null&&!it(s)&&(s=null);const r=Td(),o=new Set;let a=!1;const l=r.app={_uid:m_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:G_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(l,...u)):He(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=jt(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,$l(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){bo=l;try{return c()}finally{bo=null}}};return l}}let bo=null;function mo(t,e){if(St){let n=St.provides;const i=St.parent&&St.parent.provides;i===n&&(n=St.provides=Object.create(i)),n[t]=e}}function Xn(t,e,n=!1){const i=St||dn;if(i||bo){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:bo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&He(e)?e.call(i&&i.proxy):e}}function __(t,e,n,i=!1){const s={},r={};Mo(r,Xo,1),t.propsDefaults=Object.create(null),Ad(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Rg(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function v_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=je(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Vo(t.emitsOptions,d))continue;const p=e[d];if(l)if(Ye(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=Ln(d);s[_]=il(l,a,_,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Ad(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ye(e,h)&&((u=Is(h))===h||!Ye(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=il(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ye(e,h))&&(delete r[h],c=!0)}c&&jn(t,"set","$attrs")}function Ad(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ho(l))continue;const c=e[l];let u;s&&Ye(s,u=Ln(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Vo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=je(n),c=a||nt;for(let u=0;u<r.length;u++){const h=r[u];n[h]=il(s,l,h,c[h],t,!Ye(c,h))}}return o}function il(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(bs(s),i=c[n]=l.call(null,e),zi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Is(n))&&(i=!0))}return i}function Rd(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!He(t)){const u=h=>{l=!0;const[d,p]=Rd(h,e,!0);xt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return it(t)&&i.set(t,gs),gs;if(De(r))for(let u=0;u<r.length;u++){const h=Ln(r[u]);Bc(h)&&(o[h]=nt)}else if(r)for(const u in r){const h=Ln(u);if(Bc(h)){const d=r[u],p=o[h]=De(d)||He(d)?{type:d}:xt({},d);if(p){const _=kc(Boolean,p.type),x=kc(String,p.type);p[0]=_>-1,p[1]=x<0||_<x,(_>-1||Ye(p,"default"))&&a.push(h)}}}const c=[o,a];return it(t)&&i.set(t,c),c}function Bc(t){return t[0]!=="$"}function zc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hc(t,e){return zc(t)===zc(e)}function kc(t,e){return De(e)?e.findIndex(n=>Hc(n,t)):He(e)&&Hc(e,t)?0:-1}const Cd=t=>t[0]==="_"||t==="$stable",Yl=t=>De(t)?t.map(bn):[bn(t)],x_=(t,e,n)=>{if(e._n)return e;const i=Hg((...s)=>Yl(e(...s)),n);return i._c=!1,i},Ld=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Cd(s))continue;const r=t[s];if(He(r))e[s]=x_(s,r,i);else if(r!=null){const o=Yl(r);e[s]=()=>o}}},Pd=(t,e)=>{const n=Yl(e);t.slots.default=()=>n},E_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=je(e),Mo(e,"_",n)):Ld(e,t.slots={})}else t.slots={},e&&Pd(t,e);Mo(t.slots,Xo,1)},M_=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(xt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Ld(e,s)),o=e}else e&&(Pd(t,e),o={default:1});if(r)for(const a in s)!Cd(a)&&!(a in o)&&delete s[a]};function sl(t,e,n,i,s=!1){if(De(t)){t.forEach((d,p)=>sl(d,e&&(De(e)?e[p]:e),n,i,s));return}if(po(i)&&!s)return;const r=i.shapeFlag&4?$l(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ht(c)?(u[c]=null,Ye(h,c)&&(h[c]=null)):Rt(c)&&(c.value=null)),He(l))ui(l,a,12,[o,u]);else{const d=ht(l),p=Rt(l);if(d||p){const _=()=>{if(t.f){const x=d?Ye(h,l)?h[l]:u[l]:l.value;s?De(x)&&Il(x,r):De(x)?x.includes(r)||x.push(r):d?(u[l]=[r],Ye(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ye(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Ft(_,n)):_()}}}const Ft=Yg;function y_(t){return S_(t)}function S_(t,e){const n=ja();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=pn,insertStaticContent:_}=t,x=(g,T,C,F=null,B=null,$=null,re=!1,j=null,ae=!!T.dynamicChildren)=>{if(g===T)return;g&&!Hs(g,T)&&(F=D(g),N(g,B,$,!0),g=null),T.patchFlag===-2&&(ae=!1,T.dynamicChildren=null);const{type:te,ref:we,shapeFlag:E}=T;switch(te){case Wo:m(g,T,C,F);break;case _r:f(g,T,C,F);break;case ha:g==null&&b(T,C,F,re);break;case an:fe(g,T,C,F,B,$,re,j,ae);break;default:E&1?R(g,T,C,F,B,$,re,j,ae):E&6?k(g,T,C,F,B,$,re,j,ae):(E&64||E&128)&&te.process(g,T,C,F,B,$,re,j,ae,J)}we!=null&&B&&sl(we,g&&g.ref,$,T||g,!T)},m=(g,T,C,F)=>{if(g==null)i(T.el=a(T.children),C,F);else{const B=T.el=g.el;T.children!==g.children&&c(B,T.children)}},f=(g,T,C,F)=>{g==null?i(T.el=l(T.children||""),C,F):T.el=g.el},b=(g,T,C,F)=>{[g.el,g.anchor]=_(g.children,T,C,F,g.el,g.anchor)},M=({el:g,anchor:T},C,F)=>{let B;for(;g&&g!==T;)B=d(g),i(g,C,F),g=B;i(T,C,F)},S=({el:g,anchor:T})=>{let C;for(;g&&g!==T;)C=d(g),s(g),g=C;s(T)},R=(g,T,C,F,B,$,re,j,ae)=>{re=re||T.type==="svg",g==null?L(T,C,F,B,$,re,j,ae):y(g,T,B,$,re,j,ae)},L=(g,T,C,F,B,$,re,j)=>{let ae,te;const{type:we,props:E,shapeFlag:v,transition:U,dirs:Q}=g;if(ae=g.el=o(g.type,$,E&&E.is,E),v&8?u(ae,g.children):v&16&&V(g.children,ae,null,F,B,$&&we!=="foreignObject",re,j),Q&&bi(g,null,F,"created"),I(ae,g,g.scopeId,re,F),E){for(const ce in E)ce!=="value"&&!ho(ce)&&r(ae,ce,null,E[ce],$,g.children,F,B,me);"value"in E&&r(ae,"value",null,E.value),(te=E.onVnodeBeforeMount)&&En(te,F,g)}Q&&bi(g,null,F,"beforeMount");const ne=(!B||B&&!B.pendingBranch)&&U&&!U.persisted;ne&&U.beforeEnter(ae),i(ae,T,C),((te=E&&E.onVnodeMounted)||ne||Q)&&Ft(()=>{te&&En(te,F,g),ne&&U.enter(ae),Q&&bi(g,null,F,"mounted")},B)},I=(g,T,C,F,B)=>{if(C&&p(g,C),F)for(let $=0;$<F.length;$++)p(g,F[$]);if(B){let $=B.subTree;if(T===$){const re=B.vnode;I(g,re,re.scopeId,re.slotScopeIds,B.parent)}}},V=(g,T,C,F,B,$,re,j,ae=0)=>{for(let te=ae;te<g.length;te++){const we=g[te]=j?ii(g[te]):bn(g[te]);x(null,we,T,C,F,B,$,re,j)}},y=(g,T,C,F,B,$,re)=>{const j=T.el=g.el;let{patchFlag:ae,dynamicChildren:te,dirs:we}=T;ae|=g.patchFlag&16;const E=g.props||nt,v=T.props||nt;let U;C&&Ti(C,!1),(U=v.onVnodeBeforeUpdate)&&En(U,C,T,g),we&&bi(T,g,C,"beforeUpdate"),C&&Ti(C,!0);const Q=B&&T.type!=="foreignObject";if(te?A(g.dynamicChildren,te,j,C,F,Q,$):re||W(g,T,j,null,C,F,Q,$,!1),ae>0){if(ae&16)ie(j,T,E,v,C,F,B);else if(ae&2&&E.class!==v.class&&r(j,"class",null,v.class,B),ae&4&&r(j,"style",E.style,v.style,B),ae&8){const ne=T.dynamicProps;for(let ce=0;ce<ne.length;ce++){const ve=ne[ce],pe=E[ve],K=v[ve];(K!==pe||ve==="value")&&r(j,ve,pe,K,B,g.children,C,F,me)}}ae&1&&g.children!==T.children&&u(j,T.children)}else!re&&te==null&&ie(j,T,E,v,C,F,B);((U=v.onVnodeUpdated)||we)&&Ft(()=>{U&&En(U,C,T,g),we&&bi(T,g,C,"updated")},F)},A=(g,T,C,F,B,$,re)=>{for(let j=0;j<T.length;j++){const ae=g[j],te=T[j],we=ae.el&&(ae.type===an||!Hs(ae,te)||ae.shapeFlag&70)?h(ae.el):C;x(ae,te,we,null,F,B,$,re,!0)}},ie=(g,T,C,F,B,$,re)=>{if(C!==F){if(C!==nt)for(const j in C)!ho(j)&&!(j in F)&&r(g,j,C[j],null,re,T.children,B,$,me);for(const j in F){if(ho(j))continue;const ae=F[j],te=C[j];ae!==te&&j!=="value"&&r(g,j,te,ae,re,T.children,B,$,me)}"value"in F&&r(g,"value",C.value,F.value)}},fe=(g,T,C,F,B,$,re,j,ae)=>{const te=T.el=g?g.el:a(""),we=T.anchor=g?g.anchor:a("");let{patchFlag:E,dynamicChildren:v,slotScopeIds:U}=T;U&&(j=j?j.concat(U):U),g==null?(i(te,C,F),i(we,C,F),V(T.children,C,we,B,$,re,j,ae)):E>0&&E&64&&v&&g.dynamicChildren?(A(g.dynamicChildren,v,C,B,$,re,j),(T.key!=null||B&&T===B.subTree)&&Id(g,T,!0)):W(g,T,C,we,B,$,re,j,ae)},k=(g,T,C,F,B,$,re,j,ae)=>{T.slotScopeIds=j,g==null?T.shapeFlag&512?B.ctx.activate(T,C,F,re,ae):Y(T,C,F,B,$,re,ae):q(g,T,ae)},Y=(g,T,C,F,B,$,re)=>{const j=g.component=D_(g,F,B);if(Ed(g)&&(j.ctx.renderer=J),O_(j),j.asyncDep){if(B&&B.registerDep(j,se),!g.el){const ae=j.subTree=jt(_r);f(null,ae,T,C)}return}se(j,g,T,C,B,$,re)},q=(g,T,C)=>{const F=T.component=g.component;if(Gg(g,T,C))if(F.asyncDep&&!F.asyncResolved){G(F,T,C);return}else F.next=T,Ng(F.update),F.update();else T.el=g.el,F.vnode=T},se=(g,T,C,F,B,$,re)=>{const j=()=>{if(g.isMounted){let{next:we,bu:E,u:v,parent:U,vnode:Q}=g,ne=we,ce;Ti(g,!1),we?(we.el=Q.el,G(g,we,re)):we=Q,E&&la(E),(ce=we.props&&we.props.onVnodeBeforeUpdate)&&En(ce,U,we,Q),Ti(g,!0);const ve=ca(g),pe=g.subTree;g.subTree=ve,x(pe,ve,h(pe.el),D(pe),g,B,$),we.el=ve.el,ne===null&&Wg(g,ve.el),v&&Ft(v,B),(ce=we.props&&we.props.onVnodeUpdated)&&Ft(()=>En(ce,U,we,Q),B)}else{let we;const{el:E,props:v}=T,{bm:U,m:Q,parent:ne}=g,ce=po(T);if(Ti(g,!1),U&&la(U),!ce&&(we=v&&v.onVnodeBeforeMount)&&En(we,ne,T),Ti(g,!0),E&&Ae){const ve=()=>{g.subTree=ca(g),Ae(E,g.subTree,g,B,null)};ce?T.type.__asyncLoader().then(()=>!g.isUnmounted&&ve()):ve()}else{const ve=g.subTree=ca(g);x(null,ve,C,F,g,B,$),T.el=ve.el}if(Q&&Ft(Q,B),!ce&&(we=v&&v.onVnodeMounted)){const ve=T;Ft(()=>En(we,ne,ve),B)}(T.shapeFlag&256||ne&&po(ne.vnode)&&ne.vnode.shapeFlag&256)&&g.a&&Ft(g.a,B),g.isMounted=!0,T=C=F=null}},ae=g.effect=new Fl(j,()=>Wl(te),g.scope),te=g.update=()=>ae.run();te.id=g.uid,Ti(g,!0),te()},G=(g,T,C)=>{T.component=g;const F=g.vnode.props;g.vnode=T,g.next=null,v_(g,T.props,F,C),M_(g,T.children,C),Us(),Pc(),Ds()},W=(g,T,C,F,B,$,re,j,ae=!1)=>{const te=g&&g.children,we=g?g.shapeFlag:0,E=T.children,{patchFlag:v,shapeFlag:U}=T;if(v>0){if(v&128){oe(te,E,C,F,B,$,re,j,ae);return}else if(v&256){he(te,E,C,F,B,$,re,j,ae);return}}U&8?(we&16&&me(te,B,$),E!==te&&u(C,E)):we&16?U&16?oe(te,E,C,F,B,$,re,j,ae):me(te,B,$,!0):(we&8&&u(C,""),U&16&&V(E,C,F,B,$,re,j,ae))},he=(g,T,C,F,B,$,re,j,ae)=>{g=g||gs,T=T||gs;const te=g.length,we=T.length,E=Math.min(te,we);let v;for(v=0;v<E;v++){const U=T[v]=ae?ii(T[v]):bn(T[v]);x(g[v],U,C,null,B,$,re,j,ae)}te>we?me(g,B,$,!0,!1,E):V(T,C,F,B,$,re,j,ae,E)},oe=(g,T,C,F,B,$,re,j,ae)=>{let te=0;const we=T.length;let E=g.length-1,v=we-1;for(;te<=E&&te<=v;){const U=g[te],Q=T[te]=ae?ii(T[te]):bn(T[te]);if(Hs(U,Q))x(U,Q,C,null,B,$,re,j,ae);else break;te++}for(;te<=E&&te<=v;){const U=g[E],Q=T[v]=ae?ii(T[v]):bn(T[v]);if(Hs(U,Q))x(U,Q,C,null,B,$,re,j,ae);else break;E--,v--}if(te>E){if(te<=v){const U=v+1,Q=U<we?T[U].el:F;for(;te<=v;)x(null,T[te]=ae?ii(T[te]):bn(T[te]),C,Q,B,$,re,j,ae),te++}}else if(te>v)for(;te<=E;)N(g[te],B,$,!0),te++;else{const U=te,Q=te,ne=new Map;for(te=Q;te<=v;te++){const Ee=T[te]=ae?ii(T[te]):bn(T[te]);Ee.key!=null&&ne.set(Ee.key,te)}let ce,ve=0;const pe=v-Q+1;let K=!1,Le=0;const Ce=new Array(pe);for(te=0;te<pe;te++)Ce[te]=0;for(te=U;te<=E;te++){const Ee=g[te];if(ve>=pe){N(Ee,B,$,!0);continue}let ye;if(Ee.key!=null)ye=ne.get(Ee.key);else for(ce=Q;ce<=v;ce++)if(Ce[ce-Q]===0&&Hs(Ee,T[ce])){ye=ce;break}ye===void 0?N(Ee,B,$,!0):(Ce[ye-Q]=te+1,ye>=Le?Le=ye:K=!0,x(Ee,T[ye],C,null,B,$,re,j,ae),ve++)}const Pe=K?w_(Ce):gs;for(ce=Pe.length-1,te=pe-1;te>=0;te--){const Ee=Q+te,ye=T[Ee],Fe=Ee+1<we?T[Ee+1].el:F;Ce[te]===0?x(null,ye,C,Fe,B,$,re,j,ae):K&&(ce<0||te!==Pe[ce]?Te(ye,C,Fe,2):ce--)}}},Te=(g,T,C,F,B=null)=>{const{el:$,type:re,transition:j,children:ae,shapeFlag:te}=g;if(te&6){Te(g.component.subTree,T,C,F);return}if(te&128){g.suspense.move(T,C,F);return}if(te&64){re.move(g,T,C,J);return}if(re===an){i($,T,C);for(let E=0;E<ae.length;E++)Te(ae[E],T,C,F);i(g.anchor,T,C);return}if(re===ha){M(g,T,C);return}if(F!==2&&te&1&&j)if(F===0)j.beforeEnter($),i($,T,C),Ft(()=>j.enter($),B);else{const{leave:E,delayLeave:v,afterLeave:U}=j,Q=()=>i($,T,C),ne=()=>{E($,()=>{Q(),U&&U()})};v?v($,Q,ne):ne()}else i($,T,C)},N=(g,T,C,F=!1,B=!1)=>{const{type:$,props:re,ref:j,children:ae,dynamicChildren:te,shapeFlag:we,patchFlag:E,dirs:v}=g;if(j!=null&&sl(j,null,C,g,!0),we&256){T.ctx.deactivate(g);return}const U=we&1&&v,Q=!po(g);let ne;if(Q&&(ne=re&&re.onVnodeBeforeUnmount)&&En(ne,T,g),we&6)be(g.component,C,F);else{if(we&128){g.suspense.unmount(C,F);return}U&&bi(g,null,T,"beforeUnmount"),we&64?g.type.remove(g,T,C,B,J,F):te&&($!==an||E>0&&E&64)?me(te,T,C,!1,!0):($===an&&E&384||!B&&we&16)&&me(ae,T,C),F&&ue(g)}(Q&&(ne=re&&re.onVnodeUnmounted)||U)&&Ft(()=>{ne&&En(ne,T,g),U&&bi(g,null,T,"unmounted")},C)},ue=g=>{const{type:T,el:C,anchor:F,transition:B}=g;if(T===an){de(C,F);return}if(T===ha){S(g);return}const $=()=>{s(C),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(g.shapeFlag&1&&B&&!B.persisted){const{leave:re,delayLeave:j}=B,ae=()=>re(C,$);j?j(g.el,$,ae):ae()}else $()},de=(g,T)=>{let C;for(;g!==T;)C=d(g),s(g),g=C;s(T)},be=(g,T,C)=>{const{bum:F,scope:B,update:$,subTree:re,um:j}=g;F&&la(F),B.stop(),$&&($.active=!1,N(re,g,T,C)),j&&Ft(j,T),Ft(()=>{g.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},me=(g,T,C,F=!1,B=!1,$=0)=>{for(let re=$;re<g.length;re++)N(g[re],T,C,F,B)},D=g=>g.shapeFlag&6?D(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),le=(g,T,C)=>{g==null?T._vnode&&N(T._vnode,null,null,!0):x(T._vnode||null,g,T,null,null,null,C),Pc(),fd(),T._vnode=g},J={p:x,um:N,m:Te,r:ue,mt:Y,mc:V,pc:W,pbc:A,n:D,o:t};let xe,Ae;return e&&([xe,Ae]=e(J)),{render:le,hydrate:xe,createApp:g_(le,xe)}}function Ti({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Id(t,e,n=!1){const i=t.children,s=e.children;if(De(i)&&De(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ii(s[r]),a.el=o.el),n||Id(o,a)),a.type===Wo&&(a.el=o.el)}}function w_(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const b_=t=>t.__isTeleport,an=Symbol.for("v-fgt"),Wo=Symbol.for("v-txt"),_r=Symbol.for("v-cmt"),ha=Symbol.for("v-stc"),er=[];let fn=null;function To(t=!1){er.push(fn=t?null:[])}function T_(){er.pop(),fn=er[er.length-1]||null}let vr=1;function Vc(t){vr+=t}function A_(t){return t.dynamicChildren=vr>0?fn||gs:null,T_(),vr>0&&fn&&fn.push(t),t}function Ao(t,e,n,i,s,r){return A_(Bt(t,e,n,i,s,r,!0))}function rl(t){return t?t.__v_isVNode===!0:!1}function Hs(t,e){return t.type===e.type&&t.key===e.key}const Xo="__vInternal",Ud=({key:t})=>t??null,go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||Rt(t)||He(t)?{i:dn,r:t,k:e,f:!!n}:t:null);function Bt(t,e=null,n=null,i=0,s=null,r=t===an?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ud(e),ref:e&&go(e),scopeId:gd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dn};return a?(ql(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ht(n)?8:16),vr>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const jt=R_;function R_(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===o_)&&(t=_r),rl(t)){const a=ws(t,e,!0);return n&&ql(a,n),vr>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(t)]=a:fn.push(a)),a.patchFlag|=-2,a}if(H_(t)&&(t=t.__vccOpts),e){e=C_(e);let{class:a,style:l}=e;a&&!ht(a)&&(e.class=Ni(a)),it(l)&&(sd(l)&&!De(l)&&(l=xt({},l)),e.style=Ol(l))}const o=ht(t)?1:Xg(t)?128:b_(t)?64:it(t)?4:He(t)?2:0;return Bt(t,e,n,i,s,o,r,!0)}function C_(t){return t?sd(t)||Xo in t?xt({},t):t:null}function ws(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?P_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ud(a),ref:e&&e.ref?n&&s?De(s)?s.concat(go(e)):[s,go(e)]:go(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==an?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ws(t.ssContent),ssFallback:t.ssFallback&&ws(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function L_(t=" ",e=0){return jt(Wo,null,t,e)}function bn(t){return t==null||typeof t=="boolean"?jt(_r):De(t)?jt(an,null,t.slice()):typeof t=="object"?ii(t):jt(Wo,null,String(t))}function ii(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ws(t)}function ql(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(De(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ql(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Xo in e)?e._ctx=dn:s===3&&dn&&(dn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:dn},n=32):(e=String(e),i&64?(n=16,e=[L_(e)]):n=8);t.children=e,t.shapeFlag|=n}function P_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ni([e.class,i.class]));else if(s==="style")e.style=Ol([e.style,i.style]);else if(No(s)){const r=e[s],o=i[s];o&&r!==o&&!(De(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function En(t,e,n,i=null){mn(t,e,7,[n,i])}const I_=Td();let U_=0;function D_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||I_,r={uid:U_++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rd(i,s),emitsOptions:md(i,s),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zg.bind(null,r),t.ce&&t.ce(r),r}let St=null,jl,qi,Gc="__VUE_INSTANCE_SETTERS__";(qi=ja()[Gc])||(qi=ja()[Gc]=[]),qi.push(t=>St=t),jl=t=>{qi.length>1?qi.forEach(e=>e(t)):qi[0](t)};const bs=t=>{jl(t),t.scope.on()},zi=()=>{St&&St.scope.off(),jl(null)};function Dd(t){return t.vnode.shapeFlag&4}let xr=!1;function O_(t,e=!1){xr=e;const{props:n,children:i}=t.vnode,s=Dd(t);__(t,n,s,e),E_(t,i);const r=s?N_(t,e):void 0;return xr=!1,r}function N_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rd(new Proxy(t.ctx,c_));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?B_(t):null;bs(t),Us();const r=ui(i,t,0,[t.props,s]);if(Ds(),zi(),kh(r)){if(r.then(zi,zi),e)return r.then(o=>{Wc(t,o,e)}).catch(o=>{ko(o,t,0)});t.asyncDep=r}else Wc(t,r,e)}else Od(t,e)}function Wc(t,e,n){He(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:it(e)&&(t.setupState=cd(e)),Od(t,n)}let Xc;function Od(t,e,n){const i=t.type;if(!t.render){if(!e&&Xc&&!i.render){const s=i.template||Xl(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=xt(xt({isCustomElement:r,delimiters:a},o),l);i.render=Xc(s,c)}}t.render=i.render||pn}bs(t),Us(),u_(t),Ds(),zi()}function F_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Vt(t,"get","$attrs"),e[n]}}))}function B_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return F_(t)},slots:t.slots,emit:t.emit,expose:e}}function $l(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cd(rd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}}))}function z_(t,e=!0){return He(t)?t.displayName||t.name:t.name||e&&t.__name}function H_(t){return He(t)&&"__vccOpts"in t}const en=(t,e)=>Ug(t,e,xr);function Nd(t,e,n){const i=arguments.length;return i===2?it(e)&&!De(e)?rl(e)?jt(t,null,[e]):jt(t,e):jt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&rl(n)&&(n=[n]),jt(t,e,n))}const k_=Symbol.for("v-scx"),V_=()=>Xn(k_),G_="3.3.4",W_="http://www.w3.org/2000/svg",Di=typeof document<"u"?document:null,Yc=Di&&Di.createElement("template"),X_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?Di.createElementNS(W_,t):Di.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Di.createTextNode(t),createComment:t=>Di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Yc.innerHTML=i?`<svg>${t}</svg>`:t;const a=Yc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Y_(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function q_(t,e,n){const i=t.style,s=ht(n);if(n&&!s){if(e&&!ht(e))for(const r in e)n[r]==null&&ol(i,r,"");for(const r in n)ol(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const qc=/\s*!important$/;function ol(t,e,n){if(De(n))n.forEach(i=>ol(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=j_(t,e);qc.test(n)?t.setProperty(Is(i),n.replace(qc,""),"important"):t[i]=n}}const jc=["Webkit","Moz","ms"],da={};function j_(t,e){const n=da[e];if(n)return n;let i=Ln(e);if(i!=="filter"&&i in t)return da[e]=i;i=zo(i);for(let s=0;s<jc.length;s++){const r=jc[s]+i;if(r in t)return da[e]=r}return e}const $c="http://www.w3.org/1999/xlink";function $_(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($c,e.slice(6,e.length)):t.setAttributeNS($c,e,n);else{const r=Jm(e);n==null||r&&!Wh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function K_(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Z_(t,e,n,i){t.addEventListener(e,n,i)}function J_(t,e,n,i){t.removeEventListener(e,n,i)}function Q_(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=ev(e);if(i){const c=r[e]=iv(i,s);Z_(t,a,c,l)}else o&&(J_(t,a,o,l),r[e]=void 0)}}const Kc=/(?:Once|Passive|Capture)$/;function ev(t){let e;if(Kc.test(t)){e={};let i;for(;i=t.match(Kc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Is(t.slice(2)),e]}let fa=0;const tv=Promise.resolve(),nv=()=>fa||(tv.then(()=>fa=0),fa=Date.now());function iv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;mn(sv(i,n.value),e,5,[i])};return n.value=t,n.attached=nv(),n}function sv(t,e){if(De(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Zc=/^on[a-z]/,rv=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?Y_(t,i,s):e==="style"?q_(t,n,i):No(e)?Pl(e)||Q_(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ov(t,e,i,s))?K_(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),$_(t,e,i,s))};function ov(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Zc.test(e)&&He(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Zc.test(e)&&ht(n)?!1:e in t}const av=xt({patchProp:rv},X_);let Jc;function lv(){return Jc||(Jc=y_(av))}const cv=(...t)=>{const e=lv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=uv(i);if(!s)return;const r=e._component;!He(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function uv(t){return ht(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const us=typeof window<"u";function hv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function pa(t,e){const n={};for(const i in e){const s=e[i];n[i]=gn(s)?s.map(t):t(s)}return n}const tr=()=>{},gn=Array.isArray,dv=/\/$/,fv=t=>t.replace(dv,"");function ma(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=_v(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function pv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Ts(e.matched[i],n.matched[s])&&Fd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gv(t[n],e[n]))return!1;return!0}function gv(t,e){return gn(t)?eu(t,e):gn(e)?eu(e,t):t===e}function eu(t,e){return gn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function _v(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Er;(function(t){t.pop="pop",t.push="push"})(Er||(Er={}));var nr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(nr||(nr={}));function vv(t){if(!t)if(us){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fv(t)}const xv=/^[^#]+#/;function Ev(t,e){return t.replace(xv,"#")+e}function Mv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Yo=()=>({left:window.pageXOffset,top:window.pageYOffset});function yv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Mv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tu(t,e){return(history.state?history.state.position-e:-1)+t}const al=new Map;function Sv(t,e){al.set(t,e)}function wv(t){const e=al.get(t);return al.delete(t),e}let bv=()=>location.protocol+"//"+location.host;function Bd(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Qc(l,"")}return Qc(n,t)+i+s}function Tv(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const p=Bd(t,location),_=n.value,x=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}m=x?d.position-x.position:0}else i(p);s.forEach(f=>{f(n.value,_,{delta:m,type:Er.pop,direction:m?m>0?nr.forward:nr.back:nr.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Ke({},d.state,{scroll:Yo()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function nu(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Yo():null}}function Av(t){const{history:e,location:n}=window,i={value:Bd(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:bv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ke({},e.state,nu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Ke({},s.value,e.state,{forward:l,scroll:Yo()});r(u.current,u,!0);const h=Ke({},nu(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Rv(t){t=vv(t);const e=Av(t),n=Tv(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ke({location:"",base:t,go:i,createHref:Ev.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Cv(t){return typeof t=="string"||t&&typeof t=="object"}function zd(t){return typeof t=="string"||typeof t=="symbol"}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hd=Symbol("");var iu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(iu||(iu={}));function As(t,e){return Ke(new Error,{type:t,[Hd]:!0},e)}function In(t,e){return t instanceof Error&&Hd in t&&(e==null||!!(t.type&e))}const su="[^/]+?",Lv={sensitive:!1,strict:!1,start:!0,end:!0},Pv=/[.+*?^${}()[\]/\\]/g;function Iv(t,e){const n=Ke({},Lv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Pv,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:x,optional:m,regexp:f}=d;r.push({name:_,repeatable:x,optional:m});const b=f||su;if(b!==su){p+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+S.message)}}let M=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,p+=20,m&&(p+=-8),x&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=r[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:x,optional:m}=p,f=_ in c?c[_]:"";if(gn(f)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=gn(f)?f.join("/"):f;if(!b)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Uv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Dv(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Uv(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(ru(i))return 1;if(ru(s))return-1}return s.length-i.length}function ru(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ov={type:0,value:""},Nv=/[a-zA-Z0-9_]/;function Fv(t){if(!t)return[[]];if(t==="/")return[[Ov]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:Nv.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Bv(t,e,n){const i=Iv(Fv(t.path),n),s=Ke(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zv(t,e){const n=[],i=new Map;e=lu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const p=!d,_=Hv(u);_.aliasOf=d&&d.record;const x=lu(e,u),m=[_];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of M)m.push(Ke({},_,{components:d?d.record.components:_.components,path:S,aliasOf:d?d.record:_}))}let f,b;for(const M of m){const{path:S}=M;if(h&&S[0]!=="/"){const R=h.record.path,L=R[R.length-1]==="/"?"":"/";M.path=h.record.path+(S&&L+S)}if(f=Bv(M,h,x),d?d.alias.push(f):(b=b||f,b!==f&&b.alias.push(f),p&&u.name&&!au(f)&&o(u.name)),_.children){const R=_.children;for(let L=0;L<R.length;L++)r(R[L],f,d&&d.children[L])}d=d||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return b?()=>{o(b)}:tr}function o(u){if(zd(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Dv(u,n[h])>=0&&(u.record.path!==n[h].record.path||!kd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!au(u)&&i.set(u.record.name,u)}function c(u,h){let d,p={},_,x;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw As(1,{location:u});x=d.record.name,p=Ke(ou(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&ou(u.params,d.keys.map(b=>b.name))),_=d.stringify(p)}else if("path"in u)_=u.path,d=n.find(b=>b.re.test(_)),d&&(p=d.parse(_),x=d.record.name);else{if(d=h.name?i.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw As(1,{location:u,currentLocation:h});x=d.record.name,p=Ke({},h.params,u.params),_=d.stringify(p)}const m=[];let f=d;for(;f;)m.unshift(f.record),f=f.parent;return{name:x,path:_,params:p,matched:m,meta:Vv(m)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ou(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Hv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:kv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function kv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function au(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vv(t){return t.reduce((e,n)=>Ke(e,n.meta),{})}function lu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function kd(t,e){return e.children.some(n=>n===t||kd(t,n))}const Vd=/#/g,Gv=/&/g,Wv=/\//g,Xv=/=/g,Yv=/\?/g,Gd=/\+/g,qv=/%5B/g,jv=/%5D/g,Wd=/%5E/g,$v=/%60/g,Xd=/%7B/g,Kv=/%7C/g,Yd=/%7D/g,Zv=/%20/g;function Kl(t){return encodeURI(""+t).replace(Kv,"|").replace(qv,"[").replace(jv,"]")}function Jv(t){return Kl(t).replace(Xd,"{").replace(Yd,"}").replace(Wd,"^")}function ll(t){return Kl(t).replace(Gd,"%2B").replace(Zv,"+").replace(Vd,"%23").replace(Gv,"%26").replace($v,"`").replace(Xd,"{").replace(Yd,"}").replace(Wd,"^")}function Qv(t){return ll(t).replace(Xv,"%3D")}function e0(t){return Kl(t).replace(Vd,"%23").replace(Yv,"%3F")}function t0(t){return t==null?"":e0(t).replace(Wv,"%2F")}function Ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function n0(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Gd," "),o=r.indexOf("="),a=Ro(o<0?r:r.slice(0,o)),l=o<0?null:Ro(r.slice(o+1));if(a in e){let c=e[a];gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cu(t){let e="";for(let n in t){const i=t[n];if(n=Qv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(i)?i.map(r=>r&&ll(r)):[i&&ll(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function i0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=gn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const s0=Symbol(""),uu=Symbol(""),Zl=Symbol(""),qd=Symbol(""),cl=Symbol("");function ks(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function si(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(As(4,{from:n,to:e})):h instanceof Error?a(h):Cv(h)?a(As(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ga(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(r0(a)){const c=(a.__vccOpts||a)[e];c&&s.push(si(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=hv(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&si(d,n,i,r,o)()}))}}return s}function r0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hu(t){const e=Xn(Zl),n=Xn(qd),i=en(()=>e.resolve(Bi(t.to))),s=en(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ts.bind(null,u));if(d>-1)return d;const p=du(l[c-2]);return c>1&&du(u)===p&&h[h.length-1].path!==p?h.findIndex(Ts.bind(null,l[c-2])):d}),r=en(()=>s.value>-1&&c0(n.params,i.value.params)),o=en(()=>s.value>-1&&s.value===n.matched.length-1&&Fd(n.params,i.value.params));function a(l={}){return l0(l)?e[Bi(t.replace)?"replace":"push"](Bi(t.to)).catch(tr):Promise.resolve()}return{route:i,href:en(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const o0=xd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hu,setup(t,{slots:e}){const n=Rr(hu(t)),{options:i}=Xn(Zl),s=en(()=>({[fu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[fu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Nd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),a0=o0;function l0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function c0(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!gn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function du(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fu=(t,e,n)=>t??e??n,u0=xd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Xn(cl),s=en(()=>t.route||i.value),r=Xn(uu,0),o=en(()=>{let c=Bi(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=en(()=>s.value.matched[o.value]);mo(uu,en(()=>o.value+1)),mo(s0,a),mo(cl,s);const l=$s();return fo(()=>[l.value,a.value,t.name],([c,u,h],[d,p,_])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ts(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return pu(n.default,{Component:d,route:c});const p=h.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Nd(d,Ke({},_,e,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return pu(n.default,{Component:m,route:c})||m}}});function pu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const h0=u0;function d0(t){const e=zv(t.routes,t),n=t.parseQuery||n0,i=t.stringifyQuery||cu,s=t.history,r=ks(),o=ks(),a=ks(),l=Cg(Zn);let c=Zn;us&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pa.bind(null,D=>""+D),h=pa.bind(null,t0),d=pa.bind(null,Ro);function p(D,le){let J,xe;return zd(D)?(J=e.getRecordMatcher(D),xe=le):xe=D,e.addRoute(xe,J)}function _(D){const le=e.getRecordMatcher(D);le&&e.removeRoute(le)}function x(){return e.getRoutes().map(D=>D.record)}function m(D){return!!e.getRecordMatcher(D)}function f(D,le){if(le=Ke({},le||l.value),typeof D=="string"){const C=ma(n,D,le.path),F=e.resolve({path:C.path},le),B=s.createHref(C.fullPath);return Ke(C,F,{params:d(F.params),hash:Ro(C.hash),redirectedFrom:void 0,href:B})}let J;if("path"in D)J=Ke({},D,{path:ma(n,D.path,le.path).path});else{const C=Ke({},D.params);for(const F in C)C[F]==null&&delete C[F];J=Ke({},D,{params:h(C)}),le.params=h(le.params)}const xe=e.resolve(J,le),Ae=D.hash||"";xe.params=u(d(xe.params));const g=pv(i,Ke({},D,{hash:Jv(Ae),path:xe.path})),T=s.createHref(g);return Ke({fullPath:g,hash:Ae,query:i===cu?i0(D.query):D.query||{}},xe,{redirectedFrom:void 0,href:T})}function b(D){return typeof D=="string"?ma(n,D,l.value.path):Ke({},D)}function M(D,le){if(c!==D)return As(8,{from:le,to:D})}function S(D){return I(D)}function R(D){return S(Ke(b(D),{replace:!0}))}function L(D){const le=D.matched[D.matched.length-1];if(le&&le.redirect){const{redirect:J}=le;let xe=typeof J=="function"?J(D):J;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=b(xe):{path:xe},xe.params={}),Ke({query:D.query,hash:D.hash,params:"path"in xe?{}:D.params},xe)}}function I(D,le){const J=c=f(D),xe=l.value,Ae=D.state,g=D.force,T=D.replace===!0,C=L(J);if(C)return I(Ke(b(C),{state:typeof C=="object"?Ke({},Ae,C.state):Ae,force:g,replace:T}),le||J);const F=J;F.redirectedFrom=le;let B;return!g&&mv(i,xe,J)&&(B=As(16,{to:F,from:xe}),Te(xe,xe,!0,!1)),(B?Promise.resolve(B):A(F,xe)).catch($=>In($)?In($,2)?$:oe($):W($,F,xe)).then($=>{if($){if(In($,2))return I(Ke({replace:T},b($.to),{state:typeof $.to=="object"?Ke({},Ae,$.to.state):Ae,force:g}),le||F)}else $=fe(F,xe,!0,T,Ae);return ie(F,xe,$),$})}function V(D,le){const J=M(D,le);return J?Promise.reject(J):Promise.resolve()}function y(D){const le=de.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(D):D()}function A(D,le){let J;const[xe,Ae,g]=f0(D,le);J=ga(xe.reverse(),"beforeRouteLeave",D,le);for(const C of xe)C.leaveGuards.forEach(F=>{J.push(si(F,D,le))});const T=V.bind(null,D,le);return J.push(T),me(J).then(()=>{J=[];for(const C of r.list())J.push(si(C,D,le));return J.push(T),me(J)}).then(()=>{J=ga(Ae,"beforeRouteUpdate",D,le);for(const C of Ae)C.updateGuards.forEach(F=>{J.push(si(F,D,le))});return J.push(T),me(J)}).then(()=>{J=[];for(const C of D.matched)if(C.beforeEnter&&!le.matched.includes(C))if(gn(C.beforeEnter))for(const F of C.beforeEnter)J.push(si(F,D,le));else J.push(si(C.beforeEnter,D,le));return J.push(T),me(J)}).then(()=>(D.matched.forEach(C=>C.enterCallbacks={}),J=ga(g,"beforeRouteEnter",D,le),J.push(T),me(J))).then(()=>{J=[];for(const C of o.list())J.push(si(C,D,le));return J.push(T),me(J)}).catch(C=>In(C,8)?C:Promise.reject(C))}function ie(D,le,J){for(const xe of a.list())y(()=>xe(D,le,J))}function fe(D,le,J,xe,Ae){const g=M(D,le);if(g)return g;const T=le===Zn,C=us?history.state:{};J&&(xe||T?s.replace(D.fullPath,Ke({scroll:T&&C&&C.scroll},Ae)):s.push(D.fullPath,Ae)),l.value=D,Te(D,le,J,T),oe()}let k;function Y(){k||(k=s.listen((D,le,J)=>{if(!be.listening)return;const xe=f(D),Ae=L(xe);if(Ae){I(Ke(Ae,{replace:!0}),xe).catch(tr);return}c=xe;const g=l.value;us&&Sv(tu(g.fullPath,J.delta),Yo()),A(xe,g).catch(T=>In(T,12)?T:In(T,2)?(I(T.to,xe).then(C=>{In(C,20)&&!J.delta&&J.type===Er.pop&&s.go(-1,!1)}).catch(tr),Promise.reject()):(J.delta&&s.go(-J.delta,!1),W(T,xe,g))).then(T=>{T=T||fe(xe,g,!1),T&&(J.delta&&!In(T,8)?s.go(-J.delta,!1):J.type===Er.pop&&In(T,20)&&s.go(-1,!1)),ie(xe,g,T)}).catch(tr)}))}let q=ks(),se=ks(),G;function W(D,le,J){oe(D);const xe=se.list();return xe.length?xe.forEach(Ae=>Ae(D,le,J)):console.error(D),Promise.reject(D)}function he(){return G&&l.value!==Zn?Promise.resolve():new Promise((D,le)=>{q.add([D,le])})}function oe(D){return G||(G=!D,Y(),q.list().forEach(([le,J])=>D?J(D):le()),q.reset()),D}function Te(D,le,J,xe){const{scrollBehavior:Ae}=t;if(!us||!Ae)return Promise.resolve();const g=!J&&wv(tu(D.fullPath,0))||(xe||!J)&&history.state&&history.state.scroll||null;return hd().then(()=>Ae(D,le,g)).then(T=>T&&yv(T)).catch(T=>W(T,D,le))}const N=D=>s.go(D);let ue;const de=new Set,be={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:m,getRoutes:x,resolve:f,options:t,push:S,replace:R,go:N,back:()=>N(-1),forward:()=>N(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:he,install(D){const le=this;D.component("RouterLink",a0),D.component("RouterView",h0),D.config.globalProperties.$router=le,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Bi(l)}),us&&!ue&&l.value===Zn&&(ue=!0,S(s.location).catch(Ae=>{}));const J={};for(const Ae in Zn)J[Ae]=en(()=>l.value[Ae]);D.provide(Zl,le),D.provide(qd,Rr(J)),D.provide(cl,l);const xe=D.unmount;de.add(D),D.unmount=function(){de.delete(D),de.size<1&&(c=Zn,k&&k(),k=null,l.value=Zn,ue=!1,G=!1),xe()}}};function me(D){return D.reduce((le,J)=>le.then(()=>y(J)),Promise.resolve())}return be}function f0(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ts(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ts(c,l))||s.push(l))}return[n,i,s]}const p0={class:"version"},m0={__name:"app",setup(t){const e="1.3.1";return(n,i)=>{const s=r_("router-view");return To(),Ao(an,null,[jt(s),Bt("span",p0,"v"+Xh(Bi(e)),1)],64)}}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="153",g0=0,mu=1,_0=2,jd=1,v0=2,Hn=3,_i=0,Ht=1,Vn=2,hi=0,Es=1,gu=2,_u=3,vu=4,x0=5,hs=100,E0=101,M0=102,xu=103,Eu=104,y0=200,S0=201,w0=202,b0=203,$d=204,Kd=205,T0=206,A0=207,R0=208,C0=209,L0=210,P0=0,I0=1,U0=2,ul=3,D0=4,O0=5,N0=6,F0=7,Zd=0,B0=1,z0=2,Yn=0,H0=1,k0=2,V0=3,G0=4,W0=5,Jd=300,Rs=301,Cs=302,hl=303,dl=304,qo=306,fl=1e3,un=1001,pl=1002,Dt=1003,Mu=1004,_a=1005,qt=1006,X0=1007,Mr=1008,di=1009,Y0=1010,q0=1011,Ql=1012,Qd=1013,oi=1014,ai=1015,yr=1016,ef=1017,tf=1018,Hi=1020,j0=1021,hn=1023,$0=1024,K0=1025,ki=1026,Ls=1027,Z0=1028,nf=1029,J0=1030,sf=1031,rf=1033,va=33776,xa=33777,Ea=33778,Ma=33779,yu=35840,Su=35841,wu=35842,bu=35843,Q0=36196,Tu=37492,Au=37496,Ru=37808,Cu=37809,Lu=37810,Pu=37811,Iu=37812,Uu=37813,Du=37814,Ou=37815,Nu=37816,Fu=37817,Bu=37818,zu=37819,Hu=37820,ku=37821,ya=36492,ex=36283,Vu=36284,Gu=36285,Wu=36286,of=3e3,Vi=3001,tx=3200,nx=3201,ix=0,sx=1,Gi="",ze="srgb",_n="srgb-linear",af="display-p3",Sa=7680,rx=519,ox=512,ax=513,lx=514,cx=515,ux=516,hx=517,dx=518,fx=519,Xu=35044,Yu="300 es",ml=1035,Gn=2e3,Co=2001;class Os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const ir=Math.PI/180,Sr=180/Math.PI;function Ns(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[t&255]+bt[t>>8&255]+bt[t>>16&255]+bt[t>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[n&63|128]+bt[n>>8&255]+"-"+bt[n>>16&255]+bt[n>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Mt(t,e,n){return Math.max(e,Math.min(n,t))}function ec(t,e){return(t%e+e)%e}function px(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function mx(t,e,n){return t!==e?(n-t)/(e-t):0}function sr(t,e,n){return(1-n)*t+n*e}function gx(t,e,n,i){return sr(t,e,1-Math.exp(-n*i))}function _x(t,e=1){return e-Math.abs(ec(t,e*2)-e)}function vx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function xx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Ex(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Mx(t,e){return t+Math.random()*(e-t)}function yx(t){return t*(.5-Math.random())}function Sx(t){t!==void 0&&(qu=t);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wx(t){return t*ir}function bx(t){return t*Sr}function gl(t){return(t&t-1)===0&&t!==0}function Tx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Lo(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ax(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ut={DEG2RAD:ir,RAD2DEG:Sr,generateUUID:Ns,clamp:Mt,euclideanModulo:ec,mapLinear:px,inverseLerp:mx,lerp:sr,damp:gx,pingpong:_x,smoothstep:vx,smootherstep:xx,randInt:Ex,randFloat:Mx,randFloatSpread:yx,seededRandom:Sx,degToRad:wx,radToDeg:bx,isPowerOfTwo:gl,ceilPowerOfTwo:Tx,floorPowerOfTwo:Lo,setQuaternionFromProperEuler:Ax,normalize:Nt,denormalize:Zs};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,s,r,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],x=s[0],m=s[3],f=s[6],b=s[1],M=s[4],S=s[7],R=s[2],L=s[5],I=s[8];return r[0]=o*x+a*b+l*R,r[3]=o*m+a*M+l*L,r[6]=o*f+a*S+l*I,r[1]=c*x+u*b+h*R,r[4]=c*m+u*M+h*L,r[7]=c*f+u*S+h*I,r[2]=d*x+p*b+_*R,r[5]=d*m+p*M+_*L,r[8]=d*f+p*S+_*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=n*h+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(wa.makeScale(e,n)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,n){return this.premultiply(wa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Ve;function lf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Po(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const ju={};function rr(t){t in ju||(ju[t]=!0,console.warn(t))}function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ba(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Rx=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Cx=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Lx(t){return t.convertSRGBToLinear().applyMatrix3(Cx)}function Px(t){return t.applyMatrix3(Rx).convertLinearToSRGB()}const Ix={[_n]:t=>t,[ze]:t=>t.convertSRGBToLinear(),[af]:Lx},Ux={[_n]:t=>t,[ze]:t=>t.convertLinearToSRGB(),[af]:Px},Zt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return _n},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ix[e],s=Ux[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ji;class cf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ji===void 0&&(ji=Po("canvas")),ji.width=e.width,ji.height=e.height;const i=ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ji}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Po("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dx=0;class uf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Ns(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ta(s[o].image)):r.push(Ta(s[o]))}else r=Ta(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Ta(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ox=0;class _t extends Os{constructor(e=_t.DEFAULT_IMAGE,n=_t.DEFAULT_MAPPING,i=un,s=un,r=qt,o=Mr,a=hn,l=di,c=_t.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Ns(),this.name="",this.source=new uf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Vi?ze:Gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fl:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fl:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?Vi:of}set encoding(e){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vi?ze:Gi}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=Jd;_t.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(p+1)/2,R=(f+1)/2,L=(u+d)/4,I=(h+x)/4,V=(_+m)/4;return M>S&&M>R?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=L/i,r=I/i):S>R?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=L/s,r=V/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=I/r,s=V/r),this.set(i,s,r,n),this}let b=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vi extends Os{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vi?ze:Gi),this.texture=new _t(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:qt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new uf(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hf extends _t{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nx extends _t{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==d||c!==p||u!==_){let m=1-a;const f=l*d+c*p+u*_+h*x,b=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const R=Math.sqrt(M),L=Math.atan2(R,f*b);m=Math.sin(m*L)/R,a=Math.sin(a*L)/R}const S=a*b;if(l=l*m+d*S,c=c*m+p*S,u=u*m+_*S,h=h*m+x*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[n]=a*_+u*h+l*p-c*d,e[n+1]=l*_+u*d+c*h-a*p,e[n+2]=c*_+u*p+a*d-l*h,e[n+3]=u*_-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($u.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*s-a*i,u=l*i+a*n-r*s,h=l*s+r*i-o*n,d=-r*n-o*i-a*s;return this.x=c*l+d*-r+u*-a-h*-o,this.y=u*l+d*-o+h*-r-c*-a,this.z=h*l+d*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new z,$u=new Fs;class Cr{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox),$i.applyMatrix4(e.matrixWorld),this.union($i);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Dn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Dn)}else s.boundingBox===null&&s.computeBoundingBox(),$i.copy(s.boundingBox),$i.applyMatrix4(e.matrixWorld),this.union($i)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Wr.subVectors(this.max,Vs),Ki.subVectors(e.a,Vs),Zi.subVectors(e.b,Vs),Ji.subVectors(e.c,Vs),Jn.subVectors(Zi,Ki),Qn.subVectors(Ji,Zi),Ai.subVectors(Ki,Ji);let n=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-Ai.z,Ai.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,Ai.z,0,-Ai.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-Ai.y,Ai.x,0];return!Ra(n,Ki,Zi,Ji,Wr)||(n=[1,0,0,0,1,0,0,0,1],!Ra(n,Ki,Zi,Ji,Wr))?!1:(Xr.crossVectors(Jn,Qn),n=[Xr.x,Xr.y,Xr.z],Ra(n,Ki,Zi,Ji,Wr))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new z,new z,new z,new z,new z,new z,new z,new z],Dn=new z,$i=new Cr,Ki=new z,Zi=new z,Ji=new z,Jn=new z,Qn=new z,Ai=new z,Vs=new z,Wr=new z,Xr=new z,Ri=new z;function Ra(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ri.fromArray(t,r);const a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=e.dot(Ri),c=n.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fx=new Cr,Gs=new z,Ca=new z;class tc{constructor(e=new z,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Fx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const n=Gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Gs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Ca)),this.expandByPoint(Gs.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new z,La=new z,Yr=new z,ei=new z,Pa=new z,qr=new z,Ia=new z;class df{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=On.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,n),On.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){La.copy(e).add(n).multiplyScalar(.5),Yr.copy(n).sub(e).normalize(),ei.copy(this.origin).sub(La);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Yr),a=ei.dot(this.direction),l=-ei.dot(Yr),c=ei.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(La).addScaledVector(Yr,d),p}intersectSphere(e,n){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),s=On.dot(On)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,n,i,s,r){Pa.subVectors(n,e),qr.subVectors(i,e),Ia.crossVectors(Pa,qr);let o=this.direction.dot(Ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=a*this.direction.dot(qr.crossVectors(ei,qr));if(l<0)return null;const c=a*this.direction.dot(Pa.cross(ei));if(c<0||l+c>o)return null;const u=-a*ei.dot(Ia);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,s,r,o,a,l,c,u,h,d,p,_,x,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,h,d,p,_,x,m)}set(e,n,i,s,r,o,a,l,c,u,h,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,x=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,x=c*h;n[0]=d+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,x=a*h;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-d*h,n[8]=_*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+_,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+x,n[5]=o*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*u,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bx,e,zx)}lookAt(e,n,i){const s=this.elements;return Wt.subVectors(e,n),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),ti.crossVectors(i,Wt),ti.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),ti.crossVectors(i,Wt)),ti.normalize(),jr.crossVectors(Wt,ti),s[0]=ti.x,s[4]=jr.x,s[8]=Wt.x,s[1]=ti.y,s[5]=jr.y,s[9]=Wt.y,s[2]=ti.z,s[6]=jr.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],f=i[14],b=i[3],M=i[7],S=i[11],R=i[15],L=s[0],I=s[4],V=s[8],y=s[12],A=s[1],ie=s[5],fe=s[9],k=s[13],Y=s[2],q=s[6],se=s[10],G=s[14],W=s[3],he=s[7],oe=s[11],Te=s[15];return r[0]=o*L+a*A+l*Y+c*W,r[4]=o*I+a*ie+l*q+c*he,r[8]=o*V+a*fe+l*se+c*oe,r[12]=o*y+a*k+l*G+c*Te,r[1]=u*L+h*A+d*Y+p*W,r[5]=u*I+h*ie+d*q+p*he,r[9]=u*V+h*fe+d*se+p*oe,r[13]=u*y+h*k+d*G+p*Te,r[2]=_*L+x*A+m*Y+f*W,r[6]=_*I+x*ie+m*q+f*he,r[10]=_*V+x*fe+m*se+f*oe,r[14]=_*y+x*k+m*G+f*Te,r[3]=b*L+M*A+S*Y+R*W,r[7]=b*I+M*ie+S*q+R*he,r[11]=b*V+M*fe+S*se+R*oe,r[15]=b*y+M*k+S*G+R*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+x*(+n*l*p-n*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+n*c*h-n*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-n*l*h+n*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],b=h*m*c-x*d*c+x*l*p-a*m*p-h*l*f+a*d*f,M=_*d*c-u*m*c-_*l*p+o*m*p+u*l*f-o*d*f,S=u*x*c-_*h*c+_*a*p-o*x*p-u*a*f+o*h*f,R=_*h*l-u*x*l-_*a*d+o*x*d+u*a*m-o*h*m,L=n*b+i*M+s*S+r*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=b*I,e[1]=(x*d*r-h*m*r-x*s*p+i*m*p+h*s*f-i*d*f)*I,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*f+i*l*f)*I,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*I,e[4]=M*I,e[5]=(u*m*r-_*d*r+_*s*p-n*m*p-u*s*f+n*d*f)*I,e[6]=(_*l*r-o*m*r-_*s*c+n*m*c+o*s*f-n*l*f)*I,e[7]=(o*d*r-u*l*r+u*s*c-n*d*c-o*s*p+n*l*p)*I,e[8]=S*I,e[9]=(_*h*r-u*x*r-_*i*p+n*x*p+u*i*f-n*h*f)*I,e[10]=(o*x*r-_*a*r+_*i*c-n*x*c-o*i*f+n*a*f)*I,e[11]=(u*a*r-o*h*r-u*i*c+n*h*c+o*i*p-n*a*p)*I,e[12]=R*I,e[13]=(u*x*s-_*h*s+_*i*d-n*x*d-u*i*m+n*h*m)*I,e[14]=(_*a*s-o*x*s-_*i*l+n*x*l+o*i*m-n*a*m)*I,e[15]=(o*h*s-u*a*s+u*i*l-n*h*l-o*i*d+n*a*d)*I,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,_=r*h,x=o*u,m=o*h,f=a*h,b=l*c,M=l*u,S=l*h,R=i.x,L=i.y,I=i.z;return s[0]=(1-(x+f))*R,s[1]=(p+S)*R,s[2]=(_-M)*R,s[3]=0,s[4]=(p-S)*L,s[5]=(1-(d+f))*L,s[6]=(m+b)*L,s[7]=0,s[8]=(_+M)*I,s[9]=(m-b)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],nn.copy(this);const c=1/r,u=1/o,h=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,n.setFromRotationMatrix(nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Gn){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),h=(n+e)/(n-e),d=(i+s)/(i-s);let p,_;if(a===Gn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Co)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Gn){const l=this.elements,c=1/(n-e),u=1/(i-s),h=1/(o-r),d=(n+e)*c,p=(i+s)*u;let _,x;if(a===Gn)_=(o+r)*h,x=-2*h;else if(a===Co)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qi=new z,nn=new vt,Bx=new z(0,0,0),zx=new z(1,1,1),ti=new z,jr=new z,Wt=new z,Ku=new vt,Zu=new Fs;class Lr{constructor(e=0,n=0,i=0,s=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hx=0;const Ju=new z,es=new Fs,Nn=new vt,$r=new z,Ws=new z,kx=new z,Vx=new Fs,Qu=new z(1,0,0),eh=new z(0,1,0),th=new z(0,0,1),Gx={type:"added"},nh={type:"removed"};class $t extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new z,n=new Lr,i=new Fs,s=new z(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(eh,e)}rotateZ(e){return this.rotateOnAxis(th,e)}translateOnAxis(e,n){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(eh,e)}translateZ(e){return this.translateOnAxis(th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$r.copy(e):$r.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ws,$r,this.up):Nn.lookAt($r,Ws,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Nn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(nh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new z(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new z,Fn=new z,Ua=new z,Bn=new z,ts=new z,ns=new z,ih=new z,Da=new z,Oa=new z,Na=new z;let Kr=!1;class ln{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),sn.subVectors(e,n),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){sn.subVectors(s,n),Fn.subVectors(i,n),Ua.subVectors(e,n);const o=sn.dot(sn),a=sn.dot(Fn),l=sn.dot(Ua),c=Fn.dot(Fn),u=Fn.dot(Ua),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,n,i,s,r,o,a,l){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),this.getInterpolation(e,n,i,s,r,o,a,l)}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Bn),l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,n,i,s){return sn.subVectors(i,n),Fn.subVectors(e,n),sn.cross(Fn).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),sn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ln.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),ln.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,i),ns.subVectors(r,i),Da.subVectors(e,i);const l=ts.dot(Da),c=ns.dot(Da);if(l<=0&&c<=0)return n.copy(i);Oa.subVectors(e,s);const u=ts.dot(Oa),h=ns.dot(Oa);if(u>=0&&h<=u)return n.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ts,o);Na.subVectors(e,r);const p=ts.dot(Na),_=ns.dot(Na);if(_>=0&&p<=_)return n.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ns,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return ih.subVectors(r,s),a=(h-u)/(h-u+(p-_)),n.copy(s).addScaledVector(ih,a);const f=1/(m+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Wx=0;class jo extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Es,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$d,this.blendDst=Kd,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Fa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Zt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Zt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Zt.workingColorSpace){if(e=ec(e,1),n=Mt(n,0,1),i=Mt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Fa(o,r,e+1/3),this.g=Fa(o,r,e),this.b=Fa(o,r,e-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(e,n=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ze){const i=ff[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Zt.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Mt(Tt.r*255,0,255))*65536+Math.round(Mt(Tt.g*255,0,255))*256+Math.round(Mt(Tt.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Tt.copy(this),n);const i=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Tt.copy(this),n),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=ze){Zt.fromWorkingColorSpace(Tt.copy(this),e);const n=Tt.r,i=Tt.g,s=Tt.b;return e!==ze?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(rn),rn.h+=e,rn.s+=n,rn.l+=i,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rn),e.getHSL(Zr);const i=sr(rn.h,Zr.h,n),s=sr(rn.s,Zr.s,n),r=sr(rn.l,Zr.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new et;et.NAMES=ff;class pf extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new z,Jr=new Xe;class Rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xu,this.updateRange={offset:0,count:-1},this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jr.fromBufferAttribute(this,n),Jr.applyMatrix3(e),this.setXY(n,Jr.x,Jr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix3(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix4(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyNormalMatrix(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.transformDirection(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class mf extends Rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gf extends Rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cn extends Rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Xx=0;const Kt=new vt,Ba=new $t,is=new z,Xt=new Cr,Xs=new Cr,mt=new z;class Mi extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?gf:mf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,n,i){return Kt.makeTranslation(e,n,i),this.applyMatrix4(Kt),this}scale(e,n,i){return Kt.makeScale(e,n,i),this.applyMatrix4(Kt),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Cn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Xt.min,Xs.min),Xt.expandByPoint(mt),mt.addVectors(Xt.max,Xs.max),Xt.expandByPoint(mt)):(Xt.expandByPoint(Xs.min),Xt.expandByPoint(Xs.max))}Xt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),mt.add(is)),s=Math.max(s,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new z,u[A]=new z;const h=new z,d=new z,p=new z,_=new Xe,x=new Xe,m=new Xe,f=new z,b=new z;function M(A,ie,fe){h.fromArray(s,A*3),d.fromArray(s,ie*3),p.fromArray(s,fe*3),_.fromArray(o,A*2),x.fromArray(o,ie*2),m.fromArray(o,fe*2),d.sub(h),p.sub(h),x.sub(_),m.sub(_);const k=1/(x.x*m.y-m.x*x.y);isFinite(k)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(k),b.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(k),c[A].add(f),c[ie].add(f),c[fe].add(f),u[A].add(b),u[ie].add(b),u[fe].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,ie=S.length;A<ie;++A){const fe=S[A],k=fe.start,Y=fe.count;for(let q=k,se=k+Y;q<se;q+=3)M(i[q+0],i[q+1],i[q+2])}const R=new z,L=new z,I=new z,V=new z;function y(A){I.fromArray(r,A*3),V.copy(I);const ie=c[A];R.copy(ie),R.sub(I.multiplyScalar(I.dot(ie))).normalize(),L.crossVectors(V,ie);const k=L.dot(u[A])<0?-1:1;l[A*4]=R.x,l[A*4+1]=R.y,l[A*4+2]=R.z,l[A*4+3]=k}for(let A=0,ie=S.length;A<ie;++A){const fe=S[A],k=fe.start,Y=fe.count;for(let q=k,se=k+Y;q<se;q+=3)y(i[q+0]),y(i[q+1]),y(i[q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)mt.fromBufferAttribute(e,n),mt.normalize(),e.setXYZ(n,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new Rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new vt,Ci=new df,Qr=new tc,rh=new z,ss=new z,rs=new z,os=new z,za=new z,eo=new z,to=new Xe,no=new Xe,io=new Xe,oh=new z,ah=new z,lh=new z,so=new z,ro=new z;class Wn extends $t{constructor(e=new Mi,n=new pf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(za.fromBufferAttribute(h,e),o?eo.addScaledVector(za,u):eo.addScaledVector(za.sub(n),u))}n.add(eo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Qr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Qr,rh)===null||Ci.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(sh.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(sh),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ci)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,R=M;S<R;S+=3){const L=a.getX(S),I=a.getX(S+1),V=a.getX(S+2);s=oo(this,f,e,i,c,u,h,L,I,V),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const b=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=oo(this,o,e,i,c,u,h,b,M,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,R=M;S<R;S+=3){const L=S,I=S+1,V=S+2;s=oo(this,f,e,i,c,u,h,L,I,V),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const b=m,M=m+1,S=m+2;s=oo(this,o,e,i,c,u,h,b,M,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Yx(t,e,n,i,s,r,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===_i,a),l===null)return null;ro.copy(a),ro.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ro);return c<n.near||c>n.far?null:{distance:c,point:ro.clone(),object:t}}function oo(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,ss),t.getVertexPosition(l,rs),t.getVertexPosition(c,os);const u=Yx(t,e,n,i,ss,rs,os,so);if(u){s&&(to.fromBufferAttribute(s,a),no.fromBufferAttribute(s,l),io.fromBufferAttribute(s,c),u.uv=ln.getInterpolation(so,ss,rs,os,to,no,io,new Xe)),r&&(to.fromBufferAttribute(r,a),no.fromBufferAttribute(r,l),io.fromBufferAttribute(r,c),u.uv1=ln.getInterpolation(so,ss,rs,os,to,no,io,new Xe),u.uv2=u.uv1),o&&(oh.fromBufferAttribute(o,a),ah.fromBufferAttribute(o,l),lh.fromBufferAttribute(o,c),u.normal=ln.getInterpolation(so,ss,rs,os,oh,ah,lh,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};ln.getNormal(ss,rs,os,h.normal),u.face=h}return u}class Pr extends Mi{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(u,3)),this.setAttribute("uv",new Cn(h,2));function _(x,m,f,b,M,S,R,L,I,V,y){const A=S/I,ie=R/V,fe=S/2,k=R/2,Y=L/2,q=I+1,se=V+1;let G=0,W=0;const he=new z;for(let oe=0;oe<se;oe++){const Te=oe*ie-k;for(let N=0;N<q;N++){const ue=N*A-fe;he[x]=ue*b,he[m]=Te*M,he[f]=Y,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[f]=L>0?1:-1,u.push(he.x,he.y,he.z),h.push(N/I),h.push(1-oe/V),G+=1}}for(let oe=0;oe<V;oe++)for(let Te=0;Te<I;Te++){const N=d+Te+q*oe,ue=d+Te+q*(oe+1),de=d+(Te+1)+q*(oe+1),be=d+(Te+1)+q*oe;l.push(N,ue,be),l.push(ue,de,be),W+=6}a.addGroup(p,W,y),p+=W,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function It(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const s in i)e[s]=i[s]}return e}function qx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _f(t){return t.getRenderTarget()===null?t.outputColorSpace:_n}const jx={clone:Ps,merge:It};var $x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=Kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class vf extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Gn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends vf{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,ls=1;class Zx extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const s=new Qt(as,ls,e,n);s.layers=this.layers,this.add(s);const r=new Qt(as,ls,e,n);r.layers=this.layers,this.add(r);const o=new Qt(as,ls,e,n);o.layers=this.layers,this.add(o);const a=new Qt(as,ls,e,n);a.layers=this.layers,this.add(a);const l=new Qt(as,ls,e,n);l.layers=this.layers,this.add(l);const c=new Qt(as,ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Yn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,r),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class xf extends _t{constructor(e,n,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jx extends vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vi?ze:Gi),this.texture=new xf(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pr(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:hi});r.uniforms.tEquirect.value=n;const o=new Wn(s,r),a=n.minFilter;return n.minFilter===Mr&&(n.minFilter=qt),new Zx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const Ha=new z,Qx=new z,eE=new Ve;class Pi{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Ha.subVectors(i,n).cross(Qx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ha),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||eE.getNormalMatrix(e),s=this.coplanarPoint(Ha).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new tc,ao=new z;class Ef{constructor(e=new Pi,n=new Pi,i=new Pi,s=new Pi,r=new Pi,o=new Pi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],x=s[10],m=s[11],f=s[12],b=s[13],M=s[14],S=s[15];if(i[0].setComponents(l-r,d-c,m-p,S-f).normalize(),i[1].setComponents(l+r,d+c,m+p,S+f).normalize(),i[2].setComponents(l+o,d+u,m+_,S+b).normalize(),i[3].setComponents(l-o,d-u,m-_,S-b).normalize(),i[4].setComponents(l-a,d-h,m-x,S-M).normalize(),n===Gn)i[5].setComponents(l+a,d+h,m+x,S+M).normalize();else if(n===Co)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ao.x=s.normal.x>0?e.max.x:e.min.x,ao.y=s.normal.y>0?e.max.y:e.min.y,ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mf(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function tE(t,e){const n=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;t.bindBuffer(h,c),p.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class ic extends Mi{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=n/l,p=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const b=f*d-o;for(let M=0;M<c;M++){const S=M*h-r;_.push(S,-b,0),x.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const M=b+c*f,S=b+c*(f+1),R=b+1+c*(f+1),L=b+1+c*f;p.push(M,S,L),p.push(S,R,L)}this.setIndex(p),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(x,3)),this.setAttribute("uv",new Cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var nE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lE="vec3 transformed = vec3( position );",cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ME=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,ZE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rM=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,oM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,gM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qM=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jM=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$M=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ry=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hy=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ay=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Cy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ly=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:nE,alphamap_pars_fragment:iE,alphatest_fragment:sE,alphatest_pars_fragment:rE,aomap_fragment:oE,aomap_pars_fragment:aE,begin_vertex:lE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:hE,bumpmap_pars_fragment:dE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:_E,color_pars_fragment:vE,color_pars_vertex:xE,color_vertex:EE,common:ME,cube_uv_reflection_fragment:yE,defaultnormal_vertex:SE,displacementmap_pars_vertex:wE,displacementmap_vertex:bE,emissivemap_fragment:TE,emissivemap_pars_fragment:AE,encodings_fragment:RE,encodings_pars_fragment:CE,envmap_fragment:LE,envmap_common_pars_fragment:PE,envmap_pars_fragment:IE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:XE,envmap_vertex:DE,fog_vertex:OE,fog_pars_vertex:NE,fog_fragment:FE,fog_pars_fragment:BE,gradientmap_pars_fragment:zE,lightmap_fragment:HE,lightmap_pars_fragment:kE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:GE,lights_pars_begin:WE,lights_toon_fragment:YE,lights_toon_pars_fragment:qE,lights_phong_fragment:jE,lights_phong_pars_fragment:$E,lights_physical_fragment:KE,lights_physical_pars_fragment:ZE,lights_fragment_begin:JE,lights_fragment_maps:QE,lights_fragment_end:eM,logdepthbuf_fragment:tM,logdepthbuf_pars_fragment:nM,logdepthbuf_pars_vertex:iM,logdepthbuf_vertex:sM,map_fragment:rM,map_pars_fragment:oM,map_particle_fragment:aM,map_particle_pars_fragment:lM,metalnessmap_fragment:cM,metalnessmap_pars_fragment:uM,morphcolor_vertex:hM,morphnormal_vertex:dM,morphtarget_pars_vertex:fM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:gM,normal_pars_fragment:_M,normal_pars_vertex:vM,normal_vertex:xM,normalmap_pars_fragment:EM,clearcoat_normal_fragment_begin:MM,clearcoat_normal_fragment_maps:yM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:wM,output_fragment:bM,packing:TM,premultiplied_alpha_fragment:AM,project_vertex:RM,dithering_fragment:CM,dithering_pars_fragment:LM,roughnessmap_fragment:PM,roughnessmap_pars_fragment:IM,shadowmap_pars_fragment:UM,shadowmap_pars_vertex:DM,shadowmap_vertex:OM,shadowmask_pars_fragment:NM,skinbase_vertex:FM,skinning_pars_vertex:BM,skinning_vertex:zM,skinnormal_vertex:HM,specularmap_fragment:kM,specularmap_pars_fragment:VM,tonemapping_fragment:GM,tonemapping_pars_fragment:WM,transmission_fragment:XM,transmission_pars_fragment:YM,uv_pars_fragment:qM,uv_pars_vertex:jM,uv_vertex:$M,worldpos_vertex:KM,background_vert:ZM,background_frag:JM,backgroundCube_vert:QM,backgroundCube_frag:ey,cube_vert:ty,cube_frag:ny,depth_vert:iy,depth_frag:sy,distanceRGBA_vert:ry,distanceRGBA_frag:oy,equirect_vert:ay,equirect_frag:ly,linedashed_vert:cy,linedashed_frag:uy,meshbasic_vert:hy,meshbasic_frag:dy,meshlambert_vert:fy,meshlambert_frag:py,meshmatcap_vert:my,meshmatcap_frag:gy,meshnormal_vert:_y,meshnormal_frag:vy,meshphong_vert:xy,meshphong_frag:Ey,meshphysical_vert:My,meshphysical_frag:yy,meshtoon_vert:Sy,meshtoon_frag:wy,points_vert:by,points_frag:Ty,shadow_vert:Ay,shadow_frag:Ry,sprite_vert:Cy,sprite_frag:Ly},_e={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Tn={basic:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:It([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:It([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:It([_e.points,_e.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:It([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:It([_e.common,_e.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:It([_e.sprite,_e.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:It([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:It([_e.lights,_e.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Tn.physical={uniforms:It([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const lo={r:0,b:0,g:0};function Py(t,e,n,i,s,r,o){const a=new et(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(m,f){let b=!1,M=f.isScene===!0?f.background:null;switch(M&&M.isTexture&&(M=(f.backgroundBlurriness>0?n:e).get(M)),M===null?x(a,l):M&&M.isColor&&(x(M,1),b=!0),t.xr.getEnvironmentBlendMode()){case"opaque":b=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),b=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),b=!0;break}(t.autoClear||b)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),M&&(M.isCubeTexture||M.mapping===qo)?(u===void 0&&(u=new Wn(new Pr(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ps(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=M.colorSpace!==ze,(h!==M||d!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Wn(new ic(2,2),new xi({name:"BackgroundMaterial",uniforms:Ps(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=M.colorSpace!==ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(lo,_f(t)),i.buffers.color.setClear(lo.r,lo.g,lo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:_}}function Iy(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(Y,q,se,G,W){let he=!1;if(o){const oe=x(G,se,q);c!==oe&&(c=oe,p(c.object)),he=f(Y,G,se,W),he&&b(Y,G,se,W)}else{const oe=q.wireframe===!0;(c.geometry!==G.id||c.program!==se.id||c.wireframe!==oe)&&(c.geometry=G.id,c.program=se.id,c.wireframe=oe,he=!0)}W!==null&&n.update(W,t.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,V(Y,q,se,G),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function d(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function p(Y){return i.isWebGL2?t.bindVertexArray(Y):r.bindVertexArrayOES(Y)}function _(Y){return i.isWebGL2?t.deleteVertexArray(Y):r.deleteVertexArrayOES(Y)}function x(Y,q,se){const G=se.wireframe===!0;let W=a[Y.id];W===void 0&&(W={},a[Y.id]=W);let he=W[q.id];he===void 0&&(he={},W[q.id]=he);let oe=he[G];return oe===void 0&&(oe=m(d()),he[G]=oe),oe}function m(Y){const q=[],se=[],G=[];for(let W=0;W<s;W++)q[W]=0,se[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:se,attributeDivisors:G,object:Y,attributes:{},index:null}}function f(Y,q,se,G){const W=c.attributes,he=q.attributes;let oe=0;const Te=se.getAttributes();for(const N in Te)if(Te[N].location>=0){const de=W[N];let be=he[N];if(be===void 0&&(N==="instanceMatrix"&&Y.instanceMatrix&&(be=Y.instanceMatrix),N==="instanceColor"&&Y.instanceColor&&(be=Y.instanceColor)),de===void 0||de.attribute!==be||be&&de.data!==be.data)return!0;oe++}return c.attributesNum!==oe||c.index!==G}function b(Y,q,se,G){const W={},he=q.attributes;let oe=0;const Te=se.getAttributes();for(const N in Te)if(Te[N].location>=0){let de=he[N];de===void 0&&(N==="instanceMatrix"&&Y.instanceMatrix&&(de=Y.instanceMatrix),N==="instanceColor"&&Y.instanceColor&&(de=Y.instanceColor));const be={};be.attribute=de,de&&de.data&&(be.data=de.data),W[N]=be,oe++}c.attributes=W,c.attributesNum=oe,c.index=G}function M(){const Y=c.newAttributes;for(let q=0,se=Y.length;q<se;q++)Y[q]=0}function S(Y){R(Y,0)}function R(Y,q){const se=c.newAttributes,G=c.enabledAttributes,W=c.attributeDivisors;se[Y]=1,G[Y]===0&&(t.enableVertexAttribArray(Y),G[Y]=1),W[Y]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,q),W[Y]=q)}function L(){const Y=c.newAttributes,q=c.enabledAttributes;for(let se=0,G=q.length;se<G;se++)q[se]!==Y[se]&&(t.disableVertexAttribArray(se),q[se]=0)}function I(Y,q,se,G,W,he,oe){oe===!0?t.vertexAttribIPointer(Y,q,se,W,he):t.vertexAttribPointer(Y,q,se,G,W,he)}function V(Y,q,se,G){if(i.isWebGL2===!1&&(Y.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const W=G.attributes,he=se.getAttributes(),oe=q.defaultAttributeValues;for(const Te in he){const N=he[Te];if(N.location>=0){let ue=W[Te];if(ue===void 0&&(Te==="instanceMatrix"&&Y.instanceMatrix&&(ue=Y.instanceMatrix),Te==="instanceColor"&&Y.instanceColor&&(ue=Y.instanceColor)),ue!==void 0){const de=ue.normalized,be=ue.itemSize,me=n.get(ue);if(me===void 0)continue;const D=me.buffer,le=me.type,J=me.bytesPerElement,xe=i.isWebGL2===!0&&(le===t.INT||le===t.UNSIGNED_INT||ue.gpuType===Qd);if(ue.isInterleavedBufferAttribute){const Ae=ue.data,g=Ae.stride,T=ue.offset;if(Ae.isInstancedInterleavedBuffer){for(let C=0;C<N.locationSize;C++)R(N.location+C,Ae.meshPerAttribute);Y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let C=0;C<N.locationSize;C++)S(N.location+C);t.bindBuffer(t.ARRAY_BUFFER,D);for(let C=0;C<N.locationSize;C++)I(N.location+C,be/N.locationSize,le,de,g*J,(T+be/N.locationSize*C)*J,xe)}else{if(ue.isInstancedBufferAttribute){for(let Ae=0;Ae<N.locationSize;Ae++)R(N.location+Ae,ue.meshPerAttribute);Y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ae=0;Ae<N.locationSize;Ae++)S(N.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,D);for(let Ae=0;Ae<N.locationSize;Ae++)I(N.location+Ae,be/N.locationSize,le,de,be*J,be/N.locationSize*Ae*J,xe)}}else if(oe!==void 0){const de=oe[Te];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(N.location,de);break;case 3:t.vertexAttrib3fv(N.location,de);break;case 4:t.vertexAttrib4fv(N.location,de);break;default:t.vertexAttrib1fv(N.location,de)}}}}L()}function y(){fe();for(const Y in a){const q=a[Y];for(const se in q){const G=q[se];for(const W in G)_(G[W].object),delete G[W];delete q[se]}delete a[Y]}}function A(Y){if(a[Y.id]===void 0)return;const q=a[Y.id];for(const se in q){const G=q[se];for(const W in G)_(G[W].object),delete G[W];delete q[se]}delete a[Y.id]}function ie(Y){for(const q in a){const se=a[q];if(se[Y.id]===void 0)continue;const G=se[Y.id];for(const W in G)_(G[W].object),delete G[W];delete se[Y.id]}}function fe(){k(),u=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:fe,resetDefaultState:k,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:ie,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function Uy(t,e,n,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(s)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),n.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Dy(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,S=o||e.has("OES_texture_float"),R=M&&S,L=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:L}}function Oy(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Pi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,M=b*4;let S=f.clippingState||null;l.value=S,S=u(_,d,M,p);for(let R=0;R!==M;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=p+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=p;M!==x;++M,S+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ny(t){let e=new WeakMap;function n(o,a){return a===hl?o.mapping=Rs:a===dl&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===hl||a===dl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jx(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Fy extends vf{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,ch=[.125,.215,.35,.446,.526,.582],Oi=20,ka=new Fy,uh=new et;let Va=null;const Ii=(1+Math.sqrt(5))/2,cs=1/Ii,hh=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Ii,cs),new z(0,Ii,-cs),new z(cs,0,Ii),new z(-cs,0,Ii),new z(Ii,cs,0),new z(-Ii,cs,0)];class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Va=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:yr,format:hn,colorSpace:_n,depthBuffer:!1},s=fh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=By(r)),this._blurMaterial=zy(r,e,n)}return s}_compileMaterial(e){const n=new Wn(this._lodPlanes[0],e);this._renderer.compile(n,ka)}_sceneToCubeUV(e,n,i,s){const a=new Qt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(uh),u.toneMapping=Yn,u.autoClear=!1;const p=new pf({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),_=new Wn(new Pr,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(uh),x=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const M=this._cubeSize;co(s,b*M,f>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Wn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;co(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ka)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hh[(s-1)%hh.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wn(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const f=[];let b=0;for(let I=0;I<Oi;++I){const V=I/x,y=Math.exp(-V*V/2);f.push(y),I===0?b+=y:I<m&&(b+=2*y)}for(let I=0;I<f.length;I++)f[I]=f[I]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const S=this._sizeLods[s],R=3*S*(s>M-fs?s-M+fs:0),L=4*(this._cubeSize-S);co(n,R,L,3*S,2*S),l.setRenderTarget(n),l.render(h,ka)}}function By(t){const e=[],n=[],i=[];let s=t;const r=t-fs+1+ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-fs?l=ch[o-t+fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,f=1,b=new Float32Array(x*_*p),M=new Float32Array(m*_*p),S=new Float32Array(f*_*p);for(let L=0;L<p;L++){const I=L%3*2/3-1,V=L>2?0:-1,y=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];b.set(y,x*_*L),M.set(d,m*_*L);const A=[L,L,L,L,L,L];S.set(A,f*_*L)}const R=new Mi;R.setAttribute("position",new Rn(b,x)),R.setAttribute("uv",new Rn(M,m)),R.setAttribute("faceIndex",new Rn(S,f)),e.push(R),s>fs&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function fh(t,e,n){const i=new vi(t,e,n);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function zy(t,e,n){const i=new Float32Array(Oi),s=new z(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ph(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function mh(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hy(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hl||l===dl,u=l===Rs||l===Cs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new dh(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){n===null&&(n=new dh(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ky(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vy(t,e,n,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let M=0,S=b.length;M<S;M+=3){const R=b[M+0],L=b[M+1],I=b[M+2];d.push(R,L,L,I,I,R)}}else{const b=_.array;x=_.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const R=M+0,L=M+1,I=M+2;d.push(R,L,L,I,I,R)}}const m=new(lf(d)?gf:mf)(d,1);m.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Gy(t,e,n,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(r,p,a,d*l),n.update(p,r,1)}function h(d,p,_){if(_===0)return;let x,m;if(s)x=t,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](r,p,a,d*l,_),n.update(p,r,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Wy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Xy(t,e){return t[0]-e[0]}function Yy(t,e){return Math.abs(e[1])-Math.abs(t[1])}function qy(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==x){let q=function(){k.dispose(),r.delete(u),u.removeEventListener("dispose",q)};var p=q;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],V=u.morphAttributes.color||[];let y=0;M===!0&&(y=1),S===!0&&(y=2),R===!0&&(y=3);let A=u.attributes.position.count*y,ie=1;A>e.maxTextureSize&&(ie=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const fe=new Float32Array(A*ie*4*x),k=new hf(fe,A,ie,x);k.type=ai,k.needsUpdate=!0;const Y=y*4;for(let se=0;se<x;se++){const G=L[se],W=I[se],he=V[se],oe=A*ie*4*se;for(let Te=0;Te<G.count;Te++){const N=Te*Y;M===!0&&(o.fromBufferAttribute(G,Te),fe[oe+N+0]=o.x,fe[oe+N+1]=o.y,fe[oe+N+2]=o.z,fe[oe+N+3]=0),S===!0&&(o.fromBufferAttribute(W,Te),fe[oe+N+4]=o.x,fe[oe+N+5]=o.y,fe[oe+N+6]=o.z,fe[oe+N+7]=0),R===!0&&(o.fromBufferAttribute(he,Te),fe[oe+N+8]=o.x,fe[oe+N+9]=o.y,fe[oe+N+10]=o.z,fe[oe+N+11]=he.itemSize===4?o.w:1)}}m={count:x,texture:k,size:new Xe(A,ie)},r.set(u,m),u.addEventListener("dispose",q)}let f=0;for(let M=0;M<d.length;M++)f+=d[M];const b=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",b),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let x=i[u.id];if(x===void 0||x.length!==_){x=[];for(let S=0;S<_;S++)x[S]=[S,0];i[u.id]=x}for(let S=0;S<_;S++){const R=x[S];R[0]=S,R[1]=d[S]}x.sort(Yy);for(let S=0;S<8;S++)S<_&&x[S][1]?(a[S][0]=x[S][0],a[S][1]=x[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Xy);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let b=0;for(let S=0;S<8;S++){const R=a[S],L=R[0],I=R[1];L!==Number.MAX_SAFE_INTEGER&&I?(m&&u.getAttribute("morphTarget"+S)!==m[L]&&u.setAttribute("morphTarget"+S,m[L]),f&&u.getAttribute("morphNormal"+S)!==f[L]&&u.setAttribute("morphNormal"+S,f[L]),s[S]=I,b+=I):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const M=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(t,"morphTargetBaseInfluence",M),h.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:l}}function jy(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const yf=new _t,Sf=new hf,wf=new Nx,bf=new xf,gh=[],_h=[],vh=new Float32Array(16),xh=new Float32Array(9),Eh=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $o(t,e){let n=_h[e];n===void 0&&(n=new Int32Array(e),_h[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $y(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ky(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dt(n,e))return;t.uniform2fv(this.addr,e),ft(n,e)}}function Zy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(dt(n,e))return;t.uniform3fv(this.addr,e),ft(n,e)}}function Jy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dt(n,e))return;t.uniform4fv(this.addr,e),ft(n,e)}}function Qy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ft(n,e)}else{if(dt(n,i))return;Eh.set(i),t.uniformMatrix2fv(this.addr,!1,Eh),ft(n,i)}}function eS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ft(n,e)}else{if(dt(n,i))return;xh.set(i),t.uniformMatrix3fv(this.addr,!1,xh),ft(n,i)}}function tS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ft(n,e)}else{if(dt(n,i))return;vh.set(i),t.uniformMatrix4fv(this.addr,!1,vh),ft(n,i)}}function nS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dt(n,e))return;t.uniform2iv(this.addr,e),ft(n,e)}}function sS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dt(n,e))return;t.uniform3iv(this.addr,e),ft(n,e)}}function rS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dt(n,e))return;t.uniform4iv(this.addr,e),ft(n,e)}}function oS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dt(n,e))return;t.uniform2uiv(this.addr,e),ft(n,e)}}function lS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dt(n,e))return;t.uniform3uiv(this.addr,e),ft(n,e)}}function cS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dt(n,e))return;t.uniform4uiv(this.addr,e),ft(n,e)}}function uS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||yf,s)}function hS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||wf,s)}function dS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||bf,s)}function fS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Sf,s)}function pS(t){switch(t){case 5126:return $y;case 35664:return Ky;case 35665:return Zy;case 35666:return Jy;case 35674:return Qy;case 35675:return eS;case 35676:return tS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return sS;case 35669:case 35673:return rS;case 5125:return oS;case 36294:return aS;case 36295:return lS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return fS}}function mS(t,e){t.uniform1fv(this.addr,e)}function gS(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function _S(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function vS(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function xS(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ES(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function MS(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yS(t,e){t.uniform1iv(this.addr,e)}function SS(t,e){t.uniform2iv(this.addr,e)}function wS(t,e){t.uniform3iv(this.addr,e)}function bS(t,e){t.uniform4iv(this.addr,e)}function TS(t,e){t.uniform1uiv(this.addr,e)}function AS(t,e){t.uniform2uiv(this.addr,e)}function RS(t,e){t.uniform3uiv(this.addr,e)}function CS(t,e){t.uniform4uiv(this.addr,e)}function LS(t,e,n){const i=this.cache,s=e.length,r=$o(n,s);dt(i,r)||(t.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||yf,r[o])}function PS(t,e,n){const i=this.cache,s=e.length,r=$o(n,s);dt(i,r)||(t.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||wf,r[o])}function IS(t,e,n){const i=this.cache,s=e.length,r=$o(n,s);dt(i,r)||(t.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||bf,r[o])}function US(t,e,n){const i=this.cache,s=e.length,r=$o(n,s);dt(i,r)||(t.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Sf,r[o])}function DS(t){switch(t){case 5126:return mS;case 35664:return gS;case 35665:return _S;case 35666:return vS;case 35674:return xS;case 35675:return ES;case 35676:return MS;case 5124:case 35670:return yS;case 35667:case 35671:return SS;case 35668:case 35672:return wS;case 35669:case 35673:return bS;case 5125:return TS;case 36294:return AS;case 36295:return RS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return US}}class OS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=pS(n.type)}}class NS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=DS(n.type)}}class FS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Mh(t,e){t.seq.push(e),t.map[e.id]=e}function BS(t,e,n){const i=t.name,s=i.length;for(Ga.lastIndex=0;;){const r=Ga.exec(i),o=Ga.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mh(n,c===void 0?new OS(a,t,e):new NS(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new FS(a),Mh(n,h)),n=h}}}class _o{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);BS(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function yh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let zS=0;function HS(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function kS(t){switch(t){case _n:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Sh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+HS(t.getShaderSource(e),o)}else return s}function VS(t,e){const n=kS(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function GS(t,e){let n;switch(e){case H0:n="Linear";break;case k0:n="Reinhard";break;case V0:n="OptimizedCineon";break;case G0:n="ACESFilmic";break;case W0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function WS(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function XS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Js(t){return t!==""}function wh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(t){return t.replace(qS,jS)}function jS(t,e){const n=ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return _l(n)}const $S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(t){return t.replace($S,KS)}function KS(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZS(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===jd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function JS(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QS(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function ew(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zd:e="ENVMAP_BLENDING_MULTIPLY";break;case B0:e="ENVMAP_BLENDING_MIX";break;case z0:e="ENVMAP_BLENDING_ADD";break}return e}function tw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nw(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ZS(n),c=JS(n),u=QS(n),h=ew(n),d=tw(n),p=n.isWebGL2?"":WS(n),_=XS(r),x=s.createProgram();let m,f,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),f.length>0&&(f+=`
`)):(m=[Ah(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),f=[p,Ah(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yn?"#define TONE_MAPPING":"",n.toneMapping!==Yn?ke.tonemapping_pars_fragment:"",n.toneMapping!==Yn?GS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,VS("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),o=_l(o),o=wh(o,n),o=bh(o,n),a=_l(a),a=wh(a,n),a=bh(a,n),o=Th(o),a=Th(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=b+m+o,S=b+f+a,R=yh(s,s.VERTEX_SHADER,M),L=yh(s,s.FRAGMENT_SHADER,S);if(s.attachShader(x,R),s.attachShader(x,L),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x),t.debug.checkShaderErrors){const y=s.getProgramInfoLog(x).trim(),A=s.getShaderInfoLog(R).trim(),ie=s.getShaderInfoLog(L).trim();let fe=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(fe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,R,L);else{const Y=Sh(s,R,"vertex"),q=Sh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+Y+`
`+q)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(A===""||ie==="")&&(k=!1);k&&(this.diagnostics={runnable:fe,programLog:y,vertexShader:{log:A,prefix:m},fragmentShader:{log:ie,prefix:f}})}s.deleteShader(R),s.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new _o(s,x)),I};let V;return this.getAttributes=function(){return V===void 0&&(V=YS(s,x)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=L,this}let iw=0;class sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rw(e),n.set(e,i)),i}}class rw{constructor(e){this.id=iw++,this.code=e,this.usedTimes=0}}function ow(t,e,n,i,s,r,o){const a=new nc,l=new sw,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,A,ie,fe,k){const Y=fe.fog,q=k.geometry,se=y.isMeshStandardMaterial?fe.environment:null,G=(y.isMeshStandardMaterial?n:e).get(y.envMap||se),W=G&&G.mapping===qo?G.image.height:null,he=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const oe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Te=oe!==void 0?oe.length:0;let N=0;q.morphAttributes.position!==void 0&&(N=1),q.morphAttributes.normal!==void 0&&(N=2),q.morphAttributes.color!==void 0&&(N=3);let ue,de,be,me;if(he){const at=Tn[he];ue=at.vertexShader,de=at.fragmentShader}else ue=y.vertexShader,de=y.fragmentShader,l.update(y),be=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const D=t.getRenderTarget(),le=k.isInstancedMesh===!0,J=!!y.map,xe=!!y.matcap,Ae=!!G,g=!!y.aoMap,T=!!y.lightMap,C=!!y.bumpMap,F=!!y.normalMap,B=!!y.displacementMap,$=!!y.emissiveMap,re=!!y.metalnessMap,j=!!y.roughnessMap,ae=y.anisotropy>0,te=y.clearcoat>0,we=y.iridescence>0,E=y.sheen>0,v=y.transmission>0,U=ae&&!!y.anisotropyMap,Q=te&&!!y.clearcoatMap,ne=te&&!!y.clearcoatNormalMap,ce=te&&!!y.clearcoatRoughnessMap,ve=we&&!!y.iridescenceMap,pe=we&&!!y.iridescenceThicknessMap,K=E&&!!y.sheenColorMap,Le=E&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,Pe=!!y.specularColorMap,Ee=!!y.specularIntensityMap,ye=v&&!!y.transmissionMap,Fe=v&&!!y.thicknessMap,Ze=!!y.gradientMap,P=!!y.alphaMap,Me=y.alphaTest>0,X=!!y.extensions,ge=!!q.attributes.uv1,Se=!!q.attributes.uv2,qe=!!q.attributes.uv3;return{isWebGL2:u,shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:ue,fragmentShader:de,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:le,instancingColor:le&&k.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:D===null?t.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_n,map:J,matcap:xe,envMap:Ae,envMapMode:Ae&&G.mapping,envMapCubeUVHeight:W,aoMap:g,lightMap:T,bumpMap:C,normalMap:F,displacementMap:d&&B,emissiveMap:$,normalMapObjectSpace:F&&y.normalMapType===sx,normalMapTangentSpace:F&&y.normalMapType===ix,metalnessMap:re,roughnessMap:j,anisotropy:ae,anisotropyMap:U,clearcoat:te,clearcoatMap:Q,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,iridescence:we,iridescenceMap:ve,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:K,sheenRoughnessMap:Le,specularMap:Ce,specularColorMap:Pe,specularIntensityMap:Ee,transmission:v,transmissionMap:ye,thicknessMap:Fe,gradientMap:Ze,opaque:y.transparent===!1&&y.blending===Es,alphaMap:P,alphaTest:Me,combine:y.combine,mapUv:J&&x(y.map.channel),aoMapUv:g&&x(y.aoMap.channel),lightMapUv:T&&x(y.lightMap.channel),bumpMapUv:C&&x(y.bumpMap.channel),normalMapUv:F&&x(y.normalMap.channel),displacementMapUv:B&&x(y.displacementMap.channel),emissiveMapUv:$&&x(y.emissiveMap.channel),metalnessMapUv:re&&x(y.metalnessMap.channel),roughnessMapUv:j&&x(y.roughnessMap.channel),anisotropyMapUv:U&&x(y.anisotropyMap.channel),clearcoatMapUv:Q&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:K&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(y.sheenRoughnessMap.channel),specularMapUv:Ce&&x(y.specularMap.channel),specularColorMapUv:Pe&&x(y.specularColorMap.channel),specularIntensityMapUv:Ee&&x(y.specularIntensityMap.channel),transmissionMapUv:ye&&x(y.transmissionMap.channel),thicknessMapUv:Fe&&x(y.thicknessMap.channel),alphaMapUv:P&&x(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(F||ae),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:Se,vertexUv3s:qe,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(J||P),fog:!!Y,useFog:y.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:N,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&ie.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Yn,useLegacyLights:t.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vn,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:X&&y.extensions.derivatives===!0,extensionFragDepth:X&&y.extensions.fragDepth===!0,extensionDrawBuffers:X&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:X&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const ie in y.defines)A.push(ie),A.push(y.defines[ie]);return y.isRawShaderMaterial===!1&&(b(A,y),M(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function b(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function M(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),y.push(a.mask)}function S(y){const A=_[y.type];let ie;if(A){const fe=Tn[A];ie=jx.clone(fe.uniforms)}else ie=y.uniforms;return ie}function R(y,A){let ie;for(let fe=0,k=c.length;fe<k;fe++){const Y=c[fe];if(Y.cacheKey===A){ie=Y,++ie.usedTimes;break}}return ie===void 0&&(ie=new nw(t,A,y,r),c.push(ie)),ie}function L(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function I(y){l.remove(y)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:L,releaseShaderCache:I,programs:c,dispose:V}}function aw(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function lw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ch(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(h,d,p,_,x,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):n.push(f)}function l(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||lw),i.length>1&&i.sort(d||Rh),s.length>1&&s.sort(d||Rh)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function cw(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Ch,t.set(i,[o])):s>=r.length?(o=new Ch,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new et};break;case"SpotLight":n={position:new z,direction:new z,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function hw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dw=0;function fw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pw(t,e){const n=new uw,i=hw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new z);const r=new z,o=new vt,a=new vt;function l(u,h){let d=0,p=0,_=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let x=0,m=0,f=0,b=0,M=0,S=0,R=0,L=0,I=0,V=0;u.sort(fw);const y=h===!0?Math.PI:1;for(let ie=0,fe=u.length;ie<fe;ie++){const k=u[ie],Y=k.color,q=k.intensity,se=k.distance,G=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=Y.r*q*y,p+=Y.g*q*y,_+=Y.b*q*y;else if(k.isLightProbe)for(let W=0;W<9;W++)s.probe[W].addScaledVector(k.sh.coefficients[W],q);else if(k.isDirectionalLight){const W=n.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*y),k.castShadow){const he=k.shadow,oe=i.get(k);oe.shadowBias=he.bias,oe.shadowNormalBias=he.normalBias,oe.shadowRadius=he.radius,oe.shadowMapSize=he.mapSize,s.directionalShadow[x]=oe,s.directionalShadowMap[x]=G,s.directionalShadowMatrix[x]=k.shadow.matrix,S++}s.directional[x]=W,x++}else if(k.isSpotLight){const W=n.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(Y).multiplyScalar(q*y),W.distance=se,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,s.spot[f]=W;const he=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,he.updateMatrices(k),k.castShadow&&V++),s.spotLightMatrix[f]=he.matrix,k.castShadow){const oe=i.get(k);oe.shadowBias=he.bias,oe.shadowNormalBias=he.normalBias,oe.shadowRadius=he.radius,oe.shadowMapSize=he.mapSize,s.spotShadow[f]=oe,s.spotShadowMap[f]=G,L++}f++}else if(k.isRectAreaLight){const W=n.get(k);W.color.copy(Y).multiplyScalar(q),W.halfWidth.set(k.width*.5,0,0),W.halfHeight.set(0,k.height*.5,0),s.rectArea[b]=W,b++}else if(k.isPointLight){const W=n.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*y),W.distance=k.distance,W.decay=k.decay,k.castShadow){const he=k.shadow,oe=i.get(k);oe.shadowBias=he.bias,oe.shadowNormalBias=he.normalBias,oe.shadowRadius=he.radius,oe.shadowMapSize=he.mapSize,oe.shadowCameraNear=he.camera.near,oe.shadowCameraFar=he.camera.far,s.pointShadow[m]=oe,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=k.shadow.matrix,R++}s.point[m]=W,m++}else if(k.isHemisphereLight){const W=n.get(k);W.skyColor.copy(k.color).multiplyScalar(q*y),W.groundColor.copy(k.groundColor).multiplyScalar(q*y),s.hemi[M]=W,M++}}b>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const A=s.hash;(A.directionalLength!==x||A.pointLength!==m||A.spotLength!==f||A.rectAreaLength!==b||A.hemiLength!==M||A.numDirectionalShadows!==S||A.numPointShadows!==R||A.numSpotShadows!==L||A.numSpotMaps!==I)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=b,s.point.length=m,s.hemi.length=M,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=L+I-V,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=V,A.directionalLength=x,A.pointLength=m,A.spotLength=f,A.rectAreaLength=b,A.hemiLength=M,A.numDirectionalShadows=S,A.numPointShadows=R,A.numSpotShadows=L,A.numSpotMaps=I,s.version=dw++)}function c(u,h){let d=0,p=0,_=0,x=0,m=0;const f=h.matrixWorldInverse;for(let b=0,M=u.length;b<M;b++){const S=u[b];if(S.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(S.isSpotLight){const R=s.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),_++}else if(S.isRectAreaLight){const R=s.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const R=s.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Lh(t,e){const n=new pw(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mw(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let l;return a===void 0?(l=new Lh(t,e),n.set(r,[l])):o>=a.length?(l=new Lh(t,e),a.push(l)):l=a[o],l}function s(){n=new WeakMap}return{get:i,dispose:s}}class gw extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _w extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ew(t,e,n){let i=new Ef;const s=new Xe,r=new Xe,o=new wt,a=new gw({depthPacking:nx}),l=new _w,c={},u=n.maxTextureSize,h={[_i]:Ht,[Ht]:_i,[Vn]:Vn},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:vw,fragmentShader:xw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Mi;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Wn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jd;let f=this.type;this.render=function(R,L,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const V=t.getRenderTarget(),y=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),ie=t.state;ie.setBlending(hi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const fe=f!==Hn&&this.type===Hn,k=f===Hn&&this.type!==Hn;for(let Y=0,q=R.length;Y<q;Y++){const se=R[Y],G=se.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const W=G.getFrameExtents();if(s.multiply(W),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||fe===!0||k===!0){const oe=this.type!==Hn?{minFilter:Dt,magFilter:Dt}:{};G.map!==null&&G.map.dispose(),G.map=new vi(s.x,s.y,oe),G.map.texture.name=se.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const he=G.getViewportCount();for(let oe=0;oe<he;oe++){const Te=G.getViewport(oe);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),ie.viewport(o),G.updateMatrices(se,oe),i=G.getFrustum(),S(L,I,G.camera,se,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&b(G,I),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(V,y,A)};function b(R,L){const I=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(L,null,I,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(L,null,I,p,x,null)}function M(R,L,I,V){let y=null;const A=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)y=A;else if(y=I.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ie=y.uuid,fe=L.uuid;let k=c[ie];k===void 0&&(k={},c[ie]=k);let Y=k[fe];Y===void 0&&(Y=y.clone(),k[fe]=Y),y=Y}if(y.visible=L.visible,y.wireframe=L.wireframe,V===Hn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:h[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const ie=t.properties.get(y);ie.light=I}return y}function S(R,L,I,V,y){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Hn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const fe=e.update(R),k=R.material;if(Array.isArray(k)){const Y=fe.groups;for(let q=0,se=Y.length;q<se;q++){const G=Y[q],W=k[G.materialIndex];if(W&&W.visible){const he=M(R,W,V,y);t.renderBufferDirect(I,null,fe,he,R,G)}}}else if(k.visible){const Y=M(R,k,V,y);t.renderBufferDirect(I,null,fe,Y,R,null)}}const ie=R.children;for(let fe=0,k=ie.length;fe<k;fe++)S(ie[fe],L,I,V,y)}}function Mw(t,e,n){const i=n.isWebGL2;function s(){let P=!1;const Me=new wt;let X=null;const ge=new wt(0,0,0,0);return{setMask:function(Se){X!==Se&&!P&&(t.colorMask(Se,Se,Se,Se),X=Se)},setLocked:function(Se){P=Se},setClear:function(Se,qe,st,at,yi){yi===!0&&(Se*=at,qe*=at,st*=at),Me.set(Se,qe,st,at),ge.equals(Me)===!1&&(t.clearColor(Se,qe,st,at),ge.copy(Me))},reset:function(){P=!1,X=null,ge.set(-1,0,0,0)}}}function r(){let P=!1,Me=null,X=null,ge=null;return{setTest:function(Se){Se?D(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(Se){Me!==Se&&!P&&(t.depthMask(Se),Me=Se)},setFunc:function(Se){if(X!==Se){switch(Se){case P0:t.depthFunc(t.NEVER);break;case I0:t.depthFunc(t.ALWAYS);break;case U0:t.depthFunc(t.LESS);break;case ul:t.depthFunc(t.LEQUAL);break;case D0:t.depthFunc(t.EQUAL);break;case O0:t.depthFunc(t.GEQUAL);break;case N0:t.depthFunc(t.GREATER);break;case F0:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=Se}},setLocked:function(Se){P=Se},setClear:function(Se){ge!==Se&&(t.clearDepth(Se),ge=Se)},reset:function(){P=!1,Me=null,X=null,ge=null}}}function o(){let P=!1,Me=null,X=null,ge=null,Se=null,qe=null,st=null,at=null,yi=null;return{setTest:function(rt){P||(rt?D(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(rt){Me!==rt&&!P&&(t.stencilMask(rt),Me=rt)},setFunc:function(rt,xn,Ct){(X!==rt||ge!==xn||Se!==Ct)&&(t.stencilFunc(rt,xn,Ct),X=rt,ge=xn,Se=Ct)},setOp:function(rt,xn,Ct){(qe!==rt||st!==xn||at!==Ct)&&(t.stencilOp(rt,xn,Ct),qe=rt,st=xn,at=Ct)},setLocked:function(rt){P=rt},setClear:function(rt){yi!==rt&&(t.clearStencil(rt),yi=rt)},reset:function(){P=!1,Me=null,X=null,ge=null,Se=null,qe=null,st=null,at=null,yi=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,x=[],m=null,f=!1,b=null,M=null,S=null,R=null,L=null,I=null,V=null,y=!1,A=null,ie=null,fe=null,k=null,Y=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,G=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),se=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),se=G>=2);let he=null,oe={};const Te=t.getParameter(t.SCISSOR_BOX),N=t.getParameter(t.VIEWPORT),ue=new wt().fromArray(Te),de=new wt().fromArray(N);function be(P,Me,X,ge){const Se=new Uint8Array(4),qe=t.createTexture();t.bindTexture(P,qe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<X;st++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(Me,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(Me+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return qe}const me={};me[t.TEXTURE_2D]=be(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(me[t.TEXTURE_2D_ARRAY]=be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=be(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),D(t.DEPTH_TEST),l.setFunc(ul),B(!1),$(mu),D(t.CULL_FACE),C(hi);function D(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function le(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function J(P,Me){return p[P]!==Me?(t.bindFramebuffer(P,Me),p[P]=Me,i&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Me),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Me)),!0):!1}function xe(P,Me){let X=x,ge=!1;if(P)if(X=_.get(Me),X===void 0&&(X=[],_.set(Me,X)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(X.length!==Se.length||X[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,st=Se.length;qe<st;qe++)X[qe]=t.COLOR_ATTACHMENT0+qe;X.length=Se.length,ge=!0}}else X[0]!==t.COLOR_ATTACHMENT0&&(X[0]=t.COLOR_ATTACHMENT0,ge=!0);else X[0]!==t.BACK&&(X[0]=t.BACK,ge=!0);ge&&(n.isWebGL2?t.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Ae(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const g={[hs]:t.FUNC_ADD,[E0]:t.FUNC_SUBTRACT,[M0]:t.FUNC_REVERSE_SUBTRACT};if(i)g[xu]=t.MIN,g[Eu]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(g[xu]=P.MIN_EXT,g[Eu]=P.MAX_EXT)}const T={[y0]:t.ZERO,[S0]:t.ONE,[w0]:t.SRC_COLOR,[$d]:t.SRC_ALPHA,[L0]:t.SRC_ALPHA_SATURATE,[R0]:t.DST_COLOR,[T0]:t.DST_ALPHA,[b0]:t.ONE_MINUS_SRC_COLOR,[Kd]:t.ONE_MINUS_SRC_ALPHA,[C0]:t.ONE_MINUS_DST_COLOR,[A0]:t.ONE_MINUS_DST_ALPHA};function C(P,Me,X,ge,Se,qe,st,at){if(P===hi){f===!0&&(le(t.BLEND),f=!1);return}if(f===!1&&(D(t.BLEND),f=!0),P!==x0){if(P!==b||at!==y){if((M!==hs||L!==hs)&&(t.blendEquation(t.FUNC_ADD),M=hs,L=hs),at)switch(P){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gu:t.blendFunc(t.ONE,t.ONE);break;case _u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,I=null,V=null,b=P,y=at}return}Se=Se||Me,qe=qe||X,st=st||ge,(Me!==M||Se!==L)&&(t.blendEquationSeparate(g[Me],g[Se]),M=Me,L=Se),(X!==S||ge!==R||qe!==I||st!==V)&&(t.blendFuncSeparate(T[X],T[ge],T[qe],T[st]),S=X,R=ge,I=qe,V=st),b=P,y=!1}function F(P,Me){P.side===Vn?le(t.CULL_FACE):D(t.CULL_FACE);let X=P.side===Ht;Me&&(X=!X),B(X),P.blending===Es&&P.transparent===!1?C(hi):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ge=P.stencilWrite;c.setTest(ge),ge&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),j(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?D(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function B(P){A!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),A=P)}function $(P){P!==g0?(D(t.CULL_FACE),P!==ie&&(P===mu?t.cullFace(t.BACK):P===_0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),ie=P}function re(P){P!==fe&&(se&&t.lineWidth(P),fe=P)}function j(P,Me,X){P?(D(t.POLYGON_OFFSET_FILL),(k!==Me||Y!==X)&&(t.polygonOffset(Me,X),k=Me,Y=X)):le(t.POLYGON_OFFSET_FILL)}function ae(P){P?D(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function te(P){P===void 0&&(P=t.TEXTURE0+q-1),he!==P&&(t.activeTexture(P),he=P)}function we(P,Me,X){X===void 0&&(he===null?X=t.TEXTURE0+q-1:X=he);let ge=oe[X];ge===void 0&&(ge={type:void 0,texture:void 0},oe[X]=ge),(ge.type!==P||ge.texture!==Me)&&(he!==X&&(t.activeTexture(X),he=X),t.bindTexture(P,Me||me[P]),ge.type=P,ge.texture=Me)}function E(){const P=oe[he];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function v(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(P){ue.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ue.copy(P))}function Ee(P){de.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),de.copy(P))}function ye(P,Me){let X=h.get(Me);X===void 0&&(X=new WeakMap,h.set(Me,X));let ge=X.get(P);ge===void 0&&(ge=t.getUniformBlockIndex(Me,P.name),X.set(P,ge))}function Fe(P,Me){const ge=h.get(Me).get(P);u.get(Me)!==ge&&(t.uniformBlockBinding(Me,ge,P.__bindingPointIndex),u.set(Me,ge))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},he=null,oe={},p={},_=new WeakMap,x=[],m=null,f=!1,b=null,M=null,S=null,R=null,L=null,I=null,V=null,y=!1,A=null,ie=null,fe=null,k=null,Y=null,ue.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:D,disable:le,bindFramebuffer:J,drawBuffers:xe,useProgram:Ae,setBlending:C,setMaterial:F,setFlipSided:B,setCullFace:$,setLineWidth:re,setPolygonOffset:j,setScissorTest:ae,activeTexture:te,bindTexture:we,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Le,texImage3D:Ce,updateUBOMapping:ye,uniformBlockBinding:Fe,texStorage2D:pe,texStorage3D:K,texSubImage2D:Q,texSubImage3D:ne,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Pe,viewport:Ee,reset:Ze}}function yw(t,e,n,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,v){return f?new OffscreenCanvas(E,v):Po("canvas")}function M(E,v,U,Q){let ne=1;if((E.width>Q||E.height>Q)&&(ne=Q/Math.max(E.width,E.height)),ne<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ce=v?Lo:Math.floor,ve=ce(ne*E.width),pe=ce(ne*E.height);x===void 0&&(x=b(ve,pe));const K=U?b(ve,pe):x;return K.width=ve,K.height=pe,K.getContext("2d").drawImage(E,0,0,ve,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+pe+")."),K}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return gl(E.width)&&gl(E.height)}function R(E){return a?!1:E.wrapS!==un||E.wrapT!==un||E.minFilter!==Dt&&E.minFilter!==qt}function L(E,v){return E.generateMipmaps&&v&&E.minFilter!==Dt&&E.minFilter!==qt}function I(E){t.generateMipmap(E)}function V(E,v,U,Q,ne=!1){if(a===!1)return v;if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce=v;return v===t.RED&&(U===t.FLOAT&&(ce=t.R32F),U===t.HALF_FLOAT&&(ce=t.R16F),U===t.UNSIGNED_BYTE&&(ce=t.R8)),v===t.RG&&(U===t.FLOAT&&(ce=t.RG32F),U===t.HALF_FLOAT&&(ce=t.RG16F),U===t.UNSIGNED_BYTE&&(ce=t.RG8)),v===t.RGBA&&(U===t.FLOAT&&(ce=t.RGBA32F),U===t.HALF_FLOAT&&(ce=t.RGBA16F),U===t.UNSIGNED_BYTE&&(ce=Q===ze&&ne===!1?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)),(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(E,v,U){return L(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Dt&&E.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){return E===Dt||E===Mu||E===_a?t.NEAREST:t.LINEAR}function ie(E){const v=E.target;v.removeEventListener("dispose",ie),k(v),v.isVideoTexture&&_.delete(v)}function fe(E){const v=E.target;v.removeEventListener("dispose",fe),q(v)}function k(E){const v=i.get(E);if(v.__webglInit===void 0)return;const U=E.source,Q=m.get(U);if(Q){const ne=Q[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&Y(E),Object.keys(Q).length===0&&m.delete(U)}i.remove(E)}function Y(E){const v=i.get(E);t.deleteTexture(v.__webglTexture);const U=E.source,Q=m.get(U);delete Q[v.__cacheKey],o.memory.textures--}function q(E){const v=E.texture,U=i.get(E),Q=i.get(v);if(Q.__webglTexture!==void 0&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)t.deleteFramebuffer(U.__webglFramebuffer[ne]),U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer[ne]);else{if(t.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&t.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ne=0;ne<U.__webglColorRenderbuffer.length;ne++)U.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(U.__webglColorRenderbuffer[ne]);U.__webglDepthRenderbuffer&&t.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,ce=v.length;ne<ce;ne++){const ve=i.get(v[ne]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(v[ne])}i.remove(v),i.remove(E)}let se=0;function G(){se=0}function W(){const E=se;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),se+=1,E}function he(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function oe(E,v){const U=i.get(E);if(E.isVideoTexture&&te(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(U,E,v);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+v)}function Te(E,v){const U=i.get(E);if(E.version>0&&U.__version!==E.version){J(U,E,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+v)}function N(E,v){const U=i.get(E);if(E.version>0&&U.__version!==E.version){J(U,E,v);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+v)}function ue(E,v){const U=i.get(E);if(E.version>0&&U.__version!==E.version){xe(U,E,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+v)}const de={[fl]:t.REPEAT,[un]:t.CLAMP_TO_EDGE,[pl]:t.MIRRORED_REPEAT},be={[Dt]:t.NEAREST,[Mu]:t.NEAREST_MIPMAP_NEAREST,[_a]:t.NEAREST_MIPMAP_LINEAR,[qt]:t.LINEAR,[X0]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},me={[ox]:t.NEVER,[fx]:t.ALWAYS,[ax]:t.LESS,[cx]:t.LEQUAL,[lx]:t.EQUAL,[dx]:t.GEQUAL,[ux]:t.GREATER,[hx]:t.NOTEQUAL};function D(E,v,U){if(U?(t.texParameteri(E,t.TEXTURE_WRAP_S,de[v.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,de[v.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,de[v.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,be[v.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,be[v.minFilter])):(t.texParameteri(E,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(E,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(v.wrapS!==un||v.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(E,t.TEXTURE_MAG_FILTER,A(v.magFilter)),t.texParameteri(E,t.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Dt&&v.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Dt||v.minFilter!==_a&&v.minFilter!==Mr||v.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===yr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(t.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function le(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",ie));const Q=v.source;let ne=m.get(Q);ne===void 0&&(ne={},m.set(Q,ne));const ce=he(v);if(ce!==E.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ne[ce].usedTimes++;const ve=ne[E.__cacheKey];ve!==void 0&&(ne[E.__cacheKey].usedTimes--,ve.usedTimes===0&&Y(v)),E.__cacheKey=ce,E.__webglTexture=ne[ce].texture}return U}function J(E,v,U){let Q=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=le(E,v),ce=v.source;n.bindTexture(Q,E.__webglTexture,t.TEXTURE0+U);const ve=i.get(ce);if(ce.version!==ve.__version||ne===!0){n.activeTexture(t.TEXTURE0+U),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const pe=R(v)&&S(v.image)===!1;let K=M(v.image,pe,!1,u);K=we(v,K);const Le=S(K)||a,Ce=r.convert(v.format,v.colorSpace);let Pe=r.convert(v.type),Ee=V(v.internalFormat,Ce,Pe,v.colorSpace);D(Q,v,Le);let ye;const Fe=v.mipmaps,Ze=a&&v.isVideoTexture!==!0,P=ve.__version===void 0||ne===!0,Me=y(v,K,Le);if(v.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?v.type===ai?Ee=t.DEPTH_COMPONENT32F:v.type===oi?Ee=t.DEPTH_COMPONENT24:v.type===Hi?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:v.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ki&&Ee===t.DEPTH_COMPONENT&&v.type!==Ql&&v.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=oi,Pe=r.convert(v.type)),v.format===Ls&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,v.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Hi,Pe=r.convert(v.type))),P&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Ee,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,Ee,K.width,K.height,0,Ce,Pe,null));else if(v.isDataTexture)if(Fe.length>0&&Le){Ze&&P&&n.texStorage2D(t.TEXTURE_2D,Me,Ee,Fe[0].width,Fe[0].height);for(let X=0,ge=Fe.length;X<ge;X++)ye=Fe[X],Ze?n.texSubImage2D(t.TEXTURE_2D,X,0,0,ye.width,ye.height,Ce,Pe,ye.data):n.texImage2D(t.TEXTURE_2D,X,Ee,ye.width,ye.height,0,Ce,Pe,ye.data);v.generateMipmaps=!1}else Ze?(P&&n.texStorage2D(t.TEXTURE_2D,Me,Ee,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,Ce,Pe,K.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,K.width,K.height,0,Ce,Pe,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ze&&P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ee,Fe[0].width,Fe[0].height,K.depth);for(let X=0,ge=Fe.length;X<ge;X++)ye=Fe[X],v.format!==hn?Ce!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,K.depth,Ce,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Ee,ye.width,ye.height,K.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,K.depth,Ce,Pe,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Ee,ye.width,ye.height,K.depth,0,Ce,Pe,ye.data)}else{Ze&&P&&n.texStorage2D(t.TEXTURE_2D,Me,Ee,Fe[0].width,Fe[0].height);for(let X=0,ge=Fe.length;X<ge;X++)ye=Fe[X],v.format!==hn?Ce!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ye.width,ye.height,Ce,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,X,0,0,ye.width,ye.height,Ce,Pe,ye.data):n.texImage2D(t.TEXTURE_2D,X,Ee,ye.width,ye.height,0,Ce,Pe,ye.data)}else if(v.isDataArrayTexture)Ze?(P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ee,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ce,Pe,K.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,K.width,K.height,K.depth,0,Ce,Pe,K.data);else if(v.isData3DTexture)Ze?(P&&n.texStorage3D(t.TEXTURE_3D,Me,Ee,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ce,Pe,K.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,K.width,K.height,K.depth,0,Ce,Pe,K.data);else if(v.isFramebufferTexture){if(P)if(Ze)n.texStorage2D(t.TEXTURE_2D,Me,Ee,K.width,K.height);else{let X=K.width,ge=K.height;for(let Se=0;Se<Me;Se++)n.texImage2D(t.TEXTURE_2D,Se,Ee,X,ge,0,Ce,Pe,null),X>>=1,ge>>=1}}else if(Fe.length>0&&Le){Ze&&P&&n.texStorage2D(t.TEXTURE_2D,Me,Ee,Fe[0].width,Fe[0].height);for(let X=0,ge=Fe.length;X<ge;X++)ye=Fe[X],Ze?n.texSubImage2D(t.TEXTURE_2D,X,0,0,Ce,Pe,ye):n.texImage2D(t.TEXTURE_2D,X,Ee,Ce,Pe,ye);v.generateMipmaps=!1}else Ze?(P&&n.texStorage2D(t.TEXTURE_2D,Me,Ee,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Pe,K)):n.texImage2D(t.TEXTURE_2D,0,Ee,Ce,Pe,K);L(v,Le)&&I(Q),ve.__version=ce.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xe(E,v,U){if(v.image.length!==6)return;const Q=le(E,v),ne=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+U);const ce=i.get(ne);if(ne.version!==ce.__version||Q===!0){n.activeTexture(t.TEXTURE0+U),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ve=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,K=[];for(let X=0;X<6;X++)!ve&&!pe?K[X]=M(v.image[X],!1,!0,c):K[X]=pe?v.image[X].image:v.image[X],K[X]=we(v,K[X]);const Le=K[0],Ce=S(Le)||a,Pe=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),ye=V(v.internalFormat,Pe,Ee,v.colorSpace),Fe=a&&v.isVideoTexture!==!0,Ze=ce.__version===void 0||Q===!0;let P=y(v,Le,Ce);D(t.TEXTURE_CUBE_MAP,v,Ce);let Me;if(ve){Fe&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,ye,Le.width,Le.height);for(let X=0;X<6;X++){Me=K[X].mipmaps;for(let ge=0;ge<Me.length;ge++){const Se=Me[ge];v.format!==hn?Pe!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,0,0,Se.width,Se.height,Pe,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,0,0,Se.width,Se.height,Pe,Ee,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,ye,Se.width,Se.height,0,Pe,Ee,Se.data)}}}else{Me=v.mipmaps,Fe&&Ze&&(Me.length>0&&P++,n.texStorage2D(t.TEXTURE_CUBE_MAP,P,ye,K[0].width,K[0].height));for(let X=0;X<6;X++)if(pe){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,K[X].width,K[X].height,Pe,Ee,K[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ye,K[X].width,K[X].height,0,Pe,Ee,K[X].data);for(let ge=0;ge<Me.length;ge++){const qe=Me[ge].image[X].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,0,0,qe.width,qe.height,Pe,Ee,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,ye,qe.width,qe.height,0,Pe,Ee,qe.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Pe,Ee,K[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ye,Pe,Ee,K[X]);for(let ge=0;ge<Me.length;ge++){const Se=Me[ge];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,0,0,Pe,Ee,Se.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,ye,Pe,Ee,Se.image[X])}}}L(v,Ce)&&I(t.TEXTURE_CUBE_MAP),ce.__version=ne.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ae(E,v,U,Q,ne){const ce=r.convert(U.format,U.colorSpace),ve=r.convert(U.type),pe=V(U.internalFormat,ce,ve,U.colorSpace);i.get(v).__hasExternalTextures||(ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,pe,v.width,v.height,v.depth,0,ce,ve,null):n.texImage2D(ne,0,pe,v.width,v.height,0,ce,ve,null)),n.bindFramebuffer(t.FRAMEBUFFER,E),ae(v)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,i.get(U).__webglTexture,0,j(v)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,i.get(U).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function g(E,v,U){if(t.bindRenderbuffer(t.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let Q=t.DEPTH_COMPONENT16;if(U||ae(v)){const ne=v.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ai?Q=t.DEPTH_COMPONENT32F:ne.type===oi&&(Q=t.DEPTH_COMPONENT24));const ce=j(v);ae(v)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Q,v.width,v.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Q,v.width,v.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,v.width,v.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const Q=j(v);U&&ae(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,v.width,v.height):ae(v)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,E)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ne=0;ne<Q.length;ne++){const ce=Q[ne],ve=r.convert(ce.format,ce.colorSpace),pe=r.convert(ce.type),K=V(ce.internalFormat,ve,pe,ce.colorSpace),Le=j(v);U&&ae(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,K,v.width,v.height):ae(v)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,K,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,K,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function T(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),oe(v.depthTexture,0);const Q=i.get(v.depthTexture).__webglTexture,ne=j(v);if(v.depthTexture.format===ki)ae(v)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Ls)ae(v)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function C(E){const v=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");T(v.__webglFramebuffer,E)}else if(U){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=t.createRenderbuffer(),g(v.__webglDepthbuffer[Q],E,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=t.createRenderbuffer(),g(v.__webglDepthbuffer,E,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(E,v,U){const Q=i.get(E);v!==void 0&&Ae(Q.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),U!==void 0&&C(E)}function B(E){const v=E.texture,U=i.get(E),Q=i.get(v);E.addEventListener("dispose",fe),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=v.version,o.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,ce=E.isWebGLMultipleRenderTargets===!0,ve=S(E)||a;if(ne){U.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)U.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(U.__webglFramebuffer=t.createFramebuffer(),ce)if(s.drawBuffers){const pe=E.texture;for(let K=0,Le=pe.length;K<Le;K++){const Ce=i.get(pe[K]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&ae(E)===!1){const pe=ce?v:[v];U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<pe.length;K++){const Le=pe[K];U.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[K]);const Ce=r.convert(Le.format,Le.colorSpace),Pe=r.convert(Le.type),Ee=V(Le.internalFormat,Ce,Pe,Le.colorSpace,E.isXRRenderTarget===!0),ye=j(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,Ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,U.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),g(U.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),D(t.TEXTURE_CUBE_MAP,v,ve);for(let pe=0;pe<6;pe++)Ae(U.__webglFramebuffer[pe],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe);L(v,ve)&&I(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const pe=E.texture;for(let K=0,Le=pe.length;K<Le;K++){const Ce=pe[K],Pe=i.get(Ce);n.bindTexture(t.TEXTURE_2D,Pe.__webglTexture),D(t.TEXTURE_2D,Ce,ve),Ae(U.__webglFramebuffer,E,Ce,t.COLOR_ATTACHMENT0+K,t.TEXTURE_2D),L(Ce,ve)&&I(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?pe=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,Q.__webglTexture),D(pe,v,ve),Ae(U.__webglFramebuffer,E,v,t.COLOR_ATTACHMENT0,pe),L(v,ve)&&I(pe),n.unbindTexture()}E.depthBuffer&&C(E)}function $(E){const v=S(E)||a,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,ne=U.length;Q<ne;Q++){const ce=U[Q];if(L(ce,v)){const ve=E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(ce).__webglTexture;n.bindTexture(ve,pe),I(ve),n.unbindTexture()}}}function re(E){if(a&&E.samples>0&&ae(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,Q=E.height;let ne=t.COLOR_BUFFER_BIT;const ce=[],ve=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(E),K=E.isWebGLMultipleRenderTargets===!0;if(K)for(let Le=0;Le<v.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Le=0;Le<v.length;Le++){ce.push(t.COLOR_ATTACHMENT0+Le),E.depthBuffer&&ce.push(ve);const Ce=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Ce===!1&&(E.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),K&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]),Ce===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),K){const Pe=i.get(v[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,U,Q,0,0,U,Q,ne,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let Le=0;Le<v.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]);const Ce=i.get(v[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function j(E){return Math.min(h,E.samples)}function ae(E){const v=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(E){const v=o.render.frame;_.get(E)!==v&&(_.set(E,v),E.update())}function we(E,v){const U=E.colorSpace,Q=E.format,ne=E.type;return E.isCompressedTexture===!0||E.format===ml||U!==_n&&U!==Gi&&(U===ze?a===!1?e.has("EXT_sRGB")===!0&&Q===hn?(E.format=ml,E.minFilter=qt,E.generateMipmaps=!1):v=cf.sRGBToLinear(v):(Q!==hn||ne!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=oe,this.setTexture2DArray=Te,this.setTexture3D=N,this.setTextureCube=ue,this.rebindTextures=F,this.setupRenderTarget=B,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ae}function Sw(t,e,n){const i=n.isWebGL2;function s(r,o=Gi){let a;if(r===di)return t.UNSIGNED_BYTE;if(r===ef)return t.UNSIGNED_SHORT_4_4_4_4;if(r===tf)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Y0)return t.BYTE;if(r===q0)return t.SHORT;if(r===Ql)return t.UNSIGNED_SHORT;if(r===Qd)return t.INT;if(r===oi)return t.UNSIGNED_INT;if(r===ai)return t.FLOAT;if(r===yr)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===j0)return t.ALPHA;if(r===hn)return t.RGBA;if(r===$0)return t.LUMINANCE;if(r===K0)return t.LUMINANCE_ALPHA;if(r===ki)return t.DEPTH_COMPONENT;if(r===Ls)return t.DEPTH_STENCIL;if(r===ml)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Z0)return t.RED;if(r===nf)return t.RED_INTEGER;if(r===J0)return t.RG;if(r===sf)return t.RG_INTEGER;if(r===rf)return t.RGBA_INTEGER;if(r===va||r===xa||r===Ea||r===Ma)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===va)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===va)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yu||r===Su||r===wu||r===bu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Su)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Q0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tu||r===Au)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Tu)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Au)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ru||r===Cu||r===Lu||r===Pu||r===Iu||r===Uu||r===Du||r===Ou||r===Nu||r===Fu||r===Bu||r===zu||r===Hu||r===ku)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ru)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Iu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Du)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ou)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ku)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ya)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ya)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===ex||r===Vu||r===Gu||r===Wu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ya)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hi?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class ww extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ps extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bw={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Tw extends _t{constructor(e,n,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:ki,u!==ki&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ki&&(i=oi),i===void 0&&u===Ls&&(i=Hi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Aw extends Os{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const x=n.getContextAttributes();let m=null,f=null;const b=[],M=[];let S=null;const R=new Qt;R.layers.enable(1),R.viewport=new wt;const L=new Qt;L.layers.enable(2),L.viewport=new wt;const I=[R,L],V=new ww;V.layers.enable(1),V.layers.enable(2);let y=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(N){S=N},this.getController=function(N){let ue=b[N];return ue===void 0&&(ue=new Wa,b[N]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(N){let ue=b[N];return ue===void 0&&(ue=new Wa,b[N]=ue),ue.getGripSpace()},this.getHand=function(N){let ue=b[N];return ue===void 0&&(ue=new Wa,b[N]=ue),ue.getHandSpace()};function ie(N){const ue=M.indexOf(N.inputSource);if(ue===-1)return;const de=b[ue];de!==void 0&&(de.update(N.inputSource,N.frame,c||o),de.dispatchEvent({type:N.type,data:N.inputSource}))}function fe(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",k);for(let N=0;N<b.length;N++){const ue=M[N];ue!==null&&(M[N]=null,b[N].disconnect(ue))}y=null,A=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,Te.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,ue),s.updateRenderState({baseLayer:p}),f=new vi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,de=null,be=null;x.depth&&(be=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=x.stencil?Ls:ki,de=x.stencil?Hi:oi);const me={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:r};h=new XRWebGLBinding(s,n),d=h.createProjectionLayer(me),s.updateRenderState({layers:[d]}),f=new vi(d.textureWidth,d.textureHeight,{format:hn,type:di,depthTexture:new Tw(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const D=e.properties.get(f);D.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Te.setContext(s),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(N){for(let ue=0;ue<N.removed.length;ue++){const de=N.removed[ue],be=M.indexOf(de);be>=0&&(M[be]=null,b[be].disconnect(de))}for(let ue=0;ue<N.added.length;ue++){const de=N.added[ue];let be=M.indexOf(de);if(be===-1){for(let D=0;D<b.length;D++)if(D>=M.length){M.push(de),be=D;break}else if(M[D]===null){M[D]=de,be=D;break}if(be===-1)break}const me=b[be];me&&me.connect(de)}}const Y=new z,q=new z;function se(N,ue,de){Y.setFromMatrixPosition(ue.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);const be=Y.distanceTo(q),me=ue.projectionMatrix.elements,D=de.projectionMatrix.elements,le=me[14]/(me[10]-1),J=me[14]/(me[10]+1),xe=(me[9]+1)/me[5],Ae=(me[9]-1)/me[5],g=(me[8]-1)/me[0],T=(D[8]+1)/D[0],C=le*g,F=le*T,B=be/(-g+T),$=B*-g;ue.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX($),N.translateZ(B),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const re=le+B,j=J+B,ae=C-$,te=F+(be-$),we=xe*J/j*re,E=Ae*J/j*re;N.projectionMatrix.makePerspective(ae,te,we,E,re,j),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function G(N,ue){ue===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(ue.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCameraXR=function(N){if(s===null)return N;S&&(N=S),V.near=L.near=R.near=N.near,V.far=L.far=R.far=N.far,(y!==V.near||A!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),y=V.near,A=V.far);const ue=N.parent,de=V.cameras;G(V,ue);for(let be=0;be<de.length;be++)G(de[be],ue);return de.length===2?se(V,R,L):V.projectionMatrix.copy(R.projectionMatrix),S&&W(V,ue),V};function W(N,ue){const de=S;ue===null?de.matrix.copy(N.matrixWorld):(de.matrix.copy(ue.matrixWorld),de.matrix.invert(),de.matrix.multiply(N.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0);const be=de.children;for(let me=0,D=be.length;me<D;me++)be[me].updateMatrixWorld(!0);de.projectionMatrix.copy(N.projectionMatrix),de.projectionMatrixInverse.copy(N.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=Sr*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let he=null;function oe(N,ue){if(u=ue.getViewerPose(c||o),_=ue,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let be=!1;de.length!==V.cameras.length&&(V.cameras.length=0,be=!0);for(let me=0;me<de.length;me++){const D=de[me];let le=null;if(p!==null)le=p.getViewport(D);else{const xe=h.getViewSubImage(d,D);le=xe.viewport,me===0&&(e.setRenderTargetTextures(f,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(f))}let J=I[me];J===void 0&&(J=new Qt,J.layers.enable(me),J.viewport=new wt,I[me]=J),J.matrix.fromArray(D.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(D.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(le.x,le.y,le.width,le.height),me===0&&(V.matrix.copy(J.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),be===!0&&V.cameras.push(J)}}for(let de=0;de<b.length;de++){const be=M[de],me=b[de];be!==null&&me!==void 0&&me.update(be,ue,c||o)}he&&he(N,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const Te=new Mf;Te.setAnimationLoop(oe),this.setAnimationLoop=function(N){he=N},this.dispose=function(){}}}function Rw(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,_f(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,M,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const M=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*M,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=M*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cw(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,M){const S=M.program;i.uniformBlockBinding(b,S)}function c(b,M){let S=s[b.id];S===void 0&&(_(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(b,R);const L=e.render.frame;r[b.id]!==L&&(d(b),r[b.id]=L)}function u(b){const M=h();b.__bindingPointIndex=M;const S=t.createBuffer(),R=b.__size,L=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=s[b.id],S=b.uniforms,R=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let L=0,I=S.length;L<I;L++){const V=S[L];if(p(V,L,R)===!0){const y=V.__offset,A=Array.isArray(V.value)?V.value:[V.value];let ie=0;for(let fe=0;fe<A.length;fe++){const k=A[fe],Y=x(k);typeof k=="number"?(V.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,y+ie,V.__data)):k.isMatrix3?(V.__data[0]=k.elements[0],V.__data[1]=k.elements[1],V.__data[2]=k.elements[2],V.__data[3]=k.elements[0],V.__data[4]=k.elements[3],V.__data[5]=k.elements[4],V.__data[6]=k.elements[5],V.__data[7]=k.elements[0],V.__data[8]=k.elements[6],V.__data[9]=k.elements[7],V.__data[10]=k.elements[8],V.__data[11]=k.elements[0]):(k.toArray(V.__data,ie),ie+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,y,V.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(b,M,S){const R=b.value;if(S[M]===void 0){if(typeof R=="number")S[M]=R;else{const L=Array.isArray(R)?R:[R],I=[];for(let V=0;V<L.length;V++)I.push(L[V].clone());S[M]=I}return!0}else if(typeof R=="number"){if(S[M]!==R)return S[M]=R,!0}else{const L=Array.isArray(S[M])?S[M]:[S[M]],I=Array.isArray(R)?R:[R];for(let V=0;V<L.length;V++){const y=L[V];if(y.equals(I[V])===!1)return y.copy(I[V]),!0}}return!1}function _(b){const M=b.uniforms;let S=0;const R=16;let L=0;for(let I=0,V=M.length;I<V;I++){const y=M[I],A={boundary:0,storage:0},ie=Array.isArray(y.value)?y.value:[y.value];for(let fe=0,k=ie.length;fe<k;fe++){const Y=ie[fe],q=x(Y);A.boundary+=q.boundary,A.storage+=q.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,I>0){L=S%R;const fe=R-L;L!==0&&fe-A.boundary<0&&(S+=R-L,y.__offset=S)}S+=A.storage}return L=S%R,L>0&&(S+=R-L),b.__size=S,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const b in s)t.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}function Lw(){const t=Po("canvas");return t.style.display="block",t}class Tf{constructor(e={}){const{canvas:n=Lw(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const f=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=Yn,this.toneMappingExposure=1;const M=this;let S=!1,R=0,L=0,I=null,V=-1,y=null;const A=new wt,ie=new wt;let fe=null;const k=new et(0);let Y=0,q=n.width,se=n.height,G=1,W=null,he=null;const oe=new wt(0,0,q,se),Te=new wt(0,0,q,se);let N=!1;const ue=new Ef;let de=!1,be=!1,me=null;const D=new vt,le=new Xe,J=new z,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return I===null?G:1}let g=i;function T(w,H){for(let Z=0;Z<w.length;Z++){const O=w[Z],ee=n.getContext(O,H);if(ee!==null)return ee}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jl}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",X,!1),n.addEventListener("webglcontextcreationerror",ge,!1),g===null){const H=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&H.shift(),g=T(H,w),g===null)throw T(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let C,F,B,$,re,j,ae,te,we,E,v,U,Q,ne,ce,ve,pe,K,Le,Ce,Pe,Ee,ye,Fe;function Ze(){C=new ky(g),F=new Dy(g,C,e),C.init(F),Ee=new Sw(g,C,F),B=new Mw(g,C,F),$=new Wy(g),re=new aw,j=new yw(g,C,B,re,F,Ee,$),ae=new Ny(M),te=new Hy(M),we=new tE(g,F),ye=new Iy(g,C,we,F),E=new Vy(g,we,$,ye),v=new jy(g,E,we,$),Le=new qy(g,F,j),ve=new Oy(re),U=new ow(M,ae,te,C,F,ye,ve),Q=new Rw(M,re),ne=new cw,ce=new mw(C,F),K=new Py(M,ae,te,B,v,d,l),pe=new Ew(M,v,F),Fe=new Cw(g,$,F,B),Ce=new Uy(g,C,$,F),Pe=new Gy(g,C,$,F),$.programs=U.programs,M.capabilities=F,M.extensions=C,M.properties=re,M.renderLists=ne,M.shadowMap=pe,M.state=B,M.info=$}Ze();const P=new Aw(M,g);this.xr=P,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const w=C.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=C.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(q,se,!1))},this.getSize=function(w){return w.set(q,se)},this.setSize=function(w,H,Z=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,se=H,n.width=Math.floor(w*G),n.height=Math.floor(H*G),Z===!0&&(n.style.width=w+"px",n.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(q*G,se*G).floor()},this.setDrawingBufferSize=function(w,H,Z){q=w,se=H,G=Z,n.width=Math.floor(w*Z),n.height=Math.floor(H*Z),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,H,Z,O){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,H,Z,O),B.viewport(A.copy(oe).multiplyScalar(G).floor())},this.getScissor=function(w){return w.copy(Te)},this.setScissor=function(w,H,Z,O){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,H,Z,O),B.scissor(ie.copy(Te).multiplyScalar(G).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(w){B.setScissorTest(N=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(w=!0,H=!0,Z=!0){let O=0;if(w){let ee=!1;if(I!==null){const Re=I.texture.format;ee=Re===rf||Re===sf||Re===nf}if(ee){const Re=I.texture.type,Ie=Re===di||Re===oi||Re===Ql||Re===Hi||Re===ef||Re===tf,Ue=K.getClearColor(),Oe=K.getClearAlpha(),Ge=Ue.r,Ne=Ue.g,Be=Ue.b,Qe=re.get(I).__webglFramebuffer;Ie?(p[0]=Ge,p[1]=Ne,p[2]=Be,p[3]=Oe,g.clearBufferuiv(g.COLOR,Qe,p)):(_[0]=Ge,_[1]=Ne,_[2]=Be,_[3]=Oe,g.clearBufferiv(g.COLOR,Qe,_))}else O|=g.COLOR_BUFFER_BIT}H&&(O|=g.DEPTH_BUFFER_BIT),Z&&(O|=g.STENCIL_BUFFER_BIT),g.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",X,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),ne.dispose(),ce.dispose(),re.dispose(),ae.dispose(),te.dispose(),v.dispose(),ye.dispose(),Fe.dispose(),U.dispose(),P.dispose(),P.removeEventListener("sessionstart",rt),P.removeEventListener("sessionend",xn),me&&(me.dispose(),me=null),Ct.stop()};function Me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=$.autoReset,H=pe.enabled,Z=pe.autoUpdate,O=pe.needsUpdate,ee=pe.type;Ze(),$.autoReset=w,pe.enabled=H,pe.autoUpdate=Z,pe.needsUpdate=O,pe.type=ee}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Se(w){const H=w.target;H.removeEventListener("dispose",Se),qe(H)}function qe(w){st(w),re.remove(w)}function st(w){const H=re.get(w).programs;H!==void 0&&(H.forEach(function(Z){U.releaseProgram(Z)}),w.isShaderMaterial&&U.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,Z,O,ee,Re){H===null&&(H=xe);const Ie=ee.isMesh&&ee.matrixWorld.determinant()<0,Ue=Nm(w,H,Z,O,ee);B.setMaterial(O,Ie);let Oe=Z.index,Ge=1;O.wireframe===!0&&(Oe=E.getWireframeAttribute(Z),Ge=2);const Ne=Z.drawRange,Be=Z.attributes.position;let Qe=Ne.start*Ge,ot=(Ne.start+Ne.count)*Ge;Re!==null&&(Qe=Math.max(Qe,Re.start*Ge),ot=Math.min(ot,(Re.start+Re.count)*Ge)),Oe!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,Oe.count)):Be!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,Be.count));const tn=ot-Qe;if(tn<0||tn===1/0)return;ye.setup(ee,O,Ue,Z,Oe);let Pn,lt=Ce;if(Oe!==null&&(Pn=we.get(Oe),lt=Pe,lt.setIndex(Pn)),ee.isMesh)O.wireframe===!0?(B.setLineWidth(O.wireframeLinewidth*Ae()),lt.setMode(g.LINES)):lt.setMode(g.TRIANGLES);else if(ee.isLine){let We=O.linewidth;We===void 0&&(We=1),B.setLineWidth(We*Ae()),ee.isLineSegments?lt.setMode(g.LINES):ee.isLineLoop?lt.setMode(g.LINE_LOOP):lt.setMode(g.LINE_STRIP)}else ee.isPoints?lt.setMode(g.POINTS):ee.isSprite&&lt.setMode(g.TRIANGLES);if(ee.isInstancedMesh)lt.renderInstances(Qe,tn,ee.count);else if(Z.isInstancedBufferGeometry){const We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ia=Math.min(Z.instanceCount,We);lt.renderInstances(Qe,tn,ia)}else lt.render(Qe,tn)},this.compile=function(w,H){function Z(O,ee,Re){O.transparent===!0&&O.side===Vn&&O.forceSinglePass===!1?(O.side=Ht,O.needsUpdate=!0,Fr(O,ee,Re),O.side=_i,O.needsUpdate=!0,Fr(O,ee,Re),O.side=Vn):Fr(O,ee,Re)}m=ce.get(w),m.init(),b.push(m),w.traverseVisible(function(O){O.isLight&&O.layers.test(H.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(M.useLegacyLights),w.traverse(function(O){const ee=O.material;if(ee)if(Array.isArray(ee))for(let Re=0;Re<ee.length;Re++){const Ie=ee[Re];Z(Ie,w,O)}else Z(ee,w,O)}),b.pop(),m=null};let at=null;function yi(w){at&&at(w)}function rt(){Ct.stop()}function xn(){Ct.start()}const Ct=new Mf;Ct.setAnimationLoop(yi),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(w){at=w,P.setAnimationLoop(w),w===null?Ct.stop():Ct.start()},P.addEventListener("sessionstart",rt),P.addEventListener("sessionend",xn),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(H=P.updateCameraXR(H)),w.isScene===!0&&w.onBeforeRender(M,w,H,I),m=ce.get(w,b.length),m.init(),b.push(m),D.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ue.setFromProjectionMatrix(D),be=this.localClippingEnabled,de=ve.init(this.clippingPlanes,be),x=ne.get(w,f.length),x.init(),f.push(x),_c(w,H,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(W,he),de===!0&&ve.beginShadows();const Z=m.state.shadowsArray;if(pe.render(Z,w,H),de===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,K.render(x,w),m.setupLights(M.useLegacyLights),H.isArrayCamera){const O=H.cameras;for(let ee=0,Re=O.length;ee<Re;ee++){const Ie=O[ee];vc(x,w,Ie,Ie.viewport)}}else vc(x,w,H);I!==null&&(j.updateMultisampleRenderTarget(I),j.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(M,w,H),ye.resetDefaultState(),V=-1,y=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function _c(w,H,Z,O){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ue.intersectsSprite(w)){O&&J.setFromMatrixPosition(w.matrixWorld).applyMatrix4(D);const Ie=v.update(w),Ue=w.material;Ue.visible&&x.push(w,Ie,Ue,Z,J.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ue.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==$.render.frame&&(w.skeleton.update(),w.skeleton.frame=$.render.frame);const Ie=v.update(w),Ue=w.material;if(O&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),J.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),J.copy(Ie.boundingSphere.center)),J.applyMatrix4(w.matrixWorld).applyMatrix4(D)),Array.isArray(Ue)){const Oe=Ie.groups;for(let Ge=0,Ne=Oe.length;Ge<Ne;Ge++){const Be=Oe[Ge],Qe=Ue[Be.materialIndex];Qe&&Qe.visible&&x.push(w,Ie,Qe,Z,J.z,Be)}}else Ue.visible&&x.push(w,Ie,Ue,Z,J.z,null)}}const Re=w.children;for(let Ie=0,Ue=Re.length;Ie<Ue;Ie++)_c(Re[Ie],H,Z,O)}function vc(w,H,Z,O){const ee=w.opaque,Re=w.transmissive,Ie=w.transparent;m.setupLightsView(Z),de===!0&&ve.setGlobalState(M.clippingPlanes,Z),Re.length>0&&Om(ee,Re,H,Z),O&&B.viewport(A.copy(O)),ee.length>0&&Nr(ee,H,Z),Re.length>0&&Nr(Re,H,Z),Ie.length>0&&Nr(Ie,H,Z),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Om(w,H,Z,O){const ee=F.isWebGL2;me===null&&(me=new vi(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")?yr:di,minFilter:Mr,samples:ee&&a===!0?4:0})),M.getDrawingBufferSize(le),ee?me.setSize(le.x,le.y):me.setSize(Lo(le.x),Lo(le.y));const Re=M.getRenderTarget();M.setRenderTarget(me),M.getClearColor(k),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear();const Ie=M.toneMapping;M.toneMapping=Yn,Nr(w,Z,O),j.updateMultisampleRenderTarget(me),j.updateRenderTargetMipmap(me);let Ue=!1;for(let Oe=0,Ge=H.length;Oe<Ge;Oe++){const Ne=H[Oe],Be=Ne.object,Qe=Ne.geometry,ot=Ne.material,tn=Ne.group;if(ot.side===Vn&&Be.layers.test(O.layers)){const Pn=ot.side;ot.side=Ht,ot.needsUpdate=!0,xc(Be,Z,O,Qe,ot,tn),ot.side=Pn,ot.needsUpdate=!0,Ue=!0}}Ue===!0&&(j.updateMultisampleRenderTarget(me),j.updateRenderTargetMipmap(me)),M.setRenderTarget(Re),M.setClearColor(k,Y),M.toneMapping=Ie}function Nr(w,H,Z){const O=H.isScene===!0?H.overrideMaterial:null;for(let ee=0,Re=w.length;ee<Re;ee++){const Ie=w[ee],Ue=Ie.object,Oe=Ie.geometry,Ge=O===null?Ie.material:O,Ne=Ie.group;Ue.layers.test(Z.layers)&&xc(Ue,H,Z,Oe,Ge,Ne)}}function xc(w,H,Z,O,ee,Re){w.onBeforeRender(M,H,Z,O,ee,Re),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(M,H,Z,O,w,Re),ee.transparent===!0&&ee.side===Vn&&ee.forceSinglePass===!1?(ee.side=Ht,ee.needsUpdate=!0,M.renderBufferDirect(Z,H,O,ee,w,Re),ee.side=_i,ee.needsUpdate=!0,M.renderBufferDirect(Z,H,O,ee,w,Re),ee.side=Vn):M.renderBufferDirect(Z,H,O,ee,w,Re),w.onAfterRender(M,H,Z,O,ee,Re)}function Fr(w,H,Z){H.isScene!==!0&&(H=xe);const O=re.get(w),ee=m.state.lights,Re=m.state.shadowsArray,Ie=ee.state.version,Ue=U.getParameters(w,ee.state,Re,H,Z),Oe=U.getProgramCacheKey(Ue);let Ge=O.programs;O.environment=w.isMeshStandardMaterial?H.environment:null,O.fog=H.fog,O.envMap=(w.isMeshStandardMaterial?te:ae).get(w.envMap||O.environment),Ge===void 0&&(w.addEventListener("dispose",Se),Ge=new Map,O.programs=Ge);let Ne=Ge.get(Oe);if(Ne!==void 0){if(O.currentProgram===Ne&&O.lightsStateVersion===Ie)return Ec(w,Ue),Ne}else Ue.uniforms=U.getUniforms(w),w.onBuild(Z,Ue,M),w.onBeforeCompile(Ue,M),Ne=U.acquireProgram(Ue,Oe),Ge.set(Oe,Ne),O.uniforms=Ue.uniforms;const Be=O.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=ve.uniform),Ec(w,Ue),O.needsLights=Bm(w),O.lightsStateVersion=Ie,O.needsLights&&(Be.ambientLightColor.value=ee.state.ambient,Be.lightProbe.value=ee.state.probe,Be.directionalLights.value=ee.state.directional,Be.directionalLightShadows.value=ee.state.directionalShadow,Be.spotLights.value=ee.state.spot,Be.spotLightShadows.value=ee.state.spotShadow,Be.rectAreaLights.value=ee.state.rectArea,Be.ltc_1.value=ee.state.rectAreaLTC1,Be.ltc_2.value=ee.state.rectAreaLTC2,Be.pointLights.value=ee.state.point,Be.pointLightShadows.value=ee.state.pointShadow,Be.hemisphereLights.value=ee.state.hemi,Be.directionalShadowMap.value=ee.state.directionalShadowMap,Be.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Be.spotShadowMap.value=ee.state.spotShadowMap,Be.spotLightMatrix.value=ee.state.spotLightMatrix,Be.spotLightMap.value=ee.state.spotLightMap,Be.pointShadowMap.value=ee.state.pointShadowMap,Be.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Qe=Ne.getUniforms(),ot=_o.seqWithValue(Qe.seq,Be);return O.currentProgram=Ne,O.uniformsList=ot,Ne}function Ec(w,H){const Z=re.get(w);Z.outputColorSpace=H.outputColorSpace,Z.instancing=H.instancing,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Nm(w,H,Z,O,ee){H.isScene!==!0&&(H=xe),j.resetTextureUnits();const Re=H.fog,Ie=O.isMeshStandardMaterial?H.environment:null,Ue=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:_n,Oe=(O.isMeshStandardMaterial?te:ae).get(O.envMap||Ie),Ge=O.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ne=!!Z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Be=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,ot=!!Z.morphAttributes.color,tn=O.toneMapped?M.toneMapping:Yn,Pn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,lt=Pn!==void 0?Pn.length:0,We=re.get(O),ia=m.state.lights;if(de===!0&&(be===!0||w!==y)){const Gt=w===y&&O.id===V;ve.setState(O,w,Gt)}let pt=!1;O.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ia.state.version||We.outputColorSpace!==Ue||ee.isInstancedMesh&&We.instancing===!1||!ee.isInstancedMesh&&We.instancing===!0||ee.isSkinnedMesh&&We.skinning===!1||!ee.isSkinnedMesh&&We.skinning===!0||We.envMap!==Oe||O.fog===!0&&We.fog!==Re||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ve.numPlanes||We.numIntersection!==ve.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Ne||We.morphTargets!==Be||We.morphNormals!==Qe||We.morphColors!==ot||We.toneMapping!==tn||F.isWebGL2===!0&&We.morphTargetsCount!==lt)&&(pt=!0):(pt=!0,We.__version=O.version);let Si=We.currentProgram;pt===!0&&(Si=Fr(O,H,ee));let Mc=!1,zs=!1,sa=!1;const Lt=Si.getUniforms(),wi=We.uniforms;if(B.useProgram(Si.program)&&(Mc=!0,zs=!0,sa=!0),O.id!==V&&(V=O.id,zs=!0),Mc||y!==w){if(Lt.setValue(g,"projectionMatrix",w.projectionMatrix),F.logarithmicDepthBuffer&&Lt.setValue(g,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,zs=!0,sa=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Gt=Lt.map.cameraPosition;Gt!==void 0&&Gt.setValue(g,J.setFromMatrixPosition(w.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Lt.setValue(g,"isOrthographic",w.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||ee.isSkinnedMesh)&&Lt.setValue(g,"viewMatrix",w.matrixWorldInverse)}if(ee.isSkinnedMesh){Lt.setOptional(g,ee,"bindMatrix"),Lt.setOptional(g,ee,"bindMatrixInverse");const Gt=ee.skeleton;Gt&&(F.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Lt.setValue(g,"boneTexture",Gt.boneTexture,j),Lt.setValue(g,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ra=Z.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&F.isWebGL2===!0)&&Le.update(ee,Z,Si),(zs||We.receiveShadow!==ee.receiveShadow)&&(We.receiveShadow=ee.receiveShadow,Lt.setValue(g,"receiveShadow",ee.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(wi.envMap.value=Oe,wi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),zs&&(Lt.setValue(g,"toneMappingExposure",M.toneMappingExposure),We.needsLights&&Fm(wi,sa),Re&&O.fog===!0&&Q.refreshFogUniforms(wi,Re),Q.refreshMaterialUniforms(wi,O,G,se,me),_o.upload(g,We.uniformsList,wi,j)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(_o.upload(g,We.uniformsList,wi,j),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Lt.setValue(g,"center",ee.center),Lt.setValue(g,"modelViewMatrix",ee.modelViewMatrix),Lt.setValue(g,"normalMatrix",ee.normalMatrix),Lt.setValue(g,"modelMatrix",ee.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Gt=O.uniformsGroups;for(let oa=0,zm=Gt.length;oa<zm;oa++)if(F.isWebGL2){const yc=Gt[oa];Fe.update(yc,Si),Fe.bind(yc,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function Fm(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Bm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,H,Z){re.get(w.texture).__webglTexture=H,re.get(w.depthTexture).__webglTexture=Z;const O=re.get(w);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Z===void 0,O.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,H){const Z=re.get(w);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,Z=0){I=w,R=H,L=Z;let O=!0,ee=null,Re=!1,Ie=!1;if(w){const Oe=re.get(w);Oe.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(g.FRAMEBUFFER,null),O=!1):Oe.__webglFramebuffer===void 0?j.setupRenderTarget(w):Oe.__hasExternalTextures&&j.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ie=!0);const Ne=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ee=Ne[H],Re=!0):F.isWebGL2&&w.samples>0&&j.useMultisampledRTT(w)===!1?ee=re.get(w).__webglMultisampledFramebuffer:ee=Ne,A.copy(w.viewport),ie.copy(w.scissor),fe=w.scissorTest}else A.copy(oe).multiplyScalar(G).floor(),ie.copy(Te).multiplyScalar(G).floor(),fe=N;if(B.bindFramebuffer(g.FRAMEBUFFER,ee)&&F.drawBuffers&&O&&B.drawBuffers(w,ee),B.viewport(A),B.scissor(ie),B.setScissorTest(fe),Re){const Oe=re.get(w.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,Z)}else if(Ie){const Oe=re.get(w.texture),Ge=H||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Oe.__webglTexture,Z||0,Ge)}V=-1},this.readRenderTargetPixels=function(w,H,Z,O,ee,Re,Ie){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){B.bindFramebuffer(g.FRAMEBUFFER,Ue);try{const Oe=w.texture,Ge=Oe.format,Ne=Oe.type;if(Ge!==hn&&Ee.convert(Ge)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===yr&&(C.has("EXT_color_buffer_half_float")||F.isWebGL2&&C.has("EXT_color_buffer_float"));if(Ne!==di&&Ee.convert(Ne)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===ai&&(F.isWebGL2||C.has("OES_texture_float")||C.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-O&&Z>=0&&Z<=w.height-ee&&g.readPixels(H,Z,O,ee,Ee.convert(Ge),Ee.convert(Ne),Re)}finally{const Oe=I!==null?re.get(I).__webglFramebuffer:null;B.bindFramebuffer(g.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(w,H,Z=0){const O=Math.pow(2,-Z),ee=Math.floor(H.image.width*O),Re=Math.floor(H.image.height*O);j.setTexture2D(H,0),g.copyTexSubImage2D(g.TEXTURE_2D,Z,0,0,w.x,w.y,ee,Re),B.unbindTexture()},this.copyTextureToTexture=function(w,H,Z,O=0){const ee=H.image.width,Re=H.image.height,Ie=Ee.convert(Z.format),Ue=Ee.convert(Z.type);j.setTexture2D(Z,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Z.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Z.unpackAlignment),H.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,O,w.x,w.y,ee,Re,Ie,Ue,H.image.data):H.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,O,w.x,w.y,H.mipmaps[0].width,H.mipmaps[0].height,Ie,H.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,O,w.x,w.y,Ie,Ue,H.image),O===0&&Z.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(w,H,Z,O,ee=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=w.max.x-w.min.x+1,Ie=w.max.y-w.min.y+1,Ue=w.max.z-w.min.z+1,Oe=Ee.convert(O.format),Ge=Ee.convert(O.type);let Ne;if(O.isData3DTexture)j.setTexture3D(O,0),Ne=g.TEXTURE_3D;else if(O.isDataArrayTexture)j.setTexture2DArray(O,0),Ne=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,O.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,O.unpackAlignment);const Be=g.getParameter(g.UNPACK_ROW_LENGTH),Qe=g.getParameter(g.UNPACK_IMAGE_HEIGHT),ot=g.getParameter(g.UNPACK_SKIP_PIXELS),tn=g.getParameter(g.UNPACK_SKIP_ROWS),Pn=g.getParameter(g.UNPACK_SKIP_IMAGES),lt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,lt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,lt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,w.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,w.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,w.min.z),Z.isDataTexture||Z.isData3DTexture?g.texSubImage3D(Ne,ee,H.x,H.y,H.z,Re,Ie,Ue,Oe,Ge,lt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(Ne,ee,H.x,H.y,H.z,Re,Ie,Ue,Oe,lt.data)):g.texSubImage3D(Ne,ee,H.x,H.y,H.z,Re,Ie,Ue,Oe,Ge,lt),g.pixelStorei(g.UNPACK_ROW_LENGTH,Be),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Qe),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ot),g.pixelStorei(g.UNPACK_SKIP_ROWS,tn),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Pn),ee===0&&O.generateMipmaps&&g.generateMipmap(Ne),B.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),B.unbindTexture()},this.resetState=function(){R=0,L=0,I=null,B.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?Vi:of}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vi?ze:_n}}class Pw extends Tf{}Pw.prototype.isWebGL1Renderer=!0;class Ph extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Iw{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let s=0;const r=i.length;let o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new Xe:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new z,s=[],r=[],o=[],a=new z,l=new vt;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Mt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(n===!0){let p=Math.acos(Mt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Ih(t,e,n,i,s){const r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}class Af extends Iw{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Xe){const i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Ih(a,l.x,c.x,u.x,h.x),Ih(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new Xe().fromArray(s))}return this}}class rc extends Mi{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new z,d=new z,p=[],_=[],x=[],m=[];for(let f=0;f<=i;f++){const b=[],M=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const L=R/n;h.x=-e*Math.cos(s+L*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+L*r)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(L+S,1-M),b.push(c++)}u.push(b)}for(let f=0;f<i;f++)for(let b=0;b<n;b++){const M=u[f][b+1],S=u[f][b],R=u[f+1][b],L=u[f+1][b+1];(f!==0||o>0)&&p.push(M,S,L),(f!==i-1||l<Math.PI)&&p.push(S,R,L)}this.setIndex(p),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(x,3)),this.setAttribute("uv",new Cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const vl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Uw{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Dw=new Uw;let Ow=class{constructor(e){this.manager=e!==void 0?e:Dw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const zn={};class Nw extends Error{constructor(e,n){super(e),this.response=n}}class Fw extends Ow{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:n,onProgress:i,onError:s});return}zn[e]=[],zn[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let x=0;const m=new ReadableStream({start(f){b();function b(){h.read().then(({done:M,value:S})=>{if(M)f.close();else{x+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let L=0,I=u.length;L<I;L++){const V=u[L];V.onProgress&&V.onProgress(R)}f.enqueue(S),b()}})}}});return new Response(m)}else throw new Nw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{vl.add(e,c);const u=zn[e];delete zn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bw{constructor(e,n,i=0,s=1/0){this.ray=new df(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return xl(e,this,i,n),i.sort(Uh),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xl(e[s],this,i,n);return i.sort(Uh),i}}function Uh(t,e){return t.distance-e.distance}function xl(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const s=t.children;for(let r=0,o=s.length;r<o;r++)xl(s[r],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);/*!
 * PhotoSphereViewer 5.1.7
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2023 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var zw=Object.defineProperty,oc=(t,e)=>{for(var n in e)zw(t,n,{get:e[n],enumerable:!0})},Rf={};oc(Rf,{ACTIONS:()=>Nf,ANIMATION_MIN_DURATION:()=>Lf,CAPTURE_EVENTS_CLASS:()=>Ir,CTRLZOOM_TIMEOUT:()=>Of,DBLCLICK_DELAY:()=>If,DEFAULT_TRANSITION:()=>Cf,EASINGS:()=>vo,ICONS:()=>vn,IDS:()=>yt,INERTIA_WINDOW:()=>El,KEY_CODES:()=>gt,LONGTOUCH_DELAY:()=>Uf,MOVE_THRESHOLD:()=>Pf,SPHERE_RADIUS:()=>Wi,TWOFINGERSOVERLAY_DELAY:()=>Df,VIEWER_DATA:()=>Ei});var Hw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,kw='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',Vw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,Gw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Ww=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Xw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,Yw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,qw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,jw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Cf=1500,Lf=500,Pf=4,If=300,Uf=500,Df=100,Of=2e3,El=300,Wi=10,Ei="photoSphereViewer",Ir="psv--capture-event",Nf=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(Nf||{}),yt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},gt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},vn={arrow:Hw,close:kw,download:Vw,fullscreenIn:Gw,fullscreenOut:Ww,info:Xw,menu:Yw,zoomIn:qw,zoomOut:jw},vo={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},Ut={};oc(Ut,{Animation:()=>br,Dynamic:()=>xo,MultiDynamic:()=>ep,PressHandler:()=>Qo,Slider:()=>np,SliderDirection:()=>tp,addClasses:()=>lc,angle:()=>Ff,applyEulerInverse:()=>wl,cleanCssPosition:()=>Jf,clone:()=>wr,createTexture:()=>Sl,cssPositionIsOrdered:()=>fc,dasherize:()=>Jw,deepEqual:()=>$f,deepmerge:()=>Yf,distance:()=>ac,exitFullscreen:()=>Xf,firstNonNull:()=>yn,getAbortError:()=>yl,getAngle:()=>zf,getClosest:()=>cc,getConfigParser:()=>Jo,getElement:()=>Hf,getPosition:()=>Vf,getShortestArc:()=>Bf,getStyle:()=>li,getTouchData:()=>Ml,getXMPValue:()=>Sn,greatArcDistance:()=>Kw,hasParent:()=>kf,invertResolvableBoolean:()=>Zo,isAbortError:()=>Zf,isEmpty:()=>qf,isExtendedPosition:()=>Io,isFullscreenEnabled:()=>Gf,isNil:()=>jf,isPlainObject:()=>hc,logWarn:()=>Ot,parseAngle:()=>ri,parsePoint:()=>Qw,parseSpeed:()=>Qf,removeClasses:()=>Zw,requestFullscreen:()=>Wf,resolveBoolean:()=>dc,sum:()=>$w,throttle:()=>uc,toggleClass:()=>Ko,wrap:()=>or});function or(t,e){let n=t%e;return n<0&&(n+=e),n}function $w(t){return t.reduce((e,n)=>e+n,0)}function ac(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Ff(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function Bf(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function zf(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function Kw([t,e],[n,i]){const s=(n-t)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function Hf(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Ko(t,e,n){n===void 0?t.classList.toggle(e):n?t.classList.add(e):n||t.classList.remove(e)}function lc(t,e){t.classList.add(...e.split(" "))}function Zw(t,e){t.classList.remove(...e.split(" "))}function kf(t,e){let n=t;do{if(n===e)return!0;n=n.parentElement}while(n);return!1}function cc(t,e){if(!(t!=null&&t.matches))return null;let n=t;do{if(n.matches(e))return n;n=n.parentElement}while(n);return null}function Vf(t){let e=0,n=0,i=t;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,n+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return{x:e,y:n}}function li(t,e){return window.getComputedStyle(t,null)[e]}function Ml(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:ac(e,n),angle:Ff(e,n),center:{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}}function Gf(t){return(document.fullscreenElement||document.webkitFullscreenElement)===t}function Wf(t){(t.requestFullscreen||t.webkitRequestFullscreen).call(t)}function Xf(){(document.exitFullscreen||document.webkitExitFullscreen).call(document)}function Jw(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,n)=>(n>0?"-":"")+e.toLowerCase())}function uc(t,e){let n=!1;return function(...i){n||(n=!0,setTimeout(()=>{t.apply(this,i),n=!1},e))}}function hc(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Yf(t,e){const n=e;return function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((o,a)=>{s[a]=i(null,o)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(o=>{typeof r[o]!="object"||!r[o]||!hc(r[o])?s[o]=r[o]:r[o]!==n&&(s[o]?i(s[o],r[o]):s[o]=i(null,r[o]))})):s=r,s}(t,e)}function wr(t){return Yf(null,t)}function qf(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function jf(t){return t==null}function yn(...t){for(const e of t)if(!jf(e))return e;return null}function $f(t,e){if(t===e)return!0;if(Dh(t)&&Dh(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n of Object.keys(t))if(!$f(t[n],e[n]))return!1;return!0}else return!1}function Dh(t){return typeof t=="object"&&t!==null}var $e=class Kf extends Error{constructor(e){var n;super(e),this.name="PSVError",(n=Error.captureStackTrace)==null||n.call(Error,this,Kf)}};function dc(t,e){hc(t)?(e(t.initial,!0),t.promise.then(n=>e(n,!1))):e(t,!0)}function Zo(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function yl(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function Zf(t){return(t==null?void 0:t.name)==="AbortError"}function Ot(t){console.warn(`PhotoSphereViewer: ${t}`)}function Io(t){return t?[["textureX","textureY"],["yaw","pitch"]].some(([e,n])=>t[e]!==void 0&&t[n]!==void 0):!1}function Sn(t,e){let n=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(n!==null){const i=parseInt(n[1],10);return isNaN(i)?null:i}if(n=t.match("GPano:"+e+'="(.*?)"'),n!==null){const i=parseInt(n[1],10);return isNaN(i)?null:i}return null}var Oh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Uo=["left","center","right"],Do=["top","center","bottom"],Nh=[...Uo,...Do],Jt="center";function Qw(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Oh[e[0]]?e=[e[0],Jt]:e=[e[0],e[0]]);const n=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Oh[s]||s),n||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function Jf(t,{allowCenter:e,cssOrder:n}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===Jt?t=[Jt,Jt]:Uo.indexOf(t[0])!==-1?t=[Jt,t[0]]:Do.indexOf(t[0])!==-1&&(t=[t[0],Jt])),t.length!==2||Nh.indexOf(t[0])===-1||Nh.indexOf(t[1])===-1?(Ot(`Unparsable position ${t}`),null):!e&&t[0]===Jt&&t[1]===Jt?(Ot("Invalid position center center"),null):(n&&!fc(t)&&(t=[t[1],t[0]]),t[1]===Jt&&Uo.indexOf(t[0])!==-1&&(t=[Jt,t[0]]),t[0]===Jt&&Do.indexOf(t[1])!==-1&&(t=[t[1],Jt]),t)):null}function fc(t){return Do.indexOf(t[0])!==-1&&Uo.indexOf(t[1])!==-1}function Qf(t){let e;if(typeof t=="string"){const n=t.toString().trim();let i=parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=ut.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new $e(`Unknown speed unit "${s}"`)}}else e=t;return e}function ri(t,e=!1,n=e){let i;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new $e(`Unknown angle "${t}"`);const r=parseFloat(s[1]),o=s[2];if(o)switch(o){case"deg":case"degs":i=ut.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new $e(`Unknown angle unit "${o}"`)}else i=r}else if(typeof t=="number"&&!isNaN(t))i=t;else throw new $e(`Unknown angle "${t}"`);return i=or(e?i+Math.PI:i,Math.PI*2),e?ut.clamp(i-Math.PI,-Math.PI/(n?2:1),Math.PI/(n?2:1)):i}function Sl(t){const e=new _t(t);return e.needsUpdate=!0,e.minFilter=qt,e.generateMipmaps=!1,e}var Fh=new Fs;function wl(t,e){Fh.setFromEuler(e).invert(),t.applyQuaternion(Fh)}function Jo(t,e){const n=function(i){if(!i)return wr(t);const s=wr({...t,...i}),r={};for(let[o,a]of Object.entries(s)){if(e&&o in e)a=e[o](a,{rawConfig:s,defValue:t[o]});else if(!(o in t)){Ot(`Unknown option ${o}`);continue}r[o]=a}return r};return n.defaults=t,n.parsers=e||{},n}var br=class{constructor(t){this.easing=vo.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:vo[t.easing]||vo.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,n={};if(e<1){for(const[i,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);n[i]=r}this.options.onTick(n,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,s]of Object.entries(this.options.properties))s&&(n[i]=s.end);this.options.onTick(n,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},xo=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new $e("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?or(t,this.max):ut.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?or(t,this.max):ut.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let n=null;return this.current>this.target&&this.currentSpeed?n=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(n=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),n!==null&&(n=this.wrap?or(n,this.max):ut.clamp(n,this.min,this.max),n!==this.current)?(this.current=n,this.fn&&this.fn(this.current),!0):!1}},ep=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,n])=>(t[e]=n.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].goto(i,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((n,i)=>(n[i]=t[i]+this.dynamics[i].current,n),{}));else for(const[n,i]of Object.entries(t))this.dynamics[n].step(i,e)}roll(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].roll(i,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[n,i]of Object.entries(t))e=this.dynamics[n].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const n of Object.values(this.dynamics))e=n.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},Qo=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime()}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(),this.timeout=void 0,this.time=0},this.delay):(t(),this.time=0)}},tp=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(tp||{}),np=class{constructor(t,e,n){this.container=t,this.direction=e,this.listener=n,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,n){const i=this.container.getBoundingClientRect(),s=this.isVertical?e:t,r=i[this.isVertical?"bottom":"left"],o=i[this.isVertical?"height":"width"],a=Math.abs((r-s)/o);this.listener({value:a,click:!n,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},wn={};oc(wn,{BeforeAnimateEvent:()=>ap,BeforeRenderEvent:()=>up,BeforeRotateEvent:()=>fp,ClickEvent:()=>gp,ConfigChangedEvent:()=>kt,DoubleClickEvent:()=>Mp,FullscreenEvent:()=>ar,HideNotificationEvent:()=>lr,HideOverlayEvent:()=>Rp,HidePanelEvent:()=>fi,HideTooltipEvent:()=>Up,KeypressEvent:()=>pi,LoadProgressEvent:()=>Bp,ObjectEnterEvent:()=>fm,ObjectEvent:()=>ea,ObjectHoverEvent:()=>vm,ObjectLeaveEvent:()=>Tl,PanoramaLoadedEvent:()=>bl,PositionUpdatedEvent:()=>cr,ReadyEvent:()=>ur,RenderEvent:()=>qp,ShowNotificationEvent:()=>hr,ShowOverlayEvent:()=>Jp,ShowPanelEvent:()=>mi,ShowTooltipEvent:()=>im,SizeUpdatedEvent:()=>dr,StopAllEvent:()=>lm,ViewerEvent:()=>Je,ZoomUpdatedEvent:()=>qn});var ip=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},sp=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,n){super.addEventListener(t,e,n)}removeEventListener(t,e,n){super.removeEventListener(t,e,n)}},Je=class extends ip{},rp=class op extends Je{constructor(e,n){super(op.type,!0),this.position=e,this.zoomLevel=n}};rp.type="before-animate";var ap=rp,lp=class cp extends Je{constructor(e,n){super(cp.type),this.timestamp=e,this.elapsed=n}};lp.type="before-render";var up=lp,hp=class dp extends Je{constructor(e){super(dp.type,!0),this.position=e}};hp.type="before-rotate";var fp=hp,pp=class mp extends Je{constructor(e){super(mp.type),this.data=e}};pp.type="click";var gp=pp,_p=class vp extends Je{constructor(e){super(vp.type),this.options=e}containsOptions(...e){return e.some(n=>this.options.includes(n))}};_p.type="config-changed";var kt=_p,xp=class Ep extends Je{constructor(e){super(Ep.type),this.data=e}};xp.type="dblclick";var Mp=xp,yp=class Sp extends Je{constructor(e){super(Sp.type),this.fullscreenEnabled=e}};yp.type="fullscreen";var ar=yp,wp=class bp extends Je{constructor(e){super(bp.type),this.notificationId=e}};wp.type="hide-notification";var lr=wp,Tp=class Ap extends Je{constructor(e){super(Ap.type),this.overlayId=e}};Tp.type="hide-overlay";var Rp=Tp,Cp=class Lp extends Je{constructor(e){super(Lp.type),this.panelId=e}};Cp.type="hide-panel";var fi=Cp,Pp=class Ip extends Je{constructor(e){super(Ip.type),this.tooltipData=e}};Pp.type="hide-tooltip";var Up=Pp,Dp=class Op extends Je{constructor(e){super(Op.type,!0),this.key=e}};Dp.type="key-press";var pi=Dp,Np=class Fp extends Je{constructor(e){super(Fp.type),this.progress=e}};Np.type="load-progress";var Bp=Np,zp=class Hp extends Je{constructor(e){super(Hp.type),this.data=e}};zp.type="panorama-loaded";var bl=zp,kp=class Vp extends Je{constructor(e){super(Vp.type),this.position=e}};kp.type="position-updated";var cr=kp,Gp=class Wp extends Je{constructor(){super(Wp.type)}};Gp.type="ready";var ur=Gp,Xp=class Yp extends Je{constructor(){super(Yp.type)}};Xp.type="render";var qp=Xp,jp=class $p extends Je{constructor(e){super($p.type),this.notificationId=e}};jp.type="show-notification";var hr=jp,Kp=class Zp extends Je{constructor(e){super(Zp.type),this.overlayId=e}};Kp.type="show-overlay";var Jp=Kp,Qp=class em extends Je{constructor(e){super(em.type),this.panelId=e}};Qp.type="show-panel";var mi=Qp,tm=class nm extends Je{constructor(e,n){super(nm.type),this.tooltip=e,this.tooltipData=n}};tm.type="show-tooltip";var im=tm,sm=class rm extends Je{constructor(e){super(rm.type),this.size=e}};sm.type="size-updated";var dr=sm,om=class am extends Je{constructor(){super(am.type)}};om.type="stop-all";var lm=om,cm=class um extends Je{constructor(e){super(um.type),this.zoomLevel=e}};cm.type="zoom-updated";var qn=cm,ea=class extends Je{constructor(t,e,n,i,s){super(t),this.originalEvent=e,this.object=n,this.viewerPoint=i,this.userDataKey=s}},hm=class dm extends ea{constructor(e,n,i,s){super(dm.type,e,n,i,s)}};hm.type="enter-object";var fm=hm,pm=class mm extends ea{constructor(e,n,i,s){super(mm.type,e,n,i,s)}};pm.type="leave-object";var Tl=pm,gm=class _m extends ea{constructor(e,n,i,s){super(_m.type,e,n,i,s)}};gm.type="hover-object";var vm=gm,ta=class Yt{constructor(e){this.viewer=e}destroy(){}supportsTransition(e){return!1}supportsPreload(e){return!1}static createOverlayMaterial({additionalUniforms:e,overrideVertexShader:n}={}){return new xi({uniforms:{...e,[Yt.OVERLAY_UNIFORMS.panorama]:{value:new _t},[Yt.OVERLAY_UNIFORMS.overlay]:{value:new _t},[Yt.OVERLAY_UNIFORMS.globalOpacity]:{value:1},[Yt.OVERLAY_UNIFORMS.overlayOpacity]:{value:1}},vertexShader:n||`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D ${Yt.OVERLAY_UNIFORMS.panorama};
uniform sampler2D ${Yt.OVERLAY_UNIFORMS.overlay};
uniform float ${Yt.OVERLAY_UNIFORMS.globalOpacity};
uniform float ${Yt.OVERLAY_UNIFORMS.overlayOpacity};

varying vec2 vUv;

void main() {
  vec4 tColor1 = texture2D( ${Yt.OVERLAY_UNIFORMS.panorama}, vUv );
  vec4 tColor2 = texture2D( ${Yt.OVERLAY_UNIFORMS.overlay}, vUv );
  gl_FragColor = vec4(
    mix( tColor1.rgb, tColor2.rgb, tColor2.a * ${Yt.OVERLAY_UNIFORMS.overlayOpacity} ),
    ${Yt.OVERLAY_UNIFORMS.globalOpacity}
  );
}`})}};ta.supportsDownload=!1;ta.supportsOverlay=!1;ta.OVERLAY_UNIFORMS={panorama:"panorama",overlay:"overlay",globalOpacity:"globalOpacity",overlayOpacity:"overlayOpacity"};var ni=ta;function Bh(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof ni)return e}return null}var Ys=`${Ei}_touchSupport`,Et={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,fullscreenEvent:null,__maxCanvasWidth:null,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=nb(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=eb();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=t!==null,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=tb(),this.fullscreenEvent=ib(),this.loaded=!0}if(!Et.isWebGLSupported)throw new $e("WebGL is not supported.");if(Et.maxTextureWidth===0)throw new $e("Unable to detect system capabilities")}};function eb(){const t=document.createElement("canvas"),e=["webgl2","webgl","experimental-webgl","moz-webgl","webkit-3d"];let n=null;return t.getContext&&e.some(i=>{try{return n=t.getContext(i),n!==null}catch{return!1}})?n:null}function tb(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Ys in localStorage&&(t=localStorage[Ys]==="true");const e=new Promise(n=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(a)},s=()=>{i(),localStorage[Ys]=!1,n(!1)},r=()=>{i(),localStorage[Ys]=!0,n(!0)},o=()=>{i(),localStorage[Ys]=t,n(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const a=setTimeout(o,1e4)});return{initial:t,promise:e}}function nb(t){const e=document.createElement("canvas"),n=e.getContext("2d");for(e.width=t,e.height=t/2;e.width>1024;){n.fillStyle="white",n.fillRect(0,0,1,1);try{if(n.getImageData(0,0,1,1).data[0]>0)return e.width}catch{}e.width/=2,e.height/=2}throw new $e("Unable to detect system capabilities")}function ib(){return"exitFullscreen"in document?"fullscreenchange":"webkitExitFullscreen"in document?"webkitfullscreenchange":null}var sb=Jo({resolution:64,blur:!1},{resolution:t=>{if(!t||!ut.isPowerOfTwo(t))throw new $e("EquirectangularAdapter resolution must be power of two");return t}}),na=class extends ni{constructor(t,e){super(t),this.config=sb(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}async loadTexture(t,e,n=this.viewer.config.useXmpData){if(typeof t!="string")return Promise.reject(new $e("Invalid panorama url, are you using the right adapter?"));const i=await this.viewer.textureLoader.loadFile(t,l=>this.viewer.loader.setProgress(l)),s=n?await this.loadXMP(i):null,r=await this.viewer.textureLoader.blobToImage(i);typeof e=="function"&&(e=e(r));const o={fullWidth:yn(e==null?void 0:e.fullWidth,s==null?void 0:s.fullWidth,r.width),fullHeight:yn(e==null?void 0:e.fullHeight,s==null?void 0:s.fullHeight,r.height),croppedWidth:yn(e==null?void 0:e.croppedWidth,s==null?void 0:s.croppedWidth,r.width),croppedHeight:yn(e==null?void 0:e.croppedHeight,s==null?void 0:s.croppedHeight,r.height),croppedX:yn(e==null?void 0:e.croppedX,s==null?void 0:s.croppedX,0),croppedY:yn(e==null?void 0:e.croppedY,s==null?void 0:s.croppedY,0),poseHeading:yn(e==null?void 0:e.poseHeading,s==null?void 0:s.poseHeading,0),posePitch:yn(e==null?void 0:e.posePitch,s==null?void 0:s.posePitch,0),poseRoll:yn(e==null?void 0:e.poseRoll,s==null?void 0:s.poseRoll,0)};(o.croppedWidth!==r.width||o.croppedHeight!==r.height)&&Ot(`Invalid panoData, croppedWidth and/or croppedHeight is not coherent with loaded image.
              panoData: ${o.croppedWidth}x${o.croppedHeight}, image: ${r.width}x${r.height}`),(e||s)&&o.fullWidth!==o.fullHeight*2&&Ot("Invalid panoData, fullWidth should be twice fullHeight");const a=this.createEquirectangularTexture(r,o);return{panorama:t,texture:a,panoData:o}}async loadXMP(t){const e=await this.loadBlobAsString(t),n=e.indexOf("<x:xmpmeta"),i=e.indexOf("</x:xmpmeta>"),s=e.substring(n,i);return n!==-1&&i!==-1&&s.includes("GPano:")?{fullWidth:Sn(s,"FullPanoWidthPixels"),fullHeight:Sn(s,"FullPanoHeightPixels"),croppedWidth:Sn(s,"CroppedAreaImageWidthPixels"),croppedHeight:Sn(s,"CroppedAreaImageHeightPixels"),croppedX:Sn(s,"CroppedAreaLeftPixels"),croppedY:Sn(s,"CroppedAreaTopPixels"),poseHeading:Sn(s,"PoseHeadingDegrees"),posePitch:Sn(s,"PosePitchDegrees"),poseRoll:Sn(s,"PoseRollDegrees")}:null}loadBlobAsString(t){return new Promise((e,n)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=n,i.readAsText(t)})}createEquirectangularTexture(t,e){if(this.config.blur||e.fullWidth>Et.maxTextureWidth||e.croppedWidth!==e.fullWidth||e.croppedHeight!==e.fullHeight){const n=Math.min(1,Et.maxCanvasWidth/e.fullWidth),i={fullWidth:e.fullWidth*n,fullHeight:e.fullHeight*n,croppedWidth:e.croppedWidth*n,croppedHeight:e.croppedHeight*n,croppedX:e.croppedX*n,croppedY:e.croppedY*n},s=document.createElement("canvas");s.width=i.fullWidth,s.height=i.fullHeight;const r=s.getContext("2d");return this.config.blur&&(r.filter=`blur(${s.width/2048}px)`),r.drawImage(t,i.croppedX,i.croppedY,i.croppedWidth,i.croppedHeight),Sl(s)}return Sl(t)}createMesh(t=1){const e=new rc(Wi*t,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS,-Math.PI/2).scale(-1,1,1),n=ni.createOverlayMaterial();return new Wn(e,n)}setTexture(t,e){this.__setUniform(t,ni.OVERLAY_UNIFORMS.panorama,e.texture),this.setOverlay(t,null,1)}setOverlay(t,e,n){this.__setUniform(t,ni.OVERLAY_UNIFORMS.overlayOpacity,n),e?this.__setUniform(t,ni.OVERLAY_UNIFORMS.overlay,e.texture):this.__setUniform(t,ni.OVERLAY_UNIFORMS.overlay,new _t)}setTextureOpacity(t,e){this.__setUniform(t,ni.OVERLAY_UNIFORMS.globalOpacity,e),t.material.transparent=e<1}disposeTexture(t){var e;(e=t.texture)==null||e.dispose()}__setUniform(t,e,n){t.material.uniforms[e].value instanceof _t&&t.material.uniforms[e].value.dispose(),t.material.uniforms[e].value=n}};na.id="equirectangular";na.supportsDownload=!0;na.supportsOverlay=!0;var Yi=class xm{constructor(e,n){this.parent=e,this.children=[],this.container=document.createElement("div"),this.state={visible:!0},this.viewer=e instanceof xm?e.viewer:e,this.container.className=n.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(n=>n.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},rb=Jo({id:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),zt=class extends Yi{constructor(t,e){super(t,{className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=rb(e),this.config.id=this.constructor.id,e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",n=>{this.state.enabled&&this.onClick(),n.stopPropagation()}),this.container.addEventListener("keydown",n=>{n.key===gt.Enter&&this.state.enabled&&(this.onClick(),n.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){dc(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Ko(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,lc(this.container.querySelector("svg"),"psv-button-svg")}},ob=class extends zt{constructor(t,e){super(t,{className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.id?this.config.id=e.id:this.config.id="psvButton-"+Math.random().toString(36).substring(2),e.content&&(this.container.innerHTML=e.content),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){var t;(t=this.customOnClick)==null||t.call(this,this.viewer)}},Tr=class extends zt{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:vn.info}),this.mode=0,this.viewer.addEventListener(lr.type,this),this.viewer.addEventListener(hr.type,this),this.viewer.addEventListener(fi.type,this),this.viewer.addEventListener(mi.type,this),this.viewer.addEventListener(kt.type,this)}destroy(){this.viewer.removeEventListener(lr.type,this),this.viewer.removeEventListener(hr.type,this),this.viewer.removeEventListener(fi.type,this),this.viewer.removeEventListener(mi.type,this),this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){if(t instanceof kt){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof lr?e=this.mode===1:t instanceof hr?e=this.mode===1&&t.notificationId!==yt.DESCRIPTION:t instanceof fi?e=this.mode===2:t instanceof mi&&(e=this.mode===2&&t.panelId!==yt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),n=e&&!e.isVisible(),i=!!this.viewer.config.description;n||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(yt.DESCRIPTION);break;case 2:this.viewer.panel.hide(yt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:yt.DESCRIPTION,content:(this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:"")+this.viewer.config.description})):(this.mode=1,this.viewer.notification.show({id:yt.DESCRIPTION,content:this.viewer.config.caption}))}};Tr.id="description";var Em=class extends zt{constructor(t){super(t,{className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:vn.download}),this.viewer.addEventListener(kt.type,this)}destroy(){this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){t instanceof kt&&t.containsOptions("downloadUrl")&&this.checkSupported()}onClick(){const t=document.createElement("a");t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop(),t.target="_blank",this.viewer.container.appendChild(t),t.click(),setTimeout(()=>{this.viewer.container.removeChild(t)},100)}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}};Em.id="download";var Mm=class extends zt{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:vn.fullscreenIn,iconActive:vn.fullscreenOut}),this.viewer.addEventListener(ar.type,this)}destroy(){this.viewer.removeEventListener(ar.type,this),super.destroy()}handleEvent(t){t instanceof ar&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};Mm.id="fullscreen";var ab="psvButton",lb=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${vn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(n=>`
    <li data-psv-button="${n.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${n.content}</span>
      <span class="psv-panel-menu-item-label">${n.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Eo=class extends zt{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:vn.menu}),this.viewer.addEventListener(mi.type,this),this.viewer.addEventListener(fi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(mi.type,this),this.viewer.removeEventListener(fi.type,this),super.destroy()}handleEvent(t){t instanceof mi?this.toggleActive(t.panelId===yt.MENU):t instanceof fi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:yt.MENU,content:lb(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?cc(t,"li"):void 0,n=e?e.dataset[ab]:void 0;n&&(this.viewer.navbar.getButton(n).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(yt.MENU)}};Eo.id="menu";function cb(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return vn.arrow.replace("rotate(0",`rotate(${e}`)}var Ur=class extends zt{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:cb(e)}),this.direction=e,this.handler=new Qo,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===gt.Enter&&this.__onMouseDown();break;case"keyup":t.key===gt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Zo(Et.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Ur.groupId="move";var ym=class extends Ur{constructor(t){super(t,1)}};ym.id="moveDown";var Sm=class extends Ur{constructor(t){super(t,2)}};Sm.id="moveLeft";var wm=class extends Ur{constructor(t){super(t,3)}};wm.id="moveRight";var bm=class extends Ur{constructor(t){super(t,0)}};bm.id="moveUp";var pc=class extends zt{constructor(t,e,n){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:n}),this.direction=e,this.handler=new Qo,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===gt.Enter&&this.__onMouseDown();break;case"keyup":t.key===gt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Zo(Et.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};pc.groupId="zoom";var Tm=class extends pc{constructor(t){super(t,0,vn.zoomIn)}};Tm.id="zoomIn";var Am=class extends pc{constructor(t){super(t,1,vn.zoomOut)}};Am.id="zoomOut";var mc=class extends zt{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new np(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(li(this.container,"maxWidth"),10),this.viewer.addEventListener(qn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(ur.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(qn.type,this),this.viewer.removeEventListener(ur.type,this),super.destroy()}handleEvent(t){t instanceof qn?this.__moveZoomValue(t.zoomLevel):t instanceof ur&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Zo(Et.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};mc.id="zoomRange";mc.groupId="zoom";var Rm=class extends sp{constructor(t){super(),this.viewer=t}init(){}destroy(){}},Cm=class extends Rm{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},n=this.constructor,i=n.configParser,s=n.readonlyOptions,r=n.id;for(let[o,a]of Object.entries(t)){if(!(o in i.defaults)){Ot(`${r}: Unknown option "${o}"`);continue}if(s.includes(o)){Ot(`${r}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};Cm.readonlyOptions=[];function Al(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Rm)return e}return null}var Xi={panorama:null,overlay:null,overlayOpacity:1,container:null,adapter:[na,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"Loading...",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:!0,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,useXmpData:!0,panoData:null,requestHeaders:null,canvasBackground:"#000",withCredentials:!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",download:"Download",fullscreen:"Fullscreen",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama can't be loaded"},keyboard:"fullscreen",keyboardActions:{[gt.ArrowUp]:"ROTATE_UP",[gt.ArrowDown]:"ROTATE_DOWN",[gt.ArrowRight]:"ROTATE_RIGHT",[gt.ArrowLeft]:"ROTATE_LEFT",[gt.PageUp]:"ZOOM_IN",[gt.PageDown]:"ZOOM_OUT",[gt.Plus]:"ZOOM_IN",[gt.Minus]:"ZOOM_OUT"}},zh={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",overlay:"Use setOverlay method to changer the overlay",overlayOpacity:"Use setOverlay method to changer the overlay",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Rl={container:t=>{if(!t)throw new $e("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[Bh(t[0]),t[1]]:t=[Bh(t),null]:t=e,!t[0])throw new $e("An undefined value was given for adapter.");if(!t[0].id)throw new $e("Adapter has no id.");return t},overlayOpacity:t=>ut.clamp(t,0,1),defaultYaw:t=>ri(t),defaultPitch:t=>ri(t,!0),defaultZoomLvl:t=>ut.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(Ot("maxFov cannot be lower than minFov"),t=e.maxFov),ut.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),ut.clamp(t,1,179)),lang:t=>(Array.isArray(t.twoFingers)&&(Ot("lang.twoFingers must not be an array"),t.twoFingers=t.twoFingers[0]),{...Xi.lang,...t}),keyboard:t=>t?typeof t=="object"?(Ot("Use keyboardActions to configure the keyboard actions, keyboard option must be either true, false, 'fullscreen' or 'always'"),"fullscreen"):t==="always"?"always":"fullscreen":!1,keyboardActions:(t,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:t,fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,plugins:t=>t.map((e,n)=>{if(Array.isArray(e)?e=[Al(e[0]),e[1]]:e=[Al(e),null],!e[0])throw new $e(`An undefined value was given for plugin ${n}.`);if(!e[0].id)throw new $e(`Plugin ${n} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?wr(Xi.navbar):typeof t=="string"?t.split(/[ ,]/):t},ub=Jo(Xi,Rl),ms=class extends zt{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var t;(t=this.viewer.navbar.getButton(Tr.id,!1))==null||t.autoSize(!0)}};ms.id="caption";var Cl={},Oo={};function Lm(t,e){if(!t.id)throw new $e("Button id is required");if(Cl[t.id]=t,t.groupId&&(Oo[t.groupId]=Oo[t.groupId]||[]).push(t),e){const n=Xi.navbar;switch(e){case"start":n.unshift(t.id);break;case"end":n.push(t.id);break;default:{const[i,s]=e.split(":"),r=n.indexOf(i);if(!i||!s||r===-1)throw new $e(`Invalid defaultPosition ${e}`);n.splice(r+(s==="right"?1:0),0,t.id)}}}}[Am,mc,Tm,Tr,ms,Em,Mm,Sm,wm,bm,ym].forEach(t=>Lm(t));var hb=class extends Yi{constructor(t){super(t,{className:`psv-navbar ${Ir}`}),this.collapsed=[],this.state.visible=!1}show(){this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(ms.id)!==-1&&t.indexOf(Tr.id)===-1&&t.splice(t.indexOf(ms.id),0,Tr.id),t.forEach(e=>{typeof e=="object"?new ob(this,e):Cl[e]?new Cl[e](this):Oo[e]?Oo[e].forEach(n=>{new n(this)}):Ot(`Unknown button ${e}`)}),new Eo(this),this.children.forEach(e=>{e instanceof zt&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof ms?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const n=this.children.find(i=>i instanceof zt&&i.id===t);return!n&&e&&Ot(`button "${t}" not found in the navbar`),n}autoSize(){var i;this.children.forEach(s=>{s instanceof zt&&s.autoSize()});const t=this.container.offsetWidth;let e=0;const n=[];this.children.forEach(s=>{s.isVisible()&&s instanceof zt&&(e+=s.width,s.collapsable&&n.push(s))}),e!==0&&(t<e&&n.length>0?(n.forEach(s=>s.collapse()),this.collapsed=n,this.getButton(Eo.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(s=>s.uncollapse()),this.collapsed=[],this.getButton(Eo.id).hide(!1)),(i=this.getButton(ms.id,!1))==null||i.autoSize())}},db=class extends Yi{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=li(this.loader,"color"),this.color=li(this.canvas,"color"),this.border=parseInt(li(this.loader,"outlineWidth"),10),this.thickness=parseInt(li(this.canvas,"outlineWidth"),10),this.viewer.addEventListener(kt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){t instanceof kt&&t.containsOptions("loadingImg","loadingTxt")&&this.__updateContent()}setProgress(t){const e=Math.min(t,99.999)/100*Math.PI*2,n=this.size/2,i=n,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*r+n,a=-Math.cos(e)*r+n,l=t>50?"1":"0";this.canvas.innerHTML=`
            <circle cx="${n}" cy="${n}" r="${n}" fill="${this.color}"/>
            <path d="M ${i} ${s} A ${r} ${r} 0 ${l} 1 ${o} ${a}" 
                  fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.dispatchEvent(new Bp(Math.round(t)))}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt),e){const n=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=n+"px",e.style.maxHeight=n+"px",this.loader.appendChild(e)}}},fb=class extends Yi{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new $e("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new hr(t.id)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new lr(e))}}},pb=class extends Yi{constructor(t){super(t,{className:`psv-overlay ${Ir}`}),this.state={visible:!1,contentId:null,dissmisable:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(pi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(pi.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dissmisable&&(this.hide(),t.stopPropagation()):t instanceof pi&&this.isVisible()&&this.state.dissmisable&&t.key===gt.Escape&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new $e("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dissmisable=t.dissmisable!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new Jp(t.id))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Rp(e))}}},mb=200,Xa="psv-panel-content--no-interaction",gb=class extends Yi{constructor(t){super(t,{className:`psv-panel ${Ir}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=vn.close,n.title=t.config.lang.close,this.container.appendChild(n),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),this.container.addEventListener("wheel",i=>i.stopPropagation()),n.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(pi.type,this)}destroy(){this.viewer.removeEventListener(pi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case pi.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new $e("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Ko(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=n=>{t.clickHandler(n.target)},this.state.keyHandler=n=>{n.key===gt.Enter&&t.clickHandler(n.target)},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{var n;(n=this.content.querySelector("a,button,[tabindex]"))==null||n.focus()},300)),this.viewer.dispatchEvent(new mi(t.id))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.state.clickHandler=null),this.viewer.dispatchEvent(new fi(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Xa))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Xa)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.key===gt.Escape&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Xa)}__resize(t,e){const n=t,i=e,s=Math.max(mb,this.container.offsetWidth-(n-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=n,this.state.mouseY=i}},_b=class extends Yi{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){delete this.state.data,super.destroy()}toggle(){throw new $e("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new $e("Initialized tooltip cannot be re-initialized");t.className&&lc(this.container,t.className),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new im(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.state.arrow=parseInt(li(this.arrow,"borderTopWidth"),10),this.state.border=parseInt(li(this.container,"borderTopLeftRadius"),10),this.move(e??this.state.config)}move(t){if(this.state.state!==1&&this.state.state!==3)throw new $e("Uninitialized tooltip cannot be moved");t.box||(t.box={width:0,height:0}),this.state.config=t;const e=this.container,n=this.arrow,i={posClass:Jf(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,t);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const a=fc(i.posClass);s&&(i.posClass[a?0:1]=s),r&&(i.posClass[a?1:0]=r),this.__computeTooltipPosition(i,t)}e.style.top=i.top+"px",e.style.left=i.left+"px",n.style.top=i.arrowTop+"px",n.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Up(this.state.data))}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const n=this.state.arrow,i=e.top,s=t.height,r=e.left,o=t.width,a=n+this.state.border,l=e.box.width/2+n*2,c=e.box.height/2+n*2;switch(t.posClass.join("-")){case"top-left":t.top=i-c-s,t.left=r+a-o,t.arrowTop=s,t.arrowLeft=o-a-n;break;case"top-center":t.top=i-c-s,t.left=r-o/2,t.arrowTop=s,t.arrowLeft=o/2-n;break;case"top-right":t.top=i-c-s,t.left=r-a,t.arrowTop=s,t.arrowLeft=n;break;case"bottom-left":t.top=i+c,t.left=r+a-o,t.arrowTop=-n*2,t.arrowLeft=o-a-n;break;case"bottom-center":t.top=i+c,t.left=r-o/2,t.arrowTop=-n*2,t.arrowLeft=o/2-n;break;case"bottom-right":t.top=i+c,t.left=r-a,t.arrowTop=-n*2,t.arrowLeft=n;break;case"left-top":t.top=i+a-s,t.left=r-l-o,t.arrowTop=s-a-n,t.arrowLeft=o;break;case"center-left":t.top=i-s/2,t.left=r-l-o,t.arrowTop=s/2-n,t.arrowLeft=o;break;case"left-bottom":t.top=i-a,t.left=r-l-o,t.arrowTop=n,t.arrowLeft=o;break;case"right-top":t.top=i+a-s,t.left=r+l,t.arrowTop=s-a-n,t.arrowLeft=-n*2;break;case"center-right":t.top=i-s/2,t.left=r+l,t.arrowTop=s/2-n,t.arrowLeft=-n*2;break;case"right-bottom":t.top=i-a,t.left=r+l,t.arrowTop=n,t.arrowLeft=-n*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(n=>{e.push(new Promise(i=>{n.onload=i,n.onerror=i}))}),Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.move(this.state.config)}})}}},vb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Dr=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},Mn=new z,uo=new Lr(0,0,0,"ZXY"),xb=class extends Dr{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return e-2*(e-50)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return ut.radToDeg(2*Math.atan(Math.tan(ut.degToRad(t)/2)*this.state.aspect))}speedToDuration(t,e){if(typeof t!="number"){const n=Qf(t);return e/Math.abs(n)*1e3}else return Math.abs(t)}textureCoordsToSphericalCoords(t){const e=this.state.panoData;if(!e)throw new $e("Current adapter does not support texture coordinates.");const n=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,i=(t.textureY+e.croppedY)/e.fullHeight*Math.PI,s={yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-i};return!uo.equals(this.viewer.renderer.panoramaPose)||!uo.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(s,Mn),Mn.applyEuler(this.viewer.renderer.panoramaPose),Mn.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(Mn)):s}sphericalCoordsToTextureCoords(t){const e=this.state.panoData;if(!e)throw new $e("Current adapter does not support texture coordinates.");(!uo.equals(this.viewer.renderer.panoramaPose)||!uo.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,Mn),wl(Mn,this.viewer.renderer.sphereCorrection),wl(Mn,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(Mn));const n=t.yaw/Math.PI/2*e.fullWidth,i=t.pitch/Math.PI*e.fullHeight;return{textureX:Math.round(t.yaw<Math.PI?n+e.fullWidth/2:n-e.fullWidth/2)-e.croppedX,textureY:Math.round(e.fullHeight/2-i)-e.croppedY}}sphericalCoordsToVector3(t,e){return e||(e=new z),e.x=Wi*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=Wi*Math.sin(t.pitch),e.z=Wi*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),n=Math.atan2(t.x,t.z);return{yaw:n<0?-n:Math.PI*2-n,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(n=>n.object.userData[Ei]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,Mn),this.vector3ToViewerCoords(Mn)}cleanPosition(t){return t.textureX!==void 0&&t.textureY!==void 0?this.textureCoordsToSphericalCoords(t):{yaw:ri(t.yaw),pitch:ri(t.pitch,!this.state.littlePlanet)}}cleanSphereCorrection(t){return{pan:ri((t==null?void 0:t.pan)||0),tilt:ri((t==null?void 0:t.tilt)||0,!0),roll:ri((t==null?void 0:t.roll)||0,!0,!1)}}cleanPanoramaPose(t){return{pan:ut.degToRad((t==null?void 0:t.poseHeading)||0),tilt:ut.degToRad((t==null?void 0:t.posePitch)||0),roll:ut.degToRad((t==null?void 0:t.poseRoll)||0)}}},Eb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,Mb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Or=class Pm{constructor(){this.$=Pm.IDLE}is(...e){return e.some(n=>this.$&n)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Or.IDLE=0;Or.CLICK=1;Or.MOVING=2;Or.INERTIA=4;var tt=Or,yb=class extends Dr{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,mouseHistory:[],pinchDist:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new tt,this.keyHandler=new Qo,this.resizeObserver=new ResizeObserver(uc(()=>this.viewer.autoSize(),50)),this.moveThreshold=Pf*Et.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener(Et.fullscreenEvent,this),this.resizeObserver.observe(this.viewer.container)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener(Et.fullscreenEvent,this),this.resizeObserver.disconnect(),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case Et.fullscreenEvent:this.__onFullscreenChange();break}if(!cc(t.target,"."+Ir))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){var n;if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===gt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(yt.CTRL_ZOOM))),!this.viewer.dispatchEvent(new pi(t.key))||!this.state.keyboardEnabled)return;const e=(n=this.config.keyboardActions)==null?void 0:n[t.key];if(typeof e=="function")e(this.viewer),t.preventDefault();else if(e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(),t.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.dynamics.zoom.stop(),this.viewer.resetIdleTimer()})}__onMouseDown(t){this.step.add(tt.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY}__onMouseUp(t){this.step.is(tt.CLICK,tt.MOVING)&&this.__stopMove(t.clientX,t.clientY,t.target,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(tt.CLICK,tt.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(tt.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,e.target,!0),this.data.longtouchTimeout=null},Uf))):t.touches.length===2&&(this.step.set(tt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(tt.CLICK,tt.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,e.target)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(tt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:yt.TWO_FINGERS,image:Eb,title:this.config.lang.twoFingers})},Df));else if(this.step.is(tt.CLICK,tt.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(yt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:yt.CTRL_ZOOM,image:Mb,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(yt.CTRL_ZOOM),Of);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new ar(t))}__resetMove(){this.step.set(tt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0,this.data.mouseHistory.length=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=Ml(t);this.step.set(tt.MOVING),{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e,this.__logMouseMove(this.data.mouseX,this.data.mouseY)}__stopMove(t,e,n,i=!1){this.step.is(tt.MOVING)?this.config.moveInertia?(this.__logMouseMove(t,e),this.__stopMoveInertia(t,e)):(this.__resetMove(),this.viewer.resetIdleTimer()):(this.step.is(tt.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,n,i),this.step.remove(tt.CLICK),this.step.is(tt.INERTIA)||(this.__resetMove(),this.viewer.resetIdleTimer()))}__stopMoveInertia(t,e){const i=new Af(this.data.mouseHistory.map(([,a,l])=>new Xe(a,l))).getTangent(1),s=this.data.mouseHistory.reduce(({total:a,prev:l},c)=>({total:l?a+ac({x:l[1],y:l[2]},{x:c[1],y:c[2]})/(c[0]-l[0]):0,prev:c}),{total:0,prev:null}).total/this.data.mouseHistory.length;if(!s){this.__resetMove(),this.viewer.resetIdleTimer();return}this.step.set(tt.INERTIA);let r=t,o=e;this.state.animation=new br({properties:{speed:{start:s,end:0}},duration:1e3,easing:"outQuad",onTick:a=>{r+=a.speed*i.x*3*Et.pixelRatio,o+=a.speed*i.y*3*Et.pixelRatio,this.__applyMove(r,o)}}),this.state.animation.then(a=>{this.state.animation=null,a&&(this.__resetMove(),this.viewer.resetIdleTimer())})}__doClick(t,e,n,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,o=e-s.top,a=this.viewer.renderer.getIntersections({x:r,y:o}),l=a.find(c=>c.object.userData[Ei]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),u={rightclick:i,target:n,clientX:t,clientY:e,viewerX:r,viewerY:o,yaw:c.yaw,pitch:c.pitch,objects:a.map(h=>h.object).filter(h=>!h.userData[Ei])};try{const h=this.viewer.dataHelper.sphericalCoordsToTextureCoords(u);u.textureX=h.textureX,u.textureY=h.textureY}catch{u.textureX=NaN,u.textureY=NaN}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-u.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-u.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Mp(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new gp(u)),this.data.dblclickData=wr(u),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},If))}}__handleObjectsEvents(t){if(!qf(this.state.objectsObservers)&&kf(t.target,this.viewer.container)){const e=Vf(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y},i=this.viewer.renderer.getIntersections(n),s=(r,o,a)=>{this.viewer.dispatchEvent(new a(t,r,n,o))};for(const[r,o]of Object.entries(this.state.objectsObservers)){const a=i.find(l=>l.object.userData[r]);a?(o&&a.object!==o&&(s(o,r,Tl),this.state.objectsObservers[r]=null),o?s(a.object,r,vm):(this.state.objectsObservers[r]=a.object,s(a.object,r,fm))):o&&(s(o,r,Tl),this.state.objectsObservers[r]=null)}}}__doMove(t,e){this.step.is(tt.CLICK)&&this.__moveThresholdReached(t,e)?(this.viewer.stopAll(),this.__resetMove(),this.step.set(tt.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.__logMouseMove(t,e)):this.step.is(tt.MOVING)&&(this.__applyMove(t,e),this.__logMouseMove(t,e))}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__applyMove(t,e){const n={yaw:this.config.moveSpeed*((t-this.data.mouseX)/this.state.size.width)*ut.degToRad(this.state.littlePlanet?90:this.state.hFov),pitch:this.config.moveSpeed*((e-this.data.mouseY)/this.state.size.height)*ut.degToRad(this.state.littlePlanet?90:this.state.vFov)},i=this.viewer.getPosition();this.viewer.rotate({yaw:i.yaw-n.yaw,pitch:i.pitch+n.pitch}),this.data.mouseX=t,this.data.mouseY=e}__doMoveZoom(t){if(this.step.is(tt.MOVING)){t.preventDefault();const e=Ml(t),n=(e.distance-this.data.pinchDist)/Et.pixelRatio*this.config.zoomSpeed;this.viewer.zoom(this.viewer.getZoomLevel()+n),this.__doMove(e.center.x,e.center.y),this.data.pinchDist=e.distance}}__logMouseMove(t,e){const n=Date.now(),i=this.data.mouseHistory.length?this.data.mouseHistory[this.data.mouseHistory.length-1]:[0,-1,-1];i[1]===t&&i[2]===e?i[0]=n:n===i[0]?(i[1]=t,i[2]=e):this.data.mouseHistory.push([n,t,e]);let s=null;for(let r=0;r<this.data.mouseHistory.length;)this.data.mouseHistory[r][0]<n-El?this.data.mouseHistory.splice(r,1):s&&this.data.mouseHistory[r][0]-s>El/10?(this.data.mouseHistory.splice(0,r),r=0,s=this.data.mouseHistory[r][0]):(s=this.data.mouseHistory[r][0],r++)}},Ya=new Xe,Sb=class extends Dr{constructor(t){super(t),this.renderer=new Tf({alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Et.pixelRatio),this.renderer.outputColorSpace=_n,this.renderer.domElement.className="psv-canvas",this.scene=new Ph,this.camera=new Qt(50,16/9,.1,2*Wi),this.mesh=this.viewer.adapter.createMesh(),this.mesh.userData={[Ei]:!0},this.meshContainer=new ps,this.meshContainer.add(this.mesh),this.scene.add(this.meshContainer),this.raycaster=new Bw,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.style.background=this.config.canvasBackground,this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.viewer.addEventListener(dr.type,this),this.viewer.addEventListener(qn.type,this),this.viewer.addEventListener(cr.type,this),this.viewer.addEventListener(kt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.config.mousemove&&(this.container.style.cursor="move"),this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(dr.type,this),this.viewer.removeEventListener(qn.type,this),this.viewer.removeEventListener(cr.type,this),this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){switch(t.type){case dr.type:this.__onSizeUpdated();break;case qn.type:this.__onZoomUpdated();break;case cr.type:this.__onPositionUpdated();break;case kt.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("mousemove")&&(this.container.style.cursor=this.config.mousemove?"move":"default"),t.containsOptions("canvasBackground")&&(this.container.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate()}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate()}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.viewer.needsUpdate()}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new up(t,e)),this.viewer.dynamics.update(e),this.state.needsUpdate&&((this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new qp),this.state.needsUpdate=!1)}setTexture(t){this.state.panoData=t.panoData,this.viewer.adapter.setTexture(this.mesh,t),this.viewer.needsUpdate()}setOverlay(t,e){this.viewer.adapter.setOverlay(this.mesh,t,e),this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const n=this.viewer.dataHelper.cleanPanoramaPose(t);e.rotation.set(-n.tilt,-n.pan,-n.roll,"ZXY")}setSphereCorrection(t,e=this.meshContainer){const n=this.viewer.dataHelper.cleanSphereCorrection(t);e.rotation.set(n.tilt,n.pan,n.roll,"ZXY")}transition(t,e){const n=Io(e),i="zoom"in e,s=new ps,r=this.viewer.adapter.createMesh(.5);if(this.viewer.adapter.setTexture(r,t,!0),this.viewer.adapter.setTextureOpacity(r,0),this.setPanoramaPose(t.panoData,r),this.setSphereCorrection(e.sphereCorrection,s),n){const a=this.viewer.dataHelper.cleanPosition(e),l=this.viewer.getPosition(),c=new z(0,1,0);s.rotateOnWorldAxis(c,a.yaw-l.yaw);const u=new z(0,1,0).cross(this.camera.getWorldDirection(new z)).normalize();s.rotateOnWorldAxis(u,a.pitch-l.pitch)}s.add(r),this.scene.add(s),this.renderer.setRenderTarget(new vi),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const o=new br({properties:{opacity:{start:0,end:1},zoom:i?{start:this.viewer.getZoomLevel(),end:e.zoom}:void 0},duration:e.transition,easing:"outCubic",onTick:a=>{this.viewer.adapter.setTextureOpacity(r,a.opacity),this.viewer.adapter.setTextureOpacity(this.mesh,1-a.opacity),i&&this.viewer.zoom(a.zoom),this.viewer.needsUpdate()}});return o.then(a=>{a?(this.setTexture(t),this.viewer.adapter.setTextureOpacity(this.mesh,1),this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),n&&this.viewer.rotate(e)):this.viewer.adapter.disposeTexture(t),this.scene.remove(s),r.geometry.dispose(),r.geometry=null}),o}getIntersections(t){return Ya.x=2*t.x/this.state.size.width-1,Ya.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(Ya,this.camera),this.raycaster.intersectObjects(this.scene.children,!0).filter(e=>e.object.isMesh&&!!e.object.userData)}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>{n.map&&n.map.dispose(),n.dispose()}):(e.material.map&&e.material.map.dispose(),e.material.dispose())),e.dispose&&!(e instanceof Ph)&&e.dispose(),e!==t&&this.cleanScene(e)})}},wb=class extends Dr{constructor(t){super(t),this.loader=new Fw,this.loader.setResponseType("blob"),this.config.withCredentials&&(this.loader.setWithCredentials(!0),this.loader.setCrossOrigin("use-credentials"))}destroy(){this.abortLoading(),super.destroy()}abortLoading(){}loadFile(t,e){return this.config.requestHeaders&&this.loader.setRequestHeader(this.config.requestHeaders(t)),new Promise((n,i)=>{let s=0;e==null||e(s),this.loader.load(t,r=>{s=100,e==null||e(s),n(r)},r=>{if(r.lengthComputable){const o=r.loaded/r.total*100;o>s&&(s=o,e==null||e(s))}},r=>{i(r)})})}loadImage(t,e){return this.loadFile(t,e).then(n=>this.blobToImage(n))}blobToImage(t){return new Promise((e,n)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=n,i.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t):Promise.reject(new $e("Current adapter does not support preload"))}},bb=class extends Dr{constructor(t){super(t),this.zoom=new xo(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new qn(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new ep(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new cr(e))},{yaw:new xo(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new xo(null,{defaultValue:this.config.defaultPitch,min:this.viewer.state.littlePlanet?0:-Math.PI/2,max:this.viewer.state.littlePlanet?Math.PI*2:Math.PI/2,wrap:this.viewer.state.littlePlanet})}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(ut.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t)}},Tb=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.keyboardEnabled=!1,this.direction=new z(0,0,Wi),this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.littlePlanet=!1,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0},this.panoData={fullWidth:0,fullHeight:0,croppedWidth:0,croppedHeight:0,croppedX:0,croppedY:0,poseHeading:0,posePitch:0,poseRoll:0}}},Ab=class extends sp{constructor(t){var e;super(),this.plugins={},this.children=[],this.onResize=uc(()=>this.navbar.autoSize(),500),Et.load(),this.state=new Tb,this.config=ub(t),this.parent=Hf(t.container),this.parent[Ei]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new Sb(this),this.textureLoader=new wb(this),this.eventsHandler=new yb(this),this.dataHelper=new xb(this),this.dynamics=new bb(this),this.loader=new db(this),this.navbar=new hb(this),this.panel=new gb(this),this.notification=new fb(this),this.overlay=new pb(this),this.resize(this.config.size),dc(Et.isTouchEnabled,n=>{Ko(this.container,"psv--is-touch",n)}),this.config.plugins.forEach(([n,i])=>{this.plugins[n.id]=new n(this,i)});for(const n of Object.values(this.plugins))(e=n.init)==null||e.call(n);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.config.panorama?this.setPanorama(this.config.panorama):this.loader.show()}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[t,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[t];this.children.slice().forEach(t=>t.destroy()),this.children.length=0,this.eventsHandler.destroy(),this.renderer.destroy(),this.textureLoader.destroy(),this.dataHelper.destroy(),this.adapter.destroy(),this.dynamics.destroy(),this.parent.removeChild(this.container),delete this.parent[Ei]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&(this.container.classList.add("psv--has-navbar"),this.navbar.show()),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new ur)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=Al(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Gf(this.container)}needsUpdate(){this.state.needsUpdate=!0}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new dr(this.getSize())),this.onResize())}setPanorama(t,e={}){var o;this.textureLoader.abortLoading(),(o=this.state.transitionAnimation)==null||o.cancel(),this.state.ready||["sphereCorrection","panoData","overlay","overlayOpacity"].forEach(a=>{a in e||(e[a]=this.config[a])}),(e.transition===void 0||e.transition===!0)&&(e.transition=Cf),e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData);const n=Io(e),i="zoom"in e;(n||i)&&this.stopAll(),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description;const s=a=>{if(this.loader.hide(),this.state.loadingPromise=null,Zf(a))return!1;if(a)throw this.navbar.setCaption(""),this.showError(this.config.lang.loadError),console.error(a),a;return this.setOverlay(e.overlay,e.overlayOpacity),this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.loadingTxt||""}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show();const r=this.adapter.loadTexture(this.config.panorama,e.panoData).then(a=>{if(a.panorama!==this.config.panorama)throw this.adapter.disposeTexture(a),yl();return a});return!e.transition||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=r.then(a=>{this.renderer.show(),this.renderer.setTexture(a),this.renderer.setPanoramaPose(a.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new bl(a)),i&&this.zoom(e.zoom),n&&this.rotate(e)}).then(()=>s(),a=>s(a)):this.state.loadingPromise=r.then(a=>(this.loader.hide(),this.dispatchEvent(new bl(a)),this.state.transitionAnimation=this.renderer.transition(a,e),this.state.transitionAnimation)).then(a=>{if(this.state.transitionAnimation=null,!a)throw yl()}).then(()=>s(),a=>s(a)),this.state.loadingPromise}setOverlay(t,e=this.config.overlayOpacity){const n=this.adapter.constructor.supportsOverlay;return t?n?this.adapter.loadTexture(t,i=>{const s=this.state.panoData,r=i.width/s.croppedWidth;return{fullWidth:r*s.fullWidth,fullHeight:r*s.fullHeight,croppedWidth:r*s.croppedWidth,croppedHeight:r*s.croppedHeight,croppedX:r*s.croppedX,croppedY:r*s.croppedY}},!1).then(i=>{this.renderer.setOverlay(i,e)}):Promise.reject(new $e("Current adapter does not supports overlay")):(n&&this.renderer.setOverlay(null,0),Promise.resolve())}setOptions(t){const e={...this.config,...t};for(let[n,i]of Object.entries(t)){if(!(n in Xi)){Ot(`Unknown option ${n}`);continue}if(n in zh){Ot(zh[n]);continue}switch(n in Rl&&(i=Rl[n](i,{rawConfig:e,defValue:Xi[n]})),this.config[n]=i,n){case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new qn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new kt(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:yt.ERROR,image:vb,title:t,dissmisable:!1})}hideError(){this.overlay.hide(yt.ERROR)}rotate(t){const e=new fp(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=Io(t),n=t.zoom!==void 0,i=new ap(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;const s=i.position,r=i.zoomLevel;this.stopAll();const o={};let a;if(e){const l=this.getPosition(),c=Bf(l.yaw,s.yaw);o.yaw={start:l.yaw,end:l.yaw+c},o.pitch={start:l.pitch,end:s.pitch},a=this.dataHelper.speedToDuration(t.speed,zf(l,s))}if(n){const l=Math.abs(r-this.getZoomLevel());o.zoom={start:this.getZoomLevel(),end:r},a||(a=this.dataHelper.speedToDuration(t.speed,Math.PI/4*l/100))}return a?(this.state.animation=new br({properties:o,duration:Math.max(Lf,a),easing:"inOutSine",onTick:l=>{e&&this.dynamics.position.setValue({yaw:l.yaw,pitch:l.pitch}),n&&this.dynamics.zoom.setValue(l.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(s),n&&this.zoom(r),new br(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){const e=t;["width","height"].forEach(n=>{t&&e[n]&&(/^[0-9.]+$/.test(e[n])&&(e[n]+="px"),this.parent.style[n]=e[n])}),this.autoSize()}enterFullscreen(){this.isFullscreenEnabled()||Wf(this.container)}exitFullscreen(){this.isFullscreenEnabled()&&Xf()}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new _b(this,t)}observeObjects(t){this.state.objectsObservers[t]=null}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new lm),this.disableIdleTimer(),this.stopAnimation()}};vl.enabled=!0;Zt.enabled=!1;/*!
 * PhotoSphereViewer.AutorotatePlugin 5.1.7
 * @copyright 2023 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Rb=Object.defineProperty,Cb=(t,e)=>{for(var n in e)Rb(t,n,{get:e[n],enumerable:!0})},Lb={};Cb(Lb,{AutorotateEvent:()=>ys});var Im=class Um extends ip{constructor(e){super(Um.type),this.autorotateEnabled=e}};Im.type="autorotate";var ys=Im,Pb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" overflow="visible"><g fill="currentColor" transform-origin="center" transform="scale(1.3)"><path d="M40.5 14.1c-.1-.1-1.2-.5-2.898-1-.102 0-.202-.1-.202-.2C34.5 6.5 28 2 20.5 2S6.6 6.5 3.7 12.9c0 .1-.1.1-.2.2-1.7.6-2.8 1-2.9 1l-.6.3v12.1l.6.2c.1 0 1.1.399 2.7.899.1 0 .2.101.2.199C6.3 34.4 12.9 39 20.5 39c7.602 0 14.102-4.6 16.9-11.1 0-.102.1-.102.199-.2 1.699-.601 2.699-1 2.801-1l.6-.3V14.3l-.5-.2zM6.701 11.5C9.7 7 14.8 4 20.5 4c5.8 0 10.9 3 13.8 7.5.2.3-.1.6-.399.5-3.799-1-8.799-2-13.6-2-4.7 0-9.5 1-13.2 2-.3.1-.5-.2-.4-.5zM25.1 20.3L18.7 24c-.3.2-.7 0-.7-.5v-7.4c0-.4.4-.6.7-.4l6.399 3.8c.301.1.301.6.001.8zm9.4 8.901A16.421 16.421 0 0 1 20.5 37c-5.9 0-11.1-3.1-14-7.898-.2-.302.1-.602.4-.5 3.9 1 8.9 2.1 13.6 2.1 5 0 9.9-1 13.602-2 .298-.1.5.198.398.499z"/></g><!--Created by Nick Bluth from the Noun Project--></svg>
`,Ib=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" overflow="visible"><g fill="currentColor" transform-origin="center" transform="scale(1.3)"><path d="M40.5 14.1c-.1-.1-1.2-.5-2.899-1-.101 0-.2-.1-.2-.2C34.5 6.5 28 2 20.5 2S6.6 6.5 3.7 12.9c0 .1-.1.1-.2.2-1.7.6-2.8 1-2.9 1l-.6.3v12.1l.6.2c.1 0 1.1.4 2.7.9.1 0 .2.1.2.199C6.3 34.4 12.9 39 20.5 39c7.601 0 14.101-4.6 16.9-11.1 0-.101.1-.101.2-.2 1.699-.6 2.699-1 2.8-1l.6-.3V14.3l-.5-.2zM20.5 4c5.8 0 10.9 3 13.8 7.5.2.3-.1.6-.399.5-3.8-1-8.8-2-13.6-2-4.7 0-9.5 1-13.2 2-.3.1-.5-.2-.4-.5C9.7 7 14.8 4 20.5 4zm0 33c-5.9 0-11.1-3.1-14-7.899-.2-.301.1-.601.4-.5 3.9 1 8.9 2.1 13.6 2.1 5 0 9.9-1 13.601-2 .3-.1.5.2.399.5A16.422 16.422 0 0 1 20.5 37zm18.601-12.1c0 .1-.101.3-.2.3-2.5.9-10.4 3.6-18.4 3.6-7.1 0-15.6-2.699-18.3-3.6C2.1 25.2 2 25 2 24.9V16c0-.1.1-.3.2-.3 2.6-.9 10.6-3.6 18.2-3.6 7.5 0 15.899 2.7 18.5 3.6.1 0 .2.2.2.3v8.9z"/><path d="M18.7 24l6.4-3.7c.3-.2.3-.7 0-.8l-6.4-3.8c-.3-.2-.7 0-.7.4v7.4c0 .5.4.7.7.5z"/></g><!--Created by Nick Bluth from the Noun Project--></svg>
`,gc=class extends zt{constructor(t){var e;super(t,{className:"psv-autorotate-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Ib,iconActive:Pb}),this.plugin=this.viewer.getPlugin("autorotate"),(e=this.plugin)==null||e.addEventListener(ys.type,this)}destroy(){var t;(t=this.plugin)==null||t.removeEventListener(ys.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof ys&&this.toggleActive(t.autorotateEnabled)}onClick(){this.plugin.isEnabled()&&(this.plugin.config.autostartOnIdle=!1),this.plugin.toggle()}};gc.id="autorotate";var Ub=Ut.getConfigParser({autostartDelay:2e3,autostartOnIdle:!0,autorotateSpeed:Ut.parseSpeed("2rpm"),autorotatePitch:null,autorotateZoomLvl:null,keypoints:null,startFromClosest:!0},{autostartOnIdle:(t,{rawConfig:e})=>t&&Ut.isNil(e.autostartDelay)?(Ut.logWarn("autostartOnIdle requires a non null autostartDelay"),!1):t,autorotateSpeed:t=>Ut.parseSpeed(t),autorotatePitch:t=>Ut.isNil(t)?null:Ut.parseAngle(t,!0),autorotateZoomLvl:t=>Ut.isNil(t)?null:ut.clamp(t,0,100)}),qa=16;function qs(t){return[t.yaw,t.pitch]}var Ar=class extends Cm{constructor(t,e){super(t,e),this.state={initialStart:!0,enabled:!1,idx:-1,curve:[],startStep:null,endStep:null,startTime:null,stepDuration:null,remainingPause:null,lastTime:null,tooltip:null},this.state.initialStart=!Ut.isNil(this.config.autostartDelay)}init(){super.init(),this.video=this.viewer.getPlugin("video"),this.markers=this.viewer.getPlugin("markers"),this.config.keypoints&&(this.setKeypoints(this.config.keypoints),delete this.config.keypoints),this.viewer.addEventListener(wn.StopAllEvent.type,this),this.viewer.addEventListener(wn.BeforeRenderEvent.type,this),this.video||this.viewer.addEventListener(wn.KeypressEvent.type,this)}destroy(){this.viewer.removeEventListener(wn.StopAllEvent.type,this),this.viewer.removeEventListener(wn.BeforeRenderEvent.type,this),this.viewer.removeEventListener(wn.KeypressEvent.type,this),delete this.video,delete this.markers,delete this.keypoints,super.destroy()}handleEvent(t){switch(t.type){case wn.StopAllEvent.type:this.stop();break;case wn.BeforeRenderEvent.type:{this.__beforeRender(t.timestamp);break}case wn.KeypressEvent.type:t.key===Rf.KEY_CODES.Space&&this.viewer.state.keyboardEnabled&&(this.toggle(),t.preventDefault());break}}setKeypoints(t){if(!t)this.keypoints=null;else{if(t.length<2)throw new $e("At least two points are required");this.keypoints=t.map((e,n)=>{const i={position:null,markerId:null,pause:0,tooltip:null};let s;if(typeof e=="string"?i.markerId=e:Ut.isExtendedPosition(e)?s=e:(i.markerId=e.markerId,i.pause=e.pause,s=e.position,e.tooltip&&typeof e.tooltip=="object"?i.tooltip=e.tooltip:typeof e.tooltip=="string"&&(i.tooltip={content:e.tooltip})),i.markerId){if(!this.markers)throw new $e(`Keypoint #${n} references a marker but the markers plugin is not loaded`);const r=this.markers.getMarker(i.markerId);i.position=qs(r.state.position)}else if(s)i.position=qs(this.viewer.dataHelper.cleanPosition(s));else throw new $e(`Keypoint #${n} is missing marker or position`);return i})}this.isEnabled()&&(this.stop(),this.start())}isEnabled(){return this.state.enabled}start(){this.isEnabled()||(this.viewer.stopAll(),this.keypoints?this.config.startFromClosest&&this.__shiftKeypoints():this.__animate(),this.state.initialStart=!1,this.state.enabled=!0,this.dispatchEvent(new ys(!0)))}stop(){this.isEnabled()&&(this.__reset(),this.__hideTooltip(),this.viewer.dynamics.position.stop(),this.viewer.dynamics.zoom.stop(),this.state.enabled=!1,this.dispatchEvent(new ys(!1)))}toggle(){this.isEnabled()?this.stop():this.start()}reverse(){this.isEnabled()&&!this.keypoints&&(this.config.autorotateSpeed=-this.config.autorotateSpeed,this.__animate())}__animate(){let t;Ut.isNil(this.config.autorotateZoomLvl)?t=Promise.resolve():t=this.viewer.animate({zoom:this.config.autorotateZoomLvl,speed:`${this.viewer.config.zoomSpeed*2}rpm`}),t.then(()=>{this.viewer.dynamics.position.roll({yaw:this.config.autorotateSpeed<0},Math.abs(this.config.autorotateSpeed/this.viewer.config.moveSpeed)),this.viewer.dynamics.position.goto({pitch:this.config.autorotatePitch??this.viewer.config.defaultPitch},Math.abs(this.config.autorotateSpeed/this.viewer.config.moveSpeed))})}__reset(){this.state.idx=-1,this.state.curve=[],this.state.startStep=null,this.state.endStep=null,this.state.startTime=null,this.state.stepDuration=null,this.state.remainingPause=null,this.state.lastTime=null,this.state.tooltip=null}__beforeRender(t){(this.state.initialStart||this.config.autostartOnIdle)&&this.viewer.state.idleTime>0&&t-this.viewer.state.idleTime>this.config.autostartDelay&&this.start(),this.isEnabled()&&this.keypoints&&(this.state.startTime||(this.state.endStep=qs(this.viewer.getPosition()),this.__nextStep(),this.state.startTime=t,this.state.lastTime=t),this.__nextFrame(t))}__shiftKeypoints(){const t=qs(this.viewer.getPosition()),e=this.__findMinIndex(this.keypoints,n=>Ut.greatArcDistance(n.position,t));this.keypoints.push(...this.keypoints.splice(0,e))}__incrementIdx(){this.state.idx++,this.state.idx===this.keypoints.length&&(this.state.idx=0)}__showTooltip(){const t=this.keypoints[this.state.idx];if(t.tooltip){const e=this.viewer.dataHelper.vector3ToViewerCoords(this.viewer.state.direction);this.state.tooltip=this.viewer.createTooltip({content:t.tooltip.content,position:t.tooltip.position,top:e.y,left:e.x})}else if(t.markerId){const e=this.markers.getMarker(t.markerId);e.showTooltip(),this.state.tooltip=e.tooltip}}__hideTooltip(){if(this.state.tooltip){const t=this.keypoints[this.state.idx];t.tooltip?this.state.tooltip.hide():t.markerId&&this.markers.getMarker(t.markerId).hideTooltip(),this.state.tooltip=null}}__nextPoint(){const t=[];if(this.state.idx===-1){const s=qs(this.viewer.getPosition());t.push(s,s,this.keypoints[0].position,this.keypoints[1].position)}else for(let s=-1;s<3;s++){const r=this.state.idx+s<0?this.keypoints[this.keypoints.length-1]:this.keypoints[(this.state.idx+s)%this.keypoints.length];t.push(r.position)}const e=[new Xe(t[0][0],t[0][1])];let n=0;for(let s=1;s<=3;s++){const r=t[s-1][0]-t[s][0];r>Math.PI?n+=1:r<-Math.PI&&(n-=1),n!==0&&s===1&&(e[0].x-=n*2*Math.PI,n=0),e.push(new Xe(t[s][0]+n*2*Math.PI,t[s][1]))}const i=new Af(e).getPoints(qa*3).map(s=>[s.x,s.y]);this.state.curve=i.slice(qa+1,qa*2+1),this.state.idx!==-1?(this.state.remainingPause=this.keypoints[this.state.idx].pause,this.state.remainingPause?this.__showTooltip():this.__incrementIdx()):this.__incrementIdx()}__nextStep(){this.state.curve.length===0&&(this.__nextPoint(),this.state.endStep[0]=Ut.parseAngle(this.state.endStep[0])),this.state.startStep=this.state.endStep,this.state.endStep=this.state.curve.shift();const t=Ut.greatArcDistance(this.state.startStep,this.state.endStep);this.state.stepDuration=t*1e3/Math.abs(this.config.autorotateSpeed),t===0&&this.__nextStep()}__nextFrame(t){const e=t-this.state.lastTime;if(this.state.lastTime=t,this.state.remainingPause){if(this.state.remainingPause=Math.max(0,this.state.remainingPause-e),this.state.remainingPause>0)return;this.__hideTooltip(),this.__incrementIdx(),this.state.startTime=t}let n=(t-this.state.startTime)/this.state.stepDuration;n>=1&&(this.__nextStep(),n=0,this.state.startTime=t),this.viewer.rotate({yaw:this.state.startStep[0]+(this.state.endStep[0]-this.state.startStep[0])*n,pitch:this.state.startStep[1]+(this.state.endStep[1]-this.state.startStep[1])*n})}__findMinIndex(t,e){let n=0,i=Number.MAX_VALUE;return t.forEach((s,r)=>{const o=e(s);o<i&&(i=o,n=r)}),n}};Ar.id="autorotate";Ar.configParser=Ub;Ar.readonlyOptions=["keypoints"];Lm(gc,"start");Xi.lang[gc.id]="Automatic rotation";const Db=Bt("line",{x1:"-16",x2:"16",y1:"-10",y2:"-10"},null,-1),Ob=Bt("line",{x1:"-16",x2:"16",y1:"0",y2:"0"},null,-1),Nb=Bt("line",{x1:"-16",x2:"16",y1:"10",y2:"10"},null,-1),Fb=[Db,Ob,Nb],Bb={__name:"hamburger-bars",props:{active:{type:Boolean,default:!1}},setup(t){return(e,n)=>(To(),Ao("svg",{class:Ni(["hamburger-bars",{active:t.active}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"-16 -16 32 32",onClick:n[0]||(n[0]=(...i)=>e.toggle&&e.toggle(...i))},Fb,2))}};const zb={class:"home"},Hb=["onClick"],kb=Bt("p",null,"Click and drag to look around. Use scroll wheel or pinch to zoom.",-1),Vb=[kb],Gb={__name:"home",setup(t){const e=[{id:"outside-entry",title:"Outside Entry"},{id:"entry-lobby-01",title:"Entry Lobby 1"},{id:"entry-lobby-02",title:"Entry Lobby 2"},{id:"courtyard1",title:"Courtyard 1"},{id:"courtyard2",title:"Courtyard 2"},{id:"balcony",title:"Balcony"},{id:"assembly-room",title:"Assembly Lab"},{id:"assembly-shop",title:"Assembly Lab - Shop"},{id:"conference-room",title:"Conference Room"},{id:"collaboratory-room",title:"Collaboratory"},{id:"immersive-dome",title:"Immersive Dome"},{id:"simulator",title:"Simulator"},{id:"rooftop1",title:"Roof Top 1"},{id:"rooftop2",title:"Roof Top 2"}],n=$s("outside-entry"),i=$s();let s;yd(()=>{s=new Ab({container:i.value,plugins:[[Ar,{autostartDelay:1e4,autorotateSpeed:"0.5rpm"}]]}),a({id:n.value,first:!0})});function r(){c(!1),h(!1)}let o;async function a({id:d,first:p=!1}){o||(n.value=d,o=s.setPanorama(`/${d}.jpg`,{showLoader:!1}),await o,o=null,p&&(s.zoom(0),s.getPlugin(Ar).start()))}const l=$s(!1);function c(d){l.value=d??!l.value}const u=$s(!0);function h(d){u.value=d}return(d,p)=>(To(),Ao("main",zb,[Bt("div",{class:"photosphere",ref_key:"viewel",ref:i,onPointerdown:r},null,544),Bt("aside",{class:Ni(["view-selector",{active:l.value}])},[Bt("ul",null,[(To(),Ao(an,null,l_(e,_=>Bt("li",{key:_.id,class:Ni({active:n.value===_.id})},[Bt("a",{href:"#",onClick:x=>a(_)},Xh(_.title),9,Hb)],2)),64))])],2),Bt("button",{class:"toggle",onClick:p[0]||(p[0]=_=>c())},[jt(Bb,{active:l.value},null,8,["active"])]),Bt("div",{class:Ni(["usage-hint",{active:u.value}])},Vb,2)]))}},Dm=cv(m0),Wb=[{path:"/",component:Gb}],Xb=d0({routes:Wb,history:Rv()});Dm.use(Xb);Dm.mount("body");
