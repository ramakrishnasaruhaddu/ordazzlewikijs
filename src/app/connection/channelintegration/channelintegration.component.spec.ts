import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelintegrationComponent } from './channelintegration.component';

describe('ChannelintegrationComponent', () => {
  let component: ChannelintegrationComponent;
  let fixture: ComponentFixture<ChannelintegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelintegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
