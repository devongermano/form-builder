import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementSidebarComponent } from './form-element-sidebar.component';

describe('FormElementSidebarComponent', () => {
  let component: FormElementSidebarComponent;
  let fixture: ComponentFixture<FormElementSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElementSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
