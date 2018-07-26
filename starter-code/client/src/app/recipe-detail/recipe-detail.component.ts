import { Component, OnInit } from '@angular/core';
import { Recipe, RecipesService } from 'services/recipes.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [ RecipesService ]
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private rs: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rs.getDish(params.id).subscribe(recipe => this.recipe = recipe);
    })
  }

}
