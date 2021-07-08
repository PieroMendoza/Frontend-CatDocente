import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuA: any;

  constructor() { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem('token') && window.sessionStorage.getItem('uActivo')){

      var uActivo: any = sessionStorage.getItem("uActivo"); //Obtener datos de localStorage
      uActivo = JSON.parse(uActivo); // Covertir a objeto
      $("#user-sidebar").show();

      this.usuA = JSON.parse(uActivo[0]);
      console.log(this.usuA);
      
    }else{
      $("#user-sidebar").hide();
    }

  }

}
