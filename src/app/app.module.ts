import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BooleanDeviceComponent } from './devices/boolean-device/boolean-device.component';
import { RangeDeviceComponent } from './devices/range-device/range-device.component';

@NgModule({
  declarations: [
    AppComponent,
    BooleanDeviceComponent,
    RangeDeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
