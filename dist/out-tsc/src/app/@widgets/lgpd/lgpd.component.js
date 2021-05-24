import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LgpdComponent = class LgpdComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        this.items$ = this.db.PageSlug('politica-de-privacidade');
    }
};
LgpdComponent = __decorate([
    Component({
        selector: 'app-lgpd',
        templateUrl: './lgpd.component.html',
        styleUrls: ['./lgpd.component.scss']
    })
], LgpdComponent);
export { LgpdComponent };
//# sourceMappingURL=lgpd.component.js.map