import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/seo.service";
import * as i3 from "@core/services/util.service";
import * as i4 from "@ngx-pwa/local-storage";
import * as i5 from "@angular/common";
import * as i6 from "../../@core/directives/product.directive";
import * as i7 from "../../@core/pipes/truncate.pipe";
function ProductComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "+18");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProductComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "KIT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProductComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 21);
} }
function ProductComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 22);
} }
function ProductComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function ProductComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 23);
} }
const _c0 = function (a0) { return [a0, "R$", "symbol", "1.2-2", "pt"]; };
function ProductComponent_div_22_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r9.code.qtd_clube || 0, "x de ", i0.ɵɵpipeBindV(3, 2, i0.ɵɵpureFunction1(8, _c0, ctx_r9.code.parcela_clube || 0)), " no cart\u00E3o Condor. ");
} }
function ProductComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "p", 25);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "currency");
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ProductComponent_div_22_div_6_Template, 4, 10, "div", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const _r7 = i0.ɵɵreference(31);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(3, 4, i0.ɵɵpureFunction1(10, _c0, ctx_r6.code.preco_clube || 0)), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r6.code.produtos.embalagem);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.code.parcela_clube)("ngIfElse", _r7);
} }
function ProductComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} }
export class ProductComponent {
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
        this.goToProduct = () => {
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
        };
    }
    ngOnInit() {
        this.product = this.code.produtos;
        this.storageMap.watch('Loja').subscribe((res) => {
            if (res)
                this.loja = res;
            else
                this.loja = { loja: 0, slug: '', nome: '' };
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SeoService), i0.ɵɵdirectiveInject(i3.UtilService), i0.ɵɵdirectiveInject(i4.StorageMap)); };
ProductComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProductComponent, selectors: [["app-product"]], inputs: { code: "code", loja: "loja" }, decls: 32, vars: 33, consts: [[1, "product", 3, "click"], [1, "message"], ["class", "mas18", 4, "ngIf"], ["class", "kit", 4, "ngIf"], [1, "images"], ["appProduct", "", 3, "src", "alt"], [1, "promotion"], ["Lazy", "", "src", "./assets/images/clube.png", "alt", "Tag Clube Condor", "class", "selo_clube", 4, "ngIf"], ["Lazy", "", "src", "./assets/images/selo_ddv.png", "alt", "Dinheiro de Volta", "class", "selo_ddv", 4, "ngIf"], [1, "content"], [1, "title"], [1, "regular"], [4, "ngIf"], ["style", "height: 54px;", 4, "ngIf"], [3, "ngClass"], [2, "height", "18px"], ["class", "clube", 4, "ngIf"], [1, "validade"], ["semParcela", ""], [1, "mas18"], [1, "kit"], ["Lazy", "", "src", "./assets/images/clube.png", "alt", "Tag Clube Condor", 1, "selo_clube"], ["Lazy", "", "src", "./assets/images/selo_ddv.png", "alt", "Dinheiro de Volta", 1, "selo_ddv"], [2, "height", "54px"], [1, "clube"], [1, "price"], ["class", "parcela", 4, "ngIf", "ngIfElse"], [1, "parcela"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function ProductComponent_Template_div_click_0_listener() { return ctx.goToProduct(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, ProductComponent_div_2_Template, 3, 0, "div", 2);
        i0.ɵɵtemplate(3, ProductComponent_div_3_Template, 3, 0, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "img", 5);
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵtemplate(7, ProductComponent_img_7_Template, 1, 0, "img", 7);
        i0.ɵɵtemplate(8, ProductComponent_img_8_Template, 1, 0, "img", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 9);
        i0.ɵɵelementStart(10, "p", 10);
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "truncate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 11);
        i0.ɵɵtemplate(14, ProductComponent_div_14_Template, 1, 0, "div", 12);
        i0.ɵɵtemplate(15, ProductComponent_div_15_Template, 1, 0, "div", 13);
        i0.ɵɵelementStart(16, "p", 14);
        i0.ɵɵtext(17);
        i0.ɵɵpipe(18, "currency");
        i0.ɵɵelementStart(19, "span");
        i0.ɵɵtext(20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(22, ProductComponent_div_22_Template, 7, 12, "div", 16);
        i0.ɵɵelementStart(23, "div", 17);
        i0.ɵɵelementStart(24, "p");
        i0.ɵɵtext(25);
        i0.ɵɵpipe(26, "date");
        i0.ɵɵpipe(27, "date");
        i0.ɵɵelement(28, "br");
        i0.ɵɵtext(29);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(30, ProductComponent_ng_template_30_Template, 1, 0, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.code.image === ctx.mas18);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.code.kit);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.code.host, i0.ɵɵsanitizeUrl)("alt", ctx.code.produtos.dsc_produto);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.code.preco_clube);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.code.preco_cashback);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 16, ctx.code.produtos.dsc_produto, 70));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.code.preco_clube);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.code.preco_clube);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.code.preco_clube ? "price-clube" : "price-normal");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(18, 19, i0.ɵɵpureFunction1(31, _c0, ctx.code.preco_regular || 0)), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.code.produtos.embalagem);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.code.preco_clube);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2(" Oferta V\u00E1lida de ", i0.ɵɵpipeBind2(26, 25, ctx.code.produtos.start, "dd/MM/yyyy"), " a ", i0.ɵɵpipeBind2(27, 28, ctx.code.produtos.end, "dd/MM/yyyy"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", ctx.loja.nome, " ");
    } }, directives: [i5.NgIf, i6.ProductDirective, i5.NgClass], pipes: [i7.TruncatePipe, i5.CurrencyPipe, i5.DatePipe], styles: [".product[_ngcontent-%COMP%] {\n  color: var(--product-text);\n  position: relative;\n  border-radius: 10px;\n  background-color: var(--product-background);\n  box-shadow: 2px 3px 4px rgba($color: #000000, $alpha: .20);\n  .message {\n    .mas18 {\n      border-radius: 10px 0 0 0;\n      position: absolute;\n      background-color: var(--product-mas18);\n      width: auto;\n      height: 30px;\n      top: 0;\n      left: 0;\n      p {\n        margin-top: 3px;\n        padding: 0 10px;\n        font-weight: 600;\n        font-size: 1rem;\n        text-align: center;\n        margin-bottom: 0px;\n        color: var(--product-color-text-mas18);\n      }\n    }\n    .kit {\n      border-radius: 0 10px 0 0;\n      position: absolute;\n      background-color: var(--product-kit);\n      width: auto;\n      height: 30px;\n      top: 0;\n      right: 0;\n      p {\n        margin-top: 3px;\n        padding: 0 10px;\n        font-weight: 600;\n        font-size: 1rem;\n        text-align: center;\n        margin-bottom: 0px;\n        color: var(--product-color-text-mas18);\n      }\n    }\n  }\n  .images{\n    text-align: center;\n    .promotion{\n      position: relative;\n      .selo_clube {\n        position: absolute;\n        bottom: 0px;\n        right: 10px;\n        width: 40px;\n        height: auto;\n      }\n      .selo_ddv {\n        position: absolute;\n        bottom: 40px;\n        right: 10px;\n        width: 40px;\n        height: auto;\n      }\n    }\n    img {\n      padding: 1rem 0;\n      height: 130px;\n      width: auto;\n      margin: 0 auto;\n    }\n  }\n  .content {\n    padding: .35rem;\n    .title {\n      min-height: 48px;\n    }\n    .regular {\n      margin-bottom: 0px;\n      .price-normal {\n        font-weight: 800;\n        font-size: 1.2rem;\n        margin-bottom: 0px;\n      }\n      .price-clube {\n        font-weight: 500;\n        font-size: .85rem;\n      }\n    }\n    .clube {\n      .price {\n        font-size: 1.2rem;\n        font-weight: 800;\n        margin-bottom: 0px;\n      }\n      .parcela {\n        p {\n          font-weight: 700;\n          font-size: .75rem;\n          margin-bottom: 0px;\n        }\n      }\n    }\n    .validade {\n      margin: .20rem 0;\n      p {\n        text-align: center;\n        margin-bottom: 0;\n        font-size: .65rem;\n      }\n    }\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProductComponent, [{
        type: Component,
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss'],
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.SeoService }, { type: i3.UtilService }, { type: i4.StorageMap }]; }, { code: [{
            type: Input
        }], loja: [{
            type: Input
        }] }); })();
//# sourceMappingURL=product.component.js.map