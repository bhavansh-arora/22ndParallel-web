(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[27],{615:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(50),s=r(155),i=r(1),n=r.n(i),d=r(614),c=r(17),o=function(e){var t=e.name,r=e.text,i=Object(s.a)(e,["name","text"]),n=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(c.jsx)("div",{className:"card-header-actions",children:Object(c.jsx)(d.db,Object(a.a)(Object(a.a)({},i),{},{href:n,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(c.jsx)("small",{className:"text-muted",children:r||"docs"})}))})},u=n.a.memo(o)},620:function(e,t,r){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},713:function(e,t,r){"use strict";r.r(t);var a=r(616),s=r(1),i=r(614),n=(r(615),r(620),r(623)),d=r.n(n),c=r(17),o=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},u=["name","email","date"];t.default=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),r=t[0],n=t[1];return Object(s.useEffect)((function(){d.a.get("http://92.205.21.246:4000/api/failed-payment").then((function(e){n(e.data.users)}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(i.j,{children:[Object(c.jsx)(i.n,{children:"Pending Users"}),Object(c.jsx)(i.k,{children:Object(c.jsx)(i.y,{items:r,fields:u,bordered:!0,itemsPerPage:10,pagination:!0,scopedSlots:{status:function(e){return Object(c.jsx)("td",{children:Object(c.jsx)(i.b,{color:o(e.status),children:e.status})})}}})})]})})}}}]);