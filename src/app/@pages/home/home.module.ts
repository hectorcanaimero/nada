import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveModule } from 'ngx-responsive';

import { PostModule } from 'src/app/@widgets/post/post.module';
import { FaixaModule } from '@sharing/faixa/faixa.module';
import { OfertasModule } from 'src/app/@widgets/ofertas/ofertas.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { CarouselModule } from 'src/app/@widgets/carousel/carousel.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { InstitucionalModule } from 'src/app/@widgets/institucional/institucional.module';

import { HOME_ROUTE } from './home.routes';
import { HomeComponent } from './home.component';
import { environment } from 'src/environments/environment.prod';
import { BannersModule } from 'src/app/@widgets/banners/banners.module';

@NgModule({
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
export class HomeModule { }
