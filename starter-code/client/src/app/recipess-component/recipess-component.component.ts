import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IngredientsService } from '../ingredients.service';


@Component({
  selector: 'app-recipess-component',
  templateUrl: './recipess-component.component.html',
  styleUrls: ['./recipess-component.component.css']
})
export class RecipessComponentComponent implements OnInit {
  recipes$: Observable <any>;

  constructor( private theRecipes : RecipesService, private theIngredients : IngredientsService, private router: Router ) { 
    this.recipes$ = this.theRecipes.getRecipes();   
  }
  
  ngOnInit() {
  }

}
