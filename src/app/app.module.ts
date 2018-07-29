import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PopupModule } from '../angular-popup/popup.module';

import { TotoModule } from '../common/toto/toto.module';
import { TotoComponent } from '../common/toto/toto.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopupModule,
    TotoModule
  ],
  providers: [],
  entryComponents: [TotoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
