import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/Recipes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipesList:Observable<Array<Object>>;

  constructor(private RecipesService: RecipesService) { }

  ngOnInit() {
    this.recipesList = this.RecipesService.getRecipes();
  }

}
