import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DishesService, Dishes } from '../api/dishes.service';
import { IngredientsService, Ingredient } from '../api/ingredients.service';


@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})

export class OneRecipeComponent implements OnInit {
  dishesId: string;
  dishes: Dishes;
  ingredients: Ingredient[];

  constructor(
    private reqTruc: ActivatedRoute,
    public apiTruc: DishesService,
    public apiIngredient: IngredientsService,
    private resTruc: Router
  ) { }

  ngOnInit() {
    this.reqTruc.paramMap.subscribe(myParams => {
      this.dishesId = myParams.get("Id");
      this.getRecipeInfo(this.dishesId);
    });

    this.apiIngredient.getList()
      .then((result: Ingredient[]) => {
        this.ingredients = result;
      })
      .catch(err => {
        console.log(err)
      })
  }

  getRecipeInfo(id: string) {
    this.apiTruc.getRecipeInfo(id)
      .then((result: Dishes) => {
        this.dishes = result;
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addIngredient(id, ingredientId) {

  }
}
