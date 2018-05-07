import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';



const routes: Routes = [

  { path: '', component: RecipesListComponent},
  { path: 'recipe/:recipeId', component: RecipeDetailsComponent}

  // Handle all other urls (MUST BE LAST)
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
