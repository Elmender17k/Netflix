import { Component, OnInit } from '@angular/core';
import { Pelicula, Series } from 'src/app/interfaces/principal.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { SeriesService } from 'src/app/services/series.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  peliculas: Pelicula[]=[]
  series: Series[]=[]
  
  constructor(private PeliculasService:PeliculasService, private SeriesService:SeriesService){
 
 
  }


  ngOnInit(): void {
    this.PeliculasService.getAllPeliculas().subscribe(peliculas => this.peliculas = peliculas),

    
    this.SeriesService.getAllSeries().subscribe(series => this.series = series)
  }

}
