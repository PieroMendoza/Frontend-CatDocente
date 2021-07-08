import { Injectable } from '@angular/core';

import { Usuario } from '../Clases/usuario';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint = 'http://localhost:8090/api/usuario/usuario';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAll(): Observable<Usuario[]> {
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response['_embedded']['usuarios'] as Usuario[])
        );
    }

    // insertando lo datos  en la base de datos
    create(usuario: Usuario): Observable<any> { // devuele el objeto creado
        return this.http.post(this.urlEndPoint, usuario, { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
    }

    // obteniendo datos por ID
    get(id: number): Observable<any> {
      return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  // metodo actualizar 
  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.urlEndPoint}/${usuario.id}`, usuario, { headers: this.httpHeaders })
  }

  // agregando el eliminar 
  delete(id: number): Observable<Usuario> {
      return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
  }

  
}
