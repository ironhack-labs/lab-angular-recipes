import {Routes} from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeComponent } from './recipe/recipe.component';


export const routes: Routes = [
  {path: '', component: RecipesListComponent},
  {path: 'recipe/:id', component: RecipeComponent}
]