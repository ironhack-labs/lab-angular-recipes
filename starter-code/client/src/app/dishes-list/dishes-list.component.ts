import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes';
import { IngredientService} from '../../services/ingredient';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  dishesList:Array<any>;
  ingredients:Array<object>;

  constructor(public dS: DishesService) { 
    this.dS.getList().subscribe(list => this.dishesList = list);
  }
  ngOnInit(){
  }

}
