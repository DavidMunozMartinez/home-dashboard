import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeDeviceComponent } from './range-device.component';

describe('RangeDeviceComponent', () => {
  let component: RangeDeviceComponent;
  let fixture: ComponentFixture<RangeDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
