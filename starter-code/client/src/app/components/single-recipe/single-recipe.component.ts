import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from 'app/services/ingredients.service';


@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  oneRecipe: object;
  recipeId: string;
  ingreds: Array<any>;
  singleIngred: object
  ingredId: string;

  constructor(private dishesService: DishesService, private activedRoute: ActivatedRoute, private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.activedRoute.params 
    .subscribe((params) => this.recipeId = params['id']);

    this.dishesService.getSingleRecipe(this.recipeId)
    .then(singleRecipe => this.oneRecipe = singleRecipe);

    this.ingredientsService.getList()
    .then(ingredients => this.ingreds = ingredients);

    this.ingredientsService.getSingleRecipe(this.ingredId)
    .then(ingredients => this.singleIngred = ingredients)
  }

}
