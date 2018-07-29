# @clementvh/angular-popup

## Description

An angular module to display popup on screen, supported by angular >= 4.0.0

## Install

```sh
$ npm install @clementvh/angular-popup
```

## Basic Usage

### Add PopupModule and your component in your angular root module :

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PopupModule } from '@clementvh/angular-popup';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    PopupModule
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [MyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Inject the PopupService into a component :

```ts
import { Component } from '@angular/core';
import { PopupService } from '@clementvh/angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public popupService: PopupService) {}
}
```

### Call service methods to open a popup :

```ts
this.popupService.openHtml(MyComponent, {
  id: 'toto-popup'
});
```

## PopupService's available methods

### openHtml()
Open a popup with the given component inside

```ts
/**
 * @param {Type<any>} component The component to instatiate in the popup.
 * @param {Object} options Options given to the popup.
 */
openHtml(component: Type<any>, options: any = {}): void;
```

### openConfirm()
Open a popup with the given component inside, and two buttons at the bottom 'Cancel' and 'Confirm'

```ts
/**
 * @param {Type<any>} component The component to instatiate in the popup.
 * @param {Object} options Options given to the popup.
 */
openConfirm(component: Type<any>, options: any = {}): void;
```

### openIframe()
Open a popup with an iframe to the given url

```ts
/**
 * @param {string} url The url for the iframe
 * @param {Object} options Options given to the popup.
 */
openIframe(url: string, options: any = {}): void;
```

## Options
Options object should be a type of `PopupOptions` interface. The object may have following properties:

- **id** - {string} - CSS class injected on the `.app-popup-container` block.
- **dismissable** - {boolean} - if `false` clicking outside the popup won't close it.
- **showClose** - {boolean} - if `false` the close icon won't be displayed.
- **confirm** - {Function} - Function to call when confirm button is clicked.
- **cancel** - {Function} - Function to call when cancel button is clicked.
- **confirmText** - {string} - Text to inject in confirm button.
- **cancelText** - {string} - Text to inject in cancel button.
