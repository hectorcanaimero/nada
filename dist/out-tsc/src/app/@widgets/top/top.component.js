import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { slideLeftInOut } from '@core/animations/slide';
let TopComponent = class TopComponent {
    constructor(db, util) {
        this.db = db;
        this.util = util;
        this.entrada = false;
        this.salida = new EventEmitter();
        this.loja = [];
        this.json = [];
        this.items = [];
        this.activeSidebar = 'out';
        this.toog = (ev) => console.log(ev);
        this.toogleSidebar = () => this.activeSidebar = this.activeSidebar === 'out' ? 'in' : 'out';
        this.toogle = (ev) => {
            if (ev)
                this.entrada = ev;
            this.entrada = !this.entrada;
            this.salida.emit(this.entrada);
        };
        this.onLink = (slug) => console.log(slug);
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.ofertas = this.db.getMenuOfertas('menuDepartamento');
        this.loja = this.util.StorageParse('Loja');
    }
};
__decorate([
    Input()
], TopComponent.prototype, "entrada", void 0);
__decorate([
    Output()
], TopComponent.prototype, "salida", void 0);
__decorate([
    Input()
], TopComponent.prototype, "json", void 0);
__decorate([
    Input()
], TopComponent.prototype, "items", void 0);
TopComponent = __decorate([
    Component({
        selector: 'app-top',
        templateUrl: './top.component.html',
        styleUrls: ['./top.component.scss'],
        animations: [slideLeftInOut]
    })
], TopComponent);
export { TopComponent };
//# sourceMappingURL=top.component.js.map