import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './api/recipe.service';
import { AppRoutingModule } from './app.routing';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

//const routesArray: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'landing-page',  component: LandingPageComponent },
//];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RecipeListComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
    //RouterModule.forRoot(routesArray)
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
