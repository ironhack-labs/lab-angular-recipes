import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { dishesService, Dish } from 'services/dishes.service';
import { ingredientsService, Ingredient } from 'services/ingredients.service';

@Component({
  selector: 'app-recipes-single',
  templateUrl: './recipes-single.component.html',
  styleUrls: ['./recipes-single.component.css'],
  providers: [dishesService,ingredientsService],
})
export class RecipesSingleComponent implements OnInit {

  dishes : Dish;
  ingredients : Array<Ingredient>;

  constructor( 
    public dishesService : dishesService, 
    public ingredientsService : ingredientsService,
    public router : ActivatedRoute) { 
    }
    
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.dishesService.getOneDish(params.id)
        .subscribe(dishes => {
          this.dishes = dishes;
        })
    });
    this.ingredientsService.getIngredients()
    .subscribe((ingredients) => {
      this.ingredients = ingredients;
    });  
  }
  
  addIngredient(ingredient, quantity){
  console.log("añadido " + ingredient + "");
  console.log(ingredient)
  console.log(quantity)
  this.dishesService.addIngredient(this.dishes._id, ingredient._id, quantity)
    .subscribe((dishes) => {
      this.dishes = dishes;
    })
  }
}
