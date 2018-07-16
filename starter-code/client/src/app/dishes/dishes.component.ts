import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishesName: string;
  dishesUrl: string;
  dishesDescribe: string;

  constructor() { }

  ngOnInit() {
  }

}
