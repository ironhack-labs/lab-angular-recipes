import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { IngredientService } from '../services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  dish: any;
  ingredients: any;
  quantity: number;

  constructor(
    private recipeService: RecipeService,
    public ingredientService: IngredientService,
    route: ActivatedRoute,
    private router: Router) {
      route.params.subscribe(params => {
        this.recipeService.getSingleDish(params.id).subscribe(dish => {
          this.dish = dish;
        });
      });

       this.ingredientService.getIngredients().subscribe(ingredients => {
         this.ingredients = ingredients;
       });

     }

  ngOnInit() {
  }

  addIngredients(dishId, ingredientId){
    this.ingredientService.addIngredient(dishId, ingredientId, this.quantity)
      .subscribe(res => console.log(res));
  }

}
