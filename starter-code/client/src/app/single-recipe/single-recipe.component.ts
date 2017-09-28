import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeListService } from '../services/recipe-list.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe:any;
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private recipeService: RecipeListService ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(`El parametro recibido es: ${params['id']}`);
        this.recipeService.getOneEntry(params['id'])
        .subscribe(recipe => {
          this.recipe = recipe;
          console.log(this.recipe)
        });
      });
    }
  }
