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
import { FooterComponent } from './Buscar/footer/footer.component';
import { SeriesComponent } from './Paginas/series/series.component';
import { SerieComponent } from './Paginas/serie/serie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    ListadoComponent,
    PrincipalComponent,
    FooterComponent,
    SeriesComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
