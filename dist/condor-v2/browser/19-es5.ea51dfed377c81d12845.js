!function(){function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var t=0;t<o.length;t++){var a=o[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{PDlY:function(t,a,n){"use strict";n.r(a),n.d(a,"SacModule",(function(){return Q}));var r=n("SVse"),c=n("s7LF"),i=n("PqYM"),l=n("8Y7J"),u=n("iInd"),b=n("ZUVw"),s=n("GOo+"),m=n("8YIC"),d=n("Dzqi"),f=n("QHOK"),p=n("IXEw");function v(e,o){if(1&e&&(l.ac(0,"option",58),l.Qc(1),l.Zb()),2&e){var t=o.$implicit;l.sc("value",t.id),l.Gb(1),l.Rc(t.name)}}function Z(e,o){if(1&e&&(l.ac(0,"option",58),l.Qc(1),l.Zb()),2&e){var t=o.$implicit;l.sc("value",null==t.title?null:t.title.rendered),l.Gb(1),l.Rc(null==t.title?null:t.title.rendered)}}var g,h,C=((g=function(){function t(o,a,n,r,c,l){var u=this;e(this,t),this.router=o,this.fb=a,this.db=n,this.seo=r,this.util=c,this.news=l,this.region=[],this.allLojas=[],this.onSubmit=function(){u.region.filter((function(e){return e.id===u.fmSac.value.cidade})),u.db.add("Sacs",u.fmSac.value).subscribe((function(){return u.fmSac.reset()})),u.util.sweetalert("Sua mensagem foi enviada.","Aguarde que em breve entraremos em contato.","success","center"),u.seo.dataLayerTracking({event:"formSubmitted",formName:"SAC",sacStore:u.fmSac.value.loja}),Object(i.a)(1e3).subscribe((function(){return u.router.navigate([""])}))},this.onCEP=function(e){u.cepSubs=u.util.toCEP(e.target.value).subscribe((function(e){u.fmSac.patchValue({rua:e.logradouro,bairro:e.bairro,uf:e.uf,cid:e.localidade})}))},this.getLojas=function(e){return u.lojaSubs=u.news.LojaPorRegion(e.target.value).subscribe((function(e){return u.allLojas=e}))},this.getRegion=function(){return u.regionSubs=u.news.LojaRegion().subscribe((function(e){return u.region=e}))},this.setSeo=function(){u.seo.setTitle("Atendimento ao cliente"),u.seo.addTagName("Atendimento ao cliente"),u.seo.addCanonical()}}var a,n,r;return a=t,(n=[{key:"ngOnInit",value:function(){this.buildForm(),this.getRegion(),this.seo.dataLayerPage("SAC")}},{key:"ngOnDestroy",value:function(){this.cepSubs&&this.cepSubs.unsubscribe(),this.lojaSubs&&this.lojaSubs.unsubscribe(),this.regionSubs&&this.regionSubs.unsubscribe()}},{key:"buildForm",value:function(){this.fmSac=this.fb.group({assunto:["",c.p.required],cidade:["",c.p.required],loja:["",c.p.required],nome:["",c.p.required],email:["",[c.p.required,c.p.email]],telefone:["",c.p.required],cpf:["",c.p.required],data_nascimento:["",c.p.required],mensagem:["",c.p.required],cep:[""],complemento:[""],bairro:["",c.p.required],rua:["",c.p.required],uf:[""],cid:["",c.p.required]})}}])&&o(a.prototype,n),r&&o(a,r),t}()).\u0275fac=function(e){return new(e||g)(l.Ub(u.d),l.Ub(c.b),l.Ub(b.a),l.Ub(s.a),l.Ub(m.a),l.Ub(d.a))},g.\u0275cmp=l.Ob({type:g,selectors:[["app-sac"]],decls:111,vars:4,consts:[["id","content",1,"py-5"],[1,"container"],[1,"b-08","border-bottom","pb-1","mb-3"],[1,"row","ios","justify-content-center"],[1,"col-md-12","col-lg-8","col-xl-9"],[3,"formGroup"],[1,"mt-5","mb-4","border-bottom","pb-1","b-07"],[1,"custom-control","custom-radio","custom-control-inline"],["type","radio","id","duvidas","formControlName","assunto","value","Tirar d\xfavidas","mdbInput","",1,"custom-control-input"],["for","duvidas",1,"custom-control-label"],["type","radio","id","sugestoes","formControlName","assunto","value","Enviar sugest\xf5es","mdbInput","",1,"custom-control-input"],["for","sugestoes",1,"custom-control-label"],["type","radio","id","elogios","formControlName","assunto","value","Enviar elogios","mdbInput","",1,"custom-control-input"],["for","elogios",1,"custom-control-label"],["type","radio","id","reclamacoes","formControlName","assunto","value","Enviar reclama\xe7\xf5es","mdbInput","",1,"custom-control-input"],["for","reclamacoes",1,"custom-control-label"],["type","radio","id","outros","formControlName","assunto","value","Outros","mdbInput","",1,"custom-control-input"],["for","outros",1,"custom-control-label"],[1,"form-group"],["for","cidade"],["formControlName","cidade","id","cidade",1,"browser-default","custom-select",3,"change"],["selected",""],[3,"value",4,"ngFor","ngForOf"],["for","loja"],["formControlName","loja","id","loja",1,"browser-default","custom-select"],[1,"row","ios"],[1,"col-md-6"],["for","nome"],["type","text","id","nome","formControlName","nome",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control"],["for","cpf"],["type","text","inputmode","number","id","cpf","formControlName","cpf",1,"form-control"],["for","telefone"],["type","number","id","telefone","formControlName","telefone",1,"form-control"],["for","data_nascimento"],["type","date","id","data_nascimento","formControlName","data_nascimento",1,"form-control"],["for","cep"],["type","number","id","cep","formControlName","cep","placeholder","Insira o CEP e clique Enter",1,"form-control",3,"change"],["for","rua"],["type","text","id","rua","formControlName","rua",1,"form-control"],["for","complemento"],["type","text","id","complemento","formControlName","complemento",1,"form-control"],["for","bairro"],["type","text","id","bairro","formControlName","bairro",1,"form-control"],["for","cid"],["type","text","id","cid","formControlName","cid",1,"form-control"],["for","uf"],["type","text","id","uf","formControlName","uf",1,"form-control"],["for","mensagem"],["id","mensdagem","rows","4","formControlName","mensagem",1,"form-control"],[1,"text-center"],["type","reset","mdbBtn","","color","danger","mdbWavesEffect",""],[1,"mb-0","font-weight-bold","text-uppercase"],["type","button","mdbBtn","","color","primary","mdbWavesEffect","",3,"disabled","click"],[1,"col-lg-4","col-xl-3","d-none","d-lg-block"],[1,"news","mb-5"],["src","./assets/images/0800.jpg","alt","SAC 0800416655",1,"img-fluid"],[3,"value"]],template:function(e,o){1&e&&(l.ac(0,"section",0),l.ac(1,"div",1),l.ac(2,"h1",2),l.Qc(3,"Atendimento ao cliente - SAC"),l.Zb(),l.ac(4,"div",3),l.ac(5,"div",4),l.ac(6,"form",5),l.ac(7,"h5",6),l.Qc(8," 1. Selecione o assunto que voc\xea deseja falar: "),l.Zb(),l.ac(9,"div",7),l.Vb(10,"input",8),l.ac(11,"label",9),l.Qc(12,"Tirar d\xfavidas"),l.Zb(),l.Zb(),l.ac(13,"div",7),l.Vb(14,"input",10),l.ac(15,"label",11),l.Qc(16,"Enviar sugest\xf5es"),l.Zb(),l.Zb(),l.ac(17,"div",7),l.Vb(18,"input",12),l.ac(19,"label",13),l.Qc(20,"Enviar elogios"),l.Zb(),l.Zb(),l.ac(21,"div",7),l.Vb(22,"input",14),l.ac(23,"label",15),l.Qc(24,"Enviar reclama\xe7\xf5es"),l.Zb(),l.Zb(),l.ac(25,"div",7),l.Vb(26,"input",16),l.ac(27,"label",17),l.Qc(28,"Outros"),l.Zb(),l.Zb(),l.ac(29,"h5",6),l.Qc(30," 2. Selecione a loja que quer contatar: "),l.Zb(),l.ac(31,"div",18),l.ac(32,"label",19),l.Qc(33,"Cidade"),l.Zb(),l.ac(34,"select",20),l.ic("change",(function(e){return o.getLojas(e)})),l.ac(35,"option",21),l.Qc(36,"Selecione a Cidade"),l.Zb(),l.Oc(37,v,2,2,"option",22),l.Zb(),l.Zb(),l.ac(38,"div",18),l.ac(39,"label",23),l.Qc(40,"Loja"),l.Zb(),l.ac(41,"select",24),l.ac(42,"option",21),l.Qc(43,"Selecione o Condor"),l.Zb(),l.Oc(44,Z,2,2,"option",22),l.Zb(),l.Zb(),l.ac(45,"h5",6),l.Qc(46," 3. Informe seus dados b\xe1sicos: "),l.Zb(),l.ac(47,"div",25),l.ac(48,"div",26),l.ac(49,"div",18),l.ac(50,"label",27),l.Qc(51,"Nome"),l.Zb(),l.Vb(52,"input",28),l.Zb(),l.ac(53,"div",18),l.ac(54,"label",29),l.Qc(55,"E-mail"),l.Zb(),l.Vb(56,"input",30),l.Zb(),l.ac(57,"div",18),l.ac(58,"label",31),l.Qc(59,"CPF"),l.Zb(),l.Vb(60,"input",32),l.Zb(),l.ac(61,"div",18),l.ac(62,"label",33),l.Qc(63,"Telefone"),l.Zb(),l.Vb(64,"input",34),l.Zb(),l.ac(65,"div",18),l.ac(66,"label",35),l.Qc(67,"Data de Nascimento"),l.Zb(),l.Vb(68,"input",36),l.Zb(),l.Zb(),l.ac(69,"div",26),l.ac(70,"div",18),l.ac(71,"label",37),l.Qc(72,"CEP"),l.Zb(),l.ac(73,"input",38),l.ic("change",(function(e){return o.onCEP(e)})),l.Zb(),l.Zb(),l.ac(74,"div",18),l.ac(75,"label",39),l.Qc(76,"Rua"),l.Zb(),l.Vb(77,"input",40),l.Zb(),l.ac(78,"div",18),l.ac(79,"label",41),l.Qc(80,"Complemento"),l.Zb(),l.Vb(81,"input",42),l.Zb(),l.ac(82,"div",18),l.ac(83,"label",43),l.Qc(84,"Bairro"),l.Zb(),l.Vb(85,"input",44),l.Zb(),l.ac(86,"div",18),l.ac(87,"label",45),l.Qc(88,"Cidade"),l.Zb(),l.Vb(89,"input",46),l.Zb(),l.ac(90,"div",18),l.ac(91,"label",47),l.Qc(92,"UF"),l.Zb(),l.Vb(93,"input",48),l.Zb(),l.Zb(),l.Zb(),l.ac(94,"h5",6),l.Qc(95," 4. Deixe sua mensagem: "),l.Zb(),l.ac(96,"div",18),l.ac(97,"label",49),l.Qc(98,"Mensagem"),l.Zb(),l.Vb(99,"textarea",50),l.Zb(),l.ac(100,"div",51),l.ac(101,"button",52),l.ac(102,"h6",53),l.Qc(103,"cancelar"),l.Zb(),l.Zb(),l.ac(104,"button",54),l.ic("click",(function(){return o.onSubmit()})),l.ac(105,"h6",53),l.Qc(106,"Enviar"),l.Zb(),l.Zb(),l.Zb(),l.Zb(),l.Zb(),l.ac(107,"div",55),l.ac(108,"div",56),l.Vb(109,"img",57),l.Zb(),l.Vb(110,"app-sidebar"),l.Zb(),l.Zb(),l.Zb(),l.Zb()),2&e&&(l.Gb(6),l.sc("formGroup",o.fmSac),l.Gb(31),l.sc("ngForOf",o.region),l.Gb(7),l.sc("ngForOf",o.allLojas),l.Gb(60),l.sc("disabled",o.fmSac.invalid))},directives:[c.r,c.i,c.d,c.m,c.a,c.h,c.c,f.r,c.o,c.k,c.q,r.m,c.l,f.l,f.v,p.a],styles:[""]}),g),y=n("Jy8Y"),S=[{path:"",component:C}],Q=((h=function o(){e(this,o)}).\u0275mod=l.Sb({type:h}),h.\u0275inj=l.Rb({factory:function(e){return new(e||h)},imports:[[r.c,y.a,f.h,c.n,u.h.forChild(S)]]}),h)}}])}();