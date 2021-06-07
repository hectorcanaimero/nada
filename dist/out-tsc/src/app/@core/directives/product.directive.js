import { Directive, HostBinding, Input } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as i0 from "@angular/core";
export class ProductDirective {
    constructor(el) {
        this.el = el;
        this.srcAttr = null;
    }
    ngAfterViewInit() {
        this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
    }
    canLazyLoad() {
        return window && 'IntersectionObserver' in window;
    }
    lazyLoadImage() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(({ isIntersecting }) => {
                if (isIntersecting) {
                    this.loadImage();
                    obs.unobserve(this.el.nativeElement);
                }
            });
        });
        obs.observe(this.el.nativeElement);
    }
    loadImage() {
        const image = `${environment.v1.url}/Containers/produtos/download/${this.src}.jpg`;
        this.srcAttr = image;
    }
}
ProductDirective.ɵfac = function ProductDirective_Factory(t) { return new (t || ProductDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ProductDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProductDirective, selectors: [["img", "appProduct", ""]], hostVars: 1, hostBindings: function ProductDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("src", ctx.srcAttr, i0.ɵɵsanitizeUrl);
    } }, inputs: { src: "src" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProductDirective, [{
        type: Directive,
        args: [{
                selector: 'img[appProduct]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { src: [{
            type: Input
        }], srcAttr: [{
            type: HostBinding,
            args: ['attr.src']
        }] }); })();
//# sourceMappingURL=product.directive.js.map