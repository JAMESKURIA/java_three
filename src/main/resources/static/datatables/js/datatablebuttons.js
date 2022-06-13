/*!
 Buttons for DataTables 2.0.1
 ©2016-2021 SpryMedia Ltd - datatables.net/license
*/
(function(e){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(C){return e(C,window,document)}):"object"===typeof exports?module.exports=function(C,y){C||(C=window);y&&y.fn.dataTable||(y=require("datatables.net")(C,y).$);return e(y,C,C.document)}:e(jQuery,window,document)})(function(e,C,y,p){function I(a,b,c){e.fn.animate?a.stop().fadeIn(b,c):(a.css("display","block"),c&&c.call(a))}function J(a,b,c){e.fn.animate?a.stop().fadeOut(b,c):(a.css("display","none"),c&&c.call(a))}
function L(a,b){a=new u.Api(a);b=b?b:a.init().buttons||u.defaults.buttons;return(new v(a,b)).container()}var u=e.fn.dataTable,O=0,P=0,z=u.ext.buttons,v=function(a,b){if(!(this instanceof v))return function(c){return(new v(c,a)).container()};"undefined"===typeof b&&(b={});!0===b&&(b={});Array.isArray(b)&&(b={buttons:b});this.c=e.extend(!0,{},v.defaults,b);b.buttons&&(this.c.buttons=b.buttons);this.s={dt:new u.Api(a),buttons:[],listenKeys:"",namespace:"dtb"+O++};this.dom={container:e("<"+this.c.dom.container.tag+
"/>").addClass(this.c.dom.container.className)};this._constructor()};e.extend(v.prototype,{action:function(a,b){a=this._nodeToButton(a);if(b===p)return a.conf.action;a.conf.action=b;return this},active:function(a,b){var c=this._nodeToButton(a);a=this.c.dom.button.active;c=e(c.node);if(b===p)return c.hasClass(a);c.toggleClass(a,b===p?!0:b);return this},add:function(a,b){var c=this.s.buttons;if("string"===typeof b){b=b.split("-");var d=this.s;c=0;for(var l=b.length-1;c<l;c++)d=d.buttons[1*b[c]];c=d.buttons;
b=1*b[b.length-1]}this._expandButton(c,a,a!==p?a.split:p,(a===p||a.split===p||0===a.split.length)&&d!==p,!1,b);this._draw();return this},collectionRebuild:function(a,b){a=this._nodeToButton(a);if(b!==p){var c;for(c=a.buttons.length-1;0<=c;c--)this.remove(a.buttons[c].node);for(c=0;c<b.length;c++)this._expandButton(a.buttons,b[c],b[c]!==p&&b[c].config!==p&&b[c].config.split!==p,!0,b[c].parentConf!==p&&b[c].parentConf.split!==p,c,b[c].parentConf)}this._draw(a.collection,a.buttons)},container:function(){return this.dom.container},
disable:function(a){a=this._nodeToButton(a);e(a.node).addClass(this.c.dom.button.disabled).attr("disabled",!0);return this},destroy:function(){e("body").off("keyup."+this.s.namespace);var a=this.s.buttons.slice(),b;var c=0;for(b=a.length;c<b;c++)this.remove(a[c].node);this.dom.container.remove();a=this.s.dt.settings()[0];c=0;for(b=a.length;c<b;c++)if(a.inst===this){a.splice(c,1);break}return this},enable:function(a,b){if(!1===b)return this.disable(a);a=this._nodeToButton(a);e(a.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled");
return this},name:function(){return this.c.name},node:function(a){if(!a)return this.dom.container;a=this._nodeToButton(a);return e(a.node)},processing:function(a,b){var c=this.s.dt,d=this._nodeToButton(a);if(b===p)return e(d.node).hasClass("processing");e(d.node).toggleClass("processing",b);e(c.table().node()).triggerHandler("buttons-processing.dt",[b,c.button(a),c,e(a),d.conf]);return this},remove:function(a){var b=this._nodeToButton(a),c=this._nodeToHost(a),d=this.s.dt;if(b.buttons.length)for(var l=
b.buttons.length-1;0<=l;l--)this.remove(b.buttons[l].node);b.conf.destroying=!0;b.conf.destroy&&b.conf.destroy.call(d.button(a),d,e(a),b.conf);this._removeKey(b.conf);e(b.node).remove();a=e.inArray(b,c);c.splice(a,1);return this},text:function(a,b){var c=this._nodeToButton(a);a=this.c.dom.collection.buttonLiner;a=c.inCollection&&a&&a.tag?a.tag:this.c.dom.buttonLiner.tag;var d=this.s.dt,l=e(c.node),f=function(k){return"function"===typeof k?k(d,l,c.conf):k};if(b===p)return f(c.conf.text);c.conf.text=
b;a?l.children(a).filter(":not(.dt-down-arrow)").html(f(b)):l.html(f(b));return this},_constructor:function(){var a=this,b=this.s.dt,c=b.settings()[0],d=this.c.buttons;c._buttons||(c._buttons=[]);c._buttons.push({inst:this,name:this.c.name});for(var l=0,f=d.length;l<f;l++)this.add(d[l]);b.on("destroy",function(k,h){h===c&&a.destroy()});e("body").on("keyup."+this.s.namespace,function(k){if(!y.activeElement||y.activeElement===y.body){var h=String.fromCharCode(k.keyCode).toLowerCase();-1!==a.s.listenKeys.toLowerCase().indexOf(h)&&
a._keypress(h,k)}})},_addKey:function(a){a.key&&(this.s.listenKeys+=e.isPlainObject(a.key)?a.key.key:a.key)},_draw:function(a,b){a||(a=this.dom.container,b=this.s.buttons);a.children().detach();for(var c=0,d=b.length;c<d;c++)a.append(b[c].inserter),a.append(" "),b[c].buttons&&b[c].buttons.length&&this._draw(b[c].collection,b[c].buttons)},_expandButton:function(a,b,c,d,l,f,k){var h=this.s.dt,n=0,q=Array.isArray(b)?b:[b];b===p&&(q=Array.isArray(c)?c:[c]);c=0;for(var r=q.length;c<r;c++){var m=this._resolveExtends(q[c]);
if(m)if(b=m.config!==p&&m.config.split?!0:!1,Array.isArray(m))this._expandButton(a,m,g!==p&&g.conf!==p?g.conf.split:p,d,k!==p&&k.split!==p,f,k);else{var g=this._buildButton(m,d,m.split!==p||m.config!==p&&m.config.split!==p,l);if(g){f!==p&&null!==f?(a.splice(f,0,g),f++):a.push(g);if(g.conf.buttons||g.conf.split){g.collection=e("<"+(b?this.c.dom.splitCollection.tag:this.c.dom.collection.tag)+"/>");g.conf._collection=g.collection;if(g.conf.split)for(var t=0;t<g.conf.split.length;t++)"object"===typeof g.conf.split[t]&&
(g.conf.split[c].parent=k,g.conf.split[t].collectionLayout===p&&(g.conf.split[t].collectionLayout=g.conf.collectionLayout),g.conf.split[t].dropup===p&&(g.conf.split[t].dropup=g.conf.dropup),g.conf.split[t].fade===p&&(g.conf.split[t].fade=g.conf.fade));else e(g.node).append(e('<span class="dt-down-arrow">'+this.c.dom.splitDropdown.text+"</span>"));this._expandButton(g.buttons,g.conf.buttons,g.conf.split,!b,b,f,g.conf)}g.conf.parent=k;m.init&&m.init.call(h.button(g.node),h,e(g.node),m);n++}}}},_buildButton:function(a,
b,c,d){var l=this.c.dom.button,f=this.c.dom.buttonLiner,k=this.c.dom.collection,h=this.c.dom.splitCollection,n=this.c.dom.splitDropdownButton,q=this.s.dt,r=function(w){return"function"===typeof w?w(q,m,a):w};!c&&d&&h?l=n:!c&&b&&k.button&&(l=k.button);!c&&d&&h.buttonLiner?f=h.buttonLiner:!c&&b&&k.buttonLiner&&(f=k.buttonLiner);if(a.available&&!a.available(q,a)&&!a.hasOwnProperty("html"))return!1;if(a.hasOwnProperty("html"))var m=e(a.html);else{var g=function(w,B,E,F){F.action.call(B.button(E),w,B,
E,F);e(B.table().node()).triggerHandler("buttons-action.dt",[B.button(E),B,E,F])};k=a.tag||l.tag;var t=a.clickBlurs===p?!1:a.clickBlurs;m=e("<"+k+"/>").addClass(l.className).addClass(d?this.c.dom.splitDropdownButton.className:"").attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(w){w.preventDefault();!m.hasClass(l.disabled)&&a.action&&g(w,q,m,a);t&&m.trigger("blur")}).on("keyup.dtb",function(w){13===w.keyCode&&!m.hasClass(l.disabled)&&
a.action&&g(w,q,m,a)});"a"===k.toLowerCase()&&m.attr("href","#");"button"===k.toLowerCase()&&m.attr("type","button");f.tag?(k=e("<"+f.tag+"/>").html(r(a.text)).addClass(f.className),"a"===f.tag.toLowerCase()&&k.attr("href","#"),m.append(k)):m.html(r(a.text));!1===a.enabled&&m.addClass(l.disabled);a.className&&m.addClass(a.className);a.titleAttr&&m.attr("title",r(a.titleAttr));a.attr&&m.attr(a.attr);a.namespace||(a.namespace=".dt-button-"+P++);a.config!==p&&a.config.split&&(a.split=a.config.split)}f=
(f=this.c.dom.buttonContainer)&&f.tag?e("<"+f.tag+"/>").addClass(f.className).append(m):m;this._addKey(a);this.c.buttonCreated&&(f=this.c.buttonCreated(a,f));if(c){var x=e("<div/>").addClass(this.c.dom.splitWrapper.className);x.append(m);var A=e.extend(a,{text:this.c.dom.splitDropdown.text,className:this.c.dom.splitDropdown.className,attr:{"aria-haspopup":!0,"aria-expanded":!1},align:this.c.dom.splitDropdown.align,splitAlignClass:this.c.dom.splitDropdown.splitAlignClass});this._addKey(A);var G=function(w,
B,E,F){z.split.action.call(B.button(e("div.dt-btn-split-wrapper")[0]),w,B,E,F);e(B.table().node()).triggerHandler("buttons-action.dt",[B.button(E),B,E,F]);E.attr("aria-expanded",!0)},D=e('<button class="'+this.c.dom.splitDropdown.className+' dt-button"><span class="dt-btn-split-drop-arrow">'+this.c.dom.splitDropdown.text+"</span></button>").on("click.dtb",function(w){w.preventDefault();w.stopPropagation();!D.hasClass(l.disabled)&&A.action&&G(w,q,D,A);t&&D.trigger("blur")}).on("keyup.dtb",function(w){13===
w.keyCode&&!D.hasClass(l.disabled)&&A.action&&G(w,q,D,A)});0===a.split.length&&D.addClass("dtb-hide-drop");x.append(D).attr(A.attr)}return{conf:a,node:c?x.get(0):m.get(0),inserter:c?x:f,buttons:[],inCollection:b,isSplit:c,inSplit:d,collection:null}},_nodeToButton:function(a,b){b||(b=this.s.buttons);for(var c=0,d=b.length;c<d;c++){if(b[c].node===a)return b[c];if(b[c].buttons.length){var l=this._nodeToButton(a,b[c].buttons);if(l)return l}}},_nodeToHost:function(a,b){b||(b=this.s.buttons);for(var c=
0,d=b.length;c<d;c++){if(b[c].node===a)return b;if(b[c].buttons.length){var l=this._nodeToHost(a,b[c].buttons);if(l)return l}}},_keypress:function(a,b){if(!b._buttonsHandled){var c=function(d){for(var l=0,f=d.length;l<f;l++){var k=d[l].conf,h=d[l].node;k.key&&(k.key===a?(b._buttonsHandled=!0,e(h).click()):!e.isPlainObject(k.key)||k.key.key!==a||k.key.shiftKey&&!b.shiftKey||k.key.altKey&&!b.altKey||k.key.ctrlKey&&!b.ctrlKey||k.key.metaKey&&!b.metaKey||(b._buttonsHandled=!0,e(h).click()));d[l].buttons.length&&
c(d[l].buttons)}};c(this.s.buttons)}},_removeKey:function(a){if(a.key){var b=e.isPlainObject(a.key)?a.key.key:a.key;a=this.s.listenKeys.split("");b=e.inArray(b,a);a.splice(b,1);this.s.listenKeys=a.join("")}},_resolveExtends:function(a){var b=this.s.dt,c,d=function(h){for(var n=0;!e.isPlainObject(h)&&!Array.isArray(h);){if(h===p)return;if("function"===typeof h){if(h=h(b,a),!h)return!1}else if("string"===typeof h){if(!z[h])return{html:h};h=z[h]}n++;if(30<n)throw"Buttons: Too many iterations";}return Array.isArray(h)?
h:e.extend({},h)};for(a=d(a);a&&a.extend;){if(!z[a.extend])throw"Cannot extend unknown button type: "+a.extend;var l=d(z[a.extend]);if(Array.isArray(l))return l;if(!l)return!1;var f=l.className;a.config!==p&&l.config!==p&&(a.config=e.extend({},l.config,a.config));a=e.extend({},l,a);f&&a.className!==f&&(a.className=f+" "+a.className);var k=a.postfixButtons;if(k){a.buttons||(a.buttons=[]);f=0;for(c=k.length;f<c;f++)a.buttons.push(k[f]);a.postfixButtons=null}if(k=a.prefixButtons){a.buttons||(a.buttons=
[]);f=0;for(c=k.length;f<c;f++)a.buttons.splice(f,0,k[f]);a.prefixButtons=null}a.extend=l.extend}return a},_popover:function(a,b,c,d){d=this.c;var l=!1,f=e.extend({align:"button-left",autoClose:!1,background:!0,backgroundClassName:"dt-button-background",contentClassName:d.dom.collection.className,collectionLayout:"",collectionTitle:"",dropup:!1,fade:400,popoverTitle:"",rightAlignClassName:"dt-button-right",splitRightAlignClassName:"dt-button-split-right",splitLeftAlignClassName:"dt-button-split-left",
tag:d.dom.collection.tag},c),k=b.node(),h=function(){l=!0;J(e(".dt-button-collection"),f.fade,function(){e(this).detach()});e(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr("aria-expanded","false");e("div.dt-button-background").off("click.dtb-collection");v.background(!1,f.backgroundClassName,f.fade,k);e("body").off(".dtb-collection");b.off("buttons-action.b-internal");b.off("destroy")};!1===a&&h();c=e(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes());c.length&&
(k=c.eq(0),h());c=e("<div/>").addClass("dt-button-collection").addClass(f.collectionLayout).addClass(f.splitAlignClass).css("display","none");a=e(a).addClass(f.contentClassName).attr("role","menu").appendTo(c);k.attr("aria-expanded","true");k.parents("body")[0]!==y.body&&(k=y.body.lastChild);f.popoverTitle?c.prepend('<div class="dt-button-collection-title">'+f.popoverTitle+"</div>"):f.collectionTitle&&c.prepend('<div class="dt-button-collection-title">'+f.collectionTitle+"</div>");I(c.insertAfter(k),
f.fade);var n=e(b.table().container());d=c.css("position");"dt-container"===f.align&&(k=k.parent(),c.css("width",n.width()));if("absolute"===d){var q=k.position();d=e(b.node()).position();c.css({top:e(e(b[0].node).parent()[0]).hasClass("dt-buttons")?d.top+k.outerHeight():q.top+k.outerHeight(),left:q.left});q=c.outerHeight();var r=n.offset().top+n.height();r=d.top+k.outerHeight()+q-r;var m=d.top-q,g=n.offset().top;d=d.top-q-5;(r>g-m||f.dropup)&&-d<g&&c.css("top",d);d=n.offset().left;n=n.width();n=
d+n;q=c.offset().left;r=c.outerWidth();0===r&&0<c.children().length&&(r=e(c.children()[0]).outerWidth());r=q+r;var t=k.offset().left;g=k.outerWidth();m=t+g;if(c.hasClass(f.rightAlignClassName)||c.hasClass(f.leftAlignClassName)||c.hasClass(f.splitAlignClass)||"dt-container"===f.align){var x=m;k.hasClass("dt-btn-split-wrapper")&&0<k.children("button.dt-btn-split-drop").length&&(t=k.children("button.dt-btn-split-drop").offset().left,g=k.children("button.dt-btn-split-drop").outerWidth(),x=t+g);g=0;if(c.hasClass(f.rightAlignClassName))g=
m-r,d>q+g&&(d-=q+g,n-=r+g,g=d>n?g+n:g+d);else if(c.hasClass(f.splitRightAlignClassName))g=x-r,d>q+g&&(d-=q+g,n-=r+g,g=d>n?g+n:g+d);else if(c.hasClass(f.splitLeftAlignClassName)){if(g=t-q,n<r+g||d>q+g)d-=q+g,n-=r+g,g=d>n?g+n:g+d}else g=d-q,n<r+g&&(d-=q+g,n-=r+g,g=d>n?g+n:g+d)}else d=k.offset().top,g=0,g="button-right"===f.align?m-r:t-q;c.css("left",c.position().left+g)}else d=c.height()/2,d>e(C).height()/2&&(d=e(C).height()/2),c.css("marginTop",-1*d);f.background&&v.background(!0,f.backgroundClassName,
f.fade,k);e("div.dt-button-background").on("click.dtb-collection",function(){});f.autoClose&&setTimeout(function(){b.on("buttons-action.b-internal",function(A,G,D,w){w[0]!==k[0]&&h()})},0);e(c).trigger("buttons-popover.dt");b.on("destroy",h);setTimeout(function(){l=!1;e("body").on("click.dtb-collection",function(A){if(!l){var G=e.fn.addBack?"addBack":"andSelf",D=e(A.target).parent()[0];(!e(A.target).parents()[G]().filter(a).length&&!e(D).hasClass("dt-buttons")||e(A.target).hasClass("dt-button-background"))&&
h()}}).on("keyup.dtb-collection",function(A){27===A.keyCode&&h()})},0)}});v.background=function(a,b,c,d){c===p&&(c=400);d||(d=y.body);a?I(e("<div/>").addClass(b).css("display","none").insertAfter(d),c):J(e("div."+b),c,function(){e(this).removeClass(b).remove()})};v.instanceSelector=function(a,b){if(a===p||null===a)return e.map(b,function(f){return f.inst});var c=[],d=e.map(b,function(f){return f.name}),l=function(f){if(Array.isArray(f))for(var k=0,h=f.length;k<h;k++)l(f[k]);else"string"===typeof f?
-1!==f.indexOf(",")?l(f.split(",")):(f=e.inArray(f.trim(),d),-1!==f&&c.push(b[f].inst)):"number"===typeof f&&c.push(b[f].inst)};l(a);return c};v.buttonSelector=function(a,b){for(var c=[],d=function(h,n,q){for(var r,m,g=0,t=n.length;g<t;g++)if(r=n[g])m=q!==p?q+g:g+"",h.push({node:r.node,name:r.conf.name,idx:m}),r.buttons&&d(h,r.buttons,m+"-")},l=function(h,n){var q,r=[];d(r,n.s.buttons);var m=e.map(r,function(g){return g.node});if(Array.isArray(h)||h instanceof e)for(m=0,q=h.length;m<q;m++)l(h[m],
n);else if(null===h||h===p||"*"===h)for(m=0,q=r.length;m<q;m++)c.push({inst:n,node:r[m].node});else if("number"===typeof h)c.push({inst:n,node:n.s.buttons[h].node});else if("string"===typeof h)if(-1!==h.indexOf(","))for(r=h.split(","),m=0,q=r.length;m<q;m++)l(r[m].trim(),n);else if(h.match(/^\d+(\-\d+)*$/))m=e.map(r,function(g){return g.idx}),c.push({inst:n,node:r[e.inArray(h,m)].node});else if(-1!==h.indexOf(":name"))for(h=h.replace(":name",""),m=0,q=r.length;m<q;m++)r[m].name===h&&c.push({inst:n,
node:r[m].node});else e(m).filter(h).each(function(){c.push({inst:n,node:this})});else"object"===typeof h&&h.nodeName&&(r=e.inArray(h,m),-1!==r&&c.push({inst:n,node:m[r]}))},f=0,k=a.length;f<k;f++)l(b,a[f]);return c};v.stripData=function(a,b){if("string"!==typeof a)return a;a=a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");a=a.replace(/<!\-\-.*?\-\->/g,"");if(!b||b.stripHtml)a=a.replace(/<[^>]*>/g,"");if(!b||b.trim)a=a.replace(/^\s+|\s+$/g,"");if(!b||b.stripNewlines)a=a.replace(/\n/g,
" ");if(!b||b.decodeEntities)M.innerHTML=a,a=M.value;return a};v.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:""},button:{tag:"button",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""},split:{tag:"div",className:"dt-button-split"},splitWrapper:{tag:"div",className:"dt-btn-split-wrapper"},splitDropdown:{tag:"button",text:"&#x25BC;",className:"dt-btn-split-drop",
align:"split-right",splitAlignClass:"dt-button-split-left"},splitDropdownButton:{tag:"button",className:"dt-btn-split-drop-button dt-button"},splitCollection:{tag:"div",className:"dt-button-split-collection"}}};v.version="2.0.1";e.extend(z,{collection:{text:function(a){return a.i18n("buttons.collection","Collection")},className:"buttons-collection",init:function(a,b,c){b.attr("aria-expanded",!1)},action:function(a,b,c,d){d._collection.parents("body").length?this.popover(!1,d):this.popover(d._collection,
d)},attr:{"aria-haspopup":!0}},split:{text:function(a){return a.i18n("buttons.split","Split")},className:"buttons-split",init:function(a,b,c){return b.attr("aria-expanded",!1)},action:function(a,b,c,d){this.popover(d._collection,d)},attr:{"aria-haspopup":!0}},copy:function(a,b){if(z.copyHtml5)return"copyHtml5"},csv:function(a,b){if(z.csvHtml5&&z.csvHtml5.available(a,b))return"csvHtml5"},excel:function(a,b){if(z.excelHtml5&&z.excelHtml5.available(a,b))return"excelHtml5"},pdf:function(a,b){if(z.pdfHtml5&&
z.pdfHtml5.available(a,b))return"pdfHtml5"},pageLength:function(a){a=a.settings()[0].aLengthMenu;var b=[],c=[];if(Array.isArray(a[0]))b=a[0],c=a[1];else for(var d=0;d<a.length;d++){var l=a[d];e.isPlainObject(l)?(b.push(l.value),c.push(l.label)):(b.push(l),c.push(l))}return{extend:"collection",text:function(f){return f.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},f.page.len())},className:"buttons-page-length",autoClose:!0,buttons:e.map(b,function(f,k){return{text:c[k],className:"button-page-length",
action:function(h,n){n.page.len(f).draw()},init:function(h,n,q){var r=this;n=function(){r.active(h.page.len()===f)};h.on("length.dt"+q.namespace,n);n()},destroy:function(h,n,q){h.off("length.dt"+q.namespace)}}}),init:function(f,k,h){var n=this;f.on("length.dt"+h.namespace,function(){n.text(h.text)})},destroy:function(f,k,h){f.off("length.dt"+h.namespace)}}}});u.Api.register("buttons()",function(a,b){b===p&&(b=a,a=p);this.selector.buttonGroup=a;var c=this.iterator(!0,"table",function(d){if(d._buttons)return v.buttonSelector(v.instanceSelector(a,
d._buttons),b)},!0);c._groupSelector=a;return c});u.Api.register("button()",function(a,b){a=this.buttons(a,b);1<a.length&&a.splice(1,a.length);return a});u.Api.registerPlural("buttons().active()","button().active()",function(a){return a===p?this.map(function(b){return b.inst.active(b.node)}):this.each(function(b){b.inst.active(b.node,a)})});u.Api.registerPlural("buttons().action()","button().action()",function(a){return a===p?this.map(function(b){return b.inst.action(b.node)}):this.each(function(b){b.inst.action(b.node,
a)})});u.Api.registerPlural("buttons().collectionRebuild()","button().collectionRebuild()",function(a){return this.each(function(b){for(var c=0;c<a.length;c++)"object"===typeof a[c]&&(a[c].parentConf=b);b.inst.collectionRebuild(b.node,a)})});u.Api.register(["buttons().enable()","button().enable()"],function(a){return this.each(function(b){b.inst.enable(b.node,a)})});u.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(a){a.inst.disable(a.node)})});u.Api.registerPlural("buttons().nodes()",
"button().node()",function(){var a=e();e(this.each(function(b){a=a.add(b.inst.node(b.node))}));return a});u.Api.registerPlural("buttons().processing()","button().processing()",function(a){return a===p?this.map(function(b){return b.inst.processing(b.node)}):this.each(function(b){b.inst.processing(b.node,a)})});u.Api.registerPlural("buttons().text()","button().text()",function(a){return a===p?this.map(function(b){return b.inst.text(b.node)}):this.each(function(b){b.inst.text(b.node,a)})});u.Api.registerPlural("buttons().trigger()",
"button().trigger()",function(){return this.each(function(a){a.inst.node(a.node).trigger("click")})});u.Api.register("button().popover()",function(a,b){return this.map(function(c){return c.inst._popover(a,this.button(this[0].node),b)})});u.Api.register("buttons().containers()",function(){var a=e(),b=this._groupSelector;this.iterator(!0,"table",function(c){if(c._buttons){c=v.instanceSelector(b,c._buttons);for(var d=0,l=c.length;d<l;d++)a=a.add(c[d].container())}});return a});u.Api.register("buttons().container()",
function(){return this.containers().eq(0)});u.Api.register("button().add()",function(a,b){var c=this.context;c.length&&(c=v.instanceSelector(this._groupSelector,c[0]._buttons),c.length&&c[0].add(b,a));return this.button(this._groupSelector,a)});u.Api.register("buttons().destroy()",function(){this.pluck("inst").unique().each(function(a){a.destroy()});return this});u.Api.registerPlural("buttons().remove()","buttons().remove()",function(){this.each(function(a){a.inst.remove(a.node)});return this});var H;
u.Api.register("buttons.info()",function(a,b,c){var d=this;if(!1===a)return this.off("destroy.btn-info"),J(e("#datatables_buttons_info"),400,function(){e(this).remove()}),clearTimeout(H),H=null,this;H&&clearTimeout(H);e("#datatables_buttons_info").length&&e("#datatables_buttons_info").remove();a=a?"<h2>"+a+"</h2>":"";I(e('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a).append(e("<div/>")["string"===typeof b?"html":"append"](b)).css("display","none").appendTo("body"));c!==p&&0!==
c&&(H=setTimeout(function(){d.buttons.info(!1)},c));this.on("destroy.btn-info",function(){d.buttons.info(!1)});return this});u.Api.register("buttons.exportData()",function(a){if(this.context.length)return Q(new u.Api(this.context[0]),a)});u.Api.register("buttons.exportInfo()",function(a){a||(a={});var b=a;var c="*"===b.filename&&"*"!==b.title&&b.title!==p&&null!==b.title&&""!==b.title?b.title:b.filename;"function"===typeof c&&(c=c());c===p||null===c?c=null:(-1!==c.indexOf("*")&&(c=c.replace("*",e("head > title").text()).trim()),
c=c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),(b=K(b.extension))||(b=""),c+=b);b=K(a.title);b=null===b?null:-1!==b.indexOf("*")?b.replace("*",e("head > title").text()||"Exported data"):b;return{filename:c,title:b,messageTop:N(this,a.message||a.messageTop,"top"),messageBottom:N(this,a.messageBottom,"bottom")}});var K=function(a){return null===a||a===p?null:"function"===typeof a?a():a},N=function(a,b,c){b=K(b);if(null===b)return null;a=e("caption",a.table().container()).eq(0);return"*"===
b?a.css("caption-side")!==c?null:a.length?a.text():"":b},M=e("<textarea/>")[0],Q=function(a,b){var c=e.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(t){return v.stripData(t,c)},footer:function(t){return v.stripData(t,c)},body:function(t){return v.stripData(t,c)}},customizeData:null},b);b=a.columns(c.columns).indexes().map(function(t){var x=a.column(t).header();return c.format.header(x.innerHTML,
t,x)}).toArray();var d=a.table().footer()?a.columns(c.columns).indexes().map(function(t){var x=a.column(t).footer();return c.format.footer(x?x.innerHTML:"",t,x)}).toArray():null,l=e.extend({},c.modifier);a.select&&"function"===typeof a.select.info&&l.selected===p&&a.rows(c.rows,e.extend({selected:!0},l)).any()&&e.extend(l,{selected:!0});l=a.rows(c.rows,l).indexes().toArray();var f=a.cells(l,c.columns);l=f.render(c.orthogonal).toArray();f=f.nodes().toArray();for(var k=b.length,h=[],n=0,q=0,r=0<k?l.length/
k:0;q<r;q++){for(var m=[k],g=0;g<k;g++)m[g]=c.format.body(l[n],q,g,f[n]),n++;h[q]=m}b={header:b,footer:d,body:h};c.customizeData&&c.customizeData(b);return b};e.fn.dataTable.Buttons=v;e.fn.DataTable.Buttons=v;e(y).on("init.dt plugin-init.dt",function(a,b){"dt"===a.namespace&&(a=b.oInit.buttons||u.defaults.buttons)&&!b._buttons&&(new v(b,a)).container()});u.ext.feature.push({fnInit:L,cFeature:"B"});u.ext.features&&u.ext.features.register("buttons",L);return v});