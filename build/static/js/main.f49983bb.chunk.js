(this["webpackJsonpgrocery-app"]=this["webpackJsonpgrocery-app"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},66:function(e,t,n){},69:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(35),s=n.n(i),o=(n(42),n(43),n(18)),r=n(4),l=n(7),j=(n(44),n(1)),u=function(e){var t=e.product;return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("img",{src:t.imgUrl,alt:""}),Object(j.jsxs)("p",{children:[t.name," "]}),t.price," Taka",Object(j.jsx)("button",{className:"pdbtn",onClick:function(){t._id},children:"Buy Now"})]})},d=(n(46),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("http://localhost:5000/products").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(j.jsx)("div",{className:"grid-container",children:n.map((function(e){return Object(j.jsx)(u,{product:e})}))})}),b=n(13),h=n(36),p=n.n(h),O=n(21),m=(n(66),function(){var e=Object(O.a)(),t=e.register,n=e.handleSubmit,a=(e.watch,e.formState,e.errors,Object(c.useState)(null)),i=Object(l.a)(a,2),s=i[0],o=i[1];return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"this is for inventory"})}),Object(j.jsxs)("div",{id:"add-container",children:[Object(j.jsx)("h2",{children:"Add Product"}),Object(j.jsxs)("form",{onSubmit:n((function(e){var t={name:e.name,price:e.price,imgUrl:s};console.log(t),fetch("http://localhost:5000/addProduct",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("server side response",e)}))})),children:[Object(j.jsx)("input",Object(b.a)({name:"name",defaultValue:"product"},t("name"))),Object(j.jsx)("input",Object(b.a)({name:"price",defaultValue:"price"},t("price"))),Object(j.jsx)("br",{}),Object(j.jsx)("input",Object(b.a)({name:"weight",defaultValue:"weight"},t("weight"))),Object(j.jsx)("input",{id:"pic",name:"product sample",type:"file",onChange:function(e){console.log(e.target.files[0]);var t=new FormData;t.set("key","666aeb5b21a24cde55b95df3fc04f111"),t.append("image",e.target.files[0]),p.a.post("https://api.imgbb.com/1/upload",t).then((function(e){o(e.data.data.display_url)})).catch((function(e){console.log(e)}))}}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{id:"submit",type:"submit"})]})]})]})}),f=n(14),g=(n(67),{apiKey:"AIzaSyD3XGLvVT8gi0keuj-MSwUsJYPSzo9n3I0",authDomain:"grocery-app-ff75f.firebaseapp.com",projectId:"grocery-app-ff75f",storageBucket:"grocery-app-ff75f.appspot.com",messagingSenderId:"1089275864931",appId:"1:1089275864931:web:c158ae16f91beca63c9556"});n(69);f.a.initializeApp(g);var x=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({isSignedIn:!1,name:"",email:"",password:"",photo:""}),s=Object(l.a)(i,2),o=s[0],r=s[1],u=new f.a.auth.GoogleAuthProvider,d=new f.a.auth.FacebookAuthProvider,h=Object(O.a)(),p=h.register,m=h.handleSubmit,g=function(e){f.a.auth().currentUser.updateProfile({displayName:e}).then((function(){console.log("user name update successfully")})).catch((function(e){console.log(e)}))};return Object(j.jsxs)("div",{id:"form",children:[Object(j.jsxs)("div",{className:"login-form",children:[Object(j.jsxs)("form",{onSubmit:m((function(e){var t={isSignedIn:!0,name:e.name,email:e.email,password:e.password},c=function(){var e=Object(b.a)({},t);e.error="",e.success=!0,r(e)},a=function(e){var t=e.message;console.log(t);var n=Object(b.a)({},o);n.error=t,r(n)};!0===n?f.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(e){c(),g(o.name)})).catch((function(e){a(e)})):f.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){c()})).catch((function(e){a(e)}))})),children:[n&&Object(j.jsx)("input",Object(b.a)({placeholder:"Name"},p("name",{required:!0}))),Object(j.jsx)("br",{}),Object(j.jsx)("input",Object(b.a)({placeholder:"Name"},p("email",{required:!0}))),Object(j.jsx)("br",{}),Object(j.jsx)("input",Object(b.a)({placeholder:"Password",type:"password"},p("password",{minLength:6}))),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",value:n?"Create":"log in"})]}),Object(j.jsx)("input",{type:"checkbox",onChange:function(){return a(!n)},name:"name",id:""}),Object(j.jsx)("label",{htmlFor:"name",children:"Create Account"})]}),o.isSignedIn?Object(j.jsx)("button",{className:"signButton",onClick:function(){f.a.auth().signOut().then((function(e){r({isSignedIn:!1,name:"",email:"",password:"",photo:""})})).catch((function(e){console.log(e)}))},children:"Sign Out"}):Object(j.jsx)("button",{className:"signButton",onClick:function(){f.a.auth().signInWithPopup(u).then((function(e){var t=e.user,n=t.displayName,c=t.photoURL,a=t.email;r({isSignedIn:!0,name:n,email:a,photo:c})})).catch((function(e){var t=e.message,n=Object(b.a)({},o);n.error=t,r(n)}))},children:"Sign In"}),Object(j.jsx)("br",{}),o.isSignedIn?Object(j.jsx)("button",{className:"signButton",onClick:function(){},children:"Sign Out"}):Object(j.jsx)("button",{className:"signButton",onClick:function(){f.a.auth().signInWithPopup(d).then((function(e){e.user;console.log("facebook user",e.user)})).catch((function(e){e.code,e.message,e.email,e.credential}))},children:"Sign In"}),o.success&&Object(j.jsxs)("p",{style:{color:"green"},children:["User ",n?"Created":"logged in ","successfully "]}),Object(j.jsx)("p",{children:Object(j.jsx)("span",{className:"error",children:o.error})})]})};var v=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"body",children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)("p",{className:"logo",children:[Object(j.jsx)("span",{className:"G-style",children:"G"}),"ulistan"]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/addProduct",children:"Add Product"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/dashboard",children:"Dashboard"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/login",children:"Login"})})]})})]}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)(d,{})}),Object(j.jsx)(r.a,{path:"/addProduct",children:Object(j.jsx)(m,{})}),Object(j.jsx)(r.a,{path:"/login",children:Object(j.jsx)(x,{})})]})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),y()}},[[77,1,2]]]);
//# sourceMappingURL=main.f49983bb.chunk.js.map