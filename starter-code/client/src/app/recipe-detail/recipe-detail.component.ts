import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RecipeService } from '../../services/recipe-service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:any;

  constructor(public router:Router, public recipeService:RecipeService, public route:ActivatedRoute) {
    route.params.subscribe(params => {
      this.recipeService.getRecipeByID(params['id'])
        .subscribe(recipe => this.recipe = recipe);
    })
  }

  ngOnInit() {
  }
}
