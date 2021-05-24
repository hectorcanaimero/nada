import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TituloComponent = class TituloComponent {
    constructor() {
        this.link = '';
    }
};
__decorate([
    Input()
], TituloComponent.prototype, "titulo", void 0);
__decorate([
    Input()
], TituloComponent.prototype, "icon", void 0);
__decorate([
    Input()
], TituloComponent.prototype, "link", void 0);
TituloComponent = __decorate([
    Component({
        selector: 'app-titulo',
        templateUrl: './titulo.component.html',
        styleUrls: ['./titulo.component.scss']
    })
], TituloComponent);
export { TituloComponent };
//# sourceMappingURL=titulo.component.js.map