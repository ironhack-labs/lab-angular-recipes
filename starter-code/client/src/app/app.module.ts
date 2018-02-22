import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishesService } from 'services/dishes.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    SingleRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
