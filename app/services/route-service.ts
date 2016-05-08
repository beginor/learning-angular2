import { Route } from '@angular/router';

import {FormsDemo} from "../demos/forms-demo";
import {TabsDemo} from "../demos/tabs-demo";

export class NamedRoute extends Route {

    name: string;

}

let routes: NamedRoute[] = [
    { path: '/tabs', name: 'Tabs', component: TabsDemo },
    { path: '/forms', name: 'Forms', component: FormsDemo }
];

export default routes;