import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
let ProductIdComponent = class ProductIdComponent {
    constructor(router, seo, db, util, act, storageMap) {
        this.router = router;
        this.seo = seo;
        this.db = db;
        this.util = util;
        this.act = act;
        this.storageMap = storageMap;
        this.code = [];
        this.product = [];
        this.init = false;
        this.loja = '';
        this.splitSlugHost = (slug) => {
            const host = slug.split('-');
            return +host[host.length - 1];
        };
        this.getProduct = (host) => {
            this.storageMap.watch('Loja').subscribe(({ loja, nome }) => {
                this.loja = nome;
                this.items$ = this.db.ProdutoLoja(loja, host).pipe(tap((res) => this.getSeo(res)), delay(100));
            });
        };
        this.br_depart = (depart) => this.router.navigate(['departamento', this.util.toSlug(this.product.dsc_departamento)]);
        this.br_setor = (depart, setor) => this.router.navigate(['departamento', this.util.toSlug(this.product.dsc_departamento),
            'setor', this.util.toSlug(this.product.dsc_setor)]);
        this.onTracking = (name, type) => this.seo.dataLayerTracking({ event: 'productpageAction', productName: name, productButton: type });
        this.getSeo = (code) => {
            this.seo.updateTags({
                title: `Confira a Ofertas de ${code.produtos.dsc_produto} | Condor.com.br`,
                description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
                image: `https://marketing.condor.com.br/db/Containers/produtos/download/${code.host}.jpg`
            });
            this.seo.addCanonical();
            this.seo.dataLayerPage(code.produtos.dsc_produto);
        };
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getProduct(this.splitSlugHost(data)));
    }
};
ProductIdComponent = __decorate([
    Component({
        selector: 'app-product-id',
        templateUrl: './product-id.component.html',
        styleUrls: ['./product-id.component.scss']
    })
], ProductIdComponent);
export { ProductIdComponent };
//# sourceMappingURL=product-id.component.js.map