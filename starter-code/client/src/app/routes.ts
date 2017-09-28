import { Routes } from '@angular/router';

 import { DisplayComponent } from './display/display.component';
   import { OnerecepieComponent } from './onerecepie/onerecepie.component';

export const routes: Routes = [
     { path: '', component: DisplayComponent },
    { path: 'dish/:id', component: OnerecepieComponent },
    { path: '**', redirectTo: '' }
];
