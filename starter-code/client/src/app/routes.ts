import { Routes } from '@angular/router';
import { ListFoodComponent } from './list-food/list-food.component';

export const routes: Routes = [
    { path: '', component: ListFoodComponent},
    // { path: ':id', component: SingleEntryComponent },
    { path: '**', redirectTo: '' }
];