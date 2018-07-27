import { Component, OnInit } from "@angular/core";
import { recipesService } from "service/recipes.service";
import { ActivatedRoute } from "@angular/router";
import { ingredientsService } from "service/ingredients.service";

@Component({
  selector: "app-single-recipe",
  templateUrl: "./single-recipe.component.html",
  styleUrls: ["./single-recipe.component.css"]
})
export class SingleRecipeComponent implements OnInit {
  recipe;
  ingredients;
  constructor(
    public recipeService: recipesService,
    public route: ActivatedRoute,
    public ingredientsService: ingredientsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeService
        .getRecipe(params.id)
        .subscribe(recipe => (this.recipe = recipe));
    });

    this.route.params.subscribe(() => {
      this.ingredientsService
        .getIngredients()
        .subscribe(ingredients => (this.ingredients = ingredients));
    });
  }

  addIngredient(ingredient, quantity) {
    console.log(this.recipe._id)
    console.log(ingredient._id)
    console.log(quantity)
    this.recipeService
      .addIngredient(this.recipe._id, ingredient._id, quantity)
      .subscribe(recipe => (this.recipe = recipe));
  }
}
