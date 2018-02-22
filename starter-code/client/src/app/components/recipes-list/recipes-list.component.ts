import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  constructor(private dishesService: DishesService) { }

  ngOnInit() {
  }

}
