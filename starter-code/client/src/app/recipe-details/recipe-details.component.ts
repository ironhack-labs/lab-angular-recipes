import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService, Dish  } from '../api/dishes.service';
import { IngredientsService, Ingredient } from '../api/ingredients.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  dishId: string;
  dish: Dish;
  public ingredients: Array<Ingredient> = [];

  constructor(
    private reqTruc: ActivatedRoute,
    public apiTruc: DishesService,
    public apiIngredient: IngredientsService

  ) { }

  ngOnInit() {

    this.reqTruc.paramMap
    .subscribe((myParams) => {
      // console.log(myParams.get('phoneId'));
      this.dishId = myParams.get('recipeId');
      this.fetchDishData();
    });

    this.apiIngredient.getIngredientList()
    .then((result: Array<Ingredient>) => {
      this.ingredients = result;
    })
    .catch((err) => {
      console.log('Phone list error');
      console.log(err);
    });
  }

  fetchDishData() {
    // component connects to service Here
    this.apiTruc.getDetails(this.dishId)
    .then((result: Dish) => {
      this.dish = result;
    })
    .catch((err) => {
      console.log('Phone details error');
      console.log(err);
    });
  }

}
