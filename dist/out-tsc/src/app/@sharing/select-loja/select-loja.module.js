import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SelectLojaComponent } from './select-loja.component';
import * as i0 from "@angular/core";
export class SelectLojaModule {
}
SelectLojaModule.ɵmod = i0.ɵɵdefineNgModule({ type: SelectLojaModule });
SelectLojaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SelectLojaModule_Factory(t) { return new (t || SelectLojaModule)(); }, imports: [[
            FormsModule,
            CommonModule,
            RouterModule,
            MDBBootstrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SelectLojaModule, { declarations: [SelectLojaComponent], imports: [FormsModule,
        CommonModule,
        RouterModule,
        MDBBootstrapModule], exports: [SelectLojaComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectLojaModule, [{
        type: NgModule,
        args: [{
                declarations: [SelectLojaComponent],
                exports: [SelectLojaComponent],
                imports: [
                    FormsModule,
                    CommonModule,
                    RouterModule,
                    MDBBootstrapModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=select-loja.module.js.map