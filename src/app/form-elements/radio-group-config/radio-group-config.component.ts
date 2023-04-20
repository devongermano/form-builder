import { Component, Input } from '@angular/core';
import { RadioGroupConfig } from "../radio-group/radio-group.component";
@Component({
  selector: 'app-radio-group-config',
  templateUrl: './radio-group-config.component.html',
  styleUrls: ['./radio-group-config.component.scss']
})
export class RadioGroupConfigComponent {
  @Input() config!: RadioGroupConfig;

}
