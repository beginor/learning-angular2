import { provideRouter, RouterConfig } from '@angular/router';

import { Home } from './demos/home/home';
import { ButtonsDemo } from './demos/buttons/buttons';

export const routes: RouterConfig = [
    { path: '', component: Home },
    { path: 'buttons', component: ButtonsDemo }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]