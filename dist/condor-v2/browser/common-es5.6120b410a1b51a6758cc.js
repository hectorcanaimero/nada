!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=a(t);if(n){var r=a(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return i(this,e)}}function i(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"CFN+":function(n,r,i){"use strict";i.d(r,"a",(function(){return E}));var a=i("SVse"),s=i("iInd"),u=i("QHOK"),l=i("XNiG"),d=i("LRne"),f=i("HDdC"),p=(i("jtHE"),i("5yfJ"),i("EY2u"),i("pLZG"));i("vkgz"),i("IzEk"),i("5+tZ"),i("lJxs"),i("JIr8"),i("eIep"),i("JX91"),i("7o/Q"),i("D0XW"),i("w1tV");var b=i("8Y7J");function g(t){return Boolean(t.parentElement&&"picture"===t.parentElement.nodeName.toLowerCase())}function m(t){return"img"===t.nodeName.toLowerCase()}function v(t,n,e){return m(t)?e&&"srcset"in t?t.srcset=n:t.src=n:t.style.backgroundImage="url('".concat(n,"')"),t}function h(t){return function(n){for(var e=n.parentElement.getElementsByTagName("source"),o=0;o<e.length;o++){var r=e[o].getAttribute(t);r&&("srcset"in e[o]?e[o].srcset=r:e[o].src=r)}}}var y=h("defaultImage"),O=h("lazyLoad"),k=h("errorImage");function _(t){return function(n,e,o){m(n)&&g(n)&&t(n),e&&v(n,e,o)}}var w=_(y),P=_(O),C=_(k);function M(t,n){t.className=t.className.replace(n,"")}function I(t,n){t.className.includes(n)||(t.className+=" "+n)}var x,z,L,Z=((x=function(n){o(i,n);var r=c(i);function i(){var n;return t(this,i),(n=r.apply(this,arguments)).observers=new WeakMap,n.intersectionSubject=new l.a,n.uniqKey={},n}return e(i,[{key:"getObservable",value:function(t){var n=this;if(this.skipLazyLoading(t))return Object(d.a)({isIntersecting:!0});if(t.customObservable)return t.customObservable;var e=t.scrollContainer||this.uniqKey,o={root:t.scrollContainer||null};t.offset&&(o.rootMargin=t.offset+"px");var r=this.observers.get(e);return r||(r=new IntersectionObserver((function(t){return n.loadingCallback(t)}),o),this.observers.set(e,r)),r.observe(t.element),f.a.create((function(e){var o=n.intersectionSubject.pipe(Object(p.a)((function(n){return n.target===t.element}))).subscribe(e);return function(){o.unsubscribe(),r.unobserve(t.element)}}))}},{key:"isVisible",value:function(t){return t.isIntersecting}},{key:"loadingCallback",value:function(t){var n=this;t.forEach((function(t){return n.intersectionSubject.next(t)}))}}]),i}(function(n){o(i,n);var r=c(i);function i(){return t(this,i),r.apply(this,arguments)}return e(i,[{key:"setup",value:function(t){var n;w(t.element,t.defaultImagePath,t.useSrcset),I(t.element,"ng-lazyloading"),(n=t.element).className&&n.className.includes("ng-lazyloaded")&&M(t.element,"ng-lazyloaded")}},{key:"finally",value:function(t){I(t.element,"ng-lazyloaded"),M(t.element,"ng-lazyloading")}},{key:"loadImage",value:function(t){if(this.skipLazyLoading(t))return[t.imagePath];var n,e=t.element,o=t.useSrcset,r=t.imagePath,c=t.decode;if(m(e)&&g(e)){var i=e.parentNode.cloneNode(!0);n=i.getElementsByTagName("img")[0],O(n),v(n,r,o)}else n=new Image,m(e)&&e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),m(e)&&e.sizes&&(n.sizes=e.sizes),o&&"srcset"in n?n.srcset=r:n.src=r;return c&&n.decode?n.decode().then((function(){return r})):new Promise((function(t,e){n.onload=function(){return t(r)},n.onerror=function(){return e(null)}}))}},{key:"setErrorImage",value:function(t,n){var e=n.element,o=n.useSrcset,r=n.errorImagePath;C(e,r,o),I(e,"ng-failed-lazyloaded")}},{key:"setLoadedImage",value:function(t,n){var e=n.element,o=n.useSrcset;P(e,t,o)}},{key:"isDisabled",value:function(){return Object(a.y)(this.platformId)&&!this.isBot()}},{key:"skipLazyLoading",value:function(t){return this.isBot(t)}},{key:"isBot",value:function(t){var n;return!!(null===(n=this.navigator)||void 0===n?void 0:n.userAgent)&&/googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot/i.test(this.navigator.userAgent)}}]),i}(function(){function n(){t(this,n),this.navigator="undefined"!=typeof window?window.navigator:void 0}return e(n,[{key:"setPlatformId",value:function(t){this.platformId=t}},{key:"onDestroy",value:function(t){}},{key:"onAttributeChange",value:function(t){}}]),n}()))).\u0275fac=function(t){return V(t||x)},x.\u0275prov=b.Qb({token:x,factory:x.\u0275fac}),x),V=b.cc(Z),G=new b.t("LazyLoadImageHooks"),j=((z=function n(){t(this,n)}).\u0275mod=b.Sb({type:z}),z.\u0275inj=b.Rb({factory:function(t){return new(t||z)},providers:[{provide:G,useClass:Z}]}),z),S=i("YfWO"),E=((L=function n(){t(this,n)}).\u0275mod=b.Sb({type:L}),L.\u0275inj=b.Rb({factory:function(t){return new(t||L)},imports:[[s.h,a.c,S.a,u.h,j]]}),L)},Dyj9:function(n,o,r){"use strict";r.d(o,"a",(function(){return P}));var c=r("lJxs"),i=r("vkgz"),a=r("bTu8"),s=r("42op"),u=r("g0Ox"),l=r("Xchd"),d=r("ZXcA"),f=r("fMrl"),p=r("8Y7J"),b=r("ZUVw"),g=r("z8v2"),m=r("SVse"),v=r("XtQF"),h=r("3II9"),y=r("YXfc");function O(t,n){if(1&t&&p.Vb(0,"app-product",10),2&t){var e=p.kc().$implicit,o=p.kc(3);p.sc("code",e)("loja",o.loja)}}function k(t,n){1&t&&p.Oc(0,O,1,2,"ng-template",9)}function _(t,n){if(1&t&&(p.ac(0,"div",2),p.Vb(1,"app-titulo",3),p.ac(2,"swiper",4),p.Oc(3,k,1,0,void 0,5),p.Vb(4,"div",6),p.Vb(5,"div",7),p.Vb(6,"div",8),p.Zb(),p.Zb()),2&t){var e=p.kc().ngIf,o=p.kc();p.Gb(1),p.sc("titulo",o.title)("icon",o.icon)("link",o.link),p.Gb(1),p.sc("lazy",!1)("config",o.options),p.Gb(1),p.sc("ngForOf",e)("ngForTrackBy",o.trackBy)}}function w(t,n){if(1&t&&(p.ac(0,"section"),p.Oc(1,_,7,7,"div",1),p.Zb()),2&t){var e=p.kc();p.Gb(1),p.sc("ngIf",e.total>0)}}a.a.use([s.a,u.a,l.a,d.a,f.a]);var P=function(){var n=function(){function n(e,o){var r=this;t(this,n),this.db=e,this.storage=o,this.icon="",this.link="",this.title="",this.loja=[],this.total=0,this.options={freeMode:!0,spaceBetween:15,grabCursor:!0,slidesPerView:1.5,type:"progressbar",loop:!0,autoplay:{delay:1800},breakpoints:{360:{slidesPerView:2},768:{slidesPerView:3.5},1024:{slidesPerView:4.5},1200:{slidesPerView:5}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},this.getOfertas=function(t){var n=[];r.items$=r.db.getOfertas$().pipe(Object(c.a)((function(e){return"slug"===r.type?n=null==e?void 0:e.filter((function(n){return n.slug===t})):"campanha"===r.type?n=null==e?void 0:e.filter((function(n){return n.campanha===t})):"departamento"===r.type&&(n=null==e?void 0:e.filter((function(n){return n.departamento===t}))),null==n?void 0:n.slice(0,15)})),Object(i.a)((function(t){return r.total=null==t?void 0:t.length})))},this.trackBy=function(t,n){return n[t]}}return e(n,[{key:"ngOnInit",value:function(){var t=this;this.getOfertas(this.code),this.storage.get("Loja").subscribe((function(n){return t.loja=n}))}}]),n}();return n.\u0275fac=function(t){return new(t||n)(p.Ub(b.a),p.Ub(g.a))},n.\u0275cmp=p.Ob({type:n,selectors:[["app-widget-ofertas"]],inputs:{icon:"icon",link:"link",title:"title",code:"code",type:"type",sector:"sector"},decls:2,vars:3,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[3,"titulo","icon","link"],[3,"lazy","config"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"swiper-pagination"],[1,"swiper-button-next"],[1,"swiper-button-prev"],["swiperSlide",""],[3,"code","loja"]],template:function(t,n){1&t&&(p.Oc(0,w,2,1,"section",0),p.lc(1,"async")),2&t&&p.sc("ngIf",p.mc(1,1,n.items$))},directives:[m.n,v.a,h.a,m.m,h.c,y.a],pipes:[m.b],styles:["section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:2rem 0!important}.titulo-black[_ngcontent-%COMP%], .titulo-black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-red-primary)!important}.bg-black[_ngcontent-%COMP%]{background:var(--color-blue-primary)}@media (max-width:767px) and (orientation:landscape){#banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{min-width:100%!important}}@media (max-width:450px){.titulo-black[_ngcontent-%COMP%]{font-size:1.5rem;padding:0 15px}}@media (max-width:375px){.titulo-black[_ngcontent-%COMP%]{font-size:1.3rem}}"]}),n}()},E5c8:function(n,o,r){"use strict";r.d(o,"a",(function(){return i}));var c=r("8Y7J"),i=function(){var n=function(){function n(e){t(this,n),this.el=e,this.srcAttr=null}return e(n,[{key:"ngAfterViewInit",value:function(){this.canLazyLoad()?this.lazyLoadImage():this.loadImage()}},{key:"canLazyLoad",value:function(){return window&&"IntersectionObserver"in window}},{key:"lazyLoadImage",value:function(){var t=this,n=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(t.loadImage(),n.unobserve(t.el.nativeElement))}))}));n.observe(this.el.nativeElement)}},{key:"loadImage",value:function(){this.srcAttr=this.src}}]),n}();return n.\u0275fac=function(t){return new(t||n)(c.Ub(c.o))},n.\u0275dir=c.Pb({type:n,selectors:[["img","LazyLoad",""]],hostVars:1,hostBindings:function(t,n){2&t&&c.Hb("src",n.srcAttr,c.Hc)},inputs:{src:"src"}}),n}()},IXEw:function(n,o,r){"use strict";r.d(o,"a",(function(){return p}));var c=r("8Y7J"),i=r("Dzqi"),a=r("SVse"),s=r("iInd"),u=r("QHOK"),l=function(t){return["/institucional/imprensa/",t]};function d(t,n){if(1&t&&(c.ac(0,"a",4),c.Qc(1),c.Zb()),2&t){var e=n.$implicit;c.sc("routerLink",c.wc(2,l,e.slug)),c.Gb(1),c.Sc(" ",e.title," ")}}function f(t,n){if(1&t&&(c.ac(0,"div",5),c.Vb(1,"img",6),c.ac(2,"div",7),c.ac(3,"h6",8),c.Qc(4),c.Zb(),c.Vb(5,"div",9),c.Zb(),c.Zb()),2&t){var e=n.$implicit;c.Gb(1),c.tc("alt",e.title),c.sc("src",e.thumbnail,c.Hc),c.Gb(3),c.Rc(e.title),c.Gb(1),c.sc("innerHTML",e.content,c.Gc)}}var p=function(){var n=function(){function n(e){t(this,n),this.news=e,this.trackById=function(t,n){return n[t]}}return e(n,[{key:"ngOnInit",value:function(){this.items$=this.news.PageCollection("?include[]=97&include[]=104"),this.noticias$=this.news.LastNews(5)}}]),n}();return n.\u0275fac=function(t){return new(t||n)(c.Ub(i.a))},n.\u0275cmp=c.Ob({type:n,selectors:[["app-sidebar"]],decls:10,vars:8,consts:[[1,"news","mb-3"],[1,"b-07","border-bottom","pb-1","mb-3"],["routerLinkActive","router-link-active","class","waves-light f-09 b-07 text-muted pl-2 border-bottom pb-2 mb-2 text-justify","mdbWavesEffect","",3,"routerLink",4,"ngFor","ngForOf","ngForTrackBy"],["class","media border-bottom pb-3 mb-4",4,"ngFor","ngForOf","ngForTrackBy"],["routerLinkActive","router-link-active","mdbWavesEffect","",1,"waves-light","f-09","b-07","text-muted","pl-2","border-bottom","pb-2","mb-2","text-justify",3,"routerLink"],[1,"media","border-bottom","pb-3","mb-4"],[1,"d-flex","mr-3",3,"src","alt"],[1,"media-body"],[1,"mt-0","font-weight-bold"],[3,"innerHTML"]],template:function(t,n){1&t&&(c.ac(0,"div",0),c.ac(1,"h5",1),c.Qc(2,"\xdaltimas Noticias"),c.Zb(),c.Oc(3,d,2,4,"a",2),c.lc(4,"async"),c.Zb(),c.ac(5,"div",0),c.ac(6,"h5",1),c.Qc(7,"Joanir Zonta"),c.Zb(),c.Oc(8,f,6,4,"div",3),c.lc(9,"async"),c.Zb()),2&t&&(c.Gb(3),c.sc("ngForOf",c.mc(4,4,n.noticias$))("ngForTrackBy",n.trackById),c.Gb(5),c.sc("ngForOf",c.mc(9,6,n.items$))("ngForTrackBy",n.trackById))},directives:[a.m,s.g,s.f,u.v],pipes:[a.b],styles:[""]}),n}()},Jy8Y:function(n,e,o){"use strict";o.d(e,"a",(function(){return s}));var r=o("iInd"),c=o("SVse"),i=o("QHOK"),a=o("8Y7J"),s=function(){var n=function n(){t(this,n)};return n.\u0275mod=a.Sb({type:n}),n.\u0275inj=a.Rb({factory:function(t){return new(t||n)},imports:[[c.c,r.h,i.h]]}),n}()},XtQF:function(n,e,o){"use strict";o.d(e,"a",(function(){return l}));var r=o("8Y7J"),c=o("SVse"),i=o("iInd"),a=function(t){return[t]};function s(t,n){if(1&t&&(r.ac(0,"h2",2),r.ac(1,"a",3),r.Vb(2,"i",4),r.ac(3,"span"),r.Qc(4),r.Zb(),r.Zb(),r.Zb()),2&t){var e=r.kc();r.Gb(1),r.sc("routerLink",r.wc(5,a,e.link)),r.Gb(1),r.Jb("",e.icon," mr-2"),r.Gb(2),r.Rc(e.titulo)}}function u(t,n){if(1&t&&(r.ac(0,"h2",5),r.Vb(1,"i",4),r.ac(2,"span"),r.Qc(3),r.Zb(),r.Zb()),2&t){var e=r.kc();r.Gb(1),r.Jb("",e.icon," mr-2"),r.Gb(2),r.Rc(e.titulo)}}var l=function(){var n=function n(){t(this,n),this.link=""};return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Ob({type:n,selectors:[["app-titulo"]],inputs:{titulo:"titulo",icon:"icon",link:"link"},decls:2,vars:2,consts:[["class","b-07 mb-4 pb-1 border-bottom",4,"ngIf"],["class","titulo-balck b-07 mb-4 pb-1 border-bottom",4,"ngIf"],[1,"b-07","mb-4","pb-1","border-bottom"],[3,"routerLink"],["aria-hidden","true"],[1,"titulo-balck","b-07","mb-4","pb-1","border-bottom"]],template:function(t,n){1&t&&(r.Oc(0,s,5,7,"h2",0),r.Oc(1,u,4,4,"h2",1)),2&t&&(r.sc("ngIf",n.link),r.Gb(1),r.sc("ngIf",!n.link))},directives:[c.n,i.g],styles:["a[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{color:var(--color-red-secondary)!important}@media (max-width:450px){h2[_ngcontent-%COMP%]{font-size:1.5rem;padding:0 15px}}@media (max-width:375px){h2[_ngcontent-%COMP%]{font-size:1.3rem}}"]}),n}()},YXfc:function(n,o,r){"use strict";r.d(o,"a",(function(){return C}));var c,i=r("8Y7J"),a=r("iInd"),s=r("GOo+"),u=r("8YIC"),l=r("z8v2"),d=r("SVse"),f=r("nJ/e"),p=((c=function(){function n(){t(this,n)}return e(n,[{key:"transform",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35,e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...";return t=""+t,e&&(n=t.substr(0,n).lastIndexOf(" ")),(null==t?void 0:t.length)>n?t.substr(0,n)+o:t}}]),n}()).\u0275fac=function(t){return new(t||c)},c.\u0275pipe=i.Tb({name:"truncate",type:c,pure:!0}),c);function b(t,n){1&t&&(i.ac(0,"div",19),i.ac(1,"p"),i.Qc(2,"+18"),i.Zb(),i.Zb())}function g(t,n){1&t&&(i.ac(0,"div",20),i.ac(1,"p"),i.Qc(2,"KIT"),i.Zb(),i.Zb())}function m(t,n){1&t&&i.Vb(0,"img",21)}function v(t,n){1&t&&i.Vb(0,"img",22)}function h(t,n){1&t&&i.Vb(0,"div")}function y(t,n){1&t&&i.Vb(0,"div",23)}var O=function(t){return[t,"R$","symbol","1.2-2","pt"]};function k(t,n){if(1&t&&(i.ac(0,"div",27),i.ac(1,"p"),i.Qc(2),i.lc(3,"currency"),i.Zb(),i.Zb()),2&t){var e=i.kc(2);i.Gb(2),i.Tc(" ",e.code.qtd_clube||0,"x de ",i.pc(3,2,i.wc(8,O,e.code.parcela_clube||0))," no cart\xe3o Condor. ")}}function _(t,n){if(1&t&&(i.ac(0,"div",24),i.ac(1,"p",25),i.Qc(2),i.lc(3,"currency"),i.ac(4,"span"),i.Qc(5),i.Zb(),i.Zb(),i.Oc(6,k,4,10,"div",26),i.Zb()),2&t){var e=i.kc(),o=i.Cc(31);i.Gb(2),i.Sc(" ",i.pc(3,4,i.wc(10,O,e.code.preco_clube||0))," "),i.Gb(3),i.Rc(e.code.produtos.embalagem),i.Gb(1),i.sc("ngIf",e.code.parcela_clube)("ngIfElse",o)}}function w(t,n){1&t&&i.Vb(0,"div",15)}var P,C=((P=function(){function n(e,o,r,c){var i=this;t(this,n),this.router=e,this.seo=o,this.util=r,this.storageMap=c,this.code=[],this.loja=[],this.mas18="Aprecie com modera\xe7\xe3o. \xc9 proibida a venda de bebidas alco\xf3licas a menores de 18 anos (Lei n\xba 8.069/90 Art.81, Estatuto da Crian\xe7a e do Adolescente).",this.product=[],this.imagem=[],this.goToProduct=function(){i.seo.dataLayerTracking({event:"productInteraction",productAction:"Visualizar Produto",productName:i.code.produtos.dsc_produto}),i.router.navigate(["produto",i.util.toSlug(i.code.produtos.dsc_departamento),i.util.toSlug(i.code.produtos.dsc_setor),i.code.produtos.slug])}}return e(n,[{key:"ngOnInit",value:function(){var t=this;this.product=this.code.produtos,this.storageMap.watch("Loja").subscribe((function(n){t.loja=n||{loja:0,slug:"",nome:""}}))}}]),n}()).\u0275fac=function(t){return new(t||P)(i.Ub(a.d),i.Ub(s.a),i.Ub(u.a),i.Ub(l.a))},P.\u0275cmp=i.Ob({type:P,selectors:[["app-product"]],inputs:{code:"code",loja:"loja"},decls:32,vars:33,consts:[[1,"product",3,"click"],[1,"message"],["class","mas18",4,"ngIf"],["class","kit",4,"ngIf"],[1,"images"],["appProduct","",3,"src","alt"],[1,"promotion"],["Lazy","","src","./assets/images/clube.png","alt","Tag Clube Condor","class","selo_clube",4,"ngIf"],["Lazy","","src","./assets/images/selo_ddv.png","alt","Dinheiro de Volta","class","selo_ddv",4,"ngIf"],[1,"content"],[1,"title"],[1,"regular"],[4,"ngIf"],["style","height: 54px;",4,"ngIf"],[3,"ngClass"],[2,"height","18px"],["class","clube",4,"ngIf"],[1,"validade"],["semParcela",""],[1,"mas18"],[1,"kit"],["Lazy","","src","./assets/images/clube.png","alt","Tag Clube Condor",1,"selo_clube"],["Lazy","","src","./assets/images/selo_ddv.png","alt","Dinheiro de Volta",1,"selo_ddv"],[2,"height","54px"],[1,"clube"],[1,"price"],["class","parcela",4,"ngIf","ngIfElse"],[1,"parcela"]],template:function(t,n){1&t&&(i.ac(0,"div",0),i.ic("click",(function(){return n.goToProduct()})),i.ac(1,"div",1),i.Oc(2,b,3,0,"div",2),i.Oc(3,g,3,0,"div",3),i.Zb(),i.ac(4,"div",4),i.Vb(5,"img",5),i.ac(6,"div",6),i.Oc(7,m,1,0,"img",7),i.Oc(8,v,1,0,"img",8),i.Zb(),i.Zb(),i.ac(9,"div",9),i.ac(10,"p",10),i.Qc(11),i.lc(12,"truncate"),i.Zb(),i.ac(13,"div",11),i.Oc(14,h,1,0,"div",12),i.Oc(15,y,1,0,"div",13),i.ac(16,"p",14),i.Qc(17),i.lc(18,"currency"),i.ac(19,"span"),i.Qc(20),i.Zb(),i.Zb(),i.Vb(21,"div",15),i.Zb(),i.Oc(22,_,7,12,"div",16),i.ac(23,"div",17),i.ac(24,"p"),i.Qc(25),i.lc(26,"date"),i.lc(27,"date"),i.Vb(28,"br"),i.Qc(29),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Oc(30,w,1,0,"ng-template",null,18,i.Pc)),2&t&&(i.Gb(2),i.sc("ngIf",n.code.image===n.mas18),i.Gb(1),i.sc("ngIf",n.code.kit),i.Gb(2),i.sc("src",n.code.host,i.Hc)("alt",n.code.produtos.dsc_produto),i.Gb(2),i.sc("ngIf",n.code.preco_clube),i.Gb(1),i.sc("ngIf",n.code.preco_cashback),i.Gb(3),i.Rc(i.nc(12,16,n.code.produtos.dsc_produto,70)),i.Gb(3),i.sc("ngIf",!n.code.preco_clube),i.Gb(1),i.sc("ngIf",!n.code.preco_clube),i.Gb(1),i.sc("ngClass",n.code.preco_clube?"price-clube":"price-normal"),i.Gb(1),i.Sc(" ",i.pc(18,19,i.wc(31,O,n.code.preco_regular||0))," "),i.Gb(3),i.Rc(n.code.produtos.embalagem),i.Gb(2),i.sc("ngIf",n.code.preco_clube),i.Gb(3),i.Tc(" Oferta V\xe1lida de ",i.nc(26,25,n.code.produtos.start,"dd/MM/yyyy")," a ",i.nc(27,28,n.code.produtos.end,"dd/MM/yyyy")," "),i.Gb(4),i.Sc("",n.loja.nome," "))},directives:[d.n,f.a,d.l],pipes:[p,d.d,d.f],styles:[".product[_ngcontent-%COMP%]{color:var(--product-text);position:relative;border-radius:10px;background-color:var(--product-background);box-shadow:2px 3px 4px rgba(0,0,0,.2)}.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .mas18[_ngcontent-%COMP%]{border-radius:10px 0 0 0;position:absolute;background-color:var(--product-mas18);width:auto;height:30px;top:0;left:0}.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .mas18[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:3px;padding:0 10px;font-weight:600;font-size:1rem;text-align:center;margin-bottom:0;color:var(--product-color-text-mas18)}.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .kit[_ngcontent-%COMP%]{border-radius:0 10px 0 0;position:absolute;background-color:var(--product-kit);width:auto;height:30px;top:0;right:0}.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .kit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:3px;padding:0 10px;font-weight:600;font-size:1rem;text-align:center;margin-bottom:0;color:var(--product-color-text-mas18)}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{text-align:center}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%]{position:relative}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%]   .selo_clube[_ngcontent-%COMP%]{position:absolute;bottom:0;right:10px;width:40px;height:auto}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%]   .selo_ddv[_ngcontent-%COMP%]{position:absolute;bottom:40px;right:10px;width:40px;height:auto}.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:1rem 0;height:130px;width:auto;margin:0 auto}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:.35rem}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{min-height:48px}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]{margin-bottom:0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]   .price-normal[_ngcontent-%COMP%]{font-weight:800;font-size:1.2rem;margin-bottom:0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]   .price-clube[_ngcontent-%COMP%]{font-weight:500;font-size:.85rem}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .clube[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:800;margin-bottom:0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .clube[_ngcontent-%COMP%]   .parcela[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;font-size:.75rem;margin-bottom:0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%]{margin:.2rem 0}.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-bottom:0;font-size:.65rem}"]}),P)},"nJ/e":function(n,o,r){"use strict";r.d(o,"a",(function(){return a}));var c=r("cxbk"),i=r("8Y7J"),a=function(){var n=function(){function n(e){t(this,n),this.el=e,this.srcAttr=null}return e(n,[{key:"ngAfterViewInit",value:function(){this.canLazyLoad()?this.lazyLoadImage():this.loadImage()}},{key:"canLazyLoad",value:function(){return window&&"IntersectionObserver"in window}},{key:"lazyLoadImage",value:function(){var t=this,n=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(t.loadImage(),n.unobserve(t.el.nativeElement))}))}));n.observe(this.el.nativeElement)}},{key:"loadImage",value:function(){this.srcAttr="".concat(c.a.v1.url,"/Containers/produtos/download/").concat(this.src,".jpg")}}]),n}();return n.\u0275fac=function(t){return new(t||n)(i.Ub(i.o))},n.\u0275dir=i.Pb({type:n,selectors:[["img","appProduct",""]],hostVars:1,hostBindings:function(t,n){2&t&&i.Hb("src",n.srcAttr,i.Hc)},inputs:{src:"src"}}),n}()},oeKb:function(n,o,r){"use strict";r.d(o,"a",(function(){return a}));var c=r("8Y7J"),i=r("cUpR"),a=function(){var n=function(){function n(e){t(this,n),this.sanitizer=e}return e(n,[{key:"transform",value:function(t,n){switch(n){case"html":return this.sanitizer.bypassSecurityTrustHtml(t);case"style":return this.sanitizer.bypassSecurityTrustStyle(t);case"script":return this.sanitizer.bypassSecurityTrustScript(t);case"url":return this.sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error("Invalid safe type specified: "+n)}}}]),n}();return n.\u0275fac=function(t){return new(t||n)(c.Ub(i.b))},n.\u0275pipe=c.Tb({name:"safe",type:n,pure:!0}),n}()},zEFZ:function(n,e,o){"use strict";o.d(e,"a",(function(){return s}));var r=o("CFN+"),c=o("SVse"),i=o("3II9"),a=o("8Y7J"),s=function(){var n=function n(){t(this,n)};return n.\u0275mod=a.Sb({type:n}),n.\u0275inj=a.Rb({factory:function(t){return new(t||n)},imports:[[i.b,c.c,r.a]]}),n}()}}])}();