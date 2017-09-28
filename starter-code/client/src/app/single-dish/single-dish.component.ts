import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service'
import { ActivatedRoute, Router } from '@angular/router'
import {IngredientsShowService } from '../ingredients-show.service'
@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish;
  ingredients;
  updated;
  constructor(
    private displayService:DisplayService,
    private route:ActivatedRoute,
    private router:Router,
    private ingService: IngredientsShowService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.getSingleProduct(params['id'])
    })

    this.ingService.getIngList()
        .subscribe((ingredients)=>{
          this.ingredients = ingredients
        })
  }

  getSingleProduct(id) {
    this.displayService.getDish(id)
        .subscribe((dish)=>{
          this.dish = dish;
        })
  }

  addProduct(id, dishId ){
    this.displayService.addIng(id, dishId)
        .subscribe((dish)=>{
          this.updated = dish
        })
  }
  goHome(){
    this.router.navigate([''])
  }

}
