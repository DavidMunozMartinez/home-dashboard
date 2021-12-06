import { Component, OnInit } from '@angular/core';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'home-dashboard';
  devices: any = [];
  constructor(
    private serverService: ServerService
  ) {
  }

  ngOnInit() {
    this.serverService.getDevices().then((devices: any) => {
      this.devices = devices;
    })
  }

  trigger(device: any) {
    
    // if (device.type === 'boolean') {
    //   device.value = !device.value;
    //   this.serverService.triggerDevice(device.id, device.value);
    // }
  }
}
