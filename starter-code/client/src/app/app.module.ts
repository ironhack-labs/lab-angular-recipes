import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
//Components
import { RecipesComponent } from './components/recipes/recipes.component';
//Services
import { DishesService } from 'app/services/dishes.service';

//Routes
const routes: Routes = [
  { path: '',  component: RecipesComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
