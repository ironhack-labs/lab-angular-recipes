import { Component, OnInit } from "@angular/core";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { RecipesService } from "services/Recipes.service";
import { ActivatedRoute } from "@angular/router";
import { IngredientsService } from "services/Ingredients.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"],
  providers: [IngredientsService, RecipesService]
})
export class RecipeComponent implements OnInit {
  recipeId: String;
  recipe: Observable<Array<Object>>;
  ingredients: Observable<Array<Object>>;
  ingredientId: String;
  quantity: number;

  constructor(
    public rS: RecipesService,
    public iS: IngredientsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      (this.recipeId = params["id"]),
        this.rS
          .getRecipesById(this.recipeId)
          .subscribe(res => (this.recipe = res));
    });

    this.iS
      .getIngredients()
      .subscribe(ingredientslist => (this.ingredients = ingredientslist));
    }
}
