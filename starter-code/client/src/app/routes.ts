import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {RecipeIngredientComponent} from './recipe-ingredient/recipe-ingredient.component';

export const routes: Routes = [
    { path: '', component: RecipeListComponent},
    { path: 'dishes/:id', component: RecipeIngredientComponent},
    { path: '**', redirectTo: '' }
];