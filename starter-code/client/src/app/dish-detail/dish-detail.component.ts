import { Component, OnInit } from '@angular/core'
import { DishesService } from '../services/dishes.service'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router'

interface Dish{
  _id: string
  name: string
  image: string
  description: string
  __v: number
  ingredients: Array<string>
}

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dish: Dish

  constructor(private dishesService: DishesService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe( params => {
      this.dishesService.getDish(params['id'])
        .subscribe( dish => this.dish = dish)
    })
  }
}
