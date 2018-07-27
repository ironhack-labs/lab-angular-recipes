import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getDishService } from 'services/getDish.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
  providers: [getDishService]
})
export class SingleComponent implements OnInit {
  @Output() Add = new EventEmitter();

  ingredients: Array<object>;
  dish: object;

  constructor(public dS: getDishService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.dS.getOne(params['id']).subscribe(dish=>{
        this.dish=dish;
      })
    })
    this.dS.getIngredients().subscribe(ingres => {
      this.ingredients = ingres;
    })
  }

  goToHome(){
    this.router.navigate(['/']);
  }

  add(dishId, ingredientId, quantity){
    this.dS.addIngredients(dishId,ingredientId,quantity).subscribe(dish=>{
      this.dish=dish;
    })
  }
}
