import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-boolean-device',
  templateUrl: './boolean-device.component.html',
  styleUrls: ['./boolean-device.component.scss']
})
export class BooleanDeviceComponent implements OnInit {

  @Input() device: any;

  public stateStyle = {};
  private states = {
    off: {
      left: '0',
      background: 'rgb(225, 225, 225)'
    },
    auto: {
      left: 'calc(50% - 17.5px)',
      background: 'rgb(245, 245, 245)'
    },
    on: {
      left: 'calc(100% - 35px)',
      background: 'rgb(136 225 117 / 69%)'
    },
  };

  constructor(
    private serverService: ServerService
  ) { }

  ngOnInit(): void {
    if (this.device.manual) {
      this.stateStyle = this.device.value ? this.states.on : this.states.off;
    } else {
      this.stateStyle = this.states.auto;
    }
  }

  trigger(value: boolean, manual: boolean) {
    this.serverService.triggerDevice(this.device.id, value, manual);
    if (manual) {
      this.stateStyle = value ? this.states.on : this.states.off;
    } else {
      this.stateStyle = this.states.auto;
    }
  }
}
