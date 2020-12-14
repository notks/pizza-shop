(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},31:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(30),a(3)),s=a(8),u=(a(31),a(5)),i=a.n(u),m=a(10),p=a(21),d=a(4),h=Object(d.b)({}),f=new function e(){var t=this;Object(p.a)(this,e),this.checkAuth=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("AuthState")){e.next=5;break}return e.next=3,fetch("https://lsbv1.herokuapp.com/api/authenticated",{headers:{Authorization:localStorage.getItem("Authorization")}}).then((function(e){return e.json()})).then((function(e){t.authState=!0})).catch((function(e){console.log(e),t.authState=!1,h.push("/login")}));case 3:e.next=6;break;case 5:h.push("/login");case 6:return e.abrupt("return",t.authState);case 7:case"end":return e.stop()}}),e)}))),this.login=function(){var e=Object(m.a)(i.a.mark((function e(a,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.authState&&h.push("/home"),r="",e.next=4,fetch("https://lsbv1.herokuapp.com/api/user/login",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({email:a,password:n})}).then((function(e){return e.json()})).then((function(e){if(!e.message)return localStorage.setItem("Authorization","Bearer ".concat(e.token)),localStorage.setItem("AuthState",!0),h.push("/home");r=e.message})).catch((function(e){return console.log(e)}));case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.logout=function(){fetch("https://lsbv1.herokuapp.com/api/user/logout",{method:"DELETE",headers:{Authorization:localStorage.getItem("Authorization")}}).then((function(e){console.log("You are logged out!"),localStorage.removeItem("Authorization"),localStorage.removeItem("AuthState"),h.push("/login"),document.location.reload()})).catch((function(e){console.log("You are unauthenticated!")}))},this.auth=function(){var e=Object(m.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkAuth();case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function b(e){var t=e.history;return e.visible?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dropdown_menu_main",id:"dropdown_menu_main"},r.a.createElement("button",{className:"dropdown_button",onClick:function(){t.push("/home")}},"Home"),r.a.createElement("button",{className:"dropdown_button",onClick:Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.logout();case 2:case"end":return e.stop()}}),e)})))},"Logout"))):null}function E(e){var t=e.history,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(localStorage.getItem("AuthState")),m=Object(o.a)(i,2),p=m[0],d=m[1],h=document.getElementById("dropdown_menu_main"),f=document.getElementById("login_btn");return window.onclick=function(e){e.target!==h&&e.target!==f&&u(!1)},r.a.createElement("header",{className:"nav_header"},r.a.createElement("div",{className:"search_box"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{className:"logo",src:"/pizza-shop/img/pizza_logo2.png",alt:"logo-img"}))),r.a.createElement("div",{className:"cart_login"},r.a.createElement("button",{className:"cart_btn",onClick:function(){t.push("/order")}},r.a.createElement("img",{className:"cart_icon",src:"/pizza-shop/img/supermarketlight.svg",alt:"Cart-icon"})),r.a.createElement("button",{id:"login_btn",className:"login_btn",onClick:function(){p?u(!l):t.push("/login")}},p?"Home":"Login"),r.a.createElement(b,{history:t,notinusejusttofixunusedvarwarning:d,visible:l})))}var g=a(2),v=a(13);function y(e){var t=e.cart,a=e.setcart,n=e.item;return r.a.createElement("div",{className:"item_card"},r.a.createElement("img",{src:"/pizza-shop"+n.image,alt:"item"}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,n.ingreadiants)),r.a.createElement("p",null,n.name),r.a.createElement("h1",null,n.price),r.a.createElement("button",{onClick:function(){!function(e){var n=Object(v.a)(t),r=!1;n.forEach((function(t){t.id===e.id&&(t.q++,r=!0)})),!1===r&&(e.q=1,n.push(e)),a(n),localStorage.setItem("cart",JSON.stringify(n))}(n)}},"Add To Cart"," ")))}function N(e){var t=e.cart,a=e.setcart,c=Object(n.useState)([]),l=Object(o.a)(c,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){fetch("https://lsbv1.herokuapp.com/api/products").then((function(e){return e.json()})).then((function(e){u(e)}))}),[]),r.a.createElement(r.a.Fragment,null,s.map((function(e){return r.a.createElement(y,{key:e.id,item:e,setcart:a,cart:t})})))}function _(e){var t=e.item,a=e.setcart,n=e.cart;return r.a.createElement("div",{className:"cart-component"},r.a.createElement("img",{src:"/pizza-shop"+t.image,alt:"product",className:"cart-product-image"}),r.a.createElement("p",null,t.name," "),r.a.createElement("input",{type:"number",value:t.q,min:"1",onChange:function(e){return function(e,t){var r=Object(v.a)(n);r.forEach((function(a){t.id===a.id&&(t.q=parseInt(e.target.value))})),a(r)}(e,t)}}),r.a.createElement("p",null,t.price,"$"),r.a.createElement("button",{onClick:function(){!function(e){var t=Object(v.a)(n),r=!1;t.forEach((function(t){t.id===e&&t.q>1&&(t.q--,r=!0)})),!1===r&&(t=n.filter((function(t){return t.id!==e}))),a(t)}(t.id)}},r.a.createElement("b",null,"-")))}function S(e){var t=e.cart,a=e.setcart,c=Object(n.useState)(0),l=Object(o.a)(c,2),u=l[0],i=l[1],m=Object(n.useRef)(0);return Object(n.useEffect)((function(){var e=0;m.current=0,t.forEach((function(t){e+=t.price*t.q,m.current+=t.q})),i(e)}),[t]),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"cart"},r.a.createElement("img",{src:"/pizza-shop/img/supermarketlight.svg",className:"shopping-cart-sidebar",alt:"shopping-cart"})),r.a.createElement("div",{className:"items"},t.map((function(e){return r.a.createElement(_,{key:e.id,setcart:a,item:e,cart:t})}))),r.a.createElement("div",{className:"price"},u>0&&"Total: "+u+"$",r.a.createElement("br",null),m.current>0&&"Total quantity: "+m.current),r.a.createElement("div",{className:"order"},m.current>0&&r.a.createElement(s.b,{to:"/order"},r.a.createElement("button",{className:"orderbtn"},"\u2714")),m.current>0&&r.a.createElement("button",{className:"clear",onClick:function(){a([]),localStorage.removeItem("cart")}},"X")))}function j(e){var t=e.modal,a=e.setmodal,n=e.setdone,c=e.done,o=e.method;return t?l.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay_div"})),r.a.createElement("div",{className:"modal_main_div"},r.a.createElement("div",{className:"main_content"},"stripe"===o?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",null,"Stripe payment verified"),r.a.createElement("p",null,"(Full payment proccessors coming soon)")," ",r.a.createElement("input",{type:"checkbox",onChange:function(){n(!c)}})):r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",null,"Paypal payment verified"),r.a.createElement("p",null,"(Full payment proccessors coming soon)"),r.a.createElement("input",{type:"checkbox",onChange:function(){n(!c)}}))),r.a.createElement("button",{className:"close_btn",onClick:function(){a(!1)}},"X"))),document.getElementById("portal")):null}var O=a(40);function k(e){var t=e.cart,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],s=c[1],u=Object(n.useRef)(),i=Object(n.useRef)(),m={},p=Object(n.useState)(!1),d=Object(o.a)(p,2),h=d[0],b=d[1],E=Object(n.useState)(!1),g=Object(o.a)(E,2),v=g[0],y=g[1],N=function(e){e.preventDefault(),m.address=u.current.value,m.telephone=i.current.value,m.cart=t,console.log(m),fetch("https://lsbv1.herokuapp.com/api/user/orders",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("Authorization")},body:JSON.stringify(m)}).then((function(e){return e.json()})).then((function(e){document.location.href="/home"})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){f.auth(s)}),[]),r.a.createElement(r.a.Fragment,null,l?r.a.createElement("div",{className:"address-form"},r.a.createElement("form",{onSubmit:function(e){N(e)}},r.a.createElement("div",{className:"input_steps"},r.a.createElement("span",{className:"step_1 active_step"},"Step 1"),r.a.createElement("span",{className:"step_2 "},"Step 2")),r.a.createElement("div",{className:"input_fields"},r.a.createElement("div",{className:"step_1_fields"},r.a.createElement("input",{ref:u,type:"text",className:"address-input",name:"address",placeholder:"Address"}),r.a.createElement("br",null),r.a.createElement("input",{ref:i,type:"text",className:"telephone-input",name:"phone",placeholder:"Telephone"}),r.a.createElement("br",null)),r.a.createElement("div",{className:"step_2_fields"},r.a.createElement("button",{className:"paypal_btn btn btn-lg",onClick:function(e){e.preventDefault(),b(!0)}},"Paypal"),r.a.createElement("button",{className:"stripe_btn btn btn-lg",onClick:function(e){e.preventDefault(),b(!0)}},"Stripe"),r.a.createElement(j,{modal:h,done:v,setdone:y,setmodal:b})),r.a.createElement("button",{className:"back_btn btn btn-secondary",onClick:function(e){e.preventDefault(),function(){var e=document.querySelector(".step_1"),t=document.querySelector(".step_2"),a=document.querySelector(".step_2_fields"),n=document.querySelector(".step_1_fields"),r=document.querySelector(".back_btn"),c=document.querySelector(".submit_btn"),l=document.querySelector(".next_btn");t.classList.remove("active_step"),e.classList.add("active_step"),n.style.display="block",a.style.display="none",l.style.display="block",r.style.display="none",c.style.display="none"}()}},"Back"),r.a.createElement("button",{className:"next_btn btn btn-primary",onClick:function(e){e.preventDefault(),function(){var e=document.querySelector(".step_1"),t=document.querySelector(".step_2"),a=document.querySelector(".step_2_fields"),n=document.querySelector(".step_1_fields"),r=document.querySelector(".back_btn"),c=document.querySelector(".submit_btn"),l=document.querySelector(".next_btn");e.classList.remove("active_step"),t.classList.add("active_step"),n.style.display="none",a.style.display="flex",l.style.display="none",r.style.display="block",c.style.display="block"}()}},"Next"),r.a.createElement("button",{disabled:!v,className:"submit_btn btn btn-primary",onClick:function(e){N(e),console.log("a")}},"Finish")))):r.a.createElement(O.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}function w(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),u=s[0],i=s[1];return Object(n.useEffect)((function(){f.auth(i),fetch("https://lsbv1.herokuapp.com/api/user/orders",{headers:{Authorization:localStorage.getItem("Authorization")}}).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"orders-container"},Boolean(a)&u?r.a.createElement("table",{className:"orders"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"What?"),r.a.createElement("th",null,"When?"),r.a.createElement("th",null,"Where?"),r.a.createElement("th",null,"How much?"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement("img",{src:"/pizza-shop"+e.image,alt:"product"})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.created_at),r.a.createElement("td",null,e.address),r.a.createElement("td",null,e.price,"$"))})))):r.a.createElement(O.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}function x(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("email-input").value,a=document.getElementById("password-input").value,e.next=4,f.login(t,a);case 4:n=e.sent,c(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login_container"},r.a.createElement("div",{id:"failed-login"},a),r.a.createElement("form",{onSubmit:function(e){console.log(e),e.preventDefault(),l()}},r.a.createElement("input",{className:"form-control",type:"text",id:"email-input",placeholder:"email"}),r.a.createElement("input",{className:"form-control",type:"password",id:"password-input",placeholder:"password"}),r.a.createElement("div",{className:"login_buttons"},r.a.createElement("button",{className:"btn btn-primary login_btn",type:"submit"},"Log In"),r.a.createElement(s.b,{to:"/register"},r.a.createElement("button",{className:"btn btn-secondary"},"Sign Up")))))}function q(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(),l=Object(n.useState)(""),s=Object(o.a)(l,2),u=s[0],i=s[1];return r.a.createElement("div",{className:"register_container"},r.a.createElement("p",null,u),r.a.createElement("div",{className:"input_fields"},r.a.createElement("input",{required:!0,className:"form-control",type:"text",ref:e,placeholder:"Name"}),r.a.createElement("br",null),r.a.createElement("input",{required:!0,className:"form-control",type:"text",ref:t,placeholder:"Email"}),r.a.createElement("br",null),r.a.createElement("input",{required:!0,className:"form-control",type:"password",ref:a,placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("input",{required:!0,className:"form-control",type:"password",ref:c,placeholder:"Retype password"})),r.a.createElement("button",{className:"btn btn-primary ",onClick:function(){return function(){var n={name:e.current.value,email:t.current.value,password:a.current.value};a.current.value===c.current.value?fetch("https://lsbv1.herokuapp.com/api/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){"Done!"===e.message?document.location.href="/pizza-shop/login":i(e.message)})).catch((function(e){return console.log(e)})):i("Passwords dont match!")}()}},"Sign up"))}function z(e){var t=e.cart,a=e.setcart;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.c,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"main"},r.a.createElement(g.a,{path:"/",exact:!0,render:function(){return r.a.createElement(N,{cart:t,setcart:a})}}),r.a.createElement(g.a,{path:"/order",exact:!0,render:function(){return r.a.createElement(k,{cart:t})}}),r.a.createElement(g.a,{path:"/register",exact:!0,render:function(){return r.a.createElement(q,null)}}),r.a.createElement(g.a,{path:"/home",exact:!0,render:function(){return r.a.createElement(w,null)}}),r.a.createElement(g.a,{path:"/login",exact:!0,render:function(){return r.a.createElement(x,null)}})),r.a.createElement(S,{setcart:a,cart:t})))))}var C=Object(d.b)();var I=function(){var e=JSON.parse(localStorage.getItem("cart")),t=Object(n.useState)(e||[]),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement(s.a,{history:C,basename:"/"},r.a.createElement(E,{history:C}),r.a.createElement(z,{cart:c,setcart:l})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.59f1ca5e.chunk.js.map