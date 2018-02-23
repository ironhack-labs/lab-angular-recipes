import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  @Input() dish: any;
  constructor() { }

  ngOnInit() {
  }

}
