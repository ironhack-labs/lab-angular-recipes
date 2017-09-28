import { Component, OnInit } from '@angular/core';
import { DishesService} from '../services/dishes.service'

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
dishes;
  constructor(public dishesservice: DishesService) { }

  ngOnInit() {
    this.dishesservice.getList()
                .subscribe(result => this.dishes = result);
  }

}
