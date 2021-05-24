import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SelectLojaComponent } from './select-loja.component';
let SelectLojaModule = class SelectLojaModule {
};
SelectLojaModule = __decorate([
    NgModule({
        declarations: [SelectLojaComponent],
        exports: [SelectLojaComponent],
        imports: [
            FormsModule,
            CommonModule,
            RouterModule,
            MDBBootstrapModule
        ]
    })
], SelectLojaModule);
export { SelectLojaModule };
//# sourceMappingURL=select-loja.module.js.map