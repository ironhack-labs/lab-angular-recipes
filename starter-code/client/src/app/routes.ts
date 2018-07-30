import { Routes } from '@angular/router';
import { RecipesListComponent } from 'app/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from 'app/recipe-detail/recipe-detail.component';

 export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: RecipesListComponent },
    { path: 'recipe/:id', component: RecipeDetailComponent },
    
];