(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{19:function(e,t,s){e.exports={form:"NewUserForm_form__Rx8fj",control:"NewUserForm_control__3gtAJ",actions:"NewUserForm_actions__Ubfh9"}},197:function(e,t,s){"use strict";s.r(t);var n=s(46),r=s.n(n),a=s(5),i=(s(88),s(2)),c=s(1),d=s.n(c),l=s(73),u=s.n(l),o=s(0),j=function(e){return Object(o.jsxs)("li",{className:u.a.item,children:[Object(o.jsxs)("figure",{children:[Object(o.jsxs)("blockquote",{children:[Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("p",{children:e.surname})]}),Object(o.jsxs)("figcaption",{children:["Tel.: ",e.phone]}),Object(o.jsxs)("figcaption",{children:["Email: ",e.email]})]}),Object(o.jsx)(a.b,{className:"btn users_details_btn",to:"/users/".concat(e.id),children:"View Details"})]})},b=s(48),p=s.n(b),m=d.a.createContext({persons:[],addUser:function(e){},removeUser:function(e){},editUser:function(e){}}),h=function(e){var t,s,n=Object(c.useContext)(m),r=Object(i.g)(),a=Object(i.h)(),d="asc"===new URLSearchParams(a.search).get("sort"),l=(t=n.persons,s=d,t.sort((function(e,t){return s?e.name>t.name?1:-1:e.name<t.name?1:-1}))),u=function(t){e.onInsertNewUser(t)};return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("div",{className:p.a.sorting,children:Object(o.jsxs)("button",{onClick:function(){r.push({pathname:a.pathname,search:"?sort=".concat(d?"desc":"asc")})},children:["Sort ",d?"Descending":"Ascending"]})}),Object(o.jsx)("ul",{className:p.a.list,children:l.map((function(e){return Object(o.jsx)(j,{id:e.id,name:e.name,surname:e.surname,phone:e.phone,email:e.email,onInsertNewUser:u},e.id)}))})]})},x=s(76),O=s.n(x),f=function(){return Object(o.jsxs)("div",{className:O.a.nousers,children:[Object(o.jsx)("p",{children:"No users found!"}),Object(o.jsx)(a.b,{className:"btn",to:"/new-user",children:"Add New User"})]})},v=function(){return 0===Object(c.useContext)(m).persons.length?Object(o.jsx)(f,{}):Object(o.jsx)(h,{})},_=s(34),g=s(23),N=s.n(g),y=s(11),w=s(50),U=s.n(w),R=y.a().shape({name:y.b().min(2,"Must be at least 2 digits").max(20,"Must be max 20 digits").required(),surname:y.b().min(2,"Must be at least 2 digits").max(20,"Must be max 20 digits").required(),birth_date:y.b().test("DOB","wrong DOB, at least 1 year",(function(e){return U()().diff(U()(e),"years")>=1})).required(),email:y.b().required().email("Wrong email formating"),password:y.b().min(4,"Must be at least 4 digits").max(10,"Must be max 10 digits").required(),phone:y.b().required().matches(/^[0-9]+$/,"Must be only digits").min(5,"Must be at least 5 digits").max(11,"Must be max 11 digits"),identity:y.b().required().matches(/^[0-9]+$/,"Must be only digits").min(2,"Must be at least 2 digits").max(5,"Must be max 5 digits"),passport_number:y.b().required().matches(/^[0-9]+$/,"Must be only digits").min(5,"Must be at least 5 digits").max(11,"Must be max 11 digits")}),M=s(81),D=s.n(M);var C=function(e){return Object(o.jsx)("div",{className:D.a.card,children:e.children})},q=s(19),F=s.n(q),k=function(e){var t=Object(c.useRef)(),s=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),a=Object(c.useRef)(),i=Object(c.useRef)(),d=Object(c.useRef)(),l=Object(c.useRef)(),u=function(){var c=Object(_.a)(N.a.mark((function c(u){var o,j,b,p,m,h,x,O,f;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return u.preventDefault(),o=t.current.value,j=s.current.value,b=n.current.value,p=r.current.value,m=a.current.value,h=i.current.value,x=d.current.value,O=l.current.value,f={id:"u"+(1e6*Math.random()).toFixed().toString(),name:o,surname:j,birth_date:b,email:p,password:m,phone:h,identity:x,passport_number:O},c.next=12,R.isValid(f);case 12:c.sent?e.onAddUser(f):alert("Could not create, wrong values inserted");case 14:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(o.jsx)(C,{children:Object(o.jsxs)("form",{className:F.a.form,onSubmit:u,children:[Object(o.jsxs)("div",{className:F.a.control,children:[Object(o.jsxs)("div",{className:"w-50",children:[Object(o.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(o.jsx)("input",{type:"text",required:!0,id:"Name",ref:t})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"Surname",children:"Surname"}),Object(o.jsx)("input",{type:"text",required:!0,id:"Surname",ref:s})]})]}),Object(o.jsxs)("div",{className:F.a.control,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"birthdate",children:"Birth Date"}),Object(o.jsx)("input",{type:"date",required:!0,id:"birthdate",ref:n})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{id:"email",type:"email",required:!0,ref:r})]})]}),Object(o.jsxs)("div",{className:F.a.control,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{id:"password",type:"password",required:!0,ref:a})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(o.jsx)("input",{id:"phone",type:"number",required:!0,ref:i})]})]}),Object(o.jsxs)("div",{className:F.a.control,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"identity",children:"Identity"}),Object(o.jsx)("input",{id:"identity",type:"number",required:!0,ref:d})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"passportnumber",children:"Passport Number"}),Object(o.jsx)("input",{id:"passportnumber",type:"number",required:!0,ref:l})]})]}),Object(o.jsx)("div",{className:F.a.actions,children:Object(o.jsx)("button",{children:"Add User"})})]})})},A=function(){var e=Object(i.g)(),t=Object(c.useContext)(m);return Object(o.jsx)(k,{onAddUser:function(s){t.addUser(s),e.push("/users")}})},S=s(10),P=s(6),I=s.n(P),B=s(82),E=(s(196),function(e){var t=Object(i.g)(),s=Object(c.useContext)(m),n=Object(c.useState)(!1),r=Object(S.a)(n,2),d=r[0],l=r[1],u=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useRef)(),p=Object(c.useRef)(),h=Object(c.useRef)(),x=Object(c.useRef)(),O=Object(c.useRef)(),f=Object(c.useRef)(),v=function(){l(!d)},g=function(){var t=Object(_.a)(N.a.mark((function t(s){var n,r,a,i,c,d,l,o,m;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),n=u.current.value?u.current.value:e.name,r=j.current.value?j.current.value:e.surname,a=b.current.value?b.current.value:e.birth_date,i=p.current.value?p.current.value:e.email,c=h.current.value?h.current.value:e.password,d=x.current.value?x.current.value:e.phone,l=O.current.value?O.current.value:e.identity,o=f.current.value?f.current.value:e.passport_number,m={id:e.id,name:n,surname:r,birth_date:a,email:i,password:c,phone:d,identity:l,passport_number:o},v(),t.next=13,R.isValid(m);case 13:t.sent?e.sendUpdateRequest(m):alert("Could not update, wrong values inserted");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=Object(o.jsx)("input",{type:"text",placeholder:e.name,ref:u}),w=Object(o.jsx)("input",{type:"text",placeholder:e.surname,ref:j}),U=Object(o.jsx)("input",{type:"date",ref:b}),M=Object(o.jsx)("input",{type:"email",placeholder:e.email,ref:p}),D=Object(o.jsx)("input",{type:"password",placeholder:"******",ref:h}),C=Object(o.jsx)("input",{type:"number",placeholder:e.phone,ref:x}),q=Object(o.jsx)("input",{type:"number",placeholder:e.identity,ref:O}),F=Object(o.jsx)("input",{type:"number",placeholder:e.passport_number,ref:f});return Object(o.jsxs)("div",{className:I.a.details,children:[Object(o.jsxs)("div",{className:I.a.flex,children:[Object(o.jsx)("p",{children:"Name: "}),Object(o.jsx)("p",{children:d?y:e.name})]}),Object(o.jsxs)("div",{className:I.a.flex,children:[Object(o.jsx)("p",{children:"Surname: "}),Object(o.jsx)("p",{children:d?w:e.surname})]}),Object(o.jsxs)("div",{className:I.a.flex,children:[Object(o.jsx)("p",{children:"Date of Birth: "}),Object(o.jsx)("p",{children:d?U:e.birth_date})]}),Object(o.jsxs)("div",{className:I.a.flex,children:[Object(o.jsx)("p",{children:"Email: "}),Object(o.jsx)("p",{children:d?M:e.email})]}),Object(o.jsxs)("div",{className:I.a.flex,children:[Object(o.jsx)("p",{children:"Password: "}),Object(o.jsx)("p",{children:d?D:"*****"})]}),Object(o.jsxs)("div",{className:I.a.flex,children:[Object(o.jsx)("p",{children:"Phone: "}),Object(o.jsx)("p",{children:d?C:e.phone})]}),Object(o.jsxs)("div",{className:I.a.flex,children:[Object(o.jsx)("p",{children:"Identity: "}),Object(o.jsx)("p",{children:d?q:e.identity})]}),Object(o.jsxs)("div",{className:I.a.flex,children:[Object(o.jsx)("p",{children:"Passport No: "}),Object(o.jsx)("p",{children:d?F:e.passport_number})]}),Object(o.jsxs)("div",{className:I.a.btnField,children:[Object(o.jsx)(a.b,{className:"btn ".concat(I.a.detailsBtn),to:"/users",children:"Back"}),Object(o.jsx)("button",{className:"btn ".concat(I.a.detailsBtn),onClick:v,children:d?"Cancel editing":"Edit"}),d&&Object(o.jsx)("button",{className:"btn ".concat(I.a.detailsBtn),onClick:g,children:"Save"}),Object(o.jsx)("button",{className:"btn ".concat(I.a.detailsBtn),onClick:function(){Object(B.confirmAlert)({title:"Delete this user?",message:"",buttons:[{label:"Yes",onClick:function(){s.removeUser(e.id),t.push("/users")}},{label:"No",onClick:function(){return""}}]})},children:"Delete User"})]})]})}),T=function(){var e=Object(c.useContext)(m),t=Object(i.i)().userId,s=e.persons.filter((function(e){return e.id.toString()===t.toString()}));return s[0].id?Object(o.jsx)(c.Fragment,{children:Object(o.jsx)(E,{id:t,name:s[0].name,surname:s[0].surname,birth_date:s[0].birth_date,email:s[0].email,password:s[0].password,phone:s[0].phone,identity:s[0].identity,passport_number:s[0].passport_number,sendUpdateRequest:function(t){e.editUser(t)}})}):Object(o.jsx)("p",{children:"No User found"})},G=s(83),V=s.n(G),W=s(20),L=s.n(W),J=function(){return Object(o.jsxs)("header",{className:L.a.header,children:[Object(o.jsxs)("div",{className:L.a.logo,children:["Users Web App",Object(o.jsx)("a",{className:L.a.linkToGit,href:"https://github.com/GvidasGVD/ReactUsersApp/tree/master",target:"_blank",rel:"noopener noreferrer",children:"See code in GitHub"})]}),Object(o.jsx)("nav",{className:L.a.nav,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.c,{to:"/users",activeClassName:L.a.active,children:"All Users"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.c,{to:"/new-user",activeClassName:L.a.active,children:"Add New User"})})]})})]})},Q=function(e){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)(J,{}),Object(o.jsx)("main",{className:V.a.main,children:e.children})]})},$=function(){return Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)("p",{children:"Page not found!"})})},H=s(4),Z={persons:[{id:"u1",name:"Tom",surname:"Riddle",birth_date:"1964-12-30",email:"tomriddle@gmail.com",password:"a4da6sd7",phone:8675554687,identity:45,passport_number:46787987},{id:"u2",name:"Rick",surname:"Wangog",birth_date:"1967-12-30",email:"Wangog@gmail.com",password:"asdasdasd",phone:45647784,identity:456,passport_number:7898457}]},z=function(e,t){if("ADD"===t.type){var s=e.persons.findIndex((function(e){return e.id===t.person.id}));return e.persons[s]||!t.person.id?(alert("Cannot add person, contact administrator"),e.persons):{persons:e.persons.concat(t.person)}}if("REMOVE"===t.type)return{persons:e.persons.filter((function(e){return e.id!==t.id}))};if("UPDATE"===t.type){var n,r=e.persons.findIndex((function(e){return e.id===t.data.id}));return r>=0?((n=Object(H.a)(e.persons))[r]=t.data,{persons:n}):void alert("Something went wrong, contact administrator")}return Z},Y=function(e){var t=Object(c.useReducer)(z,Z),s=Object(S.a)(t,2),n=s[0],r=s[1],a={persons:n.persons,addUser:function(e){r({type:"ADD",person:e})},removeUser:function(e){r({type:"REMOVE",id:e})},editUser:function(e){r({type:"UPDATE",data:e})}};return Object(o.jsx)(m.Provider,{value:a,children:e.children})};var K=function(){return Object(o.jsx)(Y,{children:Object(o.jsx)(Q,{children:Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{path:"/",exact:!0,children:Object(o.jsx)(i.a,{to:"/users"})}),Object(o.jsx)(i.b,{path:"/users",exact:!0,children:Object(o.jsx)(v,{})}),Object(o.jsx)(i.b,{path:"/users/:userId",children:Object(o.jsx)(T,{})}),Object(o.jsx)(i.b,{path:"/new-user",children:Object(o.jsx)(A,{})}),Object(o.jsx)(i.b,{path:"/ReactUsersApp",exact:!0,children:Object(o.jsx)(i.a,{to:"/users"})}),Object(o.jsx)(i.b,{path:"*",children:Object(o.jsx)($,{})})]})})})};r.a.render(Object(o.jsx)(a.a,{children:Object(o.jsx)(K,{})}),document.getElementById("root"))},20:function(e,t,s){e.exports={header:"MainNavigation_header__1eTWp",logo:"MainNavigation_logo__2S30C",nav:"MainNavigation_nav__7QCTQ",active:"MainNavigation_active__3RUWq",linkToGit:"MainNavigation_linkToGit__3iPIP"}},48:function(e,t,s){e.exports={list:"UserList_list__28Q5_",sorting:"UserList_sorting__aEAuP"}},6:function(e,t,s){e.exports={details:"UserDetails_details__2Lhh9",flex:"UserDetails_flex__2siVv",btnField:"UserDetails_btnField__31p68",detailsBtn:"UserDetails_detailsBtn__1GNfu",passwordInput:"UserDetails_passwordInput__2vedh"}},73:function(e,t,s){e.exports={item:"UserItem_item__zWGcH"}},76:function(e,t,s){e.exports={nousers:"NoUserFound_nousers__3Z54F"}},81:function(e,t,s){e.exports={card:"Card_card__1Z5RJ"}},83:function(e,t,s){e.exports={main:"Layout_main__3grmh"}},88:function(e,t,s){}},[[197,1,2]]]);
//# sourceMappingURL=main.dec7e610.chunk.js.map