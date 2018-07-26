import { Component, OnInit } from '@angular/core';
import { Recipe, RecipesService } from 'services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipesService ]
})
export class RecipesComponent implements OnInit {

  recipes: Array<Recipe>;

  constructor(private rS: RecipesService) { }

  ngOnInit() {
    this.rS.getDishes().subscribe(recipes => this.recipes = recipes);
  }

}
