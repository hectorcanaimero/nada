import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuicklinkModule } from 'ngx-quicklink';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

import { APP_ROUTE } from './app.routes';
import { AppComponent } from './app.component';
import { EXTERNAL_ROUTES } from './external.routes';
import { LgpdModule } from './@widgets/lgpd/lgpd.module';
import { SeoService } from './@core/services/seo.service';
import { UtilService } from './@core/services/util.service';
import { NewsService } from './@core/services/news.service';
import { DataService } from './@core/services/data.service';
import { BlogService } from './@core/services/blog.service';
import { RedirectGuard } from '@core/services/redirect.guard';
import { UpdateService } from './@core/services/update.service';

import { TopModule } from '@widgets/top/top.module';
import { MenuModule } from '@widgets/menu/menu.module';
import { FooterModule } from '@widgets/footer/footer.module';
import { HeaderModule } from '@widgets/header/header.module';
import { MobileModule } from '@widgets/mobile/mobile.module';
import { environment } from '../environments/environment.prod';
registerLocaleData(localePt);

const cookieConfig: NgcCookieConsentConfig = {
  type: 'info',
  layout: 'my-custom-layout',
  cookie: { domain: 'condor.com.br' },
  position: "bottom", theme: "edgeless",
  palette: {
    popup:  { background: "#000000", text: "#ffffff" },
    button: { background: "#f1d600", text: "#000000" }
  },
  layouts: { "my-custom-layout": '{{messagelink}}{{compliance}}' },
  elements:{
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link cc-politica">Políticas de privacidade</a>.
    </span>
    `,
  },
};

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    APP_ROUTE, EXTERNAL_ROUTES,
    TopModule, MenuModule, LgpdModule,
    HeaderModule, FooterModule, MobileModule,
    CommonModule, QuicklinkModule,
    HttpClientModule, NgtUniversalModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      scope: './',
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    }),
    TranslateModule.forRoot({
      loader: { deps: [HttpClient], provide: TranslateLoader, useFactory: HttpLoaderFactory, }
    }),
  ],
  providers: [
    SeoService, UpdateService, UtilService,
    RedirectGuard, BlogService, DataService, NewsService,
    { provide: 'googleTagManagerId', useValue: 'GTM-T7FLP2C' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
