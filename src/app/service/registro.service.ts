import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  
  registroURL = 'http://44.201.166.87:8081/registro/';
  
  
  constructor(private httpClient: HttpClient) {}

    public lista(): Observable<Registro[]>{
      return this.httpClient.get<Registro[]>(this.registroURL + 'lista');
    }

    public detalleid(id: number): Observable<Registro>{
      return this.httpClient.get<Registro>(this.registroURL + `detalle/${id}`);
    }

    public detalledescripcion(descripcion: string): Observable<Registro>{
      return this.httpClient.get<Registro>(this.registroURL + `detalle/${descripcion}`);
    }
   
    public crear(registro: Registro): Observable<any>{
      return this.httpClient.post<any>(this.registroURL + 'crear', registro);
    }

    public actualizar(id: number, registro: Registro): Observable<any>{
      return this.httpClient.put<any>(this.registroURL + `actualizar/${id}`, registro);
    }

    public borrar(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.registroURL + `borrar/${id}`);
    }

}
