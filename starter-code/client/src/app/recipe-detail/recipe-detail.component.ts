import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../services/recipes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IngredientService } from "../services/ingredient.service";
import { Dish } from "../interfaces/dish";
@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
  providers: [RecipesService, IngredientService]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Dish;
  ingredient: string;
  ingredients: Array<object>;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public recipeService: RecipesService,
    public ingredientService: IngredientService
  ) {
    this.refreshIngredients();
    this.route
      .params
      .subscribe(params => {
        this.recipeService.get(params.id).subscribe(recipe => {
          this.recipe = recipe;
        })
      });
  }

  ngOnInit() {}
  refreshIngredients() {
    this.ingredientService
      .getIngredients()
      .subscribe(ingredients => (this.ingredients = ingredients));
  }
  // saveIngredient() {
  //   console.log(this.ingredient);
  //   this.ingredientService.saveComment(this.recipe._id,this.ingredient).subscribe(() =>{
  //     this.refreshIngredients();
  //   });
  //   this.ingredient = "";
  // }
}
