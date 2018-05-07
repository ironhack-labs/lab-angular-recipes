import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService, Ingredient } from '../ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  dishId: string;
  ingredients: Ingredient[];

  constructor(
    private reqTruc: ActivatedRoute,
    public apiTruc: IngredientsService
  ) { }

  ngOnInit() {
    this.reqTruc.paramMap
      .subscribe((myParams) => {
        this.dishId = myParams.get('dishId');
        this.fetchIngredients();
      })
  }
  fetchIngredients() {
    this.apiTruc.getIngredients(this.dishId)
      .then((ingredients: Ingredient[]) => {
        console.log(ingredients)
        this.ingredients = ingredients;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
