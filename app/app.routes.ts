import { Route, RouterModule } from '@angular/router';

import { Home } from './demos/home';
import { AccordionDemo } from './demos/ngb/accordion';
import { AlertDemo } from './demos/ngb/alert';
import { ButtonsDemo } from './demos/ngb/buttons';
import { CarouselDemo } from './demos/ngb/carousel';
import { CollapseDemo } from './demos/ngb/collapse';
import { DropdownDemo } from './demos/ngb/dropdown';
import { ModalDemo } from './demos/ngb/modal';
import { PaginationDemo } from './demos/ngb/pagination';
import { PopoverDemo } from './demos/ngb/popover';
import { ProgressbarDemo } from "./demos/ngb/progressbar";
import { RatingDemo } from './demos/ngb/rating';
import { TabsDemo } from './demos/ngb/tabs';
import { TimepickerDemo } from './demos/ngb/timepicker';
import { TooltipDemo } from './demos/ngb/tooltip';
import { TypeaheadDemo } from './demos/ngb/typeahead';

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
    { path: 'modal', component: ModalDemo, text: 'Modal' },
    { path: 'pagination', component: PaginationDemo, text: 'Pagination' },
    { path: 'popover', component: PopoverDemo, text: 'Popover' },
    { path: 'progressbar', component: ProgressbarDemo, text: 'Progressbar' },
    { path: 'rating', component: RatingDemo, text: 'Rating' },
    { path: 'tabs', component: TabsDemo, text: 'Tabs' },
    { path: 'timepicker', component: TimepickerDemo, text: 'Timepicker' },
    { path: 'tooltip', component: TooltipDemo, text: 'Tooltip' },
    { path: 'typeahead', component: TypeaheadDemo, text: 'Typeahead' }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
