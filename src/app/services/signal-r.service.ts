import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { ChartModel } from './chart-model';
import { Observable, of } from 'rxjs';
import {} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: ChartModel[];
  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44351/chart')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('conneciton started'))
      .catch(err => console.log('Error while starting connection:' + err));
  };

  public addTransferChartDataListner = () => {
    this.hubConnection.on('transferchartdata', data => {
      this.data = data;
      console.log(this.data);
    });
  };

  getChartData = () => {
    return this.data;
  };

  constructor() {}
}
