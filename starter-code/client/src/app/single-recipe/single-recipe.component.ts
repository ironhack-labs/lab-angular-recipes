import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  recipe:any;

  constructor(public router:Router, public recipeServ:RecipeService, public route:ActivatedRoute){
     route.params.subscribe(params => {
       recipeServ.getSingleRecipe(params['id']).subscribe(recipe => this.recipe = recipe);
     })
   }

  ngOnInit() {
  }

}
