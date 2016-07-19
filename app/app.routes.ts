import { provideRouter, Route } from '@angular/router';

import { Home } from './demos/home';
import { AccordionDemo } from './demos/accordion';

export interface TextRoute extends Route {
    text: string;
}

export const routes: TextRoute[] = [
    { path: '', component: Home, text: 'Home' },
    { path: 'accordion', component: AccordionDemo, text: 'Accordion' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]