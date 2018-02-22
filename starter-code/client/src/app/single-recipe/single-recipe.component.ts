import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RecipesService} from '../../service/recipes.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  recipe:Array<any>;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private journalService:RecipesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getSingleRecipe(params['id']);
    });
  }

  getSingleRecipe(id) {
    this.journalService.get(id)
      .subscribe((r) => {
        this.recipe = r;
      });
  }
}