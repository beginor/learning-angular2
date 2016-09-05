import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { AppRoutes } from './app.routes';

import { Home } from './demos/home';
import { AccordionDemo } from './demos/accordion';
import { AlertDemo } from './demos/alert';
import { ButtonsDemo } from './demos/buttons';
import { CarouselDemo } from './demos/carousel';
import { CollapseDemo } from './demos/collapse';
import { DropdownDemo } from './demos/dropdown';
import { PaginationDemo } from './demos/pagination';
import { PopoverDemo } from './demos/popover';
import { ProgressbarDemo } from './demos/progressbar';
import { RatingDemo } from './demos/rating';
import { TabsDemo } from './demos/tabs';
import { TimepickerDemo } from './demos/timepicker';

@NgModule({
    declarations: [
        AppComponent,
        Home,
        AccordionDemo,
        AlertDemo,
        ButtonsDemo,
        CarouselDemo,
        CollapseDemo,
        DropdownDemo,
        PaginationDemo,
        PopoverDemo,
        ProgressbarDemo,
        RatingDemo,
        TabsDemo,
        TimepickerDemo
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        AppRoutes
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
