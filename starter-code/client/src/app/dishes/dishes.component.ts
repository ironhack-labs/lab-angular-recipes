import { Component, OnInit } from '@angular/core';
import { RetrieveDishesService } from '../retrive-dishes/retrieve-dishes.service';
import { RetrieveIngredientsService  } from '../retrieve-ingredients/retrieve-ingredients.service'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [RetrieveDishesService, RetrieveIngredientsService]
})
export class DishesComponent implements OnInit {

  dishes: any;
  ingredients: any;

  constructor(
    private dish: RetrieveDishesService,
    private ingredient: RetrieveIngredientsService,
  ) { }

  ngOnInit() {
    console.log(this.dish);
    this.dish.getList()
      .subscribe((dishes) => {
        this.dishes = dishes;
      })
      
      console.log(this.ingredient);
      this.ingredient.getList()
        .subscribe((ingredients) => {
          this.ingredients = ingredients;
      })
  }

}
