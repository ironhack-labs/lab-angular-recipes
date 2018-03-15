import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesListComponent }
]