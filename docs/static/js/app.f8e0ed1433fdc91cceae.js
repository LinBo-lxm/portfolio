webpackJsonp([0],{"1mYX":function(t,e){t.exports=[{slug:"workdetail01",title:"＞＞＞ Web開発 ＜＜＜",itema:"--- Web開発 ---",year:"2020年",description:"フリーランスポートフォリオのWebサイト",text:"Vue.jsを使用したポートフォリオサイト",path:"https://github.com/LinBo-lxm/portfolio",role:"デザイン・コーディング・Scss・HTML・Vue.js・Webpack・GitHub Pages",urlTitle:"GitHub Code",url:"//github.com/LinBo-lxm/portfolio",tags:["フロント開発","Webサイト制作"],picture:[{id:"1",path:""},{id:"2",path:""}]},{slug:"workdetail02",title:"＞＞＞ EA開発 ＜＜＜",itema:"--- EA開発 ---",year:"2020年",description:"EAツール",text:"MQL4を使用したEAツール",path:"https://github.com/LinBo-lxm/mql4-rsi-5m",role:"デザイン・コーディング・バックテスト・VPSで稼働",urlTitle:"GitHub Link",url:"//github.com/LinBo-lxm/mql4-rsi-5m",tags:["個人活動","Webサイト制作"],picture:[{id:"1",path:""},{id:"2",path:""}]}]},"67WZ":function(t,e){},"9MCI":function(t,e,n){t.exports=n.p+"static/img/img_work3.68a54f3.jpg"},AWZt:function(t,e,n){t.exports=n.p+"static/img/profileimg.6f27be5.png"},CD40:function(t,e){},CHAo:function(t,e,n){t.exports=n.p+"static/img/img_ea01.198dd0f.jpg"},IGeg:function(t,e,n){t.exports=n.p+"static/img/img_work4.51e2d03.png"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"nav"},[e("ul",{staticClass:"nav_list"},[e("li",{staticClass:"nav_item"},[e("router-link",{staticClass:"nav_link",attrs:{to:"/"}},[this._v("Home")])],1),e("li",{staticClass:"nav_item"},[e("router-link",{staticClass:"nav_link",attrs:{to:"/about"}},[this._v("About")])],1),e("li",{staticClass:"nav_item"},[e("router-link",{staticClass:"nav_link",attrs:{to:"/works"}},[this._v("Works")])],1),e("li",{staticClass:"nav_item"},[e("router-link",{staticClass:"nav_link",attrs:{to:"/contact"}},[this._v("Contact")])],1)])])},staticRenderFns:[]},a=n("VU/8")(null,i,!1,null,null,null).exports,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"footer-nav"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[this._v("Home")])],1),e("li",[e("router-link",{attrs:{to:"/about"}},[this._v("About")])],1),e("li",[e("router-link",{attrs:{to:"/works"}},[this._v("Works")])],1),e("li",[e("router-link",{attrs:{to:"/contact"}},[this._v("Contact")])],1)])])},staticRenderFns:[]},s=n("VU/8")(null,o,!1,null,null,null).exports,c=n("1mYX"),l=n.n(c),u={name:"app",components:{hnav:a,fnav:s},data:function(){return{myData:l.a}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header"},[e("div",{staticClass:"header_inner"},[e("h1",{staticClass:"header_title"},[e("router-link",{staticClass:"header_title-link",attrs:{to:"/"}},[this._v("LinBo's portfolio")])],1),e("hnav")],1)]),e("main",{staticClass:"main"},[e("transition",{attrs:{name:"fade"}},[e("router-view",{attrs:{data:this.myData}})],1)],1),e("footer",{staticClass:"footer"},[e("fnav"),e("div",{staticClass:"footer_copyright"},[this._v("©2020 Linbo")])],1)])},staticRenderFns:[]},d=n("VU/8")(u,f,!1,null,null,null).exports,p={mounted:function(){var t=this.$options.title;t&&(t="function"==typeof t?t.call(this):t,document.title=t+" - LinBo's portfolio")}},m={mounted:function(){var t=this.$options.description,e=document.getElementsByTagName("meta");if(t)for(var n=0;n<e.length;n++)"description"==e[n].name.toLowerCase()&&(e[n].content=t)}},v=n("/ocq"),h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top"},[r("div",{staticClass:"top_catch"}),r("section",{staticClass:"top_works"},[r("div",{staticClass:"top_works-inner"},[r("h2",{staticClass:"headline"},[t._v("Works")]),r("div",{staticClass:"works"},t._l(t.data,function(e){return r("div",{staticClass:"works_box"},[r("router-link",{staticClass:"common_link-box",attrs:{to:"/works/"+e.slug}},["workdetail01"===e.slug?r("div",{staticClass:"common_thumb effect_img-filter"},[r("img",{attrs:{src:n("c+p7"),width:"",height:"",alt:""}})]):t._e(),"workdetail02"===e.slug?r("div",{staticClass:"common_thumb effect_img-filter"},[r("img",{attrs:{src:n("cy4g"),width:"",height:"",alt:""}})]):t._e(),r("div",{staticClass:"works_name"},[t._v(t._s(e.title))])])],1)}),0)]),r("div",{staticClass:"common_more"},[r("router-link",{staticClass:"common_more-link",attrs:{to:"/works"}},[t._v("See More ＞＞")])],1)]),r("section",{staticClass:"top_about"},[r("div",{staticClass:"section_inner"},[r("h2",{staticClass:"headline"},[t._v("About")]),r("div",{staticClass:"top_about-inner"},[r("div",{staticClass:"about_text"},[t._m(0),r("div",{staticClass:"about_role"},[t._v("Web Engineer / Front-end Developer")]),t._m(1),r("div",{staticClass:"about_other"},[r("router-link",{attrs:{to:"/about"}},[t._v("See More ＞＞")])],1)]),t._m(2)])])]),r("section",{staticClass:"top_contact"},[r("div",{staticClass:"section_inner"},[r("h2",{staticClass:"headline"},[t._v("Contact")]),r("div",{staticClass:"common_text top_contact-inner"},[r("router-link",{staticClass:"txtdec01",attrs:{to:"/contact"}},[t._v("お問い合わせフォーム")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"about_name"},[this._v("LinBo"),e("small",{staticClass:"about_small"},[this._v("Code change the world")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about_sns"},[e("a",{attrs:{href:"https://github.com/LinBo-lxm"}},[e("img",{attrs:{src:n("pdNp"),width:"32",height:"32",alt:""}}),this._v("GitHub")]),e("a",{attrs:{href:"https://line.me/ti/p/vQb2Q6OM0Z"}},[e("img",{attrs:{src:n("pufY"),width:"32",height:"32",alt:""}}),this._v("Line")]),e("a",{attrs:{href:"https://qiita.com/LinBo-lxm"}},[e("img",{attrs:{src:n("bysm"),width:"32",height:"32",alt:""}}),this._v("Qiita")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about_thumb"},[e("img",{attrs:{src:n("xIGi"),alt:"icon1"}}),e("img",{attrs:{src:n("eRKk"),alt:"icon2"}})])}]},g=n("VU/8")({name:"top",title:"Top",description:"LinBo portfolio",props:["data"]},h,!1,null,null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("section",{staticClass:"section"},[r("h1",{staticClass:"headline page_headline"},[t._v("About"),r("div",{staticClass:"sub"},[t._v("LIN BO's Profile")])]),r("p",{attrs:{align:"center"}},[r("img",{attrs:{src:n("AWZt")}})]),r("h2",[t._v("My "),r("small",[t._v("Title")])]),r("p",{staticClass:"about_paragraph"},[t._v("Web Engineer / Front-end Developer")]),r("p",{staticClass:"about_paragraph"},[t._v("東京にてフリーランスのWeb開発をしております。")])]),r("section",{staticClass:"section"},[r("h2",{staticClass:"section_headline"},[t._v("経歴")]),r("ul",{staticClass:"about_list"},[r("li",[t._v("2006年より大学を卒業してからSIer会社に入社しシステム開発を始める。（中国）")]),r("li",[t._v("2012年より日本に移住しSIer会社でシステム開発を従事する。（以降は日本で働く）")]),r("li",[t._v("2019年よりフリーランスへ転向。")])])]),r("section",{staticClass:"section"},[r("h2",{staticClass:"section_headline"},[t._v("ディーテイル")]),r("ul",{staticClass:"about_list"},[r("li",[t._v("氏名：藺　波　LIN BO")]),r("li",[t._v("国籍：中国")]),r("li",[t._v("性別：男性")]),r("li",[t._v("年齢：37")]),r("li",[t._v("所在地：東京")]),r("li",[t._v("メール：lanyansha@outlook.jp")])])]),r("section",{staticClass:"section"},[r("h2",{staticClass:"section_headline"},[t._v("スキル")]),r("ul",{staticClass:"about_list"},[r("li",[t._v("言語・フレームワーク"),r("ul",[r("li",[t._v("Javascript / jQuery / Vue.js")]),r("li",[t._v("CSS / Scss")]),r("li",[t._v("HTML")]),r("li",[t._v("JAVA / Python")]),r("li",[t._v("Spring Boot / Thymeleaf")])])]),r("li",[t._v("DB"),r("ul",[r("li",[t._v("PostgreSQL")]),r("li",[t._v("MySQL")]),r("li",[t._v("Oracle")])])]),r("li",[t._v("サーバＯＳ"),r("ul",[r("li",[t._v("Windows")]),r("li",[t._v("Linux")]),r("li",[t._v("Unix")])])]),r("li",[t._v("ツール"),r("ul",[r("li",[t._v("GitHub / GitLab")])])])])]),r("section",{staticClass:"section"},[r("h2",{staticClass:"section_headline"},[t._v("関連リンク")]),r("ul",{staticClass:"about_list"},[r("li",[r("a",{attrs:{href:"https://github.com/LinBo-lxm"}},[t._v("GitHub")])]),r("li",[r("a",{attrs:{href:"https://qiita.com/LinBo-lxm"}},[t._v("Qiita")])]),r("li",[r("a",{attrs:{href:"https://store.line.me/stickershop/product/1018430"}},[t._v("LINEスタンプ")])])])])])}]},y=n("VU/8")({title:"About",description:"プロフィール"},b,!1,null,null,null).exports,_={data:function(){return{myData:l.a}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page is-wide"},[e("transition",{attrs:{name:"fade"}},[e("router-view",{attrs:{data:this.myData}})],1)],1)},staticRenderFns:[]},k=n("VU/8")(_,w,!1,null,null,null).exports,C={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"works_top"},[t._m(0),r("ul",{staticClass:"works_list"},t._l(t.data,function(e){return r("li",{staticClass:"works_item"},[r("router-link",{staticClass:"common_link-box",attrs:{to:"/works/"+e.slug}},["workdetail01"===e.slug?r("div",{staticClass:"works_thumb"},[r("img",{attrs:{src:n("9MCI"),width:"",height:"",alt:""}})]):t._e(),"workdetail02"===e.slug?r("div",{staticClass:"works_thumb"},[r("img",{attrs:{src:n("IGeg"),width:"",height:"",alt:""}})]):t._e(),r("h2",{staticClass:"works_list-title"},[t._v(t._s(e.title))])]),r("div",{staticClass:"works_list-detail"},[r("a",{attrs:{href:e.path}},[t._v("GitHubに公開")]),r("p",{staticClass:"works_description"},[t._v(t._s(e.text))]),r("p",{staticClass:"works_year"},[t._v("制作年："+t._s(e.year))])])],1)}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"headline page_headline"},[this._v("Works"),e("div",{staticClass:"sub"},[this._v("Service")])])}]},x=n("VU/8")({title:"Works",description:"LinBo制作",props:["data"]},C,!1,null,null,null).exports,O={props:["data"],mounted:function(){document.title=this.filteredData.itema+"- LinBo's portfolio";for(var t=document.getElementsByTagName("meta"),e=0;e<t.length;e++)"description"==t[e].name.toLowerCase()&&(t[e].content="LinBoが作成した "+this.filteredData.itema+" のページです")},computed:{filteredData:function(){var t=window.location.protocol+"//"+window.location.host+"/portfolio/works/";return this.data.filter(function(e,n){if(e.slug===window.location.href.replace(t,""))return!0})[0]}}},j={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"breadcrumb-nav"},[r("ul",[r("li",[r("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),r("li",[r("router-link",{attrs:{to:"/works"}},[t._v("Works")])],1)])]),r("article",{staticClass:"article"},[r("h1",{staticClass:"headline"},[t._v(t._s(t.filteredData.itema))]),"workdetail01"===t.filteredData.slug?r("div",{staticClass:"works_imgtxt01"},[r("img",{attrs:{src:n("YWnL"),width:"",height:"",alt:""}}),r("p",[t._v("Protfolio Site")])]):t._e(),"workdetail02"===t.filteredData.slug?r("div",{staticClass:"works_imgtxt01a"},[r("img",{attrs:{src:n("CHAo"),width:"",height:"",alt:""}}),r("p",[t._v("Expert Advisor")])]):t._e(),r("div",{staticClass:"works_detail-detail"},[r("p",{},[t._v(t._s(t.filteredData.text))]),r("p",{},[t._v("制作年："+t._s(t.filteredData.year))]),r("p",{},[t._v(t._s(t.filteredData.role))]),r("p",{},[r("a",{attrs:{href:t.filteredData.url,target:"_blank"}},[t._v(t._s(t.filteredData.urlTitle))])])]),"workdetail01"===t.filteredData.slug?r("div",{staticClass:"works_imgtxt02"},[r("img",{attrs:{src:n("aRzy"),width:"",height:"",alt:""}}),r("p",[t._v("Code Changes The World")])]):t._e(),"workdetail02"===t.filteredData.slug?r("div",{staticClass:"works_imgtxt02a"},[r("img",{attrs:{src:n("uiFv"),width:"",height:"",alt:""}}),r("p",[t._v("プログラムで世界を美しく")])]):t._e()])])},staticRenderFns:[]};var E=n("VU/8")(O,j,!1,function(t){n("CD40")},null,null).exports,S=n("7t+N"),P=n.n(S),A={title:"Contact",description:"LINBOへのお問い合わせページ",methods:{sendMessage:function(){var t=P()("form"),e=P()("#message"),n=P()("#mail"),r=P()("#name"),i=P()("#submit");return e.val()?r.val()?n.val()?(P.a.ajax({url:"https://script.google.com/macros/s/AKfycbzGgD05ev1b16aX1kMzgDTndB5UlomELRaV2vh3KHWoNcnCVjon/exec",dataType:"jsonp",data:t.serialize(),beforeSend:function(){return i.prop("disabled",!0)},complete:function(){return i.prop("disabled",!1),e.val(""),alert("送信完了しました")},error:function(t){alert("送信エラーです")}}),void event.preventDefault()):(alert("メールアドレスを入力してください"),!1):(alert("お名前を入力してください"),!1):(alert("メッセージを入力してください"),!1)}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._m(0),n("form",[n("input",{attrs:{name:"SPREADSHEET_ID",type:"hidden",value:"1jSEE8Z_QnHYmUMmPIbb12rkxw0vF8FXkcVceAVgPFj4"}}),n("input",{attrs:{name:"SHEET_NAME",type:"hidden",value:"問い合わせフォーム"}}),t._m(1),t._m(2),t._m(3),n("div",{staticClass:"form text-center"},[n("button",{staticClass:"form_submit",attrs:{type:"button",id:"submit"},on:{click:function(e){return t.sendMessage()}}},[t._v("Submit")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"headline page_headline"},[this._v("Contact "),e("div",{staticClass:"sub"},[this._v("お問い合わせ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form"},[e("label",{staticClass:"form__label"},[this._v("メールアドレス")]),e("input",{staticClass:"wide",attrs:{type:"email",name:"your-email",placeholder:"your@email.com",required:"required",id:"mail"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form"},[e("label",{staticClass:"form__label"},[this._v("お名前")]),e("input",{staticClass:"wide",attrs:{type:"text",name:"your-name",placeholder:"Your Name",id:"name"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form"},[e("label",{staticClass:"form__label"},[this._v("メッセージ"),e("span",{staticClass:"label-required"},[this._v("必須")])]),e("textarea",{attrs:{name:"your-message",placeholder:"Message",rows:"8",required:"required",id:"message"}})])}]},T=n("VU/8")(A,D,!1,null,null,null).exports,L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page is-wide"},[e("main",[e("h1",{staticClass:"headline page_headline"},[this._v("ページが見つかりません")])])])}]};n("VU/8")({title:"Not Found",description:""},L,!1,null,null,null).exports;r.a.use(v.a);var R=new v.a({mode:"history",base:"/portfolio/",routes:[{path:"/",name:"Top",component:g},{path:"/about",name:"About",component:y},{path:"/works",component:k,children:[{path:"/",name:"Works",component:x},{path:":slug",name:"WorksDetail",component:E}]},{path:"/contact",name:"Contact",component:T},{path:"*",name:"Top",component:g}],scrollBehavior:function(t){return t||{x:0,y:0}}}),B=n("WzQt"),W=n.n(B);n("67WZ");r.a.mixin(p),r.a.mixin(m),r.a.config.productionTip=!1,r.a.use(W.a,{id:"UA-xxxxxxxx-x",router:R}),new r.a({el:"#app",router:R,template:"<App/>",components:{App:d}})},WzQt:function(t,e,n){var r;"undefined"!=typeof self&&self,r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},{$vue:null,id:null,router:null,fields:{},customIdFields:{},ignoreRoutes:[],linkers:[],commands:{},disabled:!1,customResourceURL:null,set:[],require:[],ecommerce:{enabled:!1,options:null,enhanced:!1},autoTracking:{screenview:!1,shouldRouterUpdate:null,skipSamePath:!1,exception:!1,exceptionLogs:!0,page:!0,transformQueryString:!0,pageviewOnLoad:!0,pageviewTemplate:null,untracked:!0,prependBase:!0},debug:{enabled:!1,trace:!1,sendHitTask:!0},batch:{enabled:!1,delay:500,amount:2},checkDuplicatedScript:!1,disableScriptLoader:!1,beforeFirstHit:l,ready:l,untracked:[]});function o(t){!function t(e,n){return Object.keys(n).forEach(function(r){var i=e[r]&&Object.prototype.toString.call(e[r]);"[object Object]"!==i&&"[object Array]"!==i?e[r]=n[r]:t(e[r],n[r])}),e}(a,t)}function s(){return a.id?[].concat(a.id):[]}var c=a;function l(){}var u=function(t){console.warn("[vue-analytics] ".concat(t))};function f(t,e){return new Promise(function(n,r){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");if(a.async=!0,a.src=t,a.charset="utf-8",e){var o=document.createElement("link");o.href=e,o.rel="preconnect",i.appendChild(o)}i.appendChild(a),a.onload=n,a.onerror=r})}function d(t){return t.name||t.replace(/-/gi,"")}function p(t,e){if(s().length>1){var n=d(e);return"".concat(n,".").concat(t)}return t}var m,v=function(t){if(t.then)return t;if("function"==typeof t){var e=t();return e.then?e:Promise.resolve(e)}return Promise.resolve(t)};var h=[];function g(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];"undefined"!=typeof window&&s().forEach(function(e){var r,i={m:p(t,e),a:n};window.ga?c.batch.enabled?(h.push(i),m||(m=setInterval(function(){h.length?h.splice(0,c.batch.amount).forEach(function(t){var e;(e=window).ga.apply(e,[t.m].concat(function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t.a)))}):(clearInterval(m),m=null)},c.batch.delay))):(r=window).ga.apply(r,[p(t,e)].concat(n)):c.untracked.push(i)})}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];"object"!==b(e[0])||e[0].constructor!==Object?g("set",e[0],e[1]):g("set",e[0])}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=function(){2!=arguments.length?g("require",arguments.length<=0?void 0:arguments[0]):g("require",arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])};function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0];if(1===e.length&&"string"==typeof r)return g("send","screenview",{screenName:r});g.apply(void 0,["send","screenview"].concat(e))}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r;e.length&&!e[0]||(e.length&&e[0].currentRoute&&(r=e[0].currentRoute),e.length&&function(t){return t.query&&t.params}(e[0])&&(r=e[0]),r?E(r):(y("page","object"===O(e[0])?e[0].page:e[0]),g.apply(void 0,["send","pageview"].concat(e))))}function E(t){if(![(e=t).name,e.path].filter(Boolean).find(function(t){return-1!==c.ignoreRoutes.indexOf(t)})){var e,n=c.autoTracking,r=t.meta.analytics,i=(void 0===r?{}:r).pageviewTemplate||n.pageviewTemplate;if(n.screenview&&!t.name)throw new Error("[vue-analytics] Route name is mandatory when using screenview.");if(n.screenview)x(t.name);else if(i)j(i(t));else{var a=c.router,o=c.autoTracking,s=o.transformQueryString,l=o.prependBase,u=function(t){var e=Object.keys(t).reduce(function(e,n,r,i){var a=r===i.length-1,o=t[n];return null==o?e:e+="".concat(n,"=").concat(o).concat(a?"":"&")},"");return""!==e?"?".concat(e):""}(t.query),f=a&&a.options.base,d=l&&f,p=t.path+(s?u:"");j(p=d?function(t,e){var n=p.split("/"),r=t.split("/");return""===n[0]&&"/"===t[t.length-1]&&n.shift(),r.join("/")+n.join("/")}(f):p)}}}var S=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];"undefined"!=typeof window&&s().forEach(function(e){window["ga-disable-".concat(e)]=t})},P=function(){if("undefined"!=typeof document&&"undefined"!=typeof window){if(c.id){var t,e,n=[v(c.id),v(c.disabled)];if(t=c.checkDuplicatedScript,e=c.disableScriptLoader,[Boolean(window&&window.ga),t&&!(Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(t){return-1!==t.src.indexOf("analytics")||-1!==t.src.indexOf("gtag")}).length>0),!e].some(Boolean)){var r="https://www.google-analytics.com",i=c.debug.enabled?"analytics_debug":"analytics",a=c.customResourceURL?f(c.customResourceURL):f("".concat(r,"/").concat(i,".js"),r);n.push(a.catch(function(){u("An error occured! Please check your connection or disable your AD blocker")}))}return Promise.all(n).then(function(t){var e,n,r;o({id:t[0],disabled:t[1]}),S(c.disabled),function(){if(window.ga||!c.debug.enabled){if(window.ga){var t=s();c.debug.enabled&&(window.ga_debug={trace:c.debug.trace}),t.forEach(function(e){var n=d(e),r=c.customIdFields[e]||{},i=t.length>1?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(n,!0).forEach(function(e){w(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},c.fields,{},r,{name:n}):c.fields;window.ga("create",e.id||e,"auto",i)}),c.beforeFirstHit();var e=c.ecommerce;if(e.enabled){var n=e.enhanced?"ec":"ecommerce";e.options?g("require",n,e.options):g("require",n)}c.linkers.length>0&&(g("require","linker"),g("linker:autoLink",c.linkers)),c.debug.sendHitTask||y("sendHitTask",null)}}else u("Google Analytics has probably been blocked.")}(),function(){var t;c.set.forEach(function(t){var e=t.field,n=t.value;if(void 0===e||void 0===n)throw new Error('[vue-analytics] Wrong configuration in the plugin options.\nThe "set" array requires each item to have a "field" and a "value" property.');y(e,n)}),t=["ec","ecommerce"],c.require.forEach(function(e){if(-1!==t.indexOf(e)||-1!==t.indexOf(e.name))throw new Error("[vue-analytics] The ecommerce features are built-in in the plugin. \nFollow the ecommerce instructions available in the documentation.");if("string"!=typeof e&&"object"!==C(e))throw new Error('[vue-analytics] Wrong configuration in the plugin options. \nThe "require" array requires each item to be a string or to have a "name" and an "options" property.');var n=e.name||e;e.options?k(n,e.options):k(n)})}(),c.untracked.forEach(function(t){g.apply(void 0,[t.m].concat(function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t.a)))}),e=c.router,n=c.autoTracking,r=c.$vue,n.page&&e&&e.onReady(function(){n.pageviewOnLoad&&e.history.ready&&E(e.currentRoute),e.afterEach(function(t,i){var a=n.skipSamePath,o=n.shouldRouterUpdate;a&&t.path===i.path||("function"!=typeof o||o(t,i))&&r.nextTick().then(function(){E(e.currentRoute)})})}),c.ready()}).catch(function(t){c.debug.enabled&&u(t.message)})}u('Missing the "id" parameter. Add at least one tracking domain ID')}},A=function(t){g("send","exception",{exDescription:t,exFatal:arguments.length>1&&void 0!==arguments[1]&&arguments[1]})},D=function(t){if(c.autoTracking.exception){window.addEventListener("error",function(t){A(t.message)});var e=t.config.errorHandler;t.config.errorHandler=function(t,n,r){A(t.message),c.autoTracking.exceptionLogs&&console.error(t),"function"==typeof e&&e.call(void 0,t,n,r)}}},T=A;function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=["addItem","addTransaction","addProduct","addImpression","setAction","addPromo","send"].reduce(function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(n,!0).forEach(function(e){R(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,R({},e,function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];g.apply(void 0,[function(t){return"".concat(c.ecommerce.enhanced?"ec":"ecommerce",":").concat(t)}(e)].concat(n))}))},{}),W={event:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];g.apply(void 0,["send","event"].concat(e))},exception:T,page:j,query:g,require:k,set:y,social:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];g.apply(void 0,["send","social"].concat(e))},time:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];g.apply(void 0,["send","timing"].concat(e))},screenview:x,ecommerce:B,disable:function(){return S(!0)},enable:function(){return S(!1)},commands:c.commands},q={inserted:function(t,e,n){var r=Object.keys(e.modifiers);0===r.length&&r.push("click"),r.forEach(function(r){t.addEventListener(r,function(){var t="string"==typeof e.value?c.commands[e.value]:e.value;if(!t)throw new Error("[vue-analytics] The value passed to v-ga is not defined in the commands list.");t.apply(n.context)})})}};function H(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F(t){o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(n,!0).forEach(function(e){$(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{$vue:t})),t.directive("ga",q),t.prototype.$ga=t.$ga=W,D(t),P()}n.d(e,"default",function(){return F}),n.d(e,"analyticsMiddleware",function(){return M}),n.d(e,"onAnalyticsReady",function(){return U}),n.d(e,"event",function(){return V}),n.d(e,"ecommerce",function(){return N}),n.d(e,"set",function(){return G}),n.d(e,"page",function(){return Q}),n.d(e,"query",function(){return Y}),n.d(e,"screenview",function(){return z}),n.d(e,"time",function(){return Z}),n.d(e,"require",function(){return K}),n.d(e,"exception",function(){return X}),n.d(e,"social",function(){return J});var M=function(t){t.subscribe(function(t){var e=t.payload;if(e&&e.meta&&e.meta.analytics){var n=e.meta.analytics;if(!Array.isArray(n))throw new Error('The "analytics" property needs to be an array');n.forEach(function(t){var e,n,r=t.shift(),i=t;if(r.includes(":")){var a=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r.split(":"),2);r=a[0],e=a[1]}if(!(r in W))throw new Error('[vue-analytics:vuex] The type "'.concat(r,"\" doesn't exist."));if(e&&!(e in W[r]))throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" has not method "').concat(e,'".'));if("ecommerce"===r&&!e)throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" needs to call a method. Check documentation.'));e?(n=W[r])[e].apply(n,H(i)):W[r].apply(W,H(i))})}})},U=function(){return new Promise(function(t,e){var n=setInterval(function(){"undefined"!=typeof window&&window.ga&&(t(),clearInterval(n))},10)})},V=W.event,N=W.ecommerce,G=W.set,Q=W.page,Y=W.query,z=W.screenview,Z=W.time,K=W.require,X=W.exception,J=W.social}])},t.exports=r()},YWnL:function(t,e,n){t.exports=n.p+"static/img/img_protfolio01.9b1d170.jpg"},aRzy:function(t,e,n){t.exports=n.p+"static/img/img_work5.96bd55a.jpg"},bysm:function(t,e,n){t.exports=n.p+"static/img/qiita.c8f6f25.png"},"c+p7":function(t,e,n){t.exports=n.p+"static/img/img_work1.3fadf27.jpg"},cy4g:function(t,e,n){t.exports=n.p+"static/img/img_work2.411a4b9.jpg"},eRKk:function(t,e,n){t.exports=n.p+"static/img/icon2.5f569ed.jpg"},pdNp:function(t,e,n){t.exports=n.p+"static/img/github.9dc8017.png"},pufY:function(t,e,n){t.exports=n.p+"static/img/line.ad252fd.png"},uiFv:function(t,e,n){t.exports=n.p+"static/img/img_work7.7d436e8.jpg"},xIGi:function(t,e,n){t.exports=n.p+"static/img/icon1.f9a8fd9.jpg"}},["NHnr"]);