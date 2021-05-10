import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { SocialComponent } from './social/social.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ImageComponent } from './image/image.component';
import { ProductComponent } from './product/product.component';
import { TituloComponent } from './titulo/titulo.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { SelectorComponent } from './selector/selector.component';
import { FormsModule } from '@angular/forms';
import { LojaComponent } from './loja/loja.component';
import { MapsComponent } from './maps/maps.component';
import { FaixaComponent } from './faixa/faixa.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { DirectiveModule } from 'src/app/shared/directive/directive.module';



@NgModule({
  declarations: [
    MenuComponent,
    SocialComponent,
    SubmenuComponent,
    ImageComponent,
    ProductComponent,
    TituloComponent,
    SelectorComponent,
    LojaComponent,
    MapsComponent,
    FaixaComponent,
    MenuMobileComponent
  ],
  exports: [
    MenuComponent,
    SocialComponent,
    SubmenuComponent,
    ImageComponent,
    ProductComponent,
    TituloComponent,
    SelectorComponent,
    LojaComponent,
    FaixaComponent,
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
