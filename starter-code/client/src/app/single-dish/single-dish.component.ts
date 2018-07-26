import { Component, OnInit } from '@angular/core';
import { DishesService } from 'services/dishes.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish:any;
  id:string;
  constructor(public dishService: DishesService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.dishService.getById(this.id).subscribe(data => this.dish = data)
    })
  }

}
