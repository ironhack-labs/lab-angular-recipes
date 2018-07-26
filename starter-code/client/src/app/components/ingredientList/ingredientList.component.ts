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
  id: string;
  constructor(private recipeService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.getAllIngredients()
      .subscribe(list => this.ingredients = list)
  }

  addIngredient(id:string, ingredient: object){
    this.route.params
      .subscribe(params=>{console.log(params); this.id = params['id']})
    
    this.recipeService.addIngredient(id, this.id, ingredient).subscribe();
  }
}
