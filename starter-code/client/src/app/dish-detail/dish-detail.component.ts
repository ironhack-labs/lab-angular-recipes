import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipes.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  _id:any;
  name:string;
  image:string;
  description:string;
  ingredients: Object[];

  constructor(private route: ActivatedRoute, private dishService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
        this.dishService.getDish( params['id'] ).subscribe(
          dish=>{
            this._id = dish._id;
            this.name = dish.name;
            this.image = dish.image;
            this.description = dish.description;
            this.dishService.getIngredients().subscribe(
              e => {
                this.ingredients = e.map((elm)=>{
                  let ing = dish.ingredients.find(k => elm._id === k.ingredientId);
                  elm['quantity'] = ing ? ing.quantity: 0;
                  return elm;
                });
              }
            )
          }
        )
    });

  }

  modifyIngredient(target, modifier){
    target.quantity = Number(target.quantity) + modifier;
    this.dishService.addIngredient(this._id, target._id, modifier).subscribe(
    )
  }

  incrementIngredient(target){
      this.modifyIngredient(target, 1);
  }

  decrementIngredient(target){
    if(target.quantity > 0) this.modifyIngredient(target, -1);
  }

}
