import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoadableModule, matcher } from 'ngx-loadable';
import { OfertasModule } from '../../component/ofertas/ofertas.module';
import { HOME_ROUTE } from './home.routes';
import { HelperModule } from '../../component/helper/helper.module';
import { ResponsiveModule } from 'ngx-responsive';

const config = {
  breakPoints: {
      xs: {max: 600},
      sm: {min: 601, max: 959},
      md: {min: 960, max: 1279},
      lg: {min: 1280, max: 1919},
      xl: {min: 1920}
  },
  debounceTime: 100
};

@NgModule({
  declarations: [HomeComponent],
  imports: [
    OfertasModule,
    HelperModule,
    CommonModule,
    HOME_ROUTE,
    LoadableModule.forRoot({
      moduleConfigs: [
        { name: 'carousel', matcher,
          loadChildren: () => import('src/app/component/carousel/carousel.module').then(m => m.CarouselModule)
        },
        { name: 'banners', matcher,
          loadChildren: () => import('src/app/component/banners/banners.module').then(m => m.BannersModule)
        },
        { name: 'institucional', matcher,
          loadChildren: () => import('src/app/component/institucional/institucional.module').then(m => m.InstitucionalModule)
        },
        { name: 'posts', matcher,
          loadChildren: () => import('src/app/component/post/post.module').then(m => m.PostModule)
        }
      ]
    }),
    ResponsiveModule.forRoot(config)
  ]
})
export class HomeModule { }
