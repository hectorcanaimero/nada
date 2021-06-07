import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/seo.service";
import * as i3 from "@core/services/news.service";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "ngx-pagination";
import * as i7 from "../../@sharing/sem-data/sem-data.component";
function LojasComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r5.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(r_r5.name);
} }
function LojasComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", i_r6.slug);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r6.title1);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { "background": a0 }; };
function LojasComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "h4", 17);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const loja_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(3, _c0, loja_r8.slug));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(loja_r8.title1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c1, "url(" + loja_r8.medium + ") no-repeat center center"));
} }
const _c2 = function (a1) { return { itemsPerPage: 9, currentPage: a1 }; };
function LojasComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, LojasComponent_div_17_div_1_Template, 5, 7, "div", 14);
    i0.ɵɵpipe(2, "paginate");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, i0.ɵɵpipeBind1(3, 4, ctx_r2.items$), i0.ɵɵpureFunction1(6, _c2, ctx_r2.p)));
} }
function LojasComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data", 19);
} }
export class LojasComponent {
    constructor(router, seo, news) {
        this.router = router;
        this.seo = seo;
        this.news = news;
        this.p = 1;
        this.setSeo = () => {
            this.seo.updateTags({
                title: `Supermercado Condor mais Próximo | Telefones e Endereços | Condor.com.br`,
                description: 'Encontre o Supermercado Condor Mais Próximo de Você! Confira Endereços, Telefones e Rotas de todas as Lojas Condor da sua Cidade.',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.dataLayerPage('Lojas');
            this.seo.addCanonical();
        };
        this.onLoja = (ev) => {
            const value = ev.target.value;
            if (value === 'All')
                this.items$ = this.news.Lojas(100).pipe(debounceTime(1000));
            else
                this.items$ = this.news.LojaPorRegion(value);
        };
        this.goToLoja = (ev) => {
            const value = ev.target.value;
            if (value !== 'All')
                this.router.navigate(['lojas', value]);
        };
    }
    ngOnInit() {
        this.setSeo();
        this.items$ = this.news.Lojas(100).pipe(debounceTime(1000));
        this.region$ = this.news.LojaRegion();
    }
}
LojasComponent.ɵfac = function LojasComponent_Factory(t) { return new (t || LojasComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SeoService), i0.ɵɵdirectiveInject(i3.NewsService)); };
LojasComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LojasComponent, selectors: [["app-lojas"]], decls: 22, vars: 10, consts: [["id", "loja", 1, "py-5"], [1, "container"], [1, "b-08", "border-bottom", "pb-1", "mb-3"], [1, "row", "justify-content-center", "my-4"], [1, "col-md-4", "mb-2"], [1, "browser-default", "custom-select", 3, "change"], ["selected", "", "value", "All"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["class", "row ios mb-5", 4, "ngIf", "ngIfElse"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", 3, "pageChange"], ["semData", ""], [3, "value"], [1, "row", "ios", "mb-5"], ["class", "col-md-6 col-lg-4 col-xl-4 mb-5", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "col-xl-4", "mb-5"], [1, "boxs", "z-depth-3", 3, "routerLink"], [1, "titulo"], [1, "images", 3, "ngStyle"], ["height", "50vh"]], template: function LojasComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h2", 2);
        i0.ɵɵtext(3, "O Condor mais Pr\u00F3ximo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "select", 5);
        i0.ɵɵlistener("change", function LojasComponent_Template_select_change_6_listener($event) { return ctx.onLoja($event); });
        i0.ɵɵelementStart(7, "option", 6);
        i0.ɵɵtext(8, "Todas as regi\u00F5es");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, LojasComponent_option_9_Template, 2, 2, "option", 7);
        i0.ɵɵpipe(10, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵelementStart(12, "select", 5);
        i0.ɵɵlistener("change", function LojasComponent_Template_select_change_12_listener($event) { return ctx.goToLoja($event); });
        i0.ɵɵelementStart(13, "option", 6);
        i0.ɵɵtext(14, "Todas as lojas");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, LojasComponent_option_15_Template, 2, 2, "option", 7);
        i0.ɵɵpipe(16, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, LojasComponent_div_17_Template, 4, 8, "div", 9);
        i0.ɵɵpipe(18, "async");
        i0.ɵɵelementStart(19, "pagination-controls", 10);
        i0.ɵɵlistener("pageChange", function LojasComponent_Template_pagination_controls_pageChange_19_listener($event) { return ctx.p = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, LojasComponent_ng_template_20_Template, 1, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(21);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(10, 4, ctx.region$));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(16, 6, ctx.items$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(18, 8, ctx.items$))("ngIfElse", _r3);
    } }, directives: [i4.NgSelectOption, i4.ɵangular_packages_forms_forms_x, i5.NgForOf, i5.NgIf, i6.PaginationControlsComponent, i1.RouterLink, i5.NgStyle, i7.SemDataComponent], pipes: [i5.AsyncPipe, i6.PaginatePipe], styles: [".boxs[_ngcontent-%COMP%]{\n  height: 320px;\n  cursor: pointer;\n  border-radius: 10px;\n  .titulo{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    font-weight: 600;\n    margin-bottom: 0px;\n    font-size: 1.3rem;\n    min-height: 70px;\n    color: var(--color-default--text);\n  }\n  .images{\n      height: 250px;\n      background-size: cover !important;\n      border-radius: 0 0 10px 10px;\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LojasComponent, [{
        type: Component,
        args: [{
                selector: 'app-lojas',
                templateUrl: './lojas.component.html',
                styleUrls: ['./lojas.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.SeoService }, { type: i3.NewsService }]; }, null); })();
//# sourceMappingURL=lojas.component.js.map