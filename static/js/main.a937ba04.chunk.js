(this["webpackJsonpbikeio-fe"]=this["webpackJsonpbikeio-fe"]||[]).push([[0],{143:function(e,r,t){},144:function(e,r,t){},163:function(e,r,t){},189:function(e,r,t){"use strict";t.r(r);var n=t(0),i=t(14),a=t.n(i),s=(t(143),t(144),t(237)),c=t(11),o=t.n(c),l=t(34),u=t(18),b=t(17),d=t(100),p=t(42),h=t(15),j=t(121),m=t.n(j),f=t(5),O=function(e){var r=e.onFileChanged,t=e.files,i=void 0===t?[]:t,a=Object(n.useState)([]),s=Object(b.a)(a,2),c=s[0],o=s[1],u=Object(p.a)();return Object(f.jsx)(m.a,{multiple:!0,maxSize:"2mb",multipleMaxSize:"10mb",multipleMaxCount:4,accept:["application/pdf","image/jpg","image/jpeg","image/png"],onSuccess:function(e){r([].concat(Object(h.a)(i),Object(h.a)(e)))},onError:o,children:function(e){var r=e.browseFiles,t=e.getDropZoneProps;e.getLabelProps;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",Object(l.a)(Object(l.a)({},t({className:"myDropZone"})),{},{onClick:r,children:Object(f.jsx)("span",{children:u({id:"dropzone.helper"})})})),Object(f.jsxs)("ol",{children:[i.map((function(e){return Object(f.jsx)("li",{children:e.name},e.name)})),c.map((function(e){return Object(f.jsxs)("li",{children:[e.file.name," - ",e.type]},e.file.name)}))]})]})}})},g=(t(163),"https://bikeeio.herokuapp.com/bikeapi"),x="6Lf2enQaAAAAANrscy5B6c7uY5ZQNa87gUfq3vgN";console.log("API: ",g);var v=function(){var e=Object(u.a)(o.a.mark((function e(r){var t,n,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:{},e.prev=1,e.next=4,window.grecaptcha.execute(x,{action:r.replace(g,"")});case 4:return n=e.sent,e.next=7,fetch(r,Object(l.a)(Object(l.a)({},t),{},{headers:Object(l.a)(Object(l.a)({},t.headers||{}),{},{"x-token":n})}));case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(o.a.mark((function e(r){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(t=new FormData).append("file",r.src.file),e.next=5,v("https://bikeeio.herokuapp.com/bikeapi/files",{method:"POST",body:t});case 5:return n=e.sent,e.abrupt("return",n.json());case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(r.map((function(e){return k(e)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(o.a.mark((function e(r){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("https://bikeeio.herokuapp.com/bikeapi/bike",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bikeDetails:r})});case 3:return t=e.sent,e.abrupt("return",t.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(o.a.mark((function e(r){var t,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("https://bikeeio.herokuapp.com/bikeapi/bike"+"/".concat(r));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,i=n.result.bike,e.abrupt("return",i);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),w=t(235),S=t(223),_=t(226),C=function(e){var r=e.control,t=e.errors,n=e.t,i=e.name,a=e.label,s=e.rules;return Object(f.jsx)(S.a,{fullWidth:!0,variant:"outlined",className:"formField",children:Object(f.jsx)(d.a,{name:i,as:Object(f.jsx)(w.a,{id:i,helperText:t[i]?t[i].message:null,label:n({id:a}),error:!!t[i]}),control:r,defaultValue:"",rules:s})})},P=Object(s.d)((function(e){var r=e.history,t=Object(d.b)({defaultValues:{firstName:"omer",lastName:"shacham",phone:"0506652800",secondary_phone:"0506652800",city:"tel aviv",bike_id:"1234",brand:"trek",color:"white",acceptedTerms:!0}}),i=(t.register,t.handleSubmit),a=t.errors,s=(t.reset,t.formState),c=t.setError,h=t.control,j=(s.isDirty,s.isSubmitting),m=Object(n.useState)([]),g=Object(b.a)(m,2),x=g[0],v=g[1],k=Object(n.useState)(null),q=Object(b.a)(k,2),w=q[0],S=q[1],P=Object(p.a)();Object(n.useEffect)((function(e){console.log(a)}),[a]);var F=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,i,a,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=w){e.next=6;break}return e.next=4,y(x);case 4:n=e.sent,S(n);case 6:return i=n.map((function(e){return e.file})),console.log("imhere"),e.next=10,N(Object(l.a)({assets:i},t));case 10:a=e.sent,s=a.result,(u=a.error)&&Object.entries(u).forEach((function(e){var r=Object(b.a)(e,2),t=r[0],n=r[1];c(t,{type:"server",message:n})})),s&&r.push("/success");case 15:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(f.jsx)("form",{onSubmit:i(F),children:Object(f.jsxs)("div",{className:"formFields",children:[C({control:h,errors:a,t:P,name:"firstName",label:"register.first_name.title",rules:{required:P({id:"register.first_name.required"})}}),C({control:h,errors:a,t:P,name:"lastName",label:"register.last_name.title",rules:{required:P({id:"register.last_name.required"})}}),C({control:h,errors:a,t:P,name:"phone",label:"register.phone.title",rules:{required:P({id:"register.phone.required"}),pattern:{value:/^\d+$/i,message:P({id:"register.phone.invalid"})}}}),C({control:h,errors:a,t:P,name:"secondary_phone",label:"register.secondary_phone.title",rules:{pattern:{value:/^\d*$/i,message:P({id:"register.secondary_phone.invalid"})}}}),C({control:h,errors:a,t:P,name:"bike_id",label:"register.bike_id.title",rules:{required:P({id:"register.bike_id.required"})}}),C({control:h,errors:a,t:P,name:"city",label:"register.city.title",rules:{required:P({id:"register.city.required"})}}),C({control:h,errors:a,t:P,name:"brand",label:"register.brand.title",rules:{required:P({id:"register.brand.required"})}}),C({control:h,errors:a,t:P,name:"color",label:"register.color.title",rules:{required:P({id:"register.color.required"})}}),Object(f.jsx)("div",{children:Object(f.jsx)(O,{files:x,onFileChanged:v})}),Object(f.jsx)("div",{className:"spacer"}),Object(f.jsx)("div",{children:Object(f.jsx)(_.a,{variant:"contained",fullWidth:!0,color:"primary",disabled:j,type:"submit",children:"Submit"})})]})})})),F=t(82),R=t.n(F),B=t(227),T=t(94),D=t.n(T),A=R()((function(e){return{root:{margin:e.spacing(2)},searchRoot:{height:"30%",display:"flex",flexDirection:"column"},searchInput:{margin:e.spacing(2)},searchButton:{},bikesRoot:{display:"flex",flexDirection:"column"},buttonProgress:{color:D.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},searchContainer:{width:"50%",margin:"auto",position:"relative"}}})),L=function(e){var r=A(),t=Object(p.a)(),i=Object(n.useState)(""),a=Object(b.a)(i,2),s=a[0],c=a[1],l=Object(n.useState)(!1),d=Object(b.a)(l,2),h=d[0],j=d[1],m=Object(n.useState)(null),O=Object(b.a)(m,2),g=O[0],x=O[1],v=Object(n.useState)(null),k=Object(b.a)(v,2),y=k[0],N=k[1],S=function(){var e=Object(u.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),N(null),x(null),e.next=5,q(s);case 5:r=e.sent,setTimeout((function(){r||N("Cant find bike with serial: ".concat(s)),x(r),j(!1)}),2e3);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:r.root,children:[Object(f.jsxs)("div",{className:r.searchRoot,children:[Object(f.jsx)(w.a,{className:r.searchInput,label:"Bike Serial Number",error:!!y,helperText:y,onChange:function(e){return c(e.target.value)},value:s}),Object(f.jsxs)("div",{className:r.searchContainer,children:[Object(f.jsx)(_.a,{className:r.searchButton,variant:"contained",fullWidth:!0,color:"primary",disabled:h,onClick:S,children:"Search!"}),h&&Object(f.jsx)(B.a,{size:24,className:r.buttonProgress})]})]}),g&&Object(f.jsx)("div",{className:r.bikesRoot,children:Object.entries(g).map((function(e){var r=Object(b.a)(e,2),n=r[0],i=r[1];return Object(f.jsxs)("div",{children:[t({id:"result.".concat(n)}),": ",i]},n)}))})]})},J=function(e){return Object(f.jsx)("div",{children:"Home"})},z=t(228),E=t(229),I=t(230),G=t(122),W=t.n(G),Z=t(85),M=t(239),Q=t(225),V=t(231),$=t(232),H=t(123),K=t.n(H),U=t(233),Y=t(124),X=t.n(Y),ee=t(125),re=t.n(ee),te=R()((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250}}})),ne={"/register":"path.register.title","/search":"path.search.title"},ie=Object(s.d)((function(e){var r=e.history,t=e.location,i=Object(p.a)(),a=te(),s=Object(n.useState)(!1),c=Object(b.a)(s,2),o=c[0],l=c[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(z.a,{position:"static",children:Object(f.jsxs)(E.a,{children:[Object(f.jsx)(I.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return l(!0)},children:Object(f.jsx)(W.a,{})}),Object(f.jsx)(Z.a,{variant:"h6",className:a.title,children:i({id:ne[t.pathname]||"path.home"})})]})}),Object(f.jsx)(M.a,{anchor:"left",open:o,children:Object(f.jsx)("div",{className:a.list,role:"presentation",onClick:function(){return l(!1)},onKeyDown:function(){return l(!1)},children:Object(f.jsxs)(Q.a,{children:[Object(f.jsxs)(V.a,{button:!0,onClick:function(){return r.push("/search")},children:[Object(f.jsx)($.a,{children:Object(f.jsx)(K.a,{})}),Object(f.jsx)(U.a,{primary:i({id:"path.search.title"})})]},"search"),Object(f.jsxs)(V.a,{button:!0,onClick:function(){return r.push("/register")},children:[Object(f.jsx)($.a,{children:Object(f.jsx)(X.a,{})}),Object(f.jsx)(U.a,{primary:i({id:"path.register.title"})})]},"register"),Object(f.jsxs)(V.a,{button:!0,children:[Object(f.jsx)($.a,{children:Object(f.jsx)(re.a,{})}),Object(f.jsx)(U.a,{primary:i({id:"path.report.title"})})]},"report")]})})})]})})),ae=function(){return Object(f.jsx)("div",{children:"Good Job"})};var se=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(s.a,{children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(ie,{}),Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.b,{path:"/success",component:ae}),Object(f.jsx)(s.b,{path:"/register",component:P}),Object(f.jsx)(s.b,{path:"/search",component:L}),Object(f.jsx)(s.b,{component:J})]})]})})})},ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,241)).then((function(r){var t=r.getCLS,n=r.getFID,i=r.getFCP,a=r.getLCP,s=r.getTTFB;t(e),n(e),i(e),a(e),s(e)}))},oe=t(236),le=t(99),ue=t(234),be={en:le,he:le},de=navigator.language.split(/[-_]/)[0];a.a.render(Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(ue.a,{}),Object(f.jsx)(oe.a,{locale:"en",messages:be[de],defaultLocale:"en",children:Object(f.jsx)(se,{})})]}),document.getElementById("root")),ce()},99:function(e){e.exports=JSON.parse('{"path.home":"Bikee!","path.register.title":"Register your bikes","path.search.title":"Search for bike owner","path.report.title":"Report suspicious bikes","register.title":"Register your bikes","register.first_name":"John","register.first_name.title":"First Name","register.first_name.required":"First Name Required","register.last_name":"Doe","register.last_name.title":"Last Name","register.last_name.required":"Last Name Required","register.phone.title":"Phone Number","register.phone":"0501234567","register.phone.required":"Phone required","register.phone.invalid":"Phone number invalid","register.secondary_phone.title":"Secondary Phone Number","register.secondary_phone.placeholder":"0501234567","register.secondary_phone.invalid":"Phone number invalid","register.city.title":"City","register.city.placeholder":"Tel-Aviv","register.city.required":"Required","register.bike_id.title":"Bike serial number","register.bike_id.placeholder":"A1234C","register.bike_id.required":"Required","register.brand.title":"Brand","register.brand.placeholder":"Trek","register.brand.required":"Required","register.color.title":"Color","register.color.placeholder":"Green","register.color.required":"Required","register.terms.title":"Accept terms","register.terms.required":"Required","dropzone.helper":"Drop files here or click to open your finder","result.firstName":"First Name","result.lastName":"Last Name","result.brand":"Brand","result.color":"Color","result.bike_id":"Serial Number","result.phone":"Phone number","result.secondaryPhone":"Secondary Phone Number"}')}},[[189,1,2]]]);