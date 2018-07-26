import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesService } from 'services/dishes.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from 'routes';
import { OneDishComponent } from './oneDish/oneDish.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientsService } from 'services/ingredients.service';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      OneDishComponent,
      IngredientsComponent
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
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
