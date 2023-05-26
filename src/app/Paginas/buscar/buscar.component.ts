import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula, Series } from 'src/app/interfaces/principal.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
pelicula: Pelicula[]=[];
serie: Series[]=[]
constructor(private activatedRoute:ActivatedRoute,private seriesService:SeriesService, private peliculasService:PeliculasService){

}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(param=>{
this.seriesService.getBuscar(param['texto']).subscribe(res=>{
  this.serie =res;

  console.log(res)
})

    })


    this.activatedRoute.params.subscribe(param=>{
      this.peliculasService.getBuscarP(param['texto']).subscribe(res=>{
        this.pelicula =res;
      
        console.log(res)
      })
      
          })

  }

}
