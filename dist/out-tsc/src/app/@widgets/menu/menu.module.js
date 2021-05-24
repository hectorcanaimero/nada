import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LinkModule } from '@sharing/link/link.module';
import { MenuComponent } from './menu.component';
let MenuModule = class MenuModule {
};
MenuModule = __decorate([
    NgModule({
        declarations: [MenuComponent],
        exports: [MenuComponent],
        imports: [
            LinkModule,
            CommonModule,
            RouterModule,
            MDBBootstrapModule
        ]
    })
], MenuModule);
export { MenuModule };
//# sourceMappingURL=menu.module.js.map