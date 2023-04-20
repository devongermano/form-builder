import { FormElementConfig } from "./form-element.config.interface";
import { DropEffect } from "ngx-drag-drop";


export interface FormElementDraggable {
  effectAllowed: DropEffect,
  disable: boolean,
}

export interface FormElement {
  id: string;
  type: string;
  config: FormElementConfig;
  draggable: FormElementDraggable;
}
