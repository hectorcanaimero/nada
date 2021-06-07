import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/news.service";
import * as i2 from "@angular/common";
function LgpdComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", item_r1.content, i0.ɵɵsanitizeHtml);
} }
export class LgpdComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        this.items$ = this.db.PageSlug('politica-de-privacidade');
    }
}
LgpdComponent.ɵfac = function LgpdComponent_Factory(t) { return new (t || LgpdComponent)(i0.ɵɵdirectiveInject(i1.NewsService)); };
LgpdComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LgpdComponent, selectors: [["app-lgpd"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [3, "innerHtml"]], template: function LgpdComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LgpdComponent_div_0_Template, 2, 1, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.items$));
    } }, directives: [i2.NgIf], pipes: [i2.AsyncPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LgpdComponent, [{
        type: Component,
        args: [{
                selector: 'app-lgpd',
                templateUrl: './lgpd.component.html',
                styleUrls: ['./lgpd.component.scss']
            }]
    }], function () { return [{ type: i1.NewsService }]; }, null); })();
//# sourceMappingURL=lgpd.component.js.map