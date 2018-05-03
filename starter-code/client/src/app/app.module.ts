import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RetrieveService } from './retrieve.service';
import { DishListComponent } from './dish-list/dish-list.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',  component: DishListComponent },
  // { path: ':id', component: SingleEntryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
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
