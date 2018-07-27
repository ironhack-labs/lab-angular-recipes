import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-detail-recipes',
  templateUrl: './detail-recipes.component.html',
  styleUrls: ['./detail-recipes.component.css']
})
export class DetailRecipesComponent implements OnInit {

  constructor(public recipeService: RecipesService, public route: ActivatedRoute) { }
  recipe: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recipeService.getRecipes['id'];
    });

  }
  getRecipeId(id) {
    this.recipeService.getId(id).subscribe((recipe) => {
      this.recipe = recipe;

    });
  }
}
