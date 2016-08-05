import { provideRouter, Route } from '@angular/router';

import { Home } from './demos/home';
import { AccordionDemo } from './demos/accordion';
import { AlertDemo } from './demos/alert';
import { ButtonsDemo } from './demos/buttons';
import { CarouselDemo } from './demos/carousel';
import { CollapseDemo } from './demos/collapse';
import { DropdownDemo } from './demos/dropdown';
import { PagerDemo } from './demos/pager';
import { PaginationDemo } from './demos/pagination';
import { PopoverDemo } from './demos/popover';

export interface TextRoute extends Route {
    text: string;
}

export const routes: TextRoute[] = [
    { path: '', component: Home, text: 'Home' },
    { path: 'accordion', component: AccordionDemo, text: 'Accordion' },
    { path: 'alert', component: AlertDemo, text: 'Alert' },
    { path: 'buttons', component: ButtonsDemo, text: 'Buttons' },
    { path: 'carousel', component: CarouselDemo, text: 'Carousel' },
    { path: 'collapse', component: CollapseDemo, text: 'Collapse' },
    { path: 'dropdown', component: DropdownDemo, text: 'Dropdown' },
    { path: 'pager', component: PagerDemo, text: 'Pager' },
    { path: 'pagination', component: PaginationDemo, text: 'Pagination' },
    { path: 'popover', component: PopoverDemo, text: 'Popover' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]