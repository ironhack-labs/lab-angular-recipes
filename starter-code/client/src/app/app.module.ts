import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';

import { DishesService } from './services/dishes.service';
import { IngredientsService } from './services/ingredients.service';

import { PageDishListComponent } from './pages/page-dish-list/page-dish-list.component';
import { PageDishDetailComponent } from './pages/page-dish-detail/page-dish-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full' },
  { path: 'dishes',  component: PageDishListComponent },
  { path: 'dishes/:id', component: PageDishDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageDishListComponent,
    PageDishDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DishesService,
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
