import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeListService } from '../services/recipe-list.service';
import { IngredientlistService } from '../services/ingredientlist.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe:any;
  ingredients:Array<any>;
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private recipeService: RecipeListService,
      private ingredientService: IngredientlistService) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(`El parametro recibido es: ${params['id']}`);
        this.recipeService.getOneEntry(params['id'])
        .subscribe(recipe => {
          this.recipe = recipe;
          console.log(this.recipe)
        });
      });
    this.ingredientService.getIngredientList().subscribe(result => {console.log(result)
      this.ingredients = result})
    }

    }



  //queda poner el ingredient service api (lista hecha), mirar esta pag tb
