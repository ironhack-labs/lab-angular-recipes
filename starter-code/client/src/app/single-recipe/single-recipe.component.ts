import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe: object;

  constructor(
    public dishesSer: DishesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.getRecipe(params['id']));
  }

  getRecipe(id) {
    this.dishesSer.get(id).subscribe( obj => {
      this.recipe = obj;
      console.log(obj)
    });
  }
}
