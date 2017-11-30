import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  myRecipes;
  constructor(public recipes: RecipesService) { }

  ngOnInit() {
    this.recipes.getAllRecipes().subscribe( list =>{
      this.myRecipes = list;

  });

  }
}
