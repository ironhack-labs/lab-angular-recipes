import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe:any;
    constructor(
      public router:Router,
      public recipeService:RecipeService,
      public route:ActivatedRoute) {
      route.params.subscribe(params => {
        this.recipeService.getRecipeByID(params['id'])
          .subscribe(recipe => this.recipe = recipe);
      })
    }


  ngOnInit() {
  }

}
