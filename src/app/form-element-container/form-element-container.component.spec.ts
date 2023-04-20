import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementContainerComponent } from './form-element-container.component';

describe('FormElementContainerComponent', () => {
  let component: FormElementContainerComponent;
  let fixture: ComponentFixture<FormElementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElementContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
