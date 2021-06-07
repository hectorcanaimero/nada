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
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ngx-responsive";
export class HomeModule {
}
HomeModule.ɵmod = i0.ɵɵdefineNgModule({ type: HomeModule });
HomeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HomeModule, { declarations: [HomeComponent], imports: [i1.RouterModule, PostModule,
        FaixaModule,
        CommonModule,
        OfertasModule,
        BannersModule,
        SemDataModule,
        CarouselModule,
        SelectLojaModule,
        InstitucionalModule, i2.ResponsiveModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomeModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=home.module.js.map