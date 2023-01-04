import { Route } from "@angular/router";
import { Sac1Component } from "./sac1/sac1.component";
import { Sac2Component } from "./sac2/sac2.component";

export const ADMIN_ROUTES: Route[] = [
    { path: 'sac1', component: Sac1Component },
    { path: 'sac2', component: Sac2Component }
];