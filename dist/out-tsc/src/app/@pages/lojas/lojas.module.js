import { SemDataModule } from './../../@sharing/sem-data/sem-data.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { LojasComponent } from './lojas.component';
import { LojaIdComponent } from './detail/loja-id.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [
    { path: '', component: LojasComponent },
    { path: ':slug', component: LojaIdComponent }
];
export class LojasModule {
}
LojasModule.ɵmod = i0.ɵɵdefineNgModule({ type: LojasModule });
LojasModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LojasModule_Factory(t) { return new (t || LojasModule)(); }, imports: [[
            FormsModule,
            CommonModule,
            SemDataModule,
            MDBBootstrapModule,
            NgxPaginationModule,
            RouterModule.forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LojasModule, { declarations: [LojasComponent, LojaIdComponent], imports: [FormsModule,
        CommonModule,
        SemDataModule,
        MDBBootstrapModule,
        NgxPaginationModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LojasModule, [{
        type: NgModule,
        args: [{
                declarations: [LojasComponent, LojaIdComponent],
                imports: [
                    FormsModule,
                    CommonModule,
                    SemDataModule,
                    MDBBootstrapModule,
                    NgxPaginationModule,
                    RouterModule.forChild(app)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=lojas.module.js.map