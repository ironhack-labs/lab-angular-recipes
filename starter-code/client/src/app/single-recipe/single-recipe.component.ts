import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/Recipes.service';
import { IngredientsService } from '../../services/Ingredients.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
 recipe:Object;
 ingredientsList:Observable<Array<Object>>;
 dishId:string;

  constructor(private route:ActivatedRoute, private RecipesService:RecipesService, private IngredientsService:IngredientsService) { }

  ngOnInit() {
    this.ingredientsList = this.IngredientsService.getIngredients();
    this.route.params
          .mergeMap( (recipe:any) => this.RecipesService.getSingleRecipe(recipe.id) )
          .subscribe( recipe => {
            this.dishId = recipe._id;
            this.recipe = recipe;
          });
  }

  addIngredient(id, qty) {
    this.RecipesService.addIngredient(this.dishId, id, qty).subscribe();
  }

}
