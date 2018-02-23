import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../../service/recipes.service';

@Component({
  selector: 'app-entry-recipes',
  templateUrl: './entry-recipes.component.html',
  styleUrls: ['./entry-recipes.component.css']
})
export class EntryRecipesComponent implements OnInit {

  recipeList:Array<any>;
  constructor(public recipeSvr:RecipesService) {
    this.recipeSvr.getList().subscribe(list=> this.recipeList = list);
   }

  ngOnInit() {
  }

}
