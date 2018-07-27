import { Component, OnInit, Input } from '@angular/core';
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
    this.recipeService.getAllIngredients()
      .subscribe(list => this.ingredients = list)
  }

  addIngredient(id:string, ingredient: object){
    this.route.params
      .subscribe(params=>{console.log('route params', params); this.dishId = params['id']})
    console.log('id', id)
    console.log('object', ingredient);
    this.recipeService.addIngredient(this.dishId, id, ingredient).subscribe();
  }
}
