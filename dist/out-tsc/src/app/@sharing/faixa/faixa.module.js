import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { FaixaComponent } from './faixa.component';
let FaixaModule = class FaixaModule {
};
FaixaModule = __decorate([
    NgModule({
        declarations: [FaixaComponent],
        exports: [FaixaComponent],
        imports: [
            CommonModule,
            RouterModule,
            DirectiveModule,
            MDBBootstrapModule,
        ]
    })
], FaixaModule);
export { FaixaModule };
//# sourceMappingURL=faixa.module.js.map