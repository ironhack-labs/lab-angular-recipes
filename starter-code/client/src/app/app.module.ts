import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from 'app/services/data.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SingleRecipeComponent } from './pages/single-recipe/single-recipe.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'recipe/:id', component: SingleRecipeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SingleRecipeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
