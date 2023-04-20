import { Component } from '@angular/core';
import {FormElement} from "../form-element.interface";
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-form-element-sidebar',
  templateUrl: './form-element-sidebar.component.html',
  styleUrls: ['./form-element-sidebar.component.scss']
})
export class FormElementSidebarComponent {

  getSingleLineTextElement(): FormElement {
    return {
      id: uuidv4(),
      type: 'input',
      draggable: {
        effectAllowed: 'copy',
        disable: false,
      },
      config: {
        value: 'Input',
        label: 'Input',
        placeholder: 'Input',
        required: true,
        visible: true,
      },
    };
  }

  formElements: FormElement[] = [
    {
      id: uuidv4(),
      type: 'header',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Header',
      },
    },
    {
      id: uuidv4(),
      type: 'input',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Input',
        label: 'Input',
        placeholder: 'Input',
        required: true,
        visible: true,
      },
    },
    {
      id: uuidv4(),
      type: 'input',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Input',
        label: 'Input',
        placeholder: 'Input',
        required: true,
        visible: true,
      },
    },
    {
      id: uuidv4(),
      type: 'submitButton',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Input',
        label: 'Input',
        placeholder: 'Input',
        required: true,
        visible: true,
      },
    },
    {
      id: uuidv4(),
      type: 'radioGroup',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Input',
        label: 'Input',
        placeholder: 'Input',
        required: true,
        visible: true,
      },
    }
  ];
}
