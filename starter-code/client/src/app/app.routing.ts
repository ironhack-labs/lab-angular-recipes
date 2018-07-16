import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "landing-page",  component: LandingPageComponent },
  { path: "recipe-list", component: RecipeListComponent},
  //{ path: "phones", component: PhoneListPageComponent },
  //{ path: "phone/add", component: AddPhonePageComponent },
  { path: "dish/:recipeId", component: RecipeDetailComponent },
 // { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }