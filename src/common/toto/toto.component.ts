import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.sass']
})
export class TotoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('INIT TOTO');
  }

  ngOnDestroy() {
    console.log('destroy TOTO');
  }

}
