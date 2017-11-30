import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
    { path: '', component: RecipesComponent },
    // { path: 'recipe/:id', component: SingleRecipeComponent },
    { path: '**', redirectTo: '' }
];
