
import { Routes } from '@angular/router';
import { EntryRecipesComponent } from './entry-recipes/entry-recipes.component';
import {SingleRecipeComponent} from './single-recipe/single-recipe.component';

export const routes: Routes = [
    { path: '', component: EntryRecipesComponent},
    { path: 'dishes/:id', component: SingleRecipeComponent},
    { path: '**', redirectTo: '' }
];