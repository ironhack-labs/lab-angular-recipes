import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  recipe
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private recipeService: RecipeService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro recibido es: ${params['id']}`);
      this.getEntryDetails(params['id'])
    });
  }

  getEntryDetails(id) {
    this.recipeService.get(id)
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
  }

}
