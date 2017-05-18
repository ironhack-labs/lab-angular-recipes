import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service'

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  item;
  constructor(private recipeService: RecipesService,
     private route: ActivatedRoute) {}
     
  ngOnInit() {
    this.route.params.subscribe( id => {
      this.recipeService.getItem(id).subscribe((recip) => {
        this.item = recip
      })
    })
  }

}
