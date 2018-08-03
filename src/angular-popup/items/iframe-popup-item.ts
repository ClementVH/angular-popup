import { PopupItem } from "./popup-item";
import { IframeComponent } from "../iframe/iframe.component";

export class IframePopupItem extends PopupItem {
    url: string;
    component = IframeComponent
}