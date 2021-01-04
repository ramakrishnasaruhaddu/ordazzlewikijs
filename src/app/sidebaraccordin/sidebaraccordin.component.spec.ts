import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaraccordinComponent } from './sidebaraccordin.component';

describe('SidebaraccordinComponent', () => {
  let component: SidebaraccordinComponent;
  let fixture: ComponentFixture<SidebaraccordinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebaraccordinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaraccordinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
