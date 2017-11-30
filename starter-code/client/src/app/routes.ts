import { Routes } from '@angular/router';
//import { SingleRecipeService } from './phone-details/phone-details.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
    { path: '', component: RecipesComponent },
//    { path: 'dishes/:id', component: SingleRecipeComponent },
    { path: '**', redirectTo: '' }
];
