import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { RecipeService } from './services/recipes.services';

import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: DishesListComponent }
  // { path: 'entries/:id',  component: SingleEntryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
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
