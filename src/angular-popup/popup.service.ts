import { Injectable, Type } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { PopupItem } from './items/popup-item';
import { IframePopupItem } from './items/iframe-popup-item';
import { ConfirmPopupItem } from './items/confirm-popup-item';
import { HtmlPopupItem } from './items/html-popup-item';

@Injectable()
export class PopupService {

  private popupSource = new Subject<PopupItem>();
  public popupSource$ = this.popupSource.asObservable();

  constructor() {}

  openHtml(component: Type<any>, options: any = {}) {
    let htmlPopupItem = new HtmlPopupItem(component, options);
    this.popupSource.next(htmlPopupItem);
  }

  openIframe(url: string, options: any = {}) {
    let iframePopupItem = new IframePopupItem(url, options);
    this.popupSource.next(iframePopupItem);
  }

  openConfirm(component: Type<any>, options: any = {}) {
    let confirmPopupItem = new ConfirmPopupItem(component, options);
    this.popupSource.next(confirmPopupItem);
  }

  close() {
    this.popupSource.next();
  }
}
