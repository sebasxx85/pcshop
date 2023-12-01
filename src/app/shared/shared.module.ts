import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavShaComponent } from './components/nav-sha/nav-sha.component';



@NgModule({
  declarations: [

    NavShaComponent,

  ],
  imports: [
    CommonModule,

  ],
  exports: [ 
    NavShaComponent,

  ]
})
export class SharedModule { }
