import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './Paginas/peliculas/peliculas.component';
import { ListadoComponent } from './Paginas/listado/listado.component';
import { PeliculaComponent } from './Paginas/pelicula/pelicula.component';
import { BuscarComponent } from './Paginas/buscar/buscar.component';
import { PrincipalComponent } from './Paginas/principal/principal.component';

const routes: Routes = [

  {path:'principal', component: PrincipalComponent},
  {path:'peliculas', component: PeliculasComponent},
  {path:'listado', component: ListadoComponent},
  {path:'id', component: PeliculaComponent},
  {path:'buscar/text', component: BuscarComponent},



  {path:'', pathMatch:'full', redirectTo: '/principal'},
  {path:'**', pathMatch:'full', redirectTo: '/principal'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
