import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../../services/recipes.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})

export class SingleRecipeComponent implements OnInit {

  recipe: Array<any>;

  constructor(public Rs: RecipesService, private router:Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getListDetails(params['id']);
    });
  }

  getListDetails(id) {
    this.Rs.get(id)
      .subscribe((r) => {
        this.recipe = r;
      });
  }

}

