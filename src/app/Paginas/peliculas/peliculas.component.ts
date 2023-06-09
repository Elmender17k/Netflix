import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/principal.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
 
peliculas: Pelicula[]=[]

 constructor(private PeliculasService: PeliculasService){


 }
 
  ngOnInit(): void {
    
this.PeliculasService.getAllPeliculas().subscribe(peliculas => this.peliculas = peliculas)

  }

}
