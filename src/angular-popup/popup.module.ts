import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';
import { PopupDirective } from './popup.directive';
import { IframeComponent } from './iframe/iframe.component';
import { UrlSafePipe } from './iframe/url-safe.pipe';
import { ConfirmComponent } from './confirm/confirm.component';
import { HtmlSafePipe } from './confirm/html-safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PopupService],
  declarations: [
    PopupComponent,
    PopupDirective,
    IframeComponent,
    ConfirmComponent,
    UrlSafePipe,
    HtmlSafePipe
  ],
  entryComponents: [IframeComponent, ConfirmComponent],
  exports: [PopupComponent]
})
export class PopupModule {}
