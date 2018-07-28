import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';
import { PopupDirective } from './popup.directive';
import { IframeComponent } from './iframe/iframe.component';
import { SafePipe } from './iframe/safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PopupService],
  declarations: [PopupComponent, PopupDirective, IframeComponent, SafePipe],
  entryComponents: [IframeComponent],
  exports: [PopupComponent]
})
export class PopupModule {}
