import { Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { OneDishComponent } from 'app/oneDish/oneDish.component';
import { IngredientsComponent } from 'app/ingredients/ingredients.component';

export const routes : Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'dishes/:id', 
    component: OneDishComponent,
    children: [
      {path: '', component: IngredientsComponent}
    ]
  }
];