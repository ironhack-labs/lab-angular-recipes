import {Routes} from '@angular/router'
import {AppComponent} from './app.component'
import { RecipesComponent } from './recipes/recipes.component'
import {DishDetailComponent} from './dish-detail/dish-detail.component'

export const routes: Routes =[
  { path: '', component: AppComponent },
  { path: 'home', component: RecipesComponent },
  { path:'home/:id', component: DishDetailComponent }
]