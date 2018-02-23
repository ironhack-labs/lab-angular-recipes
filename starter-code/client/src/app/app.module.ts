//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//routes
import { routes } from './routes';
//services
import { DishesService } from './services/dishes.service';
//comps
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishComponent } from './dish/dish.component';
import { IngredientsFormComponent } from './ingredients-form/ingredients-form.component';
import { IngredientsService } from './services/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishComponent,
    IngredientsFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService,IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
