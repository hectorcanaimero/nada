(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{g0re:function(t,e,i){"use strict";i.r(e),i.d(e,"SectorModule",(function(){return I}));var c=i("SVse"),o=i("iInd"),n=i("xkgV"),s=i("QHOK"),a=i("GFCv"),r=i("FCmR"),b=i("vzA1"),l=i("HZLR"),u=i("lJxs"),p=i("vkgz"),d=i("nYR2"),g=i("8Y7J"),h=i("ZUVw"),m=i("GOo+"),f=i("8YIC"),v=i("z8v2"),y=i("sCWG"),w=i("YXfc"),O=i("q3cj"),k=i("m8Mh");const j=function(t,e){return["/departamento",t,"setor",e]};function S(t,e){if(1&t&&(g.Zb(0,"li",23),g.Zb(1,"a",24),g.Oc(2),g.Yb(),g.Yb()),2&t){const t=e.$implicit,i=g.ic(3);g.Gb(1),g.qc("routerLink",g.vc(2,j,i.url.link,t.slug)),g.Gb(1),g.Qc(" ",t.sector," ")}}function Y(t,e){if(1&t&&(g.Zb(0,"ul",21),g.Mc(1,S,3,5,"li",22),g.jc(2,"async"),g.Yb()),2&t){const t=g.ic(2);g.Gb(1),g.qc("ngForOf",g.kc(2,1,t.sector$))}}function x(t,e){if(1&t&&(g.Zb(0,"div",25),g.Vb(1,"app-product",26),g.Yb()),2&t){const t=e.$implicit;g.Gb(1),g.qc("code",t)}}const M=function(t){return["/departamento",t]},Z=function(t,e){return{"fa-plus":t,"fa-minus":e}};function C(t,e){if(1&t){const t=g.ac();g.Zb(0,"section",2),g.Zb(1,"div",3),g.Zb(2,"mdb-breadcrumb",4),g.Zb(3,"mdb-breadcrumb-item",5),g.Oc(4),g.Yb(),g.Zb(5,"mdb-breadcrumb-item",6),g.Oc(6),g.Yb(),g.Yb(),g.Zb(7,"div",7),g.Zb(8,"div",8),g.Vb(9,"app-select-loja",9),g.Zb(10,"h5",10),g.Oc(11),g.Yb(),g.Zb(12,"div",11),g.Zb(13,"h5",12),g.gc("click",(function(){return g.Dc(t),g.ic().toogle()})),g.Oc(14," Setor "),g.Vb(15,"i",13),g.Yb(),g.Mc(16,Y,3,3,"ul",14),g.Yb(),g.Yb(),g.Zb(17,"div",15),g.Zb(18,"h1",16),g.Oc(19),g.Yb(),g.Vb(20,"img",17),g.Zb(21,"input",18),g.gc("change",(function(e){return g.Dc(t),g.ic().busca(e)})),g.Yb(),g.Zb(22,"div",19),g.Mc(23,x,2,1,"div",20),g.jc(24,"filtro"),g.jc(25,"async"),g.Yb(),g.Yb(),g.Yb(),g.Yb(),g.Yb()}if(2&t){const t=e.ngIf,i=g.ic();g.Gb(3),g.qc("routerLink",g.uc(15,M,i.url.link)),g.Gb(1),g.Qc(" ",i.url.nome,""),g.Gb(2),g.Qc(" ",t.nome," "),g.Gb(5),g.Pc(i.url.nome),g.Gb(4),g.qc("ngClass",g.vc(17,Z,!i.viewSector,i.viewSector)),g.Gb(1),g.qc("ngIf",i.viewSector),g.Gb(3),g.Pc(t.nome),g.Gb(4),g.qc("ngForOf",g.mc(24,9,g.kc(25,13,i.items$),i.search,"dsc_produto"))("ngForTrackBy",i.trackBy)}}function G(t,e){1&t&&g.Vb(0,"app-sem-data")}const L=[{path:":slug",component:(()=>{class t{constructor(t,e,i,c,o,n){this.router=t,this.db=e,this.seo=i,this.util=c,this.act=o,this.storageMap=n,this.isLoading=!1,this.p=1,this.search="",this.viewDepart=!0,this.viewSector=!0,this.init=!1,this.url=[],this.menu=[],this.proccess=t=>{this.seo.addCanonical(),this.getSector(t)},this.getSector=t=>{this.isLoading=!0,this.url={nome:this.router.url.split("/")[2],link:this.util.toSlug(this.router.url.split("/")[2])},this.menuSector$=this.db.getMenuOfertas("menuSetorSlug?slug="+t).pipe(Object(u.a)(t=>t[0]),Object(p.a)(({dep_id:t,codigo:e})=>this.watchStorage(t,e)))},this.watchStorage=(t,e)=>{this.storageMap.watch("Loja").subscribe(({loja:i})=>{this.getMenuDepartamento(i),this.sector$=this.db.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${i}&departamento=${t}`),this.items$=this.db.OfertasLojaDepartamentoSetor(i,t,e).pipe(Object(u.a)(t=>t.filter(t=>t.produtos)),Object(d.a)(()=>this.isLoading=!1))})},this.getMenuDepartamento=t=>this.menu=this.db.getCollection("/Menus/MenuDepartamentoOfertasLojaDepartamento?loja="+t),this.toogle=()=>this.viewSector=!this.viewSector,this.busca=t=>this.search=t.target.value,this.Seo=t=>{this.seo.addCanonical(),this.seo.setTitle(t+" | Rede Condor"),this.seo.updateTagName(t+" | Rede Condor"),this.seo.dataLayerPage(t)},this.trackBy=(t,e)=>e[t]}ngOnInit(){this.slug$=this.act.paramMap.pipe(Object(u.a)(t=>t.get("slug"))),this.slug$.subscribe(t=>this.proccess(t))}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(g.Ub(o.d),g.Ub(h.a),g.Ub(m.a),g.Ub(f.a),g.Ub(o.a),g.Ub(v.a))},t.\u0275cmp=g.Ob({type:t,selectors:[["app-sector"]],decls:3,vars:4,consts:[["id","sector","class","py-5",4,"ngIf"],[4,"ngIf"],["id","sector",1,"py-5"],[1,"container"],[1,"mb-5"],[1,"blue-text","text-uppercase",3,"routerLink"],[1,"text-muted","text-uppercase"],[1,"row","ios","justify-content-center"],[1,"col-lg-4","col-xl-3","bg-red"],["type","alert"],[1,"border-bottom","pb-1","b-06","my-4","text-capitalize"],[1,"news","my-4"],[1,"b-07","border-bottom","pb-1","mb-1",3,"click"],[1,"fas","float-right",3,"ngClass"],["class","nav flex-column grey lighten-4 py-2 animated fadeIn faster","data-wow-delay",".1",4,"ngIf"],[1,"col-lg-8","col-xl-9"],[1,"b-08","border-bottom","pb-1","mb-3","text-capitalize"],["src","./assets/images/banner_campanha.jpg","onerror","this.style.display='none'",1,"img-fluid","mb-4"],["type","text","placeholder","Procure produtos deste setor",1,"form-control",3,"change"],[1,"row","mt-3"],["class","col-6 col-md-4 col-lg-4 col-xl-4 mb-3",4,"ngFor","ngForOf","ngForTrackBy"],["data-wow-delay",".1",1,"nav","flex-column","grey","lighten-4","py-2","animated","fadeIn","faster"],["class","nav-item","routerLinkActive","active",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"nav-item"],[1,"nav-link","b-07","f-09",3,"routerLink"],[1,"col-6","col-md-4","col-lg-4","col-xl-4","mb-3"],[3,"code"]],template:function(t,e){1&t&&(g.Mc(0,C,26,20,"section",0),g.jc(1,"async"),g.Mc(2,G,1,0,"app-sem-data",1)),2&t&&(g.qc("ngIf",g.kc(1,2,e.menuSector$)),g.Gb(2),g.qc("ngIf",e.isLoading))},directives:[c.n,s.j,s.k,o.e,y.a,c.l,c.m,o.f,o.g,w.a,O.a],pipes:[c.b,k.a],styles:["@media (max-width:450px){.col-lg-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important}.col-6[_ngcontent-%COMP%]{padding-left:5px!important;padding-right:5px!important}}"]}),t})()}];let I=(()=>{class t{}return t.\u0275mod=g.Sb({type:t}),t.\u0275inj=g.Rb({factory:function(e){return new(e||t)},imports:[[a.a,c.c,r.a,b.a,l.a,s.h,n.a,o.h.forChild(L)]]}),t})()}}]);
//# sourceMappingURL=18-es2015.c2bca371bf4571a13aae.js.map