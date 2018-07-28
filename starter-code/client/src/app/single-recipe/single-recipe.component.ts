import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { ActivatedRoute } from "@angular/router";
import { IngredientsService } from "../../services/ingredient.service";

@Component({
  selector: "app-single-recipe",
  templateUrl: "./single-recipe.component.html",
  styleUrls: ["./single-recipe.component.css"],
  providers: [RecipeService, IngredientsService]
})
export class SingleRecipeComponent implements OnInit {
  recipe: any;
  recipeId: string;
  ingredients: Array<object>;
  ingredientsId: string;

  constructor(
    private route: ActivatedRoute,
    public recipeService: RecipeService,
    public ingredientsService: IngredientsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeId = params.id;
    });
    this.recipeService.getRecipe(this.recipeId).subscribe(recipe => {
      this.recipe = recipe;
    });
    this.ingredientsService.getIngredients().subscribe( ingredients => {
      this.ingredients = ingredients;
    })
  }
}
