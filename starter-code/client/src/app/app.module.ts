import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DishesService } from './services/dishes.service';
import { AppComponent } from './app.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { OneDIshComponent } from './components/one-dish/one-dish.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: DishesComponent },
  { path: 'dish/:id', component: OneDIshComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    OneDIshComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
