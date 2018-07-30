import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/Recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredientList',
  templateUrl: './ingredientList.component.html',
  styleUrls: ['./ingredientList.component.css']
})

export class IngredientListComponent implements OnInit {
  ingredients: Array<Object> = [];
  constructor(private recipeService: RecipesService, private route: ActivatedRoute) { }
  dishId: string = '';
  ngOnInit() {
    this.dishId = this.recipeService.getDishId()
    console.log('id plato', this.recipeService.getDishId())
    this.recipeService.getAllIngredients()
      .subscribe(list => this.ingredients = list)
  }

  addIngredient(id:string, ingredient: any){
    (ingredient.quantity)? ingredient.quantity++ : ingredient.quantity = 1;
    this.recipeService.addIngredient(this.dishId, id, ingredient).subscribe();
  }
}
