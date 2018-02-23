import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../../services/recipes.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entry-recipes',
  templateUrl: './entry-recipes.component.html',
  styleUrls: ['./entry-recipes.component.css']
})
export class EntryRecipesComponent implements OnInit {

  recipes: Array<any>;

  constructor(public Rs: RecipesService) {
    this.Rs.getList().subscribe(recipes => this.recipes = recipes);
  }
    
  ngOnInit() {
  }

}
