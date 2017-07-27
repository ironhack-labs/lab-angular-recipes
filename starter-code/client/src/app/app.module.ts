import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { DishesService } from '../services/dishes.service';
import { DishesListComponent } from './dishes-list/dishes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
