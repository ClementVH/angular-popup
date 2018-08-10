import { Type } from "@angular/core";
import { PopupOptions } from "../popup-options.model";

export interface IPopupItem {
    type: string;
    component?: Type<any>;
    options: PopupOptions;
    url?: string;
    title?: string;
    text?: string;
}

export abstract class PopupItem implements IPopupItem {
    type: string;
    component?: Type<any>;
    options: PopupOptions;
    url?: string;
    title?: string;
    text?: string;

    constructor(popupItem: IPopupItem) {
        Object.assign(this, popupItem);
    }
}