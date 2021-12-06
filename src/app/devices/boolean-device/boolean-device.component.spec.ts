import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanDeviceComponent } from './boolean-device.component';

describe('BooleanDeviceComponent', () => {
  let component: BooleanDeviceComponent;
  let fixture: ComponentFixture<BooleanDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
