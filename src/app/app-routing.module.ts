import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './Paginas/peliculas/peliculas.component';
import { ListadoComponent } from './Paginas/listado/listado.component';
import { PeliculaComponent } from './Paginas/pelicula/pelicula.component';
import { BuscarComponent } from './Paginas/buscar/buscar.component';
import { PrincipalComponent } from './Paginas/principal/principal.component';
import { SeriesComponent } from './Paginas/series/series.component';
import { SerieComponent } from './Paginas/serie/serie.component';
import { LoginComponent } from './inicio/login/login.component';


const routes: Routes = [

  {path:'', component: LoginComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'peliculas', component: PeliculasComponent},
  {path:'series', component: SeriesComponent},
  {path:'listado', component: ListadoComponent},
  {path:'peliculas/:titulo', component: PeliculaComponent},
  {path:'series/:titulo', component: SerieComponent},
  {path:'buscar/:texto', component: BuscarComponent},



  {path:'', pathMatch:'full', redirectTo: '/principal'},
  {path:'**', pathMatch:'full', redirectTo: '/principal'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
