import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-range-device',
  templateUrl: './range-device.component.html',
  styleUrls: ['./range-device.component.scss']
})
export class RangeDeviceComponent implements OnInit {

  @Input() device: any;
  current: number = 0;

  constructor(
    private serverService: ServerService
  ) { }

  ngOnInit(): void {
    this.current = this.device.value;
  }

  triggerRange(event: any) {
    this.current = this.device.value;
    this.serverService.triggerDevice(this.device.id, event.target.value, false).then((success) => {
      if (success) {
        this.device.value = event.target.value;
      } else {
        this.device.value = this.current;
      }
    }).catch((reason) => {
    });
  }

  test(event: any) {
    // console.log(event);
    this.device.value = event.target.value;
  }
}
