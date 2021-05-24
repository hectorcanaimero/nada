import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResponsiveModule } from 'ngx-responsive';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { DirectiveModule } from '@core/directives/directive.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { OfertasModule } from '@widgets/ofertas/ofertas.module';
import { ProductIdComponent } from './product-id.component';
import { environment } from 'src/environments/environment.prod';
const app = [
    { path: ':departamento/:setor/:slug', component: ProductIdComponent },
    { path: ':departamento/:setor/:slug/init', component: ProductIdComponent }
];
let ProductIdModule = class ProductIdModule {
};
ProductIdModule = __decorate([
    NgModule({
        declarations: [ProductIdComponent],
        imports: [
            PipesModule,
            CommonModule,
            SemDataModule,
            OfertasModule,
            DirectiveModule,
            SelectLojaModule,
            MDBBootstrapModule,
            RouterModule.forChild(app),
            ResponsiveModule.forRoot(environment.responsive)
        ]
    })
], ProductIdModule);
export { ProductIdModule };
//# sourceMappingURL=product-id.module.js.map