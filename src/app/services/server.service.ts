import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private server = 'http://localhost:8080/'

  constructor(
    private http: HttpClient
  ) { }

  getDevices() {
    return new Promise((resolve, reject) => {
      this.http.get(this.server + 'get-devices').toPromise().then(devices => {
        resolve(devices);
      });
    });
  }

  triggerDevice(id: any, value: any, manual: boolean) {
    return new Promise((resolve, reject) => {
      this.http.post(this.server + 'manual-control', {
        device: id,
        value: value,
        manual: manual
      }).toPromise().then((value) => {
        resolve(true);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  triggerRange(id: any, value: any) {
    return new Promise((resolve, reject) => {
      this.http.get(this.server + `manual-trigger?device=${id}&value=${value}`).toPromise().then(() =>{
        resolve(true);
      }).catch(reason => {
        reject(reason);
      });
    });
  }
}
