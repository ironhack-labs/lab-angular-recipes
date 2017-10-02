import { Component, OnInit } from '@angular/core';
import { DishRetrieveService } from '../../services/dish-retrieve.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RetrieveIngredientsService } from '../../services/retrieve-ingredients.service'

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  recipeInfo: any = {};

  constructor(
    private recipeThang: DishRetrieveService,
    private activatedThang: ActivatedRoute,
    private routerThang: Router,
    private ingredientThang: RetrieveIngredientsService
  ) { }

  ngOnInit() {
      this.activatedThang.params
      .subscribe(
        (myParams) => {
          this.recipeThang.getRecipeDetails(myParams.dishId)
            .subscribe(
              (recipesFromApi) => {
                this.recipeInfo = recipesFromApi;
              }
            );
        });
  }

}
