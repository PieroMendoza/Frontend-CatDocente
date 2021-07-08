import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuA: any;

  constructor() { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem('token') && window.sessionStorage.getItem('uActivo')){

      var uActivo: any = sessionStorage.getItem("uActivo"); //Obtener datos de localStorage
      uActivo = JSON.parse(uActivo); // Covertir a objeto
      $("#user-navbar").show();

      this.usuA = JSON.parse(uActivo[0]);
      console.log(this.usuA);
      
    }else{
      $("#user-navbar").hide();
    }

  }

  logout(): void {

    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('uActivo');

  }

}
