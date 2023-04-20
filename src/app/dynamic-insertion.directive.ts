import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicInsertion]'
})
export class DynamicInsertionDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
