(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],p=0,h=[];p<i.length;p++)s=i[p],o[s]&&h.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=n("bb71");n("da64");a["a"].use(o["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("Chaim Finson's Website")]),n("span",{staticClass:"font-weight-light"},[t._v("Built with Vue-NodeJS")])]),n("v-spacer"),n("v-btn",{attrs:{Dowload:"",my:"",CV:""}},[n("span",{staticClass:"mr-2"},[t._v("This is a work in progress...")])])],1),n("v-content",[n("HelloWorld")],1)],1)},s=[],i=n("df4c"),l=n("bc3a"),c=n.n(l),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to My Page\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        Content coming soon...\n      ")])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("How is this made and deployed")]),a("v-layout",{attrs:{"justify-center":""}},[t._v("\n        This site was created using vue-cli3 for the frontend, Vuetify was added from the getgo in addition to separate concerns the app \n        Utilizes vue-compose which is package for writing High Order Compoents in a composable way\n      ")])],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("On the Back End")]),a("v-layout",{attrs:{"justify-center":""}},[t._v("\n        We have used NodeJS communicating with mongoDB\n      ")])],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),t._v("\n        This is a function which mutates the props then returns another value: "+t._s(t.customFunction())+"\n      "),t.List&&t.List.length?a("div",[a("h1",[t._v("This is Data from mongoDB Atlas: "+t._s(t.List))]),a("h2",[t._v("Currently the data only displays if running the server locally")])]):a("h1",[t._v("Loading...")]),t._v("\n      Here will be a loading component\n      ")])],1)],1)},p=[],h={props:["propsToPlayWith","customFunction","fetchList","List"],created(){this.fetchList()}},d=h,f=n("2877"),v=n("6544"),b=n.n(v),m=n("a523"),g=n("0e8f"),y=n("adda"),w=n("a722"),_=Object(f["a"])(d,u,p,!1,null,null,null),x=_.exports;b()(_,{VContainer:m["a"],VFlex:g["a"],VImg:y["a"],VLayout:w["a"]});var C=Object(i["a"])(Object(i["b"])({List:{initialValue:[]},propsToPlayWith:{initialValue:"My intial Test Value"}}),Object(i["c"])(t=>({customFunction(){const e=t.propsToPlayWith+"Now with secondary value";return e},async fetchList(){const t=await c.a.get("http://localhost:4000/api/users");this.$emit("List",t.data)}})))(x),O={name:"App",components:{HelloWorld:C},data(){return{}}},V=O,j=n("7496"),T=n("8336"),L=n("549c"),P=n("9910"),S=n("71d9"),W=n("2a7f"),k=Object(f["a"])(V,r,s,!1,null,null,null),M=k.exports;b()(k,{VApp:j["a"],VBtn:T["a"],VContent:L["a"],VSpacer:P["a"],VToolbar:S["a"],VToolbarTitle:W["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:t=>t(M)}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.07d1e22e.svg"}});
//# sourceMappingURL=app.0eae7c2e.js.map