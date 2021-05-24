import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SemDataComponent } from './sem-data.component';
let SemDataModule = class SemDataModule {
};
SemDataModule = __decorate([
    NgModule({
        declarations: [SemDataComponent],
        exports: [SemDataComponent],
        imports: [
            CommonModule,
            MDBBootstrapModule,
        ]
    })
], SemDataModule);
export { SemDataModule };
//# sourceMappingURL=sem-data.module.js.map