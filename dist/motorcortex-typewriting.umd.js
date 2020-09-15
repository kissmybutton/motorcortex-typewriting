!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@kissmybutton/motorcortex")):"function"==typeof define&&define.amd?define(["exports","@kissmybutton/motorcortex"],n):n((t=t||self)["@kissmybutton/motorcortex-typewriting"]={},t.MotorCortex)}(this,(function(t,n){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function p(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function y(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var g={},m={duration:1e3,round:0},h=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],b={CSS:{}};function v(t,n,e){return Math.min(Math.max(t,n),e)}function w(t,n){return t.indexOf(n)>-1}var x={arr:function(t){return Array.isArray(t)},obj:function(t){return w(Object.prototype.toString.call(t),"Object")},pth:function(t){return x.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||x.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return x.hex(t)||x.rgb(t)||x.hsl(t)},key:function(t){return!g.hasOwnProperty(t)&&!m.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}},O={linear:function(){return function(t){return t}}};function P(t,n){for(var e=t.length,o=arguments.length>=2?arguments[1]:void 0,r=[],i=0;i<e;i++)if(i in t){var a=t[i];n.call(o,a,i,t)&&r.push(a)}return r}function k(t){return t.reduce((function(t,n){return t.concat(x.arr(n)?k(n):n)}),[])}function C(t){return x.arr(t)?t:(x.str(t)&&(t=function(t){try{return document.querySelectorAll(t)}catch(t){return}}(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function j(t,n){return t.some((function(t){return t===n}))}function S(t){var n={};for(var e in t)n[e]=t[e];return n}function R(t,n){var e=S(t);for(var o in t)e[o]=n.hasOwnProperty(o)?n[o]:t[o];return e}function I(t,n){var e=S(t);for(var o in n)e[o]=x.und(t[o])?n[o]:t[o];return e}function M(t){return x.rgb(t)?(e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n=t))?"rgba("+e[1]+",1)":n:x.hex(t)?function(t){var n=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,n,e,o){return n+n+e+e+o+o})),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+",1)"}(t):x.hsl(t)?function(t){var n,e,o,r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,s=parseInt(r[3],10)/100,p=r[4]||1;function l(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t}if(0==a)n=e=o=s;else{var u=s<.5?s*(1+a):s+a-s*a,c=2*s-u;n=l(c,u,i+1/3),e=l(c,u,i),o=l(c,u,i-1/3)}return"rgba("+255*n+","+255*e+","+255*o+","+p+")"}(t):void 0;var n,e}function T(t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(n)return n[1]}function _(t,n){return x.fnc(t)?t(n.target,n.id,n.total):t}function A(t,n){return t.getAttribute(n)}function E(t,n,e){if(j([e,"deg","rad","turn"],T(n)))return n;var o=b.CSS[n+e];if(!x.und(o))return o;var r=document.createElement(t.tagName),i=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;i.appendChild(r),r.style.position="absolute",r.style.width=100+e;var a=100/r.offsetWidth;i.removeChild(r);var s=a*parseFloat(n);return b.CSS[n+e]=s,s}function B(t,n,e){if(n in t.style){var o=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=t.style[n]||getComputedStyle(t).getPropertyValue(o)||"0";return e?E(t,r,e):r}}function z(t,n){return x.dom(t)&&!x.inp(t)&&(A(t,n)||x.svg(t)&&t[n])?"attribute":x.dom(t)&&j(h,n)?"transform":x.dom(t)&&"transform"!==n&&B(t,n)?"css":null!=t[n]?"object":void 0}function V(t){if(x.dom(t)){for(var n,e=t.style.transform||"",o=/(\w+)\(([^)]*)\)/g,r=new Map;n=o.exec(e);)r.set(n[1],n[2]);return r}}function D(t,n,e,o){var r=w(n,"scale")?1:0+function(t){return w(t,"translate")||"perspective"===t?"px":w(t,"rotate")||w(t,"skew")?"deg":void 0}(n),i=V(t).get(n)||r;return e&&(e.transforms.list.set(n,i),e.transforms.last=n),o?E(t,i,o):i}function L(t,n,e,o){switch(z(t,n)){case"transform":return D(t,n,o,e);case"css":return B(t,n,e);case"attribute":return A(t,n);default:return t[n]||0}}function W(t,n){var e=/^(\*=|\+=|-=)/.exec(t);if(!e)return t;var o=T(t)||0,r=parseFloat(n),i=parseFloat(t.replace(e[0],""));switch(e[0][0]){case"+":return r+i+o;case"-":return r-i+o;case"*":return r*i+o}}function X(t,n){if(x.col(t))return M(t);if(/\s/g.test(t))return t;var e=T(t),o=e?t.substr(0,t.length-e.length):t;return n?o+n:o}function Y(t,n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,o=X(x.pth(t)?t.totalLength:t,n)+"";return{original:o,numbers:o.match(e)?o.match(e).map(Number):[0],strings:x.str(t)||n?o.split(e):[]}}function Z(t){var n=function(t){return P(t?k(x.arr(t)?t.map(C):C(t)):[],(function(t,n,e){return e.indexOf(t)===n}))}(t);return n.map((function(t,e){return{target:t,id:e,total:n.length,transforms:{list:V(t)}}}))}function G(t,n){var e=S(n);if(x.arr(t)){var o=t.length;2===o&&!x.obj(t[0])?t={value:t}:x.fnc(n.duration)||(e.duration=n.duration/o)}return(x.arr(t)?t:[t]).map((function(t,n){return x.obj(t)&&!x.pth(t)?t:{value:t}})).map((function(t){return I(t,e)}))}function N(t,n){var e;return t.tweens.map((function(o){var r=function(t,n){var e={};for(var o in t){var r=_(t[o],n);x.arr(r)&&1===(r=r.map((function(t){return _(t,n)}))).length&&(r=r[0]),e[o]=r}return e.duration=parseFloat(e.duration),e}(o,n),i=r.value,a=x.arr(i)?i[1]:i,s=T(a),p=L(n.target,t.name,s,n),l=e?e.to.original:p,u=x.arr(i)?i[0]:l,c=T(u)||T(p),f=s||c;return x.und(a)&&(a=l),r.from=Y(u,f),r.to=Y(W(a,u),f),r.start=e?e.end:0,r.end=r.start+r.duration,r.isPath=!1,r.isColor=x.col(r.from.original),r.isColor&&(r.round=1),e=r,r}))}var F={css:function(t,n,e){return t.style[n]=e},attribute:function(t,n,e){return t.setAttribute(n,e)},object:function(t,n,e){return t[n]=e},transform:function(t,n,e,o,r){if(o.list.set(n,e),n===o.last||r){var i="";o.list.forEach((function(t,n){i+=n+"("+t+") "})),t.style.transform=i}}};function $(t,n){Z(t).forEach((function(t){for(var e in n){var o=_(n[e],t),r=t.target,i=T(o),a=L(r,e,i,t),s=W(X(o,i||T(a)),a),p=z(r,e);F[p](r,e,s,t.transforms,!0)}}))}function K(t,n){return P(k(t.map((function(t){return n.map((function(n){return function(t,n){var e=z(t.target,n.name);if(e){var o=N(n,t),r=o[o.length-1];return{type:e,property:n.name,animatable:t,tweens:o,duration:r.end}}}(t,n)}))}))),(function(t){return!x.und(t)}))}var H=0;function q(t){var n=R(g,t),e=R(m,t),o=function(t,n){var e=[];for(var o in n)x.key(o)&&e.push({name:o,tweens:G(n[o],t)});return e}(e,t),r=Z(t.targets),i=K(r,o),a=function(t,n){var e=t.length,o={};return o.duration=e?Math.max.apply(Math,t.map((function(t){return t.duration}))):n.duration,o}(i,e),s=H;return H++,I(n,{id:s,children:[],animatables:r,animations:i,duration:a.duration})}function U(t){void 0===t&&(t={});var n,e=0,o=null;function r(t){var n=window.Promise&&new Promise((function(t){return o=t}));return t.finished=n,n}var i=q(t);r(i);function a(t,n){n&&n.seek(t)}function s(t){var s=i.duration,p=t;i.progress=v(p/s*100,0,100),i.reversePlayback=p<i.currentTime,n&&function(t){if(i.reversePlayback)for(var o=e;o--;)a(t,n[o]);else for(var r=0;r<e;r++)a(t,n[r])}(p),!i.began&&i.currentTime>0&&(i.began=!0),function(t){for(var n=0,e=i.animations,o=e.length;n<o;){var r=e[n],a=r.animatable,s=r.tweens,p=s.length-1,l=s[p];p&&(l=P(s,(function(n){return t<n.end}))[0]||l);for(var u=v(t-l.start,0,l.duration)/l.duration,c=l.to.strings,f=l.round,d=[],y=l.to.numbers.length,g=void 0,m=0;m<y;m++){var h=void 0,b=l.to.numbers[m],w=l.from.numbers[m]||0;h=w+u*(b-w),f&&(l.isColor&&m>2||(h=Math.round(h*f)/f)),d.push(h)}var x=c.length;if(x){g=c[0];for(var O=0;O<x;O++){c[O];var k=c[O+1],C=d[O];isNaN(C)||(g+=k?C+k:C+" ")}}else g=d[0];F[r.type](a.target,r.property,g,a.transforms),r.currentValue=g,n++}}(p),i.currentTime=v(p,0,s),t>=s&&(i.paused=!0,i.completed||(i.completed=!0,!i.passThrough&&"Promise"in window&&(o(),r(i))))}return i.reset=function(){i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.completed=!1,i.reversePlayback=!1,n=i.children;for(var t=e=n.length;t--;)i.children[t].reset()},i.set=function(t,n){return $(t,n),i},i.seek=function(t){s(t)},i.reset(),i}U.version="3.1.0",U.get=L,U.set=$,U.convertPx=E,U.penner=O;var J={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]};var Q=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","%"],tt=["deg","rad","grad","turn"],nt="measurement",et="color",ot={npm_name:"@kissmybutton/motorcortex-anime",incidents:[{exportable:function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(a,t);var n,e,o,r,i=(n=a,function(){var t,e=c(n);if(d()){var o=c(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return y(this,t)});function a(){return s(this,a),i.apply(this,arguments)}return e=a,(o=[{key:"onGetContext",value:function(){var t={},n={};if(Object.prototype.hasOwnProperty.call(J,this.attributeKey))for(var e=J[this.attributeKey],o=0;o<e.length;o++)Object.prototype.hasOwnProperty.call(this.targetValue,e[o])&&(t[e[o]]=[this.getInitialValue()[e[o]],this.targetValue[e[o]]],n[e[o]]=[this.getScratchValue(),this.targetValue[e[o]]]);else t[this.attributeKey]=[this.getInitialValue(),this.targetValue],n[this.targetValue]=[this.getScratchValue(),this.targetValue];this.target=U(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({autoplay:!1,duration:this.props.duration,easing:"linear",targets:this.element},(this.attrs||{}).attrs||{},{},t))}},{key:"getScratchValue",value:function(){if("transform"===this.attributeKey){for(var t={},n=J[this.attributeKey],e=function(t,n){var e=t.getComputedStyle(n).transform;if(""===e||"none"===e)return{};var o,r,i,a,s,p,l,u,c=e.split("(")[1].split(")")[0].split(",");return o=c,r=Math.atan2(o[1],o[0]),i=Math.pow(o[0],2)+Math.pow(o[1],2),a=Math.pow(o[2],2)+Math.pow(o[3],2),s=Math.sqrt(i),p=(o[0]*o[3]-o[2]*o[1])/s,l=Math.atan2(o[0]*o[2]+o[1]*o[3],i),u=Math.atan2(o[1]*o[3]+o[0]*o[2],a),{rotate:r/(Math.PI/180)+"deg",scaleX:s,scaleY:p,skewX:(1===i?l/(Math.PI/180):0)+"deg",skewY:(1===a?u/(Math.PI/180):0)+"deg",translateX:o[4]+"px",translateY:o[5]+"px"}}(this.context.window,this.element),o=0;o<n.length;o++)Object.prototype.hasOwnProperty.call(e,n[o])?t[n[o]]=e[n[o]]:t[n[o]]=U.get(this.element,n[o]);return t}return U.get(this.element,this.attributeKey)}},{key:"onProgress",value:function(t){return this.target.seek(this.target.duration*t)}}])&&p(e.prototype,o),r&&p(e,r),a}(n.API.MonoIncident),name:"Anime",attributesValidationRules:{animatedAttrs:{type:"object",props:{background:{optional:!0,type:et},backgroundColor:{optional:!0,type:et},backgroundPosition:{optional:!0,type:"string"},backgroundSize:{optional:!0,type:"string"},border:{optional:!0,type:"string"},borderBottom:{optional:!0,type:"string"},borderBottomColor:{optional:!0,type:et},borderBottomLeftRadius:{optional:!0,type:nt,units:Q},borderBottomRightRadius:{optional:!0,type:nt,units:Q},borderBottomWidth:{optional:!0,type:nt,units:Q},borderColor:{optional:!0,type:et},borderEndEndRadius:{optional:!0,type:nt,units:Q},borderEndStartRadius:{optional:!0,type:nt,units:Q},borderImageOutset:{optional:!0,type:nt,units:Q,min:0},borderImageSlice:{optional:!0,type:nt,units:Q,min:0},borderImageWidth:{optional:!0,type:nt,units:Q,min:0},borderLeft:{optional:!0,type:"string"},borderLeftColor:{optional:!0,type:et},borderLeftWidth:{optional:!0,type:nt,units:Q},borderRadius:{optional:!0,type:nt,units:Q},borderRight:{optional:!0,type:"string"},borderRightColor:{optional:!0,type:et},borderRightWidth:{optional:!0,type:nt,units:Q},borderStartEndRadius:{optional:!0,type:nt,units:Q},borderStartStartRadius:{optional:!0,type:nt,units:Q},borderTop:{optional:!0,type:"string"},borderTopColor:{optional:!0,type:et},borderTopLeftRadius:{optional:!0,type:nt,units:Q},borderTopRightRadius:{optional:!0,type:nt,units:Q},borderTopWidth:{optional:!0,type:nt,units:Q},borderWidth:{optional:!0,type:nt,units:Q},bottom:{optional:!0,type:nt,units:Q},boxShadow:{optional:!0,type:"string"},caretColor:{optional:!0,type:et},color:{optional:!0,type:et},columnCount:{optional:!0,type:"number",min:0,integer:!0},columnGap:{optional:!0,type:nt,units:Q},columnRule:{optional:!0,type:"string"},columnRuleColor:{optional:!0,type:et},columnRuleWidth:{optional:!0,type:nt,units:Q},columns:{optional:!0,type:"number",min:0,integer:!0},columnWidth:{optional:!0,type:nt,units:Q},flex:{optional:!0,type:"number",min:0,integer:!0},flexBasis:{optional:!0,type:nt,units:Q},flexGrow:{optional:!0,type:"number",min:0,integer:!0},flexShrink:{optional:!0,type:"number",min:0,integer:!0},font:{optional:!0,type:"string"},fontSize:{optional:!0,type:nt,units:Q},fontSizeAdjust:{optional:!0,type:nt,units:Q,min:0},fontStretch:{optional:!0,type:nt,units:["%"]},fontWeight:{optional:!0,type:"string"},gap:{optional:!0,type:nt,units:Q},gridColumnGap:{optional:!0,type:nt,units:Q},gridGap:{optional:!0,type:nt,units:Q},gridRowGap:{optional:!0,type:nt,units:Q},gridTemplateColumns:{optional:!0,type:nt,units:Q},gridTemplateRows:{optional:!0,type:nt,units:Q},height:{optional:!0,type:nt,units:Q,min:0},inset:{optional:!0,type:nt,units:Q,min:0},insetBlock:{optional:!0,type:nt,units:Q},insetBlockEnd:{optional:!0,type:nt,units:Q},insetBlockStart:{optional:!0,type:nt,units:Q},insetInline:{optional:!0,type:nt,units:Q},insetInlineEnd:{optional:!0,type:nt,units:Q},insetInlineStart:{optional:!0,type:nt,units:Q},left:{optional:!0,type:nt,units:Q},letterSpacing:{optional:!0,type:nt,units:Q},lineClamp:{optional:!0,type:"number",min:0,integer:!0},lineHeight:{optional:!0,type:nt,units:Q,min:0},margin:{optional:!0,type:"string"},marginBottom:{optional:!0,type:nt,units:Q},marginLeft:{optional:!0,type:nt,units:Q},marginRight:{optional:!0,type:nt,units:Q},marginTop:{optional:!0,type:nt,units:Q},maskBorder:{optional:!0,type:nt,units:Q,min:0},maskPosition:{optional:!0,type:"string"},maskSize:{optional:!0,type:"string"},maxHeight:{optional:!0,type:nt,units:Q,min:0},maxWidth:{optional:!0,type:nt,units:Q,min:0},objectPosition:{optional:!0,type:"string"},offset:{optional:!0,type:nt,units:Q},offsetAnchor:{optional:!0,type:"string"},offsetDistance:{optional:!0,type:nt,units:Q},offsetPath:{optional:!0,type:"string"},offsetPosition:{optional:!0,type:"string"},offsetRotate:{optional:!0,type:nt,units:tt},opacity:{optional:!0,type:"number",min:0,max:1},order:{optional:!0,type:"number",integer:!0},outline:{optional:!0,type:"string"},outlineColor:{optional:!0,type:et},outlineOffset:{optional:!0,type:nt,units:Q},outlineRadius:{optional:!0,type:nt,units:Q},outlineRadiusBottomleft:{optional:!0,type:nt,units:Q},outlineRadiusBottomright:{optional:!0,type:nt,units:Q},outlineRadiusTopleft:{optional:!0,type:nt,units:Q},outlineRadiusTopright:{optional:!0,type:nt,units:Q},outlineWidth:{optional:!0,type:nt,units:Q},padding:{optional:!0,type:nt,units:Q},paddingBottom:{optional:!0,type:nt,units:Q},paddingLeft:{optional:!0,type:nt,units:Q},paddingRight:{optional:!0,type:nt,units:Q},paddingTop:{optional:!0,type:nt,units:Q},perspective:{optional:!0,type:nt,units:Q},perspectiveOrigin:{optional:!0,type:"string"},right:{optional:!0,type:nt,units:Q},rotate:{optional:!0,type:nt,units:tt},rowGap:{optional:!0,type:nt,units:Q},scale:{optional:!0,type:"number",min:0},scrollbarColor:{optional:!0,type:et},scrollMargin:{optional:!0,type:nt,units:Q},scrollMarginBlock:{optional:!0,type:nt,units:Q},scrollMarginBlockEnd:{optional:!0,type:nt,units:Q},scrollMarginBlockStart:{optional:!0,type:nt,units:Q},scrollMarginBottom:{optional:!0,type:nt,units:Q},scrollMarginInline:{optional:!0,type:nt,units:Q},scrollMarginInlineEnd:{optional:!0,type:nt,units:Q},scrollMarginInlineStart:{optional:!0,type:nt,units:Q},scrollMarginLeft:{optional:!0,type:nt,units:Q},scrollMarginRight:{optional:!0,type:nt,units:Q},scrollMarginTop:{optional:!0,type:nt,units:Q},scrollPadding:{optional:!0,type:nt,units:Q},scrollPaddingBlock:{optional:!0,type:nt,units:Q},scrollPaddingBlockEnd:{optional:!0,type:nt,units:Q},scrollPaddingBlockStart:{optional:!0,type:nt,units:Q},scrollPaddingBottom:{optional:!0,type:nt,units:Q},scrollPaddingInline:{optional:!0,type:nt,units:Q},scrollPaddingInlineEnd:{optional:!0,type:nt,units:Q},scrollPaddingInlineStart:{optional:!0,type:nt,units:Q},scrollPaddingLeft:{optional:!0,type:nt,units:Q},scrollPaddingRight:{optional:!0,type:nt,units:Q},scrollPaddingTop:{optional:!0,type:nt,units:Q},scrollSnapCoordinate:{optional:!0,type:"string"},scrollSnapDestination:{optional:!0,type:nt,units:Q},shapeImageThreshold:{optional:!0,type:"string"},shapeMargin:{optional:!0,type:nt,units:Q},shapeOutside:{optional:!0,type:"string"},tabSize:{optional:!0,type:"string"},textDecoration:{optional:!0,type:"string"},textDecorationColor:{optional:!0,type:et},textDecorationThickness:{optional:!0,type:nt,units:Q},textEmphasis:{optional:!0,type:"string"},textEmphasisColor:{optional:!0,type:et},textFillColor:{optional:!0,type:et},textIndent:{optional:!0,type:nt,units:Q},textShadow:{optional:!0,type:"string"},textStroke:{optional:!0,type:"string"},textStrokeColor:{optional:!0,type:et},textUnderlineOffset:{optional:!0,type:nt,units:Q},top:{optional:!0,type:nt,units:Q},transform:{optional:!0,type:"object",props:{translateX:{type:nt,units:Q,optional:!0},translateY:{type:nt,units:Q,optional:!0},translateZ:{type:nt,units:Q,optional:!0},rotate:{type:nt,units:tt,optional:!0},rotateX:{type:nt,units:tt,optional:!0},rotateY:{type:nt,units:tt,optional:!0},rotateZ:{type:nt,units:tt,optional:!0},scale:{type:"number",min:0,optional:!0},scaleX:{type:"number",min:0,optional:!0},scaleY:{type:"number",min:0,optional:!0},scaleZ:{type:"number",min:0,optional:!0},skewX:{type:nt,units:tt,optional:!0},skewY:{type:nt,units:tt,optional:!0},perspective:{type:nt,units:Q,optional:!0}}},transformOrigin:{optional:!0,type:"string"},verticalAlign:{optional:!0,type:"string"},visibility:{optional:!0,type:"string"},width:{optional:!0,type:nt,units:Q},wordSpacing:{optional:!0,type:nt,units:Q},zIndex:{optional:!0,type:"number",integer:!0},zoom:{optional:!0,type:nt,units:["%"],min:0}},transformOrigin:{type:"string"},verticalAlign:{type:"string"},visibility:{type:"string"},width:{type:nt,units:Q},wordSpacing:{type:nt,units:Q},zIndex:{type:"number",integer:!0},zoom:{type:nt,units:["%"],min:0}}}}],compositeAttributes:J};function rt(t){return t&&t.default||t}var it=rt(Object.freeze({__proto__:null,default:ot})),at=n.loadPlugin(it),st={size:{optional:!0,type:"number",min:0},textColor:{optional:!0,type:"color"},cursorColor:{optional:!0,type:"array",min:3,max:3,items:{optional:!0,type:"number",min:0,max:255}},title:{optional:!1,type:"string"},erase:{optional:!0,type:"number",min:0},eraseAll:{type:"boolean",optional:!0},delayIfEraseAll:{optional:!0,type:"number",min:0},blinking:{type:"boolean",optional:!0},blinkingDuration:{optional:!0,type:"number",min:0},blinkDelay:{optional:!0,type:"number",min:0},overlayColor:{optional:!0,type:"array",min:2,items:{optional:!0,type:"color"}}},pt={npm_name:"@kissmybutton/motorcortex-typewriting",incidents:[{exportable:function(t){function s(){return e(this,s),a(this,r(s).apply(this,arguments))}var p,l,u;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(s,t),p=s,(l=[{key:"buildTree",value:function(){for(var t=this.attrs.title.split(""),e="",o=0;o<t.length;o++)e+="<span class='letter letter".concat(o+1,"'>").concat(t[o],"</span>");var r=new n.Clip({css:this.css,html:' <div class="textContainer" >'.concat(e," </div>"),selector:".onemore"}),i=new at.Anime({animatedAttrs:{borderRight:"2px solid rgba(".concat(this.attrs.cursorColor[0],",").concat(this.attrs.cursorColor[1],",").concat(this.attrs.cursorColor[2],",0)")},initialValues:{borderRight:"2px solid rgba(".concat(this.attrs.cursorColor[0],",").concat(this.attrs.cursorColor[1],",").concat(this.attrs.cursorColor[2],",1)")},attrs:{easing:"linear"}},{duration:this.attrs.blinkingDuration,selector:".onemore",repeats:10,delay:this.attrs.blinkDelay});this.attrs.blinking&&this.addIncident(i,0),this.addIncident(r,0);for(var a=0,s=0;s<=t.length;s++){a+=12*this.attrs.size;var p=new at.Anime({animatedAttrs:{width:"".concat(a,"px")},attrs:{easing:"linear"}},{duration:50,selector:".onemore",delay:50});this.addIncident(p,50*s)}for(var l=0;l<=this.attrs.erase;l++){a-=12*this.attrs.size;var u=new at.Anime({animatedAttrs:{width:"".concat(a,"px")},attrs:{easing:"linear"}},{duration:50,selector:".onemore",delay:50});this.addIncident(u,50*t.length+100+100*(l+1))}if(this.attrs.eraseAll)for(var c=0;c<=t.length;c++){a-=12*this.attrs.size;var f=new at.Anime({animatedAttrs:{width:"".concat(a,"px")},attrs:{easing:"linear"}},{duration:50,selector:".onemore",delay:50});this.addIncident(f,50*t.length+100+100*(this.attrs.erase+1)+100*(c+1)+this.attrs.delayIfEraseAll)}}},{key:"html",get:function(){return'\n     <div class="wrapper">\n      <div class="onemore">\n      \n      </div>\n    </div>'}},{key:"css",get:function(){return"\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      \n    }\n    .textContainer{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      padding-right: 2px;\n      width: ".concat(12*this.attrs.size*this.attrs.title.length,"px;\n     \n    }\n    \n    .letter{\n      font-size: ").concat(14*this.attrs.size,"px;\n      position: relative;\n      text-align: center;\n      width: ").concat(12*this.attrs.size,"px;\n      display: flex;\n      justify-content: center;\n      flex: 1 0;\n      color: ").concat(this.attrs.textColor,"\n    }\n    .onemore{\n      white-space: nowrap;\n      overflow: hidden;\n      align-items: center;\n      padding-right: 2px;\n      width: 0px;\n\n    }\n\n  ")}}])&&o(p.prototype,l),u&&o(p,u),s}(n.API.Clip),name:"TypeWriting",attributesValidationRules:rt(Object.freeze({__proto__:null,TypeWriting:st})).TypeWriting}]},lt=pt.npm_name,ut=pt.incidents;t.default=pt,t.incidents=ut,t.npm_name=lt,Object.defineProperty(t,"__esModule",{value:!0})}));
