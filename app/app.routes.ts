import { Route, RouterModule } from '@angular/router';

import { Home } from './demos/home';
import { AccordionDemo } from './demos/accordion';
import { AlertDemo } from './demos/alert';
import { ButtonsDemo } from './demos/buttons';
import { CarouselDemo } from './demos/carousel';
import { CollapseDemo } from './demos/collapse';
import { DropdownDemo } from './demos/dropdown';
import { PaginationDemo } from './demos/pagination';
import { PopoverDemo } from './demos/popover';
import { ProgressbarDemo } from "./demos/progressbar";
import { RatingDemo } from './demos/rating';
import { TabsDemo } from './demos/tabs';
import { TimepickerDemo } from './demos/timepicker';

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
    { path: 'pagination', component: PaginationDemo, text: 'Pagination' },
    { path: 'popover', component: PopoverDemo, text: 'Popover' },
    { path: 'progressbar', component: ProgressbarDemo, text: 'Progressbar' },
    { path: 'rating', component: RatingDemo, text: 'Rating' },
    { path: 'tabs', component: TabsDemo, text: 'Tabs' },
    { path: 'timepicker', component: TimepickerDemo, text: 'Timepicker' }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
