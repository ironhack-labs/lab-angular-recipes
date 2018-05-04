import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';
import { IngredientsService } from './ingredients.service';
import { RouterModule, Routes } from '@angular/router';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListDishesComponent },
  { path: 'home/:id', component: SingleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListDishesComponent,
    SingleComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [ServiceService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }









