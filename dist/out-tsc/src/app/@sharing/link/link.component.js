import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LinkComponent = class LinkComponent {
    constructor() {
        this.item = [];
        this.class = '';
        this.style = '';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], LinkComponent.prototype, "item", void 0);
__decorate([
    Input()
], LinkComponent.prototype, "class", void 0);
__decorate([
    Input()
], LinkComponent.prototype, "style", void 0);
LinkComponent = __decorate([
    Component({
        selector: 'app-link',
        templateUrl: './link.component.html',
        styleUrls: ['./link.component.scss']
    })
], LinkComponent);
export { LinkComponent };
//# sourceMappingURL=link.component.js.map