import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import SwiperCore, { EffectFade, Navigation, Pagination, A11y, Lazy } from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Lazy]);
let SwipeComponent = class SwipeComponent {
    constructor() {
        this.data = [];
        this.code = [];
        this.size = '';
        this.idImage = '';
        this.onSwiper = (swiper) => { };
        this.onSlideChange = () => { };
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() { }
};
__decorate([
    Input()
], SwipeComponent.prototype, "data", void 0);
__decorate([
    Input()
], SwipeComponent.prototype, "code", void 0);
__decorate([
    Input()
], SwipeComponent.prototype, "size", void 0);
__decorate([
    Input()
], SwipeComponent.prototype, "idImage", void 0);
__decorate([
    Input()
], SwipeComponent.prototype, "options", void 0);
SwipeComponent = __decorate([
    Component({
        selector: 'app-swipe',
        templateUrl: './swipe.component.html',
        styleUrls: ['./swipe.component.scss']
    })
], SwipeComponent);
export { SwipeComponent };
//# sourceMappingURL=swipe.component.js.map