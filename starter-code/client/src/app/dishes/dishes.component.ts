import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RetrieveDishesService } from '../services/retrieve-dishes.service'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishListArray:Array<Object>
  constructor(private dishService: RetrieveDishesService) { }

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(dishList => this.dishListArray = dishList)
  }
}
