import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../Recipes.service";
import { ActivatedRoute } from "@angular/router";
import { IngredientsService } from "../Ingredients.service";

interface Recipe {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: "app-RecipeSingle",
  templateUrl: "./RecipeSingle.component.html",
  styleUrls: ["./RecipeSingle.component.css"]
})
export class RecipeSingleComponent implements OnInit {
  recipe: Recipe;
  ingredients: Array<any>;

  constructor(
    private recipeService: RecipesService,
    private ingredientService: IngredientsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeService
        .getRecipe(params.id)
        .subscribe(recipe => (this.recipe = recipe));
    });

    this.ingredientService.getIngredients().subscribe(ingredients => this.ingredients = ingredients );
  }
}
