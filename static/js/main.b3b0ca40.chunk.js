(this["webpackJsonpevil-insults"]=this["webpackJsonpevil-insults"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),a=n.n(s),i=(n(9),n(10),n(4)),u=function(e){var t=new URL("/get","https://hexlet-allorigins.herokuapp.com");return t.searchParams.set("url",e),t.searchParams.set("disableCache",!0),t.toString()}("https://evilinsult.com/generate_insult.php?lang=en&type=json"),l=function(){return fetch(u).then((function(e){return e.json()})).then((function(e){return JSON.parse(e.contents).insult})).catch((function(e){return new Error(e)}))},o=function(e){return e.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&le;/g,"\u2264").replace(/&ge;/g,"\u2265")},g=n(0),h=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){return l().then((function(e){return c(o(e))}))}),[]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("p",{className:"text-black-400 dark:text-gray-400 mt-5 text-lg",children:n}),Object(g.jsx)("button",{className:"p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600",onClick:function(){return l().then((function(e){return c(o(e))}))},children:"More \ud83d\ude80"})]})};n(12);var f=function(){return Object(g.jsxs)("div",{className:"bg-white dark:bg-gray-900 p-20 h-screen flex justify-center items-start flex-col",children:[Object(g.jsx)("h1",{className:"text-5xl text-gray-800 dark:text-white",children:"Hello \ud83d\udc4b"}),Object(g.jsx)(h,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(f,{})}),document.getElementById("root")),p()}],[[13,1,2]]]);
//# sourceMappingURL=main.b3b0ca40.chunk.js.map