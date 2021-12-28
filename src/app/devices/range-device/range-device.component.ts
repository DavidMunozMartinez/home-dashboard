import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-range-device',
  templateUrl: './range-device.component.html',
  styleUrls: ['./range-device.component.scss']
})
export class RangeDeviceComponent implements OnInit {

  @Input() device: any;

  constructor(
    private serverService: ServerService
  ) { }

  ngOnInit(): void {
  }

  triggerRange(event: any) {
    this.serverService.triggerDevice(this.device.id, event.target.value, false).then(() => {
      this.device.value = event.target.value;
    });
  }
}
