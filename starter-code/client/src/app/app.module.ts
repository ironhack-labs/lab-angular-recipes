import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipesService } from './services/recipes.service';
import { RouterModule } from '@angular/router';
import { myRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
