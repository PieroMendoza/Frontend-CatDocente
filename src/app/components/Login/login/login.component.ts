import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { LoginService } from '../../../services/login.service';
import { UsuarioAuth } from '../../../clases/UsuarioAuth';
import { Usuario } from '../../../clases/Usuario';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'src/app/clases/IResponse';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private loginService: LoginService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  send(): any{

    var uActivo: any = sessionStorage.getItem("uActivo"); //Obtener datos de sessionStorage
    uActivo = JSON.parse(uActivo); // Covertir a objeto
    if (uActivo === null) {// Si no existe, creamos un array vacio.
      uActivo = []; // es es un  array
    }

    var usu = $("#usu").val();
    var pass = $("#pass").val();

    if(usu!=""&&pass!=""){
      var usuario = new UsuarioAuth(1, usu, pass);

      this.loginService.oauth(usuario).subscribe(response => {
        console.log(response);
        if(response){
          window.sessionStorage.setItem('token', response.access_token);
          window.location.href="legajo";

          uActivo.splice(0, 1);
          sessionStorage.setItem("uActivo", JSON.stringify(uActivo));

          var usuA = JSON.stringify(response.docente);

          uActivo.push(usuA);
          sessionStorage.setItem("uActivo", JSON.stringify(uActivo));

        }
      });
    }
    

  }

  goHome(): void {
    window.location.href="home";
  }

  goRegister(): any{
    window.location.href="register";
  }

}
