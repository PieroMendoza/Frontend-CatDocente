import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  usuA: any;

  constructor() { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem('token') && window.sessionStorage.getItem('uActivo')){

      var uActivo: any = sessionStorage.getItem("uActivo"); //Obtener datos de localStorage
      uActivo = JSON.parse(uActivo); // Covertir a objeto

      this.usuA = JSON.parse(uActivo[0]);
      console.log(this.usuA);
      
    }else{
      window.location.href="home";
    }
  }

}
