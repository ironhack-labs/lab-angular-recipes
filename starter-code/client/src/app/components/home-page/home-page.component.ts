import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  recipes: Array<any>;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getList()
    .then((recipes) => {
    this.recipes = recipes});
  }

}
