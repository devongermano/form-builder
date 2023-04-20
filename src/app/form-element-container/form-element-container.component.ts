// src/app/form-element-container/form-element-container.component.ts
import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy, ViewContainerRef,
} from '@angular/core';
import { FormElement } from '../form-element.interface';
import { DynamicInsertionDirective } from '../dynamic-insertion.directive';
import { InputComponent } from '../form-elements/input/input.component';
import { ParagraphComponent } from '../form-elements/paragraph/paragraph.component';
import { HeaderComponent } from '../form-elements/header/header/header.component';
import {SubmitButtonComponent} from "../form-elements/submit-button/submit-button.component";
import {FormElementService} from "../form-elements/form-element.service";

@Component({
  selector: 'app-form-element-container',
  templateUrl: './form-element-container.component.html',
  styleUrls: ['./form-element-container.component.scss'],
})
export class FormElementContainerComponent implements OnInit, OnDestroy {
  @Input() formElement!: FormElement;

  @ViewChild(DynamicInsertionDirective, { static: true })
  insertionPoint!: DynamicInsertionDirective;

  constructor(private viewContainerRef: ViewContainerRef,
              private formElementService: FormElementService) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  ngOnDestroy(): void {
    this.insertionPoint.viewContainerRef.clear();
  }

  loadComponent(): void {
    const componentType = this.formElementService.getFormElementType(this.formElement.type);

    if (!componentType) {
      return;
    }

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentType);
    (<any>componentRef.instance).config = this.formElement.config;
  }
}
