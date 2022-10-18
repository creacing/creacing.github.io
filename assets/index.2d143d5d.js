(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();function Or(n,t){const e=Object.create(null),r=n.split(",");for(let o=0;o<r.length;o++)e[r[o]]=!0;return t?o=>!!e[o.toLowerCase()]:o=>!!e[o]}const oa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ia=Or(oa);function qi(n){return!!n||n===""}function Lr(n){if(B(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],o=Sn(r)?la(r):Lr(r);if(o)for(const i in o)t[i]=o[i]}return t}else{if(Sn(n))return n;if(fn(n))return n}}const sa=/;(?![^(]*\))/g,aa=/:(.+)/;function la(n){const t={};return n.split(sa).forEach(e=>{if(e){const r=e.split(aa);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function yn(n){let t="";if(Sn(n))t=n;else if(B(n))for(let e=0;e<n.length;e++){const r=yn(n[e]);r&&(t+=r+" ")}else if(fn(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const rt=n=>Sn(n)?n:n==null?"":B(n)||fn(n)&&(n.toString===_i||!U(n.toString))?JSON.stringify(n,wi,2):String(n),wi=(n,t)=>t&&t.__v_isRef?wi(n,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,o])=>(e[`${r} =>`]=o,e),{})}:ji(t)?{[`Set(${t.size})`]:[...t.values()]}:fn(t)&&!B(t)&&!Si(t)?String(t):t,pn={},Vt=[],Wn=()=>{},ca=()=>!1,ua=/^on[^a-z]/,$e=n=>ua.test(n),Fr=n=>n.startsWith("onUpdate:"),Dn=Object.assign,Br=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},pa=Object.prototype.hasOwnProperty,Q=(n,t)=>pa.call(n,t),B=Array.isArray,$t=n=>Ue(n)==="[object Map]",ji=n=>Ue(n)==="[object Set]",U=n=>typeof n=="function",Sn=n=>typeof n=="string",Vr=n=>typeof n=="symbol",fn=n=>n!==null&&typeof n=="object",ki=n=>fn(n)&&U(n.then)&&U(n.catch),_i=Object.prototype.toString,Ue=n=>_i.call(n),da=n=>Ue(n).slice(8,-1),Si=n=>Ue(n)==="[object Object]",$r=n=>Sn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ne=Or(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),He=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},ga=/-(\w)/g,Ht=He(n=>n.replace(ga,(t,e)=>e?e.toUpperCase():"")),ma=/\B([A-Z])/g,Xt=He(n=>n.replace(ma,"-$1").toLowerCase()),Ci=He(n=>n.charAt(0).toUpperCase()+n.slice(1)),cr=He(n=>n?`on${Ci(n)}`:""),fe=(n,t)=>!Object.is(n,t),Ie=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},Te=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},vr=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let qo;const fa=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qn;class Ei{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Qn&&(this.parent=Qn,this.index=(Qn.scopes||(Qn.scopes=[])).push(this)-1)}run(t){if(this.active){const e=Qn;try{return Qn=this,t()}finally{Qn=e}}}on(){Qn=this}off(){Qn=this.parent}stop(t){if(this.active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function Ni(n){return new Ei(n)}function ha(n,t=Qn){t&&t.active&&t.effects.push(n)}const Ur=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Ii=n=>(n.w&yt)>0,zi=n=>(n.n&yt)>0,va=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=yt},ba=n=>{const{deps:t}=n;if(t.length){let e=0;for(let r=0;r<t.length;r++){const o=t[r];Ii(o)&&!zi(o)?o.delete(n):t[e++]=o,o.w&=~yt,o.n&=~yt}t.length=e}},br=new WeakMap;let ae=0,yt=1;const xr=30;let $n;const Dt=Symbol(""),yr=Symbol("");class Hr{constructor(t,e=null,r){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,ha(this,r)}run(){if(!this.active)return this.fn();let t=$n,e=bt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=$n,$n=this,bt=!0,yt=1<<++ae,ae<=xr?va(this):wo(this),this.fn()}finally{ae<=xr&&ba(this),yt=1<<--ae,$n=this.parent,bt=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$n===this?this.deferStop=!0:this.active&&(wo(this),this.onStop&&this.onStop(),this.active=!1)}}function wo(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let bt=!0;const Di=[];function Zt(){Di.push(bt),bt=!1}function ne(){const n=Di.pop();bt=n===void 0?!0:n}function Rn(n,t,e){if(bt&&$n){let r=br.get(n);r||br.set(n,r=new Map);let o=r.get(e);o||r.set(e,o=Ur()),Pi(o)}}function Pi(n,t){let e=!1;ae<=xr?zi(n)||(n.n|=yt,e=!Ii(n)):e=!n.has($n),e&&(n.add($n),$n.deps.push(n))}function pt(n,t,e,r,o,i){const s=br.get(n);if(!s)return;let l=[];if(t==="clear")l=[...s.values()];else if(e==="length"&&B(n))s.forEach((a,u)=>{(u==="length"||u>=r)&&l.push(a)});else switch(e!==void 0&&l.push(s.get(e)),t){case"add":B(n)?$r(e)&&l.push(s.get("length")):(l.push(s.get(Dt)),$t(n)&&l.push(s.get(yr)));break;case"delete":B(n)||(l.push(s.get(Dt)),$t(n)&&l.push(s.get(yr)));break;case"set":$t(n)&&l.push(s.get(Dt));break}if(l.length===1)l[0]&&qr(l[0]);else{const a=[];for(const u of l)u&&a.push(...u);qr(Ur(a))}}function qr(n,t){const e=B(n)?n:[...n];for(const r of e)r.computed&&jo(r);for(const r of e)r.computed||jo(r)}function jo(n,t){(n!==$n||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const xa=Or("__proto__,__v_isRef,__isVue"),Ti=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vr)),ya=Wr(),qa=Wr(!1,!0),wa=Wr(!0),ko=ja();function ja(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const r=en(this);for(let i=0,s=this.length;i<s;i++)Rn(r,"get",i+"");const o=r[t](...e);return o===-1||o===!1?r[t](...e.map(en)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){Zt();const r=en(this)[t].apply(this,e);return ne(),r}}),n}function Wr(n=!1,t=!1){return function(r,o,i){if(o==="__v_isReactive")return!n;if(o==="__v_isReadonly")return n;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&i===(n?t?La:Li:t?Oi:Ri).get(r))return r;const s=B(r);if(!n&&s&&Q(ko,o))return Reflect.get(ko,o,i);const l=Reflect.get(r,o,i);return(Vr(o)?Ti.has(o):xa(o))||(n||Rn(r,"get",o),t)?l:bn(l)?s&&$r(o)?l:l.value:fn(l)?n?Fi(l):te(l):l}}const ka=Ai(),_a=Ai(!0);function Ai(n=!1){return function(e,r,o,i){let s=e[r];if(Wt(s)&&bn(s)&&!bn(o))return!1;if(!n&&(!Ae(o)&&!Wt(o)&&(s=en(s),o=en(o)),!B(e)&&bn(s)&&!bn(o)))return s.value=o,!0;const l=B(e)&&$r(r)?Number(r)<e.length:Q(e,r),a=Reflect.set(e,r,o,i);return e===en(i)&&(l?fe(o,s)&&pt(e,"set",r,o):pt(e,"add",r,o)),a}}function Sa(n,t){const e=Q(n,t);n[t];const r=Reflect.deleteProperty(n,t);return r&&e&&pt(n,"delete",t,void 0),r}function Ca(n,t){const e=Reflect.has(n,t);return(!Vr(t)||!Ti.has(t))&&Rn(n,"has",t),e}function Ea(n){return Rn(n,"iterate",B(n)?"length":Dt),Reflect.ownKeys(n)}const Mi={get:ya,set:ka,deleteProperty:Sa,has:Ca,ownKeys:Ea},Na={get:wa,set(n,t){return!0},deleteProperty(n,t){return!0}},Ia=Dn({},Mi,{get:qa,set:_a}),Kr=n=>n,We=n=>Reflect.getPrototypeOf(n);function ke(n,t,e=!1,r=!1){n=n.__v_raw;const o=en(n),i=en(t);e||(t!==i&&Rn(o,"get",t),Rn(o,"get",i));const{has:s}=We(o),l=r?Kr:e?Jr:he;if(s.call(o,t))return l(n.get(t));if(s.call(o,i))return l(n.get(i));n!==o&&n.get(t)}function _e(n,t=!1){const e=this.__v_raw,r=en(e),o=en(n);return t||(n!==o&&Rn(r,"has",n),Rn(r,"has",o)),n===o?e.has(n):e.has(n)||e.has(o)}function Se(n,t=!1){return n=n.__v_raw,!t&&Rn(en(n),"iterate",Dt),Reflect.get(n,"size",n)}function _o(n){n=en(n);const t=en(this);return We(t).has.call(t,n)||(t.add(n),pt(t,"add",n,n)),this}function So(n,t){t=en(t);const e=en(this),{has:r,get:o}=We(e);let i=r.call(e,n);i||(n=en(n),i=r.call(e,n));const s=o.call(e,n);return e.set(n,t),i?fe(t,s)&&pt(e,"set",n,t):pt(e,"add",n,t),this}function Co(n){const t=en(this),{has:e,get:r}=We(t);let o=e.call(t,n);o||(n=en(n),o=e.call(t,n)),r&&r.call(t,n);const i=t.delete(n);return o&&pt(t,"delete",n,void 0),i}function Eo(){const n=en(this),t=n.size!==0,e=n.clear();return t&&pt(n,"clear",void 0,void 0),e}function Ce(n,t){return function(r,o){const i=this,s=i.__v_raw,l=en(s),a=t?Kr:n?Jr:he;return!n&&Rn(l,"iterate",Dt),s.forEach((u,c)=>r.call(o,a(u),a(c),i))}}function Ee(n,t,e){return function(...r){const o=this.__v_raw,i=en(o),s=$t(i),l=n==="entries"||n===Symbol.iterator&&s,a=n==="keys"&&s,u=o[n](...r),c=e?Kr:t?Jr:he;return!t&&Rn(i,"iterate",a?yr:Dt),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:l?[c(d[0]),c(d[1])]:c(d),done:g}},[Symbol.iterator](){return this}}}}function mt(n){return function(...t){return n==="delete"?!1:this}}function za(){const n={get(i){return ke(this,i)},get size(){return Se(this)},has:_e,add:_o,set:So,delete:Co,clear:Eo,forEach:Ce(!1,!1)},t={get(i){return ke(this,i,!1,!0)},get size(){return Se(this)},has:_e,add:_o,set:So,delete:Co,clear:Eo,forEach:Ce(!1,!0)},e={get(i){return ke(this,i,!0)},get size(){return Se(this,!0)},has(i){return _e.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ce(!0,!1)},r={get(i){return ke(this,i,!0,!0)},get size(){return Se(this,!0)},has(i){return _e.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ce(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ee(i,!1,!1),e[i]=Ee(i,!0,!1),t[i]=Ee(i,!1,!0),r[i]=Ee(i,!0,!0)}),[n,e,t,r]}const[Da,Pa,Ta,Aa]=za();function Gr(n,t){const e=t?n?Aa:Ta:n?Pa:Da;return(r,o,i)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(Q(e,o)&&o in r?e:r,o,i)}const Ma={get:Gr(!1,!1)},Ra={get:Gr(!1,!0)},Oa={get:Gr(!0,!1)},Ri=new WeakMap,Oi=new WeakMap,Li=new WeakMap,La=new WeakMap;function Fa(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ba(n){return n.__v_skip||!Object.isExtensible(n)?0:Fa(da(n))}function te(n){return Wt(n)?n:Yr(n,!1,Mi,Ma,Ri)}function Va(n){return Yr(n,!1,Ia,Ra,Oi)}function Fi(n){return Yr(n,!0,Na,Oa,Li)}function Yr(n,t,e,r,o){if(!fn(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=o.get(n);if(i)return i;const s=Ba(n);if(s===0)return n;const l=new Proxy(n,s===2?r:e);return o.set(n,l),l}function ct(n){return Wt(n)?ct(n.__v_raw):!!(n&&n.__v_isReactive)}function Wt(n){return!!(n&&n.__v_isReadonly)}function Ae(n){return!!(n&&n.__v_isShallow)}function Bi(n){return ct(n)||Wt(n)}function en(n){const t=n&&n.__v_raw;return t?en(t):n}function Kt(n){return Te(n,"__v_skip",!0),n}const he=n=>fn(n)?te(n):n,Jr=n=>fn(n)?Fi(n):n;function Vi(n){bt&&$n&&(n=en(n),Pi(n.dep||(n.dep=Ur())))}function $i(n,t){n=en(n),n.dep&&qr(n.dep)}function bn(n){return!!(n&&n.__v_isRef===!0)}function Fn(n){return Ui(n,!1)}function $a(n){return Ui(n,!0)}function Ui(n,t){return bn(n)?n:new Ua(n,t)}class Ua{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:en(t),this._value=e?t:he(t)}get value(){return Vi(this),this._value}set value(t){const e=this.__v_isShallow||Ae(t)||Wt(t);t=e?t:en(t),fe(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:he(t),$i(this))}}function sn(n){return bn(n)?n.value:n}const Ha={get:(n,t,e)=>sn(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const o=n[t];return bn(o)&&!bn(e)?(o.value=e,!0):Reflect.set(n,t,e,r)}};function Hi(n){return ct(n)?n:new Proxy(n,Ha)}function qt(n){const t=B(n)?new Array(n.length):{};for(const e in n)t[e]=Wi(n,e);return t}class Wa{constructor(t,e,r){this._object=t,this._key=e,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Wi(n,t,e){const r=n[t];return bn(r)?r:new Wa(n,t,e)}var Ki;class Ka{constructor(t,e,r,o){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Ki]=!1,this._dirty=!0,this.effect=new Hr(t,()=>{this._dirty||(this._dirty=!0,$i(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=en(this);return Vi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ki="__v_isReadonly";function Ga(n,t,e=!1){let r,o;const i=U(n);return i?(r=n,o=Wn):(r=n.get,o=n.set),new Ka(r,o,i||!o,e)}function xt(n,t,e,r){let o;try{o=r?n(...r):n()}catch(i){Ke(i,t,e)}return o}function Kn(n,t,e,r){if(U(n)){const i=xt(n,t,e,r);return i&&ki(i)&&i.catch(s=>{Ke(s,t,e)}),i}const o=[];for(let i=0;i<n.length;i++)o.push(Kn(n[i],t,e,r));return o}function Ke(n,t,e,r=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,l=e;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](n,s,l)===!1)return}i=i.parent}const a=t.appContext.config.errorHandler;if(a){xt(a,null,10,[n,s,l]);return}}Ya(n,e,o,r)}function Ya(n,t,e,r=!0){console.error(n)}let Me=!1,wr=!1;const Nn=[];let Zn=0;const Ut=[];let at=null,Nt=0;const Gi=Promise.resolve();let Qr=null;function Xr(n){const t=Qr||Gi;return n?t.then(this?n.bind(this):n):t}function Ja(n){let t=Zn+1,e=Nn.length;for(;t<e;){const r=t+e>>>1;ve(Nn[r])<n?t=r+1:e=r}return t}function Zr(n){(!Nn.length||!Nn.includes(n,Me&&n.allowRecurse?Zn+1:Zn))&&(n.id==null?Nn.push(n):Nn.splice(Ja(n.id),0,n),Yi())}function Yi(){!Me&&!wr&&(wr=!0,Qr=Gi.then(Qi))}function Qa(n){const t=Nn.indexOf(n);t>Zn&&Nn.splice(t,1)}function Xa(n){B(n)?Ut.push(...n):(!at||!at.includes(n,n.allowRecurse?Nt+1:Nt))&&Ut.push(n),Yi()}function No(n,t=Zn){for(;t<Nn.length;t++){const e=Nn[t];e&&e.pre&&(Nn.splice(t,1),t--,e())}}function Ji(n){if(Ut.length){const t=[...new Set(Ut)];if(Ut.length=0,at){at.push(...t);return}for(at=t,at.sort((e,r)=>ve(e)-ve(r)),Nt=0;Nt<at.length;Nt++)at[Nt]();at=null,Nt=0}}const ve=n=>n.id==null?1/0:n.id,Za=(n,t)=>{const e=ve(n)-ve(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function Qi(n){wr=!1,Me=!0,Nn.sort(Za);const t=Wn;try{for(Zn=0;Zn<Nn.length;Zn++){const e=Nn[Zn];e&&e.active!==!1&&xt(e,null,14)}}finally{Zn=0,Nn.length=0,Ji(),Me=!1,Qr=null,(Nn.length||Ut.length)&&Qi()}}function nl(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||pn;let o=e;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const c=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:g}=r[c]||pn;g&&(o=e.map(v=>v.trim())),d&&(o=e.map(vr))}let l,a=r[l=cr(t)]||r[l=cr(Ht(t))];!a&&i&&(a=r[l=cr(Xt(t))]),a&&Kn(a,n,6,o);const u=r[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Kn(u,n,6,o)}}function Xi(n,t,e=!1){const r=t.emitsCache,o=r.get(n);if(o!==void 0)return o;const i=n.emits;let s={},l=!1;if(!U(n)){const a=u=>{const c=Xi(u,t,!0);c&&(l=!0,Dn(s,c))};!e&&t.mixins.length&&t.mixins.forEach(a),n.extends&&a(n.extends),n.mixins&&n.mixins.forEach(a)}return!i&&!l?(fn(n)&&r.set(n,null),null):(B(i)?i.forEach(a=>s[a]=null):Dn(s,i),fn(n)&&r.set(n,s),s)}function Ge(n,t){return!n||!$e(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(n,t[0].toLowerCase()+t.slice(1))||Q(n,Xt(t))||Q(n,t))}let zn=null,Ye=null;function Re(n){const t=zn;return zn=n,Ye=n&&n.type.__scopeId||null,t}function Je(n){Ye=n}function Qe(){Ye=null}function wt(n,t=zn,e){if(!t||n._n)return n;const r=(...o)=>{r._d&&Oo(-1);const i=Re(t),s=n(...o);return Re(i),r._d&&Oo(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function ur(n){const{type:t,vnode:e,proxy:r,withProxy:o,props:i,propsOptions:[s],slots:l,attrs:a,emit:u,render:c,renderCache:d,data:g,setupState:v,ctx:h,inheritAttrs:q}=n;let j,k;const _=Re(n);try{if(e.shapeFlag&4){const L=o||r;j=Xn(c.call(L,L,d,i,v,g,h)),k=a}else{const L=t;j=Xn(L.length>1?L(i,{attrs:a,slots:l,emit:u}):L(i,null)),k=t.props?a:tl(a)}}catch(L){ue.length=0,Ke(L,n,1),j=on(kt)}let I=j;if(k&&q!==!1){const L=Object.keys(k),{shapeFlag:J}=I;L.length&&J&7&&(s&&L.some(Fr)&&(k=el(k,s)),I=Gt(I,k))}return e.dirs&&(I=Gt(I),I.dirs=I.dirs?I.dirs.concat(e.dirs):e.dirs),e.transition&&(I.transition=e.transition),j=I,Re(_),j}const tl=n=>{let t;for(const e in n)(e==="class"||e==="style"||$e(e))&&((t||(t={}))[e]=n[e]);return t},el=(n,t)=>{const e={};for(const r in n)(!Fr(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function rl(n,t,e){const{props:r,children:o,component:i}=n,{props:s,children:l,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&a>=0){if(a&1024)return!0;if(a&16)return r?Io(r,s,u):!!s;if(a&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const g=c[d];if(s[g]!==r[g]&&!Ge(u,g))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?Io(r,s,u):!0:!!s;return!1}function Io(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==n[i]&&!Ge(e,i))return!0}return!1}function ol({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}const il=n=>n.__isSuspense;function sl(n,t){t&&t.pendingBranch?B(n)?t.effects.push(...n):t.effects.push(n):Xa(n)}function ze(n,t){if(Cn){let e=Cn.provides;const r=Cn.parent&&Cn.parent.provides;r===e&&(e=Cn.provides=Object.create(r)),e[n]=t}}function ot(n,t,e=!1){const r=Cn||zn;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&n in o)return o[n];if(arguments.length>1)return e&&U(t)?t.call(r.proxy):t}}const zo={};function Pt(n,t,e){return Zi(n,t,e)}function Zi(n,t,{immediate:e,deep:r,flush:o,onTrack:i,onTrigger:s}=pn){const l=Cn;let a,u=!1,c=!1;if(bn(n)?(a=()=>n.value,u=Ae(n)):ct(n)?(a=()=>n,r=!0):B(n)?(c=!0,u=n.some(k=>ct(k)||Ae(k)),a=()=>n.map(k=>{if(bn(k))return k.value;if(ct(k))return zt(k);if(U(k))return xt(k,l,2)})):U(n)?t?a=()=>xt(n,l,2):a=()=>{if(!(l&&l.isUnmounted))return d&&d(),Kn(n,l,3,[g])}:a=Wn,t&&r){const k=a;a=()=>zt(k())}let d,g=k=>{d=j.onStop=()=>{xt(k,l,4)}};if(ye)return g=Wn,t?e&&Kn(t,l,3,[a(),c?[]:void 0,g]):a(),Wn;let v=c?[]:zo;const h=()=>{if(!!j.active)if(t){const k=j.run();(r||u||(c?k.some((_,I)=>fe(_,v[I])):fe(k,v)))&&(d&&d(),Kn(t,l,3,[k,v===zo?void 0:v,g]),v=k)}else j.run()};h.allowRecurse=!!t;let q;o==="sync"?q=h:o==="post"?q=()=>Pn(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),q=()=>Zr(h));const j=new Hr(a,q);return t?e?h():v=j.run():o==="post"?Pn(j.run.bind(j),l&&l.suspense):j.run(),()=>{j.stop(),l&&l.scope&&Br(l.scope.effects,j)}}function al(n,t,e){const r=this.proxy,o=Sn(n)?n.includes(".")?ns(r,n):()=>r[n]:n.bind(r,r);let i;U(t)?i=t:(i=t.handler,e=t);const s=Cn;Yt(this);const l=Zi(o,i.bind(r),e);return s?Yt(s):At(),l}function ns(n,t){const e=t.split(".");return()=>{let r=n;for(let o=0;o<e.length&&r;o++)r=r[e[o]];return r}}function zt(n,t){if(!fn(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),bn(n))zt(n.value,t);else if(B(n))for(let e=0;e<n.length;e++)zt(n[e],t);else if(ji(n)||$t(n))n.forEach(e=>{zt(e,t)});else if(Si(n))for(const e in n)zt(n[e],t);return n}function ts(n){return U(n)?{setup:n,name:n.name}:n}const ce=n=>!!n.type.__asyncLoader,es=n=>n.type.__isKeepAlive;function ll(n,t){rs(n,"a",t)}function cl(n,t){rs(n,"da",t)}function rs(n,t,e=Cn){const r=n.__wdc||(n.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(Xe(t,r,e),e){let o=e.parent;for(;o&&o.parent;)es(o.parent.vnode)&&ul(r,t,e,o),o=o.parent}}function ul(n,t,e,r){const o=Xe(t,n,r,!0);Ze(()=>{Br(r[t],o)},e)}function Xe(n,t,e=Cn,r=!1){if(e){const o=e[n]||(e[n]=[]),i=t.__weh||(t.__weh=(...s)=>{if(e.isUnmounted)return;Zt(),Yt(e);const l=Kn(t,e,n,s);return At(),ne(),l});return r?o.unshift(i):o.push(i),i}}const dt=n=>(t,e=Cn)=>(!ye||n==="sp")&&Xe(n,t,e),pl=dt("bm"),be=dt("m"),dl=dt("bu"),gl=dt("u"),ml=dt("bum"),Ze=dt("um"),fl=dt("sp"),hl=dt("rtg"),vl=dt("rtc");function bl(n,t=Cn){Xe("ec",n,t)}function jr(n,t){const e=zn;if(e===null)return n;const r=tr(e)||e.proxy,o=n.dirs||(n.dirs=[]);for(let i=0;i<t.length;i++){let[s,l,a,u=pn]=t[i];U(s)&&(s={mounted:s,updated:s}),s.deep&&zt(l),o.push({dir:s,instance:r,value:l,oldValue:void 0,arg:a,modifiers:u})}return n}function _t(n,t,e,r){const o=n.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const l=o[s];i&&(l.oldValue=i[s].value);let a=l.dir[r];a&&(Zt(),Kn(a,e,8,[n.el,l,n,t]),ne())}}const xl=Symbol();function jt(n,t,e,r){let o;const i=e&&e[r];if(B(n)||Sn(n)){o=new Array(n.length);for(let s=0,l=n.length;s<l;s++)o[s]=t(n[s],s,void 0,i&&i[s])}else if(typeof n=="number"){o=new Array(n);for(let s=0;s<n;s++)o[s]=t(s+1,s,void 0,i&&i[s])}else if(fn(n))if(n[Symbol.iterator])o=Array.from(n,(s,l)=>t(s,l,void 0,i&&i[l]));else{const s=Object.keys(n);o=new Array(s.length);for(let l=0,a=s.length;l<a;l++){const u=s[l];o[l]=t(n[u],u,l,i&&i[l])}}else o=[];return e&&(e[r]=o),o}function yl(n,t,e={},r,o){if(zn.isCE||zn.parent&&ce(zn.parent)&&zn.parent.isCE)return on("slot",t==="default"?null:{name:t},r&&r());let i=n[t];i&&i._c&&(i._d=!1),G();const s=i&&os(i(e)),l=we(wn,{key:e.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&n._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function os(n){return n.some(t=>Fe(t)?!(t.type===kt||t.type===wn&&!os(t.children)):!0)?n:null}const kr=n=>n?vs(n)?tr(n)||n.proxy:kr(n.parent):null,Oe=Dn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kr(n.parent),$root:n=>kr(n.root),$emit:n=>n.emit,$options:n=>ss(n),$forceUpdate:n=>n.f||(n.f=()=>Zr(n.update)),$nextTick:n=>n.n||(n.n=Xr.bind(n.proxy)),$watch:n=>al.bind(n)}),ql={get({_:n},t){const{ctx:e,setupState:r,data:o,props:i,accessCache:s,type:l,appContext:a}=n;let u;if(t[0]!=="$"){const v=s[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return o[t];case 4:return e[t];case 3:return i[t]}else{if(r!==pn&&Q(r,t))return s[t]=1,r[t];if(o!==pn&&Q(o,t))return s[t]=2,o[t];if((u=n.propsOptions[0])&&Q(u,t))return s[t]=3,i[t];if(e!==pn&&Q(e,t))return s[t]=4,e[t];_r&&(s[t]=0)}}const c=Oe[t];let d,g;if(c)return t==="$attrs"&&Rn(n,"get",t),c(n);if((d=l.__cssModules)&&(d=d[t]))return d;if(e!==pn&&Q(e,t))return s[t]=4,e[t];if(g=a.config.globalProperties,Q(g,t))return g[t]},set({_:n},t,e){const{data:r,setupState:o,ctx:i}=n;return o!==pn&&Q(o,t)?(o[t]=e,!0):r!==pn&&Q(r,t)?(r[t]=e,!0):Q(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:o,propsOptions:i}},s){let l;return!!e[s]||n!==pn&&Q(n,s)||t!==pn&&Q(t,s)||(l=i[0])&&Q(l,s)||Q(r,s)||Q(Oe,s)||Q(o.config.globalProperties,s)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Q(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};let _r=!0;function wl(n){const t=ss(n),e=n.proxy,r=n.ctx;_r=!1,t.beforeCreate&&Do(t.beforeCreate,n,"bc");const{data:o,computed:i,methods:s,watch:l,provide:a,inject:u,created:c,beforeMount:d,mounted:g,beforeUpdate:v,updated:h,activated:q,deactivated:j,beforeDestroy:k,beforeUnmount:_,destroyed:I,unmounted:L,render:J,renderTracked:$,renderTriggered:H,errorCaptured:K,serverPrefetch:dn,expose:Y,inheritAttrs:vn,components:kn,directives:qn,filters:En}=t;if(u&&jl(u,r,null,n.appContext.config.unwrapInjectedRef),s)for(const X in s){const Z=s[X];U(Z)&&(r[X]=Z.bind(e))}if(o){const X=o.call(e,e);fn(X)&&(n.data=te(X))}if(_r=!0,i)for(const X in i){const Z=i[X],jn=U(Z)?Z.bind(e,e):U(Z.get)?Z.get.bind(e,e):Wn,it=!U(Z)&&U(Z.set)?Z.set.bind(e):Wn,On=Mn({get:jn,set:it});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>On.value,set:Tn=>On.value=Tn})}if(l)for(const X in l)is(l[X],r,e,X);if(a){const X=U(a)?a.call(e):a;Reflect.ownKeys(X).forEach(Z=>{ze(Z,X[Z])})}c&&Do(c,n,"c");function xn(X,Z){B(Z)?Z.forEach(jn=>X(jn.bind(e))):Z&&X(Z.bind(e))}if(xn(pl,d),xn(be,g),xn(dl,v),xn(gl,h),xn(ll,q),xn(cl,j),xn(bl,K),xn(vl,$),xn(hl,H),xn(ml,_),xn(Ze,L),xn(fl,dn),B(Y))if(Y.length){const X=n.exposed||(n.exposed={});Y.forEach(Z=>{Object.defineProperty(X,Z,{get:()=>e[Z],set:jn=>e[Z]=jn})})}else n.exposed||(n.exposed={});J&&n.render===Wn&&(n.render=J),vn!=null&&(n.inheritAttrs=vn),kn&&(n.components=kn),qn&&(n.directives=qn)}function jl(n,t,e=Wn,r=!1){B(n)&&(n=Sr(n));for(const o in n){const i=n[o];let s;fn(i)?"default"in i?s=ot(i.from||o,i.default,!0):s=ot(i.from||o):s=ot(i),bn(s)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):t[o]=s}}function Do(n,t,e){Kn(B(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function is(n,t,e,r){const o=r.includes(".")?ns(e,r):()=>e[r];if(Sn(n)){const i=t[n];U(i)&&Pt(o,i)}else if(U(n))Pt(o,n.bind(e));else if(fn(n))if(B(n))n.forEach(i=>is(i,t,e,r));else{const i=U(n.handler)?n.handler.bind(e):t[n.handler];U(i)&&Pt(o,i,n)}}function ss(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=n.appContext,l=i.get(t);let a;return l?a=l:!o.length&&!e&&!r?a=t:(a={},o.length&&o.forEach(u=>Le(a,u,s,!0)),Le(a,t,s)),fn(t)&&i.set(t,a),a}function Le(n,t,e,r=!1){const{mixins:o,extends:i}=t;i&&Le(n,i,e,!0),o&&o.forEach(s=>Le(n,s,e,!0));for(const s in t)if(!(r&&s==="expose")){const l=kl[s]||e&&e[s];n[s]=l?l(n[s],t[s]):t[s]}return n}const kl={data:Po,props:Et,emits:Et,methods:Et,computed:Et,beforeCreate:In,created:In,beforeMount:In,mounted:In,beforeUpdate:In,updated:In,beforeDestroy:In,beforeUnmount:In,destroyed:In,unmounted:In,activated:In,deactivated:In,errorCaptured:In,serverPrefetch:In,components:Et,directives:Et,watch:Sl,provide:Po,inject:_l};function Po(n,t){return t?n?function(){return Dn(U(n)?n.call(this,this):n,U(t)?t.call(this,this):t)}:t:n}function _l(n,t){return Et(Sr(n),Sr(t))}function Sr(n){if(B(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function In(n,t){return n?[...new Set([].concat(n,t))]:t}function Et(n,t){return n?Dn(Dn(Object.create(null),n),t):t}function Sl(n,t){if(!n)return t;if(!t)return n;const e=Dn(Object.create(null),n);for(const r in t)e[r]=In(n[r],t[r]);return e}function Cl(n,t,e,r=!1){const o={},i={};Te(i,nr,1),n.propsDefaults=Object.create(null),as(n,t,o,i);for(const s in n.propsOptions[0])s in o||(o[s]=void 0);e?n.props=r?o:Va(o):n.type.props?n.props=o:n.props=i,n.attrs=i}function El(n,t,e,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=n,l=en(o),[a]=n.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const c=n.vnode.dynamicProps;for(let d=0;d<c.length;d++){let g=c[d];if(Ge(n.emitsOptions,g))continue;const v=t[g];if(a)if(Q(i,g))v!==i[g]&&(i[g]=v,u=!0);else{const h=Ht(g);o[h]=Cr(a,l,h,v,n,!1)}else v!==i[g]&&(i[g]=v,u=!0)}}}else{as(n,t,o,i)&&(u=!0);let c;for(const d in l)(!t||!Q(t,d)&&((c=Xt(d))===d||!Q(t,c)))&&(a?e&&(e[d]!==void 0||e[c]!==void 0)&&(o[d]=Cr(a,l,d,void 0,n,!0)):delete o[d]);if(i!==l)for(const d in i)(!t||!Q(t,d)&&!0)&&(delete i[d],u=!0)}u&&pt(n,"set","$attrs")}function as(n,t,e,r){const[o,i]=n.propsOptions;let s=!1,l;if(t)for(let a in t){if(Ne(a))continue;const u=t[a];let c;o&&Q(o,c=Ht(a))?!i||!i.includes(c)?e[c]=u:(l||(l={}))[c]=u:Ge(n.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,s=!0)}if(i){const a=en(e),u=l||pn;for(let c=0;c<i.length;c++){const d=i[c];e[d]=Cr(o,a,d,u[d],n,!Q(u,d))}}return s}function Cr(n,t,e,r,o,i){const s=n[e];if(s!=null){const l=Q(s,"default");if(l&&r===void 0){const a=s.default;if(s.type!==Function&&U(a)){const{propsDefaults:u}=o;e in u?r=u[e]:(Yt(o),r=u[e]=a.call(null,t),At())}else r=a}s[0]&&(i&&!l?r=!1:s[1]&&(r===""||r===Xt(e))&&(r=!0))}return r}function ls(n,t,e=!1){const r=t.propsCache,o=r.get(n);if(o)return o;const i=n.props,s={},l=[];let a=!1;if(!U(n)){const c=d=>{a=!0;const[g,v]=ls(d,t,!0);Dn(s,g),v&&l.push(...v)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!i&&!a)return fn(n)&&r.set(n,Vt),Vt;if(B(i))for(let c=0;c<i.length;c++){const d=Ht(i[c]);To(d)&&(s[d]=pn)}else if(i)for(const c in i){const d=Ht(c);if(To(d)){const g=i[c],v=s[d]=B(g)||U(g)?{type:g}:g;if(v){const h=Ro(Boolean,v.type),q=Ro(String,v.type);v[0]=h>-1,v[1]=q<0||h<q,(h>-1||Q(v,"default"))&&l.push(d)}}}const u=[s,l];return fn(n)&&r.set(n,u),u}function To(n){return n[0]!=="$"}function Ao(n){const t=n&&n.toString().match(/^\s*function (\w+)/);return t?t[1]:n===null?"null":""}function Mo(n,t){return Ao(n)===Ao(t)}function Ro(n,t){return B(t)?t.findIndex(e=>Mo(e,n)):U(t)&&Mo(t,n)?0:-1}const cs=n=>n[0]==="_"||n==="$stable",no=n=>B(n)?n.map(Xn):[Xn(n)],Nl=(n,t,e)=>{if(t._n)return t;const r=wt((...o)=>no(t(...o)),e);return r._c=!1,r},us=(n,t,e)=>{const r=n._ctx;for(const o in n){if(cs(o))continue;const i=n[o];if(U(i))t[o]=Nl(o,i,r);else if(i!=null){const s=no(i);t[o]=()=>s}}},ps=(n,t)=>{const e=no(t);n.slots.default=()=>e},Il=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=en(t),Te(t,"_",e)):us(t,n.slots={})}else n.slots={},t&&ps(n,t);Te(n.slots,nr,1)},zl=(n,t,e)=>{const{vnode:r,slots:o}=n;let i=!0,s=pn;if(r.shapeFlag&32){const l=t._;l?e&&l===1?i=!1:(Dn(o,t),!e&&l===1&&delete o._):(i=!t.$stable,us(t,o)),s=t}else t&&(ps(n,t),s={default:1});if(i)for(const l in o)!cs(l)&&!(l in s)&&delete o[l]};function ds(){return{app:null,config:{isNativeTag:ca,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dl=0;function Pl(n,t){return function(r,o=null){U(r)||(r=Object.assign({},r)),o!=null&&!fn(o)&&(o=null);const i=ds(),s=new Set;let l=!1;const a=i.app={_uid:Dl++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Ql,get config(){return i.config},set config(u){},use(u,...c){return s.has(u)||(u&&U(u.install)?(s.add(u),u.install(a,...c)):U(u)&&(s.add(u),u(a,...c))),a},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),a},component(u,c){return c?(i.components[u]=c,a):i.components[u]},directive(u,c){return c?(i.directives[u]=c,a):i.directives[u]},mount(u,c,d){if(!l){const g=on(r,o);return g.appContext=i,c&&t?t(g,u):n(g,u,d),l=!0,a._container=u,u.__vue_app__=a,tr(g.component)||g.component.proxy}},unmount(){l&&(n(null,a._container),delete a._container.__vue_app__)},provide(u,c){return i.provides[u]=c,a}};return a}}function Er(n,t,e,r,o=!1){if(B(n)){n.forEach((g,v)=>Er(g,t&&(B(t)?t[v]:t),e,r,o));return}if(ce(r)&&!o)return;const i=r.shapeFlag&4?tr(r.component)||r.component.proxy:r.el,s=o?null:i,{i:l,r:a}=n,u=t&&t.r,c=l.refs===pn?l.refs={}:l.refs,d=l.setupState;if(u!=null&&u!==a&&(Sn(u)?(c[u]=null,Q(d,u)&&(d[u]=null)):bn(u)&&(u.value=null)),U(a))xt(a,l,12,[s,c]);else{const g=Sn(a),v=bn(a);if(g||v){const h=()=>{if(n.f){const q=g?c[a]:a.value;o?B(q)&&Br(q,i):B(q)?q.includes(i)||q.push(i):g?(c[a]=[i],Q(d,a)&&(d[a]=c[a])):(a.value=[i],n.k&&(c[n.k]=a.value))}else g?(c[a]=s,Q(d,a)&&(d[a]=s)):v&&(a.value=s,n.k&&(c[n.k]=s))};s?(h.id=-1,Pn(h,e)):h()}}}const Pn=sl;function Tl(n){return Al(n)}function Al(n,t){const e=fa();e.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:l,createComment:a,setText:u,setElementText:c,parentNode:d,nextSibling:g,setScopeId:v=Wn,cloneNode:h,insertStaticContent:q}=n,j=(p,m,f,y=null,x=null,C=null,z=!1,S=null,E=!!m.dynamicChildren)=>{if(p===m)return;p&&!oe(p,m)&&(y=A(p),_n(p,x,C,!0),p=null),m.patchFlag===-2&&(E=!1,m.dynamicChildren=null);const{type:w,ref:R,shapeFlag:T}=m;switch(w){case to:k(p,m,f,y);break;case kt:_(p,m,f,y);break;case De:p==null&&I(m,f,y,z);break;case wn:qn(p,m,f,y,x,C,z,S,E);break;default:T&1?$(p,m,f,y,x,C,z,S,E):T&6?En(p,m,f,y,x,C,z,S,E):(T&64||T&128)&&w.process(p,m,f,y,x,C,z,S,E,gn)}R!=null&&x&&Er(R,p&&p.ref,C,m||p,!m)},k=(p,m,f,y)=>{if(p==null)r(m.el=l(m.children),f,y);else{const x=m.el=p.el;m.children!==p.children&&u(x,m.children)}},_=(p,m,f,y)=>{p==null?r(m.el=a(m.children||""),f,y):m.el=p.el},I=(p,m,f,y)=>{[p.el,p.anchor]=q(p.children,m,f,y,p.el,p.anchor)},L=({el:p,anchor:m},f,y)=>{let x;for(;p&&p!==m;)x=g(p),r(p,f,y),p=x;r(m,f,y)},J=({el:p,anchor:m})=>{let f;for(;p&&p!==m;)f=g(p),o(p),p=f;o(m)},$=(p,m,f,y,x,C,z,S,E)=>{z=z||m.type==="svg",p==null?H(m,f,y,x,C,z,S,E):Y(p,m,x,C,z,S,E)},H=(p,m,f,y,x,C,z,S)=>{let E,w;const{type:R,props:T,shapeFlag:O,transition:F,patchFlag:nn,dirs:cn}=p;if(p.el&&h!==void 0&&nn===-1)E=p.el=h(p.el);else{if(E=p.el=s(p.type,C,T&&T.is,T),O&8?c(E,p.children):O&16&&dn(p.children,E,null,y,x,C&&R!=="foreignObject",z,S),cn&&_t(p,null,y,"created"),T){for(const mn in T)mn!=="value"&&!Ne(mn)&&i(E,mn,null,T[mn],C,p.children,y,x,N);"value"in T&&i(E,"value",null,T.value),(w=T.onVnodeBeforeMount)&&Jn(w,y,p)}K(E,p,p.scopeId,z,y)}cn&&_t(p,null,y,"beforeMount");const un=(!x||x&&!x.pendingBranch)&&F&&!F.persisted;un&&F.beforeEnter(E),r(E,m,f),((w=T&&T.onVnodeMounted)||un||cn)&&Pn(()=>{w&&Jn(w,y,p),un&&F.enter(E),cn&&_t(p,null,y,"mounted")},x)},K=(p,m,f,y,x)=>{if(f&&v(p,f),y)for(let C=0;C<y.length;C++)v(p,y[C]);if(x){let C=x.subTree;if(m===C){const z=x.vnode;K(p,z,z.scopeId,z.slotScopeIds,x.parent)}}},dn=(p,m,f,y,x,C,z,S,E=0)=>{for(let w=E;w<p.length;w++){const R=p[w]=S?ht(p[w]):Xn(p[w]);j(null,R,m,f,y,x,C,z,S)}},Y=(p,m,f,y,x,C,z)=>{const S=m.el=p.el;let{patchFlag:E,dynamicChildren:w,dirs:R}=m;E|=p.patchFlag&16;const T=p.props||pn,O=m.props||pn;let F;f&&St(f,!1),(F=O.onVnodeBeforeUpdate)&&Jn(F,f,m,p),R&&_t(m,p,f,"beforeUpdate"),f&&St(f,!0);const nn=x&&m.type!=="foreignObject";if(w?vn(p.dynamicChildren,w,S,f,y,nn,C):z||jn(p,m,S,null,f,y,nn,C,!1),E>0){if(E&16)kn(S,m,T,O,f,y,x);else if(E&2&&T.class!==O.class&&i(S,"class",null,O.class,x),E&4&&i(S,"style",T.style,O.style,x),E&8){const cn=m.dynamicProps;for(let un=0;un<cn.length;un++){const mn=cn[un],Vn=T[mn],Rt=O[mn];(Rt!==Vn||mn==="value")&&i(S,mn,Vn,Rt,x,p.children,f,y,N)}}E&1&&p.children!==m.children&&c(S,m.children)}else!z&&w==null&&kn(S,m,T,O,f,y,x);((F=O.onVnodeUpdated)||R)&&Pn(()=>{F&&Jn(F,f,m,p),R&&_t(m,p,f,"updated")},y)},vn=(p,m,f,y,x,C,z)=>{for(let S=0;S<m.length;S++){const E=p[S],w=m[S],R=E.el&&(E.type===wn||!oe(E,w)||E.shapeFlag&70)?d(E.el):f;j(E,w,R,null,y,x,C,z,!0)}},kn=(p,m,f,y,x,C,z)=>{if(f!==y){for(const S in y){if(Ne(S))continue;const E=y[S],w=f[S];E!==w&&S!=="value"&&i(p,S,w,E,z,m.children,x,C,N)}if(f!==pn)for(const S in f)!Ne(S)&&!(S in y)&&i(p,S,f[S],null,z,m.children,x,C,N);"value"in y&&i(p,"value",f.value,y.value)}},qn=(p,m,f,y,x,C,z,S,E)=>{const w=m.el=p?p.el:l(""),R=m.anchor=p?p.anchor:l("");let{patchFlag:T,dynamicChildren:O,slotScopeIds:F}=m;F&&(S=S?S.concat(F):F),p==null?(r(w,f,y),r(R,f,y),dn(m.children,f,R,x,C,z,S,E)):T>0&&T&64&&O&&p.dynamicChildren?(vn(p.dynamicChildren,O,f,x,C,z,S),(m.key!=null||x&&m===x.subTree)&&gs(p,m,!0)):jn(p,m,f,R,x,C,z,S,E)},En=(p,m,f,y,x,C,z,S,E)=>{m.slotScopeIds=S,p==null?m.shapeFlag&512?x.ctx.activate(m,f,y,z,E):hn(m,f,y,x,C,z,E):xn(p,m,E)},hn=(p,m,f,y,x,C,z)=>{const S=p.component=Hl(p,y,x);if(es(p)&&(S.ctx.renderer=gn),Wl(S),S.asyncDep){if(x&&x.registerDep(S,X),!p.el){const E=S.subTree=on(kt);_(null,E,m,f)}return}X(S,p,m,f,x,C,z)},xn=(p,m,f)=>{const y=m.component=p.component;if(rl(p,m,f))if(y.asyncDep&&!y.asyncResolved){Z(y,m,f);return}else y.next=m,Qa(y.update),y.update();else m.el=p.el,y.vnode=m},X=(p,m,f,y,x,C,z)=>{const S=()=>{if(p.isMounted){let{next:R,bu:T,u:O,parent:F,vnode:nn}=p,cn=R,un;St(p,!1),R?(R.el=nn.el,Z(p,R,z)):R=nn,T&&Ie(T),(un=R.props&&R.props.onVnodeBeforeUpdate)&&Jn(un,F,R,nn),St(p,!0);const mn=ur(p),Vn=p.subTree;p.subTree=mn,j(Vn,mn,d(Vn.el),A(Vn),p,x,C),R.el=mn.el,cn===null&&ol(p,mn.el),O&&Pn(O,x),(un=R.props&&R.props.onVnodeUpdated)&&Pn(()=>Jn(un,F,R,nn),x)}else{let R;const{el:T,props:O}=m,{bm:F,m:nn,parent:cn}=p,un=ce(m);if(St(p,!1),F&&Ie(F),!un&&(R=O&&O.onVnodeBeforeMount)&&Jn(R,cn,m),St(p,!0),T&&V){const mn=()=>{p.subTree=ur(p),V(T,p.subTree,p,x,null)};un?m.type.__asyncLoader().then(()=>!p.isUnmounted&&mn()):mn()}else{const mn=p.subTree=ur(p);j(null,mn,f,y,p,x,C),m.el=mn.el}if(nn&&Pn(nn,x),!un&&(R=O&&O.onVnodeMounted)){const mn=m;Pn(()=>Jn(R,cn,mn),x)}(m.shapeFlag&256||cn&&ce(cn.vnode)&&cn.vnode.shapeFlag&256)&&p.a&&Pn(p.a,x),p.isMounted=!0,m=f=y=null}},E=p.effect=new Hr(S,()=>Zr(w),p.scope),w=p.update=()=>E.run();w.id=p.uid,St(p,!0),w()},Z=(p,m,f)=>{m.component=p;const y=p.vnode.props;p.vnode=m,p.next=null,El(p,m.props,y,f),zl(p,m.children,f),Zt(),No(),ne()},jn=(p,m,f,y,x,C,z,S,E=!1)=>{const w=p&&p.children,R=p?p.shapeFlag:0,T=m.children,{patchFlag:O,shapeFlag:F}=m;if(O>0){if(O&128){On(w,T,f,y,x,C,z,S,E);return}else if(O&256){it(w,T,f,y,x,C,z,S,E);return}}F&8?(R&16&&N(w,x,C),T!==w&&c(f,T)):R&16?F&16?On(w,T,f,y,x,C,z,S,E):N(w,x,C,!0):(R&8&&c(f,""),F&16&&dn(T,f,y,x,C,z,S,E))},it=(p,m,f,y,x,C,z,S,E)=>{p=p||Vt,m=m||Vt;const w=p.length,R=m.length,T=Math.min(w,R);let O;for(O=0;O<T;O++){const F=m[O]=E?ht(m[O]):Xn(m[O]);j(p[O],F,f,null,x,C,z,S,E)}w>R?N(p,x,C,!0,!1,T):dn(m,f,y,x,C,z,S,E,T)},On=(p,m,f,y,x,C,z,S,E)=>{let w=0;const R=m.length;let T=p.length-1,O=R-1;for(;w<=T&&w<=O;){const F=p[w],nn=m[w]=E?ht(m[w]):Xn(m[w]);if(oe(F,nn))j(F,nn,f,null,x,C,z,S,E);else break;w++}for(;w<=T&&w<=O;){const F=p[T],nn=m[O]=E?ht(m[O]):Xn(m[O]);if(oe(F,nn))j(F,nn,f,null,x,C,z,S,E);else break;T--,O--}if(w>T){if(w<=O){const F=O+1,nn=F<R?m[F].el:y;for(;w<=O;)j(null,m[w]=E?ht(m[w]):Xn(m[w]),f,nn,x,C,z,S,E),w++}}else if(w>O)for(;w<=T;)_n(p[w],x,C,!0),w++;else{const F=w,nn=w,cn=new Map;for(w=nn;w<=O;w++){const An=m[w]=E?ht(m[w]):Xn(m[w]);An.key!=null&&cn.set(An.key,w)}let un,mn=0;const Vn=O-nn+1;let Rt=!1,bo=0;const re=new Array(Vn);for(w=0;w<Vn;w++)re[w]=0;for(w=F;w<=T;w++){const An=p[w];if(mn>=Vn){_n(An,x,C,!0);continue}let Yn;if(An.key!=null)Yn=cn.get(An.key);else for(un=nn;un<=O;un++)if(re[un-nn]===0&&oe(An,m[un])){Yn=un;break}Yn===void 0?_n(An,x,C,!0):(re[Yn-nn]=w+1,Yn>=bo?bo=Yn:Rt=!0,j(An,m[Yn],f,null,x,C,z,S,E),mn++)}const xo=Rt?Ml(re):Vt;for(un=xo.length-1,w=Vn-1;w>=0;w--){const An=nn+w,Yn=m[An],yo=An+1<R?m[An+1].el:y;re[w]===0?j(null,Yn,f,yo,x,C,z,S,E):Rt&&(un<0||w!==xo[un]?Tn(Yn,f,yo,2):un--)}}},Tn=(p,m,f,y,x=null)=>{const{el:C,type:z,transition:S,children:E,shapeFlag:w}=p;if(w&6){Tn(p.component.subTree,m,f,y);return}if(w&128){p.suspense.move(m,f,y);return}if(w&64){z.move(p,m,f,gn);return}if(z===wn){r(C,m,f);for(let T=0;T<E.length;T++)Tn(E[T],m,f,y);r(p.anchor,m,f);return}if(z===De){L(p,m,f);return}if(y!==2&&w&1&&S)if(y===0)S.beforeEnter(C),r(C,m,f),Pn(()=>S.enter(C),x);else{const{leave:T,delayLeave:O,afterLeave:F}=S,nn=()=>r(C,m,f),cn=()=>{T(C,()=>{nn(),F&&F()})};O?O(C,nn,cn):cn()}else r(C,m,f)},_n=(p,m,f,y=!1,x=!1)=>{const{type:C,props:z,ref:S,children:E,dynamicChildren:w,shapeFlag:R,patchFlag:T,dirs:O}=p;if(S!=null&&Er(S,null,f,p,!0),R&256){m.ctx.deactivate(p);return}const F=R&1&&O,nn=!ce(p);let cn;if(nn&&(cn=z&&z.onVnodeBeforeUnmount)&&Jn(cn,m,p),R&6)P(p.component,f,y);else{if(R&128){p.suspense.unmount(f,y);return}F&&_t(p,null,m,"beforeUnmount"),R&64?p.type.remove(p,m,f,x,gn,y):w&&(C!==wn||T>0&&T&64)?N(w,m,f,!1,!0):(C===wn&&T&384||!x&&R&16)&&N(E,m,f),y&&gt(p)}(nn&&(cn=z&&z.onVnodeUnmounted)||F)&&Pn(()=>{cn&&Jn(cn,m,p),F&&_t(p,null,m,"unmounted")},f)},gt=p=>{const{type:m,el:f,anchor:y,transition:x}=p;if(m===wn){b(f,y);return}if(m===De){J(p);return}const C=()=>{o(f),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(p.shapeFlag&1&&x&&!x.persisted){const{leave:z,delayLeave:S}=x,E=()=>z(f,C);S?S(p.el,C,E):E()}else C()},b=(p,m)=>{let f;for(;p!==m;)f=g(p),o(p),p=f;o(m)},P=(p,m,f)=>{const{bum:y,scope:x,update:C,subTree:z,um:S}=p;y&&Ie(y),x.stop(),C&&(C.active=!1,_n(z,p,m,f)),S&&Pn(S,m),Pn(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},N=(p,m,f,y=!1,x=!1,C=0)=>{for(let z=C;z<p.length;z++)_n(p[z],m,f,y,x)},A=p=>p.shapeFlag&6?A(p.component.subTree):p.shapeFlag&128?p.suspense.next():g(p.anchor||p.el),an=(p,m,f)=>{p==null?m._vnode&&_n(m._vnode,null,null,!0):j(m._vnode||null,p,m,null,null,null,f),No(),Ji(),m._vnode=p},gn={p:j,um:_n,m:Tn,r:gt,mt:hn,mc:dn,pc:jn,pbc:vn,n:A,o:n};let W,V;return t&&([W,V]=t(gn)),{render:an,hydrate:W,createApp:Pl(an,W)}}function St({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function gs(n,t,e=!1){const r=n.children,o=t.children;if(B(r)&&B(o))for(let i=0;i<r.length;i++){const s=r[i];let l=o[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[i]=ht(o[i]),l.el=s.el),e||gs(s,l))}}function Ml(n){const t=n.slice(),e=[0];let r,o,i,s,l;const a=n.length;for(r=0;r<a;r++){const u=n[r];if(u!==0){if(o=e[e.length-1],n[o]<u){t[r]=o,e.push(r);continue}for(i=0,s=e.length-1;i<s;)l=i+s>>1,n[e[l]]<u?i=l+1:s=l;u<n[e[i]]&&(i>0&&(t[r]=e[i-1]),e[i]=r)}}for(i=e.length,s=e[i-1];i-- >0;)e[i]=s,s=t[s];return e}const Rl=n=>n.__isTeleport,wn=Symbol(void 0),to=Symbol(void 0),kt=Symbol(void 0),De=Symbol(void 0),ue=[];let Hn=null;function G(n=!1){ue.push(Hn=n?null:[])}function Ol(){ue.pop(),Hn=ue[ue.length-1]||null}let xe=1;function Oo(n){xe+=n}function ms(n){return n.dynamicChildren=xe>0?Hn||Vt:null,Ol(),xe>0&&Hn&&Hn.push(n),n}function rn(n,t,e,r,o,i){return ms(D(n,t,e,r,o,i,!0))}function we(n,t,e,r,o){return ms(on(n,t,e,r,o,!0))}function Fe(n){return n?n.__v_isVNode===!0:!1}function oe(n,t){return n.type===t.type&&n.key===t.key}const nr="__vInternal",fs=({key:n})=>n!=null?n:null,Pe=({ref:n,ref_key:t,ref_for:e})=>n!=null?Sn(n)||bn(n)||U(n)?{i:zn,r:n,k:t,f:!!e}:n:null;function D(n,t=null,e=null,r=0,o=null,i=n===wn?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&fs(t),ref:t&&Pe(t),scopeId:Ye,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return l?(eo(a,e),i&128&&n.normalize(a)):e&&(a.shapeFlag|=Sn(e)?8:16),xe>0&&!s&&Hn&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Hn.push(a),a}const on=Ll;function Ll(n,t=null,e=null,r=0,o=null,i=!1){if((!n||n===xl)&&(n=kt),Fe(n)){const l=Gt(n,t,!0);return e&&eo(l,e),xe>0&&!i&&Hn&&(l.shapeFlag&6?Hn[Hn.indexOf(n)]=l:Hn.push(l)),l.patchFlag|=-2,l}if(Jl(n)&&(n=n.__vccOpts),t){t=Fl(t);let{class:l,style:a}=t;l&&!Sn(l)&&(t.class=yn(l)),fn(a)&&(Bi(a)&&!B(a)&&(a=Dn({},a)),t.style=Lr(a))}const s=Sn(n)?1:il(n)?128:Rl(n)?64:fn(n)?4:U(n)?2:0;return D(n,t,e,r,o,s,i,!0)}function Fl(n){return n?Bi(n)||nr in n?Dn({},n):n:null}function Gt(n,t,e=!1){const{props:r,ref:o,patchFlag:i,children:s}=n,l=t?Vl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&fs(l),ref:t&&t.ref?e&&o?B(o)?o.concat(Pe(t)):[o,Pe(t)]:Pe(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:s,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==wn?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Gt(n.ssContent),ssFallback:n.ssFallback&&Gt(n.ssFallback),el:n.el,anchor:n.anchor}}function Tt(n=" ",t=0){return on(to,null,n,t)}function Bl(n,t){const e=on(De,null,n);return e.staticCount=t,e}function le(n="",t=!1){return t?(G(),we(kt,null,n)):on(kt,null,n)}function Xn(n){return n==null||typeof n=="boolean"?on(kt):B(n)?on(wn,null,n.slice()):typeof n=="object"?ht(n):on(to,null,String(n))}function ht(n){return n.el===null||n.memo?n:Gt(n)}function eo(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(B(t))e=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),eo(n,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!(nr in t)?t._ctx=zn:o===3&&zn&&(zn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:zn},e=32):(t=String(t),r&64?(e=16,t=[Tt(t)]):e=8);n.children=t,n.shapeFlag|=e}function Vl(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=yn([t.class,r.class]));else if(o==="style")t.style=Lr([t.style,r.style]);else if($e(o)){const i=t[o],s=r[o];s&&i!==s&&!(B(i)&&i.includes(s))&&(t[o]=i?[].concat(i,s):s)}else o!==""&&(t[o]=r[o])}return t}function Jn(n,t,e,r=null){Kn(n,t,7,[e,r])}const $l=ds();let Ul=0;function Hl(n,t,e){const r=n.type,o=(t?t.appContext:n.appContext)||$l,i={uid:Ul++,vnode:n,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ei(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ls(r,o),emitsOptions:Xi(r,o),emit:null,emitted:null,propsDefaults:pn,inheritAttrs:r.inheritAttrs,ctx:pn,data:pn,props:pn,attrs:pn,slots:pn,refs:pn,setupState:pn,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=nl.bind(null,i),n.ce&&n.ce(i),i}let Cn=null;const hs=()=>Cn||zn,Yt=n=>{Cn=n,n.scope.on()},At=()=>{Cn&&Cn.scope.off(),Cn=null};function vs(n){return n.vnode.shapeFlag&4}let ye=!1;function Wl(n,t=!1){ye=t;const{props:e,children:r}=n.vnode,o=vs(n);Cl(n,e,o,t),Il(n,r);const i=o?Kl(n,t):void 0;return ye=!1,i}function Kl(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=Kt(new Proxy(n.ctx,ql));const{setup:r}=e;if(r){const o=n.setupContext=r.length>1?Yl(n):null;Yt(n),Zt();const i=xt(r,n,0,[n.props,o]);if(ne(),At(),ki(i)){if(i.then(At,At),t)return i.then(s=>{Lo(n,s,t)}).catch(s=>{Ke(s,n,0)});n.asyncDep=i}else Lo(n,i,t)}else bs(n,t)}function Lo(n,t,e){U(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fn(t)&&(n.setupState=Hi(t)),bs(n,e)}let Fo;function bs(n,t,e){const r=n.type;if(!n.render){if(!t&&Fo&&!r.render){const o=r.template;if(o){const{isCustomElement:i,compilerOptions:s}=n.appContext.config,{delimiters:l,compilerOptions:a}=r,u=Dn(Dn({isCustomElement:i,delimiters:l},s),a);r.render=Fo(o,u)}}n.render=r.render||Wn}Yt(n),Zt(),wl(n),ne(),At()}function Gl(n){return new Proxy(n.attrs,{get(t,e){return Rn(n,"get","$attrs"),t[e]}})}function Yl(n){const t=r=>{n.exposed=r||{}};let e;return{get attrs(){return e||(e=Gl(n))},slots:n.slots,emit:n.emit,expose:t}}function tr(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Hi(Kt(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Oe)return Oe[e](n)}}))}function Jl(n){return U(n)&&"__vccOpts"in n}const Mn=(n,t)=>Ga(n,t,ye);function xs(n,t,e){const r=arguments.length;return r===2?fn(t)&&!B(t)?Fe(t)?on(n,null,[t]):on(n,t):on(n,null,t):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&Fe(e)&&(e=[e]),on(n,t,e))}const Ql="3.2.38",Xl="http://www.w3.org/2000/svg",It=typeof document<"u"?document:null,Bo=It&&It.createElement("template"),Zl={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const o=t?It.createElementNS(Xl,n):It.createElement(n,e?{is:e}:void 0);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>It.createTextNode(n),createComment:n=>It.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>It.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},cloneNode(n){const t=n.cloneNode(!0);return"_value"in n&&(t._value=n._value),t},insertStaticContent(n,t,e,r,o,i){const s=e?e.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===i||!(o=o.nextSibling)););else{Bo.innerHTML=r?`<svg>${n}</svg>`:n;const l=Bo.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,e)}return[s?s.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function nc(n,t,e){const r=n._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}function tc(n,t,e){const r=n.style,o=Sn(e);if(e&&!o){for(const i in e)Nr(r,i,e[i]);if(t&&!Sn(t))for(const i in t)e[i]==null&&Nr(r,i,"")}else{const i=r.display;o?t!==e&&(r.cssText=e):t&&n.removeAttribute("style"),"_vod"in n&&(r.display=i)}}const Vo=/\s*!important$/;function Nr(n,t,e){if(B(e))e.forEach(r=>Nr(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=ec(n,t);Vo.test(e)?n.setProperty(Xt(r),e.replace(Vo,""),"important"):n[r]=e}}const $o=["Webkit","Moz","ms"],pr={};function ec(n,t){const e=pr[t];if(e)return e;let r=Ht(t);if(r!=="filter"&&r in n)return pr[t]=r;r=Ci(r);for(let o=0;o<$o.length;o++){const i=$o[o]+r;if(i in n)return pr[t]=i}return t}const Uo="http://www.w3.org/1999/xlink";function rc(n,t,e,r,o){if(r&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(Uo,t.slice(6,t.length)):n.setAttributeNS(Uo,t,e);else{const i=ia(t);e==null||i&&!qi(e)?n.removeAttribute(t):n.setAttribute(t,i?"":e)}}function oc(n,t,e,r,o,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,o,i),n[t]=e==null?"":e;return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=e;const a=e==null?"":e;(n.value!==a||n.tagName==="OPTION")&&(n.value=a),e==null&&n.removeAttribute(t);return}let l=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=qi(e):e==null&&a==="string"?(e="",l=!0):a==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(t)}const[ys,ic]=(()=>{let n=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const e=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(e&&Number(e[1])<=53)}return[n,t]})();let Ir=0;const sc=Promise.resolve(),ac=()=>{Ir=0},lc=()=>Ir||(sc.then(ac),Ir=ys());function Ft(n,t,e,r){n.addEventListener(t,e,r)}function cc(n,t,e,r){n.removeEventListener(t,e,r)}function uc(n,t,e,r,o=null){const i=n._vei||(n._vei={}),s=i[t];if(r&&s)s.value=r;else{const[l,a]=pc(t);if(r){const u=i[t]=dc(r,o);Ft(n,l,u,a)}else s&&(cc(n,l,s,a),i[t]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function pc(n){let t;if(Ho.test(n)){t={};let r;for(;r=n.match(Ho);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xt(n.slice(2)),t]}function dc(n,t){const e=r=>{const o=r.timeStamp||ys();(ic||o>=e.attached-1)&&Kn(gc(r,e.value),t,5,[r])};return e.value=n,e.attached=lc(),e}function gc(n,t){if(B(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Wo=/^on[a-z]/,mc=(n,t,e,r,o=!1,i,s,l,a)=>{t==="class"?nc(n,r,o):t==="style"?tc(n,e,r):$e(t)?Fr(t)||uc(n,t,e,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):fc(n,t,r,o))?oc(n,t,r,i,s,l,a):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),rc(n,t,r,o))};function fc(n,t,e,r){return r?!!(t==="innerHTML"||t==="textContent"||t in n&&Wo.test(t)&&U(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Wo.test(t)&&Sn(e)?!1:t in n}const Ko=n=>{const t=n.props["onUpdate:modelValue"]||!1;return B(t)?e=>Ie(t,e):t};function hc(n){n.target.composing=!0}function Go(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vc={created(n,{modifiers:{lazy:t,trim:e,number:r}},o){n._assign=Ko(o);const i=r||o.props&&o.props.type==="number";Ft(n,t?"change":"input",s=>{if(s.target.composing)return;let l=n.value;e&&(l=l.trim()),i&&(l=vr(l)),n._assign(l)}),e&&Ft(n,"change",()=>{n.value=n.value.trim()}),t||(Ft(n,"compositionstart",hc),Ft(n,"compositionend",Go),Ft(n,"change",Go))},mounted(n,{value:t}){n.value=t==null?"":t},beforeUpdate(n,{value:t,modifiers:{lazy:e,trim:r,number:o}},i){if(n._assign=Ko(i),n.composing||document.activeElement===n&&n.type!=="range"&&(e||r&&n.value.trim()===t||(o||n.type==="number")&&vr(n.value)===t))return;const s=t==null?"":t;n.value!==s&&(n.value=s)}},qs={beforeMount(n,{value:t},{transition:e}){n._vod=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):ie(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:r}){!t!=!e&&(r?t?(r.beforeEnter(n),ie(n,!0),r.enter(n)):r.leave(n,()=>{ie(n,!1)}):ie(n,t))},beforeUnmount(n,{value:t}){ie(n,t)}};function ie(n,t){n.style.display=t?n._vod:"none"}const bc=Dn({patchProp:mc},Zl);let Yo;function xc(){return Yo||(Yo=Tl(bc))}const yc=(...n)=>{const t=xc().createApp(...n),{mount:e}=t;return t.mount=r=>{const o=qc(r);if(!o)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=e(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function qc(n){return Sn(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Bt=typeof window<"u";function wc(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ln=Object.assign;function dr(n,t){const e={};for(const r in t){const o=t[r];e[r]=Gn(o)?o.map(n):n(o)}return e}const pe=()=>{},Gn=Array.isArray,jc=/\/$/,kc=n=>n.replace(jc,"");function gr(n,t,e="/"){let r,o={},i="",s="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,l>-1?l:t.length),o=n(i)),l>-1&&(r=r||t.slice(0,l),s=t.slice(l,t.length)),r=Ec(r!=null?r:t,e),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function _c(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Jo(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Sc(n,t,e){const r=t.matched.length-1,o=e.matched.length-1;return r>-1&&r===o&&Jt(t.matched[r],e.matched[o])&&ws(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Jt(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function ws(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Cc(n[e],t[e]))return!1;return!0}function Cc(n,t){return Gn(n)?Qo(n,t):Gn(t)?Qo(t,n):n===t}function Qo(n,t){return Gn(t)?n.length===t.length&&n.every((e,r)=>e===t[r]):n.length===1&&n[0]===t}function Ec(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),r=n.split("/");let o=e.length-1,i,s;for(i=0;i<r.length;i++)if(s=r[i],s!==".")if(s==="..")o>1&&o--;else break;return e.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var qe;(function(n){n.pop="pop",n.push="push"})(qe||(qe={}));var de;(function(n){n.back="back",n.forward="forward",n.unknown=""})(de||(de={}));function Nc(n){if(!n)if(Bt){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),kc(n)}const Ic=/^[^#]+#/;function zc(n,t){return n.replace(Ic,"#")+t}function Dc(n,t){const e=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:t.behavior,left:r.left-e.left-(t.left||0),top:r.top-e.top-(t.top||0)}}const er=()=>({left:window.pageXOffset,top:window.pageYOffset});function Pc(n){let t;if("el"in n){const e=n.el,r=typeof e=="string"&&e.startsWith("#"),o=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!o)return;t=Dc(o,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Xo(n,t){return(history.state?history.state.position-t:-1)+n}const zr=new Map;function Tc(n,t){zr.set(n,t)}function Ac(n){const t=zr.get(n);return zr.delete(n),t}let Mc=()=>location.protocol+"//"+location.host;function js(n,t){const{pathname:e,search:r,hash:o}=t,i=n.indexOf("#");if(i>-1){let l=o.includes(n.slice(i))?n.slice(i).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),Jo(a,"")}return Jo(e,n)+r+o}function Rc(n,t,e,r){let o=[],i=[],s=null;const l=({state:g})=>{const v=js(n,location),h=e.value,q=t.value;let j=0;if(g){if(e.value=v,t.value=g,s&&s===h){s=null;return}j=q?g.position-q.position:0}else r(v);o.forEach(k=>{k(e.value,h,{delta:j,type:qe.pop,direction:j?j>0?de.forward:de.back:de.unknown})})};function a(){s=e.value}function u(g){o.push(g);const v=()=>{const h=o.indexOf(g);h>-1&&o.splice(h,1)};return i.push(v),v}function c(){const{history:g}=window;!g.state||g.replaceState(ln({},g.state,{scroll:er()}),"")}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c),{pauseListeners:a,listen:u,destroy:d}}function Zo(n,t,e,r=!1,o=!1){return{back:n,current:t,forward:e,replaced:r,position:window.history.length,scroll:o?er():null}}function Oc(n){const{history:t,location:e}=window,r={value:js(n,e)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,u,c){const d=n.indexOf("#"),g=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+a:Mc()+n+a;try{t[c?"replaceState":"pushState"](u,"",g),o.value=u}catch(v){console.error(v),e[c?"replace":"assign"](g)}}function s(a,u){const c=ln({},t.state,Zo(o.value.back,a,o.value.forward,!0),u,{position:o.value.position});i(a,c,!0),r.value=a}function l(a,u){const c=ln({},o.value,t.state,{forward:a,scroll:er()});i(c.current,c,!0);const d=ln({},Zo(r.value,a,null),{position:c.position+1},u);i(a,d,!1),r.value=a}return{location:r,state:o,push:l,replace:s}}function Lc(n){n=Nc(n);const t=Oc(n),e=Rc(n,t.state,t.location,t.replace);function r(i,s=!0){s||e.pauseListeners(),history.go(i)}const o=ln({location:"",base:n,go:r,createHref:zc.bind(null,n)},t,e);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Fc(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Lc(n)}function Bc(n){return typeof n=="string"||n&&typeof n=="object"}function ks(n){return typeof n=="string"||typeof n=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_s=Symbol("");var ni;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ni||(ni={}));function Qt(n,t){return ln(new Error,{type:n,[_s]:!0},t)}function st(n,t){return n instanceof Error&&_s in n&&(t==null||!!(n.type&t))}const ti="[^/]+?",Vc={sensitive:!1,strict:!1,start:!0,end:!0},$c=/[.+*?^${}()[\]/\\]/g;function Uc(n,t){const e=ln({},Vc,t),r=[];let o=e.start?"^":"";const i=[];for(const u of n){const c=u.length?[]:[90];e.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const g=u[d];let v=40+(e.sensitive?.25:0);if(g.type===0)d||(o+="/"),o+=g.value.replace($c,"\\$&"),v+=40;else if(g.type===1){const{value:h,repeatable:q,optional:j,regexp:k}=g;i.push({name:h,repeatable:q,optional:j});const _=k||ti;if(_!==ti){v+=10;try{new RegExp(`(${_})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${h}" (${_}): `+L.message)}}let I=q?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(I=j&&u.length<2?`(?:/${I})`:"/"+I),j&&(I+="?"),o+=I,v+=20,j&&(v+=-8),q&&(v+=-20),_===".*"&&(v+=-50)}c.push(v)}r.push(c)}if(e.strict&&e.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}e.strict||(o+="/?"),e.end?o+="$":e.strict&&(o+="(?:/|$)");const s=new RegExp(o,e.sensitive?"":"i");function l(u){const c=u.match(s),d={};if(!c)return null;for(let g=1;g<c.length;g++){const v=c[g]||"",h=i[g-1];d[h.name]=v&&h.repeatable?v.split("/"):v}return d}function a(u){let c="",d=!1;for(const g of n){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const v of g)if(v.type===0)c+=v.value;else if(v.type===1){const{value:h,repeatable:q,optional:j}=v,k=h in u?u[h]:"";if(Gn(k)&&!q)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const _=Gn(k)?k.join("/"):k;if(!_)if(j)g.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);c+=_}}return c||"/"}return{re:s,score:r,keys:i,parse:l,stringify:a}}function Hc(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=t[e]-n[e];if(r)return r;e++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Wc(n,t){let e=0;const r=n.score,o=t.score;for(;e<r.length&&e<o.length;){const i=Hc(r[e],o[e]);if(i)return i;e++}if(Math.abs(o.length-r.length)===1){if(ei(r))return 1;if(ei(o))return-1}return o.length-r.length}function ei(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Kc={type:0,value:""},Gc=/[a-zA-Z0-9_]/;function Yc(n){if(!n)return[[]];if(n==="/")return[[Kc]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(v){throw new Error(`ERR (${e})/"${u}": ${v}`)}let e=0,r=e;const o=[];let i;function s(){i&&o.push(i),i=[]}let l=0,a,u="",c="";function d(){!u||(e===0?i.push({type:0,value:u}):e===1||e===2||e===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function g(){u+=a}for(;l<n.length;){if(a=n[l++],a==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:a==="/"?(u&&d(),s()):a===":"?(d(),e=1):g();break;case 4:g(),e=r;break;case 1:a==="("?e=2:Gc.test(a)?g():(d(),e=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:e=3:c+=a;break;case 3:d(),e=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),o}function Jc(n,t,e){const r=Uc(Yc(n.path),e),o=ln(r,{record:n,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Qc(n,t){const e=[],r=new Map;t=ii({strict:!1,end:!0,sensitive:!1},t);function o(c){return r.get(c)}function i(c,d,g){const v=!g,h=Xc(c);h.aliasOf=g&&g.record;const q=ii(t,c),j=[h];if("alias"in c){const I=typeof c.alias=="string"?[c.alias]:c.alias;for(const L of I)j.push(ln({},h,{components:g?g.record.components:h.components,path:L,aliasOf:g?g.record:h}))}let k,_;for(const I of j){const{path:L}=I;if(d&&L[0]!=="/"){const J=d.record.path,$=J[J.length-1]==="/"?"":"/";I.path=d.record.path+(L&&$+L)}if(k=Jc(I,d,q),g?g.alias.push(k):(_=_||k,_!==k&&_.alias.push(k),v&&c.name&&!oi(k)&&s(c.name)),h.children){const J=h.children;for(let $=0;$<J.length;$++)i(J[$],k,g&&g.children[$])}g=g||k,a(k)}return _?()=>{s(_)}:pe}function s(c){if(ks(c)){const d=r.get(c);d&&(r.delete(c),e.splice(e.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=e.indexOf(c);d>-1&&(e.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(s),c.alias.forEach(s))}}function l(){return e}function a(c){let d=0;for(;d<e.length&&Wc(c,e[d])>=0&&(c.record.path!==e[d].record.path||!Ss(c,e[d]));)d++;e.splice(d,0,c),c.record.name&&!oi(c)&&r.set(c.record.name,c)}function u(c,d){let g,v={},h,q;if("name"in c&&c.name){if(g=r.get(c.name),!g)throw Qt(1,{location:c});q=g.record.name,v=ln(ri(d.params,g.keys.filter(_=>!_.optional).map(_=>_.name)),c.params&&ri(c.params,g.keys.map(_=>_.name))),h=g.stringify(v)}else if("path"in c)h=c.path,g=e.find(_=>_.re.test(h)),g&&(v=g.parse(h),q=g.record.name);else{if(g=d.name?r.get(d.name):e.find(_=>_.re.test(d.path)),!g)throw Qt(1,{location:c,currentLocation:d});q=g.record.name,v=ln({},d.params,c.params),h=g.stringify(v)}const j=[];let k=g;for(;k;)j.unshift(k.record),k=k.parent;return{name:q,path:h,params:v,matched:j,meta:nu(j)}}return n.forEach(c=>i(c)),{addRoute:i,resolve:u,removeRoute:s,getRoutes:l,getRecordMatcher:o}}function ri(n,t){const e={};for(const r of t)r in n&&(e[r]=n[r]);return e}function Xc(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Zc(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Zc(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const r in n.components)t[r]=typeof e=="boolean"?e:e[r];return t}function oi(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function nu(n){return n.reduce((t,e)=>ln(t,e.meta),{})}function ii(n,t){const e={};for(const r in n)e[r]=r in t?t[r]:n[r];return e}function Ss(n,t){return t.children.some(e=>e===n||Ss(n,e))}const Cs=/#/g,tu=/&/g,eu=/\//g,ru=/=/g,ou=/\?/g,Es=/\+/g,iu=/%5B/g,su=/%5D/g,Ns=/%5E/g,au=/%60/g,Is=/%7B/g,lu=/%7C/g,zs=/%7D/g,cu=/%20/g;function ro(n){return encodeURI(""+n).replace(lu,"|").replace(iu,"[").replace(su,"]")}function uu(n){return ro(n).replace(Is,"{").replace(zs,"}").replace(Ns,"^")}function Dr(n){return ro(n).replace(Es,"%2B").replace(cu,"+").replace(Cs,"%23").replace(tu,"%26").replace(au,"`").replace(Is,"{").replace(zs,"}").replace(Ns,"^")}function pu(n){return Dr(n).replace(ru,"%3D")}function du(n){return ro(n).replace(Cs,"%23").replace(ou,"%3F")}function gu(n){return n==null?"":du(n).replace(eu,"%2F")}function Be(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function mu(n){const t={};if(n===""||n==="?")return t;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Es," "),s=i.indexOf("="),l=Be(s<0?i:i.slice(0,s)),a=s<0?null:Be(i.slice(s+1));if(l in t){let u=t[l];Gn(u)||(u=t[l]=[u]),u.push(a)}else t[l]=a}return t}function si(n){let t="";for(let e in n){const r=n[e];if(e=pu(e),r==null){r!==void 0&&(t+=(t.length?"&":"")+e);continue}(Gn(r)?r.map(i=>i&&Dr(i)):[r&&Dr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+e,i!=null&&(t+="="+i))})}return t}function fu(n){const t={};for(const e in n){const r=n[e];r!==void 0&&(t[e]=Gn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const hu=Symbol(""),ai=Symbol(""),oo=Symbol(""),io=Symbol(""),Pr=Symbol("");function se(){let n=[];function t(r){return n.push(r),()=>{const o=n.indexOf(r);o>-1&&n.splice(o,1)}}function e(){n=[]}return{add:t,list:()=>n,reset:e}}function vt(n,t,e,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,l)=>{const a=d=>{d===!1?l(Qt(4,{from:e,to:t})):d instanceof Error?l(d):Bc(d)?l(Qt(2,{from:t,to:d})):(i&&r.enterCallbacks[o]===i&&typeof d=="function"&&i.push(d),s())},u=n.call(r&&r.instances[o],t,e,a);let c=Promise.resolve(u);n.length<3&&(c=c.then(a)),c.catch(d=>l(d))})}function mr(n,t,e,r){const o=[];for(const i of n)for(const s in i.components){let l=i.components[s];if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(vu(l)){const u=(l.__vccOpts||l)[t];u&&o.push(vt(u,e,r,i,s))}else{let a=l();o.push(()=>a.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const c=wc(u)?u.default:u;i.components[s]=c;const g=(c.__vccOpts||c)[t];return g&&vt(g,e,r,i,s)()}))}}return o}function vu(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function li(n){const t=ot(oo),e=ot(io),r=Mn(()=>t.resolve(sn(n.to))),o=Mn(()=>{const{matched:a}=r.value,{length:u}=a,c=a[u-1],d=e.matched;if(!c||!d.length)return-1;const g=d.findIndex(Jt.bind(null,c));if(g>-1)return g;const v=ci(a[u-2]);return u>1&&ci(c)===v&&d[d.length-1].path!==v?d.findIndex(Jt.bind(null,a[u-2])):g}),i=Mn(()=>o.value>-1&&yu(e.params,r.value.params)),s=Mn(()=>o.value>-1&&o.value===e.matched.length-1&&ws(e.params,r.value.params));function l(a={}){return xu(a)?t[sn(n.replace)?"replace":"push"](sn(n.to)).catch(pe):Promise.resolve()}return{route:r,href:Mn(()=>r.value.href),isActive:i,isExactActive:s,navigate:l}}const bu=ts({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:li,setup(n,{slots:t}){const e=te(li(n)),{options:r}=ot(oo),o=Mn(()=>({[ui(n.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[ui(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=t.default&&t.default(e);return n.custom?i:xs("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:o.value},i)}}}),Mt=bu;function xu(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function yu(n,t){for(const e in t){const r=t[e],o=n[e];if(typeof r=="string"){if(r!==o)return!1}else if(!Gn(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function ci(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ui=(n,t,e)=>n!=null?n:t!=null?t:e,qu=ts({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const r=ot(Pr),o=Mn(()=>n.route||r.value),i=ot(ai,0),s=Mn(()=>{let u=sn(i);const{matched:c}=o.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),l=Mn(()=>o.value.matched[s.value]);ze(ai,Mn(()=>s.value+1)),ze(hu,l),ze(Pr,o);const a=Fn();return Pt(()=>[a.value,l.value,n.name],([u,c,d],[g,v,h])=>{c&&(c.instances[d]=u,v&&v!==c&&u&&u===g&&(c.leaveGuards.size||(c.leaveGuards=v.leaveGuards),c.updateGuards.size||(c.updateGuards=v.updateGuards))),u&&c&&(!v||!Jt(c,v)||!g)&&(c.enterCallbacks[d]||[]).forEach(q=>q(u))},{flush:"post"}),()=>{const u=o.value,c=n.name,d=l.value,g=d&&d.components[c];if(!g)return pi(e.default,{Component:g,route:u});const v=d.props[c],h=v?v===!0?u.params:typeof v=="function"?v(u):v:null,j=xs(g,ln({},h,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[c]=null)},ref:a}));return pi(e.default,{Component:j,route:u})||j}}});function pi(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Ds=qu;function wu(n){const t=Qc(n.routes,n),e=n.parseQuery||mu,r=n.stringifyQuery||si,o=n.history,i=se(),s=se(),l=se(),a=$a(ft);let u=ft;Bt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=dr.bind(null,b=>""+b),d=dr.bind(null,gu),g=dr.bind(null,Be);function v(b,P){let N,A;return ks(b)?(N=t.getRecordMatcher(b),A=P):A=b,t.addRoute(A,N)}function h(b){const P=t.getRecordMatcher(b);P&&t.removeRoute(P)}function q(){return t.getRoutes().map(b=>b.record)}function j(b){return!!t.getRecordMatcher(b)}function k(b,P){if(P=ln({},P||a.value),typeof b=="string"){const V=gr(e,b,P.path),p=t.resolve({path:V.path},P),m=o.createHref(V.fullPath);return ln(V,p,{params:g(p.params),hash:Be(V.hash),redirectedFrom:void 0,href:m})}let N;if("path"in b)N=ln({},b,{path:gr(e,b.path,P.path).path});else{const V=ln({},b.params);for(const p in V)V[p]==null&&delete V[p];N=ln({},b,{params:d(b.params)}),P.params=d(P.params)}const A=t.resolve(N,P),an=b.hash||"";A.params=c(g(A.params));const gn=_c(r,ln({},b,{hash:uu(an),path:A.path})),W=o.createHref(gn);return ln({fullPath:gn,hash:an,query:r===si?fu(b.query):b.query||{}},A,{redirectedFrom:void 0,href:W})}function _(b){return typeof b=="string"?gr(e,b,a.value.path):ln({},b)}function I(b,P){if(u!==b)return Qt(8,{from:P,to:b})}function L(b){return H(b)}function J(b){return L(ln(_(b),{replace:!0}))}function $(b){const P=b.matched[b.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let A=typeof N=="function"?N(b):N;return typeof A=="string"&&(A=A.includes("?")||A.includes("#")?A=_(A):{path:A},A.params={}),ln({query:b.query,hash:b.hash,params:"path"in A?{}:b.params},A)}}function H(b,P){const N=u=k(b),A=a.value,an=b.state,gn=b.force,W=b.replace===!0,V=$(N);if(V)return H(ln(_(V),{state:typeof V=="object"?ln({},an,V.state):an,force:gn,replace:W}),P||N);const p=N;p.redirectedFrom=P;let m;return!gn&&Sc(r,A,N)&&(m=Qt(16,{to:p,from:A}),it(A,A,!0,!1)),(m?Promise.resolve(m):dn(p,A)).catch(f=>st(f)?st(f,2)?f:jn(f):X(f,p,A)).then(f=>{if(f){if(st(f,2))return H(ln({replace:W},_(f.to),{state:typeof f.to=="object"?ln({},an,f.to.state):an,force:gn}),P||p)}else f=vn(p,A,!0,W,an);return Y(p,A,f),f})}function K(b,P){const N=I(b,P);return N?Promise.reject(N):Promise.resolve()}function dn(b,P){let N;const[A,an,gn]=ju(b,P);N=mr(A.reverse(),"beforeRouteLeave",b,P);for(const V of A)V.leaveGuards.forEach(p=>{N.push(vt(p,b,P))});const W=K.bind(null,b,P);return N.push(W),Ot(N).then(()=>{N=[];for(const V of i.list())N.push(vt(V,b,P));return N.push(W),Ot(N)}).then(()=>{N=mr(an,"beforeRouteUpdate",b,P);for(const V of an)V.updateGuards.forEach(p=>{N.push(vt(p,b,P))});return N.push(W),Ot(N)}).then(()=>{N=[];for(const V of b.matched)if(V.beforeEnter&&!P.matched.includes(V))if(Gn(V.beforeEnter))for(const p of V.beforeEnter)N.push(vt(p,b,P));else N.push(vt(V.beforeEnter,b,P));return N.push(W),Ot(N)}).then(()=>(b.matched.forEach(V=>V.enterCallbacks={}),N=mr(gn,"beforeRouteEnter",b,P),N.push(W),Ot(N))).then(()=>{N=[];for(const V of s.list())N.push(vt(V,b,P));return N.push(W),Ot(N)}).catch(V=>st(V,8)?V:Promise.reject(V))}function Y(b,P,N){for(const A of l.list())A(b,P,N)}function vn(b,P,N,A,an){const gn=I(b,P);if(gn)return gn;const W=P===ft,V=Bt?history.state:{};N&&(A||W?o.replace(b.fullPath,ln({scroll:W&&V&&V.scroll},an)):o.push(b.fullPath,an)),a.value=b,it(b,P,N,W),jn()}let kn;function qn(){kn||(kn=o.listen((b,P,N)=>{if(!gt.listening)return;const A=k(b),an=$(A);if(an){H(ln(an,{replace:!0}),A).catch(pe);return}u=A;const gn=a.value;Bt&&Tc(Xo(gn.fullPath,N.delta),er()),dn(A,gn).catch(W=>st(W,12)?W:st(W,2)?(H(W.to,A).then(V=>{st(V,20)&&!N.delta&&N.type===qe.pop&&o.go(-1,!1)}).catch(pe),Promise.reject()):(N.delta&&o.go(-N.delta,!1),X(W,A,gn))).then(W=>{W=W||vn(A,gn,!1),W&&(N.delta&&!st(W,8)?o.go(-N.delta,!1):N.type===qe.pop&&st(W,20)&&o.go(-1,!1)),Y(A,gn,W)}).catch(pe)}))}let En=se(),hn=se(),xn;function X(b,P,N){jn(b);const A=hn.list();return A.length?A.forEach(an=>an(b,P,N)):console.error(b),Promise.reject(b)}function Z(){return xn&&a.value!==ft?Promise.resolve():new Promise((b,P)=>{En.add([b,P])})}function jn(b){return xn||(xn=!b,qn(),En.list().forEach(([P,N])=>b?N(b):P()),En.reset()),b}function it(b,P,N,A){const{scrollBehavior:an}=n;if(!Bt||!an)return Promise.resolve();const gn=!N&&Ac(Xo(b.fullPath,0))||(A||!N)&&history.state&&history.state.scroll||null;return Xr().then(()=>an(b,P,gn)).then(W=>W&&Pc(W)).catch(W=>X(W,b,P))}const On=b=>o.go(b);let Tn;const _n=new Set,gt={currentRoute:a,listening:!0,addRoute:v,removeRoute:h,hasRoute:j,getRoutes:q,resolve:k,options:n,push:L,replace:J,go:On,back:()=>On(-1),forward:()=>On(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:hn.add,isReady:Z,install(b){const P=this;b.component("RouterLink",Mt),b.component("RouterView",Ds),b.config.globalProperties.$router=P,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>sn(a)}),Bt&&!Tn&&a.value===ft&&(Tn=!0,L(o.location).catch(an=>{}));const N={};for(const an in ft)N[an]=Mn(()=>a.value[an]);b.provide(oo,P),b.provide(io,te(N)),b.provide(Pr,a);const A=b.unmount;_n.add(b),b.unmount=function(){_n.delete(b),_n.size<1&&(u=ft,kn&&kn(),kn=null,a.value=ft,Tn=!1,xn=!1),A()}}};return gt}function Ot(n){return n.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ju(n,t){const e=[],r=[],o=[],i=Math.max(t.matched.length,n.matched.length);for(let s=0;s<i;s++){const l=t.matched[s];l&&(n.matched.find(u=>Jt(u,l))?r.push(l):e.push(l));const a=n.matched[s];a&&(t.matched.find(u=>Jt(u,a))||o.push(a))}return[e,r,o]}function ku(){return ot(io)}const Bn=(n,t)=>{const e=n.__vccOpts||n;for(const[r,o]of t)e[r]=o;return e},_u=Bl('<div class="planet" data-v-d194c29b><div class="sun" data-v-d194c29b></div><div class="moon" data-v-d194c29b></div></div><div class="body" data-v-d194c29b><div class="face" data-v-d194c29b><section class="eyes left" data-v-d194c29b><span class="pupil" data-v-d194c29b></span></section><section class="eyes right" data-v-d194c29b><span class="pupil" data-v-d194c29b></span></section><span class="nose" data-v-d194c29b></span></div></div>',2),Su=[_u],Cu={__name:"Neko",props:{isSun:Boolean,isShow:Boolean},setup(n){const t=n,{isSun:e,isShow:r}=qt(t);return(o,i)=>(G(),rn("div",{id:"neko",class:yn([sn(e)?"dark":"",sn(r)?"show":""])},Su,2))}},Eu=Bn(Cu,[["__scopeId","data-v-d194c29b"]]);var Nu=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Ps;const rr=n=>Ps=n,Ts=Symbol();function Tr(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var ge;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ge||(ge={}));function Iu(){const n=Ni(!0),t=n.run(()=>Fn({}));let e=[],r=[];const o=Kt({install(i){rr(o),o._a=i,i.provide(Ts,o),i.config.globalProperties.$pinia=o,r.forEach(s=>e.push(s)),r=[]},use(i){return!this._a&&!Nu?r.push(i):e.push(i),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return o}const As=()=>{};function di(n,t,e,r=As){n.push(t);const o=()=>{const i=n.indexOf(t);i>-1&&(n.splice(i,1),r())};return!e&&hs()&&Ze(o),o}function Lt(n,...t){n.slice().forEach(e=>{e(...t)})}function Ar(n,t){n instanceof Map&&t instanceof Map&&t.forEach((e,r)=>n.set(r,e)),n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const r=t[e],o=n[e];Tr(o)&&Tr(r)&&n.hasOwnProperty(e)&&!bn(r)&&!ct(r)?n[e]=Ar(o,r):n[e]=r}return n}const zu=Symbol();function Du(n){return!Tr(n)||!n.hasOwnProperty(zu)}const{assign:lt}=Object;function Pu(n){return!!(bn(n)&&n.effect)}function Tu(n,t,e,r){const{state:o,actions:i,getters:s}=t,l=e.state.value[n];let a;function u(){l||(e.state.value[n]=o?o():{});const c=qt(e.state.value[n]);return lt(c,i,Object.keys(s||{}).reduce((d,g)=>(d[g]=Kt(Mn(()=>{rr(e);const v=e._s.get(n);return s[g].call(v,v)})),d),{}))}return a=Ms(n,u,t,e,r,!0),a.$reset=function(){const d=o?o():{};this.$patch(g=>{lt(g,d)})},a}function Ms(n,t,e={},r,o,i){let s;const l=lt({actions:{}},e),a={deep:!0};let u,c,d=Kt([]),g=Kt([]),v;const h=r.state.value[n];!i&&!h&&(r.state.value[n]={}),Fn({});let q;function j(H){let K;u=c=!1,typeof H=="function"?(H(r.state.value[n]),K={type:ge.patchFunction,storeId:n,events:v}):(Ar(r.state.value[n],H),K={type:ge.patchObject,payload:H,storeId:n,events:v});const dn=q=Symbol();Xr().then(()=>{q===dn&&(u=!0)}),c=!0,Lt(d,K,r.state.value[n])}const k=As;function _(){s.stop(),d=[],g=[],r._s.delete(n)}function I(H,K){return function(){rr(r);const dn=Array.from(arguments),Y=[],vn=[];function kn(hn){Y.push(hn)}function qn(hn){vn.push(hn)}Lt(g,{args:dn,name:H,store:J,after:kn,onError:qn});let En;try{En=K.apply(this&&this.$id===n?this:J,dn)}catch(hn){throw Lt(vn,hn),hn}return En instanceof Promise?En.then(hn=>(Lt(Y,hn),hn)).catch(hn=>(Lt(vn,hn),Promise.reject(hn))):(Lt(Y,En),En)}}const L={_p:r,$id:n,$onAction:di.bind(null,g),$patch:j,$reset:k,$subscribe(H,K={}){const dn=di(d,H,K.detached,()=>Y()),Y=s.run(()=>Pt(()=>r.state.value[n],vn=>{(K.flush==="sync"?c:u)&&H({storeId:n,type:ge.direct,events:v},vn)},lt({},a,K)));return dn},$dispose:_},J=te(lt({},L));r._s.set(n,J);const $=r._e.run(()=>(s=Ni(),s.run(()=>t())));for(const H in $){const K=$[H];if(bn(K)&&!Pu(K)||ct(K))i||(h&&Du(K)&&(bn(K)?K.value=h[H]:Ar(K,h[H])),r.state.value[n][H]=K);else if(typeof K=="function"){const dn=I(H,K);$[H]=dn,l.actions[H]=K}}return lt(J,$),lt(en(J),$),Object.defineProperty(J,"$state",{get:()=>r.state.value[n],set:H=>{j(K=>{lt(K,H)})}}),r._p.forEach(H=>{lt(J,s.run(()=>H({store:J,app:r._a,pinia:r,options:l})))}),h&&i&&e.hydrate&&e.hydrate(J.$state,h),u=!0,c=!0,J}function Au(n,t,e){let r,o;const i=typeof t=="function";typeof n=="string"?(r=n,o=i?e:t):(o=n,r=n.id);function s(l,a){const u=hs();return l=l||u&&ot(Ts),l&&rr(l),l=Ps,l._s.has(r)||(i?Ms(r,t,o,l):Tu(r,o,l)),l._s.get(r)}return s.$id=r,s}function Mu(n){{n=en(n);const t={};for(const e in n){const r=n[e];(bn(r)||ct(r))&&(t[e]=Wi(n,e))}return t}}const Ru=[{index:[],path:"/posts_vue/\u6DF1\u5165\u6D45\u51FAvue_\u89E3\u6790\u8FC7\u6EE4\u5668.html",title:"\u6DF1\u5165\u6D45\u51FAvue.js\u7B14\u8BB0 _\u89E3\u6790\u8FC7\u6EE4\u5668",date:"2022-06-03",fontNum:937,description:`javascript\r
export function parseFilters(exp) { //xxx | xxx\r
    let filters = exp.split('|')\r
    let expression = filters.shift().trim()\r
\r
    let i\r
    if (filters) {\r
        for (i = 0; i < `,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">export function parseFilters(exp) { //xxx | xxx
    let filters = exp.split('|')
    let expression = filters.shift().trim()

    let i
    if (filters) {
        for (i = 0; i &lt; filters.length; i++) {
            expression = wrapFilter(expression, filters[i].trim())
        }
    }
    return expression
}

function wrapFilter(exp, filter) { //\u5982\u679C\u5305\u542B\u8BF4\u660E\u8FC7\u6EE4\u5668\u643A\u5E26\u53C2\u6570
    const i = filter.indexof('(')

    if (i &lt; 0) {
        //_f:resolveFilter
        return \`_f(&quot;\${filter}&quot;)(\${exp})\`
    } else {
        const name = filter.slice(0, i)
        const args = filter.slice(i + 1)
        return \`_f(&quot;\${name}&quot;)(\${exp},\${args})\`
    }
}

//\u6D4B\u8BD5
parseFilters(\`message | capitalize\`)
    //_f(&quot;capitalize&quot;)(message)

parseFilters(\`message | filterA | filterB\`)
    //_f(&quot;filterB&quot;)(_f(&quot;filterA&quot;)(message))

parseFilters(\`message | filterA('arg1',arg2))\`)
    //_f(&quot;filterA&quot;)(message,'arg1',arg2)
</code></pre>
`},{index:[],path:"/posts_vue/\u6DF1\u5165\u6D45\u51FAvue_data.html",title:"\u6DF1\u5165\u6D45\u51FAvue.js\u7B14\u8BB0 _data",date:"2022-06-01",fontNum:1751,description:`javascript\r
function initData(vm) {\r
    let data = vm.$options.data\r
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}\r
    if (!isPlainObject(data)) {\r
        dat`,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">function initData(vm) {
    let data = vm.$options.data
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}
    if (!isPlainObject(data)) {
        data = {}
        processEnvNODE_ENV !== 'production' &amp;&amp; warn('data functions should return an object:\\n' +
            'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm)
    }
    //\u5C06data\u4EE3\u7406\u5230vue.js\u5B9E\u4F8B\u4E0A
    const keys = Object.keys(data)
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    while (i--) {
        const key = keys[i]
        if (processEnvNODE_ENV !== 'production') {
            if (methods &amp;&amp; hasOwn(methods, key)) {
                warn(\`Method &quot;\${key}&quot; has already been defined as a data property.\`, vm)
            }
        }
        if (props, hasOwn(props, key)) {
            processEnvNODE_ENV !== 'production' &amp;&amp; warn(\`The data property &quot;\${key}&quot; is already declared as a prop.\` +
                \`Use prop default value instead\`, vm)
        } else if (!isReserved(key)) {
            //proxy \u51FD\u6570\u7684\u4F5C\u7528 \u662F\u5728\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E0A\u8BBE\u7F6E\u4E00\u4E2A\u5C5E\u6027\u540D\u4E3A\u5E26\u4E09\u4E2A\u53C2\u6570\u7684\u5C5E\u6027
            //\u8FD9\u4E2A\u5C5E\u6027\u7684\u4FEE\u6539\u548C\u83B7\u53D6\u64CD\u4F5C\u5B9E\u9645\u4E0A\u9488\u5BF9\u7684\u662F\u4E0E\u7B2C\u4E8C\u4E2A\u53C2\u6570\u76F8\u540C\u5C5E\u6027\u540D\u7684\u5C5E\u6027
            proxy(vm, \`_data\`, key)
        }
    }

    observe(data, true /*asRootData*/ )

}

const sharedPropertyDefinition = {
    enumerable: true,
    configureable: true,
    get: noop,
    set: noop
}

export function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
    }

    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}
</code></pre>
`},{index:[],path:"/posts_vue/\u6DF1\u5165\u6D45\u51FAvue_methods.html",title:"\u6DF1\u5165\u6D45\u51FAvue.js\u7B14\u8BB0 _methods",date:"2022-06-01",fontNum:1277,description:`\r
javascript\r
//\u521D\u59CB\u5316methods \u5FAA\u73AF\u9009\u9879\u4E2D\u7684methods\u5BF9\u8C61 \u5C06\u6BCF\u4E00\u4E2A\u5C5E\u6027\u4F9D\u6B21\u6302\u5728\u5230vm\u4E0A\u5373\u53EF\r
function initMethods(vm, methods) {\r
    //props \u7528\u6765\u5224\u65AD methods \u4E2D\u7684\u65B9\u6CD5 \u662F\u5426\u548Cprops\u53D1\u751F\u4E86\u91CD\u590D\r
    const props = vm.$options.props\r
    for (const ke`,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u521D\u59CB\u5316methods \u5FAA\u73AF\u9009\u9879\u4E2D\u7684methods\u5BF9\u8C61 \u5C06\u6BCF\u4E00\u4E2A\u5C5E\u6027\u4F9D\u6B21\u6302\u5728\u5230vm\u4E0A\u5373\u53EF
function initMethods(vm, methods) {
    //props \u7528\u6765\u5224\u65AD methods \u4E2D\u7684\u65B9\u6CD5 \u662F\u5426\u548Cprops\u53D1\u751F\u4E86\u91CD\u590D
    const props = vm.$options.props
    for (const key in methods) {
        if (processEnvNODE_ENV !== 'production') {
            //\u5F53\u67D0\u4E2A\u65B9\u6CD5\u53EA\u6709key\u6CA1\u6709value\u65F6 \u4F1A\u53D1\u51FA\u8B66\u544A
            if (methods[key] == null) {
                warn(
                    \`Method &quot;\${key}&quot; has an undefined value in the component definition.\` + \`Did you reference the function correctly?\`, vm
                )
            }

            if (props &amp;&amp; hasOwn(props, key)) {
                warn(
                    \`Method &quot;\${key}&quot; has already been defined as a prop.\`, vm
                )
            }
            //\u5982\u679Cmethods\u4E2D\u7684\u67D0\u4E2A\u65B9\u6CD5\u5DF2\u7ECF\u5B58\u5728\u4E8Evm \u4E14\u65B9\u6CD5\u662F\u4EE5$\u6216\u8005_\u5F00\u5934\u7684
            if ((key in vm) &amp;&amp; isReserved(key)) {
                warn(
                    \`Method &quot;\${key}&quot; conflicts with an existing Vue instance method.\` + \`Avoid defining component methods that start with _ or $.\`
                )
            }
        }
        //\u5C06\u65B9\u6CD5\u8D4B\u503C\u5230vm\u4E2D \u5224\u65ADmethods[key]\u662F\u5426\u5B58\u5728 \u5982\u679C\u4E0D\u5B58\u5728 \u5219\u5C06noop\u8D4B\u503C\u5230vm[key]\u4E2D \u5982\u679C\u5B58\u5728\u5219\u5C06\u8BE5\u65B9\u6CD5\u901A\u8FC7bind\u6539\u5199\u4ED6\u7684this\u540E \u518D\u8D4B\u503C\u5230vm[key]\u4E2D
        //\u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7vm.x\u8BBF\u95EE\u5230methods\u4E2D\u7684x\u65B9\u6CD5
        vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
    }
}
</code></pre>
`},{index:[],path:"/posts_vue/\u6DF1\u5165\u6D45\u51FAvue_props.html",title:"\u6DF1\u5165\u6D45\u51FAvue.js\u7B14\u8BB0 _props",date:"2022-06-01",fontNum:6511,description:`\r
javascript\r
function normalizeProps(options, vm) {\r
    //\u83B7\u53D6props\r
    const props = options.props\r
    if (!props) {\r
        return\r
    }\r
    const res = {}\r
    let i, val, name\r
\r
    //\u5224\u65ADp`,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">function normalizeProps(options, vm) {
    //\u83B7\u53D6props
    const props = options.props
    if (!props) {
        return
    }
    const res = {}
    let i, val, name

    //\u5224\u65ADprops\u662F\u5426\u662F\u6570\u7EC4
    if (Array.isArray(props)) {
        i = props.length
        while (i--) {
            val = props[i]
                //props \u6570\u7EC4\u4E2D\u503C\u5C5E\u6027\u4E3A string
            if (typeof val === 'string') {
                name = camelize(val)
                res[name] = { type: null }
            } else if (processEnvNODE_ENV !== 'production') {
                warn('props must be strings when using array syntax')
            }
        }
        //check props is typeof object
    } else if (isPlainObject(props)) {
        for (const key in props) {
            val = props[key]

            //\u9A7C\u5CF0\u5316
            name = camelize(key)
            res[name] = isPlainObject(val) ? val : { type: val }
        }
    } else if (processEnvNODE_ENV !== 'production') {
        warn(\`
Invalid value
for option &quot;props&quot;: expected an Array or an Object, \` + \`
but got $ { toRawType(props) }.
\`, vm)
    }

    options.props = res
}
//\u521D\u59CB\u5316
function initProps(vm, propsOptions) {
    //vm, propsOptions vue \u5B9E\u4F8B\u548C\u89C4\u683C\u5316\u4E4B\u540E\u7684props

    //propsData\u4E2D\u4FDD\u5B58\u7684\u662F\u901A\u8FC7\u7236\u7EC4\u4EF6\u4F20\u5165\u6216\u7528\u6237\u901A\u8FC7propsData\u4F20\u5165\u7684\u771F\u5B9E\u7684props\u6570\u636E
    const propsData = vm.$options.propsData || {}

    //\u53D8\u91CFprops\u662F\u6307\u5411vm._props\u7684\u6307\u9488 \u6240\u6709\u8BBE\u7F6E\u5230props\u53D8\u91CF\u4E2D\u7684\u5C5E\u6027\u6700\u7EC8\u90FD\u4F1A\u4FDD\u5B58\u5230vm._props\u4E2D
    const props = vm._props = {}

    // \u7F13\u5B58 props\u7684key \u53D8\u91CFkeys\u662F\u6307\u5411vm.$options._propKeys\u7684\u6307\u9488 \u5176\u4F5C\u7528\u662F\u7F13\u5B58props\u5BF9\u8C61\u4E2D\u7684key
    //\u5C06\u6765\u66F4\u65B0props\u65F6\u53EA\u9700\u8981\u904D\u5386vm.$options._propKeys\u6570\u7EC4\u5373\u53EF\u5F97\u5230\u6240\u6709props\u7684key
    const keys = vm.$options._propKeys = []

    //\u53D8\u91CFisRoot \u7684\u4F5C\u7528\u662F\u5224\u65AD\u5F53\u524D\u7EC4\u4EF6\u662F\u5426\u662F\u6839\u7EC4\u4EF6
    const isRoot = !vm.$parent

    //root \u5B9E\u4F8B\u7684props\u5C5E\u6027\u5E94\u8BE5\u88AB\u8F6C\u6362\u6210\u54CD\u5E94\u6570\u636E
    if (!isRoot) {
        //\u5982\u679C\u4E0D\u662F\u6839\u7EC4\u4EF6\u5C31\u4E0D\u9700\u8981\u5C06props\u6570\u636E\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F\u6570\u636E
        //toggleObserving \u51FD\u6570\u7684\u4F5C\u7528\u662F\u786E\u5B9A\u5E76\u63A7\u5236defineReactive\u51FD\u6570\u8C03\u7528\u65F6\u6240\u4F20\u5165\u7684value\u53C2\u6570\u662F\u5426\u9700\u8981\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F
        //toggleObserving\u662F\u4E00\u4E2A\u95ED\u5305\u51FD\u6570
        //\u6240\u4EE5\u901A\u8FC7\u8C03\u7528\u4ED6\u5E76\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\u6765\u63A7\u5236 observer/index.js\u6587\u4EF6\u7684\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF shouldObserve 
        //\u8FD9\u6837\u5F53\u6570\u636E\u5C06\u8981\u88AB\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F\u5341\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53D8\u91CFshouldObserve\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u5C06\u6570\u636E\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F
        toggleObserving(false)
    }
    //\u901A\u8FC7 \u8C03\u7528validateProp \u51FD\u6570\u5C06props\u6570\u636E\u901A\u8FC7defineReactive \u51FD\u6570\u8BBE\u7F6E\u5230vm._props\u4E2D
    for (const key in propsOptions) {
        keys.push(key)
        const value = validateProp(key, propsOptions, propsData, vm)
        defineReactive(props, key, value)

        //\u5224\u65ADkey\u662F\u5426\u5728vm\u4E0A\u5B58\u5728 \u4E0D\u5B58\u5728 \u5219\u8C03\u7528proxy \u5728vm\u4E0A\u8BBE\u7F6E\u4E00\u4E2A\u4EE5key\u4E3A\u5C5E\u6027\u7684\u4EE3\u7406 \u5F53\u4F7F\u7528vm[key]\u8BBF\u95EE\u6570\u636E\u65F6\u5176\u5B9E\u8BBF\u95EE\u7684\u662Fvm._props[key]
        if (!(key in vm)) {
            proxy(vm, \`
props \`, key)
        }
    }
    toggleObserving(true)

}
//validateProp\u83B7\u53D6props\u5185\u5BB9
//validateProp \u51FD\u6570\u63A5\u65364\u4E2A\u53C2\u6570 
//key propOptions\u4E2D\u7684\u5C5E\u6027\u540D 
//propOptions\u5B50\u7EC4\u4EF6\u7528\u6237\u8BBE\u7F6E\u7684props\u9009\u9879 
//propsData\u7236\u7EC4\u4EF6\u6216\u6216\u7528\u6237\u63D0\u4F9B\u7684props\u6570\u636E 
//vm vue.js\u5B9E\u4F8B\u4E0A\u4E0B\u6587 this\u7684\u522B\u540D
export function validateProp(key, propOptions, propsData, vm) {
    //prop\u4FDD\u5B58\u7684\u5185\u5BB9\u662F\u5F53\u524D\u8FD9\u4E2Akey\u7684prop\u9009\u9879
    const prop = propOptions[key]

    //absent \u8868\u793A\u5F53\u524D\u7684key\u5728 \u7528\u6237\u63D0\u4F9B\u7684 props \u9009\u9879\u662F\u5426\u5B58\u5728
    const absent = !hasOwn(propsData, key)

    //\u8868\u793A\u4F7F\u7528\u5F53\u524D\u8FD9\u4E2Akey\u5728\u7528\u6237\u63D0\u4F9B\u7684props\u9009\u9879\u4E2D\u83B7\u53D6\u7684\u6570\u636E
    let value = propsData[key]

    //\u5904\u7406boolen \u7C7B\u578B\u7684props(\u7279\u6B8A\u60C5\u51B5)
    //\u5E03\u5C14\u503C\u7684\u60C5\u51B5\u4E0B\u6709\u4E24\u79CD\u989D\u5916\u7684\u573A\u666F\u8981\u5904\u7406
    //\u4E00\u79CD\u60C5\u51B5\u4E0B\u662Fkey\u4E0D\u5B58\u5728\u7684\u65F6\u5019 \u4E5F\u5C31\u662F\u8BF4\u7236\u7EC4\u4EF6\u6216\u8005\u7528\u6237\u5E76\u6CA1\u6709\u63D0\u4F9B\u8FD9\u4E2A\u6570\u636E
    //\u5E76\u4E14props\u4E2D\u4E5F\u6CA1\u8BBE\u7F6E\u9ED8\u8BA4\u503C \u90A3\u4E48\u8FD9\u65F6\u5019\u5C06value\u8BBE\u7F6E\u6210false 
    //\u53E6\u4E00\u79CD\u60C5\u51B5\u662Fkey\u5B58\u5728\u4F46value\u662F\u7A7A\u5B57\u7B26\u4E32\u6216\u8005value\u4E0Ekey\u76F8\u7B49
    //\u8FD9\u91CC\u7684key = value \u5305\u542Ba = 'a' \u548C userName='user-name'
    //\u5305\u542B\u4EE5\u4E0B\u5F62\u5F0F
    //&lt;child name&gt;&lt;/child&gt;
    //&lt;child name='name'&gt;&lt;/child&gt;
    //&lt;child userName='user-name'&gt;&lt;/child&gt; 
    //&lt;child user-name='user-name'&gt;&lt;/child&gt; 
    //hyphenate\u4F1A\u5C06key\u8FDB\u884C\u9A7C\u5CF0\u8F6C\u6362 userName \u8F6C\u6362\u4E3A user-name
    //\u9664\u4E86\u5E03\u5C14\u503C\u9700\u8981\u7279\u6B8A\u5904\u7406\u4E4B\u5916\u5176\u4ED6\u7C7B\u578B\u53EA\u6709\u4E00\u79CD\u60C5\u51B5
    if (isType(Boolean, prop.type)) {
        if (absent &amp;&amp; !hasOwn(prop, 'default')) {
            value = false
        } else if (!isType(String, prop.type) &amp;&amp; (value === '' || value === hyphenate(key))) {
            value = true
        }
    }

    //\u68C0\u67E5\u9ED8\u8BA4\u503C  \u5982\u679C\u5B50\u7EC4\u4EF6\u8BBE\u7F6E\u7684props \u5728props\u4E2D\u5E76\u4E0D\u5B58\u5728\u8FD9\u4E2A\u65F6\u5019\u5C31\u4F1A\u7528\u5230\u9ED8\u8BA4\u503C
    if (value === undefined) {
        //getPropDefaultValue\u83B7\u53D6prop\u7684\u9ED8\u8BA4\u503C observe\u51FD\u6570\u5C06\u5176\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F
        value = getPropDefaultValue(vm, prop, key)

        //\u56E0\u4E3A\u9ED8\u8BA4\u503C\u662F\u65B0\u6570\u636E \u6240\u4EE5\u9700\u8981\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F
        const prevShouldConvert = observerState.shouldConvert
        observerState.shouldConvert = true //\u51B3\u5B9A\u4E86\u662F\u5426\u5C06\u5176\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F
        observe(value)
        observerState.shouldConvert = prevShouldConvert //\u5C06\u72B6\u6001\u6062\u590D\u6210\u6700\u521D\u7684\u72B6\u6001
    }

    // if (value === undefined) {
    //     value = getPropDefaultValue(vm, prop, key)
    //     const prevShouldConvert = shouldObserve
    //     toggleObserving(true) //\u51B3\u5B9A\u4E86\u662F\u5426\u5C06\u5176\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F
    //     observe(value)
    //     toggleObserving(preShouldConvert) //\u5C06\u72B6\u6001\u6062\u590D\u6210\u6700\u521D\u7684\u72B6\u6001
    // }
    if (processEnvNODE_ENV !== 'production') {
        assertProp(prop, key, value, vm, absent) //\u65AD\u8A00prop\u662F\u5426\u6709\u6548 \u4F5C\u7528\u5F53prop\u9A8C\u8BC1\u5931\u8D25\u7684\u65F6\u5019\u4F1A\u5728\u63A7\u5236\u53F0\u4EA7\u751F\u8B66\u544A
    }
    return value
}
//assertProp\u7684\u4F5C\u7528\u5F53prop\u9A8C\u8BC1\u5931\u8D25\u7684\u65F6\u5019\u5728\u975E\u751F\u4EA7\u73AF\u5883\u4E0B vue.js\u4F1A\u4EA7\u751F\u4E00\u4E2A\u8B66\u544A
function assertProp(prop, name, value, vm, absent) {
    //prop prop\u9009\u9879 \uFF0Cname props\u4E2Dprop\u9009\u9879\u7684key \uFF0Cvalue prop\u6570\u636E(propData) \uFF0Cvm\u4E0A\u4E0B\u6587(this) \uFF0Cabsent prop\u6570\u636E\u4E2D\u4E0D\u5B58\u5728key\u5C5E\u6027

    //\u8BBE\u7F6E\u5FC5\u586B\u4E14\u8BE5\u6570\u636E\u4E0D\u5B58\u5728
    if (prop.required &amp;&amp; absent) {
        warn(
            'Missing required prop:&quot;' + name + '&quot;',
            vm
        )
        return
    }
    //\u6CA1\u6709\u8BBE\u7F6E\u5FC5\u586B\u4E14\u6570\u636E\u4E0D\u5B58\u5728
    if (value == null &amp;&amp; !prop.required) {
        return
    }
    //prop\u7684type
    let type = prop.type

    //valid \u8868\u793A\u662F\u5426\u6821\u9A8C\u6210\u529F
    let valid = !type || type === true

    //\u901A\u5E38\u60C5\u51B5\u4E0Btype\u662F\u4E00\u4E2A\u539F\u751F\u6784\u9020\u51FD\u6570 \u6216\u4E00\u4E2A\u6570\u7EC4 \u6216\u8005\u6CA1\u6709\u63D0\u4F9B

    //\u5982\u679C\u7528\u6237\u6CA1\u6709\u8BBE\u7F6Etype type = ture

    //expectedTypes\u4FDD\u5B58type \u5217\u8868
    const expectedTypes = []
    if (type) {
        if (!Array.isArray(type)) {
            type = [type]
        }
        //type\u5217\u8868\u4E2D\u53EA\u8981\u6709\u4E00\u4E2A\u6821\u9A8C\u6210\u529F\u5FAA\u73AF\u5C31\u7ED3\u675F\u8BA4\u4E3A\u662F\u6210\u529F
        for (let i = 0; i &lt; type.length &amp;&amp; !valid; i++) {
            //assertType \u8FD4\u56DE {} -----&gt; {valid:true, expectedType:'Boolen'} \u524D\u8005\u8868\u793A\u6821\u9A8C\u6210\u529F \u540E\u8005\u8868\u793A\u7C7B\u578B

            //\u5C06\u7C7B\u578B\u6DFB\u52A0\u5230expectedTypes \u5E76\u5C06valid \u53D8\u91CF\u7F6E\u4E3A assertedType.valid
            const assertedType = assertType(value, type[i])
            expectedTypes.push(assertedType.expectedType || '')

            //\u5FAA\u73AF\u7ED3\u675F valid \u4E3Ature\u8BF4\u660E\u6821\u9A8C\u6210\u529F
            valid = assertedType.valid
        }
    }
    if (!valid) {
        //capitalize\u4F5C\u7528\u662F\u5C06\u5B57\u7B26\u4E32\u7684\u4E00\u4E2A\u5B57\u6BCD\u6539\u6210\u5927\u5199
        warn(
            \`
Invalid prop: type check faild
for prop &quot;\${name}&quot;
\` +
            \`
Expected $ { expectedTypes.map(capitalize).join(', ') }
\` +
            \`, got $ { toRawType(value) }
\`
        )
        return
    }
    //\u5982\u679C\u7528\u6237\u8BBE\u7F6Evalidator\u5C31\u6267\u884C
    const validator = prop.validator
    if (validator) {
        if (!validator(value)) {
            warn(
                'Invalid prop: custom validator check faild for prop &quot;' + name + '&quot;.', vm
            )
        }
    }
}
</code></pre>
`},{index:[],path:"/posts_vue/\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570.html",title:"\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570",date:"2022-05-29",fontNum:181,description:`\r
\r
@input = 'inputValue'\r
limitInput(inputValue) {\r
    this.formData.xxx = inputValue.replace(/[^0-9]/g, '')\r
    this.formData.yyy = inputValue.replace(/[^0-9]/g, '')\r
},\r
`,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code>@input = 'inputValue'
limitInput(inputValue) {
    this.formData.xxx = inputValue.replace(/[^0-9]/g, '')
    this.formData.yyy = inputValue.replace(/[^0-9]/g, '')
},
</code></pre>
`},{index:["<h3>\u5B9E\u4F8B\u5316vue.js</h3>"],path:"/posts_vue/\u6DF1\u5165\u6D45\u51FAvuejs2.html",title:"\u6DF1\u5165\u6D45\u51FAvue.js\u7B14\u8BB0",date:"2022-05-28",fontNum:270,description:`\r
 \u5B9E\u4F8B\u5316vue.js\r
\u5728\u5B9E\u4F8B\u5316vue.js\u65F6\u4F1A\u6709\u4E00\u4E2A\u521D\u59CB\u5316\u6D41\u7A0B\u3001\u4F1A\u5411vue.js\u5B9E\u4F8B\u4E0A\u65B0\u589E\u4E00\u4E9B\u65B9\u6CD5\r
 this.$otions \u662F\u5176\u4E2D\u4E4B\u4E00\r
 \u4ED6\u53EF\u4EE5\u8BBF\u95EE\u5230\u5B9E\u4F8B\u5316vue.js \u65F6\u7528\u6237\u8BBE\u7F6E\u7684\u53C2\u6570 eg: template render\r
\r
 \u5982\u679C\u5B9E\u4F8B\u5316vue \u65F6\u7ED9\u51FArender \u9009\u9879  \u90A3\u4E48template\u662F\u65E0\u6548\u7684 \r
 \u56E0\u4E3A\u4E0D\u4F1A\u8FDB\u5165\u6A21\u677F\u7F16\u8BD1\u6D41\u7A0B \u800C\u662F\u76F4\u63A5\u4F7F\u7528render \u9009\u9879\u4E2D\u63D0\u4F9B`,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u5B9E\u4F8B\u5316vue.js</h3>
<p>\u5728\u5B9E\u4F8B\u5316vue.js\u65F6\u4F1A\u6709\u4E00\u4E2A\u521D\u59CB\u5316\u6D41\u7A0B\u3001\u4F1A\u5411vue.js\u5B9E\u4F8B\u4E0A\u65B0\u589E\u4E00\u4E9B\u65B9\u6CD5
this.$otions \u662F\u5176\u4E2D\u4E4B\u4E00
\u4ED6\u53EF\u4EE5\u8BBF\u95EE\u5230\u5B9E\u4F8B\u5316vue.js \u65F6\u7528\u6237\u8BBE\u7F6E\u7684\u53C2\u6570 eg: template render</p>
<p>\u5982\u679C\u5B9E\u4F8B\u5316vue \u65F6\u7ED9\u51FArender \u9009\u9879  \u90A3\u4E48template\u662F\u65E0\u6548\u7684
\u56E0\u4E3A\u4E0D\u4F1A\u8FDB\u5165\u6A21\u677F\u7F16\u8BD1\u6D41\u7A0B \u800C\u662F\u76F4\u63A5\u4F7F\u7528render \u9009\u9879\u4E2D\u63D0\u4F9B\u7684\u51FD\u6570</p>
<p>vue\u5B98\u65B9\uFF1A \u5982\u679C\u6CA1\u6709render \u90A3\u4E48\u5C31\u9700\u8981\u83B7\u53D6\u6A21\u677F\u5E76\u5C06\u6A21\u677F\u7F16\u8BD1\u6210\u6E32\u67D3\u51FD\u6570 \u5373render \u51FD\u6570\u8D4B\u503C\u7ED9render\u9009\u9879</p>
`},{index:[],path:"/posts_vue/\u81EA\u5B9A\u4E49\u6307\u4EE4.html",title:"vue\u81EA\u5B9A\u4E49\u6307\u4EE4",date:"2022-05-28",fontNum:57,description:`vue \u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6 \u4EE5\u89E3\u51B3\u4ECD\u7136\u9700\u8981\u901A\u8FC7\u64CD\u4F5C\u666E\u901Adom \u8FDB\u884C\u7684\u5E95\u5C42\u64CD\u4F5C\r
\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u4E8E\u89E3\u51B3\u9700\u8981dom\u64CD\u4F5C\u7684\u884C\u4E3A`,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>vue \u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6 \u4EE5\u89E3\u51B3\u4ECD\u7136\u9700\u8981\u901A\u8FC7\u64CD\u4F5C\u666E\u901Adom \u8FDB\u884C\u7684\u5E95\u5C42\u64CD\u4F5C
\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u4E8E\u89E3\u51B3\u9700\u8981dom\u64CD\u4F5C\u7684\u884C\u4E3A</p>
`},{index:["<h3>\u4E0B\u6B21dom\u66F4\u65B0\u4E4B\u540E\u6267\u884C\u662F\u6307</h3>","<h3>\u4E3A\u4EC0\u4E48vue.js\u4F7F\u7528\u5F02\u6B65\u66F4\u65B0\u961F\u5217</h3>","<h3>\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u65B9\u6CD5</h3>","<h3>\u603B\u7ED3</h3>","<h3>\u4E8B\u4EF6\u5FAA\u73AF</h3>","<h3>\u4E0B\u6B21DOM\u66F4\u65B0\u5468\u671F</h3>","<h3>\u4F18\u5148\u7EA7</h3>","<h3>\u603B\u7ED3</h3>","<h3>\u5B58\u50A8</h3>"],path:"/posts_vue/\u6DF1\u5165\u6D45\u51FAvuejs.html",title:"\u6DF1\u5165\u6D45\u51FAvue.js\u7B14\u8BB0",date:"2022-05-27",fontNum:1914,description:` \u4E0B\u6B21dom\u66F4\u65B0\u4E4B\u540E\u6267\u884C\u662F\u6307\r
\r
\u5728vue.js\u4E2D\u5F53\u72B6\u6001\u53D1\u751F\u53D8\u5316 watcher \u4F1A\u5F97\u5230\u901A\u77E5 \u7136\u540E\u89E6\u53D1\u865A\u62DFdom \u7684\u6E32\u67D3\u6D41\u7A0B\r
\u800Cwatch\u89E6\u53D1\u6E32\u67D3\u8FD9\u4E2A\u64CD\u4F5C\u5E76\u4E0D\u662F\u540C\u6B65\u7684 \u800C\u662F\u5F02\u6B65\u7684\r
vue.js \u4E2D\u6709\u4E00\u4E2A\u961F\u5217 \u6BCF\u5F53\u9700\u8981\u6E32\u67D3\u7684\u65F6\u5019 \u4F1A\u5C06watcher\u63A8\u9001\u5230\u8FD9\u4E2A\u961F\u5217\u4E2D\r
\u5728\u4E0B\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u518D\u8BA9watcher\u89E6\u53D1\u6E32\u67D3\u7684\u6D41\u7A0B\r
\r
 \u4E3A\u4EC0\u4E48vue.js\u4F7F\u7528\u5F02\u6B65\u66F4\u65B0\u961F\u5217\r
vue.js2.0`,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u4E0B\u6B21dom\u66F4\u65B0\u4E4B\u540E\u6267\u884C\u662F\u6307</h3>
<p>\u5728vue.js\u4E2D\u5F53\u72B6\u6001\u53D1\u751F\u53D8\u5316 watcher \u4F1A\u5F97\u5230\u901A\u77E5 \u7136\u540E\u89E6\u53D1\u865A\u62DFdom \u7684\u6E32\u67D3\u6D41\u7A0B
\u800Cwatch\u89E6\u53D1\u6E32\u67D3\u8FD9\u4E2A\u64CD\u4F5C\u5E76\u4E0D\u662F\u540C\u6B65\u7684 \u800C\u662F\u5F02\u6B65\u7684
vue.js \u4E2D\u6709\u4E00\u4E2A\u961F\u5217 \u6BCF\u5F53\u9700\u8981\u6E32\u67D3\u7684\u65F6\u5019 \u4F1A\u5C06watcher\u63A8\u9001\u5230\u8FD9\u4E2A\u961F\u5217\u4E2D
\u5728\u4E0B\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u518D\u8BA9watcher\u89E6\u53D1\u6E32\u67D3\u7684\u6D41\u7A0B</p>
<h3>\u4E3A\u4EC0\u4E48vue.js\u4F7F\u7528\u5F02\u6B65\u66F4\u65B0\u961F\u5217</h3>
<p>vue.js2.0\u5F00\u59CB\u4F7F\u7528\u865A\u62DFdom\u8FDB\u884C\u6E32\u67D3
\u53D8\u5316\u4FA6\u6D4B\u7684\u901A\u77E5\u53D1\u9001\u5230\u7EC4\u4EF6
\u7EC4\u4EF6\u5185\u7684\u6240\u6709\u72B6\u6001\u7684\u53D8\u5316\u90FD\u4F1A\u901A\u77E5\u5230\u4E00\u4E2Awatcher
\u7136\u540E\u865A\u62DFdom\u4F1A\u5BF9\u6574\u4E2A\u7EC4\u4EF6\u8FDB\u884C\u6BD4\u5BF9\u5E76\u66F4\u6539dom</p>
<p>\u5982\u679C\u540C\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u6709\u4E24\u4E2A\u6570\u636E\u53D1\u751F\u53D8\u5316\u7EC4\u4EF6watcher\u4F1A\u6536\u5230\u4E24\u4EFD\u901A\u77E5
\u865A\u62DFdom\u4F1A\u5BF9\u6574\u4E2A\u7EC4\u4EF6\u8FDB\u884C\u6E32\u67D3\u6240\u4EE5\u53EA\u9700\u8981\u7B49\u591A\u6709\u72B6\u6001\u90FD\u4FEE\u6539\u5B8C\u6BD5\u540E
\u4E00\u6B21\u6027\u5C06\u6574\u4E2A\u7EC4\u4EF6\u7684dom\u6E32\u67D3\u5230\u6700\u65B0\u5373\u53EF</p>
<h3>\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u65B9\u6CD5</h3>
<p>vue.js\u5B9E\u73B0\u65B9\u5F0F\u662F\u5C06\u6536\u5230\u901A\u77E5\u7684watcher\u5B9E\u4F8B\u6DFB\u52A0\u5230\u961F\u5217\u7F13\u5B58\u8D77\u6765
\u5E76\u5728\u6DFB\u52A0\u5230\u961F\u5217\u4E4B\u524D\u68C0\u67E5\u5176\u4E2D\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u76F8\u540C\u7684watcher
\u53EA\u6709\u5728\u4E0D\u5B58\u5728\u7684\u65F6\u5019\u624D\u5C06watcher\u5B9E\u4F8B\u6DFB\u52A0\u5230\u961F\u5217\u4E2D
\u7136\u540E\u518D\u4E0B\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u4E2D
vue.js\u4F1A\u8BA9\u961F\u5217\u4E2D\u7684watcher\u89E6\u53D1\u6E32\u67D3\u6D41\u7A0B\u5E76\u4E14\u6E05\u7A7A\u961F\u5217
\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u7ED9\u5373\u4F7F\u518D\u540C\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u6709\u4E24\u4E2A\u72B6\u6001\u53D1\u751F\u53D8\u5316watcher\u6700\u540E\u4E5F\u53EA\u6267\u884C\u4E00\u6B21\u6E32\u67D3\u6D41\u7A0B</p>
<h3>\u603B\u7ED3</h3>
<p>\u72B6\u6001\u6539\u53D8 ----&gt; \u901A\u77E5watcher ----&gt; \u5F02\u6B65\u89E6\u53D1\u865A\u62DFdom\u6E32\u67D3
vue.js2.x \u72B6\u6001\u6539\u53D8 ----&gt; \u901A\u77E5\u7EC4\u4EF6 ----&gt; \u901A\u77E5watcher ----&gt; \u961F\u5217\u7F13\u5B58watcher(\u4FDD\u8BC1\u552F\u4E00) ----&gt; \u4E0B\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AFvue\u89E6\u53D1watcher\u5E76\u6E05\u7A7A\u961F\u5217 ----&gt; \u89E6\u53D1\u865A\u62DFdom\u6E32\u67D3</p>
<h3>\u4E8B\u4EF6\u5FAA\u73AF \u5B8F\u4EFB\u52A1 \u5FAE\u4EFB\u52A1</h3>
<p>\u5FAE\u4EFB\u52A1
Promise.then
MutationObserver
Object.observe
process.nextTick</p>
<p>\u5B8F\u4EFB\u52A1
setTimeout
setInterval
setImmediate
messageChannel
requestAnimationFrame
i/o
ui\u4EA4\u4E92\u4E8B\u4EF6</p>
<h3>\u4E0B\u6B21DOM\u66F4\u65B0\u5468\u671F</h3>
<p>\u4E0B\u6B21dom\u66F4\u65B0\u5468\u671F\u662F\u6307\u5176\u5B9E\u662F\u6307\u4E0B\u6B21\u5FAE\u4EFB\u52A1\u6267\u884C\u65F6\u66F4\u65B0dom
vm.$nextTick \u5176\u5B9E\u65F6\u5C06\u56DE\u8C03\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u4E2D \u53EA\u6709\u518D\u7279\u6B8A\u60C5\u51B5\u4E0B\u624D\u4F1A\u964D\u7EA7\u6210\u4E3A\u5B8F\u4EFB\u52A1
\u9ED8\u8BA4\u4F1A\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u4E2D
\u56E0\u6B64\u5982\u679C\u4F7F\u7528vm.$nextTick\u6765\u83B7\u53D6\u66F4\u65B0\u540E\u7684dom\u5219\u9700\u8981\u6CE8\u610F\u987A\u5E8F\u7684\u95EE\u9898
\u4E0D\u8BBA\u662F\u66F4\u65B0dom\u7684\u56DE\u8C03\u8FD8\u662F\u4F7F\u7528vm.$nextTick\u6CE8\u518C\u7684\u56DE\u8C03\u90FD\u662F\u5728\u5411\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u6DFB\u52A0\u4EFB\u52A1
\u6240\u4EE5\u54EA\u4E2A\u4EFB\u52A1\u5148\u6DFB\u52A0\u5230\u961F\u5217\u4E2D\u5C31\u5148\u6267\u884C\u54EA\u4E2A\u4EFB\u52A1</p>
<p>\u4E8B\u5B9E\u4E0A\u66F4\u65B0dom\u7684\u56DE\u8C03\u4E5F\u662F\u4F7F\u7528vm.$nextTick\u6765\u6CE8\u518C\u5230\u5FAE\u4EFB\u52A1\u4E2D</p>
<p>\u5982\u679C\u60F3\u5728 [vm.$nextTick] \u4E2D\u83B7\u53D6\u66F4\u65B0\u540E\u7684dom  \u5219\u4E00\u5B9A\u8981\u5728\u66F4\u6539\u6570\u636E\u7684\u540E\u9762\u4F7F\u7528[vm.$nexTick] \u6CE8\u518C\u56DE\u8C03</p>
<p>\u5982\u679C\u662F\u5148\u4F7F\u7528 [vm.$nextTick] \u6CE8\u518C\u56DE\u8C03 \u7136\u540E\u4FEE\u6539\u6570\u636E \u5219\u5728\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u5148\u6267\u884C\u4F7F\u7528</p>
<h3>\u4F18\u5148\u7EA7</h3>
<p>\u5728\u4E8B\u4EF6\u5FAA\u73AF\u4E2D \u5FC5\u987B\u5F53\u524D\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u4E8B\u4EF6\u90FD\u6267\u884C\u5B8C\u6210\u540E
\u624D\u4F1A\u4ECE\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u51FA\u4E00\u4E2A\u4E8B\u4EF6\u6267\u884C\u4E0B\u4E00\u8F6E
\u6240\u4EE5\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u673A\u4F18\u5148\u4E8E\u5411\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\u6DFB\u52A0\u7684\u4EFB\u52A1</p>
<p>\u4FEE\u6539\u6570\u636E\u4F1A\u9ED8\u8BA4\u5C06\u66F4\u65B0\u7684dom \u7684\u56DE\u8C03\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D
(\u66F4\u65B0dom\u7684\u56DE\u8C03\u662F\u5FAE\u4EFB\u52A1)</p>
<p>setTimeout \u5C5E\u4E8E\u5B8F\u4EFB\u52A1 \u4F7F\u7528setTimeout \u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u52A0\u5165\u5230\u5B8F\u4EFB\u52A1\u4E2D
\u5B8F\u4EFB\u52A1\u7684\u6267\u884C\u8981\u6BD4\u5FAE\u4EFB\u52A1\u665A
\u6240\u4EE5\u5373\u4F7F\u662F\u5148\u6CE8\u518C\u4E5F\u662F\u5148\u66F4\u65B0dom\u540E\u6267\u884CsetTimeout\u4E2D\u7684\u56DE\u8C03</p>
<h3>\u603B\u7ED3</h3>
<p>vm.$nextTick \u548C \u4FEE\u6539\u6570\u636E\u5BFC\u81F4\u7684dom\u66F4\u65B0\u540C\u5C5E\u4E8E \u5FAE\u4EFB\u52A1 \u6240\u4EE5vm.$nextTick \u8981\u5728\u66F4\u6539\u6570\u636E\u540E\u9762 \u6CE8\u518C\u56DE\u8C03
\u800CsetTimeout \u662F\u5B8F\u4EFB\u52A1\u4E00\u5B9A\u6162\u4E8E\u5FAE\u4EFB\u52A1\u6267\u884C \u6240\u4EE5\u65E0\u8BBA\u4E8E \u66F4\u6539\u6570\u636E\u524D\u540E\u8BBE\u7F6E\u90FD\u4F1A \u4E8Edom\u66F4\u65B0\u4E4B\u540E\u6267\u884C</p>
<h3>\u5B58\u50A8</h3>
<p>\u7531\u4E8Evm.$nextTick \u4F1A\u5C06\u56DE\u8C03\u6DFB\u52A0\u5230\u4EFB\u52A1\u961F\u5217\u4E2D\u5EF6\u8FDF\u6267\u884C
\u5728\u56DE\u8C03\u6267\u884C\u4E4B\u524D\u53CD\u590D\u8C03\u7528vm.$nextTick vue \u53EA\u4F1A\u5411\u4EFB\u52A1\u961F\u5217\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u4EFB\u52A1
vue.js \u5185\u90E8\u6709\u4E00\u4E2A\u5217\u8868\u5B58\u50A8vm.$nextTick \u53C2\u6570\u4E2D\u63D0\u4F9B\u7684\u56DE\u8C03
\u5728\u65B0\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u4E2D vm.$nextTick \u53EA\u4F1A\u5411\u4EFB\u52A1\u961F\u5217\u6DFB\u52A0\u4E00\u4E2A\u4EFB\u52A1
\u591A\u6B21\u4F7F\u7528vm.$nextTick\u53EA\u4F1A\u5C06\u56DE\u8C03\u6DFB\u52A0\u5230\u56DE\u8C03\u5217\u8868\u4E2D\u7F13\u5B58\u8D77\u6765
\u5F53\u4EFB\u52A1\u89E6\u53D1\u65F6 \u4F9D\u6B21\u6267\u884C\u5217\u8868\u4E2D\u7684\u6240\u6709\u56DE\u8C03\u5E76\u6E05\u7A7A\u5217\u8868</p>
`},{index:["<h3>1xx</h3>","<h3>2xx</h3>","<h3>3xx</h3>","<h3>4xx</h3>","<h3>5xx</h3>"],path:"/posts_web/http\u72B6\u6001\u7801.html",title:"http\u72B6\u6001\u7801",date:"2022-05-27",fontNum:643,description:` 1xx\r
\r
1xx \u8868\u793A\u8BF7\u6C42\u8FD8\u5728\u8FDB\u884C\u4E2D\r
\r
\r
 2xx\r
\r
200 \u8BF7\u6C42\u6210\u529F\r
\r
\r
201 created \u5DF2\u521B\u5EFA \u521B\u5EFA\u7528\u6237\r
\r
\r
204 not content \u65E0\u5185\u5BB9\r
\r
\r
 3xx\r
\r
301 move permanently \u6C38\u4E45\u79FB\u52A8 \u8D44\u6E90\u6C38\u4E45\u66F4\u65B0\u4E86url\r
\r
\r
302 foun`,tags:["http"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>1xx</h3>
<pre><code>1xx \u8868\u793A\u8BF7\u6C42\u8FD8\u5728\u8FDB\u884C\u4E2D
</code></pre>
<h3>2xx</h3>
<pre><code>200 \u8BF7\u6C42\u6210\u529F
</code></pre>
<pre><code>201 created \u5DF2\u521B\u5EFA \u521B\u5EFA\u7528\u6237
</code></pre>
<pre><code>204 not content \u65E0\u5185\u5BB9
</code></pre>
<h3>3xx</h3>
<pre><code>301 move permanently \u6C38\u4E45\u79FB\u52A8 \u8D44\u6E90\u6C38\u4E45\u66F4\u65B0\u4E86url
</code></pre>
<pre><code>302 found \u4E34\u65F6\u79FB\u52A8 \u7ED9\u4F60\u4E34\u65F6url \u4E0B\u6B21\u8FD8\u5F97\u7528\u65E7\u5730\u5740
</code></pre>
<pre><code>304 not modified \u672A\u4FEE\u6539 \u6CA1\u6709\u8FC7\u671F\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58
</code></pre>
<h3>4xx</h3>
<pre><code>400 bad request \u8BED\u6CD5\u9519\u8BEF\u65E0\u6CD5\u7406\u89E3 \u4F20\u53C2\u9519\u8BEF
</code></pre>
<pre><code>401 unauthorized \u8EAB\u4EFD\u8BC6\u522B\u5931\u8D25 \u8EAB\u4EFD\u8BA4\u8BC1
</code></pre>
<pre><code>403 forbidden \u62D2\u7EDD \u6CA1\u6743\u9650
</code></pre>
<pre><code>404 notfound \u627E\u4E0D\u5230 \u8D44\u6E90\u8DEF\u5F84url \u9519\u8BEF
</code></pre>
<pre><code>409 conflict \u51B2\u7A81 \u7F16\u8F91\u51B2\u7A81\u4E86 \u65B0\u8001\u7248\u672C
</code></pre>
<h3>5xx</h3>
<pre><code>500 internal server error \u5185\u90E8\u9519\u8BEF (\u4E0D\u77E5\u9053\u4EC0\u4E48\u9519\u8BEF\u5148\u5E94\u4ED8\u4E00\u4E0B)
</code></pre>
<pre><code>502 bad gateway \u7F51\u5173\u9519\u8BEF \u7F51\u5173\u4ECE\u670D\u52A1\u5668\u62FF\u4E0D\u5230\u4E1C\u897F\u65E0\u6CD5\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF
</code></pre>
<pre><code>503 service unavailable \u670D\u52A1\u5668\u8D85\u8F7D\u6216\u8005\u7EF4\u62A4(\u5B95\u673A)
</code></pre>
`},{index:["<h3>path\u4E0Esvg</h3>"],path:"/posts_css/hover\u9009\u62E9\u54EA\u4E00\u4E2A\u5143\u7D20\u95EE\u9898.html",title:"hover\u9009\u62E9\u54EA\u4E00\u4E2A\u5143\u7D20\u95EE\u9898",date:"2022-05-02",fontNum:245,description:`\r
 path\u4E0Esvg\r
\r
\r
.myDiv :hover{//:hover\u524D\u6709\u7A7A\u683C\r
    background: black;\r
}\r
.myDiv:hover{//:hover\u524D\u6CA1\u6709\u7A7A\u683C\r
    background: black;\r
}\r
\r
\r
\u7B2C\u4E00\u79CD:hover\u9009\u62E9\u7684\u662F.myDiv\u7684\u6240\u6709\u5B50\u5143\u7D20\uFF0C\u800C\u7B2C\u4E8C\u79CD\u9009\u62E9\u7684\u662F.myDiv\u672C\u8EAB\u3002\r
\u7B2C\u4E00\u79CD\u4F1A\u5C06.myDiv\u6240`,tags:["css"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>path\u4E0Esvg</h3>
<pre><code>.myDiv :hover{//:hover\u524D\u6709\u7A7A\u683C
    background: black;
}
.myDiv:hover{//:hover\u524D\u6CA1\u6709\u7A7A\u683C
    background: black;
}
</code></pre>
<pre><code>\u7B2C\u4E00\u79CD:hover\u9009\u62E9\u7684\u662F.myDiv\u7684\u6240\u6709\u5B50\u5143\u7D20\uFF0C\u800C\u7B2C\u4E8C\u79CD\u9009\u62E9\u7684\u662F.myDiv\u672C\u8EAB\u3002
\u7B2C\u4E00\u79CD\u4F1A\u5C06.myDiv\u6240\u6709\u5B50\u5143\u7D20\u80CC\u666F\u8BBE\u4E3Ablack
\u7B2C\u4E8C\u79CD\u4F1A\u5C06.myDiv\u81EA\u5DF1\u7684\u80CC\u666F\u8BBE\u4E3Ablack
</code></pre>
`},{index:["<h3>\u7ED1\u5B9A\u6240\u6709\u9ED8\u8BA4\u5C5E\u6027\u548C\u76D1\u542C\u4E8B\u4EF6</h3>","<h3>\u5B89\u88C5</h3>","<h3>DragSelect.vue</h3>","<h3>\u4F7F\u7528\u7EC4\u4EF6</h3>"],path:"/posts_element_ui/el_select_drag.html",title:"element select tag \u62D6\u52A8",date:"2022-04-26",fontNum:2514,description:` \u7ED1\u5B9A\u6240\u6709\u9ED8\u8BA4\u5C5E\u6027\u548C\u76D1\u542C\u4E8B\u4EF6\r
\r
 v-bind="$attrs"\r
 v-on="$listeners"\r
\r
 \u5B89\u88C5 sortablejs \u529F\u80FD\u5F3A\u5927\u7684JavaScript \u62D6\u62FD\u5E93\r
\r
import Sortable from "sortablejs";\r
\r
 DragSelect.vue\r
javascript\r
<template>\r
 `,tags:["element"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u7ED1\u5B9A\u6240\u6709\u9ED8\u8BA4\u5C5E\u6027\u548C\u76D1\u542C\u4E8B\u4EF6</h3>
<pre><code> v-bind=&quot;$attrs&quot;
 v-on=&quot;$listeners&quot;
</code></pre>
<h3>\u5B89\u88C5 sortablejs \u529F\u80FD\u5F3A\u5927\u7684JavaScript \u62D6\u62FD\u5E93</h3>
<pre><code>import Sortable from &quot;sortablejs&quot;;
</code></pre>
<h3>DragSelect.vue</h3>
<pre><code class="language-javascript">&lt;template&gt;
  &lt;el-select
    ref=&quot;dragSelect&quot;
    v-model=&quot;selectVal&quot;
    v-bind=&quot;$attrs&quot; 
    class=&quot;drag-select&quot;
    multiple
    v-on=&quot;$listeners&quot;
  &gt;
    &lt;slot /&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
import Sortable from &quot;sortablejs&quot;;

export default {
  name: &quot;DragSelect&quot;,
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  computed: {
    selectVal: {
      get() {
        return [...this.value];
      },
      set(val) {
        this.$emit(&quot;input&quot;, [...val]);
      },
    },
  },
  mounted() {
    this.setSort();
  },
  methods: {
    setSort() {
      const el = this.$refs.dragSelect.$el.querySelectorAll(
        &quot;.el-select__tags &gt; span&quot;
      )[0];
      this.sortable = Sortable.create(el, {
        ghostClass: &quot;sortable-ghost&quot;,
        setData: function (dataTransfer) {
          dataTransfer.setData(&quot;Text&quot;, &quot;&quot;);
        },
        onEnd: (evt) =&gt; {
          const targetRow = this.value.splice(evt.oldIndex, 1)[0];
          this.value.splice(evt.newIndex, 0, targetRow);
        },
      });
    },
  },
};
&lt;/script&gt;

&lt;style scoped&gt;
::v-deep .drag-select .sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
::v-deep .drag-select .el-tag {
  cursor: pointer;
}
&lt;/style&gt;
</code></pre>
<h3>\u4F7F\u7528\u7EC4\u4EF6</h3>
<pre><code class="language-javascript">&lt;template&gt;
  &lt;div&gt;
    &lt;el-drag-select
      v-model=&quot;value&quot;
      style=&quot;width: 500px&quot;
      multiple
      placeholder=&quot;\u8BF7\u9009\u62E9&quot;
    &gt;
      &lt;el-option
        v-for=&quot;item in options&quot;
        :key=&quot;item.value&quot;
        :label=&quot;item.label&quot;
        :value=&quot;item.value&quot;
      /&gt;
    &lt;/el-drag-select&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import ElDragSelect from &quot;./DragSelect&quot;; 

export default {
  name: &quot;DragSelectDemo&quot;,
  components: { ElDragSelect },
  data() {
    return {
      value: [&quot;Apple&quot;, &quot;Banana&quot;, &quot;Orange&quot;],
      options: [
        {
          value: &quot;\u9009\u98791&quot;,
          label: &quot;\u9EC4\u91D1\u7CD5&quot;,
        },
        {
          value: &quot;\u9009\u98792&quot;,
          label: &quot;\u53CC\u76AE\u5976&quot;,
        },
        {
          value: &quot;\u9009\u98793&quot;,
          label: &quot;\u86B5\u4ED4\u714E&quot;,
        },
        {
          value: &quot;\u9009\u98794&quot;,
          label: &quot;\u9F99\u987B\u9762&quot;,
        },
        {
          value: &quot;\u9009\u98795&quot;,
          label: &quot;\u5317\u4EAC\u70E4\u9E2D&quot;,
        },
      ],
    };
  },
};
&lt;/script&gt;
</code></pre>
`},{index:["<h3>yarn</h3>"],path:"/posts_web/ARP.html",title:"\u6839\u636Eip\u67E5mac\u5730\u5740",date:"2022-04-25",fontNum:233,description:` yarn add node-arp\r
javascript\r
const arp = require('node-arp');\r
\r
arp.getMAC('192.168.0.1', function(err, mac) {\r
    if (!err) {\r
        console.log(mac);\r
    } else {\r
        console.log(`,tags:["DNS"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>yarn add node-arp</h3>
<pre><code class="language-javascript">const arp = require('node-arp');

arp.getMAC('192.168.0.1', function(err, mac) {
    if (!err) {
        console.log(mac);
    } else {
        console.log('mac is:', mac);
    }
});
</code></pre>
`},{index:["<h3>\u534F\u8BAE\u6808</h3>","<h3>Socket</h3>","<h3>TCP</h3>","<h3>IP</h3>","<h3>\u7F51\u5361\u9A71\u52A8</h3>","<h3>\u7F51\u5361</h3>"],path:"/posts_web/\u534F\u8BAE\u6808.html",title:"\u534F\u8BAE\u6808",date:"2022-04-25",fontNum:346,description:`\r
 \u534F\u8BAE\u6808\r
 Socket\r
\r
-- \u5E94\u7528\u7A0B\u5E8F\u4F1A\u8C03\u7528\u8C03\u7528Socket \u548C \u89E3\u6790\u5668\r
--- \u89E3\u6790\u5668\u5411DNS\u670D\u52A1\u5668\u53D1\u51FA\u67E5\u8BE2\r
\r
 TCP\r
\r
-- \u518D\u4E0B\u5C42\u662F\u534F\u8BAE\u6808\r
--- \u8D1F\u8D23\u6536\u53D1\u6570\u636E\u7684TCP \u548C UDP\r
--- TCP\u9002\u7528\u5E94\u7528\u7A0B\u5E8F UDP\u9002\u7528\u8F83\u77ED\u7684\u6570\u636E\u63A7\u5236\r
\r
 IP\r
\r
-- \u518D\u4E0B\u5C42IP\r
--- IP\u534F\u8BAE\u63A7\u5236\u7F51\u7EDC\u5305\u6536\u53D1\u64CD\u4F5C`,tags:["DNS"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u534F\u8BAE\u6808</h3>
<h3>Socket</h3>
<pre><code>-- \u5E94\u7528\u7A0B\u5E8F\u4F1A\u8C03\u7528\u8C03\u7528Socket \u548C \u89E3\u6790\u5668
--- \u89E3\u6790\u5668\u5411DNS\u670D\u52A1\u5668\u53D1\u51FA\u67E5\u8BE2
</code></pre>
<h3>TCP</h3>
<pre><code>-- \u518D\u4E0B\u5C42\u662F\u534F\u8BAE\u6808
--- \u8D1F\u8D23\u6536\u53D1\u6570\u636E\u7684TCP \u548C UDP
--- TCP\u9002\u7528\u5E94\u7528\u7A0B\u5E8F UDP\u9002\u7528\u8F83\u77ED\u7684\u6570\u636E\u63A7\u5236
</code></pre>
<h3>IP</h3>
<pre><code>-- \u518D\u4E0B\u5C42IP
--- IP\u534F\u8BAE\u63A7\u5236\u7F51\u7EDC\u5305\u6536\u53D1\u64CD\u4F5C
--- IP\u5305\u542BICMP \u548C ARP
--- ICMP\u7528\u4E8E\u544A\u77E5\u7F51\u7EDC\u5305\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u9519\u8BEF\u4EE5\u53CA\u5404\u79CD\u63A7\u5236\u4FE1\u606F
--- ARP\u52C7\u6562\u4E0E\u6839\u636EIP\u5730\u5740\u67E5\u8BE2\u5BF9\u5E94\u7684MAC\u5730\u5740
</code></pre>
<h3>\u7F51\u5361\u9A71\u52A8</h3>
<pre><code>\u8D1F\u8D23\u63A7\u5236\u4E4B\u7F51\u5361\u786C\u4EF6
</code></pre>
<h3>\u7F51\u5361</h3>
<pre><code>\u4FE1\u53F7\u63A5\u6536\u548C\u4F20\u8F93
</code></pre>
`},{index:["<h3>\u5957\u63A5\u5B57\u7684\u5B9E\u4F53\u5C31\u662F\u901A\u4FE1\u63A7\u5236\u4FE1\u606F</h3>","<h3>\u534F\u8BAE\u6808\u662F\u6839\u636E\u5957\u63A5\u5B57\u4E2D\u8BB0\u5F55\u7684\u63A7\u5236\u4FE1\u606F\u6765\u5DE5\u4F5C\u7684</h3>","<h3>\u5728Windows\u4E2D\u53EF\u4EE5\u7528netstat\u547D\u4EE4\u663E\u793A\u5957\u63A5\u5B57\u5185\u5BB9</h3>","<h3>undefined</h3>"],path:"/posts_web/\u5957\u63A5\u5B57\u5B9E\u4F53.html",title:"\u5957\u63A5\u5B57\u7684\u5B9E\u4F53\u5C31\u662F\u901A\u4FE1\u63A7\u5236\u4FE1\u606F",date:"2022-04-25",fontNum:216,description:`\r
 \u5957\u63A5\u5B57\u7684\u5B9E\u4F53\u5C31\u662F\u901A\u4FE1\u63A7\u5236\u4FE1\u606F\r
\r
--- \u5B58\u653E\u63A7\u5236\u4FE1\u606F\u7684\u5185\u5B58\u7A7A\u95F4\u5C31\u662F\u5957\u63A5\u5B57\u7684\u5B9E\u4F53\r
\r
 \u534F\u8BAE\u6808\u662F\u6839\u636E\u5957\u63A5\u5B57\u4E2D\u8BB0\u5F55\u7684\u63A7\u5236\u4FE1\u606F\u6765\u5DE5\u4F5C\u7684\r
\r
--- \u5957\u63A5\u5B57\u4E2D\u8BB0\u5F55\u4E86\u7528\u4E8E\u63A7\u5236\u901A\u4FE1\u64CD\u4F5C\u7684\u5404\u79CD\u63A7\u5236\u4FE1\u606F\r
--- \u534F\u8BAE\u6808\u5219\u9700\u8981\u6839\u636E\u8FD9\u4E9B\u4FE1\u606F\u5224\u65AD\u4E0B\u4E00\u6B65\u7684\u884C\u52A8\r
--- \u8FD9\u5C31\u662F\u5957\u63A5\u5B57\u7684\u4F5C\u7528\r
\r
 \u5728Windows\u4E2D\u53EF\u4EE5\u7528netstat\u547D\u4EE4\u663E\u793A\u5957\u63A5\u5B57\u5185\u5BB9\r
\r
`,tags:["NET"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u5957\u63A5\u5B57\u7684\u5B9E\u4F53\u5C31\u662F\u901A\u4FE1\u63A7\u5236\u4FE1\u606F</h3>
<pre><code>--- \u5B58\u653E\u63A7\u5236\u4FE1\u606F\u7684\u5185\u5B58\u7A7A\u95F4\u5C31\u662F\u5957\u63A5\u5B57\u7684\u5B9E\u4F53
</code></pre>
<h3>\u534F\u8BAE\u6808\u662F\u6839\u636E\u5957\u63A5\u5B57\u4E2D\u8BB0\u5F55\u7684\u63A7\u5236\u4FE1\u606F\u6765\u5DE5\u4F5C\u7684</h3>
<pre><code>--- \u5957\u63A5\u5B57\u4E2D\u8BB0\u5F55\u4E86\u7528\u4E8E\u63A7\u5236\u901A\u4FE1\u64CD\u4F5C\u7684\u5404\u79CD\u63A7\u5236\u4FE1\u606F
--- \u534F\u8BAE\u6808\u5219\u9700\u8981\u6839\u636E\u8FD9\u4E9B\u4FE1\u606F\u5224\u65AD\u4E0B\u4E00\u6B65\u7684\u884C\u52A8
--- \u8FD9\u5C31\u662F\u5957\u63A5\u5B57\u7684\u4F5C\u7528
</code></pre>
<h3>\u5728Windows\u4E2D\u53EF\u4EE5\u7528netstat\u547D\u4EE4\u663E\u793A\u5957\u63A5\u5B57\u5185\u5BB9</h3>
<h3></h3>
<pre><code>
</code></pre>
`},{index:["<h2>\u5BA2\u6237\u7AEF\u67E5\u8BE2DNS\u670D\u52A1\u5668</h2>","<h3>\u57DF\u540D</h3>","<h3>class</h3>","<h3>\u8BB0\u5F55\u7C7B\u578B</h3>","<h3>\u4F8B\u5B50</h3>","<h3>\u7C7B\u578B</h3>","<h4>CNAME</h4>","<h3>\u67E5\u8BE2DNS</h3>","<h3>\u67E5\u8BE2\u8FC7\u7A0B</h3>","<h3>DNS</h3>"],path:"/posts_web/DNS.html",title:"\u67E5\u8BE2DNS",date:"2022-04-24",fontNum:953,description:` \u5BA2\u6237\u7AEF\u67E5\u8BE2DNS\u670D\u52A1\u5668 \u53D1\u9001\u7684\u6D88\u606F\u5185\u5BB9\u5305\u542B\r
 \u57DF\u540D \r
\r
\u90AE\u4EF6@\u540E\u9762\u7684\u90E8\u5206\r
\r
\r
 class\r
\r
class\u662F\u7528\u6765\u8BC6\u522B\u7F51\u7EDC\u7684\u4FE1\u606F \u4E0D\u8FC7\u73B0\u5728\u53EA\u6709\u4E92\u8054\u7F51class\u7684\u503C\u6C38\u8FDC\u662FIN\u4EE3\u8868\u4E92\u8054\u7F51\r
\r
\r
 \u8BB0\u5F55\u7C7B\u578B\r
\r
\u8868\u793A\u57DF\u540D\u5BF9\u5E94\u7684\u7C7B\u578B\r
\u7C7B\u578B \u57DF\u540D       \u5BF9\u5E94\r
A    IP\u5730\u5740\r
MX   \u90AE\u4EF6\u670D\u52A1\u5668\r
\r
DNS \u4E0A\u4E8B`,tags:["DNS"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u5BA2\u6237\u7AEF\u67E5\u8BE2DNS\u670D\u52A1\u5668 \u53D1\u9001\u7684\u6D88\u606F\u5185\u5BB9\u5305\u542B</h2>
<h3>\u57DF\u540D</h3>
<pre><code>\u90AE\u4EF6@\u540E\u9762\u7684\u90E8\u5206
</code></pre>
<h3>class</h3>
<pre><code>class\u662F\u7528\u6765\u8BC6\u522B\u7F51\u7EDC\u7684\u4FE1\u606F \u4E0D\u8FC7\u73B0\u5728\u53EA\u6709\u4E92\u8054\u7F51class\u7684\u503C\u6C38\u8FDC\u662FIN\u4EE3\u8868\u4E92\u8054\u7F51
</code></pre>
<h3>\u8BB0\u5F55\u7C7B\u578B</h3>
<pre><code>\u8868\u793A\u57DF\u540D\u5BF9\u5E94\u7684\u7C7B\u578B
\u7C7B\u578B \u57DF\u540D       \u5BF9\u5E94
A    IP\u5730\u5740
MX   \u90AE\u4EF6\u670D\u52A1\u5668
</code></pre>
<p>DNS \u4E0A\u4E8B\u5148\u4FDD\u5B58\u8FD9\u4E09\u79CD\u8BB0\u5F55\uFF0C\u6839\u636E\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4F5C\u67E5\u8BE2</p>
<h3>\u4F8B\u5B50</h3>
<pre><code>\u67E5\u8BE2www.a.com\u7684ip\u5730\u5740
\u57DF\u540D = www.a.com
class = IN
\u8BB0\u5F55\u7C7B\u578B = A
</code></pre>
<p>\u53EA\u8981\u662F\u4F5C\u4E3AA\u7C7B\u578B\u518DDNS\u670D\u52A1\u5668\u4E0A\u6CE8\u518C\u7684\u90FD\u53EF\u4EE5\u4F5C\u4E3Aweb\u670D\u52A1\u5668\u7684\u57DF\u540D</p>
<h3>\u7C7B\u578B</h3>
<pre><code>\u6839\u636Eip\u67E5\u57DF\u540D\u7684PTR\u7C7B\u578B
\u67E5\u8BE2\u57DF\u540D\u76F8\u5173\u522B\u540D\u7684CNAME\u7C7B\u578B
\u67E5\u8BE2DNS\u670D\u52A1\u5668IP\u5730\u5740\u7684NS\u7C7B\u578B
\u67E5\u8BE2\u57DF\u540D\u5C5E\u6027\u7684SOA\u7C7B\u578B
</code></pre>
<h4>CNAME</h4>
<pre><code>CNAME \u5373\u6307\u522B\u540D\u8BB0\u5F55\uFF0C\u4E5F\u88AB\u79F0\u4E3A\u89C4\u8303\u540D\u5B57\u3002
\u8FD9\u79CD\u8BB0\u5F55\u5141\u8BB8\u5C06\u591A\u4E2A\u540D\u5B57\u6620\u5C04\u5230\u540C\u4E00\u53F0\u8BA1\u7B97\u673A\u3002 
\u5F53\u9700\u8981\u5C06\u57DF\u540D\u6307\u5411\u53E6\u4E00\u4E2A\u57DF\u540D\uFF0C\u518D\u7531\u53E6\u4E00\u4E2A\u57DF\u540D\u63D0\u4F9B ip\u5730\u5740\uFF0C\u5C31\u9700\u8981\u6DFB\u52A0 CNAME \u8BB0\u5F55\u3002
</code></pre>
<pre><code>\u535A\u5BA2\u642D\u5EFA\u518D xxx.github.io 
\u535A\u5BA2\u76EE\u5F55\u521B\u5EFA CNAME\u6587\u4EF6
CNAME\u4E2D\u5199\u5165\u57DF\u540D xxx.com
xxx.com \u6307\u5411 xxx.github.io \u518D\u6307\u5411\u5BF9\u5E94\u7684ip\u5730\u5740
</code></pre>
<h3>\u67E5\u8BE2DNS</h3>
<pre><code>\u6839\u636E\u57DF \u81F3\u4E0A\u800C\u4E0B \u67E5\u8BE2DNS \u670D\u52A1\u5668
\u6839\u57DF www.a.com.  // com \u540E\u9762\u7684 . \u4E3A\u6839\u57DF \u4E00\u822C\u4E0D\u5199
\u5C06\u6839\u57DF\u7684DNS\u670D\u52A1\u5668\u4FE1\u606F\u4FDD\u5B58\u5728\u4E92\u8054\u7F51\u4E2D\u6240\u6709\u7684DNS\u670D\u52A1\u5668\u4E2D\u3002
\u8FD9\u6837\u4E00\u6765\uFF0C\u4EFB\u4F55DNS\u670D\u52A1\u5668\u5C31\u90FD\u53EF\u4EE5\u627E\u5230\u5E76\u8BBF\u95EE\u6839\u57DFDNS\u670D\u52A1\u5668\u4E86

\u5B9E\u9645\u4E0A\uFF0C\u6839\u57DFDNS\u670D\u52A1\u5668\u7684\u76F8\u5173\u4FE1\u606F\u5DF2\u7ECF\u5305\u542B\u5728DNS\u670D\u52A1\u5668\u7A0B\u5E8F\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u4E86\uFF0C
\u56E0\u6B64\u53EA\u8981\u5B89\u88C5\u4E86DNS\u670D\u52A1\u5668\u7A0B\u5E8F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u4E5F\u5C31\u88AB\u81EA\u52A8\u914D\u7F6E\u597D\u4E86\u3002
</code></pre>
<h3>\u67E5\u8BE2\u8FC7\u7A0B</h3>
<pre><code>\u5BA2\u6237\u7AEF\u673A\u67E5\u8BE2\u6700\u8FD1\u7684DNS\u670D\u52A1\u5668\uFF0C\u5982\u679C\u6CA1\u67E5\u5230\uFF0C\u6700\u8FD1\u7684DNS\u670D\u52A1\u5668\u4F1A\u67E5\u8BE2\u6839\u57DF\u670D\u52A1 . \u7136\u540E\u518D\u67E5.com\u4F9D\u6B21\u5F80\u4E0B
</code></pre>
<h3>DNS \u670D\u52A1\u5668\u5177\u6709\u7F13\u5B58\u529F\u80FD</h3>
`},{index:["<h3>VPN</h3>"],path:"/posts_web/vpn.html",title:"VPN\u539F\u7406",date:"2022-04-24",fontNum:33,description:" VPN = Virtual Private Network",tags:["VPN"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>VPN = Virtual Private Network</h3>
`},{index:["<h3>\u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F</h3>","<h3>\u4F7F\u7528socket\u5E93\u6765\u624B\u6CD5\u6570\u636E\u7684\u64CD\u4F5C\u8FC7\u7A0B</h3>","<h3>\u5177\u4F53\u7684\u6D41\u7A0B</h3>","<h3>\u6536\u53D1\u6570\u636E\u7684\u9636\u6BB5</h3>","<h3>\u521B\u5EFA\u5957\u63A5\u5B57\u9636\u6BB5</h3>","<h3>\u5BA2\u6237\u7AEF\u521B\u5EFA\u5957\u63A5\u5B57</h3>","<h3>\u8FDE\u63A5</h3>"],path:"/posts_web/\u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F.html",title:"\u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F",date:"2022-04-24",fontNum:985,description:` \u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F\r
\r
\u548C\u67E5\u8BE2DNS\u670D\u52A1\u5668\u4E00\u6837\r
\u9700\u8981\u4F7F\u7528socket\u5E93\u4E2D\u7684\u7A0B\u5E8F\u7EC4\u4EF6\uFF08\u67E5\u8BE2ip\u5730\u5740\u53EA\u9700\u8981\u8C03\u7528\u4E00\u4E2A\u7A0B\u5E8F\u7EC4\u4EF6\u5C31\u53EF\u4EE5\uFF09\r
\u800C\u8FD9\u91CC\u9700\u8981\u8C03\u7528\u591A\u4E2A\u7A0B\u5E8F\u7EC4\u4EF6\r
\r
\r
\r
\u5411\u64CD\u4F5C\u7CFB\u7EDF\u5185\u7684\u534F\u8BAE\u6808\u53D1\u51FA\u59D4\u6258\u65F6\u9700\u8981\u6309\u7167\u6307\u5B9A\u7684\u987A\u5E8F\u6765\u8C03\u7528socket\u5E93\u4E2D\u7684\u7A0B\u5E8F\u7EC4\u4EF6\r
\r
 \u4F7F\u7528socket\u5E93\u6765\u624B\u6CD5\u6570\u636E\u7684\u64CD\u4F5C\u8FC7\u7A0B\r
\r
\u7B2C\u4E00\u6B65 \u6536\u53D1\u6570\u636E\u7684\u4E24\u53F0\u8BA1\u7B97\u673A\u4E2D\u95F4\u5EFA\u7ACB\u901A\u9053\r
`,tags:["DNS"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F</h3>
<pre><code>\u548C\u67E5\u8BE2DNS\u670D\u52A1\u5668\u4E00\u6837
\u9700\u8981\u4F7F\u7528socket\u5E93\u4E2D\u7684\u7A0B\u5E8F\u7EC4\u4EF6\uFF08\u67E5\u8BE2ip\u5730\u5740\u53EA\u9700\u8981\u8C03\u7528\u4E00\u4E2A\u7A0B\u5E8F\u7EC4\u4EF6\u5C31\u53EF\u4EE5\uFF09
\u800C\u8FD9\u91CC\u9700\u8981\u8C03\u7528\u591A\u4E2A\u7A0B\u5E8F\u7EC4\u4EF6
</code></pre>
<pre><code>\u5411\u64CD\u4F5C\u7CFB\u7EDF\u5185\u7684\u534F\u8BAE\u6808\u53D1\u51FA\u59D4\u6258\u65F6\u9700\u8981\u6309\u7167\u6307\u5B9A\u7684\u987A\u5E8F\u6765\u8C03\u7528socket\u5E93\u4E2D\u7684\u7A0B\u5E8F\u7EC4\u4EF6
</code></pre>
<h3>\u4F7F\u7528socket\u5E93\u6765\u624B\u6CD5\u6570\u636E\u7684\u64CD\u4F5C\u8FC7\u7A0B</h3>
<pre><code>\u7B2C\u4E00\u6B65 \u6536\u53D1\u6570\u636E\u7684\u4E24\u53F0\u8BA1\u7B97\u673A\u4E2D\u95F4\u5EFA\u7ACB\u901A\u9053
\u7BA1\u9053\u7684\u6570\u636E\u51FA\u5165\u53E3\u662F\u5173\u952E
\u8FD9\u4E9B\u51FA\u5165\u53E3\u5373\u4E3A\u5957\u63A5\u5B57
</code></pre>
<h3>\u5177\u4F53\u7684\u6D41\u7A0B * \u5957\u63A5\u5B57\u5373\u4E3Asocket</h3>
<pre><code>- \u9996\u5148 \u670D\u52A1\u5668\u4E00\u65B9\u5148\u521B\u5EFA\u5957\u63A5\u5B57
- \u7136\u540E\u7B49\u5F85\u5BA2\u6237\u7AEF\u5411\u8BE5\u5957\u63A5\u5B57\u8FDE\u63A5\u7BA1\u9053
- \u5F53\u670D\u52A1\u5668\u8FDB\u5165\u7B49\u5F85\u72B6\u6001\u7684\u65F6\u5019 \u5BA2\u6237\u7AEF\u5C31\u53EF\u4EE5\u8FDE\u63A5\u7BA1\u9053\u4E86

-- \u5BA2\u6237\u7AEF\u4E5F\u4F1A\u5148\u521B\u5EFA\u4E00\u4E2A\u5957\u63A5\u5B57
-- \u7136\u540E\u8BE5\u5957\u63A5\u5B57\u5EF6\u7533\u51FA\u7BA1\u9053
-- \u6700\u540E\u7BA1\u9053\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u7684\u5957\u63A5\u5B57\u4E0A
-- \u5F53\u53CC\u65B9\u7684\u5957\u63A5\u5B57\u8FDE\u63A5\u8D77\u6765\u540E
-- \u901A\u4FE1\u51C6\u5907\u5B8C\u6210
-- \u5C06\u6570\u636E\u9001\u5165\u5957\u63A5\u5B57
</code></pre>
<h3>\u6536\u53D1\u6570\u636E\u7684\u9636\u6BB5</h3>
<pre><code>1. \u521B\u5EFA\u5957\u63A5\u5B57
2. \u5C06\u7BA1\u9053\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u7AEF\u7684\u5957\u63A5\u5B57\u4E0A
3. \u6536\u53D1\u6570\u636E
4. \u65AD\u5F00\u7BA1\u9053\u5E76\u5220\u9664\u5957\u63A5\u5B57
</code></pre>
<pre><code>\u5728\u6BCF\u4E2A\u9636\u6BB5 socket\u5E93\u4E2D\u7684\u7A0B\u5E8F\u7EC4\u4EF6\u90FD\u4F1A\u88AB\u8C03\u7528\u6765\u6267\u884C\u76F8\u5173\u6570\u636E\u6536\u53D1\u64CD\u4F5C

\u8FD9\u56DB\u4E2A\u64CD\u4F5C\u90FD\u662F\u7531\u64CD\u4F5C\u7CFB\u7EDF\u7684\u534F\u8BAE\u6808\u6765\u6267\u884C\u7684

\u6D4F\u89C8\u5668\u7B49\u5E94\u7528\u7A0B\u5E8F\u5E76\u4E0D\u4F1A\u81EA\u5DF1\u53BB\u505A\u8FDE\u63A5\u7BA1\u9053\uFF0C\u653E\u5165\u6570\u636E
\u800C\u662F\u59D4\u6258\u534F\u8BAE\u6808\u6765\u4EE3\u52B3

\u8FD9\u4E9B\u59D4\u6258\u64CD\u4F5C\u90FD\u662F\u901A\u8FC7\u8C03\u7528socket\u5E93\u4E2D\u7684\u7A0B\u5E8F\u6765\u6267\u884C
\u4F46\u8FD9\u4E9B\u6570\u636E\u901A\u4FE1\u7528\u7684\u7A0B\u5E8F\u7EC4\u4EF6\u5176\u5B9E\u4EC5\u4EC5\u5145\u5F53\u4E86\u4E00\u4E2A\u6865\u6881\u7684\u89D2\u8272
\u5E76\u4E0D\u4F1A\u6267\u884C\u4EFB\u4F55\u5B9E\u9645\u6027\u7684\u64CD\u4F5C
</code></pre>
<pre><code>\u5E94\u7528\u7A0B\u5E8F\u7684\u59D4\u6258\u88AB\u6700\u7EC8\u4F1A\u88AB\u539F\u539F\u672C\u672C\u5730\u4F20\u9012\u7ED9\u534F\u8BAE\u6808
</code></pre>
<h3>\u521B\u5EFA\u5957\u63A5\u5B57\u9636\u6BB5</h3>
<pre><code>\u5E94\u7528\u7A0B\u5E8F\u59D4\u6258\u53D1\u9001\u6570\u636E\u7684\u65F6\u5019\u4F1A\u6309\u7167\u4E00\u5B9A\u987A\u5E8F\u8C03\u7528socket\u7EC4\u4EF6
dns\u67E5\u8BE2\u4F1A\u8C03\u7528gethostbyname\u7684\u7A0B\u5E8F
</code></pre>
<h3>\u5BA2\u6237\u7AEF\u521B\u5EFA\u5957\u63A5\u5B57</h3>
<pre><code>\u8C03\u7528socket\u5E93\u4E2D\u7684socket\u7EC4\u4EF6 -&gt; \u521B\u5EFA\u5957\u63A5\u5B57
-&gt;\u534F\u8BAE\u6808\u8FD4\u56DE\u63CF\u8FF0\u7B26-&gt;\u5E94\u7528\u7A0B\u5E8F\u5C06\u63CF\u8FF0\u7B26\u653E\u5728\u5185\u5B58-&gt;\u63CF\u8FF0\u7B26\u7528\u4E8E\u8BC6\u522B\u5957\u63A5\u5B57
</code></pre>
<pre><code>\u5E94\u7528\u7A0B\u5E8F\u662F\u901A\u8FC7\u201C\u63CF\u8FF0\u7B26\u201D\u8FD9\u4E00\u7C7B\u4F3C\u53F7\u7801\u724C\u7684\u4E1C\u897F\u6765\u8BC6\u522B\u5957\u63A5\u5B57\u7684\u3002
</code></pre>
<h3>\u8FDE\u63A5</h3>
<pre><code>\u9700\u8981 \u63CF\u8FF0\u7B26 \u670D\u52A1\u5668ip\u5730\u5740 \u7AEF\u53E3\u53F7
</code></pre>
`},{index:["<h3>\u5B9E\u73B0element</h3>","<h3></h3>",'<h3>:expand-row-keys="expandRowKeys"</h3>','<h3>:row-key="rowKey"</h3>',"<h3>\u6E90\u7801</h3>"],path:"/posts_element_ui/el_expand.html",title:"element table\u5C55\u5F00\u884C\u53EA\u663E\u793A\u4E00\u884C",date:"2022-04-22",fontNum:3453,description:` \u5B9E\u73B0element table\u5C55\u5F00\u884C\u53EA\u663E\u793A\u4E00\u884C \u9700\u8981\u4E09\u6B65\r
  @expand-change="expandChange"\r
javascript\r
@expand-change="expandChange"\r
\r
data(){\r
    return {\r
        expandRowKeys:[]\r
    }\r
}\r
\r
\r
expandChange(row) {`,tags:["element"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u5B9E\u73B0element table\u5C55\u5F00\u884C\u53EA\u663E\u793A\u4E00\u884C \u9700\u8981\u4E09\u6B65</h3>
<h3>@expand-change=&quot;expandChange&quot;</h3>
<pre><code class="language-javascript">@expand-change=&quot;expandChange&quot;

data(){
    return {
        expandRowKeys:[]
    }
}


expandChange(row) {
    this.expandRowKeys = [row.id];
},
</code></pre>
<h3>:expand-row-keys=&quot;expandRowKeys&quot;</h3>
<pre><code class="language-javascript">:expand-row-keys=&quot;expandRowKeys&quot;
</code></pre>
<h3>:row-key=&quot;rowKey&quot;</h3>
<pre><code class="language-javascript">:row-key=&quot;rowKey&quot;

rowKey(row) {
    return row.id;
},
</code></pre>
<h3>\u6E90\u7801</h3>
<pre><code class="language-javascript">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    @expand-change=&quot;expandChange&quot;
    :expand-row-keys=&quot;expandRowKeys&quot;
    :row-key=&quot;rowKey&quot;
  &gt;
    &lt;el-table-column type=&quot;expand&quot;&gt;
      &lt;template slot-scope=&quot;props&quot;&gt;
        &lt;el-form label-position=&quot;left&quot; inline class=&quot;demo-table-expand&quot;&gt;
          &lt;el-form-item label=&quot;\u5546\u54C1\u540D\u79F0&quot;&gt;
            &lt;span&gt;{{ props.row.name }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;\u6240\u5C5E\u5E97\u94FA&quot;&gt;
            &lt;span&gt;{{ props.row.shop }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;\u5546\u54C1 ID&quot;&gt;
            &lt;span&gt;{{ props.row.id }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;\u5E97\u94FA ID&quot;&gt;
            &lt;span&gt;{{ props.row.shopId }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;\u5546\u54C1\u5206\u7C7B&quot;&gt;
            &lt;span&gt;{{ props.row.category }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;\u5E97\u94FA\u5730\u5740&quot;&gt;
            &lt;span&gt;{{ props.row.address }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;\u5546\u54C1\u63CF\u8FF0&quot;&gt;
            &lt;span&gt;{{ props.row.desc }}&lt;/span&gt;
          &lt;/el-form-item&gt;
        &lt;/el-form&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column label=&quot;\u5546\u54C1 ID&quot; prop=&quot;id&quot;&gt; &lt;/el-table-column&gt;
    &lt;el-table-column label=&quot;\u5546\u54C1\u540D\u79F0&quot; prop=&quot;name&quot;&gt; &lt;/el-table-column&gt;
    &lt;el-table-column label=&quot;\u63CF\u8FF0&quot; prop=&quot;desc&quot;&gt; &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    expandChange(row) {
      //\u518D\u6B21\u70B9\u51FB\u5173\u95ED
      if (row.id === this.expandRowKeys[0].id) {
        this.expandRowKeys = [];
      } else {
        this.expandRowKeys = [row.id];
      }
    },
    rowKey(row) {
      return row.id;
    },
  },
  data() {
    return {
      expandRowKeys: [],
      tableData: [
        {
          id: &quot;12987122&quot;,
          name: &quot;\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4&quot;,
          category: &quot;\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF&quot;,
          desc: &quot;\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF&quot;,
          shop: &quot;\u738B\u5C0F\u864E\u592B\u59BB\u5E97&quot;,
          shopId: &quot;10333&quot;,
        },
        {
          id: &quot;12987123&quot;,
          name: &quot;\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4&quot;,
          category: &quot;\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF&quot;,
          desc: &quot;\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF&quot;,
          shop: &quot;\u738B\u5C0F\u864E\u592B\u59BB\u5E97&quot;,
          shopId: &quot;10333&quot;,
        },
        {
          id: &quot;12987125&quot;,
          name: &quot;\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4&quot;,
          category: &quot;\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF&quot;,
          desc: &quot;\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF&quot;,
          shop: &quot;\u738B\u5C0F\u864E\u592B\u59BB\u5E97&quot;,
          shopId: &quot;10333&quot;,
        },
        {
          id: &quot;12987126&quot;,
          name: &quot;\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4&quot;,
          category: &quot;\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF&quot;,
          desc: &quot;\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF&quot;,
          shop: &quot;\u738B\u5C0F\u864E\u592B\u59BB\u5E97&quot;,
          shopId: &quot;10333&quot;,
        },
      ],
    };
  },
};
&lt;/script&gt;

&lt;style&gt;
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
&lt;/style&gt;
</code></pre>
`},{index:["<h3>\u5728\u7EBF\u62A0\u56FE</h3>","<h3>\u529F\u80FD\u5F3A\u5927\u7684JavaScript</h3>","<h3>\u7F51\u9875\u8BBE\u8BA1\u5E38\u7528\u8272\u5F69\u642D\u914D\u8868</h3>"],path:"/posts_web/\u5E38\u7528\u7F51\u7AD9\u6574\u7406.html",title:"\u5E38\u7528\u7F51\u7AD9\u6574\u7406",date:"2022-04-22",fontNum:175,description:`\r
 \u5728\u7EBF\u62A0\u56FE\r
\r
\r
https://www.remove.bg/zh\r
\r
\r
 \u529F\u80FD\u5F3A\u5927\u7684JavaScript \u62D6\u62FD\u5E93\r
\r
http://www.sortablejs.com/\r
\r
\r
 \u7F51\u9875\u8BBE\u8BA1\u5E38\u7528\u8272\u5F69\u642D\u914D\u8868\r
\r
http://tool.c7sky.com/webcolor/\r
`,tags:["web"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u5728\u7EBF\u62A0\u56FE</h3>
<pre><code>https://www.remove.bg/zh
</code></pre>
<h3>\u529F\u80FD\u5F3A\u5927\u7684JavaScript \u62D6\u62FD\u5E93</h3>
<pre><code>http://www.sortablejs.com/
</code></pre>
<h3>\u7F51\u9875\u8BBE\u8BA1\u5E38\u7528\u8272\u5F69\u642D\u914D\u8868</h3>
<pre><code>http://tool.c7sky.com/webcolor/
</code></pre>
`},{index:["<h3>server</h3>","<h3>client</h3>","<h3>\u672A\u5B8C</h3>"],path:"/posts_node/node\u642D\u5EFAtcp\u670D\u52A1\u5668.html",title:"node\u642D\u5EFAtcp\u670D\u52A1\u5668",date:"2022-04-21",fontNum:475,description:` server\r
javascript\r
//\u5F15\u5165net\u6A21\u5757\r
const net = require('net');\r
//\u521B\u5EFATCP\u670D\u52A1\u5668\r
const server = net.createServer(function(socket) {\r
    console.log('\u6709\u65B0\u7684\u5BA2\u6237\u7AEF\u63A5\u5165');\r
});\r
//\u8BBE\u7F6E\u76D1\u542C\u7AEF\u53E3\r
server.listen(8001, func`,tags:["node"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>server</h3>
<pre><code class="language-javascript">//\u5F15\u5165net\u6A21\u5757
const net = require('net');
//\u521B\u5EFATCP\u670D\u52A1\u5668
const server = net.createServer(function(socket) {
    console.log('\u6709\u65B0\u7684\u5BA2\u6237\u7AEF\u63A5\u5165');
});
//\u8BBE\u7F6E\u76D1\u542C\u7AEF\u53E3
server.listen(8001, function() {
    console.log('\u670D\u52A1\u6B63\u5728\u76D1\u542C\u4E2D\u3002\u3002\u3002')
});
</code></pre>
<h3>client</h3>
<pre><code class="language-javascript">//\u5F15\u5165net\u6A21\u5757
const net = require('net');
//\u521B\u5EFATCP\u5BA2\u6237\u7AEF
const client = new net.Socket();
//\u8BBE\u7F6E\u8FDE\u63A5\u7684\u670D\u52A1\u5668
//\u672C\u5730
client.connect(8001, '127.0.0.1', function() {
    console.log(&quot;\u8FDE\u63A5\u670D\u52A1\u5668\u6210\u529F&quot;);
});
</code></pre>
<h3>\u672A\u5B8C</h3>
`},{index:["<h3>\u4E2D\u6587\u540D\u53EF\u4EE5\u4F5C\u4E3A</h3>"],path:"/posts_vue/vue.html",title:"vue \u4E2D\u6587\u540D\u53EF\u4EE5\u4F5C\u4E3A key",date:"2022-04-21",fontNum:120,description:` \u4E2D\u6587\u540D\u53EF\u4EE5\u4F5C\u4E3A key\r
javascript\r
const dic = {\r
    '\u4E2D': 'zhong',\r
    '\u6587': 'weng',\r
}\r
\r
console.log(dic['\u4E2D']);\r
\r
\r
`,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u4E2D\u6587\u540D\u53EF\u4EE5\u4F5C\u4E3A key</h3>
<pre><code class="language-javascript">const dic = {
    '\u4E2D': 'zhong',
    '\u6587': 'weng',
}

console.log(dic['\u4E2D']);
</code></pre>
`},{index:["<h2>2022-4-7</h2>","<h3>HTTP</h3>","<h3>WebSocket</h3>","<h3>\u7279\u70B9</h3>","<h2>2022-4-16</h2>","<h3>websocket</h3>","<h3>node\u7AEF\u642D\u5EFA</h3>","<h3>\u5BA2\u6237\u7AEF\u642D\u5EFA</h3>"],path:"/posts_web/websoket.html",title:"webSoket",date:"2022-04-15",fontNum:1292,description:` 2022-4-7\r
 HTTP \u901A\u4FE1\u53EA\u80FD\u7531\u5BA2\u6237\u7AEF\u53D1\u8D77\r
\r
\u5BA2\u6237\u7AEF\u8981\u83B7\u77E5\u670D\u52A1\u5668\u72B6\u6001\u5C31\u9700\u8981\u901A\u8FC7\u8F6E\u8BE2\u53BB\u67E5\u8BE2\u670D\u52A1\u5668\u6709\u6CA1\u6709\u65B0\u7684\u4FE1\u606F\u3002 (\u8F6E\u8BE2\u6548\u7387\u4F4E\uFF0C\u6D6A\u8D39\u8D44\u6E90)\r
\r
 WebSocket \r
\r
\u670D\u52A1\u5668\u53EF\u4EE5\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u4FE1\u606F (bidirectional)\r
\r
 \u7279\u70B9\r
\r
\u5EFA\u7ACB\u5728 TCP \u534F\u8BAE\u4E4B\u4E0A\r
\r
\u4E0E HTTP \u534F\u8BAE\u6709\u7740\u826F\u597D\u7684\u517C\u5BB9\u6027\r
\r
\u6570\u636E\u683C\u5F0F\u6BD4\u8F83\u8F7B\u91CF\r
\r
\u53EF\u4EE5\u53D1`,tags:["webSoket"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>2022-4-7</h2>
<h3>HTTP \u901A\u4FE1\u53EA\u80FD\u7531\u5BA2\u6237\u7AEF\u53D1\u8D77</h3>
<p>\u5BA2\u6237\u7AEF\u8981\u83B7\u77E5\u670D\u52A1\u5668\u72B6\u6001\u5C31\u9700\u8981\u901A\u8FC7\u8F6E\u8BE2\u53BB\u67E5\u8BE2\u670D\u52A1\u5668\u6709\u6CA1\u6709\u65B0\u7684\u4FE1\u606F\u3002 (\u8F6E\u8BE2\u6548\u7387\u4F4E\uFF0C\u6D6A\u8D39\u8D44\u6E90)</p>
<h3>WebSocket</h3>
<p>\u670D\u52A1\u5668\u53EF\u4EE5\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u4FE1\u606F (bidirectional)</p>
<h3>\u7279\u70B9</h3>
<p>\u5EFA\u7ACB\u5728 TCP \u534F\u8BAE\u4E4B\u4E0A</p>
<p>\u4E0E HTTP \u534F\u8BAE\u6709\u7740\u826F\u597D\u7684\u517C\u5BB9\u6027</p>
<p>\u6570\u636E\u683C\u5F0F\u6BD4\u8F83\u8F7B\u91CF</p>
<p>\u53EF\u4EE5\u53D1\u9001\u6216\u4E8C\u8FDB\u5236\u6570\u636E\u3002</p>
<p>\u6CA1\u6709\u540C\u6E90\u9650\u5236</p>
<p>\u534F\u8BAE\u6807\u8BC6\u7B26\u662Fws\u52A0\u5BC6\u4E3Awss</p>
<h2>2022-4-16</h2>
<h3>websocket ip\u4E0D\u80FD\u7528\u6D4F\u89C8\u5668\u76F4\u63A5\u8BBF\u95EE</h3>
<h3>node\u7AEF\u642D\u5EFA</h3>
<pre><code class="language-javascript">const ws = require('nodejs-websocket')

let PORT = 4567

const server = ws.createServer((connection) =&gt; {
    connection.on('text', function(result) {
        console.log('\u53D1\u9001\u6D88\u606F', result)
    })
    connection.on('connect', function(code) {
        console.log('\u5F00\u542F\u8FDE\u63A5', code)
    })
    connection.on('close', function(code) {
        console.log('\u5173\u95ED\u8FDE\u63A5', code)
    })
    connection.on('error', function(code) {
        console.log('\u5F02\u5E38\u5173\u95ED', code)
    })
})

server.listen(PORT, () =&gt; {
    console.log('\u670D\u52A1\u5668\u542F\u52A8\u6210\u529F\uFF0C\u7AEF\u53E3' + PORT);
})
</code></pre>
<h3>\u5BA2\u6237\u7AEF\u642D\u5EFA</h3>
<pre><code class="language-javascript">    const ws = new WebSocket(&quot;ws://127.0.0.1:4567&quot;);

    ws.onopen = function (event) {
        console.log(&quot;Connection open ...&quot;);
        ws.send(&quot;Hello WebSockets!&quot;);
    };

    ws.onmessage = function (event) {
        console.log(&quot;Received Message: &quot; + event.data);
        ws.close();
    };

    ws.onclose = function (event) {
        console.log(&quot;Connection closed.&quot;);
    };
</code></pre>
`},{index:["<h3>\u6279\u91CF\u7ED9\u56FE\u7247\u91CD\u547D\u540D</h3>"],path:"/posts_node/\u6279\u91CFrename.html",title:"\u6279\u91CFrename(\u6279\u91CF\u91CD\u547D\u540D\u56FE\u7247)",date:"2022-04-12",fontNum:305,description:` \u6279\u91CF\u7ED9\u56FE\u7247\u91CD\u547D\u540D \u6216\u8005 \u6309\u7167 0 1 2 3 \u7684\u987A\u5E8F\u6765\u547D\u540D\r
javascript\r
const fs = require('fs')\r
\r
const pictures = fs.readdirSync('./articlesPictures')\r
let count = 0\r
for (const picture of pictures) {\r
    console.log(p`,tags:["node"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u6279\u91CF\u7ED9\u56FE\u7247\u91CD\u547D\u540D \u6216\u8005 \u6309\u7167 0 1 2 3 \u7684\u987A\u5E8F\u6765\u547D\u540D</h3>
<pre><code class="language-javascript">const fs = require('fs')

const pictures = fs.readdirSync('./articlesPictures')
let count = 0
for (const picture of pictures) {
    console.log(picture);
    fs.renameSync(\`./articlesPictures/\${picture}\`, \`./articlesPictures/\${count++}.jpg\`)
}
</code></pre>
`},{index:["<h3>\u7ED9form</h3>"],path:"/posts_element_ui/el_form.html",title:"element form rule\u6CA1\u751F\u6548",date:"2022-03-29",fontNum:61,description:`\r
 \u7ED9form \u5143\u7D20\u6DFB\u52A0 <el-form :model="ruleForm"\r
\r
ruleForm \u4E3A\u4F60\u7684\u53C2\u6570`,tags:["element"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u7ED9form \u5143\u7D20\u6DFB\u52A0 &lt;el-form :model=&quot;ruleForm&quot;</h3>
<p>ruleForm \u4E3A\u4F60\u7684\u53C2\u6570</p>
`},{index:["<h3>table</h3>","<h3>\u6301\u4E45\u5316</h3>","<h3>\u9009\u4E2D\u4E8B\u4EF6</h3>"],path:"/posts_element_ui/el_table_select.html",title:"element table select \u8868\u683C\u590D\u9009\u6846",date:"2022-03-29",fontNum:502,description:` table \u4E2D\u6DFB\u52A0\r
javascript\r
<el-table-column\r
    v-if="selection === true" // \u542F\u7528select\r
    type="selection" //\u8868\u683C\u6837\u5F0F\u4E3A\u590D\u9009\u6846\r
    :reserve-selection="reserveSelection" //\u4FDD\u5B58\u9009\u62E9\u7684\u8BB0\u5F55\r
    :selectable="fn" //`,tags:["element"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>table \u4E2D\u6DFB\u52A0</h3>
<pre><code class="language-javascript">&lt;el-table-column
    v-if=&quot;selection === true&quot; // \u542F\u7528select
    type=&quot;selection&quot; //\u8868\u683C\u6837\u5F0F\u4E3A\u590D\u9009\u6846
    :reserve-selection=&quot;reserveSelection&quot; //\u4FDD\u5B58\u9009\u62E9\u7684\u8BB0\u5F55
    :selectable=&quot;fn&quot; //\u4EC5\u5BF9 type=selection \u7684\u5217\u6709\u6548\uFF0C\u7C7B\u578B\u4E3A Function\uFF0CFunction \u7684\u8FD4\u56DE\u503C\u7528\u6765\u51B3\u5B9A\u8FD9\u4E00\u884C\u7684 CheckBox \u662F\u5426\u53EF\u4EE5\u52FE\u9009
    width=&quot;30&quot;//width \u8FC7\u5C0F\u590D\u9009\u6846\u540E\u65B9\u4F1A\u51FA\u73B0 ..
/&gt;
</code></pre>
<h3>\u6301\u4E45\u5316 \u6DFB\u52A0</h3>
<pre><code class="language-javascript">:row-key=&quot;(row)=&gt;{ return row.key}&quot; //\u6BCF\u884C\u552F\u4E00\u7684key
:reserve-selection=&quot;true&quot;
</code></pre>
<h3>\u9009\u4E2D\u4E8B\u4EF6</h3>
<pre><code class="language-javascript">@select=&quot;selectRow&quot;
selectRow(row :Array){}
</code></pre>
`},{index:["<h3>element</h3>"],path:"/posts_element_ui/el_radio.html",title:"element radio \u9ED8\u8BA4\u503C\u65E0\u6548",date:"2022-03-25",fontNum:37,description:" element radio\u7ED1\u5B9A\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u4F1A\u5BFC\u81F4\u9ED8\u8BA4\u503C\u65E0\u6548",tags:["element"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>element radio\u7ED1\u5B9A\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u4F1A\u5BFC\u81F4\u9ED8\u8BA4\u503C\u65E0\u6548</h3>
`},{index:[],path:"/posts_struct/63\u4E0D\u540C\u8DEF\u5F842.html",title:"63\u4E0D\u540C\u8DEF\u5F842",date:"2022-03-22",fontNum:1083,description:`\r
javascript\r
//1\u8868\u793A\u969C\u788D\u7269 0\u8868\u793A\u7A7A\u683C\r
var uniquePathsWithObstacles = function(obstacleGrid) {\r
    const m = obstacleGrid.length\r
    const n = obstacleGrid[0].length\r
    if (obstacleGrid[m - 1][n - 1] ==`,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//1\u8868\u793A\u969C\u788D\u7269 0\u8868\u793A\u7A7A\u683C
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
        return 0
    }
    obstacleGrid[0][0] = 1

    for (let i = 0; i &lt; m; i++) {
        for (let j = 0; j &lt; n; j++) {
            if (i === 0 &amp;&amp; j === 0) {
                continue
            }
            if (obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = 0
                continue
            }
            //0\u884C
            if (i === 0) {
                obstacleGrid[i][j] = obstacleGrid[i][j - 1]
                continue
            }
            //0\u5217
            if (j === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j]
                continue
            }

            if (obstacleGrid[i][j] !== 1) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
            }
        }
    }

    return obstacleGrid[m - 1][n - 1]

};
</code></pre>
`},{index:[],path:"/posts_struct/64\u6700\u5C0F\u8DEF\u5F84\u548C.html",title:"64\u6700\u5C0F\u8DEF\u5F84\u548C",date:"2022-03-22",fontNum:744,description:`javascript\r
//\u52A8\u6001\u89C4\u5212\r
var minPathSum = function(grid) {\r
    const m = grid.length\r
    const n = grid[0].length\r
\r
    for (let i = m - 1; i >= 0; i--) {\r
        for (let j = n - 1; j >= 0; j--) {\r`,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u52A8\u6001\u89C4\u5212
var minPathSum = function(grid) {
    const m = grid.length
    const n = grid[0].length

    for (let i = m - 1; i &gt;= 0; i--) {
        for (let j = n - 1; j &gt;= 0; j--) {
            if (i === m - 1 &amp;&amp; j === n - 1) continue

            if (i === m - 1) {
                grid[i][j] = grid[i][j] + grid[i][j + 1]
                continue
            }

            if (j === n - 1) {
                grid[i][j] = grid[i][j] + grid[i + 1][j]
                continue
            }

            grid[i][j] = grid[i][j] + Math.min(grid[i + 1][j], grid[i][j + 1])
        }
    }

    return grid[0][0]

};


console.log(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]));
// 7
</code></pre>
`},{index:[],path:"/posts_struct/66\u52A0\u4E00.html",title:"64\u6700\u5C0F\u8DEF\u5F84\u548C",date:"2022-03-22",fontNum:182,description:`javascript\r
var plusOne = function(digits) {\r
    console.log(BigInt(digits.join(''))  BigInt(1));\r
    return (BigInt(digits.join(''))  BigInt(1)).toString().split('')\r
};\r
`,tags:["BigInt"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var plusOne = function(digits) {
    console.log(BigInt(digits.join('')) + BigInt(1));
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
};
</code></pre>
`},{index:[],path:"/posts_struct/77\u7EC4\u5408.html",title:"77\u7EC4\u5408",date:"2022-03-22",fontNum:437,description:`javascript\r
var combine = function(n, k) {\r
    const res = []\r
\r
    const dfs = (stack, start, n, k) => {\r
        if (k === 0) {\r
            res.push(stack.slice())\r
            return\r
       `,tags:["\u56DE\u6EAF\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var combine = function(n, k) {
    const res = []

    const dfs = (stack, start, n, k) =&gt; {
        if (k === 0) {
            res.push(stack.slice())
            return
        }

        for (let i = start; i &lt;= n; i++) {
            stack.push(i)
            dfs(stack, i + 1, n, k - 1)
            stack.pop()
        }
    }
    dfs([], 1, n, k)
    return res
};

console.log(combine(1, 2));
</code></pre>
`},{index:[],path:"/posts_struct/78\u5B50\u96C6.html",title:"78\u5B50\u96C6",date:"2022-03-22",fontNum:564,description:`javascript\r
var subsets = function(nums) {\r
    const n = nums.length\r
\r
    const k = nums.length\r
    const res = []\r
    for (let k = 0; k <= n; k) {\r
        dfs(nums, [], n, k, 0, res)\r
    `,tags:["\u56DE\u6EAF\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var subsets = function(nums) {
    const n = nums.length

    const k = nums.length
    const res = []
    for (let k = 0; k &lt;= n; k++) {
        dfs(nums, [], n, k, 0, res)
    }
    return res
};


function dfs(nums, stack, n, k, start, res) {
    // console.log(stack);
    if (k === 0) {
        res.push(stack.slice())
        return
    }

    for (let i = start; i &lt; n; i++) {
        stack.push(nums[i])
        dfs(nums, stack, n, k - 1, i + 1, res)
        stack.pop()
    }
}
console.log(subsets([1, 2, 3]));
</code></pre>
`},{index:["<h3>animation-direction:</h3>","<h3>forwards\u5F53\u52A8\u753B\u5B8C\u6210\u540E\uFF0C\u4FDD\u6301\u6700\u540E\u4E00\u5E27\u7684\u72B6\u6001</h3>"],path:"/posts_css/animation.html",title:"animation",date:"2022-03-21",fontNum:122,description:`\r
 animation-direction: normal|alternate;\r
normal	\u9ED8\u8BA4\u503C\u3002\u52A8\u753B\u5E94\u8BE5\u6B63\u5E38\u64AD\u653E\u3002\r
alternate	\u52A8\u753B\u5E94\u8BE5\u8F6E\u6D41\u53CD\u5411\u64AD\u653E\u3002 \r
\r
 forwards\u5F53\u52A8\u753B\u5B8C\u6210\u540E\uFF0C\u4FDD\u6301\u6700\u540E\u4E00\u5E27\u7684\u72B6\u6001`,tags:["css"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>animation-direction: normal|alternate;</h3>
<p>normal	\u9ED8\u8BA4\u503C\u3002\u52A8\u753B\u5E94\u8BE5\u6B63\u5E38\u64AD\u653E\u3002
alternate	\u52A8\u753B\u5E94\u8BE5\u8F6E\u6D41\u53CD\u5411\u64AD\u653E\u3002</p>
<h3>forwards\u5F53\u52A8\u753B\u5B8C\u6210\u540E\uFF0C\u4FDD\u6301\u6700\u540E\u4E00\u5E27\u7684\u72B6\u6001</h3>
`},{index:["<h3>path\u4E0Esvg</h3>"],path:"/posts_css/path\u4E0Esvg.html",title:"path\u4E0Esvg",date:"2022-03-21",fontNum:16,description:`\r
 path\u4E0Esvg\r
`,tags:["css"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>path\u4E0Esvg</h3>
`},{index:[],path:"/posts_css/\u6EDA\u52A8\u6761.html",title:"\u6EDA\u52A8\u6761",date:"2022-03-21",fontNum:227,description:`css\r
/* \u6EDA\u52A8\u6761\u7684\u5BBD\u5EA6 */\r
::-webkit-scrollbar {\r
  width: 5px;\r
}\r
/* \u6EDA\u52A8\u6761\u7684\u6309\u94AE */\r
::-webkit-scrollbar-button {\r
  display: none;\r
}\r
/* \u6EDA\u52A8\u6761\u7684\u6ED1\u5757 */\r
::-webkit-scrollbar-thumb {\r
  background-color: grey;\r
  `,tags:["css"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-css">/* \u6EDA\u52A8\u6761\u7684\u5BBD\u5EA6 */
::-webkit-scrollbar {
  width: 5px;
}
/* \u6EDA\u52A8\u6761\u7684\u6309\u94AE */
::-webkit-scrollbar-button {
  display: none;
}
/* \u6EDA\u52A8\u6761\u7684\u6ED1\u5757 */
::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 5px;
}
</code></pre>
`},{index:[],path:"/posts_javascript/\u6570\u7EC4\u76F8\u52A0.html",title:"\u6570\u7EC4\u76F8\u52A0",date:"2022-03-21",fontNum:32,description:`\r
[1]  [1] = ?\r
// '11'\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code>[1] + [1] = ?
// '11'
</code></pre>
`},{index:[],path:"/posts_struct/55\u8DF3\u8DC3\u6E38\u620F.html",title:"55\u8DF3\u8DC3\u6E38\u620F",date:"2022-03-21",fontNum:396,description:`javascript\r
var canJump = function(nums) {\r
    const store = [1]\r
    const numsLength = nums.length\r
    for (let i = 0; i < numsLength; i) {\r
        const item = nums[i]\r
        for (let j =`,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var canJump = function(nums) {
    const store = [1]
    const numsLength = nums.length
    for (let i = 0; i &lt; numsLength; i++) {
        const item = nums[i]
        for (let j = 0; j &lt; item; j++) {
            store[i + j + 1] = 1
        }
    }

    if (store.includes(undefined) || store.length &lt; numsLength) {
        return false
    }
    return true
};
</code></pre>
`},{index:[],path:"/posts_struct/60\u6392\u5217\u5E8F\u5217.html",title:"60\u6392\u5217\u5E8F\u5217",date:"2022-03-21",fontNum:715,description:`javascript\r
var getPermutation = function(n, k) {\r
    const res = []\r
    const nums = []\r
    const dic = {}\r
    for (let i = 1; i <= n; i) {\r
        nums[i - 1] = i\r
        dic[i - 1] = fal`,tags:["\u56DE\u6EAF\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var getPermutation = function(n, k) {
    const res = []
    const nums = []
    const dic = {}
    for (let i = 1; i &lt;= n; i++) {
        nums[i - 1] = i
        dic[i - 1] = false
    }

    const traceBack = (stack) =&gt; {
        if (stack.length === nums.length) {
            res.push(stack.slice())
        }
        for (let i = 0; i &lt; nums.length; i++) {
            if (!dic[i]) {
                stack.push(nums[i])
                dic[i] = true
                traceBack(stack)
                stack.pop()
                dic[i] = false
            }

        }

    }
    traceBack([])
    return res[k - 1].join('')
};

console.log(getPermutation(4, 9));
</code></pre>
`},{index:["<h2>62\u4E0D\u540C\u8DEF\u5F84</h2>","<h3>\u65B9\u6CD5\u4E00</h3>","<h3>\u65B9\u6CD5\u4E8C</h3>"],path:"/posts_struct/62\u4E0D\u540C\u8DEF\u5F84.html",title:"62\u4E0D\u540C\u8DEF\u5F84",date:"2022-03-21",fontNum:1276,description:` 62\u4E0D\u540C\u8DEF\u5F84\r
 \u65B9\u6CD5\u4E00 \u56DE\u6EAF\u6CD5 \u8D85\u65F6\r
javascript\r
var uniquePaths = function(m, n) {\r
    //\u521D\u59CB\u5316\r
    const dp = []\r
    for (let i = 0; i < m; i) {\r
        dp[i] = []\r
        for (let j = 0; j < n; j) {`,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>62\u4E0D\u540C\u8DEF\u5F84</h2>
<h3>\u65B9\u6CD5\u4E00 \u56DE\u6EAF\u6CD5 \u8D85\u65F6</h3>
<pre><code class="language-javascript">var uniquePaths = function(m, n) {
    //\u521D\u59CB\u5316
    const dp = []
    for (let i = 0; i &lt; m; i++) {
        dp[i] = []
        for (let j = 0; j &lt; n; j++) {
            dp[i][j] = 0
        }
    }
    dp[0][0] = 1
    let count = 0
    const dfs = (x, y) =&gt; {
        //\u526A\u679D
        if (x === m - 1 &amp;&amp; y === n - 1) {
            count++
            return
        }

        if (x &lt; m - 1 &amp;&amp; !dp[x + 1][y]) {
            dp[x + 1][y] = 1
            dfs(x + 1, y)
            dp[x + 1][y] = 0
        }

        if (y &lt; n - 1 &amp;&amp; !dp[x][y + 1]) {
            dp[x][y + 1] = 1
            dfs(x, y + 1)
            dp[x][y + 1] = 0
        }
    }

    dfs(0, 0)

    return count
};
console.log(uniquePaths(23, 12));
// 193536720
</code></pre>
<h3>\u65B9\u6CD5\u4E8C \u52A8\u6001\u89C4\u5212\u6CD5</h3>
<pre><code class="language-javascript">var uniquePaths = function(m, n) {
    const store = []
    for (let i = 0; i &lt; m; i++) {
        store[i] = []
        for (let j = 0; j &lt; n; j++) {
            if (i === 0 || j === 0) {
                store[i][j] = 1
            } else {
                store[i][j] = store[i - 1][j] + store[i][j - 1]
            }
        }
    }
    return store[m - 1][n - 1]
};
// 193536720

console.log(uniquePaths(23, 12));
</code></pre>
`},{index:[],path:"/posts_struct/\u87BA\u65CB\u77E9\u96352.html",title:"\u87BA\u65CB\u77E9\u96352",date:"2022-03-21",fontNum:1041,description:`javascript\r
var generateMatrix = function(n) {\r
    const res = []\r
    //\u521D\u59CB\u5316\r
    for (let i = 0; i < n; i)[\r
        res[i] = []\r
    ]\r
\r
    let top = 0,\r
        left = 0,\r
        right = n`,tags:["\u8FED\u4EE3"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var generateMatrix = function(n) {
    const res = []
    //\u521D\u59CB\u5316
    for (let i = 0; i &lt; n; i++)[
        res[i] = []
    ]

    let top = 0,
        left = 0,
        right = n - 1,
        bottom = n - 1
        
    let count = 1
    while (true) {
        for (let i = left; i &lt;= right; i++) {
            res[top][i] = count
            count++
        }
        if (++top &gt; bottom) break //\u5F80\u4E0B\u51CF\u4E00\u5C42
            //\u4ECE\u4E0A\u5F80\u4E0B\u904D\u5386
        for (let i = top; i &lt;= bottom; i++) {
            res[i][right] = count
            count++
        }
        if (--right &lt; left) break //\u5F80\u5DE6\u51CF\u4E00\u5C42
            //\u4ECE\u53F3\u5F80\u5DE6\u904D\u5386
        for (let i = right; i &gt;= left; i--) {
            res[bottom][i] = count
            count++
        }
        if (--bottom &lt; top) break //\u5F80\u4E0A\u51CF\u4E00\u5C42
            //\u4ECE\u4E0B\u5F80\u4E0A\u904D\u5386
        for (let i = bottom; i &gt;= top; i--) {
            res[i][left] = count
            count++
        }
        if (++left &gt; right) break //\u5F80\u53F3\u51CF\u4E00\u5C42
    }

    return res

};

console.log(generateMatrix(4));
</code></pre>
`},{index:["<h3>html5\u91CC\u7684\u4E00\u4E9B\u65B0\u7684\u6807\u7B7E,object\u3001embed\u3001video\u3001audio\u90FD\u53EF\u4EE5\u6DFB\u52A0\u89C6\u9891\u6216\u97F3\u9891\u6587\u4EF6\u3002</h3>","<h3>audio\u901A\u8FC7js\u63A7\u5236</h3>"],path:"/posts_css/audio\u548Cembed\u7684\u533A\u522B.html",title:"audio\u548Cembed\u7684\u533A\u522B",date:"2022-03-20",fontNum:351,description:`\r
 html5\u91CC\u7684\u4E00\u4E9B\u65B0\u7684\u6807\u7B7E,object\u3001embed\u3001video\u3001audio\u90FD\u53EF\u4EE5\u6DFB\u52A0\u89C6\u9891\u6216\u97F3\u9891\u6587\u4EF6\u3002\r
\r
- embed\u662F\u9488\u5BF9\u975EIE\u7684\u6D4F\u89C8\u5668\u7684\u5A92\u4F53\u64AD\u653E\u5668\u3002\r
\r
- video\u662Fhtml5\u7684\u65B0\u6807\u51C6\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002\r
\r
- video\u652F\u6301\u4E09\u79CD\u5A92\u4F53\u7C7B\u578B\uFF0C\u5E38\u7528\u7684\u662Fmp4\u3002\r
\r
 audio\u901A\u8FC7js\u63A7\u5236 \u4E0D\u4F7F\u7528\u9ED8\u8BA4controls \u5C5E\u6027\r
javascript\r`,tags:["css"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>html5\u91CC\u7684\u4E00\u4E9B\u65B0\u7684\u6807\u7B7E,object\u3001embed\u3001video\u3001audio\u90FD\u53EF\u4EE5\u6DFB\u52A0\u89C6\u9891\u6216\u97F3\u9891\u6587\u4EF6\u3002</h3>
<ul>
<li>
<p>embed\u662F\u9488\u5BF9\u975EIE\u7684\u6D4F\u89C8\u5668\u7684\u5A92\u4F53\u64AD\u653E\u5668\u3002</p>
</li>
<li>
<p>video\u662Fhtml5\u7684\u65B0\u6807\u51C6\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002</p>
</li>
<li>
<p>video\u652F\u6301\u4E09\u79CD\u5A92\u4F53\u7C7B\u578B\uFF0C\u5E38\u7528\u7684\u662Fmp4\u3002</p>
</li>
</ul>
<h3>audio\u901A\u8FC7js\u63A7\u5236 \u4E0D\u4F7F\u7528\u9ED8\u8BA4controls \u5C5E\u6027</h3>
<pre><code class="language-javascript"> const audio = document.getElementsByClassName(&quot;bg-music&quot;)[0];
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
</code></pre>
`},{index:[],path:"/posts_struct/\u87BA\u65CB\u77E9\u9635.html",title:"\u87BA\u65CB\u77E9\u9635",date:"2022-03-20",fontNum:780,description:`javascript\r
var spiralOrder = function (matrix) {\r
    const rowLen = matrix.length\r
    const columnLen = matrix[0].length\r
    let up = 0, left = 0, down = rowLen - 1, right = columnLen - 1\r
    `,tags:["\u8FED\u4EE3"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var spiralOrder = function (matrix) {
    const rowLen = matrix.length
    const columnLen = matrix[0].length
    let up = 0, left = 0, down = rowLen - 1, right = columnLen - 1
    const res = []

    while (true) {
        //\u4ECE\u5DE6\u5F80\u53F3\u904D\u5386
        for (let i = left; i &lt;= right; i++) res.push(matrix[up][i])
        if (++up &gt; down) break//\u5F80\u4E0B\u51CF\u4E00\u5C42
        //\u4ECE\u4E0A\u5F80\u4E0B\u904D\u5386
        for (let i = up; i &lt;= down; i++) res.push(matrix[i][right])
        if (--right &lt; left) break//\u5F80\u5DE6\u51CF\u4E00\u5C42
        //\u4ECE\u53F3\u5F80\u5DE6\u904D\u5386
        for (let i = right; i &gt;= left; i--) res.push(matrix[down][i])
        if (--down &lt; up) break//\u5F80\u4E0A\u51CF\u4E00\u5C42
        //\u4ECE\u4E0B\u5F80\u4E0A\u904D\u5386
        for (let i = down; i &gt;= up; i--) res.push(matrix[i][left])
        if (++left &gt; right) break//\u5F80\u53F3\u51CF\u4E00\u5C42
    }
    return res
}

</code></pre>
`},{index:["<h3>\u52A8\u6001\u89C4\u5212\u6CD5</h3>","<h3>\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B</h3>","<h3>\u521D\u59CB\u5316</h3>"],path:"/posts_struct/\u8FDE\u7EED\u5B50\u6570\u7EC4\u6700\u5927\u548C.html",title:"\u8FDE\u7EED\u5B50\u6570\u7EC4\u6700\u5927\u548C",date:"2022-03-19",fontNum:553,description:`\r
\r
 \u52A8\u6001\u89C4\u5212\u6CD5 \u89E3\u51B3 \u8FDE\u7EED\u5B50\u6570\u7EC4\u6700\u5927\u548C\r
\r
 \u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B dp[i] =  dp[i-1]>0 ? dp[i-1]nums[i] : nums[i]\r
\r
 \u521D\u59CB\u5316 dp[0] = nums[0]\r
\r
javascript\r
const maxSubArray = function (nums) {\r
    const len = nums.length\r
`,tags:["\u52A8\u6001\u89C4\u5212\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u52A8\u6001\u89C4\u5212\u6CD5 \u89E3\u51B3 \u8FDE\u7EED\u5B50\u6570\u7EC4\u6700\u5927\u548C</h3>
<h3>\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B dp[i] =  dp[i-1]&gt;0 ? dp[i-1]+nums[i] : nums[i]</h3>
<h3>\u521D\u59CB\u5316 dp[0] = nums[0]</h3>
<pre><code class="language-javascript">const maxSubArray = function (nums) {
    const len = nums.length
    if (len === 0) return 0

    const dp = [] // \u4EE5nums[i]\u7ED3\u5C3E\u7684\u6700\u5927\u7684\u8FDE\u7EED\u5B50\u6570\u7EC4\u7684\u548C
    dp[0] = nums[0]

    for (let i = 1; i &lt; len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }

    return Math.max(...dp)
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//dp [-2, 1, -2, 4, 3, 5, 6, 1,  5]
console.log(maxSubArray(nums));
</code></pre>
`},{index:[],path:"/posts_struct/\u4E0B\u4E00\u4E2A\u6392\u5217.html",title:"\u4E0B\u4E00\u4E2A\u6392\u5217",date:"2022-03-18",fontNum:976,description:`javascript\r
const nums = [2, 3, 1]\r
var nextPermutation = function (nums) {\r
    //\u5F53\u524D\u6570\u7EC4\u8F6C\u6362\u6210number\u7684\u503C\r
    const curValue = nums.join('')\r
    //\u5F53\u524D\u6570\u7EC4\u7EC4\u5408\u7684\u6700\u5927\u503C\r
    let maxValue = nums.slice().sort((a, b)`,tags:["\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const nums = [2, 3, 1]
var nextPermutation = function (nums) {
    //\u5F53\u524D\u6570\u7EC4\u8F6C\u6362\u6210number\u7684\u503C
    const curValue = nums.join('')
    //\u5F53\u524D\u6570\u7EC4\u7EC4\u5408\u7684\u6700\u5927\u503C
    let maxValue = nums.slice().sort((a, b) =&gt; b - a).join('')
    //\u5F53\u524D\u503C\u7B49\u4E8E\u6700\u5927\u503C \u8FD4\u56DE\u6570\u7EC4\u6B63\u5E8F\u6392\u5217
    if (maxValue === curValue) {
        return nums.sort((a, b) =&gt; a - b)
    }
    //\u4ECE\u5012\u6570\u7B2C\u4E8C\u4E2A\u6570\u5F80\u524D\u904D\u5386
    for (let i = nums.length - 2; i &gt;= 0; i--) {
        //\u5982\u679C \u6BD4\u540E\u9762\u7684\u6570\u5C0F
        if (nums[i] &lt; nums[i + 1]) {
            //\u622A\u53D6i\u540E\u9762\u6240\u6709\u7684\u503C\u8FDB\u884C\u6392\u5E8F
            let after = nums.slice(i + 1).sort((a, b) =&gt; a - b)
            //\u627E\u5230\u5176\u4E2D\u7B2C\u4E00\u4E2A\u6BD4i\u5927\u7684\u503C\u548C i \u8FDB\u884C\u4EA4\u6362
            for (let e = 0; e &lt; after.length; e++) {
                if (after[e] &gt; nums[i]) {
                    [after[e], nums[i]] = [nums[i], after[e]]
                    break
                }
            }
            //\u5411nums\u4E2D\u6DFB\u52A0
            nums.splice(i + 1, nums.length, ...after)
            return nums
        }
    }
}

console.log(nextPermutation(nums));
</code></pre>
`},{index:["<h3>bfs</h3>"],path:"/posts_struct/\u4E8C\u53C9\u6811\u5C42\u5E8F\u904D\u5386.html",title:"\u4E8C\u53C9\u6811\u5C42\u5E8F\u904D\u5386",date:"2022-03-18",fontNum:974,description:` bfs \u4F7F\u7528\u7684\u662F \u961F\u5217\r
javascript\r
const input = [3, 9, 20, null, null, 15, 7]\r
function bfs(input) {\r
    const res = []\r
    //\u83B7\u53D6\u6839\u8282\u70B9\r
    const root = input[0]\r
\r
    if (root === null) return res\r
   `,tags:["bfs"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>bfs \u4F7F\u7528\u7684\u662F \u961F\u5217</h3>
<pre><code class="language-javascript">const input = [3, 9, 20, null, null, 15, 7]
function bfs(input) {
    const res = []
    //\u83B7\u53D6\u6839\u8282\u70B9
    const root = input[0]

    if (root === null) return res
    
    const q = []
    q.unshift({ index: 0, value: input[0] })

    while (q.length &gt; 0) {
        let len = q.length
        const list = [] //\u961F\u5217
        while (len &gt; 0) {
            const cur = q.pop() //\u51FA\u961F\u5217

            list.push(cur.value)
            const i = cur.index
            const left = 2 * i + 1 // \u5DE6\u53F3\u5B50\u8282\u70B9\u5728\u6570\u7EC4\u4E2D\u7684\u4F4D\u7F6E
            const right = 2 * i + 2
            if (input[left] &amp;&amp; input[left] !== null) {
                q.unshift({ index: left, value: input[left] }) //\u5B50\u8282\u70B9\u5165\u961F\u5217
            }
            if (input[right] &amp;&amp; input[right] !== null) {
                q.unshift({ index: right, value: input[right] })
            }
            len -= 1
        }
        res.push(list)
    }
    return res
}
console.log(bfs(input));
</code></pre>
`},{index:[],path:"/posts_struct/\u5168\u6392\u52172.html",title:"\u5168\u6392\u5217(\u6570\u7EC4\u4E2D\u6709\u76F8\u540C\u7684\u503C)",date:"2022-03-18",fontNum:1016,description:`javascript\r
var permuteUnique = function (nums) {\r
    const dic = {}\r
    const res = []\r
\r
    //\u751F\u6210\u4EE5\u7D22\u5F15\u4E3Akey\u7684\u5B57\u5178 ****** \u548C\u666E\u901A\u5168\u6392\u5217\u7684\u533A\u522B dic \u662F\u4EE5\u7D22\u5F15\u4E3Akey \u591A\u4E86\u53BB\u91CD\u6570\u7EC4\r
    for (let i = 0; i < nums.length; i) {\r
  `,tags:["\u56DE\u6EAF\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var permuteUnique = function (nums) {
    const dic = {}
    const res = []

    //\u751F\u6210\u4EE5\u7D22\u5F15\u4E3Akey\u7684\u5B57\u5178 ****** \u548C\u666E\u901A\u5168\u6392\u5217\u7684\u533A\u522B dic \u662F\u4EE5\u7D22\u5F15\u4E3Akey \u591A\u4E86\u53BB\u91CD\u6570\u7EC4
    for (let i = 0; i &lt; nums.length; i++) {
        if (dic[i] == undefined) {
            dic[i] = false
        }
    }
    //\u56DE\u6EAF\u6CD5
    traceBack(nums, res, dic, [], [])

    return res
};
// nums \u4F20\u5165\u7684\u6570\u7EC4\uFF0C res \u8FD4\u56DE\u7684\u7ED3\u679C\uFF0C dic\u7D22\u5F15\u5B57\u5178\uFF0C stack \u56DE\u6EAF\u6808 \uFF0CremRep \u53BB\u91CD\u6570\u7EC4
function traceBack(nums, res, dic, stack, remRep) {
    if (nums.length === stack.length) {
        if (!remRep.includes(stack.slice().join(','))) {
            remRep.push(stack.slice().join(','))
            res.push(stack.slice())
        }

        return
    }
    for (let j = 0; j &lt; nums.length; j++) {
        if (dic[j] === false) {
            stack.push(nums[j])
            dic[j] = true
            traceBack(nums, res, dic, stack, remRep)
            stack.pop()
            dic[j] = false

        }
    }
}
const nums = [1, 1, 2]
console.log(permuteUnique(nums));
</code></pre>
`},{index:["<h3>input{</h3>"],path:"/posts_css/\u53BB\u9664input\u83B7\u5F97\u7126\u70B9\u540E\u7684\u8FB9\u6846.html",title:"\u53BB\u6389input\u6807\u7B7E\u83B7\u53D6\u7126\u70B9\u540E\u7684\u8FB9\u6846",date:"2022-03-17",fontNum:54,description:`\r
 input{ outline: none }\r
\r
input{ outline: none }`,tags:["css"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>input{ outline: none }</h3>
<p>input{ outline: none }</p>
`},{index:["<h3>\u65B9\u6CD51</h3>","<h3>\u65B9\u6CD52</h3>"],path:"/posts_html/\u70B9\u51FB\u5F39\u6846\u5916\u5F39\u6846\u6D88\u5931.html",title:"\u70B9\u51FB\u5F39\u6846\u5916\u5F39\u6846\u6D88\u5931",date:"2022-03-17",fontNum:541,description:` \u65B9\u6CD51 \u6839\u636EclassName\u5224\u65AD\r
javascript\r
\r
document.addEventListener("click", (e) => {\r
  if (e.target.className === [className])) {\r
    showFlag.value = false;\r
  }\r
});\r
\r
\r
\r
 \u65B9\u6CD52 \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\r
\r
`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u65B9\u6CD51 \u6839\u636EclassName\u5224\u65AD</h3>
<pre><code class="language-javascript">
document.addEventListener(&quot;click&quot;, (e) =&gt; {
  if (e.target.className === [className])) {
    showFlag.value = false;
  }
});

</code></pre>
<h3>\u65B9\u6CD52 \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</h3>
<pre><code class="language-javascript">setTimeout(() =&gt; {
  const dialog = document.getElementsByClassName(&quot;search-dialog&quot;)[0];
  dialog.addEventListener(&quot;click&quot;, (e) =&gt; {
    e.stopPropagation();
  });
  const searchBtn = document.getElementsByClassName(&quot;search-btn&quot;)[0];
  searchBtn.addEventListener(&quot;click&quot;, (e) =&gt; {
    e.stopPropagation();
  });
});
</code></pre>
`},{index:[],path:"/posts_struct/n\u7687\u540E\u95EE\u9898.html",title:"leetcode 51 n\u7687\u540E\u95EE\u9898 I \u548C II",date:"2022-03-17",fontNum:1554,description:`javascript\r
var solveNQueens = function (n) {\r
    //Quee \u5728\u6BCF\u4E00\u884C\u7684\u4F4D\u7F6E\r
    const position = []\r
    //\u8F93\u51FA\u7ED3\u679C\r
    const result = []\r
    //\u56DE\u6EAF\u6CD5\r
    function dfs(x) {\r
        //\u526A\u679D\u6761\u4EF6\r
        if (x === n)`,tags:["\u56DE\u6EAF\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var solveNQueens = function (n) {
    //Quee \u5728\u6BCF\u4E00\u884C\u7684\u4F4D\u7F6E
    const position = []
    //\u8F93\u51FA\u7ED3\u679C
    const result = []
    //\u56DE\u6EAF\u6CD5
    function dfs(x) {
        //\u526A\u679D\u6761\u4EF6
        if (x === n) {
            //resItem \u6BCF\u79CD\u7ED3\u679C\u4E2D\u7684\u6BCF\u4E00\u884C
            let resItem = []
            for (let i = 0; i &lt; n; i++) {
                resItem.push('.')
            }
            //res \u4E3A\u6BCF\u79CD\u7ED3\u679C
            let res = []
            for (const e of position) {
                resItem[e] = 'Q'
                res.push(resItem.join(''))
                resItem[e] = '.'
            }
            result.push(res)
            return
        }
        //\u5224\u65AD\u6BCF\u4E00\u884C\u6BCF\u4E00\u4E2A\u8282\u70B9\u662F\u5426\u7B26\u5408
        for (let y = 0; y &lt; n; y++) {
            if (check(x, y)) {
                position[x] = y
                dfs(x + 1)
                position[x] = 0
            }
        }
    }

    //\u5224\u65AD\u7B2Crow \u884Cqueue\u80FD\u5426\u653E\u5728\u7B2Ci\u5217\u4E0A
    function check(x, y) {
        //\u9ED8\u8BA4\u6BCF\u884C\u53EA\u6709\u4E00\u4E2A
        for (let row = 0; row &lt; x; row++) {
            //row &lt; x \u5224\u65AD\u5230x\uFF08\u5F53\u524D\u884C\uFF09\u884C\u4E3A\u6B62
            const column = position[row]//\u83B7\u53D6\u4E4B\u524D\u6BCF\u4E00\u884C\u7684\u5217\u503C
            //\u5224\u65AD\u662F\u5426\u5728\u4E00\u5217
            if (column === y) return false
            //\u5224\u65AD\u662F\u5426\u5728\u4E00\u53F3\u4E0A\u5BF9\u89D2\u7EBF \u53F3\u4E0A\u5BF9\u89D2\u7EBF \u6A2A\u7EB5\u5750\u6807\u548C\u76F8\u540C
            if (row + column === x + y) return false
            //\u5224\u65AD\u662F\u5426\u5728\u4E00\u53F3\u4E0B\u5BF9\u89D2\u7EBF \u53F3\u4E0B\u5BF9\u89D2\u7EBF \u6A2A\u7EB5\u5750\u6807\u5DEE\u76F8\u540C
            if (row - column === x - y) return false

        }
        return true
    }

    dfs(0)


    return result

};

console.log(solveNQueens(4));

// [
//     ['.Q..', '...Q', 'Q...', '..Q.'],
//     ['..Q.', 'Q...', '...Q', '.Q..']
// ]

</code></pre>
`},{index:["<h3>\u8D77\u56E0</h3>","<h3>\u6253\u5305\u6210\u529F\u7684\u60C5\u51B5\u4E0B</h3>","<h3>\u6253\u5305\u5931\u8D25\u7684\u60C5\u51B5\u4E0B</h3>","<h3>\u539F\u56E0</h3>","<h3>\u89E3\u51B3\u65B9\u6CD5</h3>"],path:"/posts_vue/documentIsUndefined.html",title:"Hydration completed but contains mismatches.\u62A5\u9519",date:"2022-03-17",fontNum:758,description:` \u8D77\u56E0\r
\r
\u7ED9\u5F39\u6846\u8BBE\u7F6E\u70B9\u51FB\u754C\u9762\u6D88\u5931\u7684\u529F\u80FD\r
\r
 \u6253\u5305\u6210\u529F\u7684\u60C5\u51B5\u4E0B \u6D4F\u89C8\u5668\u62A5\u9519\r
\r
 Hydration completed but contains mismatches.\r
\r
 \u6253\u5305\u5931\u8D25\u7684\u60C5\u51B5\u4E0B\r
\r
yarn build \u62A5 document is undefined\r
\r
 \u539F\u56E0\r
\r
\u6784\u5EFA\u9879\u76EE\u7684\u65F6\u5019dom\u8282\u70B9\u8FD8\u672A\u6E32\u67D3\u51FA\u6765\u5C31\u53BB\u8BBF\u95EEdocument\r
\r
`,tags:["vue"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u8D77\u56E0</h3>
<p>\u7ED9\u5F39\u6846\u8BBE\u7F6E\u70B9\u51FB\u754C\u9762\u6D88\u5931\u7684\u529F\u80FD</p>
<h3>\u6253\u5305\u6210\u529F\u7684\u60C5\u51B5\u4E0B \u6D4F\u89C8\u5668\u62A5\u9519</h3>
<p>Hydration completed but contains mismatches.</p>
<h3>\u6253\u5305\u5931\u8D25\u7684\u60C5\u51B5\u4E0B</h3>
<p>yarn build \u62A5 document is undefined</p>
<h3>\u539F\u56E0</h3>
<p>\u6784\u5EFA\u9879\u76EE\u7684\u65F6\u5019dom\u8282\u70B9\u8FD8\u672A\u6E32\u67D3\u51FA\u6765\u5C31\u53BB\u8BBF\u95EEdocument</p>
<h3>\u89E3\u51B3\u65B9\u6CD5</h3>
<p>nextTick \u4E0D\u53EF\u4EE5</p>
<pre><code class="language-javascript">onBeforeMount(() =&gt; {
  (function () {
    document.addEventListener(&quot;click&quot;, (e) =&gt; {
      showSearchDiolag.value = false;
    });
    setTimeout(() =&gt; {
      const dialog = document.getElementsByClassName(&quot;search-dialog&quot;)[0];
      dialog.addEventListener(&quot;click&quot;, (e) =&gt; {
        e.stopPropagation();
      });
      const searchBtn = document.getElementsByClassName(&quot;search-btn&quot;)[0];
      searchBtn.addEventListener(&quot;click&quot;, (e) =&gt; {
        e.stopPropagation();
      });
    });
  })();
});
</code></pre>
`},{index:[],path:"/posts_element_ui/el_progress.html",title:"element progress \u63A7\u5236\u8FDB\u5EA6\u6761\u989C\u8272",date:"2022-03-16",fontNum:1303,description:`javascript\r
<template>\r
  <div>\r
    <el-progress\r
      :percentage="percentage"\r
      :format="format"\r
      :color="customColors"\r
    ></el-progress>\r
    <!-- :status="status" -->\r
    <!-- `,tags:["element"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">&lt;template&gt;
  &lt;div&gt;
    &lt;el-progress
      :percentage=&quot;percentage&quot;
      :format=&quot;format&quot;
      :color=&quot;customColors&quot;
    &gt;&lt;/el-progress&gt;
    &lt;!-- :status=&quot;status&quot; --&gt;
    &lt;!-- :color=&quot;customColorMethod&quot; \u63A7\u5236\u989C\u8272\u65B9\u5F0F\u4E00--&gt;
    &lt;!-- :color=&quot;customColors&quot; \u63A7\u5236\u989C\u8272\u65B9\u5F0F\u4E8C--&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
//format  \u548Cstatus \u4E00\u8D77\u4F1A\u88AB status \u8986\u76D6\u6389
export default {
  mounted() {
    setInterval(() =&gt; {
      if (this.percentage === 100) {
        return;
      }
      this.percentage += 10;
    }, 1000);
  },
  data() {
    return {
      percentage: 0,
      // status: &quot;success&quot;,
      customColors: [
        { color: &quot;#f56c6c&quot;, percentage: 20 },
        { color: &quot;#e6a23c&quot;, percentage: 40 },
        { color: &quot;#5cb87a&quot;, percentage: 60 },
        { color: &quot;#1989fa&quot;, percentage: 80 },
        { color: &quot;#6f7ad3&quot;, percentage: 100 },
      ],
    };
  },
  methods: {
    format(percentage) {
      console.log(&quot;format(percentage)&quot;);
      return percentage === 100 ? &quot;\u6EE1&quot; : \`\${percentage}%\`;
    },
    // customColorMethod(percentage) {
    //   if (percentage &lt; 30) {
    //     return &quot;#909399&quot;;
    //   } else if (percentage &lt; 70) {
    //     return &quot;#e6a23c&quot;;
    //   } else {
    //     return &quot;#67c23a&quot;;
    //   }
    // },
  },
};
&lt;/script&gt;
</code></pre>
`},{index:["<h3>glob</h3>","<h3>globby</h3>"],path:"/posts/\u5339\u914D\u6587\u4EF6node\u63D2\u4EF6.html",title:"\u5339\u914D\u6587\u4EF6node\u63D2\u4EF6 - glob | globby",date:"2022-03-15",fontNum:78,description:` glob\r
\u4F7F\u7528\u89C4\u5219\u83B7\u53D6\u5339\u914D\u7684\u6587\u4EF6\r
\r
 globby\r
globby\uFF0C\u662F\u57FA\u4E8E glob \u529F\u80FD\u589E\u5F3A\r
globby \u8FD4\u56DE\u4E00\u4E2A promise`,tags:["node"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>glob</h3>
<p>\u4F7F\u7528\u89C4\u5219\u83B7\u53D6\u5339\u914D\u7684\u6587\u4EF6</p>
<h3>globby</h3>
<p>globby\uFF0C\u662F\u57FA\u4E8E glob \u529F\u80FD\u589E\u5F3A
globby \u8FD4\u56DE\u4E00\u4E2A promise</p>
`},{index:[],path:"/posts/Kruskal\u7B97\u6CD5.html",title:"Kruskal\u7B97\u6CD5",date:"2022-03-12",fontNum:1300,description:`\r
javascript\r
const graph = [\r
    /**\r
*   A, B, C, D, E, F\r
*   0, 1, 2, 3, 4 ,5\r
    **/\r
    [0, 2, 4, 0, 0, 0],//0 A     \r
    [2, 0, 2, 4, 2, 0],//1 B\r
    [4, 2, 0, 0, 3, 0],//2 C\r
    [0, 4`,tags:["\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const graph = [
    /**
*   A, B, C, D, E, F
*   0, 1, 2, 3, 4 ,5
    **/
    [0, 2, 4, 0, 0, 0],//0 A     
    [2, 0, 2, 4, 2, 0],//1 B
    [4, 2, 0, 0, 3, 0],//2 C
    [0, 4, 0, 0, 3, 2],//3 D
    [0, 2, 3, 3, 0, 2],//4 E
    [0, 0, 0, 2, 2, 0] //5 F
]
 
 
function kruskal(graph) {
    const { length } = graph
    const parent = []
    let count = 0 //\u8FB9
    let a, b
 
    const grapCopy = JSON.parse(JSON.stringify(graph))
 
    while (count &lt; length - 1) {
 
        //\u627E\u51FA\u6743\u503C\u6700\u5C0F\u7684\u8FB9
        for (let i = 0, min = Number.MAX_SAFE_INTEGER; i &lt; length; i++) {
            for (let j = 0; j &lt; length; j++) {
                if (grapCopy[i][j] &lt; min) {
                    min = grapCopy[i][j]
                    a = u = i
                    b = v = j
                }
            }
        }
 
        if ((!parent.includes(a) || !parent.includes(b)) &amp;&amp; a !== b) {
            parent[b] = a
            // !parent.includes(a) ? parent.push(a) : null
            // !parent.includes(b) ? parent.push(b) : null
            console.log('a -&gt; b:', a, '-&gt;', b);
            count++
        }
 
 
 
 
        grapCopy[a][b] = grapCopy[b][a] = Number.MAX_SAFE_INTEGER
    }
    return parent
}
 
console.log(kruskal(graph));
</code></pre>
`},{index:["<h2>\u80CC\u666F</h2>","<h3>\u73B0\u72B6</h3>","<h2>\u64CD\u4F5C</h2>","<h3>\u6253\u5305\u548C\u4E0A\u4F20</h3>","<h3>\u57DF\u540D\u8D2D\u4E70\u4E0E\u4F7F\u7528</h3>","<h2>\u4ECA\u540E\u76EE\u6807</h2>"],path:"/posts/\u535A\u5BA2\u642D\u5EFA.html",title:"\u535A\u5BA2\u642D\u5EFA\u7B14\u8BB0",date:"2022-03-12",fontNum:731,description:`\r
 \u80CC\u666F\r
\r
\u4E4B\u524D\u7684\u535A\u5BA2\u91C7\u7528\u7684\u662Fhexo\uFF0C\u7531\u4E8E\u67D0\u4E9B\u539F\u56E0\u5BFC\u81F4\u6E90\u7801\u4E22\u5931\u3002\u540E\u53C8\u4F7F\u7528\u4E86\u4E00\u6BB5\u65F6\u95F4csdn\uFF0C\u7B80\u4E66\uFF0C\u53EF\u80FD\u6211\u73A9\u4E0D\u592A\u6765\uFF0C\u6545\u6700\u8FD1\u840C\u751F\u8FC1\u79FB\u535A\u5BA2\u7684\u60F3\u6CD5\uFF0C\u6709\u5C1D\u8BD5\u8FC7\u4F7F\u7528vuepress\uFF0C\u5948\u4F55webpack\u6253\u5305\u901F\u5EA6\u611F\u4EBA\uFF0C\u7ECF\u8FC7\u8C03\u67E5\u7814\u7A76\u6700\u7EC8\u51B3\u5B9A\u91C7\u7528vitepress\u6765\u642D\u5EFA\u3002\r
\r
 \u73B0\u72B6\r
\r
\u535A\u5BA2\u6682\u65F6\u662F\u653E\u5728 gitHub \u670D\u52A1\u5668\u4E0A\uFF0C\u6E90\u7801\u5730\u5740 [https://github.com/creacing/`,tags:["\u5EFA\u7AD9"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u80CC\u666F</h2>
<p>\u4E4B\u524D\u7684\u535A\u5BA2\u91C7\u7528\u7684\u662Fhexo\uFF0C\u7531\u4E8E\u67D0\u4E9B\u539F\u56E0\u5BFC\u81F4\u6E90\u7801\u4E22\u5931\u3002\u540E\u53C8\u4F7F\u7528\u4E86\u4E00\u6BB5\u65F6\u95F4csdn\uFF0C\u7B80\u4E66\uFF0C\u53EF\u80FD\u6211\u73A9\u4E0D\u592A\u6765\uFF0C\u6545\u6700\u8FD1\u840C\u751F\u8FC1\u79FB\u535A\u5BA2\u7684\u60F3\u6CD5\uFF0C\u6709\u5C1D\u8BD5\u8FC7\u4F7F\u7528vuepress\uFF0C\u5948\u4F55webpack\u6253\u5305\u901F\u5EA6\u611F\u4EBA\uFF0C\u7ECF\u8FC7\u8C03\u67E5\u7814\u7A76\u6700\u7EC8\u51B3\u5B9A\u91C7\u7528vitepress\u6765\u642D\u5EFA\u3002</p>
<h3>\u73B0\u72B6</h3>
<p>\u535A\u5BA2\u6682\u65F6\u662F\u653E\u5728 gitHub \u670D\u52A1\u5668\u4E0A\uFF0C\u6E90\u7801\u5730\u5740 <a href="https://github.com/creacing/myBlog">https://github.com/creacing/myBlog</a> \u76EE\u524D\u8FD8\u662F\u521D\u59CB\u7248\u672C\u8FD8\u6709\u5F88\u591A\u4E0D\u5B8C\u5584\u7684\u5730\u65B9\u3002</p>
<blockquote>
<p>\u505A\u535A\u5BA2\u6700\u4E3B\u8981\u7684\u76EE\u7684\u8FD8\u662F\u5E0C\u671B\u6709\u4E2A\u5730\u65B9\u80FD\u591F\u8BB0\u5F55\u4E0B\u81EA\u5DF1\u7684\u5B66\u4E60\u7ECF\u5386\uFF0C\u642D\u5EFA\u535A\u5BA2\u7684\u672C\u751F\u4E5F\u662F\u4E00\u4E2A\u5B66\u4E60\u8FC7\u7A0B\uFF0C\u642D\u5EFA\u4E2D\u4E5F\u987A\u4FBF\u5B66\u4E60\u4E86\u4E0Bvue3 \u548C TS\u3002</p>
</blockquote>
<h2>\u64CD\u4F5C</h2>
<h3>\u6253\u5305\u548C\u4E0A\u4F20</h3>
<p>yarn build \u6253\u5305\u597D\u672C\u5730\u4EE3\u7801\u3002
\u5728github\u65B0\u5EFA\u4ED3\u5E93\uFF0C\u5C06\u6253\u5305\u597D\u540E\u7684\u4EE3\u7801\u4E0A\u4F20\u5230\u4ED3\u5E93\u3002</p>
<h3>\u57DF\u540D\u8D2D\u4E70\u4E0E\u4F7F\u7528</h3>
<p>\u5728\u963F\u91CC\u4E91\u8D2D\u4E70\u5B8C\u57DF\u540D\u4E4B\u540E,\u5728\u9879\u76EE\u4E0B\u6784\u5EFACNAME \u6587\u4EF6\u4E0D\u5E26 www \u548C http \u5199\u5165\u4F60\u8D2D\u4E70\u7684\u57DF\u540D</p>
<p><img src="/ympz1.png" alt="\u57DF\u540D\u914D\u7F6E"></p>
<p>\u5728github\u7684\u9879\u76EE\u4E0B\u8FDB\u5165setting \u9875\u9762\uFF0C\u5F80\u4E0B\u627E\u5230GitHub Pages \u70B9\u51FBCheck it out here!</p>
<p><img src="/ympz2.png" alt="\u57DF\u540D\u914D\u7F6E"></p>
<p>\u5728\u6B64\u5904\u8F93\u5165\u4F60\u8D2D\u4E70\u7684\u57DF\u540D\uFF0C\u7136\u540E\u5728\u963F\u91CC\u4E91\u627E\u5230\u4F60\u8D2D\u4E70\u7684\u57DF\u540D\uFF0C\u70B9\u51FB\u540E\u65B9\u7684\u89E3\u6790</p>
<p><img src="/ympz3.png" alt="\u57DF\u540D\u914D\u7F6E"></p>
<p>\u6309\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u914D\u7F6E</p>
<p><img src="/ympz4.png" alt="\u57DF\u540D\u914D\u7F6E"></p>
<h2>\u4ECA\u540E\u76EE\u6807</h2>
<p>\u65B0\u7684\u535A\u5BA2\u65B0\u7684\u5F00\u59CB\uFF0C\u4ECA\u540E\u7684\u65E5\u5B50\u4E5F\u8981\u4E0D\u65AD\u6FC0\u52B1\u81EA\u5DF1\u521B\u4F5C\u5B66\u4E60\u3002</p>
`},{index:['<h2>\u7F51\u7AD9\u7684meta\u6807\u7B7E\u6709property="og:title"\u8FD9\u4E2A\u5C5E\u6027</h2>',"<h2>yarn</h2>"],path:"/posts/\u642D\u5EFA\u535A\u5BA2\u4E2D\u95EE\u9898\u8BB0\u5F55.html",title:"\u535A\u5BA2\u642D\u5EFA\u4E2D\u9047\u5230\u7684\u95EE\u9898\u8BB0\u5F55",date:"2022-03-01",fontNum:366,description:` \u7F51\u7AD9\u7684meta\u6807\u7B7E\u6709property="og:title"\u8FD9\u4E2A\u5C5E\u6027\r
og\u662F\u4E00\u79CD\u65B0\u7684HTTP\u5934\u90E8\u6807\u8BB0\uFF0C\u5373Open Graph Protocol\uFF0C\u8FD9\u79CD\u534F\u8BAE\u53EF\u4EE5\u8BA9\u7F51\u9875\u6210\u4E3A\u4E00\u4E2A\u201C\u5BCC\u5A92\u4F53\u5BF9\u8C61\u201D\u3002\r
\u4F7F\u7528Meta Property=og\u6807\u7B7E\uFF0C\u5C31\u4EE3\u8868\u540C\u610F\u4E86\u7F51\u9875\u5185\u5BB9\u53EF\u4EE5\u88AB\u5176\u4ED6\u793E\u4F1A\u5316\u7F51\u7AD9\u5F15\u7528\u3002\u4F7F\u7528\u5B83\u7684\u597D\u5904\uFF1A\r
1\u3001\u80FD\u591F\u6B63\u786E\u88AB\u8718\u86DB\u6293\u53D6\u5185\u5BB9\u5230\u767E\u5EA6\u7F51\u9875\u641C\u7D22\uFF1B2\u3001\u4F7F\u5185\u5BB9\u66F4\u6709\u6548\u7684\u5728\u767E\u5EA6\u7ED3\u6784\u5316\u5C55\u73B0\uFF1B3\u3001\u80FD\u6B63\u786E\u7684\u5206\u4EAB\u5185\u5BB9`,tags:["\u5EFA\u7AD9"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u7F51\u7AD9\u7684meta\u6807\u7B7E\u6709property=&quot;og:title&quot;\u8FD9\u4E2A\u5C5E\u6027</h2>
<p>og\u662F\u4E00\u79CD\u65B0\u7684HTTP\u5934\u90E8\u6807\u8BB0\uFF0C\u5373Open Graph Protocol\uFF0C\u8FD9\u79CD\u534F\u8BAE\u53EF\u4EE5\u8BA9\u7F51\u9875\u6210\u4E3A\u4E00\u4E2A\u201C\u5BCC\u5A92\u4F53\u5BF9\u8C61\u201D\u3002
\u4F7F\u7528Meta Property=og\u6807\u7B7E\uFF0C\u5C31\u4EE3\u8868\u540C\u610F\u4E86\u7F51\u9875\u5185\u5BB9\u53EF\u4EE5\u88AB\u5176\u4ED6\u793E\u4F1A\u5316\u7F51\u7AD9\u5F15\u7528\u3002\u4F7F\u7528\u5B83\u7684\u597D\u5904\uFF1A
1\u3001\u80FD\u591F\u6B63\u786E\u88AB\u8718\u86DB\u6293\u53D6\u5185\u5BB9\u5230\u767E\u5EA6\u7F51\u9875\u641C\u7D22\uFF1B2\u3001\u4F7F\u5185\u5BB9\u66F4\u6709\u6548\u7684\u5728\u767E\u5EA6\u7ED3\u6784\u5316\u5C55\u73B0\uFF1B3\u3001\u80FD\u6B63\u786E\u7684\u5206\u4EAB\u5185\u5BB9\u5230SNS\u7F51\u7AD9\uFF1B4\u3001\u80FD\u8BA9\u5185\u5BB9\u66F4\u6709\u6548\u7684\u5728SNS\u7F51\u7EDC\u4E2D\u4F20\u64AD\uFF1B
\u7B80\u800C\u8A00\u4E4B\uFF0C\u4F7F\u7528og:\u53EF\u4EE5\u8BA9\u4F60\u7684\u5185\u5BB9\u5728\u88AB\u5206\u4EAB\u65F6\u6B63\u786E\u5C55\u73B0\uFF0C\u5E76\u4E14\u6709\u5229\u4E8E\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u5C55\u73B0\u3002\u4F7F\u7528og\u6807\u7B7E\u5BF9\u4E8E\u8C37\u6B4Cseo\u6709\u4E00\u5B9A\u7684\u5E2E\u52A9\uFF0C\u5BF9\u4E8E\u767E\u5EA6\u6765\u8BF4\u6548\u679C\u672A\u77E5\u3002</p>
<h2>yarn build</h2>
<p>build\u7684\u65F6\u5019md\u6587\u4EF6\u5E26'\uFF0C'\u7279\u6B8A\u7B26\u53F7\u53EF\u80FD\u4F1A\u5F15\u8D77build\u5931\u8D25
\u56FE\u7247\u5E26\u4E2D\u6587\u540D\u4E5F\u4F1A\u62A5\u9519</p>
`},{index:[],path:"/posts/\u786C\u5E01\u95EE\u9898.html",title:"\u89E3\u786C\u5E01\u95EE\u9898",date:"2022-02-22",fontNum:523,description:`javascript\r
const cs = [1, 2, 5]\r
const ac = 10\r
 \r
function h(n) {\r
    const c = [0]\r
    if (n === 0) {\r
        return 0\r
    }\r
 \r
    for (let i = 1; i <= n; i) {\r
        let co = Infinity`,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const cs = [1, 2, 5]
const ac = 10
 
function h(n) {
    const c = [0]
    if (n === 0) {
        return 0
    }
 
    for (let i = 1; i &lt;= n; i++) {
        let co = Infinity
        console.log(co, c[i - 1] + 1);
        if (i - 1 &gt;= 0) co = Math.min(co, c[i - 1] + 1)
        if (i - 2 &gt;= 0) co = Math.min(co, c[i - 2] + 1)
        if (i - 5 &gt;= 0) co = Math.min(co, c[i - 5] + 1)
 
        c[i] = co
    }
    console.log(c);
    console.log(c[n]);
    return c[n]
 
}
 
h(10)
</code></pre>
`},{index:[],path:"/posts/\u65CB\u8F6C\u77E9\u9635.html",title:"\u65CB\u8F6C\u77E9\u9635",date:"2022-02-21",fontNum:620,description:`javascript\r
const arr = [\r
    [1, 2, 3],   //[7,4,1]\r
    [4, 5, 6],   //[8,5,2]\r
    [7, 8, 9]]   //[9,6,3]\r
 \r
function demo(arr) {\r
    const n = arr.length\r
    for (let i = 0; i < n; i) {\r
`,tags:["\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const arr = [
    [1, 2, 3],   //[7,4,1]
    [4, 5, 6],   //[8,5,2]
    [7, 8, 9]]   //[9,6,3]
 
function demo(arr) {
    const n = arr.length
    for (let i = 0; i &lt; n; i++) {
        for (let j = i; j &lt; n; j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
        }
    }
    console.log(arr);
 
    for (let i = 0; i &lt; n; i++) {
        for (let j = 0; j &lt; Math.floor(n / 2); j++) {
            [arr[i][j], arr[i][n - j - 1]] = [arr[i][n - j - 1], arr[i][j]]
        }
    }
    console.log(arr);
}
 
demo(arr)
//\u5148\u4EA4\u6362\u5BF9\u89D2\u7EBF
//\u5DE6\u65CB\u4EA4\u6362\u884C i\u884C\u548Cn-i-1\u884C
//\u4F18\u9009\u4EA4\u6362\u5217 j\u5217\u548Cn-j-1\u884C
</code></pre>
`},{index:[],path:"/posts/react\u4E2D\u5B9E\u73B0v-for.html",title:"react \u4E2D\u5B9E\u73B0v-for",date:"2022-02-10",fontNum:638,description:`javascript\r
import React from 'react';\r
import ReactDOM from 'react-dom';\r
 \r
class List extends React.Component {\r
  constructor(props) {\r
    super(props)\r
    this.state = {\r
      citys: ['\u4E0A\u6D77',`,tags:["react"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">import React from 'react';
import ReactDOM from 'react-dom';
 
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      citys: ['\u4E0A\u6D77', '\u5317\u4EAC', '\u5357\u4EAC']
    }
  }
 
  render() {
 
    let citys = this.state.citys.map(city =&gt; {
      return &lt;li key={city}&gt;{city}&lt;/li&gt;
    })
    return (&lt;div&gt;
      &lt;ul&gt;
        {citys}
      &lt;/ul&gt;
    &lt;/div&gt;)
  }
 
  changeValue(event) {
    console.log('event', event);
    this.setState({
      inputValue: event.target.value
    });
  }
}
 
 
ReactDOM.render(
  &lt;List /&gt;,
  document.getElementById('root')
);
</code></pre>
`},{index:[],path:"/posts/react\u8F93\u5165\u6846\u6570\u636E\u7ED1\u5B9A.html",title:"react \u8F93\u5165\u6846\u6570\u636E\u7ED1\u5B9A",date:"2022-02-10",fontNum:585,description:`javascript\r
import React from 'react';\r
import ReactDOM from 'react-dom';\r
 \r
 \r
class NInput extends React.Component {\r
  constructor(props) {\r
    super(props)\r
    this.state = {\r
      inputVal`,tags:["react"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">import React from 'react';
import ReactDOM from 'react-dom';
 
 
class NInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 33
    }
  }
 
  render() {
    return (&lt;div&gt;
      &lt;input value={this.state.inputValue} onChange={(event) =&gt; this.changeValue(event)} /&gt;
    &lt;/div&gt;)
  }
 
  changeValue(event) {
    console.log('event', event);
    this.setState({
      inputValue: event.target.value
    });
  }
}
 
 
ReactDOM.render(
  &lt;NInput /&gt;,
  document.getElementById('root')
);
</code></pre>
`},{index:[],path:"/posts/node\u6267\u884C\u5916\u90E8\u811A\u672C.html",title:"node\u6267\u884C\u5916\u90E8\u811A\u672C",date:"2022-01-26",fontNum:760,description:`javascript\r
function execCMD(cmd) {\r
    const { spawn } = require('child_process');\r
    const fs = require('fs')\r
    const iconv = require('iconv-lite');\r
    const config = {\r
        encoding:`,tags:["node"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">function execCMD(cmd) {
    const { spawn } = require('child_process');
    const fs = require('fs')
    const iconv = require('iconv-lite');
    const config = {
        encoding: 'cp936',
        binaryEncoding: 'binary'
    }
    const command = spawn(cmd);
 
 
    command.stdout.on('data', (data) =&gt; {
        fs.appendFileSync('out.txt', iconv.decode(Buffer.from(data, config.binaryEncoding), config.encoding), { encoding: 'utf8' })
        console.log(\`stdout: \${data}\`);
    });
 
    command.stderr.on('data', (data) =&gt; {
        console.error(\`stderr: \${data}\`);
 
    });
 
    command.on('close', (code) =&gt; {
        console.log(\`child process exited with code \${code}\`);
    });
 
}
 
 
execCMD(cmd)
</code></pre>
`},{index:[],path:"/posts/\u72B6\u6001\u6A21\u5F0F\u5B9E\u4F8B.html",title:"\u72B6\u6001\u6A21\u5F0F\u5B9E\u4F8B",date:"2022-01-25",fontNum:2020,description:`javascript\r
<!DOCTYPE html>\r
<html lang="en">\r
 \r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-widt`,tags:["\u8BBE\u8BA1\u6A21\u5F0F"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
 
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
 
&lt;body&gt;
 
    &lt;script&gt;
        const OffLightState = function (light) {
            this.light = light
        }
        OffLightState.prototype.buttonWasPressed = function () {
            console.log('OffLightState');
            this.light.setState(this.light.weakLightState)
        }
 
        const WeakLightState = function (light) {
            this.light = light
        }
        WeakLightState.prototype.buttonWasPressed = function () {
            console.log('WeakLightState');
            this.light.setState(this.light.strongLightState)
        }
 
        const StrongLightState = function (light) {
            this.light = light
        }
        StrongLightState.prototype.buttonWasPressed = function () {
            console.log('strongLightState');
            this.light.setState(this.light.offLightState)
        }
 
        const Light = function () {
            this.offLightState = new OffLightState(this)
            this.weakLightState = new WeakLightState(this)
            this.strongLightState = new StrongLightState(this)
            this.button = null
        }
 
        Light.prototype.init = function () {
            const button = document.createElement('button')
            self = this
            this.button = document.body.appendChild(button)
            this.button.innerHTML = 'switch'
            this.currState = this.offLightState
            this.button.onclick = function () {
                self.currState.buttonWasPressed()
            }
        }
 
        Light.prototype.setState = function (newState) {
            this.currState = newState
        }
 
        const light = new Light()
        light.init()
    &lt;/script&gt;
&lt;/body&gt;
 
&lt;/html&gt;
</code></pre>
`},{index:[],path:"/posts/\u7F51\u9875\u5FEB\u6377\u952E\u7981\u7528.html",title:"\u7F51\u9875\u5FEB\u6377\u952E\u7981\u7528",date:"2022-01-25",fontNum:1391,description:`\r
html\r
<!DOCTYPE html>\r
<html lang="en">\r
 \r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, i`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
 
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
 
&lt;body&gt;
    &lt;p&gt;dahfkjfhaflakdhfadhfaldfhlak&lt;/p&gt;
 
    &lt;script&gt;
        //\u6216\u8005\u8FD9\u6837\u5199
        document.oncontextmenu = function () {
            alert('\u83DC\u5355\u680F\u5DF2\u7ECF\u7981\u7528');
            return false;
        }
 
        // //0\u662F\u70B9\u51FB\u4E86\u9F20\u6807\u5DE6\u952E\uFF0C1\u4E2D\u95F4\u6EDA\u8F6E\u952E\uFF0C2\u53F3\u952E
        // document.onmousedown = function (event) {
        //     if (event.button == 1 || event.button == 2) {
        //         document.oncontextmenu = function () {
        //             alert('\u83DC\u5355\u680F\u5DF2\u7ECF\u7981\u7528');
        //             return false;
        //         }
        //     }
        // };
        // document.onselectstart = function (event) {
        //     event.returnValue = false
        // }
 
        document.onkeydown = document.onkeyup = document.onkeypress = function () {
            if (window.event.keyCode == 67 &amp; 0x1f) {
                alert(&quot;ctrl+c\u5DF2\u7981\u7528&quot;);
                window.event.returnValue = false; //\u6D88\u53D1\u751F\u4E8B\u4EF6\u6E90\u5143\u7D20\u7684\u9ED8\u8BA4\u52A8\u4F5C
            }
 
            if (window.event.keyCode == 123) {
                alert(&quot;F12\u5DF2\u7981\u7528&quot;);
                window.event.returnValue = false;
            }
        }
    &lt;/script&gt;
&lt;/body&gt;
 
&lt;/html&gt;
</code></pre>
`},{index:[],path:"/posts/\u7F51\u9875\u81EA\u5B9A\u4E49\u83DC\u5355.html",title:"\u7F51\u9875\u81EA\u5B9A\u4E49\u83DC\u5355",date:"2022-01-25",fontNum:3300,description:`\r
html\r
<!DOCTYPE html>\r
<html lang="en">\r
 \r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, i`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
 
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
 
    &lt;style&gt;
        * {
            margin: 0;
            padding: 0;
        }
 
        .menu {
            background-color: rgb(255, 255, 255);
            width: 300px;
            border: 1px solid #ccc;
            position: absolute;
            box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, .2);
            display: none;
        }
 
        .menu li {
            list-style: none;
            width: 100%;
        }
 
        .menu li a {
            display: inline-block;
            text-decoration: none;
            color: #555;
            /* width: calc(100% - 60px); */
            width: 100%;
            padding: 10px 0;
            cursor: pointer;
            /* padding-left: 60px; */
        }
 
        .menu li a span {
            padding-left: 60px;
        }
 
        /* .menu li:first-of-type {
            border-radius: 5px 5px 0 0;
        } */
 
        .menu li a:hover {
            background-color: rgb(232, 232, 233);
        }
    &lt;/style&gt;
&lt;/head&gt;
 
&lt;body&gt;
    &lt;ul class=&quot;menu&quot; id=&quot;menu&quot;&gt;
        &lt;li&gt;&lt;a&gt;&lt;span&gt;\u529F\u80FD1&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a&gt;&lt;span&gt;\u529F\u80FD2&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a&gt;&lt;span&gt;\u529F\u80FD3&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a&gt;&lt;span&gt;\u529F\u80FD4&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a&gt;&lt;span&gt;\u529F\u80FD5&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;script&gt;
        window.onload = function () {
            // \u83B7\u53D6\u8282\u70B9
            const menu = document.getElementById('menu');
 
            //\u83B7\u53D6\u53EF\u89C6\u533A\u5BBD\u5EA6,\u9AD8\u5EA6
            const winWidth = document.documentElement.clientWidth || document.body.clientWidth;
            const winHeight = document.documentElement.clientHeight || document.body.clientHeight;
 
            // \u70B9\u51FB\u7A7A\u767D\u533A\u57DF \u9690\u85CF\u83DC\u5355
            document.addEventListener('click', function () {
                menu.style.display = 'none';
                menu.style.left = 0 + 'px';
                menu.style.top = 0 + 'px';
            })
 
            // \u70B9\u51FB\u83DC\u5355
            menu.addEventListener('click', function (event) {
                const e = event || window.event;
                console.log(e.target.innerText)
            })
 
            //\u53F3\u952E\u83DC\u5355
            document.oncontextmenu = function (event) {
                const e = event || window.event;
                menu.style.display = 'block';
                // \u83B7\u53D6\u9F20\u6807\u5750\u6807
                let mouseX = e.clientX;
                let mouseY = e.clientY;
 
                // \u5224\u65AD\u8FB9\u754C\u503C\uFF0C\u9632\u6B62\u83DC\u5355\u680F\u6EA2\u51FA\u53EF\u89C6\u7A97\u53E3
                if (mouseX &gt;= (winWidth - menu.offsetWidth)) {
                    mouseX = winWidth - menu.offsetWidth;
                } else {
                    mouseX = mouseX
                }
                if (mouseY &gt; winHeight - menu.offsetHeight) {
                    mouseY = winHeight - menu.offsetHeight;
                } else {
                    mouseY = mouseY;
                }
                menu.style.left = mouseX + 'px';
                menu.style.top = mouseY + 'px';
                return false;
            }
        }
 
    &lt;/script&gt;
&lt;/body&gt;
 
&lt;/html&gt;
</code></pre>
`},{index:[],path:"/posts/node\u89E3\u6790pdf.html",title:"node \u89E3\u6790pdf",date:"2022-01-19",fontNum:463,description:`\r
javascript\r
const PDFParser = require("pdf2json");\r
 \r
const pdfParser = new PDFParser(this, 1);\r
 \r
function readPDF(fileName) {\r
    pdfParser.loadPDF(fileName);\r
    pdfParser.on("pdfParser_da`,tags:["node"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const PDFParser = require(&quot;pdf2json&quot;);
 
const pdfParser = new PDFParser(this, 1);
 
function readPDF(fileName) {
    pdfParser.loadPDF(fileName);
    pdfParser.on(&quot;pdfParser_dataError&quot;, errData =&gt; console.error(errData.parserError));
 
    pdfParser.on(&quot;pdfParser_dataReady&quot;, pdfData =&gt; {
        const data = pdfParser.getRawTextContent()
        console.log('\u6587\u672C\u4FE1\u606F:', data)
    });
}
module.exports = {
    readPDF
}\`\`\`




</code></pre>
`},{index:[],path:"/posts/windows\u547D\u4EE4\u5408\u96C6.html",title:"\u535A\u5BA2\u642D\u5EFA\u7B14\u8BB0",date:"2022-01-15",fontNum:35,description:`\r
\r
mkdir-\u521B\u5EFA\u6587\u4EF6\u5939\r
touch-\u521B\u5EFA\u6587\u4EF6\r
`,tags:["windows"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code>mkdir-\u521B\u5EFA\u6587\u4EF6\u5939
touch-\u521B\u5EFA\u6587\u4EF6
</code></pre>
`},{index:[],path:"/posts/es\u65B0\u7279\u6027\u8BB0\u5F55.html",title:"es\u65B0\u7279\u6027\u8BB0\u5F55",date:"2021-12-20",fontNum:1888,description:`\r
javascript\r
const arr = [1, 2, 3, [4, 5], [6, [7, [8]]]]\r
//falt(n) n\u4E3A\u6570\u7EC4\u62CD\u5E73\u7684\u5C42\u6570\r
console.log(arr.flat(1));\r
//[ 1, 2, 3, 4, 5, 6, [ 7, [ 8 ] ] ]\r
console.log(arr.flat(Infinity));\r
//[ 1, 2, 3, 4, 5`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const arr = [1, 2, 3, [4, 5], [6, [7, [8]]]]
//falt(n) n\u4E3A\u6570\u7EC4\u62CD\u5E73\u7684\u5C42\u6570
console.log(arr.flat(1));
//[ 1, 2, 3, 4, 5, 6, [ 7, [ 8 ] ] ]
console.log(arr.flat(Infinity));
//[ 1, 2, 3, 4, 5, 6, 7, 8 ]
const arr = ['1_2', '2_3', '3_4']
console.log(arr.map(x =&gt; x.split('_')));
// [ [ '1', '2' ], [ '2', '3' ], [ '3', '4' ] ]
console.log(arr.flatMap(x =&gt; x.split('_')));
// [ '1', '2', '2', '3', '3', '4' ]
const str = '  xxs   '
console.log(str.trimStart);
console.log(str.trimEnd);
console.log(str.trim);
console.log(str.trimLeft);
console.log(str.trimRight);
// [Function: trimStart]
// [Function: trimEnd]
// [Function: trim]
// [Function: trimStart]
// [Function: trimEnd]
console.log(str.trimStart().length);
console.log(str.trimEnd().length);
console.log(str.trim().length);
console.log(str.trimLeft().length);
console.log(str.trimRight().length);
// 6
// 5
// 3
// 6
// 5
console.log(0 ?? '1');
console.log('' ?? '2');
console.log(false ?? '3');
console.log(null ?? '4');
console.log(undefined ?? '5');
// 0
//
// false
// 4    
// 5  
const demo = {}
// console.log(demo.foo.bar); //TypeError: Cannot read properties of undefined (reading 'bar')
console.log(demo.foo?.bar); //undefined
// BIGINT
console.log(typeof 1n);
const obj = { bar: 'foo', baz: 'bas' }
console.log(Object.getOwnPropertyDescriptors(obj));
// {
//     bar: {
//       value: 'foo',     
//       writable: true,   
//       enumerable: true, 
//       configurable: true
//     },
//     baz: {
//       value: 'bas',     
//       writable: true,   
//       enumerable: true, 
//       configurable: true
//     }
//   }
const foo = new SharedArrayBuffer(10)
console.log(foo.byteLength);//10
console.log(foo);
// SharedArrayBuffer {
//     [Uint8Contents]: &lt;00 00 00 00 00 00 00 00 00 00&gt;,
//     byteLength: 10
//   }
</code></pre>
`},{index:["<h3>\u65E5\u8BB0</h3>","<h3>2022.3.15</h3>","<h3>2022.3.18</h3>","<h3>2022.3.20</h3>","<h3>2022.3.21</h3>"],path:"/posts/\u65E5\u8BB0.html",title:"\u5F00\u53D1\u65E5\u8BB0",date:"2021-12-19",fontNum:212,description:`\r
 \u65E5\u8BB0\r
\r
 2022.3.15\r
> \u6DFB\u52A0\u6587\u7AE0\u603B\u6570\r
\r
> \u7ED9\u6587\u7AE0\u5206\u7C7B\r
\r
 2022.3.18\r
> \u66F4\u65B0\u6587\u7AE0\r
\r
> \u6DFB\u52A0\u57FA\u7840\u7684\u641C\u7D22\u529F\u80FD (\u540E\u671F\u4F1A\u6269\u5C55 Algolia \u548C Elastic Search)\r
> \r
 2022.3.20\r
> \u66F4\u65B0\u6700\u65E9\u7684\u6587\u7AE0 > \u6DFB\u52A0\u80CC\u666F\u97F3\u4E50"\u4E95\u53E3\u88D5\u9999 - \u3055\u3089\u307029"\u548C\u6B4C\u8BCD\u663E\u793A\u529F\u80FD\r
\r
 2022.3.21\r
> `,tags:["\u5F00\u53D1\u65E5\u8BB0"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u65E5\u8BB0</h3>
<h3>2022.3.15</h3>
<blockquote>
<p>\u6DFB\u52A0\u6587\u7AE0\u603B\u6570</p>
</blockquote>
<blockquote>
<p>\u7ED9\u6587\u7AE0\u5206\u7C7B</p>
</blockquote>
<h3>2022.3.18</h3>
<blockquote>
<p>\u66F4\u65B0\u6587\u7AE0</p>
</blockquote>
<blockquote>
<p>\u6DFB\u52A0\u57FA\u7840\u7684\u641C\u7D22\u529F\u80FD (\u540E\u671F\u4F1A\u6269\u5C55 Algolia \u548C Elastic Search)</p>
</blockquote>
<h3>2022.3.20</h3>
<blockquote>
<p>\u66F4\u65B0\u6700\u65E9\u7684\u6587\u7AE0 &gt; \u6DFB\u52A0\u80CC\u666F\u97F3\u4E50&quot;\u4E95\u53E3\u88D5\u9999 - \u3055\u3089\u307029&quot;\u548C\u6B4C\u8BCD\u663E\u793A\u529F\u80FD</p>
</blockquote>
<h3>2022.3.21</h3>
<blockquote>
<p>\u66F4\u65B0\u6587\u7AE0 &gt; \u6EDA\u52A8\u6761\u6837\u5F0F</p>
</blockquote>
`},{index:["<h3>\u5728\u62D3\u5C55\u641C\u7D22background-cover</h3>","<h3>\u5B89\u88C5\u5B8C\u6210\u540E\u627E\u5230</h3>"],path:"/posts/vscode\u8BBE\u7F6E\u56FE\u7247\u80CC\u666F.html",title:"vscode\u8BBE\u7F6E\u56FE\u7247\u80CC\u666F",date:"2021-11-18",fontNum:262,description:`\r
 \u5728\u62D3\u5C55\u641C\u7D22background-cover \u5B89\u88C5\r
\r
 \u5B89\u88C5\u5B8C\u6210\u540E\u627E\u5230 \u6587\u4EF6->\u9996\u9009\u9879->\u8BBE\u7F6E->\u6269\u5C55->background-cover\r
\r
(\u5728Image Path Background image path / \u80CC\u666F\u56FE\u7247\u8DEF\u5F84) | \u4E0B\u65B9\u8F93\u5165\u56FE\u7247\u8DEF\u5F84\r
\r
(Opacity Background opacity (0 - 1) / \u80CC\u666F\u900F\u660E\u5EA6(0 - 1)) | \u900F\u660E\u5EA6\u8BBE`,tags:["vscode"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u5728\u62D3\u5C55\u641C\u7D22background-cover \u5B89\u88C5</h3>
<h3>\u5B89\u88C5\u5B8C\u6210\u540E\u627E\u5230 \u6587\u4EF6-&gt;\u9996\u9009\u9879-&gt;\u8BBE\u7F6E-&gt;\u6269\u5C55-&gt;background-cover</h3>
<p>(\u5728Image Path Background image path / \u80CC\u666F\u56FE\u7247\u8DEF\u5F84) | \u4E0B\u65B9\u8F93\u5165\u56FE\u7247\u8DEF\u5F84</p>
<p>(Opacity Background opacity (0 - 1) / \u80CC\u666F\u900F\u660E\u5EA6(0 - 1)) | \u900F\u660E\u5EA6\u8BBE\u7F6E\u4E3A0.5 (\u6839\u636E\u559C\u597D)</p>
<p>ctr + shift + p \u641C\u7D22background-cover-start \u4E5F\u53EF\u4EE5\u64CD\u4F5C</p>
`},{index:["<h3>\u4E3B\u9898\u63D2\u4EF6</h3>","<h3>setting.json</h3>"],path:"/posts/vscode\u914D\u7F6E.html",title:"vscode\u914D\u7F6E",date:"2021-11-17",fontNum:3064,description:`\r
\r
 \u4E3B\u9898\u63D2\u4EF6 \r
\r
\u5728\u62D3\u5C55\u641C\u7D22Cyberpunk\r
\r
 setting.json\r
\r
{\r
  // vscode\u9ED8\u8BA4\u542F\u7528\u4E86\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u81EA\u52A8\u8BBE\u7F6Etabsize\u7684\u9009\u9879\r
  "editor.detectIndentation": false,\r
  // \u91CD\u65B0\u8BBE\u5B9Atabsize\r
  "editor.tabSize": 2,\r
  // \u6BCF\u6B21\u4FDD\u5B58\u7684\u65F6\u5019\u81EA\u52A8\u683C\u5F0F\u5316\r
 `,tags:["vscode"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u4E3B\u9898\u63D2\u4EF6</h3>
<p>\u5728\u62D3\u5C55\u641C\u7D22Cyberpunk</p>
<h3>setting.json</h3>
<pre><code>{
  // vscode\u9ED8\u8BA4\u542F\u7528\u4E86\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u81EA\u52A8\u8BBE\u7F6Etabsize\u7684\u9009\u9879
  &quot;editor.detectIndentation&quot;: false,
  // \u91CD\u65B0\u8BBE\u5B9Atabsize
  &quot;editor.tabSize&quot;: 2,
  // #\u6BCF\u6B21\u4FDD\u5B58\u7684\u65F6\u5019\u81EA\u52A8\u683C\u5F0F\u5316
  &quot;editor.formatOnSave&quot;: true,
  // #\u6BCF\u6B21\u4FDD\u5B58\u7684\u65F6\u5019\u5C06\u4EE3\u7801\u6309eslint\u683C\u5F0F\u8FDB\u884C\u4FEE\u590D
  // &quot;eslint.autoFixOnSave&quot;: true,
  // \u6DFB\u52A0 vue \u652F\u6301
  &quot;eslint.validate&quot;: [
    &quot;javascript&quot;,
    &quot;javascriptreact&quot;,
    &quot;vue&quot;,
  ],
  //  #\u8BA9prettier\u4F7F\u7528eslint\u7684\u4EE3\u7801\u683C\u5F0F\u8FDB\u884C\u6821\u9A8C
  &quot;prettier.eslintIntegration&quot;: true,
  //  #\u4EE3\u7801\u7ED3\u5C3E\u7684\u5206\u53F7
  &quot;prettier.semi&quot;: true,
  //  #\u4F7F\u7528\u5E26\u5F15\u53F7\u66FF\u4EE3\u53CC\u5F15\u53F7
  &quot;prettier.singleQuote&quot;: false,
  //  #\u8BA9\u51FD\u6570(\u540D)\u548C\u540E\u9762\u7684\u62EC\u53F7\u4E4B\u95F4\u52A0\u4E2A\u7A7A\u683C
  &quot;javascript.format.insertSpaceBeforeFunctionParenthesis&quot;: true,
  // #\u8BA9vue\u4E2D\u7684js\u6309\u7F16\u8F91\u5668\u81EA\u5E26\u7684ts\u683C\u5F0F\u8FDB\u884C\u683C\u5F0F\u5316
  &quot;vetur.format.defaultFormatter.js&quot;: &quot;vscode-typescript&quot;,
  &quot;vetur.format.defaultFormatterOptions&quot;: {
    &quot;js-beautify-html&quot;: {
      &quot;wrap_attributes&quot;: &quot;force-aligned&quot;
      // #vue\u7EC4\u4EF6\u4E2Dhtml\u4EE3\u7801\u683C\u5F0F\u5316\u6837\u5F0F
    }
  },
  &quot;explorer.confirmDelete&quot;: false,
  &quot;explorer.confirmDragAndDrop&quot;: false,
  &quot;editor.renderControlCharacters&quot;: true,
  &quot;editor.renderWhitespace&quot;: &quot;all&quot;,
  &quot;editor.wordWrap&quot;: &quot;wordWrapColumn&quot;,
  &quot;editor.maxTokenizationLineLength&quot;: 40000,

  &quot;update.enableWindowsBackgroundUpdates&quot;: false,
  &quot;update.showReleaseNotes&quot;: false,
  &quot;editor.linkedEditing&quot;: true,

  &quot;editor.wordWrapColumn&quot;: 120,
  
  &quot;html.format.indentHandlebars&quot;: true,
  &quot;diffEditor.ignoreTrimWhitespace&quot;: true,
  &quot;workbench.statusBar.visible&quot;: true,
  // &quot;[markdown]&quot;: {
  //   &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  // },
  // &quot;[html]&quot;: {
  //   &quot;editor.defaultFormatter&quot;: &quot;vscode.html-language-features&quot;
  // },
  &quot;eslint.format.enable&quot;: true,
  // &quot;[json]&quot;: {
  //   &quot;editor.defaultFormatter&quot;: &quot;vscode.json-language-features&quot;
  // },
  &quot;editor.defaultFormatter&quot;: &quot;octref.vetur&quot;,
  &quot;prettier.embeddedLanguageFormatting&quot;: &quot;off&quot;,

  &quot;vetur.validation.template&quot;: false,
  &quot;typescript.format.placeOpenBraceOnNewLineForControlBlocks&quot;: true,
  &quot;typescript.format.placeOpenBraceOnNewLineForFunctions&quot;: true,
  &quot;typescript.format.insertSpaceAfterTypeAssertion&quot;: true,
  &quot;typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis&quot;: true,
  &quot;typescript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces&quot;: true,
  &quot;prettier.trailingComma&quot;: &quot;all&quot;,

  &quot;terminal.integrated.env.linux&quot;: {
    
    },
    &quot;workbench.startupEditor&quot;: &quot;newUntitledFile&quot;,
    &quot;prettier.bracketSpacing&quot;: false,
    &quot;prettier.requireConfig&quot;: true,
    &quot;prettier.printWidth&quot;: 160,
    &quot;update.mode&quot;: &quot;none&quot;,
    &quot;eslint.alwaysShowStatus&quot;: true,
    &quot;eslint.debug&quot;: true,

    &quot;[vue]&quot;: {
      &quot;editor.defaultFormatter&quot;: &quot;dbaeumer.vscode-eslint&quot;
    },
    &quot;files.autoSave&quot;: &quot;onWindowChange&quot;,
    &quot;eslint.workingDirectories&quot;: [
    
    ],
    &quot;[javascript]&quot;: {
      &quot;editor.defaultFormatter&quot;: &quot;dbaeumer.vscode-eslint&quot;
    },
    &quot;[json]&quot;: {
      &quot;editor.defaultFormatter&quot;: &quot;vscode.json-language-features&quot;
    },
    &quot;git.autoStash&quot;: true,
    &quot;git.inputValidationLength&quot;: 108,
    &quot;editor.fontSize&quot;: 20,
}
</code></pre>
`},{index:[],path:"/posts/BST\u4E8C\u53C9\u641C\u7D22\u6811.html",title:"BST\u4E8C\u53C9\u641C\u7D22\u6811",date:"2021-11-16",fontNum:3777,description:`\r
javascript\r
class Node {\r
    constructor(value) {\r
        this.value = value\r
        this.left = null\r
        this.right = null\r
    }\r
}\r
 \r
class BT {\r
    constructor() {\r
        this.roo`,tags:["BFS"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
 
class BT {
    constructor() {
        this.root = null
    }
 
    insert(key) {
        this.root === null ? this.root = new Node(key) : this.insertNode(this.root, key)
    }
 
    insertNode(node, key) {
        if (key &lt; node.value) {
            node.left === null ? node.left = new Node(key) : this.insertNode(node.left, key)
        } else {
            node.right === null ? node.right = new Node(key) : this.insertNode(node.right, key)
        }
    }
 
    front() {
        this.handleFront(this.root, (val) =&gt; { console.log(val) })
 
    }
    handleFront(node, callBack) {
        if (node !== null) {
            callBack(node.value)
            this.handleFront(node.left, callBack)
            this.handleFront(node.right, callBack)
        }
    }
    mid() {
        this.handleMid(this.root, (val) =&gt; { console.log(val) })
    }
    handleMid(node, callBack) {
        if (node !== null) {
            this.handleMid(node.left, callBack)
            callBack(node.value)
            this.handleMid(node.right, callBack)
        }
    }
    after() {
        this.handleAfter(this.root, (val) =&gt; { console.log(val) })
    }
    handleAfter(node, callBack) {
        if (node !== null) {
            this.handleAfter(node.left, callBack)
            this.handleAfter(node.right, callBack)
            callBack(node.value)
        }
    }
 
    min(node) {
        let current = node || this.root
        while (current !== null &amp;&amp; current.left !== null) {
            current = current.left
 
        }
        return current
    }
    max(node) {
        let current = node || this.root
        while (current !== null &amp;&amp; current.right !== null) {
            current = current.right
        }
 
        return current
    }
    search(val) {
        return this.handleSearch(this.root, val)
    }
    handleSearch(node, val) {
        if (node === null) {
            return false
        }
 
        if (val &lt; node.value) {
            return this.handleSearch(node.left, val)
        } else if (val &gt; node.value) {
            return this.handleSearch(node.right, val)
        } else {
 
            return true
        }
    }
    remove(key) {
        return this.root = this.handleRemove(this.root, key)
    }
    handleRemove(node, key) {
        if (node === null) return null
 
        if (key &lt; node.value) {
            node.left = this.handleRemove(node.left, key)
            return node
        } else if (key &gt; node.value) {
            node.right = this.handleRemove(node.right, key)
            return node
        } else {
            if (node.left === null &amp;&amp; node.right === null) {
 
                return null
            }
 
            if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            }
            const minInNodeRight = this.min(node.right)
 
            node.value = minInNodeRight.value
            node.right = this.handleRemove(node.right, minInNodeRight.value)
            return node
        }
    }
}
 
const t1 = new BT()
 
t1.insert(11)
t1.insert(7)
t1.insert(15)
t1.insert(5)
t1.insert(3)
t1.insert(9)
t1.insert(8)
t1.insert(10)
t1.insert(13)
t1.insert(12)
t1.insert(14)
t1.insert(20)
t1.insert(18)
t1.insert(25)
t1.insert(6)
 
// t1.mid()
// t1.front()
// t1.after()
 
// console.log(t1.min());
// console.log(t1.max());
 
console.log(t1.remove(11));
 
// console.log(t1.search(1));
// console.log(t1.search(8));
</code></pre>
`},{index:[],path:"/posts/prim\u7B97\u6CD5.html",title:"prim\u7B97\u6CD5",date:"2021-11-11",fontNum:2294,description:`\r
javascript\r
const graph = [\r
    /**\r
*   A, B, C, D, E, F\r
*   0, 1, 2, 3, 4 ,5\r
    **/\r
    [0, 2, 4, 0, 0, 0],//0 A     \r
    [2, 0, 2, 4, 2, 0],//1 B\r
    [4, 2, 0, 0, 3, 0],//2 C\r
    [0, 4`,tags:["\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const graph = [
    /**
*   A, B, C, D, E, F
*   0, 1, 2, 3, 4 ,5
    **/
    [0, 2, 4, 0, 0, 0],//0 A     
    [2, 0, 2, 4, 2, 0],//1 B
    [4, 2, 0, 0, 3, 0],//2 C
    [0, 4, 0, 0, 3, 2],//3 D
    [0, 2, 3, 3, 0, 2],//4 E
    [0, 0, 0, 2, 2, 0] //5 F
]
 
// const graph = [
//     /**
// *   A, B, C, D, E
// *   0, 1, 2, 3, 4
//     **/
//     [0, 3, 1, 0, 0],//0 A     
//     [3, 0, 0, 4, 6],//1 B
//     [1, 0, 0, 2, 7],//2 C
//     [0, 4, 2, 0, 5],//3 D
//     [0, 6, 7, 5, 0],//4 E
// ]
 
const INF = Number.MAX_SAFE_INTEGER
function prim(graph) {
    const parent = []
    const key = []//key\u6570\u7EC4\u4FDD\u5B58\u6743\u503C\u6700\u5C0F\u7684\u8FB9 \u4E0E\u8FEA\u6770\u65AF\u7279\u62C9\u4E0D\u540C\u7684\u662F\u8FD9\u91CC\u4FDD\u5B58\u7684\u662F\u6743\u503C\u6700\u5C0F\u7684\u8FB9 \u800C\u8FEA\u6770\u65AF\u7279\u62C9\u4FDD\u5B58\u7684\u662F\u8DDD\u79BB
    const visited = []
    const { length } = graph
 
    for (let i = 0; i &lt; length; i++) {
        key[i] = INF
        visited[i] = false
    }
 
    key[0] = 0//\u8D77\u59CB\u70B9\u5230\u81EA\u5DF1\u7684\u8DDD\u79BB\u4E3A0
    parent[0] = -1
 
    for (let i = 0; i &lt; length - 1; i++) {
 
 
        const u = minKey(key, visited)
        // console.log('u', u); // 0 1 4 5 3
        visited[u] = true
        for (let v = 0; v &lt; length; v++) {
            // console.log('graph[u][v]', graph[u][v]);
            if (graph[u][v] &amp;&amp; !visited[v] &amp;&amp; graph[u][v] &lt; key[v]) {
                parent[v] = u
                key[v] = graph[u][v]
            }
        }
    }
 
    return {
        key,
        parent
    }
}
 
function minKey(key, visited) {
    let min = INF
    let minIndex = -1
    console.log('key', key);
    for (let vertex = 0; vertex &lt; key.length; vertex++) {
        if (visited[vertex] === false &amp;&amp; key[vertex] &lt;= min) {
            min = key[vertex]
            minIndex = vertex
        }
    }
    // console.log('minIndex', minIndex);
    return minIndex
}
 
console.log(prim(graph));
 
 
 
 
//key
// 0 x x x x x
// 0 2 4 x x x
// 0 2 2 4 2 x
// 0 2 2 3 2 2
// 0 2 2 2 2 2
 
 
 
// const graph = [
//     /**
// *   A, B, C, D, E
// *   0, 1, 2, 3, 4
//     **/
//     [0, 3, 1, 0, 0],//0 A     
//     [3, 0, 0, 4, 6],//1 B
//     [1, 0, 0, 2, 7],//2 C
//     [0, 4, 2, 0, 5],//3 D
//     [0, 6, 7, 5, 0],//4 E
// ]
 
 
// 1 2 3 4 5
// 0 x x x x 
// 0f 3 1 x x
 
// 0f 3 1f 2 7
// 0f 3 1f 2f 5
// 0f 3f 1f 2f 5
 
//1-&gt;2
//1-&gt;3-&gt;4-&gt;5
</code></pre>
`},{index:[],path:"/posts/\u5F17\u6D1B\u4F0A\u5FB7\u7B97\u6CD5.html",title:"\u5F17\u6D1B\u4F0A\u5FB7\u7B97\u6CD5",date:"2021-11-11",fontNum:970,description:`\r
javascript\r
//Floyd-Warshall\u7B97\u6CD5\u662F\u4E00\u79CD\u8BA1\u7B97\u56FE\u4E2D\u6240\u6709\u6700\u77ED\u8DEF\u5F84\u7684\u52A8\u6001\u89C4\u5212\u7B97\u6CD5\r
const graph = [\r
    //A,B, C, D, E, F\r
    [0, 2, 4, 0, 0, 0],//A\r
    [0, 0, 2, 4, 2, 0],//B\r
    [0, 0, 0, 0, 3, 0],//C\r
    [0, 0, 0, 0, 0,`,tags:["\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//Floyd-Warshall\u7B97\u6CD5\u662F\u4E00\u79CD\u8BA1\u7B97\u56FE\u4E2D\u6240\u6709\u6700\u77ED\u8DEF\u5F84\u7684\u52A8\u6001\u89C4\u5212\u7B97\u6CD5
const graph = [
    //A,B, C, D, E, F
    [0, 2, 4, 0, 0, 0],//A
    [0, 0, 2, 4, 2, 0],//B
    [0, 0, 0, 0, 3, 0],//C
    [0, 0, 0, 0, 0, 2],//D
    [0, 0, 0, 3, 0, 2],//E
    [0, 0, 0, 0, 0, 0]//F
]
function floydWarshall(graph) {
    const dist = []
    const { length } = graph
 
    for (let i = 0; i &lt; length; i++) {
        dist[i] = []
 
        for (let j = 0; j &lt; length; j++) {
            i === j ? dist[i][j] = 0 : graph[i][j] === 0 ?
                dist[i][j] = Infinity : dist[i][j] = graph[i][j]
        }
    }
 
    for (let k = 0; k &lt; length; k++) {//k\u8868\u793A\u4E2D\u95F4
        for (let i = 0; i &lt; length; i++) {
            for (let j = 0; j &lt; length; j++) {
                (dist[i][k] + dist[k][j] &lt; dist[i][j]) ? (dist[i][j] = dist[i][k] + dist[k][j]) : null //i-&gt;j === i-&gt;k-&gt;j
            }
        }
    }
 
    return dist
}
 
console.log(floydWarshall(graph));
</code></pre>
`},{index:[],path:"/posts/\u7981\u7528\u9875\u9762\u90E8\u5206\u590D\u5236\u529F\u80FD.html",title:"\u7981\u7528\u9875\u9762\u90E8\u5206\u590D\u5236\u529F\u80FD",date:"2021-11-10",fontNum:5834,description:`\r
html\r
<template>\r
  <div id="app" @contextmenu="showMenu">\r
    <!-- <div id="app"> -->\r
    <vue-context-menu\r
      :contextMenuData="contextMenuData"\r
      @copyxx="copyxx"\r
    ></vue-contex`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-html">&lt;template&gt;
  &lt;div id=&quot;app&quot; @contextmenu=&quot;showMenu&quot;&gt;
    &lt;!-- &lt;div id=&quot;app&quot;&gt; --&gt;
    &lt;vue-context-menu
      :contextMenuData=&quot;contextMenuData&quot;
      @copyxx=&quot;copyxx&quot;
    &gt;&lt;/vue-context-menu&gt;
    &lt;router-view /&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
&lt;script&gt;
export default {
  mounted() {
    const that = this;
    document.onmousedown = function (event) {
      if (event.button === 2) {
        that.xxxflag = window
          .getSelection()
          .focusNode.parentElement.parentElement.className.includes(&quot;noCopy&quot;);
        if (
          window.getSelection().focusNode.nodeValue ===
          window.getSelection().baseNode.data
        ) {
          that.xxxValue = window.getSelection().focusNode.data;
        }
      }
    };
  },
  name: &quot;App&quot;,
  data() {
    return {
      xxxflag: true,
      xxxValue: &quot;&quot;,
      // \u83DC\u5355\u6570\u636E
      contextMenuData: {
        menuName: &quot;demo&quot;,
        //\u83DC\u5355\u663E\u793A\u7684\u4F4D\u7F6E
        axis: { x: null, y: null },
        //\u83DC\u5355\u9009\u9879
        menulists: [
          {
            fnHandler: &quot;copyxx&quot;, //\u7ED1\u5B9A\u4E8B\u4EF6
            // icoName: &quot;&quot;, //icon\u56FE\u6807
            btnName: &quot;\u590D\u5236&quot;, //\u83DC\u5355\u540D\u79F0
          },
          {
            fnHandler: &quot;pastexx&quot;,
            // icoName: &quot;&quot;,
            btnName: &quot;\u7C98\u8D34&quot;,
          },
        ],
      },
    };
  },
  methods: {
    showMenu() {
      window.event.preventDefault();
      var x = window.event.clientX;
      var y = window.event.clientY;
      // Get the current location
      this.contextMenuData.axis = { x, y };
    },
    copyxx() {
      if (!this.xxxflag) {
        console.log(&quot;yes&quot;, this.xxxValue);
        this.$copyText(this.xxxValue).then(
          () =&gt; {
            // alert(&quot;\u590D\u5236\u6210\u529F\uFF01&quot;);
          },
          () =&gt; {
            // alert(&quot;\u590D\u5236\u5931\u8D25\uFF01&quot;);
          }
        );
      }
    },
  },
};
&lt;/script&gt;
 
&lt;style&gt;
#app {
  font-family: &quot;Avenir&quot;, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
body {
  background-color: rgb(180, 183, 187);
  padding: 0;
  margin: 0;
}
.vue-contextmenu-listWrapper.vue-contextmenuName-demo {
  padding: 0;
  width: 300px;
}
.context-menu-list {
  width: 100%;
  text-align: left;
}
.nav-name-right {
  padding-left: 30px;
}
&lt;/style&gt;
</code></pre>
<pre><code class="language-html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-table
      ref=&quot;table&quot;
      :data=&quot;tableData&quot;
      style=&quot;width: 1500px; height: 800px; overflow: auto&quot;
      :cell-class-name=&quot;cellClassName&quot;
    &gt;
      &lt;el-table-column
        v-for=&quot;item in columns&quot;
        :prop=&quot;String(item)&quot;
        :label=&quot;String(item)&quot;
        :key=&quot;item&quot;
      &gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
  &lt;script&gt;
export default {
  mounted() {
    // window.addEventListener(&quot;copy&quot;, function (event) {
    //   if (
    //     window
    //       .getSelection()
    //       .focusNode.parentElement.parentElement.className.includes(&quot;noCopy&quot;)
    //   ) {
    //     alert(&quot;\u590D\u5236\u5DF2\u7981\u7528&quot;);
    //     event.preventDefault();
    //   }
    // });
 
    this.tableData = this.tableData1;
 
    document.onkeydown = document.onkeyup = function (event) {
      // console.log(
      //   &quot;flag&quot;,
      //   typeof window.getSelection().focusNode.nodeValue,
      //   typeof window.getSelection().baseNode.data
      // );
      if (
        window
          .getSelection()
          .focusNode.parentElement.parentElement.className.includes(&quot;noCopy&quot;) ||
        window.getSelection().focusNode.nodeValue !==
          window.getSelection().baseNode.data
      ) {
        if ((window.event.keyCode === 67) &amp; 0x1f) {
          alert(&quot;ctrl+c\u5DF2\u7981\u7528&quot;);
          event.preventDefault();
        }
      }
 
      const keyCode = [80, 83, 85];
      if (keyCode.includes(window.event.keyCode) &amp; 0x1f) {
        alert(&quot;ctrl\u7EC4\u5408\u952E\u5DF2\u7981\u7528&quot;);
        event.preventDefault();
      }
 
      if (window.event.keyCode == 123) {
        alert(&quot;F12\u5DF2\u7981\u7528&quot;);
        event.preventDefault();
      }
    };
  },
  methods: {
    cellClassName({ row, column, rowIndex, columnIndex }) {
      const fbArr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;]; //\u7981\u7528\u5217
      if (fbArr.includes(column.label)) {
        return &quot;noCopy&quot;;
      }
    },
  },
  data() {
    return {
      columns: [
        &quot;a&quot;,
        &quot;b&quot;,
        &quot;c&quot;,
        &quot;d&quot;,
        &quot;e&quot;,
        &quot;f&quot;,
        &quot;g&quot;,
        &quot;h&quot;,
        &quot;i&quot;,
        &quot;j&quot;,
        &quot;k&quot;,
        &quot;l&quot;,
        // &quot;m&quot;,
        // &quot;n&quot;,
        // &quot;o&quot;,
        // &quot;p&quot;,
        // &quot;q&quot;,
        // &quot;r&quot;,
        // &quot;s&quot;,
        // &quot;t&quot;,
        // &quot;u&quot;,
        // &quot;v&quot;,
        // &quot;w&quot;,
        // &quot;x&quot;,
        // &quot;y&quot;,
        // &quot;z&quot;,
        // 0,
        // 1,
        // 2,
        // 3,
        // 4,
        // 5,
        // 6,
        // 7,
        // 8,
        // 9,
        // 10,
        // 11,
        // 12,
        // 13,
        // 14,
        // 15,
      ],
      tableData: [],
      tableData1: [
        {
          a: &quot;qqqqq\u4E0D\u53EF\u590D\u5236&quot;,
          b: &quot;wwwww\u4E0D\u53EF\u590D\u5236&quot;,
          c: &quot;eeeee\u4E0D\u53EF\u590D\u5236&quot;,
          d: &quot;rrrrr\u4E0D\u53EF\u590D\u5236&quot;,
          e: &quot;ttttt\u4E0D\u53EF\u590D\u5236&quot;,
          f: &quot;uuuuu\u4E0D\u53EF\u590D\u5236&quot;,
          g: &quot;iiiii&quot;,
          h: &quot;ooooo&quot;,
          i: &quot;ppppp&quot;,
          j: &quot;aaaaa&quot;,
          k: &quot;sssss&quot;,
          l: &quot;ddddd&quot;,
        },
        {
          a: &quot;11111\u4E0D\u53EF\u590D\u5236&quot;,
          b: &quot;22222\u4E0D\u53EF\u590D\u5236&quot;,
          c: &quot;33333\u4E0D\u53EF\u590D\u5236&quot;,
          d: &quot;44444\u4E0D\u53EF\u590D\u5236&quot;,
          e: &quot;55555\u4E0D\u53EF\u590D\u5236&quot;,
          f: &quot;66666\u4E0D\u53EF\u590D\u5236&quot;,
          g: &quot;77777&quot;,
          h: &quot;88888&quot;,
          i: &quot;99999&quot;,
          j: &quot;00000&quot;,
          k: &quot;vvvvv&quot;,
          l: &quot;nnnnn&quot;,
        },
      ],
    };
  },
};
&lt;/script&gt;
 
&lt;style scoped&gt;
/* /deep/ .noCopy {
  user-select: none;
} */
&lt;/style&gt;
</code></pre>
`},{index:[],path:"/posts/DFS\u548CBFS\u5B9E\u73B0.html",title:"DFS\u548CBFS\u5B9E\u73B0",date:"2021-11-09",fontNum:3633,description:`\r
javascript\r
class Graph {\r
    constructor(isDirected) {\r
        this.vertices = []\r
        this.adjList = {}\r
        this.isDirected = isDirected\r
    }\r
 \r
    addVertex(vertex) {\r
        i`,tags:["BFS"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">class Graph {
    constructor(isDirected) {
        this.vertices = []
        this.adjList = {}
        this.isDirected = isDirected
    }
 
    addVertex(vertex) {
        if (!this.vertices.includes(vertex)) {
            this.vertices.push(vertex)
            this.adjList[vertex] = []
        }
    }
 
    addEdge(v, w) {
        !this.adjList[v] ? this.addVertex(v) : null
        !this.adjList[w] ? this.addVertex(w) : null
 
        this.adjList[v].push(w)
        !this.isDirected ? this.adjList[w].push(v) : null
    }
 
    getVertices() {
        return this.vertices
    }
    getAdjList() {
        return this.adjList
    }
}
 
let graph = new Graph()
 
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
 
for (const e of myVertices) {
    graph.addVertex(e)
}
 
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
 
const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}
 
function initColor(vertices) {
    const color = {}
 
    for (const vertex of vertices) {
        color[vertex] = Colors.WHITE
    }
 
    return color
}
 
let statrtVertex = myVertices[0]
 
function BFS(graph, statrtVertex) {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initColor(vertices)
    const queue = []
    const distances = {}
    const preValue = {}
 
    queue.push(statrtVertex)
 
    for (const vertex of vertices) {
        distances[vertex] = 0
        preValue[vertex] = null
    }
 
    while (queue.length &gt; 0) {
        const currentVertex = queue.shift()
        color[currentVertex] = Colors.GREY
        const neighbours = adjList[currentVertex]
 
        for (const neighbour of neighbours) {
            if (color[neighbour] === Colors.WHITE) {
                color[neighbour] = Colors.GREY
                distances[neighbour] = distances[currentVertex] + 1
                preValue[neighbour] = currentVertex
                queue.push(neighbour)
            }
        }
 
        color[currentVertex] = Colors.BLACK
    }
 
    return {
        preValue,
        distances
    }
}
 
console.log(BFS(graph, statrtVertex));
 
 
function DFS(graph) {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initColor(vertices)
 
    const discovery = {}
    const finished = {}
    const preValue = {}
    const time = { count: 0 }
 
    for (const vertex of vertices) {
        discovery[vertex] = 0
        finished[vertex] = 0
        preValue[vertex] = null
 
    }
 
    for (const vertex of vertices) {
        color[vertex] === Colors.WHITE ? DFSVisit(vertex, color, discovery, finished, preValue, time, adjList) : null
    }
 
    return {
        discovery,
        preValue,
        finished
    }
}
 
 
function DFSVisit(vertex, color, discovery, finished, preValue, time, adjList) {
    color[vertex] = Colors.GREY
    discovery[vertex] = ++time.count
 
    const neighbours = adjList[vertex]
    for (const neighbour of neighbours) {
        if (color[neighbour] === Colors.WHITE) {
            preValue[neighbour] = vertex
            DFSVisit(neighbour, color, discovery, finished, preValue, time, adjList)
        }
 
    }
 
    color[vertex] = Colors.BLACK
    finished[vertex] = ++time.count
}
 
console.log(DFS(graph));
</code></pre>
`},{index:[],path:"/posts/Dijkstra\u7B97\u6CD5.html",title:"Dijkstra\u7B97\u6CD5\u662F\u4E00\u79CD\u8BA1\u7B97\u4ECE\u5355\u4E2A\u6E90\u5230\u6240\u6709\u5176\u4ED6\u6E90\u7684\u6700\u77ED\u8DEF\u5F84\u7684\u8D2A\u5FC3\u7B97\u6CD5",date:"2021-11-09",fontNum:1362,description:`\r
javascript\r
const graph = [\r
    //A,B, C, D, E, F\r
    [0, 2, 4, 0, 0, 0],//A\r
    [0, 0, 2, 4, 2, 0],//B\r
    [0, 0, 0, 0, 3, 0],//C\r
    [0, 0, 0, 0, 0, 2],//D\r
    [0, 0, 0, 3, 0, 2],//E\r
   `,tags:["\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const graph = [
    //A,B, C, D, E, F
    [0, 2, 4, 0, 0, 0],//A
    [0, 0, 2, 4, 2, 0],//B
    [0, 0, 0, 0, 3, 0],//C
    [0, 0, 0, 0, 0, 2],//D
    [0, 0, 0, 3, 0, 2],//E
    [0, 0, 0, 0, 0, 0]//F
]
const INF = Number.MAX_SAFE_INTEGER
function dijkstra(graph, src) {
    const dist = []
    const visited = []
    const { length } = graph
 
    for (let i = 0; i &lt; length; i++) {
        dist[i] = INF
        visited[i] = false
    }
    dist[src] = 0
    for (let i = 0; i &lt; length - 1; i++) {
 
        const u = minDistance(dist, visited)
        visited[u] = true
 
        for (let v = 0; v &lt; length; v++) {
            if (!visited[v] &amp;&amp; graph[u][v] !== 0 &amp;&amp; dist[u] !== INF &amp;&amp; dist[u] + graph[u][v] &lt; dist[v]) {
                dist[v] = dist[u] + graph[u][v]
            }
        }
    }
 
    return dist
}
function minDistance(dist, visited) {
    let min = INF
    let minIndex = -1
    const len = dist.length
    for (let i = 0; i &lt; len; i++) {
        if (!visited[i] &amp;&amp; dist[i] &lt;= min) {
            min = dist[i]
            minIndex = i
        }
    }
 
    return minIndex
}
 
console.log(dijkstra(graph, 0));
 
// a,b,c,d,e,f 
// 0,2,4,x,x,x visit a
// 0,2,4,6,4,x visit a,b
// 0,2,4,6,4,6 visit a,b,e
// 0,2,4,6,4,6 visit a,b,e,c
// 0,2,4,6,4,6 visit a,b,e,c,f
</code></pre>
`},{index:[],path:"/posts/\u7981\u7528\u53F3\u952EF12\u548CCTRLC.html",title:"\u7981\u7528\u53F3\u952EF12\u548CCTRL+C",date:"2021-11-08",fontNum:1383,description:`\r
html\r
<!DOCTYPE html>\r
<html lang="en">\r
 \r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, i`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
 
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
 
&lt;body&gt;
    &lt;p&gt;dahfkjfhaflakdhfadhfaldfhlak&lt;/p&gt;
 
    &lt;script&gt;
        //\u6216\u8005\u8FD9\u6837\u5199
        document.oncontextmenu = function () {
            alert('\u83DC\u5355\u680F\u5DF2\u7ECF\u7981\u7528');
            return false;
        }
 
        // //0\u662F\u70B9\u51FB\u4E86\u9F20\u6807\u5DE6\u952E\uFF0C1\u4E2D\u95F4\u6EDA\u8F6E\u952E\uFF0C2\u53F3\u952E
        // document.onmousedown = function (event) {
        //     if (event.button == 1 || event.button == 2) {
        //         document.oncontextmenu = function () {
        //             alert('\u83DC\u5355\u680F\u5DF2\u7ECF\u7981\u7528');
        //             return false;
        //         }
        //     }
        // };
        // document.onselectstart = function (event) {
        //     event.returnValue = false
        // }
 
        document.onkeydown = document.onkeyup = document.onkeypress = function () {
            if (window.event.keyCode == 67 &amp; 0x1f) {
                alert(&quot;ctrl+c\u5DF2\u7981\u7528&quot;);
                window.event.returnValue = false; //\u6D88\u53D1\u751F\u4E8B\u4EF6\u6E90\u5143\u7D20\u7684\u9ED8\u8BA4\u52A8\u4F5C
            }
 
            if (window.event.keyCode == 123) {
                alert(&quot;F12\u5DF2\u7981\u7528&quot;);
                window.event.returnValue = false;
            }
        }
    &lt;/script&gt;
&lt;/body&gt;
 
&lt;/html&gt;
</code></pre>
`},{index:[],path:"/posts/\u56FE\u7684\u5E7F\u6DF1\u904D\u5386.html",title:"\u56FE\u7684\u5E7F/\u6DF1du\u904D\u5386",date:"2021-11-05",fontNum:2286,description:`\r
javascript\r
class Graph {\r
    constructor(hasDirected = false) {\r
        this.hasDirected = hasDirected //\u5224\u65AD\u662F\u5426\u4E3A\u6709\u5411\u56FE\r
        this.vertices = [] //\u9876\u70B9\r
        this.adjList = {} //\u4E34\u63A5\u77E9\u9635\r
    }\r
   `,tags:["BFS_DFS"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">class Graph {
    constructor(hasDirected = false) {
        this.hasDirected = hasDirected //\u5224\u65AD\u662F\u5426\u4E3A\u6709\u5411\u56FE
        this.vertices = [] //\u9876\u70B9
        this.adjList = {} //\u4E34\u63A5\u77E9\u9635
    }
    //\u6DFB\u52A0\u9876\u70B9
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
 
            this.adjList[v] = []
        }
    }
    //\u6DFB\u52A0\u8FB9 v,w\u4E3A\u9876\u70B9
    addEdge(v, w) {
        !this.adjList[v] ? this.addVertex[v] : null
        !this.adjList[w] ? this.addVertex[w] : null
 
        this.adjList[v].push(w)
 
        !this.hasDirected ? this.adjList[w].push(v) : null
    }
 
    getVertices() {
        return this.vertices
    }
 
    getAdjList() {
        return this.adjList
    }
}
 
const graph = new Graph()
 
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
 
for (const e of myVertices) {
    graph.addVertex(e)
}
 
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
 
 
// console.log(graph);
 
 
const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}
 
function initializeColor(vertices) {
    const color = {}
 
    for (const e of vertices) {
        color[e] = Colors.WHITE
    }
 
    return color
}
 
//breadth
function breadth(graph, statrtVertex, callBack) {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
 
    const color = initializeColor(vertices)
 
    const queue = []
 
    queue.push(statrtVertex)
 
    while (queue.length &gt; 0) {
        const currentVertex = queue.shift()
        const neighbours = adjList[currentVertex]
 
        color[currentVertex] = Colors.GREY
        for (const e of neighbours) {
 
            if (color[e] === Colors.WHITE) {
                color[e] = Colors.GREY
                queue.push(e)
            }
 
        }
 
        color[currentVertex] = Colors.BLACK
 
        callBack ? callBack(currentVertex) : null
    }
}
 
function printVertex(value) {
    console.log('Visited vertex:', value);
}
 
breadth(graph, myVertices[0], printVertex)
 
//depth
</code></pre>
`},{index:[],path:"/posts/\u6784\u5EFA\u5806\u548C\u5806\u6392\u5E8F.html",title:"\u6784\u5EFA\u5806\u548C\u5806\u6392\u5E8F",date:"2021-11-05",fontNum:2912,description:`\r
javascript\r
class MinHeap {\r
    constructor() {\r
        this.heap = []\r
    }\r
 \r
    //\u4F7F\u7528\u666E\u901A\u6570\u7EC4\u5B9E\u73B0\u7684\u4E8C\u53C9\u6811\u8282\u70B9\r
 \r
    //1.\u5DE6\u4FA7\u5B50\u8282\u70B9\u7684\u4F4D\u7F6E\u662F2*index1\r
    //\u53F3\u4FA7\u5B50\u8282\u70B9\u662F2*index2\r
    //\u7236\u8282\u70B9\u7684\u4F4D\u7F6E\u662F(index - 1) / 2\r
 \r
  `,tags:["\u5806"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">class MinHeap {
    constructor() {
        this.heap = []
    }
 
    //\u4F7F\u7528\u666E\u901A\u6570\u7EC4\u5B9E\u73B0\u7684\u4E8C\u53C9\u6811\u8282\u70B9
 
    //1.\u5DE6\u4FA7\u5B50\u8282\u70B9\u7684\u4F4D\u7F6E\u662F2*index+1
    //\u53F3\u4FA7\u5B50\u8282\u70B9\u662F2*index+2
    //\u7236\u8282\u70B9\u7684\u4F4D\u7F6E\u662F(index - 1) / 2
 
    //\u83B7\u53D6\u5DE6\u4FA7\u5B50\u8282\u70B9
    getLeftIndex(index) {
        return 2 * index + 1
    }
 
    //\u83B7\u53D6\u53F3\u4FA7\u5B50\u8282\u70B9
    getRightIndex(index) {
        return 2 * index + 2
    }
 
    //\u83B7\u53D6\u7236\u8282\u70B9
    getParentIndex(index) {
        return index === 0 ? undefined : Math.floor((index - 1) / 2)
    }
    //\u4E0A\u79FB\u64CD\u4F5C
    siftUp(index) {
        let parent = this.getParentIndex(index)
        while (index &gt; 0 &amp;&amp; this.heap[parent] &gt; this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
            parent = this.getParentIndex(index)
 
        }
    }
 
    siftDown(index) {
        // \u79FB\u9664\u6700\u5C0F\u503C\uFF08\u6700\u5C0F\u5806\uFF09\u6216\u6700\u5927\u503C\uFF08\u6700\u5927\u5806\uFF09
        // \u8868\u793A\u79FB\u9664\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF08\u5806\u7684\u6839\u8282\u70B9\uFF09\u3002
        // \u5728\u79FB\u9664\u540E\uFF0C\u6211\u4EEC\u5C06\u5806\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u79FB\u52A8\u81F3\u6839\u90E8\u5E76\u6267\u884CsiftDown\u51FD\u6570\uFF0C
        // \u8868\u793A\u6211\u4EEC\u5C06\u4EA4\u6362\u5143\u7D20\u76F4\u5230\u5806\u7684\u7ED3\u6784\u6B63\u5E38
        //[0,1,2,3,4,5,6,7]
        //[2,3,4,5,6,7,8,9]
        let element = index
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
 
        const size = this.size()
 
        if (left &lt; size &amp;&amp; this.heap[element] &gt; this.heap[left]) {
            element = left
        }
 
        if (right &lt; size &amp;&amp; this.heap[element] &gt; this.heap[right]) {
            element = right
        }
 
        if (index !== element) {
            [this.heap[index], this.heap[element]] = [this.heap[element], this.heap[index]]
            this.siftDown(element)
 
        }
 
 
    }
    //\u5411\u5806\u4E2D\u63D2\u5165\u65B0\u7684\u503C
    insert(value) {
        if (value !== null) {
            this.heap.push(value)//\u5C06\u503C\u63D2\u5165\u5230\u5806\u7684\u5E95\u90E8\u53F6\u8282\u70B9
            this.siftUp(this.heap.length - 1) //\u5C06\u8FD9\u4E2A\u503C\u548C\u4ED6\u7684\u7236\u8282\u70B9\u8FDB\u884C\u4EA4\u6362
 
            return true
        }
        return false
    }
    //\u79FB\u9664\u6700\u5C0F\u503C\u6216\u6700\u5927\u503C\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u503C
    extract() {
        if (this.isEmpty()) {
            return undefined
        }
 
        if (this.size() === 1) {
            return this.heap.shift()
        }
 
        const removedValue = this.heap[0]
        console.log('removedValue', removedValue);
        this.heap[0] = this.heap.pop()
        this.siftDown(0)
 
        return removedValue
 
 
    }
    // \u8FD4\u56DE\u6700\u5C0F\u503C\u6216\u6700\u5927\u503C\u4E14\u4E0D\u4F1A\u79FB\u9664
    findMinimun() {
        return this.isEmpty() ? undefined : this.heap[0]
    }
 
    size() {
        return this.heap.length
    }
 
    isEmpty() {
        return this.size() === 0
    }
}
 
const arr = [5, 23, 6, 0, 66, 77, 33, 46, 4, 3, 2, 1]
 
function heapSort(arr) {
    const heap = new MinHeap()
    //\u6784\u5EFA\u6700\u5C0F\u5806
    for (const e of arr) {
        heap.insert(e)
    }
    const result = []
    console.log('heap.length', heap.size());
 
    while (heap.size() &gt; 0) {
        result.push(heap.extract())
    }
 
    return result
}
 
console.log(heapSort(arr));
</code></pre>
`},{index:[],path:"/posts/\u5185\u63D2\u641C\u7D22.html",title:"\u5185\u63D2\u641C\u7D22",date:"2021-11-01",fontNum:731,description:`\r
javascript\r
 \r
//\u5185\u63D2\u641C\u7D22\r
function interpolationSearch(array, value) {\r
    const { length } = array\r
    let low = 0\r
    let high = length - 1\r
    let position = -1\r
    let delta = -1\r
    while`,tags:["\u641C\u7D22"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript"> 
//\u5185\u63D2\u641C\u7D22
function interpolationSearch(array, value) {
    const { length } = array
    let low = 0
    let high = length - 1
    let position = -1
    let delta = -1
    while (low &lt;= high &amp;&amp; value &gt;= array[low] &amp;&amp; value &lt;= array[high]) {
        delta = (value - array[low]) / (array[high] - array[low])
 
        position = low + Math.floor((high - low) * delta) //\u5185\u63D2\u8BA1\u7B97\u516C\u5F0F \u67E5\u627E\u7684\u521D\u59CB\u4F4D\u7F6E
 
        if (array[position] === value) {
            return position
        }
 
        if (array[position] &lt; value) {
            low = position + 1
        } else {
            high = position - 1
        }
    }
 
    return 'NOT_EXIST'
}
 
console.log(interpolationSearch([1, 2, 3, 4, 5], 2));
</code></pre>
`},{index:[],path:"/posts/\u57FA\u6570\u6392\u5E8F.html",title:"\u57FA\u6570\u6392\u5E8F",date:"2021-10-28",fontNum:1357,description:`\r
javascript\r
//\u57FA\u6570\u6392\u5E8F\r
 \r
function radixSort(array, radixBase = 10) {\r
    if (array.length < 2) {\r
        return array\r
    }\r
 \r
    const maxValue = Math.max(...array)\r
    const minValue = Math`,tags:["\u6392\u5E8F"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u57FA\u6570\u6392\u5E8F
 
function radixSort(array, radixBase = 10) {
    if (array.length &lt; 2) {
        return array
    }
 
    const maxValue = Math.max(...array)
    const minValue = Math.min(...array)
 
    let significantDigit = 1
 
    while ((maxValue - minValue) / significantDigit &gt;= 1) {
        array = countingSortForRadix(array, radixBase, significantDigit, minValue)
 
        significantDigit *= radixBase
    }
 
    return array
}
 
function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex
    const buckets = []
    const aux = []
 
    for (let i = 0; i &lt; radixBase; i++) {
        buckets[i] = 0
    }
    //\u8BA1\u6570\u6392\u5E8F
    //\u7EDF\u8BA1\u6570\u91CF
    for (let i = 0; i &lt; array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        buckets[bucketsIndex]++
    }
    //\u8BA1\u7B97\u4F4D\u7F6E
    for (let i = 1; i &lt; radixBase; i++) {
        buckets[i] += buckets[i - 1]
    }
    //\u8FDB\u884C\u6392\u5E8F
    for (let i = array.length - 1; i &gt;= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        --buckets[bucketsIndex]
        aux[buckets[bucketsIndex]] = array[i]
    }
 
    console.log('aux', aux);
    return aux
}
 
console.log(radixSort([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
</code></pre>
`},{index:[],path:"/posts/\u6392\u5E8F\u7B97\u6CD5\u6C47\u603B.html",title:"\u6392\u5E8F\u7B97\u6CD5\u6C47\u603B",date:"2021-10-28",fontNum:7997,description:`\r
javascript\r
// //\u5192\u6CE1\r
// // function bubbleSort(array) {\r
// //     const { length } = array\r
// //     for (let i = 0; i < length; i) {\r
// //         for (let j = 0; j < length - i - 1; j) {`,tags:["\u6392\u5E8F"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">// //\u5192\u6CE1
// // function bubbleSort(array) {
// //     const { length } = array
// //     for (let i = 0; i &lt; length; i++) {
// //         for (let j = 0; j &lt; length - i - 1; j++) {
// //             if (array[j] &gt; array[j + 1]) {
// //                 // let temp = array[j]
// //                 // array[j] = array[j + 1]
// //                 // array[j + 1] = temp
// //                 [array[j], array[j + 1]] = [array[j + 1], array[j]]
// //             }
// //         }
// //     }
// //     return array
// // }
// // console.log(bubbleSort([5, 4, 3, 2, 1]));
// //\u9009\u62E9
// // function selectionSort(array) {
// //     const { length } = array
// //     let indexMin
// //     for (let i = 0; i &lt; length; i++) {
// //         indexMin = i
// //         for (let j = i; j &lt; length; j++) {
// //             if (array[indexMin] &gt; array[j]) {
// //                 indexMin = j
// //             }
// //         }
// //         if (i !== indexMin) {
// //             [array[i], array[indexMin]] = [array[indexMin], array[i]]
// //         }
// //     }
// //     return array
// // }
// // console.log(selectionSort([5, 4, 3, 2, 1]));
// //\u63D2\u5165
// function insertSort(array) {
//     const { length } = array
//     let temp
//     for (let i = 1; i &lt; length; i++) {
//         let j = i
//         temp = array[i]
//         while (j &gt; 0 &amp;&amp; array[j - 1] &gt; temp) {
//             array[j] = array[j - 1]
//             j--
//         }
//         array[j] = temp
//     }
//     return array
// }
// // 5,4,3,2,1
// // 
// // console.log(insertSort([5, 4, 3, 2, 1]));
// // //\u6392\u5E8F\u5C0F\u578B\u6570\u7EC4\u65F6\uFF0C\u6B64\u7B97\u6CD5\u6BD4\u9009\u62E9\u6392\u5E8F\u548C\u5192\u6CE1\u6392\u5E8F\u6027\u80FD\u8981\u597D\u3002
// //\u5F52\u5E76
// // function mergeSort(array) {
// //     if (array.length &gt; 1) {
// //         const { length } = array
// //         const minddle = Math.floor(length / 2)
// //         const left = mergeSort(array.slice(0, minddle))
// //         const right = mergeSort(array.slice(minddle, length))
// //         array = merge(left, right)
// //     }
// //     return array
// // }
// // function merge(left, right) {
// //     let i = 0;
// //     let j = 0;
// //     const result = []
// //     // console.log(left, right); \u7ED9\u4E24\u4E2A\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F
// //     while (i &lt; left.length &amp;&amp; j &lt; right.length) {
// //         result.push(left[i] &lt; right[j] ? left[i++] : right[j++])
// //     }
// //     // console.log('result', result); \u5C06\u5927\u7684\u90A3\u4E2A\u6570\u7EC4\u7684\u5269\u4F59\u90E8\u5206\u5408\u5E76\u5165\u7ED3\u679C
// //     return result.concat(i &lt; left.length ? left.slice(i) : right.slice(j))
// // }
// // console.log(mergeSort([5, 4, 3, 2, 1]));
// //\u5FEB\u901F
// // function quickSort(array) {
// //     return quick(array, 0, array.length - 1)
// // }
// // function quick(array, left, right) {
// //     let index
// //     if (array.length &gt; 1) {
// //         index = partition(array, left, right)
// //         if (left &lt; index - 1) {
// //             quick(array, left, index - 1)
// //         }
// //         if (index &lt; right) {
// //             quick(array, index, right)
// //         }
// //     }
// //     return array
// // }
// // function partition(array, left, right) {
// //     const pivot = array[Math.floor((right + left) / 2)]
 
// //     let i = left
// //     let j = right
// //     while (i &lt;= j) {
// //         while (array[i] &lt; pivot) {
// //             i++
// //         }
// //         while (array[j] &gt; pivot) {
// //             j--
// //         }
// //         if (i &lt;= j) {
// //             [array[i], array[j]] = [array[j], array[i]]
// //             i++
// //             j--
// //         }
// //     }
// //     return i
// // }
// // console.log(quickSort([5, 4, 3, 2, 1]));
// // //\u8BA1\u6570
// // function countingSort(array) {
// //     if (array.length &lt; 2) {
// //         return array
// //     }
// //     //\u627E\u51FA\u6700\u5927\u503C
// //     const maxValue = findMaxValue(array)
// //     //\u58F0\u660E\u4E00\u4E2A\u6570\u7EC4 
// //     //\u5C06\u9700\u8981\u8FDB\u884C\u6392\u5E8F\u7684\u6570\u7EC4\u7684value \u6620\u5C04\u5230\u53E6\u4E00\u4E2A\u6570\u7EC4\u7684index
// //     const counts = new Array(maxValue + 1)
// //     array.forEach(element =&gt; {
// //         if (!counts[element]) {
// //             counts[element] = 0
// //         }
// //         counts[element]++
// //     });
// //     console.log('counts', counts);
// //     //\u6839\u636E\u6620\u5C04\u540E\u7684\u6570\u7EC4\u7684index\u548Cvalue(value\u4E3A\u8BE5index\u51FA\u73B0\u7684\u6B21\u6570)
// //     //\u7531\u6B64\u751F\u6210\u6392\u5E8F\u597D\u7684array\u6570\u7EC4
// //     let sortIndex = 0
// //     counts.forEach((count, i) =&gt; {
// //         while (count &gt; 0) {
// //             array[sortIndex++] = i
// //             count--
// //         }
// //     })
// //     return array
// // }
// // function findMaxValue(array) {
// //     let max = array[0]
// //     for (let i = 1; i &lt; array.length; i++) {
// //         if (array[i] &gt; max) {
// //             max = array[i]
// //         }
// //     }
// //     return max
// // }
// // console.log(countingSort([5, 4, 3, 2, 1]));
// //\u6876\u6392
// function bucketSort(array, bucketSize = 5) {
//     if (array.length &lt; 2) {
//         return array
//     }
//     const buckets = createBuckets(array, bucketSize)
//     return sortBuckets(buckets)
// }
// function createBuckets(array, bucketSize) {
//     let minValue = array[0]
//     let maxValue = array[0]
//     //\u83B7\u53D6\u6700\u5C0F\u503C \u548C \u6700\u5927\u503C
//     for (let i = 1; i &lt; array.length; i++) {
//         if (array[i] &lt; minValue) {
//             minValue = array[i]
//         } else if (array[i] &gt; maxValue) {
//             maxValue = array[i]
//         }
//     }
//     //\u8BA1\u7B97\u6BCF\u4E2A\u6876\u4E2D\u9700\u8981\u5206\u5E03\u7684\u5143\u7D20\u4E2A\u6570
//     const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
//     //\u521D\u59CB\u5316\u6BCF\u4E2A\u6876
//     console.log('bucketCount', bucketCount);
//     const buckets = []
//     for (let i = 0; i &lt; bucketCount; i++) {
//         buckets[i] = []
//     }
//     //\u6700\u540E\u4E00\u6B65\u662F\u5C06\u5143\u7D20\u5206\u5E03\u5230\u6876\u4E2D
//     for (let i = 0; i &lt; array.length; i++) {
//         const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
 
//         buckets[bucketIndex].push(array[i])
//     }
//     console.log('buckets', buckets);
//     return buckets
// }
 
// function sortBuckets(buckets) {
//     const sortedArray = []
//     for (let i = 0; i &lt; buckets.length; i++) {
//         if (buckets[i] != null) {
//             insertSort(buckets[i])
//             sortedArray.push(...buckets[i])
 
//         }
//     }
//     return sortedArray
// }
 
// console.log(bucketSort([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
 
 
 
//\u57FA\u6570\u6392\u5E8F
 
function radixSort(array, radixBase = 10) {
    if (array.length &lt; 2) {
        return array
    }
 
    const maxValue = Math.max(...array)
    const minValue = Math.min(...array)
 
    let significantDigit = 1
 
    while ((maxValue - minValue) / significantDigit &gt;= 1) {
        //10 1 1
        //10 10 1
        array = countingSortForRadix(array, radixBase, significantDigit, minValue)
 
        significantDigit *= radixBase
    }
 
    return array
}
 
function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    console.log('-------------------------------------------------');
    let bucketsIndex
    const buckets = []
    const aux = []
 
    for (let i = 0; i &lt; radixBase; i++) {
        buckets[i] = 0
    }
    //\u8BA1\u6570\u6392\u5E8F
    for (let i = 0; i &lt; array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        // console.log(array[i], '=====', bucketsIndex);
        buckets[bucketsIndex]++
    }
 
    // console.log('buckets', buckets);
    for (let i = 1; i &lt; radixBase; i++) {
 
        buckets[i] += buckets[i - 1]
    }
    // console.log('&gt;&gt;&gt;&gt;&gt;', buckets);
 
    for (let i = array.length - 1; i &gt;= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        // console.log('&lt;&lt;&lt;&lt;&lt;', --buckets[bucketsIndex]);
 
        --buckets[bucketsIndex]
        aux[buckets[bucketsIndex]] = array[i]
    }
 
    console.log('aux', aux);
    return aux
}
 
console.log(radixSort([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
</code></pre>
`},{index:[],path:"/posts/element_ui\u7684table\u6DFB\u52A0\u9012\u589E\u5E8F\u53F7.html",title:"element-ui\u7684table\u6DFB\u52A0\u9012\u589E\u5E8F\u53F7",date:"2021-10-27",fontNum:394,description:`\r
javascript\r
data() {\r
    return {\r
      pagger:{\r
        dataTotal: 1000,  // \u6570\u636E\u603B\u6570\r
        pagesize:10,  //\u6BCF\u9875\u7684\u6570\u636E\u6761\u6570\r
        currentPage:1,//\u5F53\u524D\u9875\r
      }\r
        \r
    }\r
}\r
 \r
 \r
<el-table-c`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">data() {
    return {
      pagger:{
        dataTotal: 1000,  // \u6570\u636E\u603B\u6570
        pagesize:10,  //\u6BCF\u9875\u7684\u6570\u636E\u6761\u6570
        currentPage:1,//\u5F53\u524D\u9875
      }
        
    }
}
 
 
&lt;el-table-column label=&quot;\u5E8F\u53F7&quot; width=&quot;100&quot;&gt;
    &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;span&gt;{{(pagger.currentPage - 1) * pagger.pagesize + scope.$index + 1}}&lt;/span&gt;
    &lt;/template&gt;
&lt;/el-table-column&gt;
</code></pre>
`},{index:[],path:"/posts/\u6876\u6392\u5E8F\u7B97\u6CD5.html",title:"\u6876\u6392\u5E8F\u7B97\u6CD5",date:"2021-10-27",fontNum:1768,description:`\r
javascript\r
//\u63D2\u5165\u6392\r
function insertSort(array) {\r
    const { length } = array\r
    let temp\r
 \r
    for (let i = 1; i < length; i) {\r
        let j = i\r
        temp = array[i]\r
 \r
        whil`,tags:["\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u63D2\u5165\u6392
function insertSort(array) {
    const { length } = array
    let temp
 
    for (let i = 1; i &lt; length; i++) {
        let j = i
        temp = array[i]
 
        while (j &gt; 0 &amp;&amp; array[j - 1] &gt; temp) {
            array[j] = array[j - 1]
            j--
        }
 
        array[j] = temp
    }
    return array
}
//\u6876\u6392
function bucketSort(array, bucketSize = 5) {
 
    if (array.length &lt; 2) {
        return array
    }
 
    const buckets = createBuckets(array, bucketSize)
 
    return sortBuckets(buckets)
}
 
function createBuckets(array, bucketSize) {
    let minValue = array[0]
    let maxValue = array[0]
    //\u83B7\u53D6\u6700\u5C0F\u503C \u548C \u6700\u5927\u503C
    for (let i = 1; i &lt; array.length; i++) {
        if (array[i] &lt; minValue) {
            minValue = array[i]
        } else if (array[i] &gt; maxValue) {
            maxValue = array[i]
        }
    }
    //\u8BA1\u7B97\u6BCF\u4E2A\u6876\u4E2D\u9700\u8981\u5206\u5E03\u7684\u5143\u7D20\u4E2A\u6570
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    //\u521D\u59CB\u5316\u6BCF\u4E2A\u6876
 
    console.log('bucketCount', bucketCount);
    const buckets = []
    for (let i = 0; i &lt; bucketCount; i++) {
        buckets[i] = []
    }
    //\u6700\u540E\u4E00\u6B65\u662F\u5C06\u5143\u7D20\u5206\u5E03\u5230\u6876\u4E2D
    for (let i = 0; i &lt; array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
 
        buckets[bucketIndex].push(array[i])
    }
    console.log('buckets', buckets);
    return buckets
}
 
function sortBuckets(buckets) {
    const sortedArray = []
    for (let i = 0; i &lt; buckets.length; i++) {
        if (buckets[i] != null) {
            insertSort(buckets[i])
            sortedArray.push(...buckets[i])
 
        }
    }
    return sortedArray
}
 
console.log(bucketSort([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
</code></pre>
`},{index:[],path:"/posts/\u8BA1\u6570\u6392\u5E8F.html",title:"\u8BA1\u6570\u6392\u5E8F",date:"2021-10-27",fontNum:981,description:`\r
javascript\r
//\u8BA1\u6570\r
 \r
 \r
function countingSort(array) {\r
    if (array.length < 2) {\r
        return array\r
    }\r
    //\u627E\u51FA\u6700\u5927\u503C\r
    const maxValue = findMaxValue(array)\r
    //\u58F0\u660E\u4E00\u4E2A\u6570\u7EC4 \r
    //\u5C06\u9700\u8981\u8FDB\u884C`,tags:["\u6392\u5E8F"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u8BA1\u6570
 
 
function countingSort(array) {
    if (array.length &lt; 2) {
        return array
    }
    //\u627E\u51FA\u6700\u5927\u503C
    const maxValue = findMaxValue(array)
    //\u58F0\u660E\u4E00\u4E2A\u6570\u7EC4 
    //\u5C06\u9700\u8981\u8FDB\u884C\u6392\u5E8F\u7684\u6570\u7EC4\u7684value \u6620\u5C04\u5230\u53E6\u4E00\u4E2A\u6570\u7EC4\u7684index
    const counts = new Array(maxValue + 1)
 
    array.forEach(element =&gt; {
        if (!counts[element]) {
            counts[element] = 0
        }
 
        counts[element]++
 
    });
 
    console.log('counts', counts);
    //\u6839\u636E\u6620\u5C04\u540E\u7684\u6570\u7EC4\u7684index\u548Cvalue(value\u4E3A\u8BE5index\u51FA\u73B0\u7684\u6B21\u6570)
    //\u7531\u6B64\u751F\u6210\u6392\u5E8F\u597D\u7684array\u6570\u7EC4
    let sortIndex = 0
    counts.forEach((count, i) =&gt; {
 
        while (count &gt; 0) {
            array[sortIndex++] = i
            count--
        }
 
    })
 
    return array
}
 
function findMaxValue(array) {
    let max = array[0]
    for (let i = 1; i &lt; array.length; i++) {
        if (array[i] &gt; max) {
            max = array[i]
        }
    }
    return max
}
 
console.log(countingSort([5, 4, 3, 2, 1]));
</code></pre>
`},{index:[],path:"/posts/\u786C\u5E01\u95EE\u9898\u548C\u80CC\u5305\u95EE\u9898.html",title:"\u786C\u5E01\u95EE\u9898\u548C\u80CC\u5305\u95EE\u9898",date:"2021-10-26",fontNum:901,description:`\r
javascript\r
//\u786C\u5E01\u95EE\u9898\r
// function minCoinChange(coins, amount) {\r
//     const change = []\r
//     let total = 0\r
//     for (let i = coins.length; i >= 0; i--) {\r
//         const coin = coins[i]\r`,tags:["\u8D2A\u5FC3\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u786C\u5E01\u95EE\u9898
// function minCoinChange(coins, amount) {
//     const change = []
//     let total = 0
//     for (let i = coins.length; i &gt;= 0; i--) {
//         const coin = coins[i]
//         while (total + coin &lt;= amount) {
//             change.push(coin)
//             total += coin
//         }
//     }
//     return change
// }
 
// console.log(minCoinChange([1, 5, 10, 25], 36));
 
//\u80CC\u5305\u95EE\u9898
function knapStack(capacity, weights, values) {
    const valueLen = values.length
    let load = 0
    let val = 0
    for (let i = 0; i &lt; valueLen &amp;&amp; load &lt; capacity; i++) {
        if (weights[i] &lt;= capacity - load) {
            val += values[i]
            load += weights[i]
        } else {
            const r = (capacity - load) / weights[i]
            val += r * values[i]
            load += weights[i]
        }
 
 
    }
    return val
}
</code></pre>
`},{index:[],path:"/posts/\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217.html",title:"\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217",date:"2021-10-22",fontNum:1615,description:`\r
javascript\r
//\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217\uFF1A\u627E\u51FA\u4E24\u4E2A\u5B57\u7B26\u4E32\u5E8F\u5217\u7684\u6700\u957F\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u3002\u6700\u957F\u5B50\u5E8F\u5217\u662F\u6307\uFF0C\u5728\u4E24\u4E2A\u5B57\u7B26\u4E32\u5E8F\u5217\u4E2D\u4EE5\u76F8\u540C\u987A\u5E8F\u51FA\u73B0\uFF0C\u4F46\u4E0D\u8981\u6C42\u8FDE\u7EED\uFF08\u975E\u5B57\u7B26\u4E32\u5B50\u4E32\uFF09\u7684\u5B57\u7B26\u4E32\u5E8F\u5217\u3002\r
 \r
function longestPublicStr(wordX, wordY) {\r
    const m = wordX.length\r
    const n = wordY.length\r
    `,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217\uFF1A\u627E\u51FA\u4E24\u4E2A\u5B57\u7B26\u4E32\u5E8F\u5217\u7684\u6700\u957F\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u3002\u6700\u957F\u5B50\u5E8F\u5217\u662F\u6307\uFF0C\u5728\u4E24\u4E2A\u5B57\u7B26\u4E32\u5E8F\u5217\u4E2D\u4EE5\u76F8\u540C\u987A\u5E8F\u51FA\u73B0\uFF0C\u4F46\u4E0D\u8981\u6C42\u8FDE\u7EED\uFF08\u975E\u5B57\u7B26\u4E32\u5B50\u4E32\uFF09\u7684\u5B57\u7B26\u4E32\u5E8F\u5217\u3002
 
function longestPublicStr(wordX, wordY) {
    const m = wordX.length
    const n = wordY.length
    const l = []
    const solution = []
 
    for (let i = 0; i &lt;= m; i++) {
        l[i] = []
        solution[i] = []
        for (let j = 0; j &lt;= n; j++) {
            l[i][j] = 0
            solution[i][j] = 0
        }
    }
 
    for (let i = 0; i &lt;= m; i++) {
        for (let j = 0; j &lt;= n; j++) {
            if (i === 0 || j === 0) {
                l[i][j] = 0
            } else if (wordX[i - 1] === wordY[j - 1]) {
                l[i][j] = l[i - 1][j - 1] + 1
                solution[i][j] = 'diagonal'
            } else {
                const a = l[i - 1][j]
                const b = l[i][j - 1]
 
                l[i][j] = a &gt; b ? a : b
                solution[i][j] = (l[i][j] === l[i - 1][j]) ? 'top' : 'left'
            }
        }
 
    }
    printSolution(solution, wordX, m, n)
    return l[m][n]
}
 
 
function printSolution(solution, wordX, m, n) {
    let a = m
    let b = n
    let x = solution[a][b]
    let answer = ''
    while (x !== 0) {
        if (solution[a][b] === 'diagonal') {
            answer = wordX[a - 1] + answer
            a--
            b--
        } else if (solution[a][b] === 'left') {
            b--
        } else if (solution[a][b] === 'top') {
            a--
        }
        x = solution[a][b]
    }
    console.log('\u7ED3\u679C:' + answer);
}
 
 
 
console.log(longestPublicStr('acdaed', 'abcadf'));
</code></pre>
`},{index:[],path:"/posts/\u5B8C\u6574\u7684\u80CC\u5305\u95EE\u9898.html",title:"\u5B8C\u6574\u7684\u80CC\u5305\u95EE\u9898",date:"2021-10-21",fontNum:1639,description:`\r
javascript\r
//\u52A8\u6001\u89C4\u5212\u89E3\u51B3\u5B8C\u6574\u7684\u80CC\u5305\u95EE\u9898\r
function package(capacity, weights, values) {\r
    const cache = []\r
    const len = values.length\r
    for (let i = 0; i <= len; i) {\r
        cache[i] = []\r
    }`,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u52A8\u6001\u89C4\u5212\u89E3\u51B3\u5B8C\u6574\u7684\u80CC\u5305\u95EE\u9898
function package(capacity, weights, values) {
    const cache = []
    const len = values.length
    for (let i = 0; i &lt;= len; i++) {
        cache[i] = []
    }
    for (let i = 0; i &lt;= len; i++) {
        for (let w = 0; w &lt;= capacity; w++) {
            //\u56E0\u4E3Aweights,values\u6570\u7EC4\u91CC\u7684\u662F\u4ECE0\u5F00\u59CB\u7684\u6240\u4EE5\u8FD9\u91CC\u53D6i-1
            const item = i - 1
            //**\u7269\u54C1\u4E3A0\u6216\u8005\u5BB9\u91CF\u4E3A0\u7684\u65F6\u5019\u7684\u65F6\u5019\u6700\u5927value\u90FD\u4E3A0 */
            if (i === 0 || w === 0) {
                cache[i][w] = 0
                // \u5F53\u524D\u7269\u54C1\u7684\u91CD\u91CF\u5C0F\u4E8E\u5BB9\u91CF 
            } else if (weights[item] &lt;= w) {
                //**\u5F53\u524D\u7269\u54C1value + \u5269\u4F59\u5BB9\u91CF\u80FD\u88C5\u7684\u6700\u5927value */
                const leftCapacity = w - weights[item]
                const a = values[item] + cache[item][leftCapacity]
                //**\u4E0A\u4E00\u79CD\u88C5\u6CD5\u7684\u6700\u5927value */
                const b = cache[item][w]
                //**\u6BD4\u8F83\u4E24\u8005\u5927\u5C0F */
                cache[i][w] = a &gt; b ? a : b
            } else {
                //**\u4E0A\u4E00\u79CD\u88C5\u6CD5\u7684\u6700\u5927value */
                cache[i][w] = cache[item][w]
            }
        }
    }
    findValues(capacity, weights, values, cache)
    return cache[len][capacity]
}
 
function findValues(capacity, weights, values, cache) {
    let x = values.length
 
    let y = capacity
 
    while (x &gt; 0 &amp;&amp; y &gt; 0) {
        if (cache[x][y] !== cache[x - 1][y]) {
            console.log(\`\u89E3\u7684\u6784\u6210weight:\${weights[x - 1]},value:\${values[x - 1]}\`);
            x--
            y -= cache[x][y]
 
        } else {
            x--
        }
    }
 
}
 
const values = [3, 4, 5],
    weights = [2, 3, 4],
    capacity = 5
 
 
console.log(package(capacity, weights, values));
</code></pre>
`},{index:[],path:"/posts/\u4E8C\u5206\u67E5\u627E.html",title:"\u4E8C\u5206\u67E5\u627E",date:"2021-10-20",fontNum:982,description:`\r
javascript\r
function binarySearchRecursive(array, value, low, high, compareFn) {\r
    if (low <= high) {\r
        const min = Math.floor((low  high) / 2)\r
        const element = array[mid]\r
 \r
`,tags:["\u641C\u7D22"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">function binarySearchRecursive(array, value, low, high, compareFn) {
    if (low &lt;= high) {
        const min = Math.floor((low + high) / 2)
        const element = array[mid]
 
        if (compareFn(element, value) === 'LESS_THEN') {
            return binarySearchRecursive(array, value, min + 1, high, compareFn)
        } else if (compareFn(element, value) === 'BIGGER_THEN') {
            return binarySearchRecursive(array, value, low, min - 1, compareFn)
        } else {
            return mid
        }
    }
    return 'DOES_NOT_EXIST'
}
 
function binarySearch(array, value, compareFn) {
    const sortedArray = quickSort(array)
    const low = 0
    const high = sortedArray.length - 1
 
    return binarySearchRecursive(array, value, low, high, compareFn)
}
 
function compareFn(value1, value2) {
    return value1 &gt; value2 ? 'BIGGER_THAN' : value1 &lt; value2 ? 'LESS_THEN' : EQUAL
}
function quickSort() {
    .......
}
</code></pre>
`},{index:[],path:"/posts/element_ui_table\u8868\u5934\u548C\u8868\u4F53\u9519\u4F4D.html",title:"chrome \u4E0B \u7F29\u653Eelement ui \u7684table\u7EC4\u4EF6\u4F1A\u5BFC\u81F4\u8868\u5934\u548C\u8868\u4F53\u9519\u4F4D",date:"2021-10-19",fontNum:310,description:`\r
chrome \u4E0B \u7F29\u653Eelement ui \u7684table\u7EC4\u4EF6\u4F1A\u5BFC\u81F4\u8868\u5934\u548C\u8868\u4F53\u9519\u4F4D\r
 \r
\u5728index.html\u6216\u8005\u5165\u53E3\u6587\u4EF6App.vue\u4E2D\u6DFB\u52A0\u6837\u5F0F\r
 \r
\u4EB2\u6D4BApp.vue\u4E2D\u65E0\u6548\u7684\u8BDD\u5C31\u5728index.html\u4E2D\u6DFB\u52A0\r
\r
body .el-table th.gutter{\r
    display: table-cell!important;\r
}\r
\r
\u7ED9\u7C7B\u540D\u4E3A gutter\u7684`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>chrome \u4E0B \u7F29\u653Eelement ui \u7684table\u7EC4\u4EF6\u4F1A\u5BFC\u81F4\u8868\u5934\u548C\u8868\u4F53\u9519\u4F4D</p>
<p>\u5728index.html\u6216\u8005\u5165\u53E3\u6587\u4EF6App.vue\u4E2D\u6DFB\u52A0\u6837\u5F0F</p>
<p>\u4EB2\u6D4BApp.vue\u4E2D\u65E0\u6548\u7684\u8BDD\u5C31\u5728index.html\u4E2D\u6DFB\u52A0</p>
<pre><code>body .el-table th.gutter{
    display: table-cell!important;
}
</code></pre>
<p>\u7ED9\u7C7B\u540D\u4E3A gutter\u7684\u8868\u5934\u5355\u5143\u683C\u6DFB\u52A0display: table-cell!important;</p>
<p>display: table-cell</p>
<p>\u8FD9\u4E2A\u5C5E\u6027\u8BA9\u5143\u7D20\u53D8\u6210\u8868\u683C\u5355\u5143</p>
<p>\u914D\u5408display:table\u53EF\u4EE5\u6A21\u62DFtable\u7684\u5E03\u5C40\u5C5E\u6027</p>
`},{index:[],path:"/posts/\u6700\u5C11\u786C\u5E01\u627E\u96F6\u95EE\u9898\u8BB0\u5F55.html",title:"\u52A8\u6001\u89C4\u5212\u6CD5\u6700\u5C11\u786C\u5E01\u627E\u96F6\u95EE\u9898\u8BB0\u5F55",date:"2021-10-17",fontNum:951,description:`\r
javascript\r
function minCoinChange(coins, amount) {\r
    const cache = {}\r
 \r
    function makeChange(amount) {\r
        let newAmount = 0,\r
            newMin = [],\r
            min = []\r
      `,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">function minCoinChange(coins, amount) {
    const cache = {}
 
    function makeChange(amount) {
        let newAmount = 0,
            newMin = [],
            min = []
        if (amount === 0) {
            return []
        }
 
        if (cache[amount]) {
            return cache[amount]
        }
 
        for (const coin of coins) {
            newAmount = amount - coin
            //\u4F20\u51650\u4F1A\u8FD4\u56DE\u7A7A\u6570\u7EC4 \u6240\u4EE5\u8FD9\u91CC&gt;=0
            if (newAmount &gt;= 0) {
                newMin = makeChange(newAmount)
            }
            //\u56E0\u4E3AnewMin\u9700\u8981\u52A0\u4E0Acoin\u7136\u540E\u5C0F\u4E8Emin
            //newMIn + 1 &lt; min
            //newMin &lt; min - 1
 
            if (newAmount &gt;= 0 &amp;&amp; (newMin.length &lt; min.length - 1 || !min.length)) {
                min = [coin].concat(newMin)
            }
        }
 
        return cache[amount] = min
    }
 
    return makeChange(amount)
}
 
console.log(minCoinChange([1, 5, 10, 25], 66));
 

</code></pre>
`},{index:[],path:"/posts/99\u6570\u72EC\u95EE\u9898.html",title:"9x9\u6570\u72EC\u95EE\u9898",date:"2021-10-11",fontNum:2784,description:`\r
javascript\r
 \r
const sudokuGrid = [\r
    [5, 3, 0, 0, 7, 0, 0, 0, 0],\r
    [6, 0, 0, 1, 9, 5, 0, 0, 0],\r
    [0, 9, 8, 0, 0, 0, 0, 6, 0],\r
    [8, 0, 0, 0, 6, 0, 0, 0, 3],\r
    [4, 0, 0, 8, 0, 3,`,tags:["\u56DE\u6EAF\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript"> 
const sudokuGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
]
 
function suduSolver(sudu) {
    if (solveSudoku(sudu)) {
        return sudu
    }
    return 'UNSOLVED'
}
 
const UNASSIGNED = 0
 
function solveSudoku(sudu) {
    let rowIndex = null, colIndex = null, checkBlankSpace = false
    //\u5982\u679C\u6709\u7A7A\u767D\u4F4D\u7F6E\u6211\u4EEC\u8981\u4ECE\u4E24\u4E2A\u5FAA\u73AF\u4E2D\u8DF3\u51FA
    for (let row = 0; row &lt; 9; row++) {
        for (let col = 0; col &lt; 9; col++) {
            if (sudu[row][col] === UNASSIGNED) {
                rowIndex = row
                colIndex = col
                checkBlankSpace = true
                break
            }
        }
 
        if (checkBlankSpace) {
            break
        }
    }
 
    if (!checkBlankSpace) {
        return true
    }
 
    for (let num = 1; num &lt;= 9; num++) {
        //\u5148\u7ED9\u672A\u5206\u914D\u503C\u7684\u5143\u7D20\u8D4B\u503C\u7136\u540E\u4F9D\u6B21\u5F80\u540E\u9012\u5F52\u8C03\u7528\u5982\u679C\u6709\u4E0D\u7B26\u5408\u7684\u5C31\u56DE\u6EAF
        //\u91CD\u65B0\u8D4B\u503C\u4E3AUNASSIGNED \u672A\u5206\u914D\u7684\u72B6\u6001\u7136\u540E\u8FDB\u884C\u4E0B\u4E00\u8F6E\u5FAA\u73AF
        if (isSafe(rowIndex, colIndex, sudu, num)) {
            sudu[rowIndex][colIndex] = num
            if (solveSudoku(sudu)) {
                return true
            }
            sudu[rowIndex][colIndex] = UNASSIGNED
 
        }
    }
    return false
 
}
//\u68C0\u67E5\u6BCF\u4E00\u884C\u662F\u5426\u7B26\u5408\u89C4\u5219
function isSafe(row, col, sudu, num) {
    return !usedInRow(row, sudu, num) &amp;&amp;
        !usedInCol(col, sudu, num) &amp;&amp;
        !usedInBox(row - row % 3, col - col % 3, sudu, num)
 
}
//\u68C0\u67E5\u6BCF\u4E00\u5217\u662F\u5426\u7B26\u5408\u89C4\u5219
function usedInRow(row, sudu, num) {
    for (let i = 0; i &lt; 9; i++) {
        if (sudu[row][i] === num) {
            return true
        }
    }
    return false
}
//\u68C0\u67E5\u6BCF\u4E00\u5BAB\u662F\u5426\u7B26\u5408\u89C4\u5219
function usedInCol(col, sudu, num) {
    for (let i = 0; i &lt; 9; i++) {
        if (sudu[i][col] === num) {
            return true
        }
    }
    return false
}
 
function usedInBox(row, col, sudu, num) {
    for (let i = 0; i &lt; 3; i++) {
        for (let j = 0; j &lt; 3; j++) {
            if (sudu[row + i][col + j] === num) {
                return true
            }
        }
    }
    return false
 
}
console.log(suduSolver(sudokuGrid));
 
// 9x9\u6570\u72EC\u89C4\u5219
//  1.\u6570\u5B57 1-9 \u5728\u6BCF\u4E00\u884C\u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\u3002
// 	2.\u6570\u5B57 1-9 \u5728\u6BCF\u4E00\u5217\u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\u3002
// 	3.\u6570\u5B57 1-9 \u5728\u6BCF\u4E00\u4E2A\u4EE5\u7C97\u5B9E\u7EBF\u5206\u9694\u7684 3x3 \u5BAB\u5185\u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\u3002
// [
//     [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//     [6, 7, 2, 1, 9, 5, 3, 4, 8], 
//     [1, 9, 8, 3, 4, 2, 5, 6, 7], 
//     [8, 5, 9, 7, 6, 1, 4, 2, 3], 
//     [4, 2, 6, 8, 5, 3, 7, 9, 1], 
//     [7, 1, 3, 9, 2, 4, 8, 5, 6], 
//     [9, 6, 1, 5, 3, 7, 2, 8, 4], 
//     [2, 8, 7, 4, 1, 9, 6, 3, 5], 
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]
</code></pre>
`},{index:[],path:"/posts/\u8001\u9F20\u8FF7\u5BAB\u95EE\u9898.html",title:"\u8001\u9F20\u8FF7\u5BAB\u95EE\u9898",date:"2021-10-06",fontNum:1479,description:`\r
javascript\r
//\u56DE\u6EAF\u6CD5\u89E3\u51B3\u8001\u9F20\u8FF7\u5BAB\u95EE\u9898\r
//\u57FA\u672C\u7ED3\u6784 \u8FF7\u5BAB\u7528\u4E8C\u7EF4\u6570\u7EC4\u8868\u793A\r
function ratInMaze(maze) {\r
    //\u521D\u59CB\u5316\u8F93\u51FA\u7ED3\u679C\u7C7B\u578B\u4E3A\u4E8C\u7EF4\u6570\u7EC4\u5148\u75280\u586B\u5145\r
    const solution = []\r
 \r
    for (let i = 0; i < maze.length; i) {\r
        solution[i] = `,tags:["\u56DE\u6EAF\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u56DE\u6EAF\u6CD5\u89E3\u51B3\u8001\u9F20\u8FF7\u5BAB\u95EE\u9898
//\u57FA\u672C\u7ED3\u6784 \u8FF7\u5BAB\u7528\u4E8C\u7EF4\u6570\u7EC4\u8868\u793A
function ratInMaze(maze) {
    //\u521D\u59CB\u5316\u8F93\u51FA\u7ED3\u679C\u7C7B\u578B\u4E3A\u4E8C\u7EF4\u6570\u7EC4\u5148\u75280\u586B\u5145
    const solution = []
 
    for (let i = 0; i &lt; maze.length; i++) {
        solution[i] = []
 
        for (let j = 0; j &lt; maze[i].length; j++) {
            solution[i][j] = 0
        }
    }
    //\u8C03\u7528\u5BFB\u627E\u8DEF\u5F84\u7684\u65B9\u6CD5
    if (findPath(maze, 0, 0, solution) === true) {
        return solution
    }
    return 'NO PATH FOUND'
}
 
//findPath\u65B9\u6CD5
function findPath(maze, x, y, solution) {
    //maze \u6761\u4EF6 x,y \u521D\u59CB\u4F4D\u7F6E\u5750\u6807 solution \u8FD4\u56DE\u7ED3\u679C
    const n = maze.length
    //\u7ED3\u675F\u6761\u4EF6  \u5230\u8FBE\u8FF7\u5BAB\u51FA\u53E3
    if (x === n - 1 &amp;&amp; y === n - 1) {
        solution[x][y] = 1
        return true
    }
 
    //\u5750\u6807\u7684\u4F4D\u7F6E\u5927\u4E8E0\u4E14\u5C0F\u4E8E\u521D\u59CB\u6570\u7EC4\u7684\u957F\u5EA6  \u4E14\u521D\u59CB\u6570\u7EC4\u4E2D\u8BE5\u4F4D\u7F6E\u7684\u503C\u4E0D\u4E3A0  \u7ED3\u679C\u6570\u7EC4\u8BE5\u4F4D\u7F6E\u8D4B\u503C1
    if (isSafe(maze, x, y) === true) {
 
        solution[x][y] = 1
        //\u5F80\u53F3\u8D70\u4E00\u6B65  
        if (findPath(maze, x + 1, y, solution)) {
            return true
        }
        //\u5F80\u53F3\u8D70\u4E0D\u901A  \u5F80\u4E0B\u8D70\u4E00\u6B65 
        if (findPath(maze, x, y + 1, solution)) {
            return true
        }
 
        //\u8D70\u4E0D\u901A
        solution[x][y] = 0
 
        return false
    }
    return false
 
}
 
function isSafe(maze, x, y) {
    const n = maze.length
    //\u5750\u6807\u7684\u4F4D\u7F6E\u5927\u4E8E0\u4E14\u5C0F\u4E8E\u521D\u59CB\u6570\u7EC4\u7684\u957F\u5EA6  \u4E14\u8BE5\u4F4D\u7F6E\u7684\u503C\u4E0D\u4E3A0
    if (x &gt;= 0 &amp;&amp; y &gt;= 0 &amp;&amp; x &lt; n &amp;&amp; y &lt; n &amp;&amp; maze[x][y] !== 0) {
        return true
    }
    return false
}
 
const maze = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1]
]
 
console.log(ratInMaze(maze));
</code></pre>
`},{index:[],path:"/posts/\u7ED9echarts\u5750\u6807\u8F74\u6DFB\u52A0hover\u63D0\u793A\u6846.html",title:"\u7ED9echarts\u5750\u6807\u8F74\u6DFB\u52A0hover\u63D0\u793A\u6846",date:"2021-10-05",fontNum:35,description:`\r
\u7ED9echarts\u5750\u6807\u8F74\u6DFB\u52A0\u63D0\u793A\u4FE1\u606F\uFF0C\u601D\u8DEF\uFF1A\u901A\u8FC7\u5B9A\u4F4D\u4E0E\u9F20\u6807\u6307\u9488\u7684\u4F4D\u7F6E`,tags:["echarts"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>\u7ED9echarts\u5750\u6807\u8F74\u6DFB\u52A0\u63D0\u793A\u4FE1\u606F\uFF0C\u601D\u8DEF\uFF1A\u901A\u8FC7\u5B9A\u4F4D\u4E0E\u9F20\u6807\u6307\u9488\u7684\u4F4D\u7F6E</p>
`},{index:[],path:"/posts/iframe\u8DE8\u57DF\u8BBE\u7F6Ecookie.html",title:"iframe\u8DE8\u57DF\u8BBE\u7F6Ecookie",date:"2021-09-28",fontNum:90,description:`\r
javascript\r
<?php \r
    header("Set-Cookie: test=xxx;Secure;SameSite=None");\r
?>\r
`,tags:["cookie"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">&lt;?php 
    header(&quot;Set-Cookie: test=xxx;Secure;SameSite=None&quot;);
?&gt;
</code></pre>
`},{index:[],path:"/posts/js\u64CD\u4F5Ccookie\u8F85\u52A9\u51FD\u6570.html",title:"js\u64CD\u4F5Ccookie\u8F85\u52A9\u51FD\u6570",date:"2021-09-27",fontNum:4909,description:`\r
javascript\r
class CookieUtil {\r
    static get(name) {\r
        const cookieName = \${encodeURIComponent(name)}\r
        const cookieStart = document.cookie.indexOf(cookieName)\r
 \r
        let c`,tags:["cookie"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">class CookieUtil {
    static get(name) {
        const cookieName = \`\${encodeURIComponent(name)}\`
        const cookieStart = document.cookie.indexOf(cookieName)
 
        let cookieValue = null
 
        if (cookieStart &gt; -1) {
            //\u4ECEcookieStart\u4F4D\u7F6E\u5F00\u59CB\u627Ecookie\u7ED3\u675F\u7684\u4F4D\u7F6E
            let cookieEnd = document.cookie.indexOf(&quot;; &quot;, cookieStart)
 
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
        }
 
        return cookieValue
 
    }
    //\u53C2\u6570\u5206\u522B\u4E3A cookie\u540D\u79F0 cookie\u503C \u53EF\u9009\u7684Date\u5BF9\u8C61(\u8868\u793A\u4F55\u65F6\u5220\u9664cookie) \u53EF\u9009\u7684URL\u8DEF\u5F84 \u53EF\u9009\u7684\u57DF \u53EF\u9009\u7684\u8868\u793A\u662F\u5426\u6DFB\u52A0secure\u6807\u5FD7\u7684\u5E03\u5C14\u503C
    static set(name, value, expires, path, domain, secure) {
        let cookieText = \`\${encodeURIComponent(name)}=\${encodeURIComponent(value)}\`
 
        if (expires instanceof Date) {
            cookieText += \`; expires=\${expires.toGMTString()}\`
        }
 
        if (path) {
            cookieText += \`; path=\${path}\`
        }
 
        if (domain) {
            cookieText += \`; domain=\${domain}\`
        }
 
        if (secure) {
            cookieText += \`; secure\`
        }
 
        document.cookie = cookieText
    }
 
    static unset(name, path, domain, secure) {
        //\u6CA1\u6709\u76F4\u63A5\u5220\u9664\u5DF2\u6709cookie\u7684\u65B9\u6CD5 \u8FD9\u91CC\u8BBE\u7F6Ecookie\u8FC7\u671F
        CookieUtil.set(name, '', new Date(0), path, domain, secure)
    }
}
</code></pre>
<p>\u6709\u5B50cookie\u60C5\u51B5\u4E0B\u7684\u64CD\u4F5Ccookie\u7684\u8F85\u52A9\u51FD\u6570</p>
<p>\u5982\u679C\u5B9E\u9645\u5F00\u53D1\u4E2D\u62C5\u5FC3\u78B0\u5230\u6BCF\u4E2A\u57DF\u7684cookie\u9650\u5236\uFF0C\u5219\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5B50cookie\u8FD9\u4E2A\u65B9\u6848\u3002\u6B64\u65F6\u8981\u7279\u522B\u6CE8\u610Fcookie\u7684\u5927\u5C0F\uFF0C\u4E0D\u8981\u8D85\u8FC7\u5BF9\u5355\u4E2Acookie\u5927\u5C0F\u7684\u9650\u5236</p>
<pre><code>class SubCookieUtil {
    static get(name, subName) {
        const subCookies = SubCookieUtil.getAll(name)
        return subCookies ? subCookies[subName] : null
    }
 
    static getAll(name) {
        const cookieName = encodeURIComponent(name) + '=',
        const cookieStart = document.cookie.indexOf(cookieName)
        let cookieValue = null
        let cookieEnd
        let subCookies
        let parts
        let result = {}
 
        if (cookieStart &gt; -1) {
            cookieEnd = document.cookie.indexOf('; ', cookieStart)
 
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length
            }
 
            cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
 
            if (cookieValue.length &gt; 0) {
                subCookies = cookieValue.split(&quot;&amp;&quot;)
 
                for (let i = 0, len = subCookies.length; i &lt; len; i++) {
                    parts = subCookies[i].split('=')
 
                    result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1])
                }
 
                return result
            }
        }
        return null
    }
 
    static set(name, subName, value, expires, path, domain, secure) {
        const subCookies = SubCookieUtil.getAll(name) || {}
 
        subCookies[subName] = value
 
        SubCookieUtil.setAll(name, subCookies, expires, path, domain, secure)
    }
 
    static setAll(name, subCookies, expires, path, domain, secure) {
        const cookieText = encodeURIComponent(name) + '='
        const subCookieParts = []
        let subName
 
        for (subName in subCookieParts) {
            if (subName.length &gt; 0 &amp;&amp; subCookieParts.hasOwnProperty(subName)) {
                subCookieParts.push(\`\${encodeURIComponent(subName)}=\${encodeURIComponent(subCookies[subName])}\`)
            }
        }
 
        if (subCookieParts.length &gt; 0) {
            cookieText += subCookieParts.join('&amp;')
 
            if (expires instanceof Date) {
                cookieText += \`; expires=\${expires.toGMTString()}\`
            }
 
            if (path) {
                cookieText += \`; path=\${path}\`
            }
 
            if (domain) {
                cookieText += \`; domain=\${domain}\`
            }
 
            if (secure) {
                cookieText += \`; secure\`
            }
        } else {
            cookieText += \`; expires=\${(new Date(0)).toGMTString()}\`
        }
 
 
        document.cookie = cookieText
    }
 
    static unset(name, subName, path, domain, secure) {
        let subCookies = SubCookieUtil.getAll(name)
 
        if (subCookies) {
            delete subCookies[subName] //\u5220\u9664
 
            SubCookieUtil.setAll(name, subCookies, null, path, path, domain, secure)
        }
    }
 
    static unsetAll(name, path, domain, secure) {
        SubCookieUtil.setAll(name, null, new Date(0), path, domain, secure)
    }
}
</code></pre>
<p>\u6CE8\u610F\u4E8B\u9879</p>
<p>\u8FD8\u6709\u4E00\u79CD\u53EB\u4F5CHTTP-only\u7684cookie</p>
<p>HTTP-only\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u8BBE\u7F6E\uFF0C\u4F46\u53EA\u80FD\u5728\u670D\u52A1\u5668\u4E0A\u8BFB\u53D6</p>
<p>JavaScript\u65E0\u6CD5\u53D6\u5F97\u8FD9\u79CDcookie\u7684\u503C\u3002</p>
<p>\u6240\u6709cookie\u90FD\u4F1A\u4F5C\u4E3A\u8BF7\u6C42\u5934\u90E8\u53D1\u9001\u7ED9\u670D\u52A1\u5668\uFF0C</p>
<p>\u5728cookie\u4E2D\u4FDD\u5B58\u5927\u91CF\u4FE1\u606F\u53EF\u80FD\u4F1A\u5F71\u54CD\u7279\u5B9A\u57DF\u6D4F\u89C8\u5668\u8BF7\u6C42\u7684\u6027\u80FD</p>
<p>\u4FDD\u5B58\u7684cookie\u8D8A\u5927\uFF0C\u8BF7\u6C42\u5B8C\u6210\u7684\u65F6\u95F4\u5C31\u8D8A\u957F</p>
<p>\u901A\u8FC7cookie\u4FDD\u5B58\u5FC5\u8981\u4FE1\u606F\uFF0C\u4EE5\u907F\u514D\u6027\u80FD\u95EE\u9898</p>
<p>cookie\u5E76\u4E0D\u662F\u5B58\u50A8\u5927\u91CF\u6570\u636E\u7684\u7406\u60F3\u65B9\u5F0F</p>
<p>\u4E0D\u8981\u5728cookie\u4E2D\u5B58\u50A8\u91CD\u8981\u6216\u654F\u611F\u7684\u4FE1\u606F</p>
<p>cookie\u6570\u636E\u4E0D\u662F\u4FDD\u5B58\u5728\u5B89\u5168\u7684\u73AF\u5883\u4E2D\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u80FD\u83B7\u5F97</p>
<p>\u5E94\u8BE5\u907F\u514D\u628A\u4FE1\u7528\u5361\u53F7\u6216\u4E2A\u4EBA\u5730\u5740\u7B49\u4FE1\u606F\u4FDD\u5B58\u5728cookie\u4E2D</p>
`},{index:["<h3>select\u4E8B\u4EF6</h3>"],path:"/posts/\u8F93\u5165\u6846\u9ED8\u8BA4\u9009\u4E2D\u9ED8\u8BA4\u503C.html",title:"\u8F93\u5165\u6846\u9009\u4E2D\u9ED8\u8BA4\u503C",date:"2021-09-22",fontNum:923,description:` select\u4E8B\u4EF6 \u9009\u4E2D\u9ED8\u8BA4\u503C \u51FA\u53D1\u70B9\u662F\u8BA9\u7528\u6237\u80FD\u591F\u4E00\u6B21\u6027\u5220\u9664\u6240\u6709\u9ED8\u8BA4\u5185\u5BB9\r
html\r
<html>\r
 \r
<head></head>\r
 \r
<body>\r
    <form action="">\r
        <input type="text" size="25" maxlength="50" name="inputOne" id="" value="initial va`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>select\u4E8B\u4EF6 \u9009\u4E2D\u9ED8\u8BA4\u503C \u51FA\u53D1\u70B9\u662F\u8BA9\u7528\u6237\u80FD\u591F\u4E00\u6B21\u6027\u5220\u9664\u6240\u6709\u9ED8\u8BA4\u5185\u5BB9</h3>
<pre><code class="language-html">&lt;html&gt;
 
&lt;head&gt;&lt;/head&gt;
 
&lt;body&gt;
    &lt;form action=&quot;&quot;&gt;
        &lt;input type=&quot;text&quot; size=&quot;25&quot; maxlength=&quot;50&quot; name=&quot;inputOne&quot; id=&quot;&quot; value=&quot;initial value&quot;&gt;
    &lt;/form&gt;
    &lt;script&gt;
        const textbox = document.forms[0].elements['inputOne']
        console.log(textbox);
        console.log(textbox.value);
        textbox.select()
    &lt;/script&gt;
&lt;/body&gt;
 
&lt;/html&gt;
</code></pre>
<p><img src="/bd.jpg" alt="\u8868\u5355"></p>
<pre><code class="language-html">&lt;html&gt;
 
&lt;head&gt;&lt;/head&gt;
 
&lt;body&gt;
    &lt;form action=&quot;&quot;&gt;
        &lt;input type=&quot;text&quot; size=&quot;25&quot; maxlength=&quot;50&quot; name=&quot;inputOne&quot; id=&quot;&quot; value=&quot;initial value&quot;&gt;
    &lt;/form&gt;
    &lt;script&gt;
        const textbox = document.forms[0].elements['inputOne']
        //\u805A\u7126\u9009\u4E2D
        textbox.addEventListener('focus', (event) =&gt; {
            console.log('event.target', event.target);
            event.target.select()
        })
 
    &lt;/script&gt;
&lt;/body&gt;
 
&lt;/html&gt;
</code></pre>
`},{index:[],path:"/posts/focus\u4E8B\u4EF6\u4E0D\u5192\u6CE1.html",title:"focus \u4E8B\u4EF6 \u4E0D\u5192\u6CE1",date:"2021-09-15",fontNum:151,description:`\r
- focus\uFF1A\u5F53\u5143\u7D20\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u4E0D\u5192\u6CE1\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002\r
- focusin\uFF1A\u5F53\u5143\u7D20\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u662Ffocus\u7684\u5192\u6CE1\u7248\u3002\r
- focusout\uFF1A\u5F53\u5143\u7D20\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u662Fblur\u7684\u901A\u7528\u7248\u3002\r
- blur\uFF1A\u5F53\u5143\u7D20\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u4E0D\u5192\u6CE1\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<ul>
<li>focus\uFF1A\u5F53\u5143\u7D20\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u4E0D\u5192\u6CE1\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002</li>
<li>focusin\uFF1A\u5F53\u5143\u7D20\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u662Ffocus\u7684\u5192\u6CE1\u7248\u3002</li>
<li>focusout\uFF1A\u5F53\u5143\u7D20\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u662Fblur\u7684\u901A\u7528\u7248\u3002</li>
<li>blur\uFF1A\u5F53\u5143\u7D20\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u4E0D\u5192\u6CE1\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002</li>
</ul>
`},{index:[],path:"/posts/innerText\u53BB\u9664html\u6240\u6709\u7684\u6807\u7B7E.html",title:"innerText\u53BB\u9664html\u6240\u6709\u7684\u6807\u7B7E",date:"2021-09-09",fontNum:616,description:`\r
html\r
<html>\r
<head></head>\r
<body>\r
    <div id='first'>\r
        <div>\r
            start:\r
            <span>1</span>\r
            <span>2</span>\r
            <span>3</span>\r
            <span`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-html">&lt;html&gt;
&lt;head&gt;&lt;/head&gt;
&lt;body&gt;
    &lt;div id='first'&gt;
        &lt;div&gt;
            start:
            &lt;span&gt;1&lt;/span&gt;
            &lt;span&gt;2&lt;/span&gt;
            &lt;span&gt;3&lt;/span&gt;
            &lt;span&gt;4&lt;/span&gt;
            &lt;span&gt;5&lt;/span&gt;
            &lt;span&gt;6&lt;/span&gt;
            :end
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div id='second'&gt;&lt;/div&gt;
    &lt;script&gt;
        const first = document.getElementById('first')
        const firstinnerText = first.innerText
        const second = document.getElementById('second')
        second.innerText = firstinnerText
        //\u53BB\u9664\u6240\u6709\u7684\u6807\u7B7E
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
`},{index:["<h2>new</h2>"],path:"/posts/newFormData()\u6253\u5370\u4E3A\u7A7A.html",title:"new FormData() \u6253\u5370\u4E3A\u7A7A",date:"2021-09-09",fontNum:125,description:`\r
 new FormData()\r
\r
\u540E\u53F0\u6709\u8FD4\u56DE\u6570\u636E\r
\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u770B\u5230new FormData() \u5BF9\u8C61\u662F\u6709\u503C\u7684\r
\r
\u53EF\u4EE5\u901A\u8FC7formData.get(key)\u65B9\u6CD5 (key\u4E3Aappend\u7684\u952E\u540D\u79F0) \u6253\u5370\u51FA\u6765\r
\r
\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>new FormData()</h2>
<pre><code>\u540E\u53F0\u6709\u8FD4\u56DE\u6570\u636E
\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u770B\u5230new FormData() \u5BF9\u8C61\u662F\u6709\u503C\u7684

\u53EF\u4EE5\u901A\u8FC7formData.get(key)\u65B9\u6CD5 (key\u4E3Aappend\u7684\u952E\u540D\u79F0) \u6253\u5370\u51FA\u6765
</code></pre>
`},{index:["<h2>scrollIntoView()</h2>","<h2>\u53C2\u6570</h2>"],path:"/posts/scrollIntoView.html",title:"scrollIntoView",date:"2021-09-08",fontNum:448,description:`\r
 scrollIntoView()\r
\r
scrollIntoView()\u65B9\u6CD5\u5B58\u5728\u4E8E\u6240\u6709HTML\u5143\u7D20\u4E0A\r
\r
 \u53C2\u6570\r
\r
- alignToTop \u5E03\u5C14\u503C\u3002\r
\r
true\uFF1A\u7A97\u53E3\u6EDA\u52A8\u540E\u5143\u7D20\u7684\u9876\u90E8\u4E0E\u89C6\u53E3\u9876\u90E8\u5BF9\u9F50\u3002\r
\r
false\uFF1A\u7A97\u53E3\u6EDA\u52A8\u540E\u5143\u7D20\u7684\u5E95\u90E8\u4E0E\u89C6\u53E3\u5E95\u90E8\u5BF9\u9F50\u3002\r
\r
- scrollIntoViewOptions \u662F\u4E00\u4E2A\u9009\u9879\u5BF9\u8C61\r
\r
behavior\uFF1A\u5B9A\u4E49\u8FC7\u6E21\u52A8\u753B\uFF0C\u53EF\u53D6\u503C"s`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>scrollIntoView()</h2>
<p>scrollIntoView()\u65B9\u6CD5\u5B58\u5728\u4E8E\u6240\u6709HTML\u5143\u7D20\u4E0A</p>
<h2>\u53C2\u6570</h2>
<ul>
<li>alignToTop \u5E03\u5C14\u503C\u3002</li>
</ul>
<p>true\uFF1A\u7A97\u53E3\u6EDA\u52A8\u540E\u5143\u7D20\u7684\u9876\u90E8\u4E0E\u89C6\u53E3\u9876\u90E8\u5BF9\u9F50\u3002</p>
<p>false\uFF1A\u7A97\u53E3\u6EDA\u52A8\u540E\u5143\u7D20\u7684\u5E95\u90E8\u4E0E\u89C6\u53E3\u5E95\u90E8\u5BF9\u9F50\u3002</p>
<ul>
<li>scrollIntoViewOptions \u662F\u4E00\u4E2A\u9009\u9879\u5BF9\u8C61</li>
</ul>
<p>behavior\uFF1A\u5B9A\u4E49\u8FC7\u6E21\u52A8\u753B\uFF0C\u53EF\u53D6\u503C&quot;smooth&quot;\u548C&quot;auto&quot;\uFF0C\u9ED8\u8BA4\u4E3A&quot;auto&quot;\u3002</p>
<p>block\uFF1A\u5B9A\u4E49\u5782\u76F4\u65B9\u5411\u7684\u5BF9\u9F50\uFF0C\u53EF\u53D6\u503C&quot;start&quot;\u3001&quot;center&quot;\u3001&quot;end&quot;\u548C&quot;nearest&quot;\uFF0C\u9ED8\u8BA4\u4E3A&quot;start&quot;\u3002</p>
<p>inline\uFF1A\u5B9A\u4E49\u6C34\u5E73\u65B9\u5411\u7684\u5BF9\u9F50\uFF0C\u53EF\u53D6\u503C&quot;start&quot;\u3001&quot;center&quot;\u3001&quot;end&quot;\u548C&quot;nearest&quot;\uFF0C\u9ED8\u8BA4\u4E3A&quot;nearest&quot;\u3002</p>
<ul>
<li>\u4E0D\u4F20\u53C2\u6570\u7B49\u540C\u4E8EalignToTop\u4E3Atrue</li>
</ul>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u5728\u9875\u9762\u4E0A\u53D1\u751F\u67D0\u4E2A\u4E8B\u4EF6\u65F6\u5F15\u8D77\u7528\u6237\u5173\u6CE8\u3002\u628A\u7126\u70B9\u8BBE\u7F6E\u5230\u4E00\u4E2A\u5143\u7D20\u4E0A\u4E5F\u4F1A\u5BFC\u81F4\u6D4F\u89C8\u5668\u5C06\u5143\u7D20\u6EDA\u52A8\u5230\u53EF\u89C1\u4F4D\u7F6E\u3002</p>
`},{index:[],path:"/posts/\u81EA\u5B9A\u4E49\u6570\u636E\u5C5E\u6027.html",title:"\u81EA\u5B9A\u4E49\u6570\u636E\u5C5E\u6027",date:"2021-09-06",fontNum:373,description:`\r
html\r
\u81EA\u5B9A\u4E49\u6570\u636E\u5C5E\u6027\r
 \r
HTML5\u5141\u8BB8\u7ED9\u5143\u7D20\u6307\u5B9A\u975E\u6807\u51C6\u7684\u5C5E\u6027\r
 \r
\u4F46\u9700\u8981\u4F7F\u7528\u524D\u7F00data-\r
 \r
\u6765\u544A\u8BC9\u6D4F\u89C8\u5668\u8FD9\u4E9B\u5C5E\u6027\u5373\u4E0D\u5305\u542B\u4E0E\u6E32\u67D3\u76F8\u5173\u7684\u4FE1\u606F\r
 \r
\u4E5F\u4E0D\u5305\u542B\u5143\u7D20\u7684\u8BED\u610F\u4FE1\u606F\r
 \r
\u9664\u4E86\u524D\u7F00\uFF0C\u81EA\u5B9A\u4E49\u5C5E\u6027\u5BF9\u547D\u540D\u662F\u6CA1\u6709\u9650\u5236\u7684\uFF0Cdata-\u540E\u9762\u8DDF\u4EC0\u4E48\u90FD\u53EF\u4EE5\r
 \r
eg : <div data-id='123456'></div>\r
 \r
\u5B9A\u4E49\u4E86\u81EA\u5B9A\u4E49\u6570\u636E\u5C5E\u6027\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5143\u7D20`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-html">\u81EA\u5B9A\u4E49\u6570\u636E\u5C5E\u6027
 
HTML5\u5141\u8BB8\u7ED9\u5143\u7D20\u6307\u5B9A\u975E\u6807\u51C6\u7684\u5C5E\u6027
 
\u4F46\u9700\u8981\u4F7F\u7528\u524D\u7F00data-
 
\u6765\u544A\u8BC9\u6D4F\u89C8\u5668\u8FD9\u4E9B\u5C5E\u6027\u5373\u4E0D\u5305\u542B\u4E0E\u6E32\u67D3\u76F8\u5173\u7684\u4FE1\u606F
 
\u4E5F\u4E0D\u5305\u542B\u5143\u7D20\u7684\u8BED\u610F\u4FE1\u606F
 
\u9664\u4E86\u524D\u7F00\uFF0C\u81EA\u5B9A\u4E49\u5C5E\u6027\u5BF9\u547D\u540D\u662F\u6CA1\u6709\u9650\u5236\u7684\uFF0Cdata-\u540E\u9762\u8DDF\u4EC0\u4E48\u90FD\u53EF\u4EE5
 
eg : &lt;div data-id='123456'&gt;&lt;/div&gt;
 
\u5B9A\u4E49\u4E86\u81EA\u5B9A\u4E49\u6570\u636E\u5C5E\u6027\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5143\u7D20\u7684dataset\u5C5E\u6027\u6765\u8BBF\u95EE
 
\u8D4B\u503C eg : dom\u8282\u70B9.dataset.id = 'xxx'
 
\u901A\u8FC7data-\u540E\u9762\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3Akey\u6765\u8BBF\u95EE
 
data-my-name \u5F62\u5F0F\u8981\u901A\u8FC7 myName\u6765\u8BBF\u95EE
 
\u81EA\u5B9A\u4E49\u6570\u636E\u9002\u5408\u94FE\u63A5\u8FFD\u8E2A\u548C\u5728\u805A\u5408\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6807\u5FD7\u9875\u9762\u7684\u4E0D\u540C\u90E8\u5206
 
\u5355\u9875\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6\u4E5F\u975E\u5E38\u591A\u4F7F\u7528\u4E86\u81EA\u5B9A\u4E49\u5C5E\u6027
</code></pre>
`},{index:[],path:"/posts/\u5B57\u7B26\u96C6\u5C5E\u6027.html",title:"\u5B57\u7B26\u96C6\u5C5E\u6027",date:"2021-09-01",fontNum:225,description:`\r
html\r
\u5B57\u7B26\u96C6\u5C5E\u6027\r
 \r
characterSet\u5C5E\u6027\u8868\u793A\u6587\u6863\u5B9E\u9645\u4F7F\u7528\u7684\u5B57\u7B26\u96C6\r
 \r
\u4E5F\u53EF\u4EE5\u7528\u6765\u6307\u5B9A\u65B0\u7684\u5B57\u7B26\u96C6\r
 \r
\u9ED8\u8BA4\u662F\u2018UTF-16\u2019\r
 \r
\u53EF\u4EE5\u901A\u8FC7<meta>\u5143\u7D20\u6216\u54CD\u5E94\u5934 \u548C\u65B0\u589E\u7684characterSet\u5C5E\u6027\u6765\u4FEE\u6539\r
 \r
get // console.log(document.characterSet) //"UTF-16"\r
set // document.ch`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-html">\u5B57\u7B26\u96C6\u5C5E\u6027
 
characterSet\u5C5E\u6027\u8868\u793A\u6587\u6863\u5B9E\u9645\u4F7F\u7528\u7684\u5B57\u7B26\u96C6
 
\u4E5F\u53EF\u4EE5\u7528\u6765\u6307\u5B9A\u65B0\u7684\u5B57\u7B26\u96C6
 
\u9ED8\u8BA4\u662F\u2018UTF-16\u2019
 
\u53EF\u4EE5\u901A\u8FC7&lt;meta&gt;\u5143\u7D20\u6216\u54CD\u5E94\u5934 \u548C\u65B0\u589E\u7684characterSet\u5C5E\u6027\u6765\u4FEE\u6539
 
get // console.log(document.characterSet) //&quot;UTF-16&quot;
set // document.characterSet = &quot;UTF-8&quot;
</code></pre>
`},{index:[],path:"/posts/electron\u5F00\u542FnodeIntegration\u4ECD\u62A5\u9519.html",title:"\u5728electron\u5F00\u542FnodeIntegration true \u4ECD\u62A5require is not defined",date:"2021-08-24",fontNum:53,description:`\r
\u5728\u65B0\u7248\u672C\u7684electron\u4E2D\u7531\u4E8E\u5B89\u5168\u6027\u7684\u539F\u56E0\u8FD8\u9700\u8981\u8BBE\u7F6E contextIsolation: false`,tags:["electron"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>\u5728\u65B0\u7248\u672C\u7684electron\u4E2D\u7531\u4E8E\u5B89\u5168\u6027\u7684\u539F\u56E0\u8FD8\u9700\u8981\u8BBE\u7F6E contextIsolation: false</p>
`},{index:[],path:"/posts/koa\u642D\u5EFA\u670D\u52A1\u5668.html",title:"koa\u642D\u5EFA\u670D\u52A1\u5668",date:"2021-08-24",fontNum:764,description:`\r
javascript\r
const Koa = require('koa')\r
const app = new Koa()\r
const router = require('koa-router')()\r
 \r
app.use(async (ctx, next) => {\r
    console.log('First');\r
    await next();\r
});\r
 \r
rou`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
 
app.use(async (ctx, next) =&gt; {
    console.log('First');
    await next();
});
 
router.get('/', async (ctx, next) =&gt; {
    console.log('1');
    ctx.response.body = \`&lt;h1&gt;Hello!&lt;/h1&gt;\`;
    await next()
});
 
router.get('/2', async (ctx, next) =&gt; {
    console.log('2'); //\u6CA1\u6709\u8FD4\u56DE \u524D\u7AEF\u663E\u793A404
    await next()
});
 
app.use(router.routes());
 
app.use(async (ctx, next) =&gt; {
    console.log('A');
    await next()
})
 
app.use(async (ctx, next) =&gt; {
    console.log('B');
    await next()
})
 
app.use(async (ctx, next) =&gt; {
    console.log('C');
})
 
app.listen(3000);
console.log('app started at port 3000...');
</code></pre>
`},{index:[],path:"/posts/electron\u4E3B\u8FDB\u7A0B\u8C03\u8BD5launch.json.html",title:"vscode electron \u4E3B\u8FDB\u7A0B\u8C03\u8BD5 launch.json",date:"2021-08-23",fontNum:621,description:`\r
json\r
{\r
    "configurations": [\r
        {\r
            "name": "\u8C03\u8BD5\u4E3B\u8FDB\u7A0B", //\u914D\u7F6E\u540D\u79F0\r
            "type": "node", //\u8C03\u8BD5\u73AF\u5883\r
            "request": "launch",\r
            "cwd": "\${workspaceRoot}",\r
   `,tags:["electron"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-json">{
    &quot;configurations&quot;: [
        {
            &quot;name&quot;: &quot;\u8C03\u8BD5\u4E3B\u8FDB\u7A0B&quot;, //\u914D\u7F6E\u540D\u79F0
            &quot;type&quot;: &quot;node&quot;, //\u8C03\u8BD5\u73AF\u5883
            &quot;request&quot;: &quot;launch&quot;,
            &quot;cwd&quot;: &quot;\${workspaceRoot}&quot;,
            &quot;runtimeExecutable&quot;: &quot;\${workspaceRoot}/node_modules/.bin/electron&quot;, //\u6279\u5904\u7406\u6587\u4EF6 \u7528\u4E8E\u542F\u52A8Electron \${workspaceRoot}\u4E3A\u6B63\u5728\u8FDB\u884C\u8C03\u8BD5\u7684\u7A0B\u5E8F\u7684\u5DE5\u4F5C\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84
            &quot;window&quot;: {
                &quot;runtimeExecutable&quot;: &quot;\${workspaceRoot}/node_modules/.bin/electron.cmd&quot;,
            },
            &quot;args&quot;: [ //\u542F\u52A8\u53C2\u6570 \u6B64\u5904\u7684\u503C\u662F\u4E3B\u7A0B\u5E8F\u7684\u7B80\u5199\u5F62\u5F0F&quot;./index.js&quot;\u4E5F\u53EF
                &quot;.&quot;
            ],
            &quot;outputCapture&quot;: &quot;std&quot;
        }
    ]
}
</code></pre>
`},{index:[],path:"/posts/electron\u6E32\u67D3\u8FDB\u7A0Bremote\u7684\u503C\u4E3Aundefined.html",title:"electron\u6E32\u67D3\u8FDB\u7A0Blet { remote } = require(\u2018electron\u2018)\uFF1B remote\u7684\u503C\u4E3Aundefined",date:"2021-08-23",fontNum:73,description:`\r
\u9700\u8981\u5728\u4E3B\u8FDB\u7A0B\u4E2D\u7684new BrowserWindow \u4E2D\u7684webPreferences\u4E2D\u6DFB\u52A0 enableRemoteModule: true `,tags:["electron"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>\u9700\u8981\u5728\u4E3B\u8FDB\u7A0B\u4E2D\u7684new BrowserWindow \u4E2D\u7684webPreferences\u4E2D\u6DFB\u52A0 enableRemoteModule: true</p>
`},{index:[],path:"/posts/newProxy.html",title:"js\u4EE3\u7406 new Proxy()",date:"2021-08-17",fontNum:993,description:`javascript\r
//\u4EE3\u7406\u51FD\u6570\r
//\u83B7\u53D6\u6570\u7EC4\u4E2D\u503C\u7684function\r
function median(...nums) {\r
    return nums.sort()[Math.floor(nums.length / 2)]\r
}\r
 \r
const proxy = new Proxy(median, {\r
    apply(target, thisArg, arguments`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u4EE3\u7406\u51FD\u6570
//\u83B7\u53D6\u6570\u7EC4\u4E2D\u503C\u7684function
function median(...nums) {
    return nums.sort()[Math.floor(nums.length / 2)]
}
 
const proxy = new Proxy(median, {
    apply(target, thisArg, argumentsList) {
 
        console.log('target', target);
        console.log('thisArg', thisArg);
        for (const arg of argumentsList) {
            if (typeof arg !== 'number') {
                throw 'Non-number argument provided'
            }
        }
        return Reflect.apply(...arguments)
    }
})
 
console.log(proxy(4, 7, 1));
console.log(proxy(4, '7', 1)); //\u62A5\u9519
 
//\u4EE3\u7406\u6784\u9020\u51FD\u6570
class User {
    constructor(id) {
        this.id_ = id
    }
}
const proxy = new Proxy(User, {
    construct(target, argumentsList, newTarget) {
        if (argumentsList[0] === undefined) {
            throw 'User cannot be instantiated without id'
        } else {
            return Reflect.construct(...arguments)
        }
    }
})
 
new proxy(1)
new proxy() //\u62A5\u9519

</code></pre>
`},{index:["<h2>\u7ED9yAxis\u7684axisLabel\u8BBE\u7F6Eformatter\u65B9\u6CD5</h2>"],path:"/posts/echart\u7EB5\u5750\u6807\u503C\u5355\u4F4D\u4FEE\u6539.html",title:"echart\u7EB5\u5750\u6807\u503C\u5355\u4F4D\u4FEE\u6539",date:"2021-08-13",fontNum:193,description:` \u7ED9yAxis\u7684axisLabel\u8BBE\u7F6Eformatter\u65B9\u6CD5\r
javascript\r
xxxxxxx.yAxis.axisLabel = {undefined\r
\r
  formatter: function(v){undefined\r
\r
    return v/10000 // \u7ED9\u7EB5\u5750\u6807\u7684\u503C\u7EDF\u4E00\u9664\u4EE510000 \u5C31\u53D8\u6210\u4E86\u4EE5\u4E07\u4E3A\u5355\u4F4D\r
\r
    }\r
\r
}\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u7ED9yAxis\u7684axisLabel\u8BBE\u7F6Eformatter\u65B9\u6CD5</h2>
<pre><code class="language-javascript">xxxxxxx.yAxis.axisLabel = {undefined

  formatter: function(v){undefined

    return v/10000 // \u7ED9\u7EB5\u5750\u6807\u7684\u503C\u7EDF\u4E00\u9664\u4EE510000 \u5C31\u53D8\u6210\u4E86\u4EE5\u4E07\u4E3A\u5355\u4F4D

    }

}
</code></pre>
`},{index:[],path:"/posts/proxy.html",title:"js proxy\u6570\u636E\u7ED1\u5B9A\u4E0E\u53EF\u89C2\u5BDF\u5BF9\u8C61",date:"2021-08-12",fontNum:932,description:`javascript\r
// //\u6570\u636E\u7ED1\u5B9A\u4E0E\u53EF\u89C2\u5BDF\u5BF9\u8C61\r
// const userList = []\r
 \r
// class User {\r
//     constructor(name) {\r
//         this._name = name\r
//     }\r
// }\r
 \r
// const proxy = new Proxy(User, {\r
//     cons`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">// //\u6570\u636E\u7ED1\u5B9A\u4E0E\u53EF\u89C2\u5BDF\u5BF9\u8C61
// const userList = []
 
// class User {
//     constructor(name) {
//         this._name = name
//     }
// }
 
// const proxy = new Proxy(User, {
//     construct() {
//         const newUser = Reflect.construct(...arguments)
//         userList.push(newUser)
//         return newUser
//     }
// })
 
// new proxy('1')
// new proxy('2')
// new proxy('3')
 
// console.log(userList);
 
const userList = []
function emit(newValue) {
    // console.log(newValue);
}
 
const proxy = new Proxy(userList, {
    set(target, property, value, receiver) {
        const result = Reflect.set(...arguments)
        console.log('result', result);
        if (result) {
            emit(Reflect.get(target, property, receiver))
        }
        return result
    }
})
 
proxy.push('xxx')
proxy.push('yyy')
</code></pre>
<p>\u6253\u5370\u56DB\u6B21</p>
<p>result true
result true
result true
result true</p>
`},{index:["<h2>\u89E3\u51B3\u65B9\u6CD5\uFF0C\u4F7F\u7528\u4E34\u65F6\u53D8\u91CF\u5B58\u50A8\u5728setTimeout\u8FDB\u884C\u5F02\u6B65\u8D4B\u503C</h2>"],path:"/posts/element_ui_select.html",title:"element ui select \u6DFB\u52A0@paste\u4E8B\u4EF6 \u7C98\u8D34\u503C\u540E\u7C98\u8D34\u503C\u4F1A\u663E\u793Avalue\u800C\u4E0D\u662Flabel\u7684\u503C",date:"2021-08-05",fontNum:35,description:` \u89E3\u51B3\u65B9\u6CD5\uFF0C\u4F7F\u7528\u4E34\u65F6\u53D8\u91CF\u5B58\u50A8\u5728setTimeout\u8FDB\u884C\u5F02\u6B65\u8D4B\u503C\r
`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u89E3\u51B3\u65B9\u6CD5\uFF0C\u4F7F\u7528\u4E34\u65F6\u53D8\u91CF\u5B58\u50A8\u5728setTimeout\u8FDB\u884C\u5F02\u6B65\u8D4B\u503C</h2>
`},{index:["<h2>1.\u201C\u7A7A\u683C\u201D\u8868\u793A\u5305\u542B\u5B50\u5143\u7D20\u548C</h2>","<h2>2.\u201C>\u201D\u8868\u793A\u5305\u542B\u5B50\u5143\u7D20</h2>","<h2>3.\u4E24\u4E2A\u9009\u62E9\u5668\u4E4B\u95F4\u6CA1\u6709\u7A7A\u683C\u7684\u60C5\u51B5\u4E0B\uFF0C\u4EE3\u8868\u7684\u662F\u540C\u65F6\u62E5\u6709\u4E24\u4E2A\u7C7B\u540D\u7684\u6807\u7B7E</h2>"],path:"/posts/css\u9009\u62E9\u5668.html",title:"css\u9009\u62E9\u5668",date:"2021-07-28",fontNum:115,description:` 1.\u201C\u7A7A\u683C\u201D\u8868\u793A\u5305\u542B\u5B50\u5143\u7D20\u548C   \u5B50\u5B59\u5143\u7D20 .a .b\r
\r
 2.\u201C>\u201D\u8868\u793A\u5305\u542B\u5B50\u5143\u7D20    \u4E0D\u5305\u542B\u5B50\u5B59\u5143\u7D20 .a > .b\r
\r
 3.\u4E24\u4E2A\u9009\u62E9\u5668\u4E4B\u95F4\u6CA1\u6709\u7A7A\u683C\u7684\u60C5\u51B5\u4E0B\uFF0C\u4EE3\u8868\u7684\u662F\u540C\u65F6\u62E5\u6709\u4E24\u4E2A\u7C7B\u540D\u7684\u6807\u7B7E .a.b\r
`,tags:["css"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>1.\u201C\u7A7A\u683C\u201D\u8868\u793A\u5305\u542B\u5B50\u5143\u7D20\u548C   \u5B50\u5B59\u5143\u7D20 .a .b</h2>
<h2>2.\u201C&gt;\u201D\u8868\u793A\u5305\u542B\u5B50\u5143\u7D20    \u4E0D\u5305\u542B\u5B50\u5B59\u5143\u7D20 .a &gt; .b</h2>
<h2>3.\u4E24\u4E2A\u9009\u62E9\u5668\u4E4B\u95F4\u6CA1\u6709\u7A7A\u683C\u7684\u60C5\u51B5\u4E0B\uFF0C\u4EE3\u8868\u7684\u662F\u540C\u65F6\u62E5\u6709\u4E24\u4E2A\u7C7B\u540D\u7684\u6807\u7B7E .a.b</h2>
`},{index:[],path:"/posts/\u5BF9\u8C61\u5B9E\u73B0forof.html",title:"\u5BF9\u8C61\u5B9E\u73B0for of",date:"2021-07-25",fontNum:372,description:`javascript\r
const obj = {\r
    a: 11,\r
    b: 22,\r
    c: 33,\r
    [Symbol.iterator]: function* () {\r
        const arr = Object.keys(this)\r
        for (let i = 0; i < arr.length; i) {\r
        `,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const obj = {
    a: 11,
    b: 22,
    c: 33,
    [Symbol.iterator]: function* () {
        const arr = Object.keys(this)
        for (let i = 0; i &lt; arr.length; i++) {
            yield {
                key: arr[i],
                value: this[arr[i]]
            }
        }
    }
}
 
for (const e of obj) {
    console.log(e);
}
</code></pre>
`},{index:[],path:"/posts/element_ui\u70B9\u51FB\u884C\u53D8\u8272.html",title:"element ui table \u5B9E\u73B0\u70B9\u51FB\u884C\u53D8\u8272",date:"2021-07-22",fontNum:1780,description:`javascript\r
 <template>\r
  <div>\r
    <table ref="table" @rowClick="rowClick" id="table"></table>\r
  </div>\r
</template>\r
<script>\r
import table from "@/components/Table.vue";\r
export default {\r
  `,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript"> &lt;template&gt;
  &lt;div&gt;
    &lt;table ref=&quot;table&quot; @rowClick=&quot;rowClick&quot; id=&quot;table&quot;&gt;&lt;/table&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import table from &quot;@/components/Table.vue&quot;;
export default {
  components: {
    table,
  },
  methods: {
    rowClick(row, column, event) {
      const name = row.name;
      if (this.name === name) {
        this.flag = !this.flag;
      } else {
        this.flag = false;
      }
      this.name = name;
//\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u83B7\u53D6dom\u8282\u70B9\u7684\u5185\u5BB9
 console.log(
        this.$refs.table.$refs.table.$refs.bodyWrapper.childNodes[0]
          .childNodes[1].childNodes
      );
      let obj =
        document.getElementById(&quot;table&quot;).childNodes[0].childNodes[2]
          .childNodes[0].childNodes[1];
      const arr = [];
      let i = 0;
      while (obj.childNodes[i]) {
        arr.push(obj.childNodes[i]);
        i++;
      }
 
      for (const e of arr) {
        if (e &amp;&amp; e.childNodes[1]) {
          if (e.childNodes[1].childNodes[0].innerHTML === name &amp;&amp; !this.flag) {
            //\u8FD9\u79CD\u60C5\u51B5\u4E0B\u53EA\u6709\u9F20\u6807\u79FB\u5F00\u624D\u4F1A\u53D8\u8272\uFF0C\u5177\u4F53\u539F\u56E0\u8FD8\u4E0D\u6E05\u695A
            // e.style.color = &quot;yellow&quot;;
            // e.style.backgroundColor = &quot;green&quot;;
            //\u4EE5\u4E0B\u662F\u70B9\u51FB\u76F4\u63A5\u53D8\u8272\u7684\u65B9\u6CD5
            let j = 0;
 
            while (e.childNodes[j]) {
              e.childNodes[j].style.color = &quot;red&quot;;
              e.childNodes[j].style.backgroundColor = &quot;pink&quot;;
 
              j++;
            }
          } else {
            let j = 0;
 
            while (e.childNodes[j]) {
              e.childNodes[j].style.color = &quot;&quot;;
              e.childNodes[j].style.backgroundColor = &quot;&quot;;
 
              j++;
            }
          }
        }
      }
    },
  },
  data() {
    return {
      flag: true,
      name: null,
    };
  },
};
&lt;/script&gt;
</code></pre>
`},{index:[],path:"/posts/element_ui_select_ctrl_c_ctrl_v.html",title:"element ui select\u6846\u5B9E\u73B0ctrl+c \u548Cctrl+v\u7684\u529F\u80FD",date:"2021-07-21",fontNum:2011,description:`javascript\r
 <template>\r
  <div>\r
    <el-select\r
      ref="select"\r
      placeholder="\u8BF7\u9009\u62E9\u4E3B\u98DF"\r
      filterable\r
      id="food"\r
      @keydown.ctrl.67.native="copyFocusedBoxContent"\r
      @pas`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript"> &lt;template&gt;
  &lt;div&gt;
    &lt;el-select
      ref=&quot;select&quot;
      placeholder=&quot;\u8BF7\u9009\u62E9\u4E3B\u98DF&quot;
      filterable
      id=&quot;food&quot;
      @keydown.ctrl.67.native=&quot;copyFocusedBoxContent&quot;
      @paste.native.capture.prevent=&quot;handlePaste&quot;
      v-model=&quot;formData.food&quot;
      clearable
      multiple
      collapse-tags
    &gt;
      &lt;el-option
        v-for=&quot;item in options&quot;
        :key=&quot;item.label&quot;
        :label=&quot;item.label&quot;
        :value=&quot;item.code&quot;
      &gt;
      &lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
&lt;script&gt;
export default {
  methods: {
    handlePaste(e) {
      const inputValueArr = e.clipboardData.getData(&quot;Text&quot;).split(&quot;,&quot;);
 
      const recordIndex = [];
      for (const e of this.options) {
        recordIndex.push(e.code);
      }
      for (const f of inputValueArr) {
        if (recordIndex.includes(f) &amp;&amp; !this.formData.food.includes(f)) {
          this.formData.food.push(f);
        }
      }
    },
 
    copyFocusedBoxContent() {
      this.$copyText(this.formData.food).then(
        (e) =&gt; {
          this.$message({
            message: &quot;Copied&quot;,
            duration: 200,
          });
        },
        (e) =&gt; {
          this.$message({
            message: &quot;Can not copy&quot;,
            duration: 200,
          });
        }
      );
    },
  },
  data() {
    return {
      formData: {
        food: [],
      },
      options: [
        {
          code: &quot;11&quot;,
          label: &quot;11-\u9EC4\u91D1\u7CD5&quot;,
        },
        {
          code: &quot;12&quot;,
          label: &quot;12-\u53CC\u76AE\u5976&quot;,
        },
        {
          code: &quot;13&quot;,
          label: &quot;13-\u86B5\u4ED4\u714E&quot;,
        },
        {
          code: &quot;14&quot;,
          label: &quot;14-\u9F99\u987B\u9762&quot;,
        },
        {
          code: &quot;15&quot;,
          label: &quot;15-\u5317\u4EAC\u70E4\u9E2D&quot;,
        },
        {
          code: &quot;115&quot;,
          label: &quot;115-\u4E4C\u51AC\u9762&quot;,
        },
 
        {
          code: &quot;111&quot;,
          label: &quot;111-\u70B8\u9E21&quot;,
        },
      ],
    };
  },
};
&lt;/script&gt;
</code></pre>
`},{index:["<h2>\u63D2\u5165\u56FE\u7247</h2>"],path:"/posts/markdom\u64CD\u4F5C.html",title:"markdom \u64CD\u4F5C",date:"2021-07-20",fontNum:102,description:`\r
 \u63D2\u5165\u56FE\u7247\r
\r
![Alt](\u56FE\u7247\u94FE\u63A5 "hover tip")\r
\r
-alt \u56FE\u7247\u56E0\u4E3A\u67D0\u79CD\u539F\u56E0\u4E0D\u80FD\u88AB\u663E\u793A\u65F6\u800C\u51FA\u73B0\u7684\u6587\u5B57\r
-\u56FE\u7247\u5730\u5740\r
-\u9F20\u6807\u60AC\u4E8E\u56FE\u7247\u4E0A\u51FA\u73B0\u7684\u6587\u5B57\r
\r
\r
\r
`,tags:["markdom"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u63D2\u5165\u56FE\u7247</h2>
<pre><code>![Alt](\u56FE\u7247\u94FE\u63A5 &quot;hover tip&quot;)

-alt \u56FE\u7247\u56E0\u4E3A\u67D0\u79CD\u539F\u56E0\u4E0D\u80FD\u88AB\u663E\u793A\u65F6\u800C\u51FA\u73B0\u7684\u6587\u5B57
-\u56FE\u7247\u5730\u5740
-\u9F20\u6807\u60AC\u4E8E\u56FE\u7247\u4E0A\u51FA\u73B0\u7684\u6587\u5B57
</code></pre>
`},{index:[],path:"/posts/element_ui_datepicker_id.html",title:"\u7ED9element ui date-picker \u6DFB\u52A0id",date:"2021-07-17",fontNum:431,description:`javascript\r
 <template>\r
  <div>\r
    <div class="block">\r
      <el-date-picker\r
        v-model="value1"\r
        type="daterange"\r
        start-placeholder="\u5F00\u59CB\u65E5\u671F"\r
        end-placeholder="\u7ED3\u675F\u65E5\u671F`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript"> &lt;template&gt;
  &lt;div&gt;
    &lt;div class=&quot;block&quot;&gt;
      &lt;el-date-picker
        v-model=&quot;value1&quot;
        type=&quot;daterange&quot;
        start-placeholder=&quot;\u5F00\u59CB\u65E5\u671F&quot;
        end-placeholder=&quot;\u7ED3\u675F\u65E5\u671F&quot;
        :id=&quot;['start', 'end']&quot;
      &gt;
      &lt;/el-date-picker&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
&lt;script&gt;
export default {
  data() {
    return {
      value1: &quot;&quot;,
      value2: &quot;&quot;,
    };
  },
};
&lt;/script&gt;
</code></pre>
`},{index:["<h2>ES2017</h2>","<h2>substring</h2>"],path:"/posts/\u5B57\u7B26\u4E32\u64CD\u4F5C.html",title:"\u5B57\u7B26\u4E32\u64CD\u4F5C",date:"2021-07-14",fontNum:408,description:`\r
 ES2017 \u5B57\u7B26\u4E32\u8865\u5168\u957F\u5EA6 padEnd padStart\r
javascript\r
let a = 'foo'\r
let b = a.padEnd(20, '.bar')\r
console.log(b);// foo.bar.bar.bar.bar.\r
\r
console.log(a);// foo\r
\r
console.log(a.padStart(20, '.baz'));`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>ES2017 \u5B57\u7B26\u4E32\u8865\u5168\u957F\u5EA6 padEnd padStart</h2>
<pre><code class="language-javascript">let a = 'foo'
let b = a.padEnd(20, '.bar')
console.log(b);// foo.bar.bar.bar.bar.

console.log(a);// foo

console.log(a.padStart(20, '.baz'));// .baz.baz.baz.baz.foo
</code></pre>
<h2>substring \u53D6\u4E24\u4E2A\u53C2\u6570\u4E4B\u95F4 start - stop - 1</h2>
<pre><code class="language-javascript">let str = 'hello world'
console.log(str.substring(2, 0)); 
//he substring\u5982\u679C start \u6BD4 stop \u5927\uFF0C\u90A3\u4E48\u8BE5\u65B9\u6CD5\u5728\u63D0\u53D6\u5B50\u4E32\u4E4B\u524D\u4F1A\u5148\u4EA4\u6362\u8FD9\u4E24\u4E2A\u53C2\u6570\u3002
</code></pre>
`},{index:[],path:"/posts/\u5FAA\u73AF\u5C55\u5F00.html",title:"\u5FAA\u73AF\u5C55\u5F00\u63D0\u5347\u6548\u7387",date:"2021-07-14",fontNum:412,description:`javascript\r
// let b = new Date()\r
 \r
// let a = 1\r
 \r
// for (let i = 0; i < 1000000000; i) {\r
//     a\r
// }\r
 \r
// let c = new Date() - b\r
 \r
// console.log(c); //568ms\r
 \r
 \r
let b = new Da`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">// let b = new Date()
 
// let a = 1
 
// for (let i = 0; i &lt; 1000000000; i++) {
//     a++
// }
 
// let c = new Date() - b
 
// console.log(c); //568ms
 
 
let b = new Date()
 
let a = 1
 
for (let i = 0; i &lt; 100000000; i++) {
    a++
    a++
    a++
    a++
    a++
    a++
    a++
    a++
    a++
    a++
}
 
let c = new Date() - b
 
console.log(c); //57ms
</code></pre>
`},{index:[],path:"/posts/element_ui_select_ctrl_c.html",title:"element-ui select\u6846\u5B9E\u73B0ctrl+c\u590D\u5236\u5185\u5BB9",date:"2021-07-12",fontNum:2387,description:`javascript\r
<template>\r
  <div>\r
    <el-select\r
      ref="select"\r
      placeholder="\u8BF7\u9009\u62E9\u4E3B\u98DF"\r
      multiple\r
      filterable\r
      collapse-tags\r
      id="food"\r
      :name="name"\r
      @fo`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">&lt;template&gt;
  &lt;div&gt;
    &lt;el-select
      ref=&quot;select&quot;
      placeholder=&quot;\u8BF7\u9009\u62E9\u4E3B\u98DF&quot;
      multiple
      filterable
      collapse-tags
      id=&quot;food&quot;
      :name=&quot;name&quot;
      @focus=&quot;whichSearchBoxFocus(name)&quot;
      @keyup.ctrl.67.native=&quot;copyFocusedBoxContent&quot;
      v-model=&quot;formData.food&quot;
    &gt;
      &lt;el-option
        v-for=&quot;item in options&quot;
        :key=&quot;item.label&quot;
        :label=&quot;item.label&quot;
        :value=&quot;item.label&quot;
      &gt;
      &lt;/el-option&gt;
    &lt;/el-select&gt;
    &lt;el-select
      ref=&quot;select&quot;
      placeholder=&quot;\u8BF7\u9009\u62E9\u6C34\u679C&quot;
      multiple
      filterable
      collapse-tags
      id=&quot;fruit&quot;
      name=&quot;fruit&quot;
      @focus=&quot;whichSearchBoxFocus('fruit')&quot;
      @keyup.ctrl.67.native=&quot;copyFocusedBoxContent&quot;
      v-model=&quot;formData.fruit&quot;
    &gt;
      &lt;el-option
        v-for=&quot;item in options2&quot;
        :key=&quot;item.label&quot;
        :label=&quot;item.label&quot;
        :value=&quot;item.label&quot;
      &gt;
      &lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
&lt;script&gt;
export default {
  methods: {
    whichSearchBoxFocus(whichSearchBox) {
      //\u5224\u65AD\u54EA\u4E2Aselect\u88ABfocus//\u628A\u503C\u8D4B\u503C\u7ED9whichSearchBoxFocused
      console.log(&quot;whichSearchBox&quot;, whichSearchBox);
      this.searchBoxFocused = whichSearchBox;
    },
    copyFocusedBoxContent() {
      //\u628A this.formData[this.searchBoxFocused]; \u8D4B\u503C\u5230\u7C98\u8D34\u677F
      console.log(&quot;this.$copyText&quot;, this.$copyText);
      this.$copyText(this.formData[this.searchBoxFocused]).then(
        function (e) {
          alert(&quot;Copied&quot;);
          console.log(e);
        },
        function (e) {
          alert(&quot;Can not copy&quot;);
          console.log(e);
        }
      );
    },
  },
  data() {
    return {
      name: &quot;food&quot;,
      formData: {
        food: [],
        fruit: [],
      },
      searchBoxFocused: null,
      options: [
        {
          label: &quot;\u9EC4\u91D1\u7CD5&quot;,
        },
        {
          label: &quot;\u53CC\u76AE\u5976&quot;,
        },
        {
          label: &quot;\u86B5\u4ED4\u714E&quot;,
        },
        {
          label: &quot;\u9F99\u987B\u9762&quot;,
        },
        {
          label: &quot;\u5317\u4EAC\u70E4\u9E2D&quot;,
        },
      ],
      options2: [
        {
          label: &quot;\u897F\u74DC&quot;,
        },
        {
          label: &quot;\u9999\u8549&quot;,
        },
        {
          label: &quot;\u8461\u8404&quot;,
        },
        {
          label: &quot;\u871C\u74DC&quot;,
        },
        {
          label: &quot;\u82F9\u679C&quot;,
        },
      ],
    };
  },
};
&lt;/script&gt;
</code></pre>
`},{index:[],path:"/posts/js\u5355\u4F8B\u6A21\u5F0F.html",title:"js\u5355\u4F8B\u6A21\u5F0F",date:"2021-07-04",fontNum:3042,description:`javascript\r
//\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0 \u7F3A\u70B9\u662F\u4E0D\u591F\u900F\u660E\u9700\u8981\u901A\u8FC7Singleton.getInstance\u8C03\u7528\r
function Singleton(name) {\r
    this.name = name\r
}\r
 \r
Singleton.prototype.getName = function () {\r
    return this.name\r
}\r
// //\u65B9\u5F0F\u4E00 \u9759\u6001\u65B9\u6CD5`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0 \u7F3A\u70B9\u662F\u4E0D\u591F\u900F\u660E\u9700\u8981\u901A\u8FC7Singleton.getInstance\u8C03\u7528
function Singleton(name) {
    this.name = name
}
 
Singleton.prototype.getName = function () {
    return this.name
}
// //\u65B9\u5F0F\u4E00 \u9759\u6001\u65B9\u6CD5
Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}
 
const a = Singleton.getInstance('sven1')
const b = Singleton.getInstance('sven2')
console.log(a === b);
//\u65B9\u5F0F\u4E8C \u9759\u6001\u65B9\u6CD5+\u95ED\u5305
Singleton.getInstance = (function () {
    let instance = null
    return function (name) {
        if (!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
})()
 
const a = Singleton.getInstance('sven1')
const b = Singleton.getInstance('sven2')
console.log(a === b);
 
//\u900F\u660E\u7684\u5355\u4F8B\u6A21\u5F0F \u7F3A\u70B9\u662F\u5982\u679C\u9700\u8981\u6539\u53D8\u9700\u6C42\u521B\u5EFA\u591A\u4E2A\u5BF9\u8C61\uFF0C\u9700\u8981\u5BF9\u6784\u9020\u51FD\u6570\u8FDB\u884C\u4FEE\u6539
const Singleton = (function () {
    let instance = null
    const Singleton = function (name) {
        if (instance) {
            return instance
        }
        this.name = name
 
        return instance = this//this\u662F\u7B2C\u4E00\u6B21\u521D\u59CB\u5316\u5BF9\u8C61\u7684\u5F15\u7528
    }
    Singleton.prototype.getName = function () {
        console.log(this.name);
    }
    return Singleton
})()
 
const a = new Singleton('sven1')
const b = new Singleton('sven2')
console.log(a === b);
a.getName()
b.getName()
 
\u7528\u4EE3\u7406\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F
const Singleton = function (name) {
    this.name = this.name
}
 
Singleton.prototype.getName = function () {
    console.log(this.name);
}
//\u5F15\u5165\u4EE3\u7406\u7C7B IIFE+\u95ED\u5305
const ProxySingleton = (function () {
    let instance = null
    return function (name) {
        if (!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
})()
 
 
const a = new ProxySingleton('sven1')
const b = new ProxySingleton('sven2')
console.log(a === b);
 
// \u901A\u8FC7\u5F15\u5165\u4EE3\u7406\u7C7B\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u540C\u6837\u5B8C\u6210\u4E86\u4E00\u4E2A\u5355\u4F8B\u6A21\u5F0F\u7684\u7F16\u5199\uFF0C
// \u8DDF\u4E4B\u524D\u4E0D\u540C\u7684\u662F\uFF0C\u73B0\u5728\u6211\u4EEC\u628A\u8D1F\u8D23\u7BA1\u7406\u5355\u4F8B\u7684\u903B\u8F91\u79FB\u5230\u4E86\u4EE3\u7406\u7C7BproxySingletonSingleton\u4E2D\u3002
// \u8FD9\u6837\u4E00\u6765\uFF0CSingleton\u5C31\u53D8\u6210\u4E86\u4E00\u4E2A\u666E\u901A\u7684\u7C7B\uFF0C
// \u5B83\u8DDFproxySingletonSingleton\u7EC4\u5408\u8D77\u6765\u53EF\u4EE5\u8FBE\u5230\u5355\u4F8B\u6A21\u5F0F\u7684\u6548\u679C\u3002
 
//\u901A\u7528\u7684\u60F0\u6027\u5355\u4F8B
 
const getSingle = function (fn) {
    let result = null
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}
 
const fn1 = function () {
}
 
const fn2 = function () {
}
let foo = getSingle(fn1)//fn
let bar = getSingle(fn2)//fn
let a = foo()
let b = foo()
console.log(a === b);
let c = bar()
let d = bar()
console.log(c === d);
 
 
//\u7C7B\u5B9E\u73B0\u6CD5
class Singleton {
    #name = ''
    constructor(name) {
        this.#name = name
    }
 
    getName() {
        console.log('name is', this.#name);
        return 0
    }
}
 
class ProxySingleton {
    static instance = null
    constructor(name) {
        if (!ProxySingleton.instance) {
            ProxySingleton.instance = new Singleton(name)
        }
        return ProxySingleton.instance
    }
}
 
const a = new ProxySingleton('seven1')
const b = new ProxySingleton('seven2')
console.log(a === b);
console.log(a.name);//undefined
console.log(a.getName()); //name is seven1     0
</code></pre>
`},{index:[],path:"/posts/Symbol_asyncIterator.html",title:"Symbol.asyncIterator",date:"2021-06-30",fontNum:492,description:`\r
javascript\r
class Emitter {\r
    constructor(max) {\r
        this.max = max\r
        this.asyncIdx = 0\r
    }\r
    async *[Symbol.asyncIterator]() {\r
        while (this.asyncIdx < this.max) {\r
 `,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">class Emitter {
    constructor(max) {
        this.max = max
        this.asyncIdx = 0
    }
    async *[Symbol.asyncIterator]() {
        while (this.asyncIdx &lt; this.max) {
            yield new Promise((resolve) =&gt; resolve(this.asyncIdx++))
        }
    }
}
 
async function asyncCount() {
    let emitter = new Emitter(5)
    console.log('emitter', emitter);
 
    for await (const x of emitter) {
        console.log(x);
    }
}
 
asyncCount()
</code></pre>
`},{index:[],path:"/posts/\u6709\u6548\u7684\u62EC\u53F7.html",title:"\u6709\u6548\u7684\u62EC\u53F7",date:"2021-06-28",fontNum:570,description:`\r
javascript\r
var isValid = function (s) {\r
    const stack = []\r
    for (const e of s) {\r
        if (e === '(' || e === '[' || e === '{') {\r
            stack.push(e)\r
        }\r
        if (e =`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var isValid = function (s) {
    const stack = []
    for (const e of s) {
        if (e === '(' || e === '[' || e === '{') {
            stack.push(e)
        }
        if (e === ')' || e === ']' || e === '}') {
            const pre = stack.pop()
            const val = \`\${pre}\${e}\`
            if (val === '()' || val === '{}' || val === '[]') {
                continue
            } else {
                return false
            }
        }
    }
    if (stack.length &gt; 0) {
        return false
    }
    return true
};
</code></pre>
`},{index:[],path:"/posts/electron_element_ui_table_\u80CC\u666F\u900F\u660E.html",title:"electron + vue + element ui\u8BBE\u7F6Etable\u80CC\u666F\u989C\u8272\u900F\u660E",date:"2021-06-24",fontNum:1338,description:`\r
javascript\r
<template>\r
  <div>\r
    <el-table\r
      :data="tableData"\r
      style="width: 100%"\r
      :header-cell-style="headerCellStyle"\r
    >\r
      <el-table-column prop="date" label="\u65E5\u671F`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">&lt;template&gt;
  &lt;div&gt;
    &lt;el-table
      :data=&quot;tableData&quot;
      style=&quot;width: 100%&quot;
      :header-cell-style=&quot;headerCellStyle&quot;
    &gt;
      &lt;el-table-column prop=&quot;date&quot; label=&quot;\u65E5\u671F&quot; width=&quot;180&quot;&gt; &lt;/el-table-column&gt;
      &lt;el-table-column prop=&quot;name&quot; label=&quot;\u59D3\u540D&quot; width=&quot;180&quot;&gt; &lt;/el-table-column&gt;
      &lt;el-table-column prop=&quot;address&quot; label=&quot;\u5730\u5740&quot;&gt; &lt;/el-table-column&gt;
    &lt;/el-table&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
    &lt;script&gt;
export default {
  name: &quot;Main&quot;,
  data() {
    return {
      tableData: [
        {
          date: &quot;2016-05-02&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04&quot;,
        },
        {
          date: &quot;2016-05-04&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04&quot;,
        },
        {
          date: &quot;2016-05-01&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04&quot;,
        },
        {
          date: &quot;2016-05-03&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04&quot;,
        },
      ],
    };
  },
  methods: {
    headerCellStyle() {
      return &quot;background-color:transparent;color:#000;&quot;;
    },
  },
};
&lt;/script&gt;
 
&lt;style scoped&gt;
/deep/ .el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
 
/deep/ .el-table tr {
  background-color: transparent !important;
}
&lt;/style&gt;
</code></pre>
`},{index:["<h2>html\u5728\u591A\u7A7A\u683C\u7684\u65F6\u5019\u9ED8\u8BA4\u53EA\u663E\u793A\u4E00\u4E2A\u7A7A\u683C</h2>","<h2>\u52A0\u4E0Awhite-space:</h2>"],path:"/posts/html\u4FDD\u7559\u7A7A\u683C.html",title:"html\u4FDD\u7559\u7A7A\u683C",date:"2021-06-22",fontNum:66,description:`\r
 html\u5728\u591A\u7A7A\u683C\u7684\u65F6\u5019\u9ED8\u8BA4\u53EA\u663E\u793A\u4E00\u4E2A\u7A7A\u683C\r
\r
 \u52A0\u4E0Awhite-space: pre;\u5C31\u80FD\u4FDD\u6301\u7A7A\u683C\u8F93\u51FA\u6570\u91CF\r
`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>html\u5728\u591A\u7A7A\u683C\u7684\u65F6\u5019\u9ED8\u8BA4\u53EA\u663E\u793A\u4E00\u4E2A\u7A7A\u683C</h2>
<h2>\u52A0\u4E0Awhite-space: pre;\u5C31\u80FD\u4FDD\u6301\u7A7A\u683C\u8F93\u51FA\u6570\u91CF</h2>
<pre><code></code></pre>
`},{index:["<h2>\u997F\u4E86\u4E48\u7EC4\u4EF6\u7684\u914D\u7F6E</h2>","<h2>background.js\u4E2D\u7684\u914D\u7F6E</h2>"],path:"/posts/element_ui_electron\u900F\u660E\u8F93\u5165\u6846.html",title:"element ui electron\u5236\u4F5C\u900F\u660E\u8F93\u5165\u6846",date:"2021-06-20",fontNum:3629,description:` \u997F\u4E86\u4E48\u7EC4\u4EF6\u7684\u914D\u7F6E\r
javascript\r
<template>\r
  <el-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"></el-input>\r
</template>\r
 \r
<script>\r
export default {\r
  data() {\r
    return {\r
      input: "",\r
    };\r
  }`,tags:["electron"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u997F\u4E86\u4E48\u7EC4\u4EF6\u7684\u914D\u7F6E</h2>
<pre><code class="language-javascript">&lt;template&gt;
  &lt;el-input v-model=&quot;input&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;&gt;&lt;/el-input&gt;
&lt;/template&gt;
 
&lt;script&gt;
export default {
  data() {
    return {
      input: &quot;&quot;,
    };
  },
};
&lt;/script&gt;
 
&lt;style scoped&gt;
/deep/ .el-input__inner {
  background-color: rgba(0, 0, 0, 0) !important;
}
&lt;/style&gt;
</code></pre>
<h2>background.js\u4E2D\u7684\u914D\u7F6E</h2>
<pre><code class="language-javascript">'use strict'
//\u5BF9electron\u8FDB\u884C\u914D\u7F6E
import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
//\u6BCF\u6B21\u542F\u52A8\u7684\u65F6\u5019\u90FD\u9700\u8981\u7B49\u5230\u8BF7\u6C42\u5B89\u88C5vuejs devtools\u63D2\u4EF6\uFF0C\u8FD9\u4E2A\u7B49\u5F85\u65F6\u95F4\u4F1A\u6BD4\u8F83\u957F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53BB\u6389\u52A0\u8F7Dvuejs devtools\u63D2\u4EF6\u4EE3\u7801\u6765\u5B9E\u73B0
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = processEnvNODE_ENV !== 'production'
 
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
 
async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 1000,
    //by wuyi
    resizable: false,//\u56FA\u5B9A\u884C\u9AD8\u4E0D\u53EF\u53D8
    transparent: true,//frame: false\u7684\u60C5\u51B5\u4E0B \u53EF\u4EE5\u8BBE\u7F6Etrue\u4E3A\u80CC\u666F\u4E3A\u900F\u660E
    frame: false,//\u65E0\u8FB9\u6846
    backgroundColor: '#5F000000', //\u8BBE\u7F6E\u80CC\u666F\u900F\u660E\u65E0\u6548 \u6DFB\u52A0\u8FD9\u4E00\u6B65 \u8FD9\u4E2A\u662F\u5B8C\u5168\u900F\u660E\u7684\u9ED1\u8272\uFF08\u5373\u900F\u660E\u8272\uFF09\uFF0C\u524D\u9762\u4E24\u4F4D\u662F\u900F\u660E\u5EA6\u503C\uFF0C\u540E\u516D\u4F4D\u662F\u989C\u8272\u503C
 
 
    webPreferences: {
 
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })
 
  win.show()
 
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}
 
// Quit when all windows are closed.
app.on('window-all-closed', () =&gt; {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
app.on('activate', () =&gt; {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
 
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () =&gt; {
  // if (isDevelopment &amp;&amp; !process.env.IS_TEST) {
  //   // Install Vue Devtools
  //   try {
  //     await installExtension(VUEJS_DEVTOOLS)
  //   } catch (e) {
  //     console.error('Vue Devtools failed to install:', e.toString())
  //   }
  // }
  createWindow()
})
 
// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) =&gt; {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () =&gt; {
      app.quit()
    })
  }
}
</code></pre>
<pre><code>const win = new BrowserWindow({

    width: 1200,

    height: 1000,

    resizable: false,//\u56FA\u5B9A\u884C\u9AD8\u4E0D\u53EF\u53D8

    transparent: true,//frame: false\u7684\u60C5\u51B5\u4E0B \u53EF\u4EE5\u8BBE\u7F6Etrue\u4E3A\u80CC\u666F\u4E3A\u900F\u660E

    frame: false,//\u65E0\u8FB9\u6846

    backgroundColor: '#5F000000', //\u8BBE\u7F6E\u80CC\u666F\u900F\u660E\u65E0\u6548 \u6DFB\u52A0\u8FD9\u4E00\u6B65 \u8FD9\u4E2A\u662F\u5B8C\u5168\u900F\u660E\u7684\u9ED1\u8272\uFF08\u5373\u900F\u660E\u8272\uFF09\uFF0C\u524D\u9762\u4E24\u4F4D\u662F\u900F\u660E\u5EA6\u503C\uFF0C\u540E\u516D\u4F4D\u662F\u989C\u8272\u503C

</code></pre>
`},{index:[],path:"/posts/dirsearch\u914D\u7F6E.html",title:"dirsearch\u914D\u7F6E",date:"2021-06-17",fontNum:261,description:`\r
\r
dirsearch\u914D\u7F6E\r
1.\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://github.com/maurosoria/dirsearch/archive/master.zip\r
2.\u5B89\u88C53.7\u4EE5\u4E0A\u7248\u672Cpython\r
\r
git clone https://github.com/maurosoria/dirsearch.git\r
cd dirsearch\r
pip3 install -r require`,tags:["web"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code>dirsearch\u914D\u7F6E
1.\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://github.com/maurosoria/dirsearch/archive/master.zip
2.\u5B89\u88C53.7\u4EE5\u4E0A\u7248\u672Cpython

git clone https://github.com/maurosoria/dirsearch.git
cd dirsearch
pip3 install -r requirements.txt
python3 dirsearch.py -u &lt;URL&gt; -e &lt;EXTENSIONS&gt;
</code></pre>
`},{index:[],path:"/posts/element_ui\u65E5\u671F\u7EC4\u4EF6\u9650\u5236\u7ED3\u675F\u65E5\u671F.html",title:"element ui \u65E5\u671F\u7EC4\u4EF6 \u7ED3\u675F\u65E5\u671Fdisabled",date:"2021-06-17",fontNum:724,description:`\r
javascript\r
<template>\r
  <div>\r
    <div class="block">\r
      <span class="demonstration">\u9ED8\u8BA4</span>\r
      <el-date-picker\r
        v-model="value1"\r
        type="datetimerange"\r
        range`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">&lt;template&gt;
  &lt;div&gt;
    &lt;div class=&quot;block&quot;&gt;
      &lt;span class=&quot;demonstration&quot;&gt;\u9ED8\u8BA4&lt;/span&gt;
      &lt;el-date-picker
        v-model=&quot;value1&quot;
        type=&quot;datetimerange&quot;
        range-separator=&quot;\u81F3&quot;
        start-placeholder=&quot;\u5F00\u59CB\u65E5\u671F&quot;
        end-placeholder=&quot;\u7ED3\u675F\u65E5\u671F&quot;
        :picker-options=&quot;pickerOptions&quot;
      &gt;
      &lt;/el-date-picker&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
&lt;script&gt;
export default {
  data() {
    return {
      pickerOptions: {
        //\u65E5\u671F\u9650\u5236
        disabledDate: (time) =&gt; {
          //month \u4F1A\u6BD4\u5F53\u524D\u6708\u4EFD\u5C11\u4E00 \u8FD9\u91CC\u76845 \u662F\u516D\u6708\u4EFD
          return time &gt; new Date(2021, 5, 22);
        },
      },
      value1: [new Date(), new Date()],
      value2: &quot;&quot;,
    };
  },
};
&lt;/script&gt;
</code></pre>
`},{index:["<h2>\u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565\u7684\u5F71\u54CD</h2>","<h2>JSONP</h2>","<h2>CROS</h2>","<h2>\u670D\u52A1\u5668\u4EE3\u7406</h2>"],path:"/posts/\u89E3\u51B3\u8DE8\u57DF\u7684\u4E09\u79CD\u65B9\u6CD5.html",title:"\u89E3\u51B3\u8DE8\u57DF\u7684\u4E09\u79CD\u65B9\u6CD5",date:"2021-06-16",fontNum:491,description:` \u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565\u7684\u5F71\u54CD\r
\r
https://  www.  baidu.com:  8080/   page/  ?key=value\r
\u534F\u8BAE      \u4E3B\u673A   \u57DF\u540D        \u7AEF\u53E3    \u8DEF\u5F84    \u53C2\u6570\r
\r
\r
 JSONP\r
\u5229\u7528script \u83B7\u53D6\r
\r
- \u670D\u52A1\u7AEF  \u7ED9\u6570\u636E\u5916\u5305\u4E00\u4E2A\u51FD\u6570\u518D\u5916\u5305\u4E00\u5C42JSON \r
eg:JSON[javascript Functio`,tags:["http"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565\u7684\u5F71\u54CD</h2>
<pre><code>https://  www.  baidu.com:  8080/   page/  ?key=value
\u534F\u8BAE      \u4E3B\u673A   \u57DF\u540D        \u7AEF\u53E3    \u8DEF\u5F84    \u53C2\u6570
</code></pre>
<h2>JSONP</h2>
<p>\u5229\u7528script \u83B7\u53D6</p>
<ul>
<li>
<p>\u670D\u52A1\u7AEF  \u7ED9\u6570\u636E\u5916\u5305\u4E00\u4E2A\u51FD\u6570\u518D\u5916\u5305\u4E00\u5C42JSON
eg:JSON[javascript Function [data]]</p>
</li>
<li>
<p>\u5BA2\u6237\u7AEF\u63D0\u524D\u8BBE\u7F6E\u4E13\u95E8\u5904\u7406\u7684function(data)</p>
</li>
<li>
<p>\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u65F6\u5019\u4F1A\u5E26\u4E0A\u7279\u6B8A\u7684\u53C2\u6570</p>
</li>
<li>
<p>\u670D\u52A1\u7AEF\u6536\u5230\u53C2\u6570\u540E\u4EE5\u4E0A\u9762\u683C\u5F0F\u8FD4\u56DE</p>
</li>
</ul>
<p>\u53EA\u652F\u6301get\u65B9\u6CD5\u4E0D\u652F\u6301post\u65B9\u6CD5</p>
<h2>CROS</h2>
<ul>
<li>
<p>\u6D4F\u89C8\u5668\u8BF7\u6C42\u4F1A\u6DFB\u52A0origin:\u534F\u8BAE + \u4E3B\u673A + \u7AEF\u53E3</p>
</li>
<li>
<p>\u670D\u52A1\u5668\u8FD4\u56DE\u6570\u636E\u7684\u65F6\u5019\u5141\u8BB8\u8BF7\u6C42\u5C31\u6DFB\u52A0 Access-Control-Allow-Origin:\u534F\u8BAE + \u4E3B\u673A + \u7AEF\u53E3</p>
</li>
</ul>
<h2>\u670D\u52A1\u5668\u4EE3\u7406</h2>
<ul>
<li>
<p>\u670D\u52A1\u7AEF\u6CA1\u6709\u540C\u6E90\u9650\u5236</p>
</li>
<li>
<p>eg:\u6D4F\u89C8\u5668\u8BF7\u6C42nginx\u76D1\u542C\u7AEF\u53E3 ,nginx proxy_pass \u6307\u5411\u670D\u52A1\u5668\u7AEF\u53E3</p>
</li>
</ul>
`},{index:["<h3>\u9700\u8981\u4E2Adiv\uFF0C</h3>","<h3>\u7B2C1\u4E2A\u56FA\u5B9A\u5927\u5C0F\u662F600*800px</h3>","<h3>\u7B2C2\u4E2A\u4E0D\u56FA\u5B9A\u5927\u5C0F\u8981\u7528\u7B2C3\u4E2Adiv\u628A\u4E2A\u6491\u5F00\u4F46\u662F\u8FD9\u4E2Adiv\u5FC5\u9700\u8981\u6709\u6EDA\u52A8\u6761\uFF0C</h3>","<h3>\u7B2C3\u4E2A\u56FA\u5B9A\u5927\u5C0F\u4E0E\u7B2C1\u4E2Adiv\u4FDD\u6301\u4E00\u81F4600*800</h3>"],path:"/posts/div\u53EF\u4EE5\u6EDA\u52A8\u4F46\u4E0D\u663E\u793A\u6EDA\u52A8\u6761.html",title:"div\u53EF\u4EE5\u6EDA\u52A8\u4F46\u4E0D\u663E\u793A\u6EDA\u52A8\u6761",date:"2021-06-15",fontNum:1635,description:` \u9700\u8981\u4E2Adiv\uFF0C\r
\r
 \u7B2C1\u4E2A\u56FA\u5B9A\u5927\u5C0F\u662F600*800px\r
\r
 \u7B2C2\u4E2A\u4E0D\u56FA\u5B9A\u5927\u5C0F\u8981\u7528\u7B2C3\u4E2Adiv\u628A\u4E2A\u6491\u5F00\u4F46\u662F\u8FD9\u4E2Adiv\u5FC5\u9700\u8981\u6709\u6EDA\u52A8\u6761\uFF0C\r
\r
 \u7B2C3\u4E2A\u56FA\u5B9A\u5927\u5C0F\u4E0E\u7B2C1\u4E2Adiv\u4FDD\u6301\u4E00\u81F4600*800\r
html\r
<html>\r
 \r
<head></head>\r
 \r
<body>\r
    <div style="width:800px;height:600px`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u9700\u8981\u4E2Adiv\uFF0C</h3>
<h3>\u7B2C1\u4E2A\u56FA\u5B9A\u5927\u5C0F\u662F600*800px</h3>
<h3>\u7B2C2\u4E2A\u4E0D\u56FA\u5B9A\u5927\u5C0F\u8981\u7528\u7B2C3\u4E2Adiv\u628A\u4E2A\u6491\u5F00\u4F46\u662F\u8FD9\u4E2Adiv\u5FC5\u9700\u8981\u6709\u6EDA\u52A8\u6761\uFF0C</h3>
<h3>\u7B2C3\u4E2A\u56FA\u5B9A\u5927\u5C0F\u4E0E\u7B2C1\u4E2Adiv\u4FDD\u6301\u4E00\u81F4600*800</h3>
<pre><code class="language-html">&lt;html&gt;
 
&lt;head&gt;&lt;/head&gt;
 
&lt;body&gt;
    &lt;div style=&quot;width:800px;height:600px;position:relative;overflow:hidden;background-color:yellow&quot;&gt;
        &lt;div style=&quot;overflow:auto;position:absolute&quot;&gt;
            &lt;div style=&quot;width:800px;height:600px&quot;&gt;
                &lt;ul&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                    &lt;li&gt;xxxxxx&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;  
    &lt;/div&gt;
&lt;/body&gt;
 
&lt;/html&gt;
</code></pre>
`},{index:["<h2>\u8981\u70B9</h2>","<h2>\u5F15\u5165\u4F9D\u8D56</h2>","<h3>\u8BFB\u53D6\u6570\u636E</h3>","<h3>\u58F0\u660E\u8F93\u51FA\u683C\u5F0F</h3>","<h3>\u53BB\u9664\u7A7A\u884C\u7684\u64CD\u4F5C</h3>","<h3>\u6784\u5EFAbuffer\u548C\u5199\u5165</h3>","<h3>excel\u53BB\u9664\u7A7A\u884C\u5B8C\u6574\u4EE3\u7801</h3>"],path:"/posts/excel\u89E3\u6790.html",title:"\u53BB\u9664excel\u7684\u7A7A\u884C",date:"2021-06-15",fontNum:1216,description:` \u8981\u70B9\r
\r
- \u521D\u59CB\u5316 npm init\r
- \u5B89\u88C5\u4F9D\u8D56 npm install node-xlsx\r
\r
 \u5F15\u5165\u4F9D\u8D56\r
\r
const xlsx = require('node-xlsx');\r
const fs = require('fs')\r
\r
\r
 \u8BFB\u53D6\u6570\u636E\r
javascript\r
const query = xlsx.parse(fs.readFil`,tags:["node"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u8981\u70B9</h2>
<ul>
<li>\u521D\u59CB\u5316 npm init</li>
<li>\u5B89\u88C5\u4F9D\u8D56 npm install node-xlsx</li>
</ul>
<h2>\u5F15\u5165\u4F9D\u8D56</h2>
<pre><code>const xlsx = require('node-xlsx');
const fs = require('fs')
</code></pre>
<h3>\u8BFB\u53D6\u6570\u636E</h3>
<pre><code class="language-javascript">const query = xlsx.parse(fs.readFileSync('t.xls')); //\u89E3\u6790\u73B0\u6709\u7684\u6587\u4EF6 t.xls
const result = query[0].data //\u83B7\u53D6\u8BFB\u53D6\u7684\u6570\u636E
</code></pre>
<h3>\u58F0\u660E\u8F93\u51FA\u683C\u5F0F</h3>
<pre><code class="language-javascript">const tmp = [{
    name: 'xxxx',
    data: []
}]
</code></pre>
<h3>\u53BB\u9664\u7A7A\u884C\u7684\u64CD\u4F5C</h3>
<pre><code class="language-javascript">//\u53BB\u9664\u7A7A\u884C \u5373\u6BCF\u884C\u5143\u7D20\u7684length === 0 \u6BCF\u884C\u5143\u7D20\u4E3A\u4E00\u4E2A\u6570\u7EC4
for (const e of result) {
    if (e.length &gt; 0) {
        tmp[0].data.push(e)
    }
}
</code></pre>
<h3>\u6784\u5EFAbuffer\u548C\u5199\u5165</h3>
<pre><code class="language-javascript">//\u6784\u5EFAbuffer
const buffer = xlsx.build(tmp);
//\u5199\u5165s.xls
fs.writeFileSync('s.xls', buffer)
</code></pre>
<h3>excel\u53BB\u9664\u7A7A\u884C\u5B8C\u6574\u4EE3\u7801</h3>
<pre><code class="language-javascript">const xlsx = require('node-xlsx'); // \u901A\u8FC7npm\u5B89\u88C5\u6A21\u5757 git\u5730\u5740https://github.com/mgcrea/node-xlsx
const fs = require('fs')
 
const query = xlsx.parse(fs.readFileSync('t.xls')); //\u89E3\u6790\u73B0\u6709\u7684\u6587\u4EF6 t.xls
 
const result = query[0].data //\u83B7\u53D6\u8BFB\u53D6\u7684\u6570\u636E
//\u8F93\u51FA\u6570\u636E\u683C\u5F0F
const tmp = [{
    name: 'xxxx',
    data: []
}]
 
//\u53BB\u9664\u7A7A\u884C \u5373\u6BCF\u884C\u5143\u7D20\u7684length === 0 \u6BCF\u884C\u5143\u7D20\u4E3A\u4E00\u4E2A\u6570\u7EC4
for (const e of result) {
    if (e.length &gt; 0) {
        tmp[0].data.push(e)
    }
}
//\u6784\u5EFAbuffer
const buffer = xlsx.build(tmp);
//\u5199\u5165s.xls
fs.writeFileSync('s.xls', buffer)
</code></pre>
`},{index:["<h3>1.</h3>","<h3>2.</h3>","<h3>3.</h3>","<h3>4.</h3>","<h3>5.</h3>","<h3>6.</h3>"],path:"/posts/\u642D\u5EFAElectron\u73AF\u5883.html",title:"\u642D\u5EFAElectron\u73AF\u5883",date:"2021-06-12",fontNum:506,description:`\r
 1. \u5347\u7EA7vue-cli\u52303.0\u4EE5\u4E0A\u7248\u672C\r
\r
 2. vue create demo\r
\r
 3. cd demo\r
\r
 4. vue add electron-builder\r
\r
 5. npm install --save-dev electron \r
\r
\u8FD9\u91CC\u7528cnpm\u5B89\u88C5 npm\u5B89\u88C5\u4E0D\u4E0A\r
\r
 6. npm run electron:ser`,tags:["electron"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>1. \u5347\u7EA7vue-cli\u52303.0\u4EE5\u4E0A\u7248\u672C</h3>
<h3>2. vue create demo</h3>
<h3>3. cd demo</h3>
<h3>4. vue add electron-builder</h3>
<h3>5. npm install --save-dev electron</h3>
<p>\u8FD9\u91CC\u7528cnpm\u5B89\u88C5 npm\u5B89\u88C5\u4E0D\u4E0A</p>
<h3>6. npm run electron:serve</h3>
<blockquote>
<p>\u542F\u52A8\u9879\u76EE</p>
</blockquote>
<p>\u6BCF\u6B21npm run electron:build \u4F1A\u5F88\u6162\u751A\u81F3\u65E0\u6CD5\u4E0B\u8F7D
\u8BBE\u7F6EElectron\u955C\u50CF\u5730\u5740
npm config set electron_mirror https://mirrors.huaweicloud.com/electron/</p>
<p>\u8BBE\u7F6Eelectron_builder_binaries\u955C\u50CF\u5730\u5740
npm config set electron_builder_binaries_mirror https://mirrors.huaweicloud.com/electron-builder-binaries/</p>
<p>\u63A7\u5236\u53F0\u5FEB\u6377\u952Ectrl+shift+i</p>
`},{index:[],path:"/posts/\u6700\u957F\u6709\u6548\u62EC\u53F7.html",title:"\u6C42\u6700\u957F\u6709\u6548\u62EC\u53F7",date:"2021-06-11",fontNum:931,description:`\r
javascript\r
//\u52A8\u6001\u89C4\u5212\u6CD5 \u6C42 \u6700\u957F\u6709\u6548\u62EC\u53F7\r
var longestValidParentheses = function (s) {\r
    //\u751F\u6210\u957F\u5EA6\u4E3As.length \u7684dp\u6570\u7EC4\u5E76\u75280\u8FDB\u884C\u586B\u5145\r
    let dp = new Array(s.length).fill(0), max = 0\r
    for (let i = 1; i < s.length; `,tags:["\u52A8\u6001\u89C4\u5212\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u52A8\u6001\u89C4\u5212\u6CD5 \u6C42 \u6700\u957F\u6709\u6548\u62EC\u53F7
var longestValidParentheses = function (s) {
    //\u751F\u6210\u957F\u5EA6\u4E3As.length \u7684dp\u6570\u7EC4\u5E76\u75280\u8FDB\u884C\u586B\u5145
    let dp = new Array(s.length).fill(0), max = 0
    for (let i = 1; i &lt; s.length; i++) {
        //\u53D1\u73B0\u53F3\u62EC\u53F7
        if (s[i] === ')') {
            //\u5224\u65AD\u53F3\u62EC\u53F7\u7684\u4E0A\u4E00\u4E2A\u62EC\u53F7\u662F\u5426\u4E3A\u5DE6\u62EC\u53F7
            if (s[i - 1] === '(') {
                //i\u5C0F\u4E8E1\u7684\u60C5\u51B5\u4E0B \u7B26\u5408\u5C31\u662F\u6709\u4E00\u5BF9\u62EC\u53F7 \u957F\u5EA6\u4E3A 2 \u6CA1\u6709\u5219\u53D6\u6570\u7EC4\u9ED8\u8BA4\u503C0
                dp[i] = i &gt; 1 ? dp[i - 2] + 2 : 2
                // dp[i - 1] \u4E3Ai-1\u7684\u6700\u957F\u6709\u6548\u62EC\u53F7\u957F\u5EA6
                // 1. i\u7684\u957F\u5EA6\u8981\u5927\u4E8E  i-1\u7684\u6700\u957F\u6709\u6548\u62EC\u53F7\u957F\u5EA6 \u4FDD\u8BC1i-1\u524D\u8FD8\u6709\u6709\u62EC\u53F7
                // 2. \u5E76\u4E14i-1\u5B57\u7B26\u4E32\u524D\u7684\u62EC\u53F7\u4E3A \u5DE6\u62EC\u53F7
            } else if (i - dp[i - 1] &gt; 0 &amp;&amp; s[i - dp[i - 1] - 1] === '(') {
                //\u6C42\u5DF2\u7ECF\u7B26\u5408\u7684\u5B57\u7B26\u4E32\u5916\u90E8\u7684\u5B57\u7B26\u4E32\u662F\u5426\u8FD8\u6709\u7B26\u5408\u7684 (\u53BB\u9664 i - dp[i - 1] - 2 \u957F\u5EA6\u540E)
                dp[i] = ((i - dp[i - 1] - 2) &gt;= 0 ? dp[i - dp[i - 1] - 2] : 0) + dp[i - 1] + 2
            }
        }
        //\u6BD4\u8F83\u5F97\u51FA\u6700\u5927\u7684\u6709\u6548\u62EC\u53F7\u957F\u5EA6
        max = Math.max(max, dp[i])
    }
    return max
};
</code></pre>
`},{index:[],path:"/posts/js\u8FDE\u7EED\u8D4B\u503C\u95EE\u9898.html",title:"js\u8FDE\u7EED\u8D4B\u503C\u95EE\u9898",date:"2021-06-07",fontNum:436,description:`\r
javascript\r
let a = {\r
    b: 42\r
}\r
 \r
let d = a\r
a.x = a = { c: 44 } //\u6700\u5148\u8C03\u7528\u7684\u662F a.x (\u56E0\u4E3A . \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E = ) a.x \u4E3Aundefined \u8FD9\u91CC\u7684a\u6307\u5411 { b: 42 }\r
// \u7136\u540Ea\u6307\u5411{ c: 44 } \u518D\u628A\u6307\u5411{ b: 42 }\u4E5F\u5C31\u662F\u4E4B\u524D\u7684a\u7684x\u8D4B\u503C\u4E3A{ c: 44 }\r
 \r
cons`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">let a = {
    b: 42
}
 
let d = a
a.x = a = { c: 44 } //\u6700\u5148\u8C03\u7528\u7684\u662F a.x (\u56E0\u4E3A . \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E = ) a.x \u4E3Aundefined \u8FD9\u91CC\u7684a\u6307\u5411 { b: 42 }
// \u7136\u540Ea\u6307\u5411{ c: 44 } \u518D\u628A\u6307\u5411{ b: 42 }\u4E5F\u5C31\u662F\u4E4B\u524D\u7684a\u7684x\u8D4B\u503C\u4E3A{ c: 44 }
 
console.log('a.x', a.x); //\u8FD9\u91CC\u7684a\u6307\u5411\u8D4B\u503C\u4E4B\u540E\u7684a\u5373{ c: 44 }
console.log('d', d); //d { b: 42, x: { c: 44 } }
 
 
let a = { n: 1 };
 
let b = a
 
a.n = a = { n: 2 };
console.log(a.n); // \u8F93\u51FA2
console.log(b);// \u8F93\u51FA{ n: { n: 2 } }
&lt;/style&gt;
</code></pre>
`},{index:["<h2>app</h2>","<h4>main.js</h4>","<h4>app.js</h4>","<h2>common</h2>","<h4>index.html</h4>","<h2>webpack.config.js</h2>"],path:"/posts/webpack\u6253\u5305vue\u9879\u76EE.html",title:"webpack\u6253\u5305vue\u9879\u76EE",date:"2021-06-05",fontNum:1566,description:`\r
cnpm \u5B89\u88C5\r
\r
npm install -g cnpm --registry=https://registry.npm.taobao.org\r
\r
\u6216\u8005 npm install -g cnpm\r
\r
 \r
\r
\u521B\u5EFA\u5982\u4E0B\u6587\u4EF6\u76EE\u5F55\r
\r
 \r
\r
webpackDemo\r
\r
 app\r
\r
 main.js\r
\r
 app.js\r
\r
 common\r
\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>cnpm \u5B89\u88C5</p>
<p>npm install -g cnpm --registry=https://registry.npm.taobao.org</p>
<p>\u6216\u8005 npm install -g cnpm</p>
<p>\u521B\u5EFA\u5982\u4E0B\u6587\u4EF6\u76EE\u5F55</p>
<p>webpackDemo</p>
<h2>app</h2>
<h4>main.js</h4>
<h4>app.js</h4>
<h2>common</h2>
<h4>index.html</h4>
<h2>webpack.config.js</h2>
<p>\u5B89\u88C5\u4F9D\u8D56</p>
<p>npm install webpack@4 --save-dev</p>
<p>npm install webpack@4 webpack-cli --save-dev</p>
<p>main.js</p>
<pre><code class="language-javascript">const greeter = require('./app.js');

document.querySelector(&quot;#root&quot;).appendChild(greeter());

//\u5C06dom\u5BF9\u8C61\u6DFB\u52A0\u5230document\u5BF9\u8C61\u4E0A
</code></pre>
<p>app.js</p>
<pre><code class="language-javascript">module.exports = function () {
    const greet = document.createElement('div');

    greet.textContent = &quot;welcome to use webpack!&quot;;

    return greet;

}//\u521B\u5EFA\u4E00\u4E2Adom\u5BF9\u8C61
</code></pre>
<p>index.html</p>
<pre><code class="language-html">&lt;!doctype html&gt;

&lt;html lang=&quot;en&quot;&gt;

 

&lt;head&gt;

    &lt;meta charset=&quot;UTF-8&quot;&gt;

    &lt;title&gt;Document&lt;/title&gt;

&lt;/head&gt;

 

&lt;body&gt;

    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;

    &lt;script type=&quot;text/javascript&quot; src=&quot;index.js&quot;&gt;&lt;/script&gt; //\u901A\u8FC7webpack\u6253\u5305\u751F\u6210\u7684index.js\u6587\u4EF6

&lt;/body&gt;

 

&lt;/html&gt;
</code></pre>
<pre><code class="language-javascript">webpack.config.js

//\u914D\u7F6Ewebpack\u6253\u5305\u7684\u5165\u53E3\u548C\u6253\u5305\u540E\u6587\u4EF6\u5B58\u653E\u7684\u4F4D\u7F6E

module.exports = {
    // webpack4\u9700\u8981\u6DFB\u52A0\u8FD9\u4E2A\u914D\u7F6E\uFF0Cdevelopment\u4E3A\u5F00\u53D1\u73AF\u5883\uFF0Cproduction\u4E3A\u751F\u4EA7\u73AF\u5883

    mode: 'development',

    entry: __dirname + '\\\\app\\\\main.js', // \u5165\u53E3\u6587\u4EF6

    output: {
        path: __dirname + '\\\\common', // \u6253\u5305\u540E\u7684\u6587\u4EF6\u5B58\u653E\u7684\u5730\u65B9

        filename: 'index.js' // \u6253\u5305\u540E\u8F93\u51FA\u6587\u4EF6\u7684\u6587\u4EF6\u540D

    }

}
</code></pre>
<p>node_modules/.bin/webpack .\\app\\main.js .\\common\\index.js      \u9700\u8981\u4FDD\u8BC1\u4E24\u4E2A\u6587\u4EF6\u5B58\u5728</p>
<p>node_modules/.bin/webpack      \u9700\u8981\u5728webpack.config.js\u8FDB\u884C\u914D\u7F6E</p>
<p>\u6253\u5305\u6210\u529F\u540E\u8FD0\u884Cindex.html\u5373\u53EF\u770B\u5230\u6548\u679C</p>
`},{index:[],path:"/posts/\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32.html",title:"\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32",date:"2021-05-30",fontNum:1030,description:`\r
javascript\r
var findSubstring = function (s, words) {\r
    const res = []\r
    if (s.length === 0 || words.length === 0) return res\r
    const sLen = s.length //\u5B57\u7B26\u4E32s\u7684\u957F\u5EA6\r
    const wordsLen = word`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var findSubstring = function (s, words) {
    const res = []
    if (s.length === 0 || words.length === 0) return res
    const sLen = s.length //\u5B57\u7B26\u4E32s\u7684\u957F\u5EA6
    const wordsLen = words.join('').length//words\u5143\u7D20\u7EC4\u6210\u5B57\u7B26\u4E32\u7684\u957F\u5EA6
    const wordLen = words[0].length//\u6BCF\u4E2Aword\u7684\u957F\u5EA6
    const len = sLen - wordsLen//\u5B57\u7B26\u4E32s\u548C\u548Cwords\u5143\u7D20\u7EC4\u6210\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u7684\u5DEE\u503C(\u5916\u5C42\u5FAA\u73AF\u7684\u6B21\u6570)
    if (sLen &lt; wordsLen) return res
 
    for (let left = 0; left &lt;= len; left++) {//\u5982\u679Clen\u4E3A0\u4E5F\u5F97\u5FAA\u73AF1\u6B21\u6240\u4EE5\u662F\u5C0F\u4E8E\u7B49\u4E8E
        const tempArr = words.slice()//\u521B\u5EFA\u4E00\u4E2Awords\u7684\u526F\u672C
        for (let right = left; right &lt; left + wordsLen; right += wordLen) { //\u622A\u53D6\u6BCF\u4E2A\u5B57\u7B26\u4E32\u4E2Dword\u957F\u5EA6\u5224\u65ADtempArr\u4E2D\u662F\u5426\u5B58\u5728,\u5B58\u5728\u5373\u5220\u9664\u8BE5\u5143\u7D20
            const str = s.slice(right, right + wordLen)
            const index = tempArr.indexOf(str);
            if (index &gt; -1) {
                tempArr.splice(index, 1);
            } else {
                break;
            }
        }
 
        if (tempArr.length === 0) {//\u6700\u7EC8\u5224\u65ADtempArr\u7684\u957F\u5EA6\u662F\u5426\u4E3A\u7A7A\uFF0C\u4E3A\u7A7A\u5373\u8868\u793A\u6BCF\u4E2Aword\u90FD\u5B58\u5728
            res.push(left);
        }
    }
 
    return res
}
</code></pre>
`},{index:[],path:"/posts/\u5FEB\u901F\u6392\u5E8F.html",title:"\u5FEB\u901F\u6392\u5E8F",date:"2021-05-27",fontNum:627,description:`\r
javascript\r
function quickSort(arr) {\r
    const len = arr.length\r
    //\u9012\u5F52\u8C03\u7528\u9000\u51FA\u7684\u6761\u4EF6\r
    if (len <= 1) return arr\r
    //\u8BBE\u7F6E\u53C2\u8003\u503C\r
    let index = Math.floor(len / 2)\r
    let standard = arr[index]\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">function quickSort(arr) {
    const len = arr.length
    //\u9012\u5F52\u8C03\u7528\u9000\u51FA\u7684\u6761\u4EF6
    if (len &lt;= 1) return arr
    //\u8BBE\u7F6E\u53C2\u8003\u503C
    let index = Math.floor(len / 2)
    let standard = arr[index]
 
    //\u4ECE\u539F\u6570\u7EC4\u622A\u53D6\u8FD9\u4E2A\u503C
    arr.splice(index, 1)
 
    const leftArr = [] //\u5B58\u653E\u6BD4standard\u5C0F\u7684\u503C
    const rightArr = []//\u5B58\u653E\u6BD4standard\u5927\u7684\u503C
    //\u4E0Estandard\u6BD4\u8F83\u5927\u5C0F
    for (const e of arr) {
        e &lt; standard ? leftArr.push(e) : rightArr.push(e)
    }
    //\u9012\u5F52\u8C03\u7528
    return [...quickSort(leftArr), standard, ...quickSort(rightArr)]
}
 
 
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
 
console.log(quickSort(arr));
&lt;/style&gt;
</code></pre>
`},{index:[],path:"/posts/\u4E24\u6570\u76F8\u9664.html",title:"\u4E24\u6570\u76F8\u9664",date:"2021-05-24",fontNum:841,description:`\r
javascript\r
var divide = function (dividend, divisor) {\r
    //dividend \u4E3A\u88AB\u9664\u6570 divisor \u4E3A\u9664\u6570\r
    //\u8BB0\u5F55\u7B26\u53F7\r
    let flag1 = dividend >= 0\r
    let flag2 = divisor >= 0\r
    //\u8F6C\u6362\u6210\u6B63\u6570\r
    dividend = Math`,tags:["\u52A8\u6001\u89C4\u5212\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var divide = function (dividend, divisor) {
    //dividend \u4E3A\u88AB\u9664\u6570 divisor \u4E3A\u9664\u6570
    //\u8BB0\u5F55\u7B26\u53F7
    let flag1 = dividend &gt;= 0
    let flag2 = divisor &gt;= 0
    //\u8F6C\u6362\u6210\u6B63\u6570
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    //\u5BF9\u9664\u6570\u8FDB\u884C\u7FFB\u500D \u5B58\u50A8\u5F85\u7528
    let count = 1
    const arr = []
    while (dividend &gt;= divisor) {
        arr.push([count, divisor])
        divisor += divisor
        count += count
    }
    //\u8BA9\u88AB\u9664\u6570\u4E0D\u65AD\u51CF\u53BBarr\u4E2D\u5C0F\u4E8E\u5B83\u7684\u9664\u6570,\u4ECEarr\u4E2D\u6700\u5927\u7684\u503C\u5F00\u59CB\u51CF
    let sum = 0 //\u8BB0\u5F55\u9664\u6570\u7684\u4E2A\u6570
    const len = arr.length
    for (let i = len - 1; i &gt;= 0 &amp;&amp; dividend &gt; 0; i--) {
        let [count, divisor] = arr[i]
        if (dividend &gt;= divisor) {
            dividend -= divisor
            sum += count
        }
    }
 
    return flag1 === flag2 ? Math.min(sum, 2147483648 - 1) : -Math.min(sum, 2147483648)
};
</code></pre>
`},{index:[],path:"/posts/\u9012\u5F52\u5B9E\u73B0indexof\u5B9E\u73B0strStr.html",title:"\u9012\u5F52\u5B9E\u73B0indexof \u5B9E\u73B0 strStr()",date:"2021-05-22",fontNum:1426,description:`\r
javascript\r
var strStr = function (haystack, needle) {\r
 \r
    if (needle === '') {\r
        return 0\r
    }\r
 \r
    if (haystack === '' && needle !== '') {\r
        return -1\r
    }\r
 \r
 \r
    i`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var strStr = function (haystack, needle) {
 
    if (needle === '') {
        return 0
    }
 
    if (haystack === '' &amp;&amp; needle !== '') {
        return -1
    }
 
 
    if (haystack === '' &amp;&amp; needle === '') {
        return 0
    }
    let result = []
 
    for (let i = 0; i &lt; haystack.length; i++) {
        const arr = [0, 0]
 
        if (haystack[i] === needle[0]) {
            let tmpStr = haystack.slice(i)
            if (tmpStr.length &gt;= needle.length) {
                result.push(handle(haystack.slice(i), needle, arr, i))
            }
        } else {
            result.push(-1)
        }
 
    }
    const out = []
    for (const e of result) {
        if (e &gt; -1) {
            out.push(e)
        }
    }
    if (out.length === 0) {
        return -1
    }
    return Math.min(...out)
};
function handle(haystack, needle, arr, index) {
    if (arr[0] === haystack.length &amp;&amp; arr[1] !== needle.length) {
        return -1
    }
 
    if (arr[1] === needle.length) {
 
        return arr[0] - arr[1] + index
    }
 
    const i = arr[0]
    const j = arr[1]
 
    if (haystack[i] === needle[j]) {
        arr[1]++
    }
    if (haystack[i] !== needle[j]) {
        arr[1] = 0
    }
 
    arr[0]++
 
    return handle(haystack, needle, arr, index)
}
 
// console.log(strStr(&quot;hello&quot;, &quot;ll&quot;));
console.log(strStr(&quot;a&quot;, &quot;a&quot;));
</code></pre>
`},{index:[],path:"/posts/\u62EC\u53F7\u751F\u6210.html",title:"\u62EC\u53F7\u751F\u6210",date:"2021-05-21",fontNum:937,description:`\r
javascript\r
var generateParenthesis = function (n) {\r
    let outArr = []\r
    handle(1, '(', outArr, 1, n)\r
    return outArr\r
};\r
//layers\u4E3A\u62EC\u53F7\u5C42\u6B21\r
//str\u4E3A\u7B26\u5408\u7684\u5B57\u7B26\u4E32\r
//outArr\u4E3A\u8FD4\u56DE\u7684\u6570\u7EC4\r
//currentNums\u4E3A\u5F53\u524D\u7684\u62EC`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var generateParenthesis = function (n) {
    let outArr = []
    handle(1, '(', outArr, 1, n)
    return outArr
};
//layers\u4E3A\u62EC\u53F7\u5C42\u6B21
//str\u4E3A\u7B26\u5408\u7684\u5B57\u7B26\u4E32
//outArr\u4E3A\u8FD4\u56DE\u7684\u6570\u7EC4
//currentNums\u4E3A\u5F53\u524D\u7684\u62EC\u53F7\u5BF9\u6570
//totalNums\u4E3A\u603B\u5171\u7684\u62EC\u53F7\u5BF9\u6570
function handle(layers, str, outArr, currentNums, totalNums) {
    if (currentNums === totalNums) { //\u5224\u65AD\u5F53\u524D\u62EC\u53F7\u5BF9\u6570\u662F\u5426 \u4E0E\u603B\u62EC\u53F7\u5BF9\u6570\u76F8\u7B49
        while (layers &gt; 0) {//\u6839\u636E\u62EC\u53F7\u5C42\u6B21\u6765\u8865')'
            str += &quot;)&quot;
            layers--
        }
        outArr.push(str)
        return
    }
    if (layers &gt; 0) { //\u5224\u65AD\u62EC\u53F7\u5C42\u6B21\u662F\u5426\u5927\u4E8E0
        handle(layers + 1, str + '(', outArr, currentNums + 1, totalNums) //\u5927\u4E8E0 \u8865'(' \u5C42\u6B21\u52A01 \u5B57\u7B26\u4E32\u52A0 '(' \u62EC\u53F7\u5BF9\u6570\u52A01
        handle(layers - 1, str + ')', outArr, currentNums, totalNums) //\u53E6\u4E00\u79CD\u60C5\u51B5 \u5927\u4E8E0 \u8865')' \u5C42\u6B21\u51CF1 \u5B57\u7B26\u4E32\u52A0 ')' \u62EC\u53F7\u5BF9\u6570\u4E0D\u53D8
    } else {
        handle(layers + 1, str + '(', outArr, currentNums + 1, totalNums) //\u5F53\u524D\u5B57\u7B26\u4E32\u5DF2\u5B58\u5728'(' ')' \u5339\u914D\u7684\u60C5\u51B5\u4E0B \u53EA\u80FD\u6DFB\u52A0'(' \u5C42\u6B21\u52A01 \u62EC\u53F7\u5BF9\u6570\u52A01
    }
}
console.log(generateParenthesis(3));
</code></pre>
`},{index:[],path:"/posts/DFS\u9012\u5F52\u6C42\u89E3\u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408.html",title:"DFS\u9012\u5F52\u6C42\u89E3 \u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408",date:"2021-05-17",fontNum:1004,description:`\r
javascript\r
//\u627E\u6240\u6709\u7684\u89E3 ------ \u641C\u7D22\u7B97\u6CD5 ------ \u6DF1\u5EA6\u4F18\u5148/\u5E7F\u5EA6\u4F18\u5148\r
 \r
//\u6DF1\u5EA6\u4F18\u5148\r
const dic = {\r
    0: ' ',\r
    1: '',\r
    2: ['a', 'b', 'c'],\r
    3: ['d', 'e', 'f'],\r
    4: ['g', 'h', 'i'],\r
    5: ['j', 'k', '`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u627E\u6240\u6709\u7684\u89E3 ------ \u641C\u7D22\u7B97\u6CD5 ------ \u6DF1\u5EA6\u4F18\u5148/\u5E7F\u5EA6\u4F18\u5148
 
//\u6DF1\u5EA6\u4F18\u5148
const dic = {
    0: ' ',
    1: '',
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
 
}
 
var letterCombinations = function (digits) {
    const result = []
    let str = ''
    const len = digits.length
    if (len &lt; 1) return []
 
    handle(digits, index = 0, result, str)
 
    return result
};
 
function handle(digits, index, result, str) {
    let self = str // \u4FDD\u5B58\u4E00\u4E2Astr \u7684\u5907\u4EFD
    if (index === digits.length) {
        result.push(str)
        return
    }  //\u9012\u5F52\u7EC8\u6B62\u6761\u4EF6
    const digit = digits[index] //\u904D\u5386digits
    const letters = dic[digit] //\u67E5\u627E\u5B57\u5178
    for (const e of letters) {//\u904D\u5386\u5BF9\u5E94\u7684\u5B57\u6BCD a b c
        str += e
        handle(digits, index + 1, result, str)
        str = self //\u91CD\u7F6Estr
    }
}
 
console.log(letterCombinations('23'));
</code></pre>
`},{index:[],path:"/posts/git\u57FA\u7840\u64CD\u4F5C.html",title:"git \u57FA\u7840\u64CD\u4F5C \u62C9\u53D6 / \u5220\u9664 / \u67E5\u770Bcommit / \u64A4\u9500commit",date:"2021-05-17",fontNum:396,description:`\r
git \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\r
 \r
1. \u5728\u8FDC\u7A0B\u65B0\u5EFA\u5206\u652F\r
 \r
2. git fetch //\u66F4\u65B0\u672C\u5730\u7684\u8FDC\u7A0B\u5206\u652F\r
 \r
3. git branch -r \u67E5\u770B\u8FDC\u7A0B\u5206\u652F\u662F\u5426\u5B58\u5728\r
 \r
4. git checkout -b \u672C\u5730\u5206\u652F \u8FDC\u7A0B\u5206\u652F //\u4F8B\u5B50 git checkout -b bendi origin/bendi   \u4F1A\u81EA\u52A8\u521B\u5EFA\u672C\u5730\u5206\u652F\u5E76\u5173\u8054\u5230\u8FDC\u7A0B\u5206\u652F\r
 \r
git \u5220\u9664\u8FDC\u7A0B\u5206\u652F\r
 \r`,tags:["git"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>git \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F</p>
<ol>
<li>
<p>\u5728\u8FDC\u7A0B\u65B0\u5EFA\u5206\u652F</p>
</li>
<li>
<p>git fetch //\u66F4\u65B0\u672C\u5730\u7684\u8FDC\u7A0B\u5206\u652F</p>
</li>
<li>
<p>git branch -r \u67E5\u770B\u8FDC\u7A0B\u5206\u652F\u662F\u5426\u5B58\u5728</p>
</li>
<li>
<p>git checkout -b \u672C\u5730\u5206\u652F \u8FDC\u7A0B\u5206\u652F //\u4F8B\u5B50 git checkout -b bendi origin/bendi   \u4F1A\u81EA\u52A8\u521B\u5EFA\u672C\u5730\u5206\u652F\u5E76\u5173\u8054\u5230\u8FDC\u7A0B\u5206\u652F</p>
</li>
</ol>
<p>git \u5220\u9664\u8FDC\u7A0B\u5206\u652F</p>
<ol>
<li>git push origin --delete \u8FDC\u7A0B\u5206\u652F\u540D(\u4E0D\u5E26origin)</li>
</ol>
<p>git \u5220\u9664\u672C\u5730\u5206\u652F</p>
<ol>
<li>git branch -D \u672C\u5730\u5206\u652F\u540D</li>
</ol>
<p>\u67E5\u770B\u4EE5\u5F80\u7684commit</p>
<p>git log</p>
<p>\u64A4\u9500\u6700\u4E0A\u5C42\u7684commit
git reset --soft HEAD~</p>
<p>\u64A4\u9500n\u6B21commit
git reset --soft HEAD~n</p>
`},{index:[],path:"/posts/\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879.html",title:"\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879",date:"2021-05-15",fontNum:314,description:`\r
javascript\r
var removeDuplicates = function (nums) {\r
    const dic = {}\r
    for (let i = 0; i < nums.length; i) {\r
        const e = nums[i]\r
        if (!dic[e]) {\r
            dic[e] = 1\r
 `,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var removeDuplicates = function (nums) {
    const dic = {}
    for (let i = 0; i &lt; nums.length; i++) {
        const e = nums[i]
        if (!dic[e]) {
            dic[e] = 1
        } else {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};
</code></pre>
`},{index:[],path:"/posts/\u6392\u5E8F\u53CC\u6307\u9488\u89E3\u51B3\u4E09\u6570\u4E4B\u548C\u95EE\u9898.html",title:"\u6392\u5E8F\u53CC\u6307\u9488\u89E3\u51B3\u4E09\u6570\u4E4B\u548C\u95EE\u9898",date:"2021-05-08",fontNum:899,description:`\r
javascript\r
var threeSum = function (nums) {\r
    const len = nums.length\r
    nums = nums.sort((a, b) => a - b)\r
    if (len < 3) {\r
        return []\r
    }\r
 \r
    const result = new Set()\r
 \r`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var threeSum = function (nums) {
    const len = nums.length
    nums = nums.sort((a, b) =&gt; a - b)
    if (len &lt; 3) {
        return []
    }
 
    const result = new Set()
 
    for (let i = 0; i &lt; len; i++) {
        const item = nums[i]
        if (item &gt; 0) {
            break
        }
        const target = 0 - item
        let left = i + 1
        let right = len - 1
        while (left &lt; right) {
            const sum = nums[left] + nums[right]
 
            if (sum === target) {
                result.add([item, nums[left], nums[right]].toString())
                left++
                right--
            } else if (sum &gt; target) {
                right--
            } else if (sum &lt; target) {
                left++
            }
        }
    }
 
    return Array.from(result).map(item =&gt;
        item.split(',')
    )
};
</code></pre>
`},{index:[],path:"/posts/\u6392\u5E8F\u53CC\u6307\u9488\u6CD5\u6C42\u6700\u63A5\u8FD1\u7684\u4E09\u6570\u548C.html",title:"\u6392\u5E8F\u53CC\u6307\u9488\u6CD5\u6C42\u6700\u63A5\u8FD1\u7684\u4E09\u6570\u548C",date:"2021-05-06",fontNum:1049,description:`\r
javascript\r
var threeSumClosest = function (nums, target) {\r
    const len = nums.length\r
    nums = nums.sort((a, b) => a - b)\r
    if (len < 3) {\r
        return []\r
    }\r
 \r
    let min = Mat`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var threeSumClosest = function (nums, target) {
    const len = nums.length
    nums = nums.sort((a, b) =&gt; a - b)
    if (len &lt; 3) {
        return []
    }
 
    let min = Math.abs(target - (nums[0] + nums[1] + nums[2])) //\u5047\u8BBE\u6700\u5C0F\u5DEE\u503C
    let result = 0
    for (let i = 0; i &lt; len; i++) {
        const item = nums[i]
 
        let left = i + 1
        let right = len - 1
 
        while (left &lt; right) {
            const sum = item + nums[left] + nums[right]//\u6C42\u548C
            const diff = Math.abs(target - sum) //\u6C42\u5DEE\u503C\u7684\u7EDD\u5BF9\u503C
            if (sum &lt; target) {
                if (diff &lt;= min) {
                    min = diff
                    result = sum
                }
                left++
            } else if (sum &gt; target) {
                if (diff &lt;= min) {
                    min = diff
                    result = sum
                }
                right--
            } else if (sum === target) {
                return sum
            }
        }
    }
    return result
};
</code></pre>
`},{index:[],path:"/posts/\u4E09\u6570\u4E4B\u548C\u5D4C\u5957\u5FAA\u73AF\u6C42\u56DB\u6570\u4E4B\u548C.html",title:"\u4E09\u6570\u4E4B\u548C\u5D4C\u5957\u5FAA\u73AF\u6C42\u56DB\u6570\u4E4B\u548C",date:"2021-04-29",fontNum:995,description:`\r
javascript\r
var fourSum = function (nums, target) {\r
    const len = nums.length\r
    nums = nums.sort((a, b) => a - b)\r
    if (len < 4) return []\r
    const result = new Set()\r
 \r
    for (let `,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var fourSum = function (nums, target) {
    const len = nums.length
    nums = nums.sort((a, b) =&gt; a - b)
    if (len &lt; 4) return []
    const result = new Set()
 
    for (let j = 0; j &lt; len; j++) {
        const value = nums[j]
        for (let i = j + 1; i &lt; len; i++) {
            const item = nums[i]
 
            const aim = target - item - value
            let left = i + 1
            let right = len - 1
            while (left &lt; right) {
                const sum = nums[left] + nums[right]
 
                if (sum === aim) {
                    result.add([value, item, nums[left], nums[right]].toString())
                    left++
                    right--
                } else if (sum &gt; aim) {
                    right--
                } else if (sum &lt; aim) {
                    left++
                }
            }
        }
    }
 
    return Array.from(result).map(item =&gt;
        item.split(',')
    )
 
};
</code></pre>
`},{index:[],path:"/posts/\u79FB\u9664\u5143\u7D20.html",title:"\u79FB\u9664\u5143\u7D20",date:"2021-04-29",fontNum:360,description:`\r
javascript\r
const del = function (nums, val) {\r
    const len = nums.length\r
    for (let i = 0; i < len; i) {\r
        if (nums[i] === val) {\r
            nums.splice(i, 1)\r
            return`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const del = function (nums, val) {
    const len = nums.length
    for (let i = 0; i &lt; len; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            return del(nums, val)
        }
    }
}
var removeElement = function (nums, val) {
    del(nums, val)
    // console.log(nums);
    return nums.length
};
</code></pre>
`},{index:[],path:"/posts/element_ui\u642D\u5EFA\u590D\u6742\u8868\u683C.html",title:"element ui \u642D\u5EFA\u590D\u6742\u8868\u683C",date:"2021-04-24",fontNum:5626,description:`![\u57DF\u540D\u914D\u7F6E](/ympz1.png)\r
javascript\r
 <template>\r
  <div>\r
    <el-table\r
      :data="tableData"\r
      :span-method="arraySpanMethod"\r
      style="width: 100%; margin-top: 20px"\r
      :header-cell-`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p><img src="/ympz1.png" alt="\u57DF\u540D\u914D\u7F6E"></p>
<pre><code class="language-javascript"> &lt;template&gt;
  &lt;div&gt;
    &lt;el-table
      :data=&quot;tableData&quot;
      :span-method=&quot;arraySpanMethod&quot;
      style=&quot;width: 100%; margin-top: 20px&quot;
      :header-cell-style=&quot;headerStyle&quot;
    &gt;
      &lt;el-table-column
        prop=&quot;id&quot;
        label=&quot;123&quot;
        ref=&quot;pj&quot;
        colspan=&quot;2&quot;
        align=&quot;center&quot;
      &gt;
      &lt;/el-table-column&gt;
 
      &lt;el-table-column&gt;
        &lt;el-table-column prop=&quot;f1&quot;&gt; &lt;/el-table-column&gt;
        &lt;el-table-column prop=&quot;f2&quot;&gt; &lt;/el-table-column&gt;
      &lt;/el-table-column&gt;
 
      &lt;el-table-column prop=&quot;rrr&quot; label=&quot;444&quot; align=&quot;center&quot;&gt; &lt;/el-table-column&gt;
 
      &lt;el-table-column prop=&quot;amount1&quot; label=&quot;555&quot; align=&quot;center&quot;&gt;
        &lt;el-table-column prop=&quot;amount1&quot; label=&quot;666&quot; align=&quot;center&quot;&gt;
          &lt;el-table-column prop=&quot;amount1&quot; label=&quot;77&quot; align=&quot;center&quot;&gt;
          &lt;/el-table-column&gt;
          &lt;el-table-column prop=&quot;amount1&quot; label=&quot;88&quot; align=&quot;center&quot;&gt;
          &lt;/el-table-column&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column prop=&quot;amount1&quot; label=&quot;99&quot; align=&quot;center&quot;&gt;
          &lt;el-table-column prop=&quot;amount1&quot; label=&quot;1111&quot; align=&quot;center&quot;&gt;
          &lt;/el-table-column&gt;
          &lt;el-table-column prop=&quot;amount1&quot; label=&quot;222&quot; align=&quot;center&quot;&gt;
          &lt;/el-table-column&gt;
        &lt;/el-table-column&gt;
      &lt;/el-table-column&gt;
 
      &lt;el-table-column prop=&quot;amount3&quot; label=&quot;cccc&quot; align=&quot;center&quot;&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;
  &lt;/div&gt;
&lt;/template&gt;
 
  &lt;script&gt;
export default {
  name: &quot;HelloWorld&quot;,
  data() {
    return {
      formData: {},
      tableData: [
        {
          f1: &quot;xxxxxx&quot;,
          id: &quot;qqqqq&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;234&quot;,
          amount2: &quot;3.2&quot;,
          amount3: 10,
        },
        {
          f1: &quot;sssss&quot;,
          id: &quot;&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;165&quot;,
          amount2: &quot;4.43&quot;,
          amount3: 12,
        },
        {
          f1: &quot;dddddddddd&quot;,
          id: &quot;&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;324&quot;,
          amount2: &quot;1.9&quot;,
          amount3: 9,
        },
        {
          f1: &quot;rrrrrrr&quot;,
          f2: &quot;ddddd&quot;,
          id: &quot;&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;621&quot;,
          amount2: &quot;2.2&quot;,
          amount3: 17,
        },
        {
          id: &quot;&quot;,
          f2: &quot;fffffffffff&quot;,
          name: &quot;cccccccccccc&quot;,
          amount1: &quot;539&quot;,
          amount2: &quot;4.1&quot;,
          amount3: 15,
        },
        {
          id: &quot;&quot;,
          f2: &quot;22222222&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;539&quot;,
          amount2: &quot;4.1&quot;,
          amount3: 15,
        },
        {
          id: &quot;rrrrrrr&quot;,
          name: &quot;mmmmmm&quot;,
          amount1: &quot;539&quot;,
          amount2: &quot;4.1&quot;,
          amount3: 15,
        },
        {
          f1: &quot;xxxxxxx&quot;,
          id: &quot;ggggggg&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;539&quot;,
          amount2: &quot;4.1&quot;,
          amount3: 15,
        },
        {
          id: &quot;&quot;,
          f1: &quot;nnnnnnnn&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;539&quot;,
          amount2: &quot;4.1&quot;,
          amount3: 15,
        },
        {
          id: &quot;&quot;,
          f1: &quot;vvvvvvvvvv&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;539&quot;,
          amount2: &quot;4.1&quot;,
          amount3: 15,
        },
        {
          id: &quot;&quot;,
          f1: &quot;ggg&quot;,
          f2: &quot;bbbb&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;539&quot;,
          amount2: &quot;4.1&quot;,
          amount3: 15,
        },
        {
          id: &quot;&quot;,
          f2: &quot;hhhhhh&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;539&quot;,
          amount2: &quot;4.1&quot;,
          amount3: 15,
        },
        {
          id: &quot;&quot;,
          f2: &quot;tttttttt&quot;,
 
          name: &quot;\u738B\u5C0F\u864E&quot;,
          amount1: &quot;539&quot;,
          amount2: &quot;4.1&quot;,
          amount3: 15,
        },
      ],
    };
  },
  methods: {
    headerStyle({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 1 &amp;&amp; columnIndex === 0) {
        return { display: &quot;none&quot; };
      }
 
      if (rowIndex === 1 &amp;&amp; columnIndex === 1) {
        return { display: &quot;none&quot; };
      }
 
      if (rowIndex === 0 &amp;&amp; columnIndex === 1) {
        return { display: &quot;none&quot; };
      }
 
      if (rowIndex === 0 &amp;&amp; columnIndex === 0) {
        this.$nextTick(() =&gt; {
          document
            .getElementsByClassName(column.id)[0]
            .setAttribute(&quot;colSpan&quot;, 3);
        });
      }
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return [6, 1];
        } else if (rowIndex === 6) {
          return [1, 3];
        } else if (rowIndex === 7) {
          return [6, 1];
        } else {
          return [0, 0];
        }
      }
 
      if (columnIndex === 1) {
        if (rowIndex === 0 || rowIndex === 1 || rowIndex === 2) {
          return [1, 2];
        } else if (rowIndex === 3) {
          return [3, 1];
        } else if (rowIndex === 7 || rowIndex === 8 || rowIndex === 9) {
          return [1, 2];
        } else if (rowIndex === 10) {
          return [3, 1];
        } else {
          return [0, 0];
        }
      } else if (columnIndex === 2) {
        if (
          rowIndex === 0 ||
          rowIndex === 1 ||
          rowIndex === 2 ||
          rowIndex === 6 ||
          rowIndex === 7 ||
          rowIndex === 8 ||
          rowIndex === 9
        ) {
          return [0, 0];
        } else {
          return [1, 1];
        }
      }
    },
  },
};
&lt;/script&gt;
</code></pre>
`},{index:[],path:"/posts/\u6700\u957F\u516C\u5171\u524D\u7F00.html",title:"\u6700\u957F\u516C\u5171\u524D\u7F00",date:"2021-04-23",fontNum:527,description:`javascript\r
var longestCommonPrefix = function (strs) {\r
    if (strs.length === 0) return ''\r
 \r
    if (strs.length === 1) return strs[0]\r
 \r
    strs.sort((a, b) => a.length - b.length)\r
    con`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
 
    if (strs.length === 1) return strs[0]
 
    strs.sort((a, b) =&gt; a.length - b.length)
    const min = strs[0]
    const len = min.length
 
    let i = 0, flag = false
    for (i; i &lt; len; i++) {
        for (const e of strs) {
            if (e[i] !== min[i]) {
                flag = true
                break
            }
        }
        if (flag) break
    }
 
 
    return min.slice(0, i)
};
</code></pre>
`},{index:[],path:"/posts/\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570.html",title:"\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570",date:"2021-04-22",fontNum:455,description:`\r
javascript\r
 var romanToInt = function (s) {\r
    const map = {\r
        I: 1,\r
        V: 5,\r
        X: 10,\r
        L: 50,\r
        C: 100,\r
        D: 500,\r
        M: 1000\r
    }\r
    let re`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript"> var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for (let i = 0; i &lt; s.length; i++) {
        let val = map[s[i]]
        if (val &lt; map[s[i + 1]]) {
            val = map[s[i + 1]] - val;
            i++;
        }
        result += val;
    }
    return result
};
&lt;/script&gt;
</code></pre>
`},{index:[],path:"/posts/\u6574\u6570\u8F6C\u7F57\u9A6C\u6570\u5B57.html",title:"\u6574\u6570\u8F6C\u7F57\u9A6C\u6570\u5B57",date:"2021-04-21",fontNum:533,description:`\r
javascript\r
 var intToRoman = function (num) {\r
    if (num > 3999 || num < 1) {\r
        return\r
    }\r
 \r
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]\r
    const roma`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript"> var intToRoman = function (num) {
    if (num &gt; 3999 || num &lt; 1) {
        return
    }
 
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';
    while (num) {
        if (num &gt;= nums[0]) {
            result += roman[0];
            num -= nums[0];
        } else {
            nums.shift();
            roman.shift();
        }
    }
    return result;
 
};
</code></pre>
`},{index:[],path:"/posts/\u53CC\u6307\u9488\u6CD5\u6C42\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668.html",title:"\u53CC\u6307\u9488\u6CD5\u6C42\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668",date:"2021-04-20",fontNum:561,description:`\r
javascript\r
 //\u53CC\u6307\u9488\u6CD5\r
var maxArea = function (height) {\r
    let max = 0\r
    const len = height.length\r
    let left = 0\r
    let right = len - 1\r
 \r
 \r
 \r
    while (true) {\r
        if (Math.mi`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript"> //\u53CC\u6307\u9488\u6CD5
var maxArea = function (height) {
    let max = 0
    const len = height.length
    let left = 0
    let right = len - 1
 
 
 
    while (true) {
        if (Math.min(height[left], height[right]) * (right - left) &gt; max) {
            max = Math.min(height[left], height[right]) * (right - left)
        }
        if (height[left] &lt; height[right]) {
            left++
        } else {
            right--
        }
 
        if (left === right) {
            break
        }
    }
 
 
    return max
 
};
</code></pre>
`},{index:[],path:"/posts/\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D.html",title:"\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D",date:"2021-04-19",fontNum:122,description:`\r
javascript\r
var isMatch = function (s, p) {\r
    const reg = new RegExp(^\${p}$)\r
    return reg.test(s)\r
 \r
};\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var isMatch = function (s, p) {
    const reg = new RegExp(\`^\${p}$\`)
    return reg.test(s)
 
};
</code></pre>
`},{index:[],path:"/posts/\u56DE\u6587\u6570.html",title:"\u56DE\u6587\u6570",date:"2021-04-18",fontNum:192,description:`\r
javascript\r
 var isPalindrome = function (x) {\r
    if (Number(x.toString().split('').reverse().join('')) === x) {\r
        return true\r
    } else {\r
        return false\r
    }\r
};\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript"> var isPalindrome = function (x) {
    if (Number(x.toString().split('').reverse().join('')) === x) {
        return true
    } else {
        return false
    }
};
</code></pre>
`},{index:[],path:"/posts/AOP\u9762\u5411\u5207\u9762\u7F16\u7A0B.html",title:"js AOP(\u9762\u5411\u5207\u9762\u7F16\u7A0B)",date:"2021-04-17",fontNum:977,description:`\r
javascript\r
//AOP(\u9762\u5411\u5207\u9762\u7F16\u7A0B)\r
//\u628A\u4E00\u4E9B\u548C\u6838\u5FC3\u4E1A\u52A1\u903B\u8F91\u6A21\u5757\u65E0\u5173\u7684\u529F\u80FD\u62BD\u79BB\u51FA\u6765\r
//\u4F8B\u5982 \u65E5\u5FD7\u7EDF\u8BA1\uFF0C\u5B89\u5168\u63A7\u5236\uFF0C\u5F02\u5E38\u5904\u7406\u6A21\u5757\r
// \u901A\u5E38\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5C06\u51FD\u6570\u52A8\u6001\u7EC7\u5165\u5230\u53E6\u4E00\u4E2A\u51FD\u6570\u4E2D\r
// \u8FD9\u91CC\u901A\u8FC7\u6269\u5C55Function.prototype\u6765\u5B9E\u73B0\r
 \r
Function.prototype.before = function (beforeFn) {\r
    cons`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//AOP(\u9762\u5411\u5207\u9762\u7F16\u7A0B)
//\u628A\u4E00\u4E9B\u548C\u6838\u5FC3\u4E1A\u52A1\u903B\u8F91\u6A21\u5757\u65E0\u5173\u7684\u529F\u80FD\u62BD\u79BB\u51FA\u6765
//\u4F8B\u5982 \u65E5\u5FD7\u7EDF\u8BA1\uFF0C\u5B89\u5168\u63A7\u5236\uFF0C\u5F02\u5E38\u5904\u7406\u6A21\u5757
// \u901A\u5E38\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5C06\u51FD\u6570\u52A8\u6001\u7EC7\u5165\u5230\u53E6\u4E00\u4E2A\u51FD\u6570\u4E2D
// \u8FD9\u91CC\u901A\u8FC7\u6269\u5C55Function.prototype\u6765\u5B9E\u73B0
 
Function.prototype.before = function (beforeFn) {
    const that = this // \u4FDD\u5B58\u539F\u51FD\u6570\u7684\u5F15\u7528
 
    return function () { // \u8FD4\u56DE\u5305\u542B\u4E86\u539F\u51FD\u6570\u548C\u65B0\u51FD\u6570\u7684\u2018\u4EE3\u7406\u2019\u51FD\u6570
        beforeFn.apply(this) // \u6267\u884C\u65B0\u51FD\u6570\uFF0C\u4FEE\u6B63this
 
        that.apply(this) //\u6267\u884C\u539F\u51FD\u6570
    }
}
 
Function.prototype.after = function (afterFn) {
    const that = this // \u4FDD\u5B58\u539F\u51FD\u6570\u7684\u5F15\u7528
 
    return function () {
        that.apply(this) // \u6267\u884C\u539F\u51FD\u6570\uFF0C\u4FEE\u6B63this
 
        afterFn.apply(this) // \u6267\u884C\u65B0\u51FD\u6570
    }
}
 
let fun = function () {
    console.log(2);
}
 
fun = fun.before(function () {
    console.log(1);
}).after(function () {
    console.log(3);
})
 
fun()
 
// fun = function () {
//   console.log(2);
//}
 
// function() {
//     console.log(1);
//     console.log(2);
// }
 
// function() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
// }
</code></pre>
`},{index:[],path:"/posts/\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6574\u6570.html",title:"\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6574\u6570",date:"2021-04-17",fontNum:659,description:`\r
javascript\r
var myAtoi = function (s) {\r
    let t = s.trim()\r
    let str = ''\r
    s = s.trim()\r
    if (t[0] === '-') {\r
        str = '-'\r
        s = s.slice(1)\r
    }\r
 \r
    if (t[0] === `,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var myAtoi = function (s) {
    let t = s.trim()
    let str = ''
    s = s.trim()
    if (t[0] === '-') {
        str += '-'
        s = s.slice(1)
    }
 
    if (t[0] === '+') {
        s = s.slice(1)
    }
 
    for (const e of s) {
        const t = e.charCodeAt()
        if (t &gt;= 48 &amp;&amp; t &lt;= 57) {
            str += e
        } else {
            break
        }
 
    }
    if (str &gt; Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    }
 
    if (str &lt; Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    }
 
    if (str === '-') {
        return 0
    }
    return Number(str)
};
</code></pre>
`},{index:[],path:"/posts/\u6590\u6CE2\u90A3\u5951_\u4E0D\u540C\u8DEF\u5F84\u95EE\u9898.html",title:"\u6590\u6CE2\u90A3\u5951-\u4E0D\u540C\u8DEF\u5F84\u95EE\u9898",date:"2021-04-17",fontNum:978,description:`\r
javascript\r
// \u66B4\u529B\u9012\u5F52-\u6590\u6CE2\u90A3\u5951\r
function fb(n) {\r
    if (n < 2) return n\r
    return fb(n - 1)  fb(n - 2)\r
}\r
 \r
console.log(fb(2));\r
 \r
//\u52A8\u6001\u89C4\u5212\u6CD5-\u6590\u6CE2\u90A3\u5951\r
function fb(n) {\r
    if (n < 2) return n\r
    c`,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">// \u66B4\u529B\u9012\u5F52-\u6590\u6CE2\u90A3\u5951
function fb(n) {
    if (n &lt; 2) return n
    return fb(n - 1) + fb(n - 2)
}
 
console.log(fb(2));
 
//\u52A8\u6001\u89C4\u5212\u6CD5-\u6590\u6CE2\u90A3\u5951
function fb(n) {
    if (n &lt; 2) return n
    const store = new Array(n).fill(0)
    store[0] = 1
    store[1] = 1
    for (let i = 2; i &lt; n; i++) {
        store[i] = store[i - 1] + store[i - 2]
    }
    return store[n - 1]
}
 
console.log(fb(100));
 
//\u52A8\u6001\u89C4\u5212\u6CD5\u76F8\u5F53\u4E8E\u5BF9 store[100] = store[99]+store[98]......+store[1] \u6C42\u548C
//\u800C\u666E\u901A\u7684\u9012\u5F52\u76F8\u5F53\u4E8E\u5BF91-100\u7684\u6BCF\u4E00\u4E2A\u503C\u90FD\u6267\u884C\u4E86\u4E00\u904D\u4E0A\u8FF0\u7684\u64CD\u4F5C
 
//\u52A8\u6001\u89C4\u5212\u6CD5-\u4E0D\u540C\u8DEF\u5F84\u95EE\u9898
function path(x, y) {
    const store = new Array(x).fill(new Array(y).fill(0))
    store[0][0] = 0
    store[0][1] = 1
    store[1][0] = 1
 
    for (let i = 1; i &lt; x; i++) {
        for (let j = 1; j &lt; y; j++) {
            store[i][j] = store[i - 1][j] + store[i][j - 1]
        }
    }
 
 
    return store[x - 1][y - 1]
}
 
console.log(path(7, 3));
//******\u52A8\u6001\u89C4\u5212\u6CD5\u6838\u5FC3\u601D\u60F3******
//1.\u5EFA\u7ACB\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B
//2.\u7F13\u5B58\u5E76\u590D\u7528\u4EE5\u5F80\u7ED3\u679C
//3.\u6309\u987A\u5E8F\u4ECE\u5C0F\u5F80\u5927\u7B97
</code></pre>
`},{index:[],path:"/posts/\u6574\u6570\u53CD\u8F6C.html",title:"\u6574\u6570\u53CD\u8F6C",date:"2021-04-16",fontNum:401,description:`\r
javascript\r
var reverse = function (x) {\r
    let flag = true\r
    if (x < 0) {\r
        flag = false\r
        x = Math.abs(x)\r
    }\r
    let result = Number(x.toString().split('').reverse().joi`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var reverse = function (x) {
    let flag = true
    if (x &lt; 0) {
        flag = false
        x = Math.abs(x)
    }
    let result = Number(x.toString().split('').reverse().join(''))
    if (result &gt; Math.pow(2, 31) - 1 || result &lt; Math.pow(-2, 31)) {
        return 0
    }
    if (flag) {
        return result
    } else {
        return 0 - result
    }
 
};
</code></pre>
`},{index:[],path:"/posts/Z\u5B57\u5F62\u53D8\u6362.html",title:"Z \u5B57\u5F62\u53D8\u6362",date:"2021-04-15",fontNum:1336,description:`\r
javascript\r
var convert = function (s, numRows) {\r
    //numRows\u884C\r
    if (numRows < 2) {\r
        return s\r
    }\r
    const mid = numRows - 2 //\u4E2D\u95F4\u5217\r
    const len = s.length\r
    //\u6C42\u5217\r
 \r
    i`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var convert = function (s, numRows) {
    //numRows\u884C
    if (numRows &lt; 2) {
        return s
    }
    const mid = numRows - 2 //\u4E2D\u95F4\u5217
    const len = s.length
    //\u6C42\u5217
 
    if (len &lt; 2) {
        return s
    }
    let count = Math.floor(len / (numRows + mid)) * (mid + 1)
 
    // console.log(count, 'count');
    const tmp = len % (numRows + mid)
    // console.log(tmp, 'tmp');
    if (tmp &lt; numRows) {
        count = count + 1
    } else {
        count = count + 1 + (tmp - numRows)
    }
    console.log(count);
    //\u751F\u6210\u4E8C\u7EF4\u6570\u7EC4 numRows\u884C count\u5217
    const store = new Array(numRows).fill('').map(() =&gt; {
        return new Array(count).fill('')
    })
    let j = 0, k = 0, flag = true
    for (let i = 0; i &lt; len; i++) {
        if (j === numRows) {
            flag = false
            j = j - 2
            k++
        }
        if (j === 0) {
            flag = true
        }
        if (flag) {
            store[j][k] = s[i]
            j++
        } else {
            store[j][k] = s[i]
            j--
            k++
        }
 
    }
    const result = []
    for (const e of store) {
        for (const f of e) {
            if (f !== '') {
                result.push(f)
            }
        }
    }
 
 
    return result.join('')
 
 
};
</code></pre>
`},{index:["<h3>\u8C03\u7528\u8005-\u63A5\u6536\u8005(\u6267\u884C\u8005)-\u6267\u884C</h3>"],path:"/posts/\u4F20\u7EDF\u547D\u4EE4\u6A21\u5F0Fjs\u5B9E\u73B0.html",title:"\u4F20\u7EDF\u547D\u4EE4\u6A21\u5F0Fjs\u5B9E\u73B0",date:"2021-04-14",fontNum:1e3,description:`\r
javascript\r
<!DOCTYPE html>\r
<html>\r
 \r
<head></head>\r
 \r
<body>\r
    <button id="execute">\u6253\u5F00</button>\r
    <button id="undo">\u5173\u95ED</button>\r
</body>\r
<script>\r
    //\u63A5\u6536\u8005(\u6267\u884C\u8005)\r
    const TV = {\r
   `,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">&lt;!DOCTYPE html&gt;
&lt;html&gt;
 
&lt;head&gt;&lt;/head&gt;
 
&lt;body&gt;
    &lt;button id=&quot;execute&quot;&gt;\u6253\u5F00&lt;/button&gt;
    &lt;button id=&quot;undo&quot;&gt;\u5173\u95ED&lt;/button&gt;
&lt;/body&gt;
&lt;script&gt;
    //\u63A5\u6536\u8005(\u6267\u884C\u8005)
    const TV = {
        open: function () {
            console.log('\u6253\u5F00\u7535\u89C6\u673A');
        },
        close: function () {
            console.log('\u5173\u95ED\u7535\u89C6\u673A');
        }
    }
    //\u8C03\u7528\u8005
    const OpenTvCommand = function (receiver) {
        this.receiver = receiver
    }
    OpenTvCommand.prototype.execute = function () {
        this.receiver.open()
    }
    OpenTvCommand.prototype.undo = function () {
        this.receiver.close()
    }
    //\u6267\u884C
    const setCommand = function (command) {
        document.getElementById('execute').onclick = function () {
            command.execute()
        }
        document.getElementById('undo').onclick = function () {
            command.undo()
        }
    }
 
    setCommand(new OpenTvCommand(TV))
&lt;/script&gt;
 
&lt;/html&gt;
</code></pre>
<h3>\u8C03\u7528\u8005-\u63A5\u6536\u8005(\u6267\u884C\u8005)-\u6267\u884C</h3>
`},{index:[],path:"/posts/\u6700\u957F\u56DE\u6587\u5B50\u4E32.html",title:"\u6700\u957F\u56DE\u6587\u5B50\u4E32",date:"2021-04-14",fontNum:1410,description:`\r
javascript\r
//\u6700\u957F\u56DE\u6587\u5B50\u4E32\u52A8\u6001\u89C4\u5212\u6CD5\u89E3\u51B3\r
 \r
let longestPalindrome = function (s) {\r
    let len = s.length;\r
    if (len < 2) return s\r
 \r
    //\u8BB0\u5F55\u6700\u957F\u5B50\u4E32\u957F\u5EA6\u548C\u5F00\u59CB\u4F4D\u7F6E\r
    let maxLen = 1;\r
    let begin = 0;\r
 \r
   `,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u6700\u957F\u56DE\u6587\u5B50\u4E32\u52A8\u6001\u89C4\u5212\u6CD5\u89E3\u51B3
 
let longestPalindrome = function (s) {
    let len = s.length;
    if (len &lt; 2) return s
 
    //\u8BB0\u5F55\u6700\u957F\u5B50\u4E32\u957F\u5EA6\u548C\u5F00\u59CB\u4F4D\u7F6E
    let maxLen = 1;
    let begin = 0;
 
    //\u751F\u6210\u4E8C\u7EF4\u6570\u7EC4len x len\u521D\u59CB\u5316\u4E3Anull
    let store = new Array(len).fill(0).map(() =&gt; {
        return new Array(len).fill(0)
    })
 
    //store[i][j]\u4EE3\u8868\uFF1A[i,j]\u533A\u95F4\u7684string\u662F\u5426\u56DE\u6587\uFF0C\u662F1\u54260
 
    // \u5BF9\u89D2\u7EBF\u90E8\u5206\u90FD\u662F\u5355\u4E2A\u5B57\u6BCD \u503C\u7F6E\u4E3A 1
    for (let i = 0; i &lt; len; i++) {
        store[i][i] = 1;
    }
 
 
 
    // \u6C42\u6B21\u5BF9\u89D2\u7EBF dp[i][i+1] \u6838\u5FC3dp[i][j]=dp[i+1][j\u22121]&amp;&amp;(s[i]==s[j])
    for (let j = 1; j &lt; len; j++) {
        for (let k = 0; k &lt; j; k++) {
            if (s[j] != s[k]) {    //s[k]\u7684\u503C\u548Cs[j]\u4E0D\u76F8\u7B49 \u5C31\u7F6E\u4E3A 0 \u8FD9\u79CD\u60C5\u51B5\u4E0B\u80AF\u5B9A\u4E0D\u4F1A\u51FA\u73B0\u56DE\u6587
                store[k][j] = 0;
            } else {
                // \u4E24\u4E2A\u5B57\u7B26\u76F8\u540C\u7684\u60C5\u51B5 \u5373s[j] === s[k] \u4E14j - k &lt; 3\u5FC5\u7136\u4E3A\u56DE\u6587
                if (j - k &lt; 3) {
                    store[k][j] = 1;
                } else {
                    // s[j] === s[k] \u4E24\u7AEF\u503C\u76F8\u7B49\uFF0C\u5176\u5B50\u4E32\u662F\u56DE\u6587\uFF0C\u5219\u5176\u4E5F\u662F\u56DE\u6587
                    store[k][j] = store[k + 1][j - 1]; // \u6839\u636E\u6838\u5FC3 dp[i][j]=dp[i+1][j\u22121] \u7531\u4E8C\u7EF4\u6570\u7EC4\u5DE6\u4E0B\u89D2\u63A8\u5BFC\u53F3\u4E0A\u89D2
                }
            }
 
            if (store[k][j] &amp;&amp; j - k + 1 &gt; maxLen) { //store[k][j]\u4E3A1 \u5E76\u4E14 j - k + 1 &gt; maxLen \u5DEE\u503C\u5927\u4E8EmaxLen
                maxLen = j - k + 1;
                begin = k; //\u5B57\u7B26\u4E32\u5F00\u59CB\u7684\u4F4D\u7F6E
            }
        }
        // console.log(maxLen, begin)
    }
    return s.substring(begin, begin + maxLen);
}
</code></pre>
`},{index:[],path:"/posts/\u6700\u957F\u56DE\u6587\u5B50\u4E32_\u4E2D\u5FC3\u6269\u6563\u6CD5.html",title:"\u6700\u957F\u56DE\u6587\u5B50\u4E32-\u4E2D\u5FC3\u6269\u6563\u6CD5",date:"2021-04-12",fontNum:835,description:`\r
javascript\r
var longestPalindrome = function (s) {\r
 \r
    const strArr = []\r
 \r
    const len = s.length\r
 \r
    if (len < 2) return s\r
 \r
    for (let i = 0; i < len; i) {\r
        let j = 0,`,tags:["\u4E2D\u5FC3\u6269\u6563\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var longestPalindrome = function (s) {
 
    const strArr = []
 
    const len = s.length
 
    if (len &lt; 2) return s
 
    for (let i = 0; i &lt; len; i++) {
        let j = 0, k = 0
 
        while (s[i - j] &amp;&amp; s[i + j] &amp;&amp; s[i - j] === s[i + j]) {
            j++
        }
        strArr.push(s.slice(i - j + 1, i + j))
        j = 0
 
        while (s[i + 1] &amp;&amp; s[i + 1] === s[i] &amp;&amp; s[i - k] &amp;&amp; s[i + 1 + k] &amp;&amp; s[i - k] === s[i + 1 + k]) {
            k++
        }
        strArr.push(s.slice(i - k + 1, i + k + 1))
        k = 0
    }
 
    return strArr.sort((a, b) =&gt; {
        return b.length - a.length
    })[0]
};
 
 
console.log(longestPalindrome('bb'));
console.log(longestPalindrome('bab'));
console.log(longestPalindrome('b'));
console.log(longestPalindrome('baba'));
</code></pre>
`},{index:["<h3>js\u52A8\u6001\u89C4\u5212\u6CD5\u6C42\u6590\u6CE2\u90A3\u5951\u989D\u6570\u5217\uFF0C\u4EE3\u7801\u5982\u4E0A\u3002100\u7684\u6590\u6CE2\u90A3\u5951\u7ED3\u679C354224848179262000000</h3>"],path:"/posts/js \u52A8\u6001\u89C4\u5212\u6CD5.html",title:"js \u52A8\u6001\u89C4\u5212\u6CD5",date:"2021-04-11",fontNum:341,description:`\r
javascript\r
function fb(n) {\r
    if (n < 2) return n\r
    const store = new Array(n).fill(0)\r
    store[0] = 1\r
    store[1] = 1\r
    for (let i = 2; i < n; i) {\r
        store[i] = store[i - `,tags:["\u52A8\u6001\u89C4\u5212"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">function fb(n) {
    if (n &lt; 2) return n
    const store = new Array(n).fill(0)
    store[0] = 1
    store[1] = 1
    for (let i = 2; i &lt; n; i++) {
        store[i] = store[i - 1] + store[i - 2]
    }
    return store[n - 1]
}
 
console.log(fb(100));
</code></pre>
<h3>js\u52A8\u6001\u89C4\u5212\u6CD5\u6C42\u6590\u6CE2\u90A3\u5951\u989D\u6570\u5217\uFF0C\u4EE3\u7801\u5982\u4E0A\u3002100\u7684\u6590\u6CE2\u90A3\u5951\u7ED3\u679C354224848179262000000</h3>
`},{index:[],path:"/posts/node\u901A\u8FC7events.EventEmitter\u6CE8\u518C\u4E8B\u4EF6.html",title:"node\u901A\u8FC7events.EventEmitter\u6CE8\u518C\u4E8B\u4EF6",date:"2021-04-10",fontNum:319,description:`\r
javascript\r
const events = require('events')\r
const eventEmitter = events.EventEmitter\r
class Producer extends eventEmitter {\r
 \r
}\r
 \r
const producer = new Producer();\r
//\u6CE8\u518C\u76D1\u542C\u4E8B\u4EF6\r
producer.on('st`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const events = require('events')
const eventEmitter = events.EventEmitter
class Producer extends eventEmitter {
 
}
 
const producer = new Producer();
//\u6CE8\u518C\u76D1\u542C\u4E8B\u4EF6
producer.on('start', () =&gt; {
    console.log('start game');
    console.log('this:', this);
})
//\u89E6\u53D1\u4E8B\u4EF6
producer.emit('start')
</code></pre>
`},{index:[],path:"/posts/\u4E24\u6570\u4E4B\u548C.html",title:"\u4E24\u6570\u4E4B\u548C",date:"2021-04-10",fontNum:395,description:`\r
javascript\r
var twoSum = function (nums, target) {\r
 \r
    const arr = JSON.parse(JSON.stringify(nums))\r
    const len = nums.length\r
    for (let i = 0; i < len; i) {\r
        let one = arr.sh`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var twoSum = function (nums, target) {
 
    const arr = JSON.parse(JSON.stringify(nums))
    const len = nums.length
    for (let i = 0; i &lt; len; i++) {
        let one = arr.shift()
        if (arr.includes(target - one)) {
            return [i, arr.findIndex(val =&gt; {
                return val === target - one
            }) + i + 1]
        }
    }
 
};
</code></pre>
`},{index:[],path:"/posts/js\u4E2D\u5B50\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\u80FD\u591F\u901A\u8FC7super\u6765\u8C03\u7528\u7236\u7C7B\u7684\u9759\u6001\u65B9\u6CD5.html",title:"js\u4E2D\u5B50\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\u80FD\u591F\u901A\u8FC7super\u6765\u8C03\u7528\u7236\u7C7B\u7684\u9759\u6001\u65B9\u6CD5",date:"2021-04-09",fontNum:273,description:`\r
javascript\r
//js\u4E2D\u5B50\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\u80FD\u591F\u901A\u8FC7super\u6765\u8C03\u7528\u7236\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\r
class Person {\r
    static getName() {\r
        return 'lear'\r
    }\r
}\r
 \r
class Student extends Person {\r
    static getName2() {\r
        return su`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//js\u4E2D\u5B50\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\u80FD\u591F\u901A\u8FC7super\u6765\u8C03\u7528\u7236\u7C7B\u7684\u9759\u6001\u65B9\u6CD5
class Person {
    static getName() {
        return 'lear'
    }
}
 
class Student extends Person {
    static getName2() {
        return super.getName() + ',hi'
    }
}
 
console.log(Student.getName2());
</code></pre>
`},{index:[],path:"/posts/js\u67EF\u91CC\u5316.html",title:"js\u67EF\u91CC\u5316",date:"2021-04-09",fontNum:1291,description:`\r
javascript\r
//js\u67EF\u91CC\u5316\r
//\u90E8\u5206\u6C42\u503C\r
//\u901A\u8FC7\u95ED\u5305\u4FDD\u5B58\u4F20\u5165\u7684\u53C2\u6570\r
//\u5728\u771F\u6B63\u9700\u8981\u6C42\u503C\u7684\u65F6\u5019\uFF0C\u4E4B\u524D\u4F20\u5165\u7684\u6240\u6709\u53C2\u6570\u90FD\u4F1A\u88AB\u4E00\u6B21\u6027\u6C42\u503C\r
 \r
//eg \u8BA1\u7B97\u6BCF\u6708\u5F00\u9500\r
 \r
//\u666E\u901A\u5199\u6CD5\r
// let mothlyCost = 0\r
// const cost = function (money) {\r
//     mothlyCost = money\r
// }\r`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//js\u67EF\u91CC\u5316
//\u90E8\u5206\u6C42\u503C
//\u901A\u8FC7\u95ED\u5305\u4FDD\u5B58\u4F20\u5165\u7684\u53C2\u6570
//\u5728\u771F\u6B63\u9700\u8981\u6C42\u503C\u7684\u65F6\u5019\uFF0C\u4E4B\u524D\u4F20\u5165\u7684\u6240\u6709\u53C2\u6570\u90FD\u4F1A\u88AB\u4E00\u6B21\u6027\u6C42\u503C
 
//eg \u8BA1\u7B97\u6BCF\u6708\u5F00\u9500
 
//\u666E\u901A\u5199\u6CD5
// let mothlyCost = 0
// const cost = function (money) {
//     mothlyCost += money
// }
// \u67EF\u91CC\u5316
// const cost = (function () {
//     const args = []//\u5B58\u653E\u4F20\u5165\u7684\u503C
//     return function () {
//         if (arguments.length === 0) {
//             let money = 0
//             for (let i = 0, l = args.length; i &lt; l; i++) {
//                 money += args[i]
//             }
 
//             return money
//         } else {
//             [].push.apply(args,arguments)
//         }
//     }
// })()
 
// cost(100)
// cost(200)
// cost(300)
 
// console.log(cost());
 
 
const curring = function (fn) {
    const args = []
    return function () {
        if (arguments.length === 0) { //\u4E0D\u4F20\u53C2\u65F6\u8C03\u7528fn
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments) //\u5C06\u53C2\u6570push\u8FDBargs
        }
    }
}
 
const cost = (function () {
    let money = 0
    return function () {
        for (let i = 0, l = arguments.length; i &lt; l; i++) {
            money += arguments[i]
        }
        return money
    }
})()
 
const total = curring(cost)
 
total(100)
total(200)
total(300)
 
console.log(total());
</code></pre>
`},{index:[],path:"/posts/forof\u904D\u5386iterator.html",title:"\u7ED9\u5BF9\u8C61\u90E8\u7F72iterator \u6765\u4F7F\u7528for of\u904D\u5386",date:"2021-04-07",fontNum:601,description:`\r
javascript\r
//\u90E8\u7F72iterator\r
function MyIter(array) {\r
    this.array = array\r
}\r
MyIter.prototype[Symbol.iterator] = function () {\r
    let index = 0\r
    let next = () => {\r
        if (index < th`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//\u90E8\u7F72iterator
function MyIter(array) {
    this.array = array
}
MyIter.prototype[Symbol.iterator] = function () {
    let index = 0
    let next = () =&gt; {
        if (index &lt; this.array.length) {
            return {
                value: this.array[index++],
                done: false
            }
        } else {
            return { value: undefined, done: true }
        }
    }
    return { next }
}
 
const myIter = new MyIter([&quot;a&quot;, &quot;b&quot;])
console.log(myIter); //MyIter { array: [ 'a', 'b' ] }
 
for (let i of myIter) {
    console.log(i);//a,b
}
</code></pre>
`},{index:[],path:"/posts/node\u4F7F\u7528fork\u521B\u5EFA\u5B50\u8FDB\u7A0B.html",title:"node\u4F7F\u7528fork\u521B\u5EFA\u5B50\u8FDB\u7A0B",date:"2021-04-05",fontNum:830,description:`\r
javascript\r
//master.js\r
 \r
const child_process = require('child_process')\r
//\u4F7F\u7528fork\u521B\u5EFA\u5B50\u8FDB\u7A0B  \u5B50\u8FDB\u7A0Bworker.js \u53C2\u6570['args1']\r
const worker = child_process.fork('worker.js', ['args1'])\r
//\u76D1\u542Cexit \u4E8B\u4EF6\r
worker`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">//master.js
 
const child_process = require('child_process')
//\u4F7F\u7528fork\u521B\u5EFA\u5B50\u8FDB\u7A0B  \u5B50\u8FDB\u7A0Bworker.js \u53C2\u6570['args1']
const worker = child_process.fork('worker.js', ['args1'])
//\u76D1\u542Cexit \u4E8B\u4EF6
worker.on('exit', () =&gt; {
    console.log('child progress exit');
})
//\u5411\u5B50\u8FDB\u7A0B\u53D1\u9001
worker.send({ hello: 'child' })
//\u76D1\u542C\u5B50\u8FDB\u7A0B\u53D1\u6765\u7684\u4FE1\u606F
worker.on('message', (msg) =&gt; {
    console.log('from child', msg);
})
 
//**************************************
 
//worker.js
 
//process.argv\u4E3A\u4E00\u4E2A\u6570\u7EC4 0 \u5B58\u653Enode.exe\u7684\u8DEF\u5F84 , 1\u5B58\u653Eworker.js ,2 \u5B58\u653Emaster\u91CCfork\u4F20\u6765\u7684\u53C2\u6570
console.log('process.argv', process.argv);
//\u5B50\u8FDB\u7A0B
const begin = process.argv[2]
 
console.log('i am worker ' + begin);
//\u76D1\u542Cmaster\u4F20\u6765\u7684message
process.on('message', (msg) =&gt; {
    console.log('from parent', msg);
    process.exit();
})
//\u5411master\u53D1\u9001\u4FE1\u606F
process.send({ hello: 'parent' })
</code></pre>
`},{index:[],path:"/posts/vue2\u81EA\u5B9A\u4E49\u4E8B\u4EF6.html",title:"vue2 \u81EA\u5B9A\u4E49\u4E8B\u4EF6",date:"2021-04-03",fontNum:660,description:`\r
javascript\r
<!DOCTYPE html>\r
<html>\r
 \r
<head></head>\r
 \r
<body>\r
    <div id="app">\r
    </div>\r
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\r
    <script type="text/`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">&lt;!DOCTYPE html&gt;
&lt;html&gt;
 
&lt;head&gt;&lt;/head&gt;
 
&lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;
    &lt;/div&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot;&gt;
        const events = new Vue()
        let count = 0
        function logCount() {
            count++
            console.log(\`\u6253\u5370\u4E86-\${count}-\u6B21\`);
        }
        events.$on('test-event', logCount) //\u76D1\u542C\u4E8B\u4EF6
        setInterval(() =&gt; {
            events.$emit('test-event')//\u6BCF\u79D2 \u89E6\u53D1\u4E8B\u4EF6
        }, 1000)
        setTimeout(() =&gt; {
            events.$off('test-event')//\u5341\u79D2\u540E \u79FB\u9664\u4E8B\u4EF6
        }, 10000)
    &lt;/script&gt;
&lt;/body&gt;
 
&lt;/html&gt;
</code></pre>
`},{index:[],path:"/posts/vue2\u81EA\u5B9A\u4E49\u7EC4\u4EF6.html",title:"vue2.0 \u81EA\u5B9A\u4E49\u7EC4\u4EF6",date:"2021-04-01",fontNum:524,description:`\r
javascript\r
\u65B9\u5F0F\u4E00\r
 \r
 \r
<!DOCTYPE html>\r
<html>\r
 \r
<head></head>\r
 \r
<body>\r
    <div id="app">\r
        <custom-button></custom-button>\r
    </div>\r
    <script src="https://cdn.jsdelivr.net/npm`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">\u65B9\u5F0F\u4E00
 
 
&lt;!DOCTYPE html&gt;
&lt;html&gt;
 
&lt;head&gt;&lt;/head&gt;
 
&lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;
        &lt;custom-button&gt;&lt;/custom-button&gt;
    &lt;/div&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot;&gt;
        const CustomButton = {
            template: '&lt;button&gt;\u81EA\u5B9A\u4E49\u6309\u94AE&lt;/button&gt;'
        }
        new Vue({
            el: '#app',
            components: {
                CustomButton
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
 
&lt;/html&gt;
</code></pre>
`},{index:["<h3>width\uFF1A100%</h3>","<h3>width\uFF1Aauto\u662F\u6307\u5B50\u5143\u7D20\u7684content+padding+border+margin\u503C\u7B49\u4E8Eparent\u7684content</h3>"],path:"/posts/css\u5BBD\u5EA6\u533A\u522B.html",title:"width\uFF1A100%\u548Cwidth\uFF1Aauto\u7684\u533A\u522B",date:"2021-03-29",fontNum:120,description:`\r
 width\uFF1A100% \u662F\u6307\u5B50\u5143\u7D20\u7684content\u7684\u5185\u5BB9\u548C\u7236\u5143\u7D20content\u7684\u5185\u5BB9\u4E00\u6837\u5BBD\r
\r
 width\uFF1Aauto\u662F\u6307\u5B50\u5143\u7D20\u7684contentpaddingbordermargin\u503C\u7B49\u4E8Eparent\u7684content`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>width\uFF1A100% \u662F\u6307\u5B50\u5143\u7D20\u7684content\u7684\u5185\u5BB9\u548C\u7236\u5143\u7D20content\u7684\u5185\u5BB9\u4E00\u6837\u5BBD</h3>
<h3>width\uFF1Aauto\u662F\u6307\u5B50\u5143\u7D20\u7684content+padding+border+margin\u503C\u7B49\u4E8Eparent\u7684content</h3>
`},{index:[],path:"/posts/node\u811A\u672C\u4E2D\u7684this\u8FD4\u56DE.html",title:"\u4E3A\u4EC0\u4E48node\u811A\u672C\u4E2D\u7684this\u8FD4\u56DE{}",date:"2021-03-27",fontNum:674,description:`\r
\u5728Node Repl\uFF08\u63A7\u5236\u53F0\uFF0C\u547D\u4EE4\u884C\uFF09\u73AF\u5883\u4E2D\uFF0C\u5168\u5C40\u7684this\u6307\u5411global\u5BF9\u8C61\u3002\r
\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u6307\u5411window\r
var a = 3\r
console.log(global.a) //3\r
\u4F7F\u7528var\u58F0\u660E\u4F1A\u6210\u4E3Aglobal\u7684\u5C5E\u6027\r
\r
\u811A\u672C\u4E2D\uFF08\u6587\u4EF6\u4E2D\uFF09 \u6253\u5370\u5168\u5C40this \u8F93\u51FA{}\r
console.log(this) // {}\r
var a = 3\r
console.log(global`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>\u5728Node Repl\uFF08\u63A7\u5236\u53F0\uFF0C\u547D\u4EE4\u884C\uFF09\u73AF\u5883\u4E2D\uFF0C\u5168\u5C40\u7684this\u6307\u5411global\u5BF9\u8C61\u3002
\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u6307\u5411window
var a = 3
console.log(global.a) //3
\u4F7F\u7528var\u58F0\u660E\u4F1A\u6210\u4E3Aglobal\u7684\u5C5E\u6027</p>
<p>\u811A\u672C\u4E2D\uFF08\u6587\u4EF6\u4E2D\uFF09 \u6253\u5370\u5168\u5C40this \u8F93\u51FA{}
console.log(this) // {}
var a = 3
console.log(global.a)//undefined
Node\u811A\u672C\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u5168\u5C40this\u53C8\u6307\u5411module.exports\u3002</p>
<p>\u603B\u7ED3\uFF1A\u5728Node repl\u73AF\u5883\u4E2D\u63A7\u5236\u53F0\u7684\u5168\u5C40this\u548Cglobal\u53EF\u4EE5\u770B\u4F5C\u662F\u540C\u4E00\u5BF9\u8C61\uFF0C\u800C\u5728\u811A\u672C\u6587\u4EF6\u4E2D\uFF0C\u4E8C\u8005\u5E76\u4E0D\u7B49\u4EF7\u3002</p>
<p>\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u6CA1\u6709\u7528var\u3001let\u6216\u8005const\u4E4B\u7C7B\u7684\u5173\u952E\u5B57\u4FEE\u9970\uFF0C\u90A3\u4E48\u5B83\u5C31\u662F\u5C5E\u4E8E\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C
\u5B9A\u4E49\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0A\u7684\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7global\u5BF9\u8C61\u8BBF\u95EE\u5230\u3002
a = 3
console.log(global.a)//3
\u5728\u4EE3\u7801\u6587\u4EF6\u9876\u5C42\uFF08\u4E0D\u5728\u4EFB\u4F55\u65B9\u6CD5\uFF0C\u5BF9\u8C61\u4E2D\uFF09\u4F7F\u7528var\u3001let\u6216\u8005const\u4FEE\u9970\u7684\u53D8\u91CF\u90FD\u4F4D\u4E8E\u6A21\u5757\u4F5C\u7528\u57DF\u4E2D\uFF0C
\u4E0D\u540C\u6A21\u5757\u4F5C\u7528\u57DF\u4E4B\u95F4\u7684\u4F5C\u7528\u57DF\u662F\u9694\u79BB\u7684\u3002\u6A21\u5757\u4F5C\u7528\u57DF\u4E2D\u7684this\u6307\u5411module.exports
this.a = 3
console.log(module.exports.a)//3</p>
<p>Node Repl\u548C\u811A\u672C\u6587\u4EF6\u6267\u884C\u4F1A\u6709\u4E0D\u540C\u7684\u7ED3\u679C\uFF0C\u8FD9\u662F\u56E0\u4E3ANode\u4F1A\u5C06\u6240\u6709\u7684\u811A\u672C\u6587\u4EF6\u8FDB\u884C\u5305\u88C5
(function(......){undefined
......
})</p>
`},{index:["<h3>\u7981\u7528es-lint</h3>"],path:"/posts/\u7981\u7528es_lint.html",title:"\u7981\u7528es-lint",date:"2021-03-27",fontNum:47,description:`\r
 \u7981\u7528es-lint\r
\r
![\u7981\u7528es-lint](/es-lint.png)\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u7981\u7528es-lint</h3>
<p><img src="/es-lint.png" alt="\u7981\u7528es-lint"></p>
`},{index:[],path:"/posts/\u4E3A\u4EC0\u4E48require\u52A0\u8F7D\u6A21\u5757\u662F\u540C\u6B65\u7684.html",title:"\u4E3A\u4EC0\u4E48require()\u52A0\u8F7D\u6A21\u5757\u662F\u540C\u6B65\u7684",date:"2021-03-26",fontNum:288,description:`\r
\u4E00\u65B9\u9762\uFF0C\u7531\u4E8E\u6A21\u5757\u7684\u4E2A\u6570\u5F80\u5F80\u6709\u9650\uFF0C\u4E14Node\u4F1A\u81EA\u52A8\u7F13\u5B58\u5DF2\u7ECF\u52A0\u8F7D\u7684\u6A21\u5757\uFF0C\r
\u518D\u52A0\u4E0A\u8BBF\u95EE\u7684\u90FD\u662F\u672C\u5730\u6587\u4EF6\uFF0C\u4EA7\u751F\u7684IO\u5F00\u9500\u51E0\u4E4E\u53EF\u4EE5\u5FFD\u7565\u3002\r
\u518D\u6709\uFF0CNode\u7A0B\u5E8F\u8FD0\u884C\u5728\u670D\u52A1\u5668\u7AEF\uFF0C\u5F88\u5C11\u9047\u5230\u9700\u8981\u9891\u7E41\u91CD\u542F\u670D\u52A1\u7684\u60C5\u51B5\uFF0C\r
\u90A3\u4E48\u5C31\u7B97\u5728\u670D\u52A1\u542F\u52A8\u65F6\u5728\u52A0\u8F7D\u4E0A\u82B1\u70B9\u65F6\u95F4\uFF08\u51E0\u79D2\uFF09\u4E5F\u6CA1\u6709\u4EC0\u4E48\u5F71\u54CD\u3002\r
\r
Node\u4F1A\u81EA\u52A8\u7F13\u5B58\u7ECF\u8FC7require\u5F15\u5165\u7684\u6587\u4EF6\uFF0C\r
\r
\u4F7F\u5F97\u4E0B\u6B21\u518D\u5F15\u5165\u4E0D\u9700\u8981\u7ECF\u8FC7\u6587\u4EF6\u7CFB\u7EDF\u800C\u662F\u76F4\u63A5\u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6\u3002\r
\u8FD9\u79CD\u7F13\u5B58\u662F\u57FA\u4E8E`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>\u4E00\u65B9\u9762\uFF0C\u7531\u4E8E\u6A21\u5757\u7684\u4E2A\u6570\u5F80\u5F80\u6709\u9650\uFF0C\u4E14Node\u4F1A\u81EA\u52A8\u7F13\u5B58\u5DF2\u7ECF\u52A0\u8F7D\u7684\u6A21\u5757\uFF0C
\u518D\u52A0\u4E0A\u8BBF\u95EE\u7684\u90FD\u662F\u672C\u5730\u6587\u4EF6\uFF0C\u4EA7\u751F\u7684IO\u5F00\u9500\u51E0\u4E4E\u53EF\u4EE5\u5FFD\u7565\u3002
\u518D\u6709\uFF0CNode\u7A0B\u5E8F\u8FD0\u884C\u5728\u670D\u52A1\u5668\u7AEF\uFF0C\u5F88\u5C11\u9047\u5230\u9700\u8981\u9891\u7E41\u91CD\u542F\u670D\u52A1\u7684\u60C5\u51B5\uFF0C
\u90A3\u4E48\u5C31\u7B97\u5728\u670D\u52A1\u542F\u52A8\u65F6\u5728\u52A0\u8F7D\u4E0A\u82B1\u70B9\u65F6\u95F4\uFF08\u51E0\u79D2\uFF09\u4E5F\u6CA1\u6709\u4EC0\u4E48\u5F71\u54CD\u3002</p>
<p>Node\u4F1A\u81EA\u52A8\u7F13\u5B58\u7ECF\u8FC7require\u5F15\u5165\u7684\u6587\u4EF6\uFF0C</p>
<p>\u4F7F\u5F97\u4E0B\u6B21\u518D\u5F15\u5165\u4E0D\u9700\u8981\u7ECF\u8FC7\u6587\u4EF6\u7CFB\u7EDF\u800C\u662F\u76F4\u63A5\u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6\u3002
\u8FD9\u79CD\u7F13\u5B58\u662F\u57FA\u4E8E\u6587\u4EF6\u8DEF\u5F84\u5B9A\u4F4D\u7684\uFF0C\u8FD9\u8868\u793A\u5373\u4F7F\u6709\u4E24\u4E2A\u5B8C\u5168\u76F8\u540C\u7684\u6587\u4EF6\uFF0C</p>
<p>\u4F46\u5B83\u4EEC\u4F4D\u4E8E\u4E0D\u540C\u7684\u8DEF\u5F84\u4E0B\uFF0C\u4E5F\u4F1A\u5728\u7F13\u5B58\u4E2D\u7EF4\u6301\u4E24\u4EFD\u3002
\u53EF\u4EE5\u901A\u8FC7console.log(require.cache) \u67E5\u770B</p>
`},{index:[],path:"/posts/js\u4E8B\u4EF6\u5FAA\u73AF.html",title:"js\u4E8B\u4EF6\u5FAA\u73AF",date:"2021-03-24",fontNum:2857,description:`\r
1.\u4E8B\u4EF6\u5FAA\u73AFEventLoop\r
\u4E8B\u4EF6\u5FAA\u73AF\u5C31\u662F\u4E00\u4E2A\u7A0B\u5E8F\u542F\u52A8\u671F\u95F4\u7684\u6B7B\u5FAA\u73AF\uFF0CNode\u4EE3\u7801\u867D\u7136\u8FD0\u884C\u5728\u5355\u7EBF\u7A0B\u4E2D\uFF0C\u4F46\u4ECD\u7136\u80FD\u4F9D\u9760\u4E8B\u4EF6\u5FAA\u73AF\u5B9E\u73B0\u9AD8\u5E76\u53D1\u3002\r
\r
\u4F8B\u5B50\uFF1A\u4EE5Ajax\u8BF7\u6C42\u4E3A\u4F8B\uFF0C\u5F53JavaScript\u6267\u884C\u5230\u5BF9\u5E94\u7684\u4EE3\u7801\u65F6\uFF0C\u5C31\u4E3A\u8FD9\u53E5\u4EE3\u7801\u6CE8\u518C\u4E86\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u5728\u53D1\u51FA\u8BF7\u6C42\u540E\u8BE5\u8BED\u53E5\u5C31\u6267\u884C\u5B8C\u6BD5\u4E86\uFF0C\u540E\u7EED\u7684\u64CD\u4F5C\u4F1A\u4EA4\u7ED9\u56DE\u8C03\u51FD\u6570\u6765\u5904\u7406\u3002\u6B64\u65F6\uFF0C\u6D4F\u89C8\u5668\u80CC\u540E\u7684\u5FAA\u73AF\u6B63\u5728\u4E0D\u65AD\u904D\u5386\u4E8B\u4EF6\u961F\u5217\uFF0C\u5728Ajax\u64CD\u4F5C\u5B8C\u6210\u4E4B\u524D\uFF0C\u4E8B\u4EF6\u961F\u5217\u91CC\u8FD8\u662F\u7A7A\u7684\uFF08\u5E76\u4E0D`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>1.\u4E8B\u4EF6\u5FAA\u73AFEventLoop
\u4E8B\u4EF6\u5FAA\u73AF\u5C31\u662F\u4E00\u4E2A\u7A0B\u5E8F\u542F\u52A8\u671F\u95F4\u7684\u6B7B\u5FAA\u73AF\uFF0CNode\u4EE3\u7801\u867D\u7136\u8FD0\u884C\u5728\u5355\u7EBF\u7A0B\u4E2D\uFF0C\u4F46\u4ECD\u7136\u80FD\u4F9D\u9760\u4E8B\u4EF6\u5FAA\u73AF\u5B9E\u73B0\u9AD8\u5E76\u53D1\u3002</p>
<p>\u4F8B\u5B50\uFF1A\u4EE5Ajax\u8BF7\u6C42\u4E3A\u4F8B\uFF0C\u5F53JavaScript\u6267\u884C\u5230\u5BF9\u5E94\u7684\u4EE3\u7801\u65F6\uFF0C\u5C31\u4E3A\u8FD9\u53E5\u4EE3\u7801\u6CE8\u518C\u4E86\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u5728\u53D1\u51FA\u8BF7\u6C42\u540E\u8BE5\u8BED\u53E5\u5C31\u6267\u884C\u5B8C\u6BD5\u4E86\uFF0C\u540E\u7EED\u7684\u64CD\u4F5C\u4F1A\u4EA4\u7ED9\u56DE\u8C03\u51FD\u6570\u6765\u5904\u7406\u3002\u6B64\u65F6\uFF0C\u6D4F\u89C8\u5668\u80CC\u540E\u7684\u5FAA\u73AF\u6B63\u5728\u4E0D\u65AD\u904D\u5386\u4E8B\u4EF6\u961F\u5217\uFF0C\u5728Ajax\u64CD\u4F5C\u5B8C\u6210\u4E4B\u524D\uFF0C\u4E8B\u4EF6\u961F\u5217\u91CC\u8FD8\u662F\u7A7A\u7684\uFF08\u5E76\u4E0D\u662F\u53D1\u51FA\u8BF7\u6C42\u8FD9\u4E00\u52A8\u4F5C\u88AB\u52A0\u5165\u4E8B\u4EF6\u961F\u5217\uFF0C\u800C\u662F\u8BF7\u6C42\u5B8C\u6210\u8FD9\u4E00\u4E8B\u4EF6\u624D\u4F1A\u52A0\u5165\u961F\u5217\uFF09\u3002\u5982\u679CAjax\u64CD\u4F5C\u5B8C\u6210\u4E86\uFF0C\u8FD9\u4E2A\u961F\u5217\u4E2D\u5C31\u4F1A\u589E\u52A0\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u968F\u540E\u88AB\u5FAA\u73AF\u904D\u5386\u5230\uFF0C\u5982\u679C\u8FD9\u4E2A\u4E8B\u4EF6\u7ED1\u5B9A\u4E86\u4E00\u4E2A\u56DE\u8C03\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5FAA\u73AF\u5C31\u4F1A\u53BB\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002</p>
<p>1.1node\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF
\u4E8B\u4EF6\u5FAA\u73AF\u540C\u6837\u8FD0\u884C\u5728\u5355\u7EBF\u7A0B\u73AF\u5883\u4E0B\uFF0CJavaScript\u7684\u4E8B\u4EF6\u5FAA\u73AF\u662F\u4F9D\u9760\u6D4F\u89C8\u5668\u5B9E\u73B0\u7684\uFF0C\u800CNode\u4F5C\u4E3A\u53E6\u4E00\u79CD\u8FD0\u884C\u65F6\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u7531\u5E95\u5C42\u7684libuv\u5B9E\u73B0\u3002</p>
<p><img src="/sjxh1.png" alt="\u4E8B\u4EF6\u5FAA\u73AF"></p>
<p>\u4E8B\u4EF6\u5FAA\u73AF\u5206\u62106\u4E2A\u4E0D\u540C\u7684\u9636\u6BB5\uFF1A</p>
<p>1.1.1 Timers\uFF1A\u8FD9\u4E2A\u9636\u6BB5\u4E3B\u8981\u7528\u6765\u5904\u7406\u5B9A\u65F6\u5668\u76F8\u5173\u7684\u56DE\u8C03\uFF0C\u5F53\u4E00\u4E2A\u5B9A\u65F6\u5668\u8D85\u65F6\u540E\uFF0C\u4E00\u4E2A\u4E8B\u4EF6\u5C31\u4F1A\u52A0\u5165\u5230\u961F\u5217\u4E2D\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u4F1A\u8DF3\u8F6C\u81F3\u8FD9\u4E2A\u9636\u6BB5\u4F1A\u6267\u884C\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570\u3002\u5B9A\u65F6\u5668\u7684\u56DE\u8C03\u4F1A\u5728\u89E6\u53D1\u540E\u5C3D\u53EF\u80FD\u65E9\u5730\u88AB\u8C03\u7528\uFF0C\u8FD9\u8868\u793A\u5B9E\u9645\u7684\u5EF6\u65F6\u53EF\u80FD\u4F1A\u6BD4\u5B9A\u65F6\u5668\u89C4\u5B9A\u7684\u65F6\u95F4\u8981\u957F\u3002\u5982\u679C\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u6B64\u65F6\u6B63\u5728\u6267\u884C\u4E00\u4E2A\u6BD4\u8F83\u8017\u65F6\u7684\u56DE\u8C03\uFF0C\u6216\u8005\u662F\u5904\u7406\u4E00\u4E2A\u6BD4\u8F83\u8017\u65F6\u7684\u5FAA\u73AF\uFF0C\u90A3\u4E48\u5B9A\u65F6\u5668\u7684\u56DE\u8C03\u53EA\u80FD\u7B49\u5F53\u524D\u56DE\u8C03\u6267\u884C\u7ED3\u675F\u4E86\u624D\u4F1A\u88AB\u6267\u884C\uFF0C\u5373\u88AB\u963B\u585E\u3002\u4E8B\u5B9E\u4E0A\uFF0Ctimers\u9636\u6BB5\u7684\u6267\u884C\u53D7\u5230poll\u9636\u6BB5\u63A7\u5236\u3002</p>
<p>1.1.2 I/O callbacks\uFF1A\u5927\u591A\u6570\u7684\u56DE\u8C03\u65B9\u6CD5\u5728\u8FD9\u4E2A\u9636\u6BB5\u6267\u884C\uFF0C\u9664\u4E86timers\u3001 close\u548CsetImmediate\u4E8B\u4EF6\u7684\u56DE\u8C03\u3002\u4E8B\u5B9E\u4E0A\u4ECE\u6E90\u7801\u6765\u770B\uFF0C\u8BE5\u9636\u6BB5\u53EA\u662F\u7528\u6765\u6267\u884Cpending callback\uFF0C\u4F8B\u5982TCP \u7684 error\u3002\u800C\u4E00\u4E9B\u5E38\u89C1\u7684\u56DE\u8C03\uFF0C\u4F8B\u5982fs.readFile\u7684\u56DE\u8C03\u662F\u653E\u5728poll\u9636\u6BB5\u6765\u6267\u884C\u7684\u3002</p>
<p>1.1.3 idle, prepare\uFF1A\u4EC5\u4EC5\u5728\u5185\u90E8\u4F7F\u7528\u3002</p>
<p>1.1.4 Poll\uFF1A\u8F6E\u8BE2\uFF0C\u4E0D\u65AD\u68C0\u67E5\u6709\u6CA1\u6709\u65B0\u7684IO\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u53EF\u80FD\u4F1A\u5728\u8FD9\u91CC\u963B\u585E\u3002poll\u9636\u6BB5\u7684\u4E3B\u8981\u4EFB\u52A1\u662F\u7B49\u5F85\u65B0\u7684\u4E8B\u4EF6\u51FA\u73B0\uFF08\u8BE5\u9636\u6BB5\u4F7F\u7528epoll\u6765\u83B7\u53D6\u65B0\u7684\u4E8B\u4EF6\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u53EF\u80FD\u4F1A\u5728\u6B64\u963B\u585E\u3002Poll\u9636\u6BB5\u4E3B\u8981\u6709\u4E24\u4E2A\u6B65\u9AA4\u5982\u4E0B\uFF1A\uFF081\uFF09\u5982\u679C\u6709\u5230\u671F\u7684\u5B9A\u65F6\u5668\uFF0C\u90A3\u4E48\u5C31\u6267\u884C\u5B9A\u65F6\u5668\u7684\u56DE\u8C03\u65B9\u6CD5\u3002\uFF082\uFF09\u5982\u679C\u8FD9\u65F6\u6CA1\u6709\u8981\u5904\u7406\u7684\u5B9A\u65F6\u5668\u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u5219\u4F1A\u8FDB\u884C\u4E0B\u9762\u7684\u5224\u65AD\uFF1A\uFF081\uFF09\u5982\u679Cpoll\u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u4E8B\u4EF6\u5FAA\u73AF\u4F1A\u6309\u7167\u987A\u5E8F\u904D\u5386\u6267\u884C\u961F\u5217\u4E2D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u540C\u6B65\u7684\u3002\uFF082\uFF09\u5982\u679Cpoll\u961F\u5217\u4E3A\u7A7A\uFF0C\u4F1A\u63A5\u7740\u8FDB\u884C\u5982\u4E0B\u5224\u65AD\uFF1A\u5982\u679C\u5F53\u524D\u4EE3\u7801\u5B9A\u4E49\u4E86setImmediate\u65B9\u6CD5\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u4F1A\u79BB\u5F00poll\u9636\u6BB5\uFF0C\u7136\u540E\u8FDB\u5165check\u9636\u6BB5\u53BB\u6267\u884CsetImmediate\u65B9\u6CD5\u5B9A\u4E49\u7684\u56DE\u8C03\u65B9\u6CD5\u3002\u5982\u679C\u5F53\u524D\u4EE3\u7801\u6CA1\u6709\u5B9A\u4E49setImmediate\u65B9\u6CD5\uFF0C\u90A3\u4E48\u4E8B\u4EF6\u5FAA\u73AF\u53EF\u80FD\u4F1A\u8FDB\u5165\u7B49\u5F85\u72B6\u6001\uFF0C\u5E76\u7B49\u5F85\u65B0\u7684\u4E8B\u4EF6\u51FA\u73B0\uFF0C\u8FD9\u4E5F\u662F\u8BE5\u9636\u6BB5\u4E3A\u4EC0\u4E48\u4F1A\u88AB\u547D\u540D\u4E3Apoll\uFF08\u8F6E\u8BE2\uFF09\u7684\u539F\u56E0\u3002\u6B64\u5916\uFF0C\u8FD8\u4F1A\u4E0D\u65AD\u68C0\u67E5\u662F\u5426\u6709\u76F8\u5173\u7684\u5B9A\u65F6\u5668\u8D85\u65F6\uFF0C\u5982\u679C\u6709\uFF0C\u5C31\u4F1A\u8DF3\u8F6C\u5230timers\u9636\u6BB5\uFF0C\u7136\u540E\u6267\u884C\u5BF9\u5E94\u7684\u56DE\u8C03\u3002</p>
<p>1.1.5 Check\uFF1A\u5904\u7406setImmediate()\u4E8B\u4EF6\u7684\u56DE\u8C03\u3002setImmediate\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u5B9A\u65F6\u5668\u65B9\u6CD5\uFF0C\u5B83\u5360\u636E\u4E86\u4E8B\u4EF6\u5FAA\u73AF\u7684\u4E00\u4E2A\u9636\u6BB5\uFF0C\u6574\u4E2Acheck\u9636\u6BB5\u5C31\u662F\u4E3AsetImmediate\u65B9\u6CD5\u800C\u8BBE\u7F6E\u7684\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5F53\u4E8B\u4EF6\u5FAA\u73AF\u5230\u8FBEpoll\u9636\u6BB5\u540E\uFF0C\u5C31\u4F1A\u68C0\u67E5\u5F53\u524D\u4EE3\u7801\u662F\u5426\u8C03\u7528\u4E86setImmediate\uFF0C\u4F46\u5982\u679C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u662F\u88ABsetImmediate\u65B9\u6CD5\u8C03\u7528\u7684\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u5C31\u4F1A\u8DF3\u51FApoll\u9636\u6BB5\u8FDB\u800C\u8FDB\u5165check\u9636\u6BB5\u3002</p>
<p>1.1.6 close callbacks\uFF1A\u5904\u7406\u4E00\u4E9Bclose\u76F8\u5173\u7684\u4E8B\u4EF6\uFF0C\u4F8B\u5982socket.on('close', ...)\u3002\u5982\u679C\u4E00\u4E2Asocket\u6216\u8005\u4E00\u4E2A\u53E5\u67C4\u88AB\u5173\u95ED\uFF0C\u90A3\u4E48\u5C31\u4F1A\u4EA7\u751F\u4E00\u4E2Aclose\u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u4F1A\u88AB\u52A0\u5165\u5230\u5BF9\u5E94\u7684\u961F\u5217\u4E2D\u3002close\u9636\u6BB5\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u672C\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F\uFF0C\u5FAA\u73AF\u8FDB\u5165\u5230\u4E0B\u4E00\u8F6E\u3002</p>
<p>\u6CE8\u610F\uFF1A\u8FD9\u4E9B\u65B9\u6CD5\u672C\u8D28\u4E0A\u662F\u987A\u5E8F\u8C03\u7528\uFF0C\u7528\u4EE3\u7801\u63CF\u8FF0\u4E00\u4E0B\u5927\u7EA6\u5C31\u662F\u8FD9\u79CD\u7ED3\u6784\uFF1A</p>
<p><img src="/sjxh2.png" alt="\u4E8B\u4EF6\u5FAA\u73AF"></p>
<p>\u5047\u8BBE\u4E8B\u4EF6\u5FAA\u73AF\u73B0\u5728\u8FDB\u5165\u4E86\u67D0\u4E2A\u9636\u6BB5\uFF08\u5373\u5F00\u59CB\u6267\u884C\u4E0A\u9762\u5176\u4E2D\u4E00\u4E2A\u65B9\u6CD5\uFF09\uFF0C\u5373\u4F7F\u5728\u8FD9\u671F\u95F4\u6709\u5176\u4ED6\u961F\u5217\u4E2D\u7684\u4E8B\u4EF6\u5C31\u7EEA\uFF0C\u4E5F\u4F1A\u5148\u5C06\u5F53\u524D\u9636\u6BB5\u961F\u5217\u91CC\u7684\u5168\u90E8\u56DE\u8C03\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u518D\u8FDB\u5165\u5230\u4E0B\u4E2A\u9636\u6BB5\u3002</p>
<p>1.2 process.nextTick
process.nextTick\u5C31\u662F\u5B9A\u4E49\u51FA\u4E00\u4E2A\u5F02\u6B65\u52A8\u4F5C\uFF0C\u5E76\u4E14\u8BA9\u8FD9\u4E2A\u52A8\u4F5C\u5728\u4E8B\u4EF6\u5FAA\u73AF\u5F53\u524D\u9636\u6BB5\u7ED3\u675F\u540E\u6267\u884C\u3002</p>
<p>process.nextTick\u5E76\u4E0D\u662F\u4E8B\u4EF6\u5FAA\u73AF\u7684\u4E00\u90E8\u5206\uFF0C\u4F46\u5B83\u7684\u56DE\u8C03\u65B9\u6CD5\u4E5F\u662F\u7531\u4E8B\u4EF6\u5FAA\u73AF\u8C03\u7528\u7684\uFF0C\u8BE5\u65B9\u6CD5\u5B9A\u4E49\u7684\u56DE\u8C03\u65B9\u6CD5\u4F1A\u88AB\u52A0\u5165\u5230\u540D\u4E3AnextTickQueue\u7684\u961F\u5217\u4E2D\u3002</p>
<p>\u5728\u4E8B\u4EF6\u5FAA\u73AF\u7684\u4EFB\u4F55\u9636\u6BB5\uFF0C\u5982\u679CnextTickQueue\u4E0D\u4E3A\u7A7A\uFF0C\u90FD\u4F1A\u5728\u5F53\u524D\u9636\u6BB5\u64CD\u4F5C\u7ED3\u675F\u540E\u4F18\u5148\u6267\u884CnextTickQueue\u4E2D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5F53nextTickQueue\u4E2D\u7684\u56DE\u8C03\u65B9\u6CD5\u88AB\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u624D\u4F1A\u7EE7\u7EED\u5411\u4E0B\u6267\u884C\u3002</p>
<p>Node\u9650\u5236\u4E86nextTickQueue\u7684\u5927\u5C0F\uFF0C\u5982\u679C\u9012\u5F52\u8C03\u7528\u4E86process.nextTick\uFF0C\u90A3\u4E48\u5F53nextTickQueue\u8FBE\u5230\u6700\u5927\u9650\u5236\u540E\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002</p>
<p>nextTick\u5B9A\u4E49\u7684\u56DE\u8C03\u4E5F\u662F\u7531\u4E8B\u4EF6\u5FAA\u73AF\u6267\u884C\u7684\uFF0C\u5982\u679CnextTick\u7684\u56DE\u8C03\u65B9\u6CD5\u4E2D\u51FA\u73B0\u4E86\u963B\u585E\u64CD\u4F5C\uFF0C\u540E\u9762\u7684\u8981\u6267\u884C\u7684\u56DE\u8C03\u540C\u6837\u4F1A\u88AB\u963B\u585E\u3002</p>
<p>setImmediate\u65B9\u6CD5\u4E0D\u5C5E\u4E8EECMAScript\u6807\u51C6\uFF0C\u800C\u662FNode\u63D0\u51FA\u7684\u65B0\u65B9\u6CD5\u3002</p>
<p>\u5B83\u540C\u6837\u5C06\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u52A0\u5165\u5230\u4E8B\u4EF6\u961F\u5217\u4E2D\uFF0C\u4E0D\u540C\u4E8EsetTimeout\u548CsetInterval\uFF0CsetImmediate\u5E76\u4E0D\u63A5\u53D7\u4E00\u4E2A\u65F6\u95F4\u4F5C\u4E3A\u53C2\u6570\u3002</p>
<p>setImmediate\u7684\u4E8B\u4EF6\u4F1A\u5728\u5F53\u524D\u4E8B\u4EF6\u5FAA\u73AF\u7684\u7ED3\u5C3E\u89E6\u53D1\uFF0C\u5BF9\u5E94\u7684\u56DE\u8C03\u65B9\u6CD5\u4F1A\u5728\u5F53\u524D\u4E8B\u4EF6\u5FAA\u73AF\u672B\u5C3E\uFF08check\u9636\u6BB5\uFF09\u6267\u884C\u3002</p>
<p>setImmediate\u65B9\u6CD5\u548Cprocess.nextTick\u65B9\u6CD5\u5F88\u76F8\u4F3C\uFF0C\u4E8C\u8005\u7ECF\u5E38\u88AB\u62FF\u6765\u653E\u5728\u4E00\u8D77\u6BD4\u8F83\uFF0C\u7531\u4E8Eprocess.nextTick\u4F1A\u5728\u5F53\u524D\u64CD\u4F5C\u5B8C\u6210\u540E\u7ACB\u523B\u6267\u884C\uFF0C\u56E0\u6B64\u603B\u4F1A\u5728setImmediate\u4E4B\u524D\u6267\u884C\u3002</p>
<p>\u6B64\u5916\uFF0C\u5F53\u6709\u9012\u5F52\u7684\u5F02\u6B65\u64CD\u4F5C\u65F6\u53EA\u80FD\u4F7F\u7528setImmediate\uFF0C\u4E0D\u80FD\u4F7F\u7528process.nextTick\uFF0C\u4F46\u53EF\u4EE5\u4F7F\u7528setImmediate\u56E0\u4E3AsetImmediate\u4E0D\u4F1A\u751F\u6210call stack\u3002</p>
<p>setImmediate\u65B9\u6CD5\u4F1A\u5728poll\u9636\u6BB5\u7ED3\u675F\u540E\u6267\u884C\uFF0C\u800CsetTimeout\u4F1A\u5728\u89C4\u5B9A\u7684\u65F6\u95F4\u5230\u671F\u540E\u6267\u884C\uFF0C\u5F53\u4EE3\u7801\u4E2D\u540C\u65F6\u5B58\u5728\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u65F6\uFF0C\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F\u4E0D\u662F\u56FA\u5B9A\u7684\u3002</p>
<p>\u4F46\u5982\u679C\u5C06\u4E8C\u8005\u653E\u5728\u4E00\u4E2AIO\u64CD\u4F5C\u7684\u56DE\u8C03\u4E2D\uFF0C\u5219\u6C38\u8FDC\u662FsetImmediate\u5148\u6267\u884C\uFF0C\u8FD9\u662F\u56E0\u4E3AreadFile\u7684\u56DE\u8C03\u6267\u884C\u65F6\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u4F4D\u4E8Epoll\u9636\u6BB5\uFF0C\u56E0\u6B64\u4E8B\u4EF6\u5FAA\u73AF\u4F1A\u5148\u8FDB\u5165check\u9636\u6BB5\u6267\u884CsetImmediate\u7684\u56DE\u8C03\uFF0C\u7136\u540E\u518D\u8FDB\u5165timers\u9636\u6BB5\u6267\u884CsetTimeout\u7684\u56DE\u8C03\u3002</p>
<p>--\u300A\u65B0\u65F6\u671F\u7684node.js\u5165\u95E8\u300B</p>
`},{index:[],path:"/posts/node\u540C\u6B65\u5F02\u6B65\u963B\u585E\u975E\u963B\u585E.html",title:"node\u7684\u540C\u6B65/\u5F02\u6B65/\u963B\u585E/\u975E\u963B\u585E",date:"2021-03-24",fontNum:2741,description:`\r
1.node \u662F\u4EC0\u4E48\r
\r
node\u662FJavaScript\u7684\u4E00\u4E2A\u8FD0\u884C\u73AF\u5883\r
\r
node\u5E95\u5C42\u4F7F\u7528c\u5B9E\u73B0\r
\r
\u8BED\u6CD5\u9075\u5FAAECMAScript\r
\r
node\u4E2D\u4F8B\u5982fs\u6A21\u5757\u548CBuffer\u662F\u5BF9ECMAScript\u7684\u6269\u5C55\r
\r
 \r
\r
2.node\u5185\u90E8\u673A\u5236\r
\r
\u5728cpu\u5B8C\u6210\u4EFB\u52A1\u4E4B\u524Dcpu\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4E0D\u4F1A\u6682\u505C\u6216\u8005\u505C\u6B62\u6267\u884C\r
\r
cpu\u5982\u4F55\u6267\u884C\u548C\u540C\u6B65\u6216\u662F\u5F02\u6B65\uFF0C\u963B\u585E\u6216\u662F\u975E\u963B\u585E\u90FD\u662F\u6CA1\u6709\u5FC5\u7136\u5173\u7CFB\r
\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<p>1.node \u662F\u4EC0\u4E48</p>
<p>node\u662FJavaScript\u7684\u4E00\u4E2A\u8FD0\u884C\u73AF\u5883</p>
<p>node\u5E95\u5C42\u4F7F\u7528c++\u5B9E\u73B0</p>
<p>\u8BED\u6CD5\u9075\u5FAAECMAScript</p>
<p>node\u4E2D\u4F8B\u5982fs\u6A21\u5757\u548CBuffer\u662F\u5BF9ECMAScript\u7684\u6269\u5C55</p>
<p>2.node\u5185\u90E8\u673A\u5236</p>
<p>\u5728cpu\u5B8C\u6210\u4EFB\u52A1\u4E4B\u524Dcpu\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4E0D\u4F1A\u6682\u505C\u6216\u8005\u505C\u6B62\u6267\u884C</p>
<p>cpu\u5982\u4F55\u6267\u884C\u548C\u540C\u6B65\u6216\u662F\u5F02\u6B65\uFF0C\u963B\u585E\u6216\u662F\u975E\u963B\u585E\u90FD\u662F\u6CA1\u6709\u5FC5\u7136\u5173\u7CFB</p>
<p>\u64CD\u4F5C\u7CFB\u7EDF\u59CB\u7EC8\u4FDD\u8BC1cpu\u5904\u5728\u8FD0\u884C\u72B6\u6001\uFF0C\u662F\u901A\u8FC7\u8C03\u5EA6\u6765\u5B9E\u73B0\u7684\uFF0C</p>
<p>\u5177\u4F53\u4E00\u70B9\u5C31\u662F\u901A\u8FC7\u5728\u4E0D\u540C\u7684\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u95F4\u5207\u6362\u5B9E\u73B0\u7684</p>
<p>3.\u56DE\u8C03\u662F\u4EC0\u4E48</p>
<p>\u56DE\u8C03\u503C\u901A\u8FC7\u51FD\u6570\u53C2\u6570\u7684\u53C2\u6570\u4F20\u9012\u5230\u5176\u4ED6\u4EE3\u7801\uFF0C\u67D0\u6BB5\u53EF\u6267\u884C\u4EE3\u7801\u7684\u5F15\u7528</p>
<p>(\u7B80\u5355\u8BF4\u5C31\u662F\u5C06\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u53E6\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E14\u4F5C\u4E3A\u53C2\u6570\u7684\u51FD\u6570\u53EF\u4EE5\u88AB\u6267\u884C)</p>
<p>\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u9AD8\u9636\u51FD\u6570</p>
<p>\u9AD8\u9636\u51FD\u6570: (1)\u63A5\u53D7\u4E00\u4E2A\u6216\u591A\u4E2A\u51FD\u6570\u4F5C\u4E3A\u8F93\u5165(2)\u8F93\u51FA\u4E00\u4E2A\u51FD\u6570</p>
<p>\u4E3B\u7A0B\u5E8F\u8C03\u7528-&gt;\u5E95\u5C42\u8C03\u7528\u8C03\u7528-&gt;\u56DE\u8C03\u51FD\u6570</p>
<p>\u56DE\u8C03\u65B9\u6CD5\u548C\u4E3B\u7EBF\u7A0B\u5904\u4E8E\u540C\u4E00\u5C42\u7EA7</p>
<p>***\u56DE\u8C03\u51FD\u6570\u8C03\u7528\u65E2\u53EF\u4EE5\u662F\u540C\u6B65\u7684\u4F8B\u5982map\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F02\u6B65\u7684\u4F8B\u5982setTimeout\u4E2D\u7684\u5F02\u6B65\u56DE\u8C03</p>
<p>\u5355\u7EBF\u7A0B\u8BED\u8A00\u4F8B\u5982php\u5728\u5B8C\u6210i/o\u524D\u4F1A\u963B\u585E</p>
<p>\u800Cnode\u9047\u5230i/o \u64CD\u4F5C\u540E\u4F1A\u53D1\u8D77\u4E00\u4E2A\u8C03\u7528\u7136\u540E\u7EE7\u7EED\u5411\u4E0B\u6267\u884C</p>
<p>\u7B49\u5F85i/o\u64CD\u505A\u5B8C\u6210\u540E\u518D\u6267\u884C\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5373\u5F02\u6B65</p>
<p>\u867D\u7136\u5728\u5355\u7EBF\u7A0B\u7684\u60C5\u51B5\u4E0B\u4F9D\u9760\u5F02\u6B65+\u56DE\u8C03\u7684\u65B9\u5F0F\uFF0C\u4E5F\u80FD\u5B9E\u73B0\u5BF9\u9AD8\u5E76\u53D1\u7684\u652F\u6301</p>
<p>4.\u540C\u6B65/\u5F02\u6B65/\u963B\u585E/\u975E\u963B\u585E</p>
<p>\u540C\u6B65\u548C\u5F02\u6B65\u63CF\u8FF0\u7684\u662F\u8FDB\u7A0B/\u7EBF\u7A0B\u7684\u8C03\u7528\u65B9\u5F0F</p>
<p>\u540C\u6B65\u6307\u8FDB\u7A0B/\u7EBF\u7A0B\u53D1\u8D77\u8C03\u7528\u540E \u4E00\u76F4\u7B49\u5230\u8C03\u7528\u8FD4\u56DE\u540E\u624D\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u6B65\u7684\u64CD\u4F5C</p>
<p>\u8FD9\u5E76\u4E0D\u4EE3\u8868cpu\u5728\u8FD9\u4E00\u6BB5\u65F6\u95F4\u5185\u4E5F\u4F1A\u4E00\u76F4\u7B49\u5F85</p>
<p>\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u5207\u6362\u5230\u53E6\u4E00\u4E2A\u8FDB\u7A0B/\u7EBF\u7A0B\u4E0A\u53BB</p>
<p>\u7B49\u5230\u8C03\u7528\u8FD4\u56DE\u540E\u518D\u5207\u6362\u56DE\u539F\u6765\u7684\u8FDB\u7A0B/\u7EBF\u7A0B</p>
<p>\u5F02\u6B65\u5C31\u662F\u4E0E\u4E4B\u76F8\u53CD\uFF0C\u53D1\u8D77\u8C03\u7528\u540E\uFF0C\u8FDB\u7A0B/\u7EBF\u7A0B\u7EE7\u7EED\u5411\u4E0B\u6267\u884C</p>
<p>\u5F53\u8C03\u7528\u8FD4\u56DE\u540E\uFF0C\u901A\u8FC7<strong>\u67D0\u79CD\u624B\u6BB5</strong>\u6765\u901A\u77E5\u8C03\u7528\u8005</p>
<p>\u6CE8\u610F\uFF1A<strong>\u540C\u6B65\u5F02\u6B65\u4E2D\u7684\u8C03\u7528\u8FD4\u56DE</strong>\u662F\u6307\u5185\u6838\u8FDB\u7A0B\u5C06\u6570\u636E\u590D\u5236\u5230\u8C03\u7528\u8FDB\u7A0B\uFF08linux\u73AF\u5883\u4E0B\uFF09</p>
<p>**javaScript\u7684\u5F02\u6B65\u662F\u4F9D\u9760\u6D4F\u89C8\u5668\u5185\u90E8\u7684runtime\uFF08\u89E3\u91CA\u5668/\u8FD0\u884C\u73AF\u5883\uFF09\u5185\u90E8\u5176\u4ED6\u7EBF\u7A0B\u6765\u5B9E\u73B0\u7684</p>
<p>\u5E76\u975EJavaScript\u672C\u8EAB\u7684\u529F\u80FD\uFF0C\u662F\u6D4F\u89C8\u5668\u8BA9javaScript\u770B\u8D77\u6765\u50CF\u662F\u4E00\u4E2A\u5F02\u6B65\u7684\u8BED\u8A00**</p>
<p>4.1\u963B\u585E/\u975E\u963B\u585E</p>
<p>\u963B\u585E\u4E0E\u975E\u963B\u585E\u662F\u9488\u5BF9i/o\u72B6\u6001\u800C\u8A00\u7684</p>
<p>\u5173\u6CE8\u7A0B\u5E8F\u5728\u7B49\u5F85i/o\u8C03\u7528\u8FD4\u56DE\u7684\u8FD9\u6BB5\u65F6\u95F4\u7684\u72B6\u6001</p>
<p>\u963B\u585E/\u975E\u963B\u585E \u548C \u540C\u6B65/\u5F02\u6B65 \u5B8C\u5168\u662F\u4E24\u7EC4\u6982\u5FF5</p>
<p>\u4ED6\u4EEC\u4E4B\u95F4\u6CA1\u6709\u5FC5\u7136\u7684\u8054\u7CFB</p>
<p>\u9664\u4E86\u5B58\u7CB9\u7684<strong>AIO</strong>\u4E4B\u5916\u963B\u585E\u548C\u975E\u963B\u585Ei/o\u90FD\u662F\u540C\u6B65\u7684</p>
<p>i/o\u5373\u8F93\u5165\u8F93\u51FA \u662F\u6307\u5728\u5185\u5B58\u548C\u5916\u90E8\u8BBE\u5907\uFF08\u78C1\u76D8\uFF0C\u7EC8\u7AEF\uFF0C\u7F51\u7EDC\uFF09\u4E4B\u95F4\u590D\u5236\u6570\u636E\u7684\u8FC7\u7A0B</p>
<hr>
<p>\u5728node\u4E2Di/o\u7279\u6307node\u7A0B\u5E8F\u5728libuv\u652F\u6301\u4E0B\u4E0E\u7CFB\u7EDF\u78C1\u76D8\u548C\u7F51\u7EDC\u4EA4\u4E92\u7684\u8FC7\u7A0B</p>
<p>i/o\u8C03\u7528\u7684\u7ED3\u679C\u5982\u4F55\u8FD4\u56DE\u7ED9\u8C03\u7528\u7684\u8FDB\u7A0B/\u7EBF\u7A0B</p>
<p>\u662F\u901A\u8FC7\u5185\u6838\u8FDB\u7A0B\u590D\u5236\u7ED9\u8C03\u7528\u8FDB\u7A0B</p>
<p>linux\u4E0B\u7528\u6237\u65E0\u6CD5\u8BBF\u95EE\u5185\u6838\u7A7A\u95F4</p>
<p>\u901A\u5E38\u91C7\u7528copy_to_user\u65B9\u6CD5\u6765\u4F20\u9012\u6570\u636E</p>
<p>\u5927\u81F4\u6D41\u7A0B\u5C31\u662Fi/o\u7684\u6570\u636E\u4F1A\u5148\u88AB\u5185\u6838\u7A7A\u95F4\u8BFB\u53D6</p>
<p>\u7136\u540E\u5185\u6838\u5C06\u6570\u636E\u590D\u5236\u7ED9\u7528\u6237\u8FDB\u7A0B</p>
<p>\uFF08\u96F6\u590D\u5236\u6280\u672F\uFF0C\u5185\u6838\u8FDB\u7A0B\u548C\u7528\u6237\u8FDB\u7A0B\u5171\u4EAB\u4E00\u5757\u5185\u5B58\u5730\u5740\uFF0C\u8FD9\u907F\u514D\u7684\u5185\u5B58\u7684\u590D\u5236\uFF09</p>
<p>4.2 i/o\u7F16\u7A0B\u6A21\u578B</p>
<p>\u7F16\u7A0B\u6A21\u578B\u662F\u6307  \u64CD\u4F5C\u7CFB\u7EDF\u5728\u5904\u7406i/o\u65F6\u6240 \u91C7\u7528\u7684\u65B9\u5F0F</p>
<p>\u4E3A\u4E86\u89E3\u51B3i/o \u901F\u5EA6\u6BD4\u8F83\u6162</p>
<p>\u7F16\u7A0B\u6A21\u578B\u6709\u4EE5\u4E0B\u51E0\u79CD</p>
<p>1.\u963B\u585Ei/o</p>
<p>2.\u975E\u963B\u585Ei/o \u548C\u963B\u585Ei/o\u7684\u533A\u522B\u662F\u7528\u6237\u8FDB\u7A0B\u4F1A\u4E0D\u65AD\u67E5\u8BE2\u5185\u6838\u7684\u72B6\u6001\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u540C\u6B65\u7684</p>
<p>3.\u4E8B\u4EF6\u9A71\u52A8i/o \u4EE5\u8F6E\u8BE2\u7684\u65B9\u5F0F\u6765\u67E5\u8BE2\u5185\u6838\u7684\u8FD0\u884C\u72B6\u6001</p>
<p>\u548C\u975E\u963B\u585Ei/o \u7684\u533A\u522B\u662F\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u80FD\u4F1A\u7BA1\u7406\u591A\u4E2Ai/o\u8BF7\u6C42</p>
<p>\u6CE8\uFF1Aselect\u548Cpoll\u90FD\u662Fi/o\u670D\u7528\u7684\u673A\u5236</p>
<p>node\u4F7F\u7528epoll\uFF08\u6539\u8FDB\u540E\u7684poll\uFF09</p>
<p>4.\u5F02\u6B65i/o \u5F53\u8FDB\u7A0B\u53D1\u51FA\u8C03\u7528\u540E\uFF0C\u5185\u6838\u4F1A\u7ACB\u523B\u8FD4\u56DE\u7ED3\u679C</p>
<p>\u8FDB\u7A0B\u4F1A\u7EE7\u7EED\u505A\u5176\u4ED6\u7684\u4E8B\u60C5\uFF0C\u77E5\u9053\u64CD\u4F5C\u7CFB\u7EDF\u8FD4\u56DE\u6570\u636E</p>
<p>\u7ED9\u7528\u6237\u8FDB\u7A0B\u53D1\u9001\u4E00\u4E2A\u4FE1\u53F7</p>
<p>\u6CE8\u610F**************\u5F02\u6B65i/o\u5E76\u6CA1\u6709\u6D89\u53CA\u4EFB\u4F55\u5173\u4E8E\u56DE\u8C03\u51FD\u6570\u7684\u6982\u5FF5</p>
<p>\u8FD9\u91CC\u7684\u5F02\u6B65i/o\u53EA\u5B58\u5728\u4E8Elinux\u7CFB\u7EDF\u4E0B</p>
<p>node\u662F\u771F\u5B9E\u7684\u975E\u963B\u585E\u800Cnode\u4E2D\u7684\u5F02\u6B65i/o\u662F\u4F9D\u9760libuv\u6A21\u62DF\u51FA\u6765\u7684</p>
<hr>
<p>\u603B\u7ED3\uFF1A\u540C\u6B65\u8C03\u7528\u4F1A\u9020\u6210\u8C03\u7528\u8FDB\u7A0B\u7684i/o\u963B\u585E</p>
<p>\u5F02\u6B65\u8C03\u7528\u4E0D\u4F1A\u9020\u6210\u8C03\u7528\u8FDB\u7A0B\u7684\u963B\u585E</p>
<p>5.\u5355\u7EBF\u7A0B\u591A\u7EBF\u7A0B~~~~~~~~~~</p>
<p>node\u5E76\u6CA1\u6709\u63D0\u4F9B\u591A\u7EBF\u7A0B\u7684\u652F\u6301</p>
<p>\u7528\u4E8E\u8FD0\u884C\u4EE3\u7801\u7684\u4E8B\u4EF6\u5FAA\u73AF\u4E5F\u662F\u5355\u7EBF\u7A0B\u8FD0\u884C\u7684</p>
<p>\u5F00\u53D1\u8005\u65E0\u6CD5\u5728\u4E00\u4E2A\u72EC\u7ACB\u7684\u8FDB\u7A0B\u4E2D\u589E\u52A0\u65B0\u7684\u7EBF\u7A0B</p>
<p>\u4F46\u53EF\u4EE5\u6D3E\u751F\u51FA\u591A\u4E2A\u8FDB\u7A0B\u6765\u8FBE\u5230\u5E76\u884C\u5B8C\u6210\u5DE5\u4F5C\u7684\u76EE\u7684</p>
<p>\u53E6\u4E00\u65B9\u9762node\u7684\u5E95\u5C42\u5B9E\u73B0\u5E76\u975E\u5355\u7EBF\u7A0B</p>
<p>libuv\u4F1A\u901A\u8FC7\u7C7B\u4F3C\u7684\u7EBF\u7A0B\u6C60\u7684\u5B9E\u73B0\u6765\u6A21\u62DF\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u4E0B\u7684\u5F02\u6B65\u64CD\u4F5C</p>
<p>\u603B\u7ED3\uFF1A \u5F00\u53D1\u8005\u7684\u4EE3\u7801\u662F\u8FD0\u884C\u5728\u5355\u7EBF\u7A0B\u73AF\u5883\u4E2D</p>
<p>\u56E0\u4E3Alibuv\u4E2D\u662F\u6709\u7EBF\u7A0B\u6C60\u7684\u6982\u5FF5\u5B58\u5728</p>
<p>\u6240\u4EE5node\u90FD\u662F\u4F9D\u9760\u5355\u7EBF\u7A0B\u8FD0\u884C\u7684\u8BF4\u6CD5\u662F\u9519\u8BEF\u7684*******************</p>
<p>libuv\u662F\u4E00\u4E2A\u8DE8\u5E73\u53F0\u7684\u5F02\u6B65i/o\u5E93</p>
<p>\u7ED3\u5408\u4E86unix\u4E0B\u7684libev\u548Cwindows\u4E0B\u7684iopc\u7684\u7279\u6027</p>
<p>\u4E13\u95E8\u4E3Anode\u63D0\u4F9B\u591A\u5E73\u53F0\u4E0B\u7684\u5F02\u6B65i/o\u652F\u6301</p>
<p>libuv\u662F\u7528c++\u5B9E\u73B0\u7684</p>
<p>node\u4E2D\u7684\u975E\u963B\u585Ei/o\u4EE5\u53CA\u4E8B\u4EF6\u5FAA\u73AF\u7684\u5E95\u5C42\u673A\u5236\u90FD\u662F\u7531libuv\u6765\u5B9E\u73B0\u7684</p>
<p>\u5728windows\u73AF\u5883\u4E0Blibuv\u4F7F\u7528iocp\uFF08i/o completion port\uFF09\u6765\u5B9E\u73B0\u5F02\u6B65i/o</p>
<p>\u5728\u975Ewindows\u73AF\u5883\u4E0Blibuv\u4F7F\u7528\u591A\u7EBF\u7A0B\u6765\u6A21\u62DF\u5F02\u6B65i/o</p>
<p>\u4F8B\u5982readFile \u8BFB\u53D6\u6587\u4EF6\u7684\u7CFB\u7EDF\u5BA4\u53CBlibuv\u6765\u5B8C\u6210\u7684node\u53EA\u8D1F\u8D23\u8C03\u7528libuv\u7684\u63A5\u53E3</p>
<p>\u7B49\u6570\u636E\u8FD4\u56DE\u540E\u518D\u6267\u884C\u5BF9\u5E94\u7684\u56DE\u8C03\u65B9\u6CD5</p>
<p>6.\u5E76\u53D1\u548C\u5E76\u884C</p>
<p>\u5E76\u53D1\u662F\u5E0C\u671B\u8BA1\u7B97\u673A\u505A\u66F4\u591A\u7684\u4E8B\u60C5</p>
<p>\u5E76\u884C\u662F\u5E0C\u671B\u8BA1\u7B97\u673A\u80FD\u66F4\u5FEB\u5730\u5B8C\u6210\u4EFB\u52A1</p>
<p>d\u5355\u7EBF\u7A0B\u7684\u9AD8\u5E76\u53D1\u901A\u5E38\u662F\u4F9D\u9760 \u5F02\u6B65+\u4E8B\u4EF6\u9A71\u52A8\uFF08\u5FAA\u73AF\uFF09\u6765\u5B9E\u73B0\u7684</p>
<p>\u5F02\u6B65\u4F7F\u5F97\u4EE3\u7801\u5728\u9762\u5BF9\u591A\u4E2A\u8BF7\u6C42\u65F6\u4E0D\u4F1A\u53D1\u751F\u963B\u585E</p>
<p>\u4E8B\u4EF6\u5FAA\u73AF\u63D0\u4F9B\u4E86i/o\u8C03\u7528\u7ED3\u675F\u540E\u8C03\u7528\u56DE\u8C03\u51FD\u6570\u7684\u80FD\u529B</p>
<hr>
<p>\u603B\u7ED3\uFF1A\u9664\u4E86\u4F60\u7684\u4EE3\u7801\u4E00\u5207\u90FD\u662F\u5E76\u884C\u7684***************************</p>
`},{index:[],path:"/posts/element_ui_table_row\u70B9\u51FB\u53D8\u8272.html",title:"element ui table \u70B9\u51FB\u884C\u53D8\u8272",date:"2021-03-23",fontNum:1492,description:`\r
javascript\r
<template>\r
  <el-table\r
    :data="tableData"\r
    style="width: 100%"\r
    :row-class-name="tableRowClassName"\r
    @row-click="rowClick"\r
    :row-style="selectedstyle"\r
  >\r
    <`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    :row-class-name=&quot;tableRowClassName&quot;
    @row-click=&quot;rowClick&quot;
    :row-style=&quot;selectedstyle&quot;
  &gt;
    &lt;el-table-column prop=&quot;date&quot; label=&quot;\u65E5\u671F&quot; width=&quot;180&quot;&gt; &lt;/el-table-column&gt;
    &lt;el-table-column prop=&quot;name&quot; label=&quot;\u59D3\u540D&quot; width=&quot;180&quot;&gt; &lt;/el-table-column&gt;
    &lt;el-table-column prop=&quot;address&quot; label=&quot;\u5730\u5740&quot;&gt; &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;
 
  &lt;script&gt;
export default {
  data() {
    return {
      getIndex: null,
      tableData: [
        {
          date: &quot;2016-05-02&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04&quot;,
        },
        {
          date: &quot;2016-05-04&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04&quot;,
        },
        {
          date: &quot;2016-05-01&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04&quot;,
        },
        {
          date: &quot;2016-05-03&quot;,
          name: &quot;\u738B\u5C0F\u864E&quot;,
          address: &quot;\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04&quot;,
        },
      ],
    };
  },
  methods: {
    //\u8BBE\u7F6E\u884C\u5BF9\u8C61(row)\u7684\u6837\u5F0F(style)
    selectedstyle({ row, rowIndex }) {
      if (this.getIndex === rowIndex) {
        return {
          &quot;background-color&quot;: &quot;#f0f9eb&quot;,
        };
      }
    },
    //\u4E3A\u884C\u5BF9\u8C61(row)\u8BBE\u7F6Eindex\u5C5E\u6027
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    //\u884C\u70B9\u51FB\u4E8B\u4EF6,\u8FD9\u91CC\u83B7\u53D6\u5230\u7684\u884C\u5BF9\u8C61(row)\u662F\u6CA1\u6709index\u5C5E\u6027\u7684
    rowClick(row) {
      this.getIndex = row.index;
    },
  },
};
&lt;/script&gt;
</code></pre>
`},{index:["<h3>\u86C7\u5F62\u77E9\u9635</h3>"],path:"/posts/\u86C7\u5F62\u77E9\u9635.html",title:"\u86C7\u5F62\u77E9\u9635",date:"2021-03-15",fontNum:434,description:`\r
 \u86C7\u5F62\u77E9\u9635\r
\r
javascript\r
//\u86C7\u5F62\u77E9\u9635\r
function getSnakeMatrix(num) {\r
    let dp = [];\r
    let n = 1;\r
    for(let i = 0; i < num; i) {\r
        for(let j = i; j >= 0; j--) {\r
            if(!dp[j])`,tags:["\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u86C7\u5F62\u77E9\u9635</h3>
<pre><code class="language-javascript">//\u86C7\u5F62\u77E9\u9635
function getSnakeMatrix(num) {
    let dp = [];
    let n = 1;
    for(let i = 0; i &lt; num; i++) {
        for(let j = i; j &gt;= 0; j--) {
            if(!dp[j]) dp[j] = [];
            dp[j].push(n++)
        }
    }
    for(let i = 0; i &lt; num; i++) {
        console.log(dp[i].join(' '))
    }
}
 
getSnakeMatrix(5)
//\u8F93\u51FA
1 3 6 10 15
2 5 9 14   
4 8 13     
7 12       
11
</code></pre>
`},{index:["<h2>css\u64CD\u4F5C\u8131\u79BB\u6587\u6863\u6D41</h2>","<h2>position:relative</h2>"],path:"/posts/css\u4EC0\u4E48\u64CD\u4F5C\u4E0B\u4F1A\u8131\u79BB\u6587\u6863\u6D41.html",title:"css\u4EC0\u4E48\u64CD\u4F5C\u4E0B\u4F1A\u8131\u79BB\u6587\u6863\u6D41",date:"2021-03-09",fontNum:187,description:`\r
 css\u64CD\u4F5C\u8131\u79BB\u6587\u6863\u6D41\r
\r
1\u3001float \u6D6E\u52A8\u5E03\u5C40\r
2\u3001position:absolute;\u7EDD\u5BF9\u5B9A\u4F4D\r
3\u3001position:fixed;\u56FA\u5B9A\u5B9A\u4F4D \r
\r
 position:relative \u76F8\u5BF9\u5B9A\u4F4D \u4E0D\u4F1A\u8131\u79BB\u6587\u6863\u6D41\r
\r
\u76F8\u5BF9\u5B9A\u4F4D\u4E0D\u4F1A\u5F71\u54CD\u5143\u7D20\u672C\u8EAB\u7684\u7279\u6027\uFF0C\u4E0D\u4F1A\u4F7F\u5143\u7D20\u8131\u79BB\u6587\u6863\u6D41\uFF1B\u5982\u679C\u6CA1\u6709\u5B9A\u4F4D\u504F\u79FB\u91CF\uFF0C\u5BF9\u5143\u7D20\u672C\u8EAB\u6CA1\u6709\u4EFB\u4F55\u5F71\u54CD\u3002\r
\r
`,tags:["css"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>css\u64CD\u4F5C\u8131\u79BB\u6587\u6863\u6D41</h2>
<pre><code>1\u3001float \u6D6E\u52A8\u5E03\u5C40
2\u3001position:absolute;\u7EDD\u5BF9\u5B9A\u4F4D
3\u3001position:fixed;\u56FA\u5B9A\u5B9A\u4F4D 
</code></pre>
<h2>position:relative \u76F8\u5BF9\u5B9A\u4F4D \u4E0D\u4F1A\u8131\u79BB\u6587\u6863\u6D41</h2>
<pre><code>\u76F8\u5BF9\u5B9A\u4F4D\u4E0D\u4F1A\u5F71\u54CD\u5143\u7D20\u672C\u8EAB\u7684\u7279\u6027\uFF0C\u4E0D\u4F1A\u4F7F\u5143\u7D20\u8131\u79BB\u6587\u6863\u6D41\uFF1B\u5982\u679C\u6CA1\u6709\u5B9A\u4F4D\u504F\u79FB\u91CF\uFF0C\u5BF9\u5143\u7D20\u672C\u8EAB\u6CA1\u6709\u4EFB\u4F55\u5F71\u54CD\u3002
</code></pre>
`},{index:[],path:"/posts/js\u5B9E\u73B0sleep.html",title:"js\u5B9E\u73B0sleep",date:"2021-01-12",fontNum:277,description:`\r
javascript\r
async function sleep(delay) {\r
    return new Promise(resolve => {\r
        setTimeout(resolve, delay)\r
    })\r
}\r
 \r
async function foo(delay) {\r
    const t0 = Date.now()\r
    await`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">async function sleep(delay) {
    return new Promise(resolve =&gt; {
        setTimeout(resolve, delay)
    })
}
 
async function foo(delay) {
    const t0 = Date.now()
    await sleep(delay)
    console.log(Date.now() - t0);
}
foo(5000)//5006
</code></pre>
`},{index:[],path:"/posts_old/array\u7684find.html",title:"Array.find",date:"2021-01-01",fontNum:543,description:`javascript\r
let arr = [1, 2, 3, 4, 5, 6]\r
\r
arr.find((element, index, array) => {\r
    console.log('element', element);\r
    console.log('index', index);\r
    console.log('array', array);\r
})\r
\r
//`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">let arr = [1, 2, 3, 4, 5, 6]

arr.find((element, index, array) =&gt; {
    console.log('element', element);
    console.log('index', index);
    console.log('array', array);
})

// element 1
// index 0
// array [ 1, 2, 3, 4, 5, 6 ]
// element 2
// index 1
// array [ 1, 2, 3, 4, 5, 6 ]
// element 3
// index 2
// array [ 1, 2, 3, 4, 5, 6 ]
// element 4
// index 3
// array [ 1, 2, 3, 4, 5, 6 ]
// element 5
// index 4
// array [ 1, 2, 3, 4, 5, 6 ]
// element 6
// index 5
// array [ 1, 2, 3, 4, 5, 6 ]
</code></pre>
`},{index:[],path:"/posts_old/flower_animation.html",title:"\u82B1\u6735\u52A8\u753B\u7279\u6548",date:"2021-01-01",fontNum:5170,description:`html\r
<html>\r
\r
<head></head>\r
<style>\r
    .petal {\r
        position: fixed;\r
        top: 30%;\r
        left: 50%;\r
        background: rgba(123, 104, 236, 0.3);\r
        opacity: 0.4;\r
        `,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-html">&lt;html&gt;

&lt;head&gt;&lt;/head&gt;
&lt;style&gt;
    .petal {
        position: fixed;
        top: 30%;
        left: 50%;
        background: rgba(123, 104, 236, 0.3);
        opacity: 0.4;
        width: 300px;
        height: 300px;
        border-radius: 300px 0px;
        /* \u65CB\u8F6C\u57FA\u70B9 */
        transform-origin: 0px 300px;
        /* \u9006\u65F6\u9488\u65CB\u8F6C45\u5EA6 */
        transform: rotate(-45deg);
    }
    
    .div2 {
        /* \u52A8\u753B\u540D\u79F0 \u6301\u7EED\u65F6\u95F4 \u65F6\u95F4\u51FD\u6570 \u5EF6\u8FDF\u65F6\u95F4 \u5FAA\u73AF\u6B21\u6570 \u52A8\u753B\u65B9\u5411 \u64AD\u653E\u88C5\u6001 \u586B\u5145\u6A21\u5F0F */
        animation: a2 2s ease 1 forwards;
    }
    
    .div3 {
        animation: a3 2s ease 1 forwards;
    }
    
    .div4 {
        animation: a4 2s ease 1 forwards;
    }
    
    .div5 {
        animation: a5 2s ease 1 forwards;
    }
    
    .div6 {
        animation: a6 2s ease 1 forwards;
    }
    
    .div7 {
        animation: a7 2s ease 1 forwards;
    }
    
    .div8 {
        animation: a8 2s ease 1 forwards;
    }
    
    .div9 {
        animation: a9 2s ease 1 forwards;
    }
    
    .div10 {
        animation: a10 2s ease 1 forwards;
    }
    
    .div11 {
        animation: a11 2s ease 1 forwards;
    }
    
    .div12 {
        animation: a12 2s ease 1 forwards;
    }
    
    .div13 {
        animation: a13 2s ease 1 forwards;
    }
    
    .div14 {
        animation: a14 2s ease 1 forwards;
    }
    
    .div15 {
        animation: a15 2s ease 1 forwards;
    }
    
    .div16 {
        animation: a16 2s ease 1 forwards;
    }
    
    .div17 {
        animation: a17 2s ease 1 forwards;
    }
    
    .div18 {
        animation: a18 2s ease 1 forwards;
    }
    
    @keyframes a2 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(-25deg);
        }
    }
    
    @keyframes a3 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(-5deg);
        }
    }
    
    @keyframes a4 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(15deg);
        }
    }
    
    @keyframes a5 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(35deg);
        }
    }
    
    @keyframes a6 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(55deg);
        }
    }
    
    @keyframes a7 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(75deg);
        }
    }
    
    @keyframes a8 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(95deg);
        }
    }
    
    @keyframes a9 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(115deg);
        }
    }
    
    @keyframes a10 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(135deg);
        }
    }
    
    @keyframes a11 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(155deg);
        }
    }
    
    @keyframes a12 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(175deg);
        }
    }
    
    @keyframes a13 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(195deg);
        }
    }
    
    @keyframes a14 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(215deg);
        }
    }
    
    @keyframes a15 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(235deg);
        }
    }
    
    @keyframes a16 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(255deg);
        }
    }
    
    @keyframes a17 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(275deg);
        }
    }
    
    @keyframes a18 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(295deg);
        }
    }
&lt;/style&gt;

&lt;body&gt;
    &lt;div class=&quot;div1 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div2 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div3 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div4 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div5 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div6 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div7 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div8 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div9 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div10 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div11 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div12 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div13 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div14 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div15 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div16 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div17 petal&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;div18 petal&quot;&gt;&lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
`},{index:[],path:"/posts_old/input\u805A\u7126\u9009\u4E2D.html",title:"input\u805A\u7126\u9009\u4E2D",date:"2021-01-01",fontNum:517,description:`html\r
<html>\r
\r
<head></head>\r
\r
<body>\r
    <form action="">\r
        <input type="text" size="25" maxlength="50" name="inputOne" id="" value="initial value">\r
    </form>\r
    <script>\r
        /`,tags:["html"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-html">&lt;html&gt;

&lt;head&gt;&lt;/head&gt;

&lt;body&gt;
    &lt;form action=&quot;&quot;&gt;
        &lt;input type=&quot;text&quot; size=&quot;25&quot; maxlength=&quot;50&quot; name=&quot;inputOne&quot; id=&quot;&quot; value=&quot;initial value&quot;&gt;
    &lt;/form&gt;
    &lt;script&gt;
        //\u9ED8\u8BA4\u503C\u4E3A\u9009\u4E2D
        const textbox = document.forms[0].elements['inputOne']

        // textbox.select()
        //\u805A\u7126\u9009\u4E2D
        textbox.addEventListener('focus', (event) =&gt; {
            console.log('event.target', event.target);
            event.target.select()
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
`},{index:[],path:"/posts_old/\u4E8C\u53C9\u6811\u5C42\u5E8F\u904D\u5386.html",title:"\u4E8C\u53C9\u6811\u5C42\u5E8F\u904D\u5386",date:"2021-01-01",fontNum:938,description:`javascript\r
const input = [3, 9, 20, null, null, 15, 7]\r
\r
function bfs(input) {\r
    const res = []\r
    const root = input[0]\r
    if (root === null) return res\r
    const q = []\r
    q.unshift({`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const input = [3, 9, 20, null, null, 15, 7]

function bfs(input) {
    const res = []
    const root = input[0]
    if (root === null) return res
    const q = []
    q.unshift({ index: 0, value: input[0] })

    while (q.length &gt; 0) {
        let len = q.length
        const list = []
        while (len &gt; 0) {
            const cur = q.pop()

            list.push(cur.value)
            const i = cur.index
            const left = 2 * i + 1
            const right = 2 * i + 2
            if (input[left] &amp;&amp; input[left] !== null) {
                q.unshift({ index: left, value: input[left] })
            }
            if (input[right] &amp;&amp; input[right] !== null) {
                q.unshift({ index: right, value: input[right] })
            }
            len -= 1
        }
        res.push(list)
    }
    return res
}
console.log(bfs(input));
// [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
</code></pre>
`},{index:["<h3>\u5C55\u5F00\u524D</h3>","<h3>\u5C55\u5F00\u540E</h3>"],path:"/posts_old/\u5FAA\u73AF\u5C55\u5F00.html",title:"\u5FAA\u73AF\u5C55\u5F00",date:"2021-01-01",fontNum:395,description:` \u5C55\u5F00\u524D\r
\r
let b = new Date()\r
\r
let a = 1\r
\r
for (let i = 0; i < 1000000000; i) {\r
    a\r
}\r
\r
let c = new Date() - b\r
\r
console.log(c); //568ms\r
\r
 \u5C55\u5F00\u540E\r
\r
let b = new Date()\r
\r
let a`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>\u5C55\u5F00\u524D</h3>
<pre><code>let b = new Date()

let a = 1

for (let i = 0; i &lt; 1000000000; i++) {
    a++
}

let c = new Date() - b

console.log(c); //568ms
</code></pre>
<h3>\u5C55\u5F00\u540E</h3>
<pre><code>let b = new Date()

let a = 1

for (let i = 0; i &lt; 100000000; i++) {
    a++
    a++
    a++
    a++
    a++
    a++
    a++
    a++
    a++
    a++
}

let c = new Date() - b

console.log(c); //57ms
</code></pre>
`},{index:["<h3>[Symbol.isConcatSpreadable]:</h3>"],path:"/posts_old/\u6570\u7EC4\u6253\u5E73.html",title:"\u6570\u7EC4\u6253\u5E73",date:"2021-01-01",fontNum:767,description:` [Symbol.isConcatSpreadable]: true,\u53EF\u4EE5\u5F3A\u5236\u6253\u5E73\u6570\u7EC4\r
javascript\r
let colors = ['red', 'green', 'blue']\r
let newColors = ['black', 'brown']\r
\r
let moreNewColors = {\r
    [Symbol.isConcatSpreadable]: true`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>[Symbol.isConcatSpreadable]: true,\u53EF\u4EE5\u5F3A\u5236\u6253\u5E73\u6570\u7EC4</h3>
<pre><code class="language-javascript">let colors = ['red', 'green', 'blue']
let newColors = ['black', 'brown']

let moreNewColors = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 'pink',
    1: 'cyan'
}
newColors[Symbol.isConcatSpreadable] = false

//\u5F3A\u5236\u4E0D\u6253\u5E73\u6570\u7EC4
let colors2 = colors.concat('yellow', newColors)

console.log('colors2', colors2);
console.log('colors2[4][1]', colors2[4][1]);


// colors2 [
//     'red',
//     'green',
//     'blue',
//     'yellow',
//     [ 'black', 'brown', [Symbol(Symbol.isConcatSpreadable)]: false ]
//   ]
// colors2[4][1] brown

//\u5F3A\u5236\u6253\u5E73\u6570\u7C7B\u6570\u7EC4\u5BF9\u8C61

let colors3 = colors.concat(moreNewColors)
console.log(colors3);
//[ 'red', 'green', 'blue', 'pink', 'cyan' ]
</code></pre>
`},{index:[],path:"/posts_old/\u8BFBpdf.html",title:"\u8BFBpdf",date:"2021-01-01",fontNum:133,description:`javascript\r
const fs = require('fs')\r
\r
const res = fs.readFileSync('./\u6211\u7684\u7B80\u53863.0.pdf', 'utf-8').toString()\r
\r
console.log(res);\r
`,tags:["node"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">const fs = require('fs')

const res = fs.readFileSync('./\u6211\u7684\u7B80\u53863.0.pdf', 'utf-8').toString()

console.log(res);
</code></pre>
`},{index:[],path:"/posts/\u5224\u65AD\u5BF9\u8C61\u4E3A\u7A7A.html",title:"\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A\u5BF9\u8C61",date:"2020-12-13",fontNum:1e3,description:`\r
javascript\r
var foo = {\r
    a: 'name',\r
    b: null,\r
    c: undefined,\r
    d: function () { },\r
    e: Symbol(),\r
    [Symbol('bar')]: 25\r
}\r
 \r
Object.defineProperty(foo, 'f', {\r
    value: 4`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">var foo = {
    a: 'name',
    b: null,
    c: undefined,
    d: function () { },
    e: Symbol(),
    [Symbol('bar')]: 25
}
 
Object.defineProperty(foo, 'f', {
    value: 42,
    enumerable: false
});
 
foo.__proto__ = {
    g: 233
}
 
// console.log(Object.values(foo));
[ 'name', null, undefined, [Function: key4], Symbol() ] \uFF08\u4E0D\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4F46\u4E0D\u5305\u62ECSymbol\u503C\u4F5C\u4E3A\u540D\u79F0\u7684\u5C5E\u6027\uFF09
 
Object.getOwnPropertyNames()\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u7531\u6307\u5B9A\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u5C5E\u6027\u540D\uFF08\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4F46\u4E0D\u5305\u62ECSymbol\u503C\u4F5C\u4E3A\u540D\u79F0\u7684\u5C5E\u6027\uFF09\u7EC4\u6210\u7684\u6570\u7EC4\u3002
 
 
Object.getOwnPropertyDescriptors() \u65B9\u6CD5\u7528\u6765\u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\u3002 \uFF08\u5305\u62ECSymbol\u5C5E\u6027\u548C\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\uFF09
// const baz = Object.getOwnPropertyDescriptors(foo)
 
// console.log(Reflect.ownKeys(foo)); //[ 'a', 'b', 'c', 'd', 'e', 'f', Symbol(bar) ]
// Reflect.ownKeys \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u7531\u76EE\u6807\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\u952E\u7EC4\u6210\u7684\u6570\u7EC4\u3002\u5B83\u7684\u8FD4\u56DE\u503C\u7B49\u540C\u4E8EObject.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))\u3002
 
\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A\u5BF9\u8C61
function isEmptyObj(obj) {
    return Reflect.ownKeys(obj).length &gt; 0 ? false : true
}
console.log(isEmptyObj(foo)); // false
</code></pre>
`},{index:[],path:"/posts_javascript/\u624B\u5199promise.html",title:"promise\u57FA\u672C\u539F\u7406 \u7B80\u7565",date:"2020-11-12",fontNum:2818,description:`\r
javascript\r
class Commitment {\r
    //\u5B9A\u4E49\u72B6\u6001\r
    static PENDING = 'pending'\r
    static FULFILLED = 'resolved'\r
    static REJECTED = 'rejected'\r
\r
    constructor(func) {\r
        //\u521D\u59CB\u5316\u72B6\u6001\r
      `,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">class Commitment {
    //\u5B9A\u4E49\u72B6\u6001
    static PENDING = 'pending'
    static FULFILLED = 'resolved'
    static REJECTED = 'rejected'

    constructor(func) {
        //\u521D\u59CB\u5316\u72B6\u6001
        this.status = Commitment.PENDING;
        //\u5B58\u50A8\u7ED3\u679C
        this.result = null;
        //\u56DE\u8C03\u961F\u5217
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        // \u62D2\u7EDD\u5F02\u5E38
        try {
            func(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(result) {
        setTimeout(() =&gt; {
            if (this.status === Commitment.PENDING) {
                this.status = Commitment.FULFILLED
                this.result = result
                this.resolveCallbacks.forEach(callback =&gt; {
                    callback(result)
                })
            }
        })
    }

    reject(result) {
        setTimeout(() =&gt; {
            if (this.status === Commitment.PENDING) {
                this.status = Commitment.REJECTED
                this.result = result
                this.rejectCallbacks.forEach(callback =&gt; {
                    callback(result)
                })
            }
        })
    }

    then(onFULFILLED, onREJECTED) {
        return new Commitment((resolve, reject) =&gt; {
            onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () =&gt; {}
            onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () =&gt; {}
            if (this.status === Commitment.PENDING) {
                this.resolveCallbacks.push(onFULFILLED)
                this.rejectCallbacks.push(onREJECTED)
            }
            if (this.status === Commitment.FULFILLED) {
                setTimeout(() =&gt; {
                    onFULFILLED(this.result)
                })
            }

            if (this.status === Commitment.REJECTED) {
                setTimeout(() =&gt; {
                    onREJECTED(this.result)
                })
            }
        })
    }
}
console.log('1');
const commitment = new Commitment((resolve, reject) =&gt; {
    console.log('2');
    setTimeout(() =&gt; {
        resolve('resolve')
        console.log('4');
    })
})
commitment.then(result =&gt; {
    console.log('a', result);
})

console.log('3');
//resolve , reject \u8981\u5728\u4E8B\u4EF6\u5FAA\u73AF\u672B\u5C3E\u6267\u884C
//\u6267\u884C\u987A\u5E8F  console.log('1'); -&gt; new Commitment -&gt; console.log('2'); -&gt; setTimeout -&gt; commitment.then -&gt; console.log('3');
//\u4E8B\u4EF6\u961F\u5217 [resolve('resolve') ,console.log('4')]
//\u4E8B\u4EF6\u961F\u5217 [console.log('4'), callback(result)]
//\u4E8B\u4EF6\u961F\u5217 [callback(result)]

// const pro = new Promise((resolve, reject) =&gt; {
//     resolve('22')
// })

// pro.then(res =&gt; {
//     console.log(res);
//     return pro
// }).then(res =&gt; {
//     console.log(res);
// })
</code></pre>
`},{index:["<h5>HTMLDocument\u6269\u5C55</h5>"],path:"/posts/dom\u64CD\u4F5C\u8BB0\u5F55.html",title:"dom\u64CD\u4F5C\u8BB0\u5F55",date:"2020-11-11",fontNum:436,description:`\r
\r
querySelectorAll\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u9759\u6001\u7684\u5FEB\u7167\r
\r
document.activeElement\u59CB\u7EC8\u5305\u542B\u5F53\u524D\u62E5\u6709\u7126\u70B9\u7684dom\u5143\u7D20\r
\r
 HTMLDocument\u6269\u5C55\r
\r
1.readyState\u5C5E\u6027\r
\r
document.readyState\r
\r
\u8FD4\u56DE\u503C loading \u8868\u793A\u6587\u6863\u6B63\u5728\u52A0\u8F7D complete \u8868\u793A\u6587\u6863\u52A0\u8F7D\u5B8C\u6210\r
\r
\u4F5C\u7528 \u7528\u4E8E\u5224\u65AD\u6587\u6863\u662F\u5426\u52A0\u8F7D`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code>querySelectorAll\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u9759\u6001\u7684\u5FEB\u7167

document.activeElement\u59CB\u7EC8\u5305\u542B\u5F53\u524D\u62E5\u6709\u7126\u70B9\u7684dom\u5143\u7D20

##### HTMLDocument\u6269\u5C55

1.readyState\u5C5E\u6027

document.readyState

\u8FD4\u56DE\u503C loading \u8868\u793A\u6587\u6863\u6B63\u5728\u52A0\u8F7D complete \u8868\u793A\u6587\u6863\u52A0\u8F7D\u5B8C\u6210

\u4F5C\u7528 \u7528\u4E8E\u5224\u65AD\u6587\u6863\u662F\u5426\u52A0\u8F7D\u5B8C\u6BD5

\u57FA\u672C\u7528\u6CD5

if(document.readyState == &quot;complete&quot;){
    //execute action

}

2.compatMode

document.compatMode

\u8FD4\u56DE\u503C \u6807\u51C6\u6A21\u5F0F\u2018CSS1Compat\u2019 \u6DF7\u6742\u6A21\u5F0F\u2018BackCompat\u2019

\u4F5C\u7528 \u7528\u4E8E\u6307\u793A\u6D4F\u89C8\u5668\u5F53\u524D\u5904\u4E8E\u4EC0\u4E48\u6E32\u67D3\u6A21\u5F0F

3.head\u5C5E\u6027

document.head

\u6307\u5411\u6587\u6863\u7684head\u5143\u7D20
</code></pre>
`},{index:["<h2>\u7F51\u4E0A\u7684\u65B9\u6CD5\u662F\u901A\u8FC7</h2>","<h2>\u7531\u4E8Ev-model\u7684\u539F\u56E0\u4F1A\u5BFC\u81F4\u6708\u4EFD\u8868\u6839\u636Ev-model\u7684\u503C\u8FDB\u884C\u6E32\u67D3\uFF0C\u5BFC\u81F4default-value\u7684\u503C\u5931\u6548\u3002\u8FD9\u8FB9\u63D0\u4F9B\u4E86\u4E00\u79CD\u89E3\u51B3\u601D\u8DEF\uFF0C\u901A\u8FC7\u66F4\u6539\u997F\u4E86\u4E48\u6E90\u7801\u7684\u65B9\u5F0F</h2>","<h2>data\u4E2D\u9700\u8981\u589E\u52A0</h2>","<h2>\u91CD\u5199\u540E\u7684value\u65B9\u6CD5</h2>"],path:"/posts/element_ui\u65E5\u671F\u7EC4\u4EF6.html",title:"element ui \u65E5\u671F\u7EC4\u4EF6\u5F53\u524D\u6708\u4EFD\u663E\u793A\u5728\u53F3\u4FA7",date:"2020-11-10",fontNum:5231,description:`\r
 \u7F51\u4E0A\u7684\u65B9\u6CD5\u662F\u901A\u8FC7 default-value\u6765\u8BBE\u7F6E\r
\r
\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u5728\u9ED8\u8BA4\u503C\u7684\u60C5\u51B5\u4E0B\u6216\u8005\u9009\u62E9\u503C\u7684\u60C5\u51B5\u4E0B\u5931\u6548\r
\r
javascript\r
<template>\r
  <el-date-picker\r
    v-model="value"\r
    type="daterange"\r
    range-separator="\u81F3"\r
    start-placeholder="`,tags:["element_ui"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h2>\u7F51\u4E0A\u7684\u65B9\u6CD5\u662F\u901A\u8FC7 default-value\u6765\u8BBE\u7F6E</h2>
<p>\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u5728\u9ED8\u8BA4\u503C\u7684\u60C5\u51B5\u4E0B\u6216\u8005\u9009\u62E9\u503C\u7684\u60C5\u51B5\u4E0B\u5931\u6548</p>
<pre><code class="language-javascript">&lt;template&gt;
  &lt;el-date-picker
    v-model=&quot;value&quot;
    type=&quot;daterange&quot;
    range-separator=&quot;\u81F3&quot;
    start-placeholder=&quot;\u5F00\u59CB\u65E5\u671F&quot;
    end-placeholder=&quot;\u7ED3\u675F\u65E5\u671F&quot;
    format=&quot;yyyyMMdd&quot;
    value-format=&quot;yyyyMMdd&quot;
    :default-value=&quot;defaultTime&quot;
  &gt;
  &lt;/el-date-picker&gt;
&lt;/template&gt;
 
&lt;script&gt;
export default {
  data() {
    return {
      value: [],
      defaultTime: &quot;&quot;,
    };
  },
  created() {
    this.defaultTime = new Date();
    this.defaultTime.setMonth(new Date().getMonth() - 1);
  },
  methods: {},
};
&lt;/script&gt;
</code></pre>
<h2>\u7531\u4E8Ev-model\u7684\u539F\u56E0\u4F1A\u5BFC\u81F4\u6708\u4EFD\u8868\u6839\u636Ev-model\u7684\u503C\u8FDB\u884C\u6E32\u67D3\uFF0C\u5BFC\u81F4default-value\u7684\u503C\u5931\u6548\u3002\u8FD9\u8FB9\u63D0\u4F9B\u4E86\u4E00\u79CD\u89E3\u51B3\u601D\u8DEF\uFF0C\u901A\u8FC7\u66F4\u6539\u997F\u4E86\u4E48\u6E90\u7801\u7684\u65B9\u5F0F</h2>
<pre><code class="language-javascript">element-ui.common.js
/* harmony default export */ var date_picker = ({
        mixins: [picker],
 
        name: 'ElDatePicker',
 
        props: {
          rightCurrentMonth: {},//******\u83B7\u53D6\u4F20\u5165\u7684\u503C******
          type: {
            type: String,
            default: 'date'
          },
          timeArrowControl: Boolean,
 
        },
 
 
element-ui.common.js
 
  mountPicker: function mountPicker() {
            var _this3 = this;
            this.picker = new external_vue_default.a(this.panel).$mount();
           
            this.picker.rightCurrentMonth = this.rightCurrentMonth;//******\u5C06\u503C\u5F80\u4E0B\u4F20\u9012******
 
            this.picker.defaultValue = this.defaultValue;
            this.picker.defaultTime = this.defaultTime;
            this.picker.popperClass = this.popperClass;
            this.popperElm = this.picker.$el;
            this.picker.width = this.reference.getBoundingClientRect().width;

</code></pre>
<h2>data\u4E2D\u9700\u8981\u589E\u52A0 rightCurrentMonth: false</h2>
<pre><code class="language-javascript">element-ui.common.js
 
data: function data() {
          return {
            rightCurrentMonth: false,
            popperClass: '',
            value: [],
            defaultValue: null,
            defaultTime: null,
            minDate: '',
            maxDate: '',
            leftDate: new Date(),
            rightDate: Object(date_util_[&quot;nextMonth&quot;])(new Date()),
            rangeState: {
              endDate: null,
              selecting: false,
              row: null,
              column: null
            },
            showTime: false,
</code></pre>
<h2>\u91CD\u5199\u540E\u7684value\u65B9\u6CD5</h2>
<pre><code class="language-javascript"> value: function value(newVal) {
            console.log('rightCurrentMonth', this.rightCurrentMonth);
            if (!newVal) {
              this.minDate = null;
              this.maxDate = null;
            } else if (Array.isArray(newVal)) {
              this.minDate = Object(date_util_[&quot;isDate&quot;])(newVal[0]) ? new Date(newVal[0]) : null;
              this.maxDate = Object(date_util_[&quot;isDate&quot;])(newVal[1]) ? new Date(newVal[1]) : null;
              //*******************************************************
              //*******************************************************
              if (!this.rightCurrentMonth) {
                if (this.minDate) {
                  this.leftDate = this.minDate;
                  if (this.unlinkPanels &amp;&amp; this.maxDate) {
                    var minDateYear = this.minDate.getFullYear();
                    var minDateMonth = this.minDate.getMonth();
                    var maxDateYear = this.maxDate.getFullYear();
                    var maxDateMonth = this.maxDate.getMonth();
                    this.rightDate = minDateYear === maxDateYear &amp;&amp; minDateMonth === maxDateMonth ? Object(date_util_[&quot;nextMonth&quot;])(this.maxDate) : this.maxDate;
                  } else {
                    this.rightDate = Object(date_util_[&quot;nextMonth&quot;])(this.leftDate);
                  }
                } else {
                  this.leftDate = date_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
                  this.rightDate = Object(date_util_[&quot;nextMonth&quot;])(this.leftDate);
                }
              } else {
                if (this.maxDate) {
                  this.rightDate = this.maxDate;
                  if (this.unlinkPanels &amp;&amp; this.minDate) {
                    console.log('111111');
                    const minDateYear = this.minDate.getFullYear();
                    const minDateMonth = this.minDate.getMonth();
                    const maxDateYear = this.maxDate.getFullYear();
                    const maxDateMonth = this.maxDate.getMonth();
                    this.leftDate = minDateYear === maxDateYear &amp;&amp; minDateMonth === maxDateMonth ? Object(date_util_[&quot;prevMonth&quot;])(this.maxDate) : this.minDate;
                  } else {
                    console.log('222222');
                    this.leftDate = Object(date_util_[&quot;prevMonth&quot;])(this.rightDate);
                  }
                } else {
                  console.log('333333');
                  this.leftDate = date_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
                  this.rightDate = Object(date_util_[&quot;nextMonth&quot;])(this.leftDate);
                }
                //*******************************************************
                //*******************************************************
              }
 
            }
          },
</code></pre>
`},{index:[],path:"/posts/js\u4E00\u6B21\u6027\u8BBE\u7F6E\u591A\u4E2Acss.html",title:"js\u4E00\u6B21\u6027\u8BBE\u7F6E\u591A\u4E2Acss",date:"2020-07-26",fontNum:68,description:`\r
javascript\r
div.style.cssText = 'width:100px;height:100px'\r
`,tags:["javascript"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<pre><code class="language-javascript">div.style.cssText = 'width:100px;height:100px'
</code></pre>
`},{index:["<h3>em</h3>","<h3>rem</h3>","<h3>vh</h3>","<h3>vw</h3>","<h3>height\u6307\u5BB9\u5668\u7684\u9AD8\u5EA6</h3>","<h3>line-height\u6BCF\u884C\u5B57\u4F53\u7684\u9AD8\u5EA6</h3>"],path:"/posts/css\u9AD8\u5EA6\u5355\u4F4D\u7684\u533A\u522B.html",title:"em,rem,vh,wh,height\u7684\u533A\u522B",date:"2020-03-10",fontNum:514,description:`\r
 em\r
\r
- \u8BBE\u7F6E\u5F53\u524D\u7684div\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A1.5em\uFF0C\r
- \u5219\u5F53\u524D\u7684div\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A\uFF1A\u5F53\u524Ddiv\u7EE7\u627F\u7684\u5B57\u4F53\u5927\u5C0F\u76841.5\u500D\r
- \u4F46\u662F\u5F53div\u8FDB\u884C\u5D4C\u5957\u7684\u65F6\u5019\uFF0Cem\u59CB\u7EC8\u662F\u6309\u7167\u5F53\u524Ddiv\u7EE7\u627F\u7684\u5B57\u4F53\u5927\u5C0F\u6765\u7F29\u653E\u3002\r
\r
 rem\r
\r
- \u8FD9\u91CC\u7684r\u5C31\u662Froot\u7684\u610F\u601D\uFF0C\u610F\u601D\u662F\u76F8\u5BF9\u4E8E\u6839\u8282\u70B9\u6765\u8FDB\u884C\u7F29\u653E\uFF0C\r
- \u5F53\u6709\u5D4C\u5957\u5173\u7CFB\u7684\u65F6\u5019\uFF0C\r
- \u5D4C\u5957\u5173\u7CFB\u7684\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u59CB\u7EC8\u6309\u7167\u6839\u8282\u70B9\u7684\u5B57\u4F53\u5927\u5C0F\u8FDB\u884C`,tags:["css"],imgSrc:"https://tva1.sinaimg.cn/mw690/6833939bly1gicitzannuj20zk0m8b29.jpg",content:`<h3>em</h3>
<ul>
<li>\u8BBE\u7F6E\u5F53\u524D\u7684div\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A1.5em\uFF0C</li>
<li>\u5219\u5F53\u524D\u7684div\u7684\u5B57\u4F53\u5927\u5C0F\u4E3A\uFF1A\u5F53\u524Ddiv\u7EE7\u627F\u7684\u5B57\u4F53\u5927\u5C0F\u76841.5\u500D</li>
<li>\u4F46\u662F\u5F53div\u8FDB\u884C\u5D4C\u5957\u7684\u65F6\u5019\uFF0Cem\u59CB\u7EC8\u662F\u6309\u7167\u5F53\u524Ddiv\u7EE7\u627F\u7684\u5B57\u4F53\u5927\u5C0F\u6765\u7F29\u653E\u3002</li>
</ul>
<h3>rem</h3>
<ul>
<li>\u8FD9\u91CC\u7684r\u5C31\u662Froot\u7684\u610F\u601D\uFF0C\u610F\u601D\u662F\u76F8\u5BF9\u4E8E\u6839\u8282\u70B9\u6765\u8FDB\u884C\u7F29\u653E\uFF0C</li>
<li>\u5F53\u6709\u5D4C\u5957\u5173\u7CFB\u7684\u65F6\u5019\uFF0C</li>
<li>\u5D4C\u5957\u5173\u7CFB\u7684\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u59CB\u7EC8\u6309\u7167\u6839\u8282\u70B9\u7684\u5B57\u4F53\u5927\u5C0F\u8FDB\u884C\u7F29\u653E\u3002</li>
</ul>
<h3>vh</h3>
<ul>
<li>1vh\u5C31\u662F\u5F53\u524D\u5C4F\u5E55\u53EF\u89C1\u9AD8\u5EA6\u76841%\uFF0C</li>
<li>\u4E5F\u5C31\u662F\u8BF4height:100vh == height:100%;</li>
<li>\u4F46\u662F\u6709\u4E2A\u597D\u5904\u662F\u5F53\u5143\u7D20\u6CA1\u6709\u5185\u5BB9\u65F6\u5019\uFF0C\u8BBE\u7F6Eheight:100%\u8BE5\u5143\u7D20\u4E0D\u4F1A\u88AB\u6491\u5F00\uFF0C</li>
<li>\u4F46\u662F\u8BBE\u7F6Eheight:100vh\uFF0C\u8BE5\u5143\u7D20\u4F1A\u88AB\u6491\u5F00\u5C4F\u5E55\u9AD8\u5EA6\u4E00\u81F4\u3002</li>
</ul>
<h3>vw</h3>
<ul>
<li>1vw\u5C31\u662F\u5F53\u524D\u5C4F\u5E55\u5BBD\u5EA6\u76841%</li>
<li>\u8865\u5145\u4E00\u53E5\uFF0C\u5F53\u8BBE\u7F6Ewidth:100%\uFF0C\u88AB\u8BBE\u7F6E\u5143\u7D20\u7684\u5BBD\u5EA6\u662F\u6309\u7167\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u6765\u8BBE\u7F6E\uFF0C</li>
<li>\u4F46\u662F100vw\u662F\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u53EF\u89C1\u5BBD\u5EA6\u6765\u8BBE\u7F6E\u7684\uFF0C\u6240\u4EE5\u4F1A\u51FA\u73B050vw \u6BD450%\u5927\u7684\u60C5\u51B5</li>
</ul>
<h3>height\u6307\u5BB9\u5668\u7684\u9AD8\u5EA6</h3>
<h3>line-height\u6BCF\u884C\u5B57\u4F53\u7684\u9AD8\u5EA6</h3>
`}],or=Ru,Ou=or.length;function Lu(){const n=new Map;for(const t of or)n.set(t.path,t);return n}function Fu(){const n={};for(const t of or)for(const e of t.tags)n[e]||(n[e]=[]),n[e].push(t);return n}const ee=Au("main",{state:()=>({showIndex:!1,postsDic:Lu(),tags:Fu(),pageSize:10,posts:or,postLen:Ou,isSun:1,sideIndex:[]})});function Bu(n,t){let e;return function(){e&&clearTimeout(e),e=setTimeout(n,t)}}const ir=n=>(Je("data-v-b64baf99"),n=n(),Qe(),n),Vu={class:"search--content"},$u={class:"header"},Uu=ir(()=>D("span",{class:"icon"},[D("i",{class:"ic i-search"})],-1)),Hu={class:"search--input"},Wu={role:"search",novalidate:""},Ku=ir(()=>D("i",{class:"ic i-times-circle"},null,-1)),Gu=[Ku],Yu={class:"results"},Ju={class:"results--content"},Qu=ir(()=>D("hr",null,null,-1)),Xu={id:"search--res"},Zu=ir(()=>D("i",{class:"ic i-angle-right"},null,-1)),np={__name:"Search",props:{showSearch:Boolean},emits:["close"],setup(n,{emit:t}){const e=n,o=ee().postsDic,{showSearch:i}=qt(e),s=()=>{t("close",!1)};be(()=>{const g=document.getElementById("search"),v=document.getElementsByClassName("item search")[0],h=document.getElementsByClassName("search--content")[0];g.addEventListener("click",q=>{t("close",!1)}),v.addEventListener("click",q=>{q.stopPropagation()}),h.addEventListener("click",q=>{q.stopPropagation()})});const l=Fn(""),a=Fn([]),c=Bu(()=>{a.value=[];const g=l.value;for(const[v,h]of o)(v.includes(g)||h.content.includes(g))&&a.value.push(h)},500),d=g=>{c()};return(g,v)=>jr((G(),rn("div",{id:"search",class:yn([sn(i)?"show--search":""])},[D("div",Vu,[D("div",$u,[Uu,D("div",Hu,[D("form",Wu,[jr(D("input",{class:"search-input",type:"search",placeholder:"\u6587\u7AE0\u641C\u7D22",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",maxlength:"512",onInput:d,"onUpdate:modelValue":v[0]||(v[0]=h=>l.value=h)},null,544),[[vc,l.value]])])]),D("span",{class:"close-btn",onClick:s},Gu)]),D("div",Yu,[D("div",Ju,[D("span",null,[Tt(" \u627E\u5230 "+rt(a.value.length)+" \u6761\u7ED3\u679C ",1),Qu]),D("ol",Xu,[(G(!0),rn(wn,null,jt(a.value,h=>(G(),rn("li",{class:"item",key:h,onClick:s},[on(sn(Mt),{to:`article${h.path}`},{default:wt(()=>[D("span",null,[Tt(rt(h.title)+" ",1),Zu,Tt(" "+rt(h.date),1)])]),_:2},1032,["to"])]))),128))])])])])],2)),[[qs,sn(i)]])}},tp=Bn(np,[["__scopeId","data-v-b64baf99"]]),ep="/assets/avator.9a88c40a.jpg",fr="Cheshire Cat",je={author:fr,CNName:"\u67F4\u90E1\u732B",description:"Wonderland",nav:[{name:fr,link:"/",children:[],liClass:"title",rel:"start",iClass:"",aClass:""},{name:"\u9996\u9875",link:"/",children:[],liClass:"",rel:"section",iClass:"i-feather",aClass:""},{name:"\u5F52\u6863",link:"/archives",children:[],liClass:"",rel:"section",iClass:"i-list-alt",aClass:""},{name:"\u6807\u7B7E",link:"/tags",children:[],liClass:"",rel:"section",iClass:"i-tags",aClass:""},{name:"\u6536\u85CF",link:"/WebSites",children:[],liClass:"",rel:"section",iClass:"i-star",aClass:""},{name:"\u5173\u4E8E",link:"/about",children:[],liClass:"",rel:"section",iClass:"i-cloud",aClass:""},{name:"Github",link:"#",children:[],liClass:"",rel:"noopener external nofollow noreferrer",iClass:"i-paper-plane",aClass:""}],sidebar:{avator:ep,author:fr,description:"\u4E00\u4E2A\u4E13\u6CE8\u4E8E\u524D\u7AEF\u7684web\u7231\u597D\u8005",articlesNum:"0",categoriesNum:"0",tagsNum:"33",socialLinks:[{url:"https://github.com/creacing/Close_To_Me",name:"github",icon:"i-github"},{url:"https://twitter.com/",name:"twitter",icon:"i-twitter"},{url:"https://www.zhihu.com/people/",name:"zhihu",icon:"i-zhihu"},{url:"https://music.163.com/",name:"music",icon:"i-cloud-music"},{url:"https://t.me/",name:"telegram",icon:"i-paper-plane"}],localPath:[{url:"/",icon:"i-feather",name:"could1"},{url:"/archives",icon:"i-list-alt",name:"could2"},{url:"/tags",icon:"i-tags",name:"could3"},{url:"/WebSites",icon:"i-star",name:"could4"},{url:"/about",icon:"i-cloud",name:"could5"}]},sites:[{url:"https://www.remove.bg/zh",title:"\u5728\u7EBF\u62A0\u56FE",color:"",description:"\u5728\u7EBF\u62A0\u56FE"},{url:"http://www.sortablejs.com/",title:"sortablejs",color:"",description:"\u529F\u80FD\u5F3A\u5927\u7684javascript\u62D6\u62FD\u5E93"},{url:"http://tool.c7sky.com/webcolor/",title:"\u7F51\u9875\u8BBE\u8BA1\u5E38\u7528\u8272\u5F69\u642D\u914D\u8868",color:"",description:"\u7F51\u9875\u8BBE\u8BA1\u5E38\u7528\u8272\u5F69\u642D\u914D\u8868"},{url:"http://www.googlefonts.net/",title:"\u8C37\u6B4C\u5B57\u4F53",color:"",description:"\u8C37\u6B4C\u5B57\u4F53"},{url:"https://jpgmin.cn/",title:"\u538B\u56FE\u5927\u5E08",color:"",description:"\u538B\u56FE\u5927\u5E08"},{url:"https://www.fontke.com/tool/rgb/eee5f8/",title:"\u989C\u8272\u67E5\u8BE2",color:"",description:"\u989C\u8272\u67E5\u8BE2"},{url:"https://animista.net/play/basic/rotate",title:"css\u52A8\u753B\u5927\u5168",color:"",description:"css\u52A8\u753B\u5927\u5168"}],cloudColorList:["#747bff","#646cff","#cf9baa","#de8293","#5b93b1","#1b5489","#7690b8","#cfd8e0","#6896b7","#db8ea6","#7b9361","#3b6f87","#b85b6c","#dd8a94","#f38b61","#ffa842","#596085","#3e3a64","#e15195","#5fa3d5","#7c94b1","#3e749f","#da7b35","#ff9d4e","#345a6d"]};const rp={id:"brand"},op={class:"content"},ip={class:"author"},sp={class:"description"},ap={__name:"Brand",setup(n){const{author:t,CNName:e,description:r}=je;return(o,i)=>(G(),rn("div",rp,[D("div",op,[on(sn(Mt),{to:"/",rel:"start"},{default:wt(()=>[D("p",ip,rt(sn(t)),1),D("h1",null,rt(sn(e)),1)]),_:1}),D("p",sp,rt(sn(r)),1)])]))}},lp=Bn(ap,[["__scopeId","data-v-6087196c"]]);const cp={__name:"BgImage",setup(n){const{isSun:t}=Mu(ee());return(e,r)=>(G(),rn("div",{id:"imgs",class:yn([sn(t)===1?"brand--image--white":"brand--image--dark"])},null,2))}},up=Bn(cp,[["__scopeId","data-v-1325b788"]]);var Rs={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},so={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},pp=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ve={CSS:{},springs:{}};function tt(n,t,e){return Math.min(Math.max(n,t),e)}function me(n,t){return n.indexOf(t)>-1}function hr(n,t){return n.apply(null,t)}var M={arr:function(n){return Array.isArray(n)},obj:function(n){return me(Object.prototype.toString.call(n),"Object")},pth:function(n){return M.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||M.svg(n)},str:function(n){return typeof n=="string"},fnc:function(n){return typeof n=="function"},und:function(n){return typeof n>"u"},nil:function(n){return M.und(n)||n===null},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return M.hex(n)||M.rgb(n)||M.hsl(n)},key:function(n){return!Rs.hasOwnProperty(n)&&!so.hasOwnProperty(n)&&n!=="targets"&&n!=="keyframes"}};function Os(n){var t=/\(([^)]+)\)/.exec(n);return t?t[1].split(",").map(function(e){return parseFloat(e)}):[]}function Ls(n,t){var e=Os(n),r=tt(M.und(e[0])?1:e[0],.1,100),o=tt(M.und(e[1])?100:e[1],.1,100),i=tt(M.und(e[2])?10:e[2],.1,100),s=tt(M.und(e[3])?0:e[3],.1,100),l=Math.sqrt(o/r),a=i/(2*Math.sqrt(o*r)),u=a<1?l*Math.sqrt(1-a*a):0,c=1,d=a<1?(a*l+-s)/u:-s+l;function g(h){var q=t?t*h/1e3:h;return a<1?q=Math.exp(-q*a*l)*(c*Math.cos(u*q)+d*Math.sin(u*q)):q=(c+d*q)*Math.exp(-q*l),h===0||h===1?h:1-q}function v(){var h=Ve.springs[n];if(h)return h;for(var q=1/6,j=0,k=0;;)if(j+=q,g(j)===1){if(k++,k>=16)break}else k=0;var _=j*q*1e3;return Ve.springs[n]=_,_}return t?g:v}function dp(n){return n===void 0&&(n=10),function(t){return Math.ceil(tt(t,1e-6,1)*n)*(1/n)}}var gp=function(){var n=11,t=1/(n-1);function e(c,d){return 1-3*d+3*c}function r(c,d){return 3*d-6*c}function o(c){return 3*c}function i(c,d,g){return((e(d,g)*c+r(d,g))*c+o(d))*c}function s(c,d,g){return 3*e(d,g)*c*c+2*r(d,g)*c+o(d)}function l(c,d,g,v,h){var q,j,k=0;do j=d+(g-d)/2,q=i(j,v,h)-c,q>0?g=j:d=j;while(Math.abs(q)>1e-7&&++k<10);return j}function a(c,d,g,v){for(var h=0;h<4;++h){var q=s(d,g,v);if(q===0)return d;var j=i(d,g,v)-c;d-=j/q}return d}function u(c,d,g,v){if(!(0<=c&&c<=1&&0<=g&&g<=1))return;var h=new Float32Array(n);if(c!==d||g!==v)for(var q=0;q<n;++q)h[q]=i(q*t,c,g);function j(k){for(var _=0,I=1,L=n-1;I!==L&&h[I]<=k;++I)_+=t;--I;var J=(k-h[I])/(h[I+1]-h[I]),$=_+J*t,H=s($,c,g);return H>=.001?a(k,$,c,g):H===0?$:l(k,_,_+t,c,g)}return function(k){return c===d&&g===v||k===0||k===1?k:i(j(k),d,v)}}return u}(),Fs=function(){var n={linear:function(){return function(r){return r}}},t={Sine:function(){return function(r){return 1-Math.cos(r*Math.PI/2)}},Circ:function(){return function(r){return 1-Math.sqrt(1-r*r)}},Back:function(){return function(r){return r*r*(3*r-2)}},Bounce:function(){return function(r){for(var o,i=4;r<((o=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((o*3-2)/22-r,2)}},Elastic:function(r,o){r===void 0&&(r=1),o===void 0&&(o=.5);var i=tt(r,1,10),s=tt(o,.1,2);return function(l){return l===0||l===1?l:-i*Math.pow(2,10*(l-1))*Math.sin((l-1-s/(Math.PI*2)*Math.asin(1/i))*(Math.PI*2)/s)}}},e=["Quad","Cubic","Quart","Quint","Expo"];return e.forEach(function(r,o){t[r]=function(){return function(i){return Math.pow(i,o+2)}}}),Object.keys(t).forEach(function(r){var o=t[r];n["easeIn"+r]=o,n["easeOut"+r]=function(i,s){return function(l){return 1-o(i,s)(1-l)}},n["easeInOut"+r]=function(i,s){return function(l){return l<.5?o(i,s)(l*2)/2:1-o(i,s)(l*-2+2)/2}},n["easeOutIn"+r]=function(i,s){return function(l){return l<.5?(1-o(i,s)(1-l*2))/2:(o(i,s)(l*2-1)+1)/2}}}),n}();function ao(n,t){if(M.fnc(n))return n;var e=n.split("(")[0],r=Fs[e],o=Os(n);switch(e){case"spring":return Ls(n,t);case"cubicBezier":return hr(gp,o);case"steps":return hr(dp,o);default:return hr(r,o)}}function Bs(n){try{var t=document.querySelectorAll(n);return t}catch{return}}function sr(n,t){for(var e=n.length,r=arguments.length>=2?arguments[1]:void 0,o=[],i=0;i<e;i++)if(i in n){var s=n[i];t.call(r,s,i,n)&&o.push(s)}return o}function ar(n){return n.reduce(function(t,e){return t.concat(M.arr(e)?ar(e):e)},[])}function gi(n){return M.arr(n)?n:(M.str(n)&&(n=Bs(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function lo(n,t){return n.some(function(e){return e===t})}function co(n){var t={};for(var e in n)t[e]=n[e];return t}function Mr(n,t){var e=co(n);for(var r in n)e[r]=t.hasOwnProperty(r)?t[r]:n[r];return e}function lr(n,t){var e=co(n);for(var r in t)e[r]=M.und(n[r])?t[r]:n[r];return e}function mp(n){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return t?"rgba("+t[1]+",1)":n}function fp(n){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,e=n.replace(t,function(l,a,u,c){return a+a+u+u+c+c}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),o=parseInt(r[1],16),i=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+o+","+i+","+s+",1)"}function hp(n){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),e=parseInt(t[1],10)/360,r=parseInt(t[2],10)/100,o=parseInt(t[3],10)/100,i=t[4]||1;function s(g,v,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?g+(v-g)*6*h:h<1/2?v:h<2/3?g+(v-g)*(2/3-h)*6:g}var l,a,u;if(r==0)l=a=u=o;else{var c=o<.5?o*(1+r):o+r-o*r,d=2*o-c;l=s(d,c,e+1/3),a=s(d,c,e),u=s(d,c,e-1/3)}return"rgba("+l*255+","+a*255+","+u*255+","+i+")"}function vp(n){if(M.rgb(n))return mp(n);if(M.hex(n))return fp(n);if(M.hsl(n))return hp(n)}function ut(n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(t)return t[1]}function bp(n){if(me(n,"translate")||n==="perspective")return"px";if(me(n,"rotate")||me(n,"skew"))return"deg"}function Rr(n,t){return M.fnc(n)?n(t.target,t.id,t.total):n}function et(n,t){return n.getAttribute(t)}function uo(n,t,e){var r=ut(t);if(lo([e,"deg","rad","turn"],r))return t;var o=Ve.CSS[t+e];if(!M.und(o))return o;var i=100,s=document.createElement(n.tagName),l=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;l.appendChild(s),s.style.position="absolute",s.style.width=i+e;var a=i/s.offsetWidth;l.removeChild(s);var u=a*parseFloat(t);return Ve.CSS[t+e]=u,u}function Vs(n,t,e){if(t in n.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=n.style[t]||getComputedStyle(n).getPropertyValue(r)||"0";return e?uo(n,o,e):o}}function po(n,t){if(M.dom(n)&&!M.inp(n)&&(!M.nil(et(n,t))||M.svg(n)&&n[t]))return"attribute";if(M.dom(n)&&lo(pp,t))return"transform";if(M.dom(n)&&t!=="transform"&&Vs(n,t))return"css";if(n[t]!=null)return"object"}function $s(n){if(!!M.dom(n)){for(var t=n.style.transform||"",e=/(\w+)\(([^)]*)\)/g,r=new Map,o;o=e.exec(t);)r.set(o[1],o[2]);return r}}function xp(n,t,e,r){var o=me(t,"scale")?1:0+bp(t),i=$s(n).get(t)||o;return e&&(e.transforms.list.set(t,i),e.transforms.last=t),r?uo(n,i,r):i}function go(n,t,e,r){switch(po(n,t)){case"transform":return xp(n,t,r,e);case"css":return Vs(n,t,e);case"attribute":return et(n,t);default:return n[t]||0}}function mo(n,t){var e=/^(\*=|\+=|-=)/.exec(n);if(!e)return n;var r=ut(n)||0,o=parseFloat(t),i=parseFloat(n.replace(e[0],""));switch(e[0][0]){case"+":return o+i+r;case"-":return o-i+r;case"*":return o*i+r}}function Us(n,t){if(M.col(n))return vp(n);if(/\s/g.test(n))return n;var e=ut(n),r=e?n.substr(0,n.length-e.length):n;return t?r+t:r}function fo(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function yp(n){return Math.PI*2*et(n,"r")}function qp(n){return et(n,"width")*2+et(n,"height")*2}function wp(n){return fo({x:et(n,"x1"),y:et(n,"y1")},{x:et(n,"x2"),y:et(n,"y2")})}function Hs(n){for(var t=n.points,e=0,r,o=0;o<t.numberOfItems;o++){var i=t.getItem(o);o>0&&(e+=fo(r,i)),r=i}return e}function jp(n){var t=n.points;return Hs(n)+fo(t.getItem(t.numberOfItems-1),t.getItem(0))}function Ws(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return yp(n);case"rect":return qp(n);case"line":return wp(n);case"polyline":return Hs(n);case"polygon":return jp(n)}}function kp(n){var t=Ws(n);return n.setAttribute("stroke-dasharray",t),t}function _p(n){for(var t=n.parentNode;M.svg(t)&&M.svg(t.parentNode);)t=t.parentNode;return t}function Ks(n,t){var e=t||{},r=e.el||_p(n),o=r.getBoundingClientRect(),i=et(r,"viewBox"),s=o.width,l=o.height,a=e.viewBox||(i?i.split(" "):[0,0,s,l]);return{el:r,viewBox:a,x:a[0]/1,y:a[1]/1,w:s,h:l,vW:a[2],vH:a[3]}}function Sp(n,t){var e=M.str(n)?Bs(n)[0]:n,r=t||100;return function(o){return{property:o,el:e,svg:Ks(e),totalLength:Ws(e)*(r/100)}}}function Cp(n,t,e){function r(c){c===void 0&&(c=0);var d=t+c>=1?t+c:0;return n.el.getPointAtLength(d)}var o=Ks(n.el,n.svg),i=r(),s=r(-1),l=r(1),a=e?1:o.w/o.vW,u=e?1:o.h/o.vH;switch(n.property){case"x":return(i.x-o.x)*a;case"y":return(i.y-o.y)*u;case"angle":return Math.atan2(l.y-s.y,l.x-s.x)*180/Math.PI}}function mi(n,t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Us(M.pth(n)?n.totalLength:n,t)+"";return{original:r,numbers:r.match(e)?r.match(e).map(Number):[0],strings:M.str(n)||t?r.split(e):[]}}function ho(n){var t=n?ar(M.arr(n)?n.map(gi):gi(n)):[];return sr(t,function(e,r,o){return o.indexOf(e)===r})}function Gs(n){var t=ho(n);return t.map(function(e,r){return{target:e,id:r,total:t.length,transforms:{list:$s(e)}}})}function Ep(n,t){var e=co(t);if(/^spring/.test(e.easing)&&(e.duration=Ls(e.easing)),M.arr(n)){var r=n.length,o=r===2&&!M.obj(n[0]);o?n={value:n}:M.fnc(t.duration)||(e.duration=t.duration/r)}var i=M.arr(n)?n:[n];return i.map(function(s,l){var a=M.obj(s)&&!M.pth(s)?s:{value:s};return M.und(a.delay)&&(a.delay=l?0:t.delay),M.und(a.endDelay)&&(a.endDelay=l===i.length-1?t.endDelay:0),a}).map(function(s){return lr(s,e)})}function Np(n){for(var t=sr(ar(n.map(function(i){return Object.keys(i)})),function(i){return M.key(i)}).reduce(function(i,s){return i.indexOf(s)<0&&i.push(s),i},[]),e={},r=function(i){var s=t[i];e[s]=n.map(function(l){var a={};for(var u in l)M.key(u)?u==s&&(a.value=l[u]):a[u]=l[u];return a})},o=0;o<t.length;o++)r(o);return e}function Ip(n,t){var e=[],r=t.keyframes;r&&(t=lr(Np(r),t));for(var o in t)M.key(o)&&e.push({name:o,tweens:Ep(t[o],n)});return e}function zp(n,t){var e={};for(var r in n){var o=Rr(n[r],t);M.arr(o)&&(o=o.map(function(i){return Rr(i,t)}),o.length===1&&(o=o[0])),e[r]=o}return e.duration=parseFloat(e.duration),e.delay=parseFloat(e.delay),e}function Dp(n,t){var e;return n.tweens.map(function(r){var o=zp(r,t),i=o.value,s=M.arr(i)?i[1]:i,l=ut(s),a=go(t.target,n.name,l,t),u=e?e.to.original:a,c=M.arr(i)?i[0]:u,d=ut(c)||ut(a),g=l||d;return M.und(s)&&(s=u),o.from=mi(c,g),o.to=mi(mo(s,c),g),o.start=e?e.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=ao(o.easing,o.duration),o.isPath=M.pth(i),o.isPathTargetInsideSVG=o.isPath&&M.svg(t.target),o.isColor=M.col(o.from.original),o.isColor&&(o.round=1),e=o,o})}var Ys={css:function(n,t,e){return n.style[t]=e},attribute:function(n,t,e){return n.setAttribute(t,e)},object:function(n,t,e){return n[t]=e},transform:function(n,t,e,r,o){if(r.list.set(t,e),t===r.last||o){var i="";r.list.forEach(function(s,l){i+=l+"("+s+") "}),n.style.transform=i}}};function Js(n,t){var e=Gs(n);e.forEach(function(r){for(var o in t){var i=Rr(t[o],r),s=r.target,l=ut(i),a=go(s,o,l,r),u=l||ut(a),c=mo(Us(i,u),a),d=po(s,o);Ys[d](s,o,c,r.transforms,!0)}})}function Pp(n,t){var e=po(n.target,t.name);if(e){var r=Dp(t,n),o=r[r.length-1];return{type:e,property:t.name,animatable:n,tweens:r,duration:o.end,delay:r[0].delay,endDelay:o.endDelay}}}function Tp(n,t){return sr(ar(n.map(function(e){return t.map(function(r){return Pp(e,r)})})),function(e){return!M.und(e)})}function Qs(n,t){var e=n.length,r=function(i){return i.timelineOffset?i.timelineOffset:0},o={};return o.duration=e?Math.max.apply(Math,n.map(function(i){return r(i)+i.duration})):t.duration,o.delay=e?Math.min.apply(Math,n.map(function(i){return r(i)+i.delay})):t.delay,o.endDelay=e?o.duration-Math.max.apply(Math,n.map(function(i){return r(i)+i.duration-i.endDelay})):t.endDelay,o}var fi=0;function Ap(n){var t=Mr(Rs,n),e=Mr(so,n),r=Ip(e,n),o=Gs(n.targets),i=Tp(o,r),s=Qs(i,e),l=fi;return fi++,lr(t,{id:l,children:[],animatables:o,animations:i,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var Un=[],Xs=function(){var n;function t(){!n&&(!hi()||!tn.suspendWhenDocumentHidden)&&Un.length>0&&(n=requestAnimationFrame(e))}function e(o){for(var i=Un.length,s=0;s<i;){var l=Un[s];l.paused?(Un.splice(s,1),i--):(l.tick(o),s++)}n=s>0?requestAnimationFrame(e):void 0}function r(){!tn.suspendWhenDocumentHidden||(hi()?n=cancelAnimationFrame(n):(Un.forEach(function(o){return o._onDocumentVisibility()}),Xs()))}return typeof document<"u"&&document.addEventListener("visibilitychange",r),t}();function hi(){return!!document&&document.hidden}function tn(n){n===void 0&&(n={});var t=0,e=0,r=0,o,i=0,s=null;function l(_){var I=window.Promise&&new Promise(function(L){return s=L});return _.finished=I,I}var a=Ap(n);l(a);function u(){var _=a.direction;_!=="alternate"&&(a.direction=_!=="normal"?"normal":"reverse"),a.reversed=!a.reversed,o.forEach(function(I){return I.reversed=a.reversed})}function c(_){return a.reversed?a.duration-_:_}function d(){t=0,e=c(a.currentTime)*(1/tn.speed)}function g(_,I){I&&I.seek(_-I.timelineOffset)}function v(_){if(a.reversePlayback)for(var L=i;L--;)g(_,o[L]);else for(var I=0;I<i;I++)g(_,o[I])}function h(_){for(var I=0,L=a.animations,J=L.length;I<J;){var $=L[I],H=$.animatable,K=$.tweens,dn=K.length-1,Y=K[dn];dn&&(Y=sr(K,function(P){return _<P.end})[0]||Y);for(var vn=tt(_-Y.start-Y.delay,0,Y.duration)/Y.duration,kn=isNaN(vn)?1:Y.easing(vn),qn=Y.to.strings,En=Y.round,hn=[],xn=Y.to.numbers.length,X=void 0,Z=0;Z<xn;Z++){var jn=void 0,it=Y.to.numbers[Z],On=Y.from.numbers[Z]||0;Y.isPath?jn=Cp(Y.value,kn*it,Y.isPathTargetInsideSVG):jn=On+kn*(it-On),En&&(Y.isColor&&Z>2||(jn=Math.round(jn*En)/En)),hn.push(jn)}var Tn=qn.length;if(!Tn)X=hn[0];else{X=qn[0];for(var _n=0;_n<Tn;_n++){qn[_n];var gt=qn[_n+1],b=hn[_n];isNaN(b)||(gt?X+=b+gt:X+=b+" ")}}Ys[$.type](H.target,$.property,X,H.transforms),$.currentValue=X,I++}}function q(_){a[_]&&!a.passThrough&&a[_](a)}function j(){a.remaining&&a.remaining!==!0&&a.remaining--}function k(_){var I=a.duration,L=a.delay,J=I-a.endDelay,$=c(_);a.progress=tt($/I*100,0,100),a.reversePlayback=$<a.currentTime,o&&v($),!a.began&&a.currentTime>0&&(a.began=!0,q("begin")),!a.loopBegan&&a.currentTime>0&&(a.loopBegan=!0,q("loopBegin")),$<=L&&a.currentTime!==0&&h(0),($>=J&&a.currentTime!==I||!I)&&h(I),$>L&&$<J?(a.changeBegan||(a.changeBegan=!0,a.changeCompleted=!1,q("changeBegin")),q("change"),h($)):a.changeBegan&&(a.changeCompleted=!0,a.changeBegan=!1,q("changeComplete")),a.currentTime=tt($,0,I),a.began&&q("update"),_>=I&&(e=0,j(),a.remaining?(t=r,q("loopComplete"),a.loopBegan=!1,a.direction==="alternate"&&u()):(a.paused=!0,a.completed||(a.completed=!0,q("loopComplete"),q("complete"),!a.passThrough&&"Promise"in window&&(s(),l(a)))))}return a.reset=function(){var _=a.direction;a.passThrough=!1,a.currentTime=0,a.progress=0,a.paused=!0,a.began=!1,a.loopBegan=!1,a.changeBegan=!1,a.completed=!1,a.changeCompleted=!1,a.reversePlayback=!1,a.reversed=_==="reverse",a.remaining=a.loop,o=a.children,i=o.length;for(var I=i;I--;)a.children[I].reset();(a.reversed&&a.loop!==!0||_==="alternate"&&a.loop===1)&&a.remaining++,h(a.reversed?a.duration:0)},a._onDocumentVisibility=d,a.set=function(_,I){return Js(_,I),a},a.tick=function(_){r=_,t||(t=r),k((r+(e-t))*tn.speed)},a.seek=function(_){k(c(_))},a.pause=function(){a.paused=!0,d()},a.play=function(){!a.paused||(a.completed&&a.reset(),a.paused=!1,Un.push(a),d(),Xs())},a.reverse=function(){u(),a.completed=!a.reversed,d()},a.restart=function(){a.reset(),a.play()},a.remove=function(_){var I=ho(_);Zs(I,a)},a.reset(),a.autoplay&&a.play(),a}function vi(n,t){for(var e=t.length;e--;)lo(n,t[e].animatable.target)&&t.splice(e,1)}function Zs(n,t){var e=t.animations,r=t.children;vi(n,e);for(var o=r.length;o--;){var i=r[o],s=i.animations;vi(n,s),!s.length&&!i.children.length&&r.splice(o,1)}!e.length&&!r.length&&t.pause()}function Mp(n){for(var t=ho(n),e=Un.length;e--;){var r=Un[e];Zs(t,r)}}function Rp(n,t){t===void 0&&(t={});var e=t.direction||"normal",r=t.easing?ao(t.easing):null,o=t.grid,i=t.axis,s=t.from||0,l=s==="first",a=s==="center",u=s==="last",c=M.arr(n),d=parseFloat(c?n[0]:n),g=c?parseFloat(n[1]):0,v=ut(c?n[1]:n)||0,h=t.start||0+(c?d:0),q=[],j=0;return function(k,_,I){if(l&&(s=0),a&&(s=(I-1)/2),u&&(s=I-1),!q.length){for(var L=0;L<I;L++){if(!o)q.push(Math.abs(s-L));else{var J=a?(o[0]-1)/2:s%o[0],$=a?(o[1]-1)/2:Math.floor(s/o[0]),H=L%o[0],K=Math.floor(L/o[0]),dn=J-H,Y=$-K,vn=Math.sqrt(dn*dn+Y*Y);i==="x"&&(vn=-dn),i==="y"&&(vn=-Y),q.push(vn)}j=Math.max.apply(Math,q)}r&&(q=q.map(function(qn){return r(qn/j)*j})),e==="reverse"&&(q=q.map(function(qn){return i?qn<0?qn*-1:-qn:Math.abs(j-qn)}))}var kn=c?(g-d)/j:d;return h+kn*(Math.round(q[_]*100)/100)+v}}function Op(n){n===void 0&&(n={});var t=tn(n);return t.duration=0,t.add=function(e,r){var o=Un.indexOf(t),i=t.children;o>-1&&Un.splice(o,1);function s(g){g.passThrough=!0}for(var l=0;l<i.length;l++)s(i[l]);var a=lr(e,Mr(so,n));a.targets=a.targets||n.targets;var u=t.duration;a.autoplay=!1,a.direction=t.direction,a.timelineOffset=M.und(r)?u:mo(r,u),s(t),t.seek(a.timelineOffset);var c=tn(a);s(c),i.push(c);var d=Qs(i,n);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}tn.version="3.2.1";tn.speed=1;tn.suspendWhenDocumentHidden=!0;tn.running=Un;tn.remove=Mp;tn.get=go;tn.set=Js;tn.convertPx=uo;tn.path=Sp;tn.setDashoffset=kp;tn.stagger=Rp;tn.timeline=Op;tn.easing=ao;tn.penner=Fs;tn.random=function(n,t){return Math.floor(Math.random()*(t-n+1))+n};const Lp={class:"inner"},Fp={class:"inner"},Bp=D("div",{class:"lines","aria-label":"\u5207\u6362\u5BFC\u822A\u680F"},[D("span",{class:"line"}),D("span",{class:"line"}),D("span",{class:"line"})],-1),Vp=[Bp],$p={class:"menu"},Up={key:0,class:"submenu"},Hp={class:"right"},Wp={class:"item theme"},Kp={__name:"Nav",setup(n){const{nav:t}=je,e=ee(),r=Fn(!0),o=Fn(!1);be(()=>{const h=localStorage.getItem("isSun"),q=document.documentElement;h&&(r.value=Number(h)!==0,e.isSun=r.value?1:0,r.value?q.setAttribute("data-theme",""):q.setAttribute("data-theme","dark"))});const i=()=>{const h=document.documentElement;r.value=!r.value,o.value=!o.value,localStorage.setItem("isSun",r.value?1:0),e.isSun=r.value?1:0,r.value?h.setAttribute("data-theme",""):h.setAttribute("data-theme","dark"),setTimeout(()=>{r.value=!r.value},200),setTimeout(()=>{o.value=!o.value,r.value=!r.value},2500)},s=Fn(!1),l=()=>{s.value=!0},a=h=>{s.value=h},u=Fn(2);let c=0,d=null;be(()=>{d=document.getElementById("waves").offsetTop,window.addEventListener("scroll",g,!0)});const g=()=>{const h=document.documentElement.scrollTop||document.body.scrollTop;h>c?h<d?u.value=2:u.value=1:h<d?u.value=2:u.value=0,c=h};Ze(()=>{window.removeEventListener("scroll",g)});const v=()=>{e.showIndex=!e.showIndex};return(h,q)=>(G(),rn(wn,null,[on(Eu,{isShow:o.value,isSun:r.value},null,8,["isShow","isSun"]),D("div",Lp,[on(lp),D("nav",{id:"nav",class:yn(u.value===2?"":u.value===1?"show down":"show up")},[D("div",Fp,[D("div",{class:yn(["toggle",h.showIndex?"close":""]),onClick:v},Vp,2),D("ul",$p,[(G(!0),rn(wn,null,jt(sn(t),j=>(G(),rn("li",{class:yn(["item",j.liClass]),key:j},[on(sn(Mt),{to:j.link,class:yn(j.aClass),rel:j.rel},{default:wt(()=>[j.iClass?(G(),rn("i",{key:0,class:yn(["ic",j.iClass])},null,2)):le("",!0),Tt(" "+rt(j.name),1)]),_:2},1032,["to","class","rel"]),j.children.length>0?(G(),rn("ul",Up,[(G(!0),rn(wn,null,jt(j.children,k=>(G(),rn("li",{class:"item",key:k},[on(sn(Mt),{to:k.link,rel:k.rel,class:yn(k.iClass)},{default:wt(()=>[D("i",{class:yn(["ic",k.iClass])},null,2),Tt(" "+rt(k.name),1)]),_:2},1032,["to","rel","class"])]))),128))])):le("",!0)],2))),128))]),D("ul",Hp,[D("li",Wp,[r.value?(G(),rn("i",{key:0,class:"ic i-sun",onClick:i,"data-theme":""})):le("",!0),r.value?le("",!0):(G(),rn("i",{key:1,class:"ic i-moon",onClick:i,"data-theme":"dark"}))]),D("li",{class:"item search"},[D("i",{class:"ic i-search",onClick:l})])])])],2)]),on(up),on(tp,{showSearch:s.value,onClose:a},null,8,["showSearch"])],64))}};const na=n=>(Je("data-v-4d360a40"),n=n(),Qe(),n),Gp={class:"copywrite"},Yp=na(()=>D("span",{class:"sakura"},[D("i",{class:"ic i-sakura rotate"})],-1)),Jp=Tt(" 2019 \u2013 "),Qp=na(()=>D("span",{class:"sakura"},[D("i",{class:"ic i-sakura rotate"})],-1)),Xp={__name:"Copyright",setup(n){const{author:t}=je,r=new Date().getFullYear();return(o,i)=>(G(),rn("div",Gp,[Yp,Jp,D("span",null,rt(sn(r)),1),Qp,D("span",null,rt(sn(t)),1)]))}},Zp=Bn(Xp,[["__scopeId","data-v-4d360a40"]]);const nd={class:"footer"},td={__name:"Footer",setup(n){return(t,e)=>(G(),rn("div",nd,[on(Zp)]))}},ed=Bn(td,[["__scopeId","data-v-70cab4db"]]);const rd={},od=n=>(Je("data-v-82a0b8aa"),n=n(),Qe(),n),id={id:"waves"},sd=od(()=>D("svg",{class:"waves",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"},[D("defs",null,[D("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})]),D("g",{class:"parallax"},[D("use",{"xlink:href":"#gentle-wave",x:"48",y:"0"}),D("use",{"xlink:href":"#gentle-wave",x:"48",y:"3"}),D("use",{"xlink:href":"#gentle-wave",x:"48",y:"5"}),D("use",{"xlink:href":"#gentle-wave",x:"48",y:"7"})])],-1)),ad=[sd];function ld(n,t){return G(),rn("div",id,ad)}const cd=Bn(rd,[["render",ld],["__scopeId","data-v-82a0b8aa"]]);const ud=n=>(Je("data-v-6fd440ab"),n=n(),Qe(),n),pd={id:"sidebar"},dd=ud(()=>D("div",null,[D("h2",{class:"title"},"\u6587\u7AE0\u76EE\u5F55")],-1)),gd={class:"content g--animation","data-title":"\u6587\u7AE0\u76EE\u5F55"},md={href:"#"},fd=["innerHTML"],hd={__name:"Index",props:{sideIndex:{type:Array,default:()=>[]}},setup(n){const t=n,{sideIndex:e}=qt(t);return(r,o)=>(G(),rn("div",pd,[dd,D("div",gd,[D("ol",null,[(G(!0),rn(wn,null,jt(sn(e),(i,s)=>(G(),rn("li",{class:"index-item",key:i},[D("a",md,[D("span",{innerHTML:i,class:"index--title"},null,8,fd)])]))),128))])])]))}},vd=Bn(hd,[["__scopeId","data-v-6fd440ab"]]);const bd={id:"mobileSide"},xd={class:"side--links g--animation","data-title":"\u7AD9\u70B9\u6982\u89C8"},yd=["href","title"],qd={__name:"MobileSide",props:{sideIndex:{type:Array,default:()=>[]}},setup(n){const t=n,{sidebar:e}=je,r=ee();return qt(r),qt(t),(o,i)=>(G(),rn("div",bd,[D("div",xd,[(G(!0),rn(wn,null,jt(sn(e).localPath,s=>(G(),we(sn(Mt),{class:yn(["link",s.name]),to:s.url,key:s},{default:wt(()=>[D("i",{class:yn(["ic",s.icon])},null,2)]),_:2},1032,["to","class"]))),128)),(G(!0),rn(wn,null,jt(sn(e).socialLinks,s=>(G(),rn("a",{key:s,href:s.url,rel:"noopener external nofollow noreferrer",target:"_blank",class:yn(["link",s.name]),title:s.url},[D("i",{class:yn(["ic",s.icon])},null,2)],10,yd))),128))])]))}},wd=Bn(qd,[["__scopeId","data-v-b343f26b"]]);const jd={id:"sideTool"},kd={class:"side--links g--animation","data-title":"\u7AD9\u70B9\u6982\u89C8"},_d=["href","title"],Sd={__name:"Sidebar",setup(n){const{sidebar:t}=je,e=ee();return qt(e),(r,o)=>(G(),rn("div",jd,[D("div",kd,[(G(!0),rn(wn,null,jt(sn(t).localPath,i=>(G(),we(sn(Mt),{class:yn(["link",i.name]),to:i.url,key:i},{default:wt(()=>[D("i",{class:yn(["ic",i.icon])},null,2)]),_:2},1032,["to","class"]))),128)),(G(!0),rn(wn,null,jt(sn(t).socialLinks,i=>(G(),rn("a",{key:i,href:i.url,rel:"noopener external nofollow noreferrer",target:"_blank",class:yn(["link",i.name]),title:i.url},[D("i",{class:yn(["ic",i.icon])},null,2)],10,_d))),128))])]))}},Cd=Bn(Sd,[["__scopeId","data-v-756663a2"]]);const Ed={class:"layout"},Nd={id:"main",class:"g--animation g--content"},Id={__name:"LayOut",setup(n){const t=ee(),{showIndex:e}=qt(t),r=ku(),o=Fn([]),i=Fn(!1);return Pt(()=>r.path,(s,l)=>{i.value=!!s.startsWith("/article/")},{immediate:!0}),Pt(()=>t.sideIndex,(s,l)=>{o.value=s},{immediate:!0}),(s,l)=>(G(),rn("div",Ed,[on(Cd,{class:"full-side"}),i.value?(G(),we(vd,{key:0,sideIndex:o.value,class:"sideIndex full-side"},null,8,["sideIndex"])):le("",!0),jr(on(wd,{sideIndex:o.value},null,8,["sideIndex"]),[[qs,sn(e)]]),D("div",Nd,[yl(s.$slots,"content",{},void 0,!0)])]))}},zd=Bn(Id,[["__scopeId","data-v-02b5044a"]]),nt=document.createElement("canvas");nt.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(nt);const Ln=nt.getContext("2d"),Dd=30,bi=["rgba(255,182,185,.9)","rgba(250,227,217,.9)","rgba(187,222,214,.9)","rgba(138,198,209,.9)"];let ta=0,ea=0;function ra(){nt.width=window.innerWidth*2,nt.height=window.innerHeight*2,nt.style.width=window.innerWidth+"px",nt.style.height=window.innerHeight+"px",nt.getContext("2d").scale(2,2)}function Pd(n){ta=n.clientX||n.touches&&n.touches[0].clientX,ea=n.clientY||n.touches&&n.touches[0].clientY}function Td(n,t){let e=Ad(n,t);const r=[];for(var o=0;o<Dd;o++)r.push(Md(n,t));tn.timeline().add({targets:r,x:function(i){return i.endPos.x},y:function(i){return i.endPos.y},radius:.1,duration:tn.random(1200,1800),easing:"easeOutExpo",update:xi}).add({targets:e,radius:tn.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:tn.random(600,800)},duration:tn.random(1200,1800),easing:"easeOutExpo",update:xi},0)}function Ad(n,t){const e={};return e.x=n,e.y=t,e.color="#FFF",e.radius=.1,e.alpha=.5,e.lineWidth=6,e.draw=function(){Ln.globalAlpha=e.alpha,Ln.beginPath(),Ln.arc(e.x,e.y,e.radius,0,2*Math.PI,!0),Ln.lineWidth=e.lineWidth,Ln.strokeStyle=e.color,Ln.stroke(),Ln.globalAlpha=1},e}function Md(n,t){const e={};return e.x=n,e.y=t,e.color=bi[tn.random(0,bi.length-1)],e.radius=tn.random(16,32),e.endPos=Rd(e),e.draw=function(){Ln.beginPath(),Ln.arc(e.x,e.y,e.radius,0,2*Math.PI,!0),Ln.fillStyle=e.color,Ln.fill()},e}function xi(n){for(var t=0;t<n.animatables.length;t++)n.animatables[t].target.draw()}function Rd(n){var t=tn.random(0,360)*Math.PI/180,e=tn.random(50,180),r=[-1,1][tn.random(0,1)]*e;return{x:n.x+r*Math.cos(t),y:n.y+r*Math.sin(t)}}const Od=tn({duration:1/0,update:function(){Ln.clearRect(0,0,nt.width,nt.height)}});function Ld(n){Od.play(),Pd(n),Td(ta,ea)}ra();window.addEventListener("resize",ra,!1);const Fd={id:"container"},Bd={id:"header"},Vd={id:"footer"},$d={__name:"App",setup(n){return Fn(!1),be(()=>{document.addEventListener("click",function(t){Ld(t)},!1)}),(t,e)=>(G(),rn("div",Fd,[D("header",Bd,[on(Kp)]),on(cd),D("main",null,[on(zd,null,{content:wt(()=>[on(sn(Ds))]),_:1})]),D("footer",Vd,[on(ed)])]))}},Ud=Bn($d,[["__scopeId","data-v-e9d48328"]]),Hd="modulepreload",Wd=function(n){return"/"+n},yi={},Ct=function(t,e,r){return!e||e.length===0?t():Promise.all(e.map(o=>{if(o=Wd(o),o in yi)return;yi[o]=!0;const i=o.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Hd,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((a,u)=>{l.addEventListener("load",a),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},Kd=wu({history:Fc(),routes:[{path:"/",name:"home",component:()=>Ct(()=>import("./Home.7444c808.js"),["assets/Home.7444c808.js","assets/Home.4507e203.css"])},{path:"/tags",name:"tags",component:()=>Ct(()=>import("./Tags.e0073252.js"),[])},{path:"/categories",name:"categories",component:()=>Ct(()=>import("./Categories.9b2de8c7.js"),[])},{path:"/archives",name:"archives",component:()=>Ct(()=>import("./Archives.34aae4bb.js"),[])},{path:"/about",name:"about",component:()=>Ct(()=>import("./About.4c0ae64b.js"),[])},{path:"/WebSites",name:"WebSites",component:()=>Ct(()=>import("./WebSites.4cd5ba6d.js"),["assets/WebSites.4cd5ba6d.js","assets/WebSites.c4924ace.css"])},{path:"/article/:type/:path",name:"article",component:()=>Ct(()=>import("./Post.295d1bdd.js"),["assets/Post.295d1bdd.js","assets/Post.a6184fa7.css"])}]});const vo=yc(Ud);vo.use(Kd);vo.use(Iu());vo.mount("#app");export{wn as F,Mt as R,Bn as _,D as a,jt as b,rn as c,rt as d,le as e,Qe as f,on as g,wt as h,Tt as i,Lr as j,je as k,we as l,Bl as m,yn as n,G as o,Je as p,ku as q,Fn as r,ee as s,qt as t,sn as u,qs as v,jr as w,Pt as x};
