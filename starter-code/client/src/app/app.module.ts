import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';
import { DishesService } from './services/dishes.service';

const routes: Routes = [
  { path: '', component: DishesListComponent},
  // { path: 'movies', component: MovieListComponent },
  // { path: 'movies/:id', component: MovieDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    DishesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
