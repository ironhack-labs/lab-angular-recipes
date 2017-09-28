import { Routes } from '@angular/router';

import {DishesListComponent} from './dishes-list/dishes-list.component';
//import {SingleEntryComponent} from './single-entry/single-entry.component';

export const routes: Routes = [
  { path: '', component: DishesListComponent },
//  { path: 'entry/:id', component: SingleEntryComponent },
  { path: '**', redirectTo: ''}
]
