(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),i=n.n(a),r=(n(9),n(2)),o=n.p+"static/media/logo.6ce24c58.svg",l=(n(10),[{id:1,question1:"How many days are in a week?",answer1:"2 days",answer2:"4 days",answer3:"7 days",answer4:"10 days",correct:"7 days"},{id:2,question1:"2 + 2 = ?",answer1:"4",answer2:"5",answer3:"6",answer4:"7",correct:"4"},{id:3,question1:"What is the capital city of Vietnam?",answer1:"Bac Kinh",answer2:"Vientiane",answer3:"London",answer4:"Ha Noi",correct:"Ha Noi"}]),u=n(0);var j=function(){var e=Object(c.useState)(l),t=Object(r.a)(e,2),n=t[0],s=(t[1],Object(c.useState)(0)),a=Object(r.a)(s,2),i=a[0],j=a[1],b=Object(c.useState)(1),d=Object(r.a)(b,2),h=d[0],O=d[1],f=Object(c.useState)(10),w=Object(r.a)(f,2),m=w[0],p=w[1],x=Object(c.useState)(""),g=Object(r.a)(x,2),v=g[0],y=g[1],N=Object(c.useState)(0),T=Object(r.a)(N,2),S=T[0],k=T[1],C=Object(c.useState)(0),F=Object(r.a)(C,2),A=F[0],I=F[1],q=Object(c.useState)(!1),B=Object(r.a)(q,2),H=B[0],L=B[1],P=Object(c.useRef)(null),J=n[i];return 0==m&&i<n.length?(j(i+1),O(h+1),p(10),y(""),I(A+1)):n.length,i==n.length?Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{children:"Finish"}),Object(u.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(u.jsx)("button",{onClick:function(){j(0),O(1),p(10),k(0),I(0),L(!0),clearInterval(P)},children:"Play again"}),Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{children:["True: ",S,"; False: ",A,";"]})})]})}):Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{children:m}),Object(u.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(u.jsx)("button",{onClick:function(){var e=setInterval((function(){console.log("run interval",m),p((function(t){return t>0?t-1:(clearInterval(e),0)}))}),1e3);P.current=e,L(!0)},disabled:H,children:"start"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{children:["T/F: ",v]}),Object(u.jsxs)("h3",{children:["Question ",h,": ",J.question1]}),Object(u.jsxs)("ol",{children:[Object(u.jsx)("li",{className:"answer",value:"1",onClick:function(){n[i].answer1===n[i].correct?(y("true"),k(S+1),setTimeout((function(){j(i+1),O(h+1),p(10),y("")}),1e3)):(y("false"),I(A+1),setTimeout((function(){j(i+1),O(h+1),p(10),y("")}),1e3))},children:J.answer1}),Object(u.jsx)("li",{className:"answer",onClick:function(){n[i].answer2===n[i].correct?(y("true"),k(S+1),setTimeout((function(){j(i+1),O(h+1),p(10),y("")}),1e3)):(y("false"),I(A+1),setTimeout((function(){j(i+1),O(h+1),p(10),y("")}),1e3))},children:J.answer2}),Object(u.jsx)("li",{className:"answer",onClick:function(){n[i].answer3===n[i].correct?(y("true"),k(S+1),setTimeout((function(){j(i+1),O(h+1),p(10),y("")}),1e3)):(y("false"),I(A+1),setTimeout((function(){j(i+1),O(h+1),p(10),y("")}),1e3))},children:J.answer3}),Object(u.jsx)("li",{className:"answer",onClick:function(){n[i].answer4===n[i].correct?(y("true"),k(S+1),setTimeout((function(){j(i+1),O(h+1),p(10),y("")}),1e3)):(y("false"),I(A+1),setTimeout((function(){j(i+1),O(h+1),p(10),y("")}),1e3))},children:J.answer4})]})]})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7bfb6521.chunk.js.map