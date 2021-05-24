import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { LinkModule } from '@sharing/link/link.module';
import { DirectiveModule } from '@core/directives/directive.module';
let HeaderModule = class HeaderModule {
};
HeaderModule = __decorate([
    NgModule({
        declarations: [HeaderComponent],
        exports: [HeaderComponent],
        imports: [
            LinkModule,
            PipesModule,
            CommonModule,
            RouterModule,
            DirectiveModule,
            MDBBootstrapModule,
            AutocompleteLibModule,
        ]
    })
], HeaderModule);
export { HeaderModule };
//# sourceMappingURL=header.module.js.map