import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  _userName: string ='';
  _event: any = '';
  _timer: any=0;


  obs0 = Observable.create(obs => {
    obs.next('Ronit');
  });

  obs1: Observable<any>;

  constructor() { }

}
