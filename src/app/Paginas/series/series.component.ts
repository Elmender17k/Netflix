import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/interfaces/principal.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit{

  series: Series[]=[]
 
  constructor( private SeriesService:SeriesService){
 
 
  }
 
  ngOnInit(): void {
    this.SeriesService.getAllSeries().subscribe(series => this.series = series)
    
  }

}

