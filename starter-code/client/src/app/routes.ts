import { Routes } from '@angular/router';
import { RecipiesListComponent } from './recipies-list/recipies-list.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'

export const routes: Routes = [
    { path: '', component: RecipiesListComponent },
    { path: 'recipie/:id', component: RecipeDetailComponent },
    { path: '**', redirectTo: '' }
];
