import { Component, Input } from '@angular/core';
import { FormElementConfig } from "../../../form-element.config.interface";

export interface HeaderConfig {
  value: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() config!: HeaderConfig;
  get configWithDefault() {
    return this.config ?? HeaderComponent.defaultConfig();
  }

  public static defaultConfig(): HeaderConfig {
    return {
      value: 'Header'
    }
  }
}


