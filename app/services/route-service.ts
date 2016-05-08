import { Route } from '@angular/router';

import {FormsDemo} from "../demos/forms-demo";
import {TabsDemo} from "../demos/tabs-demo";

import { HeroListComponent } from '../heroes/hero-list.component';
import { CrisisListComponent } from '../crisises/crisis-list.component';


export class NamedRoute extends Route {

    name: string;

}

let routes: NamedRoute[] = [];

routes.push({ name: 'Crisis Center', path: '/crisis-center', component: CrisisListComponent });
routes.push({ name: 'Heroes', path: '/heroes', component: HeroListComponent });
routes.push({ name: 'Tabs', path: '/tabs', component: TabsDemo });
routes.push({ name: 'Forms', path: '/forms', component: FormsDemo });

export default routes;