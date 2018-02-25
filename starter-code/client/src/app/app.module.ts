import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { DishesService } from 'app/services/dishes.service';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';
import { IngredientsService } from 'app/services/ingredients.service';

const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'dishes/:id', component: SingleEntryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    SingleEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
