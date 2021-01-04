import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercancellationComponent } from './ordercancellation.component';

describe('OrdercancellationComponent', () => {
  let component: OrdercancellationComponent;
  let fixture: ComponentFixture<OrdercancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdercancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
