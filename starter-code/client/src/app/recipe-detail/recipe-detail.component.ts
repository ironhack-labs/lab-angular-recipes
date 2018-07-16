import { Component, OnInit } from '@angular/core';
import { Dish, RecipeService } from '../api/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  _id: string;
  recipeItem: Dish

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myRecipeServ: RecipeService,
    private myRouterServ: Router

  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
      .subscribe((myParams) => {
        console.log(myParams.get("recipeId"));
        this._id = myParams.get("recipeId");
        this.fetchRecipeDetail();
      });
  }
  fetchRecipeDetail() {
    this.myRecipeServ.getRecipeItem(this._id)
      .then((response: Dish) => {
        this.recipeItem = response;
      })
      .catch((err) => {
        alert("Sorry! There was a problem getting Phone's details");
        console.log(err);
      });
  }

}
