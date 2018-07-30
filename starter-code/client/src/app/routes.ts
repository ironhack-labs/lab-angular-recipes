import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import {HttpModule} from '@angular/http';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: RecipesComponent },
    {path: 'recipe/:id', component: RecipeDetailComponent}
  ]
