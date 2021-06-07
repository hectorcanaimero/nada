import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LazyLoadDirective {
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
        this.srcAttr = this.src;
    }
}
LazyLoadDirective.ɵfac = function LazyLoadDirective_Factory(t) { return new (t || LazyLoadDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
LazyLoadDirective.ɵdir = i0.ɵɵdefineDirective({ type: LazyLoadDirective, selectors: [["img", "LazyLoad", ""]], hostVars: 1, hostBindings: function LazyLoadDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("src", ctx.srcAttr, i0.ɵɵsanitizeUrl);
    } }, inputs: { src: "src" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LazyLoadDirective, [{
        type: Directive,
        args: [{
                selector: 'img[LazyLoad]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { srcAttr: [{
            type: HostBinding,
            args: ['attr.src']
        }], src: [{
            type: Input
        }] }); })();
//# sourceMappingURL=lazy-load.directive.js.map