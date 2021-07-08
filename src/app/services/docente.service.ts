import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Docente } from '../clases/Docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private urlEndPoint = 'http://localhost:8090/api/docente';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Docente[]> {
  return this.http.get(this.urlEndPoint).pipe(
    map(response => response as Docente[])
    );
  }

  // insertando lo datos  en la base de datos
  create(docente: Docente): Observable<any> { // devuele el objeto creado
    return this.http.post(this.urlEndPoint, docente, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
  }

  // obteniendo datos por ID
  get(id: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  // metodo actualizar 
  update(docente: Docente): Observable<Docente> {
    return this.http.put<Docente>(`${this.urlEndPoint}/${docente.id}`, docente, { headers: this.httpHeaders })
  }

  // agregando el eliminar 
  delete(id: number): Observable<Docente> {
      return this.http.delete<Docente>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
  }
  
}
