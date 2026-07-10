(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function LE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _x={exports:{}},ad={},gx={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu=Symbol.for("react.element"),DE=Symbol.for("react.portal"),IE=Symbol.for("react.fragment"),NE=Symbol.for("react.strict_mode"),UE=Symbol.for("react.profiler"),OE=Symbol.for("react.provider"),FE=Symbol.for("react.context"),kE=Symbol.for("react.forward_ref"),zE=Symbol.for("react.suspense"),BE=Symbol.for("react.memo"),HE=Symbol.for("react.lazy"),Ag=Symbol.iterator;function VE(n){return n===null||typeof n!="object"?null:(n=Ag&&n[Ag]||n["@@iterator"],typeof n=="function"?n:null)}var vx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xx=Object.assign,yx={};function sl(n,e,t){this.props=n,this.context=e,this.refs=yx,this.updater=t||vx}sl.prototype.isReactComponent={};sl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};sl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Sx(){}Sx.prototype=sl.prototype;function $m(n,e,t){this.props=n,this.context=e,this.refs=yx,this.updater=t||vx}var Km=$m.prototype=new Sx;Km.constructor=$m;xx(Km,sl.prototype);Km.isPureReactComponent=!0;var Cg=Array.isArray,Mx=Object.prototype.hasOwnProperty,Zm={current:null},Ex={key:!0,ref:!0,__self:!0,__source:!0};function Tx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mx.call(e,i)&&!Ex.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Iu,type:n,key:s,ref:o,props:r,_owner:Zm.current}}function GE(n,e){return{$$typeof:Iu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Iu}function WE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Rg=/\/+/g;function Ud(n,e){return typeof n=="object"&&n!==null&&n.key!=null?WE(""+n.key):e.toString(36)}function Yc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Iu:case DE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ud(o,0):i,Cg(r)?(t="",n!=null&&(t=n.replace(Rg,"$&/")+"/"),Yc(r,e,t,"",function(u){return u})):r!=null&&(Qm(r)&&(r=GE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ud(s,a);o+=Yc(s,e,t,l,r)}else if(l=VE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ud(s,a++),o+=Yc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xu(n,e,t){if(n==null)return n;var i=[],r=0;return Yc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function XE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Vn={current:null},qc={transition:null},YE={ReactCurrentDispatcher:Vn,ReactCurrentBatchConfig:qc,ReactCurrentOwner:Zm};function wx(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:Xu,forEach:function(n,e,t){Xu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Xu(n,function(){e++}),e},toArray:function(n){return Xu(n,function(e){return e})||[]},only:function(n){if(!Qm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};rt.Component=sl;rt.Fragment=IE;rt.Profiler=UE;rt.PureComponent=$m;rt.StrictMode=NE;rt.Suspense=zE;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE;rt.act=wx;rt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=xx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Mx.call(e,l)&&!Ex.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Iu,type:n.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(n){return n={$$typeof:FE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:OE,_context:n},n.Consumer=n};rt.createElement=Tx;rt.createFactory=function(n){var e=Tx.bind(null,n);return e.type=n,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(n){return{$$typeof:kE,render:n}};rt.isValidElement=Qm;rt.lazy=function(n){return{$$typeof:HE,_payload:{_status:-1,_result:n},_init:XE}};rt.memo=function(n,e){return{$$typeof:BE,type:n,compare:e===void 0?null:e}};rt.startTransition=function(n){var e=qc.transition;qc.transition={};try{n()}finally{qc.transition=e}};rt.unstable_act=wx;rt.useCallback=function(n,e){return Vn.current.useCallback(n,e)};rt.useContext=function(n){return Vn.current.useContext(n)};rt.useDebugValue=function(){};rt.useDeferredValue=function(n){return Vn.current.useDeferredValue(n)};rt.useEffect=function(n,e){return Vn.current.useEffect(n,e)};rt.useId=function(){return Vn.current.useId()};rt.useImperativeHandle=function(n,e,t){return Vn.current.useImperativeHandle(n,e,t)};rt.useInsertionEffect=function(n,e){return Vn.current.useInsertionEffect(n,e)};rt.useLayoutEffect=function(n,e){return Vn.current.useLayoutEffect(n,e)};rt.useMemo=function(n,e){return Vn.current.useMemo(n,e)};rt.useReducer=function(n,e,t){return Vn.current.useReducer(n,e,t)};rt.useRef=function(n){return Vn.current.useRef(n)};rt.useState=function(n){return Vn.current.useState(n)};rt.useSyncExternalStore=function(n,e,t){return Vn.current.useSyncExternalStore(n,e,t)};rt.useTransition=function(){return Vn.current.useTransition()};rt.version="18.3.1";gx.exports=rt;var Bn=gx.exports;const qE=LE(Bn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE=Bn,$E=Symbol.for("react.element"),KE=Symbol.for("react.fragment"),ZE=Object.prototype.hasOwnProperty,QE=jE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JE={key:!0,ref:!0,__self:!0,__source:!0};function Ax(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ZE.call(e,i)&&!JE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$E,type:n,key:s,ref:o,props:r,_owner:QE.current}}ad.Fragment=KE;ad.jsx=Ax;ad.jsxs=Ax;_x.exports=ad;var Se=_x.exports,Zh={},Cx={exports:{}},Ai={},Rx={exports:{}},Px={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,$){var P=I.length;I.push($);e:for(;0<P;){var te=P-1>>>1,ve=I[te];if(0<r(ve,$))I[te]=$,I[P]=ve,P=te;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var $=I[0],P=I.pop();if(P!==$){I[0]=P;e:for(var te=0,ve=I.length,Xe=ve>>>1;te<Xe;){var q=2*(te+1)-1,ee=I[q],ce=q+1,ue=I[ce];if(0>r(ee,P))ce<ve&&0>r(ue,ee)?(I[te]=ue,I[ce]=P,te=ce):(I[te]=ee,I[q]=P,te=q);else if(ce<ve&&0>r(ue,P))I[te]=ue,I[ce]=P,te=ce;else break e}}return $}function r(I,$){var P=I.sortIndex-$.sortIndex;return P!==0?P:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=I)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function y(I){if(_=!1,x(I),!g)if(t(l)!==null)g=!0,G(C);else{var $=t(u);$!==null&&H(y,$.startTime-I)}}function C(I,$){g=!1,_&&(_=!1,h(R),R=-1),p=!0;var P=f;try{for(x($),d=t(l);d!==null&&(!(d.expirationTime>$)||I&&!b());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var ve=te(d.expirationTime<=$);$=n.unstable_now(),typeof ve=="function"?d.callback=ve:d===t(l)&&i(l),x($)}else i(l);d=t(l)}if(d!==null)var Xe=!0;else{var q=t(u);q!==null&&H(y,q.startTime-$),Xe=!1}return Xe}finally{d=null,f=P,p=!1}}var w=!1,M=null,R=-1,E=5,S=-1;function b(){return!(n.unstable_now()-S<E)}function U(){if(M!==null){var I=n.unstable_now();S=I;var $=!0;try{$=M(!0,I)}finally{$?k():(w=!1,M=null)}}else w=!1}var k;if(typeof v=="function")k=function(){v(U)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,j=W.port2;W.port1.onmessage=U,k=function(){j.postMessage(null)}}else k=function(){m(U,0)};function G(I){M=I,w||(w=!0,k())}function H(I,$){R=m(function(){I(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,G(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var P=f;f=$;try{return I()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=f;f=I;try{return $()}finally{f=P}},n.unstable_scheduleCallback=function(I,$,P){var te=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,I){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=P+ve,I={id:c++,callback:$,priorityLevel:I,startTime:P,expirationTime:ve,sortIndex:-1},P>te?(I.sortIndex=P,e(u,I),t(l)===null&&I===t(u)&&(_?(h(R),R=-1):_=!0,H(y,P-te))):(I.sortIndex=ve,e(l,I),g||p||(g=!0,G(C))),I},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(I){var $=f;return function(){var P=f;f=$;try{return I.apply(this,arguments)}finally{f=P}}}})(Px);Rx.exports=Px;var e1=Rx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1=Bn,Ei=e1;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bx=new Set,su={};function Uo(n,e){Ha(n,e),Ha(n+"Capture",e)}function Ha(n,e){for(su[n]=e,n=0;n<e.length;n++)bx.add(e[n])}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qh=Object.prototype.hasOwnProperty,n1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pg={},bg={};function i1(n){return Qh.call(bg,n)?!0:Qh.call(Pg,n)?!1:n1.test(n)?bg[n]=!0:(Pg[n]=!0,!1)}function r1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function s1(n,e,t,i){if(e===null||typeof e>"u"||r1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yn[n]=new Gn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yn[e]=new Gn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yn[n]=new Gn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yn[n]=new Gn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yn[n]=new Gn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yn[n]=new Gn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yn[n]=new Gn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yn[n]=new Gn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yn[n]=new Gn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Jm=/[\-:]([a-z])/g;function e_(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Jm,e_);yn[e]=new Gn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Jm,e_);yn[e]=new Gn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Jm,e_);yn[e]=new Gn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yn[n]=new Gn(n,1,!1,n.toLowerCase(),null,!1,!1)});yn.xlinkHref=new Gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yn[n]=new Gn(n,1,!1,n.toLowerCase(),null,!0,!0)});function t_(n,e,t,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(s1(e,t,r,i)&&(t=null),i||r===null?i1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Kr=t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yu=Symbol.for("react.element"),ua=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),Dx=Symbol.for("react.context"),i_=Symbol.for("react.forward_ref"),ep=Symbol.for("react.suspense"),tp=Symbol.for("react.suspense_list"),r_=Symbol.for("react.memo"),as=Symbol.for("react.lazy"),Ix=Symbol.for("react.offscreen"),Lg=Symbol.iterator;function cl(n){return n===null||typeof n!="object"?null:(n=Lg&&n[Lg]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Object.assign,Od;function Al(n){if(Od===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Od=e&&e[1]||""}return`
`+Od+n}var Fd=!1;function kd(n,e){if(!n||Fd)return"";Fd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Al(n):""}function o1(n){switch(n.tag){case 5:return Al(n.type);case 16:return Al("Lazy");case 13:return Al("Suspense");case 19:return Al("SuspenseList");case 0:case 2:case 15:return n=kd(n.type,!1),n;case 11:return n=kd(n.type.render,!1),n;case 1:return n=kd(n.type,!0),n;default:return""}}function np(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ca:return"Fragment";case ua:return"Portal";case Jh:return"Profiler";case n_:return"StrictMode";case ep:return"Suspense";case tp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Dx:return(n.displayName||"Context")+".Consumer";case Lx:return(n._context.displayName||"Context")+".Provider";case i_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case r_:return e=n.displayName||null,e!==null?e:np(n.type)||"Memo";case as:e=n._payload,n=n._init;try{return np(n(e))}catch{}}return null}function a1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return np(e);case 8:return e===n_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ds(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Nx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l1(n){var e=Nx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function qu(n){n._valueTracker||(n._valueTracker=l1(n))}function Ux(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Nx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function yf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ip(n,e){var t=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Dg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ds(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ox(n,e){e=e.checked,e!=null&&t_(n,"checked",e,!1)}function rp(n,e){Ox(n,e);var t=Ds(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?sp(n,e.type,t):e.hasOwnProperty("defaultValue")&&sp(n,e.type,Ds(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ig(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function sp(n,e,t){(e!=="number"||yf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Cl=Array.isArray;function wa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ds(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function op(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ng(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(Cl(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ds(t)}}function Fx(n,e){var t=Ds(e.value),i=Ds(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Ug(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function kx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ap(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?kx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ju,zx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ju=ju||document.createElement("div"),ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ju.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ou(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var kl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u1=["Webkit","ms","Moz","O"];Object.keys(kl).forEach(function(n){u1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),kl[e]=kl[n]})});function Bx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||kl.hasOwnProperty(n)&&kl[n]?(""+e).trim():e+"px"}function Hx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Bx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var c1=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lp(n,e){if(e){if(c1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function up(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cp=null;function s_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fp=null,Aa=null,Ca=null;function Og(n){if(n=Ou(n)){if(typeof fp!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=dd(e),fp(n.stateNode,n.type,e))}}function Vx(n){Aa?Ca?Ca.push(n):Ca=[n]:Aa=n}function Gx(){if(Aa){var n=Aa,e=Ca;if(Ca=Aa=null,Og(n),e)for(n=0;n<e.length;n++)Og(e[n])}}function Wx(n,e){return n(e)}function Xx(){}var zd=!1;function Yx(n,e,t){if(zd)return n(e,t);zd=!0;try{return Wx(n,e,t)}finally{zd=!1,(Aa!==null||Ca!==null)&&(Xx(),Gx())}}function au(n,e){var t=n.stateNode;if(t===null)return null;var i=dd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var dp=!1;if(Vr)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){dp=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{dp=!1}function f1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var zl=!1,Sf=null,Mf=!1,hp=null,d1={onError:function(n){zl=!0,Sf=n}};function h1(n,e,t,i,r,s,o,a,l){zl=!1,Sf=null,f1.apply(d1,arguments)}function p1(n,e,t,i,r,s,o,a,l){if(h1.apply(this,arguments),zl){if(zl){var u=Sf;zl=!1,Sf=null}else throw Error(ae(198));Mf||(Mf=!0,hp=u)}}function Oo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function qx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Fg(n){if(Oo(n)!==n)throw Error(ae(188))}function m1(n){var e=n.alternate;if(!e){if(e=Oo(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Fg(r),n;if(s===i)return Fg(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function jx(n){return n=m1(n),n!==null?$x(n):null}function $x(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=$x(n);if(e!==null)return e;n=n.sibling}return null}var Kx=Ei.unstable_scheduleCallback,kg=Ei.unstable_cancelCallback,_1=Ei.unstable_shouldYield,g1=Ei.unstable_requestPaint,Xt=Ei.unstable_now,v1=Ei.unstable_getCurrentPriorityLevel,o_=Ei.unstable_ImmediatePriority,Zx=Ei.unstable_UserBlockingPriority,Ef=Ei.unstable_NormalPriority,x1=Ei.unstable_LowPriority,Qx=Ei.unstable_IdlePriority,ld=null,mr=null;function y1(n){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(ld,n,void 0,(n.current.flags&128)===128)}catch{}}var tr=Math.clz32?Math.clz32:E1,S1=Math.log,M1=Math.LN2;function E1(n){return n>>>=0,n===0?32:31-(S1(n)/M1|0)|0}var $u=64,Ku=4194304;function Rl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Tf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Rl(a):(s&=o,s!==0&&(i=Rl(s)))}else o=t&~r,o!==0?i=Rl(o):s!==0&&(i=Rl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-tr(e),r=1<<t,i|=n[t],e&=~r;return i}function T1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-tr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=T1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function pp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Jx(){var n=$u;return $u<<=1,!($u&4194240)&&($u=64),n}function Bd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Nu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-tr(e),n[e]=t}function A1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-tr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function a_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-tr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var yt=0;function ey(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ty,l_,ny,iy,ry,mp=!1,Zu=[],xs=null,ys=null,Ss=null,lu=new Map,uu=new Map,us=[],C1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zg(n,e){switch(n){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":ys=null;break;case"mouseover":case"mouseout":Ss=null;break;case"pointerover":case"pointerout":lu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(e.pointerId)}}function dl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ou(e),e!==null&&l_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function R1(n,e,t,i,r){switch(e){case"focusin":return xs=dl(xs,n,e,t,i,r),!0;case"dragenter":return ys=dl(ys,n,e,t,i,r),!0;case"mouseover":return Ss=dl(Ss,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return lu.set(s,dl(lu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uu.set(s,dl(uu.get(s)||null,n,e,t,i,r)),!0}return!1}function sy(n){var e=lo(n.target);if(e!==null){var t=Oo(e);if(t!==null){if(e=t.tag,e===13){if(e=qx(t),e!==null){n.blockedOn=e,ry(n.priority,function(){ny(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=_p(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);cp=i,t.target.dispatchEvent(i),cp=null}else return e=Ou(t),e!==null&&l_(e),n.blockedOn=t,!1;e.shift()}return!0}function Bg(n,e,t){jc(n)&&t.delete(e)}function P1(){mp=!1,xs!==null&&jc(xs)&&(xs=null),ys!==null&&jc(ys)&&(ys=null),Ss!==null&&jc(Ss)&&(Ss=null),lu.forEach(Bg),uu.forEach(Bg)}function hl(n,e){n.blockedOn===e&&(n.blockedOn=null,mp||(mp=!0,Ei.unstable_scheduleCallback(Ei.unstable_NormalPriority,P1)))}function cu(n){function e(r){return hl(r,n)}if(0<Zu.length){hl(Zu[0],n);for(var t=1;t<Zu.length;t++){var i=Zu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(xs!==null&&hl(xs,n),ys!==null&&hl(ys,n),Ss!==null&&hl(Ss,n),lu.forEach(e),uu.forEach(e),t=0;t<us.length;t++)i=us[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<us.length&&(t=us[0],t.blockedOn===null);)sy(t),t.blockedOn===null&&us.shift()}var Ra=Kr.ReactCurrentBatchConfig,wf=!0;function b1(n,e,t,i){var r=yt,s=Ra.transition;Ra.transition=null;try{yt=1,u_(n,e,t,i)}finally{yt=r,Ra.transition=s}}function L1(n,e,t,i){var r=yt,s=Ra.transition;Ra.transition=null;try{yt=4,u_(n,e,t,i)}finally{yt=r,Ra.transition=s}}function u_(n,e,t,i){if(wf){var r=_p(n,e,t,i);if(r===null)Kd(n,e,i,Af,t),zg(n,i);else if(R1(r,n,e,t,i))i.stopPropagation();else if(zg(n,i),e&4&&-1<C1.indexOf(n)){for(;r!==null;){var s=Ou(r);if(s!==null&&ty(s),s=_p(n,e,t,i),s===null&&Kd(n,e,i,Af,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Kd(n,e,i,null,t)}}var Af=null;function _p(n,e,t,i){if(Af=null,n=s_(i),n=lo(n),n!==null)if(e=Oo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=qx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Af=n,null}function oy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v1()){case o_:return 1;case Zx:return 4;case Ef:case x1:return 16;case Qx:return 536870912;default:return 16}default:return 16}}var ds=null,c_=null,$c=null;function ay(){if($c)return $c;var n,e=c_,t=e.length,i,r="value"in ds?ds.value:ds.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return $c=r.slice(n,1<i?1-i:void 0)}function Kc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Qu(){return!0}function Hg(){return!1}function Ci(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qu:Hg,this.isPropagationStopped=Hg,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qu)},persist:function(){},isPersistent:Qu}),e}var ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},f_=Ci(ol),Uu=Ht({},ol,{view:0,detail:0}),D1=Ci(Uu),Hd,Vd,pl,ud=Ht({},Uu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:d_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pl&&(pl&&n.type==="mousemove"?(Hd=n.screenX-pl.screenX,Vd=n.screenY-pl.screenY):Vd=Hd=0,pl=n),Hd)},movementY:function(n){return"movementY"in n?n.movementY:Vd}}),Vg=Ci(ud),I1=Ht({},ud,{dataTransfer:0}),N1=Ci(I1),U1=Ht({},Uu,{relatedTarget:0}),Gd=Ci(U1),O1=Ht({},ol,{animationName:0,elapsedTime:0,pseudoElement:0}),F1=Ci(O1),k1=Ht({},ol,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),z1=Ci(k1),B1=Ht({},ol,{data:0}),Gg=Ci(B1),H1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=G1[n])?!!e[n]:!1}function d_(){return W1}var X1=Ht({},Uu,{key:function(n){if(n.key){var e=H1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Kc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?V1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:d_,charCode:function(n){return n.type==="keypress"?Kc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Kc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Y1=Ci(X1),q1=Ht({},ud,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wg=Ci(q1),j1=Ht({},Uu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:d_}),$1=Ci(j1),K1=Ht({},ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z1=Ci(K1),Q1=Ht({},ud,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),J1=Ci(Q1),eT=[9,13,27,32],h_=Vr&&"CompositionEvent"in window,Bl=null;Vr&&"documentMode"in document&&(Bl=document.documentMode);var tT=Vr&&"TextEvent"in window&&!Bl,ly=Vr&&(!h_||Bl&&8<Bl&&11>=Bl),Xg=" ",Yg=!1;function uy(n,e){switch(n){case"keyup":return eT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fa=!1;function nT(n,e){switch(n){case"compositionend":return cy(e);case"keypress":return e.which!==32?null:(Yg=!0,Xg);case"textInput":return n=e.data,n===Xg&&Yg?null:n;default:return null}}function iT(n,e){if(fa)return n==="compositionend"||!h_&&uy(n,e)?(n=ay(),$c=c_=ds=null,fa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ly&&e.locale!=="ko"?null:e.data;default:return null}}var rT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!rT[n.type]:e==="textarea"}function fy(n,e,t,i){Vx(i),e=Cf(e,"onChange"),0<e.length&&(t=new f_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Hl=null,fu=null;function sT(n){My(n,0)}function cd(n){var e=pa(n);if(Ux(e))return n}function oT(n,e){if(n==="change")return e}var dy=!1;if(Vr){var Wd;if(Vr){var Xd="oninput"in document;if(!Xd){var jg=document.createElement("div");jg.setAttribute("oninput","return;"),Xd=typeof jg.oninput=="function"}Wd=Xd}else Wd=!1;dy=Wd&&(!document.documentMode||9<document.documentMode)}function $g(){Hl&&(Hl.detachEvent("onpropertychange",hy),fu=Hl=null)}function hy(n){if(n.propertyName==="value"&&cd(fu)){var e=[];fy(e,fu,n,s_(n)),Yx(sT,e)}}function aT(n,e,t){n==="focusin"?($g(),Hl=e,fu=t,Hl.attachEvent("onpropertychange",hy)):n==="focusout"&&$g()}function lT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return cd(fu)}function uT(n,e){if(n==="click")return cd(e)}function cT(n,e){if(n==="input"||n==="change")return cd(e)}function fT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ir=typeof Object.is=="function"?Object.is:fT;function du(n,e){if(ir(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Qh.call(e,r)||!ir(n[r],e[r]))return!1}return!0}function Kg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zg(n,e){var t=Kg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Kg(t)}}function py(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?py(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function my(){for(var n=window,e=yf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=yf(n.document)}return e}function p_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function dT(n){var e=my(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&py(t.ownerDocument.documentElement,t)){if(i!==null&&p_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Zg(t,s);var o=Zg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hT=Vr&&"documentMode"in document&&11>=document.documentMode,da=null,gp=null,Vl=null,vp=!1;function Qg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;vp||da==null||da!==yf(i)||(i=da,"selectionStart"in i&&p_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vl&&du(Vl,i)||(Vl=i,i=Cf(gp,"onSelect"),0<i.length&&(e=new f_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=da)))}function Ju(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ha={animationend:Ju("Animation","AnimationEnd"),animationiteration:Ju("Animation","AnimationIteration"),animationstart:Ju("Animation","AnimationStart"),transitionend:Ju("Transition","TransitionEnd")},Yd={},_y={};Vr&&(_y=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function fd(n){if(Yd[n])return Yd[n];if(!ha[n])return n;var e=ha[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in _y)return Yd[n]=e[t];return n}var gy=fd("animationend"),vy=fd("animationiteration"),xy=fd("animationstart"),yy=fd("transitionend"),Sy=new Map,Jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bs(n,e){Sy.set(n,e),Uo(e,[n])}for(var qd=0;qd<Jg.length;qd++){var jd=Jg[qd],pT=jd.toLowerCase(),mT=jd[0].toUpperCase()+jd.slice(1);Bs(pT,"on"+mT)}Bs(gy,"onAnimationEnd");Bs(vy,"onAnimationIteration");Bs(xy,"onAnimationStart");Bs("dblclick","onDoubleClick");Bs("focusin","onFocus");Bs("focusout","onBlur");Bs(yy,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_T=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pl));function e0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,p1(i,e,void 0,n),n.currentTarget=null}function My(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;e0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;e0(r,a,u),s=l}}}if(Mf)throw n=hp,Mf=!1,hp=null,n}function bt(n,e){var t=e[Ep];t===void 0&&(t=e[Ep]=new Set);var i=n+"__bubble";t.has(i)||(Ey(e,n,2,!1),t.add(i))}function $d(n,e,t){var i=0;e&&(i|=4),Ey(t,n,i,e)}var ec="_reactListening"+Math.random().toString(36).slice(2);function hu(n){if(!n[ec]){n[ec]=!0,bx.forEach(function(t){t!=="selectionchange"&&(_T.has(t)||$d(t,!1,n),$d(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ec]||(e[ec]=!0,$d("selectionchange",!1,e))}}function Ey(n,e,t,i){switch(oy(e)){case 1:var r=b1;break;case 4:r=L1;break;default:r=u_}t=r.bind(null,e,t,n),r=void 0,!dp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Kd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Yx(function(){var u=s,c=s_(t),d=[];e:{var f=Sy.get(n);if(f!==void 0){var p=f_,g=n;switch(n){case"keypress":if(Kc(t)===0)break e;case"keydown":case"keyup":p=Y1;break;case"focusin":g="focus",p=Gd;break;case"focusout":g="blur",p=Gd;break;case"beforeblur":case"afterblur":p=Gd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=N1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$1;break;case gy:case vy:case xy:p=F1;break;case yy:p=Z1;break;case"scroll":p=D1;break;case"wheel":p=J1;break;case"copy":case"cut":case"paste":p=z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wg}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=au(v,h),y!=null&&_.push(pu(v,y,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==cp&&(g=t.relatedTarget||t.fromElement)&&(lo(g)||g[Gr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?lo(g):null,g!==null&&(m=Oo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Vg,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Wg,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:pa(p),x=g==null?f:pa(g),f=new _(y,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,y=null,lo(c)===u&&(_=new _(h,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,h=g,v=0,x=_;x;x=zo(x))v++;for(x=0,y=h;y;y=zo(y))x++;for(;0<v-x;)_=zo(_),v--;for(;0<x-v;)h=zo(h),x--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=zo(_),h=zo(h)}_=null}else _=null;p!==null&&t0(d,f,p,_,!1),g!==null&&m!==null&&t0(d,m,g,_,!0)}}e:{if(f=u?pa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=oT;else if(qg(f))if(dy)C=cT;else{C=lT;var w=aT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=uT);if(C&&(C=C(n,u))){fy(d,C,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&sp(f,"number",f.value)}switch(w=u?pa(u):window,n){case"focusin":(qg(w)||w.contentEditable==="true")&&(da=w,gp=u,Vl=null);break;case"focusout":Vl=gp=da=null;break;case"mousedown":vp=!0;break;case"contextmenu":case"mouseup":case"dragend":vp=!1,Qg(d,t,c);break;case"selectionchange":if(hT)break;case"keydown":case"keyup":Qg(d,t,c)}var M;if(h_)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else fa?uy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(ly&&t.locale!=="ko"&&(fa||R!=="onCompositionStart"?R==="onCompositionEnd"&&fa&&(M=ay()):(ds=c,c_="value"in ds?ds.value:ds.textContent,fa=!0)),w=Cf(u,R),0<w.length&&(R=new Gg(R,n,null,t,c),d.push({event:R,listeners:w}),M?R.data=M:(M=cy(t),M!==null&&(R.data=M)))),(M=tT?nT(n,t):iT(n,t))&&(u=Cf(u,"onBeforeInput"),0<u.length&&(c=new Gg("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}My(d,e)})}function pu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Cf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=au(n,t),s!=null&&i.unshift(pu(n,s,r)),s=au(n,e),s!=null&&i.push(pu(n,s,r))),n=n.return}return i}function zo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function t0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=au(t,s),l!=null&&o.unshift(pu(t,l,a))):r||(l=au(t,s),l!=null&&o.push(pu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var gT=/\r\n?/g,vT=/\u0000|\uFFFD/g;function n0(n){return(typeof n=="string"?n:""+n).replace(gT,`
`).replace(vT,"")}function tc(n,e,t){if(e=n0(e),n0(n)!==e&&t)throw Error(ae(425))}function Rf(){}var xp=null,yp=null;function Sp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mp=typeof setTimeout=="function"?setTimeout:void 0,xT=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,yT=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(n){return i0.resolve(null).then(n).catch(ST)}:Mp;function ST(n){setTimeout(function(){throw n})}function Zd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),cu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);cu(e)}function Ms(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function r0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var al=Math.random().toString(36).slice(2),cr="__reactFiber$"+al,mu="__reactProps$"+al,Gr="__reactContainer$"+al,Ep="__reactEvents$"+al,MT="__reactListeners$"+al,ET="__reactHandles$"+al;function lo(n){var e=n[cr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Gr]||t[cr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=r0(n);n!==null;){if(t=n[cr])return t;n=r0(n)}return e}n=t,t=n.parentNode}return null}function Ou(n){return n=n[cr]||n[Gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function pa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function dd(n){return n[mu]||null}var Tp=[],ma=-1;function Hs(n){return{current:n}}function Dt(n){0>ma||(n.current=Tp[ma],Tp[ma]=null,ma--)}function Rt(n,e){ma++,Tp[ma]=n.current,n.current=e}var Is={},Ln=Hs(Is),Kn=Hs(!1),wo=Is;function Va(n,e){var t=n.type.contextTypes;if(!t)return Is;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Zn(n){return n=n.childContextTypes,n!=null}function Pf(){Dt(Kn),Dt(Ln)}function s0(n,e,t){if(Ln.current!==Is)throw Error(ae(168));Rt(Ln,e),Rt(Kn,t)}function Ty(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,a1(n)||"Unknown",r));return Ht({},t,i)}function bf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Is,wo=Ln.current,Rt(Ln,n),Rt(Kn,Kn.current),!0}function o0(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=Ty(n,e,wo),i.__reactInternalMemoizedMergedChildContext=n,Dt(Kn),Dt(Ln),Rt(Ln,n)):Dt(Kn),Rt(Kn,t)}var br=null,hd=!1,Qd=!1;function wy(n){br===null?br=[n]:br.push(n)}function TT(n){hd=!0,wy(n)}function Vs(){if(!Qd&&br!==null){Qd=!0;var n=0,e=yt;try{var t=br;for(yt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}br=null,hd=!1}catch(r){throw br!==null&&(br=br.slice(n+1)),Kx(o_,Vs),r}finally{yt=e,Qd=!1}}return null}var _a=[],ga=0,Lf=null,Df=0,Li=[],Di=0,Ao=null,Nr=1,Ur="";function Js(n,e){_a[ga++]=Df,_a[ga++]=Lf,Lf=n,Df=e}function Ay(n,e,t){Li[Di++]=Nr,Li[Di++]=Ur,Li[Di++]=Ao,Ao=n;var i=Nr;n=Ur;var r=32-tr(i)-1;i&=~(1<<r),t+=1;var s=32-tr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Nr=1<<32-tr(e)+r|t<<r|i,Ur=s+n}else Nr=1<<s|t<<r|i,Ur=n}function m_(n){n.return!==null&&(Js(n,1),Ay(n,1,0))}function __(n){for(;n===Lf;)Lf=_a[--ga],_a[ga]=null,Df=_a[--ga],_a[ga]=null;for(;n===Ao;)Ao=Li[--Di],Li[Di]=null,Ur=Li[--Di],Li[Di]=null,Nr=Li[--Di],Li[Di]=null}var Si=null,vi=null,It=!1,Qi=null;function Cy(n,e){var t=Oi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function a0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Si=n,vi=Ms(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Si=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ao!==null?{id:Nr,overflow:Ur}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Oi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Si=n,vi=null,!0):!1;default:return!1}}function wp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ap(n){if(It){var e=vi;if(e){var t=e;if(!a0(n,e)){if(wp(n))throw Error(ae(418));e=Ms(t.nextSibling);var i=Si;e&&a0(n,e)?Cy(i,t):(n.flags=n.flags&-4097|2,It=!1,Si=n)}}else{if(wp(n))throw Error(ae(418));n.flags=n.flags&-4097|2,It=!1,Si=n}}}function l0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Si=n}function nc(n){if(n!==Si)return!1;if(!It)return l0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Sp(n.type,n.memoizedProps)),e&&(e=vi)){if(wp(n))throw Ry(),Error(ae(418));for(;e;)Cy(n,e),e=Ms(e.nextSibling)}if(l0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=Ms(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=Si?Ms(n.stateNode.nextSibling):null;return!0}function Ry(){for(var n=vi;n;)n=Ms(n.nextSibling)}function Ga(){vi=Si=null,It=!1}function g_(n){Qi===null?Qi=[n]:Qi.push(n)}var wT=Kr.ReactCurrentBatchConfig;function ml(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function ic(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function u0(n){var e=n._init;return e(n._payload)}function Py(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=As(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=sh(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var C=x.type;return C===ca?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===as&&u0(C)===v.type)?(y=r(v,x.props),y.ref=ml(h,v,x),y.return=h,y):(y=rf(x.type,x.key,x.props,null,h.mode,y),y.ref=ml(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=oh(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,C){return v===null||v.tag!==7?(v=go(x,h.mode,y,C),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=sh(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yu:return x=rf(v.type,v.key,v.props,null,h.mode,x),x.ref=ml(h,null,v),x.return=h,x;case ua:return v=oh(v,h.mode,x),v.return=h,v;case as:var y=v._init;return d(h,y(v._payload),x)}if(Cl(v)||cl(v))return v=go(v,h.mode,x,null),v.return=h,v;ic(h,v)}return null}function f(h,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yu:return x.key===C?l(h,v,x,y):null;case ua:return x.key===C?u(h,v,x,y):null;case as:return C=x._init,f(h,v,C(x._payload),y)}if(Cl(x)||cl(x))return C!==null?null:c(h,v,x,y,null);ic(h,x)}return null}function p(h,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yu:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,C);case ua:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,C);case as:var w=y._init;return p(h,v,x,w(y._payload),C)}if(Cl(y)||cl(y))return h=h.get(x)||null,c(v,h,y,C,null);ic(v,y)}return null}function g(h,v,x,y){for(var C=null,w=null,M=v,R=v=0,E=null;M!==null&&R<x.length;R++){M.index>R?(E=M,M=null):E=M.sibling;var S=f(h,M,x[R],y);if(S===null){M===null&&(M=E);break}n&&M&&S.alternate===null&&e(h,M),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S,M=E}if(R===x.length)return t(h,M),It&&Js(h,R),C;if(M===null){for(;R<x.length;R++)M=d(h,x[R],y),M!==null&&(v=s(M,v,R),w===null?C=M:w.sibling=M,w=M);return It&&Js(h,R),C}for(M=i(h,M);R<x.length;R++)E=p(M,h,R,x[R],y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?R:E.key),v=s(E,v,R),w===null?C=E:w.sibling=E,w=E);return n&&M.forEach(function(b){return e(h,b)}),It&&Js(h,R),C}function _(h,v,x,y){var C=cl(x);if(typeof C!="function")throw Error(ae(150));if(x=C.call(x),x==null)throw Error(ae(151));for(var w=C=null,M=v,R=v=0,E=null,S=x.next();M!==null&&!S.done;R++,S=x.next()){M.index>R?(E=M,M=null):E=M.sibling;var b=f(h,M,S.value,y);if(b===null){M===null&&(M=E);break}n&&M&&b.alternate===null&&e(h,M),v=s(b,v,R),w===null?C=b:w.sibling=b,w=b,M=E}if(S.done)return t(h,M),It&&Js(h,R),C;if(M===null){for(;!S.done;R++,S=x.next())S=d(h,S.value,y),S!==null&&(v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return It&&Js(h,R),C}for(M=i(h,M);!S.done;R++,S=x.next())S=p(M,h,R,S.value,y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?R:S.key),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return n&&M.forEach(function(U){return e(h,U)}),It&&Js(h,R),C}function m(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ca&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Yu:e:{for(var C=x.key,w=v;w!==null;){if(w.key===C){if(C=x.type,C===ca){if(w.tag===7){t(h,w.sibling),v=r(w,x.props.children),v.return=h,h=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===as&&u0(C)===w.type){t(h,w.sibling),v=r(w,x.props),v.ref=ml(h,w,x),v.return=h,h=v;break e}t(h,w);break}else e(h,w);w=w.sibling}x.type===ca?(v=go(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=rf(x.type,x.key,x.props,null,h.mode,y),y.ref=ml(h,v,x),y.return=h,h=y)}return o(h);case ua:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=oh(x,h.mode,y),v.return=h,h=v}return o(h);case as:return w=x._init,m(h,v,w(x._payload),y)}if(Cl(x))return g(h,v,x,y);if(cl(x))return _(h,v,x,y);ic(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=sh(x,h.mode,y),v.return=h,h=v),o(h)):t(h,v)}return m}var Wa=Py(!0),by=Py(!1),If=Hs(null),Nf=null,va=null,v_=null;function x_(){v_=va=Nf=null}function y_(n){var e=If.current;Dt(If),n._currentValue=e}function Cp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Pa(n,e){Nf=n,v_=va=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&($n=!0),n.firstContext=null)}function Vi(n){var e=n._currentValue;if(v_!==n)if(n={context:n,memoizedValue:e,next:null},va===null){if(Nf===null)throw Error(ae(308));va=n,Nf.dependencies={lanes:0,firstContext:n}}else va=va.next=n;return e}var uo=null;function S_(n){uo===null?uo=[n]:uo.push(n)}function Ly(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,S_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Wr(n,i)}function Wr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ls=!1;function M_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Br(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Es(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wr(n,t)}return r=i.interleaved,r===null?(e.next=e,S_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wr(n,t)}function Zc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,a_(n,t)}}function c0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Uf(n,e,t,i){var r=n.updateQueue;ls=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Ht({},d,f);break e;case 2:ls=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ro|=o,n.lanes=o,n.memoizedState=d}}function f0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Fu={},_r=Hs(Fu),_u=Hs(Fu),gu=Hs(Fu);function co(n){if(n===Fu)throw Error(ae(174));return n}function E_(n,e){switch(Rt(gu,e),Rt(_u,n),Rt(_r,Fu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ap(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ap(e,n)}Dt(_r),Rt(_r,e)}function Xa(){Dt(_r),Dt(_u),Dt(gu)}function Iy(n){co(gu.current);var e=co(_r.current),t=ap(e,n.type);e!==t&&(Rt(_u,n),Rt(_r,t))}function T_(n){_u.current===n&&(Dt(_r),Dt(_u))}var Ft=Hs(0);function Of(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jd=[];function w_(){for(var n=0;n<Jd.length;n++)Jd[n]._workInProgressVersionPrimary=null;Jd.length=0}var Qc=Kr.ReactCurrentDispatcher,eh=Kr.ReactCurrentBatchConfig,Co=0,Bt=null,nn=null,fn=null,Ff=!1,Gl=!1,vu=0,AT=0;function Sn(){throw Error(ae(321))}function A_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ir(n[t],e[t]))return!1;return!0}function C_(n,e,t,i,r,s){if(Co=s,Bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qc.current=n===null||n.memoizedState===null?bT:LT,n=t(i,r),Gl){s=0;do{if(Gl=!1,vu=0,25<=s)throw Error(ae(301));s+=1,fn=nn=null,e.updateQueue=null,Qc.current=DT,n=t(i,r)}while(Gl)}if(Qc.current=kf,e=nn!==null&&nn.next!==null,Co=0,fn=nn=Bt=null,Ff=!1,e)throw Error(ae(300));return n}function R_(){var n=vu!==0;return vu=0,n}function sr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Bt.memoizedState=fn=n:fn=fn.next=n,fn}function Gi(){if(nn===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var e=fn===null?Bt.memoizedState:fn.next;if(e!==null)fn=e,nn=n;else{if(n===null)throw Error(ae(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},fn===null?Bt.memoizedState=fn=n:fn=fn.next=n}return fn}function xu(n,e){return typeof e=="function"?e(n):e}function th(n){var e=Gi(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=nn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Co&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Bt.lanes|=c,Ro|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ir(i,e.memoizedState)||($n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Bt.lanes|=s,Ro|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function nh(n){var e=Gi(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ir(s,e.memoizedState)||($n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ny(){}function Uy(n,e){var t=Bt,i=Gi(),r=e(),s=!ir(i.memoizedState,r);if(s&&(i.memoizedState=r,$n=!0),i=i.queue,P_(ky.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||fn!==null&&fn.memoizedState.tag&1){if(t.flags|=2048,yu(9,Fy.bind(null,t,i,r,e),void 0,null),hn===null)throw Error(ae(349));Co&30||Oy(t,e,r)}return r}function Oy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Fy(n,e,t,i){e.value=t,e.getSnapshot=i,zy(e)&&By(n)}function ky(n,e,t){return t(function(){zy(e)&&By(n)})}function zy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ir(n,t)}catch{return!0}}function By(n){var e=Wr(n,1);e!==null&&nr(e,n,1,-1)}function d0(n){var e=sr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:n},e.queue=n,n=n.dispatch=PT.bind(null,Bt,n),[e.memoizedState,n]}function yu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Hy(){return Gi().memoizedState}function Jc(n,e,t,i){var r=sr();Bt.flags|=n,r.memoizedState=yu(1|e,t,void 0,i===void 0?null:i)}function pd(n,e,t,i){var r=Gi();i=i===void 0?null:i;var s=void 0;if(nn!==null){var o=nn.memoizedState;if(s=o.destroy,i!==null&&A_(i,o.deps)){r.memoizedState=yu(e,t,s,i);return}}Bt.flags|=n,r.memoizedState=yu(1|e,t,s,i)}function h0(n,e){return Jc(8390656,8,n,e)}function P_(n,e){return pd(2048,8,n,e)}function Vy(n,e){return pd(4,2,n,e)}function Gy(n,e){return pd(4,4,n,e)}function Wy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Xy(n,e,t){return t=t!=null?t.concat([n]):null,pd(4,4,Wy.bind(null,e,n),t)}function b_(){}function Yy(n,e){var t=Gi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&A_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function qy(n,e){var t=Gi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&A_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function jy(n,e,t){return Co&21?(ir(t,e)||(t=Jx(),Bt.lanes|=t,Ro|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=t)}function CT(n,e){var t=yt;yt=t!==0&&4>t?t:4,n(!0);var i=eh.transition;eh.transition={};try{n(!1),e()}finally{yt=t,eh.transition=i}}function $y(){return Gi().memoizedState}function RT(n,e,t){var i=ws(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Ky(n))Zy(e,t);else if(t=Ly(n,e,t,i),t!==null){var r=Hn();nr(t,n,i,r),Qy(t,e,i)}}function PT(n,e,t){var i=ws(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ky(n))Zy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ir(a,o)){var l=e.interleaved;l===null?(r.next=r,S_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Ly(n,e,r,i),t!==null&&(r=Hn(),nr(t,n,i,r),Qy(t,e,i))}}function Ky(n){var e=n.alternate;return n===Bt||e!==null&&e===Bt}function Zy(n,e){Gl=Ff=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Qy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,a_(n,t)}}var kf={readContext:Vi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},bT={readContext:Vi,useCallback:function(n,e){return sr().memoizedState=[n,e===void 0?null:e],n},useContext:Vi,useEffect:h0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Jc(4194308,4,Wy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Jc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Jc(4,2,n,e)},useMemo:function(n,e){var t=sr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=sr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=RT.bind(null,Bt,n),[i.memoizedState,n]},useRef:function(n){var e=sr();return n={current:n},e.memoizedState=n},useState:d0,useDebugValue:b_,useDeferredValue:function(n){return sr().memoizedState=n},useTransition:function(){var n=d0(!1),e=n[0];return n=CT.bind(null,n[1]),sr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Bt,r=sr();if(It){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),hn===null)throw Error(ae(349));Co&30||Oy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,h0(ky.bind(null,i,s,n),[n]),i.flags|=2048,yu(9,Fy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=sr(),e=hn.identifierPrefix;if(It){var t=Ur,i=Nr;t=(i&~(1<<32-tr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=vu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=AT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},LT={readContext:Vi,useCallback:Yy,useContext:Vi,useEffect:P_,useImperativeHandle:Xy,useInsertionEffect:Vy,useLayoutEffect:Gy,useMemo:qy,useReducer:th,useRef:Hy,useState:function(){return th(xu)},useDebugValue:b_,useDeferredValue:function(n){var e=Gi();return jy(e,nn.memoizedState,n)},useTransition:function(){var n=th(xu)[0],e=Gi().memoizedState;return[n,e]},useMutableSource:Ny,useSyncExternalStore:Uy,useId:$y,unstable_isNewReconciler:!1},DT={readContext:Vi,useCallback:Yy,useContext:Vi,useEffect:P_,useImperativeHandle:Xy,useInsertionEffect:Vy,useLayoutEffect:Gy,useMemo:qy,useReducer:nh,useRef:Hy,useState:function(){return nh(xu)},useDebugValue:b_,useDeferredValue:function(n){var e=Gi();return nn===null?e.memoizedState=n:jy(e,nn.memoizedState,n)},useTransition:function(){var n=nh(xu)[0],e=Gi().memoizedState;return[n,e]},useMutableSource:Ny,useSyncExternalStore:Uy,useId:$y,unstable_isNewReconciler:!1};function Ki(n,e){if(n&&n.defaultProps){e=Ht({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Rp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ht({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var md={isMounted:function(n){return(n=n._reactInternals)?Oo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Hn(),r=ws(n),s=Br(i,r);s.payload=e,t!=null&&(s.callback=t),e=Es(n,s,r),e!==null&&(nr(e,n,r,i),Zc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Hn(),r=ws(n),s=Br(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Es(n,s,r),e!==null&&(nr(e,n,r,i),Zc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Hn(),i=ws(n),r=Br(t,i);r.tag=2,e!=null&&(r.callback=e),e=Es(n,r,i),e!==null&&(nr(e,n,i,t),Zc(e,n,i))}};function p0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!du(t,i)||!du(r,s):!0}function Jy(n,e,t){var i=!1,r=Is,s=e.contextType;return typeof s=="object"&&s!==null?s=Vi(s):(r=Zn(e)?wo:Ln.current,i=e.contextTypes,s=(i=i!=null)?Va(n,r):Is),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=md,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function m0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&md.enqueueReplaceState(e,e.state,null)}function Pp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},M_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vi(s):(s=Zn(e)?wo:Ln.current,r.context=Va(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&md.enqueueReplaceState(r,r.state,null),Uf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ya(n,e){try{var t="",i=e;do t+=o1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ih(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function bp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var IT=typeof WeakMap=="function"?WeakMap:Map;function eS(n,e,t){t=Br(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Bf||(Bf=!0,Bp=i),bp(n,e)},t}function tS(n,e,t){t=Br(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){bp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){bp(n,e),typeof i!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function _0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new IT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=qT.bind(null,n,e,t),e.then(n,n))}function g0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function v0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Br(-1,1),e.tag=2,Es(t,e,1))),t.lanes|=1),n)}var NT=Kr.ReactCurrentOwner,$n=!1;function On(n,e,t,i){e.child=n===null?by(e,null,t,i):Wa(e,n.child,t,i)}function x0(n,e,t,i,r){t=t.render;var s=e.ref;return Pa(e,r),i=C_(n,e,t,i,s,r),t=R_(),n!==null&&!$n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xr(n,e,r)):(It&&t&&m_(e),e.flags|=1,On(n,e,i,r),e.child)}function y0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!k_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,nS(n,e,s,i,r)):(n=rf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:du,t(o,i)&&n.ref===e.ref)return Xr(n,e,r)}return e.flags|=1,n=As(s,i),n.ref=e.ref,n.return=e,e.child=n}function nS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(du(s,i)&&n.ref===e.ref)if($n=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&($n=!0);else return e.lanes=n.lanes,Xr(n,e,r)}return Lp(n,e,t,i,r)}function iS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(ya,di),di|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Rt(ya,di),di|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Rt(ya,di),di|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Rt(ya,di),di|=i;return On(n,e,r,t),e.child}function rS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Lp(n,e,t,i,r){var s=Zn(t)?wo:Ln.current;return s=Va(e,s),Pa(e,r),t=C_(n,e,t,i,s,r),i=R_(),n!==null&&!$n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xr(n,e,r)):(It&&i&&m_(e),e.flags|=1,On(n,e,t,r),e.child)}function S0(n,e,t,i,r){if(Zn(t)){var s=!0;bf(e)}else s=!1;if(Pa(e,r),e.stateNode===null)ef(n,e),Jy(e,t,i),Pp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Vi(u):(u=Zn(t)?wo:Ln.current,u=Va(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&m0(e,o,i,u),ls=!1;var f=e.memoizedState;o.state=f,Uf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Kn.current||ls?(typeof c=="function"&&(Rp(e,t,c,i),l=e.memoizedState),(a=ls||p0(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Dy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ki(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Vi(l):(l=Zn(t)?wo:Ln.current,l=Va(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&m0(e,o,i,l),ls=!1,f=e.memoizedState,o.state=f,Uf(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||Kn.current||ls?(typeof p=="function"&&(Rp(e,t,p,i),g=e.memoizedState),(u=ls||p0(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Dp(n,e,t,i,s,r)}function Dp(n,e,t,i,r,s){rS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&o0(e,t,!1),Xr(n,e,s);i=e.stateNode,NT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Wa(e,n.child,null,s),e.child=Wa(e,null,a,s)):On(n,e,a,s),e.memoizedState=i.state,r&&o0(e,t,!0),e.child}function sS(n){var e=n.stateNode;e.pendingContext?s0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&s0(n,e.context,!1),E_(n,e.containerInfo)}function M0(n,e,t,i,r){return Ga(),g_(r),e.flags|=256,On(n,e,t,i),e.child}var Ip={dehydrated:null,treeContext:null,retryLane:0};function Np(n){return{baseLanes:n,cachePool:null,transitions:null}}function oS(n,e,t){var i=e.pendingProps,r=Ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Rt(Ft,r&1),n===null)return Ap(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vd(o,i,0,null),n=go(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Np(t),e.memoizedState=Ip,n):L_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return UT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=As(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=As(a,s):(s=go(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Np(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Ip,i}return s=n.child,n=s.sibling,i=As(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function L_(n,e){return e=vd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function rc(n,e,t,i){return i!==null&&g_(i),Wa(e,n.child,null,t),n=L_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function UT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ih(Error(ae(422))),rc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vd({mode:"visible",children:i.children},r,0,null),s=go(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Wa(e,n.child,null,o),e.child.memoizedState=Np(o),e.memoizedState=Ip,s);if(!(e.mode&1))return rc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=ih(s,i,void 0),rc(n,e,o,i)}if(a=(o&n.childLanes)!==0,$n||a){if(i=hn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wr(n,r),nr(i,n,r,-1))}return F_(),i=ih(Error(ae(421))),rc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=jT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=Ms(r.nextSibling),Si=e,It=!0,Qi=null,n!==null&&(Li[Di++]=Nr,Li[Di++]=Ur,Li[Di++]=Ao,Nr=n.id,Ur=n.overflow,Ao=e),e=L_(e,i.children),e.flags|=4096,e)}function E0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Cp(n.return,e,t)}function rh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function aS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(On(n,e,i.children,t),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&E0(n,t,e);else if(n.tag===19)E0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Rt(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Of(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),rh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Of(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}rh(e,!0,t,null,s);break;case"together":rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ef(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Xr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ro|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=As(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=As(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function OT(n,e,t){switch(e.tag){case 3:sS(e),Ga();break;case 5:Iy(e);break;case 1:Zn(e.type)&&bf(e);break;case 4:E_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(If,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(Ft,Ft.current&1),e.flags|=128,null):t&e.child.childLanes?oS(n,e,t):(Rt(Ft,Ft.current&1),n=Xr(n,e,t),n!==null?n.sibling:null);Rt(Ft,Ft.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return aS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,iS(n,e,t)}return Xr(n,e,t)}var lS,Up,uS,cS;lS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Up=function(){};uS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,co(_r.current);var s=null;switch(t){case"input":r=ip(n,r),i=ip(n,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=op(n,r),i=op(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Rf)}lp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(su.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(su.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&bt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};cS=function(n,e,t,i){t!==i&&(e.flags|=4)};function _l(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function FT(n,e,t){var i=e.pendingProps;switch(__(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return Zn(e.type)&&Pf(),Mn(e),null;case 3:return i=e.stateNode,Xa(),Dt(Kn),Dt(Ln),w_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(nc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qi!==null&&(Gp(Qi),Qi=null))),Up(n,e),Mn(e),null;case 5:T_(e);var r=co(gu.current);if(t=e.type,n!==null&&e.stateNode!=null)uS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Mn(e),null}if(n=co(_r.current),nc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[cr]=e,i[mu]=s,n=(e.mode&1)!==0,t){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(r=0;r<Pl.length;r++)bt(Pl[r],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":Dg(i,s),bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},bt("invalid",i);break;case"textarea":Ng(i,s),bt("invalid",i)}lp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&tc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tc(i.textContent,a,n),r=["children",""+a]):su.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&bt("scroll",i)}switch(t){case"input":qu(i),Ig(i,s,!0);break;case"textarea":qu(i),Ug(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=kx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[cr]=e,n[mu]=i,lS(n,e,!1,!1),e.stateNode=n;e:{switch(o=up(t,i),t){case"dialog":bt("cancel",n),bt("close",n),r=i;break;case"iframe":case"object":case"embed":bt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Pl.length;r++)bt(Pl[r],n);r=i;break;case"source":bt("error",n),r=i;break;case"img":case"image":case"link":bt("error",n),bt("load",n),r=i;break;case"details":bt("toggle",n),r=i;break;case"input":Dg(n,i),r=ip(n,i),bt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),bt("invalid",n);break;case"textarea":Ng(n,i),r=op(n,i),bt("invalid",n);break;default:r=i}lp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ou(n,l):typeof l=="number"&&ou(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(su.hasOwnProperty(s)?l!=null&&s==="onScroll"&&bt("scroll",n):l!=null&&t_(n,s,l,o))}switch(t){case"input":qu(n),Ig(n,i,!1);break;case"textarea":qu(n),Ug(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ds(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?wa(n,!!i.multiple,s,!1):i.defaultValue!=null&&wa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Rf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)cS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=co(gu.current),co(_r.current),nc(e)){if(i=e.stateNode,t=e.memoizedProps,i[cr]=e,(s=i.nodeValue!==t)&&(n=Si,n!==null))switch(n.tag){case 3:tc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[cr]=e,e.stateNode=i}return Mn(e),null;case 13:if(Dt(Ft),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&vi!==null&&e.mode&1&&!(e.flags&128))Ry(),Ga(),e.flags|=98560,s=!1;else if(s=nc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[cr]=e}else Ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mn(e),s=!1}else Qi!==null&&(Gp(Qi),Qi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ft.current&1?sn===0&&(sn=3):F_())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return Xa(),Up(n,e),n===null&&hu(e.stateNode.containerInfo),Mn(e),null;case 10:return y_(e.type._context),Mn(e),null;case 17:return Zn(e.type)&&Pf(),Mn(e),null;case 19:if(Dt(Ft),s=e.memoizedState,s===null)return Mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)_l(s,!1);else{if(sn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Of(n),o!==null){for(e.flags|=128,_l(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Rt(Ft,Ft.current&1|2),e.child}n=n.sibling}s.tail!==null&&Xt()>qa&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304)}else{if(!i)if(n=Of(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),_l(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return Mn(e),null}else 2*Xt()-s.renderingStartTime>qa&&t!==1073741824&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,t=Ft.current,Rt(Ft,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return O_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?di&1073741824&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function kT(n,e){switch(__(e),e.tag){case 1:return Zn(e.type)&&Pf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Xa(),Dt(Kn),Dt(Ln),w_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return T_(e),null;case 13:if(Dt(Ft),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Ga()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Dt(Ft),null;case 4:return Xa(),null;case 10:return y_(e.type._context),null;case 22:case 23:return O_(),null;case 24:return null;default:return null}}var sc=!1,Cn=!1,zT=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function xa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Vt(n,e,i)}else t.current=null}function Op(n,e,t){try{t()}catch(i){Vt(n,e,i)}}var T0=!1;function BT(n,e){if(xp=wf,n=my(),p_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(yp={focusedElem:n,selectionRange:t},wf=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ki(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){Vt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return g=T0,T0=!1,g}function Wl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Op(e,t,s)}r=r.next}while(r!==i)}}function _d(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Fp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function fS(n){var e=n.alternate;e!==null&&(n.alternate=null,fS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[cr],delete e[mu],delete e[Ep],delete e[MT],delete e[ET])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dS(n){return n.tag===5||n.tag===3||n.tag===4}function w0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Rf));else if(i!==4&&(n=n.child,n!==null))for(kp(n,e,t),n=n.sibling;n!==null;)kp(n,e,t),n=n.sibling}function zp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(zp(n,e,t),n=n.sibling;n!==null;)zp(n,e,t),n=n.sibling}var _n=null,Zi=!1;function Jr(n,e,t){for(t=t.child;t!==null;)hS(n,e,t),t=t.sibling}function hS(n,e,t){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(ld,t)}catch{}switch(t.tag){case 5:Cn||xa(t,e);case 6:var i=_n,r=Zi;_n=null,Jr(n,e,t),_n=i,Zi=r,_n!==null&&(Zi?(n=_n,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_n.removeChild(t.stateNode));break;case 18:_n!==null&&(Zi?(n=_n,t=t.stateNode,n.nodeType===8?Zd(n.parentNode,t):n.nodeType===1&&Zd(n,t),cu(n)):Zd(_n,t.stateNode));break;case 4:i=_n,r=Zi,_n=t.stateNode.containerInfo,Zi=!0,Jr(n,e,t),_n=i,Zi=r;break;case 0:case 11:case 14:case 15:if(!Cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Op(t,e,o),r=r.next}while(r!==i)}Jr(n,e,t);break;case 1:if(!Cn&&(xa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Vt(t,e,a)}Jr(n,e,t);break;case 21:Jr(n,e,t);break;case 22:t.mode&1?(Cn=(i=Cn)||t.memoizedState!==null,Jr(n,e,t),Cn=i):Jr(n,e,t);break;default:Jr(n,e,t)}}function A0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new zT),e.forEach(function(i){var r=$T.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Xi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,Zi=!1;break e;case 3:_n=a.stateNode.containerInfo,Zi=!0;break e;case 4:_n=a.stateNode.containerInfo,Zi=!0;break e}a=a.return}if(_n===null)throw Error(ae(160));hS(s,o,r),_n=null,Zi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pS(e,n),e=e.sibling}function pS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Xi(e,n),rr(n),i&4){try{Wl(3,n,n.return),_d(3,n)}catch(_){Vt(n,n.return,_)}try{Wl(5,n,n.return)}catch(_){Vt(n,n.return,_)}}break;case 1:Xi(e,n),rr(n),i&512&&t!==null&&xa(t,t.return);break;case 5:if(Xi(e,n),rr(n),i&512&&t!==null&&xa(t,t.return),n.flags&32){var r=n.stateNode;try{ou(r,"")}catch(_){Vt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ox(r,s),up(a,o);var u=up(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Hx(r,d):c==="dangerouslySetInnerHTML"?zx(r,d):c==="children"?ou(r,d):t_(r,c,d,u)}switch(a){case"input":rp(r,s);break;case"textarea":Fx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?wa(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?wa(r,!!s.multiple,s.defaultValue,!0):wa(r,!!s.multiple,s.multiple?[]:"",!1))}r[mu]=s}catch(_){Vt(n,n.return,_)}}break;case 6:if(Xi(e,n),rr(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Vt(n,n.return,_)}}break;case 3:if(Xi(e,n),rr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{cu(e.containerInfo)}catch(_){Vt(n,n.return,_)}break;case 4:Xi(e,n),rr(n);break;case 13:Xi(e,n),rr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(N_=Xt())),i&4&&A0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Cn=(u=Cn)||c,Xi(e,n),Cn=u):Xi(e,n),rr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(d=Ee=c;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:Wl(4,f,f.return);break;case 1:xa(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Vt(i,t,_)}}break;case 5:xa(f,f.return);break;case 22:if(f.memoizedState!==null){R0(d);continue}}p!==null?(p.return=f,Ee=p):R0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bx("display",o))}catch(_){Vt(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Vt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xi(e,n),rr(n),i&4&&A0(n);break;case 21:break;default:Xi(e,n),rr(n)}}function rr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(dS(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ou(r,""),i.flags&=-33);var s=w0(n);zp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=w0(n);kp(n,a,o);break;default:throw Error(ae(161))}}catch(l){Vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function HT(n,e,t){Ee=n,mS(n)}function mS(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||sc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Cn;a=sc;var u=Cn;if(sc=o,(Cn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?P0(r):l!==null?(l.return=o,Ee=l):P0(r);for(;s!==null;)Ee=s,mS(s),s=s.sibling;Ee=r,sc=a,Cn=u}C0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):C0(n)}}function C0(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Cn||_d(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ki(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&f0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}f0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&cu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Cn||e.flags&512&&Fp(e)}catch(f){Vt(e,e.return,f)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function R0(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function P0(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{_d(4,e)}catch(l){Vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{Fp(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{Fp(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var VT=Math.ceil,zf=Kr.ReactCurrentDispatcher,D_=Kr.ReactCurrentOwner,Bi=Kr.ReactCurrentBatchConfig,ft=0,hn=null,Zt=null,vn=0,di=0,ya=Hs(0),sn=0,Su=null,Ro=0,gd=0,I_=0,Xl=null,Yn=null,N_=0,qa=1/0,Rr=null,Bf=!1,Bp=null,Ts=null,oc=!1,hs=null,Hf=0,Yl=0,Hp=null,tf=-1,nf=0;function Hn(){return ft&6?Xt():tf!==-1?tf:tf=Xt()}function ws(n){return n.mode&1?ft&2&&vn!==0?vn&-vn:wT.transition!==null?(nf===0&&(nf=Jx()),nf):(n=yt,n!==0||(n=window.event,n=n===void 0?16:oy(n.type)),n):1}function nr(n,e,t,i){if(50<Yl)throw Yl=0,Hp=null,Error(ae(185));Nu(n,t,i),(!(ft&2)||n!==hn)&&(n===hn&&(!(ft&2)&&(gd|=t),sn===4&&cs(n,vn)),Qn(n,i),t===1&&ft===0&&!(e.mode&1)&&(qa=Xt()+500,hd&&Vs()))}function Qn(n,e){var t=n.callbackNode;w1(n,e);var i=Tf(n,n===hn?vn:0);if(i===0)t!==null&&kg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&kg(t),e===1)n.tag===0?TT(b0.bind(null,n)):wy(b0.bind(null,n)),yT(function(){!(ft&6)&&Vs()}),t=null;else{switch(ey(i)){case 1:t=o_;break;case 4:t=Zx;break;case 16:t=Ef;break;case 536870912:t=Qx;break;default:t=Ef}t=ES(t,_S.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function _S(n,e){if(tf=-1,nf=0,ft&6)throw Error(ae(327));var t=n.callbackNode;if(ba()&&n.callbackNode!==t)return null;var i=Tf(n,n===hn?vn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Vf(n,i);else{e=i;var r=ft;ft|=2;var s=vS();(hn!==n||vn!==e)&&(Rr=null,qa=Xt()+500,_o(n,e));do try{XT();break}catch(a){gS(n,a)}while(!0);x_(),zf.current=s,ft=r,Zt!==null?e=0:(hn=null,vn=0,e=sn)}if(e!==0){if(e===2&&(r=pp(n),r!==0&&(i=r,e=Vp(n,r))),e===1)throw t=Su,_o(n,0),cs(n,i),Qn(n,Xt()),t;if(e===6)cs(n,i);else{if(r=n.current.alternate,!(i&30)&&!GT(r)&&(e=Vf(n,i),e===2&&(s=pp(n),s!==0&&(i=s,e=Vp(n,s))),e===1))throw t=Su,_o(n,0),cs(n,i),Qn(n,Xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:eo(n,Yn,Rr);break;case 3:if(cs(n,i),(i&130023424)===i&&(e=N_+500-Xt(),10<e)){if(Tf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Hn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Mp(eo.bind(null,n,Yn,Rr),e);break}eo(n,Yn,Rr);break;case 4:if(cs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-tr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*VT(i/1960))-i,10<i){n.timeoutHandle=Mp(eo.bind(null,n,Yn,Rr),i);break}eo(n,Yn,Rr);break;case 5:eo(n,Yn,Rr);break;default:throw Error(ae(329))}}}return Qn(n,Xt()),n.callbackNode===t?_S.bind(null,n):null}function Vp(n,e){var t=Xl;return n.current.memoizedState.isDehydrated&&(_o(n,e).flags|=256),n=Vf(n,e),n!==2&&(e=Yn,Yn=t,e!==null&&Gp(e)),n}function Gp(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function GT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ir(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cs(n,e){for(e&=~I_,e&=~gd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-tr(e),i=1<<t;n[t]=-1,e&=~i}}function b0(n){if(ft&6)throw Error(ae(327));ba();var e=Tf(n,0);if(!(e&1))return Qn(n,Xt()),null;var t=Vf(n,e);if(n.tag!==0&&t===2){var i=pp(n);i!==0&&(e=i,t=Vp(n,i))}if(t===1)throw t=Su,_o(n,0),cs(n,e),Qn(n,Xt()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,eo(n,Yn,Rr),Qn(n,Xt()),null}function U_(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(qa=Xt()+500,hd&&Vs())}}function Po(n){hs!==null&&hs.tag===0&&!(ft&6)&&ba();var e=ft;ft|=1;var t=Bi.transition,i=yt;try{if(Bi.transition=null,yt=1,n)return n()}finally{yt=i,Bi.transition=t,ft=e,!(ft&6)&&Vs()}}function O_(){di=ya.current,Dt(ya)}function _o(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,xT(t)),Zt!==null)for(t=Zt.return;t!==null;){var i=t;switch(__(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pf();break;case 3:Xa(),Dt(Kn),Dt(Ln),w_();break;case 5:T_(i);break;case 4:Xa();break;case 13:Dt(Ft);break;case 19:Dt(Ft);break;case 10:y_(i.type._context);break;case 22:case 23:O_()}t=t.return}if(hn=n,Zt=n=As(n.current,null),vn=di=e,sn=0,Su=null,I_=gd=Ro=0,Yn=Xl=null,uo!==null){for(e=0;e<uo.length;e++)if(t=uo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}uo=null}return n}function gS(n,e){do{var t=Zt;try{if(x_(),Qc.current=kf,Ff){for(var i=Bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ff=!1}if(Co=0,fn=nn=Bt=null,Gl=!1,vu=0,D_.current=null,t===null||t.return===null){sn=1,Su=e,Zt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=vn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=g0(o);if(p!==null){p.flags&=-257,v0(p,o,a,s,e),p.mode&1&&_0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){_0(s,u,e),F_();break e}l=Error(ae(426))}}else if(It&&a.mode&1){var m=g0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),v0(m,o,a,s,e),g_(Ya(l,a));break e}}s=l=Ya(l,a),sn!==4&&(sn=2),Xl===null?Xl=[s]:Xl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=eS(s,l,e);c0(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ts===null||!Ts.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=tS(s,a,e);c0(s,y);break e}}s=s.return}while(s!==null)}yS(t)}catch(C){e=C,Zt===t&&t!==null&&(Zt=t=t.return);continue}break}while(!0)}function vS(){var n=zf.current;return zf.current=kf,n===null?kf:n}function F_(){(sn===0||sn===3||sn===2)&&(sn=4),hn===null||!(Ro&268435455)&&!(gd&268435455)||cs(hn,vn)}function Vf(n,e){var t=ft;ft|=2;var i=vS();(hn!==n||vn!==e)&&(Rr=null,_o(n,e));do try{WT();break}catch(r){gS(n,r)}while(!0);if(x_(),ft=t,zf.current=i,Zt!==null)throw Error(ae(261));return hn=null,vn=0,sn}function WT(){for(;Zt!==null;)xS(Zt)}function XT(){for(;Zt!==null&&!_1();)xS(Zt)}function xS(n){var e=MS(n.alternate,n,di);n.memoizedProps=n.pendingProps,e===null?yS(n):Zt=e,D_.current=null}function yS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=kT(t,e),t!==null){t.flags&=32767,Zt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Zt=null;return}}else if(t=FT(t,e,di),t!==null){Zt=t;return}if(e=e.sibling,e!==null){Zt=e;return}Zt=e=n}while(e!==null);sn===0&&(sn=5)}function eo(n,e,t){var i=yt,r=Bi.transition;try{Bi.transition=null,yt=1,YT(n,e,t,i)}finally{Bi.transition=r,yt=i}return null}function YT(n,e,t,i){do ba();while(hs!==null);if(ft&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(A1(n,s),n===hn&&(Zt=hn=null,vn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||oc||(oc=!0,ES(Ef,function(){return ba(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Bi.transition,Bi.transition=null;var o=yt;yt=1;var a=ft;ft|=4,D_.current=null,BT(n,t),pS(t,n),dT(yp),wf=!!xp,yp=xp=null,n.current=t,HT(t),g1(),ft=a,yt=o,Bi.transition=s}else n.current=t;if(oc&&(oc=!1,hs=n,Hf=r),s=n.pendingLanes,s===0&&(Ts=null),y1(t.stateNode),Qn(n,Xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bf)throw Bf=!1,n=Bp,Bp=null,n;return Hf&1&&n.tag!==0&&ba(),s=n.pendingLanes,s&1?n===Hp?Yl++:(Yl=0,Hp=n):Yl=0,Vs(),null}function ba(){if(hs!==null){var n=ey(Hf),e=Bi.transition,t=yt;try{if(Bi.transition=null,yt=16>n?16:n,hs===null)var i=!1;else{if(n=hs,hs=null,Hf=0,ft&6)throw Error(ae(331));var r=ft;for(ft|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Wl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ee=d;else for(;Ee!==null;){c=Ee;var f=c.sibling,p=c.return;if(fS(c),c===u){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_d(9,a)}}catch(C){Vt(a,a.return,C)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(ft=r,Vs(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(ld,n)}catch{}i=!0}return i}finally{yt=t,Bi.transition=e}}return!1}function L0(n,e,t){e=Ya(t,e),e=eS(n,e,1),n=Es(n,e,1),e=Hn(),n!==null&&(Nu(n,1,e),Qn(n,e))}function Vt(n,e,t){if(n.tag===3)L0(n,n,t);else for(;e!==null;){if(e.tag===3){L0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ts===null||!Ts.has(i))){n=Ya(t,n),n=tS(e,n,1),e=Es(e,n,1),n=Hn(),e!==null&&(Nu(e,1,n),Qn(e,n));break}}e=e.return}}function qT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Hn(),n.pingedLanes|=n.suspendedLanes&t,hn===n&&(vn&t)===t&&(sn===4||sn===3&&(vn&130023424)===vn&&500>Xt()-N_?_o(n,0):I_|=t),Qn(n,e)}function SS(n,e){e===0&&(n.mode&1?(e=Ku,Ku<<=1,!(Ku&130023424)&&(Ku=4194304)):e=1);var t=Hn();n=Wr(n,e),n!==null&&(Nu(n,e,t),Qn(n,t))}function jT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),SS(n,t)}function $T(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),SS(n,t)}var MS;MS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Kn.current)$n=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return $n=!1,OT(n,e,t);$n=!!(n.flags&131072)}else $n=!1,It&&e.flags&1048576&&Ay(e,Df,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ef(n,e),n=e.pendingProps;var r=Va(e,Ln.current);Pa(e,t),r=C_(null,e,i,n,r,t);var s=R_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zn(i)?(s=!0,bf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,M_(e),r.updater=md,e.stateNode=r,r._reactInternals=e,Pp(e,i,n,t),e=Dp(null,e,i,!0,s,t)):(e.tag=0,It&&s&&m_(e),On(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ef(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ZT(i),n=Ki(i,n),r){case 0:e=Lp(null,e,i,n,t);break e;case 1:e=S0(null,e,i,n,t);break e;case 11:e=x0(null,e,i,n,t);break e;case 14:e=y0(null,e,i,Ki(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),Lp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),S0(n,e,i,r,t);case 3:e:{if(sS(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dy(n,e),Uf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ya(Error(ae(423)),e),e=M0(n,e,i,t,r);break e}else if(i!==r){r=Ya(Error(ae(424)),e),e=M0(n,e,i,t,r);break e}else for(vi=Ms(e.stateNode.containerInfo.firstChild),Si=e,It=!0,Qi=null,t=by(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ga(),i===r){e=Xr(n,e,t);break e}On(n,e,i,t)}e=e.child}return e;case 5:return Iy(e),n===null&&Ap(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Sp(i,r)?o=null:s!==null&&Sp(i,s)&&(e.flags|=32),rS(n,e),On(n,e,o,t),e.child;case 6:return n===null&&Ap(e),null;case 13:return oS(n,e,t);case 4:return E_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Wa(e,null,i,t):On(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),x0(n,e,i,r,t);case 7:return On(n,e,e.pendingProps,t),e.child;case 8:return On(n,e,e.pendingProps.children,t),e.child;case 12:return On(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Rt(If,i._currentValue),i._currentValue=o,s!==null)if(ir(s.value,o)){if(s.children===r.children&&!Kn.current){e=Xr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Br(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Cp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Cp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}On(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Pa(e,t),r=Vi(r),i=i(r),e.flags|=1,On(n,e,i,t),e.child;case 14:return i=e.type,r=Ki(i,e.pendingProps),r=Ki(i.type,r),y0(n,e,i,r,t);case 15:return nS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),ef(n,e),e.tag=1,Zn(i)?(n=!0,bf(e)):n=!1,Pa(e,t),Jy(e,i,r),Pp(e,i,r,t),Dp(null,e,i,!0,n,t);case 19:return aS(n,e,t);case 22:return iS(n,e,t)}throw Error(ae(156,e.tag))};function ES(n,e){return Kx(n,e)}function KT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(n,e,t,i){return new KT(n,e,t,i)}function k_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ZT(n){if(typeof n=="function")return k_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===i_)return 11;if(n===r_)return 14}return 2}function As(n,e){var t=n.alternate;return t===null?(t=Oi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function rf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")k_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ca:return go(t.children,r,s,e);case n_:o=8,r|=8;break;case Jh:return n=Oi(12,t,e,r|2),n.elementType=Jh,n.lanes=s,n;case ep:return n=Oi(13,t,e,r),n.elementType=ep,n.lanes=s,n;case tp:return n=Oi(19,t,e,r),n.elementType=tp,n.lanes=s,n;case Ix:return vd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Lx:o=10;break e;case Dx:o=9;break e;case i_:o=11;break e;case r_:o=14;break e;case as:o=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=Oi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function go(n,e,t,i){return n=Oi(7,n,i,e),n.lanes=t,n}function vd(n,e,t,i){return n=Oi(22,n,i,e),n.elementType=Ix,n.lanes=t,n.stateNode={isHidden:!1},n}function sh(n,e,t){return n=Oi(6,n,null,e),n.lanes=t,n}function oh(n,e,t){return e=Oi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function QT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bd(0),this.expirationTimes=Bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function z_(n,e,t,i,r,s,o,a,l){return n=new QT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Oi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},M_(s),n}function JT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ua,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function TS(n){if(!n)return Is;n=n._reactInternals;e:{if(Oo(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if(Zn(t))return Ty(n,t,e)}return e}function wS(n,e,t,i,r,s,o,a,l){return n=z_(t,i,!0,n,r,s,o,a,l),n.context=TS(null),t=n.current,i=Hn(),r=ws(t),s=Br(i,r),s.callback=e??null,Es(t,s,r),n.current.lanes=r,Nu(n,r,i),Qn(n,i),n}function xd(n,e,t,i){var r=e.current,s=Hn(),o=ws(r);return t=TS(t),e.context===null?e.context=t:e.pendingContext=t,e=Br(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Es(r,e,o),n!==null&&(nr(n,r,o,s),Zc(n,r,o)),o}function Gf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function D0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function B_(n,e){D0(n,e),(n=n.alternate)&&D0(n,e)}function ew(){return null}var AS=typeof reportError=="function"?reportError:function(n){console.error(n)};function H_(n){this._internalRoot=n}yd.prototype.render=H_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));xd(n,e,null,null)};yd.prototype.unmount=H_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Po(function(){xd(null,n,null,null)}),e[Gr]=null}};function yd(n){this._internalRoot=n}yd.prototype.unstable_scheduleHydration=function(n){if(n){var e=iy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<us.length&&e!==0&&e<us[t].priority;t++);us.splice(t,0,n),t===0&&sy(n)}};function V_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function I0(){}function tw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Gf(o);s.call(u)}}var o=wS(e,i,n,0,null,!1,!1,"",I0);return n._reactRootContainer=o,n[Gr]=o.current,hu(n.nodeType===8?n.parentNode:n),Po(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Gf(l);a.call(u)}}var l=z_(n,0,!1,null,null,!1,!1,"",I0);return n._reactRootContainer=l,n[Gr]=l.current,hu(n.nodeType===8?n.parentNode:n),Po(function(){xd(e,l,t,i)}),l}function Md(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Gf(o);a.call(l)}}xd(e,o,n,r)}else o=tw(t,e,n,r,i);return Gf(o)}ty=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Rl(e.pendingLanes);t!==0&&(a_(e,t|1),Qn(e,Xt()),!(ft&6)&&(qa=Xt()+500,Vs()))}break;case 13:Po(function(){var i=Wr(n,1);if(i!==null){var r=Hn();nr(i,n,1,r)}}),B_(n,1)}};l_=function(n){if(n.tag===13){var e=Wr(n,134217728);if(e!==null){var t=Hn();nr(e,n,134217728,t)}B_(n,134217728)}};ny=function(n){if(n.tag===13){var e=ws(n),t=Wr(n,e);if(t!==null){var i=Hn();nr(t,n,e,i)}B_(n,e)}};iy=function(){return yt};ry=function(n,e){var t=yt;try{return yt=n,e()}finally{yt=t}};fp=function(n,e,t){switch(e){case"input":if(rp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=dd(i);if(!r)throw Error(ae(90));Ux(i),rp(i,r)}}}break;case"textarea":Fx(n,t);break;case"select":e=t.value,e!=null&&wa(n,!!t.multiple,e,!1)}};Wx=U_;Xx=Po;var nw={usingClientEntryPoint:!1,Events:[Ou,pa,dd,Vx,Gx,U_]},gl={findFiberByHostInstance:lo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iw={bundleType:gl.bundleType,version:gl.version,rendererPackageName:gl.rendererPackageName,rendererConfig:gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jx(n),n===null?null:n.stateNode},findFiberByHostInstance:gl.findFiberByHostInstance||ew,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{ld=ac.inject(iw),mr=ac}catch{}}Ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw;Ai.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!V_(e))throw Error(ae(200));return JT(n,e,null,t)};Ai.createRoot=function(n,e){if(!V_(n))throw Error(ae(299));var t=!1,i="",r=AS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=z_(n,1,!1,null,null,t,!1,i,r),n[Gr]=e.current,hu(n.nodeType===8?n.parentNode:n),new H_(e)};Ai.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=jx(e),n=n===null?null:n.stateNode,n};Ai.flushSync=function(n){return Po(n)};Ai.hydrate=function(n,e,t){if(!Sd(e))throw Error(ae(200));return Md(null,n,e,!0,t)};Ai.hydrateRoot=function(n,e,t){if(!V_(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=AS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=wS(e,null,n,1,t??null,r,!1,s,o),n[Gr]=e.current,hu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new yd(e)};Ai.render=function(n,e,t){if(!Sd(e))throw Error(ae(200));return Md(null,n,e,!1,t)};Ai.unmountComponentAtNode=function(n){if(!Sd(n))throw Error(ae(40));return n._reactRootContainer?(Po(function(){Md(null,null,n,!1,function(){n._reactRootContainer=null,n[Gr]=null})}),!0):!1};Ai.unstable_batchedUpdates=U_;Ai.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Sd(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return Md(n,e,t,!1,i)};Ai.version="18.3.1-next-f1338f8080-20240426";function CS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(CS)}catch(n){console.error(n)}}CS(),Cx.exports=Ai;var rw=Cx.exports,N0=rw;Zh.createRoot=N0.createRoot,Zh.hydrateRoot=N0.hydrateRoot;function Pr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function RS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mu={duration:.5,overwrite:!1,delay:0},G_,xn,Nt,Fi=1e8,wt=1/Fi,Wp=Math.PI*2,sw=Wp/4,ow=0,PS=Math.sqrt,aw=Math.cos,lw=Math.sin,pn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},Yr=function(e){return typeof e=="number"},W_=function(e){return typeof e>"u"},Sr=function(e){return typeof e=="object"},Jn=function(e){return e!==!1},X_=function(){return typeof window<"u"},lc=function(e){return Gt(e)||pn(e)},bS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,uw=/random\([^)]+\)/g,cw=/,\s*/g,U0=/(?:-?\.?\d|\.)+/gi,LS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ah=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,DS=/[+-]=-?[.\d]+/,fw=/[^,'"\[\]\s]+/gi,dw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,or,Xp,Y_,Ti={},Wf={},IS,NS=function(e){return(Wf=ja(e,Ti))&&oi},q_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Eu=function(e,t){return!t&&console.warn(e)},US=function(e,t){return e&&(Ti[e]=t)&&Wf&&(Wf[e]=t)||Ti},Tu=function(){return 0},hw={suppressEvents:!0,isStart:!0,kill:!1},sf={suppressEvents:!0,kill:!1},pw={suppressEvents:!0},j_={},Cs=[],Yp={},OS,pi={},lh={},O0=30,of=[],$_="",K_=function(e){var t=e[0],i,r;if(Sr(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=of.length;r--&&!of[r].targetTest(t););i=of[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new rM(e[r],i)))||e.splice(r,1);return e},vo=function(e){return e._gsap||K_(ki(e))[0]._gsap},FS=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():W_(i)&&e.getAttribute&&e.getAttribute(t)||i},ei=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},La=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},mw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Xf=function(){var e=Cs.length,t=Cs.slice(0),i,r;for(Yp={},Cs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Z_=function(e){return!!(e._initted||e._startAt||e.add)},kS=function(e,t,i,r){Cs.length&&!xn&&Xf(),e.render(t,i,!!(xn&&t<0&&Z_(e))),Cs.length&&!xn&&Xf()},zS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fw).length<2?t:pn(e)?e.trim():e},BS=function(e){return e},wi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},_w=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ja=function(e,t){for(var i in t)e[i]=t[i];return e},F0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Sr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Yf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ql=function(e){var t=e.parent||kt,i=e.keyframes?_w(bn(e.keyframes)):wi;if(Jn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},gw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},HS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ed=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ns=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},vw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qp=function(e,t,i,r){return e._startAt&&(xn?e._startAt.revert(sf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},xw=function n(e){return!e||e._ts&&n(e.parent)},k0=function(e){return e._repeat?$a(e._tTime,e=e.duration()+e._rDelay)*e:0},$a=function(e,t){var i=Math.floor(e=Ot(e/t));return e&&i===e?i-1:i},qf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Td=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},wd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Td(e),i._dirty||xo(i,e)),e},VS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=qf(e.rawTime(),t),(!t._dur||ku(0,t.totalDuration(),i)-t._tTime>wt)&&t.render(i,!0)),xo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-wt}},fr=function(e,t,i,r){return t.parent&&Ns(t),t._start=Ot((Yr(i)?i:i||e!==kt?bi(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),HS(e,t,"_first","_last",e._sort?"_start":0),jp(t)||(e._recent=t),r||VS(e,t),e._ts<0&&wd(e,e._tTime),e},GS=function(e,t){return(Ti.ScrollTrigger||q_("scrollTrigger",t))&&Ti.ScrollTrigger.create(t,e)},WS=function(e,t,i,r,s){if(J_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&OS!==_i.frame)return Cs.push(e),e._lazy=[s,r],1},yw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},jp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Sw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&yw(e)&&!(!e._initted&&jp(e))||(e._ts<0||e._dp._ts<0)&&!jp(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=ku(0,e._tDur,t),c=$a(l,a),e._yoyo&&c&1&&(o=1-o),c!==$a(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||xn||r||e._zTime===wt||!t&&e._zTime){if(!e._initted&&WS(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?wt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&qp(e,t,i,!0),e._onUpdate&&!i&&xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ns(e,1),!i&&!xn&&(xi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Mw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ka=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&wd(e,e._tTime=e._tDur*a),e.parent&&Td(e),i||xo(e.parent,e),e},z0=function(e){return e instanceof jn?xo(e):Ka(e,e._dur)},Ew={_start:0,endTime:Tu,totalDuration:Tu},bi=function n(e,t,i){var r=e.labels,s=e._recent||Ew,o=e.duration()>=Fi?s.endTime(!1):e._dur,a,l,u;return pn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(bn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},jl=function(e,t,i){var r=Yr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Jn(l.vars.inherit)&&l.parent;o.immediateRender=Jn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Kt(t[0],o,t[s+1])},Gs=function(e,t){return e||e===0?t(e):t},ku=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!pn(e)||!(t=dw.exec(e))?"":t[1]},Tw=function(e,t,i){return Gs(i,function(r){return ku(e,t,r)})},$p=[].slice,XS=function(e,t){return e&&Sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Sr(e[0]))&&!e.nodeType&&e!==or},ww=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return pn(r)&&!t||XS(r,1)?(s=i).push.apply(s,ki(r)):i.push(r)})||i},ki=function(e,t,i){return Nt&&!t&&Nt.selector?Nt.selector(e):pn(e)&&!i&&(Xp||!Za())?$p.call((t||Y_).querySelectorAll(e),0):bn(e)?ww(e,i):XS(e)?$p.call(e,0):e?[e]:[]},Kp=function(e){return e=ki(e)[0]||Eu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ki(t,i.querySelectorAll?i:i===e?Eu("Invalid scope")||Y_.createElement("div"):e)}},YS=function(e){return e.sort(function(){return .5-Math.random()})},qS=function(e){if(Gt(e))return e;var t=Sr(e)?e:{each:e},i=yo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return pn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,g){var _=(g||t).length,m=o[_],h,v,x,y,C,w,M,R,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,Fi])[1],!E){for(M=-Fi;M<(M=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=o[_]=[],h=l?Math.min(E,_)*c-.5:r%E,v=E===Fi?0:l?_*d/E-.5:r/E|0,M=0,R=Fi,w=0;w<_;w++)x=w%E-h,y=v-(w/E|0),m[w]=C=u?Math.abs(u==="y"?y:x):PS(x*x+y*y),C>M&&(M=C),C<R&&(R=C);r==="random"&&YS(m),m.max=M-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:u?u==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Rn(t.amount||t.each)||0,i=i&&_<0?kw(i):i}return _=(m[f]-m.min)/m.max||0,Ot(m.b+(i?i(_):_)*m.v)+m.u}},Zp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Yr(i)?0:Rn(i))}},jS=function(e,t){var i=bn(e),r,s;return!i&&Sr(e)&&(r=i=e.radius||Fi,e.values?(e=ki(e.values),(s=!Yr(e[0]))&&(r*=r)):e=Zp(e.increment)),Gs(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Fi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Yr(o)?c:c+Rn(o)}:Zp(e))},$S=function(e,t,i,r){return Gs(bn(e)?!t:i===!0?!!(i=0):!r,function(){return bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Aw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Cw=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},Rw=function(e,t,i){return ZS(e,t,0,1,i)},KS=function(e,t,i){return Gs(i,function(r){return e[~~t(r)]})},Pw=function n(e,t,i){var r=t-e;return bn(e)?KS(e,n(0,e.length),t):Gs(i,function(s){return(r+(s-e)%r)%r+e})},bw=function n(e,t,i){var r=t-e,s=r*2;return bn(e)?KS(e,n(0,e.length-1),t):Gs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},wu=function(e){return e.replace(uw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(cw);return $S(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ZS=function(e,t,i,r,s){var o=t-e,a=r-i;return Gs(s,function(l){return i+((l-e)/o*a||0)})},Lw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=pn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=ja(bn(e)?[]:{},e));if(!c){for(l in t)Q_.call(a,e,l,"get",t[l]);s=function(g){return ng(g,a)||(o?e.p:e)}}}return Gs(i,s)},B0=function(e,t,i){var r=e.labels,s=Fi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xi=function(e,t,i){var r=e.vars,s=r[t],o=Nt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Cs.length&&Xf(),a&&(Nt=a),c=l?s.apply(u,l):s.call(u),Nt=o,c},bl=function(e){return Ns(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&xi(e,"onInterrupt"),e},Ma,QS=[],JS=function(e){if(e)if(e=!e.name&&e.default||e,X_()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Tu,render:ng,add:Q_,kill:jw,modifier:qw,rawVars:0},o={targetTest:0,get:0,getSetter:tg,aliases:{},register:0};if(Za(),e!==r){if(pi[t])return;wi(r,wi(Yf(e,s),o)),ja(r.prototype,ja(s,Yf(e,o))),pi[r.prop=t]=r,e.targetTest&&(of.push(r),j_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}US(t,r),e.register&&e.register(oi,r,ti)}else QS.push(e)},Tt=255,Ll={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},uh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Tt+.5|0},eM=function(e,t,i){var r=e?Yr(e)?[e>>16,e>>8&Tt,e&Tt]:0:Ll.black,s,o,a,l,u,c,d,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ll[e])r=Ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(U0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=uh(l+1/3,s,o),r[1]=uh(l,s,o),r[2]=uh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(LS),i&&r.length<4&&(r[3]=1),r}else r=e.match(U0)||Ll.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Tt,o=r[1]/Tt,a=r[2]/Tt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},tM=function(e){var t=[],i=[],r=-1;return e.split(Rs).forEach(function(s){var o=s.match(Sa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},H0=function(e,t,i){var r="",s=(e+r).match(Rs),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=eM(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=tM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Rs,"1").split(Sa),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Rs),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Rs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ll)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Dw=/hsl[a]?\(/,nM=function(e){var t=e.join(" "),i;if(Rs.lastIndex=0,Rs.test(t))return i=Dw.test(t),e[1]=H0(e[1],i),e[0]=H0(e[0],i,tM(e[1])),!0},Au,_i=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,g=function _(m){var h=n()-r,v=m===!0,x,y,C,w;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,x=C-o,(x>0||v)&&(w=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](C,f,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){IS&&(!Xp&&X_()&&(or=Xp=window,Y_=or.document||{},Ti.gsap=oi,(or.gsapVersions||(or.gsapVersions=[])).push(oi.version),NS(Wf||or.GreenSockGlobals||!or.gsap&&or||{}),QS.forEach(JS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Au=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Au=0,u=Tu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(y,C,w,M){m(y,C,w,M),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),Za(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),Za=function(){return!Au&&_i.wake()},at={},Iw=/^[\d.\-M][\d.\-,\s]/,Nw=/["']/g,Uw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Nw,"").trim():+u,r=l.substr(a+1).trim();return t},Ow=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Fw=function(e){var t=(e+"").split("("),i=at[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Uw(t[1])]:Ow(e).split(",").map(zS)):at._CE&&Iw.test(e)?at._CE("",e):i},kw=function(e){return function(t){return 1-e(1-t)}},yo=function(e,t){return e&&(Gt(e)?e:at[e]||Fw(e))||t},Fo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ei(e,function(a){at[a]=Ti[a]=s,at[o=a.toLowerCase()]=i;for(var l in s)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=s[l]}),s},iM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ch=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Wp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*lw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:iM(a);return s=Wp/s,l.config=function(u,c){return n(e,u,c)},l},fh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:iM(i);return r.config=function(s){return n(e,s)},r};ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Fo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Fo("Elastic",ch("in"),ch("out"),ch());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Fo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Fo("Circ",function(n){return-(PS(1-n*n)-1)});Fo("Sine",function(n){return n===1?1:-aw(n*sw)+1});Fo("Back",fh("in"),fh("out"),fh());at.SteppedEase=at.steps=Ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-wt;return function(a){return((r*ku(0,o,a)|0)+s)*i}}};Mu.ease=at["quad.out"];ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return $_+=n+","+n+"Params,"});var rM=function(e,t){this.id=ow++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:FS,this.set=t?t.getSetter:tg},Cu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ka(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Au||_i.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ka(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Za(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wd(this,i),!s._dp||s.parent||VS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),kS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+k0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+k0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?$a(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?qf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-wt?0:this._rts,this.totalTime(ku(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Td(this),vw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ot(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&fr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Jn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=pw);var r=xn;return xn=i,Z_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),xn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,z0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,z0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(bi(this,i),Jn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Jn(r)),this._dur||(this._zTime=-wt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-wt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(i)?i:BS,l=function(){var c=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){bl(this)},n}();wi(Cu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var jn=function(n){RS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Jn(i.sortChildren),kt&&fr(i.parent||kt,Pr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&GS(Pr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return jl(0,arguments,this),this},t.from=function(r,s,o){return jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ql(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(r,s,bi(this,o),1),this},t.call=function(r,s,o){return fr(this,Kt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Kt(r,o,bi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,ql(o).immediateRender=Jn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,ql(a).immediateRender=Jn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,_,m,h,v,x,y,C,w,M;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ot(c%m),c===l?(_=this._repeat,f=u):(C=Ot(c/m),_=~~C,_&&_===C&&(f=u,_--),f>u&&(f=u)),C=$a(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(f=u-f,M=1),_!==C&&!this._lock){var R=w&&C&1,E=R===(w&&_&1);if(_<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ot(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Mw(this,Ot(a),Ot(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(xi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=-wt);break}}p=g}else{p=this._last;for(var S=r<0?r:f;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||xn&&Z_(p)),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=S?-wt:wt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Td(this),this.render(r,s,o);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ns(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(xi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Yr(s)||(s=bi(this,s,r)),!(r instanceof Cu)){if(bn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(pn(r))return this.addLabel(r,s);if(Gt(r))r=Kt.delayedCall(0,r);else return this}return this!==r?fr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Kt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return pn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&Ed(this,r),r===this._recent&&(this._recent=this._last),xo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=bi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Kt.delayedCall(0,s||Tu,o);return a.data="isPause",this._hasPause=1,fr(this,a,bi(this,r))},t.removePause=function(r){var s=this._first;for(r=bi(this,r);s;)s._start===r&&s.data==="isPause"&&Ns(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ps!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ki(r),l=this._first,u=Yr(s),c;l;)l instanceof Kt?mw(l._targets,a)&&(u?(!ps||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=bi(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,g=Kt.to(o,wi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Ka(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,wi({startAt:{time:bi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),B0(this,bi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),B0(this,bi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return xo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Fi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ot(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ka(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(kS(kt,qf(r,kt)),OS=_i.frame),_i.frame>=O0){O0+=Mi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Mi.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(Cu);wi(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zw=function(e,t,i,r,s,o,a){var l=new ti(this._pt,e,t,0,1,cM,null,s),u=0,c=0,d,f,p,g,_,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=wu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(ah)||[];d=ah.exec(r);)g=d[0],_=r.substring(u,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?La(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=ah.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(DS.test(r)||h)&&(l.e=0),this._pt=l,l},Q_=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Gt(d)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Gt(d)?u?Ww:lM:eg,g;if(pn(r)&&(~r.indexOf("random(")&&(r=wu(r)),r.charAt(1)==="="&&(g=La(f,r)+(Rn(f)||0),(g||g===0)&&(r=g))),!c||f!==r||Qp)return!isNaN(f*r)&&r!==""?(g=new ti(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?Yw:uM,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&q_(t,r),zw.call(this,e,t,f,r,p,l||Mi.stringFilter,u))},Bw=function(e,t,i,r,s){if(Gt(e)&&(e=$l(e,s,t,i,r)),!Sr(e)||e.style&&e.nodeType||bn(e)||bS(e))return pn(e)?$l(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=$l(e[a],s,t,i,r);return o},sM=function(e,t,i,r,s,o){var a,l,u,c;if(pi[e]&&(a=new pi[e]).init(s,a.rawVars?t[e]:Bw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ti(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ma))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ps,Qp,J_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!G_,y=e.timeline,C=r.easeReverse||d,w,M,R,E,S,b,U,k,W,j,G,H,I;if(y&&(!f||!s)&&(s="none"),e._ease=yo(s,Mu.ease),e._rEase=C&&(yo(C)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(k=m[0]?vo(m[0]).harness:0,H=k&&r[k.prop],w=Yf(r,j_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?sf:hw),_._lazy=0),o){if(Ns(e._startAt=Kt.set(m,wi({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&Jn(l),startAt:null,delay:0,onUpdate:u&&function(){return xi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!a&&!p)&&e._startAt.revert(sf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),R=wi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Jn(l),immediateRender:a,stagger:0,parent:h},w),H&&(R[k.prop]=H),Ns(e._startAt=Kt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(sf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Jn(l)||l&&!g,M=0;M<m.length;M++){if(S=m[M],U=S._gsap||K_(m)[M]._gsap,e._ptLookup[M]=j={},Yp[U.id]&&Cs.length&&Xf(),G=v===m?M:v.indexOf(S),k&&(W=new k).init(S,H||w,e,G,v)!==!1&&(e._pt=E=new ti(e._pt,S,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function($){j[$]=E}),W.priority&&(b=1)),!k||H)for(R in w)pi[R]&&(W=sM(R,w,e,G,S,v))?W.priority&&(b=1):j[R]=E=Q_.call(e,S,R,"get",w[R],G,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(S,e._op[M]),x&&e._pt&&(ps=e,kt.killTweensOf(S,j,e.globalTime(t)),I=!e.parent,ps=0),e._pt&&l&&(Yp[U.id]=1)}b&&fM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!I,f&&t<=0&&y.render(Fi,!0,!0)},Hw=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Qp=1,e.vars[t]="+=0",J_(e,a),Qp=0,l?Eu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Wt(i)+Rn(d.e)),d.b&&(d.b=c.s+Rn(d.b))},Vw=function(e,t){var i=e[0]?vo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=ja({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Gw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(bn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},$l=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):pn(e)&&~e.indexOf("random(")?wu(e):e},oM=$_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",aM={};ei(oM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return aM[n]=1});var Kt=function(n){RS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ql(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,h=r.parent||kt,v=(bn(i)||bS(i)?Yr(i[0]):"length"in r)?[i]:ki(i),x,y,C,w,M,R,E,S;if(a._targets=v.length?K_(v):Eu("GSAP target "+i+" not found. https://gsap.com",!Mi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||lc(u)||lc(c)){r=a.vars;var b=r.easeReverse||r.yoyoEase;if(x=a.timeline=new jn({data:"nested",defaults:_||{},targets:h&&h.data==="nested"?h.vars.targets:v}),x.kill(),x.parent=x._dp=Pr(a),x._start=0,f||lc(u)||lc(c)){if(w=v.length,E=f&&qS(f),Sr(f))for(M in f)~oM.indexOf(M)&&(S||(S={}),S[M]=f[M]);for(y=0;y<w;y++)C=Yf(r,aM),C.stagger=0,b&&(C.easeReverse=b),S&&ja(C,S),R=v[y],C.duration=+$l(u,Pr(a),y,R,v),C.delay=(+$l(c,Pr(a),y,R,v)||0)-a._delay,!f&&w===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),x.to(R,C,E?E(y,R,v):0),x._ease=at.none;x.duration()?u=c=0:a.timeline=0}else if(g){ql(wi(x.vars.defaults,{ease:"none"})),x._ease=yo(g.ease||r.ease||"none");var U=0,k,W,j;if(bn(g))g.forEach(function(G){return x.to(v,G,">")}),x.duration();else{C={};for(M in g)M==="ease"||M==="easeEach"||Gw(M,g[M],C,g.easeEach);for(M in C)for(k=C[M].sort(function(G,H){return G.t-H.t}),U=0,y=0;y<k.length;y++)W=k[y],j={ease:W.e,duration:(W.t-(y?k[y-1].t:0))/100*u},j[M]=W.v,x.to(v,j,U),U+=j.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!G_&&(ps=Pr(a),kt.killTweensOf(v),ps=0),fr(h,Pr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===Ot(h._time)&&Jn(d)&&xw(Pr(a))&&h.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-c)||0)),m&&GS(Pr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-wt&&!c?l:r<wt?0:r,f,p,g,_,m,h,v,x;if(!u)Sw(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=Ot(d%_),d===l?(g=this._repeat,f=u):(m=Ot(d/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),h=this._yoyo&&g&1,h&&(f=u-f),m=$a(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ot(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(WS(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var C=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(y?-1:1)/C:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(xi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&qp(this,r,s,o),xi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&qp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ns(this,1),!s&&!(c&&!a)&&(d||a||h)&&(xi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Au||_i.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||J_(this,u),c=this._ease(u/this._dur),Hw(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(wd(this,0),this.parent||HS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?bl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ps&&ps.vars.overwrite!==!0)._first||bl(this),this.parent&&o!==this.timeline.totalDuration()&&Ka(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ki(r):a,u=this._ptLookup,c=this._pt,d,f,p,g,_,m,h;if((!s||s==="all")&&gw(a,l))return s==="all"&&(this._pt=0),bl(this);for(d=this._op=this._op||[],s!=="all"&&(pn(s)&&(_={},ei(s,function(v){return _[v]=1}),s=_),s=Vw(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,g=f,p={}):(p=d[h]=d[h]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ed(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&bl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(Cu);wi(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ei("staggerTo,staggerFrom,staggerFromTo",function(n){Kt[n]=function(){var e=new jn,t=$p.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var eg=function(e,t,i){return e[t]=i},lM=function(e,t,i){return e[t](i)},Ww=function(e,t,i,r){return e[t](r.fp,i)},Xw=function(e,t,i){return e.setAttribute(t,i)},tg=function(e,t){return Gt(e[t])?lM:W_(e[t])&&e.setAttribute?Xw:eg},uM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Yw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},ng=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},qw=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},jw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ed(this,t,"_pt"):t.dep||(i=1),t=r;return!i},$w=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},fM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ti=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||uM,this.d=l||this,this.set=u||eg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=$w,this.m=i,this.mt=s,this.tween=r},n}();ei($_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return j_[n]=1});Ti.TweenMax=Ti.TweenLite=Kt;Ti.TimelineLite=Ti.TimelineMax=jn;kt=new jn({sortChildren:!1,defaults:Mu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mi.stringFilter=nM;var So=[],af={},Kw=[],V0=0,Zw=0,dh=function(e){return(af[e]||Kw).map(function(t){return t()})},Jp=function(){var e=Date.now(),t=[];e-V0>2&&(dh("matchMediaInit"),So.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=or.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),dh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),V0=e,dh("matchMedia"))},dM=function(){function n(t,i){this.selector=i&&Kp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Zw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Nt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Kp(s)),Nt=o,d=r.apply(o,arguments),Gt(d)&&o._r.push(d),Nt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Nt;Nt=null,i(this),Nt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Kt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof jn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Kt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=So.length;o--;)So[o].id===this.id&&So.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),Qw=function(){function n(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Sr(i)||(i={matches:i});var o=new dM(0,s||this.scope),a=o.conditions={},l,u,c;Nt&&!o.selector&&(o.selector=Nt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=or.matchMedia(i[u]),l&&(So.indexOf(o)<0&&So.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Jp):l.addEventListener("change",Jp)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),jf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return JS(r)})},timeline:function(e){return new jn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){pn(e)&&(e=ki(e)[0]);var s=vo(e||{}).get,o=i?BS:zS;return i==="native"&&(i=""),e&&(t?o((pi[t]&&pi[t].get||s)(e,t,i,r)):function(a,l,u){return o((pi[a]&&pi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ki(e),e.length>1){var r=e.map(function(c){return oi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=pi[t],a=vo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ma._pt=0,d.init(e,i?c+i:c,Ma,0,[e]),d.render(1,d),Ma._pt&&ng(1,Ma)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=oi.to(e,wi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yo(e.ease,Mu.ease)),F0(Mu,e||{})},config:function(e){return F0(Mi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!pi[a]&&!Ti[a]&&Eu(t+" effect requires "+a+" plugin.")}),lh[t]=function(a,l,u){return i(ki(a),wi(l||{},s),u)},o&&(jn.prototype[t]=function(a,l,u){return this.add(lh[t](a,Sr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){at[e]=yo(t)},parseEase:function(e,t){return arguments.length?yo(e,t):at},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new jn(e),r,s;for(i.smoothChildTiming=Jn(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Kt&&r.vars.onComplete===r._targets[0]))&&fr(i,r,r._start-r._delay),r=s;return fr(kt,i,0),i},context:function(e,t){return e?new dM(e,t):Nt},matchMedia:function(e){return new Qw(e)},matchMediaRefresh:function(){return So.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Jp()},addEventListener:function(e,t){var i=af[e]||(af[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=af[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Pw,wrapYoyo:bw,distribute:qS,random:$S,snap:jS,normalize:Rw,getUnit:Rn,clamp:Tw,splitColor:eM,toArray:ki,selector:Kp,mapRange:ZS,pipe:Aw,unitize:Cw,interpolate:Lw,shuffle:YS},install:NS,effects:lh,ticker:_i,updateRoot:jn.updateRoot,plugins:pi,globalTimeline:kt,core:{PropTween:ti,globals:US,Tween:Kt,Timeline:jn,Animation:Cu,getCache:vo,_removeLinkedListItem:Ed,reverting:function(){return xn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return G_=e}}};ei("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return jf[n]=Kt[n]});_i.add(jn.updateRoot);Ma=jf.to({},{duration:0});var Jw=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},eA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Jw(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},hh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(pn(s)&&(l={},ei(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}eA(a,s)}}}},oi=jf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)xn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},hh("roundProps",Zp),hh("modifiers"),hh("snap",jS))||jf;Kt.version=jn.version=oi.version="3.15.0";IS=1;X_()&&Za();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var G0,ms,Da,ig,fo,W0,rg,tA=function(){return typeof window<"u"},qr={},to=180/Math.PI,Ia=Math.PI/180,Bo=Math.atan2,X0=1e8,sg=/([A-Z])/g,nA=/(left|right|width|margin|padding|x)/i,iA=/[\s,\(]\S/,hr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},em=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},aA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},hM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},pM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},lA=function(e,t,i){return e.style[t]=i},uA=function(e,t,i){return e.style.setProperty(t,i)},cA=function(e,t,i){return e._gsap[t]=i},fA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},dA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},hA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",ni=zt+"Origin",pA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in qr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=hr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Lr(r,a)}):this.tfm[e]=o.x?o[e]:Lr(r,e),e===ni&&(this.tfm.zOrigin=o.zOrigin);else return hr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ni,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},mM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},mA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(sg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=rg(),(!s||!s.isStart)&&!i[zt]&&(mM(i),r.zOrigin&&i[ni]&&(i[ni]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},_M=function(e,t){var i={target:e,props:[],revert:mA,save:pA};return e._gsap||oi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},gM,tm=function(e,t){var i=ms.createElementNS?ms.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ms.createElement(e);return i&&i.style?i:ms.createElement(e)},yi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(sg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Qa(t)||t,1)||""},Y0="O,Moz,ms,Ms,Webkit".split(","),Qa=function(e,t,i){var r=t||fo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Y0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Y0[o]:"")+e},nm=function(){tA()&&window.document&&(G0=window,ms=G0.document,Da=ms.documentElement,fo=tm("div")||{style:{}},tm("div"),zt=Qa(zt),ni=zt+"Origin",fo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gM=!!Qa("perspective"),rg=oi.core.reverting,ig=1)},q0=function(e){var t=e.ownerSVGElement,i=tm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Da.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Da.removeChild(i),s},j0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},vM=function(e){var t,i;try{t=e.getBBox()}catch{t=q0(e),i=1}return t&&(t.width||t.height)||i||(t=q0(e)),t&&!t.width&&!t.x&&!t.y?{x:+j0(e,["x","cx","x1"])||0,y:+j0(e,["y","cy","y1"])||0,width:0,height:0}:t},xM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vM(e))},Us=function(e,t){if(t){var i=e.style,r;t in qr&&t!==ni&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(sg,"-$1").toLowerCase())):i.removeAttribute(t)}},_s=function(e,t,i,r,s,o){var a=new ti(e._pt,t,i,0,1,o?pM:hM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},$0={deg:1,rad:1,turn:1},_A={grid:1,flex:1},Os=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=fo.style,l=nA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",g,_,m,h;if(r===o||!s||$0[r]||$0[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&xM(e),(p||o==="%")&&(qr[t]||~t.indexOf("adius")))return g=h?e.getBBox()[l?"width":"height"]:e[c],Wt(p?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ms||!_.appendChild)&&(_=ms.body),m=_._gsap,m&&p&&m.width&&l&&m.time===_i.time&&!m.uncache)return Wt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,g=e[c],v?e.style[t]=v:Us(e,t)}else(p||o==="%")&&!_A[yi(_,"display")]&&(a.position=yi(e,"position")),_===e&&(a.position="static"),_.appendChild(fo),g=fo[c],_.removeChild(fo),a.position="absolute";return l&&p&&(m=vo(_),m.time=_i.time,m.width=_[c]),Wt(f?g*s/d:g&&s?d/g*s:0)},Lr=function(e,t,i,r){var s;return ig||nm(),t in hr&&t!=="transform"&&(t=hr[t],~t.indexOf(",")&&(t=t.split(",")[0])),qr[t]&&t!=="transform"?(s=Pu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Kf(yi(e,ni))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=$f[t]&&$f[t](e,t,i)||yi(e,t)||FS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Os(e,t,s,i)+i:s},gA=function(e,t,i,r){if(!i||i==="none"){var s=Qa(t,e,1),o=s&&yi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=yi(e,"borderTopColor"))}var a=new ti(this._pt,e.style,t,0,1,cM),l=0,u=0,c,d,f,p,g,_,m,h,v,x,y,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=yi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=yi(e,t)||r,_?e.style[t]=_:Us(e,t)),c=[i,r],nM(c),i=c[0],r=c[1],f=i.match(Sa)||[],C=r.match(Sa)||[],C.length){for(;d=Sa.exec(r);)m=d[0],v=r.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=La(p,m)+y),h=parseFloat(m),x=m.substr((h+"").length),l=Sa.lastIndex-x.length,x||(x=x||Mi.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Os(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?pM:hM;return DS.test(r)&&(a.e=0),this._pt=a,a},K0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=K0[i]||i,t[1]=K0[r]||r,t.join(" ")},xA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],qr[a]&&(l=1,a=a==="transformOrigin"?ni:zt),Us(i,a);l&&(Us(i,zt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Pu(i,1),o.uncache=1,mM(r)))}},$f={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ti(e._pt,t,i,0,0,xA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ru=[1,0,0,1,0,0],yM={},SM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Z0=function(e){var t=yi(e,zt);return SM(t)?Ru:t.substr(7).match(LS).map(Wt)},og=function(e,t){var i=e._gsap||vo(e),r=e.style,s=Z0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ru:s):(s===Ru&&!e.offsetParent&&e!==Da&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Da.appendChild(e)),s=Z0(e),l?r.display=l:Us(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Da.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},im=function(e,t,i,r,s,o){var a=e._gsap,l=s||og(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,M,R,E;i?l!==Ru&&(M=p*m-g*_)&&(R=y*(m/M)+C*(-_/M)+(_*v-m*h)/M,E=y*(-g/M)+C*(p/M)-(p*v-g*h)/M,y=R,C=E):(w=vM(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(h=y-u,v=C-c,a.xOffset=d+(h*p+v*_)-h,a.yOffset=f+(h*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ni]="0px 0px",o&&(_s(o,a,"xOrigin",u,y),_s(o,a,"yOrigin",c,C),_s(o,a,"xOffset",d,a.xOffset),_s(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},Pu=function(e,t){var i=e._gsap||new rM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=yi(e,ni)||"0",c,d,f,p,g,_,m,h,v,x,y,C,w,M,R,E,S,b,U,k,W,j,G,H,I,$,P,te,ve,Xe,q,ee;return c=d=f=_=m=h=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&xM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),M=og(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),im(e,H||u,!!H||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,w=i.yOrigin||0,M!==Ru&&(b=M[0],U=M[1],k=M[2],W=M[3],c=j=M[4],d=G=M[5],M.length===6?(p=Math.sqrt(b*b+U*U),g=Math.sqrt(W*W+k*k),_=b||U?Bo(U,b)*to:0,v=k||W?Bo(k,W)*to+_:0,v&&(g*=Math.abs(Math.cos(v*Ia))),i.svg&&(c-=C-(C*b+w*k),d-=w-(C*U+w*W))):(ee=M[6],Xe=M[7],P=M[8],te=M[9],ve=M[10],q=M[11],c=M[12],d=M[13],f=M[14],R=Bo(ee,ve),m=R*to,R&&(E=Math.cos(-R),S=Math.sin(-R),H=j*E+P*S,I=G*E+te*S,$=ee*E+ve*S,P=j*-S+P*E,te=G*-S+te*E,ve=ee*-S+ve*E,q=Xe*-S+q*E,j=H,G=I,ee=$),R=Bo(-k,ve),h=R*to,R&&(E=Math.cos(-R),S=Math.sin(-R),H=b*E-P*S,I=U*E-te*S,$=k*E-ve*S,q=W*S+q*E,b=H,U=I,k=$),R=Bo(U,b),_=R*to,R&&(E=Math.cos(R),S=Math.sin(R),H=b*E+U*S,I=j*E+G*S,U=U*E-b*S,G=G*E-j*S,b=H,j=I),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,h=180-h),p=Wt(Math.sqrt(b*b+U*U+k*k)),g=Wt(Math.sqrt(G*G+ee*ee)),R=Bo(j,G),v=Math.abs(R)>2e-4?R*to:0,y=q?1/(q<0?-q:q):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!SM(yi(e,zt)),H&&e.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Wt(p),i.scaleY=Wt(g),i.rotation=Wt(_)+a,i.rotationX=Wt(m)+a,i.rotationY=Wt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ni]=Kf(u)),i.xOffset=i.yOffset=0,i.force3D=Mi.force3D,i.renderTransform=i.svg?SA:gM?MM:yA,i.uncache=0,i},Kf=function(e){return(e=e.split(" "))[0]+" "+e[1]},ph=function(e,t,i){var r=Rn(t);return Wt(parseFloat(t)+parseFloat(Os(e,"x",i+"px",r)))+r},yA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,MM(e,t)},Xs="0deg",vl="0px",Ys=") ",MM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",C=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Xs||c!==Xs)){var w=parseFloat(c)*Ia,M=Math.sin(w),R=Math.cos(w),E;w=parseFloat(d)*Ia,E=Math.cos(w),o=ph(v,o,M*E*-x),a=ph(v,a,-Math.sin(w)*-x),l=ph(v,l,R*E*-x+x)}m!==vl&&(y+="perspective("+m+Ys),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==vl||a!==vl||l!==vl)&&(y+=l!==vl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ys),u!==Xs&&(y+="rotate("+u+Ys),c!==Xs&&(y+="rotateY("+c+Ys),d!==Xs&&(y+="rotateX("+d+Ys),(f!==Xs||p!==Xs)&&(y+="skew("+f+", "+p+Ys),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ys),v.style[zt]=y||"translate(0, 0)"},SA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),C,w,M,R,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ia,u*=Ia,C=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=Ia,E=Math.tan(u-c),E=Math.sqrt(1+E*E),M*=E,R*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),C*=E,w*=E)),C=Wt(C),w=Wt(w),M=Wt(M),R=Wt(R)):(C=d,R=f,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Os(p,"x",o,"px"),y=Os(p,"y",a,"px")),(g||_||m||h)&&(x=Wt(x+g-(g*C+_*M)+m),y=Wt(y+_-(g*w+_*R)+h)),(r||s)&&(E=p.getBBox(),x=Wt(x+r/100*E.width),y=Wt(y+s/100*E.height)),E="matrix("+C+","+w+","+M+","+R+","+x+","+y+")",p.setAttribute("transform",E),v&&(p.style[zt]=E)},MA=function(e,t,i,r,s){var o=360,a=pn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?to:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*X0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*X0)%o-~~(u/o)*o)),e._pt=f=new ti(e._pt,t,i,r,u,rA),f.e=c,f.u="deg",e._props.push(i),f},Q0=function(e,t){for(var i in t)e[i]=t[i];return e},EA=function(e,t,i){var r=Q0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=Pu(i,1),Us(i,zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[zt],o[zt]=t,a=Pu(i,1),o[zt]=u);for(l in qr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Rn(u),g=Rn(c),d=p!==g?Os(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new ti(e._pt,a,l,d,f-d,em),e._pt.u=g||0,e._props.push(l));Q0(a,r)};ei("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});$f[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(g){return Lr(a,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,d)}});var EM={name:"css",register:nm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,g,_,m,h,v,x,y,C,w,M,R,E;ig||nm(),this.styles=this.styles||_M(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(pi[_]&&sM(_,t,i,r,e,s)))){if(p=typeof c,g=$f[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=wu(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Rs.lastIndex=0,Rs.test(u)||(m=Rn(u),h=Rn(c),h?m!==h&&(u=Os(e,_,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],pn(u)&&~u.indexOf("random(")&&(u=wu(u)),Rn(u+"")||u==="auto"||(u+=Mi.units[_]||Rn(Lr(e,_))||""),(u+"").charAt(1)==="="&&(u=Lr(e,_))):u=Lr(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),_ in hr&&(_==="autoAlpha"&&(f===1&&Lr(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),_s(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=hr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in qr,x){if(this.styles.save(_),E=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=yi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=yi(e,"perspective"),S?e.style.perspective=S:Us(e,"perspective")}d=parseFloat(c)}if(y||(C=e._gsap,C.renderTransform&&!t.parseTransform||Pu(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new ti(this._pt,a,zt,0,1,C.renderTransform,C,0,-1),y.dep=1),_==="scale")this._pt=new ti(this._pt,C,"scaleY",C.scaleY,(v?La(C.scaleY,v+d):d)-C.scaleY||0,em),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ni,0,a[ni]),c=vA(c),C.svg?im(e,c,0,w,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&_s(this,C,"zOrigin",C.zOrigin,h),_s(this,a,_,Kf(u),Kf(c)));continue}else if(_==="svgOrigin"){im(e,c,1,w,0,this);continue}else if(_ in yM){MA(this,C,_,f,v?La(f,v+c):c);continue}else if(_==="smoothOrigin"){_s(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){EA(this,c,e);continue}}else _ in a||(_=Qa(_)||_);if(x||(d||d===0)&&(f||f===0)&&!iA.test(c)&&_ in a)m=(u+"").substr((f+"").length),d||(d=0),h=Rn(c)||(_ in Mi.units?Mi.units[_]:m),m!==h&&(f=Os(e,_,u,h)),this._pt=new ti(this._pt,x?C:a,_,f,(v?La(f,v+d):d)-f,!x&&(h==="px"||_==="zIndex")&&t.autoRound!==!1?aA:em),this._pt.u=h||0,x&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=oA):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=sA);else if(_ in a)gA.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){q_(_,c);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,u||e[_])),o.push(_)}}M&&fM(this)},render:function(e,t){if(t.tween._time||!rg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Lr,aliases:hr,getSetter:function(e,t,i){var r=hr[t];return r&&r.indexOf(",")<0&&(t=r),t in qr&&t!==ni&&(e._gsap.x||Lr(e,"x"))?i&&W0===i?t==="scale"?fA:cA:(W0=i||{})&&(t==="scale"?dA:hA):e.style&&!W_(e.style[t])?lA:~t.indexOf("-")?uA:tg(e,t)},core:{_removeProperty:Us,_getMatrix:og}};oi.utils.checkPrefix=Qa;oi.core.getStyleSaver=_M;(function(n,e,t,i){var r=ei(n+","+e+","+t,function(s){qr[s]=1});ei(e,function(s){Mi.units[s]="deg",yM[s]=1}),hr[r[13]]=n+","+e,ei(i,function(s){var o=s.split(":");hr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ei("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Mi.units[n]="px"});oi.registerPlugin(EM);var gr=oi.registerPlugin(EM)||oi;gr.core.Tween;function TA(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function wA(n,e,t){return e&&TA(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gn,lf,gi,gs,vs,Na,TM,no,Ua,wM,Or,$i,AM,CM=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},RM=1,Ea=[],nt=[],vr=[],Kl=Date.now,rm=function(e,t){return t},AA=function(){var e=Ua.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,nt),r.push.apply(r,vr),nt=i,vr=r,rm=function(o,a){return t[o](a)}},Ps=function(e,t){return~vr.indexOf(e)&&vr[vr.indexOf(e)+1][t]},Zl=function(e){return!!~wM.indexOf(e)},In=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Dn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},uc="scrollLeft",cc="scrollTop",sm=function(){return Or&&Or.isPressed||nt.cache++},Zf=function(e,t){var i=function r(s){if(s||s===0){RM&&(gi.history.scrollRestoration="manual");var o=Or&&Or.isPressed;s=r.v=Math.round(s)||(Or&&Or.iOS?1:0),e(s),r.cacheID=nt.cache,o&&rm("ss",s)}else(t||nt.cache!==r.cacheID||rm("ref"))&&(r.cacheID=nt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},zn={s:uc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Zf(function(n){return arguments.length?gi.scrollTo(n,rn.sc()):gi.pageXOffset||gs[uc]||vs[uc]||Na[uc]||0})},rn={s:cc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:zn,sc:Zf(function(n){return arguments.length?gi.scrollTo(zn.sc(),n):gi.pageYOffset||gs[cc]||vs[cc]||Na[cc]||0})},Xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},CA=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Fs=function(e,t){var i=t.s,r=t.sc;Zl(e)&&(e=gs.scrollingElement||vs);var s=nt.indexOf(e),o=r===rn.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||In(e,"scroll",sm);var a=nt[s+o],l=a||(nt[s+o]=Zf(Ps(e,i),!0)||(Zl(e)?r:Zf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},om=function(e,t,i){var r=e,s=e,o=Kl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=Kl();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,h=Kl();return(g||g===0)&&g!==r&&c(g),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-_)*1e3};return{update:c,reset:d,getVelocity:f}},xl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},J0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},PM=function(){Ua=gn.core.globals().ScrollTrigger,Ua&&Ua.core&&AA()},bM=function(e){return gn=e||CM(),!lf&&gn&&typeof document<"u"&&document.body&&(gi=window,gs=document,vs=gs.documentElement,Na=gs.body,wM=[gi,gs,vs,Na],gn.utils.clamp,AM=gn.core.context||function(){},no="onpointerenter"in Na?"pointer":"mouse",TM=Yt.isTouch=gi.matchMedia&&gi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$i=Yt.eventTypes=("ontouchstart"in vs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return RM=0},500),lf=1),Ua||PM(),lf};zn.op=rn;nt.cache=0;var Yt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){lf||bM(gn)||console.warn("Please gsap.registerPlugin(Observer)"),Ua||PM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,C=i.onRight,w=i.onLeft,M=i.onUp,R=i.onDown,E=i.onChangeX,S=i.onChangeY,b=i.onChange,U=i.onToggleX,k=i.onToggleY,W=i.onHover,j=i.onHoverEnd,G=i.onMove,H=i.ignoreCheck,I=i.isNormalizer,$=i.onGestureStart,P=i.onGestureEnd,te=i.onWheel,ve=i.onEnable,Xe=i.onDisable,q=i.onClick,ee=i.scrollSpeed,ce=i.capture,ue=i.allowClicks,Pe=i.lockAxis,De=i.onLockAxis;this.target=a=Xn(a)||vs,this.vars=i,p&&(p=gn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,ee=ee||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(gi.getComputedStyle(Na).lineHeight)||22);var Ye,Je,D,Ue,ze,je,xe,V=this,be=0,Be=0,L=i.passive||!c&&i.passive!==!1,T=Fs(a,zn),X=Fs(a,rn),ne=T(),re=X(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&$i[0]==="pointerdown",Ce=Zl(a),se=a.ownerDocument||gs,pe=[0,0,0],Fe=[0,0,0],oe=0,ge=function(){return oe=Kl()},Ie=function(Ae,lt){return(V.event=Ae)&&p&&CA(Ae.target,p)||lt&&Z&&Ae.pointerType!=="touch"||H&&H(Ae,lt)},He=function(){V._vx.reset(),V._vy.reset(),Je.pause(),d&&d(V)},_e=function(){var Ae=V.deltaX=J0(pe),lt=V.deltaY=J0(Fe),fe=Math.abs(Ae)>=r,Ge=Math.abs(lt)>=r;b&&(fe||Ge)&&b(V,Ae,lt,pe,Fe),fe&&(C&&V.deltaX>0&&C(V),w&&V.deltaX<0&&w(V),E&&E(V),U&&V.deltaX<0!=be<0&&U(V),be=V.deltaX,pe[0]=pe[1]=pe[2]=0),Ge&&(R&&V.deltaY>0&&R(V),M&&V.deltaY<0&&M(V),S&&S(V),k&&V.deltaY<0!=Be<0&&k(V),Be=V.deltaY,Fe[0]=Fe[1]=Fe[2]=0),(Ue||D)&&(G&&G(V),D&&(m&&D===1&&m(V),v&&v(V),D=0),Ue=!1),je&&!(je=!1)&&De&&De(V),ze&&(te(V),ze=!1),Ye=0},Ve=function(Ae,lt,fe){pe[fe]+=Ae,Fe[fe]+=lt,V._vx.update(Ae),V._vy.update(lt),u?Ye||(Ye=requestAnimationFrame(_e)):_e()},qe=function(Ae,lt){Pe&&!xe&&(V.axis=xe=Math.abs(Ae)>Math.abs(lt)?"x":"y",je=!0),xe!=="y"&&(pe[2]+=Ae,V._vx.update(Ae,!0)),xe!=="x"&&(Fe[2]+=lt,V._vy.update(lt,!0)),u?Ye||(Ye=requestAnimationFrame(_e)):_e()},dt=function(Ae){if(!Ie(Ae,1)){Ae=xl(Ae,c);var lt=Ae.clientX,fe=Ae.clientY,Ge=lt-V.x,Ne=fe-V.y,We=V.isDragging;V.x=lt,V.y=fe,(We||(Ge||Ne)&&(Math.abs(V.startX-lt)>=s||Math.abs(V.startY-fe)>=s))&&(D||(D=We?2:1),We||(V.isDragging=!0),qe(Ge,Ne))}},O=V.onPress=function(ke){Ie(ke,1)||ke&&ke.button||(V.axis=xe=null,Je.pause(),V.isPressed=!0,ke=xl(ke),be=Be=0,V.startX=V.x=ke.clientX,V.startY=V.y=ke.clientY,V._vx.reset(),V._vy.reset(),In(I?a:se,$i[1],dt,L,!0),V.deltaX=V.deltaY=0,x&&x(V))},K=V.onRelease=function(ke){if(!Ie(ke,1)){Dn(I?a:se,$i[1],dt,!0);var Ae=!isNaN(V.y-V.startY),lt=V.isDragging,fe=lt&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ge=xl(ke);!fe&&Ae&&(V._vx.reset(),V._vy.reset(),c&&ue&&gn.delayedCall(.08,function(){if(Kl()-oe>300&&!ke.defaultPrevented){if(ke.target.click)ke.target.click();else if(se.createEvent){var Ne=se.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,gi,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),ke.target.dispatchEvent(Ne)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&lt&&!I&&Je.restart(!0),D&&_e(),h&&lt&&h(V),y&&y(V,fe)}},Q=function(Ae){return Ae.touches&&Ae.touches.length>1&&(V.isGesturing=!0)&&$(Ae,V.isDragging)},J=function(){return(V.isGesturing=!1)||P(V)},le=function(Ae){if(!Ie(Ae)){var lt=T(),fe=X();Ve((lt-ne)*ee,(fe-re)*ee,1),ne=lt,re=fe,d&&Je.restart(!0)}},Re=function(Ae){if(!Ie(Ae)){Ae=xl(Ae,c),te&&(ze=!0);var lt=(Ae.deltaMode===1?l:Ae.deltaMode===2?gi.innerHeight:1)*g;Ve(Ae.deltaX*lt,Ae.deltaY*lt,0),d&&!I&&Je.restart(!0)}},$e=function(Ae){if(!Ie(Ae)){var lt=Ae.clientX,fe=Ae.clientY,Ge=lt-V.x,Ne=fe-V.y;V.x=lt,V.y=fe,Ue=!0,d&&Je.restart(!0),(Ge||Ne)&&qe(Ge,Ne)}},Mt=function(Ae){V.event=Ae,W(V)},Et=function(Ae){V.event=Ae,j(V)},st=function(Ae){return Ie(Ae)||xl(Ae,c)&&q(V)};Je=V._dc=gn.delayedCall(f||.25,He).pause(),V.deltaX=V.deltaY=0,V._vx=om(0,50,!0),V._vy=om(0,50,!0),V.scrollX=T,V.scrollY=X,V.isDragging=V.isGesturing=V.isPressed=!1,AM(this),V.enable=function(ke){return V.isEnabled||(In(Ce?se:a,"scroll",sm),o.indexOf("scroll")>=0&&In(Ce?se:a,"scroll",le,L,ce),o.indexOf("wheel")>=0&&In(a,"wheel",Re,L,ce),(o.indexOf("touch")>=0&&TM||o.indexOf("pointer")>=0)&&(In(a,$i[0],O,L,ce),In(se,$i[2],K),In(se,$i[3],K),ue&&In(a,"click",ge,!0,!0),q&&In(a,"click",st),$&&In(se,"gesturestart",Q),P&&In(se,"gestureend",J),W&&In(a,no+"enter",Mt),j&&In(a,no+"leave",Et),G&&In(a,no+"move",$e)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Ue=D=!1,V._vx.reset(),V._vy.reset(),ne=T(),re=X(),ke&&ke.type&&O(ke),ve&&ve(V)),V},V.disable=function(){V.isEnabled&&(Ea.filter(function(ke){return ke!==V&&Zl(ke.target)}).length||Dn(Ce?se:a,"scroll",sm),V.isPressed&&(V._vx.reset(),V._vy.reset(),Dn(I?a:se,$i[1],dt,!0)),Dn(Ce?se:a,"scroll",le,ce),Dn(a,"wheel",Re,ce),Dn(a,$i[0],O,ce),Dn(se,$i[2],K),Dn(se,$i[3],K),Dn(a,"click",ge,!0),Dn(a,"click",st),Dn(se,"gesturestart",Q),Dn(se,"gestureend",J),Dn(a,no+"enter",Mt),Dn(a,no+"leave",Et),Dn(a,no+"move",$e),V.isEnabled=V.isPressed=V.isDragging=!1,Xe&&Xe(V))},V.kill=V.revert=function(){V.disable();var ke=Ea.indexOf(V);ke>=0&&Ea.splice(ke,1),Or===V&&(Or=0)},Ea.push(V),I&&Zl(a)&&(Or=V),V.enable(_)},wA(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Yt.version="3.15.0";Yt.create=function(n){return new Yt(n)};Yt.register=bM;Yt.getAll=function(){return Ea.slice()};Yt.getById=function(n){return Ea.filter(function(e){return e.vars.id===n})[0]};CM()&&gn.registerPlugin(Yt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Te,aa,tt,gt,mi,pt,ag,Qf,bu,Ql,Dl,fc,wn,Ad,am,Fn,ev,tv,la,LM,mh,DM,Un,lm,IM,NM,os,um,lg,Oa,ug,Jl,cm,_h,dc=1,An=Date.now,gh=An(),Hi=0,Il=0,nv=function(e,t,i){var r=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},iv=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},RA=function n(){return Il&&requestAnimationFrame(n)},rv=function(){return Ad=1},sv=function(){return Ad=0},ar=function(e){return e},Nl=function(e){return Math.round(e*1e5)/1e5||0},UM=function(){return typeof window<"u"},OM=function(){return Te||UM()&&(Te=window.gsap)&&Te.registerPlugin&&Te},bo=function(e){return!!~ag.indexOf(e)},FM=function(e){return(e==="Height"?ug:tt["inner"+e])||mi["client"+e]||pt["client"+e]},kM=function(e){return Ps(e,"getBoundingClientRect")||(bo(e)?function(){return hf.width=tt.innerWidth,hf.height=ug,hf}:function(){return Dr(e)})},PA=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ps(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?FM(s):e["client"+s])||0}},bA=function(e,t){return!t||~vr.indexOf(e)?kM(e):function(){return hf}},pr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ps(e,i))?o()-kM(e)()[s]:bo(e)?(mi[i]||pt[i])-FM(r):e[i]-e["offset"+r])},hc=function(e,t){for(var i=0;i<la.length;i+=3)(!t||~t.indexOf(la[i+1]))&&e(la[i],la[i+1],la[i+2])},hi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},Ul=function(e){return typeof e=="number"},io=function(e){return typeof e=="object"},yl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ho=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Vo=Math.abs,zM="left",BM="top",cg="right",fg="bottom",Mo="width",Eo="height",eu="Right",tu="Left",nu="Top",iu="Bottom",$t="padding",Ii="margin",Ja="Width",dg="Height",tn="px",Ni=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},LA=function(e){var t=Ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ov=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Dr=function(e,t){var i=t&&Ni(e)[am]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Jf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},HM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},DA=function(e){return function(t){return Te.utils.snap(HM(e),t)}},hg=function(e){var t=Te.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},IA=function(e){return function(t,i){return hg(HM(e))(t,i.direction)}},pc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},cn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},mc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},av={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_c={toggleActions:"play",anticipatePin:0},ed={top:0,left:0,center:.5,bottom:1,right:1},uf=function(e,t){if(hi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ed?ed[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},gc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,g=gt.createElement("div"),_=bo(i)||Ps(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=_?pt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===rn?cg:fg)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(g,h.children[0]):h.appendChild(g),g._offset=g["offset"+r.op.d2],cf(g,0,r,v),g},cf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ja]=1,s["border"+a+Ja]=0,s[i.p]=t+"px",Te.set(e,s)},Qe=[],fm={},Lu,lv=function(){return An()-Hi>34&&(Lu||(Lu=requestAnimationFrame(Hr)))},Go=function(){(!Un||!Un.isPressed||Un.startX>pt.clientWidth)&&(nt.cache++,Un?Lu||(Lu=requestAnimationFrame(Hr)):Hr(),Hi||Do("scrollStart"),Hi=An())},vh=function(){NM=tt.innerWidth,IM=tt.innerHeight},Ol=function(e){nt.cache++,(e===!0||!wn&&!DM&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!lm||NM!==tt.innerWidth||Math.abs(tt.innerHeight-IM)>tt.innerHeight*.25))&&Qf.restart(!0)},Lo={},NA=[],VM=function n(){return un(it,"scrollEnd",n)||ho(!0)},Do=function(e){return Lo[e]&&Lo[e].map(function(t){return t()})||NA},fi=[],GM=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},WM=function(){return nt.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},pg=function(e,t){var i;for(Fn=0;Fn<Qe.length;Fn++)i=Qe[Fn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Jl=!0,t&&GM(t),t||Do("revert")},XM=function(e,t){nt.cache++,(t||!kn)&&nt.forEach(function(i){return Pn(i)&&i.cacheID++&&(i.rec=0)}),hi(e)&&(tt.history.scrollRestoration=lg=e)},kn,To=0,uv,UA=function(){if(uv!==To){var e=uv=To;requestAnimationFrame(function(){return e===To&&ho(!0)})}},YM=function(){pt.appendChild(Oa),ug=!Un&&Oa.offsetHeight||tt.innerHeight,pt.removeChild(Oa)},cv=function(e){return bu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ho=function(e,t){if(mi=gt.documentElement,pt=gt.body,ag=[tt,gt,mi,pt],Hi&&!e&&!Jl){cn(it,"scrollEnd",VM);return}YM(),kn=it.isRefreshing=!0,Jl||WM();var i=Do("refreshInit");LM&&it.sort(),t||pg(),nt.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Qe.slice(0).forEach(function(r){return r.refresh()}),Jl=!1,Qe.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),cm=1,cv(!0),Qe.forEach(function(r){var s=pr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),cv(!1),cm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),nt.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),XM(lg,1),Qf.pause(),To++,kn=2,Hr(2),Qe.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),kn=it.isRefreshing=!1,Do("refresh")},dm=0,ff=1,ru,Hr=function(e){if(e===2||!kn&&!Jl){it.isUpdating=!0,ru&&ru.update(0);var t=Qe.length,i=An(),r=i-gh>=50,s=t&&Qe[0].scroll();if(ff=dm>s?-1:1,kn||(dm=s),r&&(Hi&&!Ad&&i-Hi>200&&(Hi=0,Do("scrollEnd")),Dl=gh,gh=i),ff<0){for(Fn=t;Fn-- >0;)Qe[Fn]&&Qe[Fn].update(0,r);ff=1}else for(Fn=0;Fn<t;Fn++)Qe[Fn]&&Qe[Fn].update(0,r);it.isUpdating=!1}Lu=0},hm=[zM,BM,fg,cg,Ii+iu,Ii+eu,Ii+nu,Ii+tu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],df=hm.concat([Mo,Eo,"boxSizing","max"+Ja,"max"+dg,"position",Ii,$t,$t+nu,$t+eu,$t+iu,$t+tu]),OA=function(e,t,i){Fa(i);var r=e._gsap;if(r.spacerIsNative)Fa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=hm.length,o=t.style,a=e.style,l;s--;)l=hm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[fg]=a[cg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Mo]=Jf(e,zn)+tn,o[Eo]=Jf(e,rn)+tn,o[$t]=a[Ii]=a[BM]=a[zM]="0",Fa(r),a[Mo]=a["max"+Ja]=i[Mo],a[Eo]=a["max"+dg]=i[Eo],a[$t]=i[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},FA=/([A-Z])/g,Fa=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(FA,"-$1").toLowerCase())}},vc=function(e){for(var t=df.length,i=e.style,r=[],s=0;s<t;s++)r.push(df[s],i[df[s]]);return r.t=e,r},kA=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},hf={left:0,top:0},fv=function(e,t,i,r,s,o,a,l,u,c,d,f,p,g){Pn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?uf("0"+e.substr(3),i):0));var _=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Ul(e))p&&(e=Te.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&cf(a,i,r,!0);else{Pn(t)&&(t=t(l));var x=(e||"0").split(" "),y,C,w,M;v=Xn(t,l)||pt,y=Dr(v)||{},(!y||!y.left&&!y.top)&&Ni(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Dr(v),M?v.style.display=M:v.style.removeProperty("display")),C=uf(x[0],y[r.d]),w=uf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+C+s-w,a&&cf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+i,E=o._isStart;m="scroll"+r.d2,cf(o,R,r,E&&R>20||!E&&(d?Math.max(pt[m],mi[m]):o.parentNode[m])<=R+1),d&&(u=Dr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+tn))}return p&&v&&(m=Dr(v),p.seek(f),h=Dr(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},zA=/(webkit|moz|length|cssText|inset)/i,dv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=Ni(e);for(o in a)!+o&&!zA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},qM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},xc=function(e,t,i){var r={};r[t.p]="+="+i,Te.set(e,r)},hv=function(e,t){var i=Fs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,g={};u=u||i();var _=qM(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Hr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Te.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",i.wheelHandler),it.isTouch&&cn(e,"touchmove",i.wheelHandler),s},it=function(){function n(t,i){aa||n.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),um(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Il){this.update=this.refresh=this.kill=ar;return}i=ov(hi(i)||Ul(i)||i.nodeType?{trigger:i}:i,_c);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,C=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,E=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?zn:rn,b=!d&&d!==0,U=Xn(i.scroller||tt),k=Te.core.getCache(U),W=bo(U),j=("pinType"in i?i.pinType:Ps(U,"pinType")||W&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],H=b&&i.toggleActions.split(" "),I="markers"in i?i.markers:_c.markers,$=W?0:parseFloat(Ni(U)["border"+S.p2+Ja])||0,P=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(P)},ve=PA(U,W,S),Xe=bA(U,W),q=0,ee=0,ce=0,ue=Fs(U,S),Pe,De,Ye,Je,D,Ue,ze,je,xe,V,be,Be,L,T,X,ne,re,Z,Ce,se,pe,Fe,oe,ge,Ie,He,_e,Ve,qe,dt,O,K,Q,J,le,Re,$e,Mt,Et;if(P._startClamp=P._endClamp=!1,P._dir=S,m*=45,P.scroller=U,P.scroll=M?M.time.bind(M):ue,Je=ue(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(LM=1,i.refreshPriority===-9999&&(ru=P)),k.tweenScroll=k.tweenScroll||{top:hv(U,rn),left:hv(U,zn)},P.tweenTo=Pe=k.tweenScroll[S.p],P.scrubDuration=function(fe){Q=Ul(fe)&&fe,Q?K?K.duration(fe):K=Te.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return h&&h(P)}}):(K&&K.progress(1).kill(),K=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),dt=0,l||(l=r.vars.id)),y&&((!io(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&Te.set(W?[pt,mi]:U,{scrollBehavior:"auto"}),nt.forEach(function(fe){return Pn(fe)&&fe.target===(W?gt.scrollingElement||mi:U)&&(fe.smooth=!1)}),Ye=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?DA(r):y.snapTo==="labelsDirectional"?IA(r):y.directional!==!1?function(fe,Ge){return hg(y.snapTo)(fe,An()-ee<500?0:Ge.direction)}:Te.utils.snap(y.snapTo),J=y.duration||{min:.1,max:2},J=io(J)?Ql(J.min,J.max):Ql(J,J),le=Te.delayedCall(y.delay||Q/2||.1,function(){var fe=ue(),Ge=An()-ee<500,Ne=Pe.tween;if((Ge||Math.abs(P.getVelocity())<10)&&!Ne&&!Ad&&q!==fe){var We=(fe-Ue)/T,Ut=r&&!b?r.totalProgress():We,et=Ge?0:(Ut-O)/(An()-Dl)*1e3||0,At=Te.utils.clamp(-We,1-We,Vo(et/2)*et/.185),Jt=We+(y.inertia===!1?0:At),Pt,Ct,_t=y,ai=_t.onStart,A=_t.onInterrupt,N=_t.onComplete;if(Pt=Ye(Jt,P),Ul(Pt)||(Pt=Jt),Ct=Math.max(0,Math.round(Ue+Pt*T)),fe<=ze&&fe>=Ue&&Ct!==fe){if(Ne&&!Ne._initted&&Ne.data<=Vo(Ct-fe))return;y.inertia===!1&&(At=Pt-We),Pe(Ct,{duration:J(Vo(Math.max(Vo(Jt-Ut),Vo(Pt-Ut))*.185/et/.05||0)),ease:y.ease||"power3",data:Vo(Ct-fe),onInterrupt:function(){return le.restart(!0)&&A&&Ho(P,A)},onComplete:function(){P.update(),q=ue(),r&&!b&&(K?K.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),dt=O=r&&!b?r.totalProgress():P.progress,v&&v(P),N&&Ho(P,N)}},fe,At*T,Ct-fe-At*T),ai&&Ho(P,ai,Pe.tween)}}else P.isActive&&q!==fe&&le.restart(!0)}).pause()),l&&(fm[l]=P),f=P.trigger=Xn(f||p!==!0&&p),Et=f&&f._gsap&&f._gsap.stRevert,Et&&(Et=Et(P)),p=p===!0?f:Xn(p),hi(a)&&(a={targets:f,className:a}),p&&(g===!1||g===Ii||(g=!g&&p.parentNode&&p.parentNode.style&&Ni(p.parentNode).display==="flex"?!1:$t),P.pin=p,De=Te.core.getCache(p),De.spacer?X=De.pinState:(w&&(w=Xn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),De.spacerIsNative=!!w,w&&(De.spacerState=vc(w))),De.spacer=Z=w||gt.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),De.pinState=X=vc(p)),i.force3D!==!1&&Te.set(p,{force3D:!0}),P.spacer=Z=De.spacer,qe=Ni(p),ge=qe[g+S.os2],se=Te.getProperty(p),pe=Te.quickSetter(p,S.a,tn),xh(p,Z,qe),re=vc(p)),I){Be=io(I)?ov(I,av):av,V=gc("scroller-start",l,U,S,Be,0),be=gc("scroller-end",l,U,S,Be,0,V),Ce=V["offset"+S.op.d2];var st=Xn(Ps(U,"content")||U);je=this.markerStart=gc("start",l,st,S,Be,Ce,0,M),xe=this.markerEnd=gc("end",l,st,S,Be,Ce,0,M),M&&(Mt=Te.quickSetter([je,xe],S.a,tn)),!j&&!(vr.length&&Ps(U,"fixedMarkers")===!0)&&(LA(W?pt:U),Te.set([V,be],{force3D:!0}),He=Te.quickSetter(V,S.a,tn),Ve=Te.quickSetter(be,S.a,tn))}if(M){var ke=M.vars.onUpdate,Ae=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){P.update(0,0,1),ke&&ke.apply(M,Ae||[])})}if(P.previous=function(){return Qe[Qe.indexOf(P)-1]},P.next=function(){return Qe[Qe.indexOf(P)+1]},P.revert=function(fe,Ge){if(!Ge)return P.kill(!0);var Ne=fe!==!1||!P.enabled,We=wn;Ne!==P.isReverted&&(Ne&&(Re=Math.max(ue(),P.scroll.rec||0),ce=P.progress,$e=r&&r.progress()),je&&[je,xe,V,be].forEach(function(Ut){return Ut.style.display=Ne?"none":"block"}),Ne&&(wn=P,P.update(Ne)),p&&(!C||!P.isActive)&&(Ne?OA(p,Z,X):xh(p,Z,Ni(p),Ie)),Ne||P.update(Ne),wn=We,P.isReverted=Ne)},P.refresh=function(fe,Ge,Ne,We){if(!((wn||!P.enabled)&&!Ge)){if(p&&fe&&Hi){cn(n,"scrollEnd",VM);return}!kn&&te&&te(P),wn=P,Pe.tween&&!Ne&&(Pe.tween.kill(),Pe.tween=0),K&&K.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(we){return we.vars.immediateRender&&we.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ut=ve(),et=Xe(),At=M?M.duration():pr(U,S),Jt=T<=.01||!T,Pt=0,Ct=We||0,_t=io(Ne)?Ne.end:i.end,ai=i.endTrigger||f,A=io(Ne)?Ne.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),N=P.pinnedContainer=i.pinnedContainer&&Xn(i.pinnedContainer,P),B=f&&Math.max(0,Qe.indexOf(P))||0,z=B,F,ie,de,Me,he,ye,Le,Oe,ut,St,ct,en,ot;for(I&&io(Ne)&&(en=Te.getProperty(V,S.p),ot=Te.getProperty(be,S.p));z-- >0;)ye=Qe[z],ye.end||ye.refresh(0,1)||(wn=P),Le=ye.pin,Le&&(Le===f||Le===p||Le===N)&&!ye.isReverted&&(St||(St=[]),St.unshift(ye),ye.revert(!0,!0)),ye!==Qe[z]&&(B--,z--);for(Pn(A)&&(A=A(P)),A=nv(A,"start",P),Ue=fv(A,f,Ut,S,ue(),je,V,P,et,$,j,At,M,P._startClamp&&"_startClamp")||(p?-.001:0),Pn(_t)&&(_t=_t(P)),hi(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(hi(A)?A.split(" ")[0]:"")+_t:(Pt=uf(_t.substr(2),Ut),_t=hi(A)?A:(M?Te.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Ue):Ue)+Pt,ai=f)),_t=nv(_t,"end",P),ze=Math.max(Ue,fv(_t||(ai?"100% 0":At),ai,Ut,S,ue()+Pt,xe,be,P,et,$,j,At,M,P._endClamp&&"_endClamp"))||-.001,Pt=0,z=B;z--;)ye=Qe[z]||{},Le=ye.pin,Le&&ye.start-ye._pinPush<=Ue&&!M&&ye.end>0&&(F=ye.end-(P._startClamp?Math.max(0,ye.start):ye.start),(Le===f&&ye.start-ye._pinPush<Ue||Le===N)&&isNaN(A)&&(Pt+=F*(1-ye.progress)),Le===p&&(Ct+=F));if(Ue+=Pt,ze+=Pt,P._startClamp&&(P._startClamp+=Pt),P._endClamp&&!kn&&(P._endClamp=ze||-.001,ze=Math.min(ze,pr(U,S))),T=ze-Ue||(Ue-=.01)&&.001,Jt&&(ce=Te.utils.clamp(0,1,Te.utils.normalize(Ue,ze,Re))),P._pinPush=Ct,je&&Pt&&(F={},F[S.a]="+="+Pt,N&&(F[S.p]="-="+ue()),Te.set([je,xe],F)),p&&!(cm&&P.end>=pr(U,S)))F=Ni(p),Me=S===rn,de=ue(),Fe=parseFloat(se(S.a))+Ct,!At&&ze>1&&(ct=(W?gt.scrollingElement||mi:U).style,ct={style:ct,value:ct["overflow"+S.a.toUpperCase()]},W&&Ni(pt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+S.a.toUpperCase()]="scroll")),xh(p,Z,F),re=vc(p),ie=Dr(p,!0),Oe=j&&Fs(U,Me?zn:rn)(),g?(Ie=[g+S.os2,T+Ct+tn],Ie.t=Z,z=g===$t?Jf(p,S)+T+Ct:0,z&&(Ie.push(S.d,z+tn),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=z+tn)),Fa(Ie),N&&Qe.forEach(function(we){we.pin===N&&we.vars.pinSpacing!==!1&&(we._subPinOffset=!0)}),j&&ue(Re)):(z=Jf(p,S),z&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=z+tn)),j&&(he={top:ie.top+(Me?de-Ue:Oe)+tn,left:ie.left+(Me?Oe:de-Ue)+tn,boxSizing:"border-box",position:"fixed"},he[Mo]=he["max"+Ja]=Math.ceil(ie.width)+tn,he[Eo]=he["max"+dg]=Math.ceil(ie.height)+tn,he[Ii]=he[Ii+nu]=he[Ii+eu]=he[Ii+iu]=he[Ii+tu]="0",he[$t]=F[$t],he[$t+nu]=F[$t+nu],he[$t+eu]=F[$t+eu],he[$t+iu]=F[$t+iu],he[$t+tu]=F[$t+tu],ne=kA(X,he,C),kn&&ue(0)),r?(ut=r._initted,mh(1),r.render(r.duration(),!0,!0),oe=se(S.a)-Fe+T+Ct,_e=Math.abs(T-oe)>1,j&&_e&&ne.splice(ne.length-2,2),r.render(0,!0,!0),ut||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),mh(0)):oe=T,ct&&(ct.value?ct.style["overflow"+S.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+S.a));else if(f&&ue()&&!M)for(ie=f.parentNode;ie&&ie!==pt;)ie._pinOffset&&(Ue-=ie._pinOffset,ze-=ie._pinOffset),ie=ie.parentNode;St&&St.forEach(function(we){return we.revert(!1,!0)}),P.start=Ue,P.end=ze,Je=D=kn?Re:ue(),!M&&!kn&&(Je<Re&&ue(Re),P.scroll.rec=0),P.revert(!1,!0),ee=An(),le&&(q=-1,le.restart(!0)),wn=0,r&&b&&(r._initted||$e)&&r.progress()!==$e&&r.progress($e||0,!0).render(r.time(),!0,!0),(Jt||ce!==P.progress||M||_||r&&!r._initted)&&(r&&!b&&(r._initted||ce||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Ue<-.001&&!ce?Te.utils.normalize(Ue,ze,0):ce,!0),P.progress=Jt||(Je-Ue)/T===ce?0:ce),p&&g&&(Z._pinOffset=Math.round(P.progress*oe)),K&&K.invalidate(),isNaN(en)||(en-=Te.getProperty(V,S.p),ot-=Te.getProperty(be,S.p),xc(V,S,en),xc(je,S,en-(We||0)),xc(be,S,ot),xc(xe,S,ot-(We||0))),Jt&&!kn&&P.update(),c&&!kn&&!L&&(L=!0,c(P),L=!1)}},P.getVelocity=function(){return(ue()-D)/(An()-Dl)*1e3||0},P.endAnimation=function(){yl(P.callbackAnimation),r&&(K?K.progress(1):r.paused()?b||yl(r,P.direction<0,1):yl(r,r.reversed()))},P.labelToScroll=function(fe){return r&&r.labels&&(Ue||P.refresh()||Ue)+r.labels[fe]/r.duration()*T||0},P.getTrailing=function(fe){var Ge=Qe.indexOf(P),Ne=P.direction>0?Qe.slice(0,Ge).reverse():Qe.slice(Ge+1);return(hi(fe)?Ne.filter(function(We){return We.vars.preventOverlaps===fe}):Ne).filter(function(We){return P.direction>0?We.end<=Ue:We.start>=ze})},P.update=function(fe,Ge,Ne){if(!(M&&!Ne&&!fe)){var We=kn===!0?Re:P.scroll(),Ut=fe?0:(We-Ue)/T,et=Ut<0?0:Ut>1?1:Ut||0,At=P.progress,Jt,Pt,Ct,_t,ai,A,N,B;if(Ge&&(D=Je,Je=M?ue():We,y&&(O=dt,dt=r&&!b?r.totalProgress():et)),m&&p&&!wn&&!dc&&Hi&&(!et&&Ue<We+(We-D)/(An()-Dl)*m?et=1e-4:et===1&&ze>We+(We-D)/(An()-Dl)*m&&(et=.9999)),et!==At&&P.enabled){if(Jt=P.isActive=!!et&&et<1,Pt=!!At&&At<1,A=Jt!==Pt,ai=A||!!et!=!!At,P.direction=et>At?1:-1,P.progress=et,ai&&!wn&&(Ct=et&&!At?0:et===1?1:At===1?2:3,b&&(_t=!A&&H[Ct+1]!=="none"&&H[Ct+1]||H[Ct],B=r&&(_t==="complete"||_t==="reset"||_t in r))),E&&(A||B)&&(B||d||!r)&&(Pn(E)?E(P):P.getTrailing(E).forEach(function(de){return de.endAnimation()})),b||(K&&!wn&&!dc?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",et,r._tTime/r._tDur):(K.vars.totalProgress=et,K.invalidate().restart())):r&&r.totalProgress(et,!!(wn&&(ee||fe)))),p){if(fe&&g&&(Z.style[g+S.os2]=ge),!j)pe(Nl(Fe+oe*et));else if(ai){if(N=!fe&&et>At&&ze+1>We&&We+1>=pr(U,S),C)if(!fe&&(Jt||N)){var z=Dr(p,!0),F=We-Ue;dv(p,pt,z.top+(S===rn?F:0)+tn,z.left+(S===rn?0:F)+tn)}else dv(p,Z);Fa(Jt||N?ne:re),_e&&et<1&&Jt||pe(Fe+(et===1&&!N?oe:0))}}y&&!Pe.tween&&!wn&&!dc&&le.restart(!0),a&&(A||x&&et&&(et<1||!_h))&&bu(a.targets).forEach(function(de){return de.classList[Jt||x?"add":"remove"](a.className)}),o&&!b&&!fe&&o(P),ai&&!wn?(b&&(B&&(_t==="complete"?r.pause().totalProgress(1):_t==="reset"?r.restart(!0).pause():_t==="restart"?r.restart(!0):r[_t]()),o&&o(P)),(A||!_h)&&(u&&A&&Ho(P,u),G[Ct]&&Ho(P,G[Ct]),x&&(et===1?P.kill(!1,1):G[Ct]=0),A||(Ct=et===1?1:3,G[Ct]&&Ho(P,G[Ct]))),R&&!Jt&&Math.abs(P.getVelocity())>(Ul(R)?R:2500)&&(yl(P.callbackAnimation),K?K.progress(1):yl(r,_t==="reverse"?1:!et,1))):b&&o&&!wn&&o(P)}if(Ve){var ie=M?We/M.duration()*(M._caScrollDist||0):We;He(ie+(V._isFlipped?1:0)),Ve(ie)}Mt&&Mt(-We/M.duration()*(M._caScrollDist||0))}},P.enable=function(fe,Ge){P.enabled||(P.enabled=!0,cn(U,"resize",Ol),W||cn(U,"scroll",Go),te&&cn(n,"refreshInit",te),fe!==!1&&(P.progress=ce=0,Je=D=q=ue()),Ge!==!1&&P.refresh())},P.getTween=function(fe){return fe&&Pe?Pe.tween:K},P.setPositions=function(fe,Ge,Ne,We){if(M){var Ut=M.scrollTrigger,et=M.duration(),At=Ut.end-Ut.start;fe=Ut.start+At*fe/et,Ge=Ut.start+At*Ge/et}P.refresh(!1,!1,{start:iv(fe,Ne&&!!P._startClamp),end:iv(Ge,Ne&&!!P._endClamp)},We),P.update()},P.adjustPinSpacing=function(fe){if(Ie&&fe){var Ge=Ie.indexOf(S.d)+1;Ie[Ge]=parseFloat(Ie[Ge])+fe+tn,Ie[1]=parseFloat(Ie[1])+fe+tn,Fa(Ie)}},P.disable=function(fe,Ge){if(fe!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ge||K&&K.pause(),Re=0,De&&(De.uncache=1),te&&un(n,"refreshInit",te),le&&(le.pause(),Pe.tween&&Pe.tween.kill()&&(Pe.tween=0)),!W)){for(var Ne=Qe.length;Ne--;)if(Qe[Ne].scroller===U&&Qe[Ne]!==P)return;un(U,"resize",Ol),W||un(U,"scroll",Go)}},P.kill=function(fe,Ge){P.disable(fe,Ge),K&&!Ge&&K.kill(),l&&delete fm[l];var Ne=Qe.indexOf(P);Ne>=0&&Qe.splice(Ne,1),Ne===Fn&&ff>0&&Fn--,Ne=0,Qe.forEach(function(We){return We.scroller===P.scroller&&(Ne=1)}),Ne||kn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,fe&&r.revert({kill:!1}),Ge||r.kill()),je&&[je,xe,V,be].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),ru===P&&(ru=0),p&&(De&&(De.uncache=1),Ne=0,Qe.forEach(function(We){return We.pin===p&&Ne++}),Ne||(De.spacer=0)),i.onKill&&i.onKill(P)},Qe.push(P),P.enable(!1,!1),Et&&Et(P),r&&r.add&&!T){var lt=P.update;P.update=function(){P.update=lt,nt.cache++,Ue||ze||P.refresh()},Te.delayedCall(.01,P.update),T=.01,Ue=ze=0}else P.refresh();p&&UA()},n.register=function(i){return aa||(Te=i||OM(),UM()&&window.document&&n.enable(),aa=Il),aa},n.defaults=function(i){if(i)for(var r in i)_c[r]=i[r];return _c},n.disable=function(i,r){Il=0,Qe.forEach(function(o){return o[r?"kill":"disable"](i)}),un(tt,"wheel",Go),un(gt,"scroll",Go),clearInterval(fc),un(gt,"touchcancel",ar),un(pt,"touchstart",ar),pc(un,gt,"pointerdown,touchstart,mousedown",rv),pc(un,gt,"pointerup,touchend,mouseup",sv),Qf.kill(),hc(un);for(var s=0;s<nt.length;s+=3)mc(un,nt[s],nt[s+1]),mc(un,nt[s],nt[s+2])},n.enable=function(){if(tt=window,gt=document,mi=gt.documentElement,pt=gt.body,Te){if(bu=Te.utils.toArray,Ql=Te.utils.clamp,um=Te.core.context||ar,mh=Te.core.suppressOverwrites||ar,lg=tt.history.scrollRestoration||"auto",dm=tt.pageYOffset||0,Te.core.globals("ScrollTrigger",n),pt){Il=1,Oa=document.createElement("div"),Oa.style.height="100vh",Oa.style.position="absolute",YM(),RA(),Yt.register(Te),n.isTouch=Yt.isTouch,os=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lm=Yt.isTouch===1,cn(tt,"wheel",Go),ag=[tt,gt,mi,pt],Te.matchMedia?(n.matchMedia=function(c){var d=Te.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Te.addEventListener("matchMediaInit",function(){WM(),pg()}),Te.addEventListener("matchMediaRevert",function(){return GM()}),Te.addEventListener("matchMedia",function(){ho(0,1),Do("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return vh(),vh})):console.warn("Requires GSAP 3.11.0 or later"),vh(),cn(gt,"scroll",Go);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=Te.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Dr(pt),rn.m=Math.round(a.top+rn.sc())||0,zn.m=Math.round(a.left+zn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),fc=setInterval(lv,250),Te.delayedCall(.5,function(){return dc=0}),cn(gt,"touchcancel",ar),cn(pt,"touchstart",ar),pc(cn,gt,"pointerdown,touchstart,mousedown",rv),pc(cn,gt,"pointerup,touchend,mouseup",sv),am=Te.utils.checkPrefix("transform"),df.push(am),aa=An(),Qf=Te.delayedCall(.2,ho).pause(),la=[gt,"visibilitychange",function(){var c=tt.innerWidth,d=tt.innerHeight;gt.hidden?(ev=c,tv=d):(ev!==c||tv!==d)&&Ol()},gt,"DOMContentLoaded",ho,tt,"load",ho,tt,"resize",Ol],hc(cn),Qe.forEach(function(c){return c.enable(0,1)}),l=0;l<nt.length;l+=3)mc(un,nt[l],nt[l+1]),mc(un,nt[l],nt[l+2])}else if(gt){var u=function c(){n.enable(),gt.removeEventListener("DOMContentLoaded",c)};gt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(_h=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(fc)||(fc=r)&&setInterval(lv,r),"ignoreMobileResize"in i&&(lm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(hc(un)||hc(cn,i.autoRefreshEvents||"none"),DM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Xn(i),o=nt.indexOf(s),a=bo(s);~o&&nt.splice(o,a?6:2),r&&(a?vr.unshift(tt,r,pt,r,mi,r):vr.unshift(s,r))},n.clearMatchMedia=function(i){Qe.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(hi(i)?Xn(i):i).getBoundingClientRect(),a=o[s?Mo:Eo]*r||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},n.positionInViewport=function(i,r,s){hi(i)&&(i=Xn(i));var o=i.getBoundingClientRect(),a=o[s?Mo:Eo],l=r==null?a/2:r in ed?ed[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},n.killAll=function(i){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Lo.killAll||[];Lo={},r.forEach(function(s){return s()})}},n}();it.version="3.15.0";it.saveStyles=function(n){return n?bu(n).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),um())}}):fi};it.revert=function(n,e){return pg(!n,e)};it.create=function(n,e){return new it(n,e)};it.refresh=function(n){return n?Ol(!0):(aa||it.register())&&ho(!0)};it.update=function(n){return++nt.cache&&Hr(n===!0?2:0)};it.clearScrollMemory=XM;it.maxScroll=function(n,e){return pr(n,e?zn:rn)};it.getScrollFunc=function(n,e){return Fs(Xn(n),e?zn:rn)};it.getById=function(n){return fm[n]};it.getAll=function(){return Qe.filter(function(n){return n.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Hi};it.snapDirectional=hg;it.addEventListener=function(n,e){var t=Lo[n]||(Lo[n]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(n,e){var t=Lo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};it.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=Te.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),cn(it,"refresh",function(){return s=e.batchMax()})),bu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(it.create(u))}),t};var pv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},yh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===mi&&n(pt,t)},yc={auto:1,scroll:1},BA=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Te.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(yc[(l=Ni(s)).overflowY]||yc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!bo(s)&&(yc[(l=Ni(s)).overflowY]||yc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},jM=function(e,t,i,r){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&BA,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&cn(gt,Yt.eventTypes[0],_v,!1,!0)},onDisable:function(){return un(gt,Yt.eventTypes[0],_v,!0)}})},HA=/(input|label|select|textarea)/i,mv,_v=function(e){var t=HA.test(e.target.tagName);(t||mv)&&(e._gsapAllow=!0,mv=t)},VA=function(e){io(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Xn(e.target)||mi,c=Te.core.globals().ScrollSmoother,d=c&&c.get(),f=os&&(e.content&&Xn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Fs(u,rn),g=Fs(u,zn),_=1,m=(Yt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,h=0,v=Pn(r)?function(){return r(a)}:function(){return r||2.8},x,y,C=jM(u,e.type,!0,s),w=function(){return y=!1},M=ar,R=ar,E=function(){l=pr(u,rn),R=Ql(os?1:0,l),i&&(M=Ql(0,pr(u,zn))),x=To},S=function(){f._gsap.y=Nl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},b=function(){if(y){requestAnimationFrame(w);var I=Nl(a.deltaY/2),$=R(p.v-I);if(f&&$!==p.v+p.offset){p.offset=$-p.v;var P=Nl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",p.cacheID=nt.cache,Hr()}return!0}p.offset&&S(),y=!0},U,k,W,j,G=function(){E(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return f&&Te.set(f,{y:"+=0"}),e.ignoreCheck=function(H){return os&&H.type==="touchmove"&&b()||_>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){y=!1;var H=_;_=Nl((tt.visualViewport&&tt.visualViewport.scale||1)/m),U.pause(),H!==_&&yh(u,_>1.01?!0:i?!1:"x"),k=g(),W=p(),E(),x=To},e.onRelease=e.onGestureStart=function(H,I){if(p.offset&&S(),!I)j.restart(!0);else{nt.cache++;var $=v(),P,te;i&&(P=g(),te=P+$*.05*-H.velocityX/.227,$*=pv(g,P,te,pr(u,zn)),U.vars.scrollX=M(te)),P=p(),te=P+$*.05*-H.velocityY/.227,$*=pv(p,P,te,pr(u,rn)),U.vars.scrollY=R(te),U.invalidate().duration($).play(.01),(os&&U.vars.scrollY>=l||P>=l-1)&&Te.to({},{onUpdate:G,duration:$})}o&&o(H)},e.onWheel=function(){U._ts&&U.pause(),An()-h>1e3&&(x=0,h=An())},e.onChange=function(H,I,$,P,te){if(To!==x&&E(),I&&i&&g(M(P[2]===I?k+(H.startX-H.x):g()+I-P[1])),$){p.offset&&S();var ve=te[2]===$,Xe=ve?W+H.startY-H.y:p()+$-te[1],q=R(Xe);ve&&Xe!==q&&(W+=q-Xe),p(q)}($||I)&&Hr()},e.onEnable=function(){yh(u,i?!1:"x"),it.addEventListener("refresh",G),cn(tt,"resize",G),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){yh(u,!0),un(tt,"resize",G),it.removeEventListener("refresh",G),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=os,os&&!p()&&p(1),os&&Te.ticker.add(ar),j=a._dc,U=Te.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qM(p,p(),function(){return U.pause()})},onUpdate:Hr,onComplete:j.vars.onComplete}),a};it.sort=function(n){if(Pn(n))return Qe.sort(n);var e=tt.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),Qe.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};it.observe=function(n){return new Yt(n)};it.normalizeScroll=function(n){if(typeof n>"u")return Un;if(n===!0&&Un)return Un.enable();if(n===!1){Un&&Un.kill(),Un=n;return}var e=n instanceof Yt?n:VA(n);return Un&&Un.target===e.target&&Un.kill(),bo(e.target)&&(Un=e),e};it.core={_getVelocityProp:om,_inputObserver:jM,_scrollers:nt,_proxies:vr,bridge:{ss:function(){Hi||Do("scrollStart"),Hi=An()},ref:function(){return wn}}};OM()&&Te.registerPlugin(it);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mg="166",GA=0,gv=1,WA=2,$M=1,XA=2,Cr=3,ks=0,ii=1,Ir=2,bs=0,ka=1,vv=2,xv=3,yv=4,YA=5,oo=100,qA=101,jA=102,$A=103,KA=104,ZA=200,QA=201,JA=202,eC=203,pm=204,mm=205,tC=206,nC=207,iC=208,rC=209,sC=210,oC=211,aC=212,lC=213,uC=214,cC=0,fC=1,dC=2,td=3,hC=4,pC=5,mC=6,_C=7,KM=0,gC=1,vC=2,Ls=0,xC=1,yC=2,SC=3,MC=4,EC=5,TC=6,wC=7,ZM=300,el=301,tl=302,_m=303,gm=304,Cd=306,vm=1e3,po=1001,xm=1002,zi=1003,AC=1004,Sc=1005,Ji=1006,Sh=1007,mo=1008,jr=1009,QM=1010,JM=1011,Du=1012,_g=1013,Io=1014,Fr=1015,zu=1016,gg=1017,vg=1018,nl=1020,eE=35902,tE=1021,nE=1022,er=1023,iE=1024,rE=1025,za=1026,il=1027,sE=1028,xg=1029,oE=1030,yg=1031,Sg=1033,pf=33776,mf=33777,_f=33778,gf=33779,ym=35840,Sm=35841,Mm=35842,Em=35843,Tm=36196,wm=37492,Am=37496,Cm=37808,Rm=37809,Pm=37810,bm=37811,Lm=37812,Dm=37813,Im=37814,Nm=37815,Um=37816,Om=37817,Fm=37818,km=37819,zm=37820,Bm=37821,vf=36492,Hm=36494,Vm=36495,aE=36283,Gm=36284,Wm=36285,Xm=36286,CC=3200,RC=3201,PC=0,bC=1,fs="",lr="srgb",Ws="srgb-linear",Mg="display-p3",Rd="display-p3-linear",nd="linear",Lt="srgb",id="rec709",rd="p3",Wo=7680,Sv=519,LC=512,DC=513,IC=514,lE=515,NC=516,UC=517,OC=518,FC=519,Mv=35044,Ev="300 es",kr=2e3,sd=2001;class ll{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=Math.PI/180,Ym=180/Math.PI;function Bu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function qn(n,e,t){return Math.max(e,Math.min(t,n))}function kC(n,e){return(n%e+e)%e}function Eh(n,e,t){return(1-t)*n+t*e}function Sl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,u){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],x=r[4],y=r[7],C=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*x+l*w,s[6]=o*h+a*y+l*M,s[1]=u*_+c*v+d*C,s[4]=u*m+c*x+d*w,s[7]=u*h+c*y+d*M,s[2]=f*_+p*v+g*C,s[5]=f*m+p*x+g*w,s[8]=f*h+p*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Th.makeScale(e,t)),this}rotate(e){return this.premultiply(Th.makeRotation(-e)),this}translate(e,t){return this.premultiply(Th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Th=new Ze;function uE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function od(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zC(){const n=od("canvas");return n.style.display="block",n}const Tv={};function cE(n){n in Tv||(Tv[n]=!0,console.warn(n))}function BC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const wv=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Av=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mc={[Ws]:{transfer:nd,primaries:id,toReference:n=>n,fromReference:n=>n},[lr]:{transfer:Lt,primaries:id,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Rd]:{transfer:nd,primaries:rd,toReference:n=>n.applyMatrix3(Av),fromReference:n=>n.applyMatrix3(wv)},[Mg]:{transfer:Lt,primaries:rd,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Av),fromReference:n=>n.applyMatrix3(wv).convertLinearToSRGB()}},HC=new Set([Ws,Rd]),vt={enabled:!0,_workingColorSpace:Ws,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!HC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Mc[e].toReference,r=Mc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Mc[n].primaries},getTransfer:function(n){return n===fs?nd:Mc[n].transfer}};function Ba(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xo;class VC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xo===void 0&&(Xo=od("canvas")),Xo.width=e.width,Xo.height=e.height;const i=Xo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=od("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ba(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ba(t[i]/255)*255):t[i]=Ba(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GC=0;class fE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GC++}),this.uuid=Bu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ah(r[o].image)):s.push(Ah(r[o]))}else s=Ah(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ah(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?VC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WC=0;class ri extends ll{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,i=po,r=po,s=Ji,o=mo,a=er,l=jr,u=ri.DEFAULT_ANISOTROPY,c=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WC++}),this.uuid=Bu(),this.name="",this.source=new fE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ZM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vm:e.x=e.x-Math.floor(e.x);break;case po:e.x=e.x<0?0:1;break;case xm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vm:e.y=e.y-Math.floor(e.y);break;case po:e.y=e.y<0?0:1;break;case xm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=ZM;ri.DEFAULT_ANISOTROPY=1;class dn{constructor(e=0,t=0,i=0,r=1){dn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,C=(h+1)/2,w=(c+f)/4,M=(d+_)/4,R=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XC extends ll{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ri(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class No extends XC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dE extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zi,this.minFilter=zi,this.wrapR=po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YC extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zi,this.minFilter=zi,this.wrapR=po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||u!==p||c!==g){let m=1-a;const h=l*f+u*p+c*g+d*_,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,h*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*v;if(l=l*m+f*y,u=u*m+p*y,c=c*m+g*y,d=d*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*d+l*p-u*f,e[t+1]=l*g+c*f+u*d-a*p,e[t+2]=u*g+c*p+a*f-l*d,e[t+3]=c*g-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"YXZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"ZXY":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"ZYX":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"YZX":this._x=f*c*d+u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d-f*p*g;break;case"XZY":this._x=f*c*d-u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new Y,Cv=new Hu;class Vu{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(s,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ec.copy(i.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),Tc.subVectors(this.max,Ml),Yo.subVectors(e.a,Ml),qo.subVectors(e.b,Ml),jo.subVectors(e.c,Ml),es.subVectors(qo,Yo),ts.subVectors(jo,qo),qs.subVectors(Yo,jo);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-qs.z,qs.y,es.z,0,-es.x,ts.z,0,-ts.x,qs.z,0,-qs.x,-es.y,es.x,0,-ts.y,ts.x,0,-qs.y,qs.x,0];return!Rh(t,Yo,qo,jo,Tc)||(t=[1,0,0,0,1,0,0,0,1],!Rh(t,Yo,qo,jo,Tc))?!1:(wc.crossVectors(es,ts),t=[wc.x,wc.y,wc.z],Rh(t,Yo,qo,jo,Tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Yi=new Y,Ec=new Vu,Yo=new Y,qo=new Y,jo=new Y,es=new Y,ts=new Y,qs=new Y,Ml=new Y,Tc=new Y,wc=new Y,js=new Y;function Rh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){js.fromArray(n,s);const a=r.x*Math.abs(js.x)+r.y*Math.abs(js.y)+r.z*Math.abs(js.z),l=e.dot(js),u=t.dot(js),c=i.dot(js);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const qC=new Vu,El=new Y,Ph=new Y;class Pd{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const t=El.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(El,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(Ph)),this.expandByPoint(El.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Er=new Y,bh=new Y,Ac=new Y,ns=new Y,Lh=new Y,Cc=new Y,Dh=new Y;class hE{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bh.copy(e).add(t).multiplyScalar(.5),Ac.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(bh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ac),a=ns.dot(this.direction),l=-ns.dot(Ac),u=ns.lengthSq(),c=Math.abs(1-o*o);let d,f,p,g;if(c>0)if(d=o*l-a,f=o*a-l,g=s*c,d>=0)if(f>=-g)if(f<=g){const _=1/c;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(bh).addScaledVector(Ac,f),p}intersectSphere(e,t){Er.subVectors(e.center,this.origin);const i=Er.dot(this.direction),r=Er.dot(Er)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,i,r,s){Lh.subVectors(t,e),Cc.subVectors(i,e),Dh.crossVectors(Lh,Cc);let o=this.direction.dot(Dh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);const l=a*this.direction.dot(Cc.crossVectors(ns,Cc));if(l<0)return null;const u=a*this.direction.dot(Lh.cross(ns));if(u<0||l+u>o)return null;const c=-a*ns.dot(Dh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$o.setFromMatrixColumn(e,0).length(),s=1/$o.setFromMatrixColumn(e,1).length(),o=1/$o.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,g=u*c,_=u*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,g=u*c,_=u*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*d,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+_,t[5]=o*c,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*c,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jC,e,$C)}lookAt(e,t,i){const r=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),is.crossVectors(i,ui),is.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),is.crossVectors(i,ui)),is.normalize(),Rc.crossVectors(ui,is),r[0]=is.x,r[4]=Rc.x,r[8]=ui.x,r[1]=is.y,r[5]=Rc.y,r[9]=ui.y,r[2]=is.z,r[6]=Rc.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],x=i[7],y=i[11],C=i[15],w=r[0],M=r[4],R=r[8],E=r[12],S=r[1],b=r[5],U=r[9],k=r[13],W=r[2],j=r[6],G=r[10],H=r[14],I=r[3],$=r[7],P=r[11],te=r[15];return s[0]=o*w+a*S+l*W+u*I,s[4]=o*M+a*b+l*j+u*$,s[8]=o*R+a*U+l*G+u*P,s[12]=o*E+a*k+l*H+u*te,s[1]=c*w+d*S+f*W+p*I,s[5]=c*M+d*b+f*j+p*$,s[9]=c*R+d*U+f*G+p*P,s[13]=c*E+d*k+f*H+p*te,s[2]=g*w+_*S+m*W+h*I,s[6]=g*M+_*b+m*j+h*$,s[10]=g*R+_*U+m*G+h*P,s[14]=g*E+_*k+m*H+h*te,s[3]=v*w+x*S+y*W+C*I,s[7]=v*M+x*b+y*j+C*$,s[11]=v*R+x*U+y*G+C*P,s[15]=v*E+x*k+y*H+C*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=d*m*u-_*f*u+_*l*p-a*m*p-d*l*h+a*f*h,x=g*f*u-c*m*u-g*l*p+o*m*p+c*l*h-o*f*h,y=c*_*u-g*d*u+g*a*p-o*_*p-c*a*h+o*d*h,C=g*d*l-c*_*l-g*a*f+o*_*f+c*a*m-o*d*m,w=t*v+i*x+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-g*f*s+g*r*p-t*m*p-c*r*h+t*f*h)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*h-t*l*h)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(g*d*s-c*_*s-g*i*p+t*_*p+c*i*h-t*d*h)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=C*M,e[13]=(c*_*r-g*d*r+g*i*f-t*_*f-c*i*m+t*d*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,g=s*d,_=o*c,m=o*d,h=a*d,v=l*u,x=l*c,y=l*d,C=i.x,w=i.y,M=i.z;return r[0]=(1-(_+h))*C,r[1]=(p+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$o.set(r[0],r[1],r[2]).length();const o=$o.set(r[4],r[5],r[6]).length(),a=$o.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qi.copy(this);const u=1/s,c=1/o,d=1/a;return qi.elements[0]*=u,qi.elements[1]*=u,qi.elements[2]*=u,qi.elements[4]*=c,qi.elements[5]*=c,qi.elements[6]*=c,qi.elements[8]*=d,qi.elements[9]*=d,qi.elements[10]*=d,t.setFromRotationMatrix(qi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===kr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===sd)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let g,_;if(a===kr)g=(o+s)*d,_=-2*d;else if(a===sd)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $o=new Y,qi=new Qt,jC=new Y(0,0,0),$C=new Y(1,1,1),is=new Y,Rc=new Y,ui=new Y,Rv=new Qt,Pv=new Hu;class $r{constructor(e=0,t=0,i=0,r=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class pE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KC=0;const bv=new Y,Ko=new Hu,Tr=new Qt,Pc=new Y,Tl=new Y,ZC=new Y,QC=new Hu,Lv=new Y(1,0,0),Dv=new Y(0,1,0),Iv=new Y(0,0,1),Nv={type:"added"},JC={type:"removed"},Zo={type:"childadded",child:null},Ih={type:"childremoved",child:null};class si extends ll{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=Bu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new Y,t=new $r,i=new Hu,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ze}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.premultiply(Ko),this}rotateX(e){return this.rotateOnAxis(Lv,e)}rotateY(e){return this.rotateOnAxis(Dv,e)}rotateZ(e){return this.rotateOnAxis(Iv,e)}translateOnAxis(e,t){return bv.copy(e).applyQuaternion(this.quaternion),this.position.add(bv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lv,e)}translateY(e){return this.translateOnAxis(Dv,e)}translateZ(e){return this.translateOnAxis(Iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pc.copy(e):Pc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(Tl,Pc,this.up):Tr.lookAt(Pc,Tl,this.up),this.quaternion.setFromRotationMatrix(Tr),r&&(Tr.extractRotation(r.matrixWorld),Ko.setFromRotationMatrix(Tr),this.quaternion.premultiply(Ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nv),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(JC),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nv),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,e,ZC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,QC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}si.DEFAULT_UP=new Y(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new Y,wr=new Y,Nh=new Y,Ar=new Y,Qo=new Y,Jo=new Y,Uv=new Y,Uh=new Y,Oh=new Y,Fh=new Y;class dr{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),wr.subVectors(i,t),Nh.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(wr),l=ji.dot(Nh),u=wr.dot(wr),c=wr.dot(Nh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ar.x),l.addScaledVector(o,Ar.y),l.addScaledVector(a,Ar.z),l)}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),wr.subVectors(e,t),ji.cross(wr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),ji.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qo.subVectors(r,i),Jo.subVectors(s,i),Uh.subVectors(e,i);const l=Qo.dot(Uh),u=Jo.dot(Uh);if(l<=0&&u<=0)return t.copy(i);Oh.subVectors(e,r);const c=Qo.dot(Oh),d=Jo.dot(Oh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Qo,o);Fh.subVectors(e,s);const p=Qo.dot(Fh),g=Jo.dot(Fh);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Jo,a);const m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return Uv.subVectors(s,r),a=(d-c)/(d-c+(p-g)),t.copy(r).addScaledVector(Uv,a);const h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(Qo,o).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},bc={h:0,s:0,l:0};function kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=kC(e,1),t=qn(t,0,1),i=qn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=kh(o,s,e+1/3),this.g=kh(o,s,e),this.b=kh(o,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=lr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lr){const i=mE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=wh(e.r),this.g=wh(e.g),this.b=wh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lr){return vt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(qn(Tn.r*255,0,255))*65536+Math.round(qn(Tn.g*255,0,255))*256+Math.round(qn(Tn.b*255,0,255))}getHexString(e=lr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=lr){vt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==lr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(bc);const i=Eh(rs.h,bc.h,t),r=Eh(rs.s,bc.s,t),s=Eh(rs.l,bc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new xt;xt.NAMES=mE;let eR=0;class Gu extends ll{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=Bu(),this.name="",this.type="Material",this.blending=ka,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pm,this.blendDst=mm,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=td,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(i.blending=this.blending),this.side!==ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pm&&(i.blendSrc=this.blendSrc),this.blendDst!==mm&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==td&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class _E extends Gu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=KM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new Y,Lc=new mt;class xr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return cE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lc.fromBufferAttribute(this,t),Lc.applyMatrix3(e),this.setXY(t,Lc.x,Lc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),r=Wn(r,this.array),s=Wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mv&&(e.usage=this.usage),e}}class gE extends xr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vE extends xr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yr extends xr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tR=0;const Pi=new Qt,zh=new si,ea=new Y,ci=new Vu,wl=new Vu,ln=new Y;class Zr extends ll{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=Bu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uE(e)?vE:gE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,i){return Pi.makeTranslation(e,t,i),this.applyMatrix4(Pi),this}scale(e,t,i){return Pi.makeScale(e,t,i),this.applyMatrix4(Pi),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wl.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(ci.min,wl.min),ci.expandByPoint(ln),ln.addVectors(ci.max,wl.max),ci.expandByPoint(ln)):(ci.expandByPoint(wl.min),ci.expandByPoint(wl.max))}ci.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ln.fromBufferAttribute(a,u),l&&(ea.fromBufferAttribute(e,u),ln.add(ea)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new Y,l[R]=new Y;const u=new Y,c=new Y,d=new Y,f=new mt,p=new mt,g=new mt,_=new Y,m=new Y;function h(R,E,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),c.sub(u),d.sub(u),p.sub(f),g.sub(f);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(b),a[R].add(_),a[E].add(_),a[S].add(_),l[R].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,E=v.length;R<E;++R){const S=v[R],b=S.start,U=S.count;for(let k=b,W=b+U;k<W;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new Y,y=new Y,C=new Y,w=new Y;function M(R){C.fromBufferAttribute(r,R),w.copy(C);const E=a[R];x.copy(E),x.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(w,E);const b=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,b)}for(let R=0,E=v.length;R<E;++R){const S=v[R],b=S.start,U=S.count;for(let k=b,W=b+U;k<W;k+=3)M(e.getX(k+0)),M(e.getX(k+1)),M(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,d=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let h=0;h<c;h++)f[g++]=u[p++]}return new xr(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ov=new Qt,$s=new hE,Dc=new Pd,Fv=new Y,ta=new Y,na=new Y,ia=new Y,Bh=new Y,Ic=new Y,Nc=new mt,Uc=new mt,Oc=new mt,kv=new Y,zv=new Y,Bv=new Y,Fc=new Y,kc=new Y;class zr extends si{constructor(e=new Zr,t=new _E){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ic.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Bh.fromBufferAttribute(d,e),o?Ic.addScaledVector(Bh,c):Ic.addScaledVector(Bh.sub(t),c))}t.add(Ic)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dc.copy(i.boundingSphere),Dc.applyMatrix4(s),$s.copy(e.ray).recast(e.near),!(Dc.containsPoint($s.origin)===!1&&($s.intersectSphere(Dc,Fv)===null||$s.origin.distanceToSquared(Fv)>(e.far-e.near)**2))&&(Ov.copy(s).invert(),$s.copy(e.ray).applyMatrix4(Ov),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=a.getX(y),M=a.getX(y+1),R=a.getX(y+2);r=zc(this,h,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=zc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=y,M=y+1,R=y+2;r=zc(this,h,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,x=m+1,y=m+2;r=zc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function nR(n,e,t,i,r,s,o,a){let l;if(e.side===ii?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ks,a),l===null)return null;kc.copy(a),kc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(kc);return u<t.near||u>t.far?null:{distance:u,point:kc.clone(),object:n}}function zc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ta),n.getVertexPosition(l,na),n.getVertexPosition(u,ia);const c=nR(n,e,t,i,ta,na,ia,Fc);if(c){r&&(Nc.fromBufferAttribute(r,a),Uc.fromBufferAttribute(r,l),Oc.fromBufferAttribute(r,u),c.uv=dr.getInterpolation(Fc,ta,na,ia,Nc,Uc,Oc,new mt)),s&&(Nc.fromBufferAttribute(s,a),Uc.fromBufferAttribute(s,l),Oc.fromBufferAttribute(s,u),c.uv1=dr.getInterpolation(Fc,ta,na,ia,Nc,Uc,Oc,new mt)),o&&(kv.fromBufferAttribute(o,a),zv.fromBufferAttribute(o,l),Bv.fromBufferAttribute(o,u),c.normal=dr.getInterpolation(Fc,ta,na,ia,kv,zv,Bv,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new Y,materialIndex:0};dr.getNormal(ta,na,ia,d.normal),c.face=d}return c}class Wu extends Zr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yr(u,3)),this.setAttribute("normal",new yr(c,3)),this.setAttribute("uv",new yr(d,2));function g(_,m,h,v,x,y,C,w,M,R,E){const S=y/M,b=C/R,U=y/2,k=C/2,W=w/2,j=M+1,G=R+1;let H=0,I=0;const $=new Y;for(let P=0;P<G;P++){const te=P*b-k;for(let ve=0;ve<j;ve++){const Xe=ve*S-U;$[_]=Xe*v,$[m]=te*x,$[h]=W,u.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[h]=w>0?1:-1,c.push($.x,$.y,$.z),d.push(ve/M),d.push(1-P/R),H+=1}}for(let P=0;P<R;P++)for(let te=0;te<M;te++){const ve=f+te+j*P,Xe=f+te+j*(P+1),q=f+(te+1)+j*(P+1),ee=f+(te+1)+j*P;l.push(ve,Xe,ee),l.push(Xe,q,ee),I+=6}a.addGroup(p,I,E),p+=I,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const i=rl(n[t]);for(const r in i)e[r]=i[r]}return e}function iR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xE(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const rR={clone:rl,merge:Nn};var sR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zs extends Gu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sR,this.fragmentShader=oR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rl(e.uniforms),this.uniformsGroups=iR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yE extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=kr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new Y,Hv=new mt,Vv=new mt;class Ui extends yE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ym*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ym*2*Math.atan(Math.tan(Mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,Hv,Vv),t.subVectors(Vv,Hv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ra=-90,sa=1;class aR extends si{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ui(ra,sa,e,t);r.layers=this.layers,this.add(r);const s=new Ui(ra,sa,e,t);s.layers=this.layers,this.add(s);const o=new Ui(ra,sa,e,t);o.layers=this.layers,this.add(o);const a=new Ui(ra,sa,e,t);a.layers=this.layers,this.add(a);const l=new Ui(ra,sa,e,t);l.layers=this.layers,this.add(l);const u=new Ui(ra,sa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===kr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class SE extends ri{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:el,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lR extends No{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new SE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ji}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wu(5,5,5),s=new zs({name:"CubemapFromEquirect",uniforms:rl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:bs});s.uniforms.tEquirect.value=t;const o=new zr(r,s),a=t.minFilter;return t.minFilter===mo&&(t.minFilter=Ji),new aR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Hh=new Y,uR=new Y,cR=new Ze;class ro{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Hh.subVectors(i,t).cross(uR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cR.getNormalMatrix(e),r=this.coplanarPoint(Hh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new Pd,Bc=new Y;class ME{constructor(e=new ro,t=new ro,i=new ro,r=new ro,s=new ro,o=new ro){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,m-p,y-h).normalize(),i[1].setComponents(l+s,f+u,m+p,y+h).normalize(),i[2].setComponents(l+o,f+c,m+g,y+v).normalize(),i[3].setComponents(l-o,f-c,m-g,y-v).normalize(),i[4].setComponents(l-a,f-d,m-_,y-x).normalize(),t===kr)i[5].setComponents(l+a,f+d,m+_,y+x).normalize();else if(t===sd)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){return Ks.center.set(0,0,0),Ks.radius=.7071067811865476,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Bc.x=r.normal.x>0?e.max.x:e.min.x,Bc.y=r.normal.y>0?e.max.y:e.min.y,Bc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function EE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class bd extends Zr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const y=x*d-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,y=v+u*(h+1),C=v+1+u*(h+1),w=v+1+u*h;p.push(x,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new yr(g,3)),this.setAttribute("normal",new yr(_,3)),this.setAttribute("uv",new yr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bd(e.width,e.height,e.widthSegments,e.heightSegments)}}var dR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_R=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,SR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ER=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wR=`#ifdef USE_IRIDESCENCE
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
#endif`,AR=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UR=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,OR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,FR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VR="gl_FragColor = linearToOutputTexel( gl_FragColor );",GR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,WR=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,XR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YR=`#ifdef USE_ENVMAP
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
#endif`,qR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jR=`#ifdef USE_ENVMAP
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
#endif`,$R=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JR=`#ifdef USE_GRADIENTMAP
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
}`,eP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,rP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,sP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,fP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_P=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SP=`#if defined( USE_POINTS_UV )
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
#endif`,MP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,bP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NP=`#ifdef USE_NORMALMAP
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
#endif`,UP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$P=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ob=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,vb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,yb=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ab=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rb=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bb=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Db=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ib=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Nb=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ob=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kb=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Vb=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gb=`uniform float rotation;
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
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:dR,alphahash_pars_fragment:hR,alphamap_fragment:pR,alphamap_pars_fragment:mR,alphatest_fragment:_R,alphatest_pars_fragment:gR,aomap_fragment:vR,aomap_pars_fragment:xR,batching_pars_vertex:yR,batching_vertex:SR,begin_vertex:MR,beginnormal_vertex:ER,bsdfs:TR,iridescence_fragment:wR,bumpmap_pars_fragment:AR,clipping_planes_fragment:CR,clipping_planes_pars_fragment:RR,clipping_planes_pars_vertex:PR,clipping_planes_vertex:bR,color_fragment:LR,color_pars_fragment:DR,color_pars_vertex:IR,color_vertex:NR,common:UR,cube_uv_reflection_fragment:OR,defaultnormal_vertex:FR,displacementmap_pars_vertex:kR,displacementmap_vertex:zR,emissivemap_fragment:BR,emissivemap_pars_fragment:HR,colorspace_fragment:VR,colorspace_pars_fragment:GR,envmap_fragment:WR,envmap_common_pars_fragment:XR,envmap_pars_fragment:YR,envmap_pars_vertex:qR,envmap_physical_pars_fragment:rP,envmap_vertex:jR,fog_vertex:$R,fog_pars_vertex:KR,fog_fragment:ZR,fog_pars_fragment:QR,gradientmap_pars_fragment:JR,lightmap_pars_fragment:eP,lights_lambert_fragment:tP,lights_lambert_pars_fragment:nP,lights_pars_begin:iP,lights_toon_fragment:sP,lights_toon_pars_fragment:oP,lights_phong_fragment:aP,lights_phong_pars_fragment:lP,lights_physical_fragment:uP,lights_physical_pars_fragment:cP,lights_fragment_begin:fP,lights_fragment_maps:dP,lights_fragment_end:hP,logdepthbuf_fragment:pP,logdepthbuf_pars_fragment:mP,logdepthbuf_pars_vertex:_P,logdepthbuf_vertex:gP,map_fragment:vP,map_pars_fragment:xP,map_particle_fragment:yP,map_particle_pars_fragment:SP,metalnessmap_fragment:MP,metalnessmap_pars_fragment:EP,morphinstance_vertex:TP,morphcolor_vertex:wP,morphnormal_vertex:AP,morphtarget_pars_vertex:CP,morphtarget_vertex:RP,normal_fragment_begin:PP,normal_fragment_maps:bP,normal_pars_fragment:LP,normal_pars_vertex:DP,normal_vertex:IP,normalmap_pars_fragment:NP,clearcoat_normal_fragment_begin:UP,clearcoat_normal_fragment_maps:OP,clearcoat_pars_fragment:FP,iridescence_pars_fragment:kP,opaque_fragment:zP,packing:BP,premultiplied_alpha_fragment:HP,project_vertex:VP,dithering_fragment:GP,dithering_pars_fragment:WP,roughnessmap_fragment:XP,roughnessmap_pars_fragment:YP,shadowmap_pars_fragment:qP,shadowmap_pars_vertex:jP,shadowmap_vertex:$P,shadowmask_pars_fragment:KP,skinbase_vertex:ZP,skinning_pars_vertex:QP,skinning_vertex:JP,skinnormal_vertex:eb,specularmap_fragment:tb,specularmap_pars_fragment:nb,tonemapping_fragment:ib,tonemapping_pars_fragment:rb,transmission_fragment:sb,transmission_pars_fragment:ob,uv_pars_fragment:ab,uv_pars_vertex:lb,uv_vertex:ub,worldpos_vertex:cb,background_vert:fb,background_frag:db,backgroundCube_vert:hb,backgroundCube_frag:pb,cube_vert:mb,cube_frag:_b,depth_vert:gb,depth_frag:vb,distanceRGBA_vert:xb,distanceRGBA_frag:yb,equirect_vert:Sb,equirect_frag:Mb,linedashed_vert:Eb,linedashed_frag:Tb,meshbasic_vert:wb,meshbasic_frag:Ab,meshlambert_vert:Cb,meshlambert_frag:Rb,meshmatcap_vert:Pb,meshmatcap_frag:bb,meshnormal_vert:Lb,meshnormal_frag:Db,meshphong_vert:Ib,meshphong_frag:Nb,meshphysical_vert:Ub,meshphysical_frag:Ob,meshtoon_vert:Fb,meshtoon_frag:kb,points_vert:zb,points_frag:Bb,shadow_vert:Hb,shadow_frag:Vb,sprite_vert:Gb,sprite_frag:Wb},me={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ur={basic:{uniforms:Nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Nn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Nn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Nn([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Nn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Nn([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Nn([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Nn([me.common,me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Nn([me.lights,me.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ur.physical={uniforms:Nn([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Hc={r:0,b:0,g:0},Zs=new $r,Xb=new Qt;function Yb(n,e,t,i,r,s,o){const a=new xt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=g(v);y===null?h(a,l):y&&y.isColor&&(h(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===Cd)?(c===void 0&&(c=new zr(new Wu(1,1,1),new zs({name:"BackgroundCubeMaterial",uniforms:rl(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Zs.copy(x.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(Zs)),c.material.toneMapped=vt.getTransfer(y.colorSpace)!==Lt,(d!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new zr(new bd(2,2),new zs({name:"BackgroundMaterial",uniforms:rl(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=vt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Hc,xE(n)),i.buffers.color.setClear(Hc.r,Hc.g,Hc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:_,addToRenderList:m}}function qb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,b,U,k,W){let j=!1;const G=d(k,U,b);s!==G&&(s=G,u(s.object)),j=p(S,k,U,W),j&&g(S,k,U,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(S,b,U,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function d(S,b,U){const k=U.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let j=W[b.id];j===void 0&&(j={},W[b.id]=j);let G=j[k];return G===void 0&&(G=f(l()),j[k]=G),G}function f(S){const b=[],U=[],k=[];for(let W=0;W<t;W++)b[W]=0,U[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,b,U,k){const W=s.attributes,j=b.attributes;let G=0;const H=U.getAttributes();for(const I in H)if(H[I].location>=0){const P=W[I];let te=j[I];if(te===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),P===void 0||P.attribute!==te||te&&P.data!==te.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function g(S,b,U,k){const W={},j=b.attributes;let G=0;const H=U.getAttributes();for(const I in H)if(H[I].location>=0){let P=j[I];P===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const te={};te.attribute=P,P&&P.data&&(te.data=P.data),W[I]=te,G++}s.attributes=W,s.attributesNum=G,s.index=k}function _(){const S=s.newAttributes;for(let b=0,U=S.length;b<U;b++)S[b]=0}function m(S){h(S,0)}function h(S,b){const U=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;U[S]=1,k[S]===0&&(n.enableVertexAttribArray(S),k[S]=1),W[S]!==b&&(n.vertexAttribDivisor(S,b),W[S]=b)}function v(){const S=s.newAttributes,b=s.enabledAttributes;for(let U=0,k=b.length;U<k;U++)b[U]!==S[U]&&(n.disableVertexAttribArray(U),b[U]=0)}function x(S,b,U,k,W,j,G){G===!0?n.vertexAttribIPointer(S,b,U,W,j):n.vertexAttribPointer(S,b,U,k,W,j)}function y(S,b,U,k){_();const W=k.attributes,j=U.getAttributes(),G=b.defaultAttributeValues;for(const H in j){const I=j[H];if(I.location>=0){let $=W[H];if($===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const P=$.normalized,te=$.itemSize,ve=e.get($);if(ve===void 0)continue;const Xe=ve.buffer,q=ve.type,ee=ve.bytesPerElement,ce=q===n.INT||q===n.UNSIGNED_INT||$.gpuType===_g;if($.isInterleavedBufferAttribute){const ue=$.data,Pe=ue.stride,De=$.offset;if(ue.isInstancedInterleavedBuffer){for(let Ye=0;Ye<I.locationSize;Ye++)h(I.location+Ye,ue.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ye=0;Ye<I.locationSize;Ye++)m(I.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let Ye=0;Ye<I.locationSize;Ye++)x(I.location+Ye,te/I.locationSize,q,P,Pe*ee,(De+te/I.locationSize*Ye)*ee,ce)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<I.locationSize;ue++)h(I.location+ue,$.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<I.locationSize;ue++)m(I.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ue=0;ue<I.locationSize;ue++)x(I.location+ue,te/I.locationSize,q,P,te*ee,te/I.locationSize*ue*ee,ce)}}else if(G!==void 0){const P=G[H];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(I.location,P);break;case 3:n.vertexAttrib3fv(I.location,P);break;case 4:n.vertexAttrib4fv(I.location,P);break;default:n.vertexAttrib1fv(I.location,P)}}}}v()}function C(){R();for(const S in i){const b=i[S];for(const U in b){const k=b[U];for(const W in k)c(k[W].object),delete k[W];delete b[U]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const U in b){const k=b[U];for(const W in k)c(k[W].object),delete k[W];delete b[U]}delete i[S.id]}function M(S){for(const b in i){const U=i[b];if(U[S.id]===void 0)continue;const k=U[S.id];for(const W in k)c(k[W].object),delete k[W];delete U[S.id]}}function R(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function jb(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let g=0;g<d;g++)p+=c[g];t.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $b(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==er&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const M=w===zu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==jr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fr&&!M)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function Kb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ro,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(g,f,x,p);for(let C=0;C!==x;++C)y[C]=t[C];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Zb(n){let e=new WeakMap;function t(o,a){return a===_m?o.mapping=el:a===gm&&(o.mapping=tl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_m||a===gm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new lR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Qb extends yE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ta=4,Gv=[.125,.215,.35,.446,.526,.582],ao=20,Vh=new Qb,Wv=new xt;let Gh=null,Wh=0,Xh=0,Yh=!1;const so=(1+Math.sqrt(5))/2,oa=1/so,Xv=[new Y(-so,oa,0),new Y(so,oa,0),new Y(-oa,0,so),new Y(oa,0,so),new Y(0,so,-oa),new Y(0,so,oa),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Wh,Xh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,Vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===el||e.mapping===tl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:zu,format:er,colorSpace:Ws,depthBuffer:!1},r=qv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jb(s)),this._blurMaterial=e2(s,e,t)}return r}_compileMaterial(e){const t=new zr(this._lodPlanes[0],e);this._renderer.compile(t,Vh)}_sceneToCubeUV(e,t,i,r){const a=new Ui(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Wv),c.toneMapping=Ls,c.autoClear=!1;const p=new _E({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),g=new zr(new Wu,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Wv),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Vc(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===el||e.mapping===tl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xv[(r-s-1)%Xv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new zr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ao-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):ao;m>ao&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ao}`);const h=[];let v=0;for(let M=0;M<ao;++M){const R=M/_,E=Math.exp(-R*R/2);h.push(E),M===0?v+=E:M<m&&(v+=2*E)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-Ta?r-x+Ta:0),w=4*(this._cubeSize-y);Vc(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Vh)}}function Jb(n){const e=[],t=[],i=[];let r=n;const s=n-Ta+1+Gv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ta?l=Gv[o-n+Ta-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,R=w>2?0:-1,E=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(E,_*g*w),x.set(f,m*g*w);const S=[w,w,w,w,w,w];y.set(S,h*g*w)}const C=new Zr;C.setAttribute("position",new xr(v,_)),C.setAttribute("uv",new xr(x,m)),C.setAttribute("faceIndex",new xr(y,h)),e.push(C),r>Ta&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qv(n,e,t){const i=new No(n,e,t);return i.texture.mapping=Cd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function e2(n,e,t){const i=new Float32Array(ao),r=new Y(0,1,0);return new zs({name:"SphericalGaussianBlur",defines:{n:ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eg(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function jv(){return new zs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eg(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function $v(){return new zs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Eg(){return`

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
	`}function t2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===_m||l===gm,c=l===el||l===tl;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Yv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Yv(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function n2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&cE("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function i2(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],w=v[x+1],M=v[x+2];f.push(C,w,w,M,M,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,w=x+1,M=x+2;f.push(C,w,w,M,M,C)}}else return;const m=new(uE(f)?vE:gE)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function r2(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v];for(let v=0;v<_.length;v++)t.update(h,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function s2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function o2(n,e,t){const i=new WeakMap,r=new dn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*w*4*d),R=new dE(M,C,w,d);R.type=Fr,R.needsUpdate=!0;const E=y*4;for(let b=0;b<d;b++){const U=h[b],k=v[b],W=x[b],j=C*w*4*b;for(let G=0;G<U.count;G++){const H=G*E;g===!0&&(r.fromBufferAttribute(U,G),M[j+H+0]=r.x,M[j+H+1]=r.y,M[j+H+2]=r.z,M[j+H+3]=0),_===!0&&(r.fromBufferAttribute(k,G),M[j+H+4]=r.x,M[j+H+5]=r.y,M[j+H+6]=r.z,M[j+H+7]=0),m===!0&&(r.fromBufferAttribute(W,G),M[j+H+8]=r.x,M[j+H+9]=r.y,M[j+H+10]=r.z,M[j+H+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new mt(C,w)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function a2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class TE extends ri{constructor(e,t,i,r,s,o,a,l,u,c=za){if(c!==za&&c!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===za&&(i=Io),i===void 0&&c===il&&(i=nl),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zi,this.minFilter=l!==void 0?l:zi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wE=new ri,Kv=new TE(1,1),AE=new dE,CE=new YC,RE=new SE,Zv=[],Qv=[],Jv=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function ul(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Zv[r];if(s===void 0&&(s=new Float32Array(r),Zv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ld(n,e){let t=Qv[e];t===void 0&&(t=new Int32Array(e),Qv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function c2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function f2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function d2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;tx.set(i),n.uniformMatrix2fv(this.addr,!1,tx),an(t,i)}}function h2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;ex.set(i),n.uniformMatrix3fv(this.addr,!1,ex),an(t,i)}}function p2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Jv.set(i),n.uniformMatrix4fv(this.addr,!1,Jv),an(t,i)}}function m2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function v2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function x2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function S2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function M2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function E2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Kv.compareFunction=lE,s=Kv):s=wE,t.setTexture2D(e||s,r)}function T2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||CE,r)}function w2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||RE,r)}function A2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||AE,r)}function C2(n){switch(n){case 5126:return l2;case 35664:return u2;case 35665:return c2;case 35666:return f2;case 35674:return d2;case 35675:return h2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return _2;case 35668:case 35672:return g2;case 35669:case 35673:return v2;case 5125:return x2;case 36294:return y2;case 36295:return S2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return w2;case 36289:case 36303:case 36311:case 36292:return A2}}function R2(n,e){n.uniform1fv(this.addr,e)}function P2(n,e){const t=ul(e,this.size,2);n.uniform2fv(this.addr,t)}function b2(n,e){const t=ul(e,this.size,3);n.uniform3fv(this.addr,t)}function L2(n,e){const t=ul(e,this.size,4);n.uniform4fv(this.addr,t)}function D2(n,e){const t=ul(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function I2(n,e){const t=ul(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N2(n,e){const t=ul(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U2(n,e){n.uniform1iv(this.addr,e)}function O2(n,e){n.uniform2iv(this.addr,e)}function F2(n,e){n.uniform3iv(this.addr,e)}function k2(n,e){n.uniform4iv(this.addr,e)}function z2(n,e){n.uniform1uiv(this.addr,e)}function B2(n,e){n.uniform2uiv(this.addr,e)}function H2(n,e){n.uniform3uiv(this.addr,e)}function V2(n,e){n.uniform4uiv(this.addr,e)}function G2(n,e,t){const i=this.cache,r=e.length,s=Ld(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||wE,s[o])}function W2(n,e,t){const i=this.cache,r=e.length,s=Ld(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||CE,s[o])}function X2(n,e,t){const i=this.cache,r=e.length,s=Ld(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||RE,s[o])}function Y2(n,e,t){const i=this.cache,r=e.length,s=Ld(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||AE,s[o])}function q2(n){switch(n){case 5126:return R2;case 35664:return P2;case 35665:return b2;case 35666:return L2;case 35674:return D2;case 35675:return I2;case 35676:return N2;case 5124:case 35670:return U2;case 35667:case 35671:return O2;case 35668:case 35672:return F2;case 35669:case 35673:return k2;case 5125:return z2;case 36294:return B2;case 36295:return H2;case 36296:return V2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return Y2}}class j2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C2(t.type)}}class $2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q2(t.type)}}class K2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function nx(n,e){n.seq.push(e),n.map[e.id]=e}function Z2(n,e,t){const i=n.name,r=i.length;for(qh.lastIndex=0;;){const s=qh.exec(i),o=qh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){nx(t,u===void 0?new j2(a,n,e):new $2(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new K2(a),nx(t,d)),t=d}}}class xf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Z2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ix(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q2=37297;let J2=0;function eL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function tL(n){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(n);let i;switch(e===t?i="":e===rd&&t===id?i="LinearDisplayP3ToLinearSRGB":e===id&&t===rd&&(i="LinearSRGBToLinearDisplayP3"),n){case Ws:case Rd:return[i,"LinearTransferOETF"];case lr:case Mg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+eL(n.getShaderSource(e),o)}else return r}function nL(n,e){const t=tL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function iL(n,e){let t;switch(e){case xC:t="Linear";break;case yC:t="Reinhard";break;case SC:t="OptimizedCineon";break;case MC:t="ACESFilmic";break;case TC:t="AgX";break;case wC:t="Neutral";break;case EC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function sL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fl(n){return n!==""}function sx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ox(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aL=/^[ \t]*#include +<([\w\d./]+)>/gm;function qm(n){return n.replace(aL,uL)}const lL=new Map;function uL(n,e){let t=Ke[e];if(t===void 0){const i=lL.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qm(t)}const cL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ax(n){return n.replace(cL,fL)}function fL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$M?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===XA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function hL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case el:case tl:e="ENVMAP_TYPE_CUBE";break;case Cd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tl:e="ENVMAP_MODE_REFRACTION";break}return e}function mL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case KM:e="ENVMAP_BLENDING_MULTIPLY";break;case gC:e="ENVMAP_BLENDING_MIX";break;case vC:e="ENVMAP_BLENDING_ADD";break}return e}function _L(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dL(t),u=hL(t),c=pL(t),d=mL(t),f=_L(t),p=rL(t),g=sL(s),_=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fl).join(`
`),h.length>0&&(h+=`
`)):(m=[lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),h=[lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ls?"#define TONE_MAPPING":"",t.toneMapping!==Ls?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ls?iL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,nL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fl).join(`
`)),o=qm(o),o=sx(o,t),o=ox(o,t),a=qm(a),a=sx(a,t),a=ox(a,t),o=ax(o),a=ax(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,y=v+h+a,C=ix(r,r.VERTEX_SHADER,x),w=ix(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(b){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(w).trim();let j=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,w);else{const H=rx(r,C,"vertex"),I=rx(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+H+`
`+I)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||W==="")&&(G=!1);G&&(b.diagnostics={runnable:j,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:h}})}r.deleteShader(C),r.deleteShader(w),R=new xf(r,_),E=oL(r,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Q2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let vL=0;class xL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yL(e),t.set(e,i)),i}}class yL{constructor(e){this.id=vL++,this.code=e,this.usedTimes=0}}function SL(n,e,t,i,r,s,o){const a=new pE,l=new xL,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,b,U,k){const W=U.fog,j=k.geometry,G=E.isMeshStandardMaterial?U.environment:null,H=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),I=H&&H.mapping===Cd?H.image.height:null,$=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const P=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=P!==void 0?P.length:0;let ve=0;j.morphAttributes.position!==void 0&&(ve=1),j.morphAttributes.normal!==void 0&&(ve=2),j.morphAttributes.color!==void 0&&(ve=3);let Xe,q,ee,ce;if($){const st=ur[$];Xe=st.vertexShader,q=st.fragmentShader}else Xe=E.vertexShader,q=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);const ue=n.getRenderTarget(),Pe=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,Ye=!!E.map,Je=!!E.matcap,D=!!H,Ue=!!E.aoMap,ze=!!E.lightMap,je=!!E.bumpMap,xe=!!E.normalMap,V=!!E.displacementMap,be=!!E.emissiveMap,Be=!!E.metalnessMap,L=!!E.roughnessMap,T=E.anisotropy>0,X=E.clearcoat>0,ne=E.dispersion>0,re=E.iridescence>0,Z=E.sheen>0,Ce=E.transmission>0,se=T&&!!E.anisotropyMap,pe=X&&!!E.clearcoatMap,Fe=X&&!!E.clearcoatNormalMap,oe=X&&!!E.clearcoatRoughnessMap,ge=re&&!!E.iridescenceMap,Ie=re&&!!E.iridescenceThicknessMap,He=Z&&!!E.sheenColorMap,_e=Z&&!!E.sheenRoughnessMap,Ve=!!E.specularMap,qe=!!E.specularColorMap,dt=!!E.specularIntensityMap,O=Ce&&!!E.transmissionMap,K=Ce&&!!E.thicknessMap,Q=!!E.gradientMap,J=!!E.alphaMap,le=E.alphaTest>0,Re=!!E.alphaHash,$e=!!E.extensions;let Mt=Ls;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Mt=n.toneMapping);const Et={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Xe,fragmentShader:q,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ws,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:Je,envMap:D,envMapMode:D&&H.mapping,envMapCubeUVHeight:I,aoMap:Ue,lightMap:ze,bumpMap:je,normalMap:xe,displacementMap:f&&V,emissiveMap:be,normalMapObjectSpace:xe&&E.normalMapType===bC,normalMapTangentSpace:xe&&E.normalMapType===PC,metalnessMap:Be,roughnessMap:L,anisotropy:T,anisotropyMap:se,clearcoat:X,clearcoatMap:pe,clearcoatNormalMap:Fe,clearcoatRoughnessMap:oe,dispersion:ne,iridescence:re,iridescenceMap:ge,iridescenceThicknessMap:Ie,sheen:Z,sheenColorMap:He,sheenRoughnessMap:_e,specularMap:Ve,specularColorMap:qe,specularIntensityMap:dt,transmission:Ce,transmissionMap:O,thicknessMap:K,gradientMap:Q,opaque:E.transparent===!1&&E.blending===ka&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:Re,combine:E.combine,mapUv:Ye&&_(E.map.channel),aoMapUv:Ue&&_(E.aoMap.channel),lightMapUv:ze&&_(E.lightMap.channel),bumpMapUv:je&&_(E.bumpMap.channel),normalMapUv:xe&&_(E.normalMap.channel),displacementMapUv:V&&_(E.displacementMap.channel),emissiveMapUv:be&&_(E.emissiveMap.channel),metalnessMapUv:Be&&_(E.metalnessMap.channel),roughnessMapUv:L&&_(E.roughnessMap.channel),anisotropyMapUv:se&&_(E.anisotropyMap.channel),clearcoatMapUv:pe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(E.sheenRoughnessMap.channel),specularMapUv:Ve&&_(E.specularMap.channel),specularColorMapUv:qe&&_(E.specularColorMap.channel),specularIntensityMapUv:dt&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:K&&_(E.thicknessMap.channel),alphaMapUv:J&&_(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(xe||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(Ye||J),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&vt.getTransfer(E.map.colorSpace)===Lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ir,flipSided:E.side===ii,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$e&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&E.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Et.vertexUv1s=u.has(1),Et.vertexUv2s=u.has(2),Et.vertexUv3s=u.has(3),u.clear(),Et}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)S.push(b),S.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(v(S,E),x(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const S=g[E.type];let b;if(S){const U=ur[S];b=rR.clone(U.uniforms)}else b=E.uniforms;return b}function C(E,S){let b;for(let U=0,k=c.length;U<k;U++){const W=c[U];if(W.cacheKey===S){b=W,++b.usedTimes;break}}return b===void 0&&(b=new gL(n,S,E,s),c.push(b)),b}function w(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function M(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:R}}function ML(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function EL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ux(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||EL),i.length>1&&i.sort(f||ux),r.length>1&&r.sort(f||ux)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function TL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new cx,n.set(i,[o])):r>=s.length?(o=new cx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new xt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function AL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CL=0;function RL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PL(n){const e=new wL,t=AL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new Qt,o=new Qt;function a(u){let c=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,v=0,x=0,y=0,C=0,w=0,M=0;u.sort(RL);for(let E=0,S=u.length;E<S;E++){const b=u[E],U=b.color,k=b.intensity,W=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=U.r*k,d+=U.g*k,f+=U.b*k;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],k);M++}else if(b.isDirectionalLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,I=t.get(b);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=b.shadow.matrix,v++}i.directional[p]=G,p++}else if(b.isSpotLight){const G=e.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(U).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[_]=G;const H=b.shadow;if(b.map&&(i.spotLightMap[C]=b.map,C++,H.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[_]=H.matrix,b.castShadow){const I=t.get(b);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=j,y++}_++}else if(b.isRectAreaLight){const G=e.get(b);G.color.copy(U).multiplyScalar(k),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=G,m++}else if(b.isPointLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const H=b.shadow,I=t.get(b);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,I.shadowCameraNear=H.camera.near,I.shadowCameraFar=H.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=b.shadow.matrix,x++}i.point[g]=G,g++}else if(b.isHemisphereLight){const G=e.get(b);G.skyColor.copy(b.color).multiplyScalar(k),G.groundColor.copy(b.groundColor).multiplyScalar(k),i.hemi[h]=G,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=M,i.version=CL++)}function l(u,c){let d=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function fx(n){const e=new PL(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new fx(n),e.set(r,[a])):s>=o.length?(a=new fx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class LL extends Gu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DL extends Gu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NL=`uniform sampler2D shadow_pass;
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
}`;function UL(n,e,t){let i=new ME;const r=new mt,s=new mt,o=new dn,a=new LL({depthPacking:RC}),l=new DL,u={},c=t.maxTextureSize,d={[ks]:ii,[ii]:ks,[Ir]:Ir},f=new zs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:IL,fragmentShader:NL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Zr;g.setAttribute("position",new xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zr(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$M;let h=this.type;this.render=function(w,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),U=n.state;U.setBlending(bs),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=h!==Cr&&this.type===Cr,W=h===Cr&&this.type!==Cr;for(let j=0,G=w.length;j<G;j++){const H=w[j],I=H.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const $=I.getFrameExtents();if(r.multiply($),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,I.mapSize.y=s.y)),I.map===null||k===!0||W===!0){const te=this.type!==Cr?{minFilter:zi,magFilter:zi}:{};I.map!==null&&I.map.dispose(),I.map=new No(r.x,r.y,te),I.map.texture.name=H.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const P=I.getViewportCount();for(let te=0;te<P;te++){const ve=I.getViewport(te);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),U.viewport(o),I.updateMatrices(H,te),i=I.getFrustum(),y(M,R,I.camera,H,this.type)}I.isPointLightShadow!==!0&&this.type===Cr&&v(I,R),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,b)};function v(w,M){const R=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new No(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,R,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,R,p,_,null)}function x(w,M,R,E){let S=null;const b=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)S=b;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=S.uuid,k=M.uuid;let W=u[U];W===void 0&&(W={},u[U]=W);let j=W[k];j===void 0&&(j=S.clone(),W[k]=j,M.addEventListener("dispose",C)),S=j}if(S.visible=M.visible,S.wireframe=M.wireframe,E===Cr?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:d[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=n.properties.get(S);U.light=R}return S}function y(w,M,R,E,S){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Cr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const k=e.update(w),W=w.material;if(Array.isArray(W)){const j=k.groups;for(let G=0,H=j.length;G<H;G++){const I=j[G],$=W[I.materialIndex];if($&&$.visible){const P=x(w,$,E,S);w.onBeforeShadow(n,w,M,R,k,P,I),n.renderBufferDirect(R,null,k,P,w,I),w.onAfterShadow(n,w,M,R,k,P,I)}}}else if(W.visible){const j=x(w,W,E,S);w.onBeforeShadow(n,w,M,R,k,j,null),n.renderBufferDirect(R,null,k,j,w,null),w.onAfterShadow(n,w,M,R,k,j,null)}}const U=w.children;for(let k=0,W=U.length;k<W;k++)y(U[k],M,R,E,S)}function C(w){w.target.removeEventListener("dispose",C);for(const R in u){const E=u[R],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function OL(n){function e(){let O=!1;const K=new dn;let Q=null;const J=new dn(0,0,0,0);return{setMask:function(le){Q!==le&&!O&&(n.colorMask(le,le,le,le),Q=le)},setLocked:function(le){O=le},setClear:function(le,Re,$e,Mt,Et){Et===!0&&(le*=Mt,Re*=Mt,$e*=Mt),K.set(le,Re,$e,Mt),J.equals(K)===!1&&(n.clearColor(le,Re,$e,Mt),J.copy(K))},reset:function(){O=!1,Q=null,J.set(-1,0,0,0)}}}function t(){let O=!1,K=null,Q=null,J=null;return{setTest:function(le){le?ce(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(le){K!==le&&!O&&(n.depthMask(le),K=le)},setFunc:function(le){if(Q!==le){switch(le){case cC:n.depthFunc(n.NEVER);break;case fC:n.depthFunc(n.ALWAYS);break;case dC:n.depthFunc(n.LESS);break;case td:n.depthFunc(n.LEQUAL);break;case hC:n.depthFunc(n.EQUAL);break;case pC:n.depthFunc(n.GEQUAL);break;case mC:n.depthFunc(n.GREATER);break;case _C:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=le}},setLocked:function(le){O=le},setClear:function(le){J!==le&&(n.clearDepth(le),J=le)},reset:function(){O=!1,K=null,Q=null,J=null}}}function i(){let O=!1,K=null,Q=null,J=null,le=null,Re=null,$e=null,Mt=null,Et=null;return{setTest:function(st){O||(st?ce(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(st){K!==st&&!O&&(n.stencilMask(st),K=st)},setFunc:function(st,ke,Ae){(Q!==st||J!==ke||le!==Ae)&&(n.stencilFunc(st,ke,Ae),Q=st,J=ke,le=Ae)},setOp:function(st,ke,Ae){(Re!==st||$e!==ke||Mt!==Ae)&&(n.stencilOp(st,ke,Ae),Re=st,$e=ke,Mt=Ae)},setLocked:function(st){O=st},setClear:function(st){Et!==st&&(n.clearStencil(st),Et=st)},reset:function(){O=!1,K=null,Q=null,J=null,le=null,Re=null,$e=null,Mt=null,Et=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,v=null,x=null,y=null,C=null,w=new xt(0,0,0),M=0,R=!1,E=null,S=null,b=null,U=null,k=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=G>=2);let I=null,$={};const P=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),ve=new dn().fromArray(P),Xe=new dn().fromArray(te);function q(O,K,Q,J){const le=new Uint8Array(4),Re=n.createTexture();n.bindTexture(O,Re),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<Q;$e++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(K+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return Re}const ee={};ee[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),s.setFunc(td),je(!1),xe(gv),ce(n.CULL_FACE),Ue(bs);function ce(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ue(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Pe(O,K){return c[O]!==K?(n.bindFramebuffer(O,K),c[O]=K,O===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=K),O===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=K),!0):!1}function De(O,K){let Q=f,J=!1;if(O){Q=d.get(K),Q===void 0&&(Q=[],d.set(K,Q));const le=O.textures;if(Q.length!==le.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,$e=le.length;Re<$e;Re++)Q[Re]=n.COLOR_ATTACHMENT0+Re;Q.length=le.length,J=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,J=!0);J&&n.drawBuffers(Q)}function Ye(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const Je={[oo]:n.FUNC_ADD,[qA]:n.FUNC_SUBTRACT,[jA]:n.FUNC_REVERSE_SUBTRACT};Je[$A]=n.MIN,Je[KA]=n.MAX;const D={[ZA]:n.ZERO,[QA]:n.ONE,[JA]:n.SRC_COLOR,[pm]:n.SRC_ALPHA,[sC]:n.SRC_ALPHA_SATURATE,[iC]:n.DST_COLOR,[tC]:n.DST_ALPHA,[eC]:n.ONE_MINUS_SRC_COLOR,[mm]:n.ONE_MINUS_SRC_ALPHA,[rC]:n.ONE_MINUS_DST_COLOR,[nC]:n.ONE_MINUS_DST_ALPHA,[oC]:n.CONSTANT_COLOR,[aC]:n.ONE_MINUS_CONSTANT_COLOR,[lC]:n.CONSTANT_ALPHA,[uC]:n.ONE_MINUS_CONSTANT_ALPHA};function Ue(O,K,Q,J,le,Re,$e,Mt,Et,st){if(O===bs){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(ce(n.BLEND),g=!0),O!==YA){if(O!==_||st!==R){if((m!==oo||x!==oo)&&(n.blendEquation(n.FUNC_ADD),m=oo,x=oo),st)switch(O){case ka:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vv:n.blendFunc(n.ONE,n.ONE);break;case xv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ka:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}h=null,v=null,y=null,C=null,w.set(0,0,0),M=0,_=O,R=st}return}le=le||K,Re=Re||Q,$e=$e||J,(K!==m||le!==x)&&(n.blendEquationSeparate(Je[K],Je[le]),m=K,x=le),(Q!==h||J!==v||Re!==y||$e!==C)&&(n.blendFuncSeparate(D[Q],D[J],D[Re],D[$e]),h=Q,v=J,y=Re,C=$e),(Mt.equals(w)===!1||Et!==M)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Et),w.copy(Mt),M=Et),_=O,R=!1}function ze(O,K){O.side===Ir?ue(n.CULL_FACE):ce(n.CULL_FACE);let Q=O.side===ii;K&&(Q=!Q),je(Q),O.blending===ka&&O.transparent===!1?Ue(bs):Ue(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const J=O.stencilWrite;o.setTest(J),J&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),be(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){E!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),E=O)}function xe(O){O!==GA?(ce(n.CULL_FACE),O!==S&&(O===gv?n.cullFace(n.BACK):O===WA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),S=O}function V(O){O!==b&&(j&&n.lineWidth(O),b=O)}function be(O,K,Q){O?(ce(n.POLYGON_OFFSET_FILL),(U!==K||k!==Q)&&(n.polygonOffset(K,Q),U=K,k=Q)):ue(n.POLYGON_OFFSET_FILL)}function Be(O){O?ce(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function L(O){O===void 0&&(O=n.TEXTURE0+W-1),I!==O&&(n.activeTexture(O),I=O)}function T(O,K,Q){Q===void 0&&(I===null?Q=n.TEXTURE0+W-1:Q=I);let J=$[Q];J===void 0&&(J={type:void 0,texture:void 0},$[Q]=J),(J.type!==O||J.texture!==K)&&(I!==Q&&(n.activeTexture(Q),I=Q),n.bindTexture(O,K||ee[O]),J.type=O,J.texture=K)}function X(){const O=$[I];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(O){ve.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ve.copy(O))}function _e(O){Xe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Xe.copy(O))}function Ve(O,K){let Q=l.get(K);Q===void 0&&(Q=new WeakMap,l.set(K,Q));let J=Q.get(O);J===void 0&&(J=n.getUniformBlockIndex(K,O.name),Q.set(O,J))}function qe(O,K){const J=l.get(K).get(O);a.get(K)!==J&&(n.uniformBlockBinding(K,J,O.__bindingPointIndex),a.set(K,J))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,$={},c={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,v=null,x=null,y=null,C=null,w=new xt(0,0,0),M=0,R=!1,E=null,S=null,b=null,U=null,k=null,ve.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:ue,bindFramebuffer:Pe,drawBuffers:De,useProgram:Ye,setBlending:Ue,setMaterial:ze,setFlipSided:je,setCullFace:xe,setLineWidth:V,setPolygonOffset:be,setScissorTest:Be,activeTexture:L,bindTexture:T,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:ge,texImage3D:Ie,updateUBOMapping:Ve,uniformBlockBinding:qe,texStorage2D:Fe,texStorage3D:oe,texSubImage2D:Z,texSubImage3D:Ce,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:He,viewport:_e,reset:dt}}function dx(n,e,t,i){const r=FL(i);switch(t){case tE:return n*e;case iE:return n*e;case rE:return n*e*2;case sE:return n*e/r.components*r.byteLength;case xg:return n*e/r.components*r.byteLength;case oE:return n*e*2/r.components*r.byteLength;case yg:return n*e*2/r.components*r.byteLength;case nE:return n*e*3/r.components*r.byteLength;case er:return n*e*4/r.components*r.byteLength;case Sg:return n*e*4/r.components*r.byteLength;case pf:case mf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _f:case gf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sm:case Em:return Math.max(n,16)*Math.max(e,8)/4;case ym:case Mm:return Math.max(n,8)*Math.max(e,8)/2;case Tm:case wm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Am:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Im:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Um:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Om:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case km:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vf:case Hm:case Vm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case aE:case Gm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wm:case Xm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FL(n){switch(n){case jr:case QM:return{byteLength:1,components:1};case Du:case JM:case zu:return{byteLength:2,components:1};case gg:case vg:return{byteLength:2,components:4};case Io:case _g:case Fr:return{byteLength:4,components:1};case eE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function kL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new mt,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return p?new OffscreenCanvas(L,T):od("canvas")}function _(L,T,X){let ne=1;const re=Be(L);if((re.width>X||re.height>X)&&(ne=X/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor(ne*re.width),Ce=Math.floor(ne*re.height);d===void 0&&(d=g(Z,Ce));const se=T?g(Z,Ce):d;return se.width=Z,se.height=Ce,se.getContext("2d").drawImage(L,0,0,Z,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Z+"x"+Ce+")."),se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==zi&&L.minFilter!==Ji}function h(L){n.generateMipmap(L)}function v(L,T,X,ne,re=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=T;if(T===n.RED&&(X===n.FLOAT&&(Z=n.R32F),X===n.HALF_FLOAT&&(Z=n.R16F),X===n.UNSIGNED_BYTE&&(Z=n.R8)),T===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(Z=n.R8UI),X===n.UNSIGNED_SHORT&&(Z=n.R16UI),X===n.UNSIGNED_INT&&(Z=n.R32UI),X===n.BYTE&&(Z=n.R8I),X===n.SHORT&&(Z=n.R16I),X===n.INT&&(Z=n.R32I)),T===n.RG&&(X===n.FLOAT&&(Z=n.RG32F),X===n.HALF_FLOAT&&(Z=n.RG16F),X===n.UNSIGNED_BYTE&&(Z=n.RG8)),T===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(Z=n.RG8UI),X===n.UNSIGNED_SHORT&&(Z=n.RG16UI),X===n.UNSIGNED_INT&&(Z=n.RG32UI),X===n.BYTE&&(Z=n.RG8I),X===n.SHORT&&(Z=n.RG16I),X===n.INT&&(Z=n.RG32I)),T===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),T===n.RGBA){const Ce=re?nd:vt.getTransfer(ne);X===n.FLOAT&&(Z=n.RGBA32F),X===n.HALF_FLOAT&&(Z=n.RGBA16F),X===n.UNSIGNED_BYTE&&(Z=Ce===Lt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(L,T){let X;return L?T===null||T===Io||T===nl?X=n.DEPTH24_STENCIL8:T===Fr?X=n.DEPTH32F_STENCIL8:T===Du&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Io||T===nl?X=n.DEPTH_COMPONENT24:T===Fr?X=n.DEPTH_COMPONENT32F:T===Du&&(X=n.DEPTH_COMPONENT16),X}function y(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==zi&&L.minFilter!==Ji?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function C(L){const T=L.target;T.removeEventListener("dispose",C),M(T),T.isVideoTexture&&c.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),E(T)}function M(L){const T=i.get(L);if(T.__webglInit===void 0)return;const X=L.source,ne=f.get(X);if(ne){const re=ne[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(L),Object.keys(ne).length===0&&f.delete(X)}i.remove(L)}function R(L){const T=i.get(L);n.deleteTexture(T.__webglTexture);const X=L.source,ne=f.get(X);delete ne[T.__cacheKey],o.memory.textures--}function E(L){const T=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let re=0;re<T.__webglFramebuffer[ne].length;re++)n.deleteFramebuffer(T.__webglFramebuffer[ne][re]);else n.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)n.deleteFramebuffer(T.__webglFramebuffer[ne]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=L.textures;for(let ne=0,re=X.length;ne<re;ne++){const Z=i.get(X[ne]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(X[ne])}i.remove(L)}let S=0;function b(){S=0}function U(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function k(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function W(L,T){const X=i.get(L);if(L.isVideoTexture&&V(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(X,L,T);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function j(L,T){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Xe(X,L,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function G(L,T){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Xe(X,L,T);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function H(L,T){const X=i.get(L);if(L.version>0&&X.__version!==L.version){q(X,L,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}const I={[vm]:n.REPEAT,[po]:n.CLAMP_TO_EDGE,[xm]:n.MIRRORED_REPEAT},$={[zi]:n.NEAREST,[AC]:n.NEAREST_MIPMAP_NEAREST,[Sc]:n.NEAREST_MIPMAP_LINEAR,[Ji]:n.LINEAR,[Sh]:n.LINEAR_MIPMAP_NEAREST,[mo]:n.LINEAR_MIPMAP_LINEAR},P={[LC]:n.NEVER,[FC]:n.ALWAYS,[DC]:n.LESS,[lE]:n.LEQUAL,[IC]:n.EQUAL,[OC]:n.GEQUAL,[NC]:n.GREATER,[UC]:n.NOTEQUAL};function te(L,T){if(T.type===Fr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ji||T.magFilter===Sh||T.magFilter===Sc||T.magFilter===mo||T.minFilter===Ji||T.minFilter===Sh||T.minFilter===Sc||T.minFilter===mo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,I[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,I[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,I[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,$[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,$[T.minFilter]),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zi||T.minFilter!==Sc&&T.minFilter!==mo||T.type===Fr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ve(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",C));const ne=T.source;let re=f.get(ne);re===void 0&&(re={},f.set(ne,re));const Z=k(T);if(Z!==L.__cacheKey){re[Z]===void 0&&(re[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[Z].usedTimes++;const Ce=re[L.__cacheKey];Ce!==void 0&&(re[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&R(T)),L.__cacheKey=Z,L.__webglTexture=re[Z].texture}return X}function Xe(L,T,X){let ne=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=n.TEXTURE_3D);const re=ve(L,T),Z=T.source;t.bindTexture(ne,L.__webglTexture,n.TEXTURE0+X);const Ce=i.get(Z);if(Z.version!==Ce.__version||re===!0){t.activeTexture(n.TEXTURE0+X);const se=vt.getPrimaries(vt.workingColorSpace),pe=T.colorSpace===fs?null:vt.getPrimaries(T.colorSpace),Fe=T.colorSpace===fs||se===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let oe=_(T.image,!1,r.maxTextureSize);oe=be(T,oe);const ge=s.convert(T.format,T.colorSpace),Ie=s.convert(T.type);let He=v(T.internalFormat,ge,Ie,T.colorSpace,T.isVideoTexture);te(ne,T);let _e;const Ve=T.mipmaps,qe=T.isVideoTexture!==!0,dt=Ce.__version===void 0||re===!0,O=Z.dataReady,K=y(T,oe);if(T.isDepthTexture)He=x(T.format===il,T.type),dt&&(qe?t.texStorage2D(n.TEXTURE_2D,1,He,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,He,oe.width,oe.height,0,ge,Ie,null));else if(T.isDataTexture)if(Ve.length>0){qe&&dt&&t.texStorage2D(n.TEXTURE_2D,K,He,Ve[0].width,Ve[0].height);for(let Q=0,J=Ve.length;Q<J;Q++)_e=Ve[Q],qe?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,_e.width,_e.height,ge,Ie,_e.data):t.texImage2D(n.TEXTURE_2D,Q,He,_e.width,_e.height,0,ge,Ie,_e.data);T.generateMipmaps=!1}else qe?(dt&&t.texStorage2D(n.TEXTURE_2D,K,He,oe.width,oe.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,Ie,oe.data)):t.texImage2D(n.TEXTURE_2D,0,He,oe.width,oe.height,0,ge,Ie,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,He,Ve[0].width,Ve[0].height,oe.depth);for(let Q=0,J=Ve.length;Q<J;Q++)if(_e=Ve[Q],T.format!==er)if(ge!==null)if(qe){if(O)if(T.layerUpdates.size>0){const le=dx(_e.width,_e.height,T.format,T.type);for(const Re of T.layerUpdates){const $e=_e.data.subarray(Re*le/_e.data.BYTES_PER_ELEMENT,(Re+1)*le/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Re,_e.width,_e.height,1,ge,$e,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,oe.depth,ge,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,He,_e.width,_e.height,oe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,oe.depth,ge,Ie,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,He,_e.width,_e.height,oe.depth,0,ge,Ie,_e.data)}else{qe&&dt&&t.texStorage2D(n.TEXTURE_2D,K,He,Ve[0].width,Ve[0].height);for(let Q=0,J=Ve.length;Q<J;Q++)_e=Ve[Q],T.format!==er?ge!==null?qe?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,He,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,_e.width,_e.height,ge,Ie,_e.data):t.texImage2D(n.TEXTURE_2D,Q,He,_e.width,_e.height,0,ge,Ie,_e.data)}else if(T.isDataArrayTexture)if(qe){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,He,oe.width,oe.height,oe.depth),O)if(T.layerUpdates.size>0){const Q=dx(oe.width,oe.height,T.format,T.type);for(const J of T.layerUpdates){const le=oe.data.subarray(J*Q/oe.data.BYTES_PER_ELEMENT,(J+1)*Q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,ge,Ie,le)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ie,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,oe.width,oe.height,oe.depth,0,ge,Ie,oe.data);else if(T.isData3DTexture)qe?(dt&&t.texStorage3D(n.TEXTURE_3D,K,He,oe.width,oe.height,oe.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ie,oe.data)):t.texImage3D(n.TEXTURE_3D,0,He,oe.width,oe.height,oe.depth,0,ge,Ie,oe.data);else if(T.isFramebufferTexture){if(dt)if(qe)t.texStorage2D(n.TEXTURE_2D,K,He,oe.width,oe.height);else{let Q=oe.width,J=oe.height;for(let le=0;le<K;le++)t.texImage2D(n.TEXTURE_2D,le,He,Q,J,0,ge,Ie,null),Q>>=1,J>>=1}}else if(Ve.length>0){if(qe&&dt){const Q=Be(Ve[0]);t.texStorage2D(n.TEXTURE_2D,K,He,Q.width,Q.height)}for(let Q=0,J=Ve.length;Q<J;Q++)_e=Ve[Q],qe?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ge,Ie,_e):t.texImage2D(n.TEXTURE_2D,Q,He,ge,Ie,_e);T.generateMipmaps=!1}else if(qe){if(dt){const Q=Be(oe);t.texStorage2D(n.TEXTURE_2D,K,He,Q.width,Q.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ie,oe)}else t.texImage2D(n.TEXTURE_2D,0,He,ge,Ie,oe);m(T)&&h(ne),Ce.__version=Z.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function q(L,T,X){if(T.image.length!==6)return;const ne=ve(L,T),re=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+X);const Z=i.get(re);if(re.version!==Z.__version||ne===!0){t.activeTexture(n.TEXTURE0+X);const Ce=vt.getPrimaries(vt.workingColorSpace),se=T.colorSpace===fs?null:vt.getPrimaries(T.colorSpace),pe=T.colorSpace===fs||Ce===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!Fe&&!oe?ge[J]=_(T.image[J],!0,r.maxCubemapSize):ge[J]=oe?T.image[J].image:T.image[J],ge[J]=be(T,ge[J]);const Ie=ge[0],He=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),Ve=v(T.internalFormat,He,_e,T.colorSpace),qe=T.isVideoTexture!==!0,dt=Z.__version===void 0||ne===!0,O=re.dataReady;let K=y(T,Ie);te(n.TEXTURE_CUBE_MAP,T);let Q;if(Fe){qe&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Ve,Ie.width,Ie.height);for(let J=0;J<6;J++){Q=ge[J].mipmaps;for(let le=0;le<Q.length;le++){const Re=Q[le];T.format!==er?He!==null?qe?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Re.width,Re.height,He,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ve,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Re.width,Re.height,He,_e,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ve,Re.width,Re.height,0,He,_e,Re.data)}}}else{if(Q=T.mipmaps,qe&&dt){Q.length>0&&K++;const J=Be(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(oe){qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,He,_e,ge[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,ge[J].width,ge[J].height,0,He,_e,ge[J].data);for(let le=0;le<Q.length;le++){const $e=Q[le].image[J].image;qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,$e.width,$e.height,He,_e,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ve,$e.width,$e.height,0,He,_e,$e.data)}}else{qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,He,_e,ge[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,He,_e,ge[J]);for(let le=0;le<Q.length;le++){const Re=Q[le];qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,He,_e,Re.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ve,He,_e,Re.image[J])}}}m(T)&&h(n.TEXTURE_CUBE_MAP),Z.__version=re.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ee(L,T,X,ne,re,Z){const Ce=s.convert(X.format,X.colorSpace),se=s.convert(X.type),pe=v(X.internalFormat,Ce,se,X.colorSpace);if(!i.get(T).__hasExternalTextures){const oe=Math.max(1,T.width>>Z),ge=Math.max(1,T.height>>Z);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Z,pe,oe,ge,T.depth,0,Ce,se,null):t.texImage2D(re,Z,pe,oe,ge,0,Ce,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),xe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,re,i.get(X).__webglTexture,0,je(T)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,re,i.get(X).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(L,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer){const ne=T.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,Z=x(T.stencilBuffer,re),Ce=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=je(T);xe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,Z,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Z,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Z,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,L)}else{const ne=T.textures;for(let re=0;re<ne.length;re++){const Z=ne[re],Ce=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),pe=v(Z.internalFormat,Ce,se,Z.colorSpace),Fe=je(T);X&&xe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,pe,T.width,T.height):xe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,pe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,pe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,re=je(T);if(T.depthTexture.format===za)xe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(T.depthTexture.format===il)xe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Pe(L){const T=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ue(T.__webglFramebuffer,L)}else if(X){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]=n.createRenderbuffer(),ce(T.__webglDepthbuffer[ne],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),ce(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(L,T,X){const ne=i.get(L);T!==void 0&&ee(ne.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Pe(L)}function Ye(L){const T=L.texture,X=i.get(L),ne=i.get(T);L.addEventListener("dispose",w);const re=L.textures,Z=L.isWebGLCubeRenderTarget===!0,Ce=re.length>1;if(Ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=T.version,o.memory.textures++),Z){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let pe=0;pe<T.mipmaps.length;pe++)X.__webglFramebuffer[se][pe]=n.createFramebuffer()}else X.__webglFramebuffer[se]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)X.__webglFramebuffer[se]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let se=0,pe=re.length;se<pe;se++){const Fe=i.get(re[se]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&xe(L)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<re.length;se++){const pe=re[se];X.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[se]);const Fe=s.convert(pe.format,pe.colorSpace),oe=s.convert(pe.type),ge=v(pe.internalFormat,Fe,oe,pe.colorSpace,L.isXRRenderTarget===!0),Ie=je(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ge,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,X.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),te(n.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)ee(X.__webglFramebuffer[se][pe],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe);else ee(X.__webglFramebuffer[se],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(T)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let se=0,pe=re.length;se<pe;se++){const Fe=re[se],oe=i.get(Fe);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),te(n.TEXTURE_2D,Fe),ee(X.__webglFramebuffer,L,Fe,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(Fe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ne.__webglTexture),te(se,T),T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)ee(X.__webglFramebuffer[pe],L,T,n.COLOR_ATTACHMENT0,se,pe);else ee(X.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,se,0);m(T)&&h(se),t.unbindTexture()}L.depthBuffer&&Pe(L)}function Je(L){const T=L.textures;for(let X=0,ne=T.length;X<ne;X++){const re=T[X];if(m(re)){const Z=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(re).__webglTexture;t.bindTexture(Z,Ce),h(Z),t.unbindTexture()}}}const D=[],Ue=[];function ze(L){if(L.samples>0){if(xe(L)===!1){const T=L.textures,X=L.width,ne=L.height;let re=n.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(L),se=T.length>1;if(se)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[pe]);const Fe=i.get(T[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,X,ne,0,0,X,ne,re,n.NEAREST),l===!0&&(D.length=0,Ue.length=0,D.push(n.COLOR_ATTACHMENT0+pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(Z),Ue.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[pe]);const Fe=i.get(T[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function je(L){return Math.min(r.maxSamples,L.samples)}function xe(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function V(L){const T=o.render.frame;c.get(L)!==T&&(c.set(L,T),L.update())}function be(L,T){const X=L.colorSpace,ne=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Ws&&X!==fs&&(vt.getTransfer(X)===Lt?(ne!==er||re!==jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function Be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=b,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=De,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=xe}function zL(n,e){function t(i,r=fs){let s;const o=vt.getTransfer(r);if(i===jr)return n.UNSIGNED_BYTE;if(i===gg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===QM)return n.BYTE;if(i===JM)return n.SHORT;if(i===Du)return n.UNSIGNED_SHORT;if(i===_g)return n.INT;if(i===Io)return n.UNSIGNED_INT;if(i===Fr)return n.FLOAT;if(i===zu)return n.HALF_FLOAT;if(i===tE)return n.ALPHA;if(i===nE)return n.RGB;if(i===er)return n.RGBA;if(i===iE)return n.LUMINANCE;if(i===rE)return n.LUMINANCE_ALPHA;if(i===za)return n.DEPTH_COMPONENT;if(i===il)return n.DEPTH_STENCIL;if(i===sE)return n.RED;if(i===xg)return n.RED_INTEGER;if(i===oE)return n.RG;if(i===yg)return n.RG_INTEGER;if(i===Sg)return n.RGBA_INTEGER;if(i===pf||i===mf||i===_f||i===gf)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_f)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_f)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ym||i===Sm||i===Mm||i===Em)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ym)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Em)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tm||i===wm||i===Am)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tm||i===wm)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Am)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cm||i===Rm||i===Pm||i===bm||i===Lm||i===Dm||i===Im||i===Nm||i===Um||i===Om||i===Fm||i===km||i===zm||i===Bm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Im)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Um)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Om)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===km)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vf||i===Hm||i===Vm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vf)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===aE||i===Gm||i===Wm||i===Xm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class BL extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gc extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HL={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const VL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ri,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zs({vertexShader:VL,fragmentShader:GL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zr(new bd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XL extends ll{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,g=null;const _=new WL,m=t.getContextAttributes();let h=null,v=null;const x=[],y=[],C=new mt;let w=null;const M=new Ui;M.layers.enable(1),M.viewport=new dn;const R=new Ui;R.layers.enable(2),R.viewport=new dn;const E=[M,R],S=new BL;S.layers.enable(1),S.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=x[q];return ee===void 0&&(ee=new jh,x[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=x[q];return ee===void 0&&(ee=new jh,x[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=x[q];return ee===void 0&&(ee=new jh,x[q]=ee),ee.getHandSpace()};function k(q){const ee=y.indexOf(q.inputSource);if(ee===-1)return;const ce=x[ee];ce!==void 0&&(ce.update(q.inputSource,q.frame,u||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",j);for(let q=0;q<x.length;q++){const ee=y[q];ee!==null&&(y[q]=null,x[q].disconnect(ee))}b=null,U=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new No(p.framebufferWidth,p.framebufferHeight,{format:er,type:jr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ce=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?il:za,ce=m.stencil?nl:Io);const Pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new No(f.textureWidth,f.textureHeight,{format:er,type:jr,depthTexture:new TE(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(q){for(let ee=0;ee<q.removed.length;ee++){const ce=q.removed[ee],ue=y.indexOf(ce);ue>=0&&(y[ue]=null,x[ue].disconnect(ce))}for(let ee=0;ee<q.added.length;ee++){const ce=q.added[ee];let ue=y.indexOf(ce);if(ue===-1){for(let De=0;De<x.length;De++)if(De>=y.length){y.push(ce),ue=De;break}else if(y[De]===null){y[De]=ce,ue=De;break}if(ue===-1)break}const Pe=x[ue];Pe&&Pe.connect(ce)}}const G=new Y,H=new Y;function I(q,ee,ce){G.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(ce.matrixWorld);const ue=G.distanceTo(H),Pe=ee.projectionMatrix.elements,De=ce.projectionMatrix.elements,Ye=Pe[14]/(Pe[10]-1),Je=Pe[14]/(Pe[10]+1),D=(Pe[9]+1)/Pe[5],Ue=(Pe[9]-1)/Pe[5],ze=(Pe[8]-1)/Pe[0],je=(De[8]+1)/De[0],xe=Ye*ze,V=Ye*je,be=ue/(-ze+je),Be=be*-ze;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const L=Ye+be,T=Je+be,X=xe-Be,ne=V+(ue-Be),re=D*Je/T*L,Z=Ue*Je/T*L;q.projectionMatrix.makePerspective(X,ne,re,Z,L,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function $(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),S.near=R.near=M.near=q.near,S.far=R.far=M.far=q.far,(b!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,U=S.far,M.near=b,M.far=U,R.near=b,R.far=U,M.updateProjectionMatrix(),R.updateProjectionMatrix(),q.updateProjectionMatrix());const ee=q.parent,ce=S.cameras;$(S,ee);for(let ue=0;ue<ce.length;ue++)$(ce[ue],ee);ce.length===2?I(S,M,R):S.projectionMatrix.copy(M.projectionMatrix),P(q,S,ee)};function P(q,ee,ce){ce===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ym*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let te=null;function ve(q,ee){if(c=ee.getViewerPose(u||o),g=ee,c!==null){const ce=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let De=0;De<ce.length;De++){const Ye=ce[De];let Je=null;if(p!==null)Je=p.getViewport(Ye);else{const Ue=d.getViewSubImage(f,Ye);Je=Ue.viewport,De===0&&(e.setRenderTargetTextures(v,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(v))}let D=E[De];D===void 0&&(D=new Ui,D.layers.enable(De),D.viewport=new dn,E[De]=D),D.matrix.fromArray(Ye.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ye.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Je.x,Je.y,Je.width,Je.height),De===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(D)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const De=d.getDepthInformation(ce[0]);De&&De.isValid&&De.texture&&_.init(e,De,r.renderState)}}for(let ce=0;ce<x.length;ce++){const ue=y[ce],Pe=x[ce];ue!==null&&Pe!==void 0&&Pe.update(ue,ee,u||o)}te&&te(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Xe=new EE;Xe.setAnimationLoop(ve),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}}const Qs=new $r,YL=new Qt;function qL(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,xE(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ii&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ii&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Qs.copy(y),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),m.envMapRotation.value.setFromMatrix4(YL.makeRotationFromEuler(Qs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ii&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jL(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=d();v.__bindingPointIndex=x;const y=n.createBuffer(),C=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const R=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,S=R.length;E<S;E++){const b=R[E];if(p(b,w,E,C)===!0){const U=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let j=0;j<k.length;j++){const G=k[j],H=_(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+W,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,C){const w=v.value,M=x+"_"+y;if(C[M]===void 0)return typeof w=="number"||typeof w=="boolean"?C[M]=w:C[M]=w.clone(),!0;{const R=C[M];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[M]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const x=v.uniforms;let y=0;const C=16;for(let M=0,R=x.length;M<R;M++){const E=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,b=E.length;S<b;S++){const U=E[S],k=Array.isArray(U.value)?U.value:[U.value];for(let W=0,j=k.length;W<j;W++){const G=k[W],H=_(G),I=y%C;I!==0&&C-I<H.boundary&&(y+=C-I),U.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=H.storage}}}const w=y%C;return w>0&&(y+=C-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class $L{constructor(e={}){const{canvas:t=zC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lr,this.toneMapping=Ls,this.toneMappingExposure=1;const x=this;let y=!1,C=0,w=0,M=null,R=-1,E=null;const S=new dn,b=new dn;let U=null;const k=new xt(0);let W=0,j=t.width,G=t.height,H=1,I=null,$=null;const P=new dn(0,0,j,G),te=new dn(0,0,j,G);let ve=!1;const Xe=new ME;let q=!1,ee=!1;const ce=new Qt,ue=new Y,Pe=new dn,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Je(){return M===null?H:1}let D=i;function Ue(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mg}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const N="webgl2";if(D=Ue(N,A),D===null)throw Ue(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ze,je,xe,V,be,Be,L,T,X,ne,re,Z,Ce,se,pe,Fe,oe,ge,Ie,He,_e,Ve,qe,dt;function O(){ze=new n2(D),ze.init(),Ve=new zL(D,ze),je=new $b(D,ze,e,Ve),xe=new OL(D),V=new s2(D),be=new ML,Be=new kL(D,ze,xe,be,je,Ve,V),L=new Zb(x),T=new t2(x),X=new fR(D),qe=new qb(D,X),ne=new i2(D,X,V,qe),re=new a2(D,ne,X,V),Ie=new o2(D,je,Be),Fe=new Kb(be),Z=new SL(x,L,T,ze,je,qe,Fe),Ce=new qL(x,be),se=new TL,pe=new bL(ze),ge=new Yb(x,L,T,xe,re,f,l),oe=new UL(x,re,je),dt=new jL(D,V,je,xe),He=new jb(D,ze,V),_e=new r2(D,ze,V),V.programs=Z.programs,x.capabilities=je,x.extensions=ze,x.properties=be,x.renderLists=se,x.shadowMap=oe,x.state=xe,x.info=V}O();const K=new XL(x,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=ze.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ze.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(j,G,!1))},this.getSize=function(A){return A.set(j,G)},this.setSize=function(A,N,B=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,G=N,t.width=Math.floor(A*H),t.height=Math.floor(N*H),B===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(j*H,G*H).floor()},this.setDrawingBufferSize=function(A,N,B){j=A,G=N,H=B,t.width=Math.floor(A*B),t.height=Math.floor(N*B),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,N,B,z){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,N,B,z),xe.viewport(S.copy(P).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,N,B,z){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,N,B,z),xe.scissor(b.copy(te).multiplyScalar(H).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(A){xe.setScissorTest(ve=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(A=!0,N=!0,B=!0){let z=0;if(A){let F=!1;if(M!==null){const ie=M.texture.format;F=ie===Sg||ie===yg||ie===xg}if(F){const ie=M.texture.type,de=ie===jr||ie===Io||ie===Du||ie===nl||ie===gg||ie===vg,Me=ge.getClearColor(),he=ge.getClearAlpha(),ye=Me.r,Le=Me.g,Oe=Me.b;de?(p[0]=ye,p[1]=Le,p[2]=Oe,p[3]=he,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=ye,g[1]=Le,g[2]=Oe,g[3]=he,D.clearBufferiv(D.COLOR,0,g))}else z|=D.COLOR_BUFFER_BIT}N&&(z|=D.DEPTH_BUFFER_BIT),B&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",le,!1),se.dispose(),pe.dispose(),be.dispose(),L.dispose(),T.dispose(),re.dispose(),qe.dispose(),dt.dispose(),Z.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ae),K.removeEventListener("sessionend",lt),fe.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=V.autoReset,N=oe.enabled,B=oe.autoUpdate,z=oe.needsUpdate,F=oe.type;O(),V.autoReset=A,oe.enabled=N,oe.autoUpdate=B,oe.needsUpdate=z,oe.type=F}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){const N=A.target;N.removeEventListener("dispose",Re),$e(N)}function $e(A){Mt(A),be.remove(A)}function Mt(A){const N=be.get(A).programs;N!==void 0&&(N.forEach(function(B){Z.releaseProgram(B)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,B,z,F,ie){N===null&&(N=De);const de=F.isMesh&&F.matrixWorld.determinant()<0,Me=Ct(A,N,B,z,F);xe.setMaterial(z,de);let he=B.index,ye=1;if(z.wireframe===!0){if(he=ne.getWireframeAttribute(B),he===void 0)return;ye=2}const Le=B.drawRange,Oe=B.attributes.position;let ut=Le.start*ye,St=(Le.start+Le.count)*ye;ie!==null&&(ut=Math.max(ut,ie.start*ye),St=Math.min(St,(ie.start+ie.count)*ye)),he!==null?(ut=Math.max(ut,0),St=Math.min(St,he.count)):Oe!=null&&(ut=Math.max(ut,0),St=Math.min(St,Oe.count));const ct=St-ut;if(ct<0||ct===1/0)return;qe.setup(F,z,Me,B,he);let en,ot=He;if(he!==null&&(en=X.get(he),ot=_e,ot.setIndex(en)),F.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*Je()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(F.isLine){let we=z.linewidth;we===void 0&&(we=1),xe.setLineWidth(we*Je()),F.isLineSegments?ot.setMode(D.LINES):F.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else F.isPoints?ot.setMode(D.POINTS):F.isSprite&&ot.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ot.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,mn=F._multiDrawCounts,ht=F._multiDrawCount,Wi=he?X.get(he).bytesPerElement:1,ko=be.get(z).currentProgram.getUniforms();for(let li=0;li<ht;li++)ko.setValue(D,"_gl_DrawID",li),ot.render(we[li]/Wi,mn[li])}else if(F.isInstancedMesh)ot.renderInstances(ut,ct,F.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,mn=Math.min(B.instanceCount,we);ot.renderInstances(ut,ct,mn)}else ot.render(ut,ct)};function Et(A,N,B){A.transparent===!0&&A.side===Ir&&A.forceSinglePass===!1?(A.side=ii,A.needsUpdate=!0,At(A,N,B),A.side=ks,A.needsUpdate=!0,At(A,N,B),A.side=Ir):At(A,N,B)}this.compile=function(A,N,B=null){B===null&&(B=A),m=pe.get(B),m.init(N),v.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==B&&A.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const z=new Set;return A.traverse(function(F){const ie=F.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const Me=ie[de];Et(Me,B,F),z.add(Me)}else Et(ie,B,F),z.add(ie)}),v.pop(),m=null,z},this.compileAsync=function(A,N,B=null){const z=this.compile(A,N,B);return new Promise(F=>{function ie(){if(z.forEach(function(de){be.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){F(A);return}setTimeout(ie,10)}ze.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let st=null;function ke(A){st&&st(A)}function Ae(){fe.stop()}function lt(){fe.start()}const fe=new EE;fe.setAnimationLoop(ke),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(A){st=A,K.setAnimationLoop(A),A===null?fe.stop():fe.start()},K.addEventListener("sessionstart",Ae),K.addEventListener("sessionend",lt),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,M),m=pe.get(A,v.length),m.init(N),v.push(m),ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Xe.setFromProjectionMatrix(ce),ee=this.localClippingEnabled,q=Fe.init(this.clippingPlanes,ee),_=se.get(A,h.length),_.init(),h.push(_),K.enabled===!0&&K.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&Ge(ie,N,-1/0,x.sortObjects)}Ge(A,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(I,$),Ye=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ye&&ge.addToRenderList(_,A),this.info.render.frame++,q===!0&&Fe.beginShadows();const B=m.state.shadowsArray;oe.render(B,A,N),q===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,F=_.transmissive;if(m.setupLights(),N.isArrayCamera){const ie=N.cameras;if(F.length>0)for(let de=0,Me=ie.length;de<Me;de++){const he=ie[de];We(z,F,A,he)}Ye&&ge.render(A);for(let de=0,Me=ie.length;de<Me;de++){const he=ie[de];Ne(_,A,he,he.viewport)}}else F.length>0&&We(z,F,A,N),Ye&&ge.render(A),Ne(_,A,N);M!==null&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(x,A,N),qe.resetDefaultState(),R=-1,E=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&Fe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Ge(A,N,B,z){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){z&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const de=re.update(A),Me=A.material;Me.visible&&_.push(A,de,Me,B,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){const de=re.update(A),Me=A.material;if(z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Pe.copy(de.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Me)){const he=de.groups;for(let ye=0,Le=he.length;ye<Le;ye++){const Oe=he[ye],ut=Me[Oe.materialIndex];ut&&ut.visible&&_.push(A,de,ut,B,Pe.z,Oe)}}else Me.visible&&_.push(A,de,Me,B,Pe.z,null)}}const ie=A.children;for(let de=0,Me=ie.length;de<Me;de++)Ge(ie[de],N,B,z)}function Ne(A,N,B,z){const F=A.opaque,ie=A.transmissive,de=A.transparent;m.setupLightsView(B),q===!0&&Fe.setGlobalState(x.clippingPlanes,B),z&&xe.viewport(S.copy(z)),F.length>0&&Ut(F,N,B),ie.length>0&&Ut(ie,N,B),de.length>0&&Ut(de,N,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function We(A,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new No(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?zu:jr,minFilter:mo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ie=m.state.transmissionRenderTarget[z.id],de=z.viewport||S;ie.setSize(de.z,de.w);const Me=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(k),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),Ye?ge.render(B):x.clear();const he=x.toneMapping;x.toneMapping=Ls;const ye=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),q===!0&&Fe.setGlobalState(x.clippingPlanes,z),Ut(A,B,z),Be.updateMultisampleRenderTarget(ie),Be.updateRenderTargetMipmap(ie),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Oe=0,ut=N.length;Oe<ut;Oe++){const St=N[Oe],ct=St.object,en=St.geometry,ot=St.material,we=St.group;if(ot.side===Ir&&ct.layers.test(z.layers)){const mn=ot.side;ot.side=ii,ot.needsUpdate=!0,et(ct,B,z,en,ot,we),ot.side=mn,ot.needsUpdate=!0,Le=!0}}Le===!0&&(Be.updateMultisampleRenderTarget(ie),Be.updateRenderTargetMipmap(ie))}x.setRenderTarget(Me),x.setClearColor(k,W),ye!==void 0&&(z.viewport=ye),x.toneMapping=he}function Ut(A,N,B){const z=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ie=A.length;F<ie;F++){const de=A[F],Me=de.object,he=de.geometry,ye=z===null?de.material:z,Le=de.group;Me.layers.test(B.layers)&&et(Me,N,B,he,ye,Le)}}function et(A,N,B,z,F,ie){A.onBeforeRender(x,N,B,z,F,ie),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.transparent===!0&&F.side===Ir&&F.forceSinglePass===!1?(F.side=ii,F.needsUpdate=!0,x.renderBufferDirect(B,N,z,F,A,ie),F.side=ks,F.needsUpdate=!0,x.renderBufferDirect(B,N,z,F,A,ie),F.side=Ir):x.renderBufferDirect(B,N,z,F,A,ie),A.onAfterRender(x,N,B,z,F,ie)}function At(A,N,B){N.isScene!==!0&&(N=De);const z=be.get(A),F=m.state.lights,ie=m.state.shadowsArray,de=F.state.version,Me=Z.getParameters(A,F.state,ie,N,B),he=Z.getProgramCacheKey(Me);let ye=z.programs;z.environment=A.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(A.isMeshStandardMaterial?T:L).get(A.envMap||z.environment),z.envMapRotation=z.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,ye===void 0&&(A.addEventListener("dispose",Re),ye=new Map,z.programs=ye);let Le=ye.get(he);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===de)return Pt(A,Me),Le}else Me.uniforms=Z.getUniforms(A),A.onBeforeCompile(Me,x),Le=Z.acquireProgram(Me,he),ye.set(he,Le),z.uniforms=Me.uniforms;const Oe=z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=Fe.uniform),Pt(A,Me),z.needsLights=ai(A),z.lightsStateVersion=de,z.needsLights&&(Oe.ambientLightColor.value=F.state.ambient,Oe.lightProbe.value=F.state.probe,Oe.directionalLights.value=F.state.directional,Oe.directionalLightShadows.value=F.state.directionalShadow,Oe.spotLights.value=F.state.spot,Oe.spotLightShadows.value=F.state.spotShadow,Oe.rectAreaLights.value=F.state.rectArea,Oe.ltc_1.value=F.state.rectAreaLTC1,Oe.ltc_2.value=F.state.rectAreaLTC2,Oe.pointLights.value=F.state.point,Oe.pointLightShadows.value=F.state.pointShadow,Oe.hemisphereLights.value=F.state.hemi,Oe.directionalShadowMap.value=F.state.directionalShadowMap,Oe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Oe.spotShadowMap.value=F.state.spotShadowMap,Oe.spotLightMatrix.value=F.state.spotLightMatrix,Oe.spotLightMap.value=F.state.spotLightMap,Oe.pointShadowMap.value=F.state.pointShadowMap,Oe.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function Jt(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=xf.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function Pt(A,N){const B=be.get(A);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Ct(A,N,B,z,F){N.isScene!==!0&&(N=De),Be.resetTextureUnits();const ie=N.fog,de=z.isMeshStandardMaterial?N.environment:null,Me=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ws,he=(z.isMeshStandardMaterial?T:L).get(z.envMap||de),ye=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Oe=!!B.morphAttributes.position,ut=!!B.morphAttributes.normal,St=!!B.morphAttributes.color;let ct=Ls;z.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ct=x.toneMapping);const en=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=en!==void 0?en.length:0,we=be.get(z),mn=m.state.lights;if(q===!0&&(ee===!0||A!==E)){const Ri=A===E&&z.id===R;Fe.setState(z,A,Ri)}let ht=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==mn.state.version||we.outputColorSpace!==Me||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==he||z.fog===!0&&we.fog!==ie||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Fe.numPlanes||we.numIntersection!==Fe.numIntersection)||we.vertexAlphas!==ye||we.vertexTangents!==Le||we.morphTargets!==Oe||we.morphNormals!==ut||we.morphColors!==St||we.toneMapping!==ct||we.morphTargetsCount!==ot)&&(ht=!0):(ht=!0,we.__version=z.version);let Wi=we.currentProgram;ht===!0&&(Wi=At(z,N,F));let ko=!1,li=!1,Dd=!1;const qt=Wi.getUniforms(),Qr=we.uniforms;if(xe.useProgram(Wi.program)&&(ko=!0,li=!0,Dd=!0),z.id!==R&&(R=z.id,li=!0),ko||E!==A){qt.setValue(D,"projectionMatrix",A.projectionMatrix),qt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Ri=qt.map.cameraPosition;Ri!==void 0&&Ri.setValue(D,ue.setFromMatrixPosition(A.matrixWorld)),je.logarithmicDepthBuffer&&qt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&qt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,li=!0,Dd=!0)}if(F.isSkinnedMesh){qt.setOptional(D,F,"bindMatrix"),qt.setOptional(D,F,"bindMatrixInverse");const Ri=F.skeleton;Ri&&(Ri.boneTexture===null&&Ri.computeBoneTexture(),qt.setValue(D,"boneTexture",Ri.boneTexture,Be))}F.isBatchedMesh&&(qt.setOptional(D,F,"batchingTexture"),qt.setValue(D,"batchingTexture",F._matricesTexture,Be),qt.setOptional(D,F,"batchingIdTexture"),qt.setValue(D,"batchingIdTexture",F._indirectTexture,Be),qt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&qt.setValue(D,"batchingColorTexture",F._colorsTexture,Be));const Id=B.morphAttributes;if((Id.position!==void 0||Id.normal!==void 0||Id.color!==void 0)&&Ie.update(F,B,Wi),(li||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,qt.setValue(D,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qr.envMap.value=he,Qr.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Qr.envMapIntensity.value=N.environmentIntensity),li&&(qt.setValue(D,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&_t(Qr,Dd),ie&&z.fog===!0&&Ce.refreshFogUniforms(Qr,ie),Ce.refreshMaterialUniforms(Qr,z,H,G,m.state.transmissionRenderTarget[A.id]),xf.upload(D,Jt(we),Qr,Be)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xf.upload(D,Jt(we),Qr,Be),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&qt.setValue(D,"center",F.center),qt.setValue(D,"modelViewMatrix",F.modelViewMatrix),qt.setValue(D,"normalMatrix",F.normalMatrix),qt.setValue(D,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ri=z.uniformsGroups;for(let Nd=0,bE=Ri.length;Nd<bE;Nd++){const wg=Ri[Nd];dt.update(wg,Wi),dt.bind(wg,Wi)}}return Wi}function _t(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function ai(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,N,B){be.get(A.texture).__webglTexture=N,be.get(A.depthTexture).__webglTexture=B;const z=be.get(A);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const B=be.get(A);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,B=0){M=A,C=N,w=B;let z=!0,F=null,ie=!1,de=!1;if(A){const he=be.get(A);he.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):he.__webglFramebuffer===void 0?Be.setupRenderTarget(A):he.__hasExternalTextures&&Be.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);const ye=A.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);const Le=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?F=Le[N][B]:F=Le[N],ie=!0):A.samples>0&&Be.useMultisampledRTT(A)===!1?F=be.get(A).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[B]:F=Le,S.copy(A.viewport),b.copy(A.scissor),U=A.scissorTest}else S.copy(P).multiplyScalar(H).floor(),b.copy(te).multiplyScalar(H).floor(),U=ve;if(xe.bindFramebuffer(D.FRAMEBUFFER,F)&&z&&xe.drawBuffers(A,F),xe.viewport(S),xe.scissor(b),xe.setScissorTest(U),ie){const he=be.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,B)}else if(de){const he=be.get(A.texture),ye=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.__webglTexture,B||0,ye)}R=-1},this.readRenderTargetPixels=function(A,N,B,z,F,ie,de){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){xe.bindFramebuffer(D.FRAMEBUFFER,Me);try{const he=A.texture,ye=he.format,Le=he.type;if(!je.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-z&&B>=0&&B<=A.height-F&&D.readPixels(N,B,z,F,Ve.convert(ye),Ve.convert(Le),ie)}finally{const he=M!==null?be.get(M).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(A,N,B,z,F,ie,de){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){xe.bindFramebuffer(D.FRAMEBUFFER,Me);try{const he=A.texture,ye=he.format,Le=he.type;if(!je.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-z&&B>=0&&B<=A.height-F){const Oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),D.readPixels(N,B,z,F,Ve.convert(ye),Ve.convert(Le),0),D.flush();const ut=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await BC(D,ut,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie)}finally{D.deleteBuffer(Oe),D.deleteSync(ut)}return ie}}finally{const he=M!==null?be.get(M).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,he)}}},this.copyFramebufferToTexture=function(A,N=null,B=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const z=Math.pow(2,-B),F=Math.floor(A.image.width*z),ie=Math.floor(A.image.height*z),de=N!==null?N.x:0,Me=N!==null?N.y:0;Be.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,de,Me,F,ie),xe.unbindTexture()},this.copyTextureToTexture=function(A,N,B=null,z=null,F=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1],N=arguments[2],F=arguments[3]||0,B=null);let ie,de,Me,he,ye,Le;B!==null?(ie=B.max.x-B.min.x,de=B.max.y-B.min.y,Me=B.min.x,he=B.min.y):(ie=A.image.width,de=A.image.height,Me=0,he=0),z!==null?(ye=z.x,Le=z.y):(ye=0,Le=0);const Oe=Ve.convert(N.format),ut=Ve.convert(N.type);Be.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const St=D.getParameter(D.UNPACK_ROW_LENGTH),ct=D.getParameter(D.UNPACK_IMAGE_HEIGHT),en=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),we=D.getParameter(D.UNPACK_SKIP_IMAGES),mn=A.isCompressedTexture?A.mipmaps[F]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,mn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),D.pixelStorei(D.UNPACK_SKIP_ROWS,he),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,ye,Le,ie,de,Oe,ut,mn.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,ye,Le,mn.width,mn.height,Oe,mn.data):D.texSubImage2D(D.TEXTURE_2D,F,ye,Le,ie,de,Oe,ut,mn),D.pixelStorei(D.UNPACK_ROW_LENGTH,St),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),D.pixelStorei(D.UNPACK_SKIP_PIXELS,en),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we),F===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(A,N,B=null,z=null,F=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,A=arguments[2],N=arguments[3],F=arguments[4]||0);let ie,de,Me,he,ye,Le,Oe,ut,St;const ct=A.isCompressedTexture?A.mipmaps[F]:A.image;B!==null?(ie=B.max.x-B.min.x,de=B.max.y-B.min.y,Me=B.max.z-B.min.z,he=B.min.x,ye=B.min.y,Le=B.min.z):(ie=ct.width,de=ct.height,Me=ct.depth,he=0,ye=0,Le=0),z!==null?(Oe=z.x,ut=z.y,St=z.z):(Oe=0,ut=0,St=0);const en=Ve.convert(N.format),ot=Ve.convert(N.type);let we;if(N.isData3DTexture)Be.setTexture3D(N,0),we=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Be.setTexture2DArray(N,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const mn=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Wi=D.getParameter(D.UNPACK_SKIP_PIXELS),ko=D.getParameter(D.UNPACK_SKIP_ROWS),li=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ct.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,he),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(we,F,Oe,ut,St,ie,de,Me,en,ot,ct.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(we,F,Oe,ut,St,ie,de,Me,en,ct.data):D.texSubImage3D(we,F,Oe,ut,St,ie,de,Me,en,ot,ct),D.pixelStorei(D.UNPACK_ROW_LENGTH,mn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Wi),D.pixelStorei(D.UNPACK_SKIP_ROWS,ko),D.pixelStorei(D.UNPACK_SKIP_IMAGES,li),F===0&&N.generateMipmaps&&D.generateMipmap(we),xe.unbindTexture()},this.initRenderTarget=function(A){be.get(A).__webglFramebuffer===void 0&&Be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Be.setTextureCube(A,0):A.isData3DTexture?Be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Be.setTexture2DArray(A,0):Be.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){C=0,w=0,M=null,xe.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mg?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===Rd?"display-p3":"srgb"}}class KL extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class PE extends Gu{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hx=new Qt,jm=new hE,Wc=new Pd,Xc=new Y;class ZL extends si{constructor(e=new Zr,t=new PE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wc.copy(i.boundingSphere),Wc.applyMatrix4(r),Wc.radius+=s,e.ray.intersectsSphere(Wc)===!1)return;hx.copy(r).invert(),jm.copy(e.ray).applyMatrix4(hx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);Xc.fromBufferAttribute(d,m),px(Xc,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Xc.fromBufferAttribute(d,g),px(Xc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function px(n,e,t,i,r,s,o){const a=jm.distanceSqToPoint(n);if(a<t){const l=new Y;jm.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Tg extends Zr{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],u=[],c=[],d=new Y,f=new Y,p=new Y,g=new Y,_=new Y,m=new Y,h=new Y;for(let x=0;x<=i;++x){const y=x/i*s*Math.PI*2;v(y,s,o,e,p),v(y+.01,s,o,e,g),m.subVectors(g,p),h.addVectors(g,p),_.crossVectors(m,h),h.crossVectors(_,m),_.normalize(),h.normalize();for(let C=0;C<=r;++C){const w=C/r*Math.PI*2,M=-t*Math.cos(w),R=t*Math.sin(w);d.x=p.x+(M*h.x+R*_.x),d.y=p.y+(M*h.y+R*_.y),d.z=p.z+(M*h.z+R*_.z),l.push(d.x,d.y,d.z),f.subVectors(d,p).normalize(),u.push(f.x,f.y,f.z),c.push(x/i),c.push(C/r)}}for(let x=1;x<=i;x++)for(let y=1;y<=r;y++){const C=(r+1)*(x-1)+(y-1),w=(r+1)*x+(y-1),M=(r+1)*x+y,R=(r+1)*(x-1)+y;a.push(C,w,R),a.push(w,M,R)}this.setIndex(a),this.setAttribute("position",new yr(l,3)),this.setAttribute("normal",new yr(u,3)),this.setAttribute("uv",new yr(c,2));function v(x,y,C,w,M){const R=Math.cos(x),E=Math.sin(x),S=C/y*x,b=Math.cos(S);M.x=w*(2+b)*.5*R,M.y=w*(2+b)*E*.5,M.z=w*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tg(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class QL{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mx(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mg);const JL=()=>{const n=Bn.useRef(null),e=Bn.useRef([]),t=Bn.useRef(null);return Bn.useEffect(()=>{const i=gr.context(()=>{gr.from(e.current,{y:100,opacity:0,duration:1.2,stagger:.2,ease:"power4.out",delay:.2})},n);if(!t.current)return;const r=new KL,s=new Ui(75,window.innerWidth/window.innerHeight,.1,1e3),o=new $L({canvas:t.current,alpha:!0,antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2));const a=new Tg(10,3,200,32),l=new PE({color:13434624,size:.05,transparent:!0,opacity:.6}),u=new ZL(a,l);r.add(u),s.position.z=30;let c=0,d=0,f=0,p=0;const g=window.innerWidth/2,_=window.innerHeight/2,m=C=>{c=(C.clientX-g)*.05,d=(C.clientY-_)*.05};window.addEventListener("mousemove",m);const h=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",h);let v;const x=new QL,y=()=>{const C=x.getElapsedTime();f=c*.001,p=d*.001,u.rotation.y+=.05*(f-u.rotation.y),u.rotation.x+=.05*(p-u.rotation.x),u.position.y=Math.sin(C*.5)*2,u.rotation.z+=.002,o.render(r,s),v=requestAnimationFrame(y)};return y(),()=>{i.revert(),window.removeEventListener("mousemove",m),window.removeEventListener("resize",h),cancelAnimationFrame(v),a.dispose(),l.dispose(),o.dispose()}},[]),Se.jsxs("section",{ref:n,className:"relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-primary px-6",children:[Se.jsx("canvas",{ref:t,className:"absolute inset-0 z-0 pointer-events-none opacity-40 interactable",style:{mixBlendMode:"screen"}}),Se.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center max-w-5xl pointer-events-none",children:[Se.jsx("div",{className:"clip-text pointer-events-auto",children:Se.jsxs("h1",{ref:i=>e.current[0]=i,className:"text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-text leading-none mb-4 interactable",children:["M. Mizwar ",Se.jsx("span",{className:"text-accent",children:"Fahmi"})]})}),Se.jsx("div",{className:"clip-text mt-6 pointer-events-auto",children:Se.jsx("p",{ref:i=>e.current[1]=i,className:"text-lg md:text-2xl font-mono text-gray-400 max-w-3xl leading-relaxed interactable",children:"Full-Stack Developer & Analyst bridging robust backend infrastructure with immersive web experiences."})})]}),Se.jsxs("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 pointer-events-none",children:[Se.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-accent",children:"Scroll to explore"}),Se.jsx("div",{className:"w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"})]})]})},eD=()=>{const n=Bn.useRef(null),e=Bn.useRef(null);return Bn.useEffect(()=>{const t=gr.context(()=>{const i=gr.utils.toArray(".about-line");gr.from(i,{scrollTrigger:{trigger:n.current,start:"top 70%",end:"bottom 80%",scrub:1},y:50,opacity:.1,stagger:.1,ease:"power3.out",color:"#333"})},n);return()=>t.revert()},[]),Se.jsx("section",{ref:n,className:"relative min-h-screen w-full flex items-center justify-center bg-secondary px-6 py-24",children:Se.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start",children:[Se.jsxs("div",{className:"md:col-span-4 flex flex-col gap-6 sticky top-32",children:[Se.jsx("h2",{className:"text-sm font-mono tracking-widest text-accent uppercase",children:"// Environment_"}),Se.jsxs("ul",{className:"font-mono text-sm text-gray-400 space-y-2 border-l border-accent/20 pl-4",children:[Se.jsx("li",{className:"interactable hover:text-accent transition-colors",children:"OS: Linux (Fedora, Ubuntu)"}),Se.jsx("li",{className:"interactable hover:text-accent transition-colors",children:"Environment: WSL"}),Se.jsx("li",{className:"interactable hover:text-accent transition-colors",children:"Architecture: Enterprise"})]})]}),Se.jsxs("div",{ref:e,className:"md:col-span-8 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight",children:[Se.jsx("div",{className:"about-line text-text",children:"I build resilient, large-scale applications and digital infrastructure,"}),Se.jsxs("div",{className:"about-line text-text mt-4",children:["working extensively on enterprise systems like those for ",Se.jsx("span",{className:"text-accent",children:"Sarawak Information Systems (SAINS)."})]}),Se.jsx("div",{className:"about-line text-text mt-12",children:"Beyond enterprise architecture, I have a deep passion for the interactive web,"}),Se.jsx("div",{className:"about-line text-text mt-4",children:"experimenting with character animation and Live2D integrations"}),Se.jsxs("div",{className:"about-line text-text mt-4",children:["to bring a dynamic, ",Se.jsx("span",{className:"text-accent italic",children:"game-like feel"})," to the browser."]})]})]})})},$h=["React","TypeScript","Python","Docker","PostgreSQL","Node.js"],Kh=["PIXI.js","WebGL","Live2D","GSAP","Three.js","Framer Motion"],tD=()=>Se.jsxs("section",{className:"relative py-24 bg-primary overflow-hidden border-y border-white/5",children:[Se.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-5 pointer-events-none w-full",children:Se.jsx("h2",{className:"text-[15vw] font-black uppercase text-center leading-none tracking-tighter whitespace-nowrap",children:"Tech Stack"})}),Se.jsxs("div",{className:"relative z-10 flex flex-col gap-16",children:[Se.jsxs("div",{className:"flex flex-col gap-4",children:[Se.jsx("h3",{className:"px-6 md:px-12 text-sm font-mono text-accent uppercase tracking-widest",children:"Core Infrastructure"}),Se.jsx("div",{className:"flex overflow-hidden whitespace-nowrap bg-secondary/50 py-6 transform -rotate-1",children:Se.jsx("div",{className:"animate-marquee flex gap-12 items-center",children:[...$h,...$h,...$h].map((n,e)=>Se.jsx("span",{className:"text-4xl md:text-6xl font-bold uppercase text-gray-300 interactable hover:text-accent transition-colors duration-300",children:n},`core-${e}`))})})]}),Se.jsxs("div",{className:"flex flex-col gap-4",children:[Se.jsx("h3",{className:"px-6 md:px-12 text-sm font-mono text-accent uppercase tracking-widest text-right",children:"Creative / Interactive"}),Se.jsx("div",{className:"flex overflow-hidden whitespace-nowrap bg-accent text-primary py-6 transform rotate-1",children:Se.jsx("div",{className:"animate-marquee flex gap-12 items-center",style:{animationDirection:"reverse"},children:[...Kh,...Kh,...Kh].map((n,e)=>Se.jsx("span",{className:"text-4xl md:text-6xl font-bold uppercase interactable hover:text-white transition-colors duration-300",children:n},`creative-${e}`))})})]})]})]}),nD=[{id:"01",title:"Enterprise Architecture",category:"Infrastructure",description:"Robust backend systems and scalable architecture for high-traffic environments."},{id:"02",title:"Live2D Interactive Canvas",category:"Creative Web",description:"A WebGL-powered interactive character interface bridging gaming and web."},{id:"03",title:"SAINS Integration",category:"Full-Stack",description:"Large-scale application development streamlining internal state data flow."}],iD=()=>{const n=Bn.useRef(null),e=Bn.useRef([]);return Bn.useEffect(()=>{const t=gr.context(()=>{e.current.forEach(i=>{i&&gr.fromTo(i,{y:100,opacity:0,scale:.95},{scrollTrigger:{trigger:i,start:"top 85%",end:"top 50%",scrub:1},y:0,opacity:1,scale:1,ease:"power2.out"})})},n);return()=>t.revert()},[]),Se.jsx("section",{ref:n,className:"py-32 px-6 bg-primary min-h-screen",children:Se.jsxs("div",{className:"max-w-7xl mx-auto",children:[Se.jsx("div",{className:"mb-20",children:Se.jsxs("h2",{className:"text-6xl md:text-8xl font-black uppercase tracking-tighter text-text",children:["Featured ",Se.jsx("br",{}),Se.jsx("span",{className:"text-accent",children:"Works"})]})}),Se.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:nD.map((t,i)=>Se.jsxs("div",{ref:r=>e.current[i]=r,className:`group relative bg-secondary rounded-2xl overflow-hidden border border-white/10 p-8 interactable cursor-pointer
                ${i===2?"md:col-span-2 md:aspect-[2.5/1]":"aspect-square md:aspect-[4/5]"}
              `,children:[Se.jsx("div",{className:"absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 z-0"}),Se.jsxs("div",{className:"relative z-10 h-full flex flex-col justify-between",children:[Se.jsxs("div",{className:"flex justify-between items-start",children:[Se.jsx("span",{className:"font-mono text-xs text-gray-500 uppercase tracking-widest",children:t.id}),Se.jsx("span",{className:"font-mono text-xs text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1",children:t.category})]}),Se.jsxs("div",{children:[Se.jsx("h3",{className:"text-3xl md:text-5xl font-bold uppercase mb-4 text-text group-hover:text-accent transition-colors duration-300",children:t.title}),Se.jsx("p",{className:"text-gray-400 font-mono text-sm max-w-md",children:t.description})]})]}),Se.jsx("div",{className:"absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"})]},t.id))})]})})};gr.registerPlugin(it);const rD=()=>{const n=Bn.useRef(null);return Bn.useEffect(()=>{const e=n.current;if(!e)return;const t=o=>{gr.to(e,{x:o.clientX,y:o.clientY,duration:.1,ease:"power2.out"})},i=()=>{e.classList.add("hover")},r=()=>{e.classList.remove("hover")};window.addEventListener("mousemove",t);const s=document.querySelectorAll("a, button, .interactable");return s.forEach(o=>{o.addEventListener("mouseenter",i),o.addEventListener("mouseleave",r)}),()=>{window.removeEventListener("mousemove",t),s.forEach(o=>{o.removeEventListener("mouseenter",i),o.removeEventListener("mouseleave",r)})}},[]),Se.jsxs("div",{className:"relative min-h-screen bg-primary",children:[Se.jsx("div",{ref:n,className:"custom-cursor hidden md:block"}),Se.jsxs("main",{children:[Se.jsx(JL,{}),Se.jsx(eD,{}),Se.jsx(tD,{}),Se.jsx(iD,{})]})]})};Zh.createRoot(document.getElementById("root")).render(Se.jsx(qE.StrictMode,{children:Se.jsx(rD,{})}));
