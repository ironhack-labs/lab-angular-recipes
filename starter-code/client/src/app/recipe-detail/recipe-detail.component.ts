import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RecipeService} from '../../services/recipe.service.';

interface recipes {
  name: String;
  image: String;
  dewcription: Date;
}

 @Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  constructor(
    private route: ActivatedRoute,
    public dS: RecipeService
  ) { }
   ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.getListDetails(params.id);
    });
  }
   getListDetails(id) {
    this.dS.get(id)
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
   }
 }