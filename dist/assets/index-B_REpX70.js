(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Uy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qp={exports:{}},Bl={},Kp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=Symbol.for("react.element"),jy=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),By=Symbol.for("react.strict_mode"),Wy=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),Vy=Symbol.for("react.forward_ref"),Gy=Symbol.for("react.suspense"),qy=Symbol.for("react.memo"),Ky=Symbol.for("react.lazy"),wh=Symbol.iterator;function Qy(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var Qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,Xp={};function pi(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Qp}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=pi.prototype;function xc(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Qp}var Rc=xc.prototype=new Jp;Rc.constructor=xc;Yp(Rc,pi.prototype);Rc.isPureReactComponent=!0;var Eh=Array.isArray,Zp=Object.prototype.hasOwnProperty,Nc={current:null},em={key:!0,ref:!0,__self:!0,__source:!0};function tm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zp.call(e,r)&&!em.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ms,type:t,key:s,ref:o,props:i,_owner:Nc.current}}function Yy(t,e){return{$$typeof:Ms,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ms}function Xy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sh=/\/+/g;function Ca(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xy(""+t.key):e.toString(36)}function Ro(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ms:case jy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ca(o,0):r,Eh(i)?(n="",t!=null&&(n=t.replace(Sh,"$&/")+"/"),Ro(i,e,n,"",function(u){return u})):i!=null&&(bc(i)&&(i=Yy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Eh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Ca(s,l);o+=Ro(s,e,n,a,i)}else if(a=Qy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Ca(s,l++),o+=Ro(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function io(t,e,n){if(t==null)return t;var r=[],i=0;return Ro(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Jy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},No={transition:null},Zy={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:No,ReactCurrentOwner:Nc};function nm(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:io,forEach:function(t,e,n){io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return io(t,function(){e++}),e},toArray:function(t){return io(t,function(e){return e})||[]},only:function(t){if(!bc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=pi;z.Fragment=zy;z.Profiler=Wy;z.PureComponent=xc;z.StrictMode=By;z.Suspense=Gy;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;z.act=nm;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Zp.call(e,a)&&!em.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ms,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:$y,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hy,_context:t},t.Consumer=t};z.createElement=tm;z.createFactory=function(t){var e=tm.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Vy,render:t}};z.isValidElement=bc;z.lazy=function(t){return{$$typeof:Ky,_payload:{_status:-1,_result:t},_init:Jy}};z.memo=function(t,e){return{$$typeof:qy,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=No.transition;No.transition={};try{t()}finally{No.transition=e}};z.unstable_act=nm;z.useCallback=function(t,e){return We.current.useCallback(t,e)};z.useContext=function(t){return We.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return We.current.useDeferredValue(t)};z.useEffect=function(t,e){return We.current.useEffect(t,e)};z.useId=function(){return We.current.useId()};z.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return We.current.useMemo(t,e)};z.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};z.useRef=function(t){return We.current.useRef(t)};z.useState=function(t){return We.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return We.current.useTransition()};z.version="18.3.1";Kp.exports=z;var x=Kp.exports;const rm=Uy(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=x,t0=Symbol.for("react.element"),n0=Symbol.for("react.fragment"),r0=Object.prototype.hasOwnProperty,i0=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s0={key:!0,ref:!0,__self:!0,__source:!0};function im(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)r0.call(e,r)&&!s0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:t0,type:t,key:s,ref:o,props:i,_owner:i0.current}}Bl.Fragment=n0;Bl.jsx=im;Bl.jsxs=im;qp.exports=Bl;var f=qp.exports,fu={},sm={exports:{}},rt={},om={exports:{}},lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,M){var L=N.length;N.push(M);e:for(;0<L;){var re=L-1>>>1,fe=N[re];if(0<i(fe,M))N[re]=M,N[L]=fe,L=re;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],L=N.pop();if(L!==M){N[0]=L;e:for(var re=0,fe=N.length,Sr=fe>>>1;re<Sr;){var It=2*(re+1)-1,ki=N[It],xt=It+1,A=N[xt];if(0>i(ki,L))xt<fe&&0>i(A,ki)?(N[re]=A,N[xt]=L,re=xt):(N[re]=ki,N[It]=L,re=It);else if(xt<fe&&0>i(A,L))N[re]=A,N[xt]=L,re=xt;else break e}}return M}function i(N,M){var L=N.sortIndex-M.sortIndex;return L!==0?L:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,g=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function w(N){if(y=!1,_(N),!v)if(n(a)!==null)v=!0,Er(T);else{var M=n(u);M!==null&&on(w,M.startTime-N)}}function T(N,M){v=!1,y&&(y=!1,m(P),P=-1),g=!0;var L=h;try{for(_(M),d=n(a);d!==null&&(!(d.expirationTime>M)||N&&!te());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var fe=re(d.expirationTime<=M);M=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(a)&&r(a),_(M)}else r(a);d=n(a)}if(d!==null)var Sr=!0;else{var It=n(u);It!==null&&on(w,It.startTime-M),Sr=!1}return Sr}finally{d=null,h=L,g=!1}}var I=!1,R=null,P=-1,H=5,E=-1;function te(){return!(t.unstable_now()-E<H)}function pt(){if(R!==null){var N=t.unstable_now();E=N;var M=!0;try{M=R(!0,N)}finally{M?st():(I=!1,R=null)}}else I=!1}var st;if(typeof p=="function")st=function(){p(pt)};else if(typeof MessageChannel<"u"){var no=new MessageChannel,ro=no.port2;no.port1.onmessage=pt,st=function(){ro.postMessage(null)}}else st=function(){S(pt,0)};function Er(N){R=N,I||(I=!0,st())}function on(N,M){P=S(function(){N(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Er(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var L=h;h=M;try{return N()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return M()}finally{h=L}},t.unstable_scheduleCallback=function(N,M,L){var re=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?re+L:re):L=re,N){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=L+fe,N={id:c++,callback:M,priorityLevel:N,startTime:L,expirationTime:fe,sortIndex:-1},L>re?(N.sortIndex=L,e(u,N),n(a)===null&&N===n(u)&&(y?(m(P),P=-1):y=!0,on(w,L-re))):(N.sortIndex=fe,e(a,N),v||g||(v=!0,Er(T))),N},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(N){var M=h;return function(){var L=h;h=M;try{return N.apply(this,arguments)}finally{h=L}}}})(lm);om.exports=lm;var o0=om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=x,nt=o0;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var am=new Set,os={};function gr(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(os[t]=e,t=0;t<e.length;t++)am.add(e[t])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,a0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},kh={};function u0(t){return pu.call(kh,t)?!0:pu.call(Ch,t)?!1:a0.test(t)?kh[t]=!0:(Ch[t]=!0,!1)}function c0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d0(t,e,n,r){if(e===null||typeof e>"u"||c0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function He(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new He(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new He(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new He(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new He(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new He(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new He(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new He(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new He(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new He(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pc=/[\-:]([a-z])/g;function Ac(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pc,Ac);be[e]=new He(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pc,Ac);be[e]=new He(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pc,Ac);be[e]=new He(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new He(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new He(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oc(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d0(e,n,i,r)&&(n=null),r||i===null?u0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rn=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),xr=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),Dc=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),cm=Symbol.for("react.context"),Mc=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),Lc=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),dm=Symbol.for("react.offscreen"),Th=Symbol.iterator;function Ti(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,ka;function ji(t){if(ka===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ka=e&&e[1]||""}return`
`+ka+t}var Ta=!1;function Ia(t,e){if(!t||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ji(t):""}function h0(t){switch(t.tag){case 5:return ji(t.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return t=Ia(t.type,!1),t;case 11:return t=Ia(t.type.render,!1),t;case 1:return t=Ia(t.type,!0),t;default:return""}}function vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rr:return"Fragment";case xr:return"Portal";case mu:return"Profiler";case Dc:return"StrictMode";case gu:return"Suspense";case _u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cm:return(t.displayName||"Context")+".Consumer";case um:return(t._context.displayName||"Context")+".Provider";case Mc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lc:return e=t.displayName||null,e!==null?e:vu(t.type)||"Memo";case un:e=t._payload,t=t._init;try{return vu(t(e))}catch{}}return null}function f0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vu(e);case 8:return e===Dc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function On(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p0(t){var e=hm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oo(t){t._valueTracker||(t._valueTracker=p0(t))}function fm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yu(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ih(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=On(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pm(t,e){e=e.checked,e!=null&&Oc(t,"checked",e,!1)}function wu(t,e){pm(t,e);var n=On(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eu(t,e.type,On(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eu(t,e,n){(e!=="number"||Vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zi=Array.isArray;function Br(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+On(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(zi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:On(n)}}function mm(t,e){var n=On(e.value),r=On(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,_m=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m0=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(t){m0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hi[e]=Hi[t]})});function vm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hi.hasOwnProperty(t)&&Hi[t]?(""+e).trim():e+"px"}function ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var g0=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(t,e){if(e){if(g0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Tu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function Fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xu=null,Wr=null,Hr=null;function bh(t){if(t=Us(t)){if(typeof xu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Gl(e),xu(t.stateNode,t.type,e))}}function wm(t){Wr?Hr?Hr.push(t):Hr=[t]:Wr=t}function Em(){if(Wr){var t=Wr,e=Hr;if(Hr=Wr=null,bh(t),e)for(t=0;t<e.length;t++)bh(e[t])}}function Sm(t,e){return t(e)}function Cm(){}var xa=!1;function km(t,e,n){if(xa)return t(e,n);xa=!0;try{return Sm(t,e,n)}finally{xa=!1,(Wr!==null||Hr!==null)&&(Cm(),Em())}}function as(t,e){var n=t.stateNode;if(n===null)return null;var r=Gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Ru=!1;if(Yt)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Ru=!1}function _0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var $i=!1,Go=null,qo=!1,Nu=null,v0={onError:function(t){$i=!0,Go=t}};function y0(t,e,n,r,i,s,o,l,a){$i=!1,Go=null,_0.apply(v0,arguments)}function w0(t,e,n,r,i,s,o,l,a){if(y0.apply(this,arguments),$i){if($i){var u=Go;$i=!1,Go=null}else throw Error(C(198));qo||(qo=!0,Nu=u)}}function _r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ph(t){if(_r(t)!==t)throw Error(C(188))}function E0(t){var e=t.alternate;if(!e){if(e=_r(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ph(i),t;if(s===r)return Ph(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Im(t){return t=E0(t),t!==null?xm(t):null}function xm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xm(t);if(e!==null)return e;t=t.sibling}return null}var Rm=nt.unstable_scheduleCallback,Ah=nt.unstable_cancelCallback,S0=nt.unstable_shouldYield,C0=nt.unstable_requestPaint,he=nt.unstable_now,k0=nt.unstable_getCurrentPriorityLevel,Uc=nt.unstable_ImmediatePriority,Nm=nt.unstable_UserBlockingPriority,Ko=nt.unstable_NormalPriority,T0=nt.unstable_LowPriority,bm=nt.unstable_IdlePriority,Wl=null,Ot=null;function I0(t){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:N0,x0=Math.log,R0=Math.LN2;function N0(t){return t>>>=0,t===0?32:31-(x0(t)/R0|0)|0}var ao=64,uo=4194304;function Bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Bi(l):(s&=o,s!==0&&(r=Bi(s)))}else o=n&~i,o!==0?r=Bi(o):s!==0&&(r=Bi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function b0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=b0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pm(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function Ra(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ls(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function A0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function Am(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Om,zc,Dm,Mm,Lm,Pu=!1,co=[],En=null,Sn=null,Cn=null,us=new Map,cs=new Map,dn=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oh(t,e){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(e.pointerId)}}function xi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Us(e),e!==null&&zc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function D0(t,e,n,r,i){switch(e){case"focusin":return En=xi(En,t,e,n,r,i),!0;case"dragenter":return Sn=xi(Sn,t,e,n,r,i),!0;case"mouseover":return Cn=xi(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return us.set(s,xi(us.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cs.set(s,xi(cs.get(s)||null,t,e,n,r,i)),!0}return!1}function Fm(t){var e=Kn(t.target);if(e!==null){var n=_r(e);if(n!==null){if(e=n.tag,e===13){if(e=Tm(n),e!==null){t.blockedOn=e,Lm(t.priority,function(){Dm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Au(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Iu=r,n.target.dispatchEvent(r),Iu=null}else return e=Us(n),e!==null&&zc(e),t.blockedOn=n,!1;e.shift()}return!0}function Dh(t,e,n){bo(t)&&n.delete(e)}function M0(){Pu=!1,En!==null&&bo(En)&&(En=null),Sn!==null&&bo(Sn)&&(Sn=null),Cn!==null&&bo(Cn)&&(Cn=null),us.forEach(Dh),cs.forEach(Dh)}function Ri(t,e){t.blockedOn===e&&(t.blockedOn=null,Pu||(Pu=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,M0)))}function ds(t){function e(i){return Ri(i,t)}if(0<co.length){Ri(co[0],t);for(var n=1;n<co.length;n++){var r=co[n];r.blockedOn===t&&(r.blockedOn=null)}}for(En!==null&&Ri(En,t),Sn!==null&&Ri(Sn,t),Cn!==null&&Ri(Cn,t),us.forEach(e),cs.forEach(e),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Fm(n),n.blockedOn===null&&dn.shift()}var $r=rn.ReactCurrentBatchConfig,Yo=!0;function L0(t,e,n,r){var i=G,s=$r.transition;$r.transition=null;try{G=1,Bc(t,e,n,r)}finally{G=i,$r.transition=s}}function F0(t,e,n,r){var i=G,s=$r.transition;$r.transition=null;try{G=4,Bc(t,e,n,r)}finally{G=i,$r.transition=s}}function Bc(t,e,n,r){if(Yo){var i=Au(t,e,n,r);if(i===null)Ua(t,e,r,Xo,n),Oh(t,r);else if(D0(i,t,e,n,r))r.stopPropagation();else if(Oh(t,r),e&4&&-1<O0.indexOf(t)){for(;i!==null;){var s=Us(i);if(s!==null&&Om(s),s=Au(t,e,n,r),s===null&&Ua(t,e,r,Xo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ua(t,e,r,null,n)}}var Xo=null;function Au(t,e,n,r){if(Xo=null,t=Fc(r),t=Kn(t),t!==null)if(e=_r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xo=t,null}function Um(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k0()){case Uc:return 1;case Nm:return 4;case Ko:case T0:return 16;case bm:return 536870912;default:return 16}default:return 16}}var vn=null,Wc=null,Po=null;function jm(){if(Po)return Po;var t,e=Wc,n=e.length,r,i="value"in vn?vn.value:vn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Po=i.slice(t,1<r?1-r:void 0)}function Ao(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function Mh(){return!1}function it(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:Mh,this.isPropagationStopped=Mh,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),e}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hc=it(mi),Fs=ae({},mi,{view:0,detail:0}),U0=it(Fs),Na,ba,Ni,Hl=ae({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ni&&(Ni&&t.type==="mousemove"?(Na=t.screenX-Ni.screenX,ba=t.screenY-Ni.screenY):ba=Na=0,Ni=t),Na)},movementY:function(t){return"movementY"in t?t.movementY:ba}}),Lh=it(Hl),j0=ae({},Hl,{dataTransfer:0}),z0=it(j0),B0=ae({},Fs,{relatedTarget:0}),Pa=it(B0),W0=ae({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=it(W0),$0=ae({},mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V0=it($0),G0=ae({},mi,{data:0}),Fh=it(G0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q0[t])?!!e[t]:!1}function $c(){return Y0}var X0=ae({},Fs,{key:function(t){if(t.key){var e=q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?Ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J0=it(X0),Z0=ae({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=it(Z0),ew=ae({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),tw=it(ew),nw=ae({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),rw=it(nw),iw=ae({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sw=it(iw),ow=[9,13,27,32],Vc=Yt&&"CompositionEvent"in window,Vi=null;Yt&&"documentMode"in document&&(Vi=document.documentMode);var lw=Yt&&"TextEvent"in window&&!Vi,zm=Yt&&(!Vc||Vi&&8<Vi&&11>=Vi),jh=" ",zh=!1;function Bm(t,e){switch(t){case"keyup":return ow.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function aw(t,e){switch(t){case"compositionend":return Wm(e);case"keypress":return e.which!==32?null:(zh=!0,jh);case"textInput":return t=e.data,t===jh&&zh?null:t;default:return null}}function uw(t,e){if(Nr)return t==="compositionend"||!Vc&&Bm(t,e)?(t=jm(),Po=Wc=vn=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zm&&e.locale!=="ko"?null:e.data;default:return null}}var cw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cw[t.type]:e==="textarea"}function Hm(t,e,n,r){wm(r),e=Jo(e,"onChange"),0<e.length&&(n=new Hc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gi=null,hs=null;function dw(t){eg(t,0)}function $l(t){var e=Ar(t);if(fm(e))return t}function hw(t,e){if(t==="change")return e}var $m=!1;if(Yt){var Aa;if(Yt){var Oa="oninput"in document;if(!Oa){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Oa=typeof Wh.oninput=="function"}Aa=Oa}else Aa=!1;$m=Aa&&(!document.documentMode||9<document.documentMode)}function Hh(){Gi&&(Gi.detachEvent("onpropertychange",Vm),hs=Gi=null)}function Vm(t){if(t.propertyName==="value"&&$l(hs)){var e=[];Hm(e,hs,t,Fc(t)),km(dw,e)}}function fw(t,e,n){t==="focusin"?(Hh(),Gi=e,hs=n,Gi.attachEvent("onpropertychange",Vm)):t==="focusout"&&Hh()}function pw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(hs)}function mw(t,e){if(t==="click")return $l(e)}function gw(t,e){if(t==="input"||t==="change")return $l(e)}function _w(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:_w;function fs(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pu.call(e,i)||!Tt(t[i],e[i]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,e){var n=$h(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$h(n)}}function Gm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qm(){for(var t=window,e=Vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vo(t.document)}return e}function Gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vw(t){var e=qm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gm(n.ownerDocument.documentElement,n)){if(r!==null&&Gc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vh(n,s);var o=Vh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yw=Yt&&"documentMode"in document&&11>=document.documentMode,br=null,Ou=null,qi=null,Du=!1;function Gh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Du||br==null||br!==Vo(r)||(r=br,"selectionStart"in r&&Gc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qi&&fs(qi,r)||(qi=r,r=Jo(Ou,"onSelect"),0<r.length&&(e=new Hc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=br)))}function fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pr={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},Da={},Km={};Yt&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Vl(t){if(Da[t])return Da[t];if(!Pr[t])return t;var e=Pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Km)return Da[t]=e[n];return t}var Qm=Vl("animationend"),Ym=Vl("animationiteration"),Xm=Vl("animationstart"),Jm=Vl("transitionend"),Zm=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(t,e){Zm.set(t,e),gr(e,[t])}for(var Ma=0;Ma<qh.length;Ma++){var La=qh[Ma],ww=La.toLowerCase(),Ew=La[0].toUpperCase()+La.slice(1);Bn(ww,"on"+Ew)}Bn(Qm,"onAnimationEnd");Bn(Ym,"onAnimationIteration");Bn(Xm,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(Jm,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function Kh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,w0(r,e,void 0,t),t.currentTarget=null}function eg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Kh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Kh(i,l,u),s=a}}}if(qo)throw t=Nu,qo=!1,Nu=null,t}function J(t,e){var n=e[ju];n===void 0&&(n=e[ju]=new Set);var r=t+"__bubble";n.has(r)||(tg(e,t,2,!1),n.add(r))}function Fa(t,e,n){var r=0;e&&(r|=4),tg(n,t,r,e)}var po="_reactListening"+Math.random().toString(36).slice(2);function ps(t){if(!t[po]){t[po]=!0,am.forEach(function(n){n!=="selectionchange"&&(Sw.has(n)||Fa(n,!1,t),Fa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[po]||(e[po]=!0,Fa("selectionchange",!1,e))}}function tg(t,e,n,r){switch(Um(e)){case 1:var i=L0;break;case 4:i=F0;break;default:i=Bc}n=i.bind(null,e,n,t),i=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ua(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}km(function(){var u=s,c=Fc(n),d=[];e:{var h=Zm.get(t);if(h!==void 0){var g=Hc,v=t;switch(t){case"keypress":if(Ao(n)===0)break e;case"keydown":case"keyup":g=J0;break;case"focusin":v="focus",g=Pa;break;case"focusout":v="blur",g=Pa;break;case"beforeblur":case"afterblur":g=Pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=tw;break;case Qm:case Ym:case Xm:g=H0;break;case Jm:g=rw;break;case"scroll":g=U0;break;case"wheel":g=sw;break;case"copy":case"cut":case"paste":g=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Uh}var y=(e&4)!==0,S=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,_;p!==null;){_=p;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,m!==null&&(w=as(p,m),w!=null&&y.push(ms(p,w,_)))),S)break;p=p.return}0<y.length&&(h=new g(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Iu&&(v=n.relatedTarget||n.fromElement)&&(Kn(v)||v[Xt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Kn(v):null,v!==null&&(S=_r(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Lh,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Uh,w="onPointerLeave",m="onPointerEnter",p="pointer"),S=g==null?h:Ar(g),_=v==null?h:Ar(v),h=new y(w,p+"leave",g,n,c),h.target=S,h.relatedTarget=_,w=null,Kn(c)===u&&(y=new y(m,p+"enter",v,n,c),y.target=_,y.relatedTarget=S,w=y),S=w,g&&v)t:{for(y=g,m=v,p=0,_=y;_;_=Cr(_))p++;for(_=0,w=m;w;w=Cr(w))_++;for(;0<p-_;)y=Cr(y),p--;for(;0<_-p;)m=Cr(m),_--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Cr(y),m=Cr(m)}y=null}else y=null;g!==null&&Qh(d,h,g,y,!1),v!==null&&S!==null&&Qh(d,S,v,y,!0)}}e:{if(h=u?Ar(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=hw;else if(Bh(h))if($m)T=gw;else{T=pw;var I=fw}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=mw);if(T&&(T=T(t,u))){Hm(d,T,n,c);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Eu(h,"number",h.value)}switch(I=u?Ar(u):window,t){case"focusin":(Bh(I)||I.contentEditable==="true")&&(br=I,Ou=u,qi=null);break;case"focusout":qi=Ou=br=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Gh(d,n,c);break;case"selectionchange":if(yw)break;case"keydown":case"keyup":Gh(d,n,c)}var R;if(Vc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Nr?Bm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(zm&&n.locale!=="ko"&&(Nr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Nr&&(R=jm()):(vn=c,Wc="value"in vn?vn.value:vn.textContent,Nr=!0)),I=Jo(u,P),0<I.length&&(P=new Fh(P,t,null,n,c),d.push({event:P,listeners:I}),R?P.data=R:(R=Wm(n),R!==null&&(P.data=R)))),(R=lw?aw(t,n):uw(t,n))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(c=new Fh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}eg(d,e)})}function ms(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=as(t,n),s!=null&&r.unshift(ms(t,s,i)),s=as(t,e),s!=null&&r.push(ms(t,s,i))),t=t.return}return r}function Cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=as(n,s),a!=null&&o.unshift(ms(n,a,l))):i||(a=as(n,s),a!=null&&o.push(ms(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Cw=/\r\n?/g,kw=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(Cw,`
`).replace(kw,"")}function mo(t,e,n){if(e=Yh(e),Yh(t)!==e&&n)throw Error(C(425))}function Zo(){}var Mu=null,Lu=null;function Fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,Tw=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(t){return Xh.resolve(null).then(t).catch(xw)}:Uu;function xw(t){setTimeout(function(){throw t})}function ja(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ds(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ds(e)}function kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gi=Math.random().toString(36).slice(2),bt="__reactFiber$"+gi,gs="__reactProps$"+gi,Xt="__reactContainer$"+gi,ju="__reactEvents$"+gi,Rw="__reactListeners$"+gi,Nw="__reactHandles$"+gi;function Kn(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xt]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jh(t);t!==null;){if(n=t[bt])return n;t=Jh(t)}return e}t=n,n=t.parentNode}return null}function Us(t){return t=t[bt]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ar(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Gl(t){return t[gs]||null}var zu=[],Or=-1;function Wn(t){return{current:t}}function Z(t){0>Or||(t.current=zu[Or],zu[Or]=null,Or--)}function X(t,e){Or++,zu[Or]=t.current,t.current=e}var Dn={},De=Wn(Dn),Ke=Wn(!1),rr=Dn;function Jr(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function el(){Z(Ke),Z(De)}function Zh(t,e,n){if(De.current!==Dn)throw Error(C(168));X(De,e),X(Ke,n)}function ng(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,f0(t)||"Unknown",i));return ae({},n,r)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,rr=De.current,X(De,t),X(Ke,Ke.current),!0}function ef(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=ng(t,e,rr),r.__reactInternalMemoizedMergedChildContext=t,Z(Ke),Z(De),X(De,t)):Z(Ke),X(Ke,n)}var Bt=null,ql=!1,za=!1;function rg(t){Bt===null?Bt=[t]:Bt.push(t)}function bw(t){ql=!0,rg(t)}function Hn(){if(!za&&Bt!==null){za=!0;var t=0,e=G;try{var n=Bt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bt=null,ql=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(t+1)),Rm(Uc,Hn),i}finally{G=e,za=!1}}return null}var Dr=[],Mr=0,nl=null,rl=0,ot=[],lt=0,ir=null,Wt=1,Ht="";function $n(t,e){Dr[Mr++]=rl,Dr[Mr++]=nl,nl=t,rl=e}function ig(t,e,n){ot[lt++]=Wt,ot[lt++]=Ht,ot[lt++]=ir,ir=t;var r=Wt;t=Ht;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wt=1<<32-St(e)+i|n<<i|r,Ht=s+t}else Wt=1<<s|n<<i|r,Ht=t}function qc(t){t.return!==null&&($n(t,1),ig(t,1,0))}function Kc(t){for(;t===nl;)nl=Dr[--Mr],Dr[Mr]=null,rl=Dr[--Mr],Dr[Mr]=null;for(;t===ir;)ir=ot[--lt],ot[lt]=null,Ht=ot[--lt],ot[lt]=null,Wt=ot[--lt],ot[lt]=null}var et=null,Je=null,ne=!1,vt=null;function sg(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,et=t,Je=kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,et=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ir!==null?{id:Wt,overflow:Ht}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,et=t,Je=null,!0):!1;default:return!1}}function Bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wu(t){if(ne){var e=Je;if(e){var n=e;if(!tf(t,e)){if(Bu(t))throw Error(C(418));e=kn(n.nextSibling);var r=et;e&&tf(t,e)?sg(r,n):(t.flags=t.flags&-4097|2,ne=!1,et=t)}}else{if(Bu(t))throw Error(C(418));t.flags=t.flags&-4097|2,ne=!1,et=t}}}function nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;et=t}function go(t){if(t!==et)return!1;if(!ne)return nf(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fu(t.type,t.memoizedProps)),e&&(e=Je)){if(Bu(t))throw og(),Error(C(418));for(;e;)sg(t,e),e=kn(e.nextSibling)}if(nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=et?kn(t.stateNode.nextSibling):null;return!0}function og(){for(var t=Je;t;)t=kn(t.nextSibling)}function Zr(){Je=et=null,ne=!1}function Qc(t){vt===null?vt=[t]:vt.push(t)}var Pw=rn.ReactCurrentBatchConfig;function bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function _o(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rf(t){var e=t._init;return e(t._payload)}function lg(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Rn(m,p),m.index=0,m.sibling=null,m}function s(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,_,w){return p===null||p.tag!==6?(p=qa(_,m.mode,w),p.return=m,p):(p=i(p,_),p.return=m,p)}function a(m,p,_,w){var T=_.type;return T===Rr?c(m,p,_.props.children,w,_.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===un&&rf(T)===p.type)?(w=i(p,_.props),w.ref=bi(m,p,_),w.return=m,w):(w=jo(_.type,_.key,_.props,null,m.mode,w),w.ref=bi(m,p,_),w.return=m,w)}function u(m,p,_,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Ka(_,m.mode,w),p.return=m,p):(p=i(p,_.children||[]),p.return=m,p)}function c(m,p,_,w,T){return p===null||p.tag!==7?(p=er(_,m.mode,w,T),p.return=m,p):(p=i(p,_),p.return=m,p)}function d(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=qa(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case so:return _=jo(p.type,p.key,p.props,null,m.mode,_),_.ref=bi(m,null,p),_.return=m,_;case xr:return p=Ka(p,m.mode,_),p.return=m,p;case un:var w=p._init;return d(m,w(p._payload),_)}if(zi(p)||Ti(p))return p=er(p,m.mode,_,null),p.return=m,p;_o(m,p)}return null}function h(m,p,_,w){var T=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:l(m,p,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case so:return _.key===T?a(m,p,_,w):null;case xr:return _.key===T?u(m,p,_,w):null;case un:return T=_._init,h(m,p,T(_._payload),w)}if(zi(_)||Ti(_))return T!==null?null:c(m,p,_,w,null);_o(m,_)}return null}function g(m,p,_,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(_)||null,l(p,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case so:return m=m.get(w.key===null?_:w.key)||null,a(p,m,w,T);case xr:return m=m.get(w.key===null?_:w.key)||null,u(p,m,w,T);case un:var I=w._init;return g(m,p,_,I(w._payload),T)}if(zi(w)||Ti(w))return m=m.get(_)||null,c(p,m,w,T,null);_o(p,w)}return null}function v(m,p,_,w){for(var T=null,I=null,R=p,P=p=0,H=null;R!==null&&P<_.length;P++){R.index>P?(H=R,R=null):H=R.sibling;var E=h(m,R,_[P],w);if(E===null){R===null&&(R=H);break}t&&R&&E.alternate===null&&e(m,R),p=s(E,p,P),I===null?T=E:I.sibling=E,I=E,R=H}if(P===_.length)return n(m,R),ne&&$n(m,P),T;if(R===null){for(;P<_.length;P++)R=d(m,_[P],w),R!==null&&(p=s(R,p,P),I===null?T=R:I.sibling=R,I=R);return ne&&$n(m,P),T}for(R=r(m,R);P<_.length;P++)H=g(R,m,P,_[P],w),H!==null&&(t&&H.alternate!==null&&R.delete(H.key===null?P:H.key),p=s(H,p,P),I===null?T=H:I.sibling=H,I=H);return t&&R.forEach(function(te){return e(m,te)}),ne&&$n(m,P),T}function y(m,p,_,w){var T=Ti(_);if(typeof T!="function")throw Error(C(150));if(_=T.call(_),_==null)throw Error(C(151));for(var I=T=null,R=p,P=p=0,H=null,E=_.next();R!==null&&!E.done;P++,E=_.next()){R.index>P?(H=R,R=null):H=R.sibling;var te=h(m,R,E.value,w);if(te===null){R===null&&(R=H);break}t&&R&&te.alternate===null&&e(m,R),p=s(te,p,P),I===null?T=te:I.sibling=te,I=te,R=H}if(E.done)return n(m,R),ne&&$n(m,P),T;if(R===null){for(;!E.done;P++,E=_.next())E=d(m,E.value,w),E!==null&&(p=s(E,p,P),I===null?T=E:I.sibling=E,I=E);return ne&&$n(m,P),T}for(R=r(m,R);!E.done;P++,E=_.next())E=g(R,m,P,E.value,w),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?P:E.key),p=s(E,p,P),I===null?T=E:I.sibling=E,I=E);return t&&R.forEach(function(pt){return e(m,pt)}),ne&&$n(m,P),T}function S(m,p,_,w){if(typeof _=="object"&&_!==null&&_.type===Rr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case so:e:{for(var T=_.key,I=p;I!==null;){if(I.key===T){if(T=_.type,T===Rr){if(I.tag===7){n(m,I.sibling),p=i(I,_.props.children),p.return=m,m=p;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===un&&rf(T)===I.type){n(m,I.sibling),p=i(I,_.props),p.ref=bi(m,I,_),p.return=m,m=p;break e}n(m,I);break}else e(m,I);I=I.sibling}_.type===Rr?(p=er(_.props.children,m.mode,w,_.key),p.return=m,m=p):(w=jo(_.type,_.key,_.props,null,m.mode,w),w.ref=bi(m,p,_),w.return=m,m=w)}return o(m);case xr:e:{for(I=_.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=i(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Ka(_,m.mode,w),p.return=m,m=p}return o(m);case un:return I=_._init,S(m,p,I(_._payload),w)}if(zi(_))return v(m,p,_,w);if(Ti(_))return y(m,p,_,w);_o(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,_),p.return=m,m=p):(n(m,p),p=qa(_,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return S}var ei=lg(!0),ag=lg(!1),il=Wn(null),sl=null,Lr=null,Yc=null;function Xc(){Yc=Lr=sl=null}function Jc(t){var e=il.current;Z(il),t._currentValue=e}function Hu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vr(t,e){sl=t,Yc=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ge=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(Yc!==t)if(t={context:t,memoizedValue:e,next:null},Lr===null){if(sl===null)throw Error(C(308));Lr=t,sl.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return e}var Qn=null;function Zc(t){Qn===null?Qn=[t]:Qn.push(t)}function ug(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cn=!1;function ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jt(t,n)}return i=r.interleaved,i===null?(e.next=e,Zc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jt(t,n)}function Oo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jc(t,n)}}function sf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ol(t,e,n,r){var i=t.updateQueue;cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=ae({},d,h);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=d):c=c.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);or|=o,t.lanes=o,t.memoizedState=d}}function of(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var js={},Dt=Wn(js),_s=Wn(js),vs=Wn(js);function Yn(t){if(t===js)throw Error(C(174));return t}function td(t,e){switch(X(vs,e),X(_s,t),X(Dt,js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}Z(Dt),X(Dt,e)}function ti(){Z(Dt),Z(_s),Z(vs)}function dg(t){Yn(vs.current);var e=Yn(Dt.current),n=Cu(e,t.type);e!==n&&(X(_s,t),X(Dt,n))}function nd(t){_s.current===t&&(Z(Dt),Z(_s))}var ie=Wn(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ba=[];function rd(){for(var t=0;t<Ba.length;t++)Ba[t]._workInProgressVersionPrimary=null;Ba.length=0}var Do=rn.ReactCurrentDispatcher,Wa=rn.ReactCurrentBatchConfig,sr=0,le=null,me=null,Ee=null,al=!1,Ki=!1,ys=0,Aw=0;function Pe(){throw Error(C(321))}function id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tt(t[n],e[n]))return!1;return!0}function sd(t,e,n,r,i,s){if(sr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Do.current=t===null||t.memoizedState===null?Lw:Fw,t=n(r,i),Ki){s=0;do{if(Ki=!1,ys=0,25<=s)throw Error(C(301));s+=1,Ee=me=null,e.updateQueue=null,Do.current=Uw,t=n(r,i)}while(Ki)}if(Do.current=ul,e=me!==null&&me.next!==null,sr=0,Ee=me=le=null,al=!1,e)throw Error(C(300));return t}function od(){var t=ys!==0;return ys=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?le.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function ht(){if(me===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=Ee===null?le.memoizedState:Ee.next;if(e!==null)Ee=e,me=t;else{if(t===null)throw Error(C(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Ee===null?le.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function ws(t,e){return typeof e=="function"?e(t):e}function Ha(t){var e=ht(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((sr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,le.lanes|=c,or|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Tt(r,e.memoizedState)||(Ge=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,or|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $a(t){var e=ht(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tt(s,e.memoizedState)||(Ge=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function hg(){}function fg(t,e){var n=le,r=ht(),i=e(),s=!Tt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ge=!0),r=r.queue,ld(gg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Es(9,mg.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(C(349));sr&30||pg(n,e,i)}return i}function pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mg(t,e,n,r){e.value=n,e.getSnapshot=r,_g(e)&&vg(t)}function gg(t,e,n){return n(function(){_g(e)&&vg(t)})}function _g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tt(t,n)}catch{return!0}}function vg(t){var e=Jt(t,1);e!==null&&Ct(e,t,1,-1)}function lf(t){var e=Nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},e.queue=t,t=t.dispatch=Mw.bind(null,le,t),[e.memoizedState,t]}function Es(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yg(){return ht().memoizedState}function Mo(t,e,n,r){var i=Nt();le.flags|=t,i.memoizedState=Es(1|e,n,void 0,r===void 0?null:r)}function Kl(t,e,n,r){var i=ht();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&id(r,o.deps)){i.memoizedState=Es(e,n,s,r);return}}le.flags|=t,i.memoizedState=Es(1|e,n,s,r)}function af(t,e){return Mo(8390656,8,t,e)}function ld(t,e){return Kl(2048,8,t,e)}function wg(t,e){return Kl(4,2,t,e)}function Eg(t,e){return Kl(4,4,t,e)}function Sg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cg(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,Sg.bind(null,e,t),n)}function ad(){}function kg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&id(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Tg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&id(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ig(t,e,n){return sr&21?(Tt(n,e)||(n=Pm(),le.lanes|=n,or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ge=!0),t.memoizedState=n)}function Ow(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Wa.transition;Wa.transition={};try{t(!1),e()}finally{G=n,Wa.transition=r}}function xg(){return ht().memoizedState}function Dw(t,e,n){var r=xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rg(t))Ng(e,n);else if(n=ug(t,e,n,r),n!==null){var i=ze();Ct(n,t,r,i),bg(n,e,r)}}function Mw(t,e,n){var r=xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rg(t))Ng(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Tt(l,o)){var a=e.interleaved;a===null?(i.next=i,Zc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=ug(t,e,i,r),n!==null&&(i=ze(),Ct(n,t,r,i),bg(n,e,r))}}function Rg(t){var e=t.alternate;return t===le||e!==null&&e===le}function Ng(t,e){Ki=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jc(t,n)}}var ul={readContext:dt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Lw={readContext:dt,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:af,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mo(4194308,4,Sg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mo(4,2,t,e)},useMemo:function(t,e){var n=Nt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Dw.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:lf,useDebugValue:ad,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=lf(!1),e=t[0];return t=Ow.bind(null,t[1]),Nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Nt();if(ne){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),ke===null)throw Error(C(349));sr&30||pg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,af(gg.bind(null,r,s,t),[t]),r.flags|=2048,Es(9,mg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nt(),e=ke.identifierPrefix;if(ne){var n=Ht,r=Wt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Aw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fw={readContext:dt,useCallback:kg,useContext:dt,useEffect:ld,useImperativeHandle:Cg,useInsertionEffect:wg,useLayoutEffect:Eg,useMemo:Tg,useReducer:Ha,useRef:yg,useState:function(){return Ha(ws)},useDebugValue:ad,useDeferredValue:function(t){var e=ht();return Ig(e,me.memoizedState,t)},useTransition:function(){var t=Ha(ws)[0],e=ht().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:fg,useId:xg,unstable_isNewReconciler:!1},Uw={readContext:dt,useCallback:kg,useContext:dt,useEffect:ld,useImperativeHandle:Cg,useInsertionEffect:wg,useLayoutEffect:Eg,useMemo:Tg,useReducer:$a,useRef:yg,useState:function(){return $a(ws)},useDebugValue:ad,useDeferredValue:function(t){var e=ht();return me===null?e.memoizedState=t:Ig(e,me.memoizedState,t)},useTransition:function(){var t=$a(ws)[0],e=ht().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:fg,useId:xg,unstable_isNewReconciler:!1};function gt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $u(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?_r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),i=xn(t),s=qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tn(t,s,i),e!==null&&(Ct(e,t,i,r),Oo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),i=xn(t),s=qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tn(t,s,i),e!==null&&(Ct(e,t,i,r),Oo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=xn(t),i=qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tn(t,i,r),e!==null&&(Ct(e,t,r,n),Oo(e,t,r))}};function uf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fs(n,r)||!fs(i,s):!0}function Pg(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Qe(e)?rr:De.current,r=e.contextTypes,s=(r=r!=null)?Jr(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function Vu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ed(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Qe(e)?rr:De.current,i.context=Jr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($u(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ql.enqueueReplaceState(i,i.state,null),ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ni(t,e){try{var n="",r=e;do n+=h0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Va(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jw=typeof WeakMap=="function"?WeakMap:Map;function Ag(t,e,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dl||(dl=!0,nc=r),Gu(t,e)},n}function Og(t,e,n){n=qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function df(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Zw.bind(null,t,e,n),e.then(t,t))}function hf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ff(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qt(-1,1),e.tag=2,Tn(n,e,1))),n.lanes|=1),t)}var zw=rn.ReactCurrentOwner,Ge=!1;function Ue(t,e,n,r){e.child=t===null?ag(e,null,n,r):ei(e,t.child,n,r)}function pf(t,e,n,r,i){n=n.render;var s=e.ref;return Vr(e,i),r=sd(t,e,n,r,s,i),n=od(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ne&&n&&qc(e),e.flags|=1,Ue(t,e,r,i),e.child)}function mf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dg(t,e,s,r,i)):(t=jo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fs,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=Rn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fs(s,r)&&t.ref===e.ref)if(Ge=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ge=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return qu(t,e,n,r,i)}function Mg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Ur,Xe),Xe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Ur,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Ur,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Ur,Xe),Xe|=r;return Ue(t,e,i,n),e.child}function Lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qu(t,e,n,r,i){var s=Qe(n)?rr:De.current;return s=Jr(e,s),Vr(e,i),n=sd(t,e,n,r,s,i),r=od(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ne&&r&&qc(e),e.flags|=1,Ue(t,e,n,i),e.child)}function gf(t,e,n,r,i){if(Qe(n)){var s=!0;tl(e)}else s=!1;if(Vr(e,i),e.stateNode===null)Lo(t,e),Pg(e,n,r),Vu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Qe(n)?rr:De.current,u=Jr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&cf(e,o,r,u),cn=!1;var h=e.memoizedState;o.state=h,ol(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ke.current||cn?(typeof c=="function"&&($u(e,n,c,r),a=e.memoizedState),(l=cn||uf(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:gt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=dt(a):(a=Qe(n)?rr:De.current,a=Jr(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&cf(e,o,r,a),cn=!1,h=e.memoizedState,o.state=h,ol(e,r,o,i);var v=e.memoizedState;l!==d||h!==v||Ke.current||cn?(typeof g=="function"&&($u(e,n,g,r),v=e.memoizedState),(u=cn||uf(e,n,u,r,h,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ku(t,e,n,r,s,i)}function Ku(t,e,n,r,i,s){Lg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ef(e,n,!1),Zt(t,e,s);r=e.stateNode,zw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ei(e,t.child,null,s),e.child=ei(e,null,l,s)):Ue(t,e,l,s),e.memoizedState=r.state,i&&ef(e,n,!0),e.child}function Fg(t){var e=t.stateNode;e.pendingContext?Zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zh(t,e.context,!1),td(t,e.containerInfo)}function _f(t,e,n,r,i){return Zr(),Qc(i),e.flags|=256,Ue(t,e,n,r),e.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ug(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(ie,i&1),t===null)return Wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,r,0,null),t=er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yu(n),e.memoizedState=Qu,t):ud(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Bw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Rn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Rn(l,s):(s=er(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qu,r}return s=t.child,t=s.sibling,r=Rn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ud(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,r){return r!==null&&Qc(r),ei(e,t.child,null,n),t=ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Bw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Va(Error(C(422))),vo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Jl({mode:"visible",children:r.children},i,0,null),s=er(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ei(e,t.child,null,o),e.child.memoizedState=Yu(o),e.memoizedState=Qu,s);if(!(e.mode&1))return vo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Va(s,r,void 0),vo(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ge||l){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jt(t,i),Ct(r,t,i,-1))}return md(),r=Va(Error(C(421))),vo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Je=kn(i.nextSibling),et=e,ne=!0,vt=null,t!==null&&(ot[lt++]=Wt,ot[lt++]=Ht,ot[lt++]=ir,Wt=t.id,Ht=t.overflow,ir=e),e=ud(e,r.children),e.flags|=4096,e)}function vf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hu(t.return,e,n)}function Ga(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ue(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vf(t,n,e);else if(t.tag===19)vf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ga(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ga(e,!0,n,null,s);break;case"together":Ga(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ww(t,e,n){switch(e.tag){case 3:Fg(e),Zr();break;case 5:dg(e);break;case 1:Qe(e.type)&&tl(e);break;case 4:td(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?Ug(t,e,n):(X(ie,ie.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Mg(t,e,n)}return Zt(t,e,n)}var zg,Xu,Bg,Wg;zg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xu=function(){};Bg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yn(Dt.current);var s=null;switch(n){case"input":i=yu(t,i),r=yu(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Su(t,i),r=Su(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zo)}ku(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(os.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(os.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Wg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Hw(t,e,n){var r=e.pendingProps;switch(Kc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Qe(e.type)&&el(),Ae(e),null;case 3:return r=e.stateNode,ti(),Z(Ke),Z(De),rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vt!==null&&(sc(vt),vt=null))),Xu(t,e),Ae(e),null;case 5:nd(e);var i=Yn(vs.current);if(n=e.type,t!==null&&e.stateNode!=null)Bg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ae(e),null}if(t=Yn(Dt.current),go(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bt]=e,r[gs]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Wi.length;i++)J(Wi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Ih(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Rh(r,s),J("invalid",r)}ku(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&mo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&mo(r.textContent,l,t),i=["children",""+l]):os.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":oo(r),xh(r,s,!0);break;case"textarea":oo(r),Nh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bt]=e,t[gs]=r,zg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tu(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)J(Wi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Ih(t,r),i=yu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),J("invalid",t);break;case"textarea":Rh(t,r),i=Su(t,r),J("invalid",t);break;default:i=r}ku(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?ym(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&_m(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ls(t,a):typeof a=="number"&&ls(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(os.hasOwnProperty(s)?a!=null&&s==="onScroll"&&J("scroll",t):a!=null&&Oc(t,s,a,o))}switch(n){case"input":oo(t),xh(t,r,!1);break;case"textarea":oo(t),Nh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+On(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Br(t,!!r.multiple,s,!1):r.defaultValue!=null&&Br(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Wg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Yn(vs.current),Yn(Dt.current),go(e)){if(r=e.stateNode,n=e.memoizedProps,r[bt]=e,(s=r.nodeValue!==n)&&(t=et,t!==null))switch(t.tag){case 3:mo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=e,e.stateNode=r}return Ae(e),null;case 13:if(Z(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Je!==null&&e.mode&1&&!(e.flags&128))og(),Zr(),e.flags|=98560,s=!1;else if(s=go(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[bt]=e}else Zr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else vt!==null&&(sc(vt),vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?_e===0&&(_e=3):md())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return ti(),Xu(t,e),t===null&&ps(e.stateNode.containerInfo),Ae(e),null;case 10:return Jc(e.type._context),Ae(e),null;case 17:return Qe(e.type)&&el(),Ae(e),null;case 19:if(Z(ie),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pi(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ll(t),o!==null){for(e.flags|=128,Pi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>ri&&(e.flags|=128,r=!0,Pi(s,!1),e.lanes=4194304)}else{if(!r)if(t=ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Ae(e),null}else 2*he()-s.renderingStartTime>ri&&n!==1073741824&&(e.flags|=128,r=!0,Pi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return pd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function $w(t,e){switch(Kc(e),e.tag){case 1:return Qe(e.type)&&el(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ti(),Z(Ke),Z(De),rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nd(e),null;case 13:if(Z(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Zr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ie),null;case 4:return ti(),null;case 10:return Jc(e.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var yo=!1,Oe=!1,Vw=typeof WeakSet=="function"?WeakSet:Set,b=null;function Fr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Ju(t,e,n){try{n()}catch(r){ce(t,e,r)}}var yf=!1;function Gw(t,e){if(Mu=Yo,t=qm(),Gc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:t,selectionRange:n},Yo=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:gt(e.type,y),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return v=yf,yf=!1,v}function Qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ju(e,n,s)}i=i.next}while(i!==r)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hg(t){var e=t.alternate;e!==null&&(t.alternate=null,Hg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[gs],delete e[ju],delete e[Rw],delete e[Nw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $g(t){return t.tag===5||t.tag===3||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ec(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zo));else if(r!==4&&(t=t.child,t!==null))for(ec(t,e,n),t=t.sibling;t!==null;)ec(t,e,n),t=t.sibling}function tc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tc(t,e,n),t=t.sibling;t!==null;)tc(t,e,n),t=t.sibling}var Re=null,_t=!1;function ln(t,e,n){for(n=n.child;n!==null;)Vg(t,e,n),n=n.sibling}function Vg(t,e,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:Oe||Fr(n,e);case 6:var r=Re,i=_t;Re=null,ln(t,e,n),Re=r,_t=i,Re!==null&&(_t?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(_t?(t=Re,n=n.stateNode,t.nodeType===8?ja(t.parentNode,n):t.nodeType===1&&ja(t,n),ds(t)):ja(Re,n.stateNode));break;case 4:r=Re,i=_t,Re=n.stateNode.containerInfo,_t=!0,ln(t,e,n),Re=r,_t=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ju(n,e,o),i=i.next}while(i!==r)}ln(t,e,n);break;case 1:if(!Oe&&(Fr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ce(n,e,l)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,ln(t,e,n),Oe=r):ln(t,e,n);break;default:ln(t,e,n)}}function Ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vw),e.forEach(function(r){var i=tE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Re=l.stateNode,_t=!1;break e;case 3:Re=l.stateNode.containerInfo,_t=!0;break e;case 4:Re=l.stateNode.containerInfo,_t=!0;break e}l=l.return}if(Re===null)throw Error(C(160));Vg(s,o,i),Re=null,_t=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gg(e,t),e=e.sibling}function Gg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mt(e,t),Rt(t),r&4){try{Qi(3,t,t.return),Yl(3,t)}catch(y){ce(t,t.return,y)}try{Qi(5,t,t.return)}catch(y){ce(t,t.return,y)}}break;case 1:mt(e,t),Rt(t),r&512&&n!==null&&Fr(n,n.return);break;case 5:if(mt(e,t),Rt(t),r&512&&n!==null&&Fr(n,n.return),t.flags&32){var i=t.stateNode;try{ls(i,"")}catch(y){ce(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&pm(i,s),Tu(l,o);var u=Tu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?ym(i,d):c==="dangerouslySetInnerHTML"?_m(i,d):c==="children"?ls(i,d):Oc(i,c,d,u)}switch(l){case"input":wu(i,s);break;case"textarea":mm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Br(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Br(i,!!s.multiple,s.defaultValue,!0):Br(i,!!s.multiple,s.multiple?[]:"",!1))}i[gs]=s}catch(y){ce(t,t.return,y)}}break;case 6:if(mt(e,t),Rt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ce(t,t.return,y)}}break;case 3:if(mt(e,t),Rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ds(e.containerInfo)}catch(y){ce(t,t.return,y)}break;case 4:mt(e,t),Rt(t);break;case 13:mt(e,t),Rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hd=he())),r&4&&Ef(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||c,mt(e,t),Oe=u):mt(e,t),Rt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(d=b=c;b!==null;){switch(h=b,g=h.child,h.tag){case 0:case 11:case 14:case 15:Qi(4,h,h.return);break;case 1:Fr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:Fr(h,h.return);break;case 22:if(h.memoizedState!==null){Cf(d);continue}}g!==null?(g.return=h,b=g):Cf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=vm("display",o))}catch(y){ce(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ce(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(e,t),Rt(t),r&4&&Ef(t);break;case 21:break;default:mt(e,t),Rt(t)}}function Rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($g(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ls(i,""),r.flags&=-33);var s=wf(t);tc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wf(t);ec(t,l,o);break;default:throw Error(C(161))}}catch(a){ce(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qw(t,e,n){b=t,qg(t)}function qg(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=yo;var u=Oe;if(yo=o,(Oe=a)&&!u)for(b=i;b!==null;)o=b,a=o.child,o.tag===22&&o.memoizedState!==null?kf(i):a!==null?(a.return=o,b=a):kf(i);for(;s!==null;)b=s,qg(s),s=s.sibling;b=i,yo=l,Oe=u}Sf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):Sf(t)}}function Sf(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Yl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&of(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}of(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ds(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Oe||e.flags&512&&Zu(e)}catch(h){ce(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Cf(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function kf(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(a){ce(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ce(e,i,a)}}var s=e.return;try{Zu(e)}catch(a){ce(e,s,a)}break;case 5:var o=e.return;try{Zu(e)}catch(a){ce(e,o,a)}}}catch(a){ce(e,e.return,a)}if(e===t){b=null;break}var l=e.sibling;if(l!==null){l.return=e.return,b=l;break}b=e.return}}var Kw=Math.ceil,cl=rn.ReactCurrentDispatcher,cd=rn.ReactCurrentOwner,ct=rn.ReactCurrentBatchConfig,$=0,ke=null,pe=null,Ne=0,Xe=0,Ur=Wn(0),_e=0,Ss=null,or=0,Xl=0,dd=0,Yi=null,Ve=null,hd=0,ri=1/0,zt=null,dl=!1,nc=null,In=null,wo=!1,yn=null,hl=0,Xi=0,rc=null,Fo=-1,Uo=0;function ze(){return $&6?he():Fo!==-1?Fo:Fo=he()}function xn(t){return t.mode&1?$&2&&Ne!==0?Ne&-Ne:Pw.transition!==null?(Uo===0&&(Uo=Pm()),Uo):(t=G,t!==0||(t=window.event,t=t===void 0?16:Um(t.type)),t):1}function Ct(t,e,n,r){if(50<Xi)throw Xi=0,rc=null,Error(C(185));Ls(t,n,r),(!($&2)||t!==ke)&&(t===ke&&(!($&2)&&(Xl|=n),_e===4&&hn(t,Ne)),Ye(t,r),n===1&&$===0&&!(e.mode&1)&&(ri=he()+500,ql&&Hn()))}function Ye(t,e){var n=t.callbackNode;P0(t,e);var r=Qo(t,t===ke?Ne:0);if(r===0)n!==null&&Ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ah(n),e===1)t.tag===0?bw(Tf.bind(null,t)):rg(Tf.bind(null,t)),Iw(function(){!($&6)&&Hn()}),n=null;else{switch(Am(r)){case 1:n=Uc;break;case 4:n=Nm;break;case 16:n=Ko;break;case 536870912:n=bm;break;default:n=Ko}n=t_(n,Kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kg(t,e){if(Fo=-1,Uo=0,$&6)throw Error(C(327));var n=t.callbackNode;if(Gr()&&t.callbackNode!==n)return null;var r=Qo(t,t===ke?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fl(t,r);else{e=r;var i=$;$|=2;var s=Yg();(ke!==t||Ne!==e)&&(zt=null,ri=he()+500,Zn(t,e));do try{Xw();break}catch(l){Qg(t,l)}while(!0);Xc(),cl.current=s,$=i,pe!==null?e=0:(ke=null,Ne=0,e=_e)}if(e!==0){if(e===2&&(i=bu(t),i!==0&&(r=i,e=ic(t,i))),e===1)throw n=Ss,Zn(t,0),hn(t,r),Ye(t,he()),n;if(e===6)hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Qw(i)&&(e=fl(t,r),e===2&&(s=bu(t),s!==0&&(r=s,e=ic(t,s))),e===1))throw n=Ss,Zn(t,0),hn(t,r),Ye(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Vn(t,Ve,zt);break;case 3:if(hn(t,r),(r&130023424)===r&&(e=hd+500-he(),10<e)){if(Qo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uu(Vn.bind(null,t,Ve,zt),e);break}Vn(t,Ve,zt);break;case 4:if(hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kw(r/1960))-r,10<r){t.timeoutHandle=Uu(Vn.bind(null,t,Ve,zt),r);break}Vn(t,Ve,zt);break;case 5:Vn(t,Ve,zt);break;default:throw Error(C(329))}}}return Ye(t,he()),t.callbackNode===n?Kg.bind(null,t):null}function ic(t,e){var n=Yi;return t.current.memoizedState.isDehydrated&&(Zn(t,e).flags|=256),t=fl(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&sc(e)),t}function sc(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function Qw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hn(t,e){for(e&=~dd,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Tf(t){if($&6)throw Error(C(327));Gr();var e=Qo(t,0);if(!(e&1))return Ye(t,he()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var r=bu(t);r!==0&&(e=r,n=ic(t,r))}if(n===1)throw n=Ss,Zn(t,0),hn(t,e),Ye(t,he()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vn(t,Ve,zt),Ye(t,he()),null}function fd(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(ri=he()+500,ql&&Hn())}}function lr(t){yn!==null&&yn.tag===0&&!($&6)&&Gr();var e=$;$|=1;var n=ct.transition,r=G;try{if(ct.transition=null,G=1,t)return t()}finally{G=r,ct.transition=n,$=e,!($&6)&&Hn()}}function pd(){Xe=Ur.current,Z(Ur)}function Zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Tw(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Kc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:ti(),Z(Ke),Z(De),rd();break;case 5:nd(r);break;case 4:ti();break;case 13:Z(ie);break;case 19:Z(ie);break;case 10:Jc(r.type._context);break;case 22:case 23:pd()}n=n.return}if(ke=t,pe=t=Rn(t.current,null),Ne=Xe=e,_e=0,Ss=null,dd=Xl=or=0,Ve=Yi=null,Qn!==null){for(e=0;e<Qn.length;e++)if(n=Qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qn=null}return t}function Qg(t,e){do{var n=pe;try{if(Xc(),Do.current=ul,al){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}al=!1}if(sr=0,Ee=me=le=null,Ki=!1,ys=0,cd.current=null,n===null||n.return===null){_e=1,Ss=e,pe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=hf(o);if(g!==null){g.flags&=-257,ff(g,o,l,s,e),g.mode&1&&df(s,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){df(s,u,e),md();break e}a=Error(C(426))}}else if(ne&&l.mode&1){var S=hf(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ff(S,o,l,s,e),Qc(ni(a,l));break e}}s=a=ni(a,l),_e!==4&&(_e=2),Yi===null?Yi=[s]:Yi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Ag(s,a,e);sf(s,m);break e;case 1:l=a;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(In===null||!In.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Og(s,l,e);sf(s,w);break e}}s=s.return}while(s!==null)}Jg(n)}catch(T){e=T,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Yg(){var t=cl.current;return cl.current=ul,t===null?ul:t}function md(){(_e===0||_e===3||_e===2)&&(_e=4),ke===null||!(or&268435455)&&!(Xl&268435455)||hn(ke,Ne)}function fl(t,e){var n=$;$|=2;var r=Yg();(ke!==t||Ne!==e)&&(zt=null,Zn(t,e));do try{Yw();break}catch(i){Qg(t,i)}while(!0);if(Xc(),$=n,cl.current=r,pe!==null)throw Error(C(261));return ke=null,Ne=0,_e}function Yw(){for(;pe!==null;)Xg(pe)}function Xw(){for(;pe!==null&&!S0();)Xg(pe)}function Xg(t){var e=e_(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Jg(t):pe=e,cd.current=null}function Jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$w(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,pe=null;return}}else if(n=Hw(n,e,Xe),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);_e===0&&(_e=5)}function Vn(t,e,n){var r=G,i=ct.transition;try{ct.transition=null,G=1,Jw(t,e,n,r)}finally{ct.transition=i,G=r}return null}function Jw(t,e,n,r){do Gr();while(yn!==null);if($&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(A0(t,s),t===ke&&(pe=ke=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,t_(Ko,function(){return Gr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ct.transition,ct.transition=null;var o=G;G=1;var l=$;$|=4,cd.current=null,Gw(t,n),Gg(n,t),vw(Lu),Yo=!!Mu,Lu=Mu=null,t.current=n,qw(n),C0(),$=l,G=o,ct.transition=s}else t.current=n;if(wo&&(wo=!1,yn=t,hl=i),s=t.pendingLanes,s===0&&(In=null),I0(n.stateNode),Ye(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dl)throw dl=!1,t=nc,nc=null,t;return hl&1&&t.tag!==0&&Gr(),s=t.pendingLanes,s&1?t===rc?Xi++:(Xi=0,rc=t):Xi=0,Hn(),null}function Gr(){if(yn!==null){var t=Am(hl),e=ct.transition,n=G;try{if(ct.transition=null,G=16>t?16:t,yn===null)var r=!1;else{if(t=yn,yn=null,hl=0,$&6)throw Error(C(331));var i=$;for($|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:Qi(8,c,s)}var d=c.child;if(d!==null)d.return=c,b=d;else for(;b!==null;){c=b;var h=c.sibling,g=c.return;if(Hg(c),c===u){b=null;break}if(h!==null){h.return=g,b=h;break}b=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var p=t.current;for(b=p;b!==null;){o=b;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,b=_;else e:for(o=p;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yl(9,l)}}catch(T){ce(l,l.return,T)}if(l===o){b=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,b=w;break e}b=l.return}}if($=i,Hn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Wl,t)}catch{}r=!0}return r}finally{G=n,ct.transition=e}}return!1}function If(t,e,n){e=ni(n,e),e=Ag(t,e,1),t=Tn(t,e,1),e=ze(),t!==null&&(Ls(t,1,e),Ye(t,e))}function ce(t,e,n){if(t.tag===3)If(t,t,n);else for(;e!==null;){if(e.tag===3){If(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){t=ni(n,t),t=Og(e,t,1),e=Tn(e,t,1),t=ze(),e!==null&&(Ls(e,1,t),Ye(e,t));break}}e=e.return}}function Zw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Ne&n)===n&&(_e===4||_e===3&&(Ne&130023424)===Ne&&500>he()-hd?Zn(t,0):dd|=n),Ye(t,e)}function Zg(t,e){e===0&&(t.mode&1?(e=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):e=1);var n=ze();t=Jt(t,e),t!==null&&(Ls(t,e,n),Ye(t,n))}function eE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zg(t,n)}function tE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),Zg(t,n)}var e_;e_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)Ge=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ge=!1,Ww(t,e,n);Ge=!!(t.flags&131072)}else Ge=!1,ne&&e.flags&1048576&&ig(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lo(t,e),t=e.pendingProps;var i=Jr(e,De.current);Vr(e,n),i=sd(null,e,r,t,i,n);var s=od();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ed(e),i.updater=Ql,e.stateNode=i,i._reactInternals=e,Vu(e,r,t,n),e=Ku(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&qc(e),Ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rE(r),t=gt(r,t),i){case 0:e=qu(null,e,r,t,n);break e;case 1:e=gf(null,e,r,t,n);break e;case 11:e=pf(null,e,r,t,n);break e;case 14:e=mf(null,e,r,gt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),qu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),gf(t,e,r,i,n);case 3:e:{if(Fg(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cg(t,e),ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ni(Error(C(423)),e),e=_f(t,e,r,n,i);break e}else if(r!==i){i=ni(Error(C(424)),e),e=_f(t,e,r,n,i);break e}else for(Je=kn(e.stateNode.containerInfo.firstChild),et=e,ne=!0,vt=null,n=ag(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),r===i){e=Zt(t,e,n);break e}Ue(t,e,r,n)}e=e.child}return e;case 5:return dg(e),t===null&&Wu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fu(r,i)?o=null:s!==null&&Fu(r,s)&&(e.flags|=32),Lg(t,e),Ue(t,e,o,n),e.child;case 6:return t===null&&Wu(e),null;case 13:return Ug(t,e,n);case 4:return td(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ei(e,null,r,n):Ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),pf(t,e,r,i,n);case 7:return Ue(t,e,e.pendingProps,n),e.child;case 8:return Ue(t,e,e.pendingProps.children,n),e.child;case 12:return Ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(il,r._currentValue),r._currentValue=o,s!==null)if(Tt(s.value,o)){if(s.children===i.children&&!Ke.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=qt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Hu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vr(e,n),i=dt(i),r=r(i),e.flags|=1,Ue(t,e,r,n),e.child;case 14:return r=e.type,i=gt(r,e.pendingProps),i=gt(r.type,i),mf(t,e,r,i,n);case 15:return Dg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Lo(t,e),e.tag=1,Qe(r)?(t=!0,tl(e)):t=!1,Vr(e,n),Pg(e,r,i),Vu(e,r,i,n),Ku(null,e,r,!0,t,n);case 19:return jg(t,e,n);case 22:return Mg(t,e,n)}throw Error(C(156,e.tag))};function t_(t,e){return Rm(t,e)}function nE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new nE(t,e,n,r)}function gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rE(t){if(typeof t=="function")return gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mc)return 11;if(t===Lc)return 14}return 2}function Rn(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rr:return er(n.children,i,s,e);case Dc:o=8,i|=8;break;case mu:return t=at(12,n,e,i|2),t.elementType=mu,t.lanes=s,t;case gu:return t=at(13,n,e,i),t.elementType=gu,t.lanes=s,t;case _u:return t=at(19,n,e,i),t.elementType=_u,t.lanes=s,t;case dm:return Jl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case um:o=10;break e;case cm:o=9;break e;case Mc:o=11;break e;case Lc:o=14;break e;case un:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=at(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function er(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function Jl(t,e,n,r){return t=at(22,t,r,e),t.elementType=dm,t.lanes=n,t.stateNode={isHidden:!1},t}function qa(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function Ka(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _d(t,e,n,r,i,s,o,l,a){return t=new iE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=at(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(s),t}function sE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function n_(t){if(!t)return Dn;t=t._reactInternals;e:{if(_r(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Qe(n))return ng(t,n,e)}return e}function r_(t,e,n,r,i,s,o,l,a){return t=_d(n,r,!0,t,i,s,o,l,a),t.context=n_(null),n=t.current,r=ze(),i=xn(n),s=qt(r,i),s.callback=e??null,Tn(n,s,i),t.current.lanes=i,Ls(t,i,r),Ye(t,r),t}function Zl(t,e,n,r){var i=e.current,s=ze(),o=xn(i);return n=n_(n),e.context===null?e.context=n:e.pendingContext=n,e=qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tn(i,e,o),t!==null&&(Ct(t,i,o,s),Oo(t,i,o)),o}function pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vd(t,e){xf(t,e),(t=t.alternate)&&xf(t,e)}function oE(){return null}var i_=typeof reportError=="function"?reportError:function(t){console.error(t)};function yd(t){this._internalRoot=t}ea.prototype.render=yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Zl(t,e,null,null)};ea.prototype.unmount=yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;lr(function(){Zl(null,t,null,null)}),e[Xt]=null}};function ea(t){this._internalRoot=t}ea.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dn.length&&e!==0&&e<dn[n].priority;n++);dn.splice(n,0,t),n===0&&Fm(t)}};function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ta(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rf(){}function lE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=pl(o);s.call(u)}}var o=r_(e,r,t,0,null,!1,!1,"",Rf);return t._reactRootContainer=o,t[Xt]=o.current,ps(t.nodeType===8?t.parentNode:t),lr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=pl(a);l.call(u)}}var a=_d(t,0,!1,null,null,!1,!1,"",Rf);return t._reactRootContainer=a,t[Xt]=a.current,ps(t.nodeType===8?t.parentNode:t),lr(function(){Zl(e,a,n,r)}),a}function na(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=pl(o);l.call(a)}}Zl(e,o,t,i)}else o=lE(n,e,t,i,r);return pl(o)}Om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bi(e.pendingLanes);n!==0&&(jc(e,n|1),Ye(e,he()),!($&6)&&(ri=he()+500,Hn()))}break;case 13:lr(function(){var r=Jt(t,1);if(r!==null){var i=ze();Ct(r,t,1,i)}}),vd(t,1)}};zc=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=ze();Ct(e,t,134217728,n)}vd(t,134217728)}};Dm=function(t){if(t.tag===13){var e=xn(t),n=Jt(t,e);if(n!==null){var r=ze();Ct(n,t,e,r)}vd(t,e)}};Mm=function(){return G};Lm=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};xu=function(t,e,n){switch(e){case"input":if(wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gl(r);if(!i)throw Error(C(90));fm(r),wu(r,i)}}}break;case"textarea":mm(t,n);break;case"select":e=n.value,e!=null&&Br(t,!!n.multiple,e,!1)}};Sm=fd;Cm=lr;var aE={usingClientEntryPoint:!1,Events:[Us,Ar,Gl,wm,Em,fd]},Ai={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uE={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Im(t),t===null?null:t.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||oE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Wl=Eo.inject(uE),Ot=Eo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aE;rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(e))throw Error(C(200));return sE(t,e,null,n)};rt.createRoot=function(t,e){if(!wd(t))throw Error(C(299));var n=!1,r="",i=i_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_d(t,1,!1,null,null,n,!1,r,i),t[Xt]=e.current,ps(t.nodeType===8?t.parentNode:t),new yd(e)};rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Im(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t){return lr(t)};rt.hydrate=function(t,e,n){if(!ta(e))throw Error(C(200));return na(null,t,e,!0,n)};rt.hydrateRoot=function(t,e,n){if(!wd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=i_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r_(e,null,t,1,n??null,i,!1,s,o),t[Xt]=e.current,ps(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ea(e)};rt.render=function(t,e,n){if(!ta(e))throw Error(C(200));return na(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!ta(t))throw Error(C(40));return t._reactRootContainer?(lr(function(){na(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1};rt.unstable_batchedUpdates=fd;rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ta(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return na(t,e,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),sm.exports=rt;var cE=sm.exports,Nf=cE;fu.createRoot=Nf.createRoot,fu.hydrateRoot=Nf.hydrateRoot;var bf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw _i(e)},_i=function(t){return new Error("Firebase Database ("+o_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(l_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new hE;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a_=function(t){const e=l_(t);return Ed.encodeByteArray(e,!0)},ml=function(t){return a_(t).replace(/\./g,"")},gl=function(t){try{return Ed.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){return u_(void 0,t)}function u_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pE(n)||(t[n]=u_(t[n],e[n]));return t}function pE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=()=>mE().__FIREBASE_DEFAULTS__,_E=()=>{if(typeof process>"u"||typeof bf>"u")return;const t=bf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gl(t[1]);return e&&JSON.parse(e)},ra=()=>{try{return gE()||_E()||vE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c_=t=>{var e,n;return(n=(e=ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},d_=t=>{const e=c_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h_=()=>{var t;return(t=ra())===null||t===void 0?void 0:t.config},f_=t=>{var e;return(e=ra())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ml(JSON.stringify(n)),ml(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function yE(){var t;const e=(t=ra())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EE(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SE(){return o_.NODE_ADMIN===!0}function CE(){try{return typeof indexedDB=="object"}catch{return!1}}function kE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TE,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new sn(i,l,r)}}function IE(t,e){return t.replace(xE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Cs(gl(s[0])||""),n=Cs(gl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},RE=function(t){const e=g_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NE=function(t){const e=g_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _l(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function yl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Pf(s)&&Pf(o)){if(!yl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function PE(t,e){const n=new AE(t,e);return n.subscribe.bind(n)}class AE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qa),i.error===void 0&&(i.error=Qa),i.complete===void 0&&(i.complete=Qa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qa(){}function si(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ia=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FE(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LE(t){return t===Gn?void 0:t}function FE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ME(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const jE={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},zE=K.INFO,BE={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},WE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=BE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cd{constructor(e){this.name=e,this._logLevel=zE,this._logHandler=WE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const HE=(t,e)=>e.some(n=>t instanceof n);let Af,Of;function $E(){return Af||(Af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VE(){return Of||(Of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const __=new WeakMap,oc=new WeakMap,v_=new WeakMap,Ya=new WeakMap,kd=new WeakMap;function GE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&__.set(n,t)}).catch(()=>{}),kd.set(e,t),e}function qE(t){if(oc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});oc.set(t,e)}let lc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||v_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KE(t){lc=t(lc)}function QE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xa(this),e,...n);return v_.set(r,e.sort?e.sort():[e]),Nn(r)}:VE().includes(t)?function(...e){return t.apply(Xa(this),e),Nn(__.get(this))}:function(...e){return Nn(t.apply(Xa(this),e))}}function YE(t){return typeof t=="function"?QE(t):(t instanceof IDBTransaction&&qE(t),HE(t,$E())?new Proxy(t,lc):t)}function Nn(t){if(t instanceof IDBRequest)return GE(t);if(Ya.has(t))return Ya.get(t);const e=YE(t);return e!==t&&(Ya.set(t,e),kd.set(e,t)),e}const Xa=t=>kd.get(t);function XE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Nn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Nn(o.result),a.oldVersion,a.newVersion,Nn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const JE=["get","getKey","getAll","getAllKeys","count"],ZE=["put","add","delete","clear"],Ja=new Map;function Df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ZE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ja.set(e,s),s}KE(t=>({...t,get:(e,n,r)=>Df(e,n)||t.get(e,n,r),has:(e,n)=>!!Df(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",Mf="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Cd("@firebase/app"),nS="@firebase/app-compat",rS="@firebase/analytics-compat",iS="@firebase/analytics",sS="@firebase/app-check-compat",oS="@firebase/app-check",lS="@firebase/auth",aS="@firebase/auth-compat",uS="@firebase/database",cS="@firebase/database-compat",dS="@firebase/functions",hS="@firebase/functions-compat",fS="@firebase/installations",pS="@firebase/installations-compat",mS="@firebase/messaging",gS="@firebase/messaging-compat",_S="@firebase/performance",vS="@firebase/performance-compat",yS="@firebase/remote-config",wS="@firebase/remote-config-compat",ES="@firebase/storage",SS="@firebase/storage-compat",CS="@firebase/firestore",kS="@firebase/firestore-compat",TS="firebase",IS="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="[DEFAULT]",xS={[ac]:"fire-core",[nS]:"fire-core-compat",[iS]:"fire-analytics",[rS]:"fire-analytics-compat",[oS]:"fire-app-check",[sS]:"fire-app-check-compat",[lS]:"fire-auth",[aS]:"fire-auth-compat",[uS]:"fire-rtdb",[cS]:"fire-rtdb-compat",[dS]:"fire-fn",[hS]:"fire-fn-compat",[fS]:"fire-iid",[pS]:"fire-iid-compat",[mS]:"fire-fcm",[gS]:"fire-fcm-compat",[_S]:"fire-perf",[vS]:"fire-perf-compat",[yS]:"fire-rc",[wS]:"fire-rc-compat",[ES]:"fire-gcs",[SS]:"fire-gcs-compat",[CS]:"fire-fst",[kS]:"fire-fst-compat","fire-js":"fire-js",[TS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Map,cc=new Map;function RS(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ur(t){const e=t.name;if(cc.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;cc.set(e,t);for(const n of wl.values())RS(n,t);return!0}function sa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new zs("app","Firebase",NS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=IS;function y_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=h_()),!n)throw bn.create("no-options");const s=wl.get(i);if(s){if(yl(n,s.options)&&yl(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const o=new UE(i);for(const a of cc.values())o.addComponent(a);const l=new bS(n,r,o);return wl.set(i,l),l}function Td(t=uc){const e=wl.get(t);if(!e&&t===uc&&h_())return y_();if(!e)throw bn.create("no-app",{appName:t});return e}function Mt(t,e,n){var r;let i=(r=xS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(l.join(" "));return}ur(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="firebase-heartbeat-database",AS=1,ks="firebase-heartbeat-store";let Za=null;function w_(){return Za||(Za=XE(PS,AS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ks)}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),Za}async function OS(t){try{return await(await w_()).transaction(ks).objectStore(ks).get(E_(t))}catch(e){if(e instanceof sn)ar.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function Lf(t,e){try{const r=(await w_()).transaction(ks,"readwrite");await r.objectStore(ks).put(e,E_(t)),await r.done}catch(n){if(n instanceof sn)ar.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function E_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1024,MS=30*24*60*60*1e3;class LS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new US(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ff();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=MS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ff(),{heartbeatsToSend:n,unsentEntries:r}=FS(this._heartbeatsCache.heartbeats),i=ml(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ff(){return new Date().toISOString().substring(0,10)}function FS(t,e=DS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class US{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CE()?kE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uf(t){return ml(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){ur(new Mn("platform-logger",e=>new eS(e),"PRIVATE")),ur(new Mn("heartbeat",e=>new LS(e),"PRIVATE")),Mt(ac,Mf,t),Mt(ac,Mf,"esm2017"),Mt("fire-js","")}jS("");function Id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function S_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zS=S_,C_=new zs("auth","Firebase",S_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Cd("@firebase/auth");function BS(t,...e){El.logLevel<=K.WARN&&El.warn(`Auth (${vr}): ${t}`,...e)}function zo(t,...e){El.logLevel<=K.ERROR&&El.error(`Auth (${vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw xd(t,...e)}function Lt(t,...e){return xd(t,...e)}function WS(t,e,n){const r=Object.assign(Object.assign({},zS()),{[e]:n});return new zs("auth","Firebase",r).create(e,{appName:t.name})}function xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return C_.create(t,...e)}function D(t,e,...n){if(!t)throw xd(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function tn(t,e){t||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HS(){return jf()==="http:"||jf()==="https:"}function jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HS()||wE()||"connection"in navigator)?navigator.onLine:!0}function VS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Sd()||m_()}get(){return $S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=new Bs(3e4,6e4);function Nd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ws(t,e,n,r,i={}){return T_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=vi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),k_.fetch()(x_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function T_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GS),e);try{const i=new KS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw So(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw So(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw So(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw WS(t,c,u);en(t,c)}}catch(i){if(i instanceof sn)throw i;en(t,"network-request-failed",{message:String(i)})}}async function I_(t,e,n,r,i={}){const s=await Ws(t,e,n,r,i);return"mfaPendingCredential"in s&&en(t,"multi-factor-auth-required",{_serverResponse:s}),s}function x_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rd(t.config,i):`${t.config.apiScheme}://${i}`}class KS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),qS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function So(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(t,e){return Ws(t,"POST","/v1/accounts:delete",e)}async function YS(t,e){return Ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XS(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=bd(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ji(eu(i.auth_time)),issuedAtTime:Ji(eu(i.iat)),expirationTime:Ji(eu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function eu(t){return Number(t)*1e3}function bd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const i=gl(n);return i?JSON.parse(i):(zo("Failed to decode base64 JWT payload"),null)}catch(i){return zo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function JS(t){const e=bd(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&ZS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ts(t,YS(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?rC(s.providerUserInfo):[],l=nC(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new R_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function tC(t){const e=ve(t);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rC(t){return t.map(e=>{var{providerId:n}=e,r=Id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,e){const n=await T_(t,{},async()=>{const r=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=x_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",k_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):JS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Is;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new R_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XS(this,e)}reload(){return tC(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ts(this,QS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:w,isAnonymous:T,providerData:I,stsTokenManager:R}=n;D(_&&R,e,"internal-error");const P=Is.fromJSON(this.name,R);D(typeof _=="string",e,"internal-error"),an(d,e.name),an(h,e.name),D(typeof w=="boolean",e,"internal-error"),D(typeof T=="boolean",e,"internal-error"),an(g,e.name),an(v,e.name),an(y,e.name),an(S,e.name),an(m,e.name),an(p,e.name);const H=new tr({uid:_,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:T,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:P,createdAt:m,lastLoginAt:p});return I&&Array.isArray(I)&&(H.providerData=I.map(E=>Object.assign({},E))),S&&(H._redirectEventId=S),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Is;i.updateFromServerResponse(n);const s=new tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new Map;function Vt(t){tn(t instanceof Function,"Expected a class definition");let e=zf.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}N_.type="NONE";const Bf=N_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(Vt(Bf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Vt(Bf);const o=Bo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=tr._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new qr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new qr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(b_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D_(e))return"Blackberry";if(M_(e))return"Webos";if(Pd(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(O_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function b_(t=Me()){return/firefox\//i.test(t)}function Pd(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(t=Me()){return/crios\//i.test(t)}function A_(t=Me()){return/iemobile/i.test(t)}function O_(t=Me()){return/android/i.test(t)}function D_(t=Me()){return/blackberry/i.test(t)}function M_(t=Me()){return/webos/i.test(t)}function oa(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sC(t=Me()){var e;return oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oC(){return EE()&&document.documentMode===10}function L_(t=Me()){return oa(t)||O_(t)||M_(t)||D_(t)||/windows phone/i.test(t)||A_(t)}function lC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t,e=[]){let n;switch(t){case"Browser":n=Wf(Me());break;case"Worker":n=`${Wf(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${r}`}async function U_(t,e){return Ws(t,"GET","/v2/recaptchaConfig",Nd(t,e))}function Hf(t){return t!==void 0&&t.enterprise!==void 0}class j_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function z_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aC().appendChild(r)})}function uC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cC="https://www.google.com/recaptcha/enterprise.js?render=",dC="recaptcha-enterprise",hC="NO_RECAPTCHA";class fC{constructor(e){this.type=dC,this.auth=Hs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{U_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new j_(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Hf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(hC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Hf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}z_(cC+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $f(this),this.idTokenSubscription=new $f(this),this.beforeStateQueue=new pC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ve(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}async initializeRecaptchaConfig(){const e=await U_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new j_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new fC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=F_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hs(t){return ve(t)}class $f{constructor(e){this.auth=e,this.observer=null,this.addObserver=PE(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t,e){const n=sa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yl(s,e??{}))return i;en(i,"already-initialized")}return n.initialize({options:e})}function _C(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vC(t,e,n){const r=Hs(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=B_(e),{host:o,port:l}=yC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),wC()}function B_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yC(t){const e=B_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vf(o)}}}function Vf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t,e){return I_(t,"POST","/v1/accounts:signInWithIdp",Nd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC="http://localhost";class cr extends W_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Id(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:EC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends H_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends $s{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends $s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends $s{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends $s{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(t,e){return I_(t,"POST","/v1/accounts:signUp",Nd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await tr._fromIdTokenResponse(e,r,i),o=Gf(r);return new Ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gf(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t){var e;const n=Hs(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ln({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await SC(n,{returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Cl(e,n,r,i)}}function $_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cl._fromErrorAndOperation(t,s,e,r):s})}async function kC(t,e,n=!1){const r=await Ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ts(t,$_(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=bd(s.idToken);D(o,r,"internal-error");const{sub:l}=o;return D(t.uid===l,r,"user-mismatch"),Ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&en(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e,n=!1){const r="signIn",i=await $_(t,r,e),s=await Ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function xC(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function RC(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function NC(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}const kl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kl,"1"),this.storage.removeItem(kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(){const t=Me();return Pd(t)||oa(t)}const PC=1e3,AC=10;class G_ extends V_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bC()&&lC(),this.fallbackToPolling=L_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);oC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G_.type="LOCAL";const OC=G_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_ extends V_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}q_.type="SESSION";const K_=q_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new la(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await DC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Ad("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function LC(t){Ft().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function FC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jC(){return Q_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="firebaseLocalStorageDb",zC=1,Tl="firebaseLocalStorage",X_="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function BC(){const t=indexedDB.deleteDatabase(Y_);return new Vs(t).toPromise()}function hc(){const t=indexedDB.open(Y_,zC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:X_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await BC(),e(await hc()))})})}async function qf(t,e,n){const r=aa(t,!0).put({[X_]:e,value:n});return new Vs(r).toPromise()}async function WC(t,e){const n=aa(t,!1).get(e),r=await new Vs(n).toPromise();return r===void 0?null:r.value}function Kf(t,e){const n=aa(t,!0).delete(e);return new Vs(n).toPromise()}const HC=800,$C=3;class J_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$C)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(jC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FC(),!this.activeServiceWorker)return;this.sender=new MC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await qf(e,kl,"1"),await Kf(e,kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=aa(i,!1).getAll();return new Vs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J_.type="LOCAL";const VC=J_;new Bs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e){return e?Vt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends W_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qC(t){return IC(t.auth,new Od(t),t.bypassAuthState)}function KC(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),TC(n,new Od(t),t.bypassAuthState)}async function QC(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),kC(n,new Od(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qC;case"linkViaPopup":case"linkViaRedirect":return QC;case"reauthViaPopup":case"reauthViaRedirect":return KC;default:en(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new Bs(2e3,1e4);class jr extends Z_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YC.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="pendingRedirect",Wo=new Map;class JC extends Z_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await ZC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZC(t,e){const n=nk(e),r=tk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ek(t,e){Wo.set(t._key(),e)}function tk(t){return Vt(t._redirectPersistence)}function nk(t){return Bo(XC,t.config.apiKey,t.name)}async function rk(t,e,n=!1){const r=Hs(t),i=GC(r,e),o=await new JC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=10*60*1e3;class sk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ok(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ev(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ik&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ev({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ok(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ev(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e={}){return Ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uk=/^https?/;async function ck(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lk(t);for(const n of e)try{if(dk(n))return}catch{}en(t,"unauthorized-domain")}function dk(t){const e=dc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uk.test(n))return!1;if(ak.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=new Bs(3e4,6e4);function Yf(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fk(t){return new Promise((e,n)=>{var r,i,s;function o(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(Lt(t,"network-request-failed"))},timeout:hk.get()})}if(!((i=(r=Ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ft().gapi)===null||s===void 0)&&s.load)o();else{const l=uC("iframefcb");return Ft()[l]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},z_(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Ho=null,e})}let Ho=null;function pk(t){return Ho=Ho||fk(t),Ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new Bs(5e3,15e3),gk="__/auth/iframe",_k="emulator/auth/iframe",vk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wk(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rd(e,_k):`https://${t.config.authDomain}/${gk}`,r={apiKey:e.apiKey,appName:t.name,v:vr},i=yk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vi(r).slice(1)}`}async function Ek(t){const e=await pk(t),n=Ft().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:wk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),l=Ft().setTimeout(()=>{s(o)},mk.get());function a(){Ft().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ck=500,kk=600,Tk="_blank",Ik="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xk(t,e,n,r=Ck,i=kk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Sk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Me().toLowerCase();n&&(l=P_(u)?Tk:n),b_(u)&&(e=e||Ik,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(sC(u)&&l!=="_self")return Rk(e||"",l),new Xf(null);const d=window.open(e||"",l,c);D(d,t,"popup-blocked");try{d.focus()}catch{}return new Xf(d)}function Rk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="__/auth/handler",bk="emulator/auth/handler",Pk=encodeURIComponent("fac");async function Jf(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vr,eventId:i};if(e instanceof H_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_l(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof $s){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${Pk}=${encodeURIComponent(a)}`:"";return`${Ak(t)}?${vi(l).slice(1)}${u}`}function Ak({config:t}){return t.emulator?Rd(t,bk):`https://${t.authDomain}/${Nk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="webStorageSupport";class Ok{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K_,this._completeRedirectFn=rk,this._overrideRedirectResult=ek}async _openPopup(e,n,r,i){var s;tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jf(e,n,r,dc(),i);return xk(e,o,Ad())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jf(e,n,r,dc(),i);return LC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ek(e),r=new sk(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tu,{type:tu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tu];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ck(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return L_()||Pd()||oa()}}const Dk=Ok;var Zf="@firebase/auth",ep="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Fk(t){ur(new Mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:F_(t)},u=new mC(r,i,s,a);return _C(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ur(new Mn("auth-internal",e=>{const n=Hs(e.getProvider("auth").getImmediate());return(r=>new Mk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Zf,ep,Lk(t)),Mt(Zf,ep,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=5*60,jk=f_("authIdTokenMaxAge")||Uk;let tp=null;const zk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jk)return;const i=n==null?void 0:n.token;tp!==i&&(tp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bk(t=Td()){const e=sa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gC(t,{popupRedirectResolver:Dk,persistence:[VC,OC,K_]}),r=f_("authTokenSyncURL");if(r){const s=zk(r);RC(n,s,()=>s(n.currentUser)),xC(n,o=>s(o))}const i=c_("auth");return i&&vC(n,`http://${i}`),n}Fk("Browser");var Wk="firebase",Hk="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(Wk,Hk,"app");var np={};const rp="@firebase/database",ip="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tv="";function $k(t){tv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Vk(e)}}catch{}return new Gk},Xn=nv("localStorage"),qk=nv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Cd("@firebase/database"),Kk=function(){let t=1;return function(){return t++}}(),rv=function(t){const e=DE(t),n=new bE;n.update(e);const r=n.digest();return Ed.encodeByteArray(r)},Gs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Gs.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let Zi=null,sp=!0;const Qk=function(t,e){k(!0,"Can't turn on custom loggers persistently."),Qr.logLevel=K.VERBOSE,Zi=Qr.log.bind(Qr)},Ce=function(...t){if(sp===!0&&(sp=!1,Zi===null&&qk.get("logging_enabled")===!0&&Qk()),Zi){const e=Gs.apply(null,t);Zi(e)}},qs=function(t){return function(...e){Ce(t,...e)}},fc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gs(...t);Qr.error(e)},nn=function(...t){const e=`FIREBASE FATAL ERROR: ${Gs(...t)}`;throw Qr.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+Gs(...t);Qr.warn(e)},Yk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ua=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Xk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oi="[MIN_NAME]",dr="[MAX_NAME]",yr=function(t,e){if(t===e)return 0;if(t===oi||e===dr)return-1;if(e===oi||t===dr)return 1;{const n=op(t),r=op(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Jk=function(t,e){return t===e?0:t<e?-1:1},Oi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},Dd=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=Dd(t[e[r]]);return n+="}",n},iv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sv=function(t){k(!ua(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Zk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const nT=new RegExp("^-?(0*)\\d{1,10}$"),rT=-2147483648,iT=2147483647,op=function(t){if(nT.test(t)){const e=Number(t);if(e>=rT&&e<=iT)return e}return null},yi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},sT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},es=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class $o{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$o.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="5",ov="v",lv="s",av="r",uv="f",cv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dv="ls",hv="p",pc="ac",fv="websocket",pv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gv(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===fv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aT(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu={},ru={};function Ld(t){const e=t.toString();return nu[e]||(nu[e]=new uT),nu[e]}function cT(t,e){const n=t.toString();return ru[n]||(ru[n]=e()),ru[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&yi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="start",hT="close",fT="pLPCommand",pT="pRTLPCB",_v="id",vv="pw",yv="ser",mT="cb",gT="seg",_T="ts",vT="d",yT="dframe",wv=1870,Ev=30,wT=wv-Ev,ET=25e3,ST=3e4;class zr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qs(e),this.stats_=Ld(n),this.urlFn=a=>(this.appCheckToken&&(a[pc]=this.appCheckToken),gv(n,pv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ST)),Xk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fd((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lp)this.id=l,this.password=a;else if(o===hT)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[lp]="t",r[yv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ov]=Md,this.transportSessionId&&(r[lv]=this.transportSessionId),this.lastSessionId&&(r[dv]=this.lastSessionId),this.applicationId&&(r[hv]=this.applicationId),this.appCheckToken&&(r[pc]=this.appCheckToken),typeof location<"u"&&location.hostname&&cv.test(location.hostname)&&(r[av]=uv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zr.forceAllow_=!0}static forceDisallow(){zr.forceDisallow_=!0}static isAvailable(){return zr.forceAllow_?!0:!zr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Zk()&&!eT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=a_(n),i=iv(r,wT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[yT]="t",r[_v]=e,r[vv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Kk(),window[fT+this.uniqueCallbackIdentifier]=e,window[pT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_v]=this.myID,e[vv]=this.myPW,e[yv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ev+r.length<=wv;){const o=this.pendingSegs.shift();r=r+"&"+gT+i+"="+o.seg+"&"+_T+i+"="+o.ts+"&"+vT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ET)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=16384,kT=45e3;let Il=null;typeof MozWebSocket<"u"?Il=MozWebSocket:typeof WebSocket<"u"&&(Il=WebSocket);class wt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qs(this.connId),this.stats_=Ld(n),this.connURL=wt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[ov]=Md,typeof location<"u"&&location.hostname&&cv.test(location.hostname)&&(o[av]=uv),n&&(o[lv]=n),r&&(o[dv]=r),i&&(o[pc]=i),s&&(o[hv]=s),gv(e,fv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let r;SE(),this.mySock=new Il(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Il!==null&&!wt.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Cs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iv(n,CT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wt.responsesRequiredToBeHealthy=2;wt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[zr,wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wt&&wt.isAvailable();let r=n&&!wt.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wt];else{const i=this.transports_=[];for(const s of xs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=6e4,IT=5e3,xT=10*1024,RT=100*1024,iu="t",ap="d",NT="s",up="r",bT="e",cp="o",dp="a",hp="n",fp="p",PT="h";class AT{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qs("c:"+this.id+":"),this.transportManager_=new xs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(iu in e){const n=e[iu];n===dp?this.upgradeIfSecondaryHealthy_():n===up?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Oi("t",e),r=Oi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Oi("t",e),r=Oi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Oi(iu,e);if(ap in e){const r=e[ap];if(n===PT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===hp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NT?this.onConnectionShutdown_(r):n===up?this.onReset_(r):n===bT?fc("Server Error: "+r):n===cp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Md!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends Cv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xl}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=32,mp=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new q("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function Ud(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function OT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Rs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return je(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function DT(t,e){const n=Rs(t,0),r=Rs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=yr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function jd(t,e){if(Fn(t)!==Fn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fn(t)>Fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class MT{constructor(e,n){this.errorPrefix_=n,this.parts_=Rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ia(this.parts_[r]);Tv(this)}}function LT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ia(e),Tv(t)}function FT(t){const e=t.parts_.pop();t.byteLength_-=ia(e),t.parts_.length>0&&(t.byteLength_-=1)}function Tv(t){if(t.byteLength_>mp)throw new Error(t.errorPrefix_+"has a key path longer than "+mp+" bytes ("+t.byteLength_+").");if(t.parts_.length>pp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pp+") or object contains a cycle "+qn(t))}function qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends Cv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new zd}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=1e3,UT=60*5*1e3,gp=30*1e3,jT=1.3,zT=3e4,BT="server_kill",_p=3;class Kt extends Sv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Kt.nextPersistentConnectionId_++,this.log_=qs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=UT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Pt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Kt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const r=ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=RE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fc("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zT&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Kt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new AT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Be(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(BT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Be(d),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_l(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Dd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_p&&(this.reconnectDelay_=gp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tv.replace(/\./g,"-")]=1,Sd()?e["framework.cordova"]=1:m_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xl.getInstance().currentlyOnline();return _l(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(oi,e),i=new j(oi,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;class Iv extends ca{static get __EMPTY_NODE(){return Co}static set __EMPTY_NODE(e){Co=e}compare(e,n){return yr(e.name,n.name)}isDefinedOn(e){throw _i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(dr,Co)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Co)}toString(){return".key"}}const Yr=new Iv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??qe.EMPTY_NODE,this.right=s??qe.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class WT{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ko(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new WT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(t,e){return yr(t.name,e.name)}function Bd(t,e){return yr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc;function $T(t){mc=t}const xv=function(t){return typeof t=="number"?"number:"+sv(t):"string:"+t},Rv=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else k(t===mc||t.isEmpty(),"priority of unexpected type.");k(t===mc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vp;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rv(this.priorityNode_)}static set __childrenNodeConstructor(e){vp=e}static get __childrenNodeConstructor(){return vp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sv(this.value_):e+=this.value_,this.lazyHash_=rv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nv,bv;function VT(t){Nv=t}function GT(t){bv=t}class qT extends ca{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?yr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(dr,new we("[PRIORITY-POST]",bv))}makePost(e,n){const r=Nv(e);return new j(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new qT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=Math.log(2);class QT{constructor(e){const n=s=>parseInt(Math.log(s)/KT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rl=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new Se(h,d.node,Se.BLACK,null,null);{const g=parseInt(c/2,10)+a,v=i(a,g),y=i(g+1,u);return d=t[g],h=n?n(d):d,new Se(h,d.node,Se.BLACK,v,y)}},s=function(a){let u=null,c=null,d=t.length;const h=function(v,y){const S=d-v,m=d;d-=v;const p=i(S+1,m),_=t[S],w=n?n(_):_;g(new Se(w,_.node,y,null,p))},g=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),S=Math.pow(2,a.count-(v+1));y?h(S,Se.BLACK):(h(S,Se.BLACK),h(S,Se.RED))}return c},o=new QT(t.length),l=s(o);return new qe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;const kr={};class Gt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(kr&&oe,"ChildrenNode.ts has not been loaded"),su=su||new Gt({".priority":kr},{".priority":oe}),su}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Yr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Rl(r,e.getCompare()):l=kr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Gt(c,u)}addToIndexes(e,n){const r=vl(this.indexes_,(i,s)=>{const o=ii(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===kr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Rl(l,o.getCompare())}else return kr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new Gt(r,this.indexSet_)}removeFromIndexes(e,n){const r=vl(this.indexes_,i=>{if(i===kr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Gt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Rv(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Mi||(Mi=new O(new qe(Bd),null,Gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mi}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mi:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Mi:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{k(F(e)!==".priority"||Fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xv(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ks?-1:0}withIndex(e){if(e===Yr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),i=n.getIterator(oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YT extends O{constructor(){super(new qe(Bd),O.EMPTY_NODE,Gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Ks=new YT;Object.defineProperties(j,{MIN:{value:new j(oi,O.EMPTY_NODE)},MAX:{value:new j(dr,Ks)}});Iv.__EMPTY_NODE=O.EMPTY_NODE;we.__childrenNodeConstructor=O;$T(Ks);GT(Ks);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=!0;function de(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,de(e))}if(!(t instanceof Array)&&XT){const n=[];let r=!1;if(Te(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=de(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=Rl(n,HT,o=>o.name,Bd);if(r){const o=Rl(n,oe.getCompare());return new O(s,de(e),new Gt({".priority":o},{".priority":oe}))}else return new O(s,de(e),Gt.Default)}else{let n=O.EMPTY_NODE;return Te(t,(r,i)=>{if(Ut(t,r)&&r.substring(0,1)!=="."){const s=de(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(de(e))}}VT(de);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT extends ca{constructor(e){super(),this.indexPath_=e,k(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?yr(e.name,n.name):s}makePost(e,n){const r=de(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Ks);return new j(dr,e)}toString(){return Rs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT extends ca{compare(e,n){const r=e.node.compareTo(n.node);return r===0?yr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=de(e);return new j(n,r)}toString(){return".value"}}const eI=new ZT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){return{type:"value",snapshotNode:t}}function li(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ns(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(li(n,r)):o.trackChildChange(bs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ns(i,s))}),n.isLeafNode()||n.forEachChild(oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(bs(i,s,o))}else r.trackChildChange(li(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.indexedFilter_=new Wd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ps.getStartPost_(e),this.endPost_=Ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(oe,(o,l)=>{s.matches(new j(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new j(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(bs(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ns(n,d));const y=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(li(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ns(u.name,u.node)),s.trackChildChange(li(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rI(t){return t.loadsAllData()?new Wd(t.getIndex()):t.hasLimit()?new nI(t):new Ps(t)}function yp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===eI?n="$value":t.index_===Yr?n="$key":(k(t.index_ instanceof JT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Sv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Nl.getListenId_(e,r),l={};this.listens_[o]=l;const a=yp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ii(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Nl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=yp(e._queryParams),r=e._path.toString(),i=new Pt;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Cs(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){return{value:null,children:new Map}}function wi(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,bl());const i=t.children.get(r);e=Q(e),wi(i,e,n)}}function gc(t,e){if(U(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(oe,(r,i)=>{wi(t,new q(r),i)}),gc(t,e)}}else if(t.children.size>0){const n=F(e);return e=Q(e),t.children.has(n)&&gc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function _c(t,e,n){t.value!==null?n(e,t.value):sI(t,(r,i)=>{const s=new q(e.toString()+"/"+r);_c(i,s,n)})}function sI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=10*1e3,lI=30*1e3,aI=5*60*1e3;class uI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new oI(e);const r=Ep+(lI-Ep)*Math.random();es(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&Ut(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),es(this.reportStats_.bind(this),Math.floor(Math.random()*2*aI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function $d(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=$d()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new Pl(V(),n,this.revert)}}else return k(F(this.path)===e,"operationForChild called for unrelated child."),new Pl(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new As(this.source,V()):new As(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return U(this.path)?new hr(this.source,V(),this.snap.getImmediateChild(e)):new hr(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new hr(this.source,V(),n.value):new ai(this.source,V(),n)}else return k(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ai(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(tI(o.childName,o.snapshotNode))}),Li(t,i,"child_removed",e,r,n),Li(t,i,"child_added",e,r,n),Li(t,i,"child_moved",s,r,n),Li(t,i,"child_changed",e,r,n),Li(t,i,"value",e,r,n),i}function Li(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>fI(t,l,a)),o.forEach(l=>{const a=hI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function hI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fI(t,e,n){if(e.childName==null||n.childName==null)throw _i("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t,e){return{eventCache:t,serverCache:e}}function ts(t,e,n,r){return da(new Un(e,n,r),t.serverCache)}function Av(t,e,n,r){return da(t.eventCache,new Un(e,n,r))}function Al(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou;const pI=()=>(ou||(ou=new qe(Jk)),ou);class Y{constructor(e,n=pI()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return Te(e,(r,i)=>{n=n.set(new q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:se(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new Y(null)}}set(e,n){if(U(e))return new Y(n,this.children);{const r=F(e),s=(this.children.get(r)||new Y(null)).set(Q(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new Y(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),se(n,i),r):new Y(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new Y(null))}}function ns(t,e,n){if(U(e))return new kt(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=je(i,e);return s=s.updateChild(o,n),new kt(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new kt(s)}}}function vc(t,e,n){let r=t;return Te(n,(i,s)=>{r=ns(r,se(e,i),s)}),r}function Sp(t,e){if(U(e))return kt.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new kt(n)}}function yc(t,e){return wr(t,e)!=null}function wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Cp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function Pn(t,e){if(U(e))return t;{const n=wr(t,e);return n!=null?new kt(new Y(n)):new kt(t.writeTree_.subtree(e))}}function wc(t){return t.writeTree_.isEmpty()}function ui(t,e){return Ov(V(),t.writeTree_,e)}function Ov(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ov(se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(se(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t,e){return Fv(e,t)}function mI(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ns(t.visibleWrites,e,n)),t.lastWriteId=r}function gI(t,e,n,r){k(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=vc(t.visibleWrites,e,n),t.lastWriteId=r}function _I(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function vI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&yI(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return wI(t),!0;if(r.snap)t.visibleWrites=Sp(t.visibleWrites,r.path);else{const l=r.children;Te(l,a=>{t.visibleWrites=Sp(t.visibleWrites,se(r.path,a))})}return!0}else return!1}function yI(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(se(t.path,n),e))return!0;return!1}function wI(t){t.visibleWrites=Dv(t.allWrites,EI,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function EI(t){return t.visible}function Dv(t,e,n){let r=kt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=je(n,o),r=ns(r,l,s.snap)):ut(o,n)&&(l=je(o,n),r=ns(r,V(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=je(n,o),r=vc(r,l,s.children);else if(ut(o,n))if(l=je(o,n),U(l))r=vc(r,V(),s.children);else{const a=ii(s.children,F(l));if(a){const u=a.getChild(Q(l));r=ns(r,V(),u)}}}else throw _i("WriteRecord should have .snap or .children")}}return r}function Mv(t,e,n,r,i){if(!r&&!i){const s=wr(t.visibleWrites,e);if(s!=null)return s;{const o=Pn(t.visibleWrites,e);if(wc(o))return n;if(n==null&&!yc(o,V()))return null;{const l=n||O.EMPTY_NODE;return ui(o,l)}}}else{const s=Pn(t.visibleWrites,e);if(!i&&wc(s))return n;if(!i&&n==null&&!yc(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=Dv(t.allWrites,o,e),a=n||O.EMPTY_NODE;return ui(l,a)}}}function SI(t,e,n){let r=O.EMPTY_NODE;const i=wr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pn(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=ui(Pn(s,new q(o)),l);r=r.updateImmediateChild(o,a)}),Cp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pn(t.visibleWrites,e);return Cp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function CI(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,n);if(yc(t.visibleWrites,s))return null;{const o=Pn(t.visibleWrites,s);return wc(o)?i.getChild(n):ui(o,i.getChild(n))}}function kI(t,e,n,r){const i=se(e,n),s=wr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pn(t.visibleWrites,i);return ui(o,r.getNode().getImmediateChild(n))}else return null}function TI(t,e){return wr(t.visibleWrites,e)}function II(t,e,n,r,i,s,o){let l;const a=Pn(t.visibleWrites,e),u=wr(a,V());if(u!=null)l=u;else if(n!=null)l=ui(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=h.getNext();return c}else return[]}function xI(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Ol(t,e,n,r){return Mv(t.writeTree,t.treePath,e,n,r)}function qd(t,e){return SI(t.writeTree,t.treePath,e)}function kp(t,e,n,r){return CI(t.writeTree,t.treePath,e,n,r)}function Dl(t,e){return TI(t.writeTree,se(t.treePath,e))}function RI(t,e,n,r,i,s){return II(t.writeTree,t.treePath,e,n,r,i,s)}function Kd(t,e,n){return kI(t.writeTree,t.treePath,e,n)}function Lv(t,e){return Fv(se(t.treePath,e),t.writeTree)}function Fv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,bs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ns(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,li(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,bs(r,e.snapshotNode,i.oldSnap));else throw _i("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Uv=new bI;class Qd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fr(this.viewCache_),s=RI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){return{filter:t}}function AI(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function OI(t,e,n,r,i){const s=new NI;let o,l;if(n.type===Et.OVERWRITE){const u=n;u.source.fromUser?o=Ec(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Ml(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Et.MERGE){const u=n;u.source.fromUser?o=MI(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Sc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Et.ACK_USER_WRITE){const u=n;u.revert?o=UI(t,e,u.path,r,i,s):o=LI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Et.LISTEN_COMPLETE)o=FI(t,e,n.path,r,s);else throw _i("Unknown operation type: "+n.type);const a=s.getChanges();return DI(e,o,a),{viewCache:o,changes:a}}function DI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Al(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Pv(Al(e)))}}function jv(t,e,n,r,i,s){const o=e.eventCache;if(Dl(r,n)!=null)return e;{let l,a;if(U(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=fr(e),c=u instanceof O?u:O.EMPTY_NODE,d=qd(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ol(r,fr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){k(Fn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=kp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=Q(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=kp(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Kd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return ts(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Ml(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=F(n);if(!a.isCompleteForPath(n)&&Fn(n)>1)return e;const v=Q(n),S=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=c.updatePriority(a.getNode(),S):u=c.updateChild(a.getNode(),g,S,v,Uv,null)}const d=Av(e,u,a.isFullyInitialized()||U(n),c.filtersNodes()),h=new Qd(i,d,s);return jv(t,d,n,i,h,l)}function Ec(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Qd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=ts(e,u,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=ts(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Q(n),g=l.getNode().getImmediateChild(d);let v;if(U(h))v=r;else{const y=c.getCompleteChild(d);y!=null?Ud(h)===".priority"&&y.getChild(kv(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=O.EMPTY_NODE}if(g.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),d,v,h,c,o);a=ts(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Tp(t,e){return t.eventCache.isCompleteForChild(e)}function MI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=se(n,a);Tp(e,F(c))&&(l=Ec(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=se(n,a);Tp(e,F(c))||(l=Ec(t,l,c,u,i,s,o))}),l}function Ip(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Sc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new Y(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=Ip(t,g,h);a=Ml(t,a,new q(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),y=Ip(t,v,h);a=Ml(t,a,new q(d),y,i,s,o,l)}}),a}function LI(t,e,n,r,i,s,o){if(Dl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ml(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new Y(null);return a.getNode().forEachChild(Yr,(c,d)=>{u=u.set(new q(c),d)}),Sc(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((c,d)=>{const h=se(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Sc(t,e,n,u,i,s,l,o)}}function FI(t,e,n,r,i){const s=e.serverCache,o=Av(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return jv(t,o,n,r,Uv,i)}function UI(t,e,n,r,i,s){let o;if(Dl(r,n)!=null)return e;{const l=new Qd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ol(r,fr(e));else{const d=e.serverCache.getNode();k(d instanceof O,"serverChildren would be complete if leaf node"),c=qd(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=F(n);let d=Kd(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,Q(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,O.EMPTY_NODE,Q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ol(r,fr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Dl(r,V())!=null,ts(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Wd(r.getIndex()),s=rI(r);this.processor_=PI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),c=new Un(a,o.isFullyInitialized(),i.filtersNodes()),d=new Un(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=da(d,c),this.eventGenerator_=new cI(this.query_)}get query(){return this.query_}}function zI(t){return t.viewCache_.serverCache.getNode()}function BI(t){return Al(t.viewCache_)}function WI(t,e){const n=fr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function xp(t){return t.eventRegistrations_.length===0}function HI(t,e){t.eventRegistrations_.push(e)}function Rp(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Np(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(k(fr(t.viewCache_),"We should always have a full cache before handling merges"),k(Al(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=OI(t.processor_,i,e,n,r);return AI(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,zv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function $I(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(s,o)=>{r.push(li(s,o))}),n.isFullyInitialized()&&r.push(Pv(n.getNode())),zv(t,r,n.getNode(),e)}function zv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return dI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ll;class Bv{constructor(){this.views=new Map}}function VI(t){k(!Ll,"__referenceConstructor has already been defined"),Ll=t}function GI(){return k(Ll,"Reference.ts has not been loaded"),Ll}function qI(t){return t.views.size===0}function Yd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Np(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Np(o,e,n,r));return s}}function Wv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Ol(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=qd(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=da(new Un(l,a,!1),new Un(r,i,!1));return new jI(e,u)}return o}function KI(t,e,n,r,i,s){const o=Wv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),HI(o,n),$I(o,n)}function QI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=jn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Rp(u,n,r)),xp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Rp(a,n,r)),xp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!jn(t)&&s.push(new(GI())(e._repo,e._path)),{removed:s,events:o}}function Hv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function An(t,e){let n=null;for(const r of t.views.values())n=n||WI(r,e);return n}function $v(t,e){if(e._queryParams.loadsAllData())return fa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Vv(t,e){return $v(t,e)!=null}function jn(t){return fa(t)!=null}function fa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;function YI(t){k(!Fl,"__referenceConstructor has already been defined"),Fl=t}function XI(){return k(Fl,"Reference.ts has not been loaded"),Fl}let JI=1;class bp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=xI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gv(t,e,n,r,i){return mI(t.pendingWriteTree_,e,n,r,i),i?Ei(t,new hr($d(),e,n)):[]}function ZI(t,e,n,r){gI(t.pendingWriteTree_,e,n,r);const i=Y.fromObject(n);return Ei(t,new ai($d(),e,i))}function wn(t,e,n=!1){const r=_I(t.pendingWriteTree_,e);if(vI(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(V(),!0):Te(r.children,o=>{s=s.set(new q(o),!0)}),Ei(t,new Pl(r.path,s,n))}else return[]}function Qs(t,e,n){return Ei(t,new hr(Vd(),e,n))}function e1(t,e,n){const r=Y.fromObject(n);return Ei(t,new ai(Vd(),e,r))}function t1(t,e){return Ei(t,new As(Vd(),e))}function n1(t,e,n){const r=Jd(t,n);if(r){const i=Zd(r),s=i.path,o=i.queryId,l=je(s,e),a=new As(Gd(o),l);return eh(t,s,a)}else return[]}function Ul(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Vv(o,e))){const a=QI(o,e,n,r);qI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,g)=>jn(g));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=s1(h);for(let v=0;v<g.length;++v){const y=g[v],S=y.query,m=Yv(t,y);t.listenProvider_.startListening(rs(S),Os(t,S),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(rs(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(pa(h));t.listenProvider_.stopListening(rs(h),g)}))}o1(t,u)}return l}function qv(t,e,n,r){const i=Jd(t,r);if(i!=null){const s=Zd(i),o=s.path,l=s.queryId,a=je(o,e),u=new hr(Gd(l),a,n);return eh(t,o,u)}else return[]}function r1(t,e,n,r){const i=Jd(t,r);if(i){const s=Zd(i),o=s.path,l=s.queryId,a=je(o,e),u=Y.fromObject(n),c=new ai(Gd(l),a,u);return eh(t,o,c)}else return[]}function Cc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const v=je(h,i);s=s||An(g,v),o=o||jn(g)});let l=t.syncPointTree_.get(i);l?(o=o||jn(l),s=s||An(l,V())):(l=new Bv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const y=An(v,V());y&&(s=s.updateImmediateChild(g,y))}));const u=Vv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=pa(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=l1();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const c=ha(t.pendingWriteTree_,i);let d=KI(l,e,n,c,s,a);if(!u&&!o&&!r){const h=$v(l,e);d=d.concat(a1(t,e,h))}return d}function Xd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=je(o,e),u=An(l,a);if(u)return u});return Mv(i,e,s,n,!0)}function i1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=je(u,n);r=r||An(c,d)});let i=t.syncPointTree_.get(n);i?r=r||An(i,V()):(i=new Bv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Un(r,!0,!1):null,l=ha(t.pendingWriteTree_,e._path),a=Wv(i,e,l,s?o.getNode():O.EMPTY_NODE,s);return BI(a)}function Ei(t,e){return Kv(e,t.syncPointTree_,null,ha(t.pendingWriteTree_,V()))}function Kv(t,e,n,r){if(U(t.path))return Qv(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=An(i,V()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Lv(r,o);s=s.concat(Kv(l,a,u,c))}return i&&(s=s.concat(Yd(i,t,r,n))),s}}function Qv(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=An(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Lv(r,o),c=t.operationForChild(o);c&&(s=s.concat(Qv(c,l,a,u)))}),i&&(s=s.concat(Yd(i,t,r,n))),s}function Yv(t,e){const n=e.query,r=Os(t,n);return{hashFn:()=>(zI(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?n1(t,n._path,r):t1(t,n._path);{const s=tT(i,n);return Ul(t,n,null,s)}}}}function Os(t,e){const n=pa(e);return t.queryToTagMap.get(n)}function pa(t){return t._path.toString()+"$"+t._queryIdentifier}function Jd(t,e){return t.tagToQueryMap.get(e)}function Zd(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function eh(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=ha(t.pendingWriteTree_,e);return Yd(r,n,i,null)}function s1(t){return t.fold((e,n,r)=>{if(n&&jn(n))return[fa(n)];{let i=[];return n&&(i=Hv(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(XI())(t._repo,t._path):t}function o1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=pa(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function l1(){return JI++}function a1(t,e,n){const r=e._path,i=Os(t,e),s=Yv(t,n),o=t.listenProvider_.startListening(rs(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!jn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!U(u)&&c&&jn(c))return[fa(c).query];{let h=[];return c&&(h=h.concat(Hv(c).map(g=>g.query))),Te(d,(g,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(rs(c),Os(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new th(n)}node(){return this.node_}}class nh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new nh(this.syncTree_,n)}node(){return Xd(this.syncTree_,this.path_)}}const u1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pp=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return c1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return d1(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},c1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},d1=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Xv=function(t,e,n,r){return rh(e,new nh(n,t),r)},Jv=function(t,e,n){return rh(t,new th(e),n)};function rh(t,e,n){const r=t.getPriority().val(),i=Pp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Pp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new we(l,de(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(oe,(l,a)=>{const u=rh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sh(t,e){let n=e instanceof q?e:new q(e),r=t,i=F(n);for(;i!==null;){const s=ii(r.node.children,i)||{children:{},childCount:0};r=new ih(i,r,s),n=Q(n),i=F(n)}return r}function Si(t){return t.node.value}function Zv(t,e){t.node.value=e,kc(t)}function ey(t){return t.node.childCount>0}function h1(t){return Si(t)===void 0&&!ey(t)}function ma(t,e){Te(t.node.children,(n,r)=>{e(new ih(n,t,r))})}function ty(t,e,n,r){n&&e(t),ma(t,i=>{ty(i,e,!0)})}function f1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ys(t){return new q(t.parent===null?t.name:Ys(t.parent)+"/"+t.name)}function kc(t){t.parent!==null&&p1(t.parent,t.name,t)}function p1(t,e,n){const r=h1(n),i=Ut(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,kc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,kc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=/[\[\].#$\/\u0000-\u001F\u007F]/,g1=/[\[\].#$\u0000-\u001F\u007F]/,lu=10*1024*1024,oh=function(t){return typeof t=="string"&&t.length!==0&&!m1.test(t)},ny=function(t){return typeof t=="string"&&t.length!==0&&!g1.test(t)},_1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ny(t)},ry=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ua(t)||t&&typeof t=="object"&&Ut(t,".sv")},jl=function(t,e,n,r){r&&e===void 0||ga(si(t,"value"),e,n)},ga=function(t,e,n){const r=n instanceof q?new MT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qn(r));if(typeof e=="function")throw new Error(t+"contains a function "+qn(r)+" with contents = "+e.toString());if(ua(e))throw new Error(t+"contains "+e.toString()+" "+qn(r));if(typeof e=="string"&&e.length>lu/3&&ia(e)>lu)throw new Error(t+"contains a string greater than "+lu+" utf8 bytes "+qn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!oh(o)))throw new Error(t+" contains an invalid key ("+o+") "+qn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LT(r,o),ga(t,l,r),FT(r)}),i&&s)throw new Error(t+' contains ".value" child '+qn(r)+" in addition to actual children.")}},v1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Rs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!oh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(DT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ut(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},iy=function(t,e,n,r){const i=si(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,l)=>{const a=new q(o);if(ga(i,l,se(n,a)),Ud(a)===".priority"&&!ry(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),v1(i,s)},y1=function(t,e,n){if(ua(e))throw new Error(si(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ry(e))throw new Error(si(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},sy=function(t,e,n,r){if(!ny(n))throw new Error(si(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},w1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sy(t,e,n)},Jn=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},E1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!oh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_1(n))throw new Error(si(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _a(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!jd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function oy(t,e,n){_a(t,n),ly(t,r=>jd(r,e))}function ft(t,e,n){_a(t,n),ly(t,r=>ut(r,e)||ut(e,r))}function ly(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(C1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function C1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Zi&&Ce("event: "+n.toString()),yi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="repo_interrupt",T1=25;class I1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new S1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bl(),this.transactionQueueTree_=new ih,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function x1(t,e,n){if(t.stats_=Ld(t.repoInfo_),t.forceRestClient_||sT())t.server_=new Nl(t.repoInfo_,(r,i,s,o)=>{Ap(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Op(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(r,i,s,o)=>{Ap(t,r,i,s,o)},r=>{Op(t,r)},r=>{R1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=cT(t.repoInfo_,()=>new uI(t.stats_,t.server_)),t.infoData_=new iI,t.infoSyncTree_=new bp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Qs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),lh(t,"connected",!1),t.serverSyncTree_=new bp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);ft(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ay(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function va(t){return u1({timestamp:ay(t)})}function Ap(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=vl(n,u=>de(u));o=r1(t.serverSyncTree_,s,a,i)}else{const a=de(n);o=qv(t.serverSyncTree_,s,a,i)}else if(r){const a=vl(n,u=>de(u));o=e1(t.serverSyncTree_,s,a)}else{const a=de(n);o=Qs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ci(t,s)),ft(t.eventQueue_,l,o)}function Op(t,e){lh(t,"connected",e),e===!1&&A1(t)}function R1(t,e){Te(e,(n,r)=>{lh(t,n,r)})}function lh(t,e,n){const r=new q("/.info/"+e),i=de(n);t.infoData_.updateSnapshot(r,i);const s=Qs(t.infoSyncTree_,r,i);ft(t.eventQueue_,r,s)}function ah(t){return t.nextWriteId_++}function N1(t,e,n){const r=i1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=de(i).withIndex(e._queryParams.getIndex());Cc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Qs(t.serverSyncTree_,e._path,s);else{const l=Os(t.serverSyncTree_,e);o=qv(t.serverSyncTree_,e._path,s,l)}return ft(t.eventQueue_,e._path,o),Ul(t.serverSyncTree_,e,n,null,!0),s},i=>(Xs(t,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function b1(t,e,n,r,i){Xs(t,"set",{path:e.toString(),value:n,priority:r});const s=va(t),o=de(n,r),l=Xd(t.serverSyncTree_,e),a=Jv(o,l,s),u=ah(t),c=Gv(t.serverSyncTree_,e,a,u,!0);_a(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const v=h==="ok";v||Be("set at "+e+" failed: "+h);const y=wn(t.serverSyncTree_,u,!v);ft(t.eventQueue_,e,y),zn(t,i,h,g)});const d=ch(t,e);ci(t,d),ft(t.eventQueue_,d,[])}function P1(t,e,n,r){Xs(t,"update",{path:e.toString(),value:n});let i=!0;const s=va(t),o={};if(Te(n,(l,a)=>{i=!1,o[l]=Xv(se(e,l),de(a),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),zn(t,r,"ok",void 0);else{const l=ah(t),a=ZI(t.serverSyncTree_,e,o,l);_a(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Be("update at "+e+" failed: "+u);const h=wn(t.serverSyncTree_,l,!d),g=h.length>0?ci(t,e):e;ft(t.eventQueue_,g,h),zn(t,r,u,c)}),Te(n,u=>{const c=ch(t,se(e,u));ci(t,c)}),ft(t.eventQueue_,e,[])}}function A1(t){Xs(t,"onDisconnectEvents");const e=va(t),n=bl();_c(t.onDisconnect_,V(),(i,s)=>{const o=Xv(i,s,t.serverSyncTree_,e);wi(n,i,o)});let r=[];_c(n,V(),(i,s)=>{r=r.concat(Qs(t.serverSyncTree_,i,s));const o=ch(t,i);ci(t,o)}),t.onDisconnect_=bl(),ft(t.eventQueue_,V(),r)}function O1(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&gc(t.onDisconnect_,e),zn(t,n,r,i)})}function Dp(t,e,n,r){const i=de(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&wi(t.onDisconnect_,e,i),zn(t,r,s,o)})}function D1(t,e,n,r,i){const s=de(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,l)=>{o==="ok"&&wi(t.onDisconnect_,e,s),zn(t,i,o,l)})}function M1(t,e,n,r){if(_l(n)){Ce("onDisconnect().update() called with empty data.  Don't do anything."),zn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Te(n,(o,l)=>{const a=de(l);wi(t.onDisconnect_,se(e,o),a)}),zn(t,r,i,s)})}function L1(t,e,n){let r;F(e._path)===".info"?r=Cc(t.infoSyncTree_,e,n):r=Cc(t.serverSyncTree_,e,n),oy(t.eventQueue_,e._path,r)}function uy(t,e,n){let r;F(e._path)===".info"?r=Ul(t.infoSyncTree_,e,n):r=Ul(t.serverSyncTree_,e,n),oy(t.eventQueue_,e._path,r)}function F1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(k1)}function Xs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function zn(t,e,n,r){e&&yi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function cy(t,e,n){return Xd(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function uh(t,e=t.transactionQueueTree_){if(e||ya(t,e),Si(e)){const n=hy(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&U1(t,Ys(e),n)}else ey(e)&&ma(e,n=>{uh(t,n)})}function U1(t,e,n){const r=n.map(u=>u.currentWriteId),i=cy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=je(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Xs(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(wn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ya(t,sh(t.transactionQueueTree_,e)),uh(t,t.transactionQueueTree_),ft(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)yi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Be("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ci(t,e)}},o)}function ci(t,e){const n=dy(t,e),r=Ys(n),i=hy(t,n);return j1(t,i,r),r}function j1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=je(n,a.path);let c=!1,d;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=T1)c=!0,d="maxretry",i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=cy(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){ga("transaction failed: Data returned ",g,a.path);let v=de(g);typeof g=="object"&&g!=null&&Ut(g,".priority")||(v=v.updatePriority(h.getPriority()));const S=a.currentWriteId,m=va(t),p=Jv(v,h,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=ah(t),o.splice(o.indexOf(S),1),i=i.concat(Gv(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(wn(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0))}ft(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}ya(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)yi(r[l]);uh(t,t.transactionQueueTree_)}function dy(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Si(r)===void 0;)r=sh(r,n),e=Q(e),n=F(e);return r}function hy(t,e){const n=[];return fy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function fy(t,e,n){const r=Si(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ma(e,i=>{fy(t,i,n)})}function ya(t,e){const n=Si(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Zv(e,n.length>0?n:void 0)}ma(e,r=>{ya(t,r)})}function ch(t,e){const n=Ys(dy(t,e)),r=sh(t.transactionQueueTree_,e);return f1(r,i=>{au(t,i)}),au(t,r),ty(r,i=>{au(t,i)}),n}function au(t,e){const n=Si(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Zv(e,void 0):n.length=s+1,ft(t.eventQueue_,Ys(e),i);for(let o=0;o<r.length;o++)yi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function B1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mp=function(t,e){const n=W1(t),r=n.namespace;n.domain==="firebase.com"&&nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Yk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},W1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=z1(t.substring(c,d)));const h=B1(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",H1=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Lp.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Lp.charAt(e[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class my{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Pt;return O1(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Jn("OnDisconnect.remove",this._path);const e=new Pt;return Dp(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Jn("OnDisconnect.set",this._path),jl("OnDisconnect.set",e,this._path,!1);const n=new Pt;return Dp(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Jn("OnDisconnect.setWithPriority",this._path),jl("OnDisconnect.setWithPriority",e,this._path,!1),y1("OnDisconnect.setWithPriority",n);const r=new Pt;return D1(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Jn("OnDisconnect.update",this._path),iy("OnDisconnect.update",e,this._path);const n=new Pt;return M1(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Ud(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=wp(this._queryParams),n=Dd(e);return n==="{}"?"default":n}get _queryObject(){return wp(this._queryParams)}isEqual(e){if(e=ve(e),!(e instanceof hh))return!1;const n=this._repo===e._repo,r=jd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+OT(this._path)}}class jt extends hh{constructor(e,n){super(e,n,new Hd,!1)}get parent(){const e=kv(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class di{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=hi(this.ref,e);return new di(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new di(i,hi(this.ref,r),oe)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function B(t,e){return t=ve(t),t._checkNotDeleted("ref"),e!==void 0?hi(t._root,e):t._root}function hi(t,e){return t=ve(t),F(t._path)===null?w1("child","path",e):sy("child","path",e),new jt(t._repo,se(t._path,e))}function V1(t){return t=ve(t),new $1(t._repo,t._path)}function Fp(t,e){t=ve(t),Jn("push",t._path),jl("push",e,t._path,!0);const n=ay(t._repo),r=H1(n),i=hi(t,r),s=hi(t,r);let o;return e!=null?o=tt(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function G1(t){return Jn("remove",t._path),tt(t,null)}function tt(t,e){t=ve(t),Jn("set",t._path),jl("set",e,t._path,!1);const n=new Pt;return b1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function yt(t,e){iy("update",e,t._path);const n=new Pt;return P1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ds(t){t=ve(t);const e=new dh(()=>{}),n=new Js(e);return N1(t._repo,t,n).then(r=>new di(r,new jt(t._repo,t._path),t._queryParams.getIndex()))}class Js{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new py("value",this,new di(e.snapshotNode,new jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new my(this,e,n):null}matches(e){return e instanceof Js?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class wa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new my(this,e,n):null}createEvent(e,n){k(e.childName!=null,"Child events should have a childName.");const r=hi(new jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new py(e.type,this,new di(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof wa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fh(t,e,n,r,i){const s=new dh(n,void 0),o=e==="value"?new Js(s):new wa(e,s);return L1(t._repo,t,o),()=>uy(t._repo,t,o)}function Zs(t,e,n,r){return fh(t,"value",e)}function q1(t,e,n,r){return fh(t,"child_added",e)}function K1(t,e,n,r){return fh(t,"child_changed",e)}function pr(t,e,n){let r=null;const i=n?new dh(n):null;e==="value"?r=new Js(i):e&&(r=new wa(e,i)),uy(t._repo,t,r)}VI(jt);YI(jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="FIREBASE_DATABASE_EMULATOR_HOST",Tc={};let Y1=!1;function X1(t,e,n,r){t.repoInfo_=new mv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function J1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mp(s,i),l=o.repoInfo,a;typeof process<"u"&&np&&(a=np[Q1]),a?(s=`http://${a}?ns=${l.namespace}`,o=Mp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new lT(t.name,t.options,e);E1("Invalid Firebase Database URL",o),U(o.path)||nn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=ex(l,t,u,new oT(t.name,n));return new tx(c,t)}function Z1(t,e){const n=Tc[e];(!n||n[t.key]!==t)&&nn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),F1(t),delete n[t.key]}function ex(t,e,n,r){let i=Tc[e.name];i||(i={},Tc[e.name]=i);let s=i[t.toURLString()];return s&&nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new I1(t,Y1,n,r),i[t.toURLString()]=s,s}class tx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(x1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nn("Cannot call "+e+" on a deleted database.")}}function nx(t=Td(),e){const n=sa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=d_("database");r&&rx(n,...r)}return n}function rx(t,e,n,r={}){t=ve(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new $o($o.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:p_(r.mockUserToken,t.app.options.projectId);s=new $o(o)}X1(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t){$k(vr),ur(new Mn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return J1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Mt(rp,ip,t),Mt(rp,ip,"esm2017")}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ix();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="firebasestorage.googleapis.com",_y="storageBucket",sx=2*60*1e3,ox=10*60*1e3,lx=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends sn{constructor(e,n,r=0){super(uu(e),`Firebase Storage: ${n} (${uu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ee;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ee||(ee={}));function uu(t){return"storage/"+t}function ph(){const t="An unknown error occurred, please check the error payload for server response.";return new ue(ee.UNKNOWN,t)}function ax(t){return new ue(ee.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ux(t){return new ue(ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ue(ee.UNAUTHENTICATED,t)}function dx(){return new ue(ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hx(t){return new ue(ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vy(){return new ue(ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yy(){return new ue(ee.CANCELED,"User canceled the upload/download.")}function fx(t){return new ue(ee.INVALID_URL,"Invalid URL '"+t+"'.")}function px(t){return new ue(ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function mx(){return new ue(ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_y+"' property when initializing the app?")}function wy(){return new ue(ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gx(){return new ue(ee.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function _x(){return new ue(ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vx(t){return new ue(ee.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ic(t){return new ue(ee.INVALID_ARGUMENT,t)}function Ey(){return new ue(ee.APP_DELETED,"The Firebase app was deleted.")}function yx(t){return new ue(ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function is(t,e){return new ue(ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Fi(t){throw new ue(ee.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ze.makeFromUrl(e,n)}catch{return new Ze(e,"")}if(r.path==="")return r;throw px(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},y=n===gy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${S}`,"i"),_=[{regex:l,indices:a,postModify:s},{regex:g,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<_.length;w++){const T=_[w],I=T.regex.exec(e);if(I){const R=I[T.indices.bucket];let P=I[T.indices.path];P||(P=""),r=new Ze(R,P),T.postModify(r);break}}if(r==null)throw fx(e);return r}}class wx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function c(...S){u||(u=!0,e.apply(null,S))}function d(S){i=setTimeout(()=>{i=null,t(g,a())},S)}function h(){s&&clearTimeout(s)}function g(S,...m){if(u){h();return}if(S){h(),c.call(null,S,...m);return}if(a()||o){h(),c.call(null,S,...m);return}r<64&&(r*=2);let _;l===1?(l=2,_=0):_=(r+Math.random())*1e3,d(_)}let v=!1;function y(S){v||(v=!0,h(),!u&&(i!==null?(S||(l=2),clearTimeout(i),d(0)):S||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function Sx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t){return t!==void 0}function kx(t){return typeof t=="function"}function Tx(t){return typeof t=="object"&&!Array.isArray(t)}function Ea(t){return typeof t=="string"||t instanceof String}function Up(t){return mh()&&t instanceof Blob}function mh(){return typeof Blob<"u"&&!yE()}function jp(t,e,n,r){if(r<e)throw Ic(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ic(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Sy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nr||(nr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n,r,i,s,o,l,a,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new To(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===nr.NO_ERROR,a=s.getStatus();if(!l||Cy(a,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===nr.ABORT;r(!1,new To(!1,null,c));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new To(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());Cx(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=ph();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?Ey():yy();o(a)}else{const a=vy();o(a)}};this.canceled_?n(!1,new To(!1,null,!0)):this.backoffId_=Ex(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class To{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function xx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Rx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Nx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Px(t,e,n,r,i,s,o=!0){const l=Sy(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return Nx(u,e),xx(u,n),Rx(u,s),bx(u,r),new Ix(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ox(...t){const e=Ax();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(mh())return new Blob(t);throw new ue(ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Dx(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){if(typeof atob>"u")throw vx("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cu{constructor(e,n){this.data=e,this.contentType=n||null}}function Lx(t,e){switch(t){case At.RAW:return new cu(ky(e));case At.BASE64:case At.BASE64URL:return new cu(Ty(t,e));case At.DATA_URL:return new cu(Ux(e),jx(e))}throw ph()}function ky(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Fx(t){let e;try{e=decodeURIComponent(t)}catch{throw is(At.DATA_URL,"Malformed data URL.")}return ky(e)}function Ty(t,e){switch(t){case At.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw is(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case At.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw is(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Mx(e)}catch(i){throw i.message.includes("polyfill")?i:is(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Iy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw is(At.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Ux(t){const e=new Iy(t);return e.base64?Ty(At.BASE64,e.rest):Fx(e.rest)}function jx(t){return new Iy(t).contentType}function zx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){let r=0,i="";Up(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Up(this.data_)){const r=this.data_,i=Dx(r,e,n);return i===null?null:new _n(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new _n(r,!0)}}static getBlob(...e){if(mh()){const n=e.map(r=>r instanceof _n?r.data_:r);return new _n(Ox.apply(null,n))}else{const n=e.map(o=>Ea(o)?Lx(At.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new _n(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){let e;try{e=JSON.parse(t)}catch{return null}return Tx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Wx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ry(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t,e){return e}class Fe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Hx}}let Io=null;function $x(t){return!Ea(t)||t.length<2?t:Ry(t)}function Ny(){if(Io)return Io;const t=[];t.push(new Fe("bucket")),t.push(new Fe("generation")),t.push(new Fe("metageneration")),t.push(new Fe("name","fullPath",!0));function e(s,o){return $x(o)}const n=new Fe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Fe("size");return i.xform=r,t.push(i),t.push(new Fe("timeCreated")),t.push(new Fe("updated")),t.push(new Fe("md5Hash",null,!0)),t.push(new Fe("cacheControl",null,!0)),t.push(new Fe("contentDisposition",null,!0)),t.push(new Fe("contentEncoding",null,!0)),t.push(new Fe("contentLanguage",null,!0)),t.push(new Fe("contentType",null,!0)),t.push(new Fe("metadata","customMetadata",!0)),Io=t,Io}function Vx(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ze(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Gx(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Vx(r,t),r}function by(t,e,n){const r=xy(e);return r===null?null:Gx(t,r,n)}function qx(t,e,n,r){const i=xy(e);if(i===null||!Ea(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),g=eo(h,n,r),v=Sy({alt:"media",token:u});return g+v})[0]}function Py(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Ci{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){if(!t)throw ph()}function gh(t,e){function n(r,i){const s=by(t,i,e);return Qt(s!==null),s}return n}function Kx(t,e){function n(r,i){const s=by(t,i,e);return Qt(s!==null),qx(s,i,t.host,t._protocol)}return n}function to(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=dx():i=cx():n.getStatus()===402?i=ux(t.bucket):n.getStatus()===403?i=hx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Ay(t){const e=to(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=ax(t.path)),s.serverResponse=i.serverResponse,s}return n}function Qx(t,e,n){const r=e.fullServerUrl(),i=eo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Ci(i,s,gh(t,n),o);return l.errorHandler=Ay(e),l}function Yx(t,e,n){const r=e.fullServerUrl(),i=eo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Ci(i,s,Kx(t,n),o);return l.errorHandler=Ay(e),l}function Xx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Oy(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Xx(null,e)),r}function Jx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let _="";for(let w=0;w<2;w++)_=_+Math.random().toString().slice(2);return _}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=Oy(e,r,i),c=Py(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+a+"--",g=_n.getBlob(d,r,h);if(g===null)throw wy();const v={name:u.fullPath},y=eo(s,t.host,t._protocol),S="POST",m=t.maxUploadRetryTime,p=new Ci(y,S,gh(t,n),m);return p.urlParams=v,p.headers=o,p.body=g.uploadData(),p.errorHandler=to(e),p}class zl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function _h(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Qt(!1)}return Qt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Zx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Oy(e,r,i),l={name:o.fullPath},a=eo(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=Py(o,n),h=t.maxUploadRetryTime;function g(y){_h(y);let S;try{S=y.getResponseHeader("X-Goog-Upload-URL")}catch{Qt(!1)}return Qt(Ea(S)),S}const v=new Ci(a,u,g,h);return v.urlParams=l,v.headers=c,v.body=d,v.errorHandler=to(e),v}function eR(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=_h(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Qt(!1)}d||Qt(!1);const h=Number(d);return Qt(!isNaN(h)),new zl(h,r.size(),c==="final")}const o="POST",l=t.maxUploadRetryTime,a=new Ci(n,o,s,l);return a.headers=i,a.errorHandler=to(e),a}const zp=256*1024;function tR(t,e,n,r,i,s,o,l){const a=new zl(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=r.size()),r.size()!==a.total)throw gx();const u=a.total-a.current;let c=u;i>0&&(c=Math.min(c,i));const d=a.current,h=d+c;let g="";c===0?g="finalize":u===c?g="upload, finalize":g="upload";const v={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${a.current}`},y=r.slice(d,h);if(y===null)throw wy();function S(w,T){const I=_h(w,["active","final"]),R=a.current+c,P=r.size();let H;return I==="final"?H=gh(e,s)(w,T):H=null,new zl(R,P,I==="final",H)}const m="POST",p=e.maxUploadRetryTime,_=new Ci(n,m,S,p);return _.headers=v,_.body=y.uploadData(),_.progressCallback=l||null,_.errorHandler=to(t),_}const $e={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function du(t){switch(t){case"running":case"pausing":case"canceling":return $e.RUNNING;case"paused":return $e.PAUSED;case"success":return $e.SUCCESS;case"canceled":return $e.CANCELED;case"error":return $e.ERROR;default:return $e.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r){if(kx(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class rR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=nr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=nr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=nr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Fi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class iR extends rR{initXhr(){this.xhr_.responseType="text"}}function Ir(){return new iR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Ny(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ee.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Cy(i.status,[]))if(s)i=vy();else{this.sleepTime=Math.max(this.sleepTime*2,lx),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ee.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Zx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ir,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=eR(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Ir,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=zp*this._chunkMultiplier,n=new zl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=tR(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Ir,i,s,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){zp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Qx(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Ir,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Jx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ir,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=yy(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=du(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new nR(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(du(this._state)){case $e.SUCCESS:Tr(this._resolve.bind(null,this.snapshot))();break;case $e.CANCELED:case $e.ERROR:const n=this._reject;Tr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(du(this._state)){case $e.RUNNING:case $e.PAUSED:e.next&&Tr(e.next.bind(e,this.snapshot))();break;case $e.SUCCESS:e.complete&&Tr(e.complete.bind(e))();break;case $e.CANCELED:case $e.ERROR:e.error&&Tr(e.error.bind(e,this._error))();break;default:e.error&&Tr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){this._service=e,n instanceof Ze?this._location=n:this._location=Ze.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new mr(e,n)}get root(){const e=new Ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ry(this._location.path)}get storage(){return this._service}get parent(){const e=Bx(this._location.path);if(e===null)return null;const n=new Ze(this._location.bucket,e);return new mr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yx(e)}}function oR(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new sR(t,new _n(e),n)}function lR(t){t._throwIfRoot("getDownloadURL");const e=Yx(t.storage,t._location,Ny());return t.storage.makeRequestWithTokens(e,Ir).then(n=>{if(n===null)throw _x();return n})}function aR(t,e){const n=Wx(t._location.path,e),r=new Ze(t._location.bucket,n);return new mr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){return/^[A-Za-z]+:\/\//.test(t)}function cR(t,e){return new mr(t,e)}function Dy(t,e){if(t instanceof vh){const n=t;if(n._bucket==null)throw mx();const r=new mr(n,n._bucket);return e!=null?Dy(r,e):r}else return e!==void 0?aR(t,e):t}function dR(t,e){if(e&&uR(e)){if(t instanceof vh)return cR(t,e);throw Ic("To use ref(service, url), the first argument must be a Storage instance.")}else return Dy(t,e)}function Bp(t,e){const n=e==null?void 0:e[_y];return n==null?null:Ze.makeFromBucketSpec(n,t)}function hR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:p_(i,t.app.options.projectId))}class vh{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sx,this._maxUploadRetryTime=ox,this._requests=new Set,i!=null?this._bucket=Ze.makeFromBucketSpec(i,this._host):this._bucket=Bp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ze.makeFromBucketSpec(this._url,e):this._bucket=Bp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new wx(Ey());{const o=Px(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Wp="@firebase/storage",Hp="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="storage";function fR(t,e,n){return t=ve(t),oR(t,e,n)}function pR(t){return t=ve(t),lR(t)}function mR(t,e){return t=ve(t),dR(t,e)}function gR(t=Td(),e){t=ve(t);const r=sa(t,My).getImmediate({identifier:e}),i=d_("storage");return i&&_R(r,...i),r}function _R(t,e,n,r={}){hR(t,e,n,r)}function vR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vh(n,r,i,e,vr)}function yR(){ur(new Mn(My,vR,"PUBLIC").setMultipleInstances(!0)),Mt(Wp,Hp,""),Mt(Wp,Hp,"esm2017")}yR();const wR={apiKey:"AIzaSyCQHyooMJKL7LRlkidDtDzefSz8rIjiQag",authDomain:"thread-chat-37414.firebaseapp.com",databaseURL:"https://thread-chat-37414-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"thread-chat-37414",storageBucket:"thread-chat-37414.firebasestorage.app",messagingSenderId:"426777032314",appId:"1:426777032314:web:904d69b316d3ccc5242dc3"},yh=y_(wR),$p=Bk(yh),W=nx(yh),ER=gR(yh);function SR(){const[t,e]=x.useState(null),[n,r]=x.useState(!1);return x.useEffect(()=>NC($p,async s=>{if(!s){try{await CC($p)}catch(l){console.error(l)}return}let o=localStorage.getItem("_thread_uid");o||(localStorage.setItem("_thread_uid",s.uid),o=s.uid),e(o),r(!0)}),[]),{uid:t,ready:n}}const Vp={enterSend:!0,msgSound:!0,notifs:!1,readReceipts:!0,theme:"default"};function CR(){const[t,e]=x.useState(()=>{try{return{...Vp,...JSON.parse(localStorage.getItem("_thread_prefs")||"{}")}}catch{return Vp}});x.useEffect(()=>{localStorage.setItem("_thread_prefs",JSON.stringify(t)),document.body.dataset.theme=t.theme==="default"?"":t.theme},[t]);function n(r,i){e(s=>({...s,[r]:i}))}return{prefs:t,setPref:n}}function kR(t){const[e,n]=x.useState([]);return x.useEffect(()=>{if(!t)return;const r=B(W,`users/${t}/chats`),i=Zs(r,s=>{if(!s.exists()){n([]);return}const o=[];s.forEach(l=>{o.push({chatId:l.key,...l.val()})}),o.sort((l,a)=>(a.lastTs||0)-(l.lastTs||0)),n(o)});return()=>pr(r,"value",i)},[t]),e}function TR(t){const[e,n]=x.useState([]);return x.useEffect(()=>{if(!t)return;const r=B(W,`requests/${t}`),i=Zs(r,s=>{if(!s.exists()){n([]);return}const o=[];s.forEach(l=>{l.val().status==="pending"&&o.push({from:l.key,...l.val()})}),n(o)});return()=>pr(r,"value",i)},[t]),e}async function Ly(t){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}const ye={wrap:{flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100dvh",width:"100%",position:"relative",overflow:"hidden",display:"flex"},gridBg:{position:"absolute",inset:0,backgroundImage:"linear-gradient(var(--s1) 1px,transparent 1px),linear-gradient(90deg,var(--s1) 1px,transparent 1px)",backgroundSize:"60px 60px",maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)",pointerEvents:"none",opacity:.5},glow:{position:"absolute",width:700,height:700,background:"radial-gradient(circle,rgba(255,255,255,0.028) 0%,transparent 65%)",top:"50%",left:"50%",transform:"translate(-50%,-58%)",pointerEvents:"none"},inner:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:420,padding:"0 16px"},logo:{fontSize:72,fontWeight:800,letterSpacing:-6,lineHeight:1,color:"var(--text)",display:"inline-block",animation:"logoIn 0.7s cubic-bezier(0.22,1,0.36,1)"},dot:{display:"inline-block",width:9,height:9,borderRadius:"50%",background:"var(--accent)",verticalAlign:"super",marginLeft:4,transition:"background 0.3s"},tag:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:5,textTransform:"uppercase",color:"var(--dim)",marginTop:10,marginBottom:40,animation:"fadeIn 1s ease 0.3s both"},card:{width:"100%",background:"var(--s1)",border:"1px solid var(--b1)",borderRadius:20,overflow:"hidden",boxShadow:"0 0 0 1px rgba(255,255,255,0.02),0 40px 80px rgba(0,0,0,0.7)",animation:"cardIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"},tabs:{display:"flex",borderBottom:"1px solid var(--b1)"},tab:t=>({flex:1,padding:14,fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:500,letterSpacing:2,textTransform:"uppercase",color:t?"var(--text)":"var(--dim)",cursor:"pointer",textAlign:"center",borderBottom:t?"2px solid var(--accent)":"2px solid transparent",transition:"all 0.2s"}),body:{padding:24},label:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--dim)",marginBottom:7,display:"block"},input:{width:"100%",background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:10,padding:"12px 14px",fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:14,color:"var(--text)",outline:"none",marginBottom:14,transition:"border-color 0.2s",userSelect:"text",WebkitUserSelect:"text"},err:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"#886655",letterSpacing:.5,minHeight:18,marginBottom:6},btn:t=>({width:"100%",padding:13,background:t?"var(--b1)":"var(--accent)",color:t?"var(--dim)":"var(--bg)",border:"none",borderRadius:10,fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:13,fontWeight:700,cursor:t?"not-allowed":"pointer",transition:"all 0.2s",marginTop:2,opacity:t?.4:1}),hint:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:1,textAlign:"center",marginTop:12,lineHeight:1.7}};function ss({label:t,type:e="text",placeholder:n,value:r,onChange:i}){return f.jsxs(f.Fragment,{children:[f.jsx("label",{style:ye.label,children:t}),f.jsx("input",{style:ye.input,type:e,placeholder:n,value:r,onChange:s=>i(s.target.value),autoComplete:"off"})]})}function IR({uid:t,onDone:e}){const[n,r]=x.useState(""),[i,s]=x.useState(""),[o,l]=x.useState(""),[a,u]=x.useState(""),[c,d]=x.useState(!1);async function h(){if(!n.trim())return u("↳ name required");if(i.trim().length<3)return u("↳ username min 3 chars");if(!/^[a-z0-9_]+$/.test(i.trim().toLowerCase()))return u("↳ letters, numbers, underscore only");if(o.length<6)return u("↳ password min 6 chars");u(""),d(!0);try{const g=i.trim().toLowerCase();if((await Ds(B(W,"users/"+g))).exists())return u("↳ username taken");const y=await Ly(o+g);await tt(B(W,"users/"+g),{name:n.trim(),passHash:y,uid:t,createdAt:Date.now()}),e({myName:n.trim(),username:g})}catch(g){u("↳ "+g.message)}finally{d(!1)}}return f.jsxs(f.Fragment,{children:[f.jsx(ss,{label:"Your name",placeholder:"how should people call you",value:n,onChange:r}),f.jsx(ss,{label:"Username",placeholder:"unique · letters & numbers only",value:i,onChange:s}),f.jsx(ss,{label:"Password",type:"password",placeholder:"min 6 characters",value:o,onChange:l}),f.jsx("div",{style:ye.err,children:a}),f.jsx("button",{style:ye.btn(c),disabled:c,onClick:h,children:c?"Creating...":"Create account →"}),f.jsx("div",{style:ye.hint,children:"your username is how others find and message you"})]})}function xR({uid:t,onDone:e}){const[n,r]=x.useState(""),[i,s]=x.useState(""),[o,l]=x.useState(""),[a,u]=x.useState(!1);async function c(){if(!n.trim())return l("↳ username required");if(!i)return l("↳ password required");l(""),u(!0);try{const d=n.trim().toLowerCase(),h=await Ds(B(W,"users/"+d));if(!h.exists())return l("↳ username not found");const g=h.val();if(await Ly(i+d)!==g.passHash)return l("↳ wrong password");await yt(B(W,"users/"+d),{uid:t}),e({myName:g.name,username:d})}catch(d){l("↳ "+d.message)}finally{u(!1)}}return f.jsxs(f.Fragment,{children:[f.jsx(ss,{label:"Username",placeholder:"your username",value:n,onChange:r}),f.jsx(ss,{label:"Password",type:"password",placeholder:"your password",value:i,onChange:s}),f.jsx("div",{style:ye.err,children:o}),f.jsx("button",{style:ye.btn(a),disabled:a,onClick:c,children:a?"Signing in...":"Sign in →"})]})}const RR=["register","signin"],NR={register:"New account",signin:"Sign in"};function bR({uid:t,onSignIn:e}){const[n,r]=x.useState("register");function i(s){localStorage.setItem("_thread_session",JSON.stringify(s)),e(s)}return f.jsxs("div",{style:ye.wrap,children:[f.jsx("div",{style:ye.glow}),f.jsx("div",{style:ye.gridBg}),f.jsxs("div",{style:ye.inner,children:[f.jsxs("div",{style:ye.logo,children:["thread",f.jsx("span",{style:ye.dot})]}),f.jsx("div",{style:ye.tag,children:"private · search · unlimited chats"}),f.jsxs("div",{style:ye.card,children:[f.jsx("div",{style:ye.tabs,children:RR.map(s=>f.jsx("div",{style:ye.tab(n===s),onClick:()=>r(s),children:NR[s]},s))}),f.jsxs("div",{style:ye.body,children:[n==="register"&&f.jsx(IR,{uid:t,onDone:i}),n==="signin"&&f.jsx(xR,{uid:t,onDone:i})]})]})]})]})}function PR(t){const[e,n]=x.useState([]),r=x.useRef(!1),i=x.useRef(null);return x.useEffect(()=>{if(!t)return;n([]),r.current=!1;const s=B(W,`chats/${t}/msgs`),o=q1(s,a=>{const u={id:a.key,...a.val(),isNew:r.current};n(c=>c.find(d=>d.id===a.key)?c:[...c,u]),clearTimeout(i.current),i.current=setTimeout(()=>{r.current=!0},400)}),l=K1(s,a=>{const u={id:a.key,...a.val()};n(c=>c.map(d=>d.id===a.key?{...d,...u}:d))});return()=>{pr(s,"child_added",o),pr(s,"child_changed",l),clearTimeout(i.current)}},[t]),e}function AR(t,e,n){const[r,i]=x.useState(!1);return x.useEffect(()=>{if(!t||!e||!n)return;const s=B(W,`chats/${t}/presence/${e}`);tt(s,{online:!0,name:n}),V1(s).update({online:!1});const o=B(W,`chats/${t}/presence`),l=Zs(o,a=>{a.exists()&&i(Object.entries(a.val()).some(([u,c])=>u!==e&&c.online===!0))});return()=>{pr(o,"value",l),tt(s,{online:!1,name:n})}},[t,e,n]),r}function OR(t,e){const[n,r]=x.useState(!1),i=x.useRef(null);x.useEffect(()=>{if(!t||!e)return;const l=B(W,`chats/${t}/typing`),a=Zs(l,u=>{if(!u.exists()){r(!1);return}r(Object.entries(u.val()).some(([c,d])=>c!==e&&d===!0))});return()=>pr(l,"value",a)},[t,e]);function s(){!t||!e||(tt(B(W,`chats/${t}/typing/${e}`),!0),clearTimeout(i.current),i.current=setTimeout(()=>tt(B(W,`chats/${t}/typing/${e}`),!1),2500))}function o(){clearTimeout(i.current),t&&e&&tt(B(W,`chats/${t}/typing/${e}`),!1)}return{peerTyping:n,notifyTyping:s,stopTyping:o}}function DR(t){const e=x.useRef(null),n=x.useRef(!1);x.useEffect(()=>{function s(){if(!n.current)try{e.current||(e.current=new(window.AudioContext||window.webkitAudioContext)),e.current.state==="suspended"&&e.current.resume(),n.current=!0}catch{}}return document.addEventListener("touchstart",s,{once:!0,passive:!0}),document.addEventListener("click",s,{once:!0}),document.addEventListener("keydown",s,{once:!0}),()=>{document.removeEventListener("touchstart",s),document.removeEventListener("click",s),document.removeEventListener("keydown",s)}},[]);function r(){if(t)try{e.current||(e.current=new(window.AudioContext||window.webkitAudioContext));const s=e.current;s.state==="suspended"?s.resume().then(()=>i(s)):i(s)}catch{}}function i(s){const o=s.currentTime,l=s.createOscillator(),a=s.createGain();l.connect(a),a.connect(s.destination),l.type="sine",l.frequency.setValueAtTime(300,o),l.frequency.exponentialRampToValueAtTime(160,o+.09),a.gain.setValueAtTime(.2,o),a.gain.exponentialRampToValueAtTime(.001,o+.18),l.start(o),l.stop(o+.18);const u=s.createOscillator(),c=s.createGain();u.connect(c),c.connect(s.destination),u.type="sine",u.frequency.setValueAtTime(880,o),u.frequency.exponentialRampToValueAtTime(580,o+.06),c.gain.setValueAtTime(.07,o),c.gain.exponentialRampToValueAtTime(.001,o+.1),u.start(o),u.stop(o+.1)}return r}const Gp={};function MR(t){const[e,n]=x.useState(Gp[t]||null);return x.useEffect(()=>{if(!t)return;const r=B(W,`users/${t}/pfp`),i=Zs(r,s=>{const o=s.val()||null;Gp[t]=o,n(o)});return()=>pr(r,"value",i)},[t]),e}function fi({username:t,name:e,size:n=42,showRing:r=!1,onClick:i}){var l;const s=MR(t),o=n*.28;return f.jsxs("div",{onClick:i,style:{position:"relative",flexShrink:0,width:n,height:n,cursor:i?"pointer":"default"},children:[s&&r&&f.jsx("div",{style:{position:"absolute",inset:-2,borderRadius:o+2,background:"linear-gradient(135deg, var(--accent), transparent, var(--accent))",backgroundSize:"200% 200%",animation:"ringRotate 2s linear infinite",zIndex:0}}),f.jsx("div",{style:{position:"relative",zIndex:1,width:n,height:n,borderRadius:o,overflow:"hidden",background:"var(--s3)",border:s?"none":"1px solid var(--b1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:n*.38,fontWeight:700,textTransform:"uppercase",color:"var(--accent)",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:a=>{i&&(a.currentTarget.style.transform="scale(1.05)",a.currentTarget.style.boxShadow="0 0 12px var(--accent-dim)")},onMouseLeave:a=>{a.currentTarget.style.transform="scale(1)",a.currentTarget.style.boxShadow="none"},children:s?f.jsx("img",{src:s,alt:e,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):((l=e==null?void 0:e[0])==null?void 0:l.toUpperCase())||"?"})]})}function LR(){return f.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),f.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]})}function FR(){return f.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"currentColor",children:[f.jsx("circle",{cx:"5",cy:"12",r:"2"}),f.jsx("circle",{cx:"12",cy:"12",r:"2"}),f.jsx("circle",{cx:"19",cy:"12",r:"2"})]})}function UR(){return f.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}const hu={width:34,height:34,border:"none",background:"transparent",color:"var(--dim)",cursor:"pointer",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"};function jR({peerName:t,peerUsername:e,peerOnline:n,onSidebarOpen:r,onInvite:i,onMenu:s,showSidebarBtn:o}){return f.jsxs("div",{style:{height:60,paddingTop:"env(safe-area-inset-top)",display:"flex",alignItems:"center",paddingLeft:16,paddingRight:16,gap:12,borderBottom:"1px solid var(--b1)",background:"rgba(8,8,8,0.92)",backdropFilter:"blur(24px)",flexShrink:0,position:"relative"},children:[f.jsx("div",{style:{position:"absolute",bottom:-1,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,var(--b2) 40%,var(--b2) 60%,transparent)"}}),o&&f.jsx("button",{style:hu,onClick:r,onMouseEnter:l=>{l.currentTarget.style.background="var(--s2)",l.currentTarget.style.color="var(--text)"},onMouseLeave:l=>{l.currentTarget.style.background="transparent",l.currentTarget.style.color="var(--dim)"},children:f.jsx(UR,{})}),f.jsxs("div",{style:{position:"relative",flexShrink:0},children:[f.jsx(fi,{username:e,name:t,size:38,showRing:!0}),f.jsx("div",{style:{position:"absolute",bottom:-2,right:-2,width:11,height:11,borderRadius:"50%",border:"2.5px solid var(--bg)",background:n?"#4a4":"var(--s4)",transition:"background 0.5s",...n?{animation:"breathe 2s ease-in-out infinite"}:{}}})]}),f.jsxs("div",{style:{flex:1,minWidth:0},children:[f.jsx("div",{style:{fontSize:15,fontWeight:700,letterSpacing:-.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t||"—"}),f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:n?"#4a4":"var(--dim)",letterSpacing:1.5,textTransform:"uppercase",marginTop:2,transition:"color 0.3s"},children:n?"online":"last seen recently"})]}),f.jsxs("div",{style:{display:"flex",gap:4},children:[f.jsx("button",{style:hu,onClick:i,title:"Invite via link",onMouseEnter:l=>{l.currentTarget.style.background="var(--s2)",l.currentTarget.style.color="var(--text)"},onMouseLeave:l=>{l.currentTarget.style.background="transparent",l.currentTarget.style.color="var(--dim)"},children:f.jsx(LR,{})}),f.jsx("button",{style:hu,onClick:s,title:"More",onMouseEnter:l=>{l.currentTarget.style.background="var(--s2)",l.currentTarget.style.color="var(--text)"},onMouseLeave:l=>{l.currentTarget.style.background="transparent",l.currentTarget.style.color="var(--dim)"},children:f.jsx(FR,{})})]})]})}function zR({msg:t,isYou:e,showAvatar:n,showName:r,onReply:i,onReact:s,onDelete:o,onImageClick:l}){var y;const a=x.useRef(null),u={padding:"11px 15px",borderRadius:16,fontSize:14,lineHeight:1.6,wordBreak:"break-word",cursor:t.deleted?"default":"pointer",position:"relative",userSelect:"text",WebkitUserSelect:"text",animation:e?"bPopYou 0.28s cubic-bezier(0.34,1.4,0.64,1) both":"bPopThem 0.28s cubic-bezier(0.34,1.4,0.64,1) both",transition:"opacity 0.15s, transform 0.15s",...e?{background:"var(--accent)",color:"var(--bg)",borderBottomRightRadius:4,fontWeight:500}:{background:"var(--s2)",color:"var(--text)",border:"1px solid var(--b1)",borderBottomLeftRadius:4},...t.deleted?{opacity:.35,fontStyle:"italic",fontSize:12}:{}},c={};t.reactions&&Object.entries(t.reactions).forEach(([S,m])=>{c[m]=c[m]||[],c[m].push(S)});function d(S){S.preventDefault(),t.deleted||s(t.id,S.currentTarget)}function h(){a.current=setTimeout(()=>s(t.id,null),500)}function g(){clearTimeout(a.current)}function v(){t.deleted||i(t)}return f.jsxs("div",{style:{display:"flex",justifyContent:e?"flex-end":"flex-start",zIndex:1,position:"relative"},children:[!e&&f.jsx("div",{style:{visibility:n?"visible":"hidden",marginRight:8,alignSelf:"flex-end",marginBottom:1},children:f.jsx(fi,{username:t.senderUsername,name:t.senderName,size:30})}),f.jsxs("div",{style:{maxWidth:"68%",display:"flex",flexDirection:"column",alignItems:e?"flex-end":"flex-start"},children:[r&&!e&&f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:1.5,textTransform:"uppercase",color:"var(--dim)",marginBottom:4,animation:"fadeIn 0.2s ease"},children:t.senderName}),t.replyTo&&!t.deleted&&f.jsxs("div",{style:{background:e?"rgba(0,0,0,0.15)":"rgba(255,255,255,0.06)",borderLeft:e?"2px solid rgba(0,0,0,0.35)":"2px solid var(--accent)",borderRadius:6,padding:"5px 10px",marginBottom:6,fontSize:12,color:"var(--dim)",cursor:"pointer",maxWidth:"100%",animation:"fadeIn 0.2s ease",transition:"opacity 0.15s"},children:[t.replyTo.senderName,": ",(y=t.replyTo.text)==null?void 0:y.slice(0,80)]}),f.jsx("div",{style:u,onContextMenu:d,onTouchStart:h,onTouchEnd:g,onDoubleClick:v,onMouseEnter:S=>{t.deleted||(S.currentTarget.style.opacity="0.92")},onMouseLeave:S=>{S.currentTarget.style.opacity="1"},children:t.deleted?"message deleted":t.imageUrl?f.jsx("img",{src:t.imageUrl,loading:"lazy",onClick:S=>{S.stopPropagation(),l(t.imageUrl)},style:{maxWidth:220,maxHeight:220,borderRadius:10,display:"block",cursor:"pointer",transition:"transform 0.2s"},onMouseEnter:S=>S.target.style.transform="scale(1.02)",onMouseLeave:S=>S.target.style.transform="scale(1)",alt:""}):t.text}),Object.keys(c).length>0&&f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginTop:5},children:Object.entries(c).map(([S,m])=>f.jsxs("div",{onClick:()=>s(t.id,null,S),className:"rxn-new",style:{background:"var(--s3)",border:`1px solid ${m.includes("me")?"var(--accent)":"var(--b1)"}`,borderRadius:100,padding:"3px 9px",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",gap:4,transition:"transform 0.15s, border-color 0.15s"},onMouseEnter:p=>p.currentTarget.style.transform="scale(1.1)",onMouseLeave:p=>p.currentTarget.style.transform="scale(1)",children:[S,f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)"},children:m.length})]},S))}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:3,padding:"0 2px",animation:"fadeIn 0.3s ease 0.1s both"},children:[f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:.5},children:t.time}),e&&f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",letterSpacing:.5,transition:"color 0.3s"},children:t.seen?"· seen":"· sent"}),e&&!t.deleted&&f.jsx("span",{onClick:()=>{confirm("Delete for both sides?")&&o(t.id)},style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",cursor:"pointer",letterSpacing:.5,opacity:0,transition:"opacity 0.2s"},onMouseEnter:S=>S.target.style.opacity="1",onMouseLeave:S=>S.target.style.opacity="0",children:"· del"})]})]})]})}function BR({onSend:t,onTyping:e,replyTo:n,onCancelReply:r,onImageUpload:i,enterSend:s}){var h;const o=x.useRef(null);x.useEffect(()=>{var g;n&&((g=o.current)==null||g.focus())},[n]);function l(){const g=o.current;g.style.height="auto",g.style.height=Math.min(g.scrollHeight,120)+"px",e()}function a(g){s&&g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),u()),!s&&g.key==="Enter"&&g.shiftKey&&(g.preventDefault(),u())}function u(){const g=o.current.value.trim();g&&(t(g),o.current.value="",o.current.style.height="auto")}const c={padding:"10px 16px calc(18px + env(safe-area-inset-bottom))",borderTop:"1px solid var(--b1)",background:"rgba(8,8,8,0.95)",backdropFilter:"blur(24px)",flexShrink:0,position:"relative"},d={display:"flex",alignItems:"flex-end",gap:8,background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:16,padding:"8px 8px 8px 14px"};return f.jsxs("div",{style:c,children:[n&&f.jsxs("div",{style:{padding:"8px 0 8px",display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[f.jsx("div",{style:{width:3,minHeight:28,background:"var(--accent)",borderRadius:2,alignSelf:"stretch"}}),f.jsxs("div",{style:{flex:1,fontSize:12,color:"var(--dim)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["↩ ",n.senderName,": ",(h=n.text)==null?void 0:h.slice(0,60)]}),f.jsx("button",{onClick:r,style:{background:"none",border:"none",color:"var(--dim)",cursor:"pointer",fontSize:20,padding:0},children:"×"})]}),f.jsxs("div",{style:d,children:[f.jsx("button",{onClick:()=>document.getElementById("imgInput").click(),style:{background:"none",border:"none",color:"var(--dim)",cursor:"pointer",fontSize:18,padding:4,borderRadius:8,flexShrink:0},children:"⊞"}),f.jsx("input",{type:"file",id:"imgInput",accept:"image/*",style:{display:"none"},onChange:g=>i(g.target.files[0])}),f.jsx("textarea",{ref:o,rows:1,placeholder:"say something...",onInput:l,onKeyDown:a,style:{flex:1,background:"none",border:"none",outline:"none",fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:14,color:"var(--text)",resize:"none",minHeight:26,maxHeight:120,lineHeight:1.55,padding:"3px 0",userSelect:"text",WebkitUserSelect:"text"}}),f.jsx("button",{onClick:u,style:{width:38,height:38,borderRadius:12,border:"none",background:"var(--accent)",color:"var(--bg)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:"↑"})]})]})}const WR=["👍","❤️","😂","😮","😢","🔥","👀","🙏"];function HR({position:t,onPick:e,onClose:n}){const r=x.useRef(null);return x.useEffect(()=>{function i(s){var o;(o=r.current)!=null&&o.contains(s.target)||n()}return setTimeout(()=>document.addEventListener("click",i),0),()=>document.removeEventListener("click",i)},[n]),f.jsx("div",{ref:r,style:{position:"fixed",bottom:(t==null?void 0:t.bottom)||100,left:Math.max(8,(t==null?void 0:t.left)||40),background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:14,padding:"10px 12px",display:"flex",gap:8,zIndex:300,boxShadow:"0 8px 32px rgba(0,0,0,0.7)",animation:"bPop 0.15s ease"},children:WR.map(i=>f.jsx("span",{onClick:()=>e(i),style:{fontSize:22,cursor:"pointer",lineHeight:1},children:i},i))})}const $R=[{key:"default",color:"#f0f0f0"},{key:"blue",color:"#4a9eff"},{key:"green",color:"#4ade80"},{key:"amber",color:"#fbbf24"},{key:"pink",color:"#f472b6"}];function xo({checked:t,onChange:e}){return f.jsxs("label",{style:{position:"relative",width:40,height:22,flexShrink:0,cursor:"pointer"},children:[f.jsx("input",{type:"checkbox",checked:t,onChange:n=>e(n.target.checked),style:{opacity:0,width:0,height:0,position:"absolute"}}),f.jsx("div",{style:{position:"absolute",inset:0,borderRadius:100,background:t?"var(--accent)":"var(--s4)",transition:"background 0.2s"},children:f.jsx("div",{style:{position:"absolute",width:16,height:16,background:"#fff",borderRadius:"50%",top:3,left:3,transition:"transform 0.2s",transform:t?"translateX(18px)":"translateX(0)"}})})]})}function Ui({label:t,sub:e,right:n,last:r}){return f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:r?"none":"1px solid var(--b1)"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:13,fontWeight:500},children:t}),e&&f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)",letterSpacing:.5,marginTop:2},children:e})]}),n]})}function VR({prefs:t,setPref:e,onClose:n}){async function r(s){if(!s){e("notifs",!1);return}if(!("Notification"in window)){alert("Notifications not supported in this browser.");return}let o=Notification.permission;o==="default"&&(o=await Notification.requestPermission()),o==="granted"?(e("notifs",!0),new Notification("Thread",{body:"Notifications enabled ✓",tag:"thread-test",silent:!0})):o==="denied"&&(e("notifs",!1),alert(`Notifications blocked. To enable:
Chrome → Site settings → Notifications → Allow`))}const i=()=>"Notification"in window?Notification.permission==="granted"&&t.notifs?"enabled ✓":Notification.permission==="denied"?"blocked — check site settings":"get notified when tab is hidden":"not supported";return f.jsxs("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(4px)"},children:[f.jsx("div",{onClick:n,style:{position:"absolute",inset:0}}),f.jsxs("div",{style:{width:420,maxWidth:"92vw",background:"var(--s1)",border:"1px solid var(--b1)",borderRadius:20,overflow:"hidden",boxShadow:"0 40px 80px rgba(0,0,0,0.7)",position:"relative",animation:"cardIn 0.3s ease"},children:[f.jsxs("div",{style:{padding:"22px 24px 18px",borderBottom:"1px solid var(--b1)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Settings"}),f.jsx("button",{onClick:n,style:{background:"none",border:"none",color:"var(--dim)",fontSize:20,cursor:"pointer"},children:"×"})]}),f.jsxs("div",{style:{padding:"20px 24px"},children:[f.jsx(Ui,{label:"Accent colour",sub:"bubbles & highlights",right:f.jsx("div",{style:{display:"flex",gap:8},children:$R.map(s=>f.jsx("div",{onClick:()=>e("theme",s.key),style:{width:24,height:24,borderRadius:"50%",background:s.color,cursor:"pointer",border:`2px solid ${t.theme===s.key?"var(--text)":"transparent"}`,transition:"all 0.15s"}},s.key))})}),f.jsx(Ui,{label:"Enter to send",sub:"off = shift+enter sends",right:f.jsx(xo,{checked:t.enterSend,onChange:s=>e("enterSend",s)})}),f.jsx(Ui,{label:"Message sound",sub:"soft pop on incoming message",right:f.jsx(xo,{checked:t.msgSound,onChange:s=>e("msgSound",s)})}),f.jsx(Ui,{label:"Push notifications",sub:i(),right:f.jsx(xo,{checked:t.notifs&&Notification.permission==="granted",onChange:r})}),f.jsx(Ui,{label:"Read receipts",sub:"show when you've read messages",last:!0,right:f.jsx(xo,{checked:t.readReceipts,onChange:s=>e("readReceipts",s)})})]})]})]})}function GR({onInvite:t,onSettings:e,onClear:n,onClose:r}){const i=x.useRef(null);x.useEffect(()=>{function o(l){var a;(a=i.current)!=null&&a.contains(l.target)||r()}return setTimeout(()=>document.addEventListener("click",o),0),()=>document.removeEventListener("click",o)},[r]);const s=[{icon:"🔗",label:"Invite via link",action:t},{icon:"⚙",label:"Settings",action:e},{icon:"⊘",label:"Clear messages",action:n}];return f.jsx("div",{ref:i,style:{position:"fixed",top:56,right:12,background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:14,minWidth:195,overflow:"hidden",boxShadow:"0 20px 50px rgba(0,0,0,0.7)",zIndex:200,animation:"popIn 0.18s cubic-bezier(0.34,1.56,0.64,1)"},children:s.map((o,l)=>f.jsxs("div",{onClick:()=>{o.action(),r()},style:{padding:"12px 16px",fontSize:12,fontWeight:500,color:"var(--dim)",cursor:"pointer",display:"flex",alignItems:"center",gap:12,borderBottom:l<s.length-1?"1px solid var(--b1)":"none"},onMouseEnter:a=>a.currentTarget.style.background="var(--s3)",onMouseLeave:a=>a.currentTarget.style.background="transparent",children:[f.jsx("span",{style:{fontSize:14,width:18,textAlign:"center"},children:o.icon}),o.label]},l))})}function qR({token:t,onBack:e}){const[n,r]=x.useState(!1),i=`${location.origin}${location.pathname}?i=${t}`;function s(){navigator.clipboard.writeText(i).then(()=>{r(!0),setTimeout(()=>r(!1),2500)})}return f.jsxs("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},children:[f.jsx("div",{onClick:e,style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(4px)"}}),f.jsxs("div",{style:{width:400,maxWidth:"92vw",background:"var(--s1)",border:"1px solid var(--b1)",borderRadius:20,overflow:"hidden",boxShadow:"0 40px 80px rgba(0,0,0,0.7)",position:"relative",animation:"cardIn 0.3s ease"},children:[f.jsxs("div",{style:{padding:"28px 28px 22px",borderBottom:"1px solid var(--b1)"},children:[f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:3,textTransform:"uppercase",color:"var(--dim)",marginBottom:10},children:"one-time link"}),f.jsx("div",{style:{fontSize:22,fontWeight:800,letterSpacing:-1,marginBottom:8},children:"Invite via link"}),f.jsx("div",{style:{fontSize:12,color:"var(--dim)",lineHeight:1.75},children:"Share privately. First person to open it joins — then the link burns."})]}),f.jsxs("div",{style:{padding:"20px 28px"},children:[f.jsxs("div",{style:{background:"var(--s3)",border:"1px solid var(--b1)",borderRadius:12,padding:"12px 14px",display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[f.jsx("div",{style:{flex:1,fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i}),f.jsx("button",{onClick:s,style:{border:`1px solid ${n?"var(--b1)":"var(--b2)"}`,background:"none",color:n?"var(--dimmer)":"var(--text)",fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:500,letterSpacing:1.5,textTransform:"uppercase",padding:"6px 12px",borderRadius:7,cursor:"pointer",flexShrink:0},children:n?"copied ✓":"copy"})]}),f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:1,lineHeight:1.9,textTransform:"uppercase"},children:"🔒 single use · expires on join"})]}),f.jsx("div",{style:{padding:"16px 28px",borderTop:"1px solid var(--b1)"},children:f.jsx("button",{onClick:e,style:{width:"100%",padding:13,background:"none",border:"1px solid var(--b1)",borderRadius:10,color:"var(--dim)",fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:12,fontWeight:600,cursor:"pointer"},children:"← back"})})]})]})}function KR({activeChat:t,session:e,uid:n,prefs:r,setPref:i,onSidebarOpen:s,showSidebarBtn:o}){var xt;const{chatId:l,peerName:a,peerUsername:u}=t,[c,d]=x.useState(null),[h,g]=x.useState(null),[v,y]=x.useState(null),[S,m]=x.useState(!1),[p,_]=x.useState(!1),[w,T]=x.useState(!1),[I,R]=x.useState(0),[P,H]=x.useState(""),E=PR(l),te=AR(l,n,e.myName),{peerTyping:pt,notifyTyping:st,stopTyping:no}=OR(l,n),ro=DR(r.msgSound),Er=x.useRef(null),on=x.useRef(0),N=x.useRef(Notification.permission==="granted");x.useEffect(()=>{Ds(B(W,`chats/${l}/meta/token`)).then(A=>{if(A.exists()){H(A.val());return}const Ie=Math.random().toString(36).slice(2,24);tt(B(W,`chats/${l}/meta/token`),Ie),H(Ie)})},[l]),x.useEffect(()=>{if(E.length<=on.current){on.current=E.length;return}const A=E.slice(on.current);on.current=E.length,A.forEach(Ie=>{if(!(!Ie.isNew||Ie.senderUid===n)&&(ro(),r.notifs&&N.current))try{const xe=Ie.imageUrl?"📷 Image":Ie.text||"";"serviceWorker"in navigator?navigator.serviceWorker.ready.then(Le=>Le.showNotification(a||"Thread",{body:xe,tag:"thread-msg",renotify:!0,vibrate:[200,100,200]})):new Notification(a||"Thread",{body:xe,tag:"thread-msg"})}catch{}})},[E,n,a,r.notifs,ro]),x.useEffect(()=>{const A=Er.current;A&&A.scrollHeight-A.scrollTop-A.clientHeight<120&&setTimeout(()=>{A.scrollTop=A.scrollHeight},30)},[E,pt]),x.useEffect(()=>{r.readReceipts&&E.filter(A=>A.senderUid!==n&&!A.seen).forEach(A=>yt(B(W,`chats/${l}/msgs/${A.id}`),{seen:!0}))},[E,n,r.readReceipts,l]),x.useEffect(()=>{N.current=Notification.permission==="granted"},[r.notifs]);async function M(A){no();const xe=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Le={senderUid:n,senderName:e.myName,senderUsername:e.username,text:A,time:xe,ts:Date.now(),seen:!1};c&&(Le.replyTo={fbKey:c.id,text:c.text||"",senderName:c.senderName}),d(null),await Fp(B(W,`chats/${l}/msgs`),Le),await yt(B(W,`users/${e.username}/chats/${l}`),{lastMsg:A,lastTime:xe,lastTs:Date.now()}),u&&await yt(B(W,`users/${u}/chats/${l}`),{lastMsg:A,lastTime:xe,lastTs:Date.now()})}async function L(A){if(!A||A.size>10*1024*1024)return;const Ie=mR(ER,`chats/${l}/${Date.now()}_${A.name}`),xe=fR(Ie,A);xe.on("state_changed",Le=>R(Math.round(Le.bytesTransferred/Le.totalBytes*100)),()=>R(0),async()=>{R(0);const Le=await pR(xe.snapshot.ref),Sa=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});await Fp(B(W,`chats/${l}/msgs`),{senderUid:n,senderName:e.myName,imageUrl:Le,text:"",time:Sa,ts:Date.now(),seen:!1}),await yt(B(W,`users/${e.username}/chats/${l}`),{lastMsg:"📷 Image",lastTime:Sa,lastTs:Date.now()}),u&&await yt(B(W,`users/${u}/chats/${l}`),{lastMsg:"📷 Image",lastTime:Sa,lastTs:Date.now()})})}async function re(A,Ie){const xe=`chats/${l}/msgs/${A}/reactions/${n}`,Le=await Ds(B(W,xe));await tt(B(W,xe),Le.val()===Ie?null:Ie),g(null)}async function fe(A){await yt(B(W,`chats/${l}/msgs/${A}`),{deleted:!0,text:"message deleted"})}async function Sr(){await G1(B(W,`chats/${l}/msgs`))}let It=null;const ki=E.map(A=>{const Ie=A.senderUid===It;return It=A.senderUid,{...A,same:Ie}});return f.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:"100%",background:"var(--bg)"},children:[f.jsx(jR,{peerName:a,peerUsername:u,peerOnline:te,onSidebarOpen:s,onInvite:()=>T(!0),onMenu:()=>_(!0),showSidebarBtn:o}),f.jsxs("div",{ref:Er,style:{flex:1,overflowY:"auto",padding:"24px 20px 16px",display:"flex",flexDirection:"column",gap:3,position:"relative"},children:[f.jsx("div",{style:{position:"fixed",inset:"60px 0 72px",background:"repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(255,255,255,0.008) 28px,rgba(255,255,255,0.008) 29px)",pointerEvents:"none",zIndex:0}}),E.length===0&&f.jsx("div",{style:{alignSelf:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",letterSpacing:1.5,textTransform:"uppercase",padding:"5px 16px",border:"1px solid var(--b1)",borderRadius:100,margin:"10px 0",background:"rgba(14,14,14,0.8)"},children:"🔒 encrypted · say hello"}),ki.map(A=>f.jsx("div",{id:"row_"+A.id,style:{marginTop:A.same?1:14},children:f.jsx(zR,{msg:A,isYou:A.senderUid===n,showAvatar:!A.same,showName:!A.same,onReply:d,onReact:(Ie,xe)=>{const Le=xe==null?void 0:xe.getBoundingClientRect();g({msgId:Ie,position:Le?{bottom:window.innerHeight-Le.top+8,left:Le.left-40}:{bottom:120,left:40}})},onDelete:fe,onImageClick:y})},A.id)),pt&&f.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:8,marginTop:4,zIndex:1},children:[f.jsx("div",{style:{width:30,height:30,borderRadius:9,background:"var(--s3)",border:"1px solid var(--b1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0},children:((xt=a==null?void 0:a[0])==null?void 0:xt.toUpperCase())||"?"}),f.jsx("div",{style:{background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:16,borderBottomLeftRadius:4,padding:"13px 18px",display:"flex",gap:5,alignItems:"center"},children:[0,200,400].map(A=>f.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:"var(--b2)",animation:`tdot 1.3s ease ${A}ms infinite`}},A))})]})]}),I>0&&f.jsx("div",{style:{height:2,background:"var(--b1)",flexShrink:0},children:f.jsx("div",{style:{height:"100%",background:"var(--accent)",width:I+"%",transition:"width 0.3s",borderRadius:2}})}),f.jsx(BR,{onSend:M,onTyping:st,replyTo:c,onCancelReply:()=>d(null),onImageUpload:L,enterSend:r.enterSend}),h&&f.jsx(HR,{position:h.position,onPick:A=>re(h.msgId,A),onClose:()=>g(null)}),v&&f.jsx("div",{onClick:()=>y(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:f.jsx("img",{src:v,style:{maxWidth:"92vw",maxHeight:"92vh",borderRadius:12},alt:"",onClick:A=>A.stopPropagation()})}),S&&f.jsx(VR,{prefs:r,setPref:i,onClose:()=>m(!1)}),p&&f.jsx(GR,{onInvite:()=>{T(!0),_(!1)},onSettings:()=>{m(!0),_(!1)},onClear:()=>{Sr(),_(!1)},onClose:()=>_(!1)}),w&&f.jsx(qR,{token:P,onBack:()=>T(!1)})]})}function QR(t=10){return Math.random().toString(36).slice(2,2+t)}function YR({chat:t,active:e,onClick:n,index:r}){return f.jsxs("div",{onClick:n,style:{display:"flex",alignItems:"center",gap:12,padding:"10px 16px",cursor:"pointer",background:e?"var(--s2)":"transparent",borderLeft:e?"2px solid var(--accent)":"2px solid transparent",transition:"background 0.15s, border-color 0.2s",animation:`rowIn 0.3s ease ${r*40}ms both`},onMouseEnter:i=>{e||(i.currentTarget.style.background="var(--s1)")},onMouseLeave:i=>{e||(i.currentTarget.style.background="transparent")},children:[f.jsx(fi,{username:t.peerUsername,name:t.peerName,size:44}),f.jsxs("div",{style:{flex:1,minWidth:0},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:3},children:[f.jsx("div",{style:{fontSize:14,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.peerName}),t.lastTime&&f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",flexShrink:0,marginLeft:8},children:t.lastTime})]}),f.jsx("div",{style:{fontSize:12,color:"var(--dim)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.lastMsg||"no messages yet"})]}),t.unread>0&&f.jsx("div",{className:"badge-pulse",style:{minWidth:18,height:18,borderRadius:100,background:"var(--accent)",color:"var(--bg)",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 5px",flexShrink:0},children:t.unread})]})}function XR({req:t,myUsername:e,onAccept:n,onDecline:r}){const[i,s]=x.useState(!1);return f.jsxs("div",{style:{padding:"12px 16px",borderBottom:"1px solid var(--b1)",background:"var(--s1)",animation:"fadeUp 0.3s ease both"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[f.jsx(fi,{username:t.from,name:t.name,size:34}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:13,fontWeight:600},children:t.name}),f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)"},children:["@",t.from]})]})]}),t.message&&f.jsxs("div",{style:{fontSize:12,color:"var(--dim)",marginBottom:10,paddingLeft:2},children:['"',t.message,'"']}),f.jsxs("div",{style:{display:"flex",gap:8},children:[f.jsx("button",{onClick:async()=>{s(!0),await n(t)},style:{flex:1,padding:"7px",background:"var(--accent)",color:"var(--bg)",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",transition:"transform 0.15s",opacity:i?.6:1},onMouseEnter:o=>o.currentTarget.style.transform="scale(1.02)",onMouseLeave:o=>o.currentTarget.style.transform="scale(1)",children:i?"...":"Accept"}),f.jsx("button",{onClick:()=>r(t),style:{flex:1,padding:"7px",background:"transparent",color:"var(--dim)",border:"1px solid var(--b1)",borderRadius:8,fontSize:11,cursor:"pointer",transition:"border-color 0.15s, color 0.15s"},onMouseEnter:o=>{o.currentTarget.style.borderColor="var(--b2)",o.currentTarget.style.color="var(--text)"},onMouseLeave:o=>{o.currentTarget.style.borderColor="var(--b1)",o.currentTarget.style.color="var(--dim)"},children:"Decline"})]})]})}function JR({session:t,chats:e,requests:n,activeChatId:r,onSelectChat:i,onSignOut:s,isMobile:o,onClose:l}){const[a,u]=x.useState(""),[c,d]=x.useState(null),[h,g]=x.useState(""),[v,y]=x.useState(!1),[S,m]=x.useState("chats"),[p,_]=x.useState(!1),[w,T]=x.useState(null);async function I(){const E=a.trim().toLowerCase();if(!E)return;if(E===t.username){d({error:"that's you"});return}d("loading");const te=await Ds(B(W,"users/"+E));if(!te.exists()){d("notfound");return}const pt=e.find(st=>st.peerUsername===E);d({username:E,name:te.val().name,alreadyChat:pt})}async function R(){if(c!=null&&c.username){y(!0);try{await tt(B(W,`requests/${c.username}/${t.username}`),{name:t.myName,message:h.trim(),status:"pending",ts:Date.now()}),d({...c,sent:!0}),g("")}catch{}y(!1)}}async function P(E){const te="c_"+QR(14),st=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});await tt(B(W,`chats/${te}/meta`),{members:{[t.username]:!0,[E.from]:!0},createdAt:Date.now()}),await yt(B(W,`users/${t.username}/chats/${te}`),{peerUsername:E.from,peerName:E.name,lastMsg:"",lastTime:st,lastTs:Date.now()}),await yt(B(W,`users/${E.from}/chats/${te}`),{peerUsername:t.username,peerName:t.myName,lastMsg:"",lastTime:st,lastTs:Date.now()}),await yt(B(W,`requests/${t.username}/${E.from}`),{status:"accepted"}),await tt(B(W,`requests/${E.from}/_accepted/${t.username}`),{chatId:te,peerName:t.myName,ts:Date.now()}),i({chatId:te,peerUsername:E.from,peerName:E.name}),m("chats")}async function H(E){await yt(B(W,`requests/${t.username}/${E.from}`),{status:"declined"})}return f.jsxs("div",{style:{width:o?"100%":300,height:"100%",background:"var(--s1)",borderRight:"1px solid var(--b1)",display:"flex",flexDirection:"column",flexShrink:0,...o?{position:"fixed",inset:0,zIndex:50,animation:"slideIn 0.25s cubic-bezier(0.22,1,0.36,1)"}:{animation:"fadeIn 0.3s ease"}},children:[f.jsxs("div",{style:{padding:"16px 16px 12px",borderBottom:"1px solid var(--b1)",display:"flex",alignItems:"center",gap:10},children:[f.jsxs("div",{style:{fontSize:22,fontWeight:800,letterSpacing:-2,flex:1,color:"var(--text)",animation:"logoIn 0.6s ease"},children:["thread",f.jsx("span",{style:{display:"inline-block",width:6,height:6,borderRadius:"50%",background:"var(--accent)",verticalAlign:"super",marginLeft:2,animation:"pulse 2s ease infinite"}})]}),f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",letterSpacing:1,animation:"fadeIn 0.5s ease 0.2s both"},children:["@",t.username]}),o&&f.jsx("button",{onClick:l,style:{background:"none",border:"none",color:"var(--dim)",fontSize:20,cursor:"pointer",padding:4,transition:"color 0.15s, transform 0.2s"},onMouseEnter:E=>{E.currentTarget.style.color="var(--text)",E.currentTarget.style.transform="rotate(90deg)"},onMouseLeave:E=>{E.currentTarget.style.color="var(--dim)",E.currentTarget.style.transform="rotate(0)"},children:"×"})]}),f.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--b1)"},children:[f.jsxs("div",{style:{display:"flex",gap:8,background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:10,padding:"8px 12px",alignItems:"center",transition:"border-color 0.2s, box-shadow 0.2s"},children:[f.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"var(--dim)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0},children:[f.jsx("circle",{cx:"11",cy:"11",r:"8"}),f.jsx("path",{d:"m21 21-4.35-4.35"})]}),f.jsx("input",{value:a,onChange:E=>{u(E.target.value),d(null)},onKeyDown:E=>E.key==="Enter"&&I(),placeholder:"Search by username...",style:{flex:1,background:"none",border:"none",outline:"none",fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:13,color:"var(--text)"}}),a&&f.jsx("button",{onClick:I,style:{background:"none",border:"none",color:"var(--accent)",fontSize:11,cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",letterSpacing:.5,flexShrink:0,transition:"transform 0.15s"},onMouseEnter:E=>E.currentTarget.style.transform="scale(1.1)",onMouseLeave:E=>E.currentTarget.style.transform="scale(1)",children:"go"})]}),c==="loading"&&f.jsx("div",{className:"shimmer",style:{height:60,borderRadius:10,marginTop:10}}),c&&c!=="loading"&&c!=="notfound"&&!c.error&&f.jsxs("div",{style:{marginTop:10,padding:"12px",background:"var(--s2)",borderRadius:10,border:"1px solid var(--b1)",animation:"fadeUp 0.25s ease both"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[f.jsx(fi,{username:c.username,name:c.name,size:32}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:13,fontWeight:600},children:c.name}),f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)"},children:["@",c.username]})]})]}),c.alreadyChat?f.jsx("button",{onClick:()=>{i(c.alreadyChat),u(""),d(null)},style:{width:"100%",padding:"7px",background:"var(--accent)",color:"var(--bg)",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",transition:"transform 0.15s"},onMouseEnter:E=>E.currentTarget.style.transform="scale(1.02)",onMouseLeave:E=>E.currentTarget.style.transform="scale(1)",children:"Open chat"}):c.sent?f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)",textAlign:"center",letterSpacing:1,animation:"fadeIn 0.3s ease"},children:"request sent ✓"}):f.jsxs(f.Fragment,{children:[f.jsx("input",{value:h,onChange:E=>g(E.target.value),placeholder:"Add a message (optional)",style:{width:"100%",background:"var(--s3)",border:"1px solid var(--b1)",borderRadius:8,padding:"7px 10px",fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:12,color:"var(--text)",outline:"none",marginBottom:8,transition:"border-color 0.2s"},onFocus:E=>E.target.style.borderColor="var(--b2)",onBlur:E=>E.target.style.borderColor="var(--b1)"}),f.jsx("button",{onClick:R,disabled:v,style:{width:"100%",padding:"7px",background:"var(--accent)",color:"var(--bg)",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",opacity:v?.5:1,transition:"transform 0.15s"},onMouseEnter:E=>{v||(E.currentTarget.style.transform="scale(1.02)")},onMouseLeave:E=>E.currentTarget.style.transform="scale(1)",children:v?"Sending...":"Send chat request"})]})]}),c==="notfound"&&f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)",marginTop:8,paddingLeft:4,letterSpacing:.5,animation:"fadeIn 0.2s ease"},children:"↳ user not found"}),(c==null?void 0:c.error)&&f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"#886655",marginTop:8,paddingLeft:4,animation:"fadeIn 0.2s ease"},children:["↳ ",c.error]})]}),f.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--b1)"},children:["chats","requests"].map(E=>f.jsxs("div",{onClick:()=>m(E),style:{flex:1,padding:"10px",textAlign:"center",cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:500,letterSpacing:2,textTransform:"uppercase",color:S===E?"var(--text)":"var(--dim)",borderBottom:S===E?"2px solid var(--accent)":"2px solid transparent",transition:"color 0.2s, border-color 0.2s",position:"relative"},children:[E,E==="requests"&&n.length>0&&f.jsx("span",{className:"badge-pulse",style:{marginLeft:6,background:"#e55",color:"#fff",borderRadius:100,fontSize:8,padding:"1px 5px",fontWeight:700,display:"inline-block"},children:n.length})]},E))}),f.jsxs("div",{style:{flex:1,overflowY:"auto"},children:[S==="chats"&&(e.length===0?f.jsxs("div",{style:{padding:"40px 20px",textAlign:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dimmer)",letterSpacing:1,lineHeight:2,animation:"fadeIn 0.4s ease 0.2s both"},children:["NO CHATS YET",f.jsx("br",{}),"SEARCH A USERNAME",f.jsx("br",{}),"TO START"]}):e.map((E,te)=>f.jsx(YR,{chat:E,active:E.chatId===r,index:te,onClick:()=>{i(E),o&&l()}},E.chatId))),S==="requests"&&(n.length===0?f.jsx("div",{style:{padding:"40px 20px",textAlign:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dimmer)",letterSpacing:1,animation:"fadeIn 0.4s ease both"},children:"NO PENDING REQUESTS"}):n.map(E=>f.jsx(XR,{req:E,myUsername:t.username,onAccept:P,onDecline:H},E.from)))]}),f.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--b1)",display:"flex",alignItems:"center",gap:10},children:[f.jsx(fi,{username:t.username,name:t.myName,size:34,onClick:()=>_(!0)}),f.jsxs("div",{style:{flex:1,minWidth:0},children:[f.jsx("div",{style:{fontSize:13,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.myName}),f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",letterSpacing:.5},children:["@",t.username]})]}),f.jsx("button",{onClick:s,title:"Sign out",style:{background:"none",border:"none",color:"var(--dim)",cursor:"pointer",fontSize:16,padding:4,borderRadius:8,transition:"color 0.15s, transform 0.2s"},onMouseEnter:E=>{E.currentTarget.style.color="var(--text)",E.currentTarget.style.transform="translateX(2px)"},onMouseLeave:E=>{E.currentTarget.style.color="var(--dim)",E.currentTarget.style.transform="translateX(0)"},children:"↩"})]}),p&&f.jsx(PfpUploader,{username:t.username,currentPfp:w,onClose:()=>_(!1),onUpdated:E=>T(E)})]})}function ZR({onOpenSidebar:t,isMobile:e}){return f.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,background:"var(--bg)"},children:[e&&f.jsx("button",{onClick:t,style:{background:"var(--accent)",color:"var(--bg)",border:"none",borderRadius:12,padding:"12px 24px",fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:8},children:"Open chats"}),f.jsx("div",{style:{fontSize:40,fontWeight:800,letterSpacing:-3,color:"var(--dimmer)"},children:"thread"}),f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:3,textTransform:"uppercase",textAlign:"center",lineHeight:2},children:["select a chat",f.jsx("br",{}),"or search a username"]})]})}function eN(){const{uid:t,ready:e}=SR(),{prefs:n,setPref:r}=CR(),[i,s]=x.useState(()=>{try{return JSON.parse(localStorage.getItem("_thread_session")||"null")}catch{return null}}),[o,l]=x.useState(null),[a,u]=x.useState(!1),[c,d]=x.useState(window.innerWidth<768),h=kR(i==null?void 0:i.username),g=TR(i==null?void 0:i.username);x.useEffect(()=>{function m(){d(window.innerWidth<768)}return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),x.useEffect(()=>{!c&&!o&&h.length>0&&l(h[0])},[h,c,o]);function v(m){s(m),localStorage.setItem("_thread_session",JSON.stringify(m))}function y(){localStorage.removeItem("_thread_session"),s(null),l(null)}function S(m){l(m),u(!1)}return e?i?f.jsxs("div",{style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},children:[(!c||a)&&f.jsxs(f.Fragment,{children:[c&&a&&f.jsx("div",{onClick:()=>u(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:40,backdropFilter:"blur(2px)"}}),f.jsx(JR,{session:i,chats:h,requests:g,activeChatId:o==null?void 0:o.chatId,onSelectChat:S,onSignOut:y,isMobile:c,onClose:()=>u(!1)})]}),f.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0,height:"100%"},children:o?f.jsx(KR,{activeChat:o,session:i,uid:t,prefs:n,setPref:r,onSidebarOpen:()=>u(!0),showSidebarBtn:c},o.chatId):f.jsx(ZR,{onOpenSidebar:()=>u(!0),isMobile:c})})]}):f.jsx(bR,{uid:t,onSignIn:v}):f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",flexDirection:"column",gap:16},children:[f.jsx("div",{style:{fontSize:40,fontWeight:800,letterSpacing:-3,color:"var(--text)"},children:"thread"}),f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:3,textTransform:"uppercase"},children:"connecting..."})]})}class tN extends rm.Component{constructor(e){super(e),this.state={error:null}}componentDidCatch(e){this.setState({error:e.message})}render(){return this.state.error?f.jsxs("div",{style:{padding:20,fontFamily:"monospace",fontSize:12,color:"#f00",background:"#000",height:"100vh",overflow:"auto",whiteSpace:"pre-wrap"},children:["ERROR:",`
`,this.state.error]}):this.props.children}}function Fy(){document.documentElement.style.setProperty("--vh",window.innerHeight*.01+"px")}Fy();window.addEventListener("resize",Fy);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/Thread-Chat/sw.js").catch(()=>{})});fu.createRoot(document.getElementById("root")).render(f.jsx(rm.StrictMode,{children:f.jsx(tN,{children:f.jsx(eN,{})})}));
