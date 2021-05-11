import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { SocialComponent } from './social/social.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { DirectiveModule } from '@core/directives/directive.module';



@NgModule({
  declarations: [
    MenuComponent,
    SocialComponent,
    SubmenuComponent,
    MenuMobileComponent
  ],
  exports: [
    MenuComponent,
    SocialComponent,
    SubmenuComponent,
    MenuMobileComponent
  ],
  imports: [
    FormsModule,
    PipesModule,
    RouterModule,
    CommonModule,
    DirectiveModule,
    MDBBootstrapModule
  ]
})
export class HelperModule { }
