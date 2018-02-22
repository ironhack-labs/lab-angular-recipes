import { Routes } from '@angular/router';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';


export const routes: Routes = [
    { path: '', component: ListDishesComponent },
    { path: 'recipe/:id', component: OneRecipeComponent},
    { path: '**', redirectTo: '' }
];