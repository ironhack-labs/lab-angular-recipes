import { Component, OnInit } from '@angular/core';
import { DishList } from 'services/dishes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipesList: Array<any>

  constructor(service: DishList) { 
    service.getEntries().subscribe((lista)  => this.recipesList = lista)
  }

  ngOnInit() {
  }

}
