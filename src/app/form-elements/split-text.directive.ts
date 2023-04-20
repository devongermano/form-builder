// split-text.directive.ts
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[SplitText]'
})
export class SplitTextDirective implements OnChanges {
  @Input() items: string[] = [];
  @Output() itemsChange: EventEmitter<string[]> = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('input') onInputChange() {
    const value: string = this.el.nativeElement.value;
    const items: string[] = value.split(/,\s*|\n/).map(item => item.trim()).filter(item => item.length > 0);
    this.itemsChange.emit(items);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.updateTextAreaValue();
    }
  }

  private updateTextAreaValue(): void {
    const value = this.items.join(',\n');
    this.el.nativeElement.value = value;
  }
}
