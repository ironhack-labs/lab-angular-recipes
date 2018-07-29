import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'services/Recipes.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Observable<Array<object>>;
  constructor(private rS: RecipesService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.rS.getAllRecipes()
      .subscribe(recipeslist=>this.recipes=recipeslist)
  }
}
