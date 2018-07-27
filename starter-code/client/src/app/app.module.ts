import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { routes } from './routes';
import { RouterModule } from '../../node_modules/@angular/router';
import { RecipesService } from './services/recipes.service';
import { DetailRecipesComponent } from './detail-recipes/detail-recipes.component';

@NgModule({
   declarations: [
      AppComponent,
      ListRecipesComponent,
      DetailRecipesComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes)
   
   ],
   providers: [RecipesService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
