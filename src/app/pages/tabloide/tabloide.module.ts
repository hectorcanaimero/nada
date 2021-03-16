import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabloideComponent } from './tabloide.component';
import { HelperModule } from '../../component/helper/helper.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../../shared/pipes/pipes.module';

const app: Routes = [{ path: '', component: TabloideComponent }];

@NgModule({
  declarations: [TabloideComponent],
  imports: [
    PipesModule,
    CommonModule,
    HelperModule,
    MDBBootstrapModule,
    RouterModule.forChild(app)
  ]
})
export class TabloideModule { }
