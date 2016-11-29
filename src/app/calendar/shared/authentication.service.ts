import { Injectable } from '@angular/core';

declare var gapi: any;

@Injectable()
export class AuthenticationService {
    static clientId = '1066919678635-o3cqhsh3m3j4eshol3h8u90rmqgt92o1.apps.googleusercontent.com';
    static scopes = ['https://www.googleapis.com/auth/calendar.readonly'];

    public isAuthenticated: boolean = false;

    public proceedAuthentication(immediate:boolean){
        return new Promise((resolve, reject) => {
            console.log('proceed authentication - immediate: ' + immediate);
            var authorisationRequestData = {
                'client_id': AuthenticationService.clientId,
                'scope': AuthenticationService.scopes,
                'immediate': immediate
            };
            gapi.auth.authorize(authorisationRequestData,
                (authenticationResult) => {
                    if (authenticationResult && !authenticationResult.error) {
                        this.isAuthenticated = true;
                        resolve();
                    } else {
                        this.isAuthenticated = false;
                        reject();
                    }
                }
            );
        });
    }

    public initializeGoogleCalendarAPI(){
        return new Promise((resolve) => {
            console.log('initialize Google Calendar API');
            resolve(gapi.client.load('calendar', 'v3'));
        });
    }

    public getEvents() {
        var request = gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        });

        request.execute(function(resp) {
            var events = resp.items;
            console.log('events:', events);
        });
    }
}