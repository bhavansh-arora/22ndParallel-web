(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{615:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(57),a=r(155),c=r(1),i=r.n(c),o=r(613),l=r(24),s=function(e){var t=e.name,r=e.text,c=Object(a.a)(e,["name","text"]),i=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(l.jsx)("div",{className:"card-header-actions",children:Object(l.jsx)(o.bb,Object(n.a)(Object(n.a)({},c),{},{href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(l.jsx)("small",{className:"text-muted",children:r||"docs"})}))})},u=i.a.memo(s)},620:function(e,t,r){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},714:function(e,t,r){"use strict";r.r(t);var n=r(616),a=r(1),c=r.n(a),i=r(613),o=(r(615),r(620),r(621)),l=r.n(o),s=(r(715),r(19)),u=r(24);t.default=function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),r=(t[0],t[1]),o=Object(a.useState)(),d=Object(n.a)(o,2),j=d[0],m=d[1],b=Object(a.useState)([]),h=Object(n.a)(b,2),p=(h[0],h[1],Object(a.useState)("")),f=Object(n.a)(p,2),O=f[0],g=f[1],x=Object(a.useState)(""),v=Object(n.a)(x,2),y=v[0],C=v[1],A=Object(a.useState)(0),S=Object(n.a)(A,2),P=S[0],k=S[1],w=Object(a.useState)(""),F=Object(n.a)(w,2),E=F[0],M=F[1],L=Object(a.useState)(""),N=Object(n.a)(L,2),I=N[0],K=N[1],T=Object(a.useState)(""),Q=Object(n.a)(T,2),R=Q[0],U=Q[1],B=Object(a.useState)(""),D=Object(n.a)(B,2),G=D[0],J=D[1],$=Object(a.useState)(!1),_=Object(n.a)($,2),H=_[0],V=_[1],Y=Object(a.useState)(""),Z=Object(n.a)(Y,2),q=Z[0],z=Z[1],W=Object(a.useState)(!1),X=Object(n.a)(W,2),ee=X[0],te=X[1],re=Object(a.useState)(""),ne=Object(n.a)(re,2),ae=ne[0],ce=ne[1],ie=Object(a.useState)(""),oe=Object(n.a)(ie,2),le=(oe[0],oe[1],Object(a.useState)()),se=Object(n.a)(le,2),ue=se[0],de=se[1],je=Object(a.useState)(!1),me=Object(n.a)(je,2),be=me[0],he=me[1],pe=Object(s.g)().search,fe=new URLSearchParams(pe).get("id");Object(a.useEffect)((function(){}),[fe]),Object(a.useEffect)((function(){l.a.get("https://yourbuca.com/api/admin/get_template").then((function(e){r(e.data.data),1==e.data.status&&m(e.data.data)}))}),[ee]);var Oe=c.a.useRef(null);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.j,{children:[Object(u.jsx)(i.n,{children:"Manage Colors"}),Object(u.jsx)(i.a,{color:"danger",show:H,children:q}),Object(u.jsx)(i.a,{color:"success",show:ee,children:ae}),Object(u.jsxs)(i.k,{children:[Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsx)(i.u,{md:"3",children:Object(u.jsx)(i.ab,{htmlFor:"email-input",children:"Colour"})}),Object(u.jsxs)(i.u,{xs:"12",md:"9",children:[Object(u.jsx)(i.Q,{type:"colour",id:"email-input",name:"email-input",placeholder:"Enter Colour",autoComplete:"colour",onChange:function(e){g(e.target.value)}}),Object(u.jsx)(i.L,{className:"help-block",children:"Please enter template colour"})]})]}),Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsx)(i.u,{md:"3",children:Object(u.jsx)(i.ab,{htmlFor:"email-input",children:"Secondary Colour"})}),Object(u.jsxs)(i.u,{xs:"12",md:"9",children:[Object(u.jsx)(i.Q,{type:"text-colour",id:"email-input",name:"email-input",placeholder:"Enter Secondary Colour",autoComplete:"text-colour",onChange:function(e){C(e.target.value)}}),Object(u.jsx)(i.L,{className:"help-block",children:"Please enter secondary colour"})]})]}),Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsx)(i.u,{md:"3",children:Object(u.jsx)(i.ab,{htmlFor:"email-input",children:"Layout"})}),Object(u.jsxs)(i.u,{xs:"12",md:"9",children:[Object(u.jsx)(i.Q,{type:"layout",id:"email-input",name:"email-input",placeholder:"Enter Layout",autoComplete:"layout",onChange:function(e){k(e.target.value)}}),Object(u.jsx)(i.L,{className:"help-block",children:"Please enter template layout"})]})]}),Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsx)(i.u,{md:"3",children:Object(u.jsx)(i.ab,{htmlFor:"email-input",children:"Title Colour"})}),Object(u.jsxs)(i.u,{xs:"12",md:"9",children:[Object(u.jsx)(i.Q,{type:"title-colour",id:"email-input",name:"email-input",placeholder:"Enter Title Colour",autoComplete:"title-colour",onChange:function(e){M(e.target.value)}}),Object(u.jsx)(i.L,{className:"help-block",children:"Please enter title colour"})]})]}),Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsx)(i.u,{md:"3",children:Object(u.jsx)(i.ab,{htmlFor:"email-input",children:"Icon Colour"})}),Object(u.jsxs)(i.u,{xs:"12",md:"9",children:[Object(u.jsx)(i.Q,{type:"icon-colour",id:"email-input",name:"email-input",placeholder:"Enter Icon Colour",autoComplete:"icon-colour",onChange:function(e){K(e.target.value)}}),Object(u.jsx)(i.L,{className:"help-block",children:"Please enter icon colour"})]})]}),Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsx)(i.u,{md:"3",children:Object(u.jsx)(i.ab,{htmlFor:"email-input",children:"Fields Colour"})}),Object(u.jsxs)(i.u,{xs:"12",md:"9",children:[Object(u.jsx)(i.Q,{type:"fields-colour",id:"email-input",name:"email-input",placeholder:"Enter Fields Colour",autoComplete:"fields-colour",onChange:function(e){U(e.target.value)}}),Object(u.jsx)(i.L,{className:"help-block",children:"Please enter fields colour"})]})]}),Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsx)(i.u,{md:"3",children:Object(u.jsx)(i.ab,{htmlFor:"email-input",children:"Heading Colour"})}),Object(u.jsxs)(i.u,{xs:"12",md:"9",children:[Object(u.jsx)(i.Q,{type:"heading-colour",id:"email-input",name:"email-input",placeholder:"Enter Heading Colour",autoComplete:"heading-colour",onChange:function(e){J(e.target.value)}}),Object(u.jsx)(i.L,{className:"help-block",children:"Please enter heading colour"})]})]}),Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsx)(i.u,{md:"3",children:Object(u.jsx)(i.ab,{htmlFor:"select"})}),Object(u.jsx)(i.u,{xs:"12",md:"9",children:Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsxs)(i.f,{style:{marginTop:20,width:150,marginLeft:10},block:!0,variant:"outline",color:"info",onClick:function(e){Oe.current.click()},children:[Object(u.jsx)("div",{children:"Select Template"}),Object(u.jsx)("input",{type:"file",ref:Oe,onChange:function(e){e.target.files[0];de(e.target.files[0]),he(!0)},style:{display:"none"},name:"pic",accept:"image/*"})]}),Object(u.jsx)(i.f,{onClick:function(){return function(){if(z(""),ce(""),V(!1),te(!1),""==O||""==y||""==E||""==I||""==R||""==G)return z("Please enter all the fields."),void V(!0);if(!(P>=1&&P<=7))return z("Please enter a valid layout."),void V(!0);if("#"!=O.charAt(0)||7!=O.length)return z("Please enter a valid color."),void V(!0);if("#"!=y.charAt(0)||7!=y.length)return z("Please enter a valid secondary color."),void V(!0);if("#"!=E.charAt(0)||7!=E.length)return z("Please enter a valid title color."),void V(!0);if("#"!=I.charAt(0)||7!=I.length)return z("Please enter a valid icon color."),void V(!0);if("#"!=R.charAt(0)||7!=R.length)return z("Please enter a valid fields color."),void V(!0);if("#"!=G.charAt(0)||7!=G.length)return z("Please enter a valid heading color."),void V(!0);if(!be)return z("Please upload a template."),void V(!0);V(!1),te(!1),ce("");var e=new FormData;e.append("color",O),e.append("textColor",y),e.append("layout",P),e.append("titleColor",E),e.append("iconColor",I),e.append("fieldsColor",R),e.append("headingColor",G),e.append("image",ue),e.append("id",fe),l.a.post("https://yourbuca.com/api/admin/add_color_template",e,{}).then((function(e){1==e.data.status?(ce("Template Uploaded Successfully."),te(!0)):(z(e.data.message),V(!0))})).catch((function(e){z(e.message),V(!0)})),he(!1),k(0),de()}()},style:{marginTop:20,width:150,marginLeft:10},block:!0,variant:"outline",color:"success",children:"Add Color"})]})})]}),null!=j?j.map((function(e,t){i.y})):null]})]})})}},715:function(e,t,r){"use strict";var n=r(716),a=r(81);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function i(e){return Array.isArray(e)?e.sort():"object"===typeof e?i(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=a({arrayFormat:"none"},t)),n=Object.create(null);return"string"!==typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),r(decodeURIComponent(a),c,n)})),Object.keys(n).sort().reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=i(r):e[t]=r,e}),Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[c(t,e),"[",n,"]"].join(""):[c(t,e),"[",c(n,e),"]=",c(r,e)].join("")};case"bracket":return function(t,r){return null===r?c(t,e):[c(t,e),"[]=",c(r,e)].join("")};default:return function(t,r){return null===r?c(t,e):[c(t,e),"=",c(r,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var a=e[n];if(void 0===a)return"";if(null===a)return c(n,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(r(n,e,i.length))})),i.join("&")}return c(n,t)+"="+c(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},716:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);