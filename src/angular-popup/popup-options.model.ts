export interface PopupOptions {
  id?: string;
  dismissable?: boolean;
  showClose?: boolean;
  confirm?: Function;
  cancel?: Function;
  confirmText?: string;
  cancelText?: string;
}