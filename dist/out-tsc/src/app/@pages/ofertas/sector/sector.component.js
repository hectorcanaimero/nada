import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, tap, debounceTime } from 'rxjs/operators';
let SectorComponent = class SectorComponent {
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
        this.viewSector = true;
        this.init = false;
        this.url = [];
        this.menu = [];
        this.proccess = (slug) => {
            this.seo.addCanonical();
            this.getSector(slug);
        };
        this.getSector = (slug) => {
            this.url = { nome: this.router.url.split('/')[2], link: this.util.toSlug(this.router.url.split('/')[2]) };
            this.menuSector$ = this.db.getMenuOfertas(`menuSetorSlug?slug=${slug}`).pipe(map((res) => res[0]), tap(({ dep_id, codigo }) => this.watchStorage(dep_id, codigo), debounceTime(1000)));
        };
        this.watchStorage = (depId, codigo) => {
            this.storageMap.watch('Loja').subscribe(({ loja }) => {
                this.getMenuDepartamento(loja);
                this.sector$ = this.db.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${loja}&departamento=${depId}`);
                this.items$ = this.db.OfertasLojaDepartamentoSetor(loja, depId, codigo).pipe(map((data) => data.filter((row) => row.produtos)));
            });
        };
        this.getMenuDepartamento = (loja) => this.menu = this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaDepartamento?loja=${loja}`);
        this.toogle = () => this.viewSector = !this.viewSector;
        this.busca = (e) => this.search = e.target.value;
        this.Seo = (title) => {
            this.seo.addCanonical();
            this.seo.setTitle(`${title} | Rede Condor`);
            this.seo.updateTagName(`${title} | Rede Condor`);
            this.seo.dataLayerPage(title);
        };
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.proccess(data));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
SectorComponent = __decorate([
    Component({
        selector: 'app-sector',
        templateUrl: './sector.component.html',
        styleUrls: ['./sector.component.scss']
    })
], SectorComponent);
export { SectorComponent };
//# sourceMappingURL=sector.component.js.map