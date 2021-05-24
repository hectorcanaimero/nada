import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { timer } from 'rxjs';
import { slideLeftInOut, slideDownInOut } from '@core/animations/slide';
let MenuSidebarComponent = class MenuSidebarComponent {
    constructor(db) {
        this.db = db;
        this.items = [];
        this.condor = [];
        this.activeSidebar = 'out';
        this.activeMenuOfertas = 'out';
        this.faleConosco = [];
        this.convertFaleConosco = () => {
            this.condor.sac.forEach(el => this.faleConosco.push(el));
            this.condor.trabalhe.forEach(el => this.faleConosco.push(el));
            this.condor.denuncia.forEach(el => this.faleConosco.push(el));
            this.faleConosco.push({ nome: 'Notícias', url: '/institucional/imprensa' });
        };
        this.onLink = (slug) => console.log(slug);
        this.onToogle = (ev) => console.log(ev);
        this.toogleMenuOfertas = () => this.activeMenuOfertas = this.activeMenuOfertas === 'out' ? 'in' : 'out';
    }
    ngOnInit() {
        this.menuOfertas$ = this.db.getMenuOfertas('menuDepartamento');
        timer(300).subscribe(() => this.convertFaleConosco());
    }
};
__decorate([
    Input()
], MenuSidebarComponent.prototype, "items", void 0);
__decorate([
    Input()
], MenuSidebarComponent.prototype, "condor", void 0);
__decorate([
    Input()
], MenuSidebarComponent.prototype, "activeSidebar", void 0);
MenuSidebarComponent = __decorate([
    Component({
        selector: 'app-menu-sidebar',
        templateUrl: './menu-sidebar.component.html',
        styleUrls: ['./menu-sidebar.component.scss'],
        animations: [slideLeftInOut, slideDownInOut]
    })
], MenuSidebarComponent);
export { MenuSidebarComponent };
//# sourceMappingURL=menu-sidebar.component.js.map