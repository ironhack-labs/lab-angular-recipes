import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  dishes;
  constructor(public recipesService: RecipesService) { }

  ngOnInit() {
    this.dishes = this.recipesService.getList();
  }

}
