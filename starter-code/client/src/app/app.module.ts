import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShowDishesComponent } from './show-dishes/show-dishes.component';

import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', component: ShowDishesComponent },
  { path: ':id', component: SingleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ShowDishesComponent,
    SingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
