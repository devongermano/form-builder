import { Component, Input } from '@angular/core';
import { HeaderConfig } from "../header/header.component";

@Component({
  selector: 'app-header-config',
  templateUrl: './header-config.component.html',
  styleUrls: ['./header-config.component.scss']
})
export class HeaderConfigComponent {
  @Input() config!: HeaderConfig;

}
