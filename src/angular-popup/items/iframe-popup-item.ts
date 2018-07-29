import { PopupItem } from "./popup-item";
import { IframeComponent } from "../iframe/iframe.component";

export class IframePopupItem extends PopupItem {
    type = 'iframe-popup';

    constructor(public url: string, options = {}) {
        super(IframeComponent, options);
    }
}