import { Component, OnInit, Input } from '@angular/core';
import { FormElementConfig } from "../../form-element.config.interface";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() config!: FormElementConfig;

  constructor() {}

  ngOnInit(): void {
  }
}
