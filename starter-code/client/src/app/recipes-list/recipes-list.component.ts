import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
    element: any;
  constructor(private dishesService:DishesService) { }

  ngOnInit() {
    this.dishesService.getList()
    .subscribe((element) => this.element = element);
  }

}
