import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTestCompComponent } from './inline-test-comp.component';

describe('InlineTestCompComponent', () => {
  let component: InlineTestCompComponent;
  let fixture: ComponentFixture<InlineTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineTestCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
