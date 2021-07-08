import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../clases/Usuario';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[];
  usuA: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    
    $("#login").remove();
    $("#register").remove();

    this.usuarioService.getAll().subscribe(
      response => {
        this.usuarios = response;
        console.log(this.usuarios);
      }
    );

  }

}
