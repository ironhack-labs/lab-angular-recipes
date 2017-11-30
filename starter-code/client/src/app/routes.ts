import { Routes } from '@angular/router';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';

export const routes: Routes = [
    { path: '', component: ListRecipesComponent },
    // { path: 'recipe/:id', component: RecipeDetailComponent },
    { path: '**', redirectTo: '' }
];


// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
