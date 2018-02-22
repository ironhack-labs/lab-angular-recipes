import { Routes } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';
// import { PhoneDetailsComponent } from './phone-details/phone-details.component';

export const routes: Routes = [
    { path: '', component: DishesListComponent},
    // { path: 'phone/:id', component: PhoneDetailsComponent},
    // { path: '**', redirectTo: '' }
];