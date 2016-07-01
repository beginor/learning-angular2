/// <reference path="../typings/index.d.ts" />

import { bootstrap } from '@angular/platform-browser-dynamic';
// Add these symbols to override the `LocationStrategy`
import { provide }              from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
])
.catch(err => {
    console.error(err);
});
