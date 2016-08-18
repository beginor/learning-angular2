/// <reference path="../typings/index.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Add these symbols to override the `LocationStrategy`
import { provide }              from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppModule  } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => {
    console.error(err);
});
