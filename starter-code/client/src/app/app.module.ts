import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishesService } from './dishes.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing';
import { Routes,RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', component: DishesComponent, pathMatch: 'full' },
  { path: 'recipe/:recipeId',  component: RecipeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
