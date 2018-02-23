import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { RecipComponent } from './recip/recip.component';
import { recipService } from 'services/recip.service';
import { RecipDetailsComponent } from './recip-details/recip-details.component';
import { IngredientsService } from 'services/ingredients.service';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipComponent,
    RecipDetailsComponent,
    AddIngredientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [recipService,IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
