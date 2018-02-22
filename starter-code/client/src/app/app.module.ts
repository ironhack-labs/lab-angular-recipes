import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesService } from './services/recipes.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recipe/:id', component: RecipePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RecipePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
