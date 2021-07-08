import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-auxr',
  templateUrl: './auxr.component.html',
  styleUrls: ['./auxr.component.css']
})
export class AuxrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#login").remove();
    $("#register").show();
    $("#navbar").remove();
    $("#main").remove();
  }

}
