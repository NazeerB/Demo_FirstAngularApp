import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapstylesComponent } from './bootstrapstyles.component';

describe('BootstrapstylesComponent', () => {
  let component: BootstrapstylesComponent;
  let fixture: ComponentFixture<BootstrapstylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapstylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
