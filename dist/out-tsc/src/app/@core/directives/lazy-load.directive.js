import { __decorate } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
let LazyLoadDirective = class LazyLoadDirective {
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
};
__decorate([
    HostBinding('attr.src')
], LazyLoadDirective.prototype, "srcAttr", void 0);
__decorate([
    Input()
], LazyLoadDirective.prototype, "src", void 0);
LazyLoadDirective = __decorate([
    Directive({
        selector: 'img[LazyLoad]'
    })
], LazyLoadDirective);
export { LazyLoadDirective };
//# sourceMappingURL=lazy-load.directive.js.map