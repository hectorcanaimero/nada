import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { LinkModule } from '@sharing/link/link.module';
import { DirectiveModule } from '@core/directives/directive.module';
import * as i0 from "@angular/core";
export class HeaderModule {
}
HeaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: HeaderModule });
HeaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            LinkModule,
            PipesModule,
            CommonModule,
            RouterModule,
            DirectiveModule,
            MDBBootstrapModule,
            AutocompleteLibModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HeaderModule, { declarations: [HeaderComponent], imports: [LinkModule,
        PipesModule,
        CommonModule,
        RouterModule,
        DirectiveModule,
        MDBBootstrapModule,
        AutocompleteLibModule], exports: [HeaderComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=header.module.js.map