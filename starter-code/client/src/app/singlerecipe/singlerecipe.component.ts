import { Component, OnInit } from '@angular/core';
import { DishesServiceService } from 'services/dishes-service.service';
import { IngredientsService } from 'services/ingredients.service';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-singlerecipe',
  templateUrl: './singlerecipe.component.html',
  styleUrls: ['./singlerecipe.component.css']
})
export class SinglerecipeComponent implements OnInit {
dishId: String;
singledish: Observable<any>
dishingredients: Observable<any>

  constructor(public dish: DishesServiceService, public ingredients: IngredientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.dishId = params['id'],
      this.dish.get(this.dishId).subscribe(res => this.singledish = res);
      this.ingredients.getIngredients().subscribe(res => this.dishingredients = res);

    });
  }

}
