import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html'
})
export class IframeComponent implements OnInit {

  url: string;

  constructor() { }

  ngOnInit() {}
}
