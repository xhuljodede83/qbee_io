import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDevice } from '../interfaces/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private _url = 'http://localhost:5000/devices'; // end point for fake backend service

  constructor(private http: HttpClient) {}

  public getAllDevices(){
    return this.http.get<IDevice[]>(this._url);
  }

  public addDevice(deviceData: IDevice){

  }

  public editDevice(id: string, deviceData: IDevice){

  }

  public getDevice(id: string){

  }
}
