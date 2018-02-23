import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  
  @Input() recipesPoo: any;

  constructor() { }

  ngOnInit() {
  }

}
