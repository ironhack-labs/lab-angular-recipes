import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';

export const routes: Routes = [
    { path: '', component: DishesComponent },
    { path: 'dishes/:id', component: DishDetailComponent },
    { path: '**', redirectTo: '' }
];
