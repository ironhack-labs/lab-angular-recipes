import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../services/dishes.service';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-dishes-single',
  templateUrl: './dishes-single.component.html',
  styleUrls: ['./dishes-single.component.css'],
  providers: [IngredientsService]
})

export class DishesSingleComponent implements OnInit {
  DishesList: Array<any>;
  dish: any;
  constructor(private dS: DishesService , public iS: IngredientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishesDetails(params['id']);
      this.iS.getIngredientsList().subscribe(list => this.DishesList = list);
    })
  }

  getDishesDetails(id) {
    this.dS.getSingleDishes(id)
    .subscribe((dish) => {
        this.dish = dish;
    })
  }
  
  // Ingredients: number = 0;
  
  // addIng(ing) {
  //   this.iS.addIngredient(ing, this.dish._id)
  //   .subscribe((a)=> {
  //     this.Ingredients = a.length;
  //   })
  // }
}

