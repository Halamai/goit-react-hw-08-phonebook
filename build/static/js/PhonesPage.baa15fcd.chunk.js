(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{90:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(37);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(s){c=!0,a=s}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91:function(t,e,n){t.exports={namelist:"ContactForm_namelist__OYijJ",nameinput:"ContactForm_nameinput__3SmRz",btncon:"ContactForm_btncon__2eZ7b"}},92:function(t,e,n){t.exports={btn:"ContactList_btn__2YaC0",menu:"ContactList_menu__3WBVG",list:"ContactList_list__3Ls8I"}},94:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(2),a=n(27),o=n(90),i=n(91),s=n.n(i),u=n(12),b=n(36),l=n(7),j=n(25),m=function(t){return t.contacts.error},d=function(t){return t.contacts.isLoading},O=function(t){return t.contacts.items},f=function(t){return t.contacts.filter},h=Object(j.a)([O,f],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),p=n(1),x={name:"",number:""};function y(){var t=Object(u.c)(m),e=Object(u.c)(O),n=Object(r.useState)(x),i=Object(o.a)(n,2),j=i[0],d=i[1],f=Object(u.b)(),h=function(e){t&&f(Object(l.d)(""));var n=e.target,r=n.name,o=n.value;d((function(t){return Object(a.a)(Object(a.a)({},t),{},Object(c.a)({},r,o))}))},y=function(){return e.some((function(t){return t.name.toLowerCase()===j.name.toLowerCase()}))},v=function(){d((function(t){return Object(a.a)(Object(a.a)({},t),{},{name:"",number:""})}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),!y()&&f(Object(b.a)(Object(a.a)({},j))),v()},children:[Object(p.jsxs)("label",{children:["Name:",Object(p.jsx)("input",{placeholder:"Enter name",className:s.a.nameinput,value:j.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:h})]}),Object(p.jsxs)("label",{children:["Number:",Object(p.jsx)("input",{placeholder:"Enter number",className:s.a.nameinput,value:j.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:h})]}),Object(p.jsx)("button",{className:s.a.btncon,type:"submit",disabled:y(),children:"Add contact"})]}),y()&&Object(p.jsx)("span",{children:"\u0421ontact already exists"})]})}var v=n(92),C=n.n(v),_=function(){var t=Object(u.c)(m),e=Object(u.c)(d),n=Object(u.c)(h),r=Object(u.b)();return Object(p.jsxs)("ul",{className:C.a.menu,children:[e&&Object(p.jsx)("h2",{children:"...loading"}),t&&Object(p.jsx)("h2",{children:t}),n&&n.map((function(t){return Object(p.jsxs)("li",{children:[Object(p.jsxs)("span",{children:[t.name,": "]}),Object(p.jsx)("span",{children:t.number}),Object(p.jsx)("button",{className:C.a.btn,type:"button",id:t.id,onClick:function(){return r(Object(b.c)(t.id))},children:"Delete"})]},t.id)}))]})},g=function(){var t=Object(u.b)(),e=Object(u.c)(f);return Object(p.jsxs)("label",{className:"",children:["Find contacs by name:",Object(p.jsx)("input",{placeholder:"Enter name",type:"text",name:"filter",value:e,onChange:function(e){return t(Object(l.e)(e.target.value))}})]})};e.default=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(y,{}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(g,{}),Object(p.jsx)(_,{})]})}}}]);
//# sourceMappingURL=PhonesPage.baa15fcd.chunk.js.map