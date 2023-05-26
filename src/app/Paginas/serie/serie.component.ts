import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Series } from 'src/app/interfaces/principal.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit{

  serie!: Series;
 
  constructor( private SeriesService:SeriesService,private ActivatedRoute:ActivatedRoute){
 
 
  }
 
  ngOnInit() {
    this.ActivatedRoute.params.subscribe(({titulo})=>{

      this.SeriesService.getAllSerie(titulo).subscribe(res=>{
        setTimeout(()=>{
          this.serie=res
          
                       },1000);
                                })


                              })
  }
}


