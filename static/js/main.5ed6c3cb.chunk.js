(this["webpackJsonpportfolio-redesign"]=this["webpackJsonpportfolio-redesign"]||[]).push([[0],{50:function(e,t,n){e.exports=n(72)},59:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(41),i=n.n(o),l=n(49),c=n(4),s=n(3);var m=function(e){return r.a.createElement(s.a,{path:e.path,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},u=(n(59),Object.freeze({HOME:{name:"Home",route:"/"},ABOUT:{name:"About",route:"/about"},SKILLS:{name:"Skills",route:"/skills",subroutes:{SETTINGS:{name:"Settings",route:"me/settings"}}},WORK:{name:"Work",route:"/work"},CONTACT:{name:"Contact",route:"/contact"}})),p=n(8),d=n(9),h=n(36),f=n(42),v=n.n(f),E=n(43),g=n.n(E),b=u.HOME,w=u.ABOUT,y=u.SKILLS,k=u.WORK,N=u.CONTACT;var O=function(){return r.a.createElement("nav",{className:"navBar"},r.a.createElement(c.b,{to:b.route},r.a.createElement("h1",{className:"myName"},"T")),r.a.createElement("ul",{className:"menu"},r.a.createElement(c.b,{to:b.route},r.a.createElement("li",{className:"home"},r.a.createElement(p.a,{icon:d.c,className:"home-icon"}))),r.a.createElement(c.b,{to:w.route},r.a.createElement("li",{className:"about"},r.a.createElement(p.a,{icon:d.d,className:"about-icon"}))),r.a.createElement(c.b,{to:y.route},r.a.createElement("li",{className:"skills"},r.a.createElement(p.a,{icon:d.a,className:"tech-icon",spin:!0}))),r.a.createElement(c.b,{to:k.route},r.a.createElement("li",{className:"work"},r.a.createElement(p.a,{icon:d.e,className:"work-icon"}))),r.a.createElement(c.b,{to:N.route},r.a.createElement("li",{className:"contact"},r.a.createElement(p.a,{icon:d.b,className:"contact-icon"})))),r.a.createElement("ul",{className:"social-media"},r.a.createElement("li",{className:"github"},r.a.createElement("a",{href:"https://github.com/TimAngus321",target:"_blank"},r.a.createElement(h.Icon,{icon:v.a,className:"github-icon"}))),r.a.createElement("li",{className:"linkedin"},r.a.createElement("a",{href:"https://www.linkedin.com/in/timothy-angus-b94969113/",target:"_blank"},r.a.createElement(h.Icon,{icon:g.a,className:"linkedIn-icon"})))))};var S=function(){return r.a.createElement("h1",null,"About")},A={path:u.ABOUT.route,component:S},C=n(44),T=n.n(C);var j=function(){return r.a.createElement("div",{className:"contact-container"},r.a.createElement("div",{className:"contact-component"},r.a.createElement("div",{className:"form-item"},r.a.createElement("h1",{className:"contact-title"},"Contact Me"),r.a.createElement("p",{className:"contact-blurb"},"Please feel free to contact me regarding Ruby on Rails, React.js, javascript and shopify positions you think I might be suitable for. I am most interested in full time positions in Berlin however I am open to freelance work as well. Please contact me with this form and I'll get back to you as soon as I can."),r.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),T.a.sendForm("service_cqvp8hl","template_8ahjk2c",e.target,"user_vuH6K6c1cKvZ0H7QgxCTo").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},r.a.createElement("input",{type:"hidden",name:"contact_number"}),r.a.createElement("ul",{className:"contact-form-ul"},r.a.createElement("div",{className:"name-and-email"},r.a.createElement("li",{className:"name"},r.a.createElement("input",{className:"name-input",type:"text",name:"name",placeholder:"Name"})),r.a.createElement("li",{className:"email"},r.a.createElement("input",{className:"email-input",type:"email",name:"email",placeholder:"Email"}))),r.a.createElement("li",{className:"subject"},r.a.createElement("input",{className:"subject-input",type:"subject",name:"subject",placeholder:"Subject"})),r.a.createElement("li",{className:"message"},r.a.createElement("textarea",{className:"message-input",name:"message",placeholder:"Message"}))),r.a.createElement("div",{className:"btn-container"},r.a.createElement("input",{className:"contact-btn",type:"submit",value:"Send"})))),r.a.createElement("div",{className:"map"})))},x={path:u.CONTACT.route,component:j},I=n(19),R=n(20),L=n(26),F=n(24),q=n(38),D=n(10),K=n(21),B=n.n(K),W=function(){if("undefined"!==typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),M=function(e,t){if(!window.requestAnimationFrame&&!window.webkitRequestAnimationFrame&&(!window.mozRequestAnimationFrame||!window.mozCancelRequestAnimationFrame)&&!window.oRequestAnimationFrame&&!window.msRequestAnimationFrame)return window.setTimeout(e,t);var n=(new Date).getTime(),a={};return a.value=W((function r(){(new Date).getTime()-n>=t?e.call():a.value=W(r)})),a},z=function(e){return window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(e.value):clearTimeout(e)},H=n(45),U=n.n(H),P=function(e){Object(L.a)(n,e);var t=Object(F.a)(n);function n(e){var a;Object(I.a)(this,n),(a=t.call(this,e)).willLeave=function(){var e=a.getDimensions().height;return{opacity:Object(D.spring)(a.getOpacity(),a.props.springConfig),translate:Object(D.spring)(-e,a.props.springConfig)}},a.willEnter=function(){var e=a.getDimensions().height;return{opacity:a.getOpacity(),translate:e}},a.tick=function(){a.setState((function(e,t){var n=(e.currentWordIndex+1)%e.elements.length,a={currentWordIndex:n,currentEl:e.elements[n],wordCount:(e.wordCount+1)%1e3,currentInterval:Array.isArray(t.interval)?t.interval[n%t.interval.length]:t.interval};return t.onChange&&t.onChange(a),a}),(function(){a.state.currentInterval>0&&(a.clearTimeouts(),a.tickLoop=M(a.tick,a.state.currentInterval))}))},a.wrapperStyles=B()(Object(q.a)(Object(q.a)({},a.props.mask&&{overflow:"hidden"}),{display:"inline-block",position:"relative",verticalAlign:"top"})),a.elementStyles=B()({display:"inline-block",left:0,top:0,whiteSpace:a.props.noWrap?"nowrap":"normal"});var o=r.a.Children.toArray(e.children);return a.state={elements:o,currentEl:o[0],currentWordIndex:0,wordCount:0,currentInterval:Array.isArray(e.interval)?e.interval[0]:e.interval},a}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.delay,n=this.state,a=n.currentInterval,r=n.elements;a>0&&r.length>1&&(this.tickDelay=M((function(){e.tickLoop=M(e.tick,a)}),t))}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.props,o=a.interval,i=a.children,l=a.delay,c=this.state.currentWordIndex,s=Array.isArray(o)?o[c%o.length]:o;t.currentInterval!==s&&(this.clearTimeouts(),s>0&&r.a.Children.count(i)>1&&(this.tickDelay=M((function(){n.tickLoop=M(n.tick,s)}),l))),U()(e.children,i)||this.setState({elements:r.a.Children.toArray(i)})}},{key:"componentWillUnmount",value:function(){this.clearTimeouts()}},{key:"clearTimeouts",value:function(){null!=this.tickLoop&&z(this.tickLoop),null!=this.tickDelay&&z(this.tickDelay)}},{key:"getOpacity",value:function(){return this.props.fade?0:1}},{key:"getDimensions",value:function(){return null==this.wordBox?{width:"auto",height:"auto"}:this.wordBox.getBoundingClientRect()}},{key:"getTransitionMotionStyles",value:function(){var e=this.props.springConfig,t=this.state,n=t.wordCount,a=t.currentEl;return[{key:"step-".concat(n),data:{currentEl:a},style:{opacity:Object(D.spring)(1,e),translate:Object(D.spring)(0,e)}}]}},{key:"render",value:function(){var e=this,t=this.props.className,n=void 0===t?"":t;return r.a.createElement("div",{className:"".concat(this.wrapperStyles," ").concat(n)},r.a.createElement(D.TransitionMotion,{willLeave:this.willLeave,willEnter:this.willEnter,styles:this.getTransitionMotionStyles()},(function(t){var n=e.getDimensions(),a=n.height,o=n.width;return r.a.createElement("div",{style:{transition:"width ".concat(e.props.adjustingSpeed,"ms linear"),height:a,width:o}},t.map((function(t){return r.a.createElement("div",{className:e.elementStyles,ref:function(t){e.wordBox=t},key:t.key,style:{opacity:t.style.opacity,transform:"translateY(".concat(t.style.translate,"px)"),position:null==e.wordBox?"relative":"absolute"}},t.data.currentEl)})))})))}}]),n}(r.a.PureComponent);P.defaultProps={interval:3e3,delay:0,adjustingSpeed:150,springConfig:{stiffness:340,damping:30},fade:!0,mask:!1,noWrap:!0};var _=P,X=n(27),G=n.n(X),J=G()("div")({fontSize:"35px",color:"white"}),Y=G()("div")({fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}),Q=(G()(_)({display:"flex"}),function(e){Object(L.a)(n,e);var t=Object(F.a)(n);function n(e){var a;return Object(I.a)(this,n),(a=t.call(this,e)).state={options:["Trade faster","Increase sales"],interval:0},a}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({options:["Trade faster","Increase sales","Stock winners","Price perfectly"]}),console.log("change options")}),1e4),setTimeout((function(){e.setState({interval:1e3}),console.log("start"),setTimeout((function(){e.setState({interval:0}),console.log("stop")}),1e4)}),5e3)}},{key:"render",value:function(){var e=this.state;e.options,e.interval;return r.a.createElement("div",null,r.a.createElement(Y,null,r.a.createElement(J,null,r.a.createElement("span",{className:"pre-loop-quote"},r.a.createElement("p",null,"Hi"),r.a.createElement("p",null,"I'm Tim")),r.a.createElement(_,{className:"looping-quote",mask:!0,fade:!1},r.a.createElement("span",null,"front-end developer"),r.a.createElement("span",null,"backend developer"),r.a.createElement("span",null,"full-stack developer"),r.a.createElement("span",null,"music lover")))))}}]),n}(r.a.PureComponent)),Z=u.CONTACT;var V=function(){return r.a.createElement("div",{className:"photo-quote-component"},r.a.createElement("div",{className:"photo-quote"},r.a.createElement("div",{className:"all-headings-btn"},r.a.createElement("p",{className:"animated-quotes react-reveal"},r.a.createElement(Q,null)),r.a.createElement("p",{className:"sub-heading"},"Full-Stack / Rails / React / JS / Shopify"),r.a.createElement(c.b,{to:Z.route},r.a.createElement("div",{className:"contact-btn"},"Contact Me"))),r.a.createElement("div",{className:"tim-logo"},r.a.createElement("h1",null,"T"))))},$={path:u.HOME.route,component:V},ee=u.SKILLS,te=ee.subroutes.SETTINGS;var ne=function(e){var t=e.routes;return r.a.createElement("div",null,r.a.createElement("h2",null,"Skills"),r.a.createElement("ul",{className:"App-nav-list"},r.a.createElement("li",{className:"App-nav-item"},r.a.createElement(c.b,{to:ee.route},"Details")),r.a.createElement("li",{className:"App-nav-item"},r.a.createElement(c.b,{to:te.route},te.name))),r.a.createElement(s.c,null,t.map((function(e,t){return r.a.createElement(m,Object.assign({key:t},e))}))))};var ae=function(){return r.a.createElement("h3",null,"Details")},re={exact:!0,path:u.SKILLS.route,component:ae};var oe=function(){return r.a.createElement("h1",null,"Settings")},ie={path:u.SKILLS.subroutes.SETTINGS.route,component:oe};var le=function(){return r.a.createElement("h1",null,"Work")},ce=[A,x,$,{path:u.SKILLS.route,component:ne,routes:[re,ie]},{path:u.WORK.route,component:le}],se=n(25),me=n(22),ue=n(23);function pe(){var e=Object(me.a)(["\n  position: absolute;\n  top: 50px;\n  right: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 101;\n  span {\n    background-color: white;\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n    :first-child {\n      transform: ",";\n    }\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n    :nth-child(3) {\n      transform: ",";\n   \n    }\n  }\n"]);return pe=function(){return e},e}var de=ue.a.button(pe(),(function(e){var t=e.theme;return e.open?t.primaryDark:t.primaryLight}),(function(e){return e.open?"rotate(0deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"translateX(15px) translateY(12px) rotate(-90deg)":"rotate(0)"})),he=function(e){var t=e.open,n=e.setOpen,a=Object(se.a)(e,["open","setOpen"]),o=!!t;return r.a.createElement(de,Object.assign({"aria-label":"Toggle menu","aria-expanded":o,open:t,onClick:function(){return n(!t)}},a),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))};function fe(){var e=Object(me.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  transform: ",";\n  height: 100vh;\n  background-color: black;\n  text-align: left;\n  padding: 2rem;\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  transition: transform 0.3s ease-in-out;\n  @media (max-width: 900px) {\n      width: 100%;\n    }\n  a {\n    font-size: 1rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    ","\n    color: white;\n    text-decoration: none;\n    transition: color 0.3s linear;\n    @media (max-width: ",") {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n    &:hover {\n      color: #BD4517;\n    }\n  }\n"]);return fe=function(){return e},e}var ve=ue.a.nav(fe(),(function(e){return e.theme.primaryLight}),(function(e){return e.open?"translateX(0)":"translateX(-100%)"}),"",(function(e){return e.theme.mobile})),Ee=u.HOME,ge=u.ABOUT,be=u.SKILLS,we=u.WORK,ye=u.CONTACT,ke=function(e){var t=e.open,n=e.setOpen,a=Object(se.a)(e,["open","setOpen"]),o=!!t,i=!!t;return r.a.createElement(ve,Object.assign({open:t,"aria-hidden":!o},a),r.a.createElement(c.b,Object.assign({to:Ee.route,"aria-label":"Toggle menu","aria-expanded":i,open:t,onClick:function(){return n(!t)}},a),r.a.createElement("span",{"aria-hidden":"true"},"Home")),r.a.createElement(c.b,Object.assign({to:ge.route,"aria-label":"Toggle menu","aria-expanded":i,open:t,onClick:function(){return n(!t)}},a),r.a.createElement("span",{"aria-hidden":"true"}),"About"),r.a.createElement(c.b,Object.assign({to:be.route,"aria-label":"Toggle menu","aria-expanded":i,open:t,onClick:function(){return n(!t)}},a),r.a.createElement("span",{"aria-hidden":"true"}),"SKILLS"),r.a.createElement(c.b,Object.assign({to:we.route,"aria-label":"Toggle menu","aria-expanded":i,open:t,onClick:function(){return n(!t)}},a),r.a.createElement("span",{"aria-hidden":"true"}),"WORK"),r.a.createElement(c.b,Object.assign({to:ye.route,"aria-label":"Toggle menu","aria-expanded":i,open:t,onClick:function(){return n(!t)}},a),r.a.createElement("span",{"aria-hidden":"true"}),"Contact"))},Ne=[u.HOME,u.ABOUT,u.SKILLS,u.WORK,u.CONTACT];var Oe=function(){var e,t,n=Object(a.useState)(!1),o=Object(l.a)(n,2),i=o[0],u=o[1],p=Object(a.useRef)();return e=p,t=function(){return u(!1)},Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t]),r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(O,{navItems:Ne}),r.a.createElement("div",{ref:p,className:"mobile-nav"},r.a.createElement(he,{open:i,setOpen:u}),r.a.createElement(ke,{open:i,setOpen:u})),r.a.createElement(s.c,null,ce.map((function(e,t){return r.a.createElement(m,Object.assign({key:t},e))})))))};i.a.render(r.a.createElement(Oe,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.5ed6c3cb.chunk.js.map