import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AppComponent } from './app.component';

import { RecetsService } from '../services/listRecet';
import { ListAllComponent } from './list-all/list-all.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    RecipesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
