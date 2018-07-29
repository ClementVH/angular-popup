import { Type } from "@angular/core";

export class PopupItem {
    type: string;
    constructor(public component: Type<any>, public options = {}) {}
}