import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "../AppComponent.2";
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from '../Componentes/pagina404/pagina404.component';


const routes:Routes = [
  {path: '**', component: Pagina404Component}
];

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
