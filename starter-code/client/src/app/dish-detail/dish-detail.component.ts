import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipes.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  name:string;
  image:string;
  description:string;
  ingredients: Object[];

  constructor(private route: ActivatedRoute, private dishService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
        this.dishService.getDish( params['id'] ).subscribe(
          dish=>{
            this.name = dish.name;
            this.image = dish.image;
            this.description = dish.description;
          }
        )
    });

    this.dishService.getIngredients().subscribe(
      e => {
        this.ingredients = e.map((elm)=>{
          elm['quantity'] = 0;
          return elm;
        });
      }
    )
  }

  modifyIngredient(target, modifier){
    target.quantity = Number(target.quantity) + modifier;
    console.table(this.ingredients.filter(e => e['quantity'] != 0));
  }

  incrementIngredient(target){
      this.modifyIngredient(target, 1);
  }

  decrementIngredient(target){
    if(target.quantity > 0) this.modifyIngredient(target, -1);
  }

}
