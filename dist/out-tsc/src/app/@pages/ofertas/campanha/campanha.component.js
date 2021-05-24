import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
let CampanhaComponent = class CampanhaComponent {
    constructor(act, news, util, db, seo, router, storageMap) {
        this.act = act;
        this.news = news;
        this.util = util;
        this.db = db;
        this.seo = seo;
        this.router = router;
        this.storageMap = storageMap;
        this.p = 1;
        this.search = '';
        this.view = true;
        this.init = false;
        this.loja = [];
        this.menu = [];
        this.items = [];
        this.departamento = [];
        this.getCampanha = (slug) => {
            this.campanha$ = this.news.Campanha(slug).pipe(map((res) => res[0]), tap((res) => this.proccess(res)), delay(1000));
        };
        this.proccess = (res) => {
            console.log(res);
            this.setSeo(res);
            this.storageMap.watch('Loja').subscribe(({ loja }) => {
                if (res.code) {
                    console.log(res.code);
                    this.getMenuDepartamentoCampanha(loja, res.code);
                    this.items = this.db.OfertasLojaCampanha(loja, res.code, 60);
                    this.items.subscribe((res) => console.log(res));
                }
                else {
                    console.log('Code: ', res.code);
                    this.getMenuDepartamentoSlug(loja, res.slugCampanha);
                    this.items = this.db.OfertasLojaSlug(loja, res.slugCampanha, 60);
                }
            });
        };
        this.getMenuDepartamentoSlug = (loja, slug) => {
            this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaSlug?loja=${loja}&slug=${slug}`);
        };
        this.getMenuDepartamentoCampanha = (loja, campanha) => {
            this.departamento = this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaCampanha?loja=${loja}&campanha=${campanha}`);
        };
        this.toogle = (str) => {
            this.str = str;
            this.view = !this.view;
        };
        this.setSeo = (item) => {
            this.seo.addCanonical();
            this.seo.updateTags({
                title: `Confira as ${item.title} | Condor.com.br`,
                description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.addCanonical();
            this.seo.dataLayerPage(item.title);
        };
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getCampanha(data));
    }
};
CampanhaComponent = __decorate([
    Component({
        selector: 'app-campanha',
        templateUrl: './campanha.component.html',
        styleUrls: ['./campanha.component.scss']
    })
], CampanhaComponent);
export { CampanhaComponent };
//# sourceMappingURL=campanha.component.js.map