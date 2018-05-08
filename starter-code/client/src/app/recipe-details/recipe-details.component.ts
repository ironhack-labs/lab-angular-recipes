import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishesService, Dish } from '../api/dishes.service';
import { IngridientsService } from '../ingridients.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipeId: string;
  recipe: Dish

  constructor(
    private reqTruc: ActivatedRoute,
    public apiTruc: IngridientsService,
    private resTruc: Router
  ) { }

  ngOnInit() {
    this.reqTruc.paramMap
    .subscribe((myParams) => {
      this.recipeId = myParams.get('blahId');
      this.fetchRecipeData();
    });
  }
  fetchRecipeData(){
     this.apiTruc.getDetails(this.recipeId)
     .then((result: Dish) => {
        this.recipe = result;
        console.log(result)
     })
     .catch((err) => {
        console.log("Recipe Details Error");
     })
  }

  addIngridient() {
    
  }

}
