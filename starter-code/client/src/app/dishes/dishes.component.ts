import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../service/recipes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Observable<Array<Object>>;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.dishes = this.recipesService.getList();
  }
}
