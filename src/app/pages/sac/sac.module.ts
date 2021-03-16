import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacComponent } from './sac.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HelperModule } from '../../component/helper/helper.module';

const app: Routes = [{ path: '', component: SacComponent }];

@NgModule({
  declarations: [SacComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(app),
    MDBBootstrapModule,
    HelperModule,
    CommonModule

  ]
})
export class SacModule { }
