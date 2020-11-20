!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@kissmybutton/motorcortex")):"function"==typeof define&&define.amd?define(["exports","@kissmybutton/motorcortex"],n):n((t=t||self)["@kissmybutton/motorcortex-typewriting"]={},t.MotorCortex)}(this,(function(t,n){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function p(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,n,e){return n&&p(t.prototype,n),e&&p(t,e),t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function f(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&d(t,n)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,n){return(d=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function m(t){return function(){var n,e=y(t);if(g()){var o=y(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return h(this,n)}}n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var b={},v={duration:1e3,round:0},w=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],x={CSS:{}};function P(t,n,e){return Math.min(Math.max(t,n),e)}function O(t,n){return t.indexOf(n)>-1}var k={arr:function(t){return Array.isArray(t)},obj:function(t){return O(Object.prototype.toString.call(t),"Object")},pth:function(t){return k.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||k.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return k.hex(t)||k.rgb(t)||k.hsl(t)},key:function(t){return!b.hasOwnProperty(t)&&!v.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}},C={linear:function(){return function(t){return t}}};function j(t,n){for(var e=t.length,o=arguments.length>=2?arguments[1]:void 0,r=[],i=0;i<e;i++)if(i in t){var a=t[i];n.call(o,a,i,t)&&r.push(a)}return r}function S(t){return t.reduce((function(t,n){return t.concat(k.arr(n)?S(n):n)}),[])}function I(t){return k.arr(t)?t:(k.str(t)&&(t=function(t){try{return document.querySelectorAll(t)}catch(t){return}}(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function M(t,n){return t.some((function(t){return t===n}))}function R(t){var n={};for(var e in t)n[e]=t[e];return n}function T(t,n){var e=R(t);for(var o in t)e[o]=n.hasOwnProperty(o)?n[o]:t[o];return e}function E(t,n){var e=R(t);for(var o in n)e[o]=k.und(t[o])?n[o]:t[o];return e}function _(t){return k.rgb(t)?(e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n=t))?"rgba("+e[1]+",1)":n:k.hex(t)?function(t){var n=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,n,e,o){return n+n+e+e+o+o})),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+",1)"}(t):k.hsl(t)?function(t){var n,e,o,r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,s=parseInt(r[3],10)/100,p=r[4]||1;function l(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t}if(0==a)n=e=o=s;else{var u=s<.5?s*(1+a):s+a-s*a,c=2*s-u;n=l(c,u,i+1/3),e=l(c,u,i),o=l(c,u,i-1/3)}return"rgba("+255*n+","+255*e+","+255*o+","+p+")"}(t):void 0;var n,e}function A(t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(n)return n[1]}function B(t,n){return k.fnc(t)?t(n.target,n.id,n.total):t}function L(t,n){return t.getAttribute(n)}function z(t,n,e){if(M([e,"deg","rad","turn"],A(n)))return n;var o=x.CSS[n+e];if(!k.und(o))return o;var r=document.createElement(t.tagName),i=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;i.appendChild(r),r.style.position="absolute",r.style.width=100+e;var a=100/r.offsetWidth;i.removeChild(r);var s=a*parseFloat(n);return x.CSS[n+e]=s,s}function V(t,n,e){if(n in t.style){var o=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=t.style[n]||getComputedStyle(t).getPropertyValue(o)||"0";return e?z(t,r,e):r}}function W(t,n){return k.dom(t)&&!k.inp(t)&&(L(t,n)||k.svg(t)&&t[n])?"attribute":k.dom(t)&&M(w,n)?"transform":k.dom(t)&&"transform"!==n&&V(t,n)?"css":null!=t[n]?"object":void 0}function X(t){if(k.dom(t)){for(var n,e=t.style.transform||"",o=/(\w+)\(([^)]*)\)/g,r=new Map;n=o.exec(e);)r.set(n[1],n[2]);return r}}function Y(t,n,e,o){var r=O(n,"scale")?1:0+function(t){return O(t,"translate")||"perspective"===t?"px":O(t,"rotate")||O(t,"skew")?"deg":void 0}(n),i=X(t).get(n)||r;return e&&(e.transforms.list.set(n,i),e.transforms.last=n),o?z(t,i,o):i}function D(t,n,e,o){switch(W(t,n)){case"transform":return Y(t,n,o,e);case"css":return V(t,n,e);case"attribute":return L(t,n);default:return t[n]||0}}function G(t,n){var e=/^(\*=|\+=|-=)/.exec(t);if(!e)return t;var o=A(t)||0,r=parseFloat(n),i=parseFloat(t.replace(e[0],""));switch(e[0][0]){case"+":return r+i+o;case"-":return r-i+o;case"*":return r*i+o}}function N(t,n){if(k.col(t))return _(t);if(/\s/g.test(t))return t;var e=A(t),o=e?t.substr(0,t.length-e.length):t;return n?o+n:o}function Z(t,n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,o=N(k.pth(t)?t.totalLength:t,n)+"";return{original:o,numbers:o.match(e)?o.match(e).map(Number):[0],strings:k.str(t)||n?o.split(e):[]}}function H(t){var n=function(t){return j(t?S(k.arr(t)?t.map(I):I(t)):[],(function(t,n,e){return e.indexOf(t)===n}))}(t);return n.map((function(t,e){return{target:t,id:e,total:n.length,transforms:{list:X(t)}}}))}function F(t,n){var e=R(n);if(k.arr(t)){var o=t.length;2===o&&!k.obj(t[0])?t={value:t}:k.fnc(n.duration)||(e.duration=n.duration/o)}return(k.arr(t)?t:[t]).map((function(t,n){return k.obj(t)&&!k.pth(t)?t:{value:t}})).map((function(t){return E(t,e)}))}function $(t,n){var e;return t.tweens.map((function(o){var r=function(t,n){var e={};for(var o in t){var r=B(t[o],n);k.arr(r)&&1===(r=r.map((function(t){return B(t,n)}))).length&&(r=r[0]),e[o]=r}return e.duration=parseFloat(e.duration),e}(o,n),i=r.value,a=k.arr(i)?i[1]:i,s=A(a),p=D(n.target,t.name,s,n),l=e?e.to.original:p,u=k.arr(i)?i[0]:l,c=A(u)||A(p),f=s||c;return k.und(a)&&(a=l),r.from=Z(u,f),r.to=Z(G(a,u),f),r.start=e?e.end:0,r.end=r.start+r.duration,r.isPath=!1,r.isColor=k.col(r.from.original),r.isColor&&(r.round=1),e=r,r}))}var K={css:function(t,n,e){return t.style[n]=e},attribute:function(t,n,e){return t.setAttribute(n,e)},object:function(t,n,e){return t[n]=e},transform:function(t,n,e,o,r){if(o.list.set(n,e),n===o.last||r){var i="";o.list.forEach((function(t,n){i+=n+"("+t+") "})),t.style.transform=i}}};function q(t,n){H(t).forEach((function(t){for(var e in n){var o=B(n[e],t),r=t.target,i=A(o),a=D(r,e,i,t),s=G(N(o,i||A(a)),a),p=W(r,e);K[p](r,e,s,t.transforms,!0)}}))}function U(t,n){return j(S(t.map((function(t){return n.map((function(n){return function(t,n){var e=W(t.target,n.name);if(e){var o=$(n,t),r=o[o.length-1];return{type:e,property:n.name,animatable:t,tweens:o,duration:r.end}}}(t,n)}))}))),(function(t){return!k.und(t)}))}var J=0;function Q(t){var n=T(b,t),e=T(v,t),o=function(t,n){var e=[];for(var o in n)k.key(o)&&e.push({name:o,tweens:F(n[o],t)});return e}(e,t),r=H(t.targets),i=U(r,o),a=function(t,n){var e=t.length,o={};return o.duration=e?Math.max.apply(Math,t.map((function(t){return t.duration}))):n.duration,o}(i,e),s=J;return J++,E(n,{id:s,children:[],animatables:r,animations:i,duration:a.duration})}function tt(t){void 0===t&&(t={});var n,e=0,o=null;function r(t){var n=window.Promise&&new Promise((function(t){return o=t}));return t.finished=n,n}var i=Q(t);r(i);function a(t,n){n&&n.seek(t)}function s(t){var s=i.duration,p=t;i.progress=P(p/s*100,0,100),i.reversePlayback=p<i.currentTime,n&&function(t){if(i.reversePlayback)for(var o=e;o--;)a(t,n[o]);else for(var r=0;r<e;r++)a(t,n[r])}(p),!i.began&&i.currentTime>0&&(i.began=!0),function(t){for(var n=0,e=i.animations,o=e.length;n<o;){var r=e[n],a=r.animatable,s=r.tweens,p=s.length-1,l=s[p];p&&(l=j(s,(function(n){return t<n.end}))[0]||l);for(var u=P(t-l.start,0,l.duration)/l.duration,c=l.to.strings,f=l.round,y=[],d=l.to.numbers.length,g=void 0,h=0;h<d;h++){var m=void 0,b=l.to.numbers[h],v=l.from.numbers[h]||0;m=v+u*(b-v),f&&(l.isColor&&h>2||(m=Math.round(m*f)/f)),y.push(m)}var w=c.length;if(w){g=c[0];for(var x=0;x<w;x++){c[x];var O=c[x+1],k=y[x];isNaN(k)||(g+=O?k+O:k+" ")}}else g=y[0];K[r.type](a.target,r.property,g,a.transforms),r.currentValue=g,n++}}(p),i.currentTime=P(p,0,s),t>=s&&(i.paused=!0,i.completed||(i.completed=!0,!i.passThrough&&"Promise"in window&&(o(),r(i))))}return i.reset=function(){i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.completed=!1,i.reversePlayback=!1,n=i.children;for(var t=e=n.length;t--;)i.children[t].reset()},i.set=function(t,n){return q(t,n),i},i.seek=function(t){s(t)},i.reset(),i}function nt(t,n){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))}function et(t){for(var n,e=t.points,o=0,r=0;r<e.numberOfItems;r++){var i=e.getItem(r);r>0&&(o+=nt(n,i)),n=i}return o}function ot(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*L(t,"r")}(t);case"rect":return function(t){return 2*L(t,"width")+2*L(t,"height")}(t);case"line":return function(t){return nt({x:L(t,"x1"),y:L(t,"y1")},{x:L(t,"x2"),y:L(t,"y2")})}(t);case"polyline":return et(t);case"polygon":return function(t){var n=t.points;return et(t)+nt(n.getItem(n.numberOfItems-1),n.getItem(0))}(t)}}function rt(t,n){var e=n||{},o=e.el||function(t){for(var n=t.parentNode;k.svg(n)&&k.svg(n.parentNode);)n=n.parentNode;return n}(t),r=o.getBoundingClientRect(),i=L(o,"viewBox"),a=r.width,s=r.height,p=e.viewBox||(i?i.split(" "):[0,0,a,s]);return{el:o,viewBox:p,x:p[0]/1,y:p[1]/1,w:a,h:s,vW:p[2],vH:p[3]}}tt.version="3.1.0",tt.get=D,tt.set=q,tt.convertPx=z,tt.penner=C,tt.path=function(t){return{el:t,svg:rt(t),totalLength:ot(t),deltaCorrections:{x:4,y:5}}},tt.getPathProgress=function(t,n,e){function o(e){void 0===e&&(e=0);var o=n*t.totalLength,r=o+e>=1?o+e:0;return t.el.getPointAtLength(r)}var r=rt(t.el,t.svg),i=o(),a=o(-1),s=o(1),p=e?1:r.w/r.vW,l=e?1:r.h/r.vH;return{x:(i.x-r.x)*p,y:(i.y-r.y)*l,angle:180*Math.atan2(s.y-a.y,s.x-a.x)/Math.PI}};var it=tt,at={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]};var st=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","%"],pt=["deg","rad","grad","turn"],lt="measurement",ut="color",ct={npm_name:"@kissmybutton/motorcortex-anime",incidents:[{exportable:function(t){f(e,t);var n=m(e);function e(){return s(this,e),n.apply(this,arguments)}return l(e,[{key:"onGetContext",value:function(){var t={};if(Object.prototype.hasOwnProperty.call(at,this.attributeKey))for(var n=at[this.attributeKey],e=0;e<n.length;e++)Object.prototype.hasOwnProperty.call(this.targetValue,n[e])&&(t[n[e]]=[this.getInitialValue()[n[e]],this.targetValue[n[e]]]);else t[this.attributeKey]=[this.getInitialValue(),this.targetValue];this.target=it(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){u(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({autoplay:!1,duration:this.props.duration,easing:"linear",targets:this.element},(this.attrs||{}).attrs||{},{},t))}},{key:"getScratchValue",value:function(){if("transform"===this.attributeKey){for(var t={},n=at[this.attributeKey],e=function(t,n){var e=t.getComputedStyle(n).transform;if(""===e||"none"===e)return{};var o,r,i,a,s,p,l,u,c=e.split("(")[1].split(")")[0].split(",");return o=c,r=Math.atan2(o[1],o[0]),i=Math.pow(o[0],2)+Math.pow(o[1],2),a=Math.pow(o[2],2)+Math.pow(o[3],2),s=Math.sqrt(i),p=(o[0]*o[3]-o[2]*o[1])/s,l=Math.atan2(o[0]*o[2]+o[1]*o[3],i),u=Math.atan2(o[1]*o[3]+o[0]*o[2],a),{rotate:r/(Math.PI/180)+"deg",scaleX:s,scaleY:p,skewX:(1===i?l/(Math.PI/180):0)+"deg",skewY:(1===a?u/(Math.PI/180):0)+"deg",translateX:o[4]+"px",translateY:o[5]+"px"}}(this.context.window,this.element),o=0;o<n.length;o++)Object.prototype.hasOwnProperty.call(e,n[o])?t[n[o]]=e[n[o]]:t[n[o]]=it.get(this.element,n[o]);return t}return it.get(this.element,this.attributeKey)}},{key:"onProgress",value:function(t){return this.target.seek(this.target.duration*t)}}]),e}(n.Effect),name:"Anime",attributesValidationRules:{animatedAttrs:{type:"object",props:{background:{optional:!0,type:ut},backgroundColor:{optional:!0,type:ut},backgroundPosition:{optional:!0,type:"string"},backgroundSize:{optional:!0,type:"string"},border:{optional:!0,type:"string"},borderBottom:{optional:!0,type:"string"},borderBottomColor:{optional:!0,type:ut},borderBottomLeftRadius:{optional:!0,type:lt,units:st},borderBottomRightRadius:{optional:!0,type:lt,units:st},borderBottomWidth:{optional:!0,type:lt,units:st},borderColor:{optional:!0,type:ut},borderEndEndRadius:{optional:!0,type:lt,units:st},borderEndStartRadius:{optional:!0,type:lt,units:st},borderImageOutset:{optional:!0,type:lt,units:st,min:0},borderImageSlice:{optional:!0,type:lt,units:st,min:0},borderImageWidth:{optional:!0,type:lt,units:st,min:0},borderLeft:{optional:!0,type:"string"},borderLeftColor:{optional:!0,type:ut},borderLeftWidth:{optional:!0,type:lt,units:st},borderRadius:{optional:!0,type:lt,units:st},borderRight:{optional:!0,type:"string"},borderRightColor:{optional:!0,type:ut},borderRightWidth:{optional:!0,type:lt,units:st},borderStartEndRadius:{optional:!0,type:lt,units:st},borderStartStartRadius:{optional:!0,type:lt,units:st},borderTop:{optional:!0,type:"string"},borderTopColor:{optional:!0,type:ut},borderTopLeftRadius:{optional:!0,type:lt,units:st},borderTopRightRadius:{optional:!0,type:lt,units:st},borderTopWidth:{optional:!0,type:lt,units:st},borderWidth:{optional:!0,type:lt,units:st},bottom:{optional:!0,type:lt,units:st},boxShadow:{optional:!0,type:"string"},caretColor:{optional:!0,type:ut},color:{optional:!0,type:ut},columnCount:{optional:!0,type:"number",min:0,integer:!0},columnGap:{optional:!0,type:lt,units:st},columnRule:{optional:!0,type:"string"},columnRuleColor:{optional:!0,type:ut},columnRuleWidth:{optional:!0,type:lt,units:st},columns:{optional:!0,type:"number",min:0,integer:!0},columnWidth:{optional:!0,type:lt,units:st},flex:{optional:!0,type:"number",min:0,integer:!0},flexBasis:{optional:!0,type:lt,units:st},flexGrow:{optional:!0,type:"number",min:0,integer:!0},flexShrink:{optional:!0,type:"number",min:0,integer:!0},font:{optional:!0,type:"string"},fontSize:{optional:!0,type:lt,units:st},fontSizeAdjust:{optional:!0,type:lt,units:st,min:0},fontStretch:{optional:!0,type:lt,units:["%"]},fontWeight:{optional:!0,type:"string"},gap:{optional:!0,type:lt,units:st},gridColumnGap:{optional:!0,type:lt,units:st},gridGap:{optional:!0,type:lt,units:st},gridRowGap:{optional:!0,type:lt,units:st},gridTemplateColumns:{optional:!0,type:lt,units:st},gridTemplateRows:{optional:!0,type:lt,units:st},height:{optional:!0,type:lt,units:st,min:0},inset:{optional:!0,type:lt,units:st,min:0},insetBlock:{optional:!0,type:lt,units:st},insetBlockEnd:{optional:!0,type:lt,units:st},insetBlockStart:{optional:!0,type:lt,units:st},insetInline:{optional:!0,type:lt,units:st},insetInlineEnd:{optional:!0,type:lt,units:st},insetInlineStart:{optional:!0,type:lt,units:st},left:{optional:!0,type:lt,units:st},letterSpacing:{optional:!0,type:lt,units:st},lineClamp:{optional:!0,type:"number",min:0,integer:!0},lineHeight:{optional:!0,type:lt,units:st,min:0},margin:{optional:!0,type:"string"},marginBottom:{optional:!0,type:lt,units:st},marginLeft:{optional:!0,type:lt,units:st},marginRight:{optional:!0,type:lt,units:st},marginTop:{optional:!0,type:lt,units:st},maskBorder:{optional:!0,type:lt,units:st,min:0},maskPosition:{optional:!0,type:"string"},maskSize:{optional:!0,type:"string"},maxHeight:{optional:!0,type:lt,units:st,min:0},maxWidth:{optional:!0,type:lt,units:st,min:0},objectPosition:{optional:!0,type:"string"},offset:{optional:!0,type:lt,units:st},offsetAnchor:{optional:!0,type:"string"},offsetDistance:{optional:!0,type:lt,units:st},offsetPath:{optional:!0,type:"string"},offsetPosition:{optional:!0,type:"string"},offsetRotate:{optional:!0,type:lt,units:pt},opacity:{optional:!0,type:"number",min:0,max:1},order:{optional:!0,type:"number",integer:!0},outline:{optional:!0,type:"string"},outlineColor:{optional:!0,type:ut},outlineOffset:{optional:!0,type:lt,units:st},outlineRadius:{optional:!0,type:lt,units:st},outlineRadiusBottomleft:{optional:!0,type:lt,units:st},outlineRadiusBottomright:{optional:!0,type:lt,units:st},outlineRadiusTopleft:{optional:!0,type:lt,units:st},outlineRadiusTopright:{optional:!0,type:lt,units:st},outlineWidth:{optional:!0,type:lt,units:st},padding:{optional:!0,type:lt,units:st},paddingBottom:{optional:!0,type:lt,units:st},paddingLeft:{optional:!0,type:lt,units:st},paddingRight:{optional:!0,type:lt,units:st},paddingTop:{optional:!0,type:lt,units:st},perspective:{optional:!0,type:lt,units:st},perspectiveOrigin:{optional:!0,type:"string"},right:{optional:!0,type:lt,units:st},rotate:{optional:!0,type:lt,units:pt},rowGap:{optional:!0,type:lt,units:st},scale:{optional:!0,type:"number",min:0},scrollbarColor:{optional:!0,type:ut},scrollMargin:{optional:!0,type:lt,units:st},scrollMarginBlock:{optional:!0,type:lt,units:st},scrollMarginBlockEnd:{optional:!0,type:lt,units:st},scrollMarginBlockStart:{optional:!0,type:lt,units:st},scrollMarginBottom:{optional:!0,type:lt,units:st},scrollMarginInline:{optional:!0,type:lt,units:st},scrollMarginInlineEnd:{optional:!0,type:lt,units:st},scrollMarginInlineStart:{optional:!0,type:lt,units:st},scrollMarginLeft:{optional:!0,type:lt,units:st},scrollMarginRight:{optional:!0,type:lt,units:st},scrollMarginTop:{optional:!0,type:lt,units:st},scrollPadding:{optional:!0,type:lt,units:st},scrollPaddingBlock:{optional:!0,type:lt,units:st},scrollPaddingBlockEnd:{optional:!0,type:lt,units:st},scrollPaddingBlockStart:{optional:!0,type:lt,units:st},scrollPaddingBottom:{optional:!0,type:lt,units:st},scrollPaddingInline:{optional:!0,type:lt,units:st},scrollPaddingInlineEnd:{optional:!0,type:lt,units:st},scrollPaddingInlineStart:{optional:!0,type:lt,units:st},scrollPaddingLeft:{optional:!0,type:lt,units:st},scrollPaddingRight:{optional:!0,type:lt,units:st},scrollPaddingTop:{optional:!0,type:lt,units:st},scrollSnapCoordinate:{optional:!0,type:"string"},scrollSnapDestination:{optional:!0,type:lt,units:st},shapeImageThreshold:{optional:!0,type:"string"},shapeMargin:{optional:!0,type:lt,units:st},shapeOutside:{optional:!0,type:"string"},tabSize:{optional:!0,type:"string"},textDecoration:{optional:!0,type:"string"},textDecorationColor:{optional:!0,type:ut},textDecorationThickness:{optional:!0,type:lt,units:st},textEmphasis:{optional:!0,type:"string"},textEmphasisColor:{optional:!0,type:ut},textFillColor:{optional:!0,type:ut},textIndent:{optional:!0,type:lt,units:st},textShadow:{optional:!0,type:"string"},textStroke:{optional:!0,type:"string"},textStrokeColor:{optional:!0,type:ut},textUnderlineOffset:{optional:!0,type:lt,units:st},top:{optional:!0,type:lt,units:st},transform:{optional:!0,type:"object",props:{translateX:{type:lt,units:st,optional:!0},translateY:{type:lt,units:st,optional:!0},translateZ:{type:lt,units:st,optional:!0},rotate:{type:lt,units:pt,optional:!0},rotateX:{type:lt,units:pt,optional:!0},rotateY:{type:lt,units:pt,optional:!0},rotateZ:{type:lt,units:pt,optional:!0},scale:{type:"number",min:0,optional:!0},scaleX:{type:"number",min:0,optional:!0},scaleY:{type:"number",min:0,optional:!0},scaleZ:{type:"number",min:0,optional:!0},skewX:{type:lt,units:pt,optional:!0},skewY:{type:lt,units:pt,optional:!0},perspective:{type:lt,units:st,optional:!0}}},transformOrigin:{optional:!0,type:"string"},verticalAlign:{optional:!0,type:"string"},visibility:{optional:!0,type:"string"},width:{optional:!0,type:lt,units:st},wordSpacing:{optional:!0,type:lt,units:st},zIndex:{optional:!0,type:"number",integer:!0},zoom:{optional:!0,type:lt,units:["%"],min:0}},transformOrigin:{type:"string"},verticalAlign:{type:"string"},visibility:{type:"string"},width:{type:lt,units:st},wordSpacing:{type:lt,units:st},zIndex:{type:"number",integer:!0},zoom:{type:lt,units:["%"],min:0}}}},{exportable:function(t){f(e,t);var n=m(e);function e(){return s(this,e),n.apply(this,arguments)}return l(e,[{key:"onGetContext",value:function(){var t=this.context.getElements(this.targetValue.pathElement)[0];this.path=it.path(t),this.isPathTargetInsideSVG=this.element instanceof SVGElement}},{key:"onProgress",value:function(t){var n=it.getPathProgress(this.path,t,this.isPathTargetInsideSVG),e="\n            translateX(".concat(n.x,"px) \n            translateY(").concat(n.y,"px) \n            rotate(").concat(n.angle,"deg)\n        ");this.element.style.transform=e}}]),e}(n.Effect),name:"MotionPath",attributesValidationRules:{animatedAttrs:{type:"object",props:{positionOn:{type:"object",props:{pathElement:{type:"string"}}}}}}}],compositeAttributes:at};function ft(t){return t&&t.default||t}var yt=ft(Object.freeze({__proto__:null,default:ct})),dt=n.loadPlugin(yt),gt={size:{optional:!0,type:"number",min:0},textColor:{optional:!0,type:"color"},cursorColor:{optional:!0,type:"array",min:3,max:3,items:{optional:!0,type:"number",min:0,max:255}},title:{optional:!1,type:"string"},erase:{optional:!0,type:"number",min:0},eraseAll:{type:"boolean",optional:!0},delayIfEraseAll:{optional:!0,type:"number",min:0},blinking:{type:"boolean",optional:!0},blinkingDuration:{optional:!0,type:"number",min:0},blinkDelay:{optional:!0,type:"number",min:0},overlayColor:{optional:!0,type:"array",min:2,items:{optional:!0,type:"color"}}},ht={npm_name:"@kissmybutton/motorcortex-typewriting",incidents:[{exportable:function(t){function s(){return e(this,s),a(this,r(s).apply(this,arguments))}var p,l,u;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(s,t),p=s,(l=[{key:"buildTree",value:function(){for(var t=this.attrs.title.split(""),e="",o=0;o<t.length;o++)e+="<span class='letter letter".concat(o+1,"'>").concat(t[o],"</span>");var r=new n.HTMLClip({css:this.css,html:' <div class="textContainer" >'.concat(e," </div>"),selector:".onemore"}),i=new dt.Anime({animatedAttrs:{borderRight:"2px solid rgba(".concat(this.attrs.cursorColor[0],",").concat(this.attrs.cursorColor[1],",").concat(this.attrs.cursorColor[2],",0)")},initialValues:{borderRight:"2px solid rgba(".concat(this.attrs.cursorColor[0],",").concat(this.attrs.cursorColor[1],",").concat(this.attrs.cursorColor[2],",1)")},attrs:{easing:"linear"}},{duration:this.attrs.blinkingDuration,selector:".onemore",repeats:10,delay:this.attrs.blinkDelay});this.attrs.blinking&&this.addIncident(i,0),this.addIncident(r,0);for(var a=0,s=0;s<=t.length;s++){a+=12*this.attrs.size;var p=new dt.Anime({animatedAttrs:{width:"".concat(a,"px")},attrs:{easing:"linear"}},{duration:50,selector:".onemore",delay:50});this.addIncident(p,50*s)}for(var l=0;l<=this.attrs.erase;l++){a-=12*this.attrs.size;var u=new dt.Anime({animatedAttrs:{width:"".concat(a,"px")},attrs:{easing:"linear"}},{duration:50,selector:".onemore",delay:50});this.addIncident(u,50*t.length+100+100*(l+1))}if(this.attrs.eraseAll)for(var c=0;c<=t.length;c++){a-=12*this.attrs.size;var f=new dt.Anime({animatedAttrs:{width:"".concat(a,"px")},attrs:{easing:"linear"}},{duration:50,selector:".onemore",delay:50});this.addIncident(f,50*t.length+100+100*(this.attrs.erase+1)+100*(c+1)+this.attrs.delayIfEraseAll)}}},{key:"html",get:function(){return'\n     <div class="wrapper">\n      <div class="onemore">\n      \n      </div>\n    </div>'}},{key:"css",get:function(){return"\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      \n    }\n    .textContainer{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      padding-right: 2px;\n      width: ".concat(12*this.attrs.size*this.attrs.title.length,"px;\n     \n    }\n    \n    .letter{\n      font-size: ").concat(14*this.attrs.size,"px;\n      position: relative;\n      text-align: center;\n      width: ").concat(12*this.attrs.size,"px;\n      display: flex;\n      left:5px\n      justify-content: center;\n      flex: 1 0;\n      color: ").concat(this.attrs.textColor,"\n    }\n    .onemore{\n      white-space: nowrap;\n      overflow: hidden;\n      align-items: center;\n      padding-right: 2px;\n      width: 0px;\n      height: ").concat(16*this.attrs.size,"px\n    }\n\n  ")}}])&&o(p.prototype,l),u&&o(p,u),s}(n.HTMLClip),name:"TypeWriting",attributesValidationRules:ft(Object.freeze({__proto__:null,TypeWriting:gt})).TypeWriting}]},mt=ht.npm_name,bt=ht.incidents;t.default=ht,t.incidents=bt,t.npm_name=mt,Object.defineProperty(t,"__esModule",{value:!0})}));
