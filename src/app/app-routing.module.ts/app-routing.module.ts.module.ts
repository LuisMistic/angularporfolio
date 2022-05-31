import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
 exports: [RouterModule] 
})
export class AppRoutingModule { }
