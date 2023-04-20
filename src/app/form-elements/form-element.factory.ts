import {ComponentRef, Directive, Injectable, Injector, Type, ViewContainerRef} from "@angular/core";

export interface FormElement {
  config: any;
}

@Directive({
  selector: '[formelement]'
})
export class FormElementDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}


@Injectable()
export class FormElementFactoryService {
  constructor(private injector: Injector) {}

  createComponent<T extends FormElement>(component: Type<T>, host: FormElementDirective, config: FormElement): ComponentRef<T> {
    const componentRef = host.viewContainerRef.createComponent(component);
    (<any>componentRef.instance).config = config;
    return componentRef;
  }
}
