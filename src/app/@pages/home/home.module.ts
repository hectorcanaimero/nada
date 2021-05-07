import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { OfertasModule } from '../../@widgets/ofertas/ofertas.module';
import { HOME_ROUTE } from './home.routes';
import { HelperModule } from '../../component/helper/helper.module';

import { ResponsiveModule } from 'ngx-responsive';

import { PostModule } from '@widgets/post/post.module';
import { FaixaModule } from '@sharing/faixa/faixa.module';
import { CarouselModule } from '@widgets/carousel/carousel.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { InstitucionalModule } from '@widgets/institucional/institucional.module';

import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HOME_ROUTE,
    PostModule,
    FaixaModule,
    HelperModule,
    CommonModule,
    OfertasModule,
    CarouselModule,
    SelectLojaModule,
    InstitucionalModule,
    ResponsiveModule.forRoot(environment.responsive),
  ]
})
export class HomeModule { }
