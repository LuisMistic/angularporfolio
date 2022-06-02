import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./AppComponent.2";
import { PersonaComponent } from './Componentes/persona/persona.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { AudiovisualesComponent } from './Componentes/audiovisuales/audiovisuales.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { RedesComponent } from './Componentes/redes/redes.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    NavbarComponent,
    BannerComponent,
    ExperienciaComponent,
    AudiovisualesComponent,
    EducacionComponent,
    ContactoComponent,
    RedesComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
