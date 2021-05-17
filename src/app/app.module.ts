import { LgpdModule } from './@widgets/lgpd/lgpd.module';
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { QuicklinkModule } from 'ngx-quicklink';

import { APP_ROUTE } from './app.routes';
import { AppComponent } from './app.component';
import { EXTERNAL_ROUTES } from './external.routes';
import { RedirectGuard } from '@core/services/redirect.guard';

import { TopModule } from '@widgets/top/top.module';
import { MenuModule } from '@widgets/menu/menu.module';
import { FooterModule } from '@widgets/footer/footer.module';
import { HeaderModule } from '@widgets/header/header.module';
import { MobileModule } from '@widgets/mobile/mobile.module';
import { environment } from '../environments/environment.prod';
registerLocaleData(localePt);

const cookieConfig: NgcCookieConsentConfig = {
  cookie: { domain: 'www.condor.com.br' },
  position: "bottom",
  theme: "edgeless",
  palette: {
    popup:  { background: "#000000", text: "#ffffff" },
    button: { background: "#f1d600", text: "#000000" }
  },
  layout: 'my-custom-layout',
  layouts: { "my-custom-layout": '{{messagelink}}{{compliance}}' },
  elements:{
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link cc-politica">Políticas de privacidade</a>.
    </span>
    `,
  },
  type: 'info'
};

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    APP_ROUTE,
    TopModule,
    MenuModule,
    LgpdModule,
    CommonModule,
    HeaderModule,
    FooterModule,
    MobileModule,
    QuicklinkModule,
    EXTERNAL_ROUTES,
    HttpClientModule,
    NgtUniversalModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js',
      { enabled: environment.production }),
    TranslateModule.forRoot({
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
      }
    }),
  ],
  providers: [
    // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    { provide: 'googleTagManagerId', useValue: 'GTM-T7FLP2C' },
    RedirectGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
