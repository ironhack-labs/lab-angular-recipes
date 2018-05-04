import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  dishes: Array<any> = [];

  constructor(private recipeService: RecipeService) {
    this.recipeService.getDishes().subscribe(dishes => this.dishes = dishes)
  }

  ngOnInit() {}
}
