import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component'

const routes: Routes = [
    {path: '', component: RecipesComponent},
    {path: 'recipe/:Id', component: OneRecipeComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }