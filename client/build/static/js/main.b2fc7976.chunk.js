(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){},35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),s=(a(40),a(4)),o=a(5),i=a(7),m=a(6),u=a(8),d=a(1),h=a(12),g=a(14),p=a(3),b=a.n(p),f=(a(30),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).logout=e.logout.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"logout",value:function(e){var t=this;e.preventDefault(),console.log("logging out"),b.a.post("/user/logout").then(function(e){console.log(e.data),200===e.status&&t.props.updateUser({loggedIn:!1,username:null})}).catch(function(e){console.log("Logout error")})}},{key:"render",value:function(){var e=this.props.loggedIn;return console.log("header render, props: "),console.log(this.props),r.a.createElement("div",null,r.a.createElement("header",{className:"navbar App-header",id:"nav-container"},r.a.createElement("div",{className:"col-4"},e?r.a.createElement("section",{className:"navbar-section"},r.a.createElement("div",null,this.props.currentUser),r.a.createElement(h.b,{to:"/",className:"btn btn-link text-secondary"},r.a.createElement("span",{className:"text-secondary"},"home")),r.a.createElement(h.b,{to:"/stats",className:"btn btn-link text-secondary"},r.a.createElement("span",{className:"text-secondary"},"stats")),r.a.createElement(h.b,{to:"/settings",className:"btn btn-link text-secondary"},r.a.createElement("span",{className:"text-secondary"},"settings")),r.a.createElement(h.b,{to:"#",className:"btn btn-link text-secondary",onClick:this.logout},r.a.createElement("span",{className:"text-secondary"},"logout"))):r.a.createElement("section",{className:"navbar-section"},r.a.createElement(h.b,{to:"/",className:"btn btn-link text-secondary"},r.a.createElement("span",{className:"text-secondary"},"home")),r.a.createElement(h.b,{to:"/login",className:"btn btn-link text-secondary"},r.a.createElement("span",{className:"text-secondary"},"login")),r.a.createElement(h.b,{to:"/signup",className:"btn btn-link"},r.a.createElement("span",{className:"text-secondary"},"sign up")))),r.a.createElement("div",{className:"col-4 col-mr-auto"},r.a.createElement("div",{id:"top-filler"}),r.a.createElement("h1",{className:"App-title"},"Mood Tracker App"))))}}]),t}(n.Component)),v=a(15);function E(e){return r.a.createElement("div",{className:"rating-selector"},r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",value:"1",name:e.name,onChange:e.onChange,checked:"1"===e.checked}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox1"},"1")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",value:"2",name:e.name,onChange:e.onChange,checked:"2"===e.checked}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox2"},"2")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:"3",name:e.name,onChange:e.onChange,checked:"3"===e.checked}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"3")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox4",value:"4",name:e.name,onChange:e.onChange,checked:"4"===e.checked}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox4"},"4")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox5",value:"5",name:e.name,onChange:e.onChange,checked:"5"===e.checked}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox5"},"5")))}function k(e){return r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Submit",onClick:e.onClick})}var y={getAll:function(){return b.a.get("/api/days/")},getAllFromUser:function(e){return b.a.get("/api/days/"+e)},getDay:function(e){return b.a.get("/api/days/"+e)},saveDay:function(e){return b.a.post("/api/days/",e)},updateDay:function(e,t){return b.a.put("/api/days/"+t,e)},sendMail:function(e){return b.a.post("/mail/send/",e)}},N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getTodaysDate=function(){var e=new Date;return e.setHours(0,0,0,0),console.log(e),e},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),console.log("Submitted: ".concat(a.state.dayRating," on ").concat(a.state.today)),y.saveDay({rating:a.state.dayRating,date:a.state.today,username:a.state.currentUser})},a.state={dayRating:"0",currentUser:e.currentUser,today:a.getTodaysDate().toDateString()},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"How was your day?"),r.a.createElement("p",{className:"testingfield"},"Selected Rating: ",this.state.dayRating),r.a.createElement("p",{className:"testingfield"},"Current User: ",this.state.currentUser),r.a.createElement("p",{className:"testingfield"},"Current Date: ",this.state.today),r.a.createElement(E,{name:"dayRating",onChange:this.handleInputChange,checked:this.state.dayRating}),r.a.createElement(k,{onClick:this.handleSubmit}))}}]),t}(n.Component);a(63);function j(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function O(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function C(e){return r.a.createElement("div",null,r.a.createElement("p",null,"This is where the data chart goes"))}var w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={days:[],currentUser:a.props.currentUser},a.loadDays=function(){y.getAllFromUser(a.props.currentUser).then(function(e){console.log(e.data),a.setState({days:e.data})}).catch(function(e){return console.log(e)})},a.prettyDate=function(e){return new Date(e).toDateString()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadDays()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"A look back at your week"),r.a.createElement(C,null),this.state.days.length?r.a.createElement(j,null,this.state.days.map(function(t){return r.a.createElement(O,{key:t._id},t.username," on ",e.prettyDate(t.date),": ",t.rating)})):r.a.createElement("p",{className:"lead"},"No Results to Display"))}}]),t}(n.Component);function x(e){return r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Submit",onClick:e.onClick})}var S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSend=function(e){e.preventDefault(),console.log("Sent mail"),y.sendMail({to:"kiselblat@gmail.com",html:"This is a test of the Mood Tracker Mailer"})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"Let's test the mailer"),r.a.createElement(x,{onClick:this.handleSend}))}}]),t}(n.Component),U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("handleSubmit"),b.a.post("auth/user/login",{username:this.state.username,password:this.state.password}).then(function(e){console.log("login response: "),console.log(e),200===e.status&&(t.props.updateUser({loggedIn:!0,username:e.data.username}),t.setState({redirectTo:"/"}))}).catch(function(e){console.log("login error: "),console.log(e)})}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(g.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement("div",null,r.a.createElement("h4",null,"Login"),r.a.createElement("form",{className:"form-horizontal"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-1 col-ml-auto"},r.a.createElement("label",{className:"form-label",htmlFor:"username"},"Username")),r.a.createElement("div",{className:"col-3 col-mr-auto"},r.a.createElement("input",{className:"form-input",type:"text",id:"username",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-1 col-ml-auto"},r.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password: ")),r.a.createElement("div",{className:"col-3 col-mr-auto"},r.a.createElement("input",{className:"form-input",placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group "},r.a.createElement("div",{className:"col-7"}),r.a.createElement("button",{className:"btn btn-primary col-1 col-mr-auto",onClick:this.handleSubmit,type:"submit"},"Login"))))}}]),t}(n.Component),D=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",confirmPassword:""},e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;console.log("sign-up handleSubmit, username: "),console.log(this.state.username),e.preventDefault(),b.a.post("/auth/user/",{username:this.state.username,password:this.state.password}).then(function(e){console.log(e),e.data.errmsg?console.log("username already taken"):(console.log("successful signup"),t.setState({redirectTo:"/login"}))}).catch(function(e){console.log("signup error: "),console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SignupForm"},r.a.createElement("h4",null,"Sign up"),r.a.createElement("form",{className:"form-horizontal"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-1 col-ml-auto"},r.a.createElement("label",{className:"form-label",htmlFor:"username"},"Username")),r.a.createElement("div",{className:"col-3 col-mr-auto"},r.a.createElement("input",{className:"form-input",type:"text",id:"username",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-1 col-ml-auto"},r.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password: ")),r.a.createElement("div",{className:"col-3 col-mr-auto"},r.a.createElement("input",{className:"form-input",placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group "},r.a.createElement("div",{className:"col-7"}),r.a.createElement("button",{className:"btn btn-primary col-1 col-mr-auto",onClick:this.handleSubmit,type:"submit"},"Sign up"))))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={loggedIn:!1,username:null},e.getUser=e.getUser.bind(Object(d.a)(Object(d.a)(e))),e.componentDidMount=e.componentDidMount.bind(Object(d.a)(Object(d.a)(e))),e.updateUser=e.updateUser.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"updateUser",value:function(e){this.setState(e)}},{key:"getUser",value:function(){var e=this;b.a.get("/user/").then(function(t){console.log("Get user response: "),console.log(t.data),t.data.user?(console.log("Get User: There is a user saved in the server session: "),e.setState({loggedIn:!0,username:t.data.user.username})):(console.log("Get user: no user"),e.setState({loggedIn:!1,username:null}))})}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(f,{updateUser:this.updateUser,loggedIn:this.state.loggedIn,currentUser:this.state.username}),this.state.loggedIn?r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return r.a.createElement(N,{loggedIn:e.state.loggedIn,currentUser:e.state.username})}}),r.a.createElement(g.b,{exact:!0,path:"/entry",render:function(){return r.a.createElement(N,{loggedIn:e.state.loggedIn,currentUser:e.state.username})}}),r.a.createElement(g.b,{exact:!0,path:"/stats",render:function(){return r.a.createElement(w,{loggedIn:e.state.loggedIn,currentUser:e.state.username})}}),r.a.createElement(g.b,{exact:!0,path:"/settings",render:function(){return r.a.createElement(S,{loggedIn:e.state.loggedIn,currentUser:e.state.username})}})):r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/signup",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(g.b,{render:function(){return r.a.createElement(U,{updateUser:e.updateUser})}})))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");F?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):T(e)})}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.b2fc7976.chunk.js.map