import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'timepicker-demo',
    templateUrl: 'dist/demos/timepicker.html'
})
export class TimepickerDemo implements OnInit {

    disabled: boolean;
    meridian: boolean;
    readonlyInputs: boolean;
    seconds: boolean;
    spinners: boolean;

    hourStep: number;
    minuteStep: number;
    secondStep: number;

    time: Time;

    ctrl: FormControl;

    ngOnInit() {
        this.disabled = false;
        this.meridian = true;
        this.readonlyInputs = false;
        this.seconds = true;
        this.spinners = true;

        this.hourStep = 1;
        this.minuteStep = 5;
        this.secondStep = 30;

        //this.time = { hour: 0, minute: 0, second: 0 };

        this.ctrl = new FormControl('', (control: FormControl) => {
            var val: Time = control.value;
            if (!val) {
                return null;
            }
            if (val.hour < 9) {
                return { tooEarly: true };
            }
            if (val.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }

    toggleMeridian() {
        this.meridian = !this.meridian;
    }

}

interface Time {
    hour: number;
    minute: number;
    second: number;
}