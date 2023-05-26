import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/interfaces/principal.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
 
 pelicula!: Pelicula;

   constructor(private PeliculasService: PeliculasService,private ActivatedRoute:ActivatedRoute){
  
  
   }
   
    ngOnInit() {

      this.ActivatedRoute.params.subscribe(({titulo})=>{

this.PeliculasService.getAllPelicula(titulo).subscribe(res=>{
             setTimeout(()=>{
this.pelicula=res

             },1000);
             
                            

})


      })
  
    }
  }
