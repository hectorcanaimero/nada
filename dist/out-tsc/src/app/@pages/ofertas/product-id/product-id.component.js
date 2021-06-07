import { Component } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/seo.service";
import * as i3 from "@core/services/data.service";
import * as i4 from "@core/services/util.service";
import * as i5 from "@ngx-pwa/local-storage";
import * as i6 from "@angular/common";
import * as i7 from "angular-bootstrap-md";
import * as i8 from "../../../@core/directives/product.directive";
import * as i9 from "../../../@sharing/select-loja/select-loja.component";
import * as i10 from "../../../@sharing/sem-data/sem-data.component";
function ProductIdComponent_section_0_p_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("* ", code_r3.produtos.image, "");
} }
function ProductIdComponent_section_0_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "a", 49);
    i0.ɵɵlistener("click", function ProductIdComponent_section_0_div_27_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r21); const code_r3 = i0.ɵɵnextContext().ngIf; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onTracking(code_r3.produtos.dsc_produto, "comprar_online"); });
    i0.ɵɵtext(2, " Comprar online ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProductIdComponent_section_0_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "a", 50);
    i0.ɵɵlistener("click", function ProductIdComponent_section_0_div_28_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r24); const code_r3 = i0.ɵɵnextContext().ngIf; const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onTracking(code_r3.produtos.dsc_produto, "comprar_online"); });
    i0.ɵɵtext(2, " Comprar online ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return [a0, "R$", "symbol", "1.2-2", "pt"]; };
function ProductIdComponent_section_0_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "currency");
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(3, 2, i0.ɵɵpureFunction1(8, _c0, code_r3.preco_clube || 0)), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(code_r3.produtos.embalagem);
} }
function ProductIdComponent_section_0_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " de ");
    i0.ɵɵelementStart(5, "span", 53);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "br");
    i0.ɵɵtext(9, "no cart\u00E3o Condor ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", code_r3.qtd_clube || 0, "x");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBindV(7, 2, i0.ɵɵpureFunction1(8, _c0, code_r3.parcela_clube || 0)));
} }
function ProductIdComponent_section_0_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵelementStart(1, "div", 55);
    i0.ɵɵelement(2, "img", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, " recebe de volta ");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(8, 1, i0.ɵɵpureFunction1(7, _c0, code_r3.preco_cashback || 0)), "");
} }
function ProductIdComponent_section_0_p_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("* ", code_r3.produtos.image, "");
} }
function ProductIdComponent_section_0_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelementStart(1, "a", 49);
    i0.ɵɵlistener("click", function ProductIdComponent_section_0_div_68_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r31); const code_r3 = i0.ɵɵnextContext().ngIf; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onTracking(code_r3.produtos.dsc_produto, "comprar_online"); });
    i0.ɵɵtext(2, " Comprar online ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProductIdComponent_section_0_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelementStart(1, "a", 50);
    i0.ɵɵlistener("click", function ProductIdComponent_section_0_div_69_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r34); const code_r3 = i0.ɵɵnextContext().ngIf; const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.onTracking(code_r3.produtos.dsc_produto, "comprar_online"); });
    i0.ɵɵtext(2, " Comprar online ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProductIdComponent_section_0_div_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "currency");
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(3, 2, i0.ɵɵpureFunction1(8, _c0, code_r3.preco_clube || 0)), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(code_r3.produtos.embalagem);
} }
function ProductIdComponent_section_0_div_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵelementStart(1, "div", 58);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " de ");
    i0.ɵɵelementStart(6, "span", 53);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "br");
    i0.ɵɵtext(10, "no cart\u00E3o Condor ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", code_r3.qtd_clube || 0, "x");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBindV(8, 2, i0.ɵɵpureFunction1(8, _c0, code_r3.parcela_clube || 0)));
} }
function ProductIdComponent_section_0_div_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵelementStart(1, "div", 59);
    i0.ɵɵelementStart(2, "div", 55);
    i0.ɵɵelement(3, "img", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " recebe de volta ");
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(9, 1, i0.ɵɵpureFunction1(7, _c0, code_r3.preco_cashback || 0)), "");
} }
function ProductIdComponent_section_0_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵelementStart(1, "a", 61);
    i0.ɵɵlistener("click", function ProductIdComponent_section_0_div_86_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r40); const code_r3 = i0.ɵɵnextContext().ngIf; const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.onTracking(code_r3.produtos.dsc_produto, "comprar_online"); });
    i0.ɵɵtext(2, " Comprar online ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProductIdComponent_section_0_div_87_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelementStart(1, "a", 62);
    i0.ɵɵlistener("click", function ProductIdComponent_section_0_div_87_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r43); const code_r3 = i0.ɵɵnextContext().ngIf; const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.onTracking(code_r3.produtos.dsc_produto, "comprar_online"); });
    i0.ɵɵtext(2, " Comprar online ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProductIdComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "mdb-breadcrumb", 4);
    i0.ɵɵelementStart(3, "mdb-breadcrumb-item", 5);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mdb-breadcrumb-item", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mdb-breadcrumb-item", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵelementStart(10, "div", 9);
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵelementStart(12, "div", 11);
    i0.ɵɵelement(13, "img", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 13);
    i0.ɵɵelementStart(15, "h2", 14);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, ProductIdComponent_section_0_p_19_Template, 2, 1, "p", 15);
    i0.ɵɵelementStart(20, "p", 16);
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "date");
    i0.ɵɵpipe(23, "date");
    i0.ɵɵelementStart(24, "span", 17);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 18);
    i0.ɵɵtemplate(27, ProductIdComponent_section_0_div_27_Template, 3, 0, "div", 19);
    i0.ɵɵtemplate(28, ProductIdComponent_section_0_div_28_Template, 3, 0, "div", 19);
    i0.ɵɵelementStart(29, "div", 20);
    i0.ɵɵelementStart(30, "a", 21);
    i0.ɵɵlistener("click", function ProductIdComponent_section_0_Template_a_click_30_listener() { i0.ɵɵrestoreView(_r45); const code_r3 = ctx.ngIf; const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onTracking(code_r3["produtos"].dsc_produto, "comprar_online"); });
    i0.ɵɵtext(31, " Comprar na loja ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 10);
    i0.ɵɵelement(33, "app-select-loja", 22);
    i0.ɵɵelementStart(34, "div", 23);
    i0.ɵɵelement(35, "img", 24);
    i0.ɵɵelementStart(36, "div", 25);
    i0.ɵɵelementStart(37, "p");
    i0.ɵɵtext(38);
    i0.ɵɵpipe(39, "currency");
    i0.ɵɵelementStart(40, "span");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(42, ProductIdComponent_section_0_div_42_Template, 6, 10, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(43, ProductIdComponent_section_0_div_43_Template, 10, 10, "div", 27);
    i0.ɵɵtemplate(44, ProductIdComponent_section_0_div_44_Template, 9, 9, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 29);
    i0.ɵɵelementStart(46, "h2", 14);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 9);
    i0.ɵɵelementStart(49, "div", 30);
    i0.ɵɵelementStart(50, "div", 31);
    i0.ɵɵelement(51, "img", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 32);
    i0.ɵɵelement(53, "app-select-loja", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "div", 33);
    i0.ɵɵelementStart(55, "div", 34);
    i0.ɵɵelementStart(56, "div", 35);
    i0.ɵɵelementStart(57, "p");
    i0.ɵɵtext(58);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(59, ProductIdComponent_section_0_p_59_Template, 2, 1, "p", 15);
    i0.ɵɵelementStart(60, "p", 16);
    i0.ɵɵtext(61);
    i0.ɵɵpipe(62, "date");
    i0.ɵɵpipe(63, "date");
    i0.ɵɵelementStart(64, "span", 17);
    i0.ɵɵtext(65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "div", 36);
    i0.ɵɵelementStart(67, "div", 34);
    i0.ɵɵtemplate(68, ProductIdComponent_section_0_div_68_Template, 3, 0, "div", 37);
    i0.ɵɵtemplate(69, ProductIdComponent_section_0_div_69_Template, 3, 0, "div", 37);
    i0.ɵɵelementStart(70, "div", 38);
    i0.ɵɵelementStart(71, "a", 21);
    i0.ɵɵlistener("click", function ProductIdComponent_section_0_Template_a_click_71_listener() { i0.ɵɵrestoreView(_r45); const code_r3 = ctx.ngIf; const ctx_r46 = i0.ɵɵnextContext(); return ctx_r46.onTracking(code_r3["produtos"].dsc_produto, "comprar_online"); });
    i0.ɵɵtext(72, " Comprar na loja ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "div", 35);
    i0.ɵɵelementStart(74, "div", 39);
    i0.ɵɵelement(75, "img", 24);
    i0.ɵɵelementStart(76, "div", 25);
    i0.ɵɵelementStart(77, "p");
    i0.ɵɵtext(78);
    i0.ɵɵpipe(79, "currency");
    i0.ɵɵelementStart(80, "span");
    i0.ɵɵtext(81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(82, ProductIdComponent_section_0_div_82_Template, 6, 10, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(83, ProductIdComponent_section_0_div_83_Template, 11, 10, "div", 40);
    i0.ɵɵtemplate(84, ProductIdComponent_section_0_div_84_Template, 10, 9, "div", 40);
    i0.ɵɵelementStart(85, "div", 41);
    i0.ɵɵtemplate(86, ProductIdComponent_section_0_div_86_Template, 3, 0, "div", 42);
    i0.ɵɵtemplate(87, ProductIdComponent_section_0_div_87_Template, 3, 0, "div", 37);
    i0.ɵɵelementStart(88, "div", 38);
    i0.ɵɵelementStart(89, "a", 43);
    i0.ɵɵlistener("click", function ProductIdComponent_section_0_Template_a_click_89_listener() { i0.ɵɵrestoreView(_r45); const code_r3 = ctx.ngIf; const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.onTracking(code_r3["produtos"].dsc_produto, "comprar_online"); });
    i0.ɵɵtext(90, " Comprar na loja ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(91, "div", 44);
    i0.ɵɵelement(92, "app-select-loja", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(93, "div", 45);
    i0.ɵɵelementStart(94, "p", 46);
    i0.ɵɵelementStart(95, "span", 47);
    i0.ɵɵtext(96, "*Consultar a disponibilidade do produto nas lojas Condor.");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(97, "br");
    i0.ɵɵtext(98, " Para melhor atender nossos clientes, n\u00E3o vendemos por atacado e reservamo-nos o direito de limitar a 12 unidades/kg por cliente (consumidor) a quantidade dos produtos anunciados. Para o estado do Paran\u00E1, essa condi\u00E7\u00E3o \u00E9 v\u00E1lida conforme acordo (TAC Termo de Ajuste de Conduta) entre PROCON-PR e APRAS. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", code_r3.produtos.dsc_departamento, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", code_r3.produtos.dsc_setor, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(code_r3.produtos.dsc_produto);
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("alt", code_r3.produtos.dsc_produto);
    i0.ɵɵproperty("src", code_r3.host, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(code_r3.produtos.dsc_produto);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(code_r3.produtos.dsc_descricao);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.produtos.image);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" Oferta v\u00E1lida de ", i0.ɵɵpipeBind2(22, 37, code_r3.produtos.start, "dd/MM/yyyy"), " at\u00E9 ", i0.ɵɵpipeBind2(23, 40, code_r3.produtos.end, "dd/MM/yyyy"), " no ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.loja);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", code_r3.departamento !== 11);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.departamento === 11);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngClass", code_r3.preco_clube ? "regular" : "clube");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(39, 43, i0.ɵɵpureFunction1(61, _c0, code_r3.preco_regular || 0)), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(code_r3.produtos.embalagem);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.preco_clube);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.qtd_clube);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.preco_cashback);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(code_r3.produtos.dsc_produto);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("alt", code_r3.produtos.dsc_produto);
    i0.ɵɵproperty("src", code_r3.host, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(code_r3.produtos.dsc_descricao);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.produtos.image);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" Oferta v\u00E1lida de ", i0.ɵɵpipeBind2(62, 49, code_r3.produtos.start, "dd/MM/yyyy"), " at\u00E9 ", i0.ɵɵpipeBind2(63, 52, code_r3.produtos.end, "dd/MM/yyyy"), " no ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.loja);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", code_r3.departamento !== 11);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.departamento === 11);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngClass", code_r3.preco_clube ? "regular" : "clube");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBindV(79, 55, i0.ɵɵpureFunction1(63, _c0, code_r3.preco_regular || 0)), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(code_r3.produtos.embalagem);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.preco_clube);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.qtd_clube);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.preco_cashback);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", code_r3.departamento !== 11);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", code_r3.departamento === 11);
} }
function ProductIdComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class ProductIdComponent {
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
}
ProductIdComponent.ɵfac = function ProductIdComponent_Factory(t) { return new (t || ProductIdComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SeoService), i0.ɵɵdirectiveInject(i3.DataService), i0.ɵɵdirectiveInject(i4.UtilService), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i5.StorageMap)); };
ProductIdComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProductIdComponent, selectors: [["app-product-id"]], decls: 4, vars: 4, consts: [["id", "DetalheProduto", "class", "py-2 py-md-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "DetalheProduto", 1, "py-2", "py-md-5"], [1, "container"], [1, "mb-5"], [1, "bread", "blue-text", "text-uppercase"], [1, "blue-text", "text-uppercase"], [1, "active", "text-uppercase"], [1, "d-none", "d-lg-block"], [1, "row", "justify-content-center"], [1, "col-3"], [1, "image"], ["appProduct", "", 1, "img-fluid", "mx-auto", "d-block", 3, "src", "alt"], [1, "col-6"], [1, "b-06", "border-bottom", "pb-1", "mb-4", "titulo"], ["class", "legal", 4, "ngIf"], [1, "mt-5", "f-09"], [1, "b-08"], [1, "row", "justify-content-center", "my-4"], ["class", "col-md-6 col-lg-5 col-xl-6 text-center", 4, "ngIf"], [1, "col-md-6", "col-lg-5", "col-xl-6", "text-center"], ["href", "https://www.google.com.br/maps/search/condor", "target", "_blank", 1, "btn", "btn-danger", "btn-rounded", 3, "click"], ["type", "alert"], [1, "precos"], ["src", "./assets/images/clube.png", "alt", "Clube Condor", 1, "image-clube"], [3, "ngClass"], ["class", "clube mt-2", 4, "ngIf"], ["class", "parcelas", 4, "ngIf"], ["class", "cashback", 4, "ngIf"], [1, "d-lg-none"], [1, "col-md-4", "col-lg-4"], [1, "image", "mb-3"], [1, "mt-2", "d-none", "d-md-block"], [1, "col-md-8", "col-lg-8"], [1, "row"], [1, "col-12"], [1, "mb-4", "d-none", "d-md-block"], ["class", "col-6 text-center", 4, "ngIf"], [1, "col-6", "text-center"], [1, "precos", "mb-2"], ["class", "col-md-6", 4, "ngIf"], [1, "row", "no-gutters", "d-md-none"], ["class", "col-6 col-md-6 text-center", 4, "ngIf"], ["href", "https://www.google.com.br/maps/search/condor", "target", "_blank", 1, "btn", "btn-danger", 3, "click"], [1, "mt-2", "d-md-none"], [1, "my-2", "p-3", "bg-light", "rounded"], [1, "text-justify", "mb-0", "f-08"], [1, "b-06"], [1, "legal"], ["href", "https://www.sitemercado.com.br/condor", "target", "_blank", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], ["href", "https://loja.condor.com.br", "target", "_blank", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], [1, "clube", "mt-2"], [1, "parcelas"], [1, "parcela"], [1, "cashback"], [1, "align-self-center"], ["src", "./assets/images/selo_ddv.png", "alt", "Dinheiro de Volta", 1, "img-fluid"], [1, "col-md-6"], [1, "parcelas", "mt-0"], [1, "cashback", "mt-0"], [1, "col-6", "col-md-6", "text-center"], ["href", "https://www.sitemercado.com.br/condor", "target", "_blank", 1, "btn", "btn-primary", 3, "click"], ["href", "https://loja.condor.com.br", "target", "_blank", 1, "btn", "btn-primary", 3, "click"]], template: function ProductIdComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProductIdComponent_section_0_Template, 99, 65, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, ProductIdComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [i6.NgIf, i7.MdbBreadcrumbComponent, i7.MdbBreadcrumbItemComponent, i8.ProductDirective, i9.SelectLojaComponent, i6.NgClass, i10.SemDataComponent], pipes: [i6.AsyncPipe, i6.DatePipe, i6.CurrencyPipe], styles: ["section[_ngcontent-%COMP%] {\n  background: #fff !important;\n  .image {\n    padding: 1rem;\n    border-radius: 10px;\n    border: 1px solid #efefef;\n  }\n  .precos {\n    position: relative;\n    .image-clube {\n      position: absolute;\n      top: -20px;\n      left: -20px;\n      width: 70px;\n    }\n    text-align: center;\n    border-radius: 10px;\n    border: 1px solid #efefef;\n    padding: 1rem;\n    .regular {\n      p {\n        font-size: 1.2rem;\n        margin-bottom: 0px;\n        span {\n          font-size: .85rem;\n        }\n      }\n    }\n    .clube {\n      p {\n        font-size: 1.8rem;\n        font-weight: 700;\n        margin-bottom: 0px;\n        span {\n          font-size: .85rem;\n        }\n      }\n    }\n  }\n  .parcelas {\n    text-align: center;\n    margin: .75rem 0;\n    padding: .90rem;\n    border-radius: 10px;\n    border: 1px solid #efefef;\n    p {\n      font-size: 1.1rem;\n      margin-bottom: 0;\n      span {\n        font-weight: 700;\n      }\n    }\n  }\n\n  .cashback {\n    margin: .75rem 0;\n    padding: 1rem;\n    border-radius: 10px;\n    border: 1px solid #efefef;\n    background-color: var(--color-blue-tertiary);\n    display: flex;\n    flex: row;\n    img {\n      padding-right: 7px;\n    }\n    p{\n      color: #fff;\n      text-transform: uppercase;\n      margin-bottom: 0px;\n      span {\n        font-size: 1rem;\n        font-weight: 700;\n      }\n    }\n  }\n}\n\n@media(min-width: 1024px) {\n  section[_ngcontent-%COMP%] {\n    .parcelas {\n      padding: 1rem;\n      p {\n        span { font-size: 1.3rem; }\n      }\n    }\n    .cashback {\n      p {\n        span { font-size: 1.2rem; }\n      }\n    }\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProductIdComponent, [{
        type: Component,
        args: [{
                selector: 'app-product-id',
                templateUrl: './product-id.component.html',
                styleUrls: ['./product-id.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.SeoService }, { type: i3.DataService }, { type: i4.UtilService }, { type: i1.ActivatedRoute }, { type: i5.StorageMap }]; }, null); })();
//# sourceMappingURL=product-id.component.js.map