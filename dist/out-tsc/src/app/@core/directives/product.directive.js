import { __decorate } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
let ProductDirective = class ProductDirective {
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
};
__decorate([
    Input()
], ProductDirective.prototype, "src", void 0);
__decorate([
    HostBinding('attr.src')
], ProductDirective.prototype, "srcAttr", void 0);
ProductDirective = __decorate([
    Directive({
        selector: 'img[appProduct]'
    })
], ProductDirective);
export { ProductDirective };
//# sourceMappingURL=product.directive.js.map