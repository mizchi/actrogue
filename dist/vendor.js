(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.3";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?-1!=n.indexOf(t):E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2);return w.map(n,function(n){return(w.isFunction(t)?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t){return w.isEmpty(t)?[]:w.filter(n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=F(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return k(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i};var I=function(){};w.bind=function(n,t){var r,e;if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));if(!w.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));I.prototype=n.prototype;var u=new I;I.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},w.bindAll=function(n){var t=o.call(arguments,1);return 0==t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=S(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&S(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return S(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),w.isFunction=function(n){return"function"==typeof n},w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return void 0===n},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+(0|Math.random()*(t-n+1))};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};T.unescape=w.invert(T.escape);var M={escape:RegExp("["+w.keys(T.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(T.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(M[n],function(t){return T[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=""+ ++N;return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){r=w.defaults({},r,w.templateSettings);var e=RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(D,function(n){return"\\"+B[n]}),r&&(i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(i+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),a&&(i+="';\n"+a+"\n__p+='"),u=o+t.length,t}),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=Function(r.variable||"obj","_",i)}catch(o){throw o.source=i,o}if(t)return a(t,w);var c=function(n){return a.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+i+"}",c},w.chain=function(n){return w(n).chain()};var z=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
// Backbone.js 0.9.9

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var k=this,y=k.Backbone,h=[],z=h.push,r=h.slice,A=h.splice,g;g="undefined"!==typeof exports?exports:k.Backbone={};g.VERSION="0.9.9";var e=k._;!e&&"undefined"!==typeof require&&(e=require("underscore"));g.$=k.jQuery||k.Zepto||k.ender;g.noConflict=function(){k.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var s=/\s+/,n=function(a,b,c,d){if(!c)return!0;if("object"===typeof c)for(var f in c)a[b].apply(a,[f,c[f]].concat(d));else if(s.test(c)){c=c.split(s);f=0;for(var e=c.length;f<
e;f++)a[b].apply(a,[c[f]].concat(d))}else return!0},t=function(a,b,c){var d,a=-1,f=b.length;switch(c.length){case 0:for(;++a<f;)(d=b[a]).callback.call(d.ctx);break;case 1:for(;++a<f;)(d=b[a]).callback.call(d.ctx,c[0]);break;case 2:for(;++a<f;)(d=b[a]).callback.call(d.ctx,c[0],c[1]);break;case 3:for(;++a<f;)(d=b[a]).callback.call(d.ctx,c[0],c[1],c[2]);break;default:for(;++a<f;)(d=b[a]).callback.apply(d.ctx,c)}},h=g.Events={on:function(a,b,c){if(!n(this,"on",a,[b,c])||!b)return this;this._events||(this._events=
{});(this._events[a]||(this._events[a]=[])).push({callback:b,context:c,ctx:c||this});return this},once:function(a,b,c){if(!n(this,"once",a,[b,c])||!b)return this;var d=this,f=e.once(function(){d.off(a,f);b.apply(this,arguments)});f._callback=b;this.on(a,f,c);return this},off:function(a,b,c){var d,f,l,g,i,m,h,j;if(!this._events||!n(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;g=a?[a]:e.keys(this._events);i=0;for(m=g.length;i<m;i++)if(a=g[i],d=this._events[a]){l=[];if(b||
c){h=0;for(j=d.length;h<j;h++)f=d[h],(b&&b!==(f.callback._callback||f.callback)||c&&c!==f.context)&&l.push(f)}this._events[a]=l}return this},trigger:function(a){if(!this._events)return this;var b=r.call(arguments,1);if(!n(this,"trigger",a,b))return this;var c=this._events[a],d=this._events.all;c&&t(this,c,b);d&&t(this,d,arguments);return this},listenTo:function(a,b,c){var d=this._listeners||(this._listeners={}),f=a._listenerId||(a._listenerId=e.uniqueId("l"));d[f]=a;a.on(b,c||this,this);return this},
stopListening:function(a,b,c){var d=this._listeners;if(d){if(a)a.off(b,c,this),!b&&!c&&delete d[a._listenerId];else{for(var f in d)d[f].off(null,null,this);this._listeners={}}return this}}};h.bind=h.on;h.unbind=h.off;e.extend(g,h);var o=g.Model=function(a,b){var c,d=a||{};this.cid=e.uniqueId("c");this.changed={};this.attributes={};this._changes=[];b&&b.collection&&(this.collection=b.collection);b&&b.parse&&(d=this.parse(d));(c=e.result(this,"defaults"))&&e.defaults(d,c);this.set(d,{silent:!0});this._currentAttributes=
e.clone(this.attributes);this._previousAttributes=e.clone(this.attributes);this.initialize.apply(this,arguments)};e.extend(o.prototype,h,{changed:null,idAttribute:"id",initialize:function(){},toJSON:function(){return e.clone(this.attributes)},sync:function(){return g.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return e.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,f;if(null==a)return this;e.isObject(a)?(f=a,c=
b):(f={})[a]=b;var a=c&&c.silent,l=c&&c.unset;if(!this._validate(f,c))return!1;this.idAttribute in f&&(this.id=f[this.idAttribute]);var g=this.attributes;for(d in f)b=f[d],l?delete g[d]:g[d]=b,this._changes.push(d,b);this._hasComputed=!1;a||this.change(c);return this},unset:function(a,b){return this.set(a,void 0,e.extend({},b,{unset:!0}))},clear:function(a){var b={},c;for(c in this.attributes)b[c]=void 0;return this.set(b,e.extend({},a,{unset:!0}))},fetch:function(a){a=a?e.clone(a):{};void 0===a.parse&&
(a.parse=!0);var b=this,c=a.success;a.success=function(d){if(!b.set(b.parse(d),a))return false;c&&c(b,d,a)};return this.sync("read",this,a)},save:function(a,b,c){var d,f,g;null==a||e.isObject(a)?(d=a,c=b):null!=a&&((d={})[a]=b);c=c?e.clone(c):{};if(c.wait){if(d&&!this._validate(d,c))return!1;f=e.clone(this.attributes)}a=e.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c)||!d&&!this._validate(null,c))return!1;var q=this,i=c.success;c.success=function(a){g=true;var b=q.parse(a);c.wait&&(b=e.extend(d||
{},b));if(!q.set(b,c))return false;i&&i(q,a,c)};b=this.isNew()?"create":c.patch?"patch":"update";"patch"==b&&(c.attrs=d);b=this.sync(b,this,c);!g&&c.wait&&(this.clear(a),this.set(f,a));return b},destroy:function(a){var a=a?e.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};a.success=function(f){(a.wait||b.isNew())&&d();c&&c(b,f,a)};if(this.isNew())return a.success(),!1;var f=this.sync("delete",this,a);a.wait||d();return f},url:function(){var a=e.result(this,"urlRoot")||
e.result(this.collection,"url")||u();return this.isNew()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){var b=this._changing;this._changing=!0;var c=this._computeChanges(!0);this._pending=!!c.length;for(var d=c.length-2;0<=d;d-=2)this.trigger("change:"+c[d],this,c[d+1],a);if(b)return this;for(;this._pending;)this._pending=!1,this.trigger("change",
this,a),this._previousAttributes=e.clone(this.attributes);this._changing=!1;return this},hasChanged:function(a){this._hasComputed||this._computeChanges();return null==a?!e.isEmpty(this.changed):e.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?e.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,f;for(f in a)if(!e.isEqual(d[f],b=a[f]))(c||(c={}))[f]=b;return c},_computeChanges:function(a){this.changed={};for(var b={},c=[],d=this._currentAttributes,f=this._changes,
e=f.length-2;0<=e;e-=2){var g=f[e],i=f[e+1];b[g]||(b[g]=!0,d[g]!==i&&(this.changed[g]=i,a&&(c.push(g,i),d[g]=i)))}a&&(this._changes=[]);this._hasComputed=!0;return c},previous:function(a){return null==a||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return e.clone(this._previousAttributes)},_validate:function(a,b){if(!this.validate)return!0;var a=e.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error&&b.error(this,c,b);this.trigger("error",
this,c,b);return!1}});var p=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);void 0!==b.comparator&&(this.comparator=b.comparator);this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,e.extend({silent:!0},b))};e.extend(p.prototype,h,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return g.sync.apply(this,arguments)},add:function(a,b){var c,d,f,g,h=b&&b.at,i=null==(b&&b.sort)?!0:b.sort,a=e.isArray(a)?
a.slice():[a];for(c=a.length-1;0<=c;c--)(d=this._prepareModel(a[c],b))?(a[c]=d,(f=null!=d.id&&this._byId[d.id])||this._byCid[d.cid]?(b&&(b.merge&&f)&&(f.set(d.attributes,b),g=i),a.splice(c,1)):(d.on("all",this._onModelEvent,this),this._byCid[d.cid]=d,null!=d.id&&(this._byId[d.id]=d))):(this.trigger("error",this,a[c],b),a.splice(c,1));a.length&&(g=i);this.length+=a.length;c=[null!=h?h:this.models.length,0];z.apply(c,a);A.apply(this.models,c);g&&(this.comparator&&null==h)&&this.sort({silent:!0});if(b&&
b.silent)return this;for(;d=a.shift();)d.trigger("add",d,this,b);return this},remove:function(a,b){var c,d,f,g;b||(b={});a=e.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],f=this.indexOf(g),this.models.splice(f,1),this.length--,b.silent||(b.index=f,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,e.extend({at:this.length},b));return a},pop:function(a){var b=
this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,e.extend({at:0},b));return a},shift:function(a){var b=this.at(0);this.remove(b,a);return b},slice:function(a,b){return this.models.slice(a,b)},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]||this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return e.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},
sort:function(a){if(!this.comparator)throw Error("Cannot sort a set without a comparator");e.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(e.bind(this.comparator,this));(!a||!a.silent)&&this.trigger("sort",this,a);return this},pluck:function(a){return e.invoke(this.models,"get",a)},update:function(a,b){var c,d,f,g,h=[],i=[],m={},j=this.model.prototype.idAttribute,b=e.extend({add:!0,merge:!0,remove:!0},b);b.parse&&(a=this.parse(a));
e.isArray(a)||(a=a?[a]:[]);if(b.add&&!b.remove)return this.add(a,b);d=0;for(f=a.length;d<f;d++)c=a[d],g=this.get(c.id||c.cid||c[j]),b.remove&&g&&(m[g.cid]=!0),(b.add&&!g||b.merge&&g)&&h.push(c);if(b.remove){d=0;for(f=this.models.length;d<f;d++)c=this.models[d],m[c.cid]||i.push(c)}i.length&&this.remove(i,b);h.length&&this.add(h,b);return this},reset:function(a,b){b||(b={});b.parse&&(a=this.parse(a));for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);b.previousModels=this.models;
this._reset();a&&this.add(a,e.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?e.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d){b[a.update?"update":"reset"](d,a);c&&c(b,d,a)};return this.sync("read",this,a)},create:function(a,b){var c=this,b=b?e.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(a,b,e){e.wait&&c.add(a,e);d&&d(a,b,e)};a.save(null,b);return a},
parse:function(a){return a},clone:function(){return new this.constructor(this.models)},chain:function(){return e(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_prepareModel:function(a,b){if(a instanceof o)return a.collection||(a.collection=this),a;b||(b={});b.collection=this;var c=new this.model(a,b);return!c._validate(a,b)?!1:c},_removeReference:function(a){this===a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,
b,c,d){("add"===a||"remove"===a)&&c!==this||("destroy"===a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=b)),this.trigger.apply(this,arguments))}});e.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min sortedIndex toArray size first head take initial rest tail last without indexOf shuffle lastIndexOf isEmpty".split(" "),
function(a){p.prototype[a]=function(){var b=r.call(arguments);b.unshift(this.models);return e[a].apply(e,b)}});e.each(["groupBy","countBy","sortBy"],function(a){p.prototype[a]=function(b,c){var d=e.isFunction(b)?b:function(a){return a.get(b)};return e[a](this.models,d,c)}});var v=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/\((.*?)\)/g,C=/:\w+/g,D=/\*\w+/g,E=/[\-{}\[\]+?.,\\\^$|#\s]/g;e.extend(v.prototype,h,{initialize:function(){},
route:function(a,b,c){e.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,e.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b);return this},_bindRoutes:function(){if(this.routes)for(var a,b=e.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])},_routeToRegExp:function(a){a=a.replace(E,"\\$&").replace(B,
"(?:$1)?").replace(C,"([^/]+)").replace(D,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var j=g.History=function(){this.handlers=[];e.bindAll(this,"checkUrl");"undefined"!==typeof window&&(this.location=window.location,this.history=window.history)},w=/^[#\/]|\s+$/g,F=/^\/+|\/+$/g,G=/msie [\w.]+/,H=/\/$/;j.started=!1;e.extend(j.prototype,h,{interval:50,getHash:function(a){return(a=(a||this).location.href.match(/#(.*)$/))?a[1]:""},getFragment:function(a,
b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){var a=this.location.pathname,c=this.root.replace(H,"");a.indexOf(c)||(a=a.substr(c.length))}else a=this.getHash();return a.replace(w,"")},start:function(a){if(j.started)throw Error("Backbone.history has already been started");j.started=!0;this.options=e.extend({},{root:"/"},this.options,a);this.root=this.options.root;this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||
!this.history||!this.history.pushState);var a=this.getFragment(),b=document.documentMode,b=G.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b);this.root=("/"+this.root+"/").replace(F,"/");b&&this._wantsHashChange&&(this.iframe=g.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a));this._hasPushState?g.$(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?g.$(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&
(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=a;a=this.location;b=a.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._wantsPushState&&(this._hasPushState&&b&&a.hash)&&(this.fragment=this.getHash().replace(w,""),this.history.replaceState({},document.title,this.root+this.fragment+
a.search));if(!this.options.silent)return this.loadUrl()},stop:function(){g.$(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);j.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a===this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},
loadUrl:function(a){var b=this.fragment=this.getFragment(a);return e.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!j.started)return!1;if(!b||!0===b)b={trigger:b};a=this.getFragment(a||"");if(this.fragment!==a){this.fragment=a;var c=this.root+a;if(this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else if(this._wantsHashChange)this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&
(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace));else return this.location.assign(c);b.trigger&&this.loadUrl(a)}},_updateHash:function(a,b,c){c?(c=a.href.replace(/(javascript:|#).*$/,""),a.replace(c+"#"+b)):a.hash="#"+b}});g.history=new j;var x=g.View=function(a){this.cid=e.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},I=/^(\S+)\s*(.*)$/,J="model collection el id attributes className tagName events".split(" ");
e.extend(x.prototype,h,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},make:function(a,b,c){a=document.createElement(a);b&&g.$(a).attr(b);null!=c&&g.$(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof g.$?a:g.$(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=e.result(this,
"events"))){this.undelegateEvents();for(var b in a){var c=a[b];e.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(I),f=d[1],d=d[2],c=e.bind(c,this),f=f+(".delegateEvents"+this.cid);""===d?this.$el.bind(f,c):this.$el.delegate(d,f,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=e.extend({},e.result(this,"options"),a));e.extend(this,e.pick(a,J));this.options=a},_ensureElement:function(){if(this.el)this.setElement(e.result(this,
"el"),!1);else{var a=e.extend({},e.result(this,"attributes"));this.id&&(a.id=e.result(this,"id"));this.className&&(a["class"]=e.result(this,"className"));this.setElement(this.make(e.result(this,"tagName"),a),!1)}}});var K={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=K[a];e.defaults(c||(c={}),{emulateHTTP:g.emulateHTTP,emulateJSON:g.emulateJSON});var f={type:d,dataType:"json"};c.url||(f.url=e.result(b,"url")||u());if(null==c.data&&b&&("create"===
a||"update"===a||"patch"===a))f.contentType="application/json",f.data=JSON.stringify(c.attrs||b.toJSON(c));c.emulateJSON&&(f.contentType="application/x-www-form-urlencoded",f.data=f.data?{model:f.data}:{});if(c.emulateHTTP&&("PUT"===d||"DELETE"===d||"PATCH"===d)){f.type="POST";c.emulateJSON&&(f.data._method=d);var h=c.beforeSend;c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d);if(h)return h.apply(this,arguments)}}"GET"!==f.type&&!c.emulateJSON&&(f.processData=!1);var j=c.success;
c.success=function(a,d,e){j&&j(a,d,e);b.trigger("sync",b,a,c)};var i=c.error;c.error=function(a){i&&i(b,a,c);b.trigger("error",b,a,c)};a=g.ajax(e.extend(f,c));b.trigger("request",b,a,c);return a};g.ajax=function(){return g.$.ajax.apply(g.$,arguments)};o.extend=p.extend=v.extend=x.extend=j.extend=function(a,b){var c=this,d;d=a&&e.has(a,"constructor")?a.constructor:function(){c.apply(this,arguments)};e.extend(d,c,b);var f=function(){this.constructor=d};f.prototype=c.prototype;d.prototype=new f;a&&e.extend(d.prototype,
a);d.__super__=c.prototype;return d};var u=function(){throw Error('A "url" property or function must be specified');}}).call(this);

/* enchant.js v0.6.1 http://enchantjs.com Copyright (c) Ubiquitous Entertainment Inc. Released Under the MIT license. */
(function(e,t){typeof Object.defineProperty!="function"&&(Object.defineProperty=function(e,t,n){return"value"in n&&(e[t]=n.value),"get"in n&&e.__defineGetter__(t,n.get),"set"in n&&e.__defineSetter__(t,n.set),e}),typeof Object.defineProperties!="function"&&(Object.defineProperties=function(e,t){for(var n in t)t.hasOwnProperty(n)&&Object.defineProperty(e,n,t[n]);return e}),typeof Object.create!="function"&&(Object.create=function(e,t){function n(){}n.prototype=e;var r=new n;return t!=null&&Object.defineProperties(r,t),r}),typeof Object.getPrototypeOf!="function"&&(Object.getPrototypeOf=function(e){return e.__proto__}),typeof Function.prototype.bind!="function"&&(Function.prototype.bind=function(t){var n=this,r=Array.prototype.slice.call(arguments,1),i=function(){},s=function(){var s=r.concat(Array.prototype.slice.call(arguments));return n.apply(this instanceof i?this:t||e,s)};return i.prototype=n.prototype,s.prototype=new i,s}),e.getTime=function(){return e.performance&&e.performance.now?function(){return e.performance.now()}:e.performance&&e.performance.webkitNow?function(){return e.performance.webkitNow()}:Date.now}(),e.requestAnimationFrame=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(){var t=e.getTime(),n=1e3/60;return function(r){var i=e.getTime(),s=setTimeout(function(){r(e.getTime())},Math.max(0,t+n-i));return t=i,s}}();var n=function(t){t!=null&&(t instanceof Array||(t=Array.prototype.slice.call(arguments)),t=t.filter(function(e){return[e].join()})),function r(n,i){var s=[],o,u;for(var a in n)n.hasOwnProperty(a)&&(typeof n[a]=="function"?e[a]=n[a]:typeof n[a]=="object"&&Object.getPrototypeOf(n[a])===Object.prototype&&(t==null?s.push(a):(o=t.indexOf(i+a),o!==-1&&(s.push(a),t.splice(o,1)))));for(o=0,u=s.length;o<u;o++)r(n[s[o]],i+s[o]+".")}(n,""),e.Game=e.Core;if(t!=null&&t.length)throw new Error("Cannot load module: "+t.join(", "))};e.enchant=n,e.addEventListener("message",function(e,t){try{var r=JSON.parse(e.data);if(r.type==="event")n.Core.instance.dispatchEvent(new n.Event(r.value));else if(r.type==="debug")switch(r.value){case"start":n.Core.instance.start();break;case"pause":n.Core.instance.pause();break;case"resume":n.Core.instance.resume();break;case"tick":n.Core.instance._tick();break;default:}}catch(i){}},!1),n.Class=function(e,t){return n.Class.create(e,t)},n.Class.create=function(e,t){if(e==null&&t)throw new Error("superclass is undefined (enchant.Class.create)");if(e==null)throw new Error("definition is undefined (enchant.Class.create)");if(arguments.length===0)return n.Class.create(Object,t);if(arguments.length===1&&typeof arguments[0]!="function")return n.Class.create(Object,arguments[0]);for(var r in t)t.hasOwnProperty(r)&&(typeof t[r]=="object"&&t[r]!==null&&Object.getPrototypeOf(t[r])===Object.prototype?"enumerable"in t[r]||(t[r].enumerable=!0):t[r]={value:t[r],enumerable:!0,writable:!0});var i=function(){if(!(this instanceof i))return new i;i.prototype.initialize.apply(this,arguments)};i.prototype=Object.create(e.prototype,t),i.prototype.constructor=i,i.prototype.initialize==null&&(i.prototype.initialize=function(){e.apply(this,arguments)});var s=this.getInheritanceTree(e);for(var o=s.length-1;o>=0;o--)if(typeof s[o]._inherited=="function"){s[o]._inherited(i);break}return i},n.Class.getInheritanceTree=function(e){var t=[],n=e,r=n.prototype;while(n!==Object)t.push(n),r=Object.getPrototypeOf(r),n=r.constructor;return t},n.ENV={VERSION:"0.6.1",VENDOR_PREFIX:function(){var e=navigator.userAgent;return e.indexOf("Opera")!==-1?"O":e.indexOf("MSIE")!==-1?"ms":e.indexOf("WebKit")!==-1?"webkit":navigator.product==="Gecko"?"Moz":""}(),TOUCH_ENABLED:function(){var e=document.createElement("div");return e.setAttribute("ontouchstart","return"),typeof e.ontouchstart=="function"}(),RETINA_DISPLAY:function(){if(navigator.userAgent.indexOf("iPhone")!==-1&&e.devicePixelRatio===2){var t=document.querySelector('meta[name="viewport"]');return t==null&&(t=document.createElement("meta"),document.head.appendChild(t)),t.setAttribute("content","width=640"),!0}return!1}(),USE_FLASH_SOUND:function(){var e=navigator.userAgent,t=navigator.vendor||"";return location.href.indexOf("http")===0&&e.indexOf("Mobile")===-1&&t.indexOf("Apple")!==-1}(),USE_DEFAULT_EVENT_TAGS:["input","textarea","select","area"],CANVAS_DRAWING_METHODS:["putImageData","drawImage","drawFocusRing","fill","stroke","clearRect","fillRect","strokeRect","fillText","strokeText"],KEY_BIND_TABLE:{37:"left",38:"up",39:"right",40:"down"},PREVENT_DEFAULT_KEY_CODES:[37,38,39,40,32],SOUND_ENABLED_ON_MOBILE_SAFARI:!1,USE_WEBAUDIO:function(){return location.protocol!=="file:"}(),USE_ANIMATION:!0},n.Event=n.Class.create({initialize:function(e){this.type=e,this.target=null,this.x=0,this.y=0,this.localX=0,this.localY=0},_initPosition:function(e,t){var r=n.Core.instance;this.x=this.localX=(e-r._pageX)/r.scale,this.y=this.localY=(t-r._pageY)/r.scale}}),n.Event.LOAD="load",n.Event.PROGRESS="progress",n.Event.ENTER_FRAME="enterframe",n.Event.EXIT_FRAME="exitframe",n.Event.ENTER="enter",n.Event.EXIT="exit",n.Event.CHILD_ADDED="childadded",n.Event.ADDED="added",n.Event.ADDED_TO_SCENE="addedtoscene",n.Event.CHILD_REMOVED="childremoved",n.Event.REMOVED="removed",n.Event.REMOVED_FROM_SCENE="removedfromscene",n.Event.TOUCH_START="touchstart",n.Event.TOUCH_MOVE="touchmove",n.Event.TOUCH_END="touchend",n.Event.RENDER="render",n.Event.INPUT_START="inputstart",n.Event.INPUT_CHANGE="inputchange",n.Event.INPUT_END="inputend",n.Event.LEFT_BUTTON_DOWN="leftbuttondown",n.Event.LEFT_BUTTON_UP="leftbuttonup",n.Event.RIGHT_BUTTON_DOWN="rightbuttondown",n.Event.RIGHT_BUTTON_UP="rightbuttonup",n.Event.UP_BUTTON_DOWN="upbuttondown",n.Event.UP_BUTTON_UP="upbuttonup",n.Event.DOWN_BUTTON_DOWN="downbuttondown",n.Event.DOWN_BUTTON_UP="downbuttonup",n.Event.A_BUTTON_DOWN="abuttondown",n.Event.A_BUTTON_UP="abuttonup",n.Event.B_BUTTON_DOWN="bbuttondown",n.Event.B_BUTTON_UP="bbuttonup",n.Event.ADDED_TO_TIMELINE="addedtotimeline",n.Event.REMOVED_FROM_TIMELINE="removedfromtimeline",n.Event.ACTION_START="actionstart",n.Event.ACTION_END="actionend",n.Event.ACTION_TICK="actiontick",n.Event.ACTION_ADDED="actionadded",n.Event.ACTION_REMOVED="actionremoved",n.EventTarget=n.Class.create({initialize:function(){this._listeners={}},addEventListener:function(e,t){var n=this._listeners[e];n==null?this._listeners[e]=[t]:n.indexOf(t)===-1&&n.unshift(t)},on:function(){this.addEventListener.apply(this,arguments)},removeEventListener:function(e,t){var n=this._listeners[e];if(n!=null){var r=n.indexOf(t);r!==-1&&n.splice(r,1)}},clearEventListener:function(e){e!=null?delete this._listeners[e]:this._listeners={}},dispatchEvent:function(e){e.target=this,e.localX=e.x-this._offsetX,e.localY=e.y-this._offsetY,this["on"+e.type]!=null&&this["on"+e.type](e);var t=this._listeners[e.type];if(t!=null){t=t.slice();for(var n=0,r=t.length;n<r;n++)t[n].call(this,e)}}}),function(){var t;n.Core=n.Class.create(n.EventTarget,{initialize:function(r,i){if(e.document.body===null)throw new Error("document.body is null. Please excute 'new Core()' in window.onload.");n.EventTarget.call(this);var s=!0;t&&(s=!1,t.stop()),t=n.Core.instance=this,this.width=r||320,this.height=i||320,this.scale=1;var o=document.getElementById("enchant-stage");if(!o)o=document.createElement("div"),o.id="enchant-stage",o.style.position="absolute",document.body.firstChild?document.body.insertBefore(o,document.body.firstChild):document.body.appendChild(o),this.scale=Math.min(e.innerWidth/this.width,e.innerHeight/this.height),this._pageX=0,this._pageY=0;else{var u=e.getComputedStyle(o);r=parseInt(u.width,10),i=parseInt(u.height,10),r&&i?this.scale=Math.min(r/this.width,i/this.height):(o.style.width=this.width+"px",o.style.height=this.height+"px");while(o.firstChild)o.removeChild(o.firstChild);o.style.position="relative";var a=o.getBoundingClientRect();this._pageX=Math.round(e.scrollX||e.pageXOffset+a.left),this._pageY=Math.round(e.scrollY||e.pageYOffset+a.top)}this.scale||(this.scale=1),o.style.fontSize="12px",o.style.webkitTextSizeAdjust="none",this._element=o,this.fps=30,this.frame=0,this.ready=!1,this.running=!1,this.assets={};var f=this._assets=[];(function b(e){e.assets instanceof Array&&[].push.apply(f,e.assets);for(var t in e)e.hasOwnProperty(t)&&typeof e[t]=="object"&&Object.getPrototypeOf(e[t])===Object.prototype&&b(e[t])})(n),this._scenes=[],this.currentScene=null,this.rootScene=new n.Scene,this.pushScene(this.rootScene),this.loadingScene=new n.Scene,this.loadingScene.backgroundColor="#000";var l=this.width*.4|0,c=this.width*.05|0,h=l*.03|0,p=new n.Sprite(l,c);p.x=(this.width-l)/2,p.y=(this.height-c)/2;var d=new n.Surface(l,c);d.context.fillStyle="#fff",d.context.fillRect(0,0,l,c),d.context.fillStyle="#000",d.context.fillRect(h,h,l-h*2,c-h*2),p.image=d;var v=0,m=0;this.addEventListener("progress",function(e){v=e.loaded/e.total}),p.addEventListener("enterframe",function(){m*=.9,m+=v*.1,d.context.fillStyle="#fff",d.context.fillRect(h,0,(l-h*2)*m,c)}),this.loadingScene.addChild(p),this._mousedownID=0,this._surfaceID=0,this._soundID=0,this._activated=!1,this._offsetX=0,this._offsetY=0,this.input={},n.ENV.KEY_BIND_TABLE||(n.ENV.KEY_BIND_TABLE={}),this._keybind=n.ENV.KEY_BIND_TABLE,this.pressedKeysNum=0,this._internalButtondownListeners={},this._internalButtonupListeners={};for(var g in this._keybind)this.keybind(g,this._keybind[g]);if(s){o=n.Core.instance._element;var y;document.addEventListener("keydown",function(e){t.dispatchEvent(new n.Event("keydown")),n.ENV.PREVENT_DEFAULT_KEY_CODES.indexOf(e.keyCode)!==-1&&(e.preventDefault(),e.stopPropagation());if(!t.running)return;var r=t._keybind[e.keyCode];r&&(y=new n.Event(r+"buttondown"),t.dispatchEvent(y))},!0),document.addEventListener("keyup",function(e){if(!t.running)return;var r=t._keybind[e.keyCode];r&&(y=new n.Event(r+"buttonup"),t.dispatchEvent(y))},!0),n.ENV.TOUCH_ENABLED&&(o.addEventListener("touchstart",function(e){var r=e.target.tagName.toLowerCase();n.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(r)===-1&&(e.preventDefault(),t.running||e.stopPropagation())},!0),o.addEventListener("touchmove",function(e){var r=e.target.tagName.toLowerCase();n.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(r)===-1&&(e.preventDefault(),t.running||e.stopPropagation())},!0),o.addEventListener("touchend",function(e){var r=e.target.tagName.toLowerCase();n.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(r)===-1&&(e.preventDefault(),t.running||e.stopPropagation())},!0)),o.addEventListener("mousedown",function(e){var r=e.target.tagName.toLowerCase();n.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(r)===-1&&(e.preventDefault(),t._mousedownID++,t.running||e.stopPropagation())},!0),o.addEventListener("mousemove",function(e){var r=e.target.tagName.toLowerCase();n.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(r)===-1&&(e.preventDefault(),t.running||e.stopPropagation())},!0),o.addEventListener("mouseup",function(e){var r=e.target.tagName.toLowerCase();n.ENV.USE_DEFAULT_EVENT_TAGS.indexOf(r)===-1&&(e.preventDefault(),t.running||e.stopPropagation())},!0),t._touchEventTarget={},n.ENV.TOUCH_ENABLED&&(o.addEventListener("touchstart",function(e){var t=n.Core.instance,r=new n.Event(n.Event.TOUCH_START),i=e.changedTouches,s,o;for(var u=0,a=i.length;u<a;u++)s=i[u],r._initPosition(s.pageX,s.pageY),o=t.currentScene._determineEventTarget(r),t._touchEventTarget[s.identifier]=o,o.dispatchEvent(r)},!1),o.addEventListener("touchmove",function(e){var t=n.Core.instance,r=new n.Event(n.Event.TOUCH_MOVE),i=e.changedTouches,s,o;for(var u=0,a=i.length;u<a;u++)s=i[u],o=t._touchEventTarget[s.identifier],o&&(r._initPosition(s.pageX,s.pageY),o.dispatchEvent(r))},!1),o.addEventListener("touchend",function(e){var t=n.Core.instance,r=new n.Event(n.Event.TOUCH_END),i=e.changedTouches,s,o;for(var u=0,a=i.length;u<a;u++)s=i[u],o=t._touchEventTarget[s.identifier],o&&(r._initPosition(s.pageX,s.pageY),o.dispatchEvent(r),delete t._touchEventTarget[s.identifier])},!1)),o.addEventListener("mousedown",function(e){var t=n.Core.instance,r=new n.Event(n.Event.TOUCH_START);r._initPosition(e.pageX,e.pageY);var i=t.currentScene._determineEventTarget(r);t._touchEventTarget[t._mousedownID]=i,i.dispatchEvent(r)},!1),o.addEventListener("mousemove",function(e){var t=n.Core.instance,r=new n.Event(n.Event.TOUCH_MOVE);r._initPosition(e.pageX,e.pageY);var i=t._touchEventTarget[t._mousedownID];i&&i.dispatchEvent(r)},!1),o.addEventListener("mouseup",function(e){var t=n.Core.instance,r=new n.Event(n.Event.TOUCH_END);r._initPosition(e.pageX,e.pageY),t._touchEventTarget[t._mousedownID].dispatchEvent(r),delete t._touchEventTarget[t._mousedownID]},!1)}},preload:function(e){e instanceof Array||(e=Array.prototype.slice.call(arguments)),[].push.apply(this._assets,e)},load:function(e,r){r==null&&(r=function(){});var i=n.Core.findExt(e);if(n.Core._loadFuncs[i])n.Core._loadFuncs[i].call(this,e,r,i);else{var s=new XMLHttpRequest;s.open("GET",e,!0),s.onreadystatechange=function(i){if(s.readyState===4){if(s.status!==200&&s.status!==0)throw new Error(s.status+": "+"Cannot load an asset: "+e);var o=s.getResponseHeader("Content-Type")||"";o.match(/^image/)?(t.assets[e]=n.Surface.load(e),t.assets[e].addEventListener("load",r)):o.match(/^audio/)?(t.assets[e]=n.Sound.load(e,o),t.assets[e].addEventListener("load",r)):(t.assets[e]=s.responseText,r())}},s.send(null)}},start:function(){var e=function(){this.currentTime=this.getTime(),this._nextTime=0,this.removeEventListener("load",e),this.running=!0,this.ready=!0,this._requestNextFrame()};this.addEventListener("load",e);if(!this._activated&&this._assets.length){this._activated=!0;if(n.Sound.enabledInMobileSafari&&!t._touched&&n.ENV.VENDOR_PREFIX==="webkit"&&n.ENV.TOUCH_ENABLED){var r=new n.Scene;r.backgroundColor="#000";var i=Math.round(t.width/10),s=new n.Sprite(t.width,i);s.y=(t.height-i)/2,s.image=new n.Surface(t.width,i),s.image.context.fillStyle="#fff",s.image.context.font=i-1+"px bold Helvetica,Arial,sans-serif";var o=s.image.context.measureText("Touch to Start").width;s.image.context.fillText("Touch to Start",(t.width-o)/2,i-1),r.addChild(s),document.addEventListener("touchstart",function(){t._touched=!0,t.removeScene(r),t.start()},!0),t.pushScene(r);return}var u={},a=this._assets.filter(function(e){return e in u?!1:u[e]=!0}),f=0,l=a.length,c=function(){var e=new n.Event("progress");e.loaded=++f,e.total=l,t.dispatchEvent(e),f===l&&(t.removeScene(t.loadingScene),t.dispatchEvent(new n.Event("load")))};for(var h=0;h<l;h++)this.load(a[h],c);this.pushScene(this.loadingScene)}else this.dispatchEvent(new n.Event("load"))},debug:function(){this._debug=!0,this.start()},actualFps:{get:function(){return this._actualFps||this.fps}},_requestNextFrame:function(){if(!this.ready)return;var t=this;e.requestAnimationFrame(t._checkTick)},_checkTick:function(t){var r=n.Core.instance;r._nextTime<t?r._tick(t):e.requestAnimationFrame(r._checkTick)},_tick:function(e){var t=new n.Event("enterframe");t.elapsed=e-this.currentTime,this._nextTime=e+1e3/this.fps,this._actualFps=t.elapsed>0?1e3/t.elapsed:0;var r=this.currentScene.childNodes.slice(),i=Array.prototype.push;while(r.length){var s=r.pop();s.age++,s.dispatchEvent(t),s.childNodes&&i.apply(r,s.childNodes)}this.currentScene.age++,this.currentScene.dispatchEvent(t),this.dispatchEvent(t),this.dispatchEvent(new n.Event("exitframe")),this.frame++,this._requestNextFrame()},getTime:function(){return e.getTime()},stop:function(){this.ready=!1,this.running=!1},pause:function(){this.ready=!1},resume:function(){if(this.ready)return;this.currentTime=this.getTime(),this.ready=!0,this.running=!0,this._requestNextFrame()},pushScene:function(e){return this._element.appendChild(e._element),this.currentScene&&this.currentScene.dispatchEvent(new n.Event("exit")),this.currentScene=e,this.currentScene.dispatchEvent(new n.Event("enter")),this._scenes.push(e)},popScene:function(){return this.currentScene===this.rootScene?this.currentScene:(this._element.removeChild(this.currentScene._element),this.currentScene.dispatchEvent(new n.Event("exit")),this.currentScene=this._scenes[this._scenes.length-2],this.currentScene.dispatchEvent(new n.Event("enter")),this._scenes.pop())},replaceScene:function(e){return this.popScene(),this.pushScene(e)},removeScene:function(e){if(this.currentScene===e)return this.popScene();var t=this._scenes.indexOf(e);return t!==-1?(this._scenes.splice(t,1),this._element.removeChild(e._element),e):null},keybind:function(e,t){this._keybind[e]=t;var r=function(e){var r;this.input[t]||(this.input[t]=!0,r=new n.Event(this.pressedKeysNum++?"inputchange":"inputstart"),this.dispatchEvent(r),this.currentScene.dispatchEvent(r)),this.currentScene.dispatchEvent(e)},i=function(e){var r;this.input[t]&&(this.input[t]=!1,r=new n.Event(--this.pressedKeysNum?"inputchange":"inputend"),this.dispatchEvent(r),this.currentScene.dispatchEvent(r)),this.currentScene.dispatchEvent(e)};this.addEventListener(t+"buttondown",r),this.addEventListener(t+"buttonup",i),this._internalButtondownListeners[e]=r,this._internalButtonupListeners[e]=i},keyunbind:function(e){if(!this._keybind[e])return;var t=this._internalButtondownListeners,n=this._internalButtonupListeners;this.removeEventListener(e+"buttondown",t),this.removeEventListener(e+"buttonup",n),delete t[e],delete n[e],delete this._keybind[e]},getElapsedTime:function(){return this.frame/this.fps}}),n.Core._loadFuncs={},n.Core._loadFuncs.jpg=n.Core._loadFuncs.jpeg=n.Core._loadFuncs.gif=n.Core._loadFuncs.png=n.Core._loadFuncs.bmp=function(e,t){this.assets[e]=n.Surface.load(e),this.assets[e].addEventListener("load",t)},n.Core._loadFuncs.mp3=n.Core._loadFuncs.aac=n.Core._loadFuncs.m4a=n.Core._loadFuncs.wav=n.Core._loadFuncs.ogg=function(e,t,r){this.assets[e]=n.Sound.load(e,"audio/"+r,t)},n.Core.findExt=function(e){var t=e.match(/\.\w+$/);return t&&t.length>0?t[0].slice(1).toLowerCase():e.indexOf("data:")===0?e.split(/[\/;]/)[1].toLowerCase():null},n.Core.instance=null}(),n.Game=n.Core,n.Node=n.Class.create(n.EventTarget,{initialize:function(){n.EventTarget.call(this),this._dirty=!1,this._matrix=[1,0,0,1,0,0],this._x=0,this._y=0,this._offsetX=0,this._offsetY=0,this.age=0,this.parentNode=null,this.scene=null,this.addEventListener("touchstart",function(e){this.parentNode&&this.parentNode.dispatchEvent(e)}),this.addEventListener("touchmove",function(e){this.parentNode&&this.parentNode.dispatchEvent(e)}),this.addEventListener("touchend",function(e){this.parentNode&&this.parentNode.dispatchEvent(e)});if(n.ENV.USE_ANIMATION)var e=this.tl=new n.Timeline(this)},moveTo:function(e,t){this._x=e,this._y=t,this._dirty=!0},moveBy:function(e,t){this._x+=e,this._y+=t,this._dirty=!0},x:{get:function(){return this._x},set:function(e){this._x=e,this._dirty=!0}},y:{get:function(){return this._y},set:function(e){this._y=e,this._dirty=!0}},_updateCoordinate:function(){var e=this,t=[e],r=e.parentNode,i=this.scene;while(r&&e._dirty)t.unshift(r),e=e.parentNode,r=e.parentNode;var s=n.Matrix.instance,o=s.stack,u=[],a,f,l;o.push(t[0]._matrix);for(var c=1,h=t.length;c<h;c++){e=t[c],a=[],s.makeTransformMatrix(e,u),s.multiply(o[o.length-1],u,a),e._matrix=a,o.push(a),f=typeof e._originX=="number"?e._originX:e._width/2||0,l=typeof e._originY=="number"?e._originY:e._height/2||0;var p=[f,l];s.multiplyVec(a,p,p),e._offsetX=p[0]-f,e._offsetY=p[1]-l,e._dirty=!1}s.reset()},remove:function(){this._listener&&this.clearEventListener(),this.parentNode&&this.parentNode.removeChild(this)}});var r=function(e,t){var n=[],r;for(var i=0,s=e.collection.length;i<s;i++)r=e.collection[i],t._intersectone(r)&&n.push(r);return n},i=function(e,t){var n=[],r,i;for(var s=0,o=e.collection.length;s<o;s++){r=e.collection[s];for(var u=0,a=t.collection.length;u<a;u++)i=t.collection[u],r._intersectone(i)&&n.push([r,i])}return n},s=function(e){return e instanceof n.Entity?r(this,e):typeof e=="function"&&e.collection?i(this,e):!1};n.Entity=n.Class.create(n.Node,{initialize:function(){var e=n.Core.instance;n.Node.call(this),this._rotation=0,this._scaleX=1,this._scaleY=1,this._touchEnabled=!0,this._clipping=!1,this._originX=null,this._originY=null,this._width=0,this._height=0,this._backgroundColor=null,this._opacity=1,this._visible=!0,this._buttonMode=null,this._style={},this.__styleStatus={},this.compositeOperation=null,this.buttonMode=null,this.buttonPressed=!1,this.addEventListener("touchstart",function(){if(!this.buttonMode)return;this.buttonPressed=!0;var t=new n.Event(this.buttonMode+"buttondown");this.dispatchEvent(t),e.dispatchEvent(t)}),this.addEventListener("touchend",function(){if(!this.buttonMode)return;this.buttonPressed=!1;var t=new n.Event(this.buttonMode+"buttonup");this.dispatchEvent(t),e.dispatchEvent(t)}),this.enableCollection()},width:{get:function(){return this._width},set:function(e){this._width=e,this._dirty=!0}},height:{get:function(){return this._height},set:function(e){this._height=e,this._dirty=!0}},backgroundColor:{get:function(){return this._backgroundColor},set:function(e){this._backgroundColor=e}},opacity:{get:function(){return this._opacity},set:function(e){this._opacity=parseFloat(e)}},visible:{get:function(){return this._visible},set:function(e){this._visible=e}},touchEnabled:{get:function(){return this._touchEnabled},set:function(e){this._touchEnabled=e,(this._touchEnabled=e)?this._style.pointerEvents="all":this._style.pointerEvents="none"}},intersect:function(e){return e instanceof n.Entity?this._intersectone(e):typeof e=="function"&&e.collection?r(e,this):!1},_intersectone:function(e){return this._dirty&&this._updateCoordinate(),e._dirty&&e._updateCoordinate(),this._offsetX<e._offsetX+e.width&&e._offsetX<this._offsetX+this.width&&this._offsetY<e._offsetY+e.height&&e._offsetY<this._offsetY+this.height},within:function(e,t){this._dirty&&this._updateCoordinate(),e._dirty&&e._updateCoordinate(),t==null&&(t=(this.width+this.height+e.width+e.height)/4);var n;return(n=this._offsetX-e._offsetX+(this.width-e.width)/2)*n+(n=this._offsetY-e._offsetY+(this.height-e.height)/2)*n<t*t},scale:function(e,t){this._scaleX*=e,this._scaleY*=t!=null?t:e,this._dirty=!0},rotate:function(e){this._rotation+=e,this._dirty=!0},scaleX:{get:function(){return this._scaleX},set:function(e){this._scaleX=e,this._dirty=!0}},scaleY:{get:function(){return this._scaleY},set:function(e){this._scaleY=e,this._dirty=!0}},rotation:{get:function(){return this._rotation},set:function(e){this._rotation=e,this._dirty=!0}},originX:{get:function(){return this._originX},set:function(e){this._originX=e,this._dirty=!0}},originY:{get:function(){return this._originY},set:function(e){this._originY=e,this._dirty=!0}},enableCollection:function(){this.addEventListener("addedtoscene",this._addSelfToCollection),this.addEventListener("removedfromscene",this._removeSelfFromCollection),this.scene&&this._addSelfToCollection()},disableCollection:function(){this.removeEventListener("addedtoscene",this._addSelfToCollection),this.removeEventListener("removedfromscene",this._removeSelfFromCollection),this.scene&&this._removeSelfFromCollection()},_addSelfToCollection:function(){var e=this.getConstructor();e._collectionTarget.forEach(function(e){e.collection.push(this)},this)},_removeSelfFromCollection:function(){var e=this.getConstructor();e._collectionTarget.forEach(function(e){var t=e.collection.indexOf(this);t!==-1&&e.collection.splice(t,1)},this)},getConstructor:function(){return Object.getPrototypeOf(this).constructor}});var o=function(e){if(e._collective)return;var t=n.Class.getInheritanceTree(e),r=t.indexOf(n.Entity);r!==-1?e._collectionTarget=t.splice(0,r+1):e._collectionTarget=[],e.intersect=s,e.collection=[],e._collective=!0};o(n.Entity),n.Entity._inherited=function(e){o(e)},n.Sprite=n.Class.create(n.Entity,{initialize:function(e,t){n.Entity.call(this),this.width=e,this.height=t,this._image=null,this._frameLeft=0,this._frameTop=0,this._frame=0,this._frameSequence=[],this.addEventListener("enterframe",function(){if(this._frameSequence.length!==0){var e=this._frameSequence.shift();e===null?this._frameSequence=[]:(this._setFrame(e),this._frameSequence.push(e))}})},image:{get:function(){return this._image},set:function(e){if(e===this._image)return;this._image=e,this._setFrame(this._frame)}},frame:{get:function(){return this._frame},set:function(e){if(this._frame===e)return;if(e instanceof Array){var t=e,n=t.shift();this._setFrame(n),t.push(n),this._frameSequence=t}else this._setFrame(e),this._frameSequence=[],this._frame=e}},_setFrame:function(e){var t=this._image,n,r;t!=null&&(this._frame=e,n=t.width/this._width|0,this._frameLeft=(e%n|0)*this._width,this._frameTop=(e/n|0)*this._height%t.height)},width:{get:function(){return this._width},set:function(e){this._width=e,this._setFrame(),this._dirty=!0}},height:{get:function(){return this._height},set:function(e){this._height=e,this._setFrame(),this._dirty=!0}},cvsRender:function(e){if(this._image==null||this._width===0||this._height===0)return;var t=this._image,n=t._element,r=this._frameLeft,i=this._frameTop,s=Math.min(this.width,t.width-r),o=Math.min(this.height,t.height-i),u=Math.min(t.width,this.width),a=Math.min(t.height,this.height),f,l,c,h;for(l=0;l<this.height;l+=a){h=this.height<l+a?this.height-l:a;for(f=0;f<this.width;f+=u)c=this.width<f+u?this.width-f:u,e.drawImage(n,r,i,s*c/u,o*h/a,f,l,c,h)}},domRender:function(e){this._image&&(this._image._css?(this._style["background-image"]=this._image._css,this._style["background-position"]=-this._frameLeft+"px "+ -this._frameTop+"px"):this._image._element)}}),n.Label=n.Class.create(n.Entity,{initialize:function(e){n.Entity.call(this),this.width=300,this.font="14px serif",this.text=e||"",this.textAlign="left"},text:{get:function(){return this._text},set:function(e){if(this._text===e)return;this._text=e,e=e.replace(/<(br|BR) ?\/?>/g,"<br/>"),this._splitText=e.split("<br/>"),this.updateBoundArea();for(var t=0,n=this._splitText.length;t<n;t++){e=this._splitText[t];var r=this.getMetrics(e);this._splitText[t]={},this._splitText[t].text=e,this._splitText[t].height=r.height}}},textAlign:{get:function(){return this._style["text-align"]},set:function(e){this._style["text-align"]=e,this.updateBoundArea()}},font:{get:function(){return this._style.font},set:function(e){this._style.font=e,this.updateBoundArea()}},color:{get:function(){return this._style.color},set:function(e){this._style.color=e}},cvsRender:function(e){var t,n=0,r,i,s;if(this._splitText){e.textBaseline="top",e.font=this.font,e.fillStyle=this.color||"#000000";for(var o=0,u=this._splitText.length;o<u;o++){r=this._splitText[o],i="";for(var a=0,f=r.text.length;a<f;a++)s=r.text[a],e.measureText(i).width>this.width&&(e.fillText(i,0,n),n+=r.height-1,i=""),i+=s;this.textAlign==="right"?t=this.width-e.measureText(i).width:this.textAlign==="center"?t=(this.width-e.measureText(i).width)/2:t=0,e.fillText(i,t,n),n+=r.height-1}}},domRender:function(e){e.innerHTML!==this._text&&(e.innerHTML=this._text)},detectRender:function(e){e.fillRect(this._boundOffset,0,this._boundWidth,this._boundHeight)},updateBoundArea:function(){var e=this.getMetrics();this._boundWidth=e.width,this._boundHeight=e.height,this.textAlign==="right"?this._boundOffset=this.width-this._boundWidth:this.textAlign==="center"?this._boundOffset=(this.width-this._boundWidth)/2:this._boundOffset=0}}),n.Label.prototype.getMetrics=function(e){var t={},n,r,i;if(document.body){n=document.createElement("div");for(var s in this._style)s!=="width"&&s!=="height"&&(n.style[s]=this._style[s]);n.innerHTML=e||this._text,document.body.appendChild(n),t.height=parseInt(getComputedStyle(n).height,10)+1,n.style.position="absolute",t.width=parseInt(getComputedStyle(n).width,10)+1,document.body.removeChild(n)}else t.width=this.width,t.height=this.height;return t},n.Map=n.Class.create(n.Entity,{initialize:function(e,t){var r=n.Core.instance;n.Entity.call(this);var i=new n.Surface(r.width,r.height);this._surface=i;var s=i._element;s.style.position="absolute",n.ENV.RETINA_DISPLAY&&r.scale===2?(s.width=r.width*2,s.height=r.height*2,this._style.webkitTransformOrigin="0 0",this._style.webkitTransform="scale(0.5)"):(s.width=r.width,s.height=r.height),this._context=s.getContext("2d"),this._tileWidth=e||0,this._tileHeight=t||0,this._image=null,this._data=[[[]]],this._dirty=!1,this._tight=!1,this.touchEnabled=!1,this.collisionData=null,this._listeners.render=null,this.addEventListener("render",function(){if(this._dirty||this._previousOffsetX==null)this.redraw(0,0,r.width,r.height);else if(this._offsetX!==this._previousOffsetX||this._offsetY!==this._previousOffsetY)if(this._tight){var e=-this._offsetX,t=-this._offsetY,n=-this._previousOffsetX,i=-this._previousOffsetY,s=e-n+r.width,o=n-e+r.width,u=t-i+r.height,a=i-t+r.height;if(s>this._tileWidth&&o>this._tileWidth&&u>this._tileHeight&&a>this._tileHeight){var f,l,c,h,p,d;s<o?(f=0,c=n-e,p=s):(f=e-n,c=0,p=o),u<a?(l=0,h=i-t,d=u):(l=t-i,h=0,d=a),r._buffer==null&&(r._buffer=document.createElement("canvas"),r._buffer.width=this._context.canvas.width,r._buffer.height=this._context.canvas.height);var v=r._buffer.getContext("2d");this._doubledImage?(v.clearRect(0,0,p*2,d*2),v.drawImage(this._context.canvas,f*2,l*2,p*2,d*2,0,0,p*2,d*2),v=this._context,v.clearRect(c*2,h*2,p*2,d*2),v.drawImage(r._buffer,0,0,p*2,d*2,c*2,h*2,p*2,d*2)):(v.clearRect(0,0,p,d),v.drawImage(this._context.canvas,f,l,p,d,0,0,p,d),v=this._context,v.clearRect(c,h,p,d),v.drawImage(r._buffer,0,0,p,d,c,h,p,d)),c===0?this.redraw(p,0,r.width-p,r.height):this.redraw(0,0,r.width-p,r.height),h===0?this.redraw(0,d,r.width,r.height-d):this.redraw(0,0,r.width,r.height-d)}else this.redraw(0,0,r.width,r.height)}else this.redraw(0,0,r.width,r.height);this._previousOffsetX=this._offsetX,this._previousOffsetY=this._offsetY})},loadData:function(e){this._data=Array.prototype.slice.apply(arguments),this._dirty=!0,this._tight=!1;for(var t=0,n=this._data.length;t<n;t++){var r=0;e=this._data[t];for(var i=0,s=e.length;i<s;i++)for(var o=0,u=e[i].length;o<u;o++)e[i][o]>=0&&r++;if(r/(e.length*e[0].length)>.2){this._tight=!0;break}}},checkTile:function(e,t){if(e<0||this.width<=e||t<0||this.height<=t)return!1;var n=this._image.width,r=this._image.height,i=this._tileWidth||n,s=this._tileHeight||r;e=e/i|0,t=t/s|0;var o=this._data[0];return o[t][e]},hitTest:function(e,t){if(e<0||this.width<=e||t<0||this.height<=t)return!1;var n=this._image.width,r=this._image.height,i=this._tileWidth||n,s=this._tileHeight||r;e=e/i|0,t=t/s|0;if(this.collisionData!=null)return this.collisionData[t]&&!!this.collisionData[t][e];for(var o=0,u=this._data.length;o<u;o++){var a=this._data[o],f;if(a[t]!=null&&(f=a[t][e])!=null&&0<=f&&f<(n/i|0)*(r/s|0))return!0}return!1},image:{get:function(){return this._image},set:function(e){var t=n.Core.instance;this._image=e;if(n.ENV.RETINA_DISPLAY&&t.scale===2){var r=new n.Surface(e.width*2,e.height*2),i=this._tileWidth||e.width,s=this._tileHeight||e.height,o=e.width/i|0,u=e.height/s|0;for(var a=0;a<u;a++)for(var f=0;f<o;f++)r.draw(e,f*i,a*s,i,s,f*i*2,a*s*2,i*2,s*2);this._doubledImage=r}this._dirty=!0}},tileWidth:{get:function(){return this._tileWidth},set:function(e){this._tileWidth=e,this._dirty=!0}},tileHeight:{get:function(){return this._tileHeight},set:function(e){this._tileHeight=e,this._dirty=!0}},width:{get:function(){return this._tileWidth*this._data[0][0].length}},height:{get:function(){return this._tileHeight*this._data[0].length}},redraw:function(e,t,n,r){if(this._image==null)return;var i,s,o,u,a;this._doubledImage?(i=this._doubledImage,s=this._tileWidth*2,o=this._tileHeight*2,u=-this._offsetX*2,a=-this._offsetY*2,e*=2,t*=2,n*=2,r*=2):(i=this._image,s=this._tileWidth,o=this._tileHeight,u=-this._offsetX,a=-this._offsetY);var f=i.width/s|0,l=i.height/o|0,c=Math.max((e+u)/s|0,0),h=Math.max((t+a)/o|0,0),p=Math.ceil((e+u+n)/s),d=Math.ceil((t+a+r)/o),v=i._element,m=this._context,g=m.canvas;m.clearRect(e,t,n,r);for(var y=0,b=this._data.length;y<b;y++){var w=this._data[y],E=Math.min(p,w[0].length),S=Math.min(d,w.length);for(t=h;t<S;t++)for(e=c;e<E;e++){var x=w[t][e];if(0<=x&&x<f*l){var T=x%f*s,N=(x/f|0)*o;m.drawImage(v,T,N,s,o,e*s-u,t*o-a,s,o)}}}},cvsRender:function(e){var t=n.Core.instance;if(this.width!==0&&this.height!==0){e.save(),e.setTransform(1,0,0,1,0,0);var r=this._context.canvas;e.drawImage(r,0,0,t.width,t.height),e.restore()}},domRender:function(e){this._image&&(this._style["background-image"]=this._surface._css,this._style[n.ENV.VENDOR_PREFIX+"Transform"]="matrix(1, 0, 0, 1, 0, 0)")}}),n.Group=n.Class.create(n.Node,{initialize:function(){this.childNodes=[],n.Node.call(this),this._rotation=0,this._scaleX=1,this._scaleY=1,this._originX=null,this._originY=null,this.__dirty=!1,[n.Event.ADDED_TO_SCENE,n.Event.REMOVED_FROM_SCENE].forEach(function(e){this.addEventListener(e,function(e){this.childNodes.forEach(function(t){t.scene=this.scene,t.dispatchEvent(e)},this)})},this)},addChild:function(e){this.childNodes.push(e),e.parentNode=this;var t=new n.Event("childadded");t.node=e,t.next=null,this.dispatchEvent(t),e.dispatchEvent(new n.Event("added"));if(this.scene){e.scene=this.scene;var r=new n.Event("addedtoscene");e.dispatchEvent(r)}},insertBefore:function(e,t){var r=this.childNodes.indexOf(t);if(r!==-1){this.childNodes.splice(r,0,e),e.parentNode=this;var i=new n.Event("childadded");i.node=e,i.next=t,this.dispatchEvent(i),e.dispatchEvent(new n.Event("added"));if(this.scene){e.scene=this.scene;var s=new n.Event("addedtoscene");e.dispatchEvent(s)}}else this.addChild(e)},removeChild:function(e){var t;if((t=this.childNodes.indexOf(e))!==-1){this.childNodes.splice(t,1),e.parentNode=null;var r=new n.Event("childremoved");r.node=e,this.dispatchEvent(r),e.dispatchEvent(new n.Event("removed"));if(this.scene){e.scene=null;var i=new n.Event("removedfromscene");e.dispatchEvent(i)}}},firstChild:{get:function(){return this.childNodes[0]}},lastChild:{get:function(){return this.childNodes[this.childNodes.length-1]}},rotation:{get:function(){return this._rotation},set:function(e){this._rotation=e,this._dirty=!0}},scaleX:{get:function(){return this._scaleX},set:function(e){this._scaleX=e,this._dirty=!0}},scaleY:{get:function(){return this._scaleY},set:function(e){this._scaleY=e,this._dirty=!0}},originX:{get:function(){return this._originX},set:function(e){this._originX=e,this._dirty=!0}},originY:{get:function(){return this._originY},set:function(e){this._originY=e,this._dirty=!0}},_dirty:{get:function(){return this.__dirty},set:function(e){e=!!e,this.__dirty=e;if(e)for(var t=0,n=this.childNodes.length;t<n;t++)this.childNodes[t]._dirty=!0}}}),n.Matrix=n.Class.create({initialize:function(){if(n.Matrix.instance)return n.Matrix.instance;this.reset()},reset:function(){this.stack=[],this.stack.push([1,0,0,1,0,0])},makeTransformMatrix:function(e,t){var n=e._x,r=e._y,i=e.width||0,s=e.height||0,o=e._rotation||0,u=typeof e._scaleX=="number"?e._scaleX:1,a=typeof e._scaleY=="number"?e._scaleY:1,f=o*Math.PI/180,l=Math.cos(f),c=Math.sin(f),h=typeof e._originX=="number"?e._originX:i/2,p=typeof e._originY=="number"?e._originY:s/2,d=u*l,v=u*c,m=a*c,g=a*l;t[0]=d,t[1]=v,t[2]=-m,t[3]=g,t[4]=-d*h+m*p+n+h,t[5]=-v*h-g*p+r+p},multiply:function(e,t,n){var r=e[0],i=e[2],s=e[4],o=e[1],u=e[3],a=e[5],f=t[0],l=t[2],c=t[4],h=t[1],p=t[3],d=t[5];n[0]=r*f+i*h,n[1]=o*f+u*h,n[2]=r*l+i*p,n[3]=o*l+u*p,n[4]=r*c+i*d+s,n[5]=o*c+u*d+a},multiplyVec:function(e,t,n){var r=t[0],i=t[1],s=e[0],o=e[2],u=e[4],a=e[1],f=e[3],l=e[5];n[0]=s*r+o*i+u,n[1]=a*r+f*i+l}}),n.Matrix.instance=new n.Matrix,n.DetectColorManager=n.Class.create({initialize:function(e,t){this.reference=[],this.colorResolution=e||16,this.max=t||1,this.capacity=Math.pow(this.colorResolution,3);for(var n=1,r=this.capacity;n<r;n++)this.reference[n]=null},attachDetectColor:function(e){var t=this.reference.indexOf(null);return t===-1&&(t=1),this.reference[t]=e,this._getColor(t)},detachDetectColor:function(e){var t=this.reference.indexOf(e);t!==-1&&(this.reference[t]=null)},_getColor:function(e){var t=this.colorResolution,n=t/this.max;return[parseInt(e/t/t%t,10)/n,parseInt(e/t%t,10)/n,parseInt(e%t,10)/n,1]},_decodeDetectColor:function(e){var t=this.colorResolution;return~~(e[0]*t*t*t/256)+~~(e[1]*t*t/256)+~~(e[2]*t/256)},getSpriteByColor:function(e){return this.reference[this._decodeDetectColor(e)]}}),n.DomManager=n.Class.create({initialize:function(e,t){var r=n.Core.instance;this.layer=null,this.targetNode=e,typeof t=="string"?this.element=document.createElement(t):t instanceof HTMLElement&&(this.element=t),this.style=this.element.style,this.style.position="absolute",this.style[n.ENV.VENDOR_PREFIX+"TransformOrigin"]="0px 0px",r._debug&&(this.style.border="1px solid blue",this.style.margin="-1px");var i=this;this._setDomTarget=function(){i.layer._touchEventTarget=i.targetNode},this._attachEvent()},getDomElement:function(){return this.element},getDomElementAsNext:function(){return this.element},getNextManager:function(e){var t=this.targetNode.parentNode.childNodes.indexOf(e.targetNode);return t!==this.targetNode.parentNode.childNodes.length-1?this.targetNode.parentNode.childNodes[t+1]._domManager:null},addManager:function(e,t){var n;t&&(n=t.getDomElementAsNext());var r=e.getDomElement();r instanceof Array?r.forEach(function(e){this.element.insertBefore(e,n)},this):this.element.insertBefore(r,n),this.setLayer(this.layer)},removeManager:function(e){e instanceof n.DomlessManager?e._domRef.forEach(function(e){this.element.removeChild(e)},this):this.element.removeChild(e.element),this.setLayer(this.layer)},setLayer:function(e){this.layer=e;var t=this.targetNode,n;if(t.childNodes)for(var r=0,i=t.childNodes.length;r<i;r++)n=t.childNodes[r]._domManager,n&&n.setLayer(e)},render:function(e){var t=this.targetNode,r=n.Matrix.instance,i=r.stack,s=[];r.makeTransformMatrix(t,s),r.multiply(i[i.length-1],s,s),r.multiply(e,s,e),t._matrix=e;var o=typeof t._originX=="number"?t._originX:t.width/2||0,u=typeof t._originY=="number"?t._originY:t.height/2||0,a=[o,u];r.multiplyVec(s,a,a),t._offsetX=a[0]-o,t._offsetY=a[1]-u,t.parentNode&&!(t.parentNode instanceof n.Group)&&(t._offsetX+=t.parentNode._offsetX,t._offsetY+=t.parentNode._offsetY),this.style[n.ENV.VENDOR_PREFIX+"Transform"]="matrix("+s[0].toFixed(10)+","+s[1].toFixed(10)+","+s[2].toFixed(10)+","+s[3].toFixed(10)+","+s[4].toFixed(10)+","+s[5].toFixed(10)+")",this.domRender()},domRender:function(){var e=this.targetNode;e._style||(e._style={}),e.__styleStatus||(e.__styleStatus={}),e._style.width=e.width+"px",e._style.height=e.height+"px",e._style.opacity=e._opacity,e._style["background-color"]=e._backgroundColor,typeof e._visible!="undefined"&&(e._style.display=e._visible?"block":"none"),typeof e.domRender=="function"&&e.domRender(this.element);for(var t in e._style)e.__styleStatus[t]!==e._style[t]&&(this.style.setProperty(t,e._style[t]),e.__styleStatus[t]=e._style[t])},_attachEvent:function(){n.ENV.TOUCH_ENABLED&&this.element.addEventListener("touchstart",this._setDomTarget,!0),this.element.addEventListener("mousedown",this._setDomTarget,!0)},_detachEvent:function(){n.ENV.TOUCH_ENABLED&&this.element.removeEventListener("touchstart",this._setDomTarget,!0),this.element.removeEventListener("mousedown",this._setDomTarget,!0)},remove:function(){this._detachEvent(),this.element=this.style=this.targetNode=null}}),n.DomlessManager=n.Class.create({initialize:function(e){this._domRef=[],this.targetNode=e},_register:function(e,t){var n=this._domRef.indexOf(t),r;e instanceof Array?n===-1?Array.prototype.push.apply(this._domRef,e):Array.prototype.splice.apply(this._domRef,[n,0].concat(e)):n===-1?this._domRef.push(e):this._domRef.splice(n,0,e)},getNextManager:function(e){var t=this.targetNode.parentNode.childNodes.indexOf(e.targetNode);return t!==this.targetNode.parentNode.childNodes.length-1?this.targetNode.parentNode.childNodes[t+1]._domManager:null},getDomElement:function(){var e=[];return this.targetNode.childNodes.forEach(function(t){e=e.concat(t._domManager.getDomElement())}),e},getDomElementAsNext:function(){if(this._domRef.length)return this._domRef[0];var e=this.getNextManager(this);return e?e.element:null},addManager:function(e,t){var r=this.targetNode.parentNode;r&&(t===null&&(t=this.getNextManager(this)),r instanceof n.Scene?r._layers.Dom._domManager.addManager(e,t):r._domManager.addManager(e,t));var i=t?t.getDomElementAsNext():null;this._register(e.getDomElement(),i),this.setLayer(this.layer)},removeManager:function(e){var t,n=this._domRef.indexOf(e.element);n!==-1&&(t=this._domRef[n],t.parentNode.removeChild(t),this._domRef.splice(n,1)),this.setLayer(this.layer)},setLayer:function(e){this.layer=e;var t=this.targetNode,n;if(t.childNodes)for(var r=0,i=t.childNodes.length;r<i;r++)n=t.childNodes[r]._domManager,n&&n.setLayer(e)},render:function(e){var t=n.Matrix.instance,r=t.stack,i=this.targetNode,s=[];t.makeTransformMatrix(i,s),t.multiply(r[r.length-1],s,s),t.multiply(e,s,e),i._matrix=e;var o=typeof i._originX=="number"?i._originX:i.width/2||0,u=typeof i._originY=="number"?i._originY:i.height/2||0,a=[o,u];t.multiplyVec(s,a,a),i._offsetX=a[0]-o,i._offsetY=a[1]-u,r.push(s)},remove:function(){this._domRef=[],this.targetNode=null}}),n.DomLayer=n.Class.create(n.Group,{initialize:function(){var e=n.Core.instance;n.Group.call(this),this.width=this._width=e.width,this.height=this._height=e.height,this._touchEventTarget=null,this._element=document.createElement("div"),this._element.style.width=this.width+"px",this._element.style.height=this.height+"px",this._element.style.position="absolute",this._domManager=new n.DomManager(this,this._element),this._domManager.layer=this;var t=[n.Event.TOUCH_START,n.Event.TOUCH_MOVE,n.Event.TOUCH_END];t.forEach(function(e){this.addEventListener(e,function(e){this._scene&&this._scene.dispatchEvent(e)})},this);var r=function(e){var t=e.node,s=e.next,o=e.target,u=s?s._domManager:null;n.DomLayer._attachDomManager(t,r,i),o._domManager.addManager(t._domManager,u);var a=new n.Event(n.Event.RENDER);t._dirty=!0,o._domManager.layer._rendering(t,a)},i=function(e){var t=e.node,s=e.target;s._domManager.removeManager(t._domManager),n.DomLayer._detachDomManager(t,r,i)};this.addEventListener("childremoved",i),this.addEventListener("childadded",r)},_startRendering:function(){this.addEventListener("exitframe",this._onexitframe),this._onexitframe()},_stopRendering:function(){this.removeEventListener("exitframe",this._onexitframe),this._onexitframe()},_onexitframe:function(){this._rendering(this,new n.Event(n.Event.RENDER))},_rendering:function(e,t,r){var i;r||(r=[1,0,0,1,0,0]),e.dispatchEvent(t),e._domManager.render(r);if(e.childNodes)for(var s=0,o=e.childNodes.length;s<o;s++)i=e.childNodes[s],this._rendering(i,t,r.slice());e._domManager instanceof n.DomlessManager&&n.Matrix.instance.stack.pop(),e._dirty=!1},_determineEventTarget:function(){return this._touchEventTarget&&this._touchEventTarget!==this?this._touchEventTarget:null}}),n.DomLayer._attachDomManager=function(e,t,r){var i;e._domManager||(e.addEventListener("childadded",t),e.addEventListener("childremoved",r),e instanceof n.Group?e._domManager=new n.DomlessManager(e):e._element?e._domManager=new n.DomManager(e,e._element):e._domManager=new n.DomManager(e,"div"));if(e.childNodes)for(var s=0,o=e.childNodes.length;s<o;s++)i=e.childNodes[s],n.DomLayer._attachDomManager(i,t,r),e._domManager.addManager(i._domManager,null)},n.DomLayer._detachDomManager=function(e,t,r){var i;e.removeEventListener("childadded",t),e.removeEventListener("childremoved",r);if(e.childNodes)for(var s=0,o=e.childNodes.length;s<o;s++)i=e.childNodes[s],e._domManager.removeManager(i._domManager,null),n.DomLayer._detachDomManager(i,t,r);e._domManager.remove(),delete e._domManager},n.CanvasLayer=n.Class.create(n.Group,{initialize:function(){var e=n.Core.instance;n.Group.call(this),this._cvsCache={matrix:[1,0,0,1,0,0],detectColor:"#000000"},this._cvsCache.layer=this,this.width=e.width,this.height=e.height,this._element=document.createElement("canvas"),this._element.width=e.width,this._element.height=e.height,this._element.style.position="absolute",this._detect=document.createElement("canvas"),this._detect.width=e.width,this._detect.height=e.height,this._detect.style.position="absolute",this._lastDetected=0,this.context=this._element.getContext("2d"),this._dctx=this._detect.getContext("2d"),this._colorManager=new n.DetectColorManager(16,256);var t=[n.Event.TOUCH_START,n.Event.TOUCH_MOVE,n.Event.TOUCH_END];t.forEach(function(e){this.addEventListener(e,function(e){this._scene&&this._scene.dispatchEvent(e)})},this);var r=function(e){var t=e.node,s=e.target,o;s instanceof n.CanvasLayer?o=s._scene._layers.Canvas:o=s.scene._layers.Canvas,n.CanvasLayer._attachCache(t,o,r,i);var u=new n.Event(n.Event.RENDER);s._dirty&&s._updateCoordinate(),t._dirty=!0,n.Matrix.instance.stack.push(s._matrix),o._rendering(t,u),n.Matrix.instance.stack.pop(s._matrix)},i=function(e){var t=e.node,s=e.target,o;s instanceof n.CanvasLayer?o=s._scene._layers.Canvas:o=s.scene._layers.Canvas,n.CanvasLayer._detachCache(t,o,r,i)};this.addEventListener("childremoved",i),this.addEventListener("childadded",r)},_startRendering:function(){this.addEventListener("exitframe",this._onexitframe),this._onexitframe(new n.Event(n.Event.RENDER))},_stopRendering:function(){this.removeEventListener("render",this._onexitframe),this._onexitframe(new n.Event(n.Event.RENDER))},_onexitframe:function(){var e=n.Core.instance,t=this.context;t.clearRect(0,0,e.width,e.height);var r=new n.Event(n.Event.RENDER);this._rendering(this,r)},_rendering:function(e,t){var r=n.Core.instance,i=n.Matrix.instance,s=i.stack,o=e.width,u=e.height,a=this.context,f;a.save(),e.dispatchEvent(t),e.compositeOperation?a.globalCompositeOperation=e.compositeOperation:a.globalCompositeOperation="source-over",a.globalAlpha=typeof e._opacity=="number"?e._opacity:1,this._transform(e,a);if(typeof e._visible=="undefined"||e._visible)e._backgroundColor&&(a.fillStyle=e._backgroundColor,a.fillRect(0,0,o,u)),e.cvsRender&&e.cvsRender(a),r._debug&&(e instanceof n.Label||e instanceof n.Sprite?a.strokeStyle="#ff0000":a.strokeStyle="#0000ff",a.strokeRect(0,0,o,u)),e._clipping&&(a.rect(0,0,o,u),a.clip());if(e.childNodes)for(var l=0,c=e.childNodes.length;l<c;l++)f=e.childNodes[l],this._rendering(f,t);a.restore(),n.Matrix.instance.stack.pop()},_detectrendering:function(e){var t=e.width,r=e.height,i=this._dctx,s;i.save(),this._transform(e,i),i.fillStyle=e._cvsCache.detectColor,e._touchEnabled&&(e.detectRender?e.detectRender(i):i.fillRect(0,0,t,r)),e._clipping&&(i.rect(0,0,t,r),i.clip());if(e.childNodes)for(var o=0,u=e.childNodes.length;o<u;o++)s=e.childNodes[o],this._detectrendering(s);i.restore(),n.Matrix.instance.stack.pop()},_transform:function(e,t){var r=n.Matrix.instance,i=r.stack,s;e._dirty?(r.makeTransformMatrix(e,e._cvsCache.matrix),s=[],r.multiply(i[i.length-1],e._cvsCache.matrix,s),e._matrix=s):s=e._matrix,i.push(s),t.setTransform.apply(t,s);var o=typeof e._originX=="number"?e._originX:e._width/2||0,u=typeof e._originY=="number"?e._originY:e._height/2||0,a=[o,u];r.multiplyVec(s,a,a),e._offsetX=a[0]-o,e._offsetY=a[1]-u,e._dirty=!1},_determineEventTarget:function(e){return this._getEntityByPosition(e.x,e.y)},_getEntityByPosition:function(e,t){var r=n.Core.instance,i=this._dctx;this._lastDetected<r.frame&&(i.clearRect(0,0,this.width,this.height),this._detectrendering(this),this._lastDetected=r.frame);var s=i.getImageData(e,t,1,1).data;return this._colorManager.getSpriteByColor(s)}}),n.CanvasLayer._attachCache=function(e,t,r,i){var s;e._cvsCache||(e._cvsCache={},e._cvsCache.matrix=[1,0,0,1,0,0],e._cvsCache.detectColor="rgba("+t._colorManager.attachDetectColor(e)+")",e.addEventListener("childadded",r),e.addEventListener("childremoved",i));if(e.childNodes)for(var o=0,u=e.childNodes.length;o<u;o++)s=e.childNodes[o],n.CanvasLayer._attachCache(s,t,r,i)},n.CanvasLayer._detachCache=function(e,t,r,i){var s;e._cvsCache&&(t._colorManager.detachDetectColor(e),e.removeEventListener("childadded",r),e.removeEventListener("childremoved",i),delete e._cvsCache);if(e.childNodes)for(var o=0,u=e.childNodes.length;o<u;o++)s=e.childNodes[o],n.CanvasLayer._detachCache(s,t,r,i)},n.Scene=n.Class.create(n.Group,{initialize:function(){var e=n.Core.instance;n.Group.call(this),this.width=e.width,this.height=e.height,this.scene=this,this._backgroundColor=null,this._element=document.createElement("div"),this._element.style.width=this.width+"px",this._element.style.height=this.height+"px",this._element.style.position="absolute",this._element.style.overflow="hidden",this._element.style[n.ENV.VENDOR_PREFIX+"TransformOrigin"]="0 0",this._element.style[n.ENV.VENDOR_PREFIX+"Transform"]="scale("+n.Core.instance.scale+")",this._layers={},this._layerPriority=[],this.addEventListener(n.Event.CHILD_ADDED,this._onchildadded),this.addEventListener(n.Event.CHILD_REMOVED,this._onchildremoved),this.addEventListener(n.Event.ENTER,this._onenter),this.addEventListener(n.Event.EXIT,this._onexit);var t=this;this._dispatchExitframe=function(){var e;for(var r in t._layers)e=t._layers[r],e.dispatchEvent(new n.Event(n.Event.EXIT_FRAME))}},x:{get:function(){return this._x},set:function(e){this._x=e;for(var t in this._layers)this._layers[t].x=e}},y:{get:function(){return this._y},set:function(e){this._y=e;for(var t in this._layers)this._layers[t].y=e}},rotation:{get:function(){return this._rotation},set:function(e){this._rotation=e;for(var t in this._layers)this._layers[t].rotation=e}},scaleX:{get:function(){return this._scaleX},set:function(e){this._scaleX=e;for(var t in this._layers)this._layers[t].scaleX=e}},scaleY:{get:function(){return this._scaleY},set:function(e){this._scaleY=e;for(var t in this._layers)this._layers[t].scaleY=e}},backgroundColor:{get:function(){return this._backgroundColor},set:function(e){this._backgroundColor=this._element.style.backgroundColor=e}},addLayer:function(e,t){var r=n.Core.instance;if(this._layers[e])return;var i=new n[e+"Layer"];r.currentScene===this&&i._startRendering(),this._layers[e]=i;var s=i._element;if(typeof t=="number"){var o=this._element.childNodes[t];this._element.insertBefore(s,o),this._layerPriority.splice(t,0,e)}else this._element.appendChild(s),this._layerPriority.push(e);i._scene=this},_determineEventTarget:function(e){var t,n;for(var r=this._layerPriority.length-1;r>=0;r--){t=this._layers[this._layerPriority[r]],n=t._determineEventTarget(e);if(n)break}return n||(n=this),n},_onchildadded:function(e){var t=e.node,n=e.next;t._element?(this._layers.Dom||this.addLayer("Dom",1),this._layers.Dom.insertBefore(t,n),t._layer=this._layers.Dom):(this._layers.Canvas||this.addLayer("Canvas",0),this._layers.Canvas.insertBefore(t,n),t._layer=this._layers.Canvas),t.parentNode=this},_onchildremoved:function(e){var t=e.node;t._layer.removeChild(t),t._layer=null},_onenter:function(){for(var e in this._layers)this._layers[e]._startRendering();n.Core.instance.addEventListener("exitframe",this._dispatchExitframe)},_onexit:function(){for(var e in this._layers)this._layers[e]._stopRendering();n.Core.instance.removeEventListener("exitframe",this._dispatchExitframe)}}),n.CanvasScene=n.Class.create(n.Scene,{initialize:function(){n.Scene.call(this),this.addLayer("Canvas")},_determineEventTarget:function(e){var t=this._layers.Canvas._determineEventTarget(e);return t||(t=this),t},_onchildadded:function(e){var t=e.node,n=e.next;this._layers.Canvas.insertBefore(t,n),t._layer=this._layers.Canvas},_onenter:function(){this._layers.Canvas._startRendering(),n.Game.instance.addEventListener("exitframe",this._dispatchExitframe)},_onexit:function(){this._layers.Canvas._stopRendering(),n.Game.instance.removeEventListener("exitframe",this._dispatchExitframe)}}),n.DOMScene=n.Class.create(n.Scene,{initialize:function(){n.Scene.call(this),this.addLayer("Dom")},_determineEventTarget:function(e){var t=this._layers.Dom._determineEventTarget(e);return t||(t=this),t},_onchildadded:function(e){var t=e.node,n=e.next;this._layers.Dom.insertBefore(t,n),t._layer=this._layers.Dom},_onenter:function(){this._layers.Dom._startRendering(),n.Game.instance.addEventListener("exitframe",this._dispatchExitframe)},_onexit:function(){this._layers.Dom._stopRendering(),n.Game.instance.removeEventListener("exitframe",this._dispatchExitframe)}}),n.Surface=n.Class.create(n.EventTarget,{initialize:function(e,t){n.EventTarget.call(this);var r=n.Core.instance;this.width=e,this.height=t,this.context=null;var i="enchant-surface"+r._surfaceID++;if(document.getCSSCanvasContext){this.context=document.getCSSCanvasContext("2d",i,e,t),this._element=this.context.canvas,this._css="-webkit-canvas("+i+")";var s=this.context}else document.mozSetImageElement?(this._element=document.createElement("canvas"),this._element.width=e,this._element.height=t,this._css="-moz-element(#"+i+")",this.context=this._element.getContext("2d"),document.mozSetImageElement(i,this._element)):(this._element=document.createElement("canvas"),this._element.width=e,this._element.height=t,this._element.style.position="absolute",this.context=this._element.getContext("2d"),n.ENV.CANVAS_DRAWING_METHODS.forEach(function(e){var t=this.context[e];this.context[e]=function(){t.apply(this,arguments),this._dirty=!0}},this))},getPixel:function(e,t){return this.context.getImageData(e,t,1,1).data},setPixel:function(e,t,n,r,i,s){var o=this.context.createImageData(1,1);o.data[0]=n,o.data[1]=r,o.data[2]=i,o.data[3]=s,this.context.putImageData(o,e,t)},clear:function(){this.context.clearRect(0,0,this.width,this.height)},draw:function(e){e=e._element;if(arguments.length===1)this.context.drawImage(e,0,0);else{var t=arguments;t[0]=e,this.context.drawImage.apply(this.context,t)}},clone:function(){var e=new n.Surface(this.width,this.height);return e.draw(this),e},toDataURL:function(){var e=this._element.src;return e?e.slice(0,5)==="data:"?e:this.clone().toDataURL():this._element.toDataURL()}}),n.Surface.load=function(e,t){var r=new Image,i=Object.create(n.Surface.prototype,{context:{value:null},_css:{value:"url("+e+")"},_element:{value:r}});return n.EventTarget.call(i),r.src=e,r.onerror=function(){throw new Error("Cannot load an asset: "+r.src)},r.onload=function(){i.width=r.width,i.height=r.height,i.dispatchEvent(new n.Event("load"))},i},n.DOMSound=n.Class.create(n.EventTarget,{initialize:function(){throw n.EventTarget.call(this),this.duration=0,new Error("Illegal Constructor")},play:function(){this._element&&this._element.play()},pause:function(){this._element&&this._element.pause()},stop:function(){this.pause(),this.currentTime=0},clone:function(){var e;if(this._element instanceof Audio)e=Object.create(n.DOMSound.prototype,{_element:{value:this._element.cloneNode(!1)},duration:{value:this.duration}});else{if(n.ENV.USE_FLASH_SOUND)return this;e=Object.create(n.DOMSound.prototype)}return n.EventTarget.call(e),e},currentTime:{get:function(){return this._element?this._element.currentTime:0},set:function(e){this._element&&(this._element.currentTime=e)}},volume:{get:function(){return this._element?this._element.volume:1},set:function(e){this._element&&(this._element.volume=e)}}}),n.DOMSound.load=function(t,r,i){if(r==null){var s=n.Core.findExt(t);s?r="audio/"+s:r=""}r=r.replace("mp3","mpeg").replace("m4a","mp4");var o=Object.create(n.DOMSound.prototype);n.EventTarget.call(o);var u=new Audio;if(!n.ENV.SOUND_ENABLED_ON_MOBILE_SAFARI&&n.ENV.VENDOR_PREFIX==="webkit"&&n.ENV.TOUCH_ENABLED)e.setTimeout(function(){o.dispatchEvent(new n.Event("load"))},0);else{if(!n.ENV.USE_FLASH_SOUND&&u.canPlayType(r))u.src=t,u.load(),u.autoplay=!1,u.onerror=function(){throw new Error("Cannot load an asset: "+u.src)},u.addEventListener("canplaythrough",function(){o.duration=u.duration,o.dispatchEvent(new n.Event("load"))},!1),o._element=u;else if(r==="audio/mpeg"){var a=document.createElement("embed"),f="enchant-audio"+n.Core.instance._soundID++;a.width=a.height=1,a.name=f,a.src="sound.swf?id="+f+"&src="+t,a.allowscriptaccess="always",a.style.position="absolute",a.style.left="-1px",o.addEventListener("load",function(){Object.defineProperties(a,{currentTime:{get:function(){return a.getCurrentTime()},set:function(e){a.setCurrentTime(e)}},volume:{get:function(){return a.getVolume()},set:function(e){a.setVolume(e)}}}),o._element=a,o.duration=a.getDuration()}),n.Core.instance._element.appendChild(a),n.DOMSound[f]=o}else e.setTimeout(function(){o.dispatchEvent(new n.Event("load"))},0);o.addEventListener("load",function(){i.call(n.Core.instance)})}return o},e.AudioContext=e.AudioContext||e.webkitAudioContext||e.mozAudioContext||e.msAudioContext||e.oAudioContext,n.WebAudioSound=n.Class.create(n.EventTarget,{initialize:function(){if(!e.webkitAudioContext)throw new Error("This browser does not support WebAudio API.");var t=n.WebAudioSound.audioContext;n.EventTarget.call(this),this.src=t.createBufferSource(),this.buffer=null,this._volume=1,this._currentTime=0,this._state=0,this.connectTarget=n.WebAudioSound.destination},play:function(e){var t=n.WebAudioSound.audioContext;this._state===2?this.src.connect(this.connectTarget):(this._state===1&&!e&&this.src.disconnect(this.connectTarget),this.src=t.createBufferSource(),this.src.buffer=this.buffer,this.src.gain.value=this._volume,this.src.connect(this.connectTarget),this.src.noteOn(0)),this._state=1},pause:function(){var e=n.WebAudioSound.audioContext;this.src.disconnect(this.connectTarget),this._state=2},stop:function(){this.src.noteOff(0),this._state=0},clone:function(){var e=new n.WebAudioSound;return e.buffer=this.buffer,e},dulation:{get:function(){return this.buffer?this.buffer.dulation:0}},volume:{get:function(){return this._volume},set:function(e){e=Math.max(0,Math.min(1,e)),this._volume=e,this.src&&(this.src.gain.value=e)}},currentTime:{get:function(){return e.console.log("currentTime is not allowed"),this._currentTime},set:function(t){e.console.log("currentTime is not allowed"),this._currentTime=t}}}),n.WebAudioSound.load=function(t,r,i){var s=n.WebAudioSound.audioContext,o=new XMLHttpRequest,u=new n.WebAudioSound,a="audio/"+n.Core.findExt(t);return o.responseType="arraybuffer",o.open("GET",t,!0),o.onload=function(){s.decodeAudioData(o.response,function(e){u.buffer=e,i.call(n.Core.instance)},function(t){e.console.log(t)})},o.send(null),u},e.AudioContext&&(n.WebAudioSound.audioContext=new e.AudioContext,n.WebAudioSound.destination=n.WebAudioSound.audioContext.destination),n.Sound=e.AudioContext&&n.ENV.USE_WEBAUDIO?n.WebAudioSound:n.DOMSound,n.Easing={LINEAR:function(e,t,n,r){return n*e/r+t},SWING:function(e,t,n,r){return n*(.5-Math.cos(e/r*Math.PI)/2)+t},QUAD_EASEIN:function(e,t,n,r){return n*(e/=r)*e+t},QUAD_EASEOUT:function(e,t,n,r){return-n*(e/=r)*(e-2)+t},QUAD_EASEINOUT:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},CUBIC_EASEIN:function(e,t,n,r){return n*(e/=r)*e*e+t},CUBIC_EASEOUT:function(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t},CUBIC_EASEINOUT:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},QUART_EASEIN:function(e,t,n,r){return n*(e/=r)*e*e*e+t},QUART_EASEOUT:function(e,t,n,r){return-n*((e=e/r-1)*e*e*e-1)+t},QUART_EASEINOUT:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},QUINT_EASEIN:function(e,t,n,r){return n*(e/=r)*e*e*e*e+t},QUINT_EASEOUT:function(e,t,n,r){return n*((e=e/r-1)*e*e*e*e+1)+t},QUINT_EASEINOUT:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},SIN_EASEIN:function(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t},SIN_EASEOUT:function(e,t,n,r){return n*Math.sin(e/r*(Math.PI/2))+t},SIN_EASEINOUT:function(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t},CIRC_EASEIN:function(e,t,n,r){return-n*(Math.sqrt(1-(e/=r)*e)-1)+t},CIRC_EASEOUT:function(e,t,n,r){return n*Math.sqrt(1-(e=e/r-1)*e)+t},CIRC_EASEINOUT:function(e,t,n,r){return(e/=r/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},ELASTIC_EASEIN:function(e,t,n,r,i,s){if(e===0)return t;if((e/=r)===1)return t+n;s||(s=r*.3);var o;return!i||i<Math.abs(n)?(i=n,o=s/4):o=s/(2*Math.PI)*Math.asin(n/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*2*Math.PI/s))+t},ELASTIC_EASEOUT:function(e,t,n,r,i,s){if(e===0)return t;if((e/=r)===1)return t+n;s||(s=r*.3);var o;return!i||i<Math.abs(n)?(i=n,o=s/4):o=s/(2*Math.PI)*Math.asin(n/i),i*Math.pow(2,-10*e)*Math.sin((e*r-o)*2*Math.PI/s)+n+t},ELASTIC_EASEINOUT:function(e,t,n,r,i,s){if(e===0)return t;if((e/=r/2)===2)return t+n;s||(s=r*.3*1.5);var o;return!i||i<Math.abs(n)?(i=n,o=s/4):o=s/(2*Math.PI)*Math.asin(n/i),e<1?-0.5*i*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*2*Math.PI/s)+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*r-o)*2*Math.PI/s)*.5+n+t},BOUNCE_EASEOUT:function(e,t,n,r){return(e/=r)<1/2.75?n*7.5625*e*e+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},BOUNCE_EASEIN:function(e,t,r,i){return r-n.Easing.BOUNCE_EASEOUT(i-e,0,r,i)+t},BOUNCE_EASEINOUT:function(e,t,r,i){return e<i/2?n.Easing.BOUNCE_EASEIN(e*2,0,r,i)*.5+t:n.Easing.BOUNCE_EASEOUT(e*2-i,0,r,i)*.5+r*.5+t},BACK_EASEIN:function(e,n,r,i,s){return s===t&&(s=1.70158),r*(e/=i)*e*((s+1)*e-s)+n},BACK_EASEOUT:function(e,n,r,i,s){return s===t&&(s=1.70158),r*((e=e/i-1)*e*((s+1)*e+s)+1)+n},BACK_EASEINOUT:function(e,n,r,i,s){return s===t&&(s=1.70158),(e/=i/2)<1?r/2*e*e*(((s*=1.525)+1)*e-s)+n:r/2*((e-=2)*e*(((s*=1.525)+1)*e+s)+2)+n},EXPO_EASEIN:function(e,t,n,r){return e===0?t:n*Math.pow(2,10*(e/r-1))+t},EXPO_EASEOUT:function(e,t,n,r){return e===r?t+n:n*(-Math.pow(2,-10*e/r)+1)+t},EXPO_EASEINOUT:function(e,t,n,r){return e===0?t:e===r?t+n:(e/=r/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t}},n.ActionEventTarget=n.Class.create(n.EventTarget,{initialize:function(){n.EventTarget.apply(this,arguments)},dispatchEvent:function(e){var t;this.node?(t=this.node,e.target=t,e.localX=e.x-t._offsetX,e.localY=e.y-t._offsetY):this.node=null,this["on"+e.type]!=null&&this["on"+e.type].call(t,e);var n=this._listeners[e.type];if(n!=null){n=n.slice();for(var r=0,i=n.length;r<i;r++)n[r].call(t,e)}}}),n.Timeline=n.Class.create(n.EventTarget,{initialize:function(e){n.EventTarget.call(this),this.node=e,this.queue=[],this.paused=!1,this.looped=!1,this.isFrameBased=!0,this._parallel=null,this._activated=!1,this.addEventListener(n.Event.ENTER_FRAME,this.tick)},_deactivateTimeline:function(){this._activated&&(this._activated=!1,this.node.removeEventListener("enterframe",this._nodeEventListener))},_activateTimeline:function(){!this._activated&&!this.paused&&(this.node.addEventListener("enterframe",this._nodeEventListener),this._activated=!0)},setFrameBased:function(){this.isFrameBased=!0},setTimeBased:function(){this.isFrameBased=!1},next:function(e){var t,r=this.queue.shift();t=new n.Event("actionend"),t.timeline=this,r.dispatchEvent(t);if(this.queue.length===0){this._activated=!1,this.node.removeEventListener("enterframe",this._nodeEventListener);return}this.looped?(t=new n.Event("removedfromtimeline"),t.timeline=this,r.dispatchEvent(t),r.frame=0,this.add(r)):(t=new n.Event("removedfromtimeline"),t.timeline=this,r.dispatchEvent(t));if(e>0||this.queue[0]&&this.queue[0].time===0){var i=new n.Event("enterframe");i.elapsed=e,this.dispatchEvent(i)}},tick:function(e){if(this.paused)return;if(this.queue.length>0){var t=this.queue[0];if(t.frame===0){var r;r=new n.Event("actionstart"),r.timeline=this,t.dispatchEvent(r)}var i=new n.Event("actiontick");i.timeline=this,this.isFrameBased?i.elapsed=1:i.elapsed=e.elapsed,t.dispatchEvent(i)}},add:function(e){if(!this._activated){var t=this;this._nodeEventListener=function(e){t.dispatchEvent(e)},this.node.addEventListener("enterframe",this._nodeEventListener),this._activated=!0}this._parallel?(this._parallel.actions.push(e),this._parallel=null):this.queue.push(e),e.frame=0;var r=new n.Event("addedtotimeline");return r.timeline=this,e.dispatchEvent(r),r=new n.Event("actionadded"),r.action=e,this.dispatchEvent(r),this},action:function(e){return this.add(new n.Action(e))},tween:function(e){return this.add(new n.Tween(e))},clear:function(){var e=new n.Event("removedfromtimeline");e.timeline=this;for(var t=0,r=this.queue.length;t<r;t++)this.queue[t].dispatchEvent(e);return this.queue=[],this._deactivateTimeline(),this},skip:function(e){var t=new n.Event("enterframe");this.isFrameBased?t.elapsed=1:(t.elapsed=e,e=1);while(e--)this.dispatchEvent(t);return this},pause:function(){return this.paused||(this.paused=!0,this._deactivateTimeline()),this},resume:function(){return this.paused&&(this.paused=!1,this._activateTimeline()),this},loop:function(){return this.looped=!0,this},unloop:function(){return this.looped=!1,this},delay:function(e){return this.add(new n.Action({time:e})),this},wait:function(e){return this},then:function(e){var t=this;return this.add(new n.Action({onactiontick:function(n){e.call(t.node)},time:0})),this},exec:function(e){this.then(e)},cue:function(e){var t=0;for(var n in e)e.hasOwnProperty(n)&&(this.delay(n-t),this.then(e[n]),t=n)},repeat:function(e,t){return this.add(new n.Action({onactiontick:function(t){e.call(this)},time:t})),this},and:function(){var e=this.queue.pop();if(e instanceof n.ParallelAction)this._parallel=e,this.queue.push(e);else{var t=new n.ParallelAction;t.actions.push(e),this.queue.push(t),this._parallel=t}return this},or:function(){return this},doAll:function(e){return this},waitAll:function(){return this},waitUntil:function(e){var t=this;return this.add(new n.Action({onactionstart:e,onactiontick:function(n){e.call(this)&&t.next()}})),this},fadeTo:function(e,t,n){return this.tween({opacity:e,time:t,easing:n}),this},fadeIn:function(e,t){return this.fadeTo(1,e,t)},fadeOut:function(e,t){return this.fadeTo(0,e,t)},moveTo:function(e,t,n,r){return this.tween({x:e,y:t,time:n,easing:r})},moveX:function(e,t,n){return this.tween({x:e,time:t,easing:n})},moveY:function(e,t,n){return this.tween({y:e,time:t,easing:n})},moveBy:function(e,t,n,r){return this.tween({x:function(){return this.x+e},y:function(){return this.y+t},time:n,easing:r})},hide:function(){return this.then(function(){this.opacity=0})},show:function(){return this.then(function(){this.opacity=1})},removeFromScene:function(){return this.then(function(){this.scene.removeChild(this)})},scaleTo:function(e,t,n){return typeof n=="number"?this.tween({scaleX:arguments[0],scaleY:arguments[1],time:arguments[2],easing:arguments[3]}):this.tween({scaleX:e,scaleY:e,time:t,easing:n})},scaleBy:function(e,t,n){return typeof n=="number"?this.tween({scaleX:function(){return this.scaleX*arguments[0]},scaleY:function(){return this.scaleY*arguments[1]},time:arguments[2],easing:arguments[3]}):this.tween({scaleX:function(){return this.scaleX*e},scaleY:function(){return this.scaleY*e},time:t,easing:n})},rotateTo:function(e,t,n){return this.tween({rotation:e,time:t,easing:n})},rotateBy:function(e,t,n){return this.tween({rotation:function(){return this.rotation+e},time:t,easing:n})}}),n.Action=n.Class.create(n.ActionEventTarget,{initialize:function(e){n.ActionEventTarget.call(this),this.time=null,this.frame=0;for(var t in e)e.hasOwnProperty(t)&&e[t]!=null&&(this[t]=e[t]);var r=this;this.timeline=null,this.node=null,this.addEventListener(n.Event.ADDED_TO_TIMELINE,function(e){r.timeline=e.timeline,r.node=e.timeline.node,r.frame=0}),this.addEventListener(n.Event.REMOVED_FROM_TIMELINE,function(){r.timeline=null,r.node=null,r.frame=0}),this.addEventListener(n.Event.ACTION_TICK,function(e){var t=r.time-(r.frame+e.elapsed);r.time!=null&&t<=0?(r.frame=r.time,e.timeline.next(-t)):r.frame+=e.elapsed})}}),n.ParallelAction=n.Class.create(n.Action,{initialize:function(e){n.Action.call(this,e);var t=this.timeline,r=this.node;this.actions=[],this.endedActions=[];var i=this;this.addEventListener(n.Event.ACTION_START,function(e){for(var t=0,n=i.actions.length;t<n;t++)i.actions[t].dispatchEvent(e)}),this.addEventListener(n.Event.ACTION_TICK,function(e){var t,r,s={next:function(e){var s=i.actions[t];i.actions.splice(t--,1),r=i.actions.length,i.endedActions.push(s);var o=new n.Event("actionend");o.timeline=this,s.dispatchEvent(o),o=new n.Event("removedfromtimeline"),o.timeline=this,s.dispatchEvent(o)}},o=new n.Event("actiontick");o.timeline=s,o.elapsed=e.elapsed;for(t=0,r=i.actions.length;t<r;t++)i.actions[t].dispatchEvent(o);i.actions.length===0&&e.timeline.next()}),this.addEventListener(n.Event.ADDED_TO_TIMELINE,function(e){for(var t=0,n=i.actions.length;t<n;t++)i.actions[t].dispatchEvent(e)}),this.addEventListener(n.Event.REMOVED_FROM_TIMELINE,function(){this.actions=this.endedActions,this.endedActions=[]})}}),n.Tween=n.Class.create(n.Action,{initialize:function(e){var t={},r={};n.Action.call(this,e),this.easing==null&&(this.easing=function(e,t,n,r){return n*e/r+t});var i=this;this.addEventListener(n.Event.ACTION_START,function(){var n=["frame","time","callback","onactiontick","onactionstart","onactionend"];for(var s in e)if(e.hasOwnProperty(s)){var o;typeof e[s]=="function"?o=e[s].call(i.node):o=e[s],n.indexOf(s)===-1&&(t[s]=i.node[s],r[s]=o)}}),this.addEventListener(n.Event.ACTION_TICK,function(e){var n=i.time===0?1:i.easing(Math.min(i.time,i.frame+e.elapsed),0,1,i.time)-i.easing(i.frame,0,1,i.time);for(var s in r)if(r.hasOwnProperty(s)){if(typeof this[s]=="undefined")continue;i.node[s]+=(r[s]-t[s])*n,Math.abs(i.node[s])<1e-7&&(i.node[s]=0)}})}})})(window);
/*
	This is rot.js, the ROguelike Toolkit in JavaScript.
	Version 0.3~dev, generated on Thu Jan 10 21:50:16 CET 2013.
*/

/**
 * @namespace Top-level ROT namespace
 */
var ROT = {
	DEFAULT_WIDTH: 80,
	DEFAULT_HEIGHT: 25,

	/* Ordering is important! */
	DIRS: {
		"4": [
			[ 0, -1],
			[ 1,  0],
			[ 0,  1],
			[-1,  0]
		],
		"8": [
			[ 0, -1],
			[ 1, -1],
			[ 1,  0],
			[ 1,  1],
			[ 0,  1],
			[-1,  1],
			[-1,  0],
			[-1, -1]
		],
		"6": [
			[-1, -1],
			[ 1, -1],
			[ 2,  0],
			[ 1,  1],
			[-1,  1],
			[-2,  0]
		]
	},

	/**
	 * @returns {bool} Is rot.js supported by this browser?
	 */
	isSupported: function() {
		return !!(document.createElement("canvas").getContext && Function.prototype.bind);
	}
};
/**
 * @class Visual map display
 * @param {object} [options]
 * @param {int} [options.width=ROT.DEFAULT_WIDTH]
 * @param {int} [options.height=ROT.DEFAULT_HEIGHT]
 * @param {int} [options.fontSize=15]
 * @param {string} [options.fontFamily="monospace"]
 * @param {string} [options.fontStyle=""] bold/italic/none/both
 * @param {string} [options.fg="#ccc"]
 * @param {string} [options.bg="#000"]
 * @param {int} [options.fps=25]
 * @param {float} [options.spacing=1]
 * @param {string} [options.layout="rect"]
 */
ROT.Display = function(options) {
	this._canvas = document.createElement("canvas");
	this._context = this._canvas.getContext("2d");
	this._data = {};
	this._dirty = false; /* false = nothing, true = all, object = dirty cells */
	this._charWidth = 0;
	this._hexSize = 0;
	this._hexSpacingX = 0;
	this._hexSpacingY = 0;
	this._options = {};
	
	var defaultOptions = {
		width: ROT.DEFAULT_WIDTH,
		height: ROT.DEFAULT_HEIGHT,
		layout: "rect",
		fontSize: 15,
		fps: 25,
		spacing: 1,
		fontFamily: "monospace",
		fontStyle: "",
		fg: "#ccc",
		bg: "#000"
	};
	for (var p in options) { defaultOptions[p] = options[p]; }
	this.setOptions(defaultOptions);
	this.DEBUG = this.DEBUG.bind(this);
	
	this._interval = setInterval(this._tick.bind(this), 1000/this._options.fps);
}

/**
 * Debug helper, ideal as a map generator callback. Always bound to this.
 * @param {int} x
 * @param {int} y
 * @param {int} what
 */
ROT.Display.prototype.DEBUG = function(x, y, what) {
	var colors = [this._options.bg, this._options.fg];
	this.draw(x, y, null, null, colors[what % colors.length]);
}

/**
 * Clear the whole display (cover it with background color)
 */
ROT.Display.prototype.clear = function() {
	this._data = {};
	this._dirty = true;
}

/**
 * @see ROT.Display
 */
ROT.Display.prototype.setOptions = function(options) {
	for (var p in options) { this._options[p] = options[p]; }
	if (options.width || options.height || options.fontSize || options.fontFamily || options.spacing) { 
		this._compute();
		this._dirty = true;
	}
	return this;
}

/**
 * Returns currently set options
 * @returns {object} Current options object 
 */
ROT.Display.prototype.getOptions = function() {
	return this._options;
}

/**
 * Returns the DOM node of this display
 * @returns {node} DOM node
 */
ROT.Display.prototype.getContainer = function() {
	return this._canvas;
}

/**
 * Compute the maximum width/height to fit into a set of given constraints
 * @param {int} availWidth Maximum allowed pixel width
 * @param {int} availHeight Maximum allowed pixel height
 * @returns {int[2]} cellWidth,cellHeight
 * FIXME hex layout
 */
ROT.Display.prototype.computeSize = function(availWidth, availHeight) {
	var width = Math.floor(availWidth / this._spacingX);
	var height = Math.floor(availHeight / this._spacingY);
	return [width, height]
}

/**
 * Compute the maximum font size to fit into a set of given constraints
 * @param {int} availWidth Maximum allowed pixel width
 * @param {int} availHeight Maximum allowed pixel height
 * @returns {int} fontSize
 * FIXME hex layout
 */
ROT.Display.prototype.computeFontSize = function(availWidth, availHeight) {
	var boxWidth = Math.floor(availWidth / this._options.width);
	var boxHeight = Math.floor(availHeight / this._options.height);

	/* compute char ratio */
	var oldFont = this._context.font;
	this._context.font = "100px " + this._options.fontFamily;
	var width = Math.ceil(this._context.measureText("W").width);
	this._context.font = oldFont;
	var ratio = width / 100;
		
	var widthFraction = ratio * boxHeight / boxWidth;
	if (widthFraction > 1) { /* too wide with current aspect ratio */
		boxHeight = Math.floor(boxHeight / widthFraction);
	}
	return Math.floor(boxHeight / this._options.spacing);
}

/**
 * @param {int} x
 * @param {int} y
 * @param {string} ch 
 * @param {string} [fg] foreground color
 * @param {string} [bg] background color
 */
ROT.Display.prototype.draw = function(x, y, ch, fg, bg) {
	if (!fg) { fg = this._options.fg; }
	if (!bg) { bg = this._options.bg; }
	this._data[x+","+y] = [x, y, ch, fg, bg];
	
	if (this._dirty === true) { return; } /* will already redraw everything */
	if (!this._dirty) { this._dirty = {}; } /* first! */
	this._dirty[x+","+y] = true;
}

/**
 * Draws a text at given position. Optionally wraps at a maximum length. Currently does not work with hex layout.
 * @param {int} x
 * @param {int} y
 * @param {string} text May contain color/background format specifiers, %c{name}/%b{name}, both optional. %c{}/%b{} resets to default.
 * @param {int} [maxWidth] wrap at what width?
 * @returns {int} lines drawn
 */
ROT.Display.prototype.drawText = function(x, y, text, maxWidth) {
	var fg = null;
	var bg = null;
	var cx = x;
	var cy = y;
	var lines = 1;

	var tokens = ROT.Text.tokenize(text, maxWidth);

	while (tokens.length) { /* interpret tokenized opcode stream */
		var token = tokens.shift();
		switch (token.type) {
			case ROT.Text.TYPE_TEXT:
				for (var i=0;i<token.value.length;i++) {
					this.draw(cx++, cy, token.value.charAt(i), fg, bg);
				}
			break;

			case ROT.Text.TYPE_FG:
				fg = token.value || null;
			break;

			case ROT.Text.TYPE_BG:
				bg = token.value || null;
			break;

			case ROT.Text.TYPE_NEWLINE:
				cx = x;
				cy++;
				lines++
			break;

		}
	}

	return lines;
}

/**
 * Computes a width and height of a wrapped block of text.
 * @param {string} text
 * @param {int} [maxWidth] wrap at what width?
 * @returns {object} with "width" and "height"
 */
ROT.Display.prototype.measureText = function(text, maxWidth) {
	return ROT.Text.measure(text, maxWidth);
}

/**
 * Timer tick: update dirty parts
 */
ROT.Display.prototype._tick = function() {
	if (!this._dirty) { return; }

	if (this._dirty === true) { /* draw all */
		this._context.fillStyle = this._options.bg;
		this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);

		for (var id in this._data) { /* redraw cached data */
			this._draw(id, false);
		}

	} else { /* draw only dirty */
		for (var key in this._dirty) {
			this._draw(key, true);
		}
	}

	this._dirty = false;
}

/**
 * @param {string} key What to draw
 * @param {bool} clearBefore Is it necessary to clean before?
 */
ROT.Display.prototype._draw = function(key, clearBefore) {
	var data = this._data[key];
	var x = data[0];
	var y = data[1];
	var ch = data[2];
	var fg = data[3];
	var bg = data[4];

	switch (this._options.layout) {
		case "rect":
			var cx = (x+0.5) * this._spacingX;
			var cy = (y+0.5) * this._spacingY;
			
			if (clearBefore || bg != this._options.bg) {
				this._context.fillStyle = bg;
				this._context.fillRect(cx-this._spacingX/2, cy-this._spacingY/2, this._spacingX, this._spacingY);
			}
		break;
		case "hex":
			var cx = (x+1) * this._spacingX;
			var cy = y * this._spacingY + this._hexSize;
			if (clearBefore || bg != this._options.bg) {
				this._context.fillStyle = bg;
				this._fillHex(cx, cy);
			}
		break;
	}

	if (!ch) { return; }
	
	this._context.fillStyle = fg;
	this._context.fillText(ch, cx, cy);
}

ROT.Display.prototype._fillHex = function(cx, cy) {
	var a = this._hexSize;
	
	this._context.beginPath();
	this._context.moveTo(cx, cy-a);
	this._context.lineTo(cx + this._spacingX, cy-a/2);
	this._context.lineTo(cx + this._spacingX, cy+a/2);
	this._context.lineTo(cx, cy+a);
	this._context.lineTo(cx - this._spacingX, cy+a/2);
	this._context.lineTo(cx - this._spacingX, cy-a/2);
	this._context.lineTo(cx, cy-a);
	this._context.fill();
}

/**
 * Re-compute internal sizing variables, based on current options
 */
ROT.Display.prototype._compute = function() {
	/* compute char width */
	var font = (this._options.fontStyle ? this._options.fontStyle + " " : "") + this._options.fontSize + "px " + this._options.fontFamily;
	this._context.font = font;
	this._charWidth = Math.ceil(this._context.measureText("W").width);
	
	switch (this._options.layout) {
		case "rect":
			this._spacingX = Math.ceil(this._options.spacing * this._charWidth);
			this._spacingY = Math.ceil(this._options.spacing * this._options.fontSize);
			this._canvas.width = this._options.width * this._spacingX;
			this._canvas.height = this._options.height * this._spacingY;
		break;
		case "hex":
			this._hexSize = Math.floor(this._options.spacing * (this._options.fontSize + this._charWidth/Math.sqrt(3)) / 2);
			this._spacingX = this._hexSize * Math.sqrt(3) / 2;
			this._spacingY = this._hexSize * 1.5;
			this._canvas.width = Math.ceil( (this._options.width + 1) * this._spacingX );
			this._canvas.height = Math.ceil( (this._options.height - 1) * this._spacingY + 2*this._hexSize );
		break;
	}
	
	this._context.font = font;
	this._context.textAlign = "center";
	this._context.textBaseline = "middle";
}
/**
 * @namespace
 * Contains text tokenization and breaking routines
 */
ROT.Text = {
	RE_COLORS: /%([bc]){([^}]*)}/g,

	/* token types */
	TYPE_TEXT:		0,
	TYPE_NEWLINE:	1,
	TYPE_FG:		2,
	TYPE_BG:		3,

	/**
	 * Measure size of a resulting text block
	 */
	measure: function(str, maxWidth) {
		var result = {width:0, height:1};
		var tokens = this.tokenize(str, maxWidth);
		var lineWidth = 0;

		for (var i=0;i<tokens.length;i++) {
			var token = tokens[i];
			switch (token.type) {
				case this.TYPE_TEXT:
					lineWidth += token.value.length;
				break;

				case this.TYPE_NEWLINE:
					result.height++;
					result.width = Math.max(result.width, lineWidth);
					lineWidth = 0;
				break;
			}
		}
		result.width = Math.max(result.width, lineWidth);

		return result;
	},

	/**
	 * Convert string to a series of a formatting commands
	 */
	tokenize: function(str, maxWidth) {
		var result = [];

		/* first tokenization pass - split texts and color formatting commands */
		var offset = 0;
		str.replace(this.RE_COLORS, function(match, type, name, index) {
			/* string before */
			var part = str.substring(offset, index);
			if (part.length) {
				result.push({
					type: ROT.Text.TYPE_TEXT,
					value: part
				});
			}

			/* color command */
			result.push({
				type: (type == "c" ? ROT.Text.TYPE_FG : ROT.Text.TYPE_BG),
				value: name.trim()
			});

			offset = index + match.length;
			return "";
		});

		/* last remaining part */
		var part = str.substring(offset);
		if (part.length) {
			result.push({
				type: ROT.Text.TYPE_TEXT,
				value: part
			});
		}

		return this._breakLines(result, maxWidth);
	},

	/* insert line breaks into first-pass tokenized data */
	_breakLines: function(tokens, maxWidth) {
		if (!maxWidth) { maxWidth = Infinity; };

		var i = 0;
		var lineLength = 0;
		var lastTokenWithSpace = -1;

		while (i < tokens.length) { /* take all text tokens, remove space, apply linebreaks */
			var token = tokens[i];
			if (token.type == ROT.Text.TYPE_NEWLINE) { /* reset */
				lineLength = 0; 
				lastTokenWithSpace = -1;
			}
			if (token.type != ROT.Text.TYPE_TEXT) { /* skip non-text tokens */
				i++;
				continue; 
			}

			/* remove spaces at the beginning of line */
			while (lineLength == 0 && token.value.charAt(0) == " ") { token.value = token.value.substring(1); }

			/* forced newline? insert two new tokens after this one */
			var index = token.value.indexOf("\n");
			if (index != -1) { 
				token.value = this._breakInsideToken(tokens, i, index, true); 

				/* if there are spaces at the end, we must remove them (we do not want the line too long) */
				var arr = token.value.split("");
				while (arr[arr.length-1] == " ") { arr.pop(); }
				token.value = arr.join("");
			}

			/* token degenerated? */
			if (!token.value.length) {
				tokens.splice(i, 1);
				continue;
			}

			if (lineLength + token.value.length > maxWidth) { /* line too long, find a suitable breaking spot */

				/* is it possible to break within this token? */
				var index = -1;
				while (1) {
					var nextIndex = token.value.indexOf(" ", index+1);
					if (nextIndex == -1) { break; }
					if (lineLength + nextIndex > maxWidth) { break; }
					index = nextIndex;
				}

				if (index != -1) { /* break at space within this one */
					token.value = this._breakInsideToken(tokens, i, index, true);
				} else if (lastTokenWithSpace != -1) { /* is there a previous token where a break can occur? */
					var token = tokens[lastTokenWithSpace];
					var breakIndex = token.value.lastIndexOf(" ");
					token.value = this._breakInsideToken(tokens, lastTokenWithSpace, breakIndex, true);
					i = lastTokenWithSpace;
				} else { /* force break in this token */
					token.value = this._breakInsideToken(tokens, i, maxWidth-lineLength, false);
				}

			} else { /* line not long, continue */
				lineLength += token.value.length;
				if (token.value.indexOf(" ") != -1) { lastTokenWithSpace = i; }
			}
			
			i++; /* advance to next token */
		}


		tokens.push({type: ROT.Text.TYPE_NEWLINE}); /* insert fake newline to fix the last text line */

		/* remove trailing space from text tokens before newlines */
		var lastTextToken = null;
		for (var i=0;i<tokens.length;i++) {
			var token = tokens[i];
			switch (token.type) {
				case ROT.Text.TYPE_TEXT: lastTextToken = token; break;
				case ROT.Text.TYPE_NEWLINE: 
					if (lastTextToken) { /* remove trailing space */
						var arr = lastTextToken.value.split("");
						while (arr[arr.length-1] == " ") { arr.pop(); }
						lastTextToken.value = arr.join("");
					}
					lastTextToken = null;
				break;
			}
		}

		tokens.pop(); /* remove fake token */

		return tokens;
	},

	/**
	 * Create new tokens and insert them into the stream
	 * @param {object[]} tokens
	 * @param {int} tokenIndex Token being processed
	 * @param {int} breakIndex Index within current token's value
	 * @param {bool} removeBreakChar Do we want to remove the breaking character?
	 * @returns {string} remaining unbroken token value
	 */
	_breakInsideToken: function(tokens, tokenIndex, breakIndex, removeBreakChar) {
		var newBreakToken = {
			type: ROT.Text.TYPE_NEWLINE
		}
		var newTextToken = {
			type: ROT.Text.TYPE_TEXT,
			value: tokens[tokenIndex].value.substring(breakIndex + (removeBreakChar ? 1 : 0))
		}
		tokens.splice(tokenIndex+1, 0, newBreakToken, newTextToken);
		return tokens[tokenIndex].value.substring(0, breakIndex);
	}
}
/**
 * @class Speed-based scheduler
 */
ROT.Scheduler = function() {
	this._items = [];
}

/**
 * @param {object} item anything with "getSpeed" method
 */
ROT.Scheduler.prototype.add = function(item) {
	var o = {
		item: item,
		bucket: 1/item.getSpeed()
	}
	this._items.push(o);
	return this;
}

/**
 * Clear all actors
 */
ROT.Scheduler.prototype.clear = function() {
	this._items = [];
	return this;
}

/**
 * Remove a previously added item
 * @param {object} item anything with "getSpeed" method
 */
ROT.Scheduler.prototype.remove = function(item) {
	var it = null;
	for (var i=0;i<this._items.length;i++) {
		it = this._items[i];
		if (it.item == item) { 
			this._items.splice(i, 1); 
			break;
		}
	}
	return this;
}

/**
 * Schedule next actor
 * @returns {object}
 */
ROT.Scheduler.prototype.next = function() {
	if (!this._items.length) { return null; }

	var minBucket = Infinity;
	var minItem = null;

	for (var i=0;i<this._items.length;i++) {
		var item = this._items[i];
		if (item.bucket < minBucket) {
			minBucket = item.bucket;
			minItem = item;
		} else if (item.bucket == minBucket && item.item.getSpeed() > minItem.item.getSpeed()) {
			minItem = item;
		}
	}
	
	if (minBucket) { /* non-zero value; subtract from all buckets */
		for (var i=0;i<this._items.length;i++) {
			var item = this._items[i];
			item.bucket = Math.max(0, item.bucket - minBucket);
		}
	}
	
	minItem.bucket += 1/minItem.item.getSpeed();
	return minItem.item;
}
/**
 * Asynchronous main loop
 */
ROT.Engine = function() {
	this._scheduler = new ROT.Scheduler();
	this._lock = 1;
}

/**
 * @param {object} actor Anything with "getSpeed" and "act" methods
 */
ROT.Engine.prototype.addActor = function(actor) {
	this._scheduler.add(actor);
	return this;
}

/**
 * Remove a previously added actor
 * @param {object} actor
 */
ROT.Engine.prototype.removeActor = function(actor) {
	this._scheduler.remove(actor);
	return this;
}

/**
 * Remove all actors
 */
ROT.Engine.prototype.clear = function() {
	this._scheduler.clear();
	return this;
}

/**
 * Start the main loop. When this call returns, the loop is locked.
 */
ROT.Engine.prototype.start = function() {
	return this.unlock();
}

/**
 * Interrupt the engine by an asynchronous action
 */
ROT.Engine.prototype.lock = function() {
	this._lock++;
}

/**
 * Resume execution (paused by a previous lock)
 */
ROT.Engine.prototype.unlock = function() {
	if (!this._lock) { throw new Error("Cannot unlock unlocked engine"); }
	this._lock--;

	while (!this._lock) {
		var actor = this._scheduler.next();
		if (!actor) { return this.lock(); } /* no actors */
		actor.act();
	}

	return this;
}
/**
 * @returns {any} Randomly picked item, null when length=0
 */
Array.prototype.random = function() {
	if (!this.length) { return null; }
	return this[Math.floor(ROT.RNG.getUniform() * this.length)];
}

/**
 * @returns {array} Shallow copy
 */
Array.prototype.clone = function() {
	var arr = [];
	for (var i=0;i<this.length;i++) { arr.push(this[i]); }
	return arr;
}

/**
 * @returns {array} New array with randomized items
 * FIXME destroys this!
 */
Array.prototype.randomize = function() {
	var result = [];
	while (this.length) {
		var index = this.indexOf(this.random());
		result.push(this.splice(index, 1)[0]);
	}
	return result;
}
if (!Date.now) { 
	/**
	 * @returns {int} Current timestamp (msec)
	 */
	Date.now = function() { return +(new Date); } 
}
/**
 * Always positive modulus
 * @param {int} n Modulus
 * @returns {int} this modulo n
 */
Number.prototype.mod = function(n) {
	return ((this%n)+n)%n;
}
/**
 * @returns {string} First letter capitalized
 */
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substring(1);
}

/**
 * @returns {string} This string with "%s"s replaced with arguments
 */
String.prototype.format = function() {
	var args = Array.prototype.slice.call(arguments);
	var str = this;
	return str.replace(/%s/g, function(match, index) {
		if (str.charAt(index-1) == "%") {
			return match;
		} else {
			return args.shift();
		}
	});
}

/** 
 * Left pad
 * @param {string} [character="0"]
 * @param {int} [count=2]
 */
String.prototype.lpad = function(character, count) {
	var ch = character || "0";
	var cnt = count || 2;

	var s = "";
	while (s.length < (cnt - this.length)) { s += ch; }
	s = s.substring(0, cnt-this.length);
	return s+this;
}

/** 
 * Right pad
 * @param {string} [character="0"]
 * @param {int} [count=2]
 */
String.prototype.rpad = function(character, count) {
	var ch = character || "0";
	var cnt = count || 2;

	var s = "";
	while (s.length < (cnt - this.length)) { s += ch; }
	s = s.substring(0, cnt-this.length);
	return this+s;
}
if (!Object.create) {  
	/**
	 * ES5 Object.create
	 */
	Object.create = function(o) {  
		var tmp = function() {};
		tmp.prototype = o;
		return new tmp();
	};  
}  
/**
 * Sets prototype of this function to an instance of parent function
 * @param {function} parent
 */
Function.prototype.extend = function(parent) {
	this.prototype = Object.create(parent.prototype);
	this.prototype.constructor = this;
	return this;
}
/**
 * @namespace
 * This code is an implementation of Alea algorithm; (C) 2010 Johannes Baagøe.
 * Alea is licensed according to the http://en.wikipedia.org/wiki/MIT_License.
 */
ROT.RNG = {
	/**
	 * @returns {number} 
	 */
	getSeed: function() {
		return this._seed;
	},

	/**
	 * @param {number} seed Seed the number generator
	 */
	setSeed: function(seed) {
		seed = (seed < 1 ? 1/seed : seed);

		this._seed = seed;
		this._s0 = (seed >>> 0) * this._frac;

		seed = (seed*69069 + 1) >>> 0;
		this._s1 = seed * this._frac;

		seed = (seed*69069 + 1) >>> 0;
		this._s2 = seed * this._frac;

		this._c = 1;
		return this;
	},

	/**
	 * @returns {float} Pseudorandom value [0,1), uniformly distributed
	 */
	getUniform: function() {
		var t = 2091639 * this._s0 + this._c * this._frac;
		this._s0 = this._s1;
		this._s1 = this._s2;
		this._c = t | 0;
		this._s2 = t - this._c;
		return this._s2;
	},

	/**
	 * @param {float} [mean=0] Mean value
	 * @param {float} [stddev=1] Standard deviation. ~95% of the absolute values will be lower than 2*stddev.
	 * @returns {float} A normally distributed pseudorandom value
	 */
	getNormal: function(mean, stddev) {
		do {
			var u = 2*this.getUniform()-1;
			var v = 2*this.getUniform()-1;
			var r = u*u + v*v;
		} while (r > 1 || r == 0);

		var gauss = u * Math.sqrt(-2*Math.log(r)/r);
		return (mean || 0) + gauss*(stddev || 1);
	},

	/**
	 * @returns {int} Pseudorandom value [1,100] inclusive, uniformly distributed
	 */
	getPercentage: function() {
		return 1 + Math.floor(this.getUniform()*100);
	},
	
	/**
	 * Get RNG state. Useful for storing the state and re-setting it via setState.
	 * @returns {?} Internal state
	 */
	getState: function() {
		return [this._s0, this._s1, this._s2, this._c];
	},

	/**
	 * Set a previously retrieved state.
	 * @param {?} state
	 */
	setState: function(state) {
		this._s0 = state[0];
		this._s1 = state[1];
		this._s2 = state[2];
		this._c  = state[3];
		return this;
	},

	_s0: 0,
	_s1: 0,
	_s2: 0,
	_c: 0,
	_frac: 2.3283064365386963e-10 /* 2^-32 */
}

ROT.RNG.setSeed(Date.now());
/**
 * @class (Markov process)-based string generator. 
 * Copied from a <a href="http://www.roguebasin.roguelikedevelopment.org/index.php?title=Names_from_a_high_order_Markov_Process_and_a_simplified_Katz_back-off_scheme">RogueBasin article</a>. 
 * Offers configurable order and prior.
 * @param {object} [options]
 * @param {bool} [options.words=false] Use word mode?
 * @param {int} [options.order=3]
 * @param {float} [options.prior=0.001]
 */
ROT.StringGenerator = function(options) {
	this._options = {
		words: false,
		order: 3,
		prior: 0.001
	}
	for (var p in options) { this._options[p] = options[p]; }

	this._boundary = String.fromCharCode(0);
	this._suffix = this._boundary;
	this._prefix = [];
	for (var i=0;i<this._options.order;i++) { this._prefix.push(this._boundary); }

	this._priorValues = {};
	this._priorValues[this._boundary] = this._options.prior;

	this._data = {};
}

/**
 * Remove all learning data
 */
ROT.StringGenerator.prototype.clear = function() {
	this._data = {};
	this._priorValues = {};
}

/**
 * @returns {string} Generated string
 */
ROT.StringGenerator.prototype.generate = function() {
	var result = [this._sample(this._prefix)];
	while (result[result.length-1] != this._boundary) {
		result.push(this._sample(result));
	}
	return this._join(result.slice(0, -1));
}

/**
 * Observe (learn) a string from a training set
 */
ROT.StringGenerator.prototype.observe = function(string) {
	var tokens = this._split(string);

	for (var i=0; i<tokens.length; i++) {
		this._priorValues[tokens[i]] = this._options.prior;
	}

	tokens = this._prefix.concat(tokens).concat(this._suffix); /* add boundary symbols */

	for (var i=this._options.order; i<tokens.length; i++) {
		var context = tokens.slice(i-this._options.order, i);
		var event = tokens[i];
		for (var j=0; j<context.length; j++) {
			var subcontext = context.slice(j);
			this._observeEvent(subcontext, event);
		}
	}
}

ROT.StringGenerator.prototype.getStats = function() {
	var parts = [];

	var priorCount = 0;
	for (var p in this._priorValues) { priorCount++; }
	priorCount--; /* boundary */
	parts.push("distinct samples: " + priorCount);

	var dataCount = 0;
	var eventCount = 0;
	for (var p in this._data) { 
		dataCount++; 
		for (var key in this._data[p]) {
			eventCount++;
		}
	}
	parts.push("dictionary size (contexts): " + dataCount);
	parts.push("dictionary size (events): " + eventCount);

	return parts.join(", ");
}

/**
 * @param {string}
 * @returns {string[]}
 */
ROT.StringGenerator.prototype._split = function(str) {
	return str.split(this._options.words ? /\s+/ : "");
}

/**
 * @param {string[]}
 * @returns {string} 
 */
ROT.StringGenerator.prototype._join = function(arr) {
	return arr.join(this._options.words ? " " : "");
}

/**
 * @param {string[]} context
 * @param {string} event
 */
ROT.StringGenerator.prototype._observeEvent = function(context, event) {
	var key = this._join(context);
	if (!(key in this._data)) { this._data[key] = {}; }
	var data = this._data[key];

	if (!(event in data)) { data[event] = 0; }
	data[event]++;
}

/**
 * @param {string[]}
 * @returns {string}
 */
ROT.StringGenerator.prototype._sample = function(context) {
	context = this._backoff(context);
	var key = this._join(context);
	var data = this._data[key];

	var available = {};

	if (this._options.prior) {
		for (var event in this._priorValues) { available[event] = this._priorValues[event]; }
		for (var event in data) { available[event] += data[event]; }
	} else { 
		available = data;
	}

	return this._pickRandom(available);
}

/**
 * @param {string[]}
 * @returns {string[]}
 */
ROT.StringGenerator.prototype._backoff = function(context) {
	if (context.length > this._options.order) {
		context = context.slice(-this._options.order);
	} else if (context.length < this._options.order) {
		context = this._prefix.slice(0, this._options.order - context.length).concat(context);
	}

	while (!(this._join(context) in this._data) && context.length > 0) { context = context.slice(1); }

	return context;
}


ROT.StringGenerator.prototype._pickRandom = function(data) {
	var total = 0;
	
	for (var id in data) {
		total += data[id];
	}
	var random = ROT.RNG.getUniform()*total;
	
	var part = 0;
	for (var id in data) {
		part += data[id];
		if (random < part) { return id; }
	}
}
/**
 * @class Base map generator
 * @param {int} [width=ROT.DEFAULT_WIDTH]
 * @param {int} [height=ROT.DEFAULT_HEIGHT]
 */
ROT.Map = function(width, height) {
	this._width = width || ROT.DEFAULT_WIDTH;
	this._height = height || ROT.DEFAULT_HEIGHT;
};

ROT.Map.prototype.create = function(callback) {}

ROT.Map.prototype._fillMap = function(value) {
	var map = [];
	for (var i=0;i<this._width;i++) {
		map.push([]);
		for (var j=0;j<this._height;j++) { map[i].push(value); }
	}
	return map;
}
/**
 * @class Simple empty rectangular room
 * @augments ROT.Map
 */
ROT.Map.Arena = function(width, height) {
	ROT.Map.call(this, width, height);
}
ROT.Map.Arena.extend(ROT.Map);

ROT.Map.Arena.prototype.create = function(callback) {
	var w = this._width-1;
	var h = this._height-1;
	for (var i=0;i<=w;i++) {
		for (var j=0;j<=h;j++) {
			var empty = (i && j && i<w && j<h);
			callback(i, j, empty ? 0 : 1);
		}
	}
	return this;
}
/**
 * @class Recursively divided maze, http://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method
 * @augments ROT.Map
 */
ROT.Map.DividedMaze = function(width, height) {
	ROT.Map.call(this, width, height);
	this._stack = [];
}
ROT.Map.DividedMaze.extend(ROT.Map);

ROT.Map.DividedMaze.prototype.create = function(callback) {
	var w = this._width;
	var h = this._height;
	
	this._map = [];
	
	for (var i=0;i<w;i++) {
		this._map.push([]);
		for (var j=0;j<h;j++) {
			var border = (i == 0 || j == 0 || i+1 == w || j+1 == h);
			this._map[i].push(border ? 1 : 0);
		}
	}
	
	this._stack = [
		[1, 1, w-2, h-2]
	];
	this._process();
	
	for (var i=0;i<w;i++) {
		for (var j=0;j<h;j++) {
			callback(i, j, this._map[i][j]);
		}
	}
	this._map = null;
	return this;
}

ROT.Map.DividedMaze.prototype._process = function() {
	while (this._stack.length) {
		var room = this._stack.shift(); /* [left, top, right, bottom] */
		this._partitionRoom(room);
	}
}

ROT.Map.DividedMaze.prototype._partitionRoom = function(room) {
	var availX = [];
	var availY = [];
	
	for (var i=room[0]+1;i<room[2];i++) {
		var top = this._map[i][room[1]-1];
		var bottom = this._map[i][room[3]+1];
		if (top && bottom && !(i % 2)) { availX.push(i); }
	}
	
	for (var j=room[1]+1;j<room[3];j++) {
		var left = this._map[room[0]-1][j];
		var right = this._map[room[2]+1][j];
		if (left && right && !(j % 2)) { availY.push(j); }
	}

	if (!availX.length || !availY.length) { return; }

	var x = availX.random();
	var y = availY.random();
	
	this._map[x][y] = 1;
	
	var walls = [];
	
	var w = []; walls.push(w); /* left part */
	for (var i=room[0]; i<x; i++) { 
		this._map[i][y] = 1;
		w.push([i, y]); 
	}
	
	var w = []; walls.push(w); /* right part */
	for (var i=x+1; i<=room[2]; i++) { 
		this._map[i][y] = 1;
		w.push([i, y]); 
	}

	var w = []; walls.push(w); /* top part */
	for (var j=room[1]; j<y; j++) { 
		this._map[x][j] = 1;
		w.push([x, j]); 
	}
	
	var w = []; walls.push(w); /* bottom part */
	for (var j=y+1; j<=room[3]; j++) { 
		this._map[x][j] = 1;
		w.push([x, j]); 
	}
		
	var solid = walls.random();
	for (var i=0;i<walls.length;i++) {
		var w = walls[i];
		if (w == solid) { continue; }
		
		var hole = w.random();
		this._map[hole[0]][hole[1]] = 0;
	}

	this._stack.push([room[0], room[1], x-1, y-1]); /* left top */
	this._stack.push([x+1, room[1], room[2], y-1]); /* right top */
	this._stack.push([room[0], y+1, x-1, room[3]]); /* left bottom */
	this._stack.push([x+1, y+1, room[2], room[3]]); /* right bottom */
}
/**
 * @class Icey's Maze generator
 * See http://www.roguebasin.roguelikedevelopment.org/index.php?title=Simple_maze for explanation
 * @augments ROT.Map
 */
ROT.Map.IceyMaze = function(width, height, regularity) {
	ROT.Map.call(this, width, height);
	this._regularity = regularity || 0;
}
ROT.Map.IceyMaze.extend(ROT.Map);

ROT.Map.IceyMaze.prototype.create = function(callback) {
	var width = this._width;
	var height = this._height;
	
	var map = this._fillMap(1);
	
	width -= (width % 2 ? 1 : 2);
	height -= (height % 2 ? 1 : 2);

	var cx = 0;
	var cy = 0;
	var nx = 0;
	var ny = 0;

	var done = 0;
	var blocked = false;
	var dirs = [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0]
	];
	do {
		cx = 1 + 2*Math.floor(ROT.RNG.getUniform()*(width-1) / 2);
		cy = 1 + 2*Math.floor(ROT.RNG.getUniform()*(height-1) / 2);

		if (!done) { map[cx][cy] = 0; }
		
		if (!map[cx][cy]) {
			this._randomize(dirs);
			do {
				if (Math.floor(ROT.RNG.getUniform()*(this._regularity+1)) == 0) { this._randomize(dirs); }
				blocked = true;
				for (var i=0;i<4;i++) {
					nx = cx + dirs[i][0]*2;
					ny = cy + dirs[i][1]*2;
					if (this._isFree(map, nx, ny, width, height)) {
						map[nx][ny] = 0;
						map[cx + dirs[i][0]][cy + dirs[i][1]] = 0;
						
						cx = nx;
						cy = ny;
						blocked = false;
						done++;
						break;
					}
				}
			} while (!blocked);
		}
	} while (done+1 < width*height/4);
	
	for (var i=0;i<this._width;i++) {
		for (var j=0;j<this._height;j++) {
			callback(i, j, map[i][j]);
		}
	}
	this._map = null;
	return this;
}

ROT.Map.IceyMaze.prototype._randomize = function(dirs) {
	for (var i=0;i<4;i++) {
		dirs[i][0] = 0;
		dirs[i][1] = 0;
	}
	
	switch (Math.floor(ROT.RNG.getUniform()*4)) {
		case 0:
			dirs[0][0] = -1; dirs[1][0] = 1;
			dirs[2][1] = -1; dirs[3][1] = 1;
		break;
		case 1:
			dirs[3][0] = -1; dirs[2][0] = 1;
			dirs[1][1] = -1; dirs[0][1] = 1;
		break;
		case 2:
			dirs[2][0] = -1; dirs[3][0] = 1;
			dirs[0][1] = -1; dirs[1][1] = 1;
		break;
		case 3:
			dirs[1][0] = -1; dirs[0][0] = 1;
			dirs[3][1] = -1; dirs[2][1] = 1;
		break;
	}
}

ROT.Map.IceyMaze.prototype._isFree = function(map, x, y, width, height) {
	if (x < 1 || y < 1 || x >= width || y >= height) { return false; }
	return map[x][y];
}
/**
 * @class Maze generator - Eller's algorithm
 * See http://homepages.cwi.nl/~tromp/maze.html for explanation
 * @augments ROT.Map
 */
ROT.Map.EllerMaze = function(width, height) {
	ROT.Map.call(this, width, height);
}
ROT.Map.EllerMaze.extend(ROT.Map);

ROT.Map.EllerMaze.prototype.create = function(callback) {
	var map = this._fillMap(1);
	var w = Math.ceil((this._width-2)/2);
	
	var rand = 9/24;
	
	var L = [];
	var R = [];
	
	for (var i=0;i<w;i++) {
		L.push(i);
		R.push(i);
	}
	L.push(w-1); /* fake stop-block at the right side */

	for (var j=1;j+3<this._height;j+=2) {
		/* one row */
		for (var i=0;i<w;i++) {
			/* cell coords (will be always empty) */
			var x = 2*i+1;
			var y = j;
			map[x][y] = 0;
			
			/* right connection */
			if (i != L[i+1] && ROT.RNG.getUniform() > rand) {
				this._addToList(i, L, R);
				map[x+1][y] = 0;
			}
			
			/* bottom connection */
			if (i != L[i] && ROT.RNG.getUniform() > rand) {
				/* remove connection */
				this._removeFromList(i, L, R);
			} else {
				/* create connection */
				map[x][y+1] = 0;
			}
		}
	}

	/* last row */
	for (var i=0;i<w;i++) {
		/* cell coords (will be always empty) */
		var x = 2*i+1;
		var y = j;
		map[x][y] = 0;
		
		/* right connection */
		if (i != L[i+1] && (i == L[i] || ROT.RNG.getUniform() > rand)) {
			/* dig right also if the cell is separated, so it gets connected to the rest of maze */
			this._addToList(i, L, R);
			map[x+1][y] = 0;
		}
		
		this._removeFromList(i, L, R);
	}
	
	for (var i=0;i<this._width;i++) {
		for (var j=0;j<this._height;j++) {
			callback(i, j, map[i][j]);
		}
	}
	
	return this;
}

/**
 * Remove "i" from its list
 */
ROT.Map.EllerMaze.prototype._removeFromList = function(i, L, R) {
	R[L[i]] = R[i];
	L[R[i]] = L[i];
	R[i] = i;
	L[i] = i;
}

/**
 * Join lists with "i" and "i+1"
 */
ROT.Map.EllerMaze.prototype._addToList = function(i, L, R) {
	R[L[i+1]] = R[i];
	L[R[i]] = L[i+1];
	R[i] = i+1;
	L[i+1] = i;
}
/**
 * @class Cellular automaton map generator
 * @augments ROT.Map
 * @param {int} [width=ROT.DEFAULT_WIDTH]
 * @param {int} [height=ROT.DEFAULT_HEIGHT]
 * @param {object} [options] Options
 * @param {int[]} [options.born] List of neighbor counts for a new cell to be born in empty space
 * @param {int[]} [options.survive] List of neighbor counts for an existing  cell to survive
 * @param {int} [options.topology] Topology 4 or 6 or 8
 */
ROT.Map.Cellular = function(width, height, options) {
	ROT.Map.call(this, width, height);
	this._options = {
		born: [5, 6, 7, 8],
		survive: [4, 5, 6, 7, 8],
		topology: 8
	};
	for (var p in options) { this._options[p] = options[p]; }
	
	this._dirs = ROT.DIRS[this._options.topology];
	this._map = this._fillMap(0);
}
ROT.Map.Cellular.extend(ROT.Map);

/**
 * Fill the map with random values
 * @param {float} probability Probability for a cell to become alive; 0 = all empty, 1 = all full
 */
ROT.Map.Cellular.prototype.randomize = function(probability) {
	for (var i=0;i<this._width;i++) {
		for (var j=0;j<this._height;j++) {
			this._map[i][j] = (ROT.RNG.getUniform() < probability ? 1 : 0);
		}
	}
}

ROT.Map.Cellular.prototype.set = function(x, y, value) {
	this._map[x][y] = value;
}

ROT.Map.Cellular.prototype.create = function(callback) {
	var newMap = this._fillMap(0);
	var born = this._options.born;
	var survive = this._options.survive;


	for (var j=0;j<this._height;j++) {
		var widthStep = 1;
		var widthStart = 0;
		if (this._options.topology == 6) { 
			widthStep = 2;
			widthStart = j%2;
		}

		for (var i=widthStart; i<this._width; i+=widthStep) {

			var cur = this._map[i][j];
			var ncount = this._getNeighbors(i, j);
			
			if (cur && survive.indexOf(ncount) != -1) { /* survive */
				newMap[i][j] = 1;
			} else if (!cur && born.indexOf(ncount) != -1) { /* born */
				newMap[i][j] = 1;
			}
			
			if (callback) { callback(i, j, newMap[i][j]); }
		}
	}
	
	this._map = newMap;
}

/**
 * Get neighbor count at [i,j] in this._map
 */
ROT.Map.Cellular.prototype._getNeighbors = function(cx, cy) {
	var result = 0;
	for (var i=0;i<this._dirs.length;i++) {
		var dir = this._dirs[i];
		var x = cx + dir[0];
		var y = cy + dir[1];
		
		if (x < 0 || x >= this._width || x < 0 || y >= this._width) { continue; }
		result += (this._map[x][y] == 1 ? 1 : 0);
	}
	
	return result;
}
/**
 * @class Dungeon map: has rooms and corridors
 * @augments ROT.Map
 */
ROT.Map.Dungeon = function(width, height) {
	ROT.Map.call(this, width, height);
	this._rooms = []; /* list of all rooms */
	this._corridors = [];
}
ROT.Map.Dungeon.extend(ROT.Map);

/**
 * Get all generated rooms
 * @returns {ROT.Map.Feature.Room[]}
 */
ROT.Map.Dungeon.prototype.getRooms = function() {
	return this._rooms;
}

/**
 * Get all generated corridors
 * @returns {ROT.Map.Feature.Corridor[]}
 */
ROT.Map.Dungeon.prototype.getCorridors = function() {
	return this._corridors;
}
/**
 * @class Random dungeon generator using human-like digging patterns.
 * Heavily based on Mike Anderson's ideas from the "Tyrant" algo, mentioned at 
 * http://www.roguebasin.roguelikedevelopment.org/index.php?title=Dungeon-Building_Algorithm.
 * @augments ROT.Map.Dungeon
 */
ROT.Map.Digger = function(width, height, options) {
	ROT.Map.Dungeon.call(this, width, height);
	
	this._options = {
		roomWidth: [3, 9], /* room minimum and maximum width */
		roomHeight: [3, 5], /* room minimum and maximum height */
		corridorLength: [3, 10], /* corridor minimum and maximum length */
		dugPercentage: 0.2, /* we stop after this percentage of level area has been dug out */
		timeLimit: 1000 /* we stop after this much time has passed (msec) */
	}
	for (var p in options) { this._options[p] = options[p]; }
	
	this._features = {
		"Room": 4,
		"Corridor": 4
	}
	this._featureAttempts = 20; /* how many times do we try to create a feature on a suitable wall */
	this._walls = {}; /* these are available for digging */
	
	this._digCallback = this._digCallback.bind(this);
	this._canBeDugCallback = this._canBeDugCallback.bind(this);
	this._isWallCallback = this._isWallCallback.bind(this);
	this._priorityWallCallback = this._priorityWallCallback.bind(this);
}
ROT.Map.Digger.extend(ROT.Map.Dungeon);

/**
 * Create a map
 * @see ROT.Map#create
 */
ROT.Map.Digger.prototype.create = function(callback) {
	this._rooms = [];
	this._corridors = [];
	this._map = this._fillMap(1);
	this._walls = {};
	this._dug = 0;
	var area = (this._width-2) * (this._height-2);

	this._firstRoom();
	
	var t1 = Date.now();

	do {
		var t2 = Date.now();
		if (t2 - t1 > this._options.timeLimit) { break; }

		/* find a good wall */
		var wall = this._findWall();
		if (!wall) { break; } /* no more walls */
		
		var parts = wall.split(",");
		var x = parseInt(parts[0]);
		var y = parseInt(parts[1]);
		var dir = this._getDiggingDirection(x, y);
		if (!dir) { continue; } /* this wall is not suitable */
		
//		console.log("wall", x, y);

		/* try adding a feature */
		var featureAttempts = 0;
		do {
			featureAttempts++;
			if (this._tryFeature(x, y, dir[0], dir[1])) { /* feature added */
				if (this._rooms.length + this._corridors.length == 2) { this._rooms[0].addDoor(x, y); } /* first room oficially has doors */
				this._removeSurroundingWalls(x, y);
				this._removeSurroundingWalls(x-dir[0], y-dir[1]);
				break; 
			}
		} while (featureAttempts < this._featureAttempts);
		
		var priorityWalls = 0;
		for (var id in this._walls) { 
			if (this._walls[id] > 1) { priorityWalls++; }
		}

	} while (this._dug/area < this._options.dugPercentage || priorityWalls); /* fixme number of priority walls */

	if (callback) {
		for (var i=0;i<this._width;i++) {
			for (var j=0;j<this._height;j++) {
				callback(i, j, this._map[i][j]);
			}
		}
	}
	
	this._walls = {};
	this._map = null;

	return this;
}

ROT.Map.Digger.prototype._digCallback = function(x, y, value) {
	if (value == 0 || value == 2) { /* empty */
		this._map[x][y] = 0;
		this._dug++;
	} else { /* wall */
		this._walls[x+","+y] = 1;
	}
}

ROT.Map.Digger.prototype._isWallCallback = function(x, y) {
	if (x < 0 || y < 0 || x >= this._width || y >= this._height) { return false; }
	return (this._map[x][y] == 1);
}

ROT.Map.Digger.prototype._canBeDugCallback = function(x, y) {
	if (x < 1 || y < 1 || x+1 >= this._width || y+1 >= this._height) { return false; }
	return (this._map[x][y] == 1);
}

ROT.Map.Digger.prototype._priorityWallCallback = function(x, y) {
	this._walls[x+","+y] = 2;
}

ROT.Map.Digger.prototype._firstRoom = function() {
	var cx = Math.floor(this._width/2);
	var cy = Math.floor(this._height/2);
	var room = ROT.Map.Feature.Room.createRandomCenter(cx, cy, this._options);
	this._rooms.push(room);
	room.create(this._digCallback);
}

/**
 * Get a suitable wall
 */
ROT.Map.Digger.prototype._findWall = function() {
	var prio1 = [];
	var prio2 = [];
	for (var id in this._walls) {
		var prio = this._walls[id];
		if (prio == 2) { 
			prio2.push(id); 
		} else {
			prio1.push(id);
		}
	}
	
	var arr = (prio2.length ? prio2 : prio1);
	if (!arr.length) { return null; } /* no walls :/ */
	
	var id = arr.random();
	delete this._walls[id];

	return id;
}

/**
 * Tries adding a feature
 * @returns {bool} was this a successful try?
 */
ROT.Map.Digger.prototype._tryFeature = function(x, y, dx, dy) {
	var feature = null;
	var total = 0;
	for (var p in this._features) { total += this._features[p]; }
	var random = Math.floor(ROT.RNG.getUniform()*total);
	
	var sub = 0;
	for (var p in this._features) {
		sub += this._features[p];
		if (random < sub) { 
			feature = ROT.Map.Feature[p];
			break; 
		}
	}
	
	feature = feature.createRandomAt(x, y, dx, dy, this._options);
	
	if (!feature.isValid(this._isWallCallback, this._canBeDugCallback)) {
//		console.log("not valid");
//		feature.debug();
		return false;
	}
	
	feature.create(this._digCallback);
//	feature.debug();

	if (feature instanceof ROT.Map.Feature.Room) { this._rooms.push(feature); }
	if (feature instanceof ROT.Map.Feature.Corridor) { 
		feature.createPriorityWalls(this._priorityWallCallback);
		this._corridors.push(feature); 
	}
	
	return true;
}

ROT.Map.Digger.prototype._removeSurroundingWalls = function(cx, cy) {
	var deltas = ROT.DIRS[4];

	for (var i=0;i<deltas.length;i++) {
		var delta = deltas[i];
		var x = cx + delta[0];
		var y = cy + delta[1];
		delete this._walls[x+","+y];
		var x = cx + 2*delta[0];
		var y = cy + 2*delta[1];
		delete this._walls[x+","+y];
	}
}

/**
 * Returns vector in "digging" direction, or false, if this does not exist (or is not unique)
 */
ROT.Map.Digger.prototype._getDiggingDirection = function(cx, cy) {
	var result = null;
	var deltas = ROT.DIRS[4];
	
	for (var i=0;i<deltas.length;i++) {
		var delta = deltas[i];
		var x = cx + delta[0];
		var y = cy + delta[1];
		
		if (x < 0 || y < 0 || x >= this._width || y >= this._width) { return null; }
		
		if (!this._map[x][y]) { /* there already is another empty neighbor! */
			if (result) { return null; }
			result = delta;
		}
	}
	
	/* no empty neighbor */
	if (!result) { return null; }
	
	return [-result[0], -result[1]];
}
/**
 * @class Dungeon generator which tries to fill the space evenly. Generates independent rooms and tries to connect them.
 * @augments ROT.Map.Dungeon
 */
ROT.Map.Uniform = function(width, height, options) {
	ROT.Map.Dungeon.call(this, width, height);

	this._options = {
		roomWidth: [3, 9], /* room minimum and maximum width */
		roomHeight: [3, 5], /* room minimum and maximum height */
		roomDugPercentage: 0.1, /* we stop after this percentage of level area has been dug out by rooms */
		timeLimit: 1000 /* we stop after this much time has passed (msec) */
	}
	for (var p in options) { this._options[p] = options[p]; }

	this._roomAttempts = 20; /* new room is created N-times until is considered as impossible to generate */
	this._corridorAttempts = 20; /* corridors are tried N-times until the level is considered as impossible to connect */

	this._connected = []; /* list of already connected rooms */
	this._unconnected = []; /* list of remaining unconnected rooms */
	
	this._digCallback = this._digCallback.bind(this);
	this._canBeDugCallback = this._canBeDugCallback.bind(this);
	this._isWallCallback = this._isWallCallback.bind(this);
}
ROT.Map.Uniform.extend(ROT.Map.Dungeon);

/**
 * Create a map. If the time limit has been hit, returns null.
 * @see ROT.Map#create
 */
ROT.Map.Uniform.prototype.create = function(callback) {
	var t1 = Date.now();
	while (1) {
		var t2 = Date.now();
		if (t2 - t1 > this._options.timeLimit) { return null; } /* time limit! */
	
		this._map = this._fillMap(1);
		this._dug = 0;
		this._rooms = [];
		this._unconnected = [];
		this._generateRooms();
		if (this._generateCorridors()) { break; }
	}
	
	if (callback) {
		for (var i=0;i<this._width;i++) {
			for (var j=0;j<this._height;j++) {
				callback(i, j, this._map[i][j]);
			}
		}
	}
	
	return this;
}

/**
 * Generates a suitable amount of rooms
 */
ROT.Map.Uniform.prototype._generateRooms = function() {
	var w = this._width-2;
	var h = this._height-2;

	do {
		var room = this._generateRoom();
		if (this._dug/(w*h) > this._options.roomDugPercentage) { break; } /* achieved requested amount of free space */
	} while (room);

	/* either enough rooms, or not able to generate more of them :) */
}

/**
 * Try to generate one room
 */
ROT.Map.Uniform.prototype._generateRoom = function() {
	var count = 0;
	while (count < this._roomAttempts) {
		count++;
		
		var room = ROT.Map.Feature.Room.createRandom(this._width, this._height, this._options);
		if (!room.isValid(this._isWallCallback, this._canBeDugCallback)) { continue; }
		
		room.create(this._digCallback);
		this._rooms.push(room);
		return room;
	} 

	/* no room was generated in a given number of attempts */
	return null;
}

/**
 * Generates connectors beween rooms
 * @returns {bool} success Was this attempt successfull?
 */
ROT.Map.Uniform.prototype._generateCorridors = function() {
	var cnt = 0;
	while (cnt < this._corridorAttempts) {
		cnt++;
		this._corridors = [];

		/* dig rooms into a clear map */
		this._map = this._fillMap(1);
		for (var i=0;i<this._rooms.length;i++) { 
			var room = this._rooms[i];
			room.clearDoors();
			room.create(this._digCallback); 
		}

		this._unconnected = this._rooms.clone().randomize();
		this._connected = [];
		if (this._unconnected.length) { this._connected.push(this._unconnected.pop()); } /* first one is always connected */
		
		while (1) {
			/* 1. pick random connected room */
			var connected = this._connected.random();
			
			/* 2. find closest unconnected */
			var room1 = this._closestRoom(this._unconnected, connected);
			
			/* 3. connect it to closest connected */
			var room2 = this._closestRoom(this._connected, room1);
			
			var ok = this._connectRooms(room1, room2);
			if (!ok) { break; } /* stop connecting, re-shuffle */
			
			if (!this._unconnected.length) { return true; } /* done; no rooms remain */
		}
	}
	return false;
}

/**
 * For a given room, find the closest one from the list
 */
ROT.Map.Uniform.prototype._closestRoom = function(rooms, room) {
	var dist = Infinity;
	var center = room.getCenter();
	var result = null;
	
	for (var i=0;i<rooms.length;i++) {
		var r = rooms[i];
		var c = r.getCenter();
		var dx = c[0]-center[0];
		var dy = c[1]-center[1];
		var d = dx*dx+dy*dy;
		
		if (d < dist) {
			dist = d;
			result = r;
		}
	}
	
	return result;
}

ROT.Map.Uniform.prototype._connectRooms = function(room1, room2) {
	/*
		room1.debug();
		room2.debug();
	*/

	var center1 = room1.getCenter();
	var center2 = room2.getCenter();

	var diffX = center2[0] - center1[0];
	var diffY = center2[1] - center1[1];

	if (Math.abs(diffX) < Math.abs(diffY)) { /* first try connecting north-south walls */
		var dirIndex1 = (diffY > 0 ? 2 : 0);
		var dirIndex2 = (dirIndex1 + 2) % 4;
		var min = room2.getLeft();
		var max = room2.getRight();
		var index = 0;
	} else { /* first try connecting east-west walls */
		var dirIndex1 = (diffX > 0 ? 1 : 3);
		var dirIndex2 = (dirIndex1 + 2) % 4;
		var min = room2.getTop();
		var max = room2.getBottom();
		var index = 1;
	}

	var start = this._placeInWall(room1, dirIndex1); /* corridor will start here */
	if (!start) { return false; }

	if (start[index] >= min && start[index] <= max) { /* possible to connect with straight line (I-like) */
		var end = start.clone();
		var value = null;
		switch (dirIndex2) {
			case 0: value = room2.getTop()-1; break;
			case 1: value = room2.getRight()+1; break;
			case 2: value = room2.getBottom()+1; break;
			case 3: value = room2.getLeft()-1; break;
		}
		end[(index+1)%2] = value;
		this._digLine([start, end]);
		
	} else if (start[index] < min-1 || start[index] > max+1) { /* need to switch target wall (L-like) */

		var diff = start[index] - center2[index];
		switch (dirIndex2) {
			case 0:
			case 1:	var rotation = (diff < 0 ? 3 : 1); break;
			case 2:
			case 3:	var rotation = (diff < 0 ? 1 : 3); break;
		}
		dirIndex2 = (dirIndex2 + rotation) % 4;
		
		var end = this._placeInWall(room2, dirIndex2);
		if (!end) { return false; }

		var mid = [0, 0];
		mid[index] = start[index];
		var index2 = (index+1)%2;
		mid[index2] = end[index2];
		this._digLine([start, mid, end]);
		
	} else { /* use current wall pair, but adjust the line in the middle (S-like) */
	
		var index2 = (index+1)%2;
		var end = this._placeInWall(room2, dirIndex2);
		if (!end) { return; }
		var mid = Math.round((end[index2] + start[index2])/2);

		var mid1 = [0, 0];
		var mid2 = [0, 0];
		mid1[index] = start[index];
		mid1[index2] = mid;
		mid2[index] = end[index];
		mid2[index2] = mid;
		this._digLine([start, mid1, mid2, end]);
	}

	room1.addDoor(start[0], start[1]);
	room2.addDoor(end[0], end[1]);
	
	var index = this._unconnected.indexOf(room1);
	if (index != -1) {
		this._unconnected.splice(index, 1);
		this._connected.push(room1);
	}

	var index = this._unconnected.indexOf(room2);
	if (index != -1) {
		this._unconnected.splice(index, 1);
		this._connected.push(room2);
	}
	
	return true;
}

ROT.Map.Uniform.prototype._placeInWall = function(room, dirIndex) {
	var start = [0, 0];
	var dir = [0, 0];
	var length = 0;
	
	switch (dirIndex) {
		case 0:
			dir = [1, 0];
			start = [room.getLeft(), room.getTop()-1];
			length = room.getRight()-room.getLeft()+1;
		break;
		case 1:
			dir = [0, 1];
			start = [room.getRight()+1, room.getTop()];
			length = room.getBottom()-room.getTop()+1;
		break;
		case 2:
			dir = [1, 0];
			start = [room.getLeft(), room.getBottom()+1];
			length = room.getRight()-room.getLeft()+1;
		break;
		case 3:
			dir = [0, 1];
			start = [room.getLeft()-1, room.getTop()];
			length = room.getBottom()-room.getTop()+1;
		break;
	}
	
	var avail = [];
	var lastBadIndex = -2;

	for (var i=0;i<length;i++) {
		var x = start[0] + i*dir[0];
		var y = start[1] + i*dir[1];
		avail.push(null);
		
		var isWall = (this._map[x][y] == 1);
		if (isWall) {
			if (lastBadIndex != i-1) { avail[i] = [x, y]; }
		} else {
			lastBadIndex = i;
			if (i) { avail[i-1] = null; }
		}
	}
	
	for (var i=avail.length-1; i>=0; i--) {
		if (!avail[i]) { avail.splice(i, 1); }
	}
	return (avail.length ? avail.random() : null);
}

/**
 * Dig a polyline.
 */
ROT.Map.Uniform.prototype._digLine = function(points) {
	for (var i=1;i<points.length;i++) {
		var start = points[i-1];
		var end = points[i];
		var corridor = new ROT.Map.Feature.Corridor(start[0], start[1], end[0], end[1]);
		corridor.create(this._digCallback);
		this._corridors.push(corridor);
	}
}

ROT.Map.Uniform.prototype._digCallback = function(x, y, value) {
	this._map[x][y] = value;
	if (value == 0) { this._dug++; }
}

ROT.Map.Uniform.prototype._isWallCallback = function(x, y) {
	if (x < 0 || y < 0 || x >= this._width || y >= this._height) { return false; }
	return (this._map[x][y] == 1);
}

ROT.Map.Uniform.prototype._canBeDugCallback = function(x, y) {
	if (x < 1 || y < 1 || x+1 >= this._width || y+1 >= this._height) { return false; }
	return (this._map[x][y] == 1);
}

/**
 * @class
 * Dungeon feature; has own .create() method
 */
ROT.Map.Feature = function() {}
ROT.Map.Feature.prototype.isValid = function(canBeDugCallback) {}
ROT.Map.Feature.prototype.create = function(digCallback) {}
ROT.Map.Feature.prototype.debug = function() {}
ROT.Map.Feature.createRandomAt = function(x, y, dx, dy, options) {}

/**
 * @class Room
 * @augments ROT.Map.Feature
 * @param {int} x1
 * @param {int} y1
 * @param {int} x2
 * @param {int} y2
 * @param {int} [doorX]
 * @param {int} [doorY]
 */
ROT.Map.Feature.Room = function(x1, y1, x2, y2, doorX, doorY) {
	this._x1 = x1;
	this._y1 = y1;
	this._x2 = x2;
	this._y2 = y2;
	this._doors = {};
	if (arguments.length > 4) { this.addDoor(doorX, doorY); }
}
ROT.Map.Feature.Room.extend(ROT.Map.Feature);

/**
 * Room of random size, with a given doors and direction
 */
ROT.Map.Feature.Room.createRandomAt = function(x, y, dx, dy, options) {
	var min = options.roomWidth[0];
	var max = options.roomWidth[1];
	var width = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));
	
	var min = options.roomHeight[0];
	var max = options.roomHeight[1];
	var height = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));
	
	if (dx == 1) { /* to the right */
		var y2 = y - Math.floor(ROT.RNG.getUniform() * height);
		return new this(x+1, y2, x+width, y2+height-1, x, y);
	}
	
	if (dx == -1) { /* to the left */
		var y2 = y - Math.floor(ROT.RNG.getUniform() * height);
		return new this(x-width, y2, x-1, y2+height-1, x, y);
	}

	if (dy == 1) { /* to the bottom */
		var x2 = x - Math.floor(ROT.RNG.getUniform() * width);
		return new this(x2, y+1, x2+width-1, y+height, x, y);
	}

	if (dy == -1) { /* to the top */
		var x2 = x - Math.floor(ROT.RNG.getUniform() * width);
		return new this(x2, y-height, x2+width-1, y-1, x, y);
	}
}

/**
 * Room of random size, positioned around center coords
 */
ROT.Map.Feature.Room.createRandomCenter = function(cx, cy, options) {
	var min = options.roomWidth[0];
	var max = options.roomWidth[1];
	var width = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));
	
	var min = options.roomHeight[0];
	var max = options.roomHeight[1];
	var height = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));

	var x1 = cx - Math.floor(ROT.RNG.getUniform()*width);
	var y1 = cy - Math.floor(ROT.RNG.getUniform()*height);
	var x2 = x1 + width - 1;
	var y2 = y1 + height - 1;

	return new this(x1, y1, x2, y2);
}

/**
 * Room of random size within a given dimensions
 */
ROT.Map.Feature.Room.createRandom = function(availWidth, availHeight, options) {
	var min = options.roomWidth[0];
	var max = options.roomWidth[1];
	var width = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));
	
	var min = options.roomHeight[0];
	var max = options.roomHeight[1];
	var height = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));
	
	var left = availWidth - width - 1;
	var top = availHeight - height - 1;

	var x1 = 1 + Math.floor(ROT.RNG.getUniform()*left);
	var y1 = 1 + Math.floor(ROT.RNG.getUniform()*top);
	var x2 = x1 + width - 1;
	var y2 = y1 + height - 1;

	return new this(x1, y1, x2, y2);
}

ROT.Map.Feature.Room.prototype.addDoor = function(x, y) {
	this._doors[x+","+y] = 1;
}

ROT.Map.Feature.Room.prototype.clearDoors = function() {
	this._doors = {};
	return this;
}

ROT.Map.Feature.Room.prototype.debug = function() {
	console.log("room", this._x1, this._y1, this._x2, this._y2);
}

ROT.Map.Feature.Room.prototype.isValid = function(isWallCallback, canBeDugCallback) { 
	var left = this._x1-1;
	var right = this._x2+1;
	var top = this._y1-1;
	var bottom = this._y2+1;
	
	for (var x=left; x<=right; x++) {
		for (var y=top; y<=bottom; y++) {
			if (x == left || x == right || y == top || y == bottom) {
				if (!isWallCallback(x, y)) { return false; }
			} else {
				if (!canBeDugCallback(x, y)) { return false; }
			}
		}
	}

	return true;
}

/**
 * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty, 1 = wall, 2 = door. Multiple doors are allowed.
 */
ROT.Map.Feature.Room.prototype.create = function(digCallback) { 
	var left = this._x1-1;
	var right = this._x2+1;
	var top = this._y1-1;
	var bottom = this._y2+1;
	
	var value = 0;
	for (var x=left; x<=right; x++) {
		for (var y=top; y<=bottom; y++) {
			if (x+","+y in this._doors) {
				value = 2;
			} else if (x == left || x == right || y == top || y == bottom) {
				value = 1;
			} else {
				value = 0;
			}
			digCallback(x, y, value);
		}
	}
}

ROT.Map.Feature.Room.prototype.getCenter = function() {
	return [Math.round((this._x1 + this._x2)/2), Math.round((this._y1 + this._y2)/2)];
}

ROT.Map.Feature.Room.prototype.getLeft = function() {
	return this._x1;
}

ROT.Map.Feature.Room.prototype.getRight = function() {
	return this._x2;
}

ROT.Map.Feature.Room.prototype.getTop = function() {
	return this._y1;
}

ROT.Map.Feature.Room.prototype.getBottom = function() {
	return this._y2;
}

/**
 * @class Corridor
 * @augments ROT.Map.Feature
 * @param {int} startX
 * @param {int} startY
 * @param {int} endX
 * @param {int} endY
 */
ROT.Map.Feature.Corridor = function(startX, startY, endX, endY) {
	this._startX = startX;
	this._startY = startY;
	this._endX = endX; 
	this._endY = endY;
	this._endsWithAWall = true;
}
ROT.Map.Feature.Corridor.extend(ROT.Map.Feature);

ROT.Map.Feature.Corridor.createRandomAt = function(x, y, dx, dy, options) {
	var min = options.corridorLength[0];
	var max = options.corridorLength[1];
	var length = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));
	
	return new this(x, y, x + dx*length, y + dy*length);
}

ROT.Map.Feature.Corridor.prototype.debug = function() {
	console.log("corridor", this._startX, this._startY, this._endX, this._endY);
}

ROT.Map.Feature.Corridor.prototype.isValid = function(isWallCallback, canBeDugCallback){ 
	var sx = this._startX;
	var sy = this._startY;
	var dx = this._endX-sx;
	var dy = this._endY-sy;
	var length = 1 + Math.max(Math.abs(dx), Math.abs(dy));
	
	if (dx) { dx = dx/Math.abs(dx); }
	if (dy) { dy = dy/Math.abs(dy); }
	var nx = dy;
	var ny = -dx;
	
	var ok = true;
	for (var i=0; i<length; i++) {
		var x = sx + i*dx;
		var y = sy + i*dy;

		if (!canBeDugCallback(     x,      y)) { ok = false; }
		if (!isWallCallback  (x + nx, y + ny)) { ok = false; }
		if (!isWallCallback  (x - nx, y - ny)) { ok = false; }
		
		if (!ok) {
			length = i;
			this._endX = x-dx;
			this._endY = y-dy;
			break;
		}
	}
	
	/**
	 * If the length degenerated, this corridor might be invalid
	 */
	 
	/* not supported */
	if (length == 0) { return false; } 
	
	 /* length 1 allowed only if the next space is empty */
	if (length == 1 && isWallCallback(this._endX + dx, this._endY + dy)) { return false; }
	
	/**
	 * We do not want the corridor to crash into a corner of a room;
	 * if any of the ending corners is empty, the N+1th cell of this corridor must be empty too.
	 * 
	 * Situation:
	 * #######1
	 * .......?
	 * #######2
	 * 
	 * The corridor was dug from left to right.
	 * 1, 2 - problematic corners, ? = N+1th cell (not dug)
	 */
	var firstCornerBad = !isWallCallback(this._endX + dx + nx, this._endY + dy + ny);
	var secondCornerBad = !isWallCallback(this._endX + dx - nx, this._endY + dy - ny);
	this._endsWithAWall = isWallCallback(this._endX + dx, this._endY + dy);
	if ((firstCornerBad || secondCornerBad) && this._endsWithAWall) { return false; }

	return true;
}

/**
 * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty.
 */
ROT.Map.Feature.Corridor.prototype.create = function(digCallback) { 
	var sx = this._startX;
	var sy = this._startY;
	var dx = this._endX-sx;
	var dy = this._endY-sy;
	var length = 1+Math.max(Math.abs(dx), Math.abs(dy));
	
	if (dx) { dx = dx/Math.abs(dx); }
	if (dy) { dy = dy/Math.abs(dy); }
	var nx = dy;
	var ny = -dx;
	
	for (var i=0; i<length; i++) {
		var x = sx + i*dx;
		var y = sy + i*dy;
		digCallback(x, y, 0);
	}
	
	return true;
}

ROT.Map.Feature.Corridor.prototype.createPriorityWalls = function(priorityWallCallback) {
	if (!this._endsWithAWall) { return; }

	var sx = this._startX;
	var sy = this._startY;

	var dx = this._endX-sx;
	var dy = this._endY-sy;
	if (dx) { dx = dx/Math.abs(dx); }
	if (dy) { dy = dy/Math.abs(dy); }
	var nx = dy;
	var ny = -dx;

	priorityWallCallback(this._endX + dx, this._endY + dy);
	priorityWallCallback(this._endX + nx, this._endY + ny);
	priorityWallCallback(this._endX - nx, this._endY - ny);
}/**
 * @class Base noise generator
 */
ROT.Noise = function() {
};

ROT.Noise.prototype.get = function(x, y) {}
/**
 * A simple 2d implementation of simplex noise by Ondrej Zara
 *
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 */

/**
 * @class 2D simplex noise generator
 * @param {int} [gradients=256] Random gradients
 */
ROT.Noise.Simplex = function(gradients) {
	ROT.Noise.call(this);

	this._F2 = 0.5 * (Math.sqrt(3) - 1);
    this._G2 = (3 - Math.sqrt(3)) / 6;

	this._gradients = [
		[ 0, -1],
		[ 1, -1],
		[ 1,  0],
		[ 1,  1],
		[ 0,  1],
		[-1,  1],
		[-1,  0],
		[-1, -1]
	];

	var permutations = [];
	var count = gradients || 256;
	for (var i=0;i<count;i++) { permutations.push(i); }
	permutations = permutations.randomize();

	this._perms = [];
	this._indexes = [];

	for (var i=0;i<2*count;i++) {
		this._perms.push(permutations[i % count]);
		this._indexes.push(this._perms[i] % this._gradients.length);
	}

};
ROT.Noise.Simplex.extend(ROT.Noise);

ROT.Noise.Simplex.prototype.get = function(xin, yin) {
	var perms = this._perms;
	var indexes = this._indexes;
	var count = perms.length/2;
	var G2 = this._G2;

	var n0 =0, n1 = 0, n2 = 0, gi; // Noise contributions from the three corners

	// Skew the input space to determine which simplex cell we're in
	var s = (xin + yin) * this._F2; // Hairy factor for 2D
	var i = ~~(xin + s);
	var j = ~~(yin + s);
	var t = (i + j) * G2;
	var X0 = i - t; // Unskew the cell origin back to (x,y) space
	var Y0 = j - t;
	var x0 = xin - X0; // The x,y distances from the cell origin
	var y0 = yin - Y0;

	// For the 2D case, the simplex shape is an equilateral triangle.
	// Determine which simplex we are in.
	var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
	if (x0 > y0) {
		i1 = 1;
		j1 = 0;
	} else { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
		i1 = 0;
		j1 = 1;
	} // upper triangle, YX order: (0,0)->(0,1)->(1,1)

	// A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
	// a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
	// c = (3-sqrt(3))/6
	var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
	var y1 = y0 - j1 + G2;
	var x2 = x0 - 1 + 2*G2; // Offsets for last corner in (x,y) unskewed coords
	var y2 = y0 - 1 + 2*G2;

	// Work out the hashed gradient indices of the three simplex corners
	var ii = i.mod(count);
	var jj = j.mod(count);

	// Calculate the contribution from the three corners
	var t0 = 0.5 - x0*x0 - y0*y0;
	if (t0 >= 0) {
		t0 *= t0;
		gi = indexes[ii+perms[jj]];
		var grad = this._gradients[gi];
		n0 = t0 * t0 * (grad[0] * x0 + grad[1] * y0);
	}
	
	var t1 = 0.5 - x1*x1 - y1*y1;
	if (t1 >= 0) {
		t1 *= t1;
		gi = indexes[ii+i1+perms[jj+j1]];
		var grad = this._gradients[gi];
		n1 = t1 * t1 * (grad[0] * x1 + grad[1] * y1);
	}
	
	var t2 = 0.5 - x2*x2 - y2*y2;
	if (t2 >= 0) {
		t2 *= t2;
		gi = indexes[ii+1+perms[jj+1]];
		var grad = this._gradients[gi];
		n2 = t2 * t2 * (grad[0] * x2 + grad[1] * y2);
	}

	// Add contributions from each corner to get the final noise value.
	// The result is scaled to return values in the interval [-1,1].
	return 70 * (n0 + n1 + n2);
}
/**
 * @class Abstract FOV algorithm
 * @param {function} lightPassesCallback Does the light pass through x,y?
 * @param {object} [options]
 * @param {int} [options.topology=8] 4/6/8
 */
ROT.FOV = function(lightPassesCallback, options) {
	this._lightPasses = lightPassesCallback;
	this._options = {
		topology: 8
	}
	for (var p in options) { this._options[p] = options[p]; }
};

/**
 * Compute visibility
 * @param {int} x
 * @param {int} y
 * @param {int} R Maximum visibility radius
 * @param {function} callback
 */
ROT.FOV.prototype.compute = function(x, y, R, callback) {}

/**
 * Return all neighbors in a concentric ring
 * @param {int} cx center-x
 * @param {int} cy center-y
 * @param {int} r range
 */
ROT.FOV.prototype._getCircle = function(cx, cy, r) {
	var result = [];
	var dirs, countFactor, startOffset;

	switch (this._options.topology) {
		case 4:
			countFactor = 1;
			startOffset = [0, 1];
			dirs = [
				ROT.DIRS[8][7],
				ROT.DIRS[8][1],
				ROT.DIRS[8][3],
				ROT.DIRS[8][5]
			]
		break;

		case 6:
			dirs = ROT.DIRS[6];
			countFactor = 1;
			startOffset = [-1, 1];
		break;

		case 8:
			dirs = ROT.DIRS[4];
			countFactor = 2;
			startOffset = [-1, 1];
		break;
	}

	/* starting neighbor */
	var x = cx + startOffset[0]*r;
	var y = cy + startOffset[1]*r;

	/* circle */
	for (var i=0;i<dirs.length;i++) {
		for (var j=0;j<r*countFactor;j++) {
			result.push([x, y]);
			x += dirs[i][0];
			y += dirs[i][1];

		}
	}

	return result;
}
/**
 * @class Discrete shadowcasting algorithm
 * @augments ROT.FOV
 */
ROT.FOV.DiscreteShadowcasting = function(lightPassesCallback, options) {
	ROT.FOV.call(this, lightPassesCallback, options);
}
ROT.FOV.DiscreteShadowcasting.extend(ROT.FOV);

/**
 * @see ROT.FOV#compute
 */
ROT.FOV.DiscreteShadowcasting.prototype.compute = function(x, y, R, callback) {
	var center = this._coords;
	var map = this._map;

	/* this place is always visible */
	callback(x, y, 0);

	/* standing in a dark place. FIXME is this a good idea?  */
	if (!this._lightPasses(x, y)) { return; }
	
	/* start and end angles */
	var DATA = [];
	
	var A, B, cx, cy, blocks;

	/* analyze surrounding cells in concentric rings, starting from the center */
	for (var r=1; r<=R; r++) {
		var neighbors = this._getCircle(x, y, r);
		var angle = 360 / neighbors.length;

		for (var i=0;i<neighbors.length;i++) {
			cx = neighbors[i][0];
			cy = neighbors[i][1];
			A = angle * (i - 0.5);
			B = A + angle;
			
			blocks = !this._lightPasses(cx, cy);
			if (this._visibleCoords(Math.floor(A), Math.ceil(B), blocks, DATA)) { callback(cx, cy, r); }
			
			if (DATA.length == 2 && DATA[0] == 0 && DATA[1] == 360) { return; } /* cutoff? */

		} /* for all cells in this ring */
	} /* for all rings */
}

/**
 * @param {int} A start angle
 * @param {int} B end angle
 * @param {bool} blocks Does current cell block visibility?
 * @param {int[][]} DATA shadowed angle pairs
 */
ROT.FOV.DiscreteShadowcasting.prototype._visibleCoords = function(A, B, blocks, DATA) {
	if (A < 0) { 
		var v1 = arguments.callee(0, B, blocks, DATA);
		var v2 = arguments.callee(360+A, 360, blocks, DATA);
		return v1 || v2;
	}
	
	var index = 0;
	while (index < DATA.length && DATA[index] < A) { index++; }
	
	if (index == DATA.length) { /* completely new shadow */
		if (blocks) { DATA.push(A, B); } 
		return true;
	}
	
	var count = 0;
	
	if (index % 2) { /* this shadow starts in an existing shadow, or within its ending boundary */
		while (index < DATA.length && DATA[index] < B) {
			index++;
			count++;
		}
		
		if (count == 0) { return false; }
		
		if (blocks) { 
			if (count % 2) {
				DATA.splice(index-count, count, B);
			} else {
				DATA.splice(index-count, count);
			}
		}
		
		return true;

	} else { /* this shadow starts outside an existing shadow, or within a starting boundary */
		while (index < DATA.length && DATA[index] < B) {
			index++;
			count++;
		}
		
		/* visible when outside an existing shadow, or when overlapping */
		if (A == DATA[index-count] && count == 1) { return false; }
		
		if (blocks) { 
			if (count % 2) {
				DATA.splice(index-count, count, A);
			} else {
				DATA.splice(index-count, count, A, B);
			}
		}
			
		return true;
	}
}
/**
 * @class Precise shadowcasting algorithm
 * @augments ROT.FOV
 */
ROT.FOV.PreciseShadowcasting = function(lightPassesCallback, options) {
	ROT.FOV.call(this, lightPassesCallback, options);
}
ROT.FOV.PreciseShadowcasting.extend(ROT.FOV);

/**
 * @see ROT.FOV#compute
 */
ROT.FOV.PreciseShadowcasting.prototype.compute = function(x, y, R, callback) {
	/* this place is always visible */
	callback(x, y, 0, 1);

	/* standing in a dark place. FIXME is this a good idea?  */
	if (!this._lightPasses(x, y)) { return; }
	
	/* list of all shadows */
	var SHADOWS = [];
	
	var cx, cy, blocks, A1, A2, visibility;

	/* analyze surrounding cells in concentric rings, starting from the center */
	for (var r=1; r<=R; r++) {
		var neighbors = this._getCircle(x, y, r);
		var neighborCount = neighbors.length;

		for (var i=0;i<neighborCount;i++) {
			cx = neighbors[i][0];
			cy = neighbors[i][1];
			/* shift half-an-angle backwards to maintain consistency of 0-th cells */
			A1 = [i ? 2*i-1 : 2*neighborCount-1, 2*neighborCount];
			A2 = [2*i+1, 2*neighborCount]; 
			
			blocks = !this._lightPasses(cx, cy);
			visibility = this._checkVisibility(A1, A2, blocks, SHADOWS);
			if (visibility) { callback(cx, cy, r, visibility); }

			if (SHADOWS.length == 2 && SHADOWS[0][0] == 0 && SHADOWS[1][0] == SHADOWS[1][1]) { return; } /* cutoff? */

		} /* for all cells in this ring */
	} /* for all rings */
}

/**
 * @param {int[2]} A1 arc start
 * @param {int[2]} A2 arc end
 * @param {bool} blocks Does current arc block visibility?
 * @param {int[][]} SHADOWS list of active shadows
 */
ROT.FOV.PreciseShadowcasting.prototype._checkVisibility = function(A1, A2, blocks, SHADOWS) {
	if (A1[0] > A2[0]) { /* split into two sub-arcs */
		var v1 = this._checkVisibility(A1, [A1[1], A1[1]], blocks, SHADOWS);
		var v2 = this._checkVisibility([0, 1], A2, blocks, SHADOWS);
		return (v1+v2)/2;
	}

	/* index1: first shadow >= A1 */
	var index1 = 0, edge1 = false;
	while (index1 < SHADOWS.length) {
		var old = SHADOWS[index1];
		var diff = old[0]*A1[1] - A1[0]*old[1];
		if (diff >= 0) { /* old >= A1 */
			if (diff == 0 && !(index1 % 2)) { edge1 = true; }
			break;
		}
		index1++;
	}

	/* index2: last shadow <= A2 */
	var index2 = SHADOWS.length, edge2 = false;
	while (index2--) {
		var old = SHADOWS[index2];
		var diff = A2[0]*old[1] - old[0]*A2[1];
		if (diff >= 0) { /* old <= A2 */
			if (diff == 0 && (index2 % 2)) { edge2 = true; }
			break;
		}
	}

	var visible = true;
	if (index1 == index2 && (edge1 || edge2)) {  /* subset of existing shadow, one of the edges match */
		visible = false; 
	} else if (edge1 && edge2 && index1+1==index2 && (index2 % 2)) { /* completely equivalent with existing shadow */
		visible = false;
	} else if (index1 > index2 && (index1 % 2)) { /* subset of existing shadow, not touching */
		visible = false;
	}
	
	if (!visible) { return 0; } /* fast case: not visible */
	
	var visibleLength, P;

	/* compute the length of visible arc, adjust list of shadows (if blocking) */
	var remove = index2-index1+1;
	if (remove % 2) {
		if (index1 % 2) { /* first edge within existing shadow, second outside */
			var P = SHADOWS[index1];
			visibleLength = (A2[0]*P[1] - P[0]*A2[1]) / (P[1] * A2[1]);
			if (blocks) { SHADOWS.splice(index1, remove, A2); }
		} else { /* second edge within existing shadow, first outside */
			var P = SHADOWS[index2];
			visibleLength = (P[0]*A1[1] - A1[0]*P[1]) / (A1[1] * P[1]);
			if (blocks) { SHADOWS.splice(index1, remove, A1); }
		}
	} else {
		if (index1 % 2) { /* both edges within existing shadows */
			var P1 = SHADOWS[index1];
			var P2 = SHADOWS[index2];
			visibleLength = (P2[0]*P1[1] - P1[0]*P2[1]) / (P1[1] * P2[1]);
			if (blocks) { SHADOWS.splice(index1, remove); }
		} else { /* both edges outside existing shadows */
			if (blocks) { SHADOWS.splice(index1, remove, A1, A2); }
			return 1; /* whole arc visible! */
		}
	}

	var arcLength = (A2[0]*A1[1] - A1[0]*A2[1]) / (A1[1] * A2[1]);

	return visibleLength/arcLength;
}
/**
 * @class Lighting computation, based on a traditional FOV for multiple light sources and multiple passes.
 * @param {function} reflectivityCallback Callback to retrieve cell reflectivity (0..1)
 * @param {object} [options]
 * @param {int} [options.passes=1] Number of passes. 1 equals to simple FOV of all light sources, >1 means a simplified radiosity algorithm.
 * @param {int} [options.emissionThreshold=0.2] Cells with emissivity > threshold will be treated in light source in the next pass.
 */
ROT.Lighting = function(reflectivityCallback, options) {
	this._reflectivityCallback = reflectivityCallback;
	this._options = {
		passes: 1,
		emissionThreshold: 0.2
	};
	for (var p in options) {
		this._options[p] = options[p];
	}
	this._fov = null;

	this._range = 10; /* FIXME */
	this._lights = {};
	this._reflectivityCache = {};
	this._fovCache = {};
}

/**
 * Set the used Field-Of-View algo
 * @param {ROT.FOV} fov
 */
ROT.Lighting.prototype.setFOV = function(fov) {
	this._fov = fov;
	this._fovCache = {};
	return this;
}

/**
 * Define a new light source
 * @param {int} x
 * @param {int} y
 * @param {int[3]} color
 */
ROT.Lighting.prototype.addLight = function(x, y, color) {
	this._lights[x+","+y] = color;
	return this;
}

/**
 * Remove an existing light source
 * @param {int} x
 * @param {int} y
 */
ROT.Lighting.prototype.removeLight = function(x, y) {
	delete this._lights[x+","+y];
	return this;
}

/**
 * Reset the pre-computed topology values. Call whenever the underlying map changes its light-passability.
 */
ROT.Lighting.prototype.reset = function() {
	this._reflectivityCache = {};
	this._fovCache = {};

	return this;
}

/**
 * Compute the lighting
 * @param {function} lightingCallback Will be called with (x, y, color, intensity) for every lit cell and light source lighting that cell
 */
ROT.Lighting.prototype.compute = function(lightingCallback) {
	for (var key in this._lights) { /* compute all lights independently */

		var parts = key.split(",");
		var x = parseInt(parts[0]);
		var y = parseInt(parts[1]);

		var litCells = {};
		var emittingCells = {};
		emittingCells[key] = 1;

		for (var i=0;i<this._options.passes;i++) { /* emit as long as requested */
			this._emitLight(emittingCells, litCells);
		}

		for (var litKey in litCells) { /* let the user know what and how is lit */
			var parts = litKey.split(",");
			var x = parseInt(parts[0]);
			var y = parseInt(parts[1]);
			var intensity = litCells[litKey];
			/* FIXME intensity threshold */
			lightingCallback(x, y, this._lights[key], intensity);
		}

	}

	return this;
}

/**
 * Compute one iteration from all emitting cells
 */
ROT.Lighting.prototype._emitLight = function(emittingCells, litCells) {
	/* first, emit from all cells */
	for (var key in emittingCells) {
		var parts = key.split(",");
		var x = parseInt(parts[0]);
		var y = parseInt(parts[1]);
		this._emitLightFromCell(x, y, emittingCells[key], litCells);
		delete emittingCells[key];
	}

	/* second, mark "strong" lit cells as emitters for further iterations */
	for (var key in litCells) {
		if (!(key in this._reflectivityCache)) { 
			var parts = key.split(",");
			var x = parseInt(parts[0]);
			var y = parseInt(parts[1]);
			this._reflectivityCache[key] = this._reflectivityCallback(x, y);
		}
		var emissionIntensity = litCells[key] * this._reflectivityCache[key];
		if (emissionIntensity > this._options.emissionThreshold) { emittingCells[key] = emissionIntensity; }
	}
}

/**
 * Compute one iteration from one cell
 * @param {int} x
 * @param {int} y
 * @param {?} ?
 * @param {object} litCells Cell data to by updated
 */
ROT.Lighting.prototype._emitLightFromCell = function(x, y, intensity, litCells) {
	var key = x+","+y;
	if (!(key in this._fovCache)) { this._updateFOV(x, y); }
	var fov = this._fovCache[key];

	for (var fovKey in fov) {
		var formFactor = fov[fovKey];
		/* FIXME form factor threshold? */
		if (!(fovKey in litCells)) { litCells[fovKey] = 0; }
		litCells[fovKey] += intensity*formFactor;
	}
}

/**
 * Compute FOV ("form factor") for a potential light source at [x,y]
 * @param {int} x
 * @param {int} y
 */
ROT.Lighting.prototype._updateFOV = function(x, y) {
	var key1 = x+","+y;
	var cache = {};
	this._fovCache[key1] = cache;
	var cb = function(x, y, r) {
		var key2 = x+","+y;
		cache[key2] = 1/(r+1);
	}
	this._fov.compute(x, y, this._range, cb.bind(this));
	/* FIXME normalize to a constant vaue? */
}
/**
 * @class Abstract pathfinder
 * @param {int} toX Target X coord
 * @param {int} toY Target Y coord
 * @param {function} passableCallback Callback to determine map passability
 * @param {object} [options]
 * @param {int} [options.topology=8]
 */
ROT.Path = function(toX, toY, passableCallback, options) {
	this._toX = toX;
	this._toY = toY;
	this._fromX = null;
	this._fromY = null;
	this._passableCallback = passableCallback;
	this._options = {
		topology: 8
	}
	for (var p in options) { this._options[p] = options[p]; }

	this._dirs = ROT.DIRS[this._options.topology];
}

/**
 * Compute a path from a given point
 * @param {int} fromX
 * @param {int} fromY
 * @param {function} callback Will be called for every path item with arguments "x" and "y"
 */
ROT.Path.prototype.compute = function(fromX, fromY, callback) {
}

ROT.Path.prototype._getNeighbors = function(cx, cy) {
	var result = [];
	for (var i=0;i<this._dirs.length;i++) {
		var dir = this._dirs[i];
		var x = cx + dir[0];
		var y = cy + dir[1];
		
		if (!this._passableCallback(x, y)) { continue; }
		result.push([x, y]);
	}
	
	return result;
}
/**
 * @class Simplified Dijkstra's algorithm: all edges have a value of 1
 * @augments ROT.Path
 * @see ROT.Path
 */
ROT.Path.Dijkstra = function(toX, toY, passableCallback, options) {
	ROT.Path.call(this, toX, toY, passableCallback, options);

	this._computed = {};
	this._todo = [];
	this._add(toX, toY, null);
}
ROT.Path.Dijkstra.extend(ROT.Path);

/**
 * Compute a path from a given point
 * @see ROT.Path#compute
 */
ROT.Path.Dijkstra.prototype.compute = function(fromX, fromY, callback) {
	var key = fromX+","+fromY;
	if (!(key in this._computed)) { this._compute(fromX, fromY); }
	if (!(key in this._computed)) { return; }
	
	var item = this._computed[key];
	while (item) {
		callback(item.x, item.y);
		item = item.prev;
	}
}

/**
 * Compute a non-cached value
 */
ROT.Path.Dijkstra.prototype._compute = function(fromX, fromY) {
	while (this._todo.length) {
		var item = this._todo.shift();
		if (item.x == fromX && item.y == fromY) { return; }
		
		var neighbors = this._getNeighbors(item.x, item.y);
		
		for (var i=0;i<neighbors.length;i++) {
			var neighbor = neighbors[i];
			var x = neighbor[0];
			var y = neighbor[1];
			var id = x+","+y;
			if (id in this._computed) { continue; } /* already done */	
			this._add(x, y, item); 
		}
	}
}

ROT.Path.Dijkstra.prototype._add = function(x, y, prev) {
	var obj = {
		x: x,
		y: y,
		prev: prev
	}
	this._computed[x+","+y] = obj;
	this._todo.push(obj);
}
/**
 * @class Simplified A* algorithm: all edges have a value of 1
 * @augments ROT.Path
 * @see ROT.Path
 */
ROT.Path.AStar = function(toX, toY, passableCallback, options) {
	ROT.Path.call(this, toX, toY, passableCallback, options);

	this._todo = [];
	this._done = {};
	this._fromX = null;
	this._fromY = null;
}
ROT.Path.AStar.extend(ROT.Path);

/**
 * Compute a path from a given point
 * @see ROT.Path#compute
 */
ROT.Path.AStar.prototype.compute = function(fromX, fromY, callback) {
	this._todo = [];
	this._done = {};
	this._fromX = fromX;
	this._fromY = fromY;
	this._add(this._toX, this._toY, null);

	while (this._todo.length) {
		var item = this._todo.shift();
		if (item.x == fromX && item.y == fromY) { break; }
		var neighbors = this._getNeighbors(item.x, item.y);

		for (var i=0;i<neighbors.length;i++) {
			var neighbor = neighbors[i];
			var x = neighbor[0];
			var y = neighbor[1];
			var id = x+","+y;
			if (id in this._done) { continue; }
			this._add(x, y, item); 
		}
	}
	
	var item = this._done[fromX+","+fromY];
	if (!item) { return; }
	
	while (item) {
		callback(item.x, item.y);
		item = item.prev;
	}
}

ROT.Path.AStar.prototype._add = function(x, y, prev) {
	var obj = {
		x: x,
		y: y,
		prev: prev,
		g: (prev ? prev.g+1 : 0),
		h: this._distance(x, y)
	}
	this._done[x+","+y] = obj;
	
	/* insert into priority queue */
	
	var f = obj.g + obj.h;
	for (var i=0;i<this._todo.length;i++) {
		var item = this._todo[i];
		if (f < item.g + item.h) {
			this._todo.splice(i, 0, obj);
			return;
		}
	}
	
	this._todo.push(obj);
}

ROT.Path.AStar.prototype._distance = function(x, y) {
	switch (this._options.topology) {
		case 4:
			return (Math.abs(x-this._fromX) + Math.abs(y-this._fromY));
		break;

		case 6:
			var dx = Math.abs(x - this._fromX);
			var dy = Math.abs(y - this._fromY);
			return dy + Math.max(0, (dx-dy)/2);
		break;

		case 8: 
			return Math.max(Math.abs(x-this._fromX), Math.abs(y-this._fromY));
		break;
	}
}
