import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IngredientService } from '../services/ingredients.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  recipe
  ingredients
  constructor(
    public recServ:RecipeService,
    public ingServ: IngredientService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getRecipe(params["id"])
      this.getIngredients()
    })
  }

  getRecipe(id){
    this.recServ.get(id).subscribe( rec => {
      this.recipe = rec;
    })
  }

  getIngredients(){
    this.ingServ.getIngredients().subscribe( ing => {
      this.ingredients = ing;
    })
  }
  addIngredient(recId, ingId, form){
    console.log(recId)
    console.log(ingId)
    console.log(form)
  }
}
