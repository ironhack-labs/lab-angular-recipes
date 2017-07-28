import { Routes } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

export const routes: Routes = [
    { path: '', component: DishesListComponent },
    { path: 'dish/:id', component: SingleRecipeComponent },
    { path: '**', redirectTo: '' }
];
