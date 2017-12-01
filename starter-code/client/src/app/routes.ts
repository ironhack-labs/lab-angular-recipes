import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';


export const routes: Routes = [
    { path: '', component: DishesComponent },

    { path: '**', redirectTo: '' }
];
