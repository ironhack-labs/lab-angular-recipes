import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { RecipesService } from "./services/recipes.service";

import { AppComponent } from "./app.component";
import { RecipesComponent } from './components/recipes/recipes.component';

@NgModule({
  declarations: [AppComponent, RecipesComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
