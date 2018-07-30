import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/RecipeList/RecipeList.component';
import { RecipeComponent } from './components/Recipe/Recipe.component';
import { IngredientListComponent } from './components/ingredientList/ingredientList.component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeComponent,
    children: [
      { path: 'ingredients', component: IngredientListComponent}
    ]}
];

