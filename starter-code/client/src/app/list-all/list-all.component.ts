import { Component, OnInit } from '@angular/core';
import { ListRecipes } from '../../services/retrieveAllDishes';
@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {
  recipes : Array<Object>;
  constructor( public list : ListRecipes) { }

  ngOnInit() {
    this.list.getRecipies()
    .subscribe(recipe => {
      this.list = recipe;
      console.log(recipe);
    })
  }

}
