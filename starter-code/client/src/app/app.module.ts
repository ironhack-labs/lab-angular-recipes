import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RecipesService } from './recipes.service';
import { RouterModule, Routes } from '@angular/router';
import { RecipessComponentComponent } from './recipess-component/recipess-component.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { IngredientsService } from './ingredients.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RecipessComponentComponent },
  { path: 'home/:id', component: RecipesDetailComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    RecipessComponentComponent,
    RecipesDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
