import { MobileModule } from './shared/widgets/mobile/mobile.module';
import { FooterModule } from './shared/widgets/footer/footer.module';
import { HeaderModule } from './shared/widgets/header/header.module';
import { MenuModule } from './shared/widgets/menu/menu.module';
import { TopModule } from './shared/widgets/top/top.module';
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
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
import { RedirectGuard } from './shared/services/redirect.guard';
import { HelperModule } from './component/helper/helper.module';

registerLocaleData(localePt);
import { environment } from '../environments/environment';

// const cookieConfig: NgcCookieConsentConfig = {
//   cookie: { domain: 'localhost' },
//   position: "bottom",
//   theme: "edgeless",
//   palette: {
//     popup:  { background: "#000000", text: "#ffffff" },
//     button: { background: "#f1d600", text: "#000000" }
//   },
//   layout: 'my-custom-layout',
//   layouts: { "my-custom-layout": '{{messagelink}}{{compliance}}' },
//   elements:{
//     messagelink: `
//     <span id="cookieconsent:desc" class="cc-message">{{message}}
//       <a aria-label="learn more about cookies" tabindex="0" class="cc-link cc-politica" href="#">Políticas de privacidade</a> e as
//       <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link cc-regras" href="#">Termo de uso</a>.
//     </span>
//     `,
//   },
//   type: 'opt-in'
// };

export function HttpLoaderFactory(httpClient: HttpClient) { return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'); }


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    APP_ROUTE,
    EXTERNAL_ROUTES,
    TopModule,
    MenuModule,
    HeaderModule,
    FooterModule,
    MobileModule,
    HelperModule,
    HttpClientModule,
    NgtUniversalModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    QuicklinkModule,
    // NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot({ loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] } }),
  ],
  providers: [
    // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    { provide: 'googleTagManagerId', useValue: 'GTM-T7FLP2C' },
    RedirectGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
