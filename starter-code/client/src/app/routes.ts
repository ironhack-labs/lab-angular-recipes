import { Routes } from '@angular/router';
import { RecipComponent } from './recip/recip.component';
import { RecipDetailsComponent } from './recip-details/recip-details.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';


export const routes: Routes = [
    { path: '', component: RecipComponent},
    { path: 'recip/:id', component: RecipDetailsComponent},
    { path: 'addIngredient',  component: AddIngredientComponent }
];