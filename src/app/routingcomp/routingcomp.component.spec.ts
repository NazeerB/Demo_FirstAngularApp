import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingcompComponent } from './routingcomp.component';

describe('RoutingcompComponent', () => {
  let component: RoutingcompComponent;
  let fixture: ComponentFixture<RoutingcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
