import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service'

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeS: RecipesService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro es ${params['id']}`);
      this.getRecipeDetails(params['id']);
    })
  }

  getRecipeDetails(id) {
    this.recipeS.get(id)
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
  }

}
