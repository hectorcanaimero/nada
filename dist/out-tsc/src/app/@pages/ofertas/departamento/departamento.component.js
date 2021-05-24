import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
import { slideDownInOut } from '@core/animations/slide';
let DepartamentoComponent = class DepartamentoComponent {
    constructor(router, db, seo, util, act, storageMap) {
        this.router = router;
        this.db = db;
        this.seo = seo;
        this.util = util;
        this.act = act;
        this.storageMap = storageMap;
        this.p = 1;
        this.search = '';
        this.viewDepart = true;
        this.viewSector = 'out';
        this.init = false;
        this.loja = [];
        this.menu = [];
        this.getDepartamento = (slug) => {
            console.log(slug);
            this.menuDepartamento$ = this.db.getMenuOfertas(`menuDepartamentoSlug?slug=${slug}`).pipe(map((res) => res[0]), tap(({ nome, codigo }) => this.proccess(nome, codigo)), delay(1000));
        };
        this.proccess = (nome, codigo) => {
            this.getSeo(nome);
            this.getData(codigo);
        };
        this.getData = (codigo) => {
            this.storageMap.watch('Loja').subscribe(({ loja }) => {
                this.menuSector$ = this.db.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${loja}&departamento=${codigo}`);
                this.items$ = this.db.OfertasLojaDepartamento(loja, codigo);
            });
        };
        this.getMenuDepartamento = (loja) => this.menu = this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaDepartamento?loja=${loja}`);
        this.onSearch = (e) => console.log(e.target.value);
        this.toogleSector = () => this.viewSector = this.viewSector === 'out' ? 'in' : 'out';
        this.toogleDepart = () => this.viewDepart = !this.viewDepart;
        this.getSeo = (departamento) => {
            this.seo.updateTags({
                title: `Confira as Ofertas de ${departamento} | Condor.com.br`,
                description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.addCanonical();
            this.seo.dataLayerPage(departamento);
        };
        this.trackById = (index, items) => items[index];
    }
    ngOnInit() {
        this.seo.addCanonical();
        this.loja = this.util.StorageParse('Loja');
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getDepartamento(data));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    ;
};
DepartamentoComponent = __decorate([
    Component({
        selector: 'app-departamento',
        templateUrl: './departamento.component.html',
        styleUrls: ['./departamento.component.scss'],
        animations: [slideDownInOut]
    })
], DepartamentoComponent);
export { DepartamentoComponent };
//# sourceMappingURL=departamento.component.js.map