import { Component } from '@angular/core';
import { tap, delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/news.service";
import * as i2 from "@core/services/seo.service";
import * as i3 from "@angular/common";
import * as i4 from "angular-bootstrap-md";
import * as i5 from "../../@sharing/sem-data/sem-data.component";
import * as i6 from "../../@core/pipes/safe.pipe";
const _c0 = function (a0) { return { "active": a0 }; };
function TabloideComponent_section_0_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function TabloideComponent_section_0_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8); const item_r5 = ctx.$implicit; const i_r6 = ctx.index; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.getIssuu(item_r5, i_r6); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, i_r6 === ctx_r4.active));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r5.title == null ? null : item_r5.title.rendered, " ");
} }
function TabloideComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtemplate(5, TabloideComponent_section_0_a_5_Template, 2, 4, "a", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8);
    i0.ɵɵelement(7, "div", 9);
    i0.ɵɵpipe(8, "safe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabloide_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", tabloide_r3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(8, 2, ctx_r0.show, "html"), i0.ɵɵsanitizeHtml);
} }
function TabloideComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data", 11);
} }
export class TabloideComponent {
    constructor(news, seo) {
        this.news = news;
        this.seo = seo;
        this.active = [];
        this.items = [];
        this.getIssuu = (issu, i) => {
            this.active = i;
            const url = issu.condor.issuu[0];
            this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: issu.title.rendered });
            this.show = `<iframe class="embed-responsive-item" src="${this.selectedType(url)}" allowfullscreen></iframe>`;
        };
        this.selectedType = (text) => {
            let url = '';
            let value = text.indexOf('/');
            if (value > 0)
                url = `//e.issuu.com/embed.html#${text}`;
            else
                url = `//e.issuu.com/embed.html?d=${text}&hideIssuuLogo=true&u=redecondor`;
            return url;
        };
        this.getSeo = () => {
            this.seo.dataLayerPage('Tabloide online');
            this.seo.updateTags({
                title: 'Confira o Tabloide Online Condor | Condor.com.br',
                description: 'Acesse o Tabloide Online Condor e Confira as Melhores Ofertas do Dia e da Semana do Supermercado Condor mais Próximo de Você!',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.addCanonical();
        };
    }
    ngOnInit() {
        this.getSeo();
        this.items = this.news.Tabloides(100).pipe(tap((res) => {
            this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: res[0].title });
            this.show = `<iframe class="embed-responsive-item" src="//e.issuu.com/embed.html#${res[0]['condor'].issuu[0]}" allowfullscreen ></iframe>`;
        }), delay(1000));
    }
    ngAfterViewInit() {
        this.items.subscribe((res) => {
            const url = res[0]['condor'].issuu[0];
            this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: res[0].title });
            this.show = `<iframe class="embed-responsive-item" src="${this.selectedType(url)}" allowfullscreen ></iframe>`;
        });
    }
}
TabloideComponent.ɵfac = function TabloideComponent_Factory(t) { return new (t || TabloideComponent)(i0.ɵɵdirectiveInject(i1.NewsService), i0.ɵɵdirectiveInject(i2.SeoService)); };
TabloideComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TabloideComponent, selectors: [["app-tabloide"]], decls: 4, vars: 4, consts: [["id", "taloide-onmline", "class", "py-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "taloide-onmline", 1, "py-5"], [1, "container"], [1, "row", "ios"], [1, "col-md-4", "order-2", "order-md-1"], [1, "list-group", "mt-3", "mt-md-0"], ["class", "list-group-item  waves-light", "mdbWavesEffect", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8", "order-1", "order-md-2"], [1, "embed-responsive", "embed-responsive-16by9", 3, "innerHTML"], ["mdbWavesEffect", "", 1, "list-group-item", "waves-light", 3, "ngClass", "click"], ["height", "80vh"]], template: function TabloideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TabloideComponent_section_0_Template, 9, 5, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, TabloideComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items))("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i3.NgForOf, i4.WavesDirective, i3.NgClass, i5.SemDataComponent], pipes: [i3.AsyncPipe, i6.SafePipe], styles: [".active[_ngcontent-%COMP%] {\n    background: var(--color-blue-secondary) !important;\n    color: var(--color-white) !important;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabloideComponent, [{
        type: Component,
        args: [{
                selector: 'app-tabloide',
                templateUrl: './tabloide.component.html',
                styleUrls: ['./tabloide.component.scss']
            }]
    }], function () { return [{ type: i1.NewsService }, { type: i2.SeoService }]; }, null); })();
//# sourceMappingURL=tabloide.component.js.map