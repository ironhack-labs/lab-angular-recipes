import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RecipeService} from '../services/recipe.service';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
//
// RecipeDetailComponent

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
