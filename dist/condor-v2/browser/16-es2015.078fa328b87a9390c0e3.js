(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{REog:function(t,a,e){"use strict";e.r(a),e.d(a,"CampanhaModule",(function(){return q}));var n=e("SVse"),i=e("iInd"),s=e("xkgV"),o=e("QHOK"),c=e("GFCv"),r=e("vzA1"),p=e("FCmR"),l=e("HZLR"),b=e("lJxs"),g=e("vkgz"),m=e("nYR2"),h=e("8Y7J"),d=e("Dzqi"),u=e("8YIC"),f=e("ZUVw"),C=e("GOo+"),w=e("z8v2"),j=e("YXfc"),M=e("q3cj");function v(t,a){if(1&t&&h.Vb(0,"img",15),2&t){const t=h.ic().ngIf;h.rc("alt",t.title),h.qc("src",t.full,h.Fc)}}function O(t,a){if(1&t&&(h.Zb(0,"h2",16),h.Oc(1),h.Yb()),2&t){const t=h.ic().ngIf;h.Gb(1),h.Pc(t.title)}}function x(t,a){if(1&t&&h.Vb(0,"img",15),2&t){const t=h.ic().ngIf;h.rc("alt",t.title),h.qc("src",t.full,h.Fc)}}function I(t,a){if(1&t&&(h.Zb(0,"h2",17),h.Oc(1),h.Yb()),2&t){const t=h.ic().ngIf;h.Gb(1),h.Qc(" ",t.title,"")}}function y(t,a){if(1&t&&(h.Zb(0,"div",18),h.Vb(1,"app-product",19),h.Yb()),2&t){const t=a.$implicit;h.Gb(1),h.qc("code",t)}}const Y=function(t){return{itemsPerPage:12,currentPage:t}};function L(t,a){if(1&t){const t=h.ac();h.Zb(0,"section",2),h.Zb(1,"div",3),h.Zb(2,"div",4),h.Mc(3,v,1,2,"img",5),h.Mc(4,O,2,1,"h2",6),h.Yb(),h.Zb(5,"div",7),h.Zb(6,"div",8),h.Zb(7,"div",9),h.Mc(8,x,1,2,"img",5),h.Mc(9,I,2,1,"h2",10),h.Yb(),h.Zb(10,"div",11),h.Mc(11,y,2,1,"div",12),h.jc(12,"paginate"),h.jc(13,"async"),h.Yb(),h.Zb(14,"div",13),h.Zb(15,"pagination-controls",14),h.gc("pageChange",(function(a){return h.Dc(t),h.ic().p=a})),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Yb()}if(2&t){const t=a.ngIf,e=h.ic();h.Gb(3),h.qc("ngIf",t.full),h.Gb(1),h.qc("ngIf",!t.full),h.Gb(4),h.qc("ngIf",t.full),h.Gb(1),h.qc("ngIf",!t.full),h.Gb(2),h.qc("ngForOf",h.lc(12,6,h.kc(13,9,e.items$),h.uc(11,Y,e.p)))("ngForTrackBy",e.trackBy)}}function Z(t,a){1&t&&h.Vb(0,"app-sem-data")}const $=[{path:":slug",component:(()=>{class t{constructor(t,a,e,n,i,s,o){this.act=t,this.news=a,this.util=e,this.db=n,this.seo=i,this.router=s,this.storageMap=o,this.isLoading=!1,this.p=1,this.search="",this.view=!0,this.init=!1,this.loja=[],this.menu=[],this.departamento=[],this.getCampanha=t=>{this.campanha$=this.news.Campanha(t).pipe(Object(b.a)(t=>t[0]),Object(g.a)(t=>this.proccess(t)))},this.proccess=t=>{this.isLoading=!1,this.setSeo(t),this.storageMap.watch("Loja").subscribe(({loja:a})=>{t.code?(this.getMenuDepartamentoCampanha(a,t.code),this.items$=this.db.OfertasLojaCampanha(a,t.code,60).pipe(Object(m.a)(()=>this.isLoading=!1))):(this.getMenuDepartamentoSlug(a,t.slugCampanha),this.items$=this.db.OfertasLojaSlug(a,t.slugCampanha,60).pipe(Object(m.a)(()=>this.isLoading=!1)))})},this.getMenuDepartamentoSlug=(t,a)=>{this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaSlug?loja=${t}&slug=${a}`)},this.getMenuDepartamentoCampanha=(t,a)=>{this.departamento=this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaCampanha?loja=${t}&campanha=${a}`)},this.toogle=t=>{this.str=t,this.view=!this.view},this.setSeo=t=>{this.seo.addCanonical(),this.seo.updateTags({title:`Confira as ${t.title} | Condor.com.br`,description:"Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais pr\xf3ximo! Toda loja em at\xe9 6x, Bazar em at\xe9 10x e Eletro em at\xe9 20x Sem Juros*",image:"https://www.condor.com.br/assets/images/sem-imagem.jpg"}),this.seo.addCanonical(),this.seo.dataLayerPage(t.title)},this.trackBy=(t,a)=>a[t]}ngOnInit(){this.slug$=this.act.paramMap.pipe(Object(b.a)(t=>t.get("slug"))),this.slug$.subscribe(t=>this.getCampanha(t))}}return t.\u0275fac=function(a){return new(a||t)(h.Ub(i.a),h.Ub(d.a),h.Ub(u.a),h.Ub(f.a),h.Ub(C.a),h.Ub(i.d),h.Ub(w.a))},t.\u0275cmp=h.Ob({type:t,selectors:[["app-campanha"]],decls:3,vars:4,consts:[["id","departamento","class","py-3 py-md-5",4,"ngIf"],[4,"ngIf"],["id","departamento",1,"py-3","py-md-5"],[1,"container"],[1,"d-lg-none"],["class","w-100 mb-2",3,"src","alt",4,"ngIf"],["class","b-08 text-mute text-center pb-1 border-bottom mb-3",4,"ngIf"],[1,"row","no-gutters","justify-content-center"],[1,"col-12"],[1,"d-none","d-lg-block"],["class","b-08 text-mute",4,"ngIf"],[1,"row","mt-3"],["class","col-6 col-md-4 col-lg-3 mb-4",4,"ngFor","ngForOf","ngForTrackBy"],[1,"mt-5"],["previousLabel","Anterior","nextLabel","Pr\xf3ximo","responsive","true",1,"animated","fade","text-center","mt-5","border-top","pt-1",3,"pageChange"],[1,"w-100","mb-2",3,"src","alt"],[1,"b-08","text-mute","text-center","pb-1","border-bottom","mb-3"],[1,"b-08","text-mute"],[1,"col-6","col-md-4","col-lg-3","mb-4"],[3,"code"]],template:function(t,a){1&t&&(h.Mc(0,L,16,13,"section",0),h.jc(1,"async"),h.Mc(2,Z,1,0,"app-sem-data",1)),2&t&&(h.qc("ngIf",h.kc(1,2,a.campanha$)),h.Gb(2),h.qc("ngIf",a.isLoading))},directives:[n.n,n.m,s.c,j.a,M.a],pipes:[n.b,s.b],styles:["@media (max-width:450px){.col-lg-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important}.col-6[_ngcontent-%COMP%]{padding-left:5px!important;padding-right:5px!important}}"]}),t})()}];let q=(()=>{class t{}return t.\u0275mod=h.Sb({type:t}),t.\u0275inj=h.Rb({factory:function(a){return new(a||t)},imports:[[c.a,n.c,p.a,r.a,l.a,o.h,s.a,i.h.forChild($)]]}),t})()}}]);
//# sourceMappingURL=16-es2015.078fa328b87a9390c0e3.js.map