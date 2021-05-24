import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
let LojaIdComponent = class LojaIdComponent {
    constructor(router, seo, news, activate) {
        this.router = router;
        this.seo = seo;
        this.news = news;
        this.activate = activate;
        this.servicos = [];
        this.getItems = (slug) => {
            this.items$ = this.news.LojaSlug(slug).pipe(tap((res) => {
                this.setSeo(res);
                this.splitTypes(res);
            }), map((res) => res), delay(1000));
        };
        this.onLoja = (ev) => {
            const value = ev.target.value;
            if (value === 'All')
                this.lojas$ = this.news.Lojas(100);
            else
                this.lojas$ = this.news.LojaPorRegion(value);
        };
        this.goToLoja = (ev) => {
            const value = ev.target.value;
            if (value !== 'All') {
                this.seo.dataLayerTracking({ event: 'findStore', storeAction: 'Ver Loja', storeName: value });
                this.router.navigate(['lojas', value]);
            }
        };
        this.onTracking = (loja, type) => {
            this.seo.dataLayerTracking({ event: 'storepageAction', storeName: loja, buttonAction: type });
        };
        this.splitTypes = (res) => {
            this.setores = res.setores.split(',');
            this.servicos = res.servicos.split(',');
        };
        this.setSeo = (items) => {
            this.seo.addCanonical();
            this.seo.dataLayerPage(items.title1);
            this.seo.updateTags({
                title: `${items.title.rendered} - Telefones e Endereço`,
                description: items.content.rendered,
                image: items.medium
            });
        };
    }
    ngOnInit() {
        this.slug$ = this.activate.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe((res) => this.getItems(res));
        this.region$ = this.news.LojaRegion();
    }
};
LojaIdComponent = __decorate([
    Component({
        selector: 'app-loja-id',
        templateUrl: './loja-id.component.html',
        styleUrls: ['./loja-id.component.scss']
    })
], LojaIdComponent);
export { LojaIdComponent };
//# sourceMappingURL=loja-id.component.js.map