!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{REog:function(a,e,c){"use strict";c.r(e),c.d(e,"CampanhaModule",(function(){return $}));var o=c("SVse"),i=c("iInd"),r=c("xkgV"),s=c("QHOK"),p=c("GFCv"),u=c("vzA1"),l=c("FCmR"),m=c("HZLR"),g=c("lJxs"),f=c("vkgz"),b=c("nYR2"),d=c("8Y7J"),h=c("Dzqi"),v=c("8YIC"),C=c("ZUVw"),w=c("GOo+"),O=c("z8v2"),y=c("YXfc"),j=c("q3cj");function x(t,n){if(1&t&&d.Vb(0,"img",15),2&t){var a=d.kc().ngIf;d.tc("alt",a.title),d.sc("src",a.full,d.Hc)}}function I(t,n){if(1&t&&(d.ac(0,"h2",16),d.Qc(1),d.Zb()),2&t){var a=d.kc().ngIf;d.Gb(1),d.Rc(a.title)}}function k(t,n){if(1&t&&d.Vb(0,"img",15),2&t){var a=d.kc().ngIf;d.tc("alt",a.title),d.sc("src",a.full,d.Hc)}}function M(t,n){if(1&t&&(d.ac(0,"h2",17),d.Qc(1),d.Zb()),2&t){var a=d.kc().ngIf;d.Gb(1),d.Sc(" ",a.title,"")}}function L(t,n){if(1&t&&(d.ac(0,"div",18),d.Vb(1,"app-product",19),d.Zb()),2&t){var a=n.$implicit;d.Gb(1),d.sc("code",a)}}var Z=function(t){return{itemsPerPage:12,currentPage:t}};function G(t,n){if(1&t){var a=d.bc();d.ac(0,"section",2),d.ac(1,"div",3),d.ac(2,"div",4),d.Oc(3,x,1,2,"img",5),d.Oc(4,I,2,1,"h2",6),d.Zb(),d.ac(5,"div",7),d.ac(6,"div",8),d.ac(7,"div",9),d.Oc(8,k,1,2,"img",5),d.Oc(9,M,2,1,"h2",10),d.Zb(),d.ac(10,"div",11),d.Oc(11,L,2,1,"div",12),d.lc(12,"paginate"),d.lc(13,"async"),d.Zb(),d.ac(14,"div",13),d.ac(15,"pagination-controls",14),d.ic("pageChange",(function(t){return d.Fc(a),d.kc().p=t})),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.Zb()}if(2&t){var e=n.ngIf,c=d.kc();d.Gb(3),d.sc("ngIf",e.full),d.Gb(1),d.sc("ngIf",!e.full),d.Gb(4),d.sc("ngIf",e.full),d.Gb(1),d.sc("ngIf",!e.full),d.Gb(2),d.sc("ngForOf",d.nc(12,6,d.mc(13,9,c.items$),d.wc(11,Z,c.p)))("ngForTrackBy",c.trackBy)}}function S(t,n){1&t&&d.Vb(0,"app-sem-data")}var P,F,U=[{path:":slug",component:(P=function(){function a(n,e,c,o,i,r,s){var p=this;t(this,a),this.act=n,this.news=e,this.util=c,this.db=o,this.seo=i,this.router=r,this.storageMap=s,this.isLoading=!1,this.p=1,this.search="",this.view=!0,this.init=!1,this.loja=[],this.menu=[],this.departamento=[],this.getCampanha=function(t){p.campanha$=p.news.Campanha(t).pipe(Object(g.a)((function(t){return t[0]})),Object(f.a)((function(t){return p.proccess(t)})))},this.proccess=function(t){p.isLoading=!1,p.setSeo(t),p.storageMap.watch("Loja").subscribe((function(n){var a=n.loja;t.code?(p.getMenuDepartamentoCampanha(a,t.code),p.items$=p.db.OfertasLojaCampanha(a,t.code,60).pipe(Object(b.a)((function(){return p.isLoading=!1})))):(p.getMenuDepartamentoSlug(a,t.slugCampanha),p.items$=p.db.OfertasLojaSlug(a,t.slugCampanha,60).pipe(Object(b.a)((function(){return p.isLoading=!1}))))}))},this.getMenuDepartamentoSlug=function(t,n){p.db.getCollection("/Menus/MenuDepartamentoOfertasLojaSlug?loja=".concat(t,"&slug=").concat(n))},this.getMenuDepartamentoCampanha=function(t,n){p.departamento=p.db.getCollection("/Menus/MenuDepartamentoOfertasLojaCampanha?loja=".concat(t,"&campanha=").concat(n))},this.toogle=function(t){p.str=t,p.view=!p.view},this.setSeo=function(t){p.seo.addCanonical(),p.seo.updateTags({title:"Confira as ".concat(t.title," | Condor.com.br"),description:"Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais pr\xf3ximo! Toda loja em at\xe9 6x, Bazar em at\xe9 10x e Eletro em at\xe9 20x Sem Juros*",image:"https://www.condor.com.br/assets/images/sem-imagem.jpg"}),p.seo.addCanonical(),p.seo.dataLayerPage(t.title)},this.trackBy=function(t,n){return n[t]}}var e,c,o;return e=a,(c=[{key:"ngOnInit",value:function(){var t=this;this.slug$=this.act.paramMap.pipe(Object(g.a)((function(t){return t.get("slug")}))),this.slug$.subscribe((function(n){return t.getCampanha(n)}))}}])&&n(e.prototype,c),o&&n(e,o),a}(),P.\u0275fac=function(t){return new(t||P)(d.Ub(i.a),d.Ub(h.a),d.Ub(v.a),d.Ub(C.a),d.Ub(w.a),d.Ub(i.d),d.Ub(O.a))},P.\u0275cmp=d.Ob({type:P,selectors:[["app-campanha"]],decls:3,vars:4,consts:[["id","departamento","class","py-3 py-md-5",4,"ngIf"],[4,"ngIf"],["id","departamento",1,"py-3","py-md-5"],[1,"container"],[1,"d-lg-none"],["class","w-100 mb-2",3,"src","alt",4,"ngIf"],["class","b-08 text-mute text-center pb-1 border-bottom mb-3",4,"ngIf"],[1,"row","no-gutters","justify-content-center"],[1,"col-12"],[1,"d-none","d-lg-block"],["class","b-08 text-mute",4,"ngIf"],[1,"row","mt-3"],["class","col-6 col-md-4 col-lg-3 mb-4",4,"ngFor","ngForOf","ngForTrackBy"],[1,"mt-5"],["previousLabel","Anterior","nextLabel","Pr\xf3ximo","responsive","true",1,"animated","fade","text-center","mt-5","border-top","pt-1",3,"pageChange"],[1,"w-100","mb-2",3,"src","alt"],[1,"b-08","text-mute","text-center","pb-1","border-bottom","mb-3"],[1,"b-08","text-mute"],[1,"col-6","col-md-4","col-lg-3","mb-4"],[3,"code"]],template:function(t,n){1&t&&(d.Oc(0,G,16,13,"section",0),d.lc(1,"async"),d.Oc(2,S,1,0,"app-sem-data",1)),2&t&&(d.sc("ngIf",d.mc(1,2,n.campanha$)),d.Gb(2),d.sc("ngIf",n.isLoading))},directives:[o.n,o.m,r.c,y.a,j.a],pipes:[o.b,r.b],styles:["@media (max-width:450px){.col-lg-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important}.col-6[_ngcontent-%COMP%]{padding-left:5px!important;padding-right:5px!important}}"]}),P)}],$=((F=function n(){t(this,n)}).\u0275mod=d.Sb({type:F}),F.\u0275inj=d.Rb({factory:function(t){return new(t||F)},imports:[[p.a,o.c,l.a,u.a,m.a,s.h,r.a,i.h.forChild(U)]]}),F)}}])}();