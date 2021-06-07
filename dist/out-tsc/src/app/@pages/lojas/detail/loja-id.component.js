import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/seo.service";
import * as i3 from "@core/services/news.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "angular-bootstrap-md";
import * as i7 from "../../../@sharing/sem-data/sem-data.component";
function LojaIdComponent_section_0_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r8.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(r_r8.name);
} }
function LojaIdComponent_section_0_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", i_r9.slug);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r9.title1);
} }
function LojaIdComponent_section_0_div_33_mdb_badge_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mdb-badge", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sec_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", sec_r11, " ");
} }
function LojaIdComponent_section_0_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵelementStart(2, "h3", 30);
    i0.ɵɵtext(3, "Setores");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, LojaIdComponent_section_0_div_33_mdb_badge_4_Template, 2, 1, "mdb-badge", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r6.setores);
} }
function LojaIdComponent_section_0_div_34_mdb_badge_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mdb-badge", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ser_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ser_r13, " ");
} }
function LojaIdComponent_section_0_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵelementStart(2, "h3", 30);
    i0.ɵɵtext(3, "Servi\u00E7os");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, LojaIdComponent_section_0_div_34_mdb_badge_4_Template, 2, 1, "mdb-badge", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r7.servicos);
} }
function LojaIdComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "h2", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "select", 7);
    i0.ɵɵlistener("change", function LojaIdComponent_section_0_Template_select_change_6_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onLoja($event); });
    i0.ɵɵelementStart(7, "option", 8);
    i0.ɵɵtext(8, "Todas as regi\u00F5es");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, LojaIdComponent_section_0_option_9_Template, 2, 2, "option", 9);
    i0.ɵɵpipe(10, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵelementStart(12, "select", 11);
    i0.ɵɵlistener("change", function LojaIdComponent_section_0_Template_select_change_12_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.goToLoja($event); });
    i0.ɵɵelementStart(13, "option", 8);
    i0.ɵɵtext(14, "Todas as lojas");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, LojaIdComponent_section_0_option_15_Template, 2, 2, "option", 9);
    i0.ɵɵpipe(16, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 12);
    i0.ɵɵelementStart(18, "div", 13);
    i0.ɵɵelement(19, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 15);
    i0.ɵɵelement(21, "div", 16);
    i0.ɵɵelementStart(22, "div", 17);
    i0.ɵɵelementStart(23, "a", 18);
    i0.ɵɵlistener("click", function LojaIdComponent_section_0_Template_a_click_23_listener() { i0.ɵɵrestoreView(_r15); const item_r3 = ctx.ngIf; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onTracking(item_r3.title1, "Rota"); });
    i0.ɵɵelement(24, "i", 19);
    i0.ɵɵtext(25, " Como chegar ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "a", 20);
    i0.ɵɵlistener("click", function LojaIdComponent_section_0_Template_a_click_26_listener() { i0.ɵɵrestoreView(_r15); const item_r3 = ctx.ngIf; const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onTracking(item_r3.title1, "Ligar"); });
    i0.ɵɵelement(27, "i", 21);
    i0.ɵɵtext(28, " Ligue Agora ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "a", 22);
    i0.ɵɵlistener("click", function LojaIdComponent_section_0_Template_a_click_29_listener() { i0.ɵɵrestoreView(_r15); const item_r3 = ctx.ngIf; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onTracking(item_r3.title1, "Avaliar"); });
    i0.ɵɵelement(30, "i", 23);
    i0.ɵɵtext(31, " Avalie no google ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 24);
    i0.ɵɵtemplate(33, LojaIdComponent_section_0_div_33_Template, 5, 1, "div", 25);
    i0.ɵɵtemplate(34, LojaIdComponent_section_0_div_34_Template, 5, 1, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.title1);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(10, 11, ctx_r0.region$));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(16, 13, ctx_r0.lojas$));
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("alt", item_r3.title1);
    i0.ɵɵproperty("src", item_r3.medium, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", item_r3.content1, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", item_r3.maps, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("href", "tel:", item_r3.telefone, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r3.avaliacao, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", (ctx_r0.setores == null ? null : ctx_r0.setores.length) > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r0.servicos == null ? null : ctx_r0.servicos.length) > 1);
} }
function LojaIdComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class LojaIdComponent {
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
}
LojaIdComponent.ɵfac = function LojaIdComponent_Factory(t) { return new (t || LojaIdComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SeoService), i0.ɵɵdirectiveInject(i3.NewsService), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
LojaIdComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LojaIdComponent, selectors: [["app-loja-id"]], decls: 4, vars: 4, consts: [["id", "single-loja", "class", "py-5 h-100", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "single-loja", 1, "py-5", "h-100"], [1, "container"], [1, "b-07", "border-bottom", "pb-1", "mb-4"], [1, "row", "justify-content-center", "my-4"], [1, "col-md-4"], [1, "browser-default", "custom-select", "mb-2", 3, "change"], ["selected", "", "value", "All"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "browser-default", "custom-select", 3, "change"], [1, "row", "ios", "mb-5"], [1, "col-md-5"], [1, "w-100", "mb-4", 3, "src", "alt"], [1, "col-md-7"], [3, "innerHTML"], [1, "buttom"], ["target", "_blank", 1, "btn", "btn-primary", "rounded", 3, "href", "click"], [1, "fas", "fa-map-marker", "mr-2"], ["target", "_blank", 1, "btn", "btn-success", "rounded", "d-xl-none", 3, "href", "click"], [1, "fas", "fa-phone", "mr-2"], ["target", "_blank", 1, "btn", "btn-light", "rounded", 3, "href", "click"], [1, "fab", "fa-google", "mr-2"], [1, "row", "ios", "mb-3"], ["class", "col-md-6 mb-4 mb-md-0", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], [3, "value"], [1, "col-md-6", "mb-4", "mb-md-0"], [1, "px-3"], [1, "b-07", "pb-1", "mb-4", "border-bottom"], ["primary", "true", "class", "mr-2 mb-1", 4, "ngFor", "ngForOf"], ["primary", "true", 1, "mr-2", "mb-1"], ["danger", "true", "class", "mr-2 mb-1", 4, "ngFor", "ngForOf"], ["danger", "true", 1, "mr-2", "mb-1"]], template: function LojaIdComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LojaIdComponent_section_0_Template, 35, 15, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, LojaIdComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [i4.NgIf, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_x, i4.NgForOf, i6.MDBBadgeComponent, i7.SemDataComponent], pipes: [i4.AsyncPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LojaIdComponent, [{
        type: Component,
        args: [{
                selector: 'app-loja-id',
                templateUrl: './loja-id.component.html',
                styleUrls: ['./loja-id.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.SeoService }, { type: i3.NewsService }, { type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=loja-id.component.js.map