(this.webpackJsonpbrilliantprogrammer=this.webpackJsonpbrilliantprogrammer||[]).push([[0],{50:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(27),s=c.n(i),a=(c(63),c(19)),j=c(20),r=c(23),l=c(22),o=(c(64),c(48),c(90)),b=c(92),d=c(89),h=c(91),O=c(57),x=c(56),m=c(14),p=c.p+"static/media/logo.3f5d3fcd.png",u=c(1),g=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsxs)(o.a,{sticky:"top",className:"nav_bp",bg:"light",expand:"lg",children:[Object(u.jsx)(o.a.Brand,{href:"#home",children:Object(u.jsx)("img",{height:"40px",src:p,alt:"Brilliantprogrammer"})}),Object(u.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsxs)(o.a.Collapse,{id:"basic-navbar-nav",children:[Object(u.jsxs)(b.a,{className:"mr-auto ",children:[Object(u.jsx)(b.a.Link,{children:Object(u.jsx)(m.b,{to:"/",id:"navlinkh",children:"Home"})}),Object(u.jsx)(b.a.Link,{children:Object(u.jsx)(m.b,{to:"/python",id:"navlinkh",children:"Python"})}),Object(u.jsx)(b.a.Link,{children:Object(u.jsx)(m.b,{to:"/bigdata",id:"navlinkh",children:"Big Data"})}),Object(u.jsxs)(d.a,{className:"navlinkh",title:"Topics",id:"basic-nav-dropdown",children:[Object(u.jsx)(d.a.Item,{id:"navlinkh",href:"#action/3.1",children:"Django"}),Object(u.jsx)(d.a.Item,{id:"navlinkh",href:"#action/3.2",children:"Web Development"}),Object(u.jsx)(d.a.Item,{id:"navlinkh",href:"#action/3.3",children:"React"}),Object(u.jsx)(d.a.Divider,{}),Object(u.jsx)(d.a.Item,{id:"navlinkh",href:"#action/3.4",children:"Tech"})]}),Object(u.jsx)(b.a.Link,{to:"/",children:Object(u.jsx)(m.b,{to:"/write",id:"navlinkk",children:"Write"})})]}),Object(u.jsxs)(h.a,{inline:!0,children:[Object(u.jsx)(O.a,{type:"text",placeholder:"Search Category",className:"mr-sm-2"}),Object(u.jsx)(x.a,{variant:"outline-danger",children:"Search"})]})]})]})}}]),c}(n.Component),f=(c(74),c(8)),v=c(87),y=c(88),k=c(58),N=c.p+"static/media/work.48a7c885.svg",w=(c(50),c(41)),_=c(93),C=c.p+"static/media/load.90f07696.svg";var L=function(){var e=Object(n.useState)({loading:!0,repos:null}),t=Object(w.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){i({loading:!0});fetch("https://brillianttyagi.pythonanywhere.com/blog/").then((function(e){return e.json()})).then((function(e){i({loading:!1,repos:e})}))}),[i]),c.loading?Object(u.jsx)("h3",{className:"loding",children:Object(u.jsx)("img",{className:"load",alt:"loading...",src:C})}):Object(u.jsx)(v.a,{className:"themed-container",fluid:!0,children:c.repos.map((function(e){return Object(u.jsx)(y.a,{xs:"1",sm:"2",md:"4",children:Object(u.jsx)(k.a,{id:"posts",children:Object(u.jsxs)(_.a,{id:"posts_card",children:[Object(u.jsx)("div",{id:"img__",children:Object(u.jsx)(_.a.Img,{id:"img_posts",variant:"top",src:"https://brillianttyagi.pythonanywhere.com/"+e.image})}),Object(u.jsxs)(_.a.Body,{children:[Object(u.jsx)(_.a.Title,{children:e.heading}),Object(u.jsx)(_.a.Text,{children:e.body.slice(0,120)+"....."}),Object(u.jsx)(_.a.Link,{children:Object(u.jsx)(m.b,{to:"/blog/"+e.id.toString(),children:"Read More"})})]})]})})})}))},c.repos.id)},I=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsxs)(v.a,{className:"themed-container",fluid:!0,children:[Object(u.jsxs)(y.a,{children:[Object(u.jsx)(k.a,{className:"p-2",children:Object(u.jsxs)("div",{className:"col-lg-6 col-md-5 col-sm-12 pt-5 align-self-center mb-lg-5 ps-5",children:[Object(u.jsxs)("h1",{className:"display-3 fw-lighter",id:"heading-1",children:["Learn",Object(u.jsx)("br",{})," Programming"]}),Object(u.jsx)("p",{id:"change-text",className:" display-5 fw-light fs-4 fw-light mt-lg-3",children:"#Learn #Practice #Change"})]})}),Object(u.jsx)(k.a,{className:"sm-5 lg-6 7 p-4",children:Object(u.jsx)(k.a,{className:" wrapper mt-3 text-center",children:Object(u.jsx)("img",{id:"img1",src:N,alt:"Programming guy"})})})]}),Object(u.jsx)(y.a,{id:"new",children:Object(u.jsxs)(k.a,{children:[Object(u.jsx)("h1",{className:"quote",children:Object(u.jsxs)("i",{children:['"It has become appallingly obvious that our technology has exceeded our humanity."',Object(u.jsx)("br",{}),"~ Albert Einstein"]})}),Object(u.jsxs)("button",{id:"learn",children:[Object(u.jsx)("a",{className:"Link_",href:"ok",children:"Start Learning"}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{})]})]})}),Object(u.jsx)(y.a,{children:Object(u.jsx)("h1",{id:"recent",children:"Recent Posts"})}),Object(u.jsx)(L,{})]})}}]),c}(n.Component),S=(c(75),c(17)),T=c(24),P=c(43),B=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsxs)(v.a,{fluid:!0,id:"footercon",children:[Object(u.jsxs)(y.a,{children:[Object(u.jsx)(k.a,{xs:"6",sm:"4",children:Object(u.jsxs)("div",{class:"col-5 offset-1 col-sm-2",children:[Object(u.jsx)("h5",{children:"Links"}),Object(u.jsxs)("ul",{class:"list-unstyled",children:[Object(u.jsx)("li",{id:"navlist_",children:Object(u.jsxs)(m.b,{className:"navlink",to:"/",children:[Object(u.jsx)(S.a,{icon:T.b}),"Home"]})}),Object(u.jsx)("li",{id:"navlist_",children:Object(u.jsxs)(m.b,{className:"navlink",to:"/project",children:[Object(u.jsx)(S.a,{icon:T.b}),"Python"]})}),Object(u.jsx)("li",{id:"navlist_",children:Object(u.jsxs)(m.b,{className:"navlink",to:"/",children:[Object(u.jsx)(S.a,{icon:T.b}),"Django"]})}),Object(u.jsx)("li",{id:"navlist_",children:Object(u.jsxs)(m.b,{className:"navlink",to:"/Contact",children:[Object(u.jsx)(S.a,{icon:T.b}),"Contact Us"]})}),Object(u.jsx)("li",{id:"navlist_",children:Object(u.jsxs)(m.b,{className:"navlink",to:"/About",children:[Object(u.jsx)(S.a,{icon:T.b}),"About Us"]})})]})]})}),Object(u.jsx)(k.a,{xs:"6",sm:"4",children:Object(u.jsxs)("div",{class:"address",children:[Object(u.jsx)("h5",{children:"Contact"}),Object(u.jsxs)("address",{children:["Uttar pradesh",Object(u.jsx)("br",{}),"India",Object(u.jsx)("br",{}),Object(u.jsx)(S.a,{icon:T.a}),Object(u.jsx)("a",{className:"navlinkw",href:"mailto:deepanshubhai84@gmail.com",children:"Write Article"})]})]})}),Object(u.jsxs)(k.a,{id:"social_col",sm:"4",children:[Object(u.jsx)("a",{id:"social_",class:"btn btn-social-icon btn-facebook",href:"https://twitter.com/imaprogramr",children:Object(u.jsx)(S.a,{icon:P.c,size:"2x"})}),Object(u.jsx)("a",{id:"social_",class:"btn btn-social-icon btn-linkedin",href:"https://www.instagram.com/ttyagi_boy84/",children:Object(u.jsx)(S.a,{icon:P.a,size:"2x"})}),"                            ",Object(u.jsx)("a",{id:"social_",class:"btn btn-social-icon btn-youtube",href:"https://www.linkedin.com/in/deepanshu-tyagi-355855198/",children:Object(u.jsx)(S.a,{icon:P.b,size:"2x"})}),Object(u.jsx)("a",{id:"social_",class:"btn btn-social-icon",href:"mailto:",children:Object(u.jsx)(S.a,{icon:T.a,size:"2x"})})]})]}),Object(u.jsx)(y.a,{children:Object(u.jsxs)("h1",{id:"copyright",children:["\xa92021 brilliantprogrammer",Object(u.jsx)("br",{})," All rights reserved"]})})]})}}]),c}(n.Component),D=(c(79),function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{id:"contact",children:Object(u.jsx)("div",{id:"section"})}),Object(u.jsx)(v.a,{children:Object(u.jsx)(y.a,{children:Object(u.jsx)("iframe",{id:"iframe",src:"https://kontactr.com/form-page/403a30bae74ecb0",title:"description"})})})]})}}]),c}(n.Component)),E=(c(80),function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{id:"education",children:Object(u.jsx)("h1",{children:Object(u.jsxs)("i",{children:['"Education is the most powerful weapon which you can use to change the world"',Object(u.jsx)("br",{}),"~Nelson Mandela"]})})}),Object(u.jsx)(y.a,{})]})}}]),c}(n.Component));function A(){var e=Object(f.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}c(81);var z=function(e){var t=Object(n.useState)({loading:!0,repos:null}),c=Object(w.a)(t,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){s({loading:!0});var t="https://brillianttyagi.pythonanywhere.com/blog/"+e.match.params.id.toString();fetch(t).then((function(e){return e.json()})).then((function(e){s({loading:!1,repos:e})}))}),[s]),i.loading?Object(u.jsx)("h3",{className:"loding",children:Object(u.jsx)("img",{className:"load",alt:"loading...",src:C})}):Object(u.jsxs)(v.a,{className:"posts",children:[Object(u.jsx)(y.a,{children:Object(u.jsx)("h1",{className:"posts_heading",children:i.repos.heading})}),Object(u.jsx)(y.a,{className:"posts_row",children:Object(u.jsx)("img",{id:"img_",src:"https://brillianttyagi.pythonanywhere.com/"+i.repos.image})}),Object(u.jsxs)(y.a,{children:[Object(u.jsxs)("span",{className:"author",children:[Object(u.jsx)(S.a,{icon:T.c}),i.repos.author]}),Object(u.jsx)("span",{className:"time",children:i.repos.created})]}),Object(u.jsx)(y.a,{id:"posts_body",dangerouslySetInnerHTML:{__html:i.repos.body}})]},i.repos.id)};var F=function(){return Object(u.jsxs)(m.a,{basename:"",children:[Object(u.jsx)(A,{}),Object(u.jsx)(f.b,{render:function(e){var t=e.location;return Object(u.jsxs)("div",{location:t,children:[Object(u.jsx)(g,{}),Object(u.jsxs)(f.d,{location:t,children:[Object(u.jsx)(f.b,{exact:!0,path:"/",component:I}),Object(u.jsx)(f.b,{path:"/contact",component:D}),Object(u.jsx)(f.b,{path:"/about",component:E}),Object(u.jsx)(f.b,{path:"/blog/:id",component:z}),Object(u.jsx)(f.a,{to:"/"})]}),Object(u.jsx)(B,{})]})}})]})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};s.a.render(Object(u.jsx)(F,{}),document.getElementById("root")),H()}},[[82,1,2]]]);
//# sourceMappingURL=main.f98c25d1.chunk.js.map