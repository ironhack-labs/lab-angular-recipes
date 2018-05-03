import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecipesListComponent} from './pages/recipes-list/recipes-list.component'
import { DishesListService } from './services/dishes-list.service';

const routes: Routes = [
  { path: '',  component: RecipesListComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule  
  ],
  providers: [DishesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
