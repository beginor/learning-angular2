import { provideRouter, RouterConfig } from '@angular/router';

import { Home } from './demos/home';
import { AccordionDemo } from './demos/accordion';

export const routes: RouterConfig = [
    { path: '', component: Home },
    { path: 'accordion', component: AccordionDemo }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]