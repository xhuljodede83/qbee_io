import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDevice } from '../interfaces/device';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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
    return this.http.post<IDevice>(this._url, deviceData, httpOptions);
  }

  public editDevice(deviceData: IDevice){
    return this.http.put<IDevice>(`${this._url}/${deviceData.id}`, deviceData, httpOptions);
  }

  public getDevice(id: string){
    return this.http.get<IDevice>(`${this._url}/${id}`);
  }
}
