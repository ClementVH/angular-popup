import { Injectable, Type } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { IPopupItem } from './items/popup-item';
import { PopupOptions } from './popup-options.model';

@Injectable()
export class PopupService {

  private popupSource = new Subject<IPopupItem>();
  public popupSource$ = this.popupSource.asObservable();

  private iframeLoadSource = new Subject<void>();
  public iframeLoadSource$ = this.iframeLoadSource.asObservable();

  constructor() {}

  openHtml(component: Type<any>, options: PopupOptions = {}) {
    this.popupSource.next({component, options, type: 'html-popup'});
  }

  openConfirm(component: Type<any>, options: PopupOptions = {}) {
    this.popupSource.next({component, options, type: 'confirm-popup'});
  }

  openIframe(url: string, options: PopupOptions = {}) {
    this.popupSource.next({url, options, type: 'iframe-popup'});
  }

  dispatchLoadEvent() {
    this.iframeLoadSource.next();
  }

  close() {
    this.popupSource.next();
  }
}
