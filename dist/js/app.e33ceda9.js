(function(e){function t(t){for(var a,u,r=t[0],l=t[1],o=t[2],m=0,p=[];m<r.length;m++)u=r[m],s[u]&&p.push(s[u][0]),s[u]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,o||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=u(u.s=i[0]))}return e}var a={},s={app:0},n=[];function u(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.m=e,u.c=a,u.d=function(e,t,i){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(i,a,function(t){return e[t]}.bind(null,a));return i},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var c=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var a=i("c21b"),s=i.n(a);s.a},1637:function(e,t,i){e.exports=i.p+"img/pics10.ae953db7.jpg"},"17f1":function(e,t,i){e.exports=i.p+"img/pics09.6add1030.jpg"},2140:function(e,t,i){},"2f1a":function(e,t,i){"use strict";var a=i("7e2b"),s=i.n(a);s.a},"341a":function(e,t,i){},"354a":function(e,t,i){e.exports=i.p+"img/pics11.a3921c68.jpg"},"47c7":function(e,t,i){e.exports=i.p+"img/pics06.bf13a0a4.jpg"},5023:function(e,t,i){"use strict";var a=i("e09a"),s=i.n(a);s.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var a=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("html",[e._m(0),i("body",{staticClass:"homepage"},[i("div",{attrs:{id:"app"}},[i("Header"),i("TopBanner"),i("router-view"),i("Footer")],1)])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("head",[i("title",[e._v("VueJS 2 Playground")]),i("meta",{attrs:{"http-equiv":"content-type",content:"text/html; charset=utf-8"}}),i("meta",{attrs:{name:"description",content:""}}),i("meta",{attrs:{name:"keywords",content:""}}),i("link",{attrs:{href:"http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900",rel:"stylesheet",type:"text/css"}})])}],u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"header"}},[i("div",{staticClass:"container"},[e._m(0),i("nav",{attrs:{id:"nav"}},[i("ul",[i("li",[i("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),i("li",[i("router-link",{attrs:{to:"/about-us"}},[e._v("About Us")])],1),i("li",[i("router-link",{attrs:{to:"/services"}},[e._v("Services")])],1),i("li",[i("router-link",{attrs:{to:"/information"}},[e._v("Information")])],1)])]),i("div",{staticClass:"username"},[e.name?e._e():i("div",{staticClass:"login"},[i("label",{attrs:{for:"username"}},[e._v("Login: ")]),i("input",{attrs:{type:"text",id:"username",placeholder:"Username"},domProps:{value:e.name},on:{change:e.login}})]),e.name?i("div",{staticClass:"loggedIn"},[e._v("Welcome, "),i("span",[e._v(e._s(e.name))])]):e._e()])])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"logo"}},[i("h1",[i("a",{attrs:{href:"#"}},[e._v("Autonomy")])])])}],l={name:"Header",data:function(){return{name:""}},methods:{login:function(e){this.name=e.target.value}}},o=l,c=(i("e89f"),i("2877")),m=Object(c["a"])(o,u,r,!1,null,"360bae98",null);m.options.__file="Header.vue";var p=m.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"banner"}},[e._v(" ")])},d=[],f=(i("e3f8"),{}),h=Object(c["a"])(f,v,d,!1,null,"d2321b4a",null);h.options.__file="TopBanner.vue";var _=h.exports,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"copyright"}},[e._m(0),i("br"),i("div",[e._v("Not logged in.")]),i("div",[e._v("Logged in as: "+e._s(e.name))])])},b=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[e._v("\n\t\tDesign: "),i("a",{attrs:{href:"http://templated.co"}},[e._v("TEMPLATED")]),e._v(" Images: "),i("a",{attrs:{href:"http://unsplash.com"}},[e._v("Unsplash")]),e._v(" ("),i("a",{attrs:{href:"http://unsplash.com/cc0"}},[e._v("CC0")]),e._v(")\n\t")])}],q=(i("fa9a"),{}),C=Object(c["a"])(q,g,b,!1,null,"e854088c",null);C.options.__file="Footer.vue";var j=C.exports,w={name:"app",components:{Header:p,TopBanner:_,Footer:j}},y=w,x=(i("034f"),Object(c["a"])(y,s,n,!1,null,null,null));x.options.__file="App.vue";var P=x.exports,N=i("4af9"),E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"featured"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"3u"},[a("section",[a("a",{staticClass:"image full",attrs:{href:"#"}},[a("img",{attrs:{src:i("acfa"),alt:""}})]),a("header",[a("h2",[e._v("Etiam posuere")])]),a("p",[e._v("Pellentesque viverra vulputate enim. Aliquam erat volutpat. Pellentesque tristique ante. Sed vel tellus.")])])]),a("div",{staticClass:"3u"},[a("section",[a("a",{staticClass:"image full",attrs:{href:"#"}},[a("img",{attrs:{src:i("fb55"),alt:""}})]),a("header",[a("h2",[e._v("Fusce ultrices")])]),a("p",[e._v("Pellentesque tristique ante. Sed vel tellus. Curabitur sem urna, consequat suscipit mattis placerat, nulla.")])])]),a("div",{staticClass:"3u"},[a("section",[a("a",{staticClass:"image full",attrs:{href:"#"}},[a("img",{attrs:{src:i("7f08"),alt:""}})]),a("header",[a("h2",[e._v("Donec dictum")])]),a("p",[e._v("Pellentesque viverra vulputate enim. Aliquam erat volutpat. Curabitur sem urna, consequat mattis placerat, nulla.")])])]),a("div",{staticClass:"3u"},[a("section",[a("a",{staticClass:"image full",attrs:{href:"#"}},[a("img",{attrs:{src:i("eea7"),alt:""}})]),a("header",[a("h2",[e._v("Maecenas luctus")])]),a("p",[e._v("Pellentesque viverra vulputate enim. Aliquam erat volutpat. Curabitur sem urna, consequat mattis placerat, nulla.")])])])])])])}],S=(i("7665"),{}),V=Object(c["a"])(S,E,D,!1,null,"24bec0e8",null);V.options.__file="Home.vue";var O=V.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"marketing"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"3u"},[a("section",[a("header",[a("h2",[e._v("Praesent eleifend")])]),a("ul",{staticClass:"style1"},[a("li",{staticClass:"first"},[a("img",{attrs:{src:i("47c7"),width:"80",height:"80",alt:""}}),a("p",[e._v("Nullam non wisi a sem eleifend. Donec mattis libero eget urna. ")])]),a("li",[a("img",{attrs:{src:i("5d34"),width:"80",height:"80",alt:""}}),a("p",[e._v("Nullam non wisi a sem eleifend. Donec mattis libero eget urna. ")])]),a("li",[a("img",{attrs:{src:i("ce2f"),width:"80",height:"80",alt:""}}),a("p",[e._v("Nullam non wisi a sem eleifend. Donec mattis libero eget urna. ")])])])])]),a("div",{staticClass:"3u"},[a("section",[a("header",[a("h2",[e._v("Maecenas lectus")])]),a("ul",{staticClass:"style1"},[a("li",{staticClass:"first"},[a("img",{attrs:{src:i("17f1"),width:"80",height:"80",alt:""}}),a("p",[e._v("Nullam non wisi a sem eleifend. Donec mattis libero eget urna. ")])]),a("li",[a("img",{attrs:{src:i("1637"),width:"80",height:"80",alt:""}}),a("p",[e._v("Nullam non wisi a sem eleifend. Donec mattis libero eget urna. ")])]),a("li",[a("img",{attrs:{src:i("354a"),width:"80",height:"80",alt:""}}),a("p",[e._v("Nullam non wisi a sem eleifend. Donec mattis libero eget urna. ")])])])])]),a("div",{staticClass:"6u"},[a("section",[a("header",[a("h2",[e._v("Aenean elementum facilisis ligula")])]),a("a",{staticClass:"image full",attrs:{href:"#"}},[a("img",{attrs:{src:i("86d1"),alt:""}})]),a("p",[e._v("Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. Aenean lectus lorem, imperdiet. Donec mattis libero eget urna. Duis pretium velit ac mauris.")])])])])])])}],F=(i("85af"),{}),T=Object(c["a"])(F,$,A,!1,null,"f17ecce0",null);T.options.__file="AboutUs.vue";var M=T.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"main"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"8u"},[i("section",[i("header",[i("h2",[e._v("Maecenas luctus lectus at sapien")])]),i("p",[e._v("This is "),i("strong",[e._v("Autonomy")]),e._v(", a responsive HTML5 site template freebie by "),i("a",{attrs:{href:"http://templated.co"}},[e._v("TEMPLATED")]),e._v(". Released for free under the "),i("a",{attrs:{href:"http://templated.co/license"}},[e._v("Creative Commons Attribution")]),e._v(" license, so use it for whatever (personal or commercial) – just give us credit! Check out more of our stuff at "),i("a",{attrs:{href:"http://templated.co"}},[e._v("our site")]),e._v(" or follow us on "),i("a",{attrs:{href:"http://twitter.com/templatedco"}},[e._v("Twitter")]),e._v(".")]),i("p",[e._v("Donec leo. Vivamus fermentum nibh in augue. Praesent a lacus at urna congue rutrum. Nulla enim eros, porttitor eu, tempus id, varius non, nibh. Duis enim nulla, luctus eu, dapibus lacinia, venenatis id, quam. Vestibulum imperdiet, magna nec eleifend rutrum, nunc lectus vestibulum velit, euismod lacinia quam nisl id lorem. Quisque erat. Vestibulum pellentesque, justo mollis pretium suscipit, justo nulla blandit libero, in blandit augue justo quis nisl. Fusce mattis viverra elit. Fusce quis tortor. Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend.")]),i("p",[e._v("Sed etiam vestibulum velit, euismod lacinia quam nisl id lorem. Quisque erat. Vestibulum pellentesque, justo mollis pretium suscipit, justo nulla blandit libero, in blandit augue justo quis nisl. Fusce mattis viverra elit. Fusce quis tortor. Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget lorem ipsum dolor.")])])]),i("div",{staticClass:"4u"},[i("section",[i("header",[i("h2",[e._v("Lectus at sapien")])]),i("ul",{staticClass:"style"},[i("li",[i("a",{attrs:{href:"#"}},[e._v("Pellentesque quis elit non gravida blandit.")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Lorem ipsum dolor sit amet, adipiscing elit.")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Phasellus nec erat sit pellentesque congue.")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Cras vitae metus pellentesque pharetra.")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Maecenas vitae orci vitae  feugiat eleifend.")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Pellentesque quis elit non gravida blandit.")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Lorem ipsum dolor sit amet, adipiscing elit.")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Maecenas vitae orci  tellus feugiat eleifend.")])])])])])])])])}],L=(i("2f1a"),{}),I=Object(c["a"])(L,k,H,!1,null,"a2cb7a06",null);I.options.__file="Services.vue";var Q=I.exports,U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"featured"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"12u"},[i("section",[i("header",[i("h2",[e._v("No Sidebar")])]),i("p",[e._v("Donec leo. Vivamus fermentum nibh in augue. Praesent a lacus at urna congue rutrum. Nulla enim eros, porttitor eu, tempus id, varius non, nibh. Duis enim nulla, luctus eu, dapibus lacinia, venenatis id, quam. Vestibulum imperdiet, magna nec eleifend rutrum, nunc lectus vestibulum velit, euismod lacinia quam nisl id lorem. Quisque erat. Vestibulum pellentesque, justo mollis pretium suscipit, justo nulla blandit libero, in blandit augue justo quis nisl. Fusce mattis viverra elit. Fusce quis tortor. Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Curabitur sit amet nulla. Nam in massa. Sed vel tellus. Curabitur sem urna, consequat vel, suscipit in, mattis placerat, nulla. Sed ac leo. Pellentesque imperdiet.")]),i("p",[e._v("Praesent a lacus at urna congue rutrum. Nulla enim eros, porttitor eu, tempus id, varius non, nibh. Duis enim nulla, luctus eu, dapibus lacinia, venenatis id, quam. Vestibulum imperdiet, magna nec eleifend rutrum, nunc lectus vestibulum velit, euismod lacinia quam nisl id lorem. Quisque erat. Vestibulum pellentesque, justo mollis pretium suscipit, justo nulla blandit libero, in blandit augue justo quis nisl. Fusce mattis viverra elit. Fusce quis tortor. Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Curabitur sit amet nulla. Donec leo. Vivamus fermentum nibh in augue. Nam in massa. Sed vel tellus. Curabitur sem urna, consequat vel, suscipit in, mattis placerat, nulla. Sed ac leo. Pellentesque imperdiet.")]),i("p",[e._v("Nullam non wisi a sem semper eleifend. Donec leo. Vivamus fermentum nibh in augue. Praesent a lacus at urna congue rutrum. Nulla enim eros, porttitor eu, tempus id, varius non, nibh. Duis enim nulla, luctus eu, dapibus lacinia, venenatis id, quam. Vestibulum imperdiet, magna nec eleifend rutrum, nunc lectus vestibulum velit, euismod lacinia quam nisl id lorem. Quisque erat. Vestibulum pellentesque, justo mollis pretium suscipit, justo nulla blandit libero, in blandit augue justo quis nisl. Fusce mattis viverra elit. Fusce quis tortor. Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Curabitur sit amet nulla. Nam in massa. Sed vel tellus. Curabitur sem urna, consequat vel, suscipit in, mattis placerat, nulla. Sed ac leo. Pellentesque imperdiet.")])])])])])])}],J=(i("5023"),{}),R=Object(c["a"])(J,U,B,!1,null,"c23c1dc0",null);R.options.__file="Information.vue";var W=R.exports;a["a"].use(N["a"]);var z=new N["a"]({routes:[{path:"/",name:"Home",component:O},{path:"/about-us",name:"HAboutUsome",component:M},{path:"/services",name:"Services",component:Q},{path:"/information",name:"Information",component:W}]});a["a"].config.productionTip=!1,new a["a"]({router:z,render:function(e){return e(P)}}).$mount("#app")},"5d34":function(e,t,i){e.exports=i.p+"img/pics07.4b29c626.jpg"},"687d":function(e,t,i){},7665:function(e,t,i){"use strict";var a=i("c5f5"),s=i.n(a);s.a},"7e2b":function(e,t,i){},"7f08":function(e,t,i){e.exports=i.p+"img/pics04.4d9f0490.jpg"},"85af":function(e,t,i){"use strict";var a=i("d44a"),s=i.n(a);s.a},"86d1":function(e,t,i){e.exports=i.p+"img/pics12.b38adcf9.jpg"},acfa:function(e,t,i){e.exports=i.p+"img/pics02.1a4c80f7.jpg"},c21b:function(e,t,i){},c5f5:function(e,t,i){},ce2f:function(e,t,i){e.exports=i.p+"img/pics08.12aaa397.jpg"},d44a:function(e,t,i){},e09a:function(e,t,i){},e3f8:function(e,t,i){"use strict";var a=i("341a"),s=i.n(a);s.a},e89f:function(e,t,i){"use strict";var a=i("2140"),s=i.n(a);s.a},eea7:function(e,t,i){e.exports=i.p+"img/pics05.d25057cd.jpg"},fa9a:function(e,t,i){"use strict";var a=i("687d"),s=i.n(a);s.a},fb55:function(e,t,i){e.exports=i.p+"img/pics03.a324cde5.jpg"}});
//# sourceMappingURL=app.e33ceda9.js.map