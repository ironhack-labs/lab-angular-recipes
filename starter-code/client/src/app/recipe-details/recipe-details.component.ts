import { Component, OnInit } from '@angular/core';
import { Recipe, DishesService } from '../api/dishes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  dishId: string;
  dish: Recipe;

  constructor(
    private reqTruc: ActivatedRoute,
    public apiTruc: DishesService,
    private resTruc: Router
  ) { }

  ngOnInit() {
    this.reqTruc.paramMap
      .subscribe((myParams) => {
        this.dishId = myParams.get('dishId');
        this.fetchDishData();
      });
  }
  fetchDishData() {
    this.apiTruc.getDetails(this.dishId)
      .then((details: Recipe) => {
        console.log(details)
        this.dish = details;
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
