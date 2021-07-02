import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { BannersComponent } from 'src/app/@widgets/banners/banners.component';
import { ImageModule } from '@sharing/image/image.module';

@NgModule({
  declarations: [BannersComponent],
  exports: [BannersComponent],
  imports: [
    ImageModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule
  ]
})
export class BannersModule { }
