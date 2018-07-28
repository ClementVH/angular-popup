import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { PopupService } from './popup.service';
import { PopupDirective } from './popup.directive';
import { HtmlPopupItem } from './items/html-popup-item';
import { PopupItem } from './items/popup-item';
import { IframePopupItem } from './items/iframe-popup-item';
import { IframeComponent } from './iframe/iframe.component';
import { ConfirmPopupItem } from './items/confirm-popup-item';
// import { ComponentRef } from "@angular/core/src/linker/component_factory"

@Component({
  selector: 'ng-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @ViewChild(PopupDirective) appPopup: PopupDirective;

  isOpen = false;
  isConfirm = false;

  options: any = {};
  default_options = {
    id: '',
    dismissable: true,
    cancelText: 'Cancel',
    confirmText: 'Confirm'
  }

  constructor(public popup: PopupService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.popup.popupSource$.subscribe(this.handleEvent);
  }

  handleEvent = (popuItem: PopupItem) => {
    if (!popuItem)
      this.close();

    else if (popuItem.type === 'html-popup')
      this.openHtml(<HtmlPopupItem> popuItem);

    else if (popuItem.type === 'confirm-popup')
      this.openConfirm(<ConfirmPopupItem> popuItem);

    else if (popuItem.type === 'iframe-popup')
      this.openIframe(<IframePopupItem> popuItem);

    return;
  }

  openHtml(htmlPopupItem: HtmlPopupItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(htmlPopupItem.component);

    this.openPopup(componentFactory, htmlPopupItem.options);
  }

  openIframe(iframePopupItem: IframePopupItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(iframePopupItem.component);

    let componentRef = this.openPopup(componentFactory, iframePopupItem.options);
    (<IframeComponent>componentRef.instance).url = iframePopupItem.url;
  }

  openConfirm(confirmPopupItem: ConfirmPopupItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(confirmPopupItem.component);

    this.openPopup(componentFactory, confirmPopupItem.options);

    this.isConfirm = true;
  }

  openPopup(componentFactory: ComponentFactory<{}>, options) {
    this.close();
    this.isOpen = true;

    let default_options = JSON.parse(JSON.stringify(this.default_options));
    this.options = Object.assign(default_options, options);

    let viewContainerRef = this.appPopup.viewContainerRef;
    return viewContainerRef.createComponent(componentFactory);
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
  }

}
