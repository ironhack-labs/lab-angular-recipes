import { Component, OnInit } from '@angular/core';
import { DishesServiceService } from 'services/dishes-service.service';
import { Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
dishes: Observable<Array<object>>

  constructor(public dish: DishesServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dish.getDishes().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }

}





