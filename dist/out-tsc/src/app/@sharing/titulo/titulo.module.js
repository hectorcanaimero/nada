import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { TituloComponent } from './titulo.component';
let TituloModule = class TituloModule {
};
TituloModule = __decorate([
    NgModule({
        declarations: [TituloComponent],
        exports: [TituloComponent],
        imports: [
            CommonModule,
            RouterModule,
            DirectiveModule,
            MDBBootstrapModule,
        ]
    })
], TituloModule);
export { TituloModule };
//# sourceMappingURL=titulo.module.js.map