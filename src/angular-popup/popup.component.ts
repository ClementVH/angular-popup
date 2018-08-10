import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { PopupService } from './popup.service';
import { PopupDirective } from './popup.directive';
import { HtmlPopupItem } from './items/html-popup-item';
import { IframePopupItem } from './items/iframe-popup-item';
import { IframeComponent } from './iframe/iframe.component';
import { ConfirmPopupItem } from './items/confirm-popup-item';
import { IPopupItem } from './items/popup-item';
import { ConfirmComponent } from './confirm/confirm.component';

@Component({
  selector: 'ng-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @ViewChild(PopupDirective) appPopup: PopupDirective;

  isOpen = false;
  isConfirm = false;
  isIframe = false;
  isHtml = false;
  spinning = false;

  options: any = {};
  default_options = {
    id: '',
    dismissable: true,
    title: 'Title',
    text: 'Text',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    showClose: true,
    spin: true,
  }

  constructor(public popup: PopupService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.popup.popupSource$.subscribe(this.handleOpenEvent);
    this.popup.iframeLoadSource$.subscribe(this.handleLoadEvent);
  }

  handleOpenEvent = (popupItem: IPopupItem) => {
    if (!popupItem)
      this.close();

    else if (popupItem.type === 'html-popup')
      this.openHtml(<HtmlPopupItem> new HtmlPopupItem(popupItem));

    else if (popupItem.type === 'confirm-popup')
      this.openConfirm(<ConfirmPopupItem> new ConfirmPopupItem(popupItem));

    else if (popupItem.type === 'iframe-popup')
      this.openIframe(<IframePopupItem> new IframePopupItem(popupItem));

    return;
  }

  openHtml(htmlPopupItem: HtmlPopupItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(htmlPopupItem.component);

    this.openPopup(componentFactory, htmlPopupItem.options);

    this.isHtml = true;
  }

  openIframe(iframePopupItem: IframePopupItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(iframePopupItem.component);

    let componentRef = this.openPopup(componentFactory, iframePopupItem.options);
    (<IframeComponent>componentRef.instance).url = iframePopupItem.url;

    this.isIframe = true;
  }

  openConfirm(confirmPopupItem: ConfirmPopupItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(confirmPopupItem.component);

    let componentRef = this.openPopup(componentFactory, confirmPopupItem.options);
    (<ConfirmComponent>componentRef.instance).title = confirmPopupItem.title;
    (<ConfirmComponent>componentRef.instance).text = confirmPopupItem.text;

    this.isConfirm = true;
  }

  openPopup(componentFactory: ComponentFactory<{}>, options) {
    this.close();
    this.isOpen = true;

    let default_options = JSON.parse(JSON.stringify(this.default_options));
    this.options = Object.assign(default_options, options);

    if (this.options.spin)
      this.spinning = true;

    let viewContainerRef = this.appPopup.viewContainerRef;
    return viewContainerRef.createComponent(componentFactory);
  }

  handleLoadEvent = () => {
    if (this.options.spin)
      this.spinning = false;
  }

  dismiss(event) {
    if (event.target.id === 'app-popup' && this.options.dismissable)
      this.close();
  }

  cancel() {
    let cancel = this.options.cancel;
    if (typeof cancel === 'function')
      cancel();
  }

  confirm() {
    let confirm = this.options.confirm;
    if (typeof confirm === 'function')
      confirm();
  }

  close() {
    let viewContainerRef = this.appPopup.viewContainerRef;
    viewContainerRef.clear();

    this.isOpen = false;
    this.isConfirm = false;
    this.isIframe = false;
    this.isHtml = false;
    this.spinning = false;
  }

}
