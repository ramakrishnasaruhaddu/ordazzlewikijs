import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderallocationruleComponent } from './orderallocationrule.component';

describe('OrderallocationruleComponent', () => {
  let component: OrderallocationruleComponent;
  let fixture: ComponentFixture<OrderallocationruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderallocationruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderallocationruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
