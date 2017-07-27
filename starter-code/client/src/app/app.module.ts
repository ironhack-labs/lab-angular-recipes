import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { RecipeService } from './services/recipes.services';

import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dish', pathMatch: 'full'},
  { path: 'dish', component: DishesListComponent },
  { path: 'dish/:id', component: DishDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishDetailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
