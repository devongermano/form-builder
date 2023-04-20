// src/app/form-elements/form-element.service.ts
import { Injectable, Type } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { HeaderComponent } from './header/header/header.component';
import { SubmitButtonComponent } from "./submit-button/submit-button.component";
import { RadioGroupComponent } from "./radio-group/radio-group.component";
import {HeaderConfigComponent} from "./header/header-config/header-config.component";
import {RadioGroupConfigComponent} from "./radio-group-config/radio-group-config.component";

@Injectable({
  providedIn: 'root'
})
export class FormElementService {
  getFormElementType(formElementType: string): Type<any> {
    const componentMapping: { [key: string]: Type<any> } = {
      'input': InputComponent,
      'paragraph': ParagraphComponent,
      'header': HeaderComponent,
      'submitButton': SubmitButtonComponent,
      'radioGroup': RadioGroupComponent,
    };

    return componentMapping[formElementType];
  }

  getFormElementConfigType(formElementType: string): Type<any> {
    const componentMapping: { [key: string]: Type<any> } = {
      // 'input': InputComponent,
      // 'paragraph': ParagraphComponent,
      'header': HeaderConfigComponent,
      // 'submitButton': SubmitButtonComponent,
      'radioGroup': RadioGroupConfigComponent,
    };

    return componentMapping[formElementType];
  }

}
