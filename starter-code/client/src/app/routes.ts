
import { Routes } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesSingleComponent } from './dishes-single/dishes-single.component';

export const routes: Routes = [
    { path: '', component: DishesListComponent },
    { path: ':id', component: DishesSingleComponent},
    { path: '**', redirectTo: '' }
];