(function(t){function e(e){for(var i,a,o=e[0],s=e[1],c=e[2],d=0,f=[];d<o.length;d++)a=o[d],l[a]&&f.push(l[a][0]),l[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==l[s]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},l={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/mand/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},cd49:function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),l=n("ce5b"),r=n.n(l);n("da64");i["default"].use(r.a,{iconfont:"md"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("v-app",[n("Shortlinks")],1):n("v-app",[t._v("\n  ...\n")])},o=[],s=n("9ab4"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-toolbar",[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[t._v("Mand")]),n("v-spacer"),n("v-text-field",{staticStyle:{"margin-top":"-10px"},attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("New Shortlink")]),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-text-field",{attrs:{label:"Shortlink"},model:{value:t.editedLink.shortlink,callback:function(e){t.$set(t.editedLink,"shortlink",e)},expression:"editedLink.shortlink"}}),n("v-text-field",{attrs:{label:"Full URL"},model:{value:t.editedLink.fullurl,callback:function(e){t.$set(t.editedLink,"fullurl",e)},expression:"editedLink.fullurl"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Save")])],1)],1)],1)],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.links,search:t.search,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.shortlink))]),n("td",[t._v(t._s(e.item.fullurl))]),n("td",[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(n){t.editItem(e.item)}}},[t._v("edit")]),n("v-icon",{attrs:{small:""},on:{click:function(n){t.deleteItem(e.item)}}},[t._v("delete")])],1)]}}])},[n("template",{slot:"no-data"},[n("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])],1),n("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n      No results for "'+t._s(t.search)+'".\n    ')])],2)],1)},u=[],d=i["default"].extend({data:function(){return{search:"",dialog:!1,headers:[{text:"Shortlink",align:"left",value:"shortlink"},{text:"Full URL",value:"fullurl"},{text:"Actions",value:"name",sortable:!1}],links:[],editedIndex:-1,editedLink:{shortlink:"",fullurl:""},defautLink:{shortlink:"",fullurl:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New shortlink":"Edit shortlink"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.links=[{shortlink:"annu",fullurl:"https://commissies.ch.tudelft.nl/annucie/"},{shortlink:"annucie",fullurl:"https://commissies.ch.tudelft.nl/annucie/"},{shortlink:"booksale",fullurl:"https://ch.tudelft.nl/en/education/book-sale"},{shortlink:"careercollege",fullurl:"https://ch.tudelft.nl/career/career-college/"},{shortlink:"chipcie",fullurl:"https://commissies.ch.tudelft.nl/chipcie/"}]},editItem:function(t){this.editedIndex=this.links.indexOf(t),this.editedLink=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.links.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.links.splice(e,1)},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedLink=Object.assign({},t.defautLink),t.editedIndex=-1},300)},save:function(){this.editedIndex>-1?Object.assign(this.links[this.editedIndex],this.editedLink):this.links.push(this.editedLink),this.close()}}}),f=d,h=n("2877"),p=n("6544"),v=n.n(p),k=n("0798"),b=n("8336"),m=n("b0af"),_=n("99d9"),x=n("12b2"),g=n("a523"),w=n("8fea"),y=n("169a"),O=n("132d"),S=n("9910"),L=n("2677"),V=n("71d9"),j=n("2a7f"),T=Object(h["a"])(f,c,u,!1,null,null,null);T.options.__file="Shortlinks.vue";var C=T.exports;v()(T,{VAlert:k["a"],VBtn:b["a"],VCard:m["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:x["a"],VContainer:g["a"],VDataTable:w["a"],VDialog:y["a"],VIcon:O["a"],VSpacer:S["a"],VTextField:L["a"],VToolbar:V["a"],VToolbarTitle:j["a"]});var I=n("dd17"),P=n.n(I),A=function(){return s["a"](this,void 0,Promise,function(){var t,e,n,i;return s["b"](this,function(l){switch(l.label){case 0:if(t={authority:"https://connect.ch.tudelft.nl",client_id:"a2427f8d-dba1-463a-943e-6df6bec8129d",redirect_uri:"https://www.praseodym.net/mand",scope:"ldap profile openid",response_type:"id_token token",loadUserInfo:!1},e=new P.a.UserManager(t),!window.location.hash.includes("access_token"))return[3,4];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,e.signinRedirectCallback()];case 2:return n=l.sent(),history.replaceState("",document.title,window.location.pathname+window.location.search),[2,n];case 3:return i=l.sent(),console.error(i),[3,4];case 4:return[2,e.signinRedirect()]}})})},M=i["default"].extend({name:"app",components:{Shortlinks:C},data:function(){return{auth:void 0}},created:function(){return s["a"](this,void 0,void 0,function(){var t;return s["b"](this,function(e){switch(e.label){case 0:return t=this,[4,A()];case 1:return t.auth=e.sent(),[2]}})})}}),R=M,$=n("7496"),U=Object(h["a"])(R,a,o,!1,null,null,null);U.options.__file="App.vue";var z=U.exports;v()(U,{VApp:$["a"]}),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(z)}}).$mount("#app")}});
//# sourceMappingURL=app.db9204db.js.map