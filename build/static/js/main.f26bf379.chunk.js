(this["webpackJsonppaper-xerox"]=this["webpackJsonppaper-xerox"]||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),o=a.n(s),c=(a(27),a(8)),l=a(3),i=a(1),u=(a(18),a(9)),m=a(4),p=function(e){return console.log("getLoginUserSuccess"),{type:"LOGIN_USER_SUCCESS",data:e}},d=a(12),b=a.n(d),f=a(14),g="".concat("https://api-server-gs.herokuapp.com","/login"),E="".concat("https://api-server-gs.herokuapp.com","/register"),h=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json";return console.log("postCall",e,t,a),new Promise((function(n,r){fetch("".concat(e),{method:"POST",headers:{"Content-Type":a},body:JSON.stringify(t)}).then((function(e){console.log("response",e),e.status>=400?r({res:e}):e.json().then((function(e){n(e)}))})).catch((function(e){console.log("ERROR",e),r(e)}))}))};function O(){return(O=Object(f.a)(b.a.mark((function e(t,a,n){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("registerUser",t),e.next=4,h(E,t);case 4:r=e.sent,"SUCCESS"===(s=(r||{}).loginResponseStatus)?a(r.userData):"INVALID_REQUEST"===s&&n({loginId:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("API ERROR",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=Object(f.a)(b.a.mark((function e(t,a,n){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("loginUser",t),e.next=4,h(g,t);case 4:r=e.sent,s=(r||{}).loginResponseStatus,console.log(r),"SUCCESS"===s?a(r.userData):"UN_AUTHORIZED"===s?n({password:!0}):"INVALID_USER"===s&&n({username:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("API ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var S=function(e){var t=e.label,a=e.type,n=e.inputContainerClass,s=e.className,o=e.name,c=e.value,l=e.onChange,i=e.hasError,u=e.errMsg,m=e.ref,p=e.onFocus,d=e.hideStrengthBar,b=e.strengthPass;return r.a.createElement("div",{className:"".concat(n," ").concat(i?" has-error":"")},r.a.createElement("label",{htmlFor:o,className:"form-label"},t),r.a.createElement("input",{ref:m||null,type:a,className:s,name:o,value:c,onChange:l,onFocus:p||null}),i&&r.a.createElement("div",{className:"help-block"},u),!d&&"password"===o&&c&&r.a.createElement("div",{className:"strengthBarContainer mt-4"},r.a.createElement("div",{className:"strengthBar ".concat(b," br-20")})))},j=Object(n.createContext)({}),N=j.Provider,w=j,C=function(e){var t=Object(n.useContext)(w),a=Object(l.a)(t,2)[1],s=Object(n.useState)({username:"",password:""}),o=Object(l.a)(s,2),i=o[0],d=o[1],b=Object(n.useState)(!1),f=Object(l.a)(b,2),g=f[0],E=f[1],h=Object(n.useState)({username:!1,password:!1}),O=Object(l.a)(h,2),j=O[0],N=O[1],C=Object(n.useState)(null),y=Object(l.a)(C,2),R=y[0],I=y[1],x=Object(n.useRef)(null),k=Object(n.useRef)(null);Object(n.useEffect)((function(){var t=null;"undefined"!==typeof Storage&&(t=JSON.parse(sessionStorage.getItem("userData"))),(t||{}).email&&e.history.push("/")}),[e.history]),Object(n.useEffect)((function(){R&&(a(p(R)),e.history.push("/"))}),[R]);var U=function(e){var t=e.target,a=t.name,n=t.value;d(Object(m.a)(Object(m.a)({},i),{},Object(u.a)({},a,n))),N(Object(m.a)(Object(m.a)({},j),{},Object(u.a)({},a,!1)))};return r.a.createElement("div",{className:"pr-16 pl-16 wt-100p hCenter p-relative max-wt-500"},r.a.createElement("div",{className:"flex flex-middle flex-between"},r.a.createElement("h2",null,"Login"),r.a.createElement(c.b,{to:"/register",onClick:function(){},className:"btn btn-link"},"Register")),r.a.createElement("form",{name:"form",onSubmit:function(e){e.preventDefault(),E(!0);var t=i.username,a=i.password;(N({username:!t,password:!a}),t&&a)&&function(e,t,a){v.apply(this,arguments)}({userDocument:{loginId:t,password:a}},I,N)}},r.a.createElement(S,{label:"Email Id",type:"email",ref:k,inputContainerClass:"mb-16",className:"form-input",name:"username",value:i.username,onChange:U,hasError:j.username,errMsg:g&&!i.username?"Email id is required":"Not a Registered user Register now"}),r.a.createElement(S,{label:"Password",type:"password",ref:x,inputContainerClass:"mb-16",className:"form-input",name:"password",value:i.password,onChange:U,hasError:j.password,errMsg:g&&!i.password?"Password is required":"Password did not matched with Email Id",hideStrengthBar:!0}),r.a.createElement("div",{className:"mb-16"},r.a.createElement("button",{className:"btn btn-primary"},"Login"),r.a.createElement(c.b,{to:"/",className:"btn btn-link"},"cancel"))))},y=function(e){var t=Object(n.useContext)(w),a=Object(l.a)(t,2)[1],s=Object(n.useState)({firstName:"",lastName:"",loginId:"",password:""}),o=Object(l.a)(s,2),i=o[0],p=o[1],d=Object(n.useState)(!1),b=Object(l.a)(d,2),f=b[0],g=b[1],E=Object(n.useState)(""),h=Object(l.a)(E,2),v=h[0],j=h[1],N=Object(n.useState)(null),C=Object(l.a)(N,2),y=C[0],R=C[1],I=Object(n.useState)({firstName:!1,lastName:!1,loginId:!1,password:!1}),x=Object(l.a)(I,2),k=x[0],U=x[1],D=Object(n.useRef)(null);Object(n.useEffect)((function(){var t=null;"undefined"!==typeof Storage&&(t=JSON.parse(sessionStorage.getItem("userData"))),(t||{}).email&&e.history.push("/")}),[e.history]),Object(n.useEffect)((function(){var t;y&&(a((t=y,console.log("getRegisterUserSuccess"),{type:"REGISTER_USER_SUCCESS",data:t})),e.history.push("/"))}),[y]);var _=function(e){var t,a,n,r=e.target,s=r.name,o=r.value;if("password"===s){var c=(t=o,a=i.firstName,n=i.loginId,a&&t.includes(a)||n&&t.includes(n)?"weak":/^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[\w!@#$%^&*]{8,}$/.test(t)?"strong":/^(?=.*[\d])(?=.*[a-z])(?=.*[!@#$%^&])[\w!@#$%^&*]{6,}$/.test(t)?"normal":"weak");j(c)}U(Object(m.a)(Object(m.a)({},k),{},Object(u.a)({},s,!1))),p(Object(m.a)(Object(m.a)({},i),{},Object(u.a)({},s,o))),f&&g(!1),console.log(v)};return r.a.createElement("div",{className:"pr-16 pl-16 wt-100p hCenter p-relative max-wt-500"},r.a.createElement("div",{className:"flex flex-middle flex-between"},r.a.createElement("h2",null,"Register"),r.a.createElement(c.b,{to:"/login",className:"btn btn-link"}," ","LogIn")),r.a.createElement("form",{name:"form",onSubmit:function(e){(e.preventDefault(),g(!0),U({firstName:!i.firstName,lastName:!1,loginId:!i.loginId,password:!i.password}),i.firstName&&i.loginId&&i.password)&&function(e,t,a){O.apply(this,arguments)}({userDocument:i},R,U)}},r.a.createElement(S,{label:"First Name",type:"text",inputContainerClass:"mb-16",className:"form-input",name:"firstName",value:i.firstName,onChange:_,hasError:k.firstName,errMsg:"First Name is required"}),r.a.createElement(S,{label:"Last Name",type:"text",inputContainerClass:"mb-16",className:"form-input",name:"lastName",value:i.lastName,onChange:_}),r.a.createElement(S,{label:"Email Id",type:"email",inputContainerClass:"mb-16",className:"form-input",name:"loginId",value:i.loginId,onChange:_,hasError:k.loginId,errMsg:f&&!i.loginId?"Email id is required":"Already have an id login now"}),r.a.createElement(S,{ref:D,label:"Password",type:"password",inputContainerClass:"mb-16",className:"form-input",name:"password",value:i.password,onChange:_,hasError:k.password,onFocus:function(){console.log("passwordFocused"),j(v||"weak")},errMsg:"Password is required",strengthPass:v}),r.a.createElement("div",{className:"mb-16"},r.a.createElement("button",{className:"btn btn-primary"},"Register"),r.a.createElement(c.b,{to:"/",className:"btn btn-link"},"Cancel"))))},R=function(){var e=Object(n.useContext)(w),t=Object(l.a)(e,1)[0];return r.a.createElement("div",null,JSON.stringify(t,void 0,2))},I=function(){var e=Object(n.useContext)(w),t=Object(l.a)(e,2)[1];return Object(n.useEffect)((function(){var e=null;"undefined"!==typeof Storage&&(e=JSON.parse(sessionStorage.getItem("userData"))),(e||{}).email&&t(p(e))}),[]),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:R}),r.a.createElement(i.a,{exact:!0,path:"/login",component:C}),r.a.createElement(i.a,{exact:!0,path:"/register",component:y}))},x=function(e,t){var a;return"LOGIN_USER_SUCCESS"===t.type||"REGISTER_USER_SUCCESS"===t.type?(a=Object(m.a)(Object(m.a)({},e),{},{loginStatus:!0,data:t.data,submission:"success"}),"undefined"!==typeof Storage&&sessionStorage.setItem("userData",JSON.stringify(t.data))):"RESET_LOGIN_USER"===t.type&&(a=Object(m.a)(Object(m.a)({},e),{},{loginStatus:!1})),a||e},k=function(e,t){return{user:x(e.user,t)}},U={user:{}},D=function(e){return r.a.createElement(N,{value:Object(n.useReducer)(k,U)},e.children)};var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{basename:"/"},r.a.createElement(D,null,r.a.createElement(I,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f26bf379.chunk.js.map