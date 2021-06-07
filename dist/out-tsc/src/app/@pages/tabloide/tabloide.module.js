import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { TabloideComponent } from './tabloide.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [{ path: '', component: TabloideComponent }];
export class TabloideModule {
}
TabloideModule.ɵmod = i0.ɵɵdefineNgModule({ type: TabloideModule });
TabloideModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TabloideModule_Factory(t) { return new (t || TabloideModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            SemDataModule,
            MDBBootstrapModule,
            RouterModule.forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TabloideModule, { declarations: [TabloideComponent], imports: [PipesModule,
        CommonModule,
        SemDataModule,
        MDBBootstrapModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabloideModule, [{
        type: NgModule,
        args: [{
                declarations: [TabloideComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    SemDataModule,
                    MDBBootstrapModule,
                    RouterModule.forChild(app)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=tabloide.module.js.map