import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LgpdComponent } from './lgpd.component';
let LgpdModule = class LgpdModule {
};
LgpdModule = __decorate([
    NgModule({
        declarations: [LgpdComponent],
        exports: [LgpdComponent],
        imports: [
            CommonModule,
            MDBBootstrapModule,
        ]
    })
], LgpdModule);
export { LgpdModule };
//# sourceMappingURL=lgpd.module.js.map