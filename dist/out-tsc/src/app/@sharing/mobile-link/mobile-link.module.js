import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MobileLinkComponent } from './mobile-link.component';
let MobileLinkModule = class MobileLinkModule {
};
MobileLinkModule = __decorate([
    NgModule({
        declarations: [MobileLinkComponent],
        exports: [MobileLinkComponent],
        imports: [
            CommonModule,
            RouterModule,
            MDBBootstrapModule,
        ]
    })
], MobileLinkModule);
export { MobileLinkModule };
//# sourceMappingURL=mobile-link.module.js.map