(function(t){function e(e){for(var s,a,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},o=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/halal-competitions-frontend/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1654:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s,r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Nav"),n("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"bg-gray-800"},[n("div",{staticClass:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"},[n("div",{staticClass:"flex items-center justify-between h-16"},[n("div",{staticClass:"flex items-center"},[t._m(0),n("div",{staticClass:"hidden md:block"},[n("div",{staticClass:"flex items-baseline ml-10 space-x-4"},[n("nav-link",{class:{hidden:t.isLoggedIn},attrs:{to:"/",name:"Home"}}),n("nav-link",{class:{hidden:!t.isLoggedIn},attrs:{to:"/dashboard",name:"Dashboard"}}),n("nav-link",{attrs:{to:"/results",name:"Results"}})],1)])]),n("div",{staticClass:"hidden md:block"},[n("div",{staticClass:"flex items-center ml-4 md:ml-6"},[n("nav-link",{class:{hidden:t.isLoggedIn},attrs:{to:"/login",name:"Login"}}),n("nav-link",{class:{hidden:t.isLoggedIn},attrs:{to:"/register",name:"Register"}}),n("nav-link",{class:{hidden:!t.isLoggedIn},attrs:{to:"/logout",name:"Log out"}})],1)]),n("div",{staticClass:"flex -mr-2 md:hidden"},[n("button",{staticClass:"inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",on:{click:t.toggleMobile}},[n("span",{staticClass:"sr-only"},[t._v("Open main menu")]),n("svg",{staticClass:"block w-6 h-6",class:{hidden:t.isMobileOpen},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),n("svg",{staticClass:"w-6 h-6",class:{hidden:!t.isMobileOpen},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),n("nav-mobile-menu",{attrs:{isOpen:t.isMobileOpen}})],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-shrink-0"},[n("img",{staticClass:"w-8 h-8",attrs:{src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"}})])}],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white",attrs:{to:t.to}},[t._v(t._s(t.name)+"\n")])},u=[],d={props:["to","name"]},m=d,p=(n("8465"),n("2877")),g=Object(p["a"])(m,l,u,!1,null,"3bb23738",null),f=g.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:hidden",class:{hidden:!t.isOpen}},[n("div",{staticClass:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},[n("router-link",{staticClass:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white",class:{hidden:t.isLoggedIn},attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white",class:{hidden:!t.isLoggedIn},attrs:{to:"/dashboard"}},[t._v("Dashboard")]),n("router-link",{staticClass:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white",attrs:{to:"/results"}},[t._v("Results")])],1),n("div",{staticClass:"pb-3 border-t border-gray-700"},[n("div",{staticClass:"px-2 mt-3 space-y-1 mb-1"},[n("router-link",{staticClass:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white",class:{hidden:t.isLoggedIn},attrs:{to:"/login"}},[t._v("Login")]),n("router-link",{staticClass:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white",class:{hidden:t.isLoggedIn},attrs:{to:"/register"}},[t._v("Register")]),n("router-link",{staticClass:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white",class:{hidden:!t.isLoggedIn},attrs:{to:"/logout"}},[t._v("Log out")])],1)])])},v=[],b={components:{NavLink:f},props:["isOpen"],computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}}},x=b,w=(n("dd82"),Object(p["a"])(x,h,v,!1,null,"acf12730",null)),_=w.exports,y={components:{NavLink:f,NavMobileMenu:_},methods:{toggleMobile:function(){this.isMobileOpen?this.$store.dispatch("closeMobileMenu"):this.$store.dispatch("openMobileMenu")}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},isMobileOpen:function(){return this.$store.state.isMobileMenuOpen}}},C=y,k=Object(p["a"])(C,i,c,!1,null,null,null),E=k.exports,O={components:{Nav:E}},S=O,I=Object(p["a"])(S,o,a,!1,null,null,null),T=I.exports,L=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-heading",{attrs:{title:"Dashboard"}}),n("main",[n("div",{staticClass:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[n("competitions-tabs"),n("dashboard-competition",{attrs:{competition:t.competition,week:t.week}})],1)])],1)},$=[],j=n("ade3"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg-white shadow-sm"},[n("div",{staticClass:"flex justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8"},[n("h1",{staticClass:"text-lg leading-6 font-semibold text-gray-900"},[t._v(t._s(t.title))])])])},N=[],D={props:["title"]},R=D,B=Object(p["a"])(R,P,N,!1,null,null,null),U=B.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sm:hidden"},[n("label",{staticClass:"sr-only",attrs:{for:"tabs"}},[t._v("Select a tab")]),n("select",{staticClass:"block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",attrs:{id:"tabs",name:"tabs"},on:{change:t.onChange}},t._l(t.competitions,(function(e){return n("option",{key:e._id,domProps:{value:e._id}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),0)]),n("div",{staticClass:"hidden sm:block"},[n("div",{staticClass:"border-b border-gray-200"},[n("nav",{staticClass:"-mb-px flex",attrs:{"aria-label":"Tabs"}},t._l(t.competitions,(function(e){return n("competitions-tabs-item",{key:e._id,attrs:{id:e._id,name:e.title,isActive:e._id===t.activeID},on:{change:t.onChange}})})),1)])])])},G=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"border-transparent text-gray-500 hover:text-gray-700 flex-grow py-4 px-1 text-center border-b-2 font-medium text-sm focus:outline-none",class:{"border-indigo-500 text-indigo-600":t.isActive},on:{click:t.onClick}},[t._v("\n  "+t._s(t.name)+"\n")])},q=[],H={props:["id","name","isActive"],methods:{onClick:function(){this.$emit("change",this.id)}}},K=H,F=Object(p["a"])(K,W,q,!1,null,null,null),V=F.exports,z={components:{CompetitionsTabsItem:V},computed:{competitions:function(){return this.$store.state.competitions},activeID:function(){return this.$store.state.activeID}},methods:{onChange:function(t){var e;e=t.currentTarget?t.currentTarget.value:t,this.$store.dispatch("setActiveTab",e)}}},J=z,Q=Object(p["a"])(J,A,G,!1,null,null,null),X=Q.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},[t._l(t.competition.counters,(function(e){return[n("dashboard-competition-increment",{key:e.id,attrs:{counter:e},on:{increment:t.increment}})]}))],2)},Z=[],tt=(n("ac6a"),n("7514"),function(t,e,n){if(void 0===n)throw new Error;var s=e.find(t);return"undefined"!==typeof s?s:n}),et=function(t,e){if(!t.length)return{};var n={};try{return t.forEach((function(t){var s=t[e];n[s]||(n[s]=[]),n[s].push(t)})),n}catch(s){console.error(s)}},nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"bg-gray-50 overflow-hidden shadow-md rounded-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200",on:{click:t.onClick}},[n("div",{staticClass:"px-4 py-5 sm:p-6"},[n("dt",{staticClass:"text-sm font-medium text-gray-500 truncate"},[t._v("\n      "+t._s(t.counter.title)+"\n    ")]),n("dd",{staticClass:"mt-1 text-3xl font-semibold text-gray-900"},[t._v("\n      "+t._s(t.logger.count)+"\n    ")])])])},st=[],rt=3e3,ot={data:function(){return{timeout:null}},props:{counter:{type:Object,validator:function(t){return t.title.length>0}}},computed:{logger:function(){return tt(this.isForCounter,this.$store.getters.currentLoggers,{})}},methods:{isForCounter:function(t){return t.counter===this.counter._id},onClick:function(){var t=this;clearTimeout(this.timeout),this.$store.dispatch("increment",this.logger),this.timeout=setTimeout((function(){t.$store.dispatch("save",t.logger)}),rt)}}},at=ot,it=(n("7ccb"),Object(p["a"])(at,nt,st,!1,null,"77515a60",null)),ct=it.exports,lt={components:{DashboardCompetitionIncrement:ct},props:{competition:Object,week:String},methods:{increment:function(t){t.count++}},computed:{total:function(){var t=this.$store.getters.currentLoggers,e=this.competition.counters.map((function(e){var n=tt((function(t){return t.counter===e._id}),t,{count:0}),s=n.count;return s}));return e.reduce((function(t,e){return t+e}),0)}}},ut=lt,dt=Object(p["a"])(ut,Y,Z,!1,null,null,null),mt=dt.exports,pt=(s={name:"dashboard",components:{PageHeading:U,CompetitionsTabs:X,DashboardCompetition:mt}},Object(j["a"])(s,"name","HelloWorld"),Object(j["a"])(s,"computed",{week:function(){return this.$store.state.week},competition:function(){return this.$store.getters.activeCompetition}}),Object(j["a"])(s,"mounted",(function(){this.$store.dispatch("loadDashboard")})),s),gt=pt,ft=Object(p["a"])(gt,M,$,!1,null,"2310b608",null),ht=ft.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8"},[t._m(0),n("div",{staticClass:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},[n("div",{staticClass:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},[n("form",{staticClass:"space-y-6",on:{submit:t.onSubmit}},[n("div",[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"email"}},[t._v("\n            Username\n          ")]),n("div",{staticClass:"mt-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{id:"email",name:"email",type:"text",autocomplete:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),n("div",[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"password"}},[t._v("\n            Password\n          ")]),n("div",{staticClass:"mt-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{id:"password",name:"password",type:"password",autocomplete:"current-password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.error?n("p",{staticClass:"mt-2 text-sm text-red-600"},[t._v("\n            "+t._s(t.error)+"\n          ")]):t._e()]),t._m(1),t._m(2)])])])])},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md"},[n("h2",{staticClass:"mt-6 text-center text-3xl font-extrabold text-gray-900"},[t._v("\n      Sign in to your account\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-between hidden"},[n("div",{staticClass:"flex items-center"},[n("input",{staticClass:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",attrs:{id:"remember_me",name:"remember_me",type:"checkbox"}}),n("label",{staticClass:"ml-2 block text-sm text-gray-900",attrs:{for:"remember_me"}},[t._v("\n              Remember me\n            ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{type:"submit"}},[t._v("\n            Sign in\n          ")])])}],xt={data:function(){return{username:"",password:"",error:""}},methods:{validate:function(){return!0},onSubmit:function(t){var e=this;t.preventDefault(),this.error="",this.validate()&&this.$store.dispatch("login",{username:this.username,password:this.password}).then((function(){e.$router.push("dashboard")})).catch((function(n){try{n.response.data.invalidCombo&&(e.error="Invalid username/password combination.")}catch(t){e.error="There was an error logging in. Please try again later."}}))}}},wt=xt,_t=Object(p["a"])(wt,vt,bt,!1,null,null,null),yt=_t.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8"},[t._m(0),n("div",{staticClass:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},[n("div",{staticClass:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},[n("form",{staticClass:"space-y-6",on:{submit:t.onSubmit}},[n("div",[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"email"}},[t._v("\n            Username\n          ")]),n("div",{staticClass:"mt-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{id:"email",name:"email",type:"text",autocomplete:"username",required:""},domProps:{value:t.username},on:{change:t.changeUsername,input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("p",{staticClass:"mt-2 text-sm text-gray-500",attrs:{id:"email-description"}},[t._v("\n            Don't use your reddit username!\n          ")]),t.usernameError?n("p",{staticClass:"mt-2 text-sm text-red-600"},[t._v("\n            "+t._s(t.usernameError)+"\n          ")]):t._e()]),n("div",[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"password"}},[t._v("\n            Password\n          ")]),n("div",{staticClass:"mt-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{id:"password",name:"password",type:"password",autocomplete:"current-password",required:""},domProps:{value:t.password},on:{change:t.changePass,input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),n("div",[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"password"}},[t._v("\n            Confirm password\n          ")]),n("div",{staticClass:"mt-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{id:"password-c",name:"password-c",type:"password",autocomplete:"current-password",required:""},domProps:{value:t.confirmPassword},on:{change:t.changePass,input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}})]),t.passwordError?n("p",{staticClass:"mt-2 text-sm text-red-600"},[t._v("\n            "+t._s(t.passwordError)+"\n          ")]):t._e()]),t._m(1)])])])])},kt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md"},[n("h2",{staticClass:"mt-6 text-center text-3xl font-extrabold text-gray-900"},[t._v("\n      Register an account\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{type:"submit"}},[t._v("\n            Register\n          ")])])}],Et={data:function(){return{username:"",password:"",confirmPassword:"",usernameError:"",passwordError:""}},methods:{validate:function(){var t=!0;return this.username.length<3&&(this.usernameError="Username must be at least 3 characters long.",t=!1),this.username.length>20&&(this.usernameError="Username must be at most 20 characters long.",t=!1),this.password!==this.confirmPassword?(this.passwordError="Passwords must match.",!1):(this.password.length<6&&(this.passwordError="Password must be atleast 6 characters long",t=!1),this.password.length>30&&(this.passwordError="Password must be at most 30 characters long",t=!1),t)},onSubmit:function(t){var e=this;t.preventDefault(),this.validate()&&this.$store.dispatch("register",{username:this.username,password:this.password}).then((function(){e.$router.push("login")})).catch((function(n){try{n.response.data.usernameTaken&&(e.usernameError="Username is already taken.")}catch(t){e.passwordError="There was an error creating your account. Please try again later."}}))},changePass:function(){this.passwordError=""},changeUsername:function(){this.usernameError=""}}},Ot=Et,St=Object(p["a"])(Ot,Ct,kt,!1,null,null,null),It=St.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Home")])},Lt=[],Mt={},$t=Object(p["a"])(Mt,Tt,Lt,!1,null,null,null),jt=$t.exports,Pt=(n("456d"),n("55dd"),n("8468")),Nt=(n("5df3"),n("2f62")),Dt=n("bc3a"),Rt=n.n(Dt);n("5a0c");function Bt(){return"01252021"}function Ut(t){var e=t.competitions,n=t.userId,s=t.loggers,r=t.week,o=e.map((function(t){return t.counters.map((function(t){return t._id}))})).flat();o.forEach((function(t){var e=s.find((function(e){return e.week===r&&e.counter===t}));e||s.push({count:0,week:r,counter:t,user:n})}))}r["a"].use(Nt["a"]);var At=new Nt["a"].Store({state:{userId:"",activeID:"",users:[],loggers:[],competitions:[],week:Bt(),allLoggers:{},token:window.localStorage.getItem("token"),isMobileMenuOpen:!1},mutations:{SET_COMPETITIONS:function(t,e){t.competitions=e},SET_USER:function(t,e){t.user=e},SET_USERS:function(t,e){t.users=e},SET_USERID:function(t,e){t.userId=e},SET_LOGGERS:function(t,e){t.loggers=e},INCREMENT:function(t,e){var n=t.loggers.indexOf(e);r["a"].set(t.loggers[n],"count",t.loggers[n].count+1)},SET_LOGGERID:function(t,e){var n=e.oldLogger,s=e.newLogger,o=t.loggers.indexOf(n);r["a"].set(t.loggers[o],"_id",s._id)},SET_ALL_LOGGERS:function(t,e){t.allLoggers=e},SET_WEEK:function(t,e){t.week=e},SET_ACTIVE_ID:function(t,e){t.activeID=e},SET_TOKEN:function(t,e){e?(window.localStorage.setItem("token",e),t.token=e):(window.localStorage.clear(),t.token="")},SET_MOBILE_MENU:function(t,e){t.isMobileMenuOpen=e}},actions:{loadDashboard:function(t){var e=this,n=t.commit,s=t.state;n("SET_MOBILE_MENU",!1),n("SET_WEEK",Bt()),Promise.all([Rt.a.get("http://localhost:3001/api/competitions"),Rt.a.get("http://localhost:3001/api/user",{headers:{authorization:"Bearer "+s.token}})]).then((function(t){var r=t[0].data,o=t[1].data,a=o._id,i=o.data,c=e.state.week;Ut({competitions:r,userId:a,loggers:i,week:c}),s.activeID||n("SET_ACTIVE_ID",r[0]._id),n("SET_COMPETITIONS",r),n("SET_USERID",a),n("SET_LOGGERS",i)}))},loadResults:function(t){var e=t.commit,n=t.state;Rt.a.get("http://localhost:3001/api/loggers").then((function(t){var n=t.data;e("SET_ALL_LOGGERS",n)})),Rt.a.get("http://localhost:3001/api/competitions").then((function(t){var s=t.data;n.activeID||e("SET_ACTIVE_ID",s[0]._id),e("SET_COMPETITIONS",s)})),Rt.a.get("http://localhost:3001/api/users").then((function(t){var n=t.data;e("SET_USERS",n)}))},save:function(t,e){var n=t.commit,s=t.state;e._id?Rt.a.put("http://localhost:3001/api/loggers",e,{headers:{authorization:"Bearer "+s.token}}):Rt.a.post("http://localhost:3001/api/loggers",e,{headers:{authorization:"Bearer "+s.token}}).then((function(t){n("SET_LOGGERID",{oldLogger:e,newLogger:t.data})}))},increment:function(t,e){var n=t.commit,s=t.state,r=t.dispatch;s.week===Bt()?n("INCREMENT",e):r("loadDashboard")},setActiveTab:function(t,e){var n=t.commit;n("SET_ACTIVE_ID",e)},register:function(t,e){Object(Pt["a"])(t);var n=e.username,s=e.password;return Rt.a.post("http://localhost:3001/api/users",{username:n,password:s})},login:function(t,e){var n=t.commit,s=e.username,r=e.password;return Rt.a.post("http://localhost:3001/login",{username:s,password:r}).then((function(t){var e=t.data;n("SET_TOKEN",e.accessToken)}))},logout:function(t){var e=t.commit;e("SET_TOKEN","")},openMobileMenu:function(t){var e=t.commit;e("SET_MOBILE_MENU",!0)},closeMobileMenu:function(t){var e=t.commit;e("SET_MOBILE_MENU",!1)}},getters:{currentLoggers:function(t){var e=t.loggers,n=t.week;return e.filter((function(t){return t.week===n}))},resultsByUsers:function(t){var e=t.users.map((function(e){var n=e._id,s=e.displayName;return{userId:n,displayName:s,loggers:t.allLoggers.filter((function(t){return t.user===n}))}}));return e},loggersByWeek:function(t){var e=t.allLoggers,n=et(e,"week");return Object.keys(n).map((function(t){var e=n[t],s=et(e,"counter");return{week:t,loggers:s}})).sort((function(t,e){var n=t.week,s=e.week,r=n.substr(4,7),o=s.substr(4,7);if(r>o)return-1;var a=n.substr(2,2),i=s.substr(2,2);if(a>i)return-1;var c=n.substr(0,2),l=s.substr(0,2);return c>l?-1:void 0}))},activeCompetition:function(t){return t.competitions.find((function(e){return e._id===t.activeID}))||{}},isLoggedIn:function(t){return!!t.token}}}),Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-heading",{attrs:{title:"Results"}}),n("main",[n("div",{staticClass:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[n("competitions-tabs"),t.showResults?t._l(t.loggersGroupedByWeek,(function(e){return n("div",{key:e.week},[e.week!=t.$store.state.week?n("leaderboard-competition",{attrs:{week:e.week,loggers:e.loggers}}):t._e()],1)})):n("div",[t._v("\n        No data has been collected yet. Check back next week for the first\n        weeks results!\n      ")])],2)])],1)},Wt=[],qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-16"},[n("leaderboard-competition-date",{attrs:{week:t.week}}),t._l(t.competition.counters,(function(e){return n("leaderboard-top",{key:e.id,attrs:{title:e.title,loggers:t.loggers[e._id]||[]}})}))],2)},Ht=[],Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasWinner?n("div",{staticClass:"mt-14"},[n("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n    "+t._s(t.title)+"\n  ")]),n("dl",{staticClass:"mt-5 grid grid-cols-3 rounded-lg bg-white overflow-hidden shadow divide-gray-200 divide-x"},t._l(t.winners,(function(t){return n("Card",{key:t.id,attrs:{title:t.username,number:t.count}})})),1)]):t._e()},Ft=[],Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 py-5 sm:p-6"},[n("dt",{staticClass:"text-base font-normal text-gray-900 truncate"},[t._v(t._s(t.title))]),n("dd",{staticClass:"mt-1 flex justify-between items-baseline md:block lg:flex"},[n("div",{staticClass:"flex items-baseline text-3xl font-semibold",class:{"text-gray-500":t.secondary,"text-indigo-600":!t.secondary}},[t._v("\n      "+t._s(t.number)+"\n    ")])])])},zt=[],Jt=(n("c5f6"),{props:{title:String,number:Number,secondary:{type:Boolean}}}),Qt=Jt,Xt=Object(p["a"])(Qt,Vt,zt,!1,null,null,null),Yt=Xt.exports,Zt={components:{Card:Yt},props:{title:String,loggers:Array},computed:{users:function(){return this.$store.state.users},winners:function(){var t=this,e=this.loggers.slice().sort((function(t,e){return t.count>=e.count?-1:1})),n=e.slice(0,3);return n.map((function(e){var n=t.users.find((function(t){return t._id===e.user}))||{};return{id:n._id,username:n.username,count:e.count}}))},hasWinner:function(){return this.loggers.length&&this.loggers.find((function(t){return t.count>0}))}}},te=Zt,ee=Object(p["a"])(te,Kt,Ft,!1,null,null,null),ne=ee.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[t._m(0),n("div",{staticClass:"relative flex justify-center"},[n("span",{staticClass:"px-3 bg-white text-lg font-medium text-gray-900"},[t._v(t._s(t.formatted))])])])},re=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute inset-0 flex items-center",attrs:{"aria-hidden":"true"}},[n("div",{staticClass:"w-full border-t border-gray-300"})])}],oe=(n("28a5"),{props:{week:String},computed:{formatted:function(){var t=this.week.split("");return"".concat(t[0]).concat(t[1],"/").concat(t[2]).concat(t[3],"/").concat(t[4]).concat(t[5]).concat(t[6]).concat(t[7])}}}),ae=oe,ie=Object(p["a"])(ae,se,re,!1,null,null,null),ce=ie.exports,le={components:{LeaderboardTop:ne,LeaderboardCompetitionDate:ce},props:{week:String,loggers:Object},computed:{competition:function(){return this.$store.getters.activeCompetition}}},ue=le,de=Object(p["a"])(ue,qt,Ht,!1,null,null,null),me=de.exports,pe={components:{PageHeading:U,LeaderboardCompetition:me,CompetitionsTabs:X},computed:{loggersGroupedByWeek:function(){return this.$store.getters.loggersByWeek},showResults:function(){var t=Object.keys(this.loggersGroupedByWeek);return t.length>=2||1===t.length&&t[0]!==this.$store.state.week}},mounted:function(){this.$store.dispatch("loadResults")}},ge=pe,fe=Object(p["a"])(ge,Gt,Wt,!1,null,null,null),he=fe.exports;r["a"].use(L["a"]);var ve=new L["a"]({mode:"history",base:"/halal-competitions-frontend/",routes:[{path:"/",name:"home",component:jt},{path:"/dashboard",name:"dashboard",component:ht,beforeEnter:function(t,e,n){At.dispatch("closeMobileMenu"),At.getters.isLoggedIn?n():n("/login")}},{path:"/login",name:"login",component:yt,beforeEnter:function(t,e,n){At.dispatch("closeMobileMenu"),At.getters.isLoggedIn?n("/dashboard"):n()}},{path:"/register",name:"register",component:It,beforeEnter:function(t,e,n){At.dispatch("closeMobileMenu"),At.getters.isLoggedIn?n("/dashboard"):n()}},{path:"/logout",name:"logout",beforeEnter:function(t,e,n){At.dispatch("logout"),n("/")}},{path:"/results",name:"results",component:he,beforeEnter:function(t,e,n){At.dispatch("closeMobileMenu"),n()}}]}),be=n("9483");Object(be["a"])("".concat("/halal-competitions-frontend/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d940");r["a"].config.productionTip=!1,new r["a"]({router:ve,store:At,render:function(t){return t(T)}}).$mount("#app")},7900:function(t,e,n){},"7ccb":function(t,e,n){"use strict";n("9468")},8465:function(t,e,n){"use strict";n("7900")},9468:function(t,e,n){},d940:function(t,e,n){},dd82:function(t,e,n){"use strict";n("1654")}});
//# sourceMappingURL=app.a505e8f7.js.map