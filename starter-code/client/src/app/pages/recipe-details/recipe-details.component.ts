import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishServiceService } from '../../services/dish-service.service';
import { IngredientServiceService } from '../../services/ingredient-service.service'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeInfo: any = {};
  ingredientArr: any = {};
  ingredientToAdd: any = {  }
  constructor(
    private router: ActivatedRoute,
    private dishService: DishServiceService,
    private ingredientService: IngredientServiceService
  ) {

   }

  ngOnInit() {
      this.router.params
      .subscribe(
        (myParams) => {
          this.ingredientToAdd.recipeId = myParams.id;
          this.dishService.getRecipeDetails(myParams.id)
            .subscribe(
              (recipeFromApi) =>{
                  this.recipeInfo = recipeFromApi;
                  console.log(this.recipeInfo)
              }
            );
        }
      );

    this.ingredientService.getIngredients()
      .subscribe(
        (ingredientsFromApi) => {
          this.ingredientArr = ingredientsFromApi
          console.log("ingredient array: ",   this.ingredientArr)
        }

      );
  }

  addIngredientToRecipe(ingId){
    this.ingredientToAdd.ingId = ingId,
    this.ingredientService.addIngredient(this.ingredientToAdd)
      .subscribe(
        (dataFromApi)=>{
          console.log(dataFromApi)
          this.ingredientToAdd = {};
        }
      );
  }

}
