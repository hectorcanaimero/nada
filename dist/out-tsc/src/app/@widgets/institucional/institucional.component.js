import { __decorate } from "tslib";
import { Component } from '@angular/core';
let InstitucionalComponent = class InstitucionalComponent {
    constructor(db) {
        this.db = db;
        this.trackByFunction = (index, items) => items[index];
    }
    ngOnInit() {
        const q = `?include[]=5&include[]=10&include[]=12&include[]=14`;
        this.items$ = this.db.PageCollection(q);
    }
};
InstitucionalComponent = __decorate([
    Component({
        selector: 'app-widget-institucional',
        templateUrl: './institucional.component.html',
        styleUrls: ['./institucional.component.scss']
    })
], InstitucionalComponent);
export { InstitucionalComponent };
//# sourceMappingURL=institucional.component.js.map