import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-boolean-device',
  templateUrl: './boolean-device.component.html',
  styleUrls: ['./boolean-device.component.scss']
})
export class BooleanDeviceComponent implements OnInit {

  @Input() device: any;

  constructor(
    private serverService: ServerService
  ) { }

  ngOnInit(): void {
  }

  trigger(value: boolean, manual: boolean) {
    this.serverService.triggerDevice(this.device.id, value, manual);
  }

}
