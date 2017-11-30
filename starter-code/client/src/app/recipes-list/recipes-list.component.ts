import { Component, OnInit } from '@angular/core';
import { dishesService } from '../../services/dishes.services';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  dishes:Object[];

  constructor(private dishService: dishesService) { }

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(
      res => this.dishes = res
    )
  }

}
