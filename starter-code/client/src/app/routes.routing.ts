import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/RecipeList/RecipeList.component';
import { RecipeComponent } from './components/Recipe/Recipe.component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipes', component: RecipeListComponent,
    children: [{ path: ':id', component: RecipeComponent}]}
];

