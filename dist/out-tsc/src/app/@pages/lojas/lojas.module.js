import { __decorate } from "tslib";
import { SemDataModule } from './../../@sharing/sem-data/sem-data.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { LojasComponent } from './lojas.component';
import { LojaIdComponent } from './detail/loja-id.component';
const app = [
    { path: '', component: LojasComponent },
    { path: ':slug', component: LojaIdComponent }
];
let LojasModule = class LojasModule {
};
LojasModule = __decorate([
    NgModule({
        declarations: [LojasComponent, LojaIdComponent],
        imports: [
            FormsModule,
            CommonModule,
            SemDataModule,
            MDBBootstrapModule,
            NgxPaginationModule,
            RouterModule.forChild(app)
        ]
    })
], LojasModule);
export { LojasModule };
//# sourceMappingURL=lojas.module.js.map