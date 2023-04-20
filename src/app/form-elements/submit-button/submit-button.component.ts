import { Component, Input } from '@angular/core';
import { FormElementConfig } from "../../form-element.config.interface";

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent {
  @Input() config!: FormElementConfig;
}
