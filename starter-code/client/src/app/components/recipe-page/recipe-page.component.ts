import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  @Input() recipe: any;


  id: String;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    // this.activatedRoute.params
    // .subscribe(params => {
    //   this.id = params.id
    //   this.recipe._id = this.recipesService.getRecipe(this.id)
    // })
  }
}
