import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {SingleRecipeComponent} from './single-recipe/single-recipe.component';
import {DishDetailsComponent} from './dish-details/dish-details.component'

const myRoutes: Routes =[
{ path: '',  component: RecipesComponent },
{ path:'recipe/:id',  component: SingleRecipeComponent}
];


export{myRoutes};
