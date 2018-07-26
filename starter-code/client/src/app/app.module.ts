import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishesServiceService } from 'services/dishes-service.service';
import { RouterModule } from '@angular/router';
import { SinglerecipeComponent } from './singlerecipe/singlerecipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    SinglerecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
