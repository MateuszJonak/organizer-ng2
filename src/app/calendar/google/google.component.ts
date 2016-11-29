import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-calendar-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(
      private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {

    this.authenticationService.proceedAuthentication(true)
        .then(() => this.authenticationService.initializeGoogleCalendarAPI())
        .then(() => this.authenticationService.getEvents());
  }

}
