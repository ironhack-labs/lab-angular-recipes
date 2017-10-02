import { Component, OnInit } from '@angular/core';
import { DishesListService } from '../services/dishes-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  details: any = {};

  //newDetails: any = {};

  ingredients: any[] = [];

  quantity: number = 0;

  constructor(
    private dishService: DishesListService,
    private urlReader: ActivatedRoute
  ) { }

  ngOnInit() {
    this.urlReader.params
      .subscribe(
        (params) => {
          this.dishService.getDetails(params.id)
            .subscribe(
              (data) => {
                this.details = data;
                console.log("food --> ", data);
              }
            )
        }
      )

    this.dishService.getIngredients()
      .subscribe(
        (data: any) => {
          console.log("Success Ingredients Get");
          this.ingredients = data;
        }
      )


  }

  addIngredient(dishId, id,ingredient) {
    console.log('HERE!!');
    this.details.ingredients.push(ingredient);
    //this.details.ingredients.name = ingredient.name;
    this.dishService.postIngredient(dishId, id, this.quantity, ingredient.name)
      .subscribe(
        (data) => {
          console.log('Post Success! --> ', data);
          this.details = data;
        }
      )
  }

}
