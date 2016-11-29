import { NgModule } from '@angular/core';
import { GoogleComponent } from './google/google.component';

import { AuthenticationService } from './shared/authentication.service';

@NgModule({
  exports: [
    GoogleComponent
  ],
  declarations: [
    GoogleComponent
  ],
  providers: [
      AuthenticationService
  ],
})
export class CalendarModule { }