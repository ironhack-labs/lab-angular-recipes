import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//SERVICES HERE==VVVVVV================================================
import { DishRetrieveService } from './services/dish-retrieve.service'
//SERVICES HERE==^^^^^^================================================


import { AppComponent } from './app.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { DishDetailsComponent } from './pages/dish-details/dish-details.component';

const myRoutes: Routes = [
  {path: '', component: RecipeListComponent},
  {path:'dish-details/:dishId', component: DishDetailsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    DishDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [
    DishRetrieveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
