// src/app/form-builder/form-builder.component.ts
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { FormElement } from '../form-element.interface';
import { FormElementService } from '../form-elements/form-element.service';
import { DynamicInsertionDirective } from '../dynamic-insertion.directive';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import { v4 as uuidv4 } from 'uuid';
import { Dropdown } from 'flowbite';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit, AfterViewInit {

  selectedItems: any[] = [];

  someMethod(event:any){
  }

  @ViewChild('dropdownDots') dropdownTargetElm!: ElementRef;
  @ViewChild('dropdownMenuIconButton') dropdownTriggerElm!: ElementRef;





  @ViewChildren(DynamicInsertionDirective) insertionPoints!: QueryList<DynamicInsertionDirective>;

  currentDraggableEvent: any | null = null;
  currentDraggableElementHeight: number = 0;
  configSidebarOpen = false;
  selectedElement: FormElement | null = null;


  formElements: FormElement[] = [
    {
      id: uuidv4(),
      type: 'header',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Header',
      },
    },
    {
      id: uuidv4(),
      type: 'input',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Input',
        label: 'Input',
        placeholder: 'Input',
        required: true,
        visible: true,
      },
    },
    {
      id: uuidv4(),
      type: 'input',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Input',
        label: 'Input',
        placeholder: 'Input',
        required: true,
        visible: true,
      },
    },
    {
      id: uuidv4(),
      type: 'submitButton',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Input',
        label: 'Input',
        placeholder: 'Input',
        required: true,
        visible: true,
      },
    },
    {
      id: uuidv4(),
      type: 'radioGroup',
      draggable: {
        effectAllowed: 'move',
        disable: false,
      },
      config: {
        value: 'Input',
        label: 'Input',
        placeholder: 'Input',
        required: true,
        visible: true,
      },
    }
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private formElementService: FormElementService) { }

  @ViewChild('.draggable') draggable!: ElementRef;
  @ViewChild('.draggableContainer') draggableContainer!: ElementRef;

  ngOnInit(): void {

  }

  selectElement(formElement: FormElement): void {
    this.selectedElement = formElement;
  }

  editElement(formElement: FormElement): void {
    this.selectedElement = formElement;
    this.configSidebarOpen = true;
  }

  deleteElement(formElement: FormElement): void {
    this.formElements = this.formElements.filter((element) => element !== formElement);
    this.selectedElement = null;
  }
  onDragStart(formElement: FormElement, event: any) {
    console.log('started');
    this.selectedElement = formElement;
    this.currentDraggableElementHeight = event.target.offsetHeight;
    this.currentDraggableEvent = event;
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      list.splice(index, 0, event.data);
      console.log('inserted', event.data, index, list);
    }
  }

  onDragEnd(event: any) {
    this.currentDraggableEvent = event;
  }

  ngAfterViewInit(): void {
    this.insertComponents();
    this.insertionPoints.changes.subscribe(() => {
      this.insertComponents();
    });

    const dropdown = new Dropdown(
      this.dropdownTargetElm.nativeElement,
      this.dropdownTriggerElm.nativeElement, {
        placement: 'left-end',
      });

  }

  private insertComponents(): void {
    this.insertionPoints.forEach((insertionPoint, index) => {
      const formElementType = this.formElements[index].type;
      const componentType = this.formElementService.getFormElementType(formElementType);

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      const componentRef = insertionPoint.viewContainerRef.createComponent(componentFactory);

      // You can pass additional data to the component instance if necessary
      // componentRef.instance.data = this.formElements[index];
    });
  }


  isVisible(formElement: FormElement): boolean {
    if (!formElement.config.visible || !formElement.config.visibilityCondition) {
      return true;
    }

    const targetElement = this.formElements.find(
      (element) => element.id === formElement.config.visibilityCondition?.targetElementId
    );

    return (
      targetElement &&
      targetElement.config &&
      targetElement.config.value === formElement.config.visibilityCondition?.targetValue
    ) || false;
  }

  getPlaceholderHeight() {
    const height = this.currentDraggableElementHeight;
    return height;
  }
}
