(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Ec0c:function(t,e,n){"use strict";n.r(e),n.d(e,"ImprensaModule",(function(){return j}));var i=n("SVse"),s=n("s7LF"),c=n("iInd"),a=n("QHOK"),o=n("xkgV"),r=n("Jy8Y"),g=n("FCmR"),l=n("vkgz"),p=n("lJxs"),b=n("nYR2"),d=n("8Y7J"),m=n("GOo+"),u=n("Dzqi"),h=n("IXEw"),f=n("q3cj");const v=function(t){return["/institucional/imprensa",t]},O=function(t){return{background:t}};function y(t,e){if(1&t&&(d.ac(0,"div",13),d.ac(1,"div",14),d.ac(2,"a",15),d.ac(3,"div",16),d.ac(4,"div",17),d.ac(5,"h3",18),d.Qc(6),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.Zb()),2&t){const t=e.$implicit;d.Gb(2),d.sc("routerLink",d.wc(3,v,t.slug)),d.Gb(1),d.sc("ngStyle",d.wc(5,O,"url("+t.medium+") no-repeat center center")),d.Gb(3),d.Rc(t.title)}}const w=function(t,e,n){return{itemsPerPage:t,currentPage:e,totalItems:n}};function I(t,e){if(1&t){const t=d.bc();d.ac(0,"section",2),d.ac(1,"div",3),d.ac(2,"h2",4),d.Qc(3,"Not\xedcias"),d.Zb(),d.ac(4,"div",5),d.ac(5,"div",6),d.ac(6,"div",7),d.Oc(7,y,7,7,"div",8),d.lc(8,"paginate"),d.ac(9,"div",9),d.ac(10,"pagination-controls",10),d.ic("pageChange",(function(e){return d.Fc(t),d.kc().pageChanged(e)}))("pageBoundsCorrection",(function(e){return d.Fc(t),d.kc().pageChanged(e)})),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.ac(11,"div",11),d.Vb(12,"img",12),d.Vb(13,"app-sidebar"),d.Zb(),d.Zb(),d.Zb(),d.Zb()}if(2&t){const t=e.ngIf,n=d.kc();d.Gb(7),d.sc("ngForOf",d.nc(8,2,t,d.yc(5,w,n.ip,n.p,n.header)))("ngForTrackBy",n.trackBy)}}function Z(t,e){1&t&&d.Vb(0,"app-sem-data")}function P(t,e){if(1&t&&d.Vb(0,"img",15),2&t){const t=d.kc().ngIf;d.sc("src",t.full,d.Hc)("alt",t.title)}}function x(t,e){if(1&t&&d.Vb(0,"img",16),2&t){const t=d.kc().ngIf;d.sc("alt",t.title)}}function k(t,e){if(1&t&&(d.ac(0,"section",2),d.ac(1,"div",3),d.ac(2,"h1",4),d.Qc(3),d.Zb(),d.ac(4,"div",5),d.ac(5,"div",6),d.ac(6,"div",7),d.ac(7,"p",8),d.Qc(8),d.Zb(),d.Zb(),d.Zb(),d.ac(9,"div",9),d.Oc(10,P,1,2,"img",10),d.Oc(11,x,1,1,"img",11),d.Vb(12,"div",12),d.Zb(),d.ac(13,"div",13),d.Vb(14,"img",14),d.Vb(15,"app-sidebar"),d.Zb(),d.Zb(),d.Zb(),d.Zb()),2&t){const t=e.ngIf;d.Gb(3),d.Rc(t.title),d.Gb(5),d.Rc(t.title),d.Gb(2),d.sc("ngIf",t.full),d.Gb(1),d.sc("ngIf",!t.full),d.Gb(1),d.sc("innerHTML",t.content,d.Gc)}}function C(t,e){1&t&&d.Vb(0,"app-sem-data")}const L=[{path:"",component:(()=>{class t{constructor(t,e){this.seo=t,this.news=e,this.p=1,this.ip=6,this.isLoading=!1,this.getPost=t=>{this.isLoading=!0,this.items$=this.news.Posts(t,this.ip).pipe(Object(l.a)(t=>this.header=null==t?void 0:t.headers.keys().map(e=>t.headers.get(e))[4]),Object(p.a)(t=>t.body),Object(b.a)(()=>this.isLoading=!1))},this.pageChanged=t=>{this.p=t,this.items$=this.news.Posts(this.p,this.ip).pipe(Object(p.a)(t=>t.body))},this.trackBy=(t,e)=>e[t]}ngOnInit(){this.seo.addCanonical(),this.seo.dataLayerPage("imprensa"),this.getPost(this.p)}}return t.\u0275fac=function(e){return new(e||t)(d.Ub(m.a),d.Ub(u.a))},t.\u0275cmp=d.Ob({type:t,selectors:[["app-imprensa"]],decls:3,vars:4,consts:[["id","imprensa","class","py-4",4,"ngIf"],[4,"ngIf"],["id","imprensa",1,"py-4"],[1,"container"],[1,"h1-responsive","font-weight-bold","text-left","border-bottom","my-5"],[1,"row","ios"],[1,"col-xl-9"],[1,"row"],["class","col-md-6 mb-4",4,"ngFor","ngForOf","ngForTrackBy"],[1,"mt-4","mx-auto"],["previousLabel","Anterior","nextLabel","Pr\xf3ximo","responsive","true",1,"animated","fade","text-center",3,"pageChange","pageBoundsCorrection"],[1,"col-xl-3"],["src","./assets/images/banner_imprensa.jpg","alt","Imprensa",1,"img-fluid","mb-4"],[1,"col-md-6","mb-4"],[1,"cards"],[3,"routerLink"],[1,"image",3,"ngStyle"],[1,"content"],[1,"titulo"]],template:function(t,e){1&t&&(d.Oc(0,I,14,9,"section",0),d.lc(1,"async"),d.Oc(2,Z,1,0,"app-sem-data",1)),2&t&&(d.sc("ngIf",d.mc(1,2,e.items$)),d.Gb(2),d.sc("ngIf",e.isLoading))},directives:[i.n,i.m,o.c,h.a,c.g,i.o,f.a],pipes:[i.b,o.b],styles:[".cards[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:relative;height:280px;background-size:cover!important;border-radius:10px;margin-bottom:1rem}.cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{bottom:0;display:flex;min-height:100px;position:absolute;padding:.6rem .85rem;border-radius:0 0 10px 10px;background-color:rgba(0,0,0,.5)}.cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{color:#fafafa;font-weight:600;font-size:1.3rem;align-self:center}a[_ngcontent-%COMP%]{color:var(--color-text-default)!important}"]}),t})()},{path:":slug",component:(()=>{class t{constructor(t,e,n){this.seo=t,this.news=e,this.act=n,this.items$=[],this.isLoading=!1,this.getPost=t=>{this.isLoading=!0,this.items$=this.news.PostSlug(t).pipe(Object(l.a)(t=>this.setSeo(t)),Object(b.a)(()=>this.isLoading=!1))},this.setSeo=t=>{this.seo.updateTags({title:t.title,description:t.content,image:t.medium}),this.seo.addCanonical(),this.seo.dataLayerPage(t.title)},this.slug$=this.act.paramMap.pipe(Object(p.a)(t=>t.get("slug"))),this.slug$.subscribe(t=>this.getPost(t))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(d.Ub(m.a),d.Ub(u.a),d.Ub(c.a))},t.\u0275cmp=d.Ob({type:t,selectors:[["app-detail"]],decls:4,vars:4,consts:[["id","conteudo","class","py-5",4,"ngIf","ngIfElse"],["semData",""],["id","conteudo",1,"py-5"],[1,"container"],[1,"b-08","border-bottom","pb-1","mb-3","text-left"],[1,"row","ios","justify-content-center"],[1,"view","overlay","mb-5"],[1,"mask","flex-center","rgba-green-slight"],[1,"white-text"],[1,"col-lg-8","col-xl-9"],["class","w-100",3,"src","alt",4,"ngIf"],["class","w-100","src","./assets/images/sem-imagem.jpg",3,"alt",4,"ngIf"],["id","conteudo",1,"mt-4",3,"innerHTML"],[1,"col-lg-4","col-xl-3","bg-red"],["src","./assets/images/banner_imprensa.jpg","alt","Imprensa",1,"img-fluid","mb-4"],[1,"w-100",3,"src","alt"],["src","./assets/images/sem-imagem.jpg",1,"w-100",3,"alt"]],template:function(t,e){if(1&t&&(d.Oc(0,k,16,5,"section",0),d.lc(1,"async"),d.Oc(2,C,1,0,"ng-template",null,1,d.Pc)),2&t){const t=d.Cc(3);d.sc("ngIf",d.mc(1,2,e.items$))("ngIfElse",t)}},directives:[i.n,h.a,f.a],pipes:[i.b],styles:[""]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=d.Sb({type:t}),t.\u0275inj=d.Rb({factory:function(e){return new(e||t)},imports:[[i.c,s.e,g.a,r.a,a.h,o.a,c.h.forChild(L)]]}),t})()}}]);