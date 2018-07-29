import {Routes} from '@angular/router';
import { ListRecipesComponent} from './list-recipes/list-recipes.component';
import { DetailRecipesComponent } from './detail-recipes/detail-recipes.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

export const routes=[
{ path:'', redirectTo: 'recipes',pathMatch:'full' },
{ path: 'recipes',component:ListRecipesComponent},
{ path: 'recipes/:id',component:DetailRecipesComponent},
{ path: 'recipes/add/dish', component:RecipeFormComponent},
{ path: 'recipes/add/ingredient', component:IngredientFormComponent}
] ;

