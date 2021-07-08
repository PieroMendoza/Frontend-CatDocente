import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../../services/docente.service';
import { Docente } from '../../../clases/Docente';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../clases/Usuario';
import * as bcrypt from 'bcryptjs';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  n: any;

  constructor(private docenteService: DocenteService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    
  }

  registrar(): void {

    var nombres = $("#nombres").val();
    var apPaterno = $("#apPaterno").val();
    var apMaterno = $("#apMaterno").val();
    var dni = $("#dni").val();
    var correo = $("#correo").val();
    var campus = $("#campus").val();
    var fechaNac = $("#fechaNac").val();
    var usuario = $("#usuario").val();
    var password = $("#password").val();
    var sexo = $("#sexo").val();
    
    if(nombres!=""&&apPaterno!=""&&apMaterno!=""&&dni!=""&&correo!=""&&campus!=""&&fechaNac!=""&&usuario!=""&&password!=""&&sexo!=""){
      
      var estado = "1";
      var idCategorizacion = 1;
      var idEvaluacion = 1;

      this.docenteService.getAll().subscribe(
        response => {
          var idDoc=response.length+1;
          var docente = new Docente(
            response.length+1,
            nombres,
            apPaterno,
            apMaterno,
            dni,
            correo,
            fechaNac,
            sexo,
            usuario,
            campus,
            estado,
            idCategorizacion,
            idEvaluacion);
            
            console.log(docente);

            this.docenteService.create(docente).subscribe(response => {
              console.log(response);

              this.usuarioService.getAll().subscribe(response => {
                const salt = bcrypt.genSaltSync(10);
                var passBcrypt = bcrypt.hashSync(password, 10);
                var usuarioNuevo = new Usuario(response.length+1, usuario, passBcrypt, idDoc, 1, 1);

                this.usuarioService.create(usuarioNuevo).subscribe(response => {
                  window.location.href="login";
                });
              });

            });

        }
      );
    }else{
      alert("Complete todos los campos.");
    }

  }

  goLogin(): void {
    window.location.href="login";
  }

  goHome(): void {
    window.location.href="home";
  }

}
