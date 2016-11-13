import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: string = moment().format('YYYY-MM-DD HH:mm:ss');

  constructor() {
    setInterval(() => {
      this.today =  moment().format('YYYY-MM-DD HH:mm:ss');
    }, 1000);
  }
}
