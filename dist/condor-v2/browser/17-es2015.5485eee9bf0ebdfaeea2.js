(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{NjoI:function(n,t,e){"use strict";e.r(t),e.d(t,"SearchModule",(function(){return f}));var c=e("SVse"),o=e("iInd"),r=e("QHOK"),a=e("GFCv"),i=e("klR4"),g=e("vzA1"),d=e("lJxs"),p=e("8Y7J"),s=e("GOo+"),_=e("8YIC"),l=e("ZUVw"),O=e("z8v2"),M=e("Dyj9"),C=e("YXfc");function P(n,t){if(1&n&&(p.ac(0,"div",6),p.Vb(1,"app-product",7),p.Zb()),2&n){const n=t.$implicit;p.Gb(1),p.sc("code",n)}}const h=[{path:":slug",component:(()=>{class n{constructor(n,t,e,c,o){this.seo=n,this.util=t,this.db=e,this.act=c,this.storageMap=o,this.loja=[],this.items=[],this.fill=[],this.product=[],this.message="",this.trackBy=(n,t)=>t[n]}ngOnInit(){this.seo.addCanonical(),this.slug=this.act.paramMap.pipe(Object(d.a)(n=>n.get("slug"))),this.slug.subscribe(n=>{this.Search(n)},n=>console.log(n))}Search(n){let t=[];const e=[],c=n.split("-").join("%20"),o=n.split("-").join(" ");this.storageMap.watch("Loja").subscribe(({loja:n})=>{this.db.Search(c).subscribe(c=>{for(const o in c)for(const r in c[o].ofertas)c[o].ofertas[r].loja===+n&&(t={campanhaId:c[o].ofertas[r].campanhaId,campanha:c[o].ofertas[r].campanha,hostId:c[o].ofertas[r].hostId,host:c[o].ofertas[r].host,loja:c[o].ofertas[r].loja,departamento:c[o].ofertas[r].departamento,slug:c[o].ofertas[r].slug,preco_regular:c[o].ofertas[r].preco_regular,parcela_regular:c[o].ofertas[r].parcela_regular,qtd_regular:c[o].ofertas[r].qtd_regular,preco_clube:c[o].ofertas[r].preco_clube,parcela_clube:c[o].ofertas[r].parcela_clube,qtd_clube:c[o].ofertas[r].qtd_clube,dsc_kit:c[o].ofertas[r].dsc_kit,cod_kit:c[o].ofertas[r].cod_kit,produtos:c[o]},e.push(t));this.items=e,this.items.length>0?(this.message=`Ofertas encontradas para a sua busca "${o}".`,this.seo.dataLayerTracking({event:"siteSearch",searchTerm:o})):(this.seo.dataLayerTracking({event:"notfound",searchTerm:o}),this.message="Esse produto n\xe3o est\xe1 dispon\xedvel no site.<br>Mas aproveite as outras ofertas que preparamos para voc\xea.")},n=>{console.log(n)})})}}return n.\u0275fac=function(t){return new(t||n)(p.Ub(s.a),p.Ub(_.a),p.Ub(l.a),p.Ub(o.a),p.Ub(O.a))},n.\u0275cmp=p.Ob({type:n,selectors:[["app-search"]],decls:6,vars:5,consts:[["id","search",1,"p-y-3","py-md-5"],[1,"container"],[1,"h2-responsive","b-7","mb-4",3,"innerHTML"],[1,"row","mb-4"],["class","col-md-4 mb-4 col-lg-3",4,"ngFor","ngForOf","ngForTrackBy"],["title","Mais ofertas","icon","fas fa-shopping-basket","type","slug",3,"code","sector"],[1,"col-md-4","mb-4","col-lg-3"],[3,"code"]],template:function(n,t){1&n&&(p.ac(0,"section",0),p.ac(1,"div",1),p.Vb(2,"h1",2),p.ac(3,"div",3),p.Oc(4,P,2,1,"div",4),p.Zb(),p.Vb(5,"app-widget-ofertas",5),p.Zb(),p.Zb()),2&n&&(p.Gb(2),p.sc("innerHTML",t.message,p.Gc),p.Gb(2),p.sc("ngForOf",t.items)("ngForTrackBy",t.trackBy),p.Gb(1),p.sc("code","geral")("sector",t.product.setor))},directives:[c.m,M.a,C.a],styles:['@charset "UTF-8";.sem-clube[_ngcontent-%COMP%]{opacity:0!important}.price-card[_ngcontent-%COMP%]{width:100%;text-align:left;float:left;margin:5px;position:relative;border-radius:2px;background:#f5f6fa;background:linear-gradient(20deg,#f0faff,#fff 50%,#fff)}.price-card[_ngcontent-%COMP%], .price-card[_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.price-card[_ngcontent-%COMP%]:hover{cursor:pointer;background:linear-gradient(20deg,#f0faff,#fff 50%,#fff)}.price-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{height:35%;padding:10px 20px;text-align:center;min-height:200px;position:relative}.price-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .legal[_ngcontent-%COMP%]{width:200px;top:205px;left:2px;text-align:right;position:absolute;font-size:.6rem;transform-origin:0 0;transform:rotate(-90deg)}.price-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .pack[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;width:100%;background:linear-gradient(29deg,#092d5e,#056bdc);text-align:center;color:#fff;padding:5px;display:block;align-items:center;justify-content:center;font-size:.8rem;font-weight:400;letter-spacing:-.12px;line-height:1.2;box-shadow:2px 2px 3px rgba(0,0,0,.25098039215686274);border-radius:10px}.price-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .pack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;right:-5px;top:-15px;width:40px;margin-top:-15px;height:auto}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{width:100%;padding:10px;min-height:300px;display:-moz-inline-grid;display:-webkit-box;display:inline-grid;flex-direction:column;justify-content:flex-top;align-items:center;text-align:left}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 5px;width:100%;height:45px;font-size:1rem;line-height:1.1;font-weight:900;position:relative;margin-bottom:0}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:900;text-transform:none}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.parcela[_ngcontent-%COMP%]{position:relative}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.parcela[_ngcontent-%COMP%]:after{content:"no cart\xe3o Condor";position:absolute;left:103%;bottom:1px;font-size:.7rem;width:62px;line-height:1.1;font-weight:600}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{width:100%;height:35px}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:.8rem}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]{font-weight:400;font-size:.9rem;margin-bottom:0;margin-top:.75rem}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7rem;font-weight:400;text-shadow:none!important}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;width:100%;font-size:1.2rem;font-weight:900}.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]{background:#37a0cd!important;border-radius:5px;display:flex;flex-direction:column;align-items:center}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{padding:4px 10px;text-align:center}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{margin:0 auto;width:60%}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){width:100%;padding:5px}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .sll[_ngcontent-%COMP%]{margin-top:-3px;margin-bottom:0;font-size:.75rem;text-align:center;font-weight:700;text-transform:uppercase;color:#fff}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .sll[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffdd3d;font-weight:700}.price-card[_ngcontent-%COMP%]   .parcelamento[_ngcontent-%COMP%], .price-card[_ngcontent-%COMP%]   .sem-parcelamento[_ngcontent-%COMP%]{width:100%}.price-card[_ngcontent-%COMP%]   .sem-parcelamento[_ngcontent-%COMP%]{margin-top:135px}.price-card[_ngcontent-%COMP%]   .azul[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:0}.price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]{margin:15px 0}.price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]   .clube[_ngcontent-%COMP%]{border-radius:15px;box-shadow:0 10px 15px rgba(249,144,25,.44),0 5px 5px rgba(251,211,130,.22)}.price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:-3px}.price-card[_ngcontent-%COMP%]   .laranja[_ngcontent-%COMP%]   .azul[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:-3px;color:#1a91c6}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;margin:-10px 0 -20px}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:50%;z-index:2}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:before{left:0}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:after, .price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:before{content:"";top:45%;width:20%;height:1px;background:#ff8924;position:absolute}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:after{right:0}.price-card[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%]{font-size:.65rem;line-height:1.1;margin-top:5px;text-align:center;letter-spacing:0}@media (min-width:375px){.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{padding:3px;width:35%}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{width:100%}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){width:65%}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .sll[_ngcontent-%COMP%]{margin-top:2px;font-size:.75rem}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60%}.price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:after, .price-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:before{width:10%}}@media (min-width:768px){.price-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.9rem}.price-card[_ngcontent-%COMP%]   .ddv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   .sll[_ngcontent-%COMP%]{margin-top:11px}.price-card[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%]{font-size:.7rem}}']}),n})()}];let f=(()=>{class n{}return n.\u0275mod=p.Sb({type:n}),n.\u0275inj=p.Rb({factory:function(t){return new(t||n)},imports:[[a.a,c.c,g.a,r.h,i.a,o.h.forChild(h)]]}),n})()}}]);