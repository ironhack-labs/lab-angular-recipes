import { Component, OnInit } from '@angular/core';
import { RetrieveDishesService } from '../retrive-dishes/retrieve-dishes.service';
import { RetrieveIngredientsService  } from '../retrieve-ingredients/retrieve-ingredients.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [RetrieveDishesService, RetrieveIngredientsService]
})
export class DishesComponent implements OnInit {

  dishes: any;
  ingredients: any;
  
  dishBtn:Object;
  dishForm:Object = {'display': 'none'}
  ingBtn:Object;
  ingForm:Object = {'display': 'none'};

  constructor(
    private dish: RetrieveDishesService,
    private ingredient: RetrieveIngredientsService,
    private router: Router,
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
  
  showForm(show, hide){
    this[show] = {};
    this[hide] = {'display': 'none'};
  }

  addDishS(form){
    console.log(`form = ${form} and form.value = ${form.value}`)
    this.dish.addDishS(form.value)
      .subscribe(dish => {
        this.router.navigate(['dishes', dish])
      })
  }
  
  addIngredientS(form){
    this.ingredient.addIngredient(form.value)
      .subscribe(ingredient => {
        this.router.navigate([''])
        // this.ngOnInit()
      })
  }
}
