import { Routes } from '@angular/router';

import { DishesComponent } from './dishes/dishes.component'
import { TheDishComponent } from './the-dish/the-dish.component'

export const routes: Routes = [
    { path: '', component: DishesComponent },
    { path: 'dishes/:id', component: TheDishComponent },
//    { path: 'form', component: EntryFormComponent  }
];