(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"CFN+":function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var o=n("SVse"),c=n("iInd"),r=n("QHOK"),i=n("XNiG"),s=n("LRne"),a=n("HDdC"),l=(n("jtHE"),n("5yfJ"),n("EY2u"),n("pLZG"));n("vkgz"),n("IzEk"),n("5+tZ"),n("lJxs"),n("JIr8"),n("eIep"),n("JX91"),n("7o/Q"),n("D0XW"),n("w1tV");var d=n("8Y7J");function u(t){return Boolean(t.parentElement&&"picture"===t.parentElement.nodeName.toLowerCase())}function b(t){return"img"===t.nodeName.toLowerCase()}function g(t,e,n){return b(t)?n&&"srcset"in t?t.srcset=e:t.src=e:t.style.backgroundImage=`url('${e}')`,t}function p(t){return e=>{const n=e.parentElement.getElementsByTagName("source");for(let o=0;o<n.length;o++){const e=n[o].getAttribute(t);e&&("srcset"in n[o]?n[o].srcset=e:n[o].src=e)}}}const m=p("defaultImage"),h=p("lazyLoad"),f=p("errorImage");function v(t){return(e,n,o)=>{b(e)&&u(e)&&t(e),n&&g(e,n,o)}}const O=v(m),y=v(h),w=v(f);function P(t,e){t.className=t.className.replace(e,"")}function M(t,e){t.className.includes(e)||(t.className+=" "+e)}let C=(()=>{class t extends class extends class{constructor(){this.navigator="undefined"!=typeof window?window.navigator:void 0}setPlatformId(t){this.platformId=t}onDestroy(t){}onAttributeChange(t){}}{setup(t){var e;O(t.element,t.defaultImagePath,t.useSrcset),M(t.element,"ng-lazyloading"),(e=t.element).className&&e.className.includes("ng-lazyloaded")&&P(t.element,"ng-lazyloaded")}finally(t){M(t.element,"ng-lazyloaded"),P(t.element,"ng-lazyloading")}loadImage(t){if(this.skipLazyLoading(t))return[t.imagePath];const{element:e,useSrcset:n,imagePath:o,decode:c}=t;let r;if(b(e)&&u(e)){const t=e.parentNode.cloneNode(!0);r=t.getElementsByTagName("img")[0],h(r),g(r,o,n)}else r=new Image,b(e)&&e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),b(e)&&e.sizes&&(r.sizes=e.sizes),n&&"srcset"in r?r.srcset=o:r.src=o;return c&&r.decode?r.decode().then(()=>o):new Promise((t,e)=>{r.onload=()=>t(o),r.onerror=()=>e(null)})}setErrorImage(t,e){const{element:n,useSrcset:o,errorImagePath:c}=e;w(n,c,o),M(n,"ng-failed-lazyloaded")}setLoadedImage(t,e){const{element:n,useSrcset:o}=e;y(n,t,o)}isDisabled(){return Object(o.y)(this.platformId)&&!this.isBot()}skipLazyLoading(t){return this.isBot(t)}isBot(t){var e;return!!(null===(e=this.navigator)||void 0===e?void 0:e.userAgent)&&/googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot/i.test(this.navigator.userAgent)}}{constructor(){super(...arguments),this.observers=new WeakMap,this.intersectionSubject=new i.a,this.uniqKey={}}getObservable(t){if(this.skipLazyLoading(t))return Object(s.a)({isIntersecting:!0});if(t.customObservable)return t.customObservable;const e=t.scrollContainer||this.uniqKey,n={root:t.scrollContainer||null};t.offset&&(n.rootMargin=t.offset+"px");let o=this.observers.get(e);return o||(o=new IntersectionObserver(t=>this.loadingCallback(t),n),this.observers.set(e,o)),o.observe(t.element),a.a.create(e=>{const n=this.intersectionSubject.pipe(Object(l.a)(e=>e.target===t.element)).subscribe(e);return()=>{n.unsubscribe(),o.unobserve(t.element)}})}isVisible(t){return t.isIntersecting}loadingCallback(t){t.forEach(t=>this.intersectionSubject.next(t))}}return t.\u0275fac=function(e){return _(e||t)},t.\u0275prov=d.Qb({token:t,factory:t.\u0275fac}),t})();const _=d.bc(C),I=new d.t("LazyLoadImageHooks");let k=(()=>{class t{}return t.\u0275mod=d.Sb({type:t}),t.\u0275inj=d.Rb({factory:function(e){return new(e||t)},providers:[{provide:I,useClass:C}]}),t})();var x=n("YfWO");let z=(()=>{class t{}return t.\u0275mod=d.Sb({type:t}),t.\u0275inj=d.Rb({factory:function(e){return new(e||t)},imports:[[c.h,o.c,x.a,r.h,k]]}),t})()},Dyj9:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var o=n("lJxs"),c=n("vkgz"),r=n("bTu8"),i=n("42op"),s=n("g0Ox"),a=n("Xchd"),l=n("ZXcA"),d=n("fMrl"),u=n("8Y7J"),b=n("ZUVw"),g=n("z8v2"),p=n("SVse"),m=n("XtQF"),h=n("3II9"),f=n("YXfc");function v(t,e){if(1&t&&u.Vb(0,"app-product",10),2&t){const t=u.ic().$implicit,e=u.ic(3);u.qc("code",t)("loja",e.loja)}}function O(t,e){1&t&&u.Mc(0,v,1,2,"ng-template",9)}function y(t,e){if(1&t&&(u.Zb(0,"div",2),u.Vb(1,"app-titulo",3),u.Zb(2,"swiper",4),u.Mc(3,O,1,0,void 0,5),u.Vb(4,"div",6),u.Vb(5,"div",7),u.Vb(6,"div",8),u.Yb(),u.Yb()),2&t){const t=u.ic().ngIf,e=u.ic();u.Gb(1),u.qc("titulo",e.title)("icon",e.icon)("link",e.link),u.Gb(1),u.qc("lazy",!0)("config",e.options),u.Gb(1),u.qc("ngForOf",t)("ngForTrackBy",e.trackBy)}}function w(t,e){if(1&t&&(u.Zb(0,"section"),u.Mc(1,y,7,7,"div",1),u.Yb()),2&t){const t=u.ic();u.Gb(1),u.qc("ngIf",t.total>0)}}r.a.use([i.a,s.a,a.a,l.a,d.a]);let P=(()=>{class t{constructor(t,e){this.db=t,this.storage=e,this.icon="",this.link="",this.title="",this.loja=[],this.total=0,this.options={freeMode:!0,spaceBetween:15,grabCursor:!0,slidesPerView:1.5,type:"progressbar",loop:!0,autoplay:{delay:1800},breakpoints:{360:{slidesPerView:2},768:{slidesPerView:3.5},1024:{slidesPerView:4.5},1200:{slidesPerView:5}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},this.getOfertas=t=>{let e=[];this.items$=this.storage.get("ofertas").pipe(Object(o.a)(n=>("slug"===this.type?e=null==n?void 0:n.filter(e=>e.slug===t):"campanha"===this.type?e=null==n?void 0:n.filter(e=>e.campanha===t):"departamento"===this.type&&(e=null==n?void 0:n.filter(e=>e.departamento===t)),null==e?void 0:e.slice(0,15))),Object(c.a)(t=>this.total=null==t?void 0:t.length))},this.trackBy=(t,e)=>e.host}ngOnInit(){this.getOfertas(this.code),this.storage.get("Loja").subscribe(t=>this.loja=t)}}return t.\u0275fac=function(e){return new(e||t)(u.Ub(b.a),u.Ub(g.a))},t.\u0275cmp=u.Ob({type:t,selectors:[["app-widget-ofertas"]],inputs:{icon:"icon",link:"link",title:"title",code:"code",type:"type",sector:"sector",data$:"data$"},decls:2,vars:3,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[3,"titulo","icon","link"],[3,"lazy","config"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"swiper-pagination"],[1,"swiper-button-next"],[1,"swiper-button-prev"],["swiperSlide",""],[3,"code","loja"]],template:function(t,e){1&t&&(u.Mc(0,w,2,1,"section",0),u.jc(1,"async")),2&t&&u.qc("ngIf",u.kc(1,1,e.items$))},directives:[p.n,m.a,h.a,p.m,h.c,f.a],pipes:[p.b],styles:["section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:2rem 0!important}.titulo-black[_ngcontent-%COMP%], .titulo-black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-red-primary)!important}.bg-black[_ngcontent-%COMP%]{background:var(--color-blue-primary)}@media (max-width:767px) and (orientation:landscape){#banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{min-width:100%!important}}@media (max-width:450px){.titulo-black[_ngcontent-%COMP%]{font-size:1.5rem;padding:0 15px}}@media (max-width:375px){.titulo-black[_ngcontent-%COMP%]{font-size:1.3rem}}"]}),t})()},E5c8:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("8Y7J");let c=(()=>{class t{constructor(t){this.el=t,this.srcAttr=null}ngAfterViewInit(){this.canLazyLoad()?this.lazyLoadImage():this.loadImage()}canLazyLoad(){return window&&"IntersectionObserver"in window}lazyLoadImage(){const t=new IntersectionObserver(e=>{e.forEach(({isIntersecting:e})=>{e&&(this.loadImage(),t.unobserve(this.el.nativeElement))})});t.observe(this.el.nativeElement)}loadImage(){this.srcAttr=this.src}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(o.o))},t.\u0275dir=o.Pb({type:t,selectors:[["img","LazyLoad",""]],hostVars:1,hostBindings:function(t,e){2&t&&o.Hb("src",e.srcAttr,o.Fc)},inputs:{src:"src"}}),t})()},IXEw:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n("8Y7J"),c=n("Dzqi"),r=n("SVse"),i=n("iInd"),s=n("QHOK");const a=function(t){return["/institucional/imprensa/",t]};function l(t,e){if(1&t&&(o.Zb(0,"a",4),o.Oc(1),o.Yb()),2&t){const t=e.$implicit;o.qc("routerLink",o.uc(2,a,t.slug)),o.Gb(1),o.Qc(" ",t.title," ")}}function d(t,e){if(1&t&&(o.Zb(0,"div",5),o.Vb(1,"img",6),o.Zb(2,"div",7),o.Zb(3,"h6",8),o.Oc(4),o.Yb(),o.Vb(5,"div",9),o.Yb(),o.Yb()),2&t){const t=e.$implicit;o.Gb(1),o.rc("alt",t.title),o.qc("src",t.thumbnail,o.Fc),o.Gb(3),o.Pc(t.title),o.Gb(1),o.qc("innerHTML",t.content,o.Ec)}}let u=(()=>{class t{constructor(t){this.news=t,this.trackById=(t,e)=>e[t]}ngOnInit(){this.items$=this.news.PageCollection("?include[]=97&include[]=104"),this.noticias$=this.news.LastNews(5)}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(c.a))},t.\u0275cmp=o.Ob({type:t,selectors:[["app-sidebar"]],decls:10,vars:8,consts:[[1,"news","mb-3"],[1,"b-07","border-bottom","pb-1","mb-3"],["routerLinkActive","router-link-active","class","waves-light f-09 b-07 text-muted pl-2 border-bottom pb-2 mb-2 text-justify","mdbWavesEffect","",3,"routerLink",4,"ngFor","ngForOf","ngForTrackBy"],["class","media border-bottom pb-3 mb-4",4,"ngFor","ngForOf","ngForTrackBy"],["routerLinkActive","router-link-active","mdbWavesEffect","",1,"waves-light","f-09","b-07","text-muted","pl-2","border-bottom","pb-2","mb-2","text-justify",3,"routerLink"],[1,"media","border-bottom","pb-3","mb-4"],[1,"d-flex","mr-3",3,"src","alt"],[1,"media-body"],[1,"mt-0","font-weight-bold"],[3,"innerHTML"]],template:function(t,e){1&t&&(o.Zb(0,"div",0),o.Zb(1,"h5",1),o.Oc(2,"\xdaltimas Noticias"),o.Yb(),o.Mc(3,l,2,4,"a",2),o.jc(4,"async"),o.Yb(),o.Zb(5,"div",0),o.Zb(6,"h5",1),o.Oc(7,"Joanir Zonta"),o.Yb(),o.Mc(8,d,6,4,"div",3),o.jc(9,"async"),o.Yb()),2&t&&(o.Gb(3),o.qc("ngForOf",o.kc(4,4,e.noticias$))("ngForTrackBy",e.trackById),o.Gb(5),o.qc("ngForOf",o.kc(9,6,e.items$))("ngForTrackBy",e.trackById))},directives:[r.m,i.g,i.f,s.v],pipes:[r.b],styles:[""]}),t})()},Jy8Y:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("iInd"),c=n("SVse"),r=n("QHOK"),i=n("8Y7J");let s=(()=>{class t{}return t.\u0275mod=i.Sb({type:t}),t.\u0275inj=i.Rb({factory:function(e){return new(e||t)},imports:[[c.c,o.h,r.h]]}),t})()},XtQF:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n("8Y7J"),c=n("SVse"),r=n("iInd");const i=function(t){return[t]};function s(t,e){if(1&t&&(o.Zb(0,"h2",2),o.Zb(1,"a",3),o.Vb(2,"i",4),o.Zb(3,"span"),o.Oc(4),o.Yb(),o.Yb(),o.Yb()),2&t){const t=o.ic();o.Gb(1),o.qc("routerLink",o.uc(5,i,t.link)),o.Gb(1),o.Jb("",t.icon," mr-2"),o.Gb(2),o.Pc(t.titulo)}}function a(t,e){if(1&t&&(o.Zb(0,"h2",5),o.Vb(1,"i",4),o.Zb(2,"span"),o.Oc(3),o.Yb(),o.Yb()),2&t){const t=o.ic();o.Gb(1),o.Jb("",t.icon," mr-2"),o.Gb(2),o.Pc(t.titulo)}}let l=(()=>{class t{constructor(){this.link=""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Ob({type:t,selectors:[["app-titulo"]],inputs:{titulo:"titulo",icon:"icon",link:"link"},decls:2,vars:2,consts:[["class","b-07 mb-4 pb-1 border-bottom",4,"ngIf"],["class","titulo-balck b-07 mb-4 pb-1 border-bottom",4,"ngIf"],[1,"b-07","mb-4","pb-1","border-bottom"],[3,"routerLink"],["aria-hidden","true"],[1,"titulo-balck","b-07","mb-4","pb-1","border-bottom"]],template:function(t,e){1&t&&(o.Mc(0,s,5,7,"h2",0),o.Mc(1,a,4,4,"h2",1)),2&t&&(o.qc("ngIf",e.link),o.Gb(1),o.qc("ngIf",!e.link))},directives:[c.n,r.g],styles:["a[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{color:var(--color-red-secondary)!important}@media (max-width:450px){h2[_ngcontent-%COMP%]{font-size:1.5rem;padding:0 15px}}@media (max-width:375px){h2[_ngcontent-%COMP%]{font-size:1.3rem}}"]}),t})()},YXfc:function(t,e,n){"use strict";n.d(e,"a",(function(){return M}));var o=n("cxbk"),c=n("8Y7J"),r=n("iInd"),i=n("GOo+"),s=n("8YIC"),a=n("z8v2"),l=n("SVse");let d=(()=>{class t{constructor(t){this.el=t,this.srcAttr=null}ngAfterViewInit(){this.canLazyLoad()?this.lazyLoadImage():this.loadImage()}canLazyLoad(){return window&&"IntersectionObserver"in window}lazyLoadImage(){const t=new IntersectionObserver(e=>{e.forEach(({isIntersecting:e})=>{e&&(this.loadImage(),t.unobserve(this.el.nativeElement))})});t.observe(this.el.nativeElement)}loadImage(){this.srcAttr=`${o.a.v1.url}/Containers/webp/download/${this.src}.webp`}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(c.o))},t.\u0275dir=c.Pb({type:t,selectors:[["source","webpProduct",""]],hostVars:1,hostBindings:function(t,e){2&t&&c.Hb("srcset",e.srcAttr,c.Fc)},inputs:{src:"src"}}),t})();var u=n("nJ/e");let b=(()=>{class t{transform(t,e=35,n=!1,o="..."){return t=""+t,n&&(e=t.substr(0,e).lastIndexOf(" ")),(null==t?void 0:t.length)>e?t.substr(0,e)+o:t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Tb({name:"truncate",type:t,pure:!0}),t})();function g(t,e){1&t&&(c.Zb(0,"div",20),c.Zb(1,"p"),c.Oc(2,"+18"),c.Yb(),c.Yb())}function p(t,e){1&t&&(c.Zb(0,"div",21),c.Zb(1,"p"),c.Oc(2,"KIT"),c.Yb(),c.Yb())}function m(t,e){1&t&&c.Vb(0,"img",22)}function h(t,e){1&t&&c.Vb(0,"img",23)}function f(t,e){1&t&&c.Vb(0,"div")}function v(t,e){1&t&&c.Vb(0,"div",24)}const O=function(t){return[t,"R$","symbol","1.2-2","pt"]};function y(t,e){if(1&t&&(c.Zb(0,"div",28),c.Zb(1,"p"),c.Oc(2),c.jc(3,"currency"),c.Yb(),c.Yb()),2&t){const t=c.ic(2);c.Gb(2),c.Rc(" ",t.code.qtd_clube||0,"x de ",c.nc(3,2,c.uc(8,O,t.code.parcela_clube||0))," no cart\xe3o Condor. ")}}function w(t,e){if(1&t&&(c.Zb(0,"div",25),c.Zb(1,"p",26),c.Oc(2),c.jc(3,"currency"),c.Zb(4,"span"),c.Oc(5),c.Yb(),c.Yb(),c.Mc(6,y,4,10,"div",27),c.Yb()),2&t){const t=c.ic(),e=c.Ac(33);c.Gb(2),c.Qc(" ",c.nc(3,4,c.uc(10,O,t.code.preco_clube||0))," "),c.Gb(3),c.Pc(t.code.produtos.embalagem),c.Gb(1),c.qc("ngIf",t.code.parcela_clube)("ngIfElse",e)}}function P(t,e){1&t&&c.Vb(0,"div",16)}let M=(()=>{class t{constructor(t,e,n,o){this.router=t,this.seo=e,this.util=n,this.storageMap=o,this.code=[],this.loja=[],this.mas18="Aprecie com modera\xe7\xe3o. \xc9 proibida a venda de bebidas alco\xf3licas a menores de 18 anos (Lei n\xba 8.069/90 Art.81, Estatuto da Crian\xe7a e do Adolescente).",this.webp="",this.image="",this.product=[],this.imagem=[],this.goToProduct=()=>{this.seo.dataLayerTracking({event:"productInteraction",productAction:"Visualizar Produto",productName:this.code.produtos.dsc_produto}),this.router.navigate(["produto",this.util.toSlug(this.code.produtos.dsc_departamento),this.util.toSlug(this.code.produtos.dsc_setor),this.code.produtos.slug])}}ngOnInit(){this.webp=`${o.a.v1.url}/Containers/webp/download/${this.code.host}.webp`,this.webp=`${o.a.v1.url}/Containers/produtos/download/${this.code.host}.jpg`,this.product=this.code.produtos,this.storageMap.watch("Loja").subscribe(t=>{this.loja=t||{loja:0,slug:"",nome:""}})}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(r.d),c.Ub(i.a),c.Ub(s.a),c.Ub(a.a))},t.\u0275cmp=c.Ob({type:t,selectors:[["app-product"]],inputs:{code:"code",loja:"loja"},decls:34,vars:34,consts:[[1,"product",3,"click"],[1,"message"],["class","mas18",4,"ngIf"],["class","kit",4,"ngIf"],[1,"images"],["webpProduct","","type","image/webp",3,"src"],["appProduct","","width","500","height","500",3,"src","alt"],[1,"promotion"],["Lazy","","src","./assets/images/clube.png","alt","Tag Clube Condor","class","selo_clube","width","500","height","500",4,"ngIf"],["Lazy","","src","./assets/images/selo_ddv.png","alt","Dinheiro de Volta","class","selo_ddv",4,"ngIf"],[1,"content"],[1,"title"],[1,"regular"],[4,"ngIf"],["style","height: 54px;",4,"ngIf"],[3,"ngClass"],[2,"height","18px"],["class","clube",4,"ngIf"],[1,"validade"],["semParcela",""],[1,"mas18"],[1,"kit"],["Lazy","","src","./assets/images/clube.png","alt","Tag Clube Condor","width","500","height","500",1,"selo_clube"],["Lazy","","src","./assets/images/selo_ddv.png","alt","Dinheiro de Volta",1,"selo_ddv"],[2,"height","54px"],[1,"clube"],[1,"price"],["class","parcela",4,"ngIf","ngIfElse"],[1,"parcela"]],template:function(t,e){1&t&&(c.Zb(0,"div",0),c.gc("click",(function(){return e.goToProduct()})),c.Zb(1,"div",1),c.Mc(2,g,3,0,"div",2),c.Mc(3,p,3,0,"div",3),c.Yb(),c.Zb(4,"div",4),c.Zb(5,"picture"),c.Vb(6,"source",5),c.Vb(7,"img",6),c.Yb(),c.Zb(8,"div",7),c.Mc(9,m,1,0,"img",8),c.Mc(10,h,1,0,"img",9),c.Yb(),c.Yb(),c.Zb(11,"div",10),c.Zb(12,"p",11),c.Oc(13),c.jc(14,"truncate"),c.Yb(),c.Zb(15,"div",12),c.Mc(16,f,1,0,"div",13),c.Mc(17,v,1,0,"div",14),c.Zb(18,"p",15),c.Oc(19),c.jc(20,"currency"),c.Zb(21,"span"),c.Oc(22),c.Yb(),c.Yb(),c.Vb(23,"div",16),c.Yb(),c.Mc(24,w,7,12,"div",17),c.Zb(25,"div",18),c.Zb(26,"p"),c.Oc(27),c.jc(28,"date"),c.jc(29,"date"),c.Vb(30,"br"),c.Oc(31),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Mc(32,P,1,0,"ng-template",null,19,c.Nc)),2&t&&(c.Gb(2),c.qc("ngIf",e.code.image===e.mas18),c.Gb(1),c.qc("ngIf",e.code.kit),c.Gb(3),c.qc("src",e.code.host,c.Fc),c.Gb(1),c.qc("src",e.code.host,c.Fc)("alt",e.code.produtos.dsc_produto),c.Gb(2),c.qc("ngIf",e.code.preco_clube),c.Gb(1),c.qc("ngIf",e.code.preco_cashback),c.Gb(3),c.Pc(c.lc(14,17,e.code.produtos.dsc_produto,70)),c.Gb(3),c.qc("ngIf",!e.code.preco_clube),c.Gb(1),c.qc("ngIf",!e.code.preco_clube),c.Gb(1),c.qc("ngClass",e.code.preco_clube?"price-clube":"price-normal"),c.Gb(1),c.Qc(" ",c.nc(20,20,c.uc(32,O,e.code.preco_regular||0))," "),c.Gb(3),c.Pc(e.code.produtos.embalagem),c.Gb(2),c.qc("ngIf",e.code.preco_clube),c.Gb(3),c.Rc(" Oferta V\xe1lida de ",c.lc(28,26,e.code.produtos.start,"dd/MM/yyyy")," a ",c.lc(29,29,e.code.produtos.end,"dd/MM/yyyy")," "),c.Gb(4),c.Qc("",e.loja.nome," "))},directives:[l.n,d,u.a,l.l],pipes:[b,l.d,l.f],styles:[".product[_ngcontent-%COMP%]{color:var(--product-text);position:relative;border-radius:10px;background-color:var(--product-background);box-shadow:2px 3px 4px rgba(0,0,0,.2)}.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .mas18[_ngcontent-%COMP%]{border-radius:10px 0 0 0;position:absolute;background-color:var(--product-mas18);width:auto;height:30px;top:0;left:0}.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .mas18[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:3px;padding:0 10px;font-weight:600;font-size:1rem;text-align:center;margin-bottom:0;color:var(--product-color-text-mas18)}.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .kit[_ngcontent-%COMP%]{border-radius:0 10px 0 0;position:absolute;background-color:var(--product-kit);width:auto;height:30px;top:0;right:0}.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .kit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:3px;padding:0 10px;font-weight:600;font-size:1rem;text-align:center;margin-bottom:0;color:var(--product-color-text-mas18)}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{text-align:center}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%]{position:relative}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%]   .selo_clube[_ngcontent-%COMP%]{position:absolute;bottom:0;right:10px;width:40px;height:auto}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%]   .selo_ddv[_ngcontent-%COMP%]{position:absolute;bottom:40px;right:10px;width:40px;height:auto}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:1rem 0;height:130px;width:auto;margin:0 auto}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:.35rem}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{min-height:48px}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]{margin-bottom:0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]   .price-normal[_ngcontent-%COMP%]{font-weight:800;font-size:1.2rem;margin-bottom:0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]   .price-clube[_ngcontent-%COMP%]{font-weight:500;font-size:.85rem}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .clube[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:800;margin-bottom:0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .clube[_ngcontent-%COMP%]   .parcela[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;font-size:.75rem;margin-bottom:0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%]{margin:.2rem 0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-bottom:0;font-size:.65rem}"]}),t})()},"nJ/e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("cxbk"),c=n("8Y7J");let r=(()=>{class t{constructor(t){this.el=t,this.srcAttr=null}ngAfterViewInit(){this.canLazyLoad()?this.lazyLoadImage():this.loadImage()}canLazyLoad(){return window&&"IntersectionObserver"in window}lazyLoadImage(){const t=new IntersectionObserver(e=>{e.forEach(({isIntersecting:e})=>{e&&(this.loadImage(),t.unobserve(this.el.nativeElement))})});t.observe(this.el.nativeElement)}loadImage(){this.srcAttr=`${o.a.v1.url}/Containers/produtos/download/${this.src}.jpg`}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(c.o))},t.\u0275dir=c.Pb({type:t,selectors:[["img","appProduct",""]],hostVars:1,hostBindings:function(t,e){2&t&&c.Hb("src",e.srcAttr,c.Fc)},inputs:{src:"src"}}),t})()},oeKb:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("8Y7J"),c=n("cUpR");let r=(()=>{class t{constructor(t){this.sanitizer=t}transform(t,e){switch(e){case"html":return this.sanitizer.bypassSecurityTrustHtml(t);case"style":return this.sanitizer.bypassSecurityTrustStyle(t);case"script":return this.sanitizer.bypassSecurityTrustScript(t);case"url":return this.sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error("Invalid safe type specified: "+e)}}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(c.b))},t.\u0275pipe=o.Tb({name:"safe",type:t,pure:!0}),t})()},zEFZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("CFN+"),c=n("SVse"),r=n("3II9"),i=n("8Y7J");let s=(()=>{class t{}return t.\u0275mod=i.Sb({type:t}),t.\u0275inj=i.Rb({factory:function(e){return new(e||t)},imports:[[r.b,c.c,o.a]]}),t})()}}]);
//# sourceMappingURL=common-es2015.cde7d1d171d04ead807b.js.map