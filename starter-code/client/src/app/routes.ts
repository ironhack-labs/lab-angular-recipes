
import { Routes } from '@angular/router';

// import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component'

export const routes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'dishes/:id', component: SingleRecipeComponent },
];
