import { Routes, RouterModule } from '@angular/router';

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
import { PerformanceDemo } from './demos/performance/performance';

const routes: Routes = [
    { path: '', component: Home },
    { path: 'accordion', component: AccordionDemo },
    { path: 'alert', component: AlertDemo },
    { path: 'buttons', component: ButtonsDemo },
    { path: 'carousel', component: CarouselDemo },
    { path: 'collapse', component: CollapseDemo },
    { path: 'dropdown', component: DropdownDemo },
    { path: 'modal', component: ModalDemo },
    { path: 'pagination', component: PaginationDemo },
    { path: 'popover', component: PopoverDemo },
    { path: 'progressbar', component: ProgressbarDemo },
    { path: 'rating', component: RatingDemo },
    { path: 'tabs', component: TabsDemo },
    { path: 'timepicker', component: TimepickerDemo },
    { path: 'tooltip', component: TooltipDemo },
    { path: 'typeahead', component: TypeaheadDemo },
    { path: 'performance', component: PerformanceDemo }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true, enableTracing: false });
