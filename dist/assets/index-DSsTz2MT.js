(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function My(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gp={exports:{}},jl={},qp={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ds=Symbol.for("react.element"),Fy=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),jy=Symbol.for("react.strict_mode"),zy=Symbol.for("react.profiler"),By=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),Hy=Symbol.for("react.forward_ref"),$y=Symbol.for("react.suspense"),Vy=Symbol.for("react.memo"),Gy=Symbol.for("react.lazy"),wh=Symbol.iterator;function qy(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qp=Object.assign,Yp={};function fi(t,e,n){this.props=t,this.context=e,this.refs=Yp,this.updater=n||Kp}fi.prototype.isReactComponent={};fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xp(){}Xp.prototype=fi.prototype;function Ic(t,e,n){this.props=t,this.context=e,this.refs=Yp,this.updater=n||Kp}var xc=Ic.prototype=new Xp;xc.constructor=Ic;Qp(xc,fi.prototype);xc.isPureReactComponent=!0;var Eh=Array.isArray,Jp=Object.prototype.hasOwnProperty,Rc={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function em(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jp.call(e,r)&&!Zp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ds,type:t,key:s,ref:o,props:i,_owner:Rc.current}}function Ky(t,e){return{$$typeof:Ds,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ds}function Qy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sh=/\/+/g;function Sa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qy(""+t.key):e.toString(36)}function Io(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ds:case Fy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sa(o,0):r,Eh(i)?(n="",t!=null&&(n=t.replace(Sh,"$&/")+"/"),Io(i,e,n,"",function(u){return u})):i!=null&&(Nc(i)&&(i=Ky(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Eh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Sa(s,l);o+=Io(s,e,n,a,i)}else if(a=qy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Sa(s,l++),o+=Io(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function no(t,e,n){if(t==null)return t;var r=[],i=0;return Io(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Yy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},xo={transition:null},Xy={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:xo,ReactCurrentOwner:Rc};function tm(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!Nc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=fi;B.Fragment=Uy;B.Profiler=zy;B.PureComponent=Ic;B.StrictMode=jy;B.Suspense=$y;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy;B.act=tm;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Jp.call(e,a)&&!Zp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ds,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:Wy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:By,_context:t},t.Consumer=t};B.createElement=em;B.createFactory=function(t){var e=em.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:Hy,render:t}};B.isValidElement=Nc;B.lazy=function(t){return{$$typeof:Gy,_payload:{_status:-1,_result:t},_init:Yy}};B.memo=function(t,e){return{$$typeof:Vy,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=xo.transition;xo.transition={};try{t()}finally{xo.transition=e}};B.unstable_act=tm;B.useCallback=function(t,e){return We.current.useCallback(t,e)};B.useContext=function(t){return We.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return We.current.useDeferredValue(t)};B.useEffect=function(t,e){return We.current.useEffect(t,e)};B.useId=function(){return We.current.useId()};B.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return We.current.useMemo(t,e)};B.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};B.useRef=function(t){return We.current.useRef(t)};B.useState=function(t){return We.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return We.current.useTransition()};B.version="18.3.1";qp.exports=B;var R=qp.exports;const Jy=My(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=R,e0=Symbol.for("react.element"),t0=Symbol.for("react.fragment"),n0=Object.prototype.hasOwnProperty,r0=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)n0.call(e,r)&&!i0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:e0,type:t,key:s,ref:o,props:i,_owner:r0.current}}jl.Fragment=t0;jl.jsx=nm;jl.jsxs=nm;Gp.exports=jl;var p=Gp.exports,hu={},rm={exports:{}},rt={},im={exports:{}},sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,M){var F=N.length;N.push(M);e:for(;0<F;){var ne=F-1>>>1,he=N[ne];if(0<i(he,M))N[ne]=M,N[F]=he,F=ne;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],F=N.pop();if(F!==M){N[0]=F;e:for(var ne=0,he=N.length,Er=he>>>1;ne<Er;){var kt=2*(ne+1)-1,Ci=N[kt],Tt=kt+1,P=N[Tt];if(0>i(Ci,F))Tt<he&&0>i(P,Ci)?(N[ne]=P,N[Tt]=F,ne=Tt):(N[ne]=Ci,N[kt]=F,ne=kt);else if(Tt<he&&0>i(P,F))N[ne]=P,N[Tt]=F,ne=Tt;else break e}}return M}function i(N,M){var F=N.sortIndex-M.sortIndex;return F!==0?F:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,m=!1,v=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function E(N){if(w=!1,_(N),!v)if(n(a)!==null)v=!0,wr(k);else{var M=n(u);M!==null&&sn(E,M.startTime-N)}}function k(N,M){v=!1,w&&(w=!1,g(y),y=-1),m=!0;var F=h;try{for(_(M),d=n(a);d!==null&&(!(d.expirationTime>M)||N&&!ve());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var he=ne(d.expirationTime<=M);M=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(a)&&r(a),_(M)}else r(a);d=n(a)}if(d!==null)var Er=!0;else{var kt=n(u);kt!==null&&sn(E,kt.startTime-M),Er=!1}return Er}finally{d=null,h=F,m=!1}}var I=!1,x=null,y=-1,L=5,A=-1;function ve(){return!(t.unstable_now()-A<L)}function rn(){if(x!==null){var N=t.unstable_now();A=N;var M=!0;try{M=x(!0,N)}finally{M?Hn():(I=!1,x=null)}}else I=!1}var Hn;if(typeof f=="function")Hn=function(){f(rn)};else if(typeof MessageChannel<"u"){var eo=new MessageChannel,to=eo.port2;eo.port1.onmessage=rn,Hn=function(){to.postMessage(null)}}else Hn=function(){T(rn,0)};function wr(N){x=N,I||(I=!0,Hn())}function sn(N,M){y=T(function(){N(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,wr(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return N()}finally{h=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=h;h=N;try{return M()}finally{h=F}},t.unstable_scheduleCallback=function(N,M,F){var ne=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ne+F:ne):F=ne,N){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=F+he,N={id:c++,callback:M,priorityLevel:N,startTime:F,expirationTime:he,sortIndex:-1},F>ne?(N.sortIndex=F,e(u,N),n(a)===null&&N===n(u)&&(w?(g(y),y=-1):w=!0,sn(E,F-ne))):(N.sortIndex=he,e(a,N),v||m||(v=!0,wr(k))),N},t.unstable_shouldYield=ve,t.unstable_wrapCallback=function(N){var M=h;return function(){var F=h;h=M;try{return N.apply(this,arguments)}finally{h=F}}}})(sm);im.exports=sm;var s0=im.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0=R,nt=s0;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om=new Set,ss={};function mr(t,e){Yr(t,e),Yr(t+"Capture",e)}function Yr(t,e){for(ss[t]=e,t=0;t<e.length;t++)om.add(e[t])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},kh={};function a0(t){return fu.call(kh,t)?!0:fu.call(Ch,t)?!1:l0.test(t)?kh[t]=!0:(Ch[t]=!0,!1)}function u0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function c0(t,e,n,r){if(e===null||typeof e>"u"||u0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function He(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new He(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new He(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new He(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new He(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new He(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new He(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new He(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new He(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new He(t,5,!1,t.toLowerCase(),null,!1,!1)});var bc=/[\-:]([a-z])/g;function Pc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bc,Pc);be[e]=new He(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bc,Pc);be[e]=new He(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bc,Pc);be[e]=new He(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new He(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new He(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ac(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(c0(e,n,i,r)&&(n=null),r||i===null?a0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tn=o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),Oc=Symbol.for("react.strict_mode"),pu=Symbol.for("react.profiler"),lm=Symbol.for("react.provider"),am=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),gu=Symbol.for("react.suspense_list"),Lc=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),um=Symbol.for("react.offscreen"),Th=Symbol.iterator;function ki(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Ca;function Ui(t){if(Ca===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ca=e&&e[1]||""}return`
`+Ca+t}var ka=!1;function Ta(t,e){if(!t||ka)return"";ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ka=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ui(t):""}function d0(t){switch(t.tag){case 5:return Ui(t.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 2:case 15:return t=Ta(t.type,!1),t;case 11:return t=Ta(t.type.render,!1),t;case 1:return t=Ta(t.type,!0),t;default:return""}}function _u(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xr:return"Fragment";case Ir:return"Portal";case pu:return"Profiler";case Oc:return"StrictMode";case mu:return"Suspense";case gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case am:return(t.displayName||"Context")+".Consumer";case lm:return(t._context.displayName||"Context")+".Provider";case Dc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lc:return e=t.displayName||null,e!==null?e:_u(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return _u(t(e))}catch{}}return null}function h0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _u(e);case 8:return e===Oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f0(t){var e=cm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=f0(t))}function dm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vu(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ih(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=An(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hm(t,e){e=e.checked,e!=null&&Ac(t,"checked",e,!1)}function yu(t,e){hm(t,e);var n=An(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&wu(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wu(t,e,n){(e!=="number"||Ho(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ji=Array.isArray;function zr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+An(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(ji(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:An(n)}}function fm(t,e){var n=An(e.value),r=An(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,mm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p0=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){p0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function _m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var m0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(t,e){if(e){if(m0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=null;function Mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Iu=null,Br=null,Wr=null;function bh(t){if(t=Fs(t)){if(typeof Iu!="function")throw Error(S(280));var e=t.stateNode;e&&(e=$l(e),Iu(t.stateNode,t.type,e))}}function vm(t){Br?Wr?Wr.push(t):Wr=[t]:Br=t}function ym(){if(Br){var t=Br,e=Wr;if(Wr=Br=null,bh(t),e)for(t=0;t<e.length;t++)bh(e[t])}}function wm(t,e){return t(e)}function Em(){}var Ia=!1;function Sm(t,e,n){if(Ia)return t(e,n);Ia=!0;try{return wm(t,e,n)}finally{Ia=!1,(Br!==null||Wr!==null)&&(Em(),ym())}}function ls(t,e){var n=t.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var xu=!1;if(Kt)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{xu=!1}function g0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Hi=!1,$o=null,Vo=!1,Ru=null,_0={onError:function(t){Hi=!0,$o=t}};function v0(t,e,n,r,i,s,o,l,a){Hi=!1,$o=null,g0.apply(_0,arguments)}function y0(t,e,n,r,i,s,o,l,a){if(v0.apply(this,arguments),Hi){if(Hi){var u=$o;Hi=!1,$o=null}else throw Error(S(198));Vo||(Vo=!0,Ru=u)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ph(t){if(gr(t)!==t)throw Error(S(188))}function w0(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ph(i),t;if(s===r)return Ph(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function km(t){return t=w0(t),t!==null?Tm(t):null}function Tm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tm(t);if(e!==null)return e;t=t.sibling}return null}var Im=nt.unstable_scheduleCallback,Ah=nt.unstable_cancelCallback,E0=nt.unstable_shouldYield,S0=nt.unstable_requestPaint,de=nt.unstable_now,C0=nt.unstable_getCurrentPriorityLevel,Fc=nt.unstable_ImmediatePriority,xm=nt.unstable_UserBlockingPriority,Go=nt.unstable_NormalPriority,k0=nt.unstable_LowPriority,Rm=nt.unstable_IdlePriority,zl=null,Pt=null;function T0(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:R0,I0=Math.log,x0=Math.LN2;function R0(t){return t>>>=0,t===0?32:31-(I0(t)/x0|0)|0}var oo=64,lo=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=zi(l):(s&=o,s!==0&&(r=zi(s)))}else o=n&~i,o!==0?r=zi(o):s!==0&&(r=zi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),i=1<<n,r|=t[n],e&=~i;return r}function N0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=N0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nm(){var t=oo;return oo<<=1,!(oo&4194240)&&(oo=64),t}function xa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ls(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function P0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Uc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function bm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pm,jc,Am,Om,Dm,bu=!1,ao=[],wn=null,En=null,Sn=null,as=new Map,us=new Map,cn=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oh(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":as.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(e.pointerId)}}function Ii(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fs(e),e!==null&&jc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function O0(t,e,n,r,i){switch(e){case"focusin":return wn=Ii(wn,t,e,n,r,i),!0;case"dragenter":return En=Ii(En,t,e,n,r,i),!0;case"mouseover":return Sn=Ii(Sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return as.set(s,Ii(as.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,us.set(s,Ii(us.get(s)||null,t,e,n,r,i)),!0}return!1}function Lm(t){var e=Kn(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Cm(n),e!==null){t.blockedOn=e,Dm(t.priority,function(){Am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tu=r,n.target.dispatchEvent(r),Tu=null}else return e=Fs(n),e!==null&&jc(e),t.blockedOn=n,!1;e.shift()}return!0}function Dh(t,e,n){Ro(t)&&n.delete(e)}function D0(){bu=!1,wn!==null&&Ro(wn)&&(wn=null),En!==null&&Ro(En)&&(En=null),Sn!==null&&Ro(Sn)&&(Sn=null),as.forEach(Dh),us.forEach(Dh)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,bu||(bu=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,D0)))}function cs(t){function e(i){return xi(i,t)}if(0<ao.length){xi(ao[0],t);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wn!==null&&xi(wn,t),En!==null&&xi(En,t),Sn!==null&&xi(Sn,t),as.forEach(e),us.forEach(e),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)Lm(n),n.blockedOn===null&&cn.shift()}var Hr=tn.ReactCurrentBatchConfig,Ko=!0;function L0(t,e,n,r){var i=G,s=Hr.transition;Hr.transition=null;try{G=1,zc(t,e,n,r)}finally{G=i,Hr.transition=s}}function M0(t,e,n,r){var i=G,s=Hr.transition;Hr.transition=null;try{G=4,zc(t,e,n,r)}finally{G=i,Hr.transition=s}}function zc(t,e,n,r){if(Ko){var i=Pu(t,e,n,r);if(i===null)Fa(t,e,r,Qo,n),Oh(t,r);else if(O0(i,t,e,n,r))r.stopPropagation();else if(Oh(t,r),e&4&&-1<A0.indexOf(t)){for(;i!==null;){var s=Fs(i);if(s!==null&&Pm(s),s=Pu(t,e,n,r),s===null&&Fa(t,e,r,Qo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fa(t,e,r,null,n)}}var Qo=null;function Pu(t,e,n,r){if(Qo=null,t=Mc(r),t=Kn(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qo=t,null}function Mm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case Fc:return 1;case xm:return 4;case Go:case k0:return 16;case Rm:return 536870912;default:return 16}default:return 16}}var _n=null,Bc=null,No=null;function Fm(){if(No)return No;var t,e=Bc,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return No=i.slice(t,1<r?1-r:void 0)}function bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Lh(){return!1}function it(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uo:Lh,this.isPropagationStopped=Lh,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=it(pi),Ms=le({},pi,{view:0,detail:0}),F0=it(Ms),Ra,Na,Ri,Bl=le({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ri&&(Ri&&t.type==="mousemove"?(Ra=t.screenX-Ri.screenX,Na=t.screenY-Ri.screenY):Na=Ra=0,Ri=t),Ra)},movementY:function(t){return"movementY"in t?t.movementY:Na}}),Mh=it(Bl),U0=le({},Bl,{dataTransfer:0}),j0=it(U0),z0=le({},Ms,{relatedTarget:0}),ba=it(z0),B0=le({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=it(B0),H0=le({},pi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$0=it(H0),V0=le({},pi,{data:0}),Fh=it(V0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K0[t])?!!e[t]:!1}function Hc(){return Q0}var Y0=le({},Ms,{key:function(t){if(t.key){var e=G0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?q0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X0=it(Y0),J0=le({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=it(J0),Z0=le({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),ew=it(Z0),tw=le({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),nw=it(tw),rw=le({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iw=it(rw),sw=[9,13,27,32],$c=Kt&&"CompositionEvent"in window,$i=null;Kt&&"documentMode"in document&&($i=document.documentMode);var ow=Kt&&"TextEvent"in window&&!$i,Um=Kt&&(!$c||$i&&8<$i&&11>=$i),jh=" ",zh=!1;function jm(t,e){switch(t){case"keyup":return sw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function lw(t,e){switch(t){case"compositionend":return zm(e);case"keypress":return e.which!==32?null:(zh=!0,jh);case"textInput":return t=e.data,t===jh&&zh?null:t;default:return null}}function aw(t,e){if(Rr)return t==="compositionend"||!$c&&jm(t,e)?(t=Fm(),No=Bc=_n=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Um&&e.locale!=="ko"?null:e.data;default:return null}}var uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uw[t.type]:e==="textarea"}function Bm(t,e,n,r){vm(r),e=Yo(e,"onChange"),0<e.length&&(n=new Wc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vi=null,ds=null;function cw(t){Jm(t,0)}function Wl(t){var e=Pr(t);if(dm(e))return t}function dw(t,e){if(t==="change")return e}var Wm=!1;if(Kt){var Pa;if(Kt){var Aa="oninput"in document;if(!Aa){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Aa=typeof Wh.oninput=="function"}Pa=Aa}else Pa=!1;Wm=Pa&&(!document.documentMode||9<document.documentMode)}function Hh(){Vi&&(Vi.detachEvent("onpropertychange",Hm),ds=Vi=null)}function Hm(t){if(t.propertyName==="value"&&Wl(ds)){var e=[];Bm(e,ds,t,Mc(t)),Sm(cw,e)}}function hw(t,e,n){t==="focusin"?(Hh(),Vi=e,ds=n,Vi.attachEvent("onpropertychange",Hm)):t==="focusout"&&Hh()}function fw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(ds)}function pw(t,e){if(t==="click")return Wl(e)}function mw(t,e){if(t==="input"||t==="change")return Wl(e)}function gw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:gw;function hs(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fu.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,e){var n=$h(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$h(n)}}function $m(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$m(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vm(){for(var t=window,e=Ho();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ho(t.document)}return e}function Vc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _w(t){var e=Vm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$m(n.ownerDocument.documentElement,n)){if(r!==null&&Vc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vh(n,s);var o=Vh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vw=Kt&&"documentMode"in document&&11>=document.documentMode,Nr=null,Au=null,Gi=null,Ou=!1;function Gh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||Nr==null||Nr!==Ho(r)||(r=Nr,"selectionStart"in r&&Vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&hs(Gi,r)||(Gi=r,r=Yo(Au,"onSelect"),0<r.length&&(e=new Wc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Nr)))}function co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var br={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Oa={},Gm={};Kt&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Hl(t){if(Oa[t])return Oa[t];if(!br[t])return t;var e=br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gm)return Oa[t]=e[n];return t}var qm=Hl("animationend"),Km=Hl("animationiteration"),Qm=Hl("animationstart"),Ym=Hl("transitionend"),Xm=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(t,e){Xm.set(t,e),mr(e,[t])}for(var Da=0;Da<qh.length;Da++){var La=qh[Da],yw=La.toLowerCase(),ww=La[0].toUpperCase()+La.slice(1);zn(yw,"on"+ww)}zn(qm,"onAnimationEnd");zn(Km,"onAnimationIteration");zn(Qm,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Ym,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function Kh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,y0(r,e,void 0,t),t.currentTarget=null}function Jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Kh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Kh(i,l,u),s=a}}}if(Vo)throw t=Ru,Vo=!1,Ru=null,t}function J(t,e){var n=e[Uu];n===void 0&&(n=e[Uu]=new Set);var r=t+"__bubble";n.has(r)||(Zm(e,t,2,!1),n.add(r))}function Ma(t,e,n){var r=0;e&&(r|=4),Zm(n,t,r,e)}var ho="_reactListening"+Math.random().toString(36).slice(2);function fs(t){if(!t[ho]){t[ho]=!0,om.forEach(function(n){n!=="selectionchange"&&(Ew.has(n)||Ma(n,!1,t),Ma(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ho]||(e[ho]=!0,Ma("selectionchange",!1,e))}}function Zm(t,e,n,r){switch(Mm(e)){case 1:var i=L0;break;case 4:i=M0;break;default:i=zc}n=i.bind(null,e,n,t),i=void 0,!xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Sm(function(){var u=s,c=Mc(n),d=[];e:{var h=Xm.get(t);if(h!==void 0){var m=Wc,v=t;switch(t){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":m=X0;break;case"focusin":v="focus",m=ba;break;case"focusout":v="blur",m=ba;break;case"beforeblur":case"afterblur":m=ba;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ew;break;case qm:case Km:case Qm:m=W0;break;case Ym:m=nw;break;case"scroll":m=F0;break;case"wheel":m=iw;break;case"copy":case"cut":case"paste":m=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Uh}var w=(e&4)!==0,T=!w&&t==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,_;f!==null;){_=f;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,g!==null&&(E=ls(f,g),E!=null&&w.push(ps(f,E,_)))),T)break;f=f.return}0<w.length&&(h=new m(h,v,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Tu&&(v=n.relatedTarget||n.fromElement)&&(Kn(v)||v[Qt]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Kn(v):null,v!==null&&(T=gr(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=Mh,E="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Uh,E="onPointerLeave",g="onPointerEnter",f="pointer"),T=m==null?h:Pr(m),_=v==null?h:Pr(v),h=new w(E,f+"leave",m,n,c),h.target=T,h.relatedTarget=_,E=null,Kn(c)===u&&(w=new w(g,f+"enter",v,n,c),w.target=_,w.relatedTarget=T,E=w),T=E,m&&v)t:{for(w=m,g=v,f=0,_=w;_;_=Sr(_))f++;for(_=0,E=g;E;E=Sr(E))_++;for(;0<f-_;)w=Sr(w),f--;for(;0<_-f;)g=Sr(g),_--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=Sr(w),g=Sr(g)}w=null}else w=null;m!==null&&Qh(d,h,m,w,!1),v!==null&&T!==null&&Qh(d,T,v,w,!0)}}e:{if(h=u?Pr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var k=dw;else if(Bh(h))if(Wm)k=mw;else{k=fw;var I=hw}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=pw);if(k&&(k=k(t,u))){Bm(d,k,n,c);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&wu(h,"number",h.value)}switch(I=u?Pr(u):window,t){case"focusin":(Bh(I)||I.contentEditable==="true")&&(Nr=I,Au=u,Gi=null);break;case"focusout":Gi=Au=Nr=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Gh(d,n,c);break;case"selectionchange":if(vw)break;case"keydown":case"keyup":Gh(d,n,c)}var x;if($c)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Rr?jm(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Um&&n.locale!=="ko"&&(Rr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Rr&&(x=Fm()):(_n=c,Bc="value"in _n?_n.value:_n.textContent,Rr=!0)),I=Yo(u,y),0<I.length&&(y=new Fh(y,t,null,n,c),d.push({event:y,listeners:I}),x?y.data=x:(x=zm(n),x!==null&&(y.data=x)))),(x=ow?lw(t,n):aw(t,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(c=new Fh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}Jm(d,e)})}function ps(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ls(t,n),s!=null&&r.unshift(ps(t,s,i)),s=ls(t,e),s!=null&&r.push(ps(t,s,i))),t=t.return}return r}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ls(n,s),a!=null&&o.unshift(ps(n,a,l))):i||(a=ls(n,s),a!=null&&o.push(ps(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Sw=/\r\n?/g,Cw=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(Sw,`
`).replace(Cw,"")}function fo(t,e,n){if(e=Yh(e),Yh(t)!==e&&n)throw Error(S(425))}function Xo(){}var Du=null,Lu=null;function Mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,kw=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,Tw=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(t){return Xh.resolve(null).then(t).catch(Iw)}:Fu;function Iw(t){setTimeout(function(){throw t})}function Ua(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cs(e)}function Cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mi=Math.random().toString(36).slice(2),Rt="__reactFiber$"+mi,ms="__reactProps$"+mi,Qt="__reactContainer$"+mi,Uu="__reactEvents$"+mi,xw="__reactListeners$"+mi,Rw="__reactHandles$"+mi;function Kn(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jh(t);t!==null;){if(n=t[Rt])return n;t=Jh(t)}return e}t=n,n=t.parentNode}return null}function Fs(t){return t=t[Rt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function $l(t){return t[ms]||null}var ju=[],Ar=-1;function Bn(t){return{current:t}}function Z(t){0>Ar||(t.current=ju[Ar],ju[Ar]=null,Ar--)}function X(t,e){Ar++,ju[Ar]=t.current,t.current=e}var On={},De=Bn(On),Ke=Bn(!1),rr=On;function Xr(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function Jo(){Z(Ke),Z(De)}function Zh(t,e,n){if(De.current!==On)throw Error(S(168));X(De,e),X(Ke,n)}function eg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,h0(t)||"Unknown",i));return le({},n,r)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,rr=De.current,X(De,t),X(Ke,Ke.current),!0}function ef(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=eg(t,e,rr),r.__reactInternalMemoizedMergedChildContext=t,Z(Ke),Z(De),X(De,t)):Z(Ke),X(Ke,n)}var jt=null,Vl=!1,ja=!1;function tg(t){jt===null?jt=[t]:jt.push(t)}function Nw(t){Vl=!0,tg(t)}function Wn(){if(!ja&&jt!==null){ja=!0;var t=0,e=G;try{var n=jt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jt=null,Vl=!1}catch(i){throw jt!==null&&(jt=jt.slice(t+1)),Im(Fc,Wn),i}finally{G=e,ja=!1}}return null}var Or=[],Dr=0,el=null,tl=0,st=[],ot=0,ir=null,zt=1,Bt="";function $n(t,e){Or[Dr++]=tl,Or[Dr++]=el,el=t,tl=e}function ng(t,e,n){st[ot++]=zt,st[ot++]=Bt,st[ot++]=ir,ir=t;var r=zt;t=Bt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zt=1<<32-wt(e)+i|n<<i|r,Bt=s+t}else zt=1<<s|n<<i|r,Bt=t}function Gc(t){t.return!==null&&($n(t,1),ng(t,1,0))}function qc(t){for(;t===el;)el=Or[--Dr],Or[Dr]=null,tl=Or[--Dr],Or[Dr]=null;for(;t===ir;)ir=st[--ot],st[ot]=null,Bt=st[--ot],st[ot]=null,zt=st[--ot],st[ot]=null}var et=null,Je=null,te=!1,gt=null;function rg(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,et=t,Je=Cn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,et=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ir!==null?{id:zt,overflow:Bt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,et=t,Je=null,!0):!1;default:return!1}}function zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bu(t){if(te){var e=Je;if(e){var n=e;if(!tf(t,e)){if(zu(t))throw Error(S(418));e=Cn(n.nextSibling);var r=et;e&&tf(t,e)?rg(r,n):(t.flags=t.flags&-4097|2,te=!1,et=t)}}else{if(zu(t))throw Error(S(418));t.flags=t.flags&-4097|2,te=!1,et=t}}}function nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;et=t}function po(t){if(t!==et)return!1;if(!te)return nf(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mu(t.type,t.memoizedProps)),e&&(e=Je)){if(zu(t))throw ig(),Error(S(418));for(;e;)rg(t,e),e=Cn(e.nextSibling)}if(nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=Cn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=et?Cn(t.stateNode.nextSibling):null;return!0}function ig(){for(var t=Je;t;)t=Cn(t.nextSibling)}function Jr(){Je=et=null,te=!1}function Kc(t){gt===null?gt=[t]:gt.push(t)}var bw=tn.ReactCurrentBatchConfig;function Ni(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rf(t){var e=t._init;return e(t._payload)}function sg(t){function e(g,f){if(t){var _=g.deletions;_===null?(g.deletions=[f],g.flags|=16):_.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=xn(g,f),g.index=0,g.sibling=null,g}function s(g,f,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<f?(g.flags|=2,f):_):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,f,_,E){return f===null||f.tag!==6?(f=Ga(_,g.mode,E),f.return=g,f):(f=i(f,_),f.return=g,f)}function a(g,f,_,E){var k=_.type;return k===xr?c(g,f,_.props.children,E,_.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===an&&rf(k)===f.type)?(E=i(f,_.props),E.ref=Ni(g,f,_),E.return=g,E):(E=Fo(_.type,_.key,_.props,null,g.mode,E),E.ref=Ni(g,f,_),E.return=g,E)}function u(g,f,_,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=qa(_,g.mode,E),f.return=g,f):(f=i(f,_.children||[]),f.return=g,f)}function c(g,f,_,E,k){return f===null||f.tag!==7?(f=er(_,g.mode,E,k),f.return=g,f):(f=i(f,_),f.return=g,f)}function d(g,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ga(""+f,g.mode,_),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ro:return _=Fo(f.type,f.key,f.props,null,g.mode,_),_.ref=Ni(g,null,f),_.return=g,_;case Ir:return f=qa(f,g.mode,_),f.return=g,f;case an:var E=f._init;return d(g,E(f._payload),_)}if(ji(f)||ki(f))return f=er(f,g.mode,_,null),f.return=g,f;mo(g,f)}return null}function h(g,f,_,E){var k=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return k!==null?null:l(g,f,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ro:return _.key===k?a(g,f,_,E):null;case Ir:return _.key===k?u(g,f,_,E):null;case an:return k=_._init,h(g,f,k(_._payload),E)}if(ji(_)||ki(_))return k!==null?null:c(g,f,_,E,null);mo(g,_)}return null}function m(g,f,_,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(_)||null,l(f,g,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ro:return g=g.get(E.key===null?_:E.key)||null,a(f,g,E,k);case Ir:return g=g.get(E.key===null?_:E.key)||null,u(f,g,E,k);case an:var I=E._init;return m(g,f,_,I(E._payload),k)}if(ji(E)||ki(E))return g=g.get(_)||null,c(f,g,E,k,null);mo(f,E)}return null}function v(g,f,_,E){for(var k=null,I=null,x=f,y=f=0,L=null;x!==null&&y<_.length;y++){x.index>y?(L=x,x=null):L=x.sibling;var A=h(g,x,_[y],E);if(A===null){x===null&&(x=L);break}t&&x&&A.alternate===null&&e(g,x),f=s(A,f,y),I===null?k=A:I.sibling=A,I=A,x=L}if(y===_.length)return n(g,x),te&&$n(g,y),k;if(x===null){for(;y<_.length;y++)x=d(g,_[y],E),x!==null&&(f=s(x,f,y),I===null?k=x:I.sibling=x,I=x);return te&&$n(g,y),k}for(x=r(g,x);y<_.length;y++)L=m(x,g,y,_[y],E),L!==null&&(t&&L.alternate!==null&&x.delete(L.key===null?y:L.key),f=s(L,f,y),I===null?k=L:I.sibling=L,I=L);return t&&x.forEach(function(ve){return e(g,ve)}),te&&$n(g,y),k}function w(g,f,_,E){var k=ki(_);if(typeof k!="function")throw Error(S(150));if(_=k.call(_),_==null)throw Error(S(151));for(var I=k=null,x=f,y=f=0,L=null,A=_.next();x!==null&&!A.done;y++,A=_.next()){x.index>y?(L=x,x=null):L=x.sibling;var ve=h(g,x,A.value,E);if(ve===null){x===null&&(x=L);break}t&&x&&ve.alternate===null&&e(g,x),f=s(ve,f,y),I===null?k=ve:I.sibling=ve,I=ve,x=L}if(A.done)return n(g,x),te&&$n(g,y),k;if(x===null){for(;!A.done;y++,A=_.next())A=d(g,A.value,E),A!==null&&(f=s(A,f,y),I===null?k=A:I.sibling=A,I=A);return te&&$n(g,y),k}for(x=r(g,x);!A.done;y++,A=_.next())A=m(x,g,y,A.value,E),A!==null&&(t&&A.alternate!==null&&x.delete(A.key===null?y:A.key),f=s(A,f,y),I===null?k=A:I.sibling=A,I=A);return t&&x.forEach(function(rn){return e(g,rn)}),te&&$n(g,y),k}function T(g,f,_,E){if(typeof _=="object"&&_!==null&&_.type===xr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ro:e:{for(var k=_.key,I=f;I!==null;){if(I.key===k){if(k=_.type,k===xr){if(I.tag===7){n(g,I.sibling),f=i(I,_.props.children),f.return=g,g=f;break e}}else if(I.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===an&&rf(k)===I.type){n(g,I.sibling),f=i(I,_.props),f.ref=Ni(g,I,_),f.return=g,g=f;break e}n(g,I);break}else e(g,I);I=I.sibling}_.type===xr?(f=er(_.props.children,g.mode,E,_.key),f.return=g,g=f):(E=Fo(_.type,_.key,_.props,null,g.mode,E),E.ref=Ni(g,f,_),E.return=g,g=E)}return o(g);case Ir:e:{for(I=_.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(g,f.sibling),f=i(f,_.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=qa(_,g.mode,E),f.return=g,g=f}return o(g);case an:return I=_._init,T(g,f,I(_._payload),E)}if(ji(_))return v(g,f,_,E);if(ki(_))return w(g,f,_,E);mo(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,_),f.return=g,g=f):(n(g,f),f=Ga(_,g.mode,E),f.return=g,g=f),o(g)):n(g,f)}return T}var Zr=sg(!0),og=sg(!1),nl=Bn(null),rl=null,Lr=null,Qc=null;function Yc(){Qc=Lr=rl=null}function Xc(t){var e=nl.current;Z(nl),t._currentValue=e}function Wu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $r(t,e){rl=t,Qc=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ge=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(Qc!==t)if(t={context:t,memoizedValue:e,next:null},Lr===null){if(rl===null)throw Error(S(308));Lr=t,rl.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return e}var Qn=null;function Jc(t){Qn===null?Qn=[t]:Qn.push(t)}function lg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yt(t,r)}function Yt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var un=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ag(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yt(t,n)}return i=r.interleaved,i===null?(e.next=e,Jc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yt(t,n)}function Po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uc(t,n)}}function sf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,r){var i=t.updateQueue;un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(h=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=le({},d,h);break e;case 2:un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=d):c=c.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);or|=o,t.lanes=o,t.memoizedState=d}}function of(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Us={},At=Bn(Us),gs=Bn(Us),_s=Bn(Us);function Yn(t){if(t===Us)throw Error(S(174));return t}function ed(t,e){switch(X(_s,e),X(gs,t),X(At,Us),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Su(e,t)}Z(At),X(At,e)}function ei(){Z(At),Z(gs),Z(_s)}function ug(t){Yn(_s.current);var e=Yn(At.current),n=Su(e,t.type);e!==n&&(X(gs,t),X(At,n))}function td(t){gs.current===t&&(Z(At),Z(gs))}var re=Bn(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var za=[];function nd(){for(var t=0;t<za.length;t++)za[t]._workInProgressVersionPrimary=null;za.length=0}var Ao=tn.ReactCurrentDispatcher,Ba=tn.ReactCurrentBatchConfig,sr=0,oe=null,pe=null,Ee=null,ol=!1,qi=!1,vs=0,Pw=0;function Pe(){throw Error(S(321))}function rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function id(t,e,n,r,i,s){if(sr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ao.current=t===null||t.memoizedState===null?Lw:Mw,t=n(r,i),qi){s=0;do{if(qi=!1,vs=0,25<=s)throw Error(S(301));s+=1,Ee=pe=null,e.updateQueue=null,Ao.current=Fw,t=n(r,i)}while(qi)}if(Ao.current=ll,e=pe!==null&&pe.next!==null,sr=0,Ee=pe=oe=null,ol=!1,e)throw Error(S(300));return t}function sd(){var t=vs!==0;return vs=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function dt(){if(pe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=pe.next;var e=Ee===null?oe.memoizedState:Ee.next;if(e!==null)Ee=e,pe=t;else{if(t===null)throw Error(S(310));pe=t,t={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function ys(t,e){return typeof e=="function"?e(t):e}function Wa(t){var e=dt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((sr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,oe.lanes|=c,or|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Ct(r,e.memoizedState)||(Ge=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,or|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ha(t){var e=dt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||(Ge=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cg(){}function dg(t,e){var n=oe,r=dt(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,Ge=!0),r=r.queue,od(pg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,ws(9,fg.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(S(349));sr&30||hg(n,e,i)}return i}function hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fg(t,e,n,r){e.value=n,e.getSnapshot=r,mg(e)&&gg(t)}function pg(t,e,n){return n(function(){mg(e)&&gg(t)})}function mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function gg(t){var e=Yt(t,1);e!==null&&Et(e,t,1,-1)}function lf(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:t},e.queue=t,t=t.dispatch=Dw.bind(null,oe,t),[e.memoizedState,t]}function ws(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _g(){return dt().memoizedState}function Oo(t,e,n,r){var i=xt();oe.flags|=t,i.memoizedState=ws(1|e,n,void 0,r===void 0?null:r)}function Gl(t,e,n,r){var i=dt();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&rd(r,o.deps)){i.memoizedState=ws(e,n,s,r);return}}oe.flags|=t,i.memoizedState=ws(1|e,n,s,r)}function af(t,e){return Oo(8390656,8,t,e)}function od(t,e){return Gl(2048,8,t,e)}function vg(t,e){return Gl(4,2,t,e)}function yg(t,e){return Gl(4,4,t,e)}function wg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Eg(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4,4,wg.bind(null,e,t),n)}function ld(){}function Sg(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Cg(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kg(t,e,n){return sr&21?(Ct(n,e)||(n=Nm(),oe.lanes|=n,or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ge=!0),t.memoizedState=n)}function Aw(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Ba.transition;Ba.transition={};try{t(!1),e()}finally{G=n,Ba.transition=r}}function Tg(){return dt().memoizedState}function Ow(t,e,n){var r=In(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ig(t))xg(e,n);else if(n=lg(t,e,n,r),n!==null){var i=ze();Et(n,t,r,i),Rg(n,e,r)}}function Dw(t,e,n){var r=In(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ig(t))xg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,o)){var a=e.interleaved;a===null?(i.next=i,Jc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=lg(t,e,i,r),n!==null&&(i=ze(),Et(n,t,r,i),Rg(n,e,r))}}function Ig(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function xg(t,e){qi=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uc(t,n)}}var ll={readContext:ct,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Lw={readContext:ct,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:af,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oo(4194308,4,wg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oo(4,2,t,e)},useMemo:function(t,e){var n=xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ow.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:lf,useDebugValue:ld,useDeferredValue:function(t){return xt().memoizedState=t},useTransition:function(){var t=lf(!1),e=t[0];return t=Aw.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=xt();if(te){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ke===null)throw Error(S(349));sr&30||hg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,af(pg.bind(null,r,s,t),[t]),r.flags|=2048,ws(9,fg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xt(),e=ke.identifierPrefix;if(te){var n=Bt,r=zt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Pw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mw={readContext:ct,useCallback:Sg,useContext:ct,useEffect:od,useImperativeHandle:Eg,useInsertionEffect:vg,useLayoutEffect:yg,useMemo:Cg,useReducer:Wa,useRef:_g,useState:function(){return Wa(ys)},useDebugValue:ld,useDeferredValue:function(t){var e=dt();return kg(e,pe.memoizedState,t)},useTransition:function(){var t=Wa(ys)[0],e=dt().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:dg,useId:Tg,unstable_isNewReconciler:!1},Fw={readContext:ct,useCallback:Sg,useContext:ct,useEffect:od,useImperativeHandle:Eg,useInsertionEffect:vg,useLayoutEffect:yg,useMemo:Cg,useReducer:Ha,useRef:_g,useState:function(){return Ha(ys)},useDebugValue:ld,useDeferredValue:function(t){var e=dt();return pe===null?e.memoizedState=t:kg(e,pe.memoizedState,t)},useTransition:function(){var t=Ha(ys)[0],e=dt().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:dg,useId:Tg,unstable_isNewReconciler:!1};function pt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),i=In(t),s=Vt(r,i);s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Et(e,t,i,r),Po(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),i=In(t),s=Vt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Et(e,t,i,r),Po(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=In(t),i=Vt(n,r);i.tag=2,e!=null&&(i.callback=e),e=kn(t,i,r),e!==null&&(Et(e,t,r,n),Po(e,t,r))}};function uf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hs(n,r)||!hs(i,s):!0}function Ng(t,e,n){var r=!1,i=On,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Qe(e)?rr:De.current,r=e.contextTypes,s=(r=r!=null)?Xr(t,i):On),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function $u(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Zc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Qe(e)?rr:De.current,i.context=Xr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ql.enqueueReplaceState(i,i.state,null),il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,e){try{var n="",r=e;do n+=d0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $a(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uw=typeof WeakMap=="function"?WeakMap:Map;function bg(t,e,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ul||(ul=!0,tc=r),Vu(t,e)},n}function Pg(t,e,n){n=Vt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vu(t,e),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function df(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Uw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Jw.bind(null,t,e,n),e.then(t,t))}function hf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ff(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vt(-1,1),e.tag=2,kn(n,e,1))),n.lanes|=1),t)}var jw=tn.ReactCurrentOwner,Ge=!1;function Ue(t,e,n,r){e.child=t===null?og(e,null,n,r):Zr(e,t.child,n,r)}function pf(t,e,n,r,i){n=n.render;var s=e.ref;return $r(e,i),r=id(t,e,n,r,s,i),n=sd(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xt(t,e,i)):(te&&n&&Gc(e),e.flags|=1,Ue(t,e,r,i),e.child)}function mf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!md(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ag(t,e,s,r,i)):(t=Fo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(o,r)&&t.ref===e.ref)return Xt(t,e,i)}return e.flags|=1,t=xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ag(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hs(s,r)&&t.ref===e.ref)if(Ge=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ge=!0);else return e.lanes=t.lanes,Xt(t,e,i)}return Gu(t,e,n,r,i)}function Og(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Fr,Xe),Xe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Fr,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Fr,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Fr,Xe),Xe|=r;return Ue(t,e,i,n),e.child}function Dg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gu(t,e,n,r,i){var s=Qe(n)?rr:De.current;return s=Xr(e,s),$r(e,i),n=id(t,e,n,r,s,i),r=sd(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xt(t,e,i)):(te&&r&&Gc(e),e.flags|=1,Ue(t,e,n,i),e.child)}function gf(t,e,n,r,i){if(Qe(n)){var s=!0;Zo(e)}else s=!1;if($r(e,i),e.stateNode===null)Do(t,e),Ng(e,n,r),$u(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Qe(n)?rr:De.current,u=Xr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&cf(e,o,r,u),un=!1;var h=e.memoizedState;o.state=h,il(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ke.current||un?(typeof c=="function"&&(Hu(e,n,c,r),a=e.memoizedState),(l=un||uf(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ag(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:pt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ct(a):(a=Qe(n)?rr:De.current,a=Xr(e,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&cf(e,o,r,a),un=!1,h=e.memoizedState,o.state=h,il(e,r,o,i);var v=e.memoizedState;l!==d||h!==v||Ke.current||un?(typeof m=="function"&&(Hu(e,n,m,r),v=e.memoizedState),(u=un||uf(e,n,u,r,h,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return qu(t,e,n,r,s,i)}function qu(t,e,n,r,i,s){Dg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ef(e,n,!1),Xt(t,e,s);r=e.stateNode,jw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zr(e,t.child,null,s),e.child=Zr(e,null,l,s)):Ue(t,e,l,s),e.memoizedState=r.state,i&&ef(e,n,!0),e.child}function Lg(t){var e=t.stateNode;e.pendingContext?Zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zh(t,e.context,!1),ed(t,e.containerInfo)}function _f(t,e,n,r,i){return Jr(),Kc(i),e.flags|=256,Ue(t,e,n,r),e.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mg(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(re,i&1),t===null)return Bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yl(o,r,0,null),t=er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qu(n),e.memoizedState=Ku,t):ad(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=xn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=xn(l,s):(s=er(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ku,r}return s=t.child,t=s.sibling,r=xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ad(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,r){return r!==null&&Kc(r),Zr(e,t.child,null,n),t=ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$a(Error(S(422))),go(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yl({mode:"visible",children:r.children},i,0,null),s=er(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zr(e,t.child,null,o),e.child.memoizedState=Qu(o),e.memoizedState=Ku,s);if(!(e.mode&1))return go(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=$a(s,r,void 0),go(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ge||l){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yt(t,i),Et(r,t,i,-1))}return pd(),r=$a(Error(S(421))),go(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Zw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Je=Cn(i.nextSibling),et=e,te=!0,gt=null,t!==null&&(st[ot++]=zt,st[ot++]=Bt,st[ot++]=ir,zt=t.id,Bt=t.overflow,ir=e),e=ad(e,r.children),e.flags|=4096,e)}function vf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wu(t.return,e,n)}function Va(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Fg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ue(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vf(t,n,e);else if(t.tag===19)vf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Va(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Va(e,!0,n,null,s);break;case"together":Va(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Do(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bw(t,e,n){switch(e.tag){case 3:Lg(e),Jr();break;case 5:ug(e);break;case 1:Qe(e.type)&&Zo(e);break;case 4:ed(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?Mg(t,e,n):(X(re,re.current&1),t=Xt(t,e,n),t!==null?t.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,Og(t,e,n)}return Xt(t,e,n)}var Ug,Yu,jg,zg;Ug=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};jg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yn(At.current);var s=null;switch(n){case"input":i=vu(t,i),r=vu(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Eu(t,i),r=Eu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xo)}Cu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ss.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ss.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};zg=function(t,e,n,r){n!==r&&(e.flags|=4)};function bi(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ww(t,e,n){var r=e.pendingProps;switch(qc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Qe(e.type)&&Jo(),Ae(e),null;case 3:return r=e.stateNode,ei(),Z(Ke),Z(De),nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(ic(gt),gt=null))),Yu(t,e),Ae(e),null;case 5:td(e);var i=Yn(_s.current);if(n=e.type,t!==null&&e.stateNode!=null)jg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ae(e),null}if(t=Yn(At.current),po(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rt]=e,r[ms]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Bi.length;i++)J(Bi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Ih(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Rh(r,s),J("invalid",r)}Cu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&fo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&fo(r.textContent,l,t),i=["children",""+l]):ss.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":io(r),xh(r,s,!0);break;case"textarea":io(r),Nh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[ms]=r,Ug(t,e,!1,!1),e.stateNode=t;e:{switch(o=ku(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bi.length;i++)J(Bi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Ih(t,r),i=vu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),J("invalid",t);break;case"textarea":Rh(t,r),i=Eu(t,r),J("invalid",t);break;default:i=r}Cu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?_m(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&mm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&os(t,a):typeof a=="number"&&os(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ss.hasOwnProperty(s)?a!=null&&s==="onScroll"&&J("scroll",t):a!=null&&Ac(t,s,a,o))}switch(n){case"input":io(t),xh(t,r,!1);break;case"textarea":io(t),Nh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+An(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zr(t,!!r.multiple,s,!1):r.defaultValue!=null&&zr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)zg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Yn(_s.current),Yn(At.current),po(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(s=r.nodeValue!==n)&&(t=et,t!==null))switch(t.tag){case 3:fo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return Ae(e),null;case 13:if(Z(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(te&&Je!==null&&e.mode&1&&!(e.flags&128))ig(),Jr(),e.flags|=98560,s=!1;else if(s=po(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Rt]=e}else Jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else gt!==null&&(ic(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?ge===0&&(ge=3):pd())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return ei(),Yu(t,e),t===null&&fs(e.stateNode.containerInfo),Ae(e),null;case 10:return Xc(e.type._context),Ae(e),null;case 17:return Qe(e.type)&&Jo(),Ae(e),null;case 19:if(Z(re),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bi(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sl(t),o!==null){for(e.flags|=128,bi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>ni&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304)}else{if(!r)if(t=sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Ae(e),null}else 2*de()-s.renderingStartTime>ni&&n!==1073741824&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=re.current,X(re,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return fd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function Hw(t,e){switch(qc(e),e.tag){case 1:return Qe(e.type)&&Jo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ei(),Z(Ke),Z(De),nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return td(e),null;case 13:if(Z(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(re),null;case 4:return ei(),null;case 10:return Xc(e.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var _o=!1,Oe=!1,$w=typeof WeakSet=="function"?WeakSet:Set,b=null;function Mr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Xu(t,e,n){try{n()}catch(r){ue(t,e,r)}}var yf=!1;function Vw(t,e){if(Du=Ko,t=Vm(),Vc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:t,selectionRange:n},Ko=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,T=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:pt(e.type,w),T);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){ue(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return v=yf,yf=!1,v}function Ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xu(e,n,s)}i=i.next}while(i!==r)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bg(t){var e=t.alternate;e!==null&&(t.alternate=null,Bg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[ms],delete e[Uu],delete e[xw],delete e[Rw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wg(t){return t.tag===5||t.tag===3||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xo));else if(r!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}function ec(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ec(t,e,n),t=t.sibling;t!==null;)ec(t,e,n),t=t.sibling}var Re=null,mt=!1;function on(t,e,n){for(n=n.child;n!==null;)Hg(t,e,n),n=n.sibling}function Hg(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:Oe||Mr(n,e);case 6:var r=Re,i=mt;Re=null,on(t,e,n),Re=r,mt=i,Re!==null&&(mt?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(mt?(t=Re,n=n.stateNode,t.nodeType===8?Ua(t.parentNode,n):t.nodeType===1&&Ua(t,n),cs(t)):Ua(Re,n.stateNode));break;case 4:r=Re,i=mt,Re=n.stateNode.containerInfo,mt=!0,on(t,e,n),Re=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xu(n,e,o),i=i.next}while(i!==r)}on(t,e,n);break;case 1:if(!Oe&&(Mr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,e,l)}on(t,e,n);break;case 21:on(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,on(t,e,n),Oe=r):on(t,e,n);break;default:on(t,e,n)}}function Ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $w),e.forEach(function(r){var i=eE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Re=l.stateNode,mt=!1;break e;case 3:Re=l.stateNode.containerInfo,mt=!0;break e;case 4:Re=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(Re===null)throw Error(S(160));Hg(s,o,i),Re=null,mt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$g(e,t),e=e.sibling}function $g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),It(t),r&4){try{Ki(3,t,t.return),Kl(3,t)}catch(w){ue(t,t.return,w)}try{Ki(5,t,t.return)}catch(w){ue(t,t.return,w)}}break;case 1:ft(e,t),It(t),r&512&&n!==null&&Mr(n,n.return);break;case 5:if(ft(e,t),It(t),r&512&&n!==null&&Mr(n,n.return),t.flags&32){var i=t.stateNode;try{os(i,"")}catch(w){ue(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hm(i,s),ku(l,o);var u=ku(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?_m(i,d):c==="dangerouslySetInnerHTML"?mm(i,d):c==="children"?os(i,d):Ac(i,c,d,u)}switch(l){case"input":yu(i,s);break;case"textarea":fm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?zr(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?zr(i,!!s.multiple,s.defaultValue,!0):zr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ms]=s}catch(w){ue(t,t.return,w)}}break;case 6:if(ft(e,t),It(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ue(t,t.return,w)}}break;case 3:if(ft(e,t),It(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cs(e.containerInfo)}catch(w){ue(t,t.return,w)}break;case 4:ft(e,t),It(t);break;case 13:ft(e,t),It(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dd=de())),r&4&&Ef(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||c,ft(e,t),Oe=u):ft(e,t),It(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(d=b=c;b!==null;){switch(h=b,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ki(4,h,h.return);break;case 1:Mr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ue(r,n,w)}}break;case 5:Mr(h,h.return);break;case 22:if(h.memoizedState!==null){Cf(d);continue}}m!==null?(m.return=h,b=m):Cf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=gm("display",o))}catch(w){ue(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ue(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ft(e,t),It(t),r&4&&Ef(t);break;case 21:break;default:ft(e,t),It(t)}}function It(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(os(i,""),r.flags&=-33);var s=wf(t);ec(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wf(t);Zu(t,l,o);break;default:throw Error(S(161))}}catch(a){ue(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gw(t,e,n){b=t,Vg(t)}function Vg(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_o;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=_o;var u=Oe;if(_o=o,(Oe=a)&&!u)for(b=i;b!==null;)o=b,a=o.child,o.tag===22&&o.memoizedState!==null?kf(i):a!==null?(a.return=o,b=a):kf(i);for(;s!==null;)b=s,Vg(s),s=s.sibling;b=i,_o=l,Oe=u}Sf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):Sf(t)}}function Sf(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Kl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&of(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}of(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&cs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Oe||e.flags&512&&Ju(e)}catch(h){ue(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Cf(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function kf(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(a){ue(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ue(e,i,a)}}var s=e.return;try{Ju(e)}catch(a){ue(e,s,a)}break;case 5:var o=e.return;try{Ju(e)}catch(a){ue(e,o,a)}}}catch(a){ue(e,e.return,a)}if(e===t){b=null;break}var l=e.sibling;if(l!==null){l.return=e.return,b=l;break}b=e.return}}var qw=Math.ceil,al=tn.ReactCurrentDispatcher,ud=tn.ReactCurrentOwner,ut=tn.ReactCurrentBatchConfig,$=0,ke=null,fe=null,Ne=0,Xe=0,Fr=Bn(0),ge=0,Es=null,or=0,Ql=0,cd=0,Qi=null,Ve=null,dd=0,ni=1/0,Ut=null,ul=!1,tc=null,Tn=null,vo=!1,vn=null,cl=0,Yi=0,nc=null,Lo=-1,Mo=0;function ze(){return $&6?de():Lo!==-1?Lo:Lo=de()}function In(t){return t.mode&1?$&2&&Ne!==0?Ne&-Ne:bw.transition!==null?(Mo===0&&(Mo=Nm()),Mo):(t=G,t!==0||(t=window.event,t=t===void 0?16:Mm(t.type)),t):1}function Et(t,e,n,r){if(50<Yi)throw Yi=0,nc=null,Error(S(185));Ls(t,n,r),(!($&2)||t!==ke)&&(t===ke&&(!($&2)&&(Ql|=n),ge===4&&dn(t,Ne)),Ye(t,r),n===1&&$===0&&!(e.mode&1)&&(ni=de()+500,Vl&&Wn()))}function Ye(t,e){var n=t.callbackNode;b0(t,e);var r=qo(t,t===ke?Ne:0);if(r===0)n!==null&&Ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ah(n),e===1)t.tag===0?Nw(Tf.bind(null,t)):tg(Tf.bind(null,t)),Tw(function(){!($&6)&&Wn()}),n=null;else{switch(bm(r)){case 1:n=Fc;break;case 4:n=xm;break;case 16:n=Go;break;case 536870912:n=Rm;break;default:n=Go}n=Zg(n,Gg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gg(t,e){if(Lo=-1,Mo=0,$&6)throw Error(S(327));var n=t.callbackNode;if(Vr()&&t.callbackNode!==n)return null;var r=qo(t,t===ke?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dl(t,r);else{e=r;var i=$;$|=2;var s=Kg();(ke!==t||Ne!==e)&&(Ut=null,ni=de()+500,Zn(t,e));do try{Yw();break}catch(l){qg(t,l)}while(!0);Yc(),al.current=s,$=i,fe!==null?e=0:(ke=null,Ne=0,e=ge)}if(e!==0){if(e===2&&(i=Nu(t),i!==0&&(r=i,e=rc(t,i))),e===1)throw n=Es,Zn(t,0),dn(t,r),Ye(t,de()),n;if(e===6)dn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Kw(i)&&(e=dl(t,r),e===2&&(s=Nu(t),s!==0&&(r=s,e=rc(t,s))),e===1))throw n=Es,Zn(t,0),dn(t,r),Ye(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Vn(t,Ve,Ut);break;case 3:if(dn(t,r),(r&130023424)===r&&(e=dd+500-de(),10<e)){if(qo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fu(Vn.bind(null,t,Ve,Ut),e);break}Vn(t,Ve,Ut);break;case 4:if(dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qw(r/1960))-r,10<r){t.timeoutHandle=Fu(Vn.bind(null,t,Ve,Ut),r);break}Vn(t,Ve,Ut);break;case 5:Vn(t,Ve,Ut);break;default:throw Error(S(329))}}}return Ye(t,de()),t.callbackNode===n?Gg.bind(null,t):null}function rc(t,e){var n=Qi;return t.current.memoizedState.isDehydrated&&(Zn(t,e).flags|=256),t=dl(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&ic(e)),t}function ic(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function Kw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dn(t,e){for(e&=~cd,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function Tf(t){if($&6)throw Error(S(327));Vr();var e=qo(t,0);if(!(e&1))return Ye(t,de()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var r=Nu(t);r!==0&&(e=r,n=rc(t,r))}if(n===1)throw n=Es,Zn(t,0),dn(t,e),Ye(t,de()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vn(t,Ve,Ut),Ye(t,de()),null}function hd(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(ni=de()+500,Vl&&Wn())}}function lr(t){vn!==null&&vn.tag===0&&!($&6)&&Vr();var e=$;$|=1;var n=ut.transition,r=G;try{if(ut.transition=null,G=1,t)return t()}finally{G=r,ut.transition=n,$=e,!($&6)&&Wn()}}function fd(){Xe=Fr.current,Z(Fr)}function Zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kw(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(qc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jo();break;case 3:ei(),Z(Ke),Z(De),nd();break;case 5:td(r);break;case 4:ei();break;case 13:Z(re);break;case 19:Z(re);break;case 10:Xc(r.type._context);break;case 22:case 23:fd()}n=n.return}if(ke=t,fe=t=xn(t.current,null),Ne=Xe=e,ge=0,Es=null,cd=Ql=or=0,Ve=Qi=null,Qn!==null){for(e=0;e<Qn.length;e++)if(n=Qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qn=null}return t}function qg(t,e){do{var n=fe;try{if(Yc(),Ao.current=ll,ol){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(sr=0,Ee=pe=oe=null,qi=!1,vs=0,ud.current=null,n===null||n.return===null){ge=1,Es=e,fe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=hf(o);if(m!==null){m.flags&=-257,ff(m,o,l,s,e),m.mode&1&&df(s,u,e),e=m,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){df(s,u,e),pd();break e}a=Error(S(426))}}else if(te&&l.mode&1){var T=hf(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ff(T,o,l,s,e),Kc(ti(a,l));break e}}s=a=ti(a,l),ge!==4&&(ge=2),Qi===null?Qi=[s]:Qi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=bg(s,a,e);sf(s,g);break e;case 1:l=a;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Tn===null||!Tn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Pg(s,l,e);sf(s,E);break e}}s=s.return}while(s!==null)}Yg(n)}catch(k){e=k,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Kg(){var t=al.current;return al.current=ll,t===null?ll:t}function pd(){(ge===0||ge===3||ge===2)&&(ge=4),ke===null||!(or&268435455)&&!(Ql&268435455)||dn(ke,Ne)}function dl(t,e){var n=$;$|=2;var r=Kg();(ke!==t||Ne!==e)&&(Ut=null,Zn(t,e));do try{Qw();break}catch(i){qg(t,i)}while(!0);if(Yc(),$=n,al.current=r,fe!==null)throw Error(S(261));return ke=null,Ne=0,ge}function Qw(){for(;fe!==null;)Qg(fe)}function Yw(){for(;fe!==null&&!E0();)Qg(fe)}function Qg(t){var e=Jg(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Yg(t):fe=e,ud.current=null}function Yg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hw(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,fe=null;return}}else if(n=Ww(n,e,Xe),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ge===0&&(ge=5)}function Vn(t,e,n){var r=G,i=ut.transition;try{ut.transition=null,G=1,Xw(t,e,n,r)}finally{ut.transition=i,G=r}return null}function Xw(t,e,n,r){do Vr();while(vn!==null);if($&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(P0(t,s),t===ke&&(fe=ke=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,Zg(Go,function(){return Vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var o=G;G=1;var l=$;$|=4,ud.current=null,Vw(t,n),$g(n,t),_w(Lu),Ko=!!Du,Lu=Du=null,t.current=n,Gw(n),S0(),$=l,G=o,ut.transition=s}else t.current=n;if(vo&&(vo=!1,vn=t,cl=i),s=t.pendingLanes,s===0&&(Tn=null),T0(n.stateNode),Ye(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ul)throw ul=!1,t=tc,tc=null,t;return cl&1&&t.tag!==0&&Vr(),s=t.pendingLanes,s&1?t===nc?Yi++:(Yi=0,nc=t):Yi=0,Wn(),null}function Vr(){if(vn!==null){var t=bm(cl),e=ut.transition,n=G;try{if(ut.transition=null,G=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,cl=0,$&6)throw Error(S(331));var i=$;for($|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:Ki(8,c,s)}var d=c.child;if(d!==null)d.return=c,b=d;else for(;b!==null;){c=b;var h=c.sibling,m=c.return;if(Bg(c),c===u){b=null;break}if(h!==null){h.return=m,b=h;break}b=m}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ki(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,b=g;break e}b=s.return}}var f=t.current;for(b=f;b!==null;){o=b;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,b=_;else e:for(o=f;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Kl(9,l)}}catch(k){ue(l,l.return,k)}if(l===o){b=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,b=E;break e}b=l.return}}if($=i,Wn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(zl,t)}catch{}r=!0}return r}finally{G=n,ut.transition=e}}return!1}function If(t,e,n){e=ti(n,e),e=bg(t,e,1),t=kn(t,e,1),e=ze(),t!==null&&(Ls(t,1,e),Ye(t,e))}function ue(t,e,n){if(t.tag===3)If(t,t,n);else for(;e!==null;){if(e.tag===3){If(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){t=ti(n,t),t=Pg(e,t,1),e=kn(e,t,1),t=ze(),e!==null&&(Ls(e,1,t),Ye(e,t));break}}e=e.return}}function Jw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Ne&n)===n&&(ge===4||ge===3&&(Ne&130023424)===Ne&&500>de()-dd?Zn(t,0):cd|=n),Ye(t,e)}function Xg(t,e){e===0&&(t.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var n=ze();t=Yt(t,e),t!==null&&(Ls(t,e,n),Ye(t,n))}function Zw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xg(t,n)}function eE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Xg(t,n)}var Jg;Jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)Ge=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ge=!1,Bw(t,e,n);Ge=!!(t.flags&131072)}else Ge=!1,te&&e.flags&1048576&&ng(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Do(t,e),t=e.pendingProps;var i=Xr(e,De.current);$r(e,n),i=id(null,e,r,t,i,n);var s=sd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,Zo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zc(e),i.updater=ql,e.stateNode=i,i._reactInternals=e,$u(e,r,t,n),e=qu(null,e,r,!0,s,n)):(e.tag=0,te&&s&&Gc(e),Ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Do(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nE(r),t=pt(r,t),i){case 0:e=Gu(null,e,r,t,n);break e;case 1:e=gf(null,e,r,t,n);break e;case 11:e=pf(null,e,r,t,n);break e;case 14:e=mf(null,e,r,pt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Gu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),gf(t,e,r,i,n);case 3:e:{if(Lg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ag(t,e),il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ti(Error(S(423)),e),e=_f(t,e,r,n,i);break e}else if(r!==i){i=ti(Error(S(424)),e),e=_f(t,e,r,n,i);break e}else for(Je=Cn(e.stateNode.containerInfo.firstChild),et=e,te=!0,gt=null,n=og(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){e=Xt(t,e,n);break e}Ue(t,e,r,n)}e=e.child}return e;case 5:return ug(e),t===null&&Bu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mu(r,i)?o=null:s!==null&&Mu(r,s)&&(e.flags|=32),Dg(t,e),Ue(t,e,o,n),e.child;case 6:return t===null&&Bu(e),null;case 13:return Mg(t,e,n);case 4:return ed(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zr(e,null,r,n):Ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),pf(t,e,r,i,n);case 7:return Ue(t,e,e.pendingProps,n),e.child;case 8:return Ue(t,e,e.pendingProps.children,n),e.child;case 12:return Ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(nl,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!Ke.current){e=Xt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Vt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Wu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$r(e,n),i=ct(i),r=r(i),e.flags|=1,Ue(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),mf(t,e,r,i,n);case 15:return Ag(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Do(t,e),e.tag=1,Qe(r)?(t=!0,Zo(e)):t=!1,$r(e,n),Ng(e,r,i),$u(e,r,i,n),qu(null,e,r,!0,t,n);case 19:return Fg(t,e,n);case 22:return Og(t,e,n)}throw Error(S(156,e.tag))};function Zg(t,e){return Im(t,e)}function tE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new tE(t,e,n,r)}function md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nE(t){if(typeof t=="function")return md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dc)return 11;if(t===Lc)return 14}return 2}function xn(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")md(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xr:return er(n.children,i,s,e);case Oc:o=8,i|=8;break;case pu:return t=lt(12,n,e,i|2),t.elementType=pu,t.lanes=s,t;case mu:return t=lt(13,n,e,i),t.elementType=mu,t.lanes=s,t;case gu:return t=lt(19,n,e,i),t.elementType=gu,t.lanes=s,t;case um:return Yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lm:o=10;break e;case am:o=9;break e;case Dc:o=11;break e;case Lc:o=14;break e;case an:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function er(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function Yl(t,e,n,r){return t=lt(22,t,r,e),t.elementType=um,t.lanes=n,t.stateNode={isHidden:!1},t}function Ga(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function qa(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gd(t,e,n,r,i,s,o,l,a){return t=new rE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(s),t}function iE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function e_(t){if(!t)return On;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Qe(n))return eg(t,n,e)}return e}function t_(t,e,n,r,i,s,o,l,a){return t=gd(n,r,!0,t,i,s,o,l,a),t.context=e_(null),n=t.current,r=ze(),i=In(n),s=Vt(r,i),s.callback=e??null,kn(n,s,i),t.current.lanes=i,Ls(t,i,r),Ye(t,r),t}function Xl(t,e,n,r){var i=e.current,s=ze(),o=In(i);return n=e_(n),e.context===null?e.context=n:e.pendingContext=n,e=Vt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kn(i,e,o),t!==null&&(Et(t,i,o,s),Po(t,i,o)),o}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _d(t,e){xf(t,e),(t=t.alternate)&&xf(t,e)}function sE(){return null}var n_=typeof reportError=="function"?reportError:function(t){console.error(t)};function vd(t){this._internalRoot=t}Jl.prototype.render=vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Xl(t,e,null,null)};Jl.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;lr(function(){Xl(null,t,null,null)}),e[Qt]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Om();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cn.length&&e!==0&&e<cn[n].priority;n++);cn.splice(n,0,t),n===0&&Lm(t)}};function yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rf(){}function oE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hl(o);s.call(u)}}var o=t_(e,r,t,0,null,!1,!1,"",Rf);return t._reactRootContainer=o,t[Qt]=o.current,fs(t.nodeType===8?t.parentNode:t),lr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=hl(a);l.call(u)}}var a=gd(t,0,!1,null,null,!1,!1,"",Rf);return t._reactRootContainer=a,t[Qt]=a.current,fs(t.nodeType===8?t.parentNode:t),lr(function(){Xl(e,a,n,r)}),a}function ea(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=hl(o);l.call(a)}}Xl(e,o,t,i)}else o=oE(n,e,t,i,r);return hl(o)}Pm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zi(e.pendingLanes);n!==0&&(Uc(e,n|1),Ye(e,de()),!($&6)&&(ni=de()+500,Wn()))}break;case 13:lr(function(){var r=Yt(t,1);if(r!==null){var i=ze();Et(r,t,1,i)}}),_d(t,1)}};jc=function(t){if(t.tag===13){var e=Yt(t,134217728);if(e!==null){var n=ze();Et(e,t,134217728,n)}_d(t,134217728)}};Am=function(t){if(t.tag===13){var e=In(t),n=Yt(t,e);if(n!==null){var r=ze();Et(n,t,e,r)}_d(t,e)}};Om=function(){return G};Dm=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Iu=function(t,e,n){switch(e){case"input":if(yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$l(r);if(!i)throw Error(S(90));dm(r),yu(r,i)}}}break;case"textarea":fm(t,n);break;case"select":e=n.value,e!=null&&zr(t,!!n.multiple,e,!1)}};wm=hd;Em=lr;var lE={usingClientEntryPoint:!1,Events:[Fs,Pr,$l,vm,ym,hd]},Pi={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aE={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=km(t),t===null?null:t.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||sE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{zl=yo.inject(aE),Pt=yo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE;rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yd(e))throw Error(S(200));return iE(t,e,null,n)};rt.createRoot=function(t,e){if(!yd(t))throw Error(S(299));var n=!1,r="",i=n_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gd(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,fs(t.nodeType===8?t.parentNode:t),new vd(e)};rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=km(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t){return lr(t)};rt.hydrate=function(t,e,n){if(!Zl(e))throw Error(S(200));return ea(null,t,e,!0,n)};rt.hydrateRoot=function(t,e,n){if(!yd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=n_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=t_(e,null,t,1,n??null,i,!1,s,o),t[Qt]=e.current,fs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jl(e)};rt.render=function(t,e,n){if(!Zl(e))throw Error(S(200));return ea(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(S(40));return t._reactRootContainer?(lr(function(){ea(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};rt.unstable_batchedUpdates=hd;rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return ea(t,e,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function r_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r_)}catch(t){console.error(t)}}r_(),rm.exports=rt;var uE=rm.exports,Nf=uE;hu.createRoot=Nf.createRoot,hu.hydrateRoot=Nf.hydrateRoot;var bf={};/**
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
 */const i_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw gi(e)},gi=function(t){return new Error("Firebase Database ("+i_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const s_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new dE;const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o_=function(t){const e=s_(t);return wd.encodeByteArray(e,!0)},fl=function(t){return o_(t).replace(/\./g,"")},pl=function(t){try{return wd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hE(t){return l_(void 0,t)}function l_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fE(n)||(t[n]=l_(t[n],e[n]));return t}function fE(t){return t!=="__proto__"}/**
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
 */function pE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mE=()=>pE().__FIREBASE_DEFAULTS__,gE=()=>{if(typeof process>"u"||typeof bf>"u")return;const t=bf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_E=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pl(t[1]);return e&&JSON.parse(e)},ta=()=>{try{return mE()||gE()||_E()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},a_=t=>{var e,n;return(n=(e=ta())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},u_=t=>{const e=a_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},c_=()=>{var t;return(t=ta())===null||t===void 0?void 0:t.config},d_=t=>{var e;return(e=ta())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function h_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function vE(){var t;const e=(t=ta())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wE(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EE(){return i_.NODE_ADMIN===!0}function SE(){try{return typeof indexedDB=="object"}catch{return!1}}function CE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const kE="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kE,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new nn(i,l,r)}}function TE(t,e){return t.replace(IE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IE=/\{\$([^}]+)}/g;/**
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
 */function Ss(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
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
 */const p_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ss(pl(s[0])||""),n=Ss(pl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},xE=function(t){const e=p_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},RE=function(t){const e=p_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Pf(s)&&Pf(o)){if(!_l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pf(t){return t!==null&&typeof t=="object"}/**
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
 */function _i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class NE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function bE(t,e){const n=new PE(t,e);return n.subscribe.bind(n)}class PE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ka),i.error===void 0&&(i.error=Ka),i.complete===void 0&&(i.complete=Ka);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ka(){}function ii(t,e){return`${t} failed: ${e} argument `}/**
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
 */const OE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},na=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class DE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ME(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LE(t){return t===Gn?void 0:t}function ME(t){return t.instantiationMode==="EAGER"}/**
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
 */class FE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const UE={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},jE=K.INFO,zE={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},BE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sd{constructor(e){this.name=e,this._logLevel=jE,this._logHandler=BE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const WE=(t,e)=>e.some(n=>t instanceof n);let Af,Of;function HE(){return Af||(Af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $E(){return Of||(Of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,sc=new WeakMap,g_=new WeakMap,Qa=new WeakMap,Cd=new WeakMap;function VE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m_.set(n,t)}).catch(()=>{}),Cd.set(e,t),e}function GE(t){if(sc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sc.set(t,e)}let oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qE(t){oc=t(oc)}function KE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ya(this),e,...n);return g_.set(r,e.sort?e.sort():[e]),Rn(r)}:$E().includes(t)?function(...e){return t.apply(Ya(this),e),Rn(m_.get(this))}:function(...e){return Rn(t.apply(Ya(this),e))}}function QE(t){return typeof t=="function"?KE(t):(t instanceof IDBTransaction&&GE(t),WE(t,HE())?new Proxy(t,oc):t)}function Rn(t){if(t instanceof IDBRequest)return VE(t);if(Qa.has(t))return Qa.get(t);const e=QE(t);return e!==t&&(Qa.set(t,e),Cd.set(e,t)),e}const Ya=t=>Cd.get(t);function YE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Rn(o.result),a.oldVersion,a.newVersion,Rn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const XE=["get","getKey","getAll","getAllKeys","count"],JE=["put","add","delete","clear"],Xa=new Map;function Df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Xa.set(e,s),s}qE(t=>({...t,get:(e,n,r)=>Df(e,n)||t.get(e,n,r),has:(e,n)=>!!Df(e,n)||t.has(e,n)}));/**
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
 */class ZE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lc="@firebase/app",Lf="0.9.13";/**
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
 */const ar=new Sd("@firebase/app"),tS="@firebase/app-compat",nS="@firebase/analytics-compat",rS="@firebase/analytics",iS="@firebase/app-check-compat",sS="@firebase/app-check",oS="@firebase/auth",lS="@firebase/auth-compat",aS="@firebase/database",uS="@firebase/database-compat",cS="@firebase/functions",dS="@firebase/functions-compat",hS="@firebase/installations",fS="@firebase/installations-compat",pS="@firebase/messaging",mS="@firebase/messaging-compat",gS="@firebase/performance",_S="@firebase/performance-compat",vS="@firebase/remote-config",yS="@firebase/remote-config-compat",wS="@firebase/storage",ES="@firebase/storage-compat",SS="@firebase/firestore",CS="@firebase/firestore-compat",kS="firebase",TS="9.23.0";/**
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
 */const ac="[DEFAULT]",IS={[lc]:"fire-core",[tS]:"fire-core-compat",[rS]:"fire-analytics",[nS]:"fire-analytics-compat",[sS]:"fire-app-check",[iS]:"fire-app-check-compat",[oS]:"fire-auth",[lS]:"fire-auth-compat",[aS]:"fire-rtdb",[uS]:"fire-rtdb-compat",[cS]:"fire-fn",[dS]:"fire-fn-compat",[hS]:"fire-iid",[fS]:"fire-iid-compat",[pS]:"fire-fcm",[mS]:"fire-fcm-compat",[gS]:"fire-perf",[_S]:"fire-perf-compat",[vS]:"fire-rc",[yS]:"fire-rc-compat",[wS]:"fire-gcs",[ES]:"fire-gcs-compat",[SS]:"fire-fst",[CS]:"fire-fst-compat","fire-js":"fire-js",[kS]:"fire-js-all"};/**
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
 */const vl=new Map,uc=new Map;function xS(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ur(t){const e=t.name;if(uc.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;uc.set(e,t);for(const n of vl.values())xS(n,t);return!0}function ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const RS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new js("app","Firebase",RS);/**
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
 */class NS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const _r=TS;function __(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ac,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=c_()),!n)throw Nn.create("no-options");const s=vl.get(i);if(s){if(_l(n,s.options)&&_l(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const o=new FE(i);for(const a of uc.values())o.addComponent(a);const l=new NS(n,r,o);return vl.set(i,l),l}function kd(t=ac){const e=vl.get(t);if(!e&&t===ac&&c_())return __();if(!e)throw Nn.create("no-app",{appName:t});return e}function Ot(t,e,n){var r;let i=(r=IS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(l.join(" "));return}ur(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const bS="firebase-heartbeat-database",PS=1,Cs="firebase-heartbeat-store";let Ja=null;function v_(){return Ja||(Ja=YE(bS,PS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cs)}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),Ja}async function AS(t){try{return await(await v_()).transaction(Cs).objectStore(Cs).get(y_(t))}catch(e){if(e instanceof nn)ar.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function Mf(t,e){try{const r=(await v_()).transaction(Cs,"readwrite");await r.objectStore(Cs).put(e,y_(t)),await r.done}catch(n){if(n instanceof nn)ar.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function y_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OS=1024,DS=30*24*60*60*1e3;class LS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ff();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=DS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ff(),{heartbeatsToSend:n,unsentEntries:r}=MS(this._heartbeatsCache.heartbeats),i=fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ff(){return new Date().toISOString().substring(0,10)}function MS(t,e=OS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SE()?CE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uf(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function US(t){ur(new Dn("platform-logger",e=>new ZE(e),"PRIVATE")),ur(new Dn("heartbeat",e=>new LS(e),"PRIVATE")),Ot(lc,Lf,t),Ot(lc,Lf,"esm2017"),Ot("fire-js","")}US("");function Td(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function w_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jS=w_,E_=new js("auth","Firebase",w_());/**
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
 */const yl=new Sd("@firebase/auth");function zS(t,...e){yl.logLevel<=K.WARN&&yl.warn(`Auth (${_r}): ${t}`,...e)}function Uo(t,...e){yl.logLevel<=K.ERROR&&yl.error(`Auth (${_r}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Id(t,...e)}function Dt(t,...e){return Id(t,...e)}function BS(t,e,n){const r=Object.assign(Object.assign({},jS()),{[e]:n});return new js("auth","Firebase",r).create(e,{appName:t.name})}function Id(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return E_.create(t,...e)}function D(t,e,...n){if(!t)throw Id(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function Zt(t,e){t||Wt(e)}/**
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
 */function cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WS(){return jf()==="http:"||jf()==="https:"}function jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WS()||yE()||"connection"in navigator)?navigator.onLine:!0}function $S(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ed()||f_()}get(){return HS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xd(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class S_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GS=new zs(3e4,6e4);function Rd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bs(t,e,n,r,i={}){return C_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=_i(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),S_.fetch()(T_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function C_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VS),e);try{const i=new qS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw wo(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw BS(t,c,u);Jt(t,c)}}catch(i){if(i instanceof nn)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function k_(t,e,n,r,i={}){const s=await Bs(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function T_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xd(t.config,i):`${t.config.apiScheme}://${i}`}class qS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),GS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function KS(t,e){return Bs(t,"POST","/v1/accounts:delete",e)}async function QS(t,e){return Bs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YS(t,e=!1){const n=_e(t),r=await n.getIdToken(e),i=Nd(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xi(Za(i.auth_time)),issuedAtTime:Xi(Za(i.iat)),expirationTime:Xi(Za(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Za(t){return Number(t)*1e3}function Nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const i=pl(n);return i?JSON.parse(i):(Uo("Failed to decode base64 JWT payload"),null)}catch(i){return Uo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function XS(t){const e=Nd(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&JS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class I_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ks(t,QS(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nC(s.providerUserInfo):[],l=tC(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new I_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function eC(t){const e=_e(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nC(t){return t.map(e=>{var{providerId:n}=e,r=Td(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function rC(t,e){const n=await C_(t,{},async()=>{const r=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=T_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",S_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ts;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function ln(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new I_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ks(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YS(this,e)}reload(){return eC(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ks(this,KS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:E,isAnonymous:k,providerData:I,stsTokenManager:x}=n;D(_&&x,e,"internal-error");const y=Ts.fromJSON(this.name,x);D(typeof _=="string",e,"internal-error"),ln(d,e.name),ln(h,e.name),D(typeof E=="boolean",e,"internal-error"),D(typeof k=="boolean",e,"internal-error"),ln(m,e.name),ln(v,e.name),ln(w,e.name),ln(T,e.name),ln(g,e.name),ln(f,e.name);const L=new tr({uid:_,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:y,createdAt:g,lastLoginAt:f});return I&&Array.isArray(I)&&(L.providerData=I.map(A=>Object.assign({},A))),T&&(L._redirectEventId=T),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ts;i.updateFromServerResponse(n);const s=new tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}}/**
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
 */const zf=new Map;function Ht(t){Zt(t instanceof Function,"Expected a class definition");let e=zf.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zf.set(t,e),e)}/**
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
 */class x_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}x_.type="NONE";const Bf=x_;/**
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
 */function jo(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=jo(this.userKey,i.apiKey,s),this.fullPersistenceKey=jo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(Ht(Bf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ht(Bf);const o=jo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=tr._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Gr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Gr(s,e,r))}}/**
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
 */function Wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(A_(e))return"Blackberry";if(O_(e))return"Webos";if(bd(e))return"Safari";if((e.includes("chrome/")||N_(e))&&!e.includes("edge/"))return"Chrome";if(P_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function R_(t=Le()){return/firefox\//i.test(t)}function bd(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function N_(t=Le()){return/crios\//i.test(t)}function b_(t=Le()){return/iemobile/i.test(t)}function P_(t=Le()){return/android/i.test(t)}function A_(t=Le()){return/blackberry/i.test(t)}function O_(t=Le()){return/webos/i.test(t)}function ia(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iC(t=Le()){var e;return ia(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sC(){return wE()&&document.documentMode===10}function D_(t=Le()){return ia(t)||P_(t)||O_(t)||A_(t)||/windows phone/i.test(t)||b_(t)}function oC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function L_(t,e=[]){let n;switch(t){case"Browser":n=Wf(Le());break;case"Worker":n=`${Wf(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_r}/${r}`}async function M_(t,e){return Bs(t,"GET","/v2/recaptchaConfig",Rd(t,e))}function Hf(t){return t!==void 0&&t.enterprise!==void 0}class F_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function lC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function U_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lC().appendChild(r)})}function aC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uC="https://www.google.com/recaptcha/enterprise.js?render=",cC="recaptcha-enterprise",dC="NO_RECAPTCHA";class hC{constructor(e){this.type=cC,this.auth=Ws(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{M_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new F_(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Hf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(dC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Hf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}U_(uC+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}/**
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
 */class fC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class pC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $f(this),this.idTokenSubscription=new $f(this),this.beforeStateQueue=new fC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_e(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}async initializeRecaptchaConfig(){const e=await M_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new F_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new hC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ws(t){return _e(t)}class $f{constructor(e){this.auth=e,this.observer=null,this.addObserver=bE(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function mC(t,e){const n=ra(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_l(s,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function gC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _C(t,e,n){const r=Ws(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=j_(e),{host:o,port:l}=vC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),yC()}function j_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vC(t){const e=j_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vf(o)}}}function Vf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class z_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
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
 */async function qr(t,e){return k_(t,"POST","/v1/accounts:signInWithIdp",Rd(t,e))}/**
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
 */const wC="http://localhost";class cr extends z_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Td(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:wC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
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
 */class B_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hs extends B_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends Hs{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class fn extends Hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
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
 */class pn extends Hs{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
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
 */class mn extends Hs{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
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
 */async function EC(t,e){return k_(t,"POST","/v1/accounts:signUp",Rd(t,e))}/**
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
 */async function SC(t){var e;const n=Ws(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ln({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await EC(n,{returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class El extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new El(e,n,r,i)}}function W_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,s,e,r):s})}async function CC(t,e,n=!1){const r=await ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",r)}/**
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
 */async function kC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ks(t,W_(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Nd(s.idToken);D(o,r,"internal-error");const{sub:l}=o;return D(t.uid===l,r,"user-mismatch"),Ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),s}}/**
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
 */async function TC(t,e,n=!1){const r="signIn",i=await W_(t,r,e),s=await Ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function IC(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function xC(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function RC(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}const Sl="__sak";/**
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
 */class H_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function NC(){const t=Le();return bd(t)||ia(t)}const bC=1e3,PC=10;class $_ extends H_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NC()&&oC(),this.fallbackToPolling=D_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$_.type="LOCAL";const AC=$_;/**
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
 */class V_ extends H_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}V_.type="SESSION";const G_=V_;/**
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
 */function OC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await OC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sa.receivers=[];/**
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
 */function Pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Pd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function LC(t){Lt().location.href=t}/**
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
 */function q_(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function MC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UC(){return q_()?self:null}/**
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
 */const K_="firebaseLocalStorageDb",jC=1,Cl="firebaseLocalStorage",Q_="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oa(t,e){return t.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function zC(){const t=indexedDB.deleteDatabase(K_);return new $s(t).toPromise()}function dc(){const t=indexedDB.open(K_,jC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cl,{keyPath:Q_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cl)?e(r):(r.close(),await zC(),e(await dc()))})})}async function qf(t,e,n){const r=oa(t,!0).put({[Q_]:e,value:n});return new $s(r).toPromise()}async function BC(t,e){const n=oa(t,!1).get(e),r=await new $s(n).toPromise();return r===void 0?null:r.value}function Kf(t,e){const n=oa(t,!0).delete(e);return new $s(n).toPromise()}const WC=800,HC=3;class Y_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sa._getInstance(UC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MC(),!this.activeServiceWorker)return;this.sender=new DC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dc();return await qf(e,Sl,"1"),await Kf(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=oa(i,!1).getAll();return new $s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y_.type="LOCAL";const $C=Y_;new zs(3e4,6e4);/**
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
 */function VC(t,e){return e?Ht(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ad extends z_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GC(t){return TC(t.auth,new Ad(t),t.bypassAuthState)}function qC(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),kC(n,new Ad(t),t.bypassAuthState)}async function KC(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),CC(n,new Ad(t),t.bypassAuthState)}/**
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
 */class X_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GC;case"linkViaPopup":case"linkViaRedirect":return KC;case"reauthViaPopup":case"reauthViaRedirect":return qC;default:Jt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QC=new zs(2e3,1e4);class Ur extends X_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QC.get())};e()}}Ur.currentPopupAction=null;/**
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
 */const YC="pendingRedirect",zo=new Map;class XC extends X_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zo.get(this.auth._key());if(!e){try{const r=await JC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zo.set(this.auth._key(),e)}return this.bypassAuthState||zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JC(t,e){const n=tk(e),r=ek(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ZC(t,e){zo.set(t._key(),e)}function ek(t){return Ht(t._redirectPersistence)}function tk(t){return jo(YC,t.config.apiKey,t.name)}async function nk(t,e,n=!1){const r=Ws(t),i=VC(r,e),o=await new XC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const rk=10*60*1e3;class ik{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!J_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J_(t);default:return!1}}/**
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
 */async function ok(t,e={}){return Bs(t,"GET","/v1/projects",e)}/**
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
 */const lk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ak=/^https?/;async function uk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ok(t);for(const n of e)try{if(ck(n))return}catch{}Jt(t,"unauthorized-domain")}function ck(t){const e=cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ak.test(n))return!1;if(lk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const dk=new zs(3e4,6e4);function Yf(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hk(t){return new Promise((e,n)=>{var r,i,s;function o(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(Dt(t,"network-request-failed"))},timeout:dk.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)o();else{const l=aC("iframefcb");return Lt()[l]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},U_(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function fk(t){return Bo=Bo||hk(t),Bo}/**
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
 */const pk=new zs(5e3,15e3),mk="__/auth/iframe",gk="emulator/auth/iframe",_k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yk(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xd(e,gk):`https://${t.config.authDomain}/${mk}`,r={apiKey:e.apiKey,appName:t.name,v:_r},i=vk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_i(r).slice(1)}`}async function wk(t){const e=await fk(t),n=Lt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:yk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_k,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),l=Lt().setTimeout(()=>{s(o)},pk.get());function a(){Lt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Ek={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sk=500,Ck=600,kk="_blank",Tk="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ik(t,e,n,r=Sk,i=Ck){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Ek),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Le().toLowerCase();n&&(l=N_(u)?kk:n),R_(u)&&(e=e||Tk,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[m,v])=>`${h}${m}=${v},`,"");if(iC(u)&&l!=="_self")return xk(e||"",l),new Xf(null);const d=window.open(e||"",l,c);D(d,t,"popup-blocked");try{d.focus()}catch{}return new Xf(d)}function xk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Rk="__/auth/handler",Nk="emulator/auth/handler",bk=encodeURIComponent("fac");async function Jf(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_r,eventId:i};if(e instanceof B_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ml(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof Hs){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${bk}=${encodeURIComponent(a)}`:"";return`${Pk(t)}?${_i(l).slice(1)}${u}`}function Pk({config:t}){return t.emulator?xd(t,Nk):`https://${t.authDomain}/${Rk}`}/**
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
 */const eu="webStorageSupport";class Ak{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=G_,this._completeRedirectFn=nk,this._overrideRedirectResult=ZC}async _openPopup(e,n,r,i){var s;Zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jf(e,n,r,cc(),i);return Ik(e,o,Pd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jf(e,n,r,cc(),i);return LC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wk(e),r=new ik(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eu,{type:eu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[eu];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return D_()||bd()||ia()}}const Ok=Ak;var Zf="@firebase/auth",ep="0.23.2";/**
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
 */class Dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mk(t){ur(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:L_(t)},u=new pC(r,i,s,a);return gC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ur(new Dn("auth-internal",e=>{const n=Ws(e.getProvider("auth").getImmediate());return(r=>new Dk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Zf,ep,Lk(t)),Ot(Zf,ep,"esm2017")}/**
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
 */const Fk=5*60,Uk=d_("authIdTokenMaxAge")||Fk;let tp=null;const jk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Uk)return;const i=n==null?void 0:n.token;tp!==i&&(tp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zk(t=kd()){const e=ra(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mC(t,{popupRedirectResolver:Ok,persistence:[$C,AC,G_]}),r=d_("authTokenSyncURL");if(r){const s=jk(r);xC(n,s,()=>s(n.currentUser)),IC(n,o=>s(o))}const i=a_("auth");return i&&_C(n,`http://${i}`),n}Mk("Browser");var Bk="firebase",Wk="9.23.0";/**
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
 */Ot(Bk,Wk,"app");var np={};const rp="@firebase/database",ip="0.14.4";/**
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
 */let Z_="";function Hk(t){Z_=t}/**
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
 */class $k{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ss(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Vk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ev=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $k(e)}}catch{}return new Vk},Xn=ev("localStorage"),Gk=ev("sessionStorage");/**
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
 */const Kr=new Sd("@firebase/database"),qk=function(){let t=1;return function(){return t++}}(),tv=function(t){const e=OE(t),n=new NE;n.update(e);const r=n.digest();return wd.encodeByteArray(r)},Vs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Vs.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let Ji=null,sp=!0;const Kk=function(t,e){C(!0,"Can't turn on custom loggers persistently."),Kr.logLevel=K.VERBOSE,Ji=Kr.log.bind(Kr)},Ce=function(...t){if(sp===!0&&(sp=!1,Ji===null&&Gk.get("logging_enabled")===!0&&Kk()),Ji){const e=Vs.apply(null,t);Ji(e)}},Gs=function(t){return function(...e){Ce(t,...e)}},hc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vs(...t);Kr.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${Vs(...t)}`;throw Kr.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+Vs(...t);Kr.warn(e)},Qk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},la=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Yk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},si="[MIN_NAME]",dr="[MAX_NAME]",vr=function(t,e){if(t===e)return 0;if(t===si||e===dr)return-1;if(e===si||t===dr)return 1;{const n=op(t),r=op(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Xk=function(t,e){return t===e?0:t<e?-1:1},Ai=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Od=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=Od(t[e[r]]);return n+="}",n},nv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const rv=function(t){C(!la(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Jk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Zk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const tT=new RegExp("^-?(0*)\\d{1,10}$"),nT=-2147483648,rT=2147483647,op=function(t){if(tT.test(t)){const e=Number(t);if(e>=nT&&e<=rT)return e}return null},vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},iT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class sT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class oT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Wo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wo.OWNER="owner";/**
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
 */const Dd="5",iv="v",sv="s",ov="r",lv="f",av=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uv="ls",cv="p",fc="ac",dv="websocket",hv="long_polling";/**
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
 */class fv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pv(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===dv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lT(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class aT{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hE(this.counters_)}}/**
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
 */const tu={},nu={};function Ld(t){const e=t.toString();return tu[e]||(tu[e]=new aT),tu[e]}function uT(t,e){const n=t.toString();return nu[n]||(nu[n]=e()),nu[n]}/**
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
 */class cT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&vi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const lp="start",dT="close",hT="pLPCommand",fT="pRTLPCB",mv="id",gv="pw",_v="ser",pT="cb",mT="seg",gT="ts",_T="d",vT="dframe",vv=1870,yv=30,yT=vv-yv,wT=25e3,ET=3e4;class jr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gs(e),this.stats_=Ld(n),this.urlFn=a=>(this.appCheckToken&&(a[fc]=this.appCheckToken),pv(n,hv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ET)),Yk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Md((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lp)this.id=l,this.password=a;else if(o===dT)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[lp]="t",r[_v]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[iv]=Dd,this.transportSessionId&&(r[sv]=this.transportSessionId),this.lastSessionId&&(r[uv]=this.lastSessionId),this.applicationId&&(r[cv]=this.applicationId),this.appCheckToken&&(r[fc]=this.appCheckToken),typeof location<"u"&&location.hostname&&av.test(location.hostname)&&(r[ov]=lv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jr.forceAllow_=!0}static forceDisallow(){jr.forceDisallow_=!0}static isAvailable(){return jr.forceAllow_?!0:!jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Jk()&&!Zk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=o_(n),i=nv(r,yT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[vT]="t",r[mv]=e,r[gv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Md{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qk(),window[hT+this.uniqueCallbackIdentifier]=e,window[fT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Md.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mv]=this.myID,e[gv]=this.myPW,e[_v]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yv+r.length<=vv;){const o=this.pendingSegs.shift();r=r+"&"+mT+i+"="+o.seg+"&"+gT+i+"="+o.ts+"&"+_T+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(wT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const ST=16384,CT=45e3;let kl=null;typeof MozWebSocket<"u"?kl=MozWebSocket:typeof WebSocket<"u"&&(kl=WebSocket);class vt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gs(this.connId),this.stats_=Ld(n),this.connURL=vt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[iv]=Dd,typeof location<"u"&&location.hostname&&av.test(location.hostname)&&(o[ov]=lv),n&&(o[sv]=n),r&&(o[uv]=r),i&&(o[fc]=i),s&&(o[cv]=s),pv(e,dv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let r;EE(),this.mySock=new kl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&kl!==null&&!vt.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ss(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=nv(n,ST);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
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
 */class Is{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[jr,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=vt&&vt.isAvailable();let r=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const i=this.transports_=[];for(const s of Is.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Is.globalTransportInitialized_=!1;/**
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
 */const kT=6e4,TT=5e3,IT=10*1024,xT=100*1024,ru="t",ap="d",RT="s",up="r",NT="e",cp="o",dp="a",hp="n",fp="p",bT="h";class PT{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gs("c:"+this.id+":"),this.transportManager_=new Is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ru in e){const n=e[ru];n===dp?this.upgradeIfSecondaryHealthy_():n===up?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ai("t",e),r=Ai("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ai("t",e),r=Ai("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ai(ru,e);if(ap in e){const r=e[ap];if(n===bT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===hp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===RT?this.onConnectionShutdown_(r):n===up?this.onReset_(r):n===NT?hc("Server Error: "+r):n===cp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dd!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class wv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ev{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Tl extends Ev{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ed()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tl}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const pp=32,mp=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new q("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function Fd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Sv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return je(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function OT(t,e){const n=xs(t,0),r=xs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=vr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Ud(t,e){if(Mn(t)!==Mn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mn(t)>Mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class DT{constructor(e,n){this.errorPrefix_=n,this.parts_=xs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=na(this.parts_[r]);Cv(this)}}function LT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=na(e),Cv(t)}function MT(t){const e=t.parts_.pop();t.byteLength_-=na(e),t.parts_.length>0&&(t.byteLength_-=1)}function Cv(t){if(t.byteLength_>mp)throw new Error(t.errorPrefix_+"has a key path longer than "+mp+" bytes ("+t.byteLength_+").");if(t.parts_.length>pp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pp+") or object contains a cycle "+qn(t))}function qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class jd extends Ev{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jd}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Oi=1e3,FT=60*5*1e3,gp=30*1e3,UT=1.3,jT=3e4,zT="server_kill",_p=3;class Gt extends wv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Gt.nextPersistentConnectionId_++,this.log_=Gs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oi,this.maxReconnectDelay_=FT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Nt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Gt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const r=ri(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||RE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hc("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jT&&(this.reconnectDelay_=Oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*UT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Gt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new PT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Be(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(zT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Be(d),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ml(this.interruptReasons_)&&(this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Od(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_p&&(this.reconnectDelay_=gp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Z_.replace(/\./g,"-")]=1,Ed()?e["framework.cordova"]=1:f_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tl.getInstance().currentlyOnline();return ml(this.interruptReasons_)&&e}}Gt.nextPersistentConnectionId_=0;Gt.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(si,e),i=new z(si,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
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
 */let Eo;class kv extends aa{static get __EMPTY_NODE(){return Eo}static set __EMPTY_NODE(e){Eo=e}compare(e,n){return vr(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(dr,Eo)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Eo)}toString(){return".key"}}const Qr=new kv;/**
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
 */class So{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??qe.EMPTY_NODE,this.right=s??qe.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class BT{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new So(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new So(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new So(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new So(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new BT;/**
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
 */function WT(t,e){return vr(t.name,e.name)}function zd(t,e){return vr(t,e)}/**
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
 */let pc;function HT(t){pc=t}const Tv=function(t){return typeof t=="number"?"number:"+rv(t):"string:"+t},Iv=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else C(t===pc||t.isEmpty(),"priority of unexpected type.");C(t===pc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let vp;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Iv(this.priorityNode_)}static set __childrenNodeConstructor(e){vp=e}static get __childrenNodeConstructor(){return vp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:U(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||Mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=rv(this.value_):e+=this.value_,this.lazyHash_=tv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let xv,Rv;function $T(t){xv=t}function VT(t){Rv=t}class GT extends aa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(dr,new we("[PRIORITY-POST]",Rv))}makePost(e,n){const r=xv(e);return new z(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new GT;/**
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
 */const qT=Math.log(2);class KT{constructor(e){const n=s=>parseInt(Math.log(s)/qT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Il=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new Se(h,d.node,Se.BLACK,null,null);{const m=parseInt(c/2,10)+a,v=i(a,m),w=i(m+1,u);return d=t[m],h=n?n(d):d,new Se(h,d.node,Se.BLACK,v,w)}},s=function(a){let u=null,c=null,d=t.length;const h=function(v,w){const T=d-v,g=d;d-=v;const f=i(T+1,g),_=t[T],E=n?n(_):_;m(new Se(E,_.node,w,null,f))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),T=Math.pow(2,a.count-(v+1));w?h(T,Se.BLACK):(h(T,Se.BLACK),h(T,Se.RED))}return c},o=new KT(t.length),l=s(o);return new qe(r||e,l)};/**
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
 */let iu;const Cr={};class $t{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Cr&&se,"ChildrenNode.ts has not been loaded"),iu=iu||new $t({".priority":Cr},{".priority":se}),iu}get(e){const n=ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Qr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Il(r,e.getCompare()):l=Cr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new $t(c,u)}addToIndexes(e,n){const r=gl(this.indexes_,(i,s)=>{const o=ri(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Il(l,o.getCompare())}else return Cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new $t(r,this.indexSet_)}removeFromIndexes(e,n){const r=gl(this.indexes_,i=>{if(i===Cr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new $t(r,this.indexSet_)}}/**
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
 */let Di;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Iv(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Di||(Di=new O(new qe(zd),null,$t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Di}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Di:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Di:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{C(U(e)!==".priority"||Mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tv(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qs?-1:0}withIndex(e){if(e===Qr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QT extends O{constructor(){super(new qe(zd),O.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const qs=new QT;Object.defineProperties(z,{MIN:{value:new z(si,O.EMPTY_NODE)},MAX:{value:new z(dr,qs)}});kv.__EMPTY_NODE=O.EMPTY_NODE;we.__childrenNodeConstructor=O;HT(qs);VT(qs);/**
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
 */const YT=!0;function ce(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,ce(e))}if(!(t instanceof Array)&&YT){const n=[];let r=!1;if(Te(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ce(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=Il(n,WT,o=>o.name,zd);if(r){const o=Il(n,se.getCompare());return new O(s,ce(e),new $t({".priority":o},{".priority":se}))}else return new O(s,ce(e),$t.Default)}else{let n=O.EMPTY_NODE;return Te(t,(r,i)=>{if(Mt(t,r)&&r.substring(0,1)!=="."){const s=ce(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ce(e))}}$T(ce);/**
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
 */class XT extends aa{constructor(e){super(),this.indexPath_=e,C(!j(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}makePost(e,n){const r=ce(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,qs);return new z(dr,e)}toString(){return xs(this.indexPath_,0).join("/")}}/**
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
 */class JT extends aa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=ce(e);return new z(n,r)}toString(){return".value"}}const ZT=new JT;/**
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
 */function Nv(t){return{type:"value",snapshotNode:t}}function oi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function eI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Rs(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(oi(n,r)):o.trackChildChange(Ns(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(Rs(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ns(i,s,o))}else r.trackChildChange(oi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class bs{constructor(e){this.indexedFilter_=new Bd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bs.getStartPost_(e),this.endPost_=bs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,l)=>{s.matches(new z(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class tI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new z(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,a);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Ns(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Rs(n,d));const w=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(oi(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Rs(u.name,u.node)),s.trackChildChange(oi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
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
 */class Wd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:si}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Wd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nI(t){return t.loadsAllData()?new Bd(t.getIndex()):t.hasLimit()?new tI(t):new bs(t)}function yp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===ZT?n="$value":t.index_===Qr?n="$key":(C(t.index_ instanceof XT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
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
 */class xl extends wv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Gs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=xl.getListenId_(e,r),l={};this.listens_[o]=l;const a=yp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ri(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=xl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=yp(e._queryParams),r=e._path.toString(),i=new Nt;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ss(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class rI{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Rl(){return{value:null,children:new Map}}function yi(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,Rl());const i=t.children.get(r);e=Q(e),yi(i,e,n)}}function mc(t,e){if(j(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(se,(r,i)=>{yi(t,new q(r),i)}),mc(t,e)}}else if(t.children.size>0){const n=U(e);return e=Q(e),t.children.has(n)&&mc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function gc(t,e,n){t.value!==null?n(e,t.value):iI(t,(r,i)=>{const s=new q(e.toString()+"/"+r);gc(i,s,n)})}function iI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class sI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Ep=10*1e3,oI=30*1e3,lI=5*60*1e3;class aI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sI(e);const r=Ep+(oI-Ep)*Math.random();Zi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&Mt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*lI))}}/**
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
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function Hd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Nl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yt.ACK_USER_WRITE,this.source=Hd()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new Nl(V(),n,this.revert)}}else return C(U(this.path)===e,"operationForChild called for unrelated child."),new Nl(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ps{constructor(e,n){this.source=e,this.path=n,this.type=yt.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Ps(this.source,V()):new Ps(this.source,Q(this.path))}}/**
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
 */class hr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yt.OVERWRITE}operationForChild(e){return j(this.path)?new hr(this.source,V(),this.snap.getImmediateChild(e)):new hr(this.source,Q(this.path),this.snap)}}/**
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
 */class li{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yt.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new hr(this.source,V(),n.value):new li(this.source,V(),n)}else return C(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new li(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class uI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(eI(o.childName,o.snapshotNode))}),Li(t,i,"child_removed",e,r,n),Li(t,i,"child_added",e,r,n),Li(t,i,"child_moved",s,r,n),Li(t,i,"child_changed",e,r,n),Li(t,i,"value",e,r,n),i}function Li(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>hI(t,l,a)),o.forEach(l=>{const a=dI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function dI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hI(t,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ua(t,e){return{eventCache:t,serverCache:e}}function es(t,e,n,r){return ua(new Fn(e,n,r),t.serverCache)}function bv(t,e,n,r){return ua(t.eventCache,new Fn(e,n,r))}function bl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let su;const fI=()=>(su||(su=new qe(Xk)),su);class Y{constructor(e,n=fI()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return Te(e,(r,i)=>{n=n.set(new q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(j(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:ie(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new Y(null)}}set(e,n){if(j(e))return new Y(n,this.children);{const r=U(e),s=(this.children.get(r)||new Y(null)).set(Q(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(j(e))return n;{const r=U(e),s=(this.children.get(r)||new Y(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),ie(n,i),r):new Y(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class St{constructor(e){this.writeTree_=e}static empty(){return new St(new Y(null))}}function ts(t,e,n){if(j(e))return new St(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=je(i,e);return s=s.updateChild(o,n),new St(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new St(s)}}}function _c(t,e,n){let r=t;return Te(n,(i,s)=>{r=ts(r,ie(e,i),s)}),r}function Sp(t,e){if(j(e))return St.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new St(n)}}function vc(t,e){return yr(t,e)!=null}function yr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Cp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function bn(t,e){if(j(e))return t;{const n=yr(t,e);return n!=null?new St(new Y(n)):new St(t.writeTree_.subtree(e))}}function yc(t){return t.writeTree_.isEmpty()}function ai(t,e){return Pv(V(),t.writeTree_,e)}function Pv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Pv(ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ie(t,".priority"),r)),n}}/**
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
 */function ca(t,e){return Lv(e,t)}function pI(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ts(t.visibleWrites,e,n)),t.lastWriteId=r}function mI(t,e,n,r){C(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=_c(t.visibleWrites,e,n),t.lastWriteId=r}function gI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function _I(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&vI(l,r.path)?i=!1:at(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return yI(t),!0;if(r.snap)t.visibleWrites=Sp(t.visibleWrites,r.path);else{const l=r.children;Te(l,a=>{t.visibleWrites=Sp(t.visibleWrites,ie(r.path,a))})}return!0}else return!1}function vI(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(ie(t.path,n),e))return!0;return!1}function yI(t){t.visibleWrites=Av(t.allWrites,wI,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function wI(t){return t.visible}function Av(t,e,n){let r=St.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)at(n,o)?(l=je(n,o),r=ts(r,l,s.snap)):at(o,n)&&(l=je(o,n),r=ts(r,V(),s.snap.getChild(l)));else if(s.children){if(at(n,o))l=je(n,o),r=_c(r,l,s.children);else if(at(o,n))if(l=je(o,n),j(l))r=_c(r,V(),s.children);else{const a=ri(s.children,U(l));if(a){const u=a.getChild(Q(l));r=ts(r,V(),u)}}}else throw gi("WriteRecord should have .snap or .children")}}return r}function Ov(t,e,n,r,i){if(!r&&!i){const s=yr(t.visibleWrites,e);if(s!=null)return s;{const o=bn(t.visibleWrites,e);if(yc(o))return n;if(n==null&&!vc(o,V()))return null;{const l=n||O.EMPTY_NODE;return ai(o,l)}}}else{const s=bn(t.visibleWrites,e);if(!i&&yc(s))return n;if(!i&&n==null&&!vc(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(at(u.path,e)||at(e,u.path))},l=Av(t.allWrites,o,e),a=n||O.EMPTY_NODE;return ai(l,a)}}}function EI(t,e,n){let r=O.EMPTY_NODE;const i=yr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=bn(t.visibleWrites,e);return n.forEachChild(se,(o,l)=>{const a=ai(bn(s,new q(o)),l);r=r.updateImmediateChild(o,a)}),Cp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=bn(t.visibleWrites,e);return Cp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function SI(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ie(e,n);if(vc(t.visibleWrites,s))return null;{const o=bn(t.visibleWrites,s);return yc(o)?i.getChild(n):ai(o,i.getChild(n))}}function CI(t,e,n,r){const i=ie(e,n),s=yr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=bn(t.visibleWrites,i);return ai(o,r.getNode().getImmediateChild(n))}else return null}function kI(t,e){return yr(t.visibleWrites,e)}function TI(t,e,n,r,i,s,o){let l;const a=bn(t.visibleWrites,e),u=yr(a,V());if(u!=null)l=u;else if(n!=null)l=ai(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function II(){return{visibleWrites:St.empty(),allWrites:[],lastWriteId:-1}}function Pl(t,e,n,r){return Ov(t.writeTree,t.treePath,e,n,r)}function Gd(t,e){return EI(t.writeTree,t.treePath,e)}function kp(t,e,n,r){return SI(t.writeTree,t.treePath,e,n,r)}function Al(t,e){return kI(t.writeTree,ie(t.treePath,e))}function xI(t,e,n,r,i,s){return TI(t.writeTree,t.treePath,e,n,r,i,s)}function qd(t,e,n){return CI(t.writeTree,t.treePath,e,n)}function Dv(t,e){return Lv(ie(t.treePath,e),t.writeTree)}function Lv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class RI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ns(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Rs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,oi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ns(r,e.snapshotNode,i.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class NI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Mv=new NI;class Kd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fr(this.viewCache_),s=xI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function bI(t){return{filter:t}}function PI(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function AI(t,e,n,r,i){const s=new RI;let o,l;if(n.type===yt.OVERWRITE){const u=n;u.source.fromUser?o=wc(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=Ol(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===yt.MERGE){const u=n;u.source.fromUser?o=DI(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ec(t,e,u.path,u.children,r,i,l,s))}else if(n.type===yt.ACK_USER_WRITE){const u=n;u.revert?o=FI(t,e,u.path,r,i,s):o=LI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===yt.LISTEN_COMPLETE)o=MI(t,e,n.path,r,s);else throw gi("Unknown operation type: "+n.type);const a=s.getChanges();return OI(e,o,a),{viewCache:o,changes:a}}function OI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=bl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Nv(bl(e)))}}function Fv(t,e,n,r,i,s){const o=e.eventCache;if(Al(r,n)!=null)return e;{let l,a;if(j(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=fr(e),c=u instanceof O?u:O.EMPTY_NODE,d=Gd(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Pl(r,fr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){C(Mn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=kp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=Q(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=kp(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=qd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return es(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Ol(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),m,null)}else{const m=U(n);if(!a.isCompleteForPath(n)&&Mn(n)>1)return e;const v=Q(n),T=a.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(a.getNode(),T):u=c.updateChild(a.getNode(),m,T,v,Mv,null)}const d=bv(e,u,a.isFullyInitialized()||j(n),c.filtersNodes()),h=new Kd(i,d,s);return Fv(t,d,n,i,h,l)}function wc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Kd(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=es(e,u,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=es(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Q(n),m=l.getNode().getImmediateChild(d);let v;if(j(h))v=r;else{const w=c.getCompleteChild(d);w!=null?Fd(h)===".priority"&&w.getChild(Sv(h)).isEmpty()?v=w:v=w.updateChild(h,r):v=O.EMPTY_NODE}if(m.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),d,v,h,c,o);a=es(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Tp(t,e){return t.eventCache.isCompleteForChild(e)}function DI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ie(n,a);Tp(e,U(c))&&(l=wc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ie(n,a);Tp(e,U(c))||(l=wc(t,l,c,u,i,s,o))}),l}function Ip(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ec(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;j(n)?u=r:u=new Y(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=Ip(t,m,h);a=Ol(t,a,new q(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),w=Ip(t,v,h);a=Ol(t,a,new q(d),w,i,s,o,l)}}),a}function LI(t,e,n,r,i,s,o){if(Al(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ol(t,e,n,a.getNode().getChild(n),i,s,l,o);if(j(n)){let u=new Y(null);return a.getNode().forEachChild(Qr,(c,d)=>{u=u.set(new q(c),d)}),Ec(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((c,d)=>{const h=ie(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Ec(t,e,n,u,i,s,l,o)}}function MI(t,e,n,r,i){const s=e.serverCache,o=bv(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return Fv(t,o,n,r,Mv,i)}function FI(t,e,n,r,i,s){let o;if(Al(r,n)!=null)return e;{const l=new Kd(r,e,i),a=e.eventCache.getNode();let u;if(j(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Pl(r,fr(e));else{const d=e.serverCache.getNode();C(d instanceof O,"serverChildren would be complete if leaf node"),c=Gd(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=U(n);let d=qd(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,Q(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,O.EMPTY_NODE,Q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pl(r,fr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Al(r,V())!=null,es(e,u,o,t.filter.filtersNodes())}}/**
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
 */class UI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Bd(r.getIndex()),s=nI(r);this.processor_=bI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),c=new Fn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Fn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ua(d,c),this.eventGenerator_=new uI(this.query_)}get query(){return this.query_}}function jI(t){return t.viewCache_.serverCache.getNode()}function zI(t){return bl(t.viewCache_)}function BI(t,e){const n=fr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function xp(t){return t.eventRegistrations_.length===0}function WI(t,e){t.eventRegistrations_.push(e)}function Rp(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Np(t,e,n,r){e.type===yt.MERGE&&e.source.queryId!==null&&(C(fr(t.viewCache_),"We should always have a full cache before handling merges"),C(bl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=AI(t.processor_,i,e,n,r);return PI(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Uv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function HI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push(oi(s,o))}),n.isFullyInitialized()&&r.push(Nv(n.getNode())),Uv(t,r,n.getNode(),e)}function Uv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return cI(t.eventGenerator_,e,n,i)}/**
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
 */let Dl;class jv{constructor(){this.views=new Map}}function $I(t){C(!Dl,"__referenceConstructor has already been defined"),Dl=t}function VI(){return C(Dl,"Reference.ts has not been loaded"),Dl}function GI(t){return t.views.size===0}function Qd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),Np(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Np(o,e,n,r));return s}}function zv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Pl(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=Gd(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=ua(new Fn(l,a,!1),new Fn(r,i,!1));return new UI(e,u)}return o}function qI(t,e,n,r,i,s){const o=zv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),WI(o,n),HI(o,n)}function KI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Un(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Rp(u,n,r)),xp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Rp(a,n,r)),xp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Un(t)&&s.push(new(VI())(e._repo,e._path)),{removed:s,events:o}}function Bv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pn(t,e){let n=null;for(const r of t.views.values())n=n||BI(r,e);return n}function Wv(t,e){if(e._queryParams.loadsAllData())return da(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Hv(t,e){return Wv(t,e)!=null}function Un(t){return da(t)!=null}function da(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ll;function QI(t){C(!Ll,"__referenceConstructor has already been defined"),Ll=t}function YI(){return C(Ll,"Reference.ts has not been loaded"),Ll}let XI=1;class bp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=II(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $v(t,e,n,r,i){return pI(t.pendingWriteTree_,e,n,r,i),i?wi(t,new hr(Hd(),e,n)):[]}function JI(t,e,n,r){mI(t.pendingWriteTree_,e,n,r);const i=Y.fromObject(n);return wi(t,new li(Hd(),e,i))}function yn(t,e,n=!1){const r=gI(t.pendingWriteTree_,e);if(_I(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(V(),!0):Te(r.children,o=>{s=s.set(new q(o),!0)}),wi(t,new Nl(r.path,s,n))}else return[]}function Ks(t,e,n){return wi(t,new hr($d(),e,n))}function ZI(t,e,n){const r=Y.fromObject(n);return wi(t,new li($d(),e,r))}function e1(t,e){return wi(t,new Ps($d(),e))}function t1(t,e,n){const r=Xd(t,n);if(r){const i=Jd(r),s=i.path,o=i.queryId,l=je(s,e),a=new Ps(Vd(o),l);return Zd(t,s,a)}else return[]}function Ml(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Hv(o,e))){const a=KI(o,e,n,r);GI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,m)=>Un(m));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=i1(h);for(let v=0;v<m.length;++v){const w=m[v],T=w.query,g=Kv(t,w);t.listenProvider_.startListening(ns(T),As(t,T),g.hashFn,g.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(ns(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(ha(h));t.listenProvider_.stopListening(ns(h),m)}))}s1(t,u)}return l}function Vv(t,e,n,r){const i=Xd(t,r);if(i!=null){const s=Jd(i),o=s.path,l=s.queryId,a=je(o,e),u=new hr(Vd(l),a,n);return Zd(t,o,u)}else return[]}function n1(t,e,n,r){const i=Xd(t,r);if(i){const s=Jd(i),o=s.path,l=s.queryId,a=je(o,e),u=Y.fromObject(n),c=new li(Vd(l),a,u);return Zd(t,o,c)}else return[]}function Sc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const v=je(h,i);s=s||Pn(m,v),o=o||Un(m)});let l=t.syncPointTree_.get(i);l?(o=o||Un(l),s=s||Pn(l,V())):(l=new jv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const w=Pn(v,V());w&&(s=s.updateImmediateChild(m,w))}));const u=Hv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=ha(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=o1();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const c=ca(t.pendingWriteTree_,i);let d=qI(l,e,n,c,s,a);if(!u&&!o&&!r){const h=Wv(l,e);d=d.concat(l1(t,e,h))}return d}function Yd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=je(o,e),u=Pn(l,a);if(u)return u});return Ov(i,e,s,n,!0)}function r1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=je(u,n);r=r||Pn(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Pn(i,V()):(i=new jv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Fn(r,!0,!1):null,l=ca(t.pendingWriteTree_,e._path),a=zv(i,e,l,s?o.getNode():O.EMPTY_NODE,s);return zI(a)}function wi(t,e){return Gv(e,t.syncPointTree_,null,ca(t.pendingWriteTree_,V()))}function Gv(t,e,n,r){if(j(t.path))return qv(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Pn(i,V()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Dv(r,o);s=s.concat(Gv(l,a,u,c))}return i&&(s=s.concat(Qd(i,t,r,n))),s}}function qv(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Pn(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Dv(r,o),c=t.operationForChild(o);c&&(s=s.concat(qv(c,l,a,u)))}),i&&(s=s.concat(Qd(i,t,r,n))),s}function Kv(t,e){const n=e.query,r=As(t,n);return{hashFn:()=>(jI(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?t1(t,n._path,r):e1(t,n._path);{const s=eT(i,n);return Ml(t,n,null,s)}}}}function As(t,e){const n=ha(e);return t.queryToTagMap.get(n)}function ha(t){return t._path.toString()+"$"+t._queryIdentifier}function Xd(t,e){return t.tagToQueryMap.get(e)}function Jd(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function Zd(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=ca(t.pendingWriteTree_,e);return Qd(r,n,i,null)}function i1(t){return t.fold((e,n,r)=>{if(n&&Un(n))return[da(n)];{let i=[];return n&&(i=Bv(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function ns(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(YI())(t._repo,t._path):t}function s1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ha(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function o1(){return XI++}function l1(t,e,n){const r=e._path,i=As(t,e),s=Kv(t,n),o=t.listenProvider_.startListening(ns(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!Un(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!j(u)&&c&&Un(c))return[da(c).query];{let h=[];return c&&(h=h.concat(Bv(c).map(m=>m.query))),Te(d,(m,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(ns(c),As(t,c))}}return o}/**
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
 */class eh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new eh(n)}node(){return this.node_}}class th{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new th(this.syncTree_,n)}node(){return Yd(this.syncTree_,this.path_)}}const a1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pp=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return u1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return c1(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},u1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},c1=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Qv=function(t,e,n,r){return nh(e,new th(n,t),r)},Yv=function(t,e,n){return nh(t,new eh(e),n)};function nh(t,e,n){const r=t.getPriority().val(),i=Pp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Pp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new we(l,ce(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(se,(l,a)=>{const u=nh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class rh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ih(t,e){let n=e instanceof q?e:new q(e),r=t,i=U(n);for(;i!==null;){const s=ri(r.node.children,i)||{children:{},childCount:0};r=new rh(i,r,s),n=Q(n),i=U(n)}return r}function Ei(t){return t.node.value}function Xv(t,e){t.node.value=e,Cc(t)}function Jv(t){return t.node.childCount>0}function d1(t){return Ei(t)===void 0&&!Jv(t)}function fa(t,e){Te(t.node.children,(n,r)=>{e(new rh(n,t,r))})}function Zv(t,e,n,r){n&&e(t),fa(t,i=>{Zv(i,e,!0)})}function h1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Qs(t){return new q(t.parent===null?t.name:Qs(t.parent)+"/"+t.name)}function Cc(t){t.parent!==null&&f1(t.parent,t.name,t)}function f1(t,e,n){const r=d1(n),i=Mt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cc(t))}/**
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
 */const p1=/[\[\].#$\/\u0000-\u001F\u007F]/,m1=/[\[\].#$\u0000-\u001F\u007F]/,ou=10*1024*1024,sh=function(t){return typeof t=="string"&&t.length!==0&&!p1.test(t)},ey=function(t){return typeof t=="string"&&t.length!==0&&!m1.test(t)},g1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ey(t)},ty=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!la(t)||t&&typeof t=="object"&&Mt(t,".sv")},Fl=function(t,e,n,r){r&&e===void 0||pa(ii(t,"value"),e,n)},pa=function(t,e,n){const r=n instanceof q?new DT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qn(r));if(typeof e=="function")throw new Error(t+"contains a function "+qn(r)+" with contents = "+e.toString());if(la(e))throw new Error(t+"contains "+e.toString()+" "+qn(r));if(typeof e=="string"&&e.length>ou/3&&na(e)>ou)throw new Error(t+"contains a string greater than "+ou+" utf8 bytes "+qn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!sh(o)))throw new Error(t+" contains an invalid key ("+o+") "+qn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LT(r,o),pa(t,l,r),MT(r)}),i&&s)throw new Error(t+' contains ".value" child '+qn(r)+" in addition to actual children.")}},_1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=xs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!sh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(OT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&at(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ny=function(t,e,n,r){const i=ii(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,l)=>{const a=new q(o);if(pa(i,l,ie(n,a)),Fd(a)===".priority"&&!ty(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),_1(i,s)},v1=function(t,e,n){if(la(e))throw new Error(ii(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ty(e))throw new Error(ii(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},ry=function(t,e,n,r){if(!ey(n))throw new Error(ii(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},y1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ry(t,e,n)},Jn=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},w1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!g1(n))throw new Error(ii(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class E1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ma(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ud(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function iy(t,e,n){ma(t,n),sy(t,r=>Ud(r,e))}function ht(t,e,n){ma(t,n),sy(t,r=>at(r,e)||at(e,r))}function sy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(S1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function S1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ji&&Ce("event: "+n.toString()),vi(r)}}}/**
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
 */const C1="repo_interrupt",k1=25;class T1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new E1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rl(),this.transactionQueueTree_=new rh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function I1(t,e,n){if(t.stats_=Ld(t.repoInfo_),t.forceRestClient_||iT())t.server_=new xl(t.repoInfo_,(r,i,s,o)=>{Ap(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Op(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Gt(t.repoInfo_,e,(r,i,s,o)=>{Ap(t,r,i,s,o)},r=>{Op(t,r)},r=>{x1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uT(t.repoInfo_,()=>new aI(t.stats_,t.server_)),t.infoData_=new rI,t.infoSyncTree_=new bp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ks(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),oh(t,"connected",!1),t.serverSyncTree_=new bp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);ht(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function oy(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ga(t){return a1({timestamp:oy(t)})}function Ap(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=gl(n,u=>ce(u));o=n1(t.serverSyncTree_,s,a,i)}else{const a=ce(n);o=Vv(t.serverSyncTree_,s,a,i)}else if(r){const a=gl(n,u=>ce(u));o=ZI(t.serverSyncTree_,s,a)}else{const a=ce(n);o=Ks(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ui(t,s)),ht(t.eventQueue_,l,o)}function Op(t,e){oh(t,"connected",e),e===!1&&P1(t)}function x1(t,e){Te(e,(n,r)=>{oh(t,n,r)})}function oh(t,e,n){const r=new q("/.info/"+e),i=ce(n);t.infoData_.updateSnapshot(r,i);const s=Ks(t.infoSyncTree_,r,i);ht(t.eventQueue_,r,s)}function lh(t){return t.nextWriteId_++}function R1(t,e,n){const r=r1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ce(i).withIndex(e._queryParams.getIndex());Sc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ks(t.serverSyncTree_,e._path,s);else{const l=As(t.serverSyncTree_,e);o=Vv(t.serverSyncTree_,e._path,s,l)}return ht(t.eventQueue_,e._path,o),Ml(t.serverSyncTree_,e,n,null,!0),s},i=>(Ys(t,"get for query "+me(e)+" failed: "+i),Promise.reject(new Error(i))))}function N1(t,e,n,r,i){Ys(t,"set",{path:e.toString(),value:n,priority:r});const s=ga(t),o=ce(n,r),l=Yd(t.serverSyncTree_,e),a=Yv(o,l,s),u=lh(t),c=$v(t.serverSyncTree_,e,a,u,!0);ma(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const v=h==="ok";v||Be("set at "+e+" failed: "+h);const w=yn(t.serverSyncTree_,u,!v);ht(t.eventQueue_,e,w),jn(t,i,h,m)});const d=uh(t,e);ui(t,d),ht(t.eventQueue_,d,[])}function b1(t,e,n,r){Ys(t,"update",{path:e.toString(),value:n});let i=!0;const s=ga(t),o={};if(Te(n,(l,a)=>{i=!1,o[l]=Qv(ie(e,l),ce(a),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),jn(t,r,"ok",void 0);else{const l=lh(t),a=JI(t.serverSyncTree_,e,o,l);ma(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Be("update at "+e+" failed: "+u);const h=yn(t.serverSyncTree_,l,!d),m=h.length>0?ui(t,e):e;ht(t.eventQueue_,m,h),jn(t,r,u,c)}),Te(n,u=>{const c=uh(t,ie(e,u));ui(t,c)}),ht(t.eventQueue_,e,[])}}function P1(t){Ys(t,"onDisconnectEvents");const e=ga(t),n=Rl();gc(t.onDisconnect_,V(),(i,s)=>{const o=Qv(i,s,t.serverSyncTree_,e);yi(n,i,o)});let r=[];gc(n,V(),(i,s)=>{r=r.concat(Ks(t.serverSyncTree_,i,s));const o=uh(t,i);ui(t,o)}),t.onDisconnect_=Rl(),ht(t.eventQueue_,V(),r)}function A1(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&mc(t.onDisconnect_,e),jn(t,n,r,i)})}function Dp(t,e,n,r){const i=ce(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&yi(t.onDisconnect_,e,i),jn(t,r,s,o)})}function O1(t,e,n,r,i){const s=ce(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,l)=>{o==="ok"&&yi(t.onDisconnect_,e,s),jn(t,i,o,l)})}function D1(t,e,n,r){if(ml(n)){Ce("onDisconnect().update() called with empty data.  Don't do anything."),jn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Te(n,(o,l)=>{const a=ce(l);yi(t.onDisconnect_,ie(e,o),a)}),jn(t,r,i,s)})}function L1(t,e,n){let r;U(e._path)===".info"?r=Sc(t.infoSyncTree_,e,n):r=Sc(t.serverSyncTree_,e,n),iy(t.eventQueue_,e._path,r)}function ly(t,e,n){let r;U(e._path)===".info"?r=Ml(t.infoSyncTree_,e,n):r=Ml(t.serverSyncTree_,e,n),iy(t.eventQueue_,e._path,r)}function M1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(C1)}function Ys(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function jn(t,e,n,r){e&&vi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ay(t,e,n){return Yd(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function ah(t,e=t.transactionQueueTree_){if(e||_a(t,e),Ei(e)){const n=cy(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&F1(t,Qs(e),n)}else Jv(e)&&fa(e,n=>{ah(t,n)})}function F1(t,e,n){const r=n.map(u=>u.currentWriteId),i=ay(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];C(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=je(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ys(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(yn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_a(t,ih(t.transactionQueueTree_,e)),ah(t,t.transactionQueueTree_),ht(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)vi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Be("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ui(t,e)}},o)}function ui(t,e){const n=uy(t,e),r=Qs(n),i=cy(t,n);return U1(t,i,r),r}function U1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=je(n,a.path);let c=!1,d;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=k1)c=!0,d="maxretry",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=ay(t,a.path,o);a.currentInputSnapshot=h;const m=e[l].update(h.val());if(m!==void 0){pa("transaction failed: Data returned ",m,a.path);let v=ce(m);typeof m=="object"&&m!=null&&Mt(m,".priority")||(v=v.updatePriority(h.getPriority()));const T=a.currentWriteId,g=ga(t),f=Yv(v,h,g);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=lh(t),o.splice(o.indexOf(T),1),i=i.concat($v(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(yn(t.serverSyncTree_,T,!0))}else c=!0,d="nodata",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}_a(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)vi(r[l]);ah(t,t.transactionQueueTree_)}function uy(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Ei(r)===void 0;)r=ih(r,n),e=Q(e),n=U(e);return r}function cy(t,e){const n=[];return dy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function dy(t,e,n){const r=Ei(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fa(e,i=>{dy(t,i,n)})}function _a(t,e){const n=Ei(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Xv(e,n.length>0?n:void 0)}fa(e,r=>{_a(t,r)})}function uh(t,e){const n=Qs(uy(t,e)),r=ih(t.transactionQueueTree_,e);return h1(r,i=>{lu(t,i)}),lu(t,r),Zv(r,i=>{lu(t,i)}),n}function lu(t,e){const n=Ei(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Xv(e,void 0):n.length=s+1,ht(t.eventQueue_,Qs(e),i);for(let o=0;o<r.length;o++)vi(r[o])}}/**
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
 */function j1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function z1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lp=function(t,e){const n=B1(t),r=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Qk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},B1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=j1(t.substring(c,d)));const h=z1(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const Mp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",W1=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Mp.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Mp.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class hy{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class fy{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ch{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class H1{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Nt;return A1(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Jn("OnDisconnect.remove",this._path);const e=new Nt;return Dp(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Jn("OnDisconnect.set",this._path),Fl("OnDisconnect.set",e,this._path,!1);const n=new Nt;return Dp(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Jn("OnDisconnect.setWithPriority",this._path),Fl("OnDisconnect.setWithPriority",e,this._path,!1),v1("OnDisconnect.setWithPriority",n);const r=new Nt;return O1(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Jn("OnDisconnect.update",this._path),ny("OnDisconnect.update",e,this._path);const n=new Nt;return D1(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class dh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:Fd(this._path)}get ref(){return new Ft(this._repo,this._path)}get _queryIdentifier(){const e=wp(this._queryParams),n=Od(e);return n==="{}"?"default":n}get _queryObject(){return wp(this._queryParams)}isEqual(e){if(e=_e(e),!(e instanceof dh))return!1;const n=this._repo===e._repo,r=Ud(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+AT(this._path)}}class Ft extends dh{constructor(e,n){super(e,n,new Wd,!1)}get parent(){const e=Sv(this._path);return e===null?null:new Ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ci{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=di(this.ref,e);return new ci(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ci(i,di(this.ref,r),se)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function W(t,e){return t=_e(t),t._checkNotDeleted("ref"),e!==void 0?di(t._root,e):t._root}function di(t,e){return t=_e(t),U(t._path)===null?y1("child","path",e):ry("child","path",e),new Ft(t._repo,ie(t._path,e))}function $1(t){return t=_e(t),new H1(t._repo,t._path)}function Fp(t,e){t=_e(t),Jn("push",t._path),Fl("push",e,t._path,!0);const n=oy(t._repo),r=W1(n),i=di(t,r),s=di(t,r);let o;return e!=null?o=tt(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function V1(t){return Jn("remove",t._path),tt(t,null)}function tt(t,e){t=_e(t),Jn("set",t._path),Fl("set",e,t._path,!1);const n=new Nt;return N1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function _t(t,e){ny("update",e,t._path);const n=new Nt;return b1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Os(t){t=_e(t);const e=new ch(()=>{}),n=new Xs(e);return R1(t._repo,t,n).then(r=>new ci(r,new Ft(t._repo,t._path),t._queryParams.getIndex()))}class Xs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new hy("value",this,new ci(e.snapshotNode,new Ft(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fy(this,e,n):null}matches(e){return e instanceof Xs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class va{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fy(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const r=di(new Ft(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new hy(e.type,this,new ci(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof va?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function hh(t,e,n,r,i){const s=new ch(n,void 0),o=e==="value"?new Xs(s):new va(e,s);return L1(t._repo,t,o),()=>ly(t._repo,t,o)}function ya(t,e,n,r){return hh(t,"value",e)}function G1(t,e,n,r){return hh(t,"child_added",e)}function q1(t,e,n,r){return hh(t,"child_changed",e)}function hi(t,e,n){let r=null;const i=n?new ch(n):null;e==="value"?r=new Xs(i):e&&(r=new va(e,i)),ly(t._repo,t,r)}$I(Ft);QI(Ft);/**
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
 */const K1="FIREBASE_DATABASE_EMULATOR_HOST",kc={};let Q1=!1;function Y1(t,e,n,r){t.repoInfo_=new fv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function X1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lp(s,i),l=o.repoInfo,a;typeof process<"u"&&np&&(a=np[K1]),a?(s=`http://${a}?ns=${l.namespace}`,o=Lp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new oT(t.name,t.options,e);w1("Invalid Firebase Database URL",o),j(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Z1(l,t,u,new sT(t.name,n));return new ex(c,t)}function J1(t,e){const n=kc[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),M1(t),delete n[t.key]}function Z1(t,e,n,r){let i=kc[e.name];i||(i={},kc[e.name]=i);let s=i[t.toURLString()];return s&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new T1(t,Q1,n,r),i[t.toURLString()]=s,s}class ex{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(I1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ft(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(J1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function tx(t=kd(),e){const n=ra(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=u_("database");r&&nx(n,...r)}return n}function nx(t,e,n,r={}){t=_e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&en("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Wo(Wo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:h_(r.mockUserToken,t.app.options.projectId);s=new Wo(o)}Y1(i,e,n,s)}/**
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
 */function rx(t){Hk(_r),ur(new Dn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return X1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ot(rp,ip,t),Ot(rp,ip,"esm2017")}Gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rx();/**
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
 */const py="firebasestorage.googleapis.com",my="storageBucket",ix=2*60*1e3,sx=10*60*1e3,ox=1e3;/**
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
 */class ae extends nn{constructor(e,n,r=0){super(au(e),`Firebase Storage: ${n} (${au(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return au(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ee;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ee||(ee={}));function au(t){return"storage/"+t}function fh(){const t="An unknown error occurred, please check the error payload for server response.";return new ae(ee.UNKNOWN,t)}function lx(t){return new ae(ee.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ax(t){return new ae(ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ux(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ae(ee.UNAUTHENTICATED,t)}function cx(){return new ae(ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function dx(t){return new ae(ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function gy(){return new ae(ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _y(){return new ae(ee.CANCELED,"User canceled the upload/download.")}function hx(t){return new ae(ee.INVALID_URL,"Invalid URL '"+t+"'.")}function fx(t){return new ae(ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function px(){return new ae(ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+my+"' property when initializing the app?")}function vy(){return new ae(ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mx(){return new ae(ee.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function gx(){return new ae(ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _x(t){return new ae(ee.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Tc(t){return new ae(ee.INVALID_ARGUMENT,t)}function yy(){return new ae(ee.APP_DELETED,"The Firebase app was deleted.")}function vx(t){return new ae(ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function rs(t,e){return new ae(ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Mi(t){throw new ae(ee.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ze{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ze.makeFromUrl(e,n)}catch{return new Ze(e,"")}if(r.path==="")return r;throw fx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},w=n===py?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",g=new RegExp(`^https?://${w}/${i}/${T}`,"i"),_=[{regex:l,indices:a,postModify:s},{regex:m,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<_.length;E++){const k=_[E],I=k.regex.exec(e);if(I){const x=I[k.indices.bucket];let y=I[k.indices.path];y||(y=""),r=new Ze(x,y),k.postModify(r);break}}if(r==null)throw hx(e);return r}}class yx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function wx(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function d(T){i=setTimeout(()=>{i=null,t(m,a())},T)}function h(){s&&clearTimeout(s)}function m(T,...g){if(u){h();return}if(T){h(),c.call(null,T,...g);return}if(a()||o){h(),c.call(null,T,...g);return}r<64&&(r*=2);let _;l===1?(l=2,_=0):_=(r+Math.random())*1e3,d(_)}let v=!1;function w(T){v||(v=!0,h(),!u&&(i!==null?(T||(l=2),clearTimeout(i),d(0)):T||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function Ex(t){t(!1)}/**
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
 */function Sx(t){return t!==void 0}function Cx(t){return typeof t=="function"}function kx(t){return typeof t=="object"&&!Array.isArray(t)}function wa(t){return typeof t=="string"||t instanceof String}function Up(t){return ph()&&t instanceof Blob}function ph(){return typeof Blob<"u"&&!vE()}function jp(t,e,n,r){if(r<e)throw Tc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Tc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Js(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function wy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function Ey(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Tx{constructor(e,n,r,i,s,o,l,a,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Co(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===nr.NO_ERROR,a=s.getStatus();if(!l||Ey(a,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===nr.ABORT;r(!1,new Co(!1,null,c));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new Co(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());Sx(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=fh();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?yy():_y();o(a)}else{const a=gy();o(a)}};this.canceled_?n(!1,new Co(!1,null,!0)):this.backoffId_=wx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ex(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Co{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Ix(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Rx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Nx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bx(t,e,n,r,i,s,o=!0){const l=wy(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return Rx(u,e),Ix(u,n),xx(u,s),Nx(u,r),new Tx(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Px(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ax(...t){const e=Px();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ph())return new Blob(t);throw new ae(ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ox(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Dx(t){if(typeof atob>"u")throw _x("base-64");return atob(t)}/**
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
 */const bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class uu{constructor(e,n){this.data=e,this.contentType=n||null}}function Lx(t,e){switch(t){case bt.RAW:return new uu(Sy(e));case bt.BASE64:case bt.BASE64URL:return new uu(Cy(t,e));case bt.DATA_URL:return new uu(Fx(e),Ux(e))}throw fh()}function Sy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Mx(t){let e;try{e=decodeURIComponent(t)}catch{throw rs(bt.DATA_URL,"Malformed data URL.")}return Sy(e)}function Cy(t,e){switch(t){case bt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw rs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case bt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw rs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Dx(e)}catch(i){throw i.message.includes("polyfill")?i:rs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ky{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw rs(bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=jx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Fx(t){const e=new ky(t);return e.base64?Cy(bt.BASE64,e.rest):Mx(e.rest)}function Ux(t){return new ky(t).contentType}function jx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class gn{constructor(e,n){let r=0,i="";Up(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Up(this.data_)){const r=this.data_,i=Ox(r,e,n);return i===null?null:new gn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new gn(r,!0)}}static getBlob(...e){if(ph()){const n=e.map(r=>r instanceof gn?r.data_:r);return new gn(Ax.apply(null,n))}else{const n=e.map(o=>wa(o)?Lx(bt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new gn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Ty(t){let e;try{e=JSON.parse(t)}catch{return null}return kx(e)?e:null}/**
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
 */function zx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Bx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Iy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Wx(t,e){return e}class Fe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Wx}}let ko=null;function Hx(t){return!wa(t)||t.length<2?t:Iy(t)}function xy(){if(ko)return ko;const t=[];t.push(new Fe("bucket")),t.push(new Fe("generation")),t.push(new Fe("metageneration")),t.push(new Fe("name","fullPath",!0));function e(s,o){return Hx(o)}const n=new Fe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Fe("size");return i.xform=r,t.push(i),t.push(new Fe("timeCreated")),t.push(new Fe("updated")),t.push(new Fe("md5Hash",null,!0)),t.push(new Fe("cacheControl",null,!0)),t.push(new Fe("contentDisposition",null,!0)),t.push(new Fe("contentEncoding",null,!0)),t.push(new Fe("contentLanguage",null,!0)),t.push(new Fe("contentType",null,!0)),t.push(new Fe("metadata","customMetadata",!0)),ko=t,ko}function $x(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ze(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Vx(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return $x(r,t),r}function Ry(t,e,n){const r=Ty(e);return r===null?null:Vx(t,r,n)}function Gx(t,e,n,r){const i=Ty(e);if(i===null||!wa(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),m=Js(h,n,r),v=wy({alt:"media",token:u});return m+v})[0]}function Ny(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Si{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function qt(t){if(!t)throw fh()}function mh(t,e){function n(r,i){const s=Ry(t,i,e);return qt(s!==null),s}return n}function qx(t,e){function n(r,i){const s=Ry(t,i,e);return qt(s!==null),Gx(s,i,t.host,t._protocol)}return n}function Zs(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=cx():i=ux():n.getStatus()===402?i=ax(t.bucket):n.getStatus()===403?i=dx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function by(t){const e=Zs(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=lx(t.path)),s.serverResponse=i.serverResponse,s}return n}function Kx(t,e,n){const r=e.fullServerUrl(),i=Js(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Si(i,s,mh(t,n),o);return l.errorHandler=by(e),l}function Qx(t,e,n){const r=e.fullServerUrl(),i=Js(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Si(i,s,qx(t,n),o);return l.errorHandler=by(e),l}function Yx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Py(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Yx(null,e)),r}function Xx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let _="";for(let E=0;E<2;E++)_=_+Math.random().toString().slice(2);return _}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=Py(e,r,i),c=Ny(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+a+"--",m=gn.getBlob(d,r,h);if(m===null)throw vy();const v={name:u.fullPath},w=Js(s,t.host,t._protocol),T="POST",g=t.maxUploadRetryTime,f=new Si(w,T,mh(t,n),g);return f.urlParams=v,f.headers=o,f.body=m.uploadData(),f.errorHandler=Zs(e),f}class Ul{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function gh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{qt(!1)}return qt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Jx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Py(e,r,i),l={name:o.fullPath},a=Js(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=Ny(o,n),h=t.maxUploadRetryTime;function m(w){gh(w);let T;try{T=w.getResponseHeader("X-Goog-Upload-URL")}catch{qt(!1)}return qt(wa(T)),T}const v=new Si(a,u,m,h);return v.urlParams=l,v.headers=c,v.body=d,v.errorHandler=Zs(e),v}function Zx(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=gh(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{qt(!1)}d||qt(!1);const h=Number(d);return qt(!isNaN(h)),new Ul(h,r.size(),c==="final")}const o="POST",l=t.maxUploadRetryTime,a=new Si(n,o,s,l);return a.headers=i,a.errorHandler=Zs(e),a}const zp=256*1024;function eR(t,e,n,r,i,s,o,l){const a=new Ul(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=r.size()),r.size()!==a.total)throw mx();const u=a.total-a.current;let c=u;i>0&&(c=Math.min(c,i));const d=a.current,h=d+c;let m="";c===0?m="finalize":u===c?m="upload, finalize":m="upload";const v={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${a.current}`},w=r.slice(d,h);if(w===null)throw vy();function T(E,k){const I=gh(E,["active","final"]),x=a.current+c,y=r.size();let L;return I==="final"?L=mh(e,s)(E,k):L=null,new Ul(x,y,I==="final",L)}const g="POST",f=e.maxUploadRetryTime,_=new Si(n,g,T,f);return _.headers=v,_.body=w.uploadData(),_.progressCallback=l||null,_.errorHandler=Zs(t),_}const $e={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function cu(t){switch(t){case"running":case"pausing":case"canceling":return $e.RUNNING;case"paused":return $e.PAUSED;case"success":return $e.SUCCESS;case"canceled":return $e.CANCELED;case"error":return $e.ERROR;default:return $e.ERROR}}/**
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
 */class tR{constructor(e,n,r){if(Cx(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function kr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class nR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=nr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=nr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=nr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Mi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class rR extends nR{initXhr(){this.xhr_.responseType="text"}}function Tr(){return new rR}/**
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
 */class iR{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=xy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ee.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Ey(i.status,[]))if(s)i=gy();else{this.sleepTime=Math.max(this.sleepTime*2,ox),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ee.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Jx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Tr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=Zx(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Tr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=zp*this._chunkMultiplier,n=new Ul(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=eR(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Tr,i,s,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){zp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Kx(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Tr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Xx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Tr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=_y(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=cu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new tR(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(cu(this._state)){case $e.SUCCESS:kr(this._resolve.bind(null,this.snapshot))();break;case $e.CANCELED:case $e.ERROR:const n=this._reject;kr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(cu(this._state)){case $e.RUNNING:case $e.PAUSED:e.next&&kr(e.next.bind(e,this.snapshot))();break;case $e.SUCCESS:e.complete&&kr(e.complete.bind(e))();break;case $e.CANCELED:case $e.ERROR:e.error&&kr(e.error.bind(e,this._error))();break;default:e.error&&kr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class pr{constructor(e,n){this._service=e,n instanceof Ze?this._location=n:this._location=Ze.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pr(e,n)}get root(){const e=new Ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iy(this._location.path)}get storage(){return this._service}get parent(){const e=zx(this._location.path);if(e===null)return null;const n=new Ze(this._location.bucket,e);return new pr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vx(e)}}function sR(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new iR(t,new gn(e),n)}function oR(t){t._throwIfRoot("getDownloadURL");const e=Qx(t.storage,t._location,xy());return t.storage.makeRequestWithTokens(e,Tr).then(n=>{if(n===null)throw gx();return n})}function lR(t,e){const n=Bx(t._location.path,e),r=new Ze(t._location.bucket,n);return new pr(t.storage,r)}/**
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
 */function aR(t){return/^[A-Za-z]+:\/\//.test(t)}function uR(t,e){return new pr(t,e)}function Ay(t,e){if(t instanceof _h){const n=t;if(n._bucket==null)throw px();const r=new pr(n,n._bucket);return e!=null?Ay(r,e):r}else return e!==void 0?lR(t,e):t}function cR(t,e){if(e&&aR(e)){if(t instanceof _h)return uR(t,e);throw Tc("To use ref(service, url), the first argument must be a Storage instance.")}else return Ay(t,e)}function Bp(t,e){const n=e==null?void 0:e[my];return n==null?null:Ze.makeFromBucketSpec(n,t)}function dR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:h_(i,t.app.options.projectId))}class _h{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=py,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ix,this._maxUploadRetryTime=sx,this._requests=new Set,i!=null?this._bucket=Ze.makeFromBucketSpec(i,this._host):this._bucket=Bp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ze.makeFromBucketSpec(this._url,e):this._bucket=Bp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new yx(yy());{const o=bx(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Wp="@firebase/storage",Hp="0.11.2";/**
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
 */const Oy="storage";function hR(t,e,n){return t=_e(t),sR(t,e,n)}function fR(t){return t=_e(t),oR(t)}function pR(t,e){return t=_e(t),cR(t,e)}function mR(t=kd(),e){t=_e(t);const r=ra(t,Oy).getImmediate({identifier:e}),i=u_("storage");return i&&gR(r,...i),r}function gR(t,e,n,r={}){dR(t,e,n,r)}function _R(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new _h(n,r,i,e,_r)}function vR(){ur(new Dn(Oy,_R,"PUBLIC").setMultipleInstances(!0)),Ot(Wp,Hp,""),Ot(Wp,Hp,"esm2017")}vR();const yR={apiKey:"AIzaSyCQHyooMJKL7LRlkidDtDzefSz8rIjiQag",authDomain:"thread-chat-37414.firebaseapp.com",databaseURL:"https://thread-chat-37414-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"thread-chat-37414",storageBucket:"thread-chat-37414.firebasestorage.app",messagingSenderId:"426777032314",appId:"1:426777032314:web:904d69b316d3ccc5242dc3"},vh=__(yR),$p=zk(vh),H=tx(vh),wR=mR(vh);function ER(){const[t,e]=R.useState(null),[n,r]=R.useState(!1);return R.useEffect(()=>RC($p,async s=>{if(!s){try{await SC($p)}catch(l){console.error(l)}return}let o=localStorage.getItem("_thread_uid");o||(localStorage.setItem("_thread_uid",s.uid),o=s.uid),e(o),r(!0)}),[]),{uid:t,ready:n}}const Vp={enterSend:!0,msgSound:!0,notifs:!1,readReceipts:!0,theme:"default"};function SR(){const[t,e]=R.useState(()=>{try{return{...Vp,...JSON.parse(localStorage.getItem("_thread_prefs")||"{}")}}catch{return Vp}});R.useEffect(()=>{localStorage.setItem("_thread_prefs",JSON.stringify(t)),document.body.dataset.theme=t.theme==="default"?"":t.theme},[t]);function n(r,i){e(s=>({...s,[r]:i}))}return{prefs:t,setPref:n}}function CR(t){const[e,n]=R.useState([]);return R.useEffect(()=>{if(!t)return;const r=W(H,`users/${t}/chats`),i=ya(r,s=>{if(!s.exists()){n([]);return}const o=[];s.forEach(l=>{o.push({chatId:l.key,...l.val()})}),o.sort((l,a)=>(a.lastTs||0)-(l.lastTs||0)),n(o)});return()=>hi(r,"value",i)},[t]),e}function kR(t){const[e,n]=R.useState([]);return R.useEffect(()=>{if(!t)return;const r=W(H,`requests/${t}`),i=ya(r,s=>{if(!s.exists()){n([]);return}const o=[];s.forEach(l=>{l.val().status==="pending"&&o.push({from:l.key,...l.val()})}),n(o)});return()=>hi(r,"value",i)},[t]),e}async function Dy(t){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}const ye={wrap:{flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100dvh",width:"100%",position:"relative",overflow:"hidden",display:"flex"},gridBg:{position:"absolute",inset:0,backgroundImage:"linear-gradient(var(--s1) 1px,transparent 1px),linear-gradient(90deg,var(--s1) 1px,transparent 1px)",backgroundSize:"60px 60px",maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)",pointerEvents:"none",opacity:.5},glow:{position:"absolute",width:700,height:700,background:"radial-gradient(circle,rgba(255,255,255,0.028) 0%,transparent 65%)",top:"50%",left:"50%",transform:"translate(-50%,-58%)",pointerEvents:"none"},inner:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:420,padding:"0 16px"},logo:{fontSize:72,fontWeight:800,letterSpacing:-6,lineHeight:1,color:"var(--text)",display:"inline-block",animation:"logoIn 0.7s cubic-bezier(0.22,1,0.36,1)"},dot:{display:"inline-block",width:9,height:9,borderRadius:"50%",background:"var(--accent)",verticalAlign:"super",marginLeft:4,transition:"background 0.3s"},tag:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:5,textTransform:"uppercase",color:"var(--dim)",marginTop:10,marginBottom:40,animation:"fadeIn 1s ease 0.3s both"},card:{width:"100%",background:"var(--s1)",border:"1px solid var(--b1)",borderRadius:20,overflow:"hidden",boxShadow:"0 0 0 1px rgba(255,255,255,0.02),0 40px 80px rgba(0,0,0,0.7)",animation:"cardIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"},tabs:{display:"flex",borderBottom:"1px solid var(--b1)"},tab:t=>({flex:1,padding:14,fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:500,letterSpacing:2,textTransform:"uppercase",color:t?"var(--text)":"var(--dim)",cursor:"pointer",textAlign:"center",borderBottom:t?"2px solid var(--accent)":"2px solid transparent",transition:"all 0.2s"}),body:{padding:24},label:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--dim)",marginBottom:7,display:"block"},input:{width:"100%",background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:10,padding:"12px 14px",fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:14,color:"var(--text)",outline:"none",marginBottom:14,transition:"border-color 0.2s",userSelect:"text",WebkitUserSelect:"text"},err:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"#886655",letterSpacing:.5,minHeight:18,marginBottom:6},btn:t=>({width:"100%",padding:13,background:t?"var(--b1)":"var(--accent)",color:t?"var(--dim)":"var(--bg)",border:"none",borderRadius:10,fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:13,fontWeight:700,cursor:t?"not-allowed":"pointer",transition:"all 0.2s",marginTop:2,opacity:t?.4:1}),hint:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:1,textAlign:"center",marginTop:12,lineHeight:1.7}};function is({label:t,type:e="text",placeholder:n,value:r,onChange:i}){return p.jsxs(p.Fragment,{children:[p.jsx("label",{style:ye.label,children:t}),p.jsx("input",{style:ye.input,type:e,placeholder:n,value:r,onChange:s=>i(s.target.value),autoComplete:"off"})]})}function TR({uid:t,onDone:e}){const[n,r]=R.useState(""),[i,s]=R.useState(""),[o,l]=R.useState(""),[a,u]=R.useState(""),[c,d]=R.useState(!1);async function h(){if(!n.trim())return u("↳ name required");if(i.trim().length<3)return u("↳ username min 3 chars");if(!/^[a-z0-9_]+$/.test(i.trim().toLowerCase()))return u("↳ letters, numbers, underscore only");if(o.length<6)return u("↳ password min 6 chars");u(""),d(!0);try{const m=i.trim().toLowerCase();if((await Os(W(H,"users/"+m))).exists())return u("↳ username taken");const w=await Dy(o+m);await tt(W(H,"users/"+m),{name:n.trim(),passHash:w,uid:t,createdAt:Date.now()}),e({myName:n.trim(),username:m})}catch(m){u("↳ "+m.message)}finally{d(!1)}}return p.jsxs(p.Fragment,{children:[p.jsx(is,{label:"Your name",placeholder:"how should people call you",value:n,onChange:r}),p.jsx(is,{label:"Username",placeholder:"unique · letters & numbers only",value:i,onChange:s}),p.jsx(is,{label:"Password",type:"password",placeholder:"min 6 characters",value:o,onChange:l}),p.jsx("div",{style:ye.err,children:a}),p.jsx("button",{style:ye.btn(c),disabled:c,onClick:h,children:c?"Creating...":"Create account →"}),p.jsx("div",{style:ye.hint,children:"your username is how others find and message you"})]})}function IR({uid:t,onDone:e}){const[n,r]=R.useState(""),[i,s]=R.useState(""),[o,l]=R.useState(""),[a,u]=R.useState(!1);async function c(){if(!n.trim())return l("↳ username required");if(!i)return l("↳ password required");l(""),u(!0);try{const d=n.trim().toLowerCase(),h=await Os(W(H,"users/"+d));if(!h.exists())return l("↳ username not found");const m=h.val();if(await Dy(i+d)!==m.passHash)return l("↳ wrong password");await _t(W(H,"users/"+d),{uid:t}),e({myName:m.name,username:d})}catch(d){l("↳ "+d.message)}finally{u(!1)}}return p.jsxs(p.Fragment,{children:[p.jsx(is,{label:"Username",placeholder:"your username",value:n,onChange:r}),p.jsx(is,{label:"Password",type:"password",placeholder:"your password",value:i,onChange:s}),p.jsx("div",{style:ye.err,children:o}),p.jsx("button",{style:ye.btn(a),disabled:a,onClick:c,children:a?"Signing in...":"Sign in →"})]})}const xR=["register","signin"],RR={register:"New account",signin:"Sign in"};function NR({uid:t,onSignIn:e}){const[n,r]=R.useState("register");function i(s){localStorage.setItem("_thread_session",JSON.stringify(s)),e(s)}return p.jsxs("div",{style:ye.wrap,children:[p.jsx("div",{style:ye.glow}),p.jsx("div",{style:ye.gridBg}),p.jsxs("div",{style:ye.inner,children:[p.jsxs("div",{style:ye.logo,children:["thread",p.jsx("span",{style:ye.dot})]}),p.jsx("div",{style:ye.tag,children:"private · search · unlimited chats"}),p.jsxs("div",{style:ye.card,children:[p.jsx("div",{style:ye.tabs,children:xR.map(s=>p.jsx("div",{style:ye.tab(n===s),onClick:()=>r(s),children:RR[s]},s))}),p.jsxs("div",{style:ye.body,children:[n==="register"&&p.jsx(TR,{uid:t,onDone:i}),n==="signin"&&p.jsx(IR,{uid:t,onDone:i})]})]})]})]})}function bR(t){const[e,n]=R.useState([]),r=R.useRef(!1),i=R.useRef(null);return R.useEffect(()=>{if(!t)return;n([]),r.current=!1;const s=W(H,`chats/${t}/msgs`),o=G1(s,a=>{const u={id:a.key,...a.val(),isNew:r.current};n(c=>c.find(d=>d.id===a.key)?c:[...c,u]),clearTimeout(i.current),i.current=setTimeout(()=>{r.current=!0},400)}),l=q1(s,a=>{const u={id:a.key,...a.val()};n(c=>c.map(d=>d.id===a.key?{...d,...u}:d))});return()=>{hi(s,"child_added",o),hi(s,"child_changed",l),clearTimeout(i.current)}},[t]),e}function PR(t,e,n){const[r,i]=R.useState(!1);return R.useEffect(()=>{if(!t||!e||!n)return;const s=W(H,`chats/${t}/presence/${e}`);tt(s,{online:!0,name:n}),$1(s).update({online:!1});const o=W(H,`chats/${t}/presence`),l=ya(o,a=>{a.exists()&&i(Object.entries(a.val()).some(([u,c])=>u!==e&&c.online===!0))});return()=>{hi(o,"value",l),tt(s,{online:!1,name:n})}},[t,e,n]),r}function AR(t,e){const[n,r]=R.useState(!1),i=R.useRef(null);R.useEffect(()=>{if(!t||!e)return;const l=W(H,`chats/${t}/typing`),a=ya(l,u=>{if(!u.exists()){r(!1);return}r(Object.entries(u.val()).some(([c,d])=>c!==e&&d===!0))});return()=>hi(l,"value",a)},[t,e]);function s(){!t||!e||(tt(W(H,`chats/${t}/typing/${e}`),!0),clearTimeout(i.current),i.current=setTimeout(()=>tt(W(H,`chats/${t}/typing/${e}`),!1),2500))}function o(){clearTimeout(i.current),t&&e&&tt(W(H,`chats/${t}/typing/${e}`),!1)}return{peerTyping:n,notifyTyping:s,stopTyping:o}}function OR(t){const e=R.useRef(null),n=R.useRef(!1);R.useEffect(()=>{function s(){if(!n.current)try{e.current||(e.current=new(window.AudioContext||window.webkitAudioContext)),e.current.state==="suspended"&&e.current.resume(),n.current=!0}catch{}}return document.addEventListener("touchstart",s,{once:!0,passive:!0}),document.addEventListener("click",s,{once:!0}),document.addEventListener("keydown",s,{once:!0}),()=>{document.removeEventListener("touchstart",s),document.removeEventListener("click",s),document.removeEventListener("keydown",s)}},[]);function r(){if(t)try{e.current||(e.current=new(window.AudioContext||window.webkitAudioContext));const s=e.current;s.state==="suspended"?s.resume().then(()=>i(s)):i(s)}catch{}}function i(s){const o=s.currentTime,l=s.createOscillator(),a=s.createGain();l.connect(a),a.connect(s.destination),l.type="sine",l.frequency.setValueAtTime(300,o),l.frequency.exponentialRampToValueAtTime(160,o+.09),a.gain.setValueAtTime(.2,o),a.gain.exponentialRampToValueAtTime(.001,o+.18),l.start(o),l.stop(o+.18);const u=s.createOscillator(),c=s.createGain();u.connect(c),c.connect(s.destination),u.type="sine",u.frequency.setValueAtTime(880,o),u.frequency.exponentialRampToValueAtTime(580,o+.06),c.gain.setValueAtTime(.07,o),c.gain.exponentialRampToValueAtTime(.001,o+.1),u.start(o),u.stop(o+.1)}return r}function DR(){return p.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),p.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]})}function LR(){return p.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"currentColor",children:[p.jsx("circle",{cx:"5",cy:"12",r:"2"}),p.jsx("circle",{cx:"12",cy:"12",r:"2"}),p.jsx("circle",{cx:"19",cy:"12",r:"2"})]})}function MR(){return p.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[p.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}const du={width:34,height:34,border:"none",background:"transparent",color:"var(--dim)",cursor:"pointer",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"};function FR({peerName:t,peerOnline:e,onSidebarOpen:n,onInvite:r,onMenu:i,showSidebarBtn:s}){var o;return p.jsxs("div",{style:{height:60,paddingTop:"env(safe-area-inset-top)",display:"flex",alignItems:"center",paddingLeft:16,paddingRight:16,gap:12,borderBottom:"1px solid var(--b1)",background:"rgba(8,8,8,0.92)",backdropFilter:"blur(24px)",flexShrink:0,position:"relative"},children:[p.jsx("div",{style:{position:"absolute",bottom:-1,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,var(--b2) 40%,var(--b2) 60%,transparent)"}}),s&&p.jsx("button",{style:du,onClick:n,children:p.jsx(MR,{})}),p.jsxs("div",{style:{width:38,height:38,borderRadius:12,background:"var(--s3)",border:"1px solid var(--b2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:700,flexShrink:0,position:"relative",textTransform:"uppercase"},children:[((o=t==null?void 0:t[0])==null?void 0:o.toUpperCase())||"?",p.jsx("div",{style:{position:"absolute",bottom:-2,right:-2,width:11,height:11,borderRadius:"50%",border:"2.5px solid var(--bg)",background:e?"#4a4":"var(--s4)"}})]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontSize:15,fontWeight:700,letterSpacing:-.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t||"—"}),p.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",letterSpacing:1.5,textTransform:"uppercase",marginTop:2},children:e?"online":"last seen recently"})]}),p.jsxs("div",{style:{display:"flex",gap:4},children:[p.jsx("button",{style:du,onClick:r,title:"Invite via link",children:p.jsx(DR,{})}),p.jsx("button",{style:du,onClick:i,title:"More",children:p.jsx(LR,{})})]})]})}function UR({msg:t,isYou:e,showAvatar:n,showName:r,onReply:i,onReact:s,onDelete:o,onImageClick:l}){var w,T,g;const a=R.useRef(null),u={padding:"11px 15px",borderRadius:16,fontSize:14,lineHeight:1.6,wordBreak:"break-word",cursor:t.deleted?"default":"pointer",position:"relative",userSelect:"text",WebkitUserSelect:"text",animation:e?"bPopYou 0.28s cubic-bezier(0.34,1.4,0.64,1) both":"bPopThem 0.28s cubic-bezier(0.34,1.4,0.64,1) both",transition:"opacity 0.15s, transform 0.15s",...e?{background:"var(--accent)",color:"var(--bg)",borderBottomRightRadius:4,fontWeight:500}:{background:"var(--s2)",color:"var(--text)",border:"1px solid var(--b1)",borderBottomLeftRadius:4},...t.deleted?{opacity:.35,fontStyle:"italic",fontSize:12}:{}},c={};t.reactions&&Object.entries(t.reactions).forEach(([f,_])=>{c[_]=c[_]||[],c[_].push(f)});function d(f){f.preventDefault(),t.deleted||s(t.id,f.currentTarget)}function h(){a.current=setTimeout(()=>s(t.id,null),500)}function m(){clearTimeout(a.current)}function v(){t.deleted||i(t)}return p.jsxs("div",{style:{display:"flex",justifyContent:e?"flex-end":"flex-start",zIndex:1,position:"relative"},children:[!e&&p.jsx("div",{style:{width:30,height:30,borderRadius:9,background:"var(--s3)",border:"1px solid var(--b1)",fontSize:12,fontWeight:700,textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginRight:8,alignSelf:"flex-end",marginBottom:1,visibility:n?"visible":"hidden",transition:"transform 0.2s"},children:((T=(w=t.senderName)==null?void 0:w[0])==null?void 0:T.toUpperCase())||"?"}),p.jsxs("div",{style:{maxWidth:"68%",display:"flex",flexDirection:"column",alignItems:e?"flex-end":"flex-start"},children:[r&&!e&&p.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:1.5,textTransform:"uppercase",color:"var(--dim)",marginBottom:4,animation:"fadeIn 0.2s ease"},children:t.senderName}),t.replyTo&&!t.deleted&&p.jsxs("div",{style:{background:e?"rgba(0,0,0,0.15)":"rgba(255,255,255,0.06)",borderLeft:e?"2px solid rgba(0,0,0,0.35)":"2px solid var(--accent)",borderRadius:6,padding:"5px 10px",marginBottom:6,fontSize:12,color:"var(--dim)",cursor:"pointer",maxWidth:"100%",animation:"fadeIn 0.2s ease",transition:"opacity 0.15s"},children:[t.replyTo.senderName,": ",(g=t.replyTo.text)==null?void 0:g.slice(0,80)]}),p.jsx("div",{style:u,onContextMenu:d,onTouchStart:h,onTouchEnd:m,onDoubleClick:v,onMouseEnter:f=>{t.deleted||(f.currentTarget.style.opacity="0.92")},onMouseLeave:f=>{f.currentTarget.style.opacity="1"},children:t.deleted?"message deleted":t.imageUrl?p.jsx("img",{src:t.imageUrl,loading:"lazy",onClick:f=>{f.stopPropagation(),l(t.imageUrl)},style:{maxWidth:220,maxHeight:220,borderRadius:10,display:"block",cursor:"pointer",transition:"transform 0.2s"},onMouseEnter:f=>f.target.style.transform="scale(1.02)",onMouseLeave:f=>f.target.style.transform="scale(1)",alt:""}):t.text}),Object.keys(c).length>0&&p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginTop:5},children:Object.entries(c).map(([f,_])=>p.jsxs("div",{onClick:()=>s(t.id,null,f),className:"rxn-new",style:{background:"var(--s3)",border:`1px solid ${_.includes("me")?"var(--accent)":"var(--b1)"}`,borderRadius:100,padding:"3px 9px",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",gap:4,transition:"transform 0.15s, border-color 0.15s"},onMouseEnter:E=>E.currentTarget.style.transform="scale(1.1)",onMouseLeave:E=>E.currentTarget.style.transform="scale(1)",children:[f,p.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)"},children:_.length})]},f))}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:3,padding:"0 2px",animation:"fadeIn 0.3s ease 0.1s both"},children:[p.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:.5},children:t.time}),e&&p.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",letterSpacing:.5,transition:"color 0.3s"},children:t.seen?"· seen":"· sent"}),e&&!t.deleted&&p.jsx("span",{onClick:()=>{confirm("Delete for both sides?")&&o(t.id)},style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",cursor:"pointer",letterSpacing:.5,opacity:0,transition:"opacity 0.2s"},onMouseEnter:f=>f.target.style.opacity="1",onMouseLeave:f=>f.target.style.opacity="0",children:"· del"})]})]})]})}function jR({onSend:t,onTyping:e,replyTo:n,onCancelReply:r,onImageUpload:i,enterSend:s}){var h;const o=R.useRef(null);R.useEffect(()=>{var m;n&&((m=o.current)==null||m.focus())},[n]);function l(){const m=o.current;m.style.height="auto",m.style.height=Math.min(m.scrollHeight,120)+"px",e()}function a(m){s&&m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),u()),!s&&m.key==="Enter"&&m.shiftKey&&(m.preventDefault(),u())}function u(){const m=o.current.value.trim();m&&(t(m),o.current.value="",o.current.style.height="auto")}const c={padding:"10px 16px calc(18px + env(safe-area-inset-bottom))",borderTop:"1px solid var(--b1)",background:"rgba(8,8,8,0.95)",backdropFilter:"blur(24px)",flexShrink:0,position:"relative"},d={display:"flex",alignItems:"flex-end",gap:8,background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:16,padding:"8px 8px 8px 14px"};return p.jsxs("div",{style:c,children:[n&&p.jsxs("div",{style:{padding:"8px 0 8px",display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[p.jsx("div",{style:{width:3,minHeight:28,background:"var(--accent)",borderRadius:2,alignSelf:"stretch"}}),p.jsxs("div",{style:{flex:1,fontSize:12,color:"var(--dim)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["↩ ",n.senderName,": ",(h=n.text)==null?void 0:h.slice(0,60)]}),p.jsx("button",{onClick:r,style:{background:"none",border:"none",color:"var(--dim)",cursor:"pointer",fontSize:20,padding:0},children:"×"})]}),p.jsxs("div",{style:d,children:[p.jsx("button",{onClick:()=>document.getElementById("imgInput").click(),style:{background:"none",border:"none",color:"var(--dim)",cursor:"pointer",fontSize:18,padding:4,borderRadius:8,flexShrink:0},children:"⊞"}),p.jsx("input",{type:"file",id:"imgInput",accept:"image/*",style:{display:"none"},onChange:m=>i(m.target.files[0])}),p.jsx("textarea",{ref:o,rows:1,placeholder:"say something...",onInput:l,onKeyDown:a,style:{flex:1,background:"none",border:"none",outline:"none",fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:14,color:"var(--text)",resize:"none",minHeight:26,maxHeight:120,lineHeight:1.55,padding:"3px 0",userSelect:"text",WebkitUserSelect:"text"}}),p.jsx("button",{onClick:u,style:{width:38,height:38,borderRadius:12,border:"none",background:"var(--accent)",color:"var(--bg)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:"↑"})]})]})}const zR=["👍","❤️","😂","😮","😢","🔥","👀","🙏"];function BR({position:t,onPick:e,onClose:n}){const r=R.useRef(null);return R.useEffect(()=>{function i(s){var o;(o=r.current)!=null&&o.contains(s.target)||n()}return setTimeout(()=>document.addEventListener("click",i),0),()=>document.removeEventListener("click",i)},[n]),p.jsx("div",{ref:r,style:{position:"fixed",bottom:(t==null?void 0:t.bottom)||100,left:Math.max(8,(t==null?void 0:t.left)||40),background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:14,padding:"10px 12px",display:"flex",gap:8,zIndex:300,boxShadow:"0 8px 32px rgba(0,0,0,0.7)",animation:"bPop 0.15s ease"},children:zR.map(i=>p.jsx("span",{onClick:()=>e(i),style:{fontSize:22,cursor:"pointer",lineHeight:1},children:i},i))})}const WR=[{key:"default",color:"#f0f0f0"},{key:"blue",color:"#4a9eff"},{key:"green",color:"#4ade80"},{key:"amber",color:"#fbbf24"},{key:"pink",color:"#f472b6"}];function To({checked:t,onChange:e}){return p.jsxs("label",{style:{position:"relative",width:40,height:22,flexShrink:0,cursor:"pointer"},children:[p.jsx("input",{type:"checkbox",checked:t,onChange:n=>e(n.target.checked),style:{opacity:0,width:0,height:0,position:"absolute"}}),p.jsx("div",{style:{position:"absolute",inset:0,borderRadius:100,background:t?"var(--accent)":"var(--s4)",transition:"background 0.2s"},children:p.jsx("div",{style:{position:"absolute",width:16,height:16,background:"#fff",borderRadius:"50%",top:3,left:3,transition:"transform 0.2s",transform:t?"translateX(18px)":"translateX(0)"}})})]})}function Fi({label:t,sub:e,right:n,last:r}){return p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:r?"none":"1px solid var(--b1)"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:13,fontWeight:500},children:t}),e&&p.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)",letterSpacing:.5,marginTop:2},children:e})]}),n]})}function HR({prefs:t,setPref:e,onClose:n}){async function r(s){if(!s){e("notifs",!1);return}if(!("Notification"in window)){alert("Notifications not supported in this browser.");return}let o=Notification.permission;o==="default"&&(o=await Notification.requestPermission()),o==="granted"?(e("notifs",!0),new Notification("Thread",{body:"Notifications enabled ✓",tag:"thread-test",silent:!0})):o==="denied"&&(e("notifs",!1),alert(`Notifications blocked. To enable:
Chrome → Site settings → Notifications → Allow`))}const i=()=>"Notification"in window?Notification.permission==="granted"&&t.notifs?"enabled ✓":Notification.permission==="denied"?"blocked — check site settings":"get notified when tab is hidden":"not supported";return p.jsxs("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(4px)"},children:[p.jsx("div",{onClick:n,style:{position:"absolute",inset:0}}),p.jsxs("div",{style:{width:420,maxWidth:"92vw",background:"var(--s1)",border:"1px solid var(--b1)",borderRadius:20,overflow:"hidden",boxShadow:"0 40px 80px rgba(0,0,0,0.7)",position:"relative",animation:"cardIn 0.3s ease"},children:[p.jsxs("div",{style:{padding:"22px 24px 18px",borderBottom:"1px solid var(--b1)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsx("div",{style:{fontSize:16,fontWeight:700},children:"Settings"}),p.jsx("button",{onClick:n,style:{background:"none",border:"none",color:"var(--dim)",fontSize:20,cursor:"pointer"},children:"×"})]}),p.jsxs("div",{style:{padding:"20px 24px"},children:[p.jsx(Fi,{label:"Accent colour",sub:"bubbles & highlights",right:p.jsx("div",{style:{display:"flex",gap:8},children:WR.map(s=>p.jsx("div",{onClick:()=>e("theme",s.key),style:{width:24,height:24,borderRadius:"50%",background:s.color,cursor:"pointer",border:`2px solid ${t.theme===s.key?"var(--text)":"transparent"}`,transition:"all 0.15s"}},s.key))})}),p.jsx(Fi,{label:"Enter to send",sub:"off = shift+enter sends",right:p.jsx(To,{checked:t.enterSend,onChange:s=>e("enterSend",s)})}),p.jsx(Fi,{label:"Message sound",sub:"soft pop on incoming message",right:p.jsx(To,{checked:t.msgSound,onChange:s=>e("msgSound",s)})}),p.jsx(Fi,{label:"Push notifications",sub:i(),right:p.jsx(To,{checked:t.notifs&&Notification.permission==="granted",onChange:r})}),p.jsx(Fi,{label:"Read receipts",sub:"show when you've read messages",last:!0,right:p.jsx(To,{checked:t.readReceipts,onChange:s=>e("readReceipts",s)})})]})]})]})}function $R({onInvite:t,onSettings:e,onClear:n,onClose:r}){const i=R.useRef(null);R.useEffect(()=>{function o(l){var a;(a=i.current)!=null&&a.contains(l.target)||r()}return setTimeout(()=>document.addEventListener("click",o),0),()=>document.removeEventListener("click",o)},[r]);const s=[{icon:"🔗",label:"Invite via link",action:t},{icon:"⚙",label:"Settings",action:e},{icon:"⊘",label:"Clear messages",action:n}];return p.jsx("div",{ref:i,style:{position:"fixed",top:56,right:12,background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:14,minWidth:195,overflow:"hidden",boxShadow:"0 20px 50px rgba(0,0,0,0.7)",zIndex:200,animation:"popIn 0.18s cubic-bezier(0.34,1.56,0.64,1)"},children:s.map((o,l)=>p.jsxs("div",{onClick:()=>{o.action(),r()},style:{padding:"12px 16px",fontSize:12,fontWeight:500,color:"var(--dim)",cursor:"pointer",display:"flex",alignItems:"center",gap:12,borderBottom:l<s.length-1?"1px solid var(--b1)":"none"},onMouseEnter:a=>a.currentTarget.style.background="var(--s3)",onMouseLeave:a=>a.currentTarget.style.background="transparent",children:[p.jsx("span",{style:{fontSize:14,width:18,textAlign:"center"},children:o.icon}),o.label]},l))})}function VR({token:t,onBack:e}){const[n,r]=R.useState(!1),i=`${location.origin}${location.pathname}?i=${t}`;function s(){navigator.clipboard.writeText(i).then(()=>{r(!0),setTimeout(()=>r(!1),2500)})}return p.jsxs("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},children:[p.jsx("div",{onClick:e,style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(4px)"}}),p.jsxs("div",{style:{width:400,maxWidth:"92vw",background:"var(--s1)",border:"1px solid var(--b1)",borderRadius:20,overflow:"hidden",boxShadow:"0 40px 80px rgba(0,0,0,0.7)",position:"relative",animation:"cardIn 0.3s ease"},children:[p.jsxs("div",{style:{padding:"28px 28px 22px",borderBottom:"1px solid var(--b1)"},children:[p.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:3,textTransform:"uppercase",color:"var(--dim)",marginBottom:10},children:"one-time link"}),p.jsx("div",{style:{fontSize:22,fontWeight:800,letterSpacing:-1,marginBottom:8},children:"Invite via link"}),p.jsx("div",{style:{fontSize:12,color:"var(--dim)",lineHeight:1.75},children:"Share privately. First person to open it joins — then the link burns."})]}),p.jsxs("div",{style:{padding:"20px 28px"},children:[p.jsxs("div",{style:{background:"var(--s3)",border:"1px solid var(--b1)",borderRadius:12,padding:"12px 14px",display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[p.jsx("div",{style:{flex:1,fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i}),p.jsx("button",{onClick:s,style:{border:`1px solid ${n?"var(--b1)":"var(--b2)"}`,background:"none",color:n?"var(--dimmer)":"var(--text)",fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:500,letterSpacing:1.5,textTransform:"uppercase",padding:"6px 12px",borderRadius:7,cursor:"pointer",flexShrink:0},children:n?"copied ✓":"copy"})]}),p.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:1,lineHeight:1.9,textTransform:"uppercase"},children:"🔒 single use · expires on join"})]}),p.jsx("div",{style:{padding:"16px 28px",borderTop:"1px solid var(--b1)"},children:p.jsx("button",{onClick:e,style:{width:"100%",padding:13,background:"none",border:"1px solid var(--b1)",borderRadius:10,color:"var(--dim)",fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:12,fontWeight:600,cursor:"pointer"},children:"← back"})})]})]})}function GR({activeChat:t,session:e,uid:n,prefs:r,setPref:i,onSidebarOpen:s,showSidebarBtn:o}){var Tt;const{chatId:l,peerName:a,peerUsername:u}=t,[c,d]=R.useState(null),[h,m]=R.useState(null),[v,w]=R.useState(null),[T,g]=R.useState(!1),[f,_]=R.useState(!1),[E,k]=R.useState(!1),[I,x]=R.useState(0),[y,L]=R.useState(""),A=bR(l),ve=PR(l,n,e.myName),{peerTyping:rn,notifyTyping:Hn,stopTyping:eo}=AR(l,n),to=OR(r.msgSound),wr=R.useRef(null),sn=R.useRef(0),N=R.useRef(Notification.permission==="granted");R.useEffect(()=>{Os(W(H,`chats/${l}/meta/token`)).then(P=>{if(P.exists()){L(P.val());return}const Ie=Math.random().toString(36).slice(2,24);tt(W(H,`chats/${l}/meta/token`),Ie),L(Ie)})},[l]),R.useEffect(()=>{if(A.length<=sn.current){sn.current=A.length;return}const P=A.slice(sn.current);sn.current=A.length,P.forEach(Ie=>{if(!(!Ie.isNew||Ie.senderUid===n)&&(to(),r.notifs&&N.current))try{const xe=Ie.imageUrl?"📷 Image":Ie.text||"";"serviceWorker"in navigator?navigator.serviceWorker.ready.then(Me=>Me.showNotification(a||"Thread",{body:xe,tag:"thread-msg",renotify:!0,vibrate:[200,100,200]})):new Notification(a||"Thread",{body:xe,tag:"thread-msg"})}catch{}})},[A,n,a,r.notifs,to]),R.useEffect(()=>{const P=wr.current;P&&P.scrollHeight-P.scrollTop-P.clientHeight<120&&setTimeout(()=>{P.scrollTop=P.scrollHeight},30)},[A,rn]),R.useEffect(()=>{r.readReceipts&&A.filter(P=>P.senderUid!==n&&!P.seen).forEach(P=>_t(W(H,`chats/${l}/msgs/${P.id}`),{seen:!0}))},[A,n,r.readReceipts,l]),R.useEffect(()=>{N.current=Notification.permission==="granted"},[r.notifs]);async function M(P){eo();const xe=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Me={senderUid:n,senderName:e.myName,text:P,time:xe,ts:Date.now(),seen:!1};c&&(Me.replyTo={fbKey:c.id,text:c.text||"",senderName:c.senderName}),d(null),await Fp(W(H,`chats/${l}/msgs`),Me),await _t(W(H,`users/${e.username}/chats/${l}`),{lastMsg:P,lastTime:xe,lastTs:Date.now()}),u&&await _t(W(H,`users/${u}/chats/${l}`),{lastMsg:P,lastTime:xe,lastTs:Date.now()})}async function F(P){if(!P||P.size>10*1024*1024)return;const Ie=pR(wR,`chats/${l}/${Date.now()}_${P.name}`),xe=hR(Ie,P);xe.on("state_changed",Me=>x(Math.round(Me.bytesTransferred/Me.totalBytes*100)),()=>x(0),async()=>{x(0);const Me=await fR(xe.snapshot.ref),Ea=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});await Fp(W(H,`chats/${l}/msgs`),{senderUid:n,senderName:e.myName,imageUrl:Me,text:"",time:Ea,ts:Date.now(),seen:!1}),await _t(W(H,`users/${e.username}/chats/${l}`),{lastMsg:"📷 Image",lastTime:Ea,lastTs:Date.now()}),u&&await _t(W(H,`users/${u}/chats/${l}`),{lastMsg:"📷 Image",lastTime:Ea,lastTs:Date.now()})})}async function ne(P,Ie){const xe=`chats/${l}/msgs/${P}/reactions/${n}`,Me=await Os(W(H,xe));await tt(W(H,xe),Me.val()===Ie?null:Ie),m(null)}async function he(P){await _t(W(H,`chats/${l}/msgs/${P}`),{deleted:!0,text:"message deleted"})}async function Er(){await V1(W(H,`chats/${l}/msgs`))}let kt=null;const Ci=A.map(P=>{const Ie=P.senderUid===kt;return kt=P.senderUid,{...P,same:Ie}});return p.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:"100%",background:"var(--bg)"},children:[p.jsx(FR,{peerName:a,peerOnline:ve,onSidebarOpen:s,onInvite:()=>k(!0),onMenu:()=>_(!0),showSidebarBtn:o}),p.jsxs("div",{ref:wr,style:{flex:1,overflowY:"auto",padding:"24px 20px 16px",display:"flex",flexDirection:"column",gap:3,position:"relative"},children:[p.jsx("div",{style:{position:"fixed",inset:"60px 0 72px",background:"repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(255,255,255,0.008) 28px,rgba(255,255,255,0.008) 29px)",pointerEvents:"none",zIndex:0}}),A.length===0&&p.jsx("div",{style:{alignSelf:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",letterSpacing:1.5,textTransform:"uppercase",padding:"5px 16px",border:"1px solid var(--b1)",borderRadius:100,margin:"10px 0",background:"rgba(14,14,14,0.8)"},children:"🔒 encrypted · say hello"}),Ci.map(P=>p.jsx("div",{id:"row_"+P.id,style:{marginTop:P.same?1:14},children:p.jsx(UR,{msg:P,isYou:P.senderUid===n,showAvatar:!P.same,showName:!P.same,onReply:d,onReact:(Ie,xe)=>{const Me=xe==null?void 0:xe.getBoundingClientRect();m({msgId:Ie,position:Me?{bottom:window.innerHeight-Me.top+8,left:Me.left-40}:{bottom:120,left:40}})},onDelete:he,onImageClick:w})},P.id)),rn&&p.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:8,marginTop:4,zIndex:1},children:[p.jsx("div",{style:{width:30,height:30,borderRadius:9,background:"var(--s3)",border:"1px solid var(--b1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0},children:((Tt=a==null?void 0:a[0])==null?void 0:Tt.toUpperCase())||"?"}),p.jsx("div",{style:{background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:16,borderBottomLeftRadius:4,padding:"13px 18px",display:"flex",gap:5,alignItems:"center"},children:[0,200,400].map(P=>p.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:"var(--b2)",animation:`tdot 1.3s ease ${P}ms infinite`}},P))})]})]}),I>0&&p.jsx("div",{style:{height:2,background:"var(--b1)",flexShrink:0},children:p.jsx("div",{style:{height:"100%",background:"var(--accent)",width:I+"%",transition:"width 0.3s",borderRadius:2}})}),p.jsx(jR,{onSend:M,onTyping:Hn,replyTo:c,onCancelReply:()=>d(null),onImageUpload:F,enterSend:r.enterSend}),h&&p.jsx(BR,{position:h.position,onPick:P=>ne(h.msgId,P),onClose:()=>m(null)}),v&&p.jsx("div",{onClick:()=>w(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:p.jsx("img",{src:v,style:{maxWidth:"92vw",maxHeight:"92vh",borderRadius:12},alt:"",onClick:P=>P.stopPropagation()})}),T&&p.jsx(HR,{prefs:r,setPref:i,onClose:()=>g(!1)}),f&&p.jsx($R,{onInvite:()=>{k(!0),_(!1)},onSettings:()=>{g(!0),_(!1)},onClear:()=>{Er(),_(!1)},onClose:()=>_(!1)}),E&&p.jsx(VR,{token:y,onBack:()=>k(!1)})]})}function qR(t=10){return Math.random().toString(36).slice(2,2+t)}function yh({name:t,size:e=42,online:n=!1}){return p.jsxs("div",{style:{position:"relative",flexShrink:0},children:[p.jsx("div",{style:{width:e,height:e,borderRadius:e*.28,background:"var(--s3)",border:"1px solid var(--b1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:e*.38,fontWeight:700,textTransform:"uppercase",color:"var(--accent)",transition:"transform 0.2s, border-color 0.2s"},children:(t==null?void 0:t[0])||"?"}),n&&p.jsx("div",{className:"dot-online",style:{position:"absolute",bottom:-1,right:-1,width:10,height:10,borderRadius:"50%",background:"#4a4",border:"2px solid var(--s1)"}})]})}function KR({chat:t,active:e,onClick:n,index:r}){return p.jsxs("div",{onClick:n,style:{display:"flex",alignItems:"center",gap:12,padding:"10px 16px",cursor:"pointer",background:e?"var(--s2)":"transparent",borderLeft:e?"2px solid var(--accent)":"2px solid transparent",transition:"background 0.15s, border-color 0.2s",animation:`rowIn 0.3s ease ${r*40}ms both`},onMouseEnter:i=>{e||(i.currentTarget.style.background="var(--s1)")},onMouseLeave:i=>{e||(i.currentTarget.style.background="transparent")},children:[p.jsx(yh,{name:t.peerName}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:3},children:[p.jsx("div",{style:{fontSize:14,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.peerName}),t.lastTime&&p.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",flexShrink:0,marginLeft:8},children:t.lastTime})]}),p.jsx("div",{style:{fontSize:12,color:"var(--dim)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.lastMsg||"no messages yet"})]}),t.unread>0&&p.jsx("div",{className:"badge-pulse",style:{minWidth:18,height:18,borderRadius:100,background:"var(--accent)",color:"var(--bg)",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 5px",flexShrink:0},children:t.unread})]})}function QR({req:t,myUsername:e,onAccept:n,onDecline:r}){const[i,s]=R.useState(!1);return p.jsxs("div",{style:{padding:"12px 16px",borderBottom:"1px solid var(--b1)",background:"var(--s1)",animation:"fadeUp 0.3s ease both"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[p.jsx(yh,{name:t.name,size:34}),p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:13,fontWeight:600},children:t.name}),p.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)"},children:["@",t.from]})]})]}),t.message&&p.jsxs("div",{style:{fontSize:12,color:"var(--dim)",marginBottom:10,paddingLeft:2},children:['"',t.message,'"']}),p.jsxs("div",{style:{display:"flex",gap:8},children:[p.jsx("button",{onClick:async()=>{s(!0),await n(t)},style:{flex:1,padding:"7px",background:"var(--accent)",color:"var(--bg)",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",transition:"transform 0.15s, opacity 0.15s",opacity:i?.6:1},onMouseEnter:o=>o.currentTarget.style.transform="scale(1.02)",onMouseLeave:o=>o.currentTarget.style.transform="scale(1)",children:i?"...":"Accept"}),p.jsx("button",{onClick:()=>r(t),style:{flex:1,padding:"7px",background:"transparent",color:"var(--dim)",border:"1px solid var(--b1)",borderRadius:8,fontSize:11,cursor:"pointer",transition:"border-color 0.15s, color 0.15s"},onMouseEnter:o=>{o.currentTarget.style.borderColor="var(--b2)",o.currentTarget.style.color="var(--text)"},onMouseLeave:o=>{o.currentTarget.style.borderColor="var(--b1)",o.currentTarget.style.color="var(--dim)"},children:"Decline"})]})]})}function YR({session:t,chats:e,requests:n,activeChatId:r,onSelectChat:i,onSignOut:s,isMobile:o,onClose:l}){var x;const[a,u]=R.useState(""),[c,d]=R.useState(null),[h,m]=R.useState(""),[v,w]=R.useState(!1),[T,g]=R.useState("chats");async function f(){const y=a.trim().toLowerCase();if(!y)return;if(y===t.username){d({error:"that's you"});return}d("loading");const L=await Os(W(H,"users/"+y));if(!L.exists()){d("notfound");return}const A=e.find(ve=>ve.peerUsername===y);d({username:y,name:L.val().name,alreadyChat:A})}async function _(){if(c!=null&&c.username){w(!0);try{await tt(W(H,`requests/${c.username}/${t.username}`),{name:t.myName,message:h.trim(),status:"pending",ts:Date.now()}),d({...c,sent:!0}),m("")}catch{}w(!1)}}async function E(y){const L="c_"+qR(14),ve=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});await tt(W(H,`chats/${L}/meta`),{members:{[t.username]:!0,[y.from]:!0},createdAt:Date.now()}),await _t(W(H,`users/${t.username}/chats/${L}`),{peerUsername:y.from,peerName:y.name,lastMsg:"",lastTime:ve,lastTs:Date.now()}),await _t(W(H,`users/${y.from}/chats/${L}`),{peerUsername:t.username,peerName:t.myName,lastMsg:"",lastTime:ve,lastTs:Date.now()}),await _t(W(H,`requests/${t.username}/${y.from}`),{status:"accepted"}),await tt(W(H,`requests/${y.from}/_accepted/${t.username}`),{chatId:L,peerName:t.myName,ts:Date.now()}),i({chatId:L,peerUsername:y.from,peerName:y.name}),g("chats")}async function k(y){await _t(W(H,`requests/${t.username}/${y.from}`),{status:"declined"})}const I={flex:1,background:"none",border:"none",outline:"none",fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:13,color:"var(--text)",transition:"color 0.15s"};return p.jsxs("div",{style:{width:o?"100%":300,height:"100%",background:"var(--s1)",borderRight:"1px solid var(--b1)",display:"flex",flexDirection:"column",flexShrink:0,...o?{position:"fixed",inset:0,zIndex:50,animation:"slideIn 0.25s cubic-bezier(0.22,1,0.36,1)"}:{animation:"fadeIn 0.3s ease"}},children:[p.jsxs("div",{style:{padding:"16px 16px 12px",borderBottom:"1px solid var(--b1)",display:"flex",alignItems:"center",gap:10},children:[p.jsxs("div",{style:{fontSize:22,fontWeight:800,letterSpacing:-2,flex:1,color:"var(--text)",animation:"logoIn 0.6s ease"},children:["thread",p.jsx("span",{style:{display:"inline-block",width:6,height:6,borderRadius:"50%",background:"var(--accent)",verticalAlign:"super",marginLeft:2,animation:"pulse 2s ease infinite"}})]}),p.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",letterSpacing:1,animation:"fadeIn 0.5s ease 0.2s both"},children:["@",t.username]}),o&&p.jsx("button",{onClick:l,style:{background:"none",border:"none",color:"var(--dim)",fontSize:20,cursor:"pointer",padding:4,transition:"color 0.15s, transform 0.15s"},onMouseEnter:y=>{y.currentTarget.style.color="var(--text)",y.currentTarget.style.transform="rotate(90deg)"},onMouseLeave:y=>{y.currentTarget.style.color="var(--dim)",y.currentTarget.style.transform="rotate(0)"},children:"×"})]}),p.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--b1)"},children:[p.jsxs("div",{style:{display:"flex",gap:8,background:"var(--s2)",border:"1px solid var(--b1)",borderRadius:10,padding:"8px 12px",alignItems:"center",transition:"border-color 0.2s, box-shadow 0.2s"},onFocus:y=>{y.currentTarget.style.borderColor="var(--b2)",y.currentTarget.style.boxShadow="0 0 0 3px var(--accent-dim)"},onBlur:y=>{y.currentTarget.style.borderColor="var(--b1)",y.currentTarget.style.boxShadow="none"},children:[p.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"var(--dim)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0},children:[p.jsx("circle",{cx:"11",cy:"11",r:"8"}),p.jsx("path",{d:"m21 21-4.35-4.35"})]}),p.jsx("input",{value:a,onChange:y=>{u(y.target.value),d(null)},onKeyDown:y=>y.key==="Enter"&&f(),placeholder:"Search by username...",style:I}),a&&p.jsx("button",{onClick:f,style:{background:"none",border:"none",color:"var(--accent)",fontSize:11,cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",letterSpacing:.5,flexShrink:0,transition:"transform 0.15s"},onMouseEnter:y=>y.currentTarget.style.transform="scale(1.1)",onMouseLeave:y=>y.currentTarget.style.transform="scale(1)",children:"go"})]}),c==="loading"&&p.jsx("div",{className:"shimmer",style:{height:60,borderRadius:10,marginTop:10}}),c&&c!=="loading"&&c!=="notfound"&&!c.error&&p.jsxs("div",{style:{marginTop:10,padding:"12px",background:"var(--s2)",borderRadius:10,border:"1px solid var(--b1)",animation:"fadeUp 0.25s ease both"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[p.jsx(yh,{name:c.name,size:32}),p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:13,fontWeight:600},children:c.name}),p.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)"},children:["@",c.username]})]})]}),c.alreadyChat?p.jsx("button",{onClick:()=>{i(c.alreadyChat),u(""),d(null)},style:{width:"100%",padding:"7px",background:"var(--accent)",color:"var(--bg)",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",transition:"transform 0.15s"},onMouseEnter:y=>y.currentTarget.style.transform="scale(1.02)",onMouseLeave:y=>y.currentTarget.style.transform="scale(1)",children:"Open chat"}):c.sent?p.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)",textAlign:"center",letterSpacing:1,animation:"fadeIn 0.3s ease"},children:"request sent ✓"}):p.jsxs(p.Fragment,{children:[p.jsx("input",{value:h,onChange:y=>m(y.target.value),placeholder:"Add a message (optional)",style:{width:"100%",background:"var(--s3)",border:"1px solid var(--b1)",borderRadius:8,padding:"7px 10px",fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:12,color:"var(--text)",outline:"none",marginBottom:8,transition:"border-color 0.2s"},onFocus:y=>y.target.style.borderColor="var(--b2)",onBlur:y=>y.target.style.borderColor="var(--b1)"}),p.jsx("button",{onClick:_,disabled:v,style:{width:"100%",padding:"7px",background:"var(--accent)",color:"var(--bg)",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",opacity:v?.5:1,transition:"transform 0.15s, opacity 0.15s"},onMouseEnter:y=>{v||(y.currentTarget.style.transform="scale(1.02)")},onMouseLeave:y=>y.currentTarget.style.transform="scale(1)",children:v?"Sending...":"Send chat request"})]})]}),c==="notfound"&&p.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dim)",marginTop:8,paddingLeft:4,letterSpacing:.5,animation:"fadeIn 0.2s ease"},children:"↳ user not found"}),(c==null?void 0:c.error)&&p.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"#886655",marginTop:8,paddingLeft:4,animation:"fadeIn 0.2s ease"},children:["↳ ",c.error]})]}),p.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--b1)"},children:["chats","requests"].map(y=>p.jsxs("div",{onClick:()=>g(y),style:{flex:1,padding:"10px",textAlign:"center",cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:500,letterSpacing:2,textTransform:"uppercase",color:T===y?"var(--text)":"var(--dim)",borderBottom:T===y?"2px solid var(--accent)":"2px solid transparent",transition:"color 0.2s, border-color 0.2s",position:"relative"},children:[y,y==="requests"&&n.length>0&&p.jsx("span",{className:"badge-pulse",style:{marginLeft:6,background:"#e55",color:"#fff",borderRadius:100,fontSize:8,padding:"1px 5px",fontWeight:700,display:"inline-block"},children:n.length})]},y))}),p.jsxs("div",{style:{flex:1,overflowY:"auto"},children:[T==="chats"&&(e.length===0?p.jsxs("div",{style:{padding:"40px 20px",textAlign:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dimmer)",letterSpacing:1,lineHeight:2,animation:"fadeIn 0.4s ease 0.2s both"},children:["NO CHATS YET",p.jsx("br",{}),"SEARCH A USERNAME",p.jsx("br",{}),"TO START"]}):e.map((y,L)=>p.jsx(KR,{chat:y,active:y.chatId===r,index:L,onClick:()=>{i(y),o&&l()}},y.chatId))),T==="requests"&&(n.length===0?p.jsx("div",{style:{padding:"40px 20px",textAlign:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"var(--dimmer)",letterSpacing:1,animation:"fadeIn 0.4s ease both"},children:"NO PENDING REQUESTS"}):n.map(y=>p.jsx(QR,{req:y,myUsername:t.username,onAccept:E,onDecline:k},y.from)))]}),p.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid var(--b1)",display:"flex",alignItems:"center",gap:10},children:[p.jsx("div",{style:{width:32,height:32,borderRadius:10,background:"var(--s3)",border:"1px solid var(--b1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,textTransform:"uppercase",color:"var(--accent)",flexShrink:0},children:(x=t.myName)==null?void 0:x[0]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontSize:13,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.myName}),p.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dim)",letterSpacing:.5},children:["@",t.username]})]}),p.jsx("button",{onClick:s,title:"Sign out",style:{background:"none",border:"none",color:"var(--dim)",cursor:"pointer",fontSize:16,padding:4,borderRadius:8,transition:"color 0.15s, transform 0.2s"},onMouseEnter:y=>{y.currentTarget.style.color="var(--text)",y.currentTarget.style.transform="translateX(2px)"},onMouseLeave:y=>{y.currentTarget.style.color="var(--dim)",y.currentTarget.style.transform="translateX(0)"},children:"↩"})]})]})}function XR({onOpenSidebar:t,isMobile:e}){return p.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,background:"var(--bg)"},children:[e&&p.jsx("button",{onClick:t,style:{background:"var(--accent)",color:"var(--bg)",border:"none",borderRadius:12,padding:"12px 24px",fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:8},children:"Open chats"}),p.jsx("div",{style:{fontSize:40,fontWeight:800,letterSpacing:-3,color:"var(--dimmer)"},children:"thread"}),p.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:3,textTransform:"uppercase",textAlign:"center",lineHeight:2},children:["select a chat",p.jsx("br",{}),"or search a username"]})]})}function JR(){const{uid:t,ready:e}=ER(),{prefs:n,setPref:r}=SR(),[i,s]=R.useState(()=>{try{return JSON.parse(localStorage.getItem("_thread_session")||"null")}catch{return null}}),[o,l]=R.useState(null),[a,u]=R.useState(!1),[c,d]=R.useState(window.innerWidth<768),h=CR(i==null?void 0:i.username),m=kR(i==null?void 0:i.username);R.useEffect(()=>{function g(){d(window.innerWidth<768)}return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),R.useEffect(()=>{!c&&!o&&h.length>0&&l(h[0])},[h,c,o]);function v(g){s(g),localStorage.setItem("_thread_session",JSON.stringify(g))}function w(){localStorage.removeItem("_thread_session"),s(null),l(null)}function T(g){l(g),u(!1)}return e?i?p.jsxs("div",{style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},children:[(!c||a)&&p.jsxs(p.Fragment,{children:[c&&a&&p.jsx("div",{onClick:()=>u(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:40,backdropFilter:"blur(2px)"}}),p.jsx(YR,{session:i,chats:h,requests:m,activeChatId:o==null?void 0:o.chatId,onSelectChat:T,onSignOut:w,isMobile:c,onClose:()=>u(!1)})]}),p.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0,height:"100%"},children:o?p.jsx(GR,{activeChat:o,session:i,uid:t,prefs:n,setPref:r,onSidebarOpen:()=>u(!0),showSidebarBtn:c},o.chatId):p.jsx(XR,{onOpenSidebar:()=>u(!0),isMobile:c})})]}):p.jsx(NR,{uid:t,onSignIn:v}):p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",flexDirection:"column",gap:16},children:[p.jsx("div",{style:{fontSize:40,fontWeight:800,letterSpacing:-3,color:"var(--text)"},children:"thread"}),p.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:"var(--dimmer)",letterSpacing:3,textTransform:"uppercase"},children:"connecting..."})]})}function Ly(){document.documentElement.style.setProperty("--vh",window.innerHeight*.01+"px")}Ly();window.addEventListener("resize",Ly);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/ThreadChat/sw.js").catch(()=>{})});hu.createRoot(document.getElementById("root")).render(p.jsx(Jy.StrictMode,{children:p.jsx(JR,{})}));
