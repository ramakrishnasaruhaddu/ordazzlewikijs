import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderrulesComponent } from './oderrules.component';

describe('OderrulesComponent', () => {
  let component: OderrulesComponent;
  let fixture: ComponentFixture<OderrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
