import { provideRouter, Route } from '@angular/router';

import { Home } from './demos/home';
import { AccordionDemo } from './demos/accordion';
import { AlertDemo } from './demos/alert';
import { ButtonsDemo } from './demos/buttons';
import { CarouselDemo } from './demos/carousel';
import { CollapseDemo } from './demos/collapse';

export interface TextRoute extends Route {
    text: string;
}

export const routes: TextRoute[] = [
    { path: '', component: Home, text: 'Home' },
    { path: 'accordion', component: AccordionDemo, text: 'Accordion' },
    { path: 'alert', component: AlertDemo, text: 'Alert' },
    { path: 'buttons', component: ButtonsDemo, text: 'Buttons' },
    { path: 'carousel', component: CarouselDemo, text: 'Carousel' },
    { path: 'collapse', component: CollapseDemo, text: 'Collapse' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]