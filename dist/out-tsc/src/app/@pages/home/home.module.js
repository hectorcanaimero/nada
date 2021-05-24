import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveModule } from 'ngx-responsive';
import { PostModule } from '@widgets/post/post.module';
import { FaixaModule } from '@sharing/faixa/faixa.module';
import { OfertasModule } from '@widgets/ofertas/ofertas.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { CarouselModule } from '@widgets/carousel/carousel.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { InstitucionalModule } from '@widgets/institucional/institucional.module';
import { HOME_ROUTE } from './home.routes';
import { HomeComponent } from './home.component';
import { environment } from 'src/environments/environment.prod';
import { BannersModule } from '@widgets/banners/banners.module';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    NgModule({
        declarations: [HomeComponent],
        imports: [
            HOME_ROUTE,
            PostModule,
            FaixaModule,
            CommonModule,
            OfertasModule,
            BannersModule,
            SemDataModule,
            CarouselModule,
            SelectLojaModule,
            InstitucionalModule,
            ResponsiveModule.forRoot(environment.responsive),
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map