(this["webpackJsonpwom21-projekt-2-frontend"]=this["webpackJsonpwom21-projekt-2-frontend"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(18),s=n.n(a),i=(n(23),n(24),n(3)),l=n.n(i),j=n(5),o=n(4),u=n(6),b=n.n(u),d=n(0),h=function(){var e="https://wom2.spionsatellit.com",t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),u=i[0],h=i[1],p=Object(c.useState)([]),O=Object(o.a)(p,2),f=O[0],v=O[1],x=Object(c.useState)(!1),m=Object(o.a)(x,2),g=m[0],w=m[1],_=Object(c.useState)(""),k=Object(o.a)(_,2),S=k[0],y=k[1],C=Object(c.useState)(""),B=Object(o.a)(C,2),E=B[0],N=B[1],F=Object(c.useState)(""),T=Object(o.a)(F,2),A=T[0],J=T[1],V=function(){var t=Object(j.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("".concat(e,"/service"));case 3:n=t.sent,h(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"GET",url:"https://wom1.spionsatellit.com/cabin",withCredentials:!1});case 3:t=e.sent,v(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var t=Object(j.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("".concat(e,"/order"));case 3:n=t.sent,a(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(j.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("".concat(e,"/order"),n);case 2:return c=t.sent,console.log(c),t.abrupt("return",c.status);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){V(),D(),G()}),[]),Object(c.useEffect)((function(){G(),w(!1)}),[g]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"smaller-container",children:[Object(d.jsx)("h3",{children:"Best\xe4ll en tj\xe4nst"}),Object(d.jsx)("label",{htmlFor:"services",children:"Tj\xe4nst"}),Object(d.jsxs)("select",{value:S,name:"services",id:"services",onChange:function(e){y(e.target.value)},children:[Object(d.jsx)("option",{children:"V\xe4lj en tj\xe4nst"}),u.length>0&&u.map((function(e){return Object(d.jsx)("option",{value:e._id,children:e.service_name},e._id)}))]}),Object(d.jsx)("label",{htmlFor:"cabins",children:"Stuga"}),Object(d.jsxs)("select",{value:E,name:"cabins",id:"cabins",onChange:function(e){N(e.target.value)},children:[Object(d.jsx)("option",{children:"V\xe4lj en stuga"}),f.length>0&&f.map((function(e){return Object(d.jsx)("option",{value:e._id,children:e.address},e._id)}))]}),Object(d.jsx)("label",{htmlFor:"date",children:"N\xe4r?"}),Object(d.jsx)("input",{type:"date",id:"date",onChange:function(e){J(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){""!==S&&""!==E&&""!==A?(I({service_id:S,cabin_id:E,date:A}),w(!0)):alert("Ajj ajj, fyll i allt!")},children:"Best\xe4ll!"})]}),Object(d.jsxs)("div",{className:"smaller-container",children:[Object(d.jsx)("h3",{children:"Best\xe4llda tj\xe4nster"}),Object(d.jsx)("ul",{children:r.length>0&&r.map((function(e){var t=function(e){var t=f.filter((function(t){return t._id===e.cabin_id})),n=u.filter((function(t){return t._id===e.service_id}));return[t[0],n[0]]}(e),n=Object(o.a)(t,2),c=n[0],r=n[1];if(c&&r)return Object(d.jsxs)("li",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Stuga:"})," ",c.address]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Tj\xe4nst:"})," ",r.service_name]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Datum:"}),e.date]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Pris:"}),r.price,Object(d.jsx)("b",{children:"\u20ac"})]})]},e._id)}))})]})]})};var p=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Stugservice"}),Object(d.jsx)(h,{})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c11bfc52.chunk.js.map