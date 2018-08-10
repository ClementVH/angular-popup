import { PopupItem } from "./popup-item";
import { ConfirmComponent } from "../confirm/confirm.component";

export class ConfirmPopupItem extends PopupItem {
    title: string;
    text: string;
    component = ConfirmComponent
}