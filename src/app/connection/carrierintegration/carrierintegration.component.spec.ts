import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierintegrationComponent } from './carrierintegration.component';

describe('CarrierintegrationComponent', () => {
  let component: CarrierintegrationComponent;
  let fixture: ComponentFixture<CarrierintegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierintegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
