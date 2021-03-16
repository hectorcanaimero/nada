import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { HelperModule } from '../helper/helper.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [PostComponent],
  bootstrap: [PostComponent],
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    HelperModule,
    MDBBootstrapModule
  ]
})
export class PostModule { }
