import { Component, Output, Input, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/seo.service";
import * as i3 from "@core/services/data.service";
import * as i4 from "@core/services/util.service";
import * as i5 from "@core/services/news.service";
import * as i6 from "@ngx-pwa/local-storage";
import * as i7 from "@angular/common";
import * as i8 from "angular-bootstrap-md";
import * as i9 from "@angular/forms";
const _c0 = ["frame"];
function SelectLojaComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "a", 20);
    i0.ɵɵlistener("click", function SelectLojaComponent_div_0_div_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.open(); });
    i0.ɵɵelement(2, "mdb-icon", 21);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 22);
    i0.ɵɵelementStart(5, "a", 23);
    i0.ɵɵlistener("click", function SelectLojaComponent_div_0_div_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r9); i0.ɵɵnextContext(2); const _r1 = i0.ɵɵreference(3); return _r1.show(); });
    i0.ɵɵelementStart(6, "p", 24);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "mdb-icon", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const loja_r4 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", loja_r4["nome"], " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Mostrando as ofertas para ", loja_r4.nome, "");
} }
function SelectLojaComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "a", 27);
    i0.ɵɵlistener("click", function SelectLojaComponent_div_0_ng_template_2_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r13); i0.ɵɵnextContext(2); const _r1 = i0.ɵɵreference(3); return _r1.show(); });
    i0.ɵɵelementStart(3, "p", 28);
    i0.ɵɵtext(4, "Mostrando as ofertas para ");
    i0.ɵɵelementStart(5, "span", 29);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 30);
    i0.ɵɵelement(8, "i", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const loja_r4 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(loja_r4.nome);
} }
function SelectLojaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SelectLojaComponent_div_0_div_1_Template, 9, 2, "div", 18);
    i0.ɵɵtemplate(2, SelectLojaComponent_div_0_ng_template_2_Template, 9, 1, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.type === "simple")("ngIfElse", _r6);
} }
function SelectLojaComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r15.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(r_r15.name);
} }
function SelectLojaComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", l_r16.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(l_r16.title1);
} }
const _c1 = function () { return { backdrop: true, ignoreBackdropClick: true }; };
export class SelectLojaComponent {
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
        this.region = this.news.getRegion$();
    }
    ngAfterViewInit() {
        if (this.load === true)
            this.frame.show();
    }
}
SelectLojaComponent.ɵfac = function SelectLojaComponent_Factory(t) { return new (t || SelectLojaComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SeoService), i0.ɵɵdirectiveInject(i3.DataService), i0.ɵɵdirectiveInject(i4.UtilService), i0.ɵɵdirectiveInject(i5.NewsService), i0.ɵɵdirectiveInject(i6.StorageMap)); };
SelectLojaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectLojaComponent, selectors: [["app-select-loja"]], viewQuery: function SelectLojaComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.frame = _t.first);
    } }, inputs: { new: "new", type: "type", load: "load" }, outputs: { loja: "loja" }, decls: 28, vars: 10, consts: [[4, "ngIf"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myBasicModalLabel", "aria-hidden", "true", 1, "modal", "slide", "bottom", 2, "z-index", "10000", 3, "config"], ["frame", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "pt-2", "pointer", 2, "z-index", "100000", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "rounded-0"], [1, "py-4"], [1, "w-75", "mx-auto"], [1, "text-center", "b-06"], [1, "pb-2"], [1, "browser-default", "custom-select", 3, "change"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "browser-default", "custom-select", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "relative", "waves-light", 3, "click"], [4, "ngIf", "ngIfElse"], ["alert", ""], [1, "nav-link", "py-N", "header-menu", "d-none", "d-lg-block", 2, "color", "white!important", 3, "click"], ["fas", "", "icon", "map-marker"], [1, "bg-ver", "p-2", "d-lg-none"], [1, "nav-link", "py-N", "header-menu", "white-text", "position-relative", 3, "click"], [1, "mb-0", "w-ajustes"], ["fas", "", "icon", "map-marker", 1, "ajuste"], ["role", "alert", 1, "alert", "alert-info"], [1, "", 3, "click"], [1, "mb-0", "f-1"], [1, "b-7"], [1, "ml-1"], [1, "fas", "fa-retweet"], [3, "value"]], template: function SelectLojaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SelectLojaComponent_div_0_Template, 4, 2, "div", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵelementStart(2, "div", 1, 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "button", 5);
        i0.ɵɵlistener("click", function SelectLojaComponent_Template_button_click_6_listener() { return ctx.close(); });
        i0.ɵɵelementStart(7, "span", 6);
        i0.ɵɵtext(8, "\u00D7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelementStart(10, "div", 8);
        i0.ɵɵelementStart(11, "div", 9);
        i0.ɵɵelementStart(12, "h5", 10);
        i0.ɵɵtext(13, "Selecione sua loja favorita e conhe\u00E7a as ofertas.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 11);
        i0.ɵɵelementStart(15, "select", 12);
        i0.ɵɵlistener("change", function SelectLojaComponent_Template_select_change_15_listener($event) { return ctx.getLojas($event); });
        i0.ɵɵelementStart(16, "option", 13);
        i0.ɵɵtext(17, "Selecione a Cidade");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, SelectLojaComponent_option_18_Template, 2, 2, "option", 14);
        i0.ɵɵpipe(19, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 11);
        i0.ɵɵelementStart(21, "select", 15);
        i0.ɵɵlistener("ngModelChange", function SelectLojaComponent_Template_select_ngModelChange_21_listener($event) { return ctx.condor = $event; });
        i0.ɵɵelementStart(22, "option", 13);
        i0.ɵɵtext(23, "Selecione o Condor");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, SelectLojaComponent_option_24_Template, 2, 2, "option", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 16);
        i0.ɵɵelementStart(26, "button", 17);
        i0.ɵɵlistener("click", function SelectLojaComponent_Template_button_click_26_listener() { return ctx.selectCondor(); });
        i0.ɵɵtext(27, " Ok ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 5, ctx.miObjeto));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("config", i0.ɵɵpureFunction0(9, _c1));
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(19, 7, ctx.region));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.condor);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.lojas);
    } }, directives: [i7.NgIf, i8.ModalDirective, i9.NgSelectOption, i9.ɵangular_packages_forms_forms_x, i7.NgForOf, i9.SelectControlValueAccessor, i9.NgControlStatus, i9.NgModel, i8.MdbBtnDirective, i8.WavesDirective, i8.MdbIconComponent, i8.FasDirective], pipes: [i7.AsyncPipe], styles: [".modal-body[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n\n\n.pointer[_ngcontent-%COMP%]{\n    cursor: pointer !important;\n}\n\n.text-underline[_ngcontent-%COMP%] {\n    text-decoration: underline;\n}\n\n.py-N[_ngcontent-%COMP%] {\n    padding-right: 0.3rem !important;\n    padding-left: 0.3rem !important;\n    padding-top: 0.2rem !important;\n    padding-bottom: 0.2rem !important;\n}\n\n//[_ngcontent-%COMP%]   Header[_ngcontent-%COMP%]   Memu\n.header-menu[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: 500;\n    font-size: 0.8rem;\n    margin-bottom: 0px !important;\n}\n.w-ajustes[_ngcontent-%COMP%]{\n    width: 96%;\n}\n.ajuste[_ngcontent-%COMP%]{\n  position: absolute;\n  right: 2%;\n  top: 35%;\n}\n\n.margin[_ngcontent-%COMP%]{\n  margin-top: 3px;\n}\n\n.bg-ver[_ngcontent-%COMP%]{\n  background: var(--color-red-secondary);\n}\n\n@media(max-width:375px) {\n  .nav-link[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: .7rem;\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectLojaComponent, [{
        type: Component,
        args: [{
                selector: 'app-select-loja',
                templateUrl: './select-loja.component.html',
                styleUrls: ['./select-loja.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.SeoService }, { type: i3.DataService }, { type: i4.UtilService }, { type: i5.NewsService }, { type: i6.StorageMap }]; }, { loja: [{
            type: Output
        }], new: [{
            type: Input
        }], type: [{
            type: Input
        }], load: [{
            type: Input
        }], frame: [{
            type: ViewChild,
            args: ['frame', { static: true }]
        }] }); })();
//# sourceMappingURL=select-loja.component.js.map