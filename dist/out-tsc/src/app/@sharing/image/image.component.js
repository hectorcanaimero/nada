import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ImageComponent = class ImageComponent {
    constructor() {
        this.code = [];
        this.size = '';
        this.idImage = '';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], ImageComponent.prototype, "code", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "size", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "idImage", void 0);
ImageComponent = __decorate([
    Component({
        selector: 'app-image',
        templateUrl: './image.component.html',
        styleUrls: ['./image.component.scss']
    })
], ImageComponent);
export { ImageComponent };
//# sourceMappingURL=image.component.js.map