import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from '../interfaces/principal.interface';
import { enviroment } from 'src/environments/environment';

const URL = enviroment.server 

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http:HttpClient) { }

getAllSeries(): Observable<Series[]>{
  return this.http.get<Series[]>(`${URL}/series`);


}
getAllSerie(titulo: string): Observable<Series>{
  return this.http.get<Series>(`${URL}/series/${titulo}`);


}
getBuscar(texto: string): Observable<Series[]>{
  return this.http.get<Series[]>(`${URL}/series?titulo_like=${texto}`);
  //return this.http.get<Series[]>(`${URL}/peliculas?q=${texto}`);


}

}
