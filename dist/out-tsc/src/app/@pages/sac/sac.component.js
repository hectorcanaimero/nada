import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "@core/services/data.service";
import * as i4 from "@core/services/seo.service";
import * as i5 from "@core/services/util.service";
import * as i6 from "@core/services/news.service";
import * as i7 from "angular-bootstrap-md";
import * as i8 from "@angular/common";
import * as i9 from "../../@sharing/sidebar/sidebar.component";
function SacComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r2.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(r_r2.name);
} }
function SacComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", l_r3.title == null ? null : l_r3.title.rendered);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(l_r3.title == null ? null : l_r3.title.rendered);
} }
export class SacComponent {
    constructor(router, fb, db, seo, util, news) {
        this.router = router;
        this.fb = fb;
        this.db = db;
        this.seo = seo;
        this.util = util;
        this.news = news;
        this.region = [];
        this.allLojas = [];
        this.onSubmit = () => {
            const a = this.region.filter((item) => item.id === this.fmSac.value.cidade);
            this.db.add('Sacs', this.fmSac.value).subscribe(() => this.fmSac.reset());
            this.util.sweetalert('Sua mensagem foi enviada.', 'Aguarde que em breve entraremos em contato.', 'success', 'center');
            this.seo.dataLayerTracking({ event: 'formSubmitted', formName: 'SAC', sacStore: this.fmSac.value.loja, });
            timer(1000).subscribe(() => this.router.navigate(['']));
        };
        this.onCEP = (cep) => {
            const value = cep.target.value;
            this.cepSubs = this.util.toCEP(value).subscribe((data) => {
                this.fmSac.patchValue({ rua: data['logradouro'], bairro: data['bairro'], uf: data['uf'], cid: data['localidade'] });
            });
        };
        this.getLojas = (event) => this.lojaSubs = this.news.LojaPorRegion(event.target.value).subscribe((data) => (this.allLojas = data));
        this.getRegion = () => this.regionSubs = this.news.LojaRegion().subscribe((data) => (this.region = data));
        this.setSeo = () => {
            this.seo.setTitle('Atendimento ao cliente');
            this.seo.addTagName('Atendimento ao cliente');
            this.seo.addCanonical();
        };
    }
    ngOnInit() {
        this.buildForm();
        this.getRegion();
        this.seo.dataLayerPage('SAC');
    }
    ngOnDestroy() {
        if (this.cepSubs)
            this.cepSubs.unsubscribe();
        if (this.lojaSubs)
            this.lojaSubs.unsubscribe();
        if (this.regionSubs)
            this.regionSubs.unsubscribe();
    }
    buildForm() {
        this.fmSac = this.fb.group({
            assunto: ['', Validators.required],
            cidade: ['', Validators.required],
            loja: ['', Validators.required],
            nome: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            telefone: ['', Validators.required],
            cpf: ['', Validators.required],
            data_nascimento: ['', Validators.required],
            mensagem: ['', Validators.required],
            cep: [''],
            complemento: [''],
            bairro: ['', Validators.required],
            rua: ['', Validators.required],
            uf: [''],
            cid: ['', Validators.required],
        });
    }
}
SacComponent.ɵfac = function SacComponent_Factory(t) { return new (t || SacComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.DataService), i0.ɵɵdirectiveInject(i4.SeoService), i0.ɵɵdirectiveInject(i5.UtilService), i0.ɵɵdirectiveInject(i6.NewsService)); };
SacComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SacComponent, selectors: [["app-sac"]], decls: 111, vars: 4, consts: [["id", "content", 1, "py-5"], [1, "container"], [1, "b-08", "border-bottom", "pb-1", "mb-3"], [1, "row", "ios", "justify-content-center"], [1, "col-md-12", "col-lg-8", "col-xl-9"], [3, "formGroup"], [1, "mt-5", "mb-4", "border-bottom", "pb-1", "b-07"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "id", "duvidas", "formControlName", "assunto", "value", "Tirar d\u00FAvidas", "mdbInput", "", 1, "custom-control-input"], ["for", "duvidas", 1, "custom-control-label"], ["type", "radio", "id", "sugestoes", "formControlName", "assunto", "value", "Enviar sugest\u00F5es", "mdbInput", "", 1, "custom-control-input"], ["for", "sugestoes", 1, "custom-control-label"], ["type", "radio", "id", "elogios", "formControlName", "assunto", "value", "Enviar elogios", "mdbInput", "", 1, "custom-control-input"], ["for", "elogios", 1, "custom-control-label"], ["type", "radio", "id", "reclamacoes", "formControlName", "assunto", "value", "Enviar reclama\u00E7\u00F5es", "mdbInput", "", 1, "custom-control-input"], ["for", "reclamacoes", 1, "custom-control-label"], ["type", "radio", "id", "outros", "formControlName", "assunto", "value", "Outros", "mdbInput", "", 1, "custom-control-input"], ["for", "outros", 1, "custom-control-label"], [1, "form-group"], ["for", "cidade"], ["formControlName", "cidade", "id", "cidade", 1, "browser-default", "custom-select", 3, "change"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "loja"], ["formControlName", "loja", "id", "loja", 1, "browser-default", "custom-select"], [1, "row", "ios"], [1, "col-md-6"], ["for", "nome"], ["type", "text", "id", "nome", "formControlName", "nome", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "cpf"], ["type", "text", "inputmode", "number", "id", "cpf", "formControlName", "cpf", 1, "form-control"], ["for", "telefone"], ["type", "number", "id", "telefone", "formControlName", "telefone", 1, "form-control"], ["for", "data_nascimento"], ["type", "date", "id", "data_nascimento", "formControlName", "data_nascimento", 1, "form-control"], ["for", "cep"], ["type", "number", "id", "cep", "formControlName", "cep", "placeholder", "Insira o CEP e clique Enter", 1, "form-control", 3, "change"], ["for", "rua"], ["type", "text", "id", "rua", "formControlName", "rua", 1, "form-control"], ["for", "complemento"], ["type", "text", "id", "complemento", "formControlName", "complemento", 1, "form-control"], ["for", "bairro"], ["type", "text", "id", "bairro", "formControlName", "bairro", 1, "form-control"], ["for", "cid"], ["type", "text", "id", "cid", "formControlName", "cid", 1, "form-control"], ["for", "uf"], ["type", "text", "id", "uf", "formControlName", "uf", 1, "form-control"], ["for", "mensagem"], ["id", "mensdagem", "rows", "4", "formControlName", "mensagem", 1, "form-control"], [1, "text-center"], ["type", "reset", "mdbBtn", "", "color", "danger", "mdbWavesEffect", ""], [1, "mb-0", "font-weight-bold", "text-uppercase"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 3, "disabled", "click"], [1, "col-lg-4", "col-xl-3", "d-none", "d-lg-block"], [1, "news", "mb-5"], ["src", "./assets/images/0800.jpg", "alt", "SAC 0800416655", 1, "img-fluid"], [3, "value"]], template: function SacComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h1", 2);
        i0.ɵɵtext(3, "Atendimento ao cliente - SAC");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "form", 5);
        i0.ɵɵelementStart(7, "h5", 6);
        i0.ɵɵtext(8, " 1. Selecione o assunto que voc\u00EA deseja falar: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelement(10, "input", 8);
        i0.ɵɵelementStart(11, "label", 9);
        i0.ɵɵtext(12, "Tirar d\u00FAvidas");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 7);
        i0.ɵɵelement(14, "input", 10);
        i0.ɵɵelementStart(15, "label", 11);
        i0.ɵɵtext(16, "Enviar sugest\u00F5es");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 7);
        i0.ɵɵelement(18, "input", 12);
        i0.ɵɵelementStart(19, "label", 13);
        i0.ɵɵtext(20, "Enviar elogios");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 7);
        i0.ɵɵelement(22, "input", 14);
        i0.ɵɵelementStart(23, "label", 15);
        i0.ɵɵtext(24, "Enviar reclama\u00E7\u00F5es");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 7);
        i0.ɵɵelement(26, "input", 16);
        i0.ɵɵelementStart(27, "label", 17);
        i0.ɵɵtext(28, "Outros");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "h5", 6);
        i0.ɵɵtext(30, " 2. Selecione a loja que quer contatar: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "div", 18);
        i0.ɵɵelementStart(32, "label", 19);
        i0.ɵɵtext(33, "Cidade");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "select", 20);
        i0.ɵɵlistener("change", function SacComponent_Template_select_change_34_listener($event) { return ctx.getLojas($event); });
        i0.ɵɵelementStart(35, "option", 21);
        i0.ɵɵtext(36, "Selecione a Cidade");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(37, SacComponent_option_37_Template, 2, 2, "option", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "div", 18);
        i0.ɵɵelementStart(39, "label", 23);
        i0.ɵɵtext(40, "Loja");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "select", 24);
        i0.ɵɵelementStart(42, "option", 21);
        i0.ɵɵtext(43, "Selecione o Condor");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(44, SacComponent_option_44_Template, 2, 2, "option", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "h5", 6);
        i0.ɵɵtext(46, " 3. Informe seus dados b\u00E1sicos: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "div", 25);
        i0.ɵɵelementStart(48, "div", 26);
        i0.ɵɵelementStart(49, "div", 18);
        i0.ɵɵelementStart(50, "label", 27);
        i0.ɵɵtext(51, "Nome");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(52, "input", 28);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(53, "div", 18);
        i0.ɵɵelementStart(54, "label", 29);
        i0.ɵɵtext(55, "E-mail");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(56, "input", 30);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "div", 18);
        i0.ɵɵelementStart(58, "label", 31);
        i0.ɵɵtext(59, "CPF");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(60, "input", 32);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "div", 18);
        i0.ɵɵelementStart(62, "label", 33);
        i0.ɵɵtext(63, "Telefone");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(64, "input", 34);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "div", 18);
        i0.ɵɵelementStart(66, "label", 35);
        i0.ɵɵtext(67, "Data de Nascimento");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(68, "input", 36);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(69, "div", 26);
        i0.ɵɵelementStart(70, "div", 18);
        i0.ɵɵelementStart(71, "label", 37);
        i0.ɵɵtext(72, "CEP");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(73, "input", 38);
        i0.ɵɵlistener("change", function SacComponent_Template_input_change_73_listener($event) { return ctx.onCEP($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(74, "div", 18);
        i0.ɵɵelementStart(75, "label", 39);
        i0.ɵɵtext(76, "Rua");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(77, "input", 40);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(78, "div", 18);
        i0.ɵɵelementStart(79, "label", 41);
        i0.ɵɵtext(80, "Complemento");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(81, "input", 42);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "div", 18);
        i0.ɵɵelementStart(83, "label", 43);
        i0.ɵɵtext(84, "Bairro");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(85, "input", 44);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(86, "div", 18);
        i0.ɵɵelementStart(87, "label", 45);
        i0.ɵɵtext(88, "Cidade");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(89, "input", 46);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(90, "div", 18);
        i0.ɵɵelementStart(91, "label", 47);
        i0.ɵɵtext(92, "UF");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(93, "input", 48);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(94, "h5", 6);
        i0.ɵɵtext(95, " 4. Deixe sua mensagem: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(96, "div", 18);
        i0.ɵɵelementStart(97, "label", 49);
        i0.ɵɵtext(98, "Mensagem");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(99, "textarea", 50);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(100, "div", 51);
        i0.ɵɵelementStart(101, "button", 52);
        i0.ɵɵelementStart(102, "h6", 53);
        i0.ɵɵtext(103, "cancelar");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(104, "button", 54);
        i0.ɵɵlistener("click", function SacComponent_Template_button_click_104_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementStart(105, "h6", 53);
        i0.ɵɵtext(106, "Enviar");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(107, "div", 55);
        i0.ɵɵelementStart(108, "div", 56);
        i0.ɵɵelement(109, "img", 57);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(110, "app-sidebar");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formGroup", ctx.fmSac);
        i0.ɵɵadvance(31);
        i0.ɵɵproperty("ngForOf", ctx.region);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.allLojas);
        i0.ɵɵadvance(60);
        i0.ɵɵproperty("disabled", ctx.fmSac.invalid);
    } }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.RadioControlValueAccessor, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i7.MdbInput, i2.SelectControlValueAccessor, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i8.NgForOf, i2.NumberValueAccessor, i7.MdbBtnDirective, i7.WavesDirective, i9.SidebarComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SacComponent, [{
        type: Component,
        args: [{
                selector: 'app-sac',
                templateUrl: './sac.component.html',
                styleUrls: ['./sac.component.scss'],
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.FormBuilder }, { type: i3.DataService }, { type: i4.SeoService }, { type: i5.UtilService }, { type: i6.NewsService }]; }, null); })();
//# sourceMappingURL=sac.component.js.map