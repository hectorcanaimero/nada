import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor(db) {
        this.db = db;
        this.json = [];
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.items = this.db.getMenuOfertas('menuDepartamento');
    }
};
__decorate([
    Input()
], MenuComponent.prototype, "json", void 0);
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map