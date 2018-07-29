import { Component } from '@angular/core';
import { PopupService } from '../angular-popup/popup.service';
import { HtmlPopupItem } from '../angular-popup/items/html-popup-item';
import { TotoComponent } from 'src/common/toto/toto.component';
import { IframePopupItem } from '../angular-popup/items/iframe-popup-item';
import { ConfirmPopupItem } from '../angular-popup/items/confirm-popup-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(public popup: PopupService) {}

  ngOnInit() {}

  openHtml() {
    this.popup.openHtml(new HtmlPopupItem(TotoComponent, {
      id: 'toto-popup',
      dismissable: false
    }));
  }

  openIframe() {
    this.popup.openIframe(new IframePopupItem('https://weathermap.netatmo.com'));
  }

  confirm = () => {
    console.log('Confirm', this);
  }

  cancel = () => {
    console.log('Cancel', this);
  }

  openConfirm() {
    this.popup.openConfirm(new ConfirmPopupItem(TotoComponent, {
      id: 'confirm-popup',
      confirm: this.confirm,
      cancel: this.cancel,
      confirmText: 'Ok',
      cancelText: 'Not Ok'
    }));
  }

  close() {
    this.popup.close();
  }
}
