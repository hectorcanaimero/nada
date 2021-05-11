import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HelperModule } from 'src/app/component/helper/helper.module';

import { MobileModule } from '@widgets/mobile/mobile.module';
import { DropMenuModule } from '@sharing/drop-menu/drop-menu.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { MenuSidebarModule } from '@sharing/menu-sidebar/menu-sidebar.module';

@NgModule({
  declarations: [TopComponent],
  exports: [TopComponent],
  imports: [
    CommonModule,
    RouterModule,
    HelperModule,
    MobileModule,
    DropMenuModule,
    SelectLojaModule,
    MenuSidebarModule,
    MDBBootstrapModule,
  ]
})
export class TopModule { }
