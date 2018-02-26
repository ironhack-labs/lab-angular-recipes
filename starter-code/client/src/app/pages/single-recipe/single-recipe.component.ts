import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataIngService } from '../../services/data-ing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  singleRecipe: object;
  recipeId: string;
  ingredients: Array<any>;
  singleIngredient: object;
  ingredientId: string;
  
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private dataIng: DataIngService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.recipeId = params['id']);

    this.dataService.getSingle(this.recipeId)
      .then(singleRecipe => this.singleRecipe = singleRecipe);

    this.dataIng.getList()
     .then(ingredients => this.ingredients = ingredients);
  }

  addIngredients(quantity, ingredientId) {
    this.dataService.postIngredients(quantity, ingredientId, this.recipeId)
      .then(() => console.log('ingredients added'));
  }

}
