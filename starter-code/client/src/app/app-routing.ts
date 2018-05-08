import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: "", component: HomePageComponent },

    { path: "recipes", component: RecipesComponent },

    { path: "dishes/:blahId", component: RecipeDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
