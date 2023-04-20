import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupConfigComponent } from './radio-group-config.component';

describe('RadioGroupConfigComponent', () => {
  let component: RadioGroupConfigComponent;
  let fixture: ComponentFixture<RadioGroupConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioGroupConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioGroupConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
