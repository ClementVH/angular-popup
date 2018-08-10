import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html'
})
export class IframeComponent {

  url: string;

  @ViewChild('iframe') iframe: ElementRef;

  constructor(private popup: PopupService) {}

  load() {
    this.popup.dispatchLoadEvent();
  }
}
