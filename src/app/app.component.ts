import { Component, OnInit } from '@angular/core';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public devices: any = [];
  public events: any = {};
  public eventKeys: string[] = [];

  constructor(
    private serverService: ServerService
  ) {
  }

  ngOnInit() {
    this.serverService.getDevices().then((devices: any) => {
      this.devices = devices;
    });
    this.serverService.getDailyEvents().then((events: any) => {
      this.eventKeys = Object.keys(events);
      this.events = events;
      console.log(this.events);
    }); 
  }
}
