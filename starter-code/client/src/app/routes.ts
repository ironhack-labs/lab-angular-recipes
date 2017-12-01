import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { DetailsDishComponent } from './details-dish/details-dish.component'

export const routes: Routes = [
    { path: '', component: DishesComponent },
    { path: 'dishes/:id', component: DetailsDishComponent}
];
