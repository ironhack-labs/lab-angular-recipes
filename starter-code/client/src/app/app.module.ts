import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { DishesService } from "./api/dishes.service";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { DishDetailsComponent } from "./dish-details/dish-details.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { IngredientsService } from "./ingredients.service";

const routesArray: Routes = [
  { path: "", component: RecipesListComponent },
  { path: "dish/:id", component: DishDetailsComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    DishDetailsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routesArray)
  ],
  providers: [DishesService, HttpClient, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
