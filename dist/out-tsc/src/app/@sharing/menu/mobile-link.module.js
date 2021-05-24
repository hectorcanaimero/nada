import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuComponent } from './menu.component';
let MenuSharingModule = class MenuSharingModule {
};
MenuSharingModule = __decorate([
    NgModule({
        declarations: [MenuComponent],
        exports: [MenuComponent],
        imports: [
            CommonModule,
            RouterModule,
            MDBBootstrapModule,
        ]
    })
], MenuSharingModule);
export { MenuSharingModule };
//# sourceMappingURL=mobile-link.module.js.map