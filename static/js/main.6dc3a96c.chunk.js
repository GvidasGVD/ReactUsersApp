(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{12:function(e,t,r){e.exports={header:"MainNavigation_header__1eTWp",logo:"MainNavigation_logo__2S30C",nav:"MainNavigation_nav__7QCTQ",active:"MainNavigation_active__3RUWq",linkToGit:"MainNavigation_linkToGit__3iPIP"}},18:function(e,t,r){e.exports={item:"UserItem_item__zWGcH",icons:"UserItem_icons__AguFX"}},2:function(e,t,r){e.exports={form:"NewUserForm_form__Rx8fj",control:"NewUserForm_control__3gtAJ",actions:"NewUserForm_actions__Ubfh9",error_box:"NewUserForm_error_box__15SWX",error_title:"NewUserForm_error_title__1bJSt",error_message:"NewUserForm_error_message__N5qno",error_text:"NewUserForm_error_text__2bEVh",error_input_border:"NewUserForm_error_input_border__2RYGv"}},23:function(e,t,r){e.exports={list:"UserList_list__28Q5_",sorting:"UserList_sorting__aEAuP"}},27:function(e,t,r){e.exports={nousers:"NoUserFound_nousers__3Z54F"}},28:function(e,t,r){e.exports={card:"Card_card__1Z5RJ"}},30:function(e,t,r){e.exports={main:"Layout_main__3grmh"}},36:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var s=r(21),n=r.n(s),a=r(6),c=(r(36),r(3)),i=r(1),l=r.n(i),o=r(18),u=r.n(o),d=r(24),b=r(0),j=function(e){return Object(b.jsxs)("li",{className:u.a.item,children:[Object(b.jsxs)("figure",{children:[Object(b.jsxs)("blockquote",{children:[Object(b.jsx)("p",{children:e.name}),Object(b.jsx)("p",{children:e.surname})]}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)(d.b,{className:u.a.icons})," ",e.phone]}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)(d.a,{className:u.a.icons})," ",e.email]})]}),Object(b.jsx)(a.b,{className:"btn users_details_btn",to:"/ReactUsersApp/users/".concat(e.id),children:"View Details"})]})},p=r(23),h=r.n(p),m=l.a.createContext({persons:[],addUser:function(e){},removeUser:function(e){},editUser:function(e){}}),O=function(e){var t,r,s=Object(i.useContext)(m),n=Object(c.g)(),a=Object(c.h)(),l="asc"===new URLSearchParams(a.search).get("sort"),o=(t=s.persons,r=l,t.sort((function(e,t){return r?e.name>t.name?1:-1:e.name<t.name?1:-1}))),u=function(t){e.onInsertNewUser(t)};return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsx)("div",{className:h.a.sorting,children:Object(b.jsxs)("button",{onClick:function(){n.push({pathname:a.pathname,search:"?sort=".concat(l?"desc":"asc")})},children:["Sort ",l?"Descending":"Ascending"]})}),Object(b.jsx)("ul",{className:h.a.list,children:o.map((function(e){return Object(b.jsx)(j,{id:e.id,name:e.name,surname:e.surname,phone:e.phone,email:e.email,onInsertNewUser:u},e.id)}))})]})},x=r(27),f=r.n(x),_=function(){return Object(b.jsxs)("div",{className:f.a.nousers,children:[Object(b.jsx)("p",{children:"No users found!"}),Object(b.jsx)(a.b,{className:"btn",to:"/ReactUsersApp/new-user",children:"Add New User"})]})},v=function(){return 0===Object(i.useContext)(m).persons.length?Object(b.jsx)(_,{}):Object(b.jsx)(O,{})},g=r(16),N=r(10),y=r(14),U=r.n(y),w=r(28),k=r.n(w);var A=function(e){return Object(b.jsx)("div",{className:k.a.card,children:e.children})},R=r(2),D=r.n(R),I=/^[a-zA-Z].*[\s.]*$/,C=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function P(e){var t=e.name,r=e.surname,s=e.birth_date,n=e.email,a=e.password,c=e.phone,i=e.identity,l=e.passport_number,o={title:"",message:"",isValid:!0},u=function(e){return I.test(e)};0!==t.trim().length&&0!==r.trim().length&&0!==s.trim().length&&0!==n.trim().length&&0!==a.trim().length&&0!==i.trim().length||(o={title:"Invalid input",message:"Cannot insert empty values.",isValid:!1}),(t.length<2||t.length>20||!u(t))&&(o={title:"Invalid Name",message:"Name should be at least 2 symbols and not more than 20 symbols. Only letters allowed",isValid:!1}),(r.length<2||r.length>20||!u(r))&&(o={title:"Invalid Surname",message:"Surname should be at least 2 symbols and not more than 20 symbols. Only letters allowed",isValid:!1}),(a.length<6||a.length>15)&&(o={title:"Invalid Password",message:"Should be at least 6 symbols but not more than 15 symbols",isValid:!1}),(c.length<5||c.length>13)&&(o={title:"Invalid Phone number",message:"Should be at least 5 but not more than 13 digits ",isValid:!1}),"ID"!==i&&"Passport"!==i&&(o={title:"Identity error",message:"Only ID or Passport can be chosen ",isValid:!1}),(l.length<5||l.length>9)&&(o={title:"Invalid Passport number",message:"Should be at least 5 but not more than 9 digits ",isValid:!1}),new Date(s)>new Date&&(o={title:"Invalid Date of Birth",message:"Please insert valid date of birth",isValid:!1});return(!function(e){return C.test(e)}(n)||n.length>50)&&(o={title:"Invalid Email format",message:"Please check if email format is correct",isValid:!1}),o}var S=function(e,t,r,s){var n=Object(i.useState)(""),a=Object(N.a)(n,2),c=a[0],l=a[1],o=Object(i.useState)(!1),u=Object(N.a)(o,2),d=u[0],b=u[1],j=Object(i.useState)(!0),p=Object(N.a)(j,2),h=p[0],m=p[1],O=Object(i.useState)(""),x=Object(N.a)(O,2),f=x[0],_=x[1],v=!h&&d,g=Object(i.useCallback)((function(t){switch(m(!1),console.log("this happend"),e){case"name":switch(t){case"empty":_("Name must not be empty.");break;case"length":_("At least 2 but not more than 20 letters.");break;case"type":_("Only letters allowed.");break;default:_("")}break;case"surname":switch(t){case"empty":_("Surname must not be empty.");break;case"length":_("At least 2 but not more than 20 letters.");break;case"type":_("Only letters allowed.");break;default:_("")}break;case"email":switch(t){case"empty":_("Email must not be empty.");break;case"length":_("At least 5 but not more than 50 characters.");break;case"type":_("Invalid Email format.");break;default:_("")}break;case"password":switch(t){case"empty":_("Password must not be empty.");break;case"length":_("At least 6 but not more than 16 characters.");break;default:_("")}break;case"phone":switch(t){case"length":_("At least 5 but not more than 13 numbers.");break;case"type":_("Invalid phone number format.");break;default:_("")}break;case"passport_number":switch(t){case"length":_("At least 5 but not more than 9 numbers.");break;case"type":_("Invalid passport number format.");break;default:_("")}break;default:_("")}}),[e]);return Object(i.useEffect)((function(){var e=setTimeout((function(){t(c)||!d?c&&!r(c)&&d?g("length"):c&&!s(c)&&d?g("type"):(m(!0),_("")):g("empty")}),1e3);return function(){clearTimeout(e)}}),[c,d,t,r,s,g]),{value:c,hasError:v,errorMessage:f,isValid:h,valueChangeHandler:function(e){l(e.target.value)},inputBlurHandler:function(){b(!0)}}},V=/^[a-zA-Z].*[\s.]*$/,B=/^[0-9]*$/,F=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,E=function(e){var t=S("name",(function(e){return""!==e.trim()}),(function(e){return e.length>=2&&e.length<=20}),(function(e){return V.test(e)})),r=t.value,s=t.isValid,n=t.errorMessage,a=t.valueChangeHandler,c=t.inputBlurHandler,l=S("surname",(function(e){return""!==e.trim()}),(function(e){return e.length>=2&&e.length<=20}),(function(e){return V.test(e)})),o=l.value,u=l.isValid,d=l.errorMessage,j=l.valueChangeHandler,p=l.inputBlurHandler,h=S("email",(function(e){return""!==e.trim()}),(function(e){return e.length>=5&&e.length<=50}),(function(e){return F.test(e)})),m=h.value,O=h.isValid,x=h.errorMessage,f=h.valueChangeHandler,_=h.inputBlurHandler,v=S("password",(function(e){return""!==e.trim()}),(function(e){return e.length>=6&&e.length<=15}),(function(e){return e})),y=v.value,w=v.isValid,k=v.errorMessage,R=v.valueChangeHandler,I=v.inputBlurHandler,C=S("phone",(function(e){return!0}),(function(e){return e.length>=5&&e.length<=13}),(function(e){return B.test(e)})),E=C.value,H=C.isValid,M=C.errorMessage,T=C.valueChangeHandler,q=C.inputBlurHandler,G=S("passport_number",(function(e){return!0}),(function(e){return e.length>=5&&e.length<=9}),(function(e){return B.test(e)})),W=G.value,Z=G.isValid,z=G.errorMessage,J=G.valueChangeHandler,L=G.inputBlurHandler,$=Object(i.useRef)(),Q=Object(i.useRef)(),X=Object(i.useRef)(),Y=Object(i.useRef)(),K=Object(i.useRef)(),ee=Object(i.useRef)(),te=Object(i.useRef)(),re=Object(i.useRef)(),se=Object(i.useState)(),ne=Object(N.a)(se,2),ae=ne[0],ce=ne[1],ie=function(){var t=Object(g.a)(U.a.mark((function t(r){var s,n,a,c,i,l,o,u,d,b,j,p,h;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),s=$.current.value,n=Q.current.value,a=X.current.value,c=Y.current.value,i=K.current.value,l=ee.current.value,o=te.current.value,u=re.current.value,d={id:"u"+(1e6*Math.random()).toFixed().toString(),name:s,surname:n,birth_date:a,email:c,password:i,phone:l,identity:o,passport_number:u},b=P(d),j=b.isValid,p=b.title,h=b.message,j){t.next=16;break}return ce({title:p,message:h}),t.abrupt("return");case 16:e.onAddUser(d);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),le=Object(b.jsx)("p",{className:D.a.error_text,children:n}),oe=Object(b.jsx)("p",{className:D.a.error_text,children:d}),ue=Object(b.jsx)("p",{className:D.a.error_text,children:x}),de=Object(b.jsx)("p",{className:D.a.error_text,children:k}),be=Object(b.jsx)("p",{className:D.a.error_text,children:M}),je=Object(b.jsx)("p",{className:D.a.error_text,children:z});return Object(b.jsxs)(A,{children:[ae&&Object(b.jsxs)("div",{className:D.a.error_box,children:[" ",Object(b.jsx)("div",{className:D.a.error_title,children:ae.title}),Object(b.jsx)("div",{className:D.a.error_message,children:ae.message})]}),Object(b.jsxs)("form",{className:D.a.form,onSubmit:ie,children:[Object(b.jsxs)("div",{className:D.a.control,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",required:!0,id:"Name",ref:$,placeholder:"Name",title:"Name",value:r,onChange:a,onBlur:c,className:"".concat(s?"":D.a.error_input_border)}),le]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",required:!0,id:"Surname",ref:Q,placeholder:"Surname",title:"Surname",onChange:j,onBlur:p,value:o,className:"".concat(u?"":D.a.error_input_border)}),oe]})]}),Object(b.jsxs)("div",{className:D.a.control,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{id:"email",type:"email",required:!0,ref:Y,placeholder:"Email",title:"Email",onChange:f,value:m,onBlur:_,className:"".concat(O?"":D.a.error_input_border)}),ue]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{id:"password",type:"password",required:!0,ref:K,placeholder:"Password",title:"Password",onChange:R,onBlur:I,className:"".concat(w?"":D.a.error_input_border),value:y}),de]})]}),Object(b.jsxs)("div",{className:D.a.control,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{id:"phone",type:"number",ref:ee,placeholder:"Phone",title:"Phone",onChange:T,onBlur:q,className:"".concat(H?"":D.a.error_input_border),value:E}),be]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{id:"passportnumber",type:"number",ref:re,placeholder:"Passport/ID number",title:"Passport/ID number",onChange:J,onBlur:L,value:W,className:"".concat(Z?"":D.a.error_input_border)}),je]})]}),Object(b.jsxs)("div",{className:D.a.control,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"identity",children:"Identity"}),Object(b.jsxs)("select",{id:"identity",ref:te,children:[Object(b.jsx)("option",{value:"ID",defaultValue:!0,children:"ID"}),Object(b.jsx)("option",{value:"Passport",children:"Passport"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"birthdate",children:"Birth Date"}),Object(b.jsx)("input",{type:"date",id:"birthdate",ref:X})]})]}),Object(b.jsx)("div",{className:D.a.actions,children:Object(b.jsx)("button",{children:"Add User"})})]})]})},H=function(){var e=Object(c.g)(),t=Object(i.useContext)(m);return Object(b.jsx)(E,{onAddUser:function(r){t.addUser(r),e.push("/ReactUsersApp/users")}})},M=r(5),T=r.n(M),q=r(29),G=(r(47),function(e){var t=Object(c.g)(),r=Object(i.useContext)(m),s=Object(i.useState)(!1),n=Object(N.a)(s,2),l=n[0],o=n[1],u=Object(i.useState)(),d=Object(N.a)(u,2),j=d[0],p=d[1],h=Object(i.useRef)(),O=Object(i.useRef)(),x=Object(i.useRef)(),f=Object(i.useRef)(),_=Object(i.useRef)(),v=Object(i.useRef)(),y=Object(i.useRef)(),w=Object(i.useRef)(),k=function(){o(!l)},A=function(){var t=Object(g.a)(U.a.mark((function t(r){var s,n,a,c,i,l,o,u,d,b,j,m,g;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),s=h.current.value?h.current.value:e.name,n=O.current.value?O.current.value:e.surname,a=x.current.value?x.current.value:e.birth_date,c=f.current.value?f.current.value:e.email,i=_.current.value?_.current.value:e.password,l=v.current.value?v.current.value:e.phone,o=y.current.value?y.current.value:e.identity,u=w.current.value?w.current.value:e.passport_number,d={id:e.id,name:s,surname:n,birth_date:a,email:c,password:i,phone:l,identity:o,passport_number:u},k(),b=P(d),j=b.isValid,m=b.title,g=b.message,j){t.next=17;break}return p({title:m,message:g}),t.abrupt("return");case 17:p({title:"",message:""}),e.sendUpdateRequest(d,e.id);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=Object(b.jsx)("input",{type:"text",placeholder:e.name,ref:h}),D=Object(b.jsx)("input",{type:"text",placeholder:e.surname,ref:O}),I=Object(b.jsx)("input",{type:"date",ref:x}),C=Object(b.jsx)("input",{type:"email",placeholder:e.email,ref:f}),S=Object(b.jsx)("input",{type:"password",placeholder:"******",ref:_}),V=Object(b.jsx)("input",{type:"number",placeholder:e.phone,ref:v}),B=Object(b.jsxs)("select",{className:T.a.identity_field,id:"identity",ref:y,children:[Object(b.jsx)("option",{value:"ID",children:"ID"}),Object(b.jsx)("option",{value:"Passport",children:"Passport"})]}),F=Object(b.jsx)("input",{type:"number",placeholder:e.passport_number,ref:w});return Object(b.jsxs)("div",{className:T.a.details,children:[j&&Object(b.jsxs)("div",{className:T.a.error_box,children:[" ",Object(b.jsx)("div",{className:T.a.error_title,children:j.title}),Object(b.jsx)("div",{className:T.a.error_message,children:j.message})]}),Object(b.jsxs)("div",{className:T.a.flex,children:[Object(b.jsx)("p",{children:"Name: "}),Object(b.jsx)("p",{children:l?R:e.name})]}),Object(b.jsxs)("div",{className:T.a.flex,children:[Object(b.jsx)("p",{children:"Surname: "}),Object(b.jsx)("p",{children:l?D:e.surname})]}),Object(b.jsxs)("div",{className:T.a.flex,children:[Object(b.jsx)("p",{children:"Date of Birth: "}),Object(b.jsx)("p",{children:l?I:e.birth_date})]}),Object(b.jsxs)("div",{className:T.a.flex,children:[Object(b.jsx)("p",{children:"Email: "}),Object(b.jsx)("p",{children:l?C:e.email})]}),Object(b.jsxs)("div",{className:T.a.flex,children:[Object(b.jsx)("p",{children:"Password: "}),Object(b.jsx)("p",{children:l?S:"*****"})]}),Object(b.jsxs)("div",{className:T.a.flex,children:[Object(b.jsx)("p",{children:"Phone: "}),Object(b.jsx)("p",{children:l?V:e.phone})]}),Object(b.jsxs)("div",{className:T.a.flex,children:[Object(b.jsx)("p",{children:"Identity: "}),Object(b.jsx)("p",{children:l?B:e.identity})]}),Object(b.jsxs)("div",{className:T.a.flex,children:[Object(b.jsx)("p",{children:"Passport No: "}),Object(b.jsx)("p",{children:l?F:e.passport_number})]}),Object(b.jsxs)("div",{className:T.a.btnField,children:[Object(b.jsx)(a.b,{className:"btn ".concat(T.a.detailsBtn),to:"/ReactUsersApp/users",children:"Back"}),Object(b.jsx)("button",{className:"btn ".concat(T.a.detailsBtn),onClick:k,children:l?"Cancel editing":"Edit"}),l&&Object(b.jsx)("button",{className:"btn ".concat(T.a.detailsBtn),onClick:A,children:"Save"}),Object(b.jsx)("button",{className:"btn ".concat(T.a.detailsBtn),onClick:function(){Object(q.confirmAlert)({title:"Delete this user?",message:"",buttons:[{label:"Yes",onClick:function(){r.removeUser(e.id),t.push("/ReactUsersApp/users")}},{label:"No",onClick:function(){return""}}]})},children:"Delete User"})]})]})}),W=function(){var e=Object(i.useContext)(m),t=Object(c.i)().userId,r=e.persons.filter((function(e){return e.id.toString()===t.toString()}));return r[0].id?Object(b.jsx)(i.Fragment,{children:Object(b.jsx)(G,{id:t,name:r[0].name,surname:r[0].surname,birth_date:r[0].birth_date,email:r[0].email,password:r[0].password,phone:r[0].phone,identity:r[0].identity,passport_number:r[0].passport_number,sendUpdateRequest:function(t){e.editUser(t)}})}):Object(b.jsx)("p",{children:"No User found"})},Z=r(30),z=r.n(Z),J=r(12),L=r.n(J),$=function(){return Object(b.jsxs)("header",{className:L.a.header,children:[Object(b.jsxs)("div",{className:L.a.logo,children:[Object(b.jsx)("span",{children:"Users Web App"}),Object(b.jsx)("a",{className:L.a.linkToGit,href:"https://github.com/GvidasGVD/ReactUsersApp/tree/master",target:"_blank",rel:"noopener noreferrer",children:"See code in GitHub"})]}),Object(b.jsx)("nav",{className:L.a.nav,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(a.c,{to:"/ReactUsersApp",exact:!0,activeClassName:L.a.active,children:"All Users"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.c,{to:"/ReactUsersApp/new-user",activeClassName:L.a.active,children:"Add New User"})})]})})]})},Q=function(e){return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsx)($,{}),Object(b.jsx)("main",{className:z.a.main,children:e.children})]})},X=function(){return Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)("p",{children:"Page not found!"})})},Y=r(31),K={persons:[{id:"u1",name:"Tom",surname:"Riddle",birth_date:"1964-12-30",email:"tomriddle@gmail.com",password:"a4da6sd7",phone:8675554687,identity:"ID",passport_number:46787987},{id:"u2",name:"Rick",surname:"Wangog",birth_date:"1967-12-30",email:"Wangog@gmail.com",password:"asdasdasd",phone:45647784,identity:"ID",passport_number:7898457}]},ee=function(e,t){if("ADD"===t.type){var r=e.persons.findIndex((function(e){return e.id===t.person.id}));return e.persons[r]||!t.person.id?(alert("Cannot add person, contact administrator"),e.persons):{persons:e.persons.concat(t.person)}}if("REMOVE"===t.type)return{persons:e.persons.filter((function(e){return e.id!==t.id}))};if("UPDATE"===t.type){var s,n=e.persons.findIndex((function(e){return e.id===t.data.id}));return n>=0?((s=Object(Y.a)(e.persons))[n]=t.data,{persons:s}):void alert("Something went wrong, contact administrator")}return K},te=function(e){var t=Object(i.useReducer)(ee,K),r=Object(N.a)(t,2),s=r[0],n=r[1],a={persons:s.persons,addUser:function(e){n({type:"ADD",person:e})},removeUser:function(e){n({type:"REMOVE",id:e})},editUser:function(e){n({type:"UPDATE",data:e})}};return Object(b.jsx)(m.Provider,{value:a,children:e.children})};var re=function(){return Object(b.jsx)(te,{children:Object(b.jsx)(Q,{children:Object(b.jsxs)(c.d,{children:[Object(b.jsx)(c.b,{path:"/",exact:!0,children:Object(b.jsx)(c.a,{to:"/ReactUsersApp"})}),Object(b.jsx)(c.b,{path:"/ReactUsersApp",exact:!0,children:Object(b.jsx)(v,{})}),Object(b.jsx)(c.b,{path:"/ReactUsersApp/users/:userId",children:Object(b.jsx)(W,{})}),Object(b.jsx)(c.b,{path:"/ReactUsersApp/new-user",children:Object(b.jsx)(H,{})}),Object(b.jsx)(c.b,{path:"/ReactUsersApp/users",exact:!0,children:Object(b.jsx)(c.a,{to:"/ReactUsersApp"})}),Object(b.jsx)(c.b,{path:"*",children:Object(b.jsx)(X,{})})]})})})};n.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(re,{})}),document.getElementById("root"))},5:function(e,t,r){e.exports={details:"UserDetails_details__2Lhh9",flex:"UserDetails_flex__2siVv",btnField:"UserDetails_btnField__31p68",detailsBtn:"UserDetails_detailsBtn__1GNfu",passwordInput:"UserDetails_passwordInput__2vedh",error_box:"UserDetails_error_box__36td-",error_title:"UserDetails_error_title__1Wj1T",error_message:"UserDetails_error_message__2tvP_",identity_field:"UserDetails_identity_field__3tngV"}}},[[48,1,2]]]);
//# sourceMappingURL=main.6dc3a96c.chunk.js.map