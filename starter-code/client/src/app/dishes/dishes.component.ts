import { Component, OnInit } from '@angular/core';
import {DishesService} from '../dishes.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [DishesService]
})

export class DishesComponent implements OnInit {
  dishes$:Observable<any>;
  dishes:Array<any> = [];


  constructor(dishService: DishesService) { 
    this.dishes$=dishService.getDishesList();
    dishService.getDishesList().subscribe(dishes =>  this.dishes= dishes);
  }

  ngOnInit() {
  }

}
