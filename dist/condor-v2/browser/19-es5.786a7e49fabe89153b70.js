!function(){function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{PDlY:function(t,r,n){"use strict";n.r(r),n.d(r,"SacModule",(function(){return C}));var i=n("SVse"),a=n("s7LF"),b=n("PqYM"),c=n("8Y7J"),l=n("iInd"),u=n("ZUVw"),s=n("GOo+"),m=n("8YIC"),d=n("Dzqi"),f=n("QHOK"),p=n("IXEw");function v(e,o){if(1&e&&(c.Zb(0,"option",58),c.Oc(1),c.Yb()),2&e){var t=o.$implicit;c.qc("value",t.id),c.Gb(1),c.Pc(t.name)}}function Y(e,o){if(1&e&&(c.Zb(0,"option",58),c.Oc(1),c.Yb()),2&e){var t=o.$implicit;c.qc("value",null==t.title?null:t.title.rendered),c.Gb(1),c.Pc(null==t.title?null:t.title.rendered)}}var g,Z,h=((g=function(){function t(o,r,n,i,a,c){var l=this;e(this,t),this.router=o,this.fb=r,this.db=n,this.seo=i,this.util=a,this.news=c,this.region=[],this.allLojas=[],this.onSubmit=function(){l.region.filter((function(e){return e.id===l.fmSac.value.cidade})),l.db.add("Sacs",l.fmSac.value).subscribe((function(){return l.fmSac.reset()})),l.util.sweetalert("Sua mensagem foi enviada.","Aguarde que em breve entraremos em contato.","success","center"),l.seo.dataLayerTracking({event:"formSubmitted",formName:"SAC",sacStore:l.fmSac.value.loja}),Object(b.a)(1e3).subscribe((function(){return l.router.navigate([""])}))},this.onCEP=function(e){l.cepSubs=l.util.toCEP(e.target.value).subscribe((function(e){l.fmSac.patchValue({rua:e.logradouro,bairro:e.bairro,uf:e.uf,cid:e.localidade})}))},this.getLojas=function(e){return l.lojaSubs=l.news.LojaPorRegion(e.target.value).subscribe((function(e){return l.allLojas=e}))},this.getRegion=function(){return l.regionSubs=l.news.LojaRegion().subscribe((function(e){return l.region=e}))},this.setSeo=function(){l.seo.setTitle("Atendimento ao cliente"),l.seo.addTagName("Atendimento ao cliente"),l.seo.addCanonical()},this.trackBy=function(e,o){return o[e]}}var r,n,i;return r=t,(n=[{key:"ngOnInit",value:function(){this.buildForm(),this.getRegion(),this.seo.dataLayerPage("SAC")}},{key:"ngOnDestroy",value:function(){this.cepSubs&&this.cepSubs.unsubscribe(),this.lojaSubs&&this.lojaSubs.unsubscribe(),this.regionSubs&&this.regionSubs.unsubscribe()}},{key:"buildForm",value:function(){this.fmSac=this.fb.group({assunto:["",a.p.required],cidade:["",a.p.required],loja:["",a.p.required],nome:["",a.p.required],email:["",[a.p.required,a.p.email]],telefone:["",a.p.required],cpf:["",a.p.required],data_nascimento:["",a.p.required],mensagem:["",a.p.required],cep:[""],complemento:[""],bairro:["",a.p.required],rua:["",a.p.required],uf:[""],cid:["",a.p.required]})}}])&&o(r.prototype,n),i&&o(r,i),t}()).\u0275fac=function(e){return new(e||g)(c.Ub(l.d),c.Ub(a.b),c.Ub(u.a),c.Ub(s.a),c.Ub(m.a),c.Ub(d.a))},g.\u0275cmp=c.Ob({type:g,selectors:[["app-sac"]],decls:111,vars:6,consts:[["id","content",1,"py-5"],[1,"container"],[1,"b-08","border-bottom","pb-1","mb-3"],[1,"row","ios","justify-content-center"],[1,"col-md-12","col-lg-8","col-xl-9"],[3,"formGroup"],[1,"mt-5","mb-4","border-bottom","pb-1","b-07"],[1,"custom-control","custom-radio","custom-control-inline"],["type","radio","id","duvidas","formControlName","assunto","value","Tirar d\xfavidas","mdbInput","",1,"custom-control-input"],["for","duvidas",1,"custom-control-label"],["type","radio","id","sugestoes","formControlName","assunto","value","Enviar sugest\xf5es","mdbInput","",1,"custom-control-input"],["for","sugestoes",1,"custom-control-label"],["type","radio","id","elogios","formControlName","assunto","value","Enviar elogios","mdbInput","",1,"custom-control-input"],["for","elogios",1,"custom-control-label"],["type","radio","id","reclamacoes","formControlName","assunto","value","Enviar reclama\xe7\xf5es","mdbInput","",1,"custom-control-input"],["for","reclamacoes",1,"custom-control-label"],["type","radio","id","outros","formControlName","assunto","value","Outros","mdbInput","",1,"custom-control-input"],["for","outros",1,"custom-control-label"],[1,"form-group"],["for","cidade"],["formControlName","cidade","id","cidade",1,"browser-default","custom-select",3,"change"],["selected",""],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],["for","loja"],["formControlName","loja","id","loja",1,"browser-default","custom-select"],[1,"row","ios"],[1,"col-md-6"],["for","nome"],["type","text","id","nome","formControlName","nome",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control"],["for","cpf"],["type","text","inputmode","number","id","cpf","formControlName","cpf",1,"form-control"],["for","telefone"],["type","number","id","telefone","formControlName","telefone",1,"form-control"],["for","data_nascimento"],["type","date","id","data_nascimento","formControlName","data_nascimento",1,"form-control"],["for","cep"],["type","number","id","cep","formControlName","cep","placeholder","Insira o CEP e clique Enter",1,"form-control",3,"change"],["for","rua"],["type","text","id","rua","formControlName","rua",1,"form-control"],["for","complemento"],["type","text","id","complemento","formControlName","complemento",1,"form-control"],["for","bairro"],["type","text","id","bairro","formControlName","bairro",1,"form-control"],["for","cid"],["type","text","id","cid","formControlName","cid",1,"form-control"],["for","uf"],["type","text","id","uf","formControlName","uf",1,"form-control"],["for","mensagem"],["id","mensdagem","rows","4","formControlName","mensagem",1,"form-control"],[1,"text-center"],["type","reset","mdbBtn","","color","danger","mdbWavesEffect",""],[1,"mb-0","font-weight-bold","text-uppercase"],["type","button","mdbBtn","","color","primary","mdbWavesEffect","",3,"disabled","click"],[1,"col-lg-4","col-xl-3","d-none","d-lg-block"],[1,"news","mb-5"],["src","./assets/images/0800.jpg","alt","SAC 0800416655",1,"img-fluid"],[3,"value"]],template:function(e,o){1&e&&(c.Zb(0,"section",0),c.Zb(1,"div",1),c.Zb(2,"h1",2),c.Oc(3,"Atendimento ao cliente - SAC"),c.Yb(),c.Zb(4,"div",3),c.Zb(5,"div",4),c.Zb(6,"form",5),c.Zb(7,"h5",6),c.Oc(8," 1. Selecione o assunto que voc\xea deseja falar: "),c.Yb(),c.Zb(9,"div",7),c.Vb(10,"input",8),c.Zb(11,"label",9),c.Oc(12,"Tirar d\xfavidas"),c.Yb(),c.Yb(),c.Zb(13,"div",7),c.Vb(14,"input",10),c.Zb(15,"label",11),c.Oc(16,"Enviar sugest\xf5es"),c.Yb(),c.Yb(),c.Zb(17,"div",7),c.Vb(18,"input",12),c.Zb(19,"label",13),c.Oc(20,"Enviar elogios"),c.Yb(),c.Yb(),c.Zb(21,"div",7),c.Vb(22,"input",14),c.Zb(23,"label",15),c.Oc(24,"Enviar reclama\xe7\xf5es"),c.Yb(),c.Yb(),c.Zb(25,"div",7),c.Vb(26,"input",16),c.Zb(27,"label",17),c.Oc(28,"Outros"),c.Yb(),c.Yb(),c.Zb(29,"h5",6),c.Oc(30," 2. Selecione a loja que quer contatar: "),c.Yb(),c.Zb(31,"div",18),c.Zb(32,"label",19),c.Oc(33,"Cidade"),c.Yb(),c.Zb(34,"select",20),c.gc("change",(function(e){return o.getLojas(e)})),c.Zb(35,"option",21),c.Oc(36,"Selecione a Cidade"),c.Yb(),c.Mc(37,v,2,2,"option",22),c.Yb(),c.Yb(),c.Zb(38,"div",18),c.Zb(39,"label",23),c.Oc(40,"Loja"),c.Yb(),c.Zb(41,"select",24),c.Zb(42,"option",21),c.Oc(43,"Selecione o Condor"),c.Yb(),c.Mc(44,Y,2,2,"option",22),c.Yb(),c.Yb(),c.Zb(45,"h5",6),c.Oc(46," 3. Informe seus dados b\xe1sicos: "),c.Yb(),c.Zb(47,"div",25),c.Zb(48,"div",26),c.Zb(49,"div",18),c.Zb(50,"label",27),c.Oc(51,"Nome"),c.Yb(),c.Vb(52,"input",28),c.Yb(),c.Zb(53,"div",18),c.Zb(54,"label",29),c.Oc(55,"E-mail"),c.Yb(),c.Vb(56,"input",30),c.Yb(),c.Zb(57,"div",18),c.Zb(58,"label",31),c.Oc(59,"CPF"),c.Yb(),c.Vb(60,"input",32),c.Yb(),c.Zb(61,"div",18),c.Zb(62,"label",33),c.Oc(63,"Telefone"),c.Yb(),c.Vb(64,"input",34),c.Yb(),c.Zb(65,"div",18),c.Zb(66,"label",35),c.Oc(67,"Data de Nascimento"),c.Yb(),c.Vb(68,"input",36),c.Yb(),c.Yb(),c.Zb(69,"div",26),c.Zb(70,"div",18),c.Zb(71,"label",37),c.Oc(72,"CEP"),c.Yb(),c.Zb(73,"input",38),c.gc("change",(function(e){return o.onCEP(e)})),c.Yb(),c.Yb(),c.Zb(74,"div",18),c.Zb(75,"label",39),c.Oc(76,"Rua"),c.Yb(),c.Vb(77,"input",40),c.Yb(),c.Zb(78,"div",18),c.Zb(79,"label",41),c.Oc(80,"Complemento"),c.Yb(),c.Vb(81,"input",42),c.Yb(),c.Zb(82,"div",18),c.Zb(83,"label",43),c.Oc(84,"Bairro"),c.Yb(),c.Vb(85,"input",44),c.Yb(),c.Zb(86,"div",18),c.Zb(87,"label",45),c.Oc(88,"Cidade"),c.Yb(),c.Vb(89,"input",46),c.Yb(),c.Zb(90,"div",18),c.Zb(91,"label",47),c.Oc(92,"UF"),c.Yb(),c.Vb(93,"input",48),c.Yb(),c.Yb(),c.Yb(),c.Zb(94,"h5",6),c.Oc(95," 4. Deixe sua mensagem: "),c.Yb(),c.Zb(96,"div",18),c.Zb(97,"label",49),c.Oc(98,"Mensagem"),c.Yb(),c.Vb(99,"textarea",50),c.Yb(),c.Zb(100,"div",51),c.Zb(101,"button",52),c.Zb(102,"h6",53),c.Oc(103,"cancelar"),c.Yb(),c.Yb(),c.Zb(104,"button",54),c.gc("click",(function(){return o.onSubmit()})),c.Zb(105,"h6",53),c.Oc(106,"Enviar"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Zb(107,"div",55),c.Zb(108,"div",56),c.Vb(109,"img",57),c.Yb(),c.Vb(110,"app-sidebar"),c.Yb(),c.Yb(),c.Yb(),c.Yb()),2&e&&(c.Gb(6),c.qc("formGroup",o.fmSac),c.Gb(31),c.qc("ngForOf",o.region)("ngForTrackBy",o.trackBy),c.Gb(7),c.qc("ngForOf",o.allLojas)("ngForTrackBy",o.trackBy),c.Gb(60),c.qc("disabled",o.fmSac.invalid))},directives:[a.r,a.i,a.d,a.m,a.a,a.h,a.c,f.r,a.o,a.k,a.q,i.m,a.l,f.l,f.v,p.a],styles:[""]}),g),y=n("Jy8Y"),O=[{path:"",component:h}],C=((Z=function o(){e(this,o)}).\u0275mod=c.Sb({type:Z}),Z.\u0275inj=c.Rb({factory:function(e){return new(e||Z)},imports:[[i.c,y.a,f.h,a.n,l.h.forChild(O)]]}),Z)}}])}();
//# sourceMappingURL=19-es5.786a7e49fabe89153b70.js.map