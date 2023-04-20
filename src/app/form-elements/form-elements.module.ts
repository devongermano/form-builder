import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { HeaderComponent } from './header/header/header.component';
import { FormElementService } from "./form-element.service";
import {FormsModule} from "@angular/forms";
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { HeaderConfigComponent } from './header/header-config/header-config.component';
import { RadioGroupConfigComponent } from './radio-group-config/radio-group-config.component';
import {SplitTextDirective} from "./split-text.directive";



@NgModule({
  declarations: [
    InputComponent,
    ParagraphComponent,
    HeaderComponent,
    SubmitButtonComponent,
    RadioGroupComponent,
    HeaderConfigComponent,
    RadioGroupConfigComponent,
    SplitTextDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputComponent
  ],
  providers: [FormElementService]
})
export class FormElementsModule { }
