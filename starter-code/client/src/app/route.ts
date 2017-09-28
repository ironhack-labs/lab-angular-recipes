import { Routes } from '@angular/router';
import { SingleDishComponent } from './single-dish/single-dish.component'
import { DishListComponent } from './dish-list/dish-list.component';
// import { PhoneListComponent } from './phone-list/phone-list.component';

export const routes: Routes = [
    { path: '', component: DishListComponent },
    { path: ':id', component: SingleDishComponent},
    { path: '**', redirectTo: '' }
];
