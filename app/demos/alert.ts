import { Component, OnInit } from '@angular/core';

import { NGB_ALERT_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'alert-demo',
    templateUrl: 'dist/demos/alert.html',
    directives: [ NGB_ALERT_DIRECTIVES ],
    styles: [`
        :host .alert-custom {
            color: #99004d;
            background-color: #f169b4;
            border-color: #800040;
        }
    `]
})
export class AlertDemo implements OnInit {
    
    alerts: IAlert[];
    backup: IAlert[];

    autoCloseAlerts: string[];

    ngOnInit() {
        this.alerts = [
            {
                id: 1,
                type: 'success',
                message: 'This is an success alert'
            },
            {
                id: 2,
                type: 'info',
                message: 'This is an info alert'
            },
            {
                id: 3,
                type: 'warning',
                message: 'This is a warning alert'
            },
            {
                id: 4,
                type: 'danger',
                message: 'This is a danger alert'
            }
        ];
        this.backup = this.alerts.map(alert => Object.assign({}, alert));

        this.autoCloseAlerts = [];
    }

    closeAlert(id: number) {
        const index: number = this.alerts.findIndex(alert => alert.id == id);
        this.alerts.splice(index, 1);
    }

    reset() {
        this.alerts = this.backup.map(alert => Object.assign({}, alert));
    }

    addAlert() {
        this.autoCloseAlerts.push('This alert will close automatically after 5 seconds');
    }
}

interface IAlert {
    id: number;
    type: string;
    message: string;
}