import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from 'app/services/dishes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeId: any;
  recipe: object;

  constructor(private recipesService: DishesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.recipeId = String(params['id'])
    })
    this.recipesService.getRecipe(this.recipeId)
      .then((recipe)=> {
        this.recipe = recipe
      })
  }

}
