(this["webpackJsonppaper-xerox"]=this["webpackJsonppaper-xerox"]||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),o=a.n(s),l=(a(27),a(7)),c=a(3),i=a(1),u=(a(18),a(9)),m=a(4),p=function(e){return console.log("getLoginUserSuccess"),{type:"LOGIN_USER_SUCCESS",data:e}},d=a(12),b=a.n(d),f=a(14),g="".concat("https://api-server-node.herokuapp.com","/login"),E="".concat("https://api-server-node.herokuapp.com","/register"),h=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json";return console.log("postCall",e,t,a),new Promise((function(n,r){fetch("".concat(e),{method:"POST",headers:{"Content-Type":a},body:JSON.stringify(t)}).then((function(e){console.log("response",e),e.status>=400?r({res:e}):e.json().then((function(e){n(e)}))})).catch((function(e){console.log("ERROR",e),r(e)}))}))};function v(){return(v=Object(f.a)(b.a.mark((function e(t,a,n){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("registerUser",t),e.next=4,h(E,t);case 4:r=e.sent,"SUCCESS"===(s=(r||{}).loginResponseStatus)?a(r.userData):"INVALID_REQUEST"===s&&n({loginId:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("API ERROR",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function O(){return(O=Object(f.a)(b.a.mark((function e(t,a,n){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("loginUser",t),e.next=4,h(g,t);case 4:r=e.sent,s=(r||{}).loginResponseStatus,console.log(r),"SUCCESS"===s?a(r.userData):"UN_AUTHORIZED"===s?n({password:!0}):"INVALID_USER"===s&&n({username:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("API ERROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var S=function(e){var t=e.label,a=e.type,n=e.inputContainerClass,s=e.className,o=e.name,l=e.value,c=e.onChange,i=e.hasError,u=e.errMsg,m=e.ref,p=e.onFocus,d=e.hideStrengthBar,b=e.strengthPass;return r.a.createElement("div",{className:"".concat(n," ").concat(i?" has-error":"")},r.a.createElement("label",{htmlFor:o,className:"form-label"},t),r.a.createElement("input",{ref:m||null,type:a,className:s,name:o,value:l,onChange:c,onFocus:p||null}),i&&r.a.createElement("div",{className:"help-block"},u),!d&&"password"===o&&l&&r.a.createElement("div",{className:"strengthBarContainer mt-4"},r.a.createElement("div",{className:"strengthBar ".concat(b," br-20")})))},N=Object(n.createContext)({}),j=N.Provider,w=N,C=function(e){var t=Object(n.useContext)(w),a=Object(c.a)(t,2)[1],s=Object(n.useState)({username:"",password:""}),o=Object(c.a)(s,2),i=o[0],d=o[1],b=Object(n.useState)(!1),f=Object(c.a)(b,2),g=f[0],E=f[1],h=Object(n.useState)({username:!1,password:!1}),v=Object(c.a)(h,2),N=v[0],j=v[1],C=Object(n.useState)(null),y=Object(c.a)(C,2),R=y[0],I=y[1],x=Object(n.useRef)(null),k=Object(n.useRef)(null);Object(n.useEffect)((function(){var t=null;"undefined"!==typeof Storage&&(t=JSON.parse(sessionStorage.getItem("userData"))),(t||{}).email&&e.history.push("/")}),[e.history]),Object(n.useEffect)((function(){R&&(a(p(R)),e.history.push("/"))}),[R]);var U=function(e){var t=e.target,a=t.name,n=t.value;d(Object(m.a)(Object(m.a)({},i),{},Object(u.a)({},a,n))),j(Object(m.a)(Object(m.a)({},N),{},Object(u.a)({},a,!1)))};return r.a.createElement("div",{className:"pr-16 pl-16 wt-90p hCenter p-relative max-wt-500"},r.a.createElement("div",{className:"flex flex-middle flex-between"},r.a.createElement("h2",null,"Login"),r.a.createElement(l.b,{to:"/register",onClick:function(){},className:"btn btn-link decoration-none"},"Register")),r.a.createElement("form",{name:"form",onSubmit:function(e){e.preventDefault(),E(!0);var t=i.username,a=i.password;(j({username:!t,password:!a}),t&&a)&&function(e,t,a){O.apply(this,arguments)}({userDocument:{loginId:t,password:a}},I,j)}},r.a.createElement(S,{label:"Email Id",type:"email",ref:k,inputContainerClass:"mb-16",className:"form-input",name:"username",value:i.username,onChange:U,hasError:N.username,errMsg:g&&!i.username?"Email id is required":"Not a Registered user Register now"}),r.a.createElement(S,{label:"Password",type:"password",ref:x,inputContainerClass:"mb-16",className:"form-input",name:"password",value:i.password,onChange:U,hasError:N.password,errMsg:g&&!i.password?"Password is required":"Password did not matched with Email Id",hideStrengthBar:!0}),r.a.createElement("div",{className:"mb-16"},r.a.createElement("button",{className:"btn btn-primary"},"Login"),r.a.createElement(l.b,{to:"/",className:"btn btn-link decoration-none"},"cancel"))))},y=function(e){var t=Object(n.useContext)(w),a=Object(c.a)(t,2)[1],s=Object(n.useState)({firstName:"",lastName:"",loginId:"",password:""}),o=Object(c.a)(s,2),i=o[0],p=o[1],d=Object(n.useState)(!1),b=Object(c.a)(d,2),f=b[0],g=b[1],E=Object(n.useState)(""),h=Object(c.a)(E,2),O=h[0],N=h[1],j=Object(n.useState)(null),C=Object(c.a)(j,2),y=C[0],R=C[1],I=Object(n.useState)({firstName:!1,lastName:!1,loginId:!1,password:!1}),x=Object(c.a)(I,2),k=x[0],U=x[1],_=Object(n.useRef)(null);Object(n.useEffect)((function(){var t=null;"undefined"!==typeof Storage&&(t=JSON.parse(sessionStorage.getItem("userData"))),(t||{}).email&&e.history.push("/")}),[e.history]),Object(n.useEffect)((function(){var t;y&&(a((t=y,console.log("getRegisterUserSuccess"),{type:"REGISTER_USER_SUCCESS",data:t})),e.history.push("/"))}),[y]);var D=function(e){var t,a,n,r=e.target,s=r.name,o=r.value;if("password"===s){var l=(t=o,a=i.firstName,n=i.loginId,a&&t.includes(a)||n&&t.includes(n)?"weak":/^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[\w!@#$%^&*]{8,}$/.test(t)?"strong":/^(?=.*[\d])(?=.*[a-z])(?=.*[!@#$%^&])[\w!@#$%^&*]{6,}$/.test(t)?"normal":"weak");N(l)}U(Object(m.a)(Object(m.a)({},k),{},Object(u.a)({},s,!1))),p(Object(m.a)(Object(m.a)({},i),{},Object(u.a)({},s,o))),f&&g(!1),console.log(O)};return r.a.createElement("div",{className:"pr-16 pl-16 wt-90p hCenter p-relative max-wt-500"},r.a.createElement("div",{className:"flex flex-middle flex-between"},r.a.createElement("h2",null,"Register"),r.a.createElement(l.b,{to:"/login",className:"btn btn-link decoration-none"}," ","LogIn")),r.a.createElement("form",{name:"form",onSubmit:function(e){(e.preventDefault(),g(!0),U({firstName:!i.firstName,lastName:!1,loginId:!i.loginId,password:!i.password}),i.firstName&&i.loginId&&i.password)&&function(e,t,a){v.apply(this,arguments)}({userDocument:i},R,U)}},r.a.createElement(S,{label:"First Name",type:"text",inputContainerClass:"mb-16",className:"form-input",name:"firstName",value:i.firstName,onChange:D,hasError:k.firstName,errMsg:"First Name is required"}),r.a.createElement(S,{label:"Last Name",type:"text",inputContainerClass:"mb-16",className:"form-input",name:"lastName",value:i.lastName,onChange:D}),r.a.createElement(S,{label:"Email Id",type:"email",inputContainerClass:"mb-16",className:"form-input",name:"loginId",value:i.loginId,onChange:D,hasError:k.loginId,errMsg:f&&!i.loginId?"Email id is required":"Already have an id login now"}),r.a.createElement(S,{ref:_,label:"Password",type:"password",inputContainerClass:"mb-16",className:"form-input",name:"password",value:i.password,onChange:D,hasError:k.password,onFocus:function(){console.log("passwordFocused"),N(O||"weak")},errMsg:"Password is required",strengthPass:O}),r.a.createElement("div",{className:"mb-16"},r.a.createElement("button",{className:"btn btn-primary"},"Register"),r.a.createElement(l.b,{to:"/",className:"btn btn-link decoration-none"},"Cancel"))))},R=function(){var e=Object(n.useContext)(w),t=Object(c.a)(e,2),a=t[0],s=t[1],o=a.user,i=o.loginStatus,u=o.data;return console.log(a),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pl-16 pr-16"},u.email),r.a.createElement("div",{className:"pr-16 c-pointer c-light-blue",onClick:function(){"undefined"!==typeof Storage&&sessionStorage.removeItem("userData"),s({type:"RESET_LOGIN_USER"})}},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{className:"pl-16 pr-16 c-light-blue decoration-none",to:"/login"},"Login"),r.a.createElement(l.b,{className:"pr-16 c-light-blue decoration-none",to:"/register"},"Register"))),r.a.createElement("div",{className:"flex flex-center"},r.a.createElement("h1",null,"Hello"," ",i?u.firstName+" "+u.lastName:"anonymous")))},I=function(){var e=Object(n.useContext)(w),t=Object(c.a)(e,2)[1];return Object(n.useEffect)((function(){var e=null;"undefined"!==typeof Storage&&(e=JSON.parse(sessionStorage.getItem("userData"))),(e||{}).email&&t(p(e))}),[]),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:R}),r.a.createElement(i.a,{exact:!0,path:"/login",component:C}),r.a.createElement(i.a,{exact:!0,path:"/register",component:y}))},x=function(e,t){var a;return"LOGIN_USER_SUCCESS"===t.type||"REGISTER_USER_SUCCESS"===t.type?(a=Object(m.a)(Object(m.a)({},e),{},{loginStatus:!0,data:t.data,submission:"success"}),"undefined"!==typeof Storage&&sessionStorage.setItem("userData",JSON.stringify(t.data))):"RESET_LOGIN_USER"===t.type&&(a=Object(m.a)(Object(m.a)({},e),{},{loginStatus:!1})),a||e},k=function(e,t){return{user:x(e.user,t)}},U={user:{}},_=function(e){return r.a.createElement(j,{value:Object(n.useReducer)(k,U)},e.children)};var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{basename:"/"},r.a.createElement(_,null,r.a.createElement(I,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.2b5945de.chunk.js.map