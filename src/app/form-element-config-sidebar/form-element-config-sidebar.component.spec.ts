import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementConfigSidebarComponent } from './form-element-config-sidebar.component';

describe('FormElementConfigSidebarComponent', () => {
  let component: FormElementConfigSidebarComponent;
  let fixture: ComponentFixture<FormElementConfigSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElementConfigSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementConfigSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
