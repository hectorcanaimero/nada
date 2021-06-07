import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarModule } from '@sharing/sidebar/sidebar.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { ImprensaComponent } from './imprensa.component';
import { DetailComponent } from './detail/detail.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [
    { path: '', component: ImprensaComponent },
    { path: ':slug', component: DetailComponent }
];
export class ImprensaModule {
}
ImprensaModule.ɵmod = i0.ɵɵdefineNgModule({ type: ImprensaModule });
ImprensaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ImprensaModule_Factory(t) { return new (t || ImprensaModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            SemDataModule,
            SidebarModule,
            MDBBootstrapModule,
            NgxPaginationModule,
            RouterModule.forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ImprensaModule, { declarations: [ImprensaComponent, DetailComponent], imports: [CommonModule,
        FormsModule,
        SemDataModule,
        SidebarModule,
        MDBBootstrapModule,
        NgxPaginationModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImprensaModule, [{
        type: NgModule,
        args: [{
                declarations: [ImprensaComponent, DetailComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    SemDataModule,
                    SidebarModule,
                    MDBBootstrapModule,
                    NgxPaginationModule,
                    RouterModule.forChild(app)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=imprensa.module.js.map