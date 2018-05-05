import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../retrieve.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  providers: [RetrieveService]

})
export class DishListComponent implements OnInit {

  dish$: Observable<object>;

  constructor(private retrieve: RetrieveService) { }

  ngOnInit() {
    this.dish$ = this.retrieve.getDishes();
  }

}
