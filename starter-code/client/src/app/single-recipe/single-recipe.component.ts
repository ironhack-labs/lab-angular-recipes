import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  singleRecipe:any;
  constructor(
    public router:Router,
    public recipesService:RecipesService,
    private route:ActivatedRoute) {
    route.params.subscribe(params =>{
      this.recipesService.getDishByID(params['id'])
          .subscribe(recipe => this.singleRecipe = recipe)
    })
 }

  ngOnInit() {
  }

}
