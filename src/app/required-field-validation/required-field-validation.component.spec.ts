import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredFieldValidationComponent } from './required-field-validation.component';

describe('RequiredFieldValidationComponent', () => {
  let component: RequiredFieldValidationComponent;
  let fixture: ComponentFixture<RequiredFieldValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredFieldValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredFieldValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
