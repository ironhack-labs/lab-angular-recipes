import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishApiService } from '../../dish-api.service';
import { IngredientApiService } from '../../ingredient-api.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  dishInfo: any = {};
  ingredients: any[] = [];

  constructor(
    private activatedThang: ActivatedRoute,
    private dishThang: DishApiService,
    private ingredientThang: IngredientApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.activatedThang.params
    .subscribe(
      // my Params = grabs URL parameter
      (myParams) => {
        // call service method and pass in parameter,
        // which is the dish ID
        this.dishThang.getDishDetails(myParams.dishId)
        // Subcribe to Ajax request
          .subscribe(
            (theDishFromApi) => {
              this.dishInfo = theDishFromApi;
            }
          );
    });

    this.ingredientThang.getIngredients()
    .subscribe(
      (ingredientFromApi: any[]) => {
        this.ingredients = ingredientFromApi;
      }
    );

  }

}
