import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayAllComponent } from './components/display-all/display-all.component';
import { DisplayOneComponent } from './components/display-one/display-one.component';
import { DishService } from 'app/services/dish.service';
import { IngredientsService } from 'app/services/ingredients.service';



const routes: Routes = [
  { path: '',  component: DisplayAllComponent },
  { path: 'dishes/:id',  component: DisplayOneComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DisplayAllComponent,
    DisplayOneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
