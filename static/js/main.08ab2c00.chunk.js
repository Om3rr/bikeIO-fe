(this["webpackJsonpbikeio-fe"]=this["webpackJsonpbikeio-fe"]||[]).push([[0],{131:function(e){e.exports=JSON.parse('{"path.home":"Bikee!","path.register.title":"Register your bikes","path.search.title":"Search for bike owner","path.report.title":"Report suspicious bikes","register.title":"Register your bikes","register.first_name":"John","register.first_name.title":"First Name","register.first_name.required":"First Name Required","register.last_name":"Doe","register.last_name.title":"Last Name","register.last_name.required":"Last Name Required","register.phone.title":"Phone Number","register.phone":"0501234567","register.phone.required":"Phone required","register.phone.invalid":"Phone number invalid","register.secondary_phone.title":"Secondary Phone Number","register.secondary_phone.placeholder":"0501234567","register.secondary_phone.invalid":"Phone number invalid","register.city.title":"City","register.city.placeholder":"Tel-Aviv","register.city.required":"Required","register.bike_id.title":"Bike serial number","register.bike_id.placeholder":"A1234C","register.bike_id.required":"Required","register.brand.title":"Brand","register.brand.placeholder":"Trek","register.brand.required":"Required","register.color.title":"Color","register.color.placeholder":"Green","register.color.required":"Required","register.terms.title":"Accept terms","register.terms.required":"Required","dropzone.helper":"Drop files here or click to open your finder","result.firstName":"First Name","result.lastName":"Last Name","result.brand":"Brand","result.color":"Color","result.bike_id":"Serial Number","result.phone":"Phone number","result.secondaryPhone":"Secondary Phone Number"}')},153:function(e,r,t){},154:function(e,r,t){},173:function(e,r,t){},199:function(e,r,t){"use strict";t.r(r);var n=t(0),i=t(14),a=t.n(i),s=(t(153),t(154),t(75)),c=t(15),o=t(11),l=t.n(o),u=t(38),d=t(19),b=t(18),p=t(107),h=t(46),j=t(16),m=t(130),f=t.n(m),O=t(5),g=function(e){var r=e.onFileChanged,t=e.files,i=void 0===t?[]:t,a=Object(n.useState)([]),s=Object(b.a)(a,2),c=s[0],o=s[1],l=Object(h.a)();return Object(O.jsx)(f.a,{multiple:!0,maxSize:"2mb",multipleMaxSize:"10mb",multipleMaxCount:4,accept:["application/pdf","image/jpg","image/jpeg","image/png"],onSuccess:function(e){r([].concat(Object(j.a)(i),Object(j.a)(e)))},onError:o,children:function(e){var r=e.browseFiles,t=e.getDropZoneProps;e.getLabelProps;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",Object(u.a)(Object(u.a)({},t({className:"myDropZone"})),{},{onClick:r,children:Object(O.jsx)("span",{children:l({id:"dropzone.helper"})})})),Object(O.jsxs)("ol",{children:[i.map((function(e){return Object(O.jsx)("li",{children:e.name},e.name)})),c.map((function(e){return Object(O.jsxs)("li",{children:[e.file.name," - ",e.type]},e.file.name)}))]})]})}})},x=(t(173),"http://localhost:5000/bikeapi"),v=function(){var e=Object(d.a)(l.a.mark((function e(r){var t,n,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:{},e.prev=1,e.next=4,window.grecaptcha.execute("6Lf2enQaAAAAANrscy5B6c7uY5ZQNa87gUfq3vgN",{action:r.replace(x,"")});case 4:return n=e.sent,e.next=7,fetch(r,Object(u.a)(Object(u.a)({},t),{},{headers:Object(u.a)(Object(u.a)({},t.headers||{}),{},{"x-token":n})}));case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(l.a.mark((function e(r){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(t=new FormData).append("file",r.src.file),e.next=5,v("http://localhost:5000/bikeapi/files",{method:"POST",body:t});case 5:return n=e.sent,e.abrupt("return",n.json());case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(r.map((function(e){return y(e)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(l.a.mark((function e(r){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("http://localhost:5000/bikeapi/bike",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bikeDetails:r})});case 3:return t=e.sent,e.abrupt("return",t.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(l.a.mark((function e(r){var t,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("http://localhost:5000/bikeapi/bike"+"/".concat(r));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,i=n.result.bike,e.abrupt("return",i);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),w=t(238),S=t(226),_=t(229),C=function(e){var r=e.control,t=e.errors,n=e.t,i=e.name,a=e.label,s=e.rules;return Object(O.jsx)(S.a,{fullWidth:!0,variant:"outlined",className:"formField",children:Object(O.jsx)(p.a,{name:i,as:Object(O.jsx)(w.a,{id:i,helperText:t[i]?t[i].message:null,label:n({id:a}),error:!!t[i]}),control:r,defaultValue:"",rules:s})})},P=Object(c.f)((function(e){var r=e.history,t=Object(p.b)({defaultValues:{firstName:"omer",lastName:"shacham",phone:"0506652800",secondary_phone:"0506652800",city:"tel aviv",bike_id:"1234",brand:"trek",color:"white",acceptedTerms:!0}}),i=(t.register,t.handleSubmit),a=t.errors,s=(t.reset,t.formState),c=t.setError,o=t.control,j=(s.isDirty,s.isSubmitting),m=Object(n.useState)([]),f=Object(b.a)(m,2),x=f[0],v=f[1],y=Object(n.useState)(null),q=Object(b.a)(y,2),w=q[0],S=q[1],P=Object(h.a)();Object(n.useEffect)((function(e){console.log(a)}),[a]);var F=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,i,a,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=w){e.next=6;break}return e.next=4,k(x);case 4:n=e.sent,S(n);case 6:return i=n.map((function(e){return e.file})),console.log("imhere"),e.next=10,N(Object(u.a)({assets:i},t));case 10:a=e.sent,s=a.result,(o=a.error)&&Object.entries(o).forEach((function(e){var r=Object(b.a)(e,2),t=r[0],n=r[1];c(t,{type:"server",message:n})})),s&&r.push("/success");case 15:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(O.jsx)("form",{onSubmit:i(F),children:Object(O.jsxs)("div",{className:"formFields",children:[C({control:o,errors:a,t:P,name:"firstName",label:"register.first_name.title",rules:{required:P({id:"register.first_name.required"})}}),C({control:o,errors:a,t:P,name:"lastName",label:"register.last_name.title",rules:{required:P({id:"register.last_name.required"})}}),C({control:o,errors:a,t:P,name:"phone",label:"register.phone.title",rules:{required:P({id:"register.phone.required"}),pattern:{value:/^\d+$/i,message:P({id:"register.phone.invalid"})}}}),C({control:o,errors:a,t:P,name:"secondary_phone",label:"register.secondary_phone.title",rules:{pattern:{value:/^\d*$/i,message:P({id:"register.secondary_phone.invalid"})}}}),C({control:o,errors:a,t:P,name:"bike_id",label:"register.bike_id.title",rules:{required:P({id:"register.bike_id.required"})}}),C({control:o,errors:a,t:P,name:"city",label:"register.city.title",rules:{required:P({id:"register.city.required"})}}),C({control:o,errors:a,t:P,name:"brand",label:"register.brand.title",rules:{required:P({id:"register.brand.required"})}}),C({control:o,errors:a,t:P,name:"color",label:"register.color.title",rules:{required:P({id:"register.color.required"})}}),Object(O.jsx)("div",{children:Object(O.jsx)(g,{files:x,onFileChanged:v})}),Object(O.jsx)("div",{className:"spacer"}),Object(O.jsx)("div",{children:Object(O.jsx)(_.a,{variant:"contained",fullWidth:!0,color:"primary",disabled:j,type:"submit",children:"Submit"})})]})})})),F=t(65),R=t.n(F),B=t(230),T=t(98),D=t.n(T),A=R()((function(e){return{root:{margin:e.spacing(2)},searchRoot:{height:"30%",display:"flex",flexDirection:"column"},searchInput:{margin:e.spacing(2)},searchButton:{},bikesRoot:{display:"flex",flexDirection:"column"},buttonProgress:{color:D.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},searchContainer:{width:"50%",margin:"auto",position:"relative"}}})),L=function(e){var r=A(),t=Object(h.a)(),i=Object(n.useState)(""),a=Object(b.a)(i,2),s=a[0],c=a[1],o=Object(n.useState)(!1),u=Object(b.a)(o,2),p=u[0],j=u[1],m=Object(n.useState)(null),f=Object(b.a)(m,2),g=f[0],x=f[1],v=Object(n.useState)(null),y=Object(b.a)(v,2),k=y[0],N=y[1],S=function(){var e=Object(d.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),N(null),x(null),e.next=5,q(s);case 5:r=e.sent,setTimeout((function(){r||N("Cant find bike with serial: ".concat(s)),x(r),j(!1)}),2e3);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:r.root,children:[Object(O.jsxs)("div",{className:r.searchRoot,children:[Object(O.jsx)(w.a,{className:r.searchInput,label:"Bike Serial Number",error:!!k,helperText:k,onChange:function(e){return c(e.target.value)},value:s}),Object(O.jsxs)("div",{className:r.searchContainer,children:[Object(O.jsx)(_.a,{className:r.searchButton,variant:"contained",fullWidth:!0,color:"primary",disabled:p,onClick:S,children:"Search!"}),p&&Object(O.jsx)(B.a,{size:24,className:r.buttonProgress})]})]}),g&&Object(O.jsx)("div",{className:r.bikesRoot,children:Object.entries(g).map((function(e){var r=Object(b.a)(e,2),n=r[0],i=r[1];return Object(O.jsxs)("div",{children:[t({id:"result.".concat(n)}),": ",i]},n)}))})]})},J=function(e){return Object(O.jsx)("div",{children:"Home"})},z=t(231),E=t(232),G=t(233),I=t(99),W=t.n(I),Z=t(89),M=t(241),Q=t(228),V=t(234),$=t(235),H=t(100),K=t.n(H),U=t(236),Y=t(101),X=t.n(Y),ee=t(102),re=t.n(ee),te=R()((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250}}})),ne={"/register":"path.register.title","/search":"path.search.title"},ie=Object(c.f)((function(e){var r=e.history,t=e.location,i=Object(h.a)(),a=te(),s=Object(n.useState)(!1),c=Object(b.a)(s,2),o=c[0],l=c[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z.a,{position:"static",children:Object(O.jsxs)(E.a,{children:[Object(O.jsx)(G.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return l(!0)},children:Object(O.jsx)(W.a,{})}),Object(O.jsx)(Z.a,{variant:"h6",className:a.title,children:i({id:ne[t.pathname]||"path.home"})})]})}),Object(O.jsx)(M.a,{anchor:"left",open:o,children:Object(O.jsx)("div",{className:a.list,role:"presentation",onClick:function(){return l(!1)},onKeyDown:function(){return l(!1)},children:Object(O.jsxs)(Q.a,{children:[Object(O.jsxs)(V.a,{button:!0,onClick:function(){return r.push("/search")},children:[Object(O.jsx)($.a,{children:Object(O.jsx)(K.a,{})}),Object(O.jsx)(U.a,{primary:i({id:"path.search.title"})})]},"search"),Object(O.jsxs)(V.a,{button:!0,onClick:function(){return r.push("/register")},children:[Object(O.jsx)($.a,{children:Object(O.jsx)(X.a,{})}),Object(O.jsx)(U.a,{primary:i({id:"path.register.title"})})]},"register"),Object(O.jsxs)(V.a,{button:!0,children:[Object(O.jsx)($.a,{children:Object(O.jsx)(re.a,{})}),Object(O.jsx)(U.a,{primary:i({id:"path.report.title"})})]},"report")]})})})]})})),ae=function(){return Object(O.jsx)("div",{children:"Good Job"})};var se=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(s.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(ie,{}),Object(O.jsxs)(c.c,{children:[Object(O.jsx)(c.a,{path:"/success",component:ae}),Object(O.jsx)(c.a,{path:"/register",component:P}),Object(O.jsx)(c.a,{path:"/search",component:L}),Object(O.jsx)(c.a,{component:J})]})]})})})},ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,243)).then((function(r){var t=r.getCLS,n=r.getFID,i=r.getFCP,a=r.getLCP,s=r.getTTFB;t(e),n(e),i(e),a(e),s(e)}))},oe=t(239),le=t(131),ue=t(237),de={en:le},be=navigator.language.split(/[-_]/)[0];a.a.render(Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ue.a,{}),Object(O.jsx)(oe.a,{locale:"en",messages:de[be],defaultLocale:"en",children:Object(O.jsx)(se,{})})]}),document.getElementById("root")),ce()}},[[199,1,2]]]);
//# sourceMappingURL=main.08ab2c00.chunk.js.map