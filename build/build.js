!function e(t,n,i){function r(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return r(n?n:e)},l,l.exports,e,t,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var i={};for(var r in e)e.hasOwnProperty(r)&&(i[r]=t.util.clone(e[r]));return i;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var i=t.util.clone(t.languages[e]);for(var r in n)i[r]=n[r];return i},insertBefore:function(e,n,i,r){r=r||t.languages;var o=r[e];if(2==arguments.length){i=arguments[1];for(var a in i)i.hasOwnProperty(a)&&(o[a]=i[a]);return o}var s={};for(var c in o)if(o.hasOwnProperty(c)){if(c==n)for(var a in i)i.hasOwnProperty(a)&&(s[a]=i[a]);s[c]=o[c]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,n,i){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],i||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var i,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),o=0;i=r[o++];)t.highlightElement(i,e===!0,n)},highlightElement:function(i,r,o){for(var a,s,c=i;c&&!e.test(c.className);)c=c.parentNode;if(c&&(a=(c.className.match(e)||[,""])[1],s=t.languages[a]),s){i.className=i.className.replace(e,"").replace(/\s+/g," ")+" language-"+a,c=i.parentNode,/pre/i.test(c.nodeName)&&(c.className=c.className.replace(e,"").replace(/\s+/g," ")+" language-"+a);var l=i.textContent;if(l){l=l.replace(/^(?:\r?\n|\r)/,"");var u={element:i,language:a,grammar:s,code:l};if(t.hooks.run("before-highlight",u),r&&self.Worker){var p=new Worker(t.filename);p.onmessage=function(e){u.highlightedCode=n.stringify(JSON.parse(e.data),a),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(u.element),t.hooks.run("after-highlight",u)},p.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,o&&o.call(i),t.hooks.run("after-highlight",u)}}},highlight:function(e,i,r){var o=t.tokenize(e,i);return n.stringify(t.util.encode(o),r)},tokenize:function(e,n){var i=t.Token,r=[e],o=n.rest;if(o){for(var a in o)n[a]=o[a];delete n.rest}e:for(var a in n)if(n.hasOwnProperty(a)&&n[a]){var s=n[a];s="Array"===t.util.type(s)?s:[s];for(var c=0;c<s.length;++c){var l=s[c],u=l.inside,p=!!l.lookbehind,d=0,f=l.alias;l=l.pattern||l;for(var g=0;g<r.length;g++){var h=r[g];if(r.length>e.length)break e;if(!(h instanceof i)){l.lastIndex=0;var b=l.exec(h);if(b){p&&(d=b[1].length);var m=b.index-1+d,b=b[0].slice(d),v=b.length,y=m+v,k=h.slice(0,m+1),w=h.slice(y+1),x=[g,1];k&&x.push(k);var E=new i(a,u?t.tokenize(b,u):b,f);x.push(E),w&&x.push(w),Array.prototype.splice.apply(r,x)}}}}}return r},hooks:{all:{},add:function(e,n){var i=t.hooks.all;i[e]=i[e]||[],i[e].push(n)},run:function(e,n){var i=t.hooks.all[e];if(i&&i.length)for(var r,o=0;r=i[o++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,i,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,i,e)}).join("");var o={type:e.type,content:n.stringify(e.content,i,r),tag:"span",classes:["token",e.type],attributes:{},language:i,parent:r};if("comment"==o.type&&(o.attributes.spellcheck="true"),e.alias){var a="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,a)}t.hooks.run("wrap",o);var s="";for(var c in o.attributes)s+=c+'="'+(o.attributes[c]||"")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'" '+s+">"+o.content+"</"+o.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[i])))),self.close()},!1),self.Prism):self.Prism;var i=document.getElementsByTagName("script");return i=i[i.length-1],i&&(t.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:n.languages.markup.tag.inside},rest:n.languages.css},alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:n.languages.markup.tag.inside},rest:n.languages.javascript},alias:"language-javascript"}}),function(){self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var i=t.getAttribute("data-src"),r=(i.match(/\.(\w+)$/)||[,""])[1],o=e[r]||r,a=document.createElement("code");a.className="language-"+o,t.textContent="",a.textContent="Loading…",t.appendChild(a);var s=new XMLHttpRequest;s.open("GET",i,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(a.textContent=s.responseText,n.highlightElement(a)):a.textContent=s.status>=400?"✖ Error "+s.status+" while fetching file: "+s.statusText:"✖ Error: File does not exist or is empty")},s.send(null)})},self.Prism.fileHighlight())}()},{}],2:[function(e,t){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var i=document.createElement("div");return i.className=n,i.classList.add("bespoke-backdrop"),e.parent.appendChild(i),i}}function n(t){if(t){var n=o.indexOf(t),a=e.slide();i(t,"active"),i(t,"inactive"),i(t,"before"),i(t,"after"),n!==a?(r(t,"inactive"),r(t,a>n?"before":"after")):r(t,"active")}}function i(e,t){e.classList.remove("bespoke-backdrop-"+t)}function r(e,t){e.classList.add("bespoke-backdrop-"+t)}var o;o=e.slides.map(t),e.on("activate",function(){o.forEach(n)})}}},{}],3:[function(e,t){"use strict";var n,i="convenient",r=function(e){return e("return this")()}(Function),o={logger:{log:function(){console.log.apply(console,arguments)}}},a=function(){var e={};e.logger={},e.logger.log=r.convenientOptions&&r.convenientOptions.logger&&r.convenientOptions.logger.log||o.logger.log,r.convenientOptions=e},s={},c=[],l=function(e){if(!e)throw n.generateErrorObject("deck must be defined.");var t=c.some(function(t){return t.deck===e});return t},u=function(e){var t=l(e);t||c.push({deck:e,storage:{}})},p=function(e,t){if(!e)throw n.generateErrorObject("pluginName must be defined.");if(!t)throw n.generateErrorObject("deck must be defined.");var i=s.getDeckStorage(t),r=!(!i||!i[e]);return r},d=function(e,t){if(!e)throw n.generateErrorObject("pluginName must be defined.");if(!t)throw n.generateErrorObject("deck must be defined.");var i=s.getDeckStorage(t);i||(u(t),i=s.getDeckStorage(t)),i[e]={}},f=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},g=function(){a()};s.builder=function(e){if(!e)throw n.generateErrorObject("The plugin options were not properly defined.");if("string"==typeof e&&(e={pluginName:e}),"string"!=typeof e.pluginName)throw n.generateErrorObject("The plugin name was not properly defined.");var t={},i="bespoke."+e.pluginName,o=function(e){return new Error(i+": "+e)},a=e.pluginName,c=function(e){return a+"."+e},l=function(e,t,n,i,r,o){var a=s.createEventData.call(e,t,n,i,r,o);return a},u=function(e,t,n,i,r){return e.fire(c(t),l(e,a,t,n,i,r))},f=function(){var e=[i];r.convenientOptions.logger.log.apply(r.convenientOptions.logger.log,e.concat(s.copyArray(arguments)))},g=function(t){var i=p(e.pluginName,t);if(i)throw n.generateErrorObject("The '"+e.pluginName+"' plugin has already been activated for this deck, can't activate it twice.")},h=function(e){var n={};return n.createEventData=t.createEventData.bind(this,e),n.fire=t.fire.bind(this,e),n.getStorage=t.getStorage.bind(this,e),n.log=t.log.bind(this,e),n},b=function(t){var n;return g(t),d(e.pluginName,t),n=h(t)},m=function(){t.createEventData=l.bind(this),t.generateErrorObject=o.bind(this),t.fire=u.bind(this),t.log=f.bind(this),t.activateDeck=b.bind(this),t.getStorage=s.getDeckPluginStorage.bind(this,e.pluginName)},v=function(){m()};return v(),t},s.getDeckStorage=function(e){if(!e)throw n.generateErrorObject("deck must be defined.");var t=null;return c.some(function(n){return n.deck===e?(t=n.storage,!0):!1}),t},s.getDeckPluginStorage=function(e,t){if(!e)throw n.generateErrorObject("pluginName must be defined.");if(!t)throw n.generateErrorObject("deck must be defined.");var i=s.getDeckStorage(t);if(!i)throw n.generateErrorObject("storage was not initiated for this deck.");return i[e]},s.createEventData=function(e,t,n,i,r){return r=r||{},r.eventNamespace=e||null,r.eventName=t||null,r.innerEvent=n||null,f(i)?(r.index=i,r.slide=this.slides[i]):(r.index=this.slides.indexOf(i),r.slide=i),r},s.copyArray=function(e){return[].slice.call(e,0)},n=s.builder(i),g(),t.exports=s},{}],4:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),i=parseInt(t,10);t&&(i?n(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")===t&&n(i)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],5:[function(e,t){"use strict";var n="indexfinger",i=function(e){return e("return this")()}(Function),r=i.bespoke&&i.bespoke.plugins&&i.bespoke.plugins.convenient||e("bespoke-convenient"),o=r.builder(n),a=function(){var e=function(e){var t=(o.activateDeck(e),{}),n=null,i=-1,r={enableActiveSlideListener:function(){t.saveActiveSlide=this.on("activate",r.saveActiveSlide.bind(this))},saveActiveSlide:function(e){n=e.slide,i=e.index},getActiveSlide:function(){return n},getActiveSlideIndex:function(){return i}},a=function(){e.getActiveSlide=r.getActiveSlide.bind(e),e.getActiveSlideIndex=r.getActiveSlideIndex.bind(e)},s=function(){r.enableActiveSlideListener.call(e)},c=function(){a(),s()};c()};return e};t.exports=a},{"bespoke-convenient":3}],6:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],7:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),i=document.createElement("div"),r="vertical"===e?"height":"width";n.className="bespoke-progress-parent",i.className="bespoke-progress-bar",n.appendChild(i),t.parent.appendChild(n),t.on("activate",function(e){i.style[r]=100*e.index/(t.slides.length-1)+"%"})}}},{}],8:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,i=t.slides[0],r=i.offsetHeight,o=i.offsetWidth,a="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},c=a?t.slides:t.slides.map(s),l=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,i){return i+e in n.style?i+e:t},e.toLowerCase())}("Transform"),u=a?function(e,t){t.style.zoom=e}:function(e,t){t.style[l]="scale("+e+")"},p=function(){var e=n.offsetWidth/o,t=n.offsetHeight/r;c.forEach(u.bind(null,Math.min(e,t)))};window.addEventListener("resize",p),p()}}},{}],9:[function(e,t){"use strict";var n="secondary",i=function(e){return e("return this")()}(Function),r=i.bespoke&&i.bespoke.plugins&&i.bespoke.plugins.convenient||e("bespoke-convenient"),o=r.builder(n),a=(i.bespoke&&i.bespoke.plugins&&i.bespoke.plugins.indexfinger||e("bespoke-indexfinger"),{S:83}),s={notes:"aside",keys:{toggle:a.S}},c=function(e,t){var n,i;return void 0===t&&(t=e,e=0),n=t-e,i=e+Math.floor(Math.random()*n)},l=n+"-window-",u=function(){var e=c(1e3,1e4),t=l+e;return t},p=function(e){e.body.innerHTML="<h1>Notes</h1><div id='notes'></div>"},d=function(e){var t=function(t){var n=o.activateDeck(t),i={},a={getNotesElement:function(){return this.secondary.window&&this.secondary.window.document&&this.secondary.window.document.getElementById("notes")},isOpen:function(){var e=this.secondary,t=e.window,n=!(void 0===e||null===t||t.closed===!0||t.opener!==window||null===this.secondary.getNotesElement());return n},open:function(){return this.secondary.isOpen()||(this.secondary.window=window.open(),p(this.secondary.window.document)),this.secondary.isOpen()},close:function(){return this.secondary.isOpen()&&this.secondary.window.close(),!this.secondary.isOpen()},focus:function(){return this.secondary.isOpen()&&this.secondary.window.focus(),this.secondary.isOpen()},toggle:function(){return this.secondary.isOpen()?this.secondary.close():this.secondary.open(),this.secondary.isOpen()},synchronize:function(){var t,n,i,o;return this.secondary.isOpen()?(t=this.secondary.getNotesElement(),n=this.getActiveSlide(),i=r.copyArray(n.querySelectorAll(e.notes)),o=i.reduce(function(e,t){return e+t.outerHTML},""),t.innerHTML=o,this.secondary.isOpen()):!1}},c=function(){t.secondary={window:null,secondaryWindowName:u(),getNotesElement:a.getNotesElement.bind(t),isOpen:a.isOpen.bind(t),open:a.open.bind(t),close:a.close.bind(t),focus:a.focus.bind(t),toggle:a.toggle.bind(t),synchronize:a.synchronize.bind(t)}},l=function(){var t={};e=e||{},t.keys={},t.keys.toggle=e.keys&&e.keys.toggle||s.keys.toggle,t.notes=e.notes||s.notes,e=t},d=function(i){var r=!1;return i.altKey||i.ctrlKey||i.metaKey||i.shiftKey||(r=r||i.which===e.keys.toggle&&n.fire("toggle",i)&&t.secondary.toggle()&&t.secondary.synchronize()),r&&i.preventDefault(),!r},f=function(){return t.secondary.close(),null},g=function(){t.secondary.synchronize()},h=function(){window.onbeforeunload=f,document.addEventListener("keydown",d,!1),i.activate=t.on("activate",g)},b=function(){l(),c(),h()};b()};return t};t.exports=d},{"bespoke-convenient":3,"bespoke-indexfinger":5}],10:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof i?r=i:"undefined"!=typeof self&&(r=self);var o=r;o=o.bespoke||(o.bespoke={}),o=o.themes||(o.themes={}),o.voltaire=e()}}(function(){return function t(n,i,r){function o(s,c){if(!i[s]){if(!n[s]){var l="function"==typeof e&&e;if(!c&&l)return l(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=i[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return o(t?t:e)},u,u.exports,t,n,i,r)}return i[s].exports}for(var a="function"==typeof e&&e,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t){var n=e("bespoke-classes"),i=e("insert-css");t.exports=function(){var e='/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-size:1em}kbd,pre,samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{margin:0}html{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto}.bespoke-parent{font-size:1.5em;background:#111;color:#fff;font-family:gill sans,helvetica,arial,arial,sans-serif;overflow:hidden;text-align:center;-webkit-transition:background 1s ease;transition:background 1s ease;background-position:50% 50%}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none;z-index:1}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{text-shadow:0 1px 0 rgba(0,0,0,.75);-webkit-transition:opacity .3s ease;transition:opacity .3s ease;width:720px;height:480px;position:absolute;top:50%;left:50%;margin-left:-360px;margin-top:-240px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:1}.bespoke-active{-webkit-transition-delay:.3s;transition-delay:.3s}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{-webkit-transition:opacity 1s ease;transition:opacity 1s ease;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0}.bespoke-backdrop-active{opacity:1}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw;z-index:1}.bespoke-progress-bar{background:#fff;position:absolute;top:0;left:0;height:100%;-webkit-transition:width 1s ease;transition:width 1s ease}.bespoke-bullet{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.bespoke-bullet-inactive{opacity:0}strong{font-weight:400}h1 strong{font-weight:600}h1,h2,h3,p,li{padding-left:20px;padding-right:20px}h1,h3,p,li,pre{font-weight:200}h1{font-family:didot,times new roman,serif;font-style:italic;margin:.17em 0}h2{font-family:gill sans,helvetica,arial,arial,sans-serif;font-weight:400;font-size:1.1em;margin:.1em 0}h2,h3{font-style:normal}h3{font-size:.6em;margin:1.1em 0}ul,ol{padding:0;margin:0;text-align:left}li{list-style:none;margin:.2em;font-style:normal;-webkit-transform:translateX(-6px);-ms-transform:translateX(-6px);transform:translateX(-6px)}li:before{content:\'\\2014\';margin-right:4px}pre{background:none!important}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{color:currentColor;text-decoration:none;border-bottom:1px solid currentColor}.emphatic{background:#f30}';return i(e,{prepend:!0}),function(e){n()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,r){var o=e.slides[e.slide()],a=r-e.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==o&&["inactive",s,s+"-"+Math.abs(a)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(r){e.slides.map(i),t(r.slide,"active"),n(r.slide,"inactive")})}}},{}],3:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var i=document.createElement("style");i.setAttribute("type","text/css"),"textContent"in i?i.textContent=e:i.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];t&&t.prepend?r.insertBefore(i,r.childNodes[0]):r.appendChild(i)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(e,t){t.exports=function(e){return function(t){var n,i,r="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+r],i=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+r]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(i)>50&&t[i>0?"prev":"next"]()})}}},{}],12:[function(e,t){var n=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),i=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),r=i[0],o={},a=function(e,t){i[e]&&(u("deactivate",p(r,t)),r=i[e],u("activate",p(r,t)))},s=function(e,t){return arguments.length?(u("slide",p(i[e],t))&&a(e,t),void 0):i.indexOf(r)},c=function(e,t){var n=i.indexOf(r)+e;u(e>0?"next":"prev",p(r,t))&&a(n,t)},l=function(e,t){return(o[e]||(o[e]=[])).push(t),function(){o[e]=o[e].filter(function(e){return e!==t})}},u=function(e,t){return(o[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},p=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},d={on:l,fire:u,slide:s,next:c.bind(null,1),prev:c.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(d)}),a(0),d};t.exports={from:n}},{}],13:[function(e){var t=e("bespoke"),n=e("bespoke-theme-voltaire"),i=e("bespoke-keys"),r=e("bespoke-touch"),o=e("bespoke-backdrop"),a=e("bespoke-scale"),s=e("bespoke-hash"),c=e("bespoke-progress"),l=e("bespoke-secondary"),u=e("./getActiveSlide.js");t.from("article",[n(),i(),r(),o(),a(),s(),c(),l(),u()]),e("./../../bower_components/prism/prism.js")},{"./../../bower_components/prism/prism.js":1,"./getActiveSlide.js":14,bespoke:12,"bespoke-backdrop":2,"bespoke-hash":4,"bespoke-keys":6,"bespoke-progress":7,"bespoke-scale":8,"bespoke-secondary":9,"bespoke-theme-voltaire":10,"bespoke-touch":11}],14:[function(e,t){t.exports=function(){return function(e){e.getActiveSlide=function(){var e=this.slides.filter(function(e){return e.classList.contains("bespoke-active")});return e.length&&e[0]||{}}}}},{}]},{},[13]);