import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementofaccountComponent } from './statementofaccount.component';

describe('StatementofaccountComponent', () => {
  let component: StatementofaccountComponent;
  let fixture: ComponentFixture<StatementofaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementofaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementofaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
