import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { timer } from 'rxjs';
let ProductComponent = class ProductComponent {
    constructor(router, seo, util, storageMap) {
        this.router = router;
        this.seo = seo;
        this.util = util;
        this.storageMap = storageMap;
        this.code = [];
        this.loja = [];
        this.mas18 = 'Aprecie com moderação. É proibida a venda de bebidas alcoólicas a menores de 18 anos (Lei nº 8.069/90 Art.81, Estatuto da Criança e do Adolescente).';
        this.product = [];
        this.imagem = [];
    }
    ngOnInit() {
        timer(500).subscribe(() => {
            this.product = this.code.produtos;
            this.subscription = this.storageMap.watch('Loja').subscribe((res) => {
                if (res)
                    this.loja = res;
                else
                    this.loja = { loja: 0, slug: '', nome: '' };
            });
        });
    }
    ngOnChanges(changes) {
        //. console.log(changes);
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    goToProduct() {
        this.seo.dataLayerTracking({
            event: 'productInteraction',
            productAction: 'Visualizar Produto',
            productName: this.code.produtos.dsc_produto
        });
        this.router.navigate([
            'produto',
            this.util.toSlug(this.code.produtos.dsc_departamento),
            this.util.toSlug(this.code.produtos.dsc_setor),
            this.code.produtos.slug
        ]);
    }
};
__decorate([
    Input()
], ProductComponent.prototype, "code", void 0);
__decorate([
    Input()
], ProductComponent.prototype, "loja", void 0);
ProductComponent = __decorate([
    Component({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.scss'],
    })
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map