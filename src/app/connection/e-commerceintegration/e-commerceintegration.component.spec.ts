import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceintegrationComponent } from './e-commerceintegration.component';

describe('ECommerceintegrationComponent', () => {
  let component: ECommerceintegrationComponent;
  let fixture: ComponentFixture<ECommerceintegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECommerceintegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
