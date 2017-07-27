import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ListdishService} from '../services/listdish.service'
import { AppComponent } from './app.component';
import { DisplaydishComponent } from './displaydish/displaydish.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplaydishComponent,
    RecipesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ListdishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
