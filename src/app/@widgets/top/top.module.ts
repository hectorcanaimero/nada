import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HelperModule } from 'src/app/component/helper/helper.module';

// import { SidebarModule } from '@sharing/menu-sidebar/sidebar.module';
import { DropMenuModule } from '@sharing/drop-menu/drop-menu.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';

@NgModule({
  declarations: [TopComponent],
  exports: [TopComponent],
  imports: [
    CommonModule,
    RouterModule,
    HelperModule,
    // SidebarModule,
    DropMenuModule,
    SelectLojaModule,
    MDBBootstrapModule
  ]
})
export class TopModule { }
