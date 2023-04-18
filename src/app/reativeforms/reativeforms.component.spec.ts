import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeformsComponent } from './reativeforms.component';

describe('ReativeformsComponent', () => {
  let component: ReativeformsComponent;
  let fixture: ComponentFixture<ReativeformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativeformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReativeformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
