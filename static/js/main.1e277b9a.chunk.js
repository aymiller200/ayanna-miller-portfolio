(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(6),i=c.n(s),r=(c(14),c(15),c(3)),o=(c(16),c(17),c(7)),l=c(8),d=(c(18),c(1)),h=function(){return Object(d.jsx)("div",{className:"nav-container"})},j=c.p+"static/media/MyResume.31f0cb93.pdf",u=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),u=i[0],b=i[1],m=Object(n.useState)(!1),f=Object(r.a)(m,2),p=f[0],O=f[1],x=function(e){a(!0);var t=e.target;t.closest(u?".nav-list--small":".nav-list").querySelectorAll(".nav-item").forEach((function(e){e!==t&&c?(e.style.opacity=.5,e.style.transition=".2s ease-in"):(e.style.opacity=1,t.style.transition=".2s ease-in")}))},v=function(){a(!1)},g=function(e){e.preventDefault(),b(!1),document.querySelector("#about-container").scrollIntoView({behavior:"smooth"})},y=function(e){e.preventDefault(),b(!1),document.querySelector("#content").scrollIntoView({behavior:"smooth"})};return Object(n.useEffect)((function(){!function(){var e=document.querySelector(".header-container");new IntersectionObserver((function(e){Object(r.a)(e,1)[0].isIntersecting?O(!1):O(!0)}),{root:null,threshold:0,rootMargin:"-".concat(90,"px")}).observe(e)}()}),[]),Object(d.jsxs)("div",{className:"header-container",id:"header-id",children:[Object(d.jsx)(o.a,{className:"menu-button",onClick:function(){b(!u)}}),Object(d.jsxs)("ul",{className:u?"nav-list--small":"nav-list",style:p&&!u?{position:"fixed",background:"rgba(0, 0, 0, 0.35)",width:"100%",boxShadow:"1px 1px 10px black",padding:"10px",transition:"0.5s ease-in"}:null,children:[Object(d.jsx)("a",{href:"#header-id",onClick:function(e){e.preventDefault(),b(!1),document.querySelector("#header-id").scrollIntoView({behavior:"smooth"})},className:p?"home":"home-hidden",children:p&&u?"Home":Object(d.jsx)(l.a,{})}),["About","Projects","Resume"].map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:e[t]===e[0]?"#about-container":e[t]===e[1]?"#content":"".concat(j),download:e[t]===e[2]?"Ayanna's Resume":null,rel:"noreferrer",className:"item-link",onClick:e[t]===e[0]?g:e[t]===e[1]?y:null,children:Object(d.jsx)("li",{className:"nav-item",onMouseOver:x,onMouseOut:v,children:e},Math.random())},Math.random())},Math.random())}))]}),Object(d.jsx)(h,{}),Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("div",{className:"header-text-container",children:Object(d.jsxs)("h1",{className:"header-text",children:[Object(d.jsx)("span",{className:"header-large",children:"Ayanna Miller"}),Object(d.jsx)("span",{className:"header-sub",children:"Software Engineer"})]})})})]})},b=(c(20),c(21),function(){return Object(d.jsx)("div",{className:"about-corner"})}),m=c(4),f=(c(22),function(e){return Object(d.jsxs)("div",{className:e.hidden?"hidden-social":"social",children:[Object(d.jsx)("a",{className:"social-items",href:"https://www.linkedin.com/in/ayanna-miller200/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(m.c,{})}),Object(d.jsx)("a",{href:"https://github.com/aymiller200",target:"_blank",rel:"noreferrer",className:"social-items",children:Object(d.jsx)(m.b,{})}),Object(d.jsx)("a",{href:j,download:"Ayanna's Resume",rel:"noreferrer",className:"social-items",children:Object(d.jsx)(m.a,{})})]})}),p=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){!function(){var e=document.querySelector(".about");new IntersectionObserver((function(e,t){var c=Object(r.a)(e,1)[0];c.isIntersecting&&(a(!1),t.unobserve(c.target))}),{root:null,threshold:.3}).observe(e)}()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{id:"about-container",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h1",{className:c?"hidden":"about-title",children:"About"}),Object(d.jsxs)("h2",{className:c?"hidden":"about-paragraph",children:["Since my graduation from Eleven Fifty Academy's immersive six month web development bootcamp, I have spent my time fostering a deeper and more well rounded knowledge of technologies and frameworks such as Javascript and React, diving into the depths of UX/UI, getting my feet wet with libraries such as Stencil, and exploring C# in terms of game design.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Through countless projects, courses, and bugs, I have a confidence in what I know, a desire to learn so much more, and a passion for creating, problem solving, and thinking outside of the div.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"If you would like to know more contact me at ",Object(d.jsx)("a",{href:"mailto:aymiller200@gmail.com",target:"_blank",rel:"noreferrer",className:"email",children:Object(d.jsx)("u",{children:"aymiller200@gmail.com"})}),"."]}),Object(d.jsx)(f,{hidden:c})]})]})})},O=(c(23),c(9)),x=(c(24),function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("h5",{children:" Created by Ayanna Miller "})})}),v=function(){var e=document.querySelectorAll(".project-text"),t=e.length,c=Object(n.useState)(!0),a=Object(r.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)(0),l=Object(r.a)(o,2),h=l[0],j=l[1],u=function(t){e.forEach((function(e,c){e.style.transform="translateX(".concat(100*(c-t),"%)")}))};return Object(n.useEffect)((function(){!function(){var e=document.querySelector(".project-content");new IntersectionObserver((function(e,t){var c=Object(r.a)(e,1)[0];c.isIntersecting&&(i(!1),t.unobserve(c.target))}),{root:null,threshold:.3}).observe(e)}(),u(h)})),Object(d.jsxs)("div",{className:"project-content",id:"content",children:[Object(d.jsx)("h1",{className:s?"hidden":"projects-title",children:"Projects"}),Object(d.jsxs)("div",{className:s?"hidden":"project",children:[Object(d.jsx)("h5",{className:"project-title",children:0===h?"Play Fetch":1===h?"Forkify":2===h?"Btn Mash":3===h?"Poke App":4===h?"On Tour":null}),Object(d.jsx)("div",{className:"project-container",children:Object(d.jsxs)("div",{className:"slider-container",children:[Object(d.jsx)("div",{className:"slider-left-container",children:Object(d.jsx)("button",{className:"slider-left",onClick:function(){j(0===h?t-1:h-1),u(h)},children:"\u2190"})}),Object(d.jsxs)("div",{className:"project-text-container",children:[Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)("a",{href:0===h?"https://github.com/aymiller200/basic-stencil":1===h?"https://github.com/aymiller200/forkify-am":2===h?"https://github.com/aymiller200/bbclient":3===h?"https://github.com/aymiller200/catch-a-pokemon/tree/master":4===h?"https://github.com/aymiller200/red-badge-client":"https://github.com/aymiller200/basic-stencil",target:"_blank",rel:"noreferrer",className:"repo-link",children:Object(d.jsx)(m.b,{className:"github"})}),Object(d.jsx)("a",{href:0===h?"https://aymiller200.github.io/stencil-react-app/":1===h?"https://forkify-ayanna.netlify.app/":2===h?"https://arm-my-btnmash.herokuapp.com/":3===h?"https://aymiller200.github.io/catch-a-pokemon/":4===h?"https://am-ontour.herokuapp.com/":"https://aymiller200.github.io/stencil-react-app/",target:"_blank",rel:"noreferrer",className:"site-link",children:Object(d.jsx)(O.a,{className:"site"})})]}),Object(d.jsxs)("div",{className:"text-slide-container",children:[Object(d.jsx)("h4",{className:"project-text",id:"1",children:"A React application created with my own custom Stencil web components published to NPM. Allows the user to view dog images and save those images to their favorites. Utilizes data fetched from the Dog CEO API."}),Object(d.jsx)("h4",{className:"project-text",id:"2",children:"A static web application created during a 70 hour JavaScript course on Udemy. This project utilizes everything learned in the course, from simple concepts and methods, to MVC architecture and JavaScript Modules."}),Object(d.jsx)("h4",{className:"project-text",id:"3",children:"A full stack application. Allows users to register, login, and review video games. Client side is built out in React, back end utilizes Node and SQL."}),Object(d.jsx)("h4",{className:"project-text",id:"4",children:"This React app allows users to search or click through Pokemon with data fetched from the Poke API."}),Object(d.jsx)("h4",{className:"project-text",id:"5",children:"On Tour is a full stack application aimed towards touring indepedent musicians looking for a safe place to stay while they are on the road. Users can register as a host, as a guest, or both. Guests have the ability to book with hosts, and the two can communicate with eachother via the app. Client side is built out in React and TypeScript, while the back end utilizes Node and SQL."})]})]}),Object(d.jsx)("div",{className:"slider-right-container",children:Object(d.jsx)("button",{className:"slider-right",onClick:function(){j(h===t-1?0:h+1),u(h)},children:"\u2192"})})]})})]}),Object(d.jsx)(x,{})]})};var g=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{}),Object(d.jsx)(p,{}),Object(d.jsx)(v,{})]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.1e277b9a.chunk.js.map