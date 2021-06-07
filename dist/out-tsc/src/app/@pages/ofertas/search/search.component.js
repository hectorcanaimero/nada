import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/seo.service";
import * as i2 from "@core/services/util.service";
import * as i3 from "@core/services/data.service";
import * as i4 from "@angular/router";
import * as i5 from "@ngx-pwa/local-storage";
import * as i6 from "@angular/common";
import * as i7 from "../../../@widgets/ofertas/ofertas.component";
import * as i8 from "@sharing/product/product.component";
function SearchComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "app-product", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("code", item_r1);
} }
export class SearchComponent {
    constructor(seo, util, db, act, storageMap) {
        this.seo = seo;
        this.util = util;
        this.db = db;
        this.act = act;
        this.storageMap = storageMap;
        this.loja = [];
        this.items = [];
        this.fill = [];
        this.product = [];
        this.message = '';
    }
    ngOnInit() {
        this.seo.addCanonical();
        this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug.subscribe(data => {
            this.Search(data);
        }, err => console.log(err));
    }
    Search(slug) {
        let ofertas = [];
        const fills = [];
        const text = slug.split('-').join('%20');
        const search = slug.split('-').join(' ');
        this.storageMap.watch('Loja').subscribe(({ loja }) => {
            this.db.Search(text).subscribe(res => {
                // tslint:disable-next-line: forin
                for (const k in res) {
                    // tslint:disable-next-line: forin
                    for (const i in res[k].ofertas) {
                        if (res[k].ofertas[i].loja === +loja) {
                            ofertas = {
                                campanhaId: res[k].ofertas[i].campanhaId,
                                campanha: res[k].ofertas[i].campanha,
                                hostId: res[k].ofertas[i].hostId,
                                host: res[k].ofertas[i].host,
                                loja: res[k].ofertas[i].loja,
                                departamento: res[k].ofertas[i].departamento,
                                slug: res[k].ofertas[i].slug,
                                preco_regular: res[k].ofertas[i].preco_regular,
                                parcela_regular: res[k].ofertas[i].parcela_regular,
                                qtd_regular: res[k].ofertas[i].qtd_regular,
                                preco_clube: res[k].ofertas[i].preco_clube,
                                parcela_clube: res[k].ofertas[i].parcela_clube,
                                qtd_clube: res[k].ofertas[i].qtd_clube,
                                dsc_kit: res[k].ofertas[i].dsc_kit,
                                cod_kit: res[k].ofertas[i].cod_kit,
                                produtos: res[k]
                            };
                            fills.push(ofertas);
                        }
                    }
                }
                this.items = fills;
                if (this.items.length > 0) {
                    this.message = `Ofertas encontradas para a sua busca "${search}".`;
                    this.seo.dataLayerTracking({
                        event: 'siteSearch',
                        searchTerm: search
                    });
                }
                else {
                    this.seo.dataLayerTracking({
                        event: 'notfound',
                        searchTerm: search
                    });
                    this.message = 'Esse produto não está disponível no site.<br>Mas aproveite as outras ofertas que preparamos para você.';
                }
            }, err => {
                console.log(err);
            });
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(i0.ɵɵdirectiveInject(i1.SeoService), i0.ɵɵdirectiveInject(i2.UtilService), i0.ɵɵdirectiveInject(i3.DataService), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i5.StorageMap)); };
SearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchComponent, selectors: [["app-search"]], decls: 6, vars: 4, consts: [["id", "search", 1, "p-y-3", "py-md-5"], [1, "container"], [1, "h2-responsive", "b-7", "mb-4", 3, "innerHTML"], [1, "row", "mb-4"], ["class", "col-md-4 mb-4 col-lg-3", 4, "ngFor", "ngForOf"], ["title", "Mais ofertas", "icon", "fas fa-shopping-basket", "type", "slug", 3, "code", "sector"], [1, "col-md-4", "mb-4", "col-lg-3"], [3, "code"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "h1", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, SearchComponent_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "app-widget-ofertas", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHTML", ctx.message, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.items);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("code", "geral")("sector", ctx.product.setor);
    } }, directives: [i6.NgForOf, i7.OfertasComponent, i8.ProductComponent], styles: [".sem-clube[_ngcontent-%COMP%] { opacity: 0 !important; }\n\n.price-card[_ngcontent-%COMP%]{\n  width: 100%;\n  text-align: left;\n  float: left;\n  margin: 5px;\n  position: relative;\n  border-radius: 2px;\n  background: #f5f6fa;\n  background: -moz-linear-gradient(20deg, #f0faff 0%, white 50%, white 100%);\n  background: -webkit-linear-gradient(20deg, #f0faff 0%, white 50%, white 100%);\n  background: linear-gradient(20deg, #f0faff 0%, white 50%, white 100%);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  &:hover {\n    cursor: pointer;\n    background: -moz-linear-gradient(20deg, #f0faff 0%, white 50%, white 100%);\n    background: -webkit-linear-gradient(20deg, #f0faff 0%, white 50%, white 100%);\n    background: linear-gradient(20deg, #f0faff 0%, white 50%, white 100%);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n  .img-container {\n    height: 35%;\n    padding: 10px 20px;\n    text-align: center;\n    min-height: 200px;\n    position: relative;\n    .legal {\n      width: 200px;\n      top: 205px;\n      left: 2px;\n      text-align: right;\n      position: absolute;\n      font-size: .6rem;\n      transform-origin: 0 0;\n      transform: rotate(-90deg);\n    }\n    .pack {\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      width: 100%;\n      background: linear-gradient(29deg, rgba(9, 45, 94, 1) 0%, rgba(5, 107, 220, 1) 100%);\n      text-align: center;\n      color: #fff;\n      padding: 5px;\n      display: block;\n      align-items: center;\n      justify-content: center;\n      font-size: .8rem;\n      font-weight: 400;\n      letter-spacing: -.12px;\n      line-height: 1.2;\n      box-shadow: 2px 2px 3px #00000040;\n      border-radius: 10px;\n      img {\n        position: absolute;\n        right: -5px;\n        top: -15px;\n        width: 40px;\n        margin-top: -15px;\n        height: auto;\n      }\n    }\n  }\n  .card-content {\n    width: 100%;\n    padding: 10px;\n    min-height: 300px;\n    display: -moz-inline-grid;\n    display: -webkit-box;\n    display: inline-grid;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    flex-direction: column;\n    -webkit-box-pack: flex-top;\n    justify-content: flex-top;\n    -webkit-box-align: center;\n    align-items: center;\n    text-align: left;\n    p {\n      padding: 0 5px;\n      width: 100%;\n      height: 45px;\n      font-size: 1rem;\n      line-height: 1.1;\n      font-weight: 900;\n      position: relative;\n      margin-bottom: 0rem;\n      span {\n        font-size: 1.1rem;\n        font-weight: 900;\n        text-transform: none;\n        &.parcela {\n          position: relative;\n          &::after{\n            content: \"no cart\u00E3o Condor\";\n            position: absolute;\n            left: 103%;\n            bottom: 1px;\n            font-size: 0.7rem;\n            width: 62px;\n            line-height: 1.1;\n            font-weight: 600;\n          }\n        }\n      }\n    }\n    .description {\n      width: 100%;\n      height: 35px;\n      span {\n        display: block;\n        font-size: .8rem;\n      }\n    }\n    .regular {\n      font-weight: 400;\n      font-size: .9rem;\n      margin-bottom: 0;\n      margin-top: .75rem;\n      span{\n        font-size: .7rem;\n        font-weight: 400;\n        text-shadow: initial !important;\n      }\n    }\n    h2 {\n      text-align: left;\n      width: 100%;\n      font-size: 1.2rem;\n      font-weight: 900;\n      span {\n        font-size: .8rem;\n      }\n    }\n  }\n  .ddv {\n    background: #37a0cd!important;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    div{\n      &:nth-child(1) {\n        padding: 4px 10px;\n        text-align: center;\n        img{\n          margin: 0 auto;\n          width: 60%;\n        }\n      }\n      &:nth-child(2) {\n        width: 100%;\n        padding: 5px;\n        .sll{\n          margin-top: -3px;\n          margin-bottom: 0px;\n          font-size: .75rem;\n          text-align: center;\n          font-weight: 700;\n          text-transform: uppercase;\n          color: #fff;\n          span{\n            color: #ffdd3d;\n            font-weight: 700;\n          }\n        }\n      }\n    }\n  }\n\n  .parcelamento, .sem-parcelamento { width: 100%; }\n  .sem-parcelamento { margin-top: 135px; }\n\n  .laranja *, .azul * { margin: 0; }\n  .laranja {\n    margin: 15px 0;\n    .clube {\n      border-radius: 15px;\n      box-shadow: 0 10px 15px rgba(249, 144, 25, 0.44), 0 5px 5px rgba(251, 211, 130, 0.22)\n    }\n    h2 {\n      margin-top: -3px;\n    }\n    .azul{\n      h2 {\n        margin-top: -3px;\n        color: #1a91c6;\n      }\n    }\n  }\n\n\n  .tag {\n    width: 100%;\n    text-align: center;\n    position: relative;\n    margin: -10px 0 -20px 0;\n    img {\n      max-width: 50%;\n      z-index: 2;\n    }\n    &:before {\n      content: \"\";\n      left: 0;\n      top: 45%;\n      width: 20%;\n      height: 1px;\n      background: #ff8924;\n      position: absolute;\n    }\n    &:after {\n      content: \"\";\n      right: 0;\n      top: 45%;\n      width: 20%;\n      height: 1px;\n      background: #ff8924;\n      position: absolute;\n    }\n  }\n\n  .validade {\n    font-size: .65rem;\n    line-height: 1.1;\n    margin-top: 5px;\n    text-align: center;\n    letter-spacing: 0px;\n  }\n}\n\n\n\n\n@media(min-width: 375px) {\n  .price-card[_ngcontent-%COMP%]{\n    .ddv {\n      flex-direction: row;\n      align-items: center;\n      div{\n        &:nth-child(1) {\n          padding: 3px;\n          width: 35%;\n          img{ width: 100%; }\n        }\n        &:nth-child(2) {\n          width: 65%;\n          .sll{\n            margin-top: 2px ;\n            font-size: .75rem;\n          }\n        }\n      }\n    }\n    .tag {\n      img { max-width: 60%; }\n      &:before { width: 10%; }\n      &:after { width: 10%; }\n    }\n  }\n}\n\n\n@media(min-width: 768px) {\n  .price-card[_ngcontent-%COMP%]{\n    .card-content{\n      .description {\n        span {\n          font-size: .9rem;\n        }\n      }\n    }\n    .ddv {\n      div{\n        &:nth-child(2) {\n          .sll{ margin-top: 11px; }\n        }\n      }\n    }\n    .validade {\n      font-size: .70rem;\n    }\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchComponent, [{
        type: Component,
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: i1.SeoService }, { type: i2.UtilService }, { type: i3.DataService }, { type: i4.ActivatedRoute }, { type: i5.StorageMap }]; }, null); })();
//# sourceMappingURL=search.component.js.map