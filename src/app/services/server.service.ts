import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private server = environment.production ? 'http://192.168.1.99:8080/' : 'http://localhost:8080/';
 
  constructor(
    private http: HttpClient
  ) { }

  getDevices() {
    return new Promise((resolve, reject) => {
      this.http.get(this.server + 'get-devices').toPromise().then(devices => {
        resolve(devices);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  triggerDevice(id: any, value: any, manual: boolean) {
    return new Promise((resolve, reject) => {
      this.http.post(this.server + 'manual-control', {
        device: id,
        value: value,
        manual: manual
      }).toPromise().then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  triggerRange(id: any, value: any) {
    return this.triggerDevice(id, value, false);
  }

  getDailyEvents() {
    return new Promise((resolve, reject) => {
      this.http.get(this.server + 'get-daily-events').toPromise().then((events) => {
        resolve(events);
      }).catch((reason) => {
        reject(reason);
      });
    });
  }

  getRoomStates() {
    return new Promise((resolve, reject) => {
      this.http.get(this.server + 'get-room-states').toPromise().then(states => {
        resolve(states);
      }).catch(reason => {
        reject(reason);
      });
    });
  }
}
