(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{10:function(e,n,t){e.exports={mainContainer:"Navig_mainContainer__1QO-S",container:"Navig_container__3x6cY",menu__list:"Navig_menu__list__30nf3",menu__link:"Navig_menu__link__wRaM5",selected:"Navig_selected__dQUwe"}},11:function(e,n,t){e.exports={form:"Currencies_form__1ReE4",formContainer:"Currencies_formContainer__1SdcU",headContainer:"Currencies_headContainer__2w4Ni",nameValuta:"Currencies_nameValuta__21rW4",nameUa:"Currencies_nameUa__1jmG1"}},17:function(e,n,t){e.exports={maincontainer:"Header_maincontainer__1r_Ri",container:"Header_container__3Vqpt",foto:"Header_foto__7IQn8",text:"Header_text__35PK9"}},18:function(e,n,t){e.exports={formContainer:"Valuta_formContainer__34tl_",bodyContainer:"Valuta_bodyContainer__JtIB3",choice:"Valuta_choice__kN8Np"}},25:function(e,n,t){e.exports={container:"Informat_container___CWRn",blok:"Informat_blok__iJLg0"}},4:function(e,n,t){e.exports={container:"Exchange_container__2MAYD",form:"Exchange_form__3uHa3",formContainer:"Exchange_formContainer__tNBuT",bodyContainer:"Exchange_bodyContainer__2Gl8U",choice:"Exchange_choice__13kin",buttonchoice:"Exchange_buttonchoice__xNj8f",selected:"Exchange_selected__3TtGl",text:"Exchange_text__2J6sv"}},47:function(e,n,t){},48:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(19),r=t.n(a),i=(t(47),t(48),t.p+"static/media/rose.dd1d12a0.png"),s=t(17),o=t.n(s),l=t(1),j=function(){return Object(l.jsx)("div",{className:o.a.maincontainer,children:Object(l.jsxs)("div",{className:o.a.container,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:i,alt:"",className:o.a.foto})}),Object(l.jsx)("div",{className:o.a.text,children:Object(l.jsx)("h1",{children:"SK converter"})})]})})},u=t(25),d=t.n(u),x=t(10),b=t.n(x),h=t(14),_=function(){return Object(l.jsx)("div",{className:b.a.mainContainer,children:Object(l.jsx)("div",{className:b.a.container,children:Object(l.jsx)("nav",{className:b.a.menu__body,children:Object(l.jsxs)("ul",{className:b.a.menu__list,children:[Object(l.jsx)("li",{children:Object(l.jsx)(h.b,{to:"/exchange",className:b.a.menu__link,activeClassName:b.a.selected,children:"Exchange"})}),Object(l.jsx)("li",{children:Object(l.jsx)(h.b,{to:"/currencies",className:b.a.menu__link,activeClassName:b.a.selected,children:"\u0421urrencies"})})]})})})})},m=function(){return Object(l.jsx)("div",{className:d.a.container,children:Object(l.jsx)("div",{className:d.a.blok,children:Object(l.jsx)(_,{})})})},v=t(3),O=t(15),f=t(4),N=t.n(f),C=t(12),g=t(20),p=t.n(g),y=p.a.create({baseURL:"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"}),E=function(){return y.get().then((function(e){return e.data}))},U="ADD_NUMBER",R="UPDATE_NUMBER",k="CURRENT_CURRENCY",w="CHANGE_CURRENCY",S="RESULT_CURRENCY",T={result:[],currentCurrency:[],changeCurrency:[],resultCurrency:0,newMessText:0},B=function(){return function(e){E().then((function(n){e({type:U,result:n})}))}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case U:return Object(C.a)(Object(C.a)({},e),{},{result:n.result});case R:var t=Object(C.a)({},e);return t.newMessText=n.newMess,t;case k:var c=Object(C.a)({},e);return c.currentCurrency=n.result,c;case w:var a=Object(C.a)({},e);return a.changeCurrency=n.result,a;case S:var r=Object(C.a)({},e);return r.resultCurrency=n.result,r;default:return e}},V=O.c,A=function(){var e=Object(O.b)();Object(c.useEffect)((function(){e(B())}),[]);var n=V((function(e){return e.resultConver})),t=n.changeCurrency,a=n.newMessText,r=n.currentCurrency,i=n.result,s=n.resultCurrency,o=function(n){var t=i.filter((function(e){return e.txt===n}));e(function(e){return{type:k,result:e}}(t[0].rate))},j=function(n){var t=i.filter((function(e){return e.txt===n}));e(function(e){return{type:w,result:e}}(t[0].rate))},u=function(){var n=(+(0==r.length?i[0].rate:r)/+(0==t.length?i[0].rate:t)*+a).toFixed(1);return e(function(e){return{type:S,result:e}}(n))};return Object(l.jsx)("div",{className:N.a.container,children:Object(l.jsxs)("div",{className:N.a.form,children:[Object(l.jsx)("div",{className:N.a.formContainer,children:Object(l.jsxs)("div",{className:N.a.bodyContainer,children:[Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsx)("form",{className:N.a.selected,children:Object(l.jsx)("select",{id:"country",name:"country",children:i.map((function(e){return Object(l.jsx)("option",{value:e.txt,onClick:function(){o(e.txt)},children:e.txt})}))})})})}),Object(l.jsx)("div",{className:N.a.choice,children:Object(l.jsx)("div",{children:Object(l.jsx)("form",{className:N.a.selected,children:Object(l.jsx)("select",{id:"country",name:"country",children:i.map((function(e){return Object(l.jsxs)("option",{value:e.txt,onClick:function(){j(e.txt)},children:[" ",e.txt]})}))})})})})]})}),Object(l.jsx)("div",{className:N.a.formContainer,children:Object(l.jsxs)("div",{className:N.a.bodyContainer,children:[Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:N.a.text,children:Object(l.jsx)("textarea",{name:"",id:"",cols:30,rows:10,onChange:function(n){var t=n.currentTarget.value;console.log(typeof t),e({type:R,newMess:t})},value:a})})})}),Object(l.jsx)("div",{className:N.a.choice,children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:N.a.text,children:Object(l.jsx)("textarea",{cols:30,rows:10,value:s})})})})]})}),Object(l.jsx)("div",{className:N.a.buttonchoice,children:Object(l.jsx)("div",{className:N.a.bodyContainer,children:Object(l.jsx)("div",{className:N.a.selected,children:Object(l.jsx)("button",{onClick:function(){u()},children:"Exchange"})})})})]})})},D=t(42),H=t(11),I=t.n(H),L=t(18),F=t.n(L),J=function(e){var n=e.name,t=e.valute;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:F.a.formContainer,children:Object(l.jsxs)("div",{className:F.a.bodyContainer,children:[Object(l.jsx)("div",{className:F.a.choice,children:n}),Object(l.jsx)("div",{className:F.a.choice,children:t})]})})})},P=function(){var e=Object(c.useState)([]),n=Object(D.a)(e,2),t=n[0],a=n[1];Object(c.useEffect)((function(){p.a.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json").then((function(e){a(e.data)}))}),[]);var r=t.filter((function(e){return"USD"===e.cc||("EUR"===e.cc||("RUB"===e.cc||("PLN"===e.cc||void 0)))}));console.log(r);var i=r.map((function(e){return Object(l.jsx)(J,{valute:e.rate,name:e.cc})}));return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:I.a.container,children:Object(l.jsx)("div",{className:I.a.form,children:Object(l.jsxs)("div",{className:I.a.formContainer,children:[Object(l.jsxs)("div",{className:I.a.headContainer,children:[Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:I.a.nameValuta,children:"Valuta"})}),Object(l.jsx)("div",{className:I.a.nameUa,children:"UA"})]}),Object(l.jsx)("div",{children:i})]})})})})};var Y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(m,{}),Object(l.jsx)(v.a,{path:"/exchange",render:function(){return Object(l.jsx)(A,{})}}),Object(l.jsx)(v.a,{path:"/currencies",render:function(){return Object(l.jsx)(P,{})}})]})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))},Q=t(21),K=t(40),W=Object(Q.b)({resultConver:M}),q=Object(Q.c)(W,Object(Q.a)(K.a));r.a.render(Object(l.jsx)(h.a,{children:Object(l.jsx)(O.a,{store:q,children:Object(l.jsx)(Y,{})})}),document.getElementById("root")),G()}},[[75,1,2]]]);
//# sourceMappingURL=main.613003e0.chunk.js.map