import { __decorate } from "tslib";
import { Component, Output, Input, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
let SelectLojaComponent = class SelectLojaComponent {
    constructor(router, seo, db, util, news, storageMap) {
        this.router = router;
        this.seo = seo;
        this.db = db;
        this.util = util;
        this.news = news;
        this.storageMap = storageMap;
        this.type = 'simple';
        this.load = false;
        this.lojas = [];
        this.lojaDefault = { loja: 21, slug: 'hiper-condor-nilo-pecanha', nome: 'Hiper Condor Nilo Peçanha' };
        this.getLojas = (e) => this.news.LojaPorRegion(e.target.value).pipe(take(1))
            .subscribe((res) => this.lojas = res);
        this.setLocalStorageLoja = () => this.storageMap.set('Loja', this.lojaDefault)
            .subscribe(() => { });
        this.getLocalStorageLoja = () => this.util.StorageParse('Loja');
        this.selectCondor = () => {
            this.news.LojaId(this.condor).subscribe(data => {
                this.db.getOfertas(data.cod_loja).pipe(take(1)).subscribe();
                this.storageMap.set('Loja', { loja: data.cod_loja, slug: data.slug, nome: data.title1 }).subscribe(() => { });
            });
            this.frame.hide();
        };
        this.open = () => {
            this.frame.show();
            this.seo.dataLayerTracking({ event: 'findStore', storeAction: 'Clique Header', storeName: 'Nome da Loja' });
        };
        this.close = () => this.frame.hide();
    }
    ngOnInit() {
        this.miObjeto = this.storageMap.watch('Loja');
        timer(400).subscribe(() => { if (this.load === true) {
            this.frame.show();
        } });
        this.region = this.news.getRegion$();
    }
};
__decorate([
    Output()
], SelectLojaComponent.prototype, "loja", void 0);
__decorate([
    Input()
], SelectLojaComponent.prototype, "new", void 0);
__decorate([
    Input()
], SelectLojaComponent.prototype, "type", void 0);
__decorate([
    Input()
], SelectLojaComponent.prototype, "load", void 0);
__decorate([
    ViewChild('frame', { static: true })
], SelectLojaComponent.prototype, "frame", void 0);
SelectLojaComponent = __decorate([
    Component({
        selector: 'app-select-loja',
        templateUrl: './select-loja.component.html',
        styleUrls: ['./select-loja.component.scss']
    })
], SelectLojaComponent);
export { SelectLojaComponent };
//# sourceMappingURL=select-loja.component.js.map