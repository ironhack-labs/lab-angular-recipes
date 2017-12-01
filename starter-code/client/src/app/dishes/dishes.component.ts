import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishesList:Array<any> = [];

    constructor(public recipe:DishesService ) {
      this.recipe.getDishesList().subscribe( list =>{
          this.dishesList = list;
          });
          console.log(this.dishesList);
    }

  ngOnInit() {
  }

}
