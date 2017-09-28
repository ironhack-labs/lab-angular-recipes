import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  @Input () currentRecipe;
  ingredientList: Array<Ingredient>;
  results: string;

  constructor(private ingredient: IngredientService, private recipe: RecipeService) { }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients(){
    this.ingredient.getIngredients()
    .subscribe((ingredients) => {
      this.ingredientList = ingredients;
    });
  }

  handleNewIngredient(form) {
    const newIngredient = {name: form.value.name};
    this.ingredient.postNewIngredient(newIngredient).subscribe(res => {
      this.results = res;
    this.getIngredients();
    });
  }


  handleAddToDish(recipeId: string, ingredientId: string, quantity: string){
    this.recipe.postIngredient(recipeId, ingredientId, quantity).subscribe
    (res => {
      this.results = res;
    });
  }
}
