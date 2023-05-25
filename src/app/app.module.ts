import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeliculaComponent } from './Paginas/pelicula/pelicula.component';
import { BuscarComponent } from './Paginas/buscar/buscar.component';
import { PeliculasComponent } from './Paginas/peliculas/peliculas.component';
import { NavbarComponent } from './Buscar/navbar/navbar.component';
import { ListadoComponent } from './Paginas/listado/listado.component';
import { PrincipalComponent } from './Paginas/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    ListadoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
