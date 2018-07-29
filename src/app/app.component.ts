import { Component } from '@angular/core';
import { PopupService } from '../angular-popup/popup.service';
import { TotoComponent } from 'src/common/toto/toto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(public popup: PopupService) {}

  ngOnInit() {}

  openHtml() {
    this.popup.openHtml(TotoComponent, {
      id: 'toto-popup',
      dismissable: false
    });
  }

  openIframe() {
    this.popup.openIframe('https://en.wikipedia.org/wiki/Richard_Feynman', {
      id: 'iframe-popup',
      showClose: false
    });
  }

  confirm = () => console.log('Confirm', this);
  cancel = () => console.log('Cancel', this);

  openConfirm() {
    this.popup.openConfirm(TotoComponent, {
      id: 'confirm-popup',
      confirm: this.confirm,
      cancel: this.cancel,
      confirmText: 'Ok',
      cancelText: 'Not Ok'
    });
  }

  close() {
    this.popup.close();
  }
}
