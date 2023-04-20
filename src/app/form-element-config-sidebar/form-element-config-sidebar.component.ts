// src/app/form-element-config-sidebar/form-element-config-sidebar.component.ts
import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormElement } from '../form-element.interface';
import {DynamicInsertionDirective} from "../dynamic-insertion.directive";
import {FormElementService} from "../form-elements/form-element.service";

@Component({
  selector: 'app-form-element-config-sidebar',
  templateUrl: './form-element-config-sidebar.component.html',
  styleUrls: ['./form-element-config-sidebar.component.scss'],
})
export class FormElementConfigSidebarComponent implements OnInit, OnDestroy {

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

  ngOnChanges(): void {
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.loadComponent();
  }

  loadComponent(): void {
    const componentType = this.formElementService.getFormElementConfigType(this.formElement.type);

    if (!componentType) {
      return;
    }

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentType);
    (<any>componentRef.instance).config = this.formElement.config;
  }

  // @Input() isOpen = false;
  //
  //
  // @Input() formElement!: FormElement;
  // @Input() formElements!: FormElement[];
  //
  // get targetElementId(): string | null {
  //   return this.formElement.config.visibilityCondition?.targetElementId || null;
  // }
  //
  // set targetElementId(value: string | null) {
  //   if (!this.formElement.config.visibilityCondition) {
  //     this.formElement.config.visibilityCondition = { targetElementId: "", targetValue: null };
  //   }
  //   this.formElement.config.visibilityCondition.targetElementId = value || "";
  // }
  //
  // get targetValue(): any {
  //   return this.formElement.config.visibilityCondition?.targetValue;
  // }
  //
  // set targetValue(value: any) {
  //   if (!this.formElement.config.visibilityCondition) {
  //     this.formElement.config.visibilityCondition = { targetElementId: "", targetValue: null };
  //   }
  //   this.formElement.config.visibilityCondition.targetValue = value;
  // }
}
