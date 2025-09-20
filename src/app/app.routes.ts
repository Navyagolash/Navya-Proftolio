import { Routes } from '@angular/router';
import { Headers } from './layout/headers/headers';
import {Home} from './layout/home/home';
import { About } from './layout/about/about';
export const routes: Routes = [
    // {path: '', redirectTo: }
    {path: '', component: Home},
    {path:'about',component:About}
];


