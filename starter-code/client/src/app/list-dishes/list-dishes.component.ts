import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css']
})
export class ListDishesComponent implements OnInit {
  dishes$: Observable <any>;
  constructor(private theDish : ServiceService, private router: Router) { 
  this.dishes$ = this.theDish.getDishes();
}
  ngOnInit() {
  }

}


  