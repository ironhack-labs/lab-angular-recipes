
import { Routes } from '@angular/router';

import { DishesListComponent } from './dishes-list/dishes-list.component';

export const routes: Routes = [
    { path: '', component: DishesListComponent },
    { path: '**', redirectTo: '' }
];
