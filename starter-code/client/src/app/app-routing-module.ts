import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { SingleRecipesComponent } from './single-recipes/single-recipes.component';

const routes: Routes = [
  {path: '', component: RecipesComponent},
  {path: 'recipe/:blahId', component: SingleRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}