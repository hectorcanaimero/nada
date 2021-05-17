import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FooterComponent } from './footer.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { SocialModule } from '@sharing/social/swipe.module';
import { MenuSharingModule } from '@sharing/menu/mobile-link.module';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    MenuSharingModule,
    PipesModule,
    CommonModule,
    RouterModule,
    SocialModule,
    MDBBootstrapModule
  ]
})
export class FooterModule { }
