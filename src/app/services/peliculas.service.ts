import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/principal.interface';
import { enviroment } from 'src/environments/environment';

const URL = enviroment.server 

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

getAllPeliculas(): Observable<Pelicula[]>{
  return this.http.get<Pelicula[]>(`${URL}/peliculas`);


}

}
