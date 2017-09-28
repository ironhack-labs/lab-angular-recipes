import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { routes } from './routes';
import { DishesService } from './services/dishes.service';
import { SingleDishComponent } from './single-dish/single-dish.component';



@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleDishComponent,
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
