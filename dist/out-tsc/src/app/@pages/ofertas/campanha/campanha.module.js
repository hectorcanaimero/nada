import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { ProductModule } from '@sharing/product/product.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { CampanhaComponent } from './campanha.component';
const app = [
    { path: ':slug', component: CampanhaComponent },
];
let CampanhaModule = class CampanhaModule {
};
CampanhaModule = __decorate([
    NgModule({
        declarations: [CampanhaComponent],
        imports: [
            PipesModule,
            CommonModule,
            SemDataModule,
            ProductModule,
            SelectLojaModule,
            MDBBootstrapModule,
            NgxPaginationModule,
            RouterModule.forChild(app)
        ]
    })
], CampanhaModule);
export { CampanhaModule };
//# sourceMappingURL=campanha.module.js.map