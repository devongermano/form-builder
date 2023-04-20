import { Component, Input } from '@angular/core';

export interface RadioGroupConfig {
  options: string[];
}
@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent {
  @Input() config!: RadioGroupConfig;

}
