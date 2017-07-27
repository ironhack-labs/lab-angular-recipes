import { Component, OnInit } from '@angular/core';
import { RecetsService } from '../../services/listRecet';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {
  recipes: Object[];

  constructor( public list : RecetsService ) { }

  ngOnInit() {
    this.list.getRecipes()
    .subscribe((recipes)=> {
      this.recipes = recipes;
    })
  }

}
