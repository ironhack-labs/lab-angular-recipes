import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RetrieveService } from '../services/retrieve.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ComidaDetailComponent } from './comida-detail/comida-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    RecipesComponent,
    ComidaDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
