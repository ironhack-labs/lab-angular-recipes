import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish:any;
  
  constructor(
    private route: ActivatedRoute,
    public router: Router,
     private dishesService: DishesService
    ) { 
      route.params.subscribe(params => {
        dishesService.getOneDish(params.id).subscribe(dish => {
          this.dish=dish;
      });
    })
     }


  ngOnInit() {}

}
