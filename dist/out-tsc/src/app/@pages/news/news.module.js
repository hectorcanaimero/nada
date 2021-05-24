import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { SidebarModule } from '@sharing/sidebar/sidebar.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { DirectiveModule } from '@core/directives/directive.module';
import { NewsComponent } from './news.component';
const app = [{ path: ':id', component: NewsComponent }];
let NewsModule = class NewsModule {
};
NewsModule = __decorate([
    NgModule({
        declarations: [NewsComponent],
        imports: [
            PipesModule,
            CommonModule,
            SemDataModule,
            SidebarModule,
            DirectiveModule,
            MDBBootstrapModule,
            RouterModule.forChild(app)
        ]
    })
], NewsModule);
export { NewsModule };
//# sourceMappingURL=news.module.js.map