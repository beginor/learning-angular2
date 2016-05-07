import { RouteDefinition } from '@angular/router-deprecated';

import {FormsDemo} from "../demos/forms-demo";
import {TabsDemo} from "../demos/tabs-demo";

let routes: RouteDefinition[] = [
    { path: '/tabs', name: 'TabsDemo', component: TabsDemo },
    { path: '/forms', name: 'FormsDemo', component: FormsDemo }
];

export default routes;