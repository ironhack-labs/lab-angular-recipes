import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { dishesService } from '../services/dishes.services';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dish', pathMatch: 'full'},
  { path: 'dish', component: RecipesListComponent },
    { path: 'dish/:id', component: DishDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    DishDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [dishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
