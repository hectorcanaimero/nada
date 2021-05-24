import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { OfertasModule } from '@widgets/ofertas/ofertas.module';
import { ProductModule } from '@sharing/product/product.module';
import { SearchComponent } from './search.component';
const app = [{ path: ':slug', component: SearchComponent }];
let SearchModule = class SearchModule {
};
SearchModule = __decorate([
    NgModule({
        declarations: [SearchComponent],
        imports: [
            PipesModule,
            CommonModule,
            ProductModule,
            MDBBootstrapModule,
            OfertasModule,
            RouterModule.forChild(app)
        ]
    })
], SearchModule);
export { SearchModule };
//# sourceMappingURL=search.module.js.map