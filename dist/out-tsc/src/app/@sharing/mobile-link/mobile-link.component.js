import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { slideDownInOut } from '@core/animations/slide';
let MobileLinkComponent = class MobileLinkComponent {
    constructor(router) {
        this.router = router;
        this.items = [];
        this.titulo = '';
        this.toogle = new EventEmitter();
        this.active = 'out';
        this.height = '0px';
        this.toogleSubMenu = () => {
            this.active = this.active === 'out' ? 'in' : 'out';
        };
        this.onLink = (slug) => {
            this.router.navigateByUrl(slug);
            this.toogle.emit('out');
        };
    }
};
__decorate([
    Input()
], MobileLinkComponent.prototype, "items", void 0);
__decorate([
    Input()
], MobileLinkComponent.prototype, "titulo", void 0);
__decorate([
    Output()
], MobileLinkComponent.prototype, "toogle", void 0);
MobileLinkComponent = __decorate([
    Component({
        selector: 'app-mobile-link',
        templateUrl: './mobile-link.component.html',
        styleUrls: ['./mobile-link.component.scss'],
        animations: [slideDownInOut]
    })
], MobileLinkComponent);
export { MobileLinkComponent };
//# sourceMappingURL=mobile-link.component.js.map