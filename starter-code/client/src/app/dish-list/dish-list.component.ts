import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { IngredientService } from '../services/ingredient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes:any = [];

  dishBtn:Object;
  dishForm:Object = {'display': 'none'}

  ingBtn:Object;
  ingForm:Object = {'display': 'none'};

  constructor(
    private dish: DishService,
    private ingredient: IngredientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dish.getDishes()
      .subscribe(dishes => {
        this.dishes = dishes;
      })
  }

  showForm(show, hide){
    this[show] = {};
    this[hide] = {'display': 'none'};
  }

  addDish(form){
    this.dish.addDish(form.value)
      .subscribe(dish => {
        this.router.navigate(['dish', dish._id])
      })
  }

  addIng(form){
    this.ingredient.createIngredient(form.value)
      .subscribe(ingredient => {
        this.router.navigate([''])
        // this.ngOnInit()
      })
  }

}
