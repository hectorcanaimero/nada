!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var c=t[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{NjoI:function(e,c,o){"use strict";o.r(c),o.d(c,"SearchModule",(function(){return v}));var r=o("SVse"),a=o("iInd"),i=o("QHOK"),g=o("GFCv"),d=o("klR4"),p=o("vzA1"),s=o("lJxs"),l=o("vkgz"),_=o("8Y7J"),O=o("GOo+"),M=o("8YIC"),C=o("ZUVw"),f=o("z8v2"),P=o("Dyj9"),h=o("YXfc");function u(n,t){if(1&n&&(_.Zb(0,"div",6),_.Vb(1,"app-product",7),_.Yb()),2&n){var e=t.$implicit;_.Gb(1),_.qc("code",e)}}var m,b,x=[{path:":slug",component:(m=function(){function e(t,c,o,r,a){var i=this;n(this,e),this.seo=t,this.util=c,this.db=o,this.act=r,this.storageMap=a,this.loja=[],this.items=[],this.fill=[],this.product=[],this.message="",this.trackBy=function(n,t){return t[n]},this.seo.addCanonical(),this.slug=this.act.paramMap.pipe(Object(s.a)((function(n){return n.get("slug")}))),this.subs=this.slug.subscribe((function(n){return i.Search(n)}))}var c,o,r;return c=e,(o=[{key:"ngOnInit",value:function(){var n=this;this.seo.addCanonical(),this.slug=this.act.paramMap.pipe(Object(s.a)((function(n){return n.get("slug")}))),this.subs=this.slug.subscribe((function(t){return n.Search(t)}))}},{key:"ngOnDestroy",value:function(){this.subs&&this.subs.unsubscribe()}},{key:"Search",value:function(n){var t=this,e=[],c=[],o=n.split("-").join("%20"),r=n.split("-").join(" ");this.storageMap.watch("Loja").subscribe((function(n){var a=n.loja;t.items$=t.db.Search(o).pipe(Object(s.a)((function(n){for(var t in n)for(var o in n[t].ofertas)n[t].ofertas[o].loja===+a&&(e={campanhaId:n[t].ofertas[o].campanhaId,campanha:n[t].ofertas[o].campanha,hostId:n[t].ofertas[o].hostId,host:n[t].ofertas[o].host,loja:n[t].ofertas[o].loja,departamento:n[t].ofertas[o].departamento,slug:n[t].ofertas[o].slug,preco_regular:n[t].ofertas[o].preco_regular,parcela_regular:n[t].ofertas[o].parcela_regular,qtd_regular:n[t].ofertas[o].qtd_regular,preco_clube:n[t].ofertas[o].preco_clube,parcela_clube:n[t].ofertas[o].parcela_clube,qtd_clube:n[t].ofertas[o].qtd_clube,dsc_kit:n[t].ofertas[o].dsc_kit,cod_kit:n[t].ofertas[o].cod_kit,produtos:n[t]},c.push(e));return c})),Object(l.a)((function(n){n.length>0?(t.message='Ofertas encontradas para a sua busca "'.concat(r,'".'),t.seo.dataLayerTracking({event:"siteSearch",searchTerm:r})):(t.seo.dataLayerTracking({event:"notfound",searchTerm:r}),t.message="Esse produto n\xe3o est\xe1 dispon\xedvel no site.<br>Mas aproveite as outras ofertas que preparamos para voc\xea.")})))}))}}])&&t(c.prototype,o),r&&t(c,r),e}(),m.\u0275fac=function(n){return new(n||m)(_.Ub(O.a),_.Ub(M.a),_.Ub(C.a),_.Ub(a.a),_.Ub(f.a))},m.\u0275cmp=_.Ob({type:m,selectors:[["app-search"]],decls:7,vars:7,consts:[["id","search",1,"p-y-3","py-md-5"],[1,"container"],[1,"h2-responsive","b-7","mb-4",3,"innerHTML"],[1,"row","mb-4"],["class","col-md-4 mb-4 col-lg-3",4,"ngFor","ngForOf","ngForTrackBy"],["title","Mais ofertas","icon","fas fa-shopping-basket","type","slug",3,"code","sector"],[1,"col-md-4","mb-4","col-lg-3"],[3,"code"]],template:function(n,t){1&n&&(_.Zb(0,"section",0),_.Zb(1,"div",1),_.Vb(2,"h1",2),_.Zb(3,"div",3),_.Mc(4,u,2,1,"div",4),_.jc(5,"async"),_.Yb(),_.Vb(6,"app-widget-ofertas",5),_.Yb(),_.Yb()),2&n&&(_.Gb(2),_.qc("innerHTML",t.message,_.Ec),_.Gb(2),_.qc("ngForOf",_.kc(5,5,t.items$))("ngForTrackBy",t.trackBy),_.Gb(2),_.qc("code","geral")("sector",t.product.setor))},directives:[r.m,P.a,h.a],pipes:[r.b],styles:['@charset "UTF-8";.sem-clube[_ngcontent-%COMP%]{opacity:0!important}.price-card[_ngcontent-%COMP%]{width:100%;text-align:left;float:left;margin:5px;position:relative;border-radius:2px;background:#f5f6fa;background:linear-gradient(20deg,#f0faff,#fff 50%,#fff)}.price-card[_ngcontent-%COMP%], .price-card[_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.price-card[_ngcontent-%COMP%]:hover{cursor:pointer;background:linear-gradient(20deg,#f0faff,#fff 50%,#fff)}.price-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{height:35%;padding:10px 20px;text-align:center;min-height:200px;position:relative}.price-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .legal[_ngcontent-%COMP%]{width:200px;top:205px;left:2px;text-align:right;position:absolute;font-size:.6rem;transform-origin:0 0;transform:rotate(-90deg)}.price-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .pack[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;width:100%;background:linear-gradient(29deg,#092d5e,#056bdc);text-align:center;color:#fff;padding:5px;display:block;align-items:center;justify-content:center;font-size:.8rem;font-weight:400;letter-spacing:-.12px;line-height:1.2;box-shadow:2px 2px 3px rgba(0,0,0,.25098039215686274);border-radius:10px}.price-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .pack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;right:-5px;top:-15px;width:40px;margin-top:-15px;height:auto}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{width:100%;padding:10px;min-height:300px;display:-moz-inline-grid;display:-webkit-box;display:inline-grid;flex-direction:column;justify-content:flex-top;align-items:center;text-align:left}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 5px;width:100%;height:45px;font-size:1rem;line-height:1.1;font-weight:900;position:relative;margin-bottom:0}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:900;text-transform:none}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.parcela[_ngcontent-%COMP%]{position:relative}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.parcela[_ngcontent-%COMP%]:after{content:"no cart\xe3o Condor";position:absolute;left:103%;bottom:1px;font-size:.7rem;width:62px;line-height:1.1;font-weight:600}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{width:100%;height:35px}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:.8rem}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]{font-weight:400;font-size:.9rem;margin-bottom:0;margin-top:.75rem}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7rem;font-weight:400;text-shadow:none!important}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;width:100%;font-size:1.2rem;font-weight:900}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]{background:#37a0cd!important;border-radius:5px;display:flex;flex-direction:column;align-items:center}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{padding:4px 10px;text-align:center}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{margin:0 auto;width:60%}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){width:100%;padding:5px}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .sll[_ngcontent-%COMP%]{margin-top:-3px;margin-bottom:0;font-size:.75rem;text-align:center;font-weight:700;text-transform:uppercase;color:#fff}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .sll[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffdd3d;font-weight:700}.price-card[_ngcontent-%COMP%]   .parcelamento[_ngcontent-%COMP%], .price-card[_ngcontent-%COMP%]   .sem-parcelamento[_ngcontent-%COMP%]{width:100%}.price-card[_ngcontent-%COMP%]   .sem-parcelamento[_ngcontent-%COMP%]{margin-top:135px}.price-card[_ngcontent-%COMP%]   .azul[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:0}.price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]{margin:15px 0}.price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]   .clube[_ngcontent-%COMP%]{border-radius:15px;box-shadow:0 10px 15px rgba(249,144,25,.44),0 5px 5px rgba(251,211,130,.22)}.price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:-3px}.price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]   .azul[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:-3px;color:#1a91c6}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;margin:-10px 0 -20px}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:50%;z-index:2}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:before{left:0}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:after, .price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:before{content:"";top:45%;width:20%;height:1px;background:#ff8924;position:absolute}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:after{right:0}.price-card[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%]{font-size:.65rem;line-height:1.1;margin-top:5px;text-align:center;letter-spacing:0}@media (min-width:375px){.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{padding:3px;width:35%}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{width:100%}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){width:65%}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .sll[_ngcontent-%COMP%]{margin-top:2px;font-size:.75rem}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60%}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:after, .price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:before{width:10%}}@media (min-width:768px){.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.9rem}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .sll[_ngcontent-%COMP%]{margin-top:11px}.price-card[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%]{font-size:.7rem}}']}),m)}],v=((b=function t(){n(this,t)}).\u0275mod=_.Sb({type:b}),b.\u0275inj=_.Rb({factory:function(n){return new(n||b)},imports:[[g.a,r.c,p.a,i.h,d.a,a.h.forChild(x)]]}),b)}}])}();
//# sourceMappingURL=17-es5.6093839db3f7d17be0e4.js.map