import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../@core/directives/lazy-load.directive";
import * as i3 from "@angular/router";
function ImageComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵelement(1, "img", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", (ctx_r0.code == null ? null : ctx_r0.code.url) || (ctx_r0.code == null ? null : ctx_r0.code.link), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", (ctx_r0.code == null ? null : ctx_r0.code.large) || (ctx_r0.code == null ? null : ctx_r0.code.image), i0.ɵɵsanitizeUrl)("alt", (ctx_r0.code == null ? null : ctx_r0.code.title) || (ctx_r0.code == null ? null : ctx_r0.code.titulo) || (ctx_r0.code == null ? null : ctx_r0.code.name))("id", ctx_r0.idImage);
} }
const _c0 = function (a0) { return [a0]; };
function ImageComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵelement(1, "img", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c0, (ctx_r1.code == null ? null : ctx_r1.code.url) || (ctx_r1.code == null ? null : ctx_r1.code.link)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", (ctx_r1.code == null ? null : ctx_r1.code.large) || (ctx_r1.code == null ? null : ctx_r1.code.image), i0.ɵɵsanitizeUrl)("alt", (ctx_r1.code == null ? null : ctx_r1.code.title) || (ctx_r1.code == null ? null : ctx_r1.code.titulo) || (ctx_r1.code == null ? null : ctx_r1.code.name))("id", ctx_r1.idImage);
} }
export class ImageComponent {
    constructor() {
        this.code = [];
        this.size = '';
        this.idImage = '';
    }
    ngOnInit() {
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(); };
ImageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ImageComponent, selectors: [["app-image"]], inputs: { code: "code", size: "size", idImage: "idImage" }, decls: 2, vars: 2, consts: [["rel", "noopener noreferrer", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href"], ["LazyLoad", "", 1, "img-fluid", "w-100", 3, "src", "alt", "id"], ["target", "_blank", 3, "routerLink"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ImageComponent_a_0_Template, 2, 4, "a", 0);
        i0.ɵɵtemplate(1, ImageComponent_a_1_Template, 2, 6, "a", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.code == null ? null : ctx.code.url.match("https"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx.code == null ? null : ctx.code.url.match("https")));
    } }, directives: [i1.NgIf, i2.LazyLoadDirective, i3.RouterLinkWithHref], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImageComponent, [{
        type: Component,
        args: [{
                selector: 'app-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.scss']
            }]
    }], null, { code: [{
            type: Input
        }], size: [{
            type: Input
        }], idImage: [{
            type: Input
        }] }); })();
//# sourceMappingURL=image.component.js.map