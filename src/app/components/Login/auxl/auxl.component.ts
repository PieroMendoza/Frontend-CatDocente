import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-auxl',
  templateUrl: './auxl.component.html',
  styleUrls: ['./auxl.component.css']
})
export class AuxlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#login").show();
    $("#register").remove();
    $("#navbar").remove();
    $("#main").remove();
  }

}
