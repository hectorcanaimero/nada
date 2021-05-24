import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { MobileModule } from '@widgets/mobile/mobile.module';
import { DropMenuModule } from '@sharing/drop-menu/drop-menu.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { MenuSidebarModule } from '@sharing/menu-sidebar/menu-sidebar.module';
let TopModule = class TopModule {
};
TopModule = __decorate([
    NgModule({
        declarations: [TopComponent],
        exports: [TopComponent],
        imports: [
            CommonModule,
            RouterModule,
            MobileModule,
            DropMenuModule,
            SelectLojaModule,
            MenuSidebarModule,
            MDBBootstrapModule,
        ]
    })
], TopModule);
export { TopModule };
//# sourceMappingURL=top.module.js.map