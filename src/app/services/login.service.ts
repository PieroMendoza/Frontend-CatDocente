import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioAuth } from '../clases/UsuarioAuth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndPoint = 'http://localhost:8090/api/security/oauth/token';

  private httpHeaders = new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YWRtaW46MTIz'
    }
    );

  constructor(private http: HttpClient) { }

  // insertando lo datos  en la base de datos
  oauth(usuario: UsuarioAuth): Observable<any> { // devuele el objeto creado

    const postdata = {
      'username':usuario.username,
      'password':usuario.password,
      'grant_type':'password'
    };

    const rawData = new URLSearchParams(Object.keys(postdata).map(key=>[key,postdata[key]]));
    console.log(rawData.toString());

    return this.http.post(this.urlEndPoint, rawData.toString(), { headers: this.httpHeaders }); // pasamos la url, objeto, el formato de manejo de json
  }

}
