import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  recipe
  constructor(
    public recServ:RecipeService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe( params => this.getRecipe(params["id"]))
  }

  getRecipe(id){
    this.recServ.get(id).subscribe( rec => {
      this.recipe = rec;
    })
  }

}
