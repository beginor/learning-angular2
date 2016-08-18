import { NgModule, provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { AppRoutes } from './app.routes';

import { Home } from './demos/home';
import { AccordionDemo } from './demos/accordion';
import { AlertDemo } from './demos/alert';

@NgModule({
    declarations: [AppComponent, Home, AccordionDemo, AlertDemo],
    imports:      [BrowserModule, NgbModule, FormsModule, AppRoutes],
    bootstrap:    [AppComponent]
})
export class AppModule {}