import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let DropMenuComponent = class DropMenuComponent {
    constructor() {
        this.data = [];
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DropMenuComponent.prototype, "titulo", void 0);
__decorate([
    Input()
], DropMenuComponent.prototype, "data", void 0);
DropMenuComponent = __decorate([
    Component({
        selector: 'app-drop-menu',
        templateUrl: './drop-menu.component.html',
        styleUrls: ['./drop-menu.component.scss']
    })
], DropMenuComponent);
export { DropMenuComponent };
//# sourceMappingURL=drop-menu.component.js.map