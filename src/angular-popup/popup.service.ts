import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PopupItem } from './items/popup-item';
import { IframePopupItem } from './items/iframe-popup-item';
import { ConfirmPopupItem } from './items/confirm-popup-item';

@Injectable()
export class PopupService {

  private popupSource = new Subject<PopupItem>();
  public popupSource$ = this.popupSource.asObservable();

  constructor() {}

  openHtml(htmlPopupItem: PopupItem) {
    this.popupSource.next(htmlPopupItem);
  }

  openIframe(iframePopupItem: IframePopupItem) {
    this.popupSource.next(iframePopupItem);
  }

  openConfirm(confirmPopupItem: ConfirmPopupItem) {
    this.popupSource.next(confirmPopupItem);
  }

  close() {
    this.popupSource.next();
  }
}
