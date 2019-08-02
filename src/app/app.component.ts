import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { observable, Observable, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private data: DataServiceService){
    this.timer();

  }

  ngOnInit() {
    this.data.obs0.subscribe(v => {
      this.data._userName = v;
    });

    this.data.obs1 = fromEvent(document , 'click');

    this.data.obs1.subscribe(o => {
      this.data._event = o;
    });

  }


  timer() {
    const int = interval(1000);
    int.subscribe(i => this.data._timer = i);

  }


}
