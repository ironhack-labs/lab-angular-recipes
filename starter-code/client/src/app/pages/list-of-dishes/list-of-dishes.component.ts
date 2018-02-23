import { Component, OnInit } from '@angular/core';
import {ListDishesService} from '../../services/list-dishes.service';

@Component({
  selector: 'app-list-of-dishes',
  templateUrl: './list-of-dishes.component.html',
  styleUrls: ['./list-of-dishes.component.css']
})
export class ListOfDishesComponent implements OnInit {
  dishList: Array <Object>;

  constructor(private entryService: ListDishesService) { }

  ngOnInit() {
    this.entryService.getDishes()
    .then((result) => this.dishList =result);
  }

}

