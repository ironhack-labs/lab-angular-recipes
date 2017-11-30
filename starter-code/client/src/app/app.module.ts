import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//ROUTES
import {routes} from './routes';
import {RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
//SERVICES
import { RecipesService } from './services/recipes.service';
//COMPONENTS
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
