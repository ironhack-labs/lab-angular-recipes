import { Component, OnInit } from '@angular/core';
import { DishesService} from '../services/dishes.service';
import { IngredientsService} from '../services/ingredients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish= {};
  myIngredients = [];
  constructor(private dishes: DishesService, private route: ActivatedRoute, private ingredients: IngredientsService, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.dishes.getEntry(params['id'])
    .subscribe((dish) => {
      this.dish = dish;
    }));
    this.ingredients.getList()
    .subscribe((ingredients) => {
      this.myIngredients = ingredients;
    });
    this.myIngredients.map(dish =>{
      dish.addQuantity = 0;
    });
  };
  addIngredient(ingId, quantity) {
    this.route.params
    .subscribe((params) => this.dishes.addIngredient(params['id'], ingId, quantity).subscribe(res => this.router.navigate([''])));
  }
}
