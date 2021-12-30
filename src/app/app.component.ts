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
  public states: any = [];

  private roomKeyTranslate: any = {
    'main-room': 'Main room',
    'kitchen': 'Kitchen',
    'dinning-room': 'Dinning room',
    'living-room': 'Living room'
  };

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

    this.serverService.getRoomStates().then((states: any) => {
      let viewStates: any = [];
      states.forEach((state: any) => {
        let sensorData = Object.keys(state.data);
        let stateData: any = [];
        if (sensorData.length > 0) {
          sensorData.forEach((sensorKey) => {
            let data = state.data[sensorKey];
            let valueArr = data.value.split(':');
            let value = '';
            if (valueArr.length > 1) {
              valueArr.map((val: any) =>  parseFloat(val));
              value = `${valueArr[0]}°, ${valueArr[1]}%`;
            } else {
              value = data.value;
            }
            stateData.push({
              description: data.description,
              value: value 
            });
          });
  
          viewStates.push({
            name: this.roomKeyTranslate[state.room],
            data: stateData
          });
        }

      });
      this.states = viewStates;
    });
  }
}
