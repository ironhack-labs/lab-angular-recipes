import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RecepieControllerService} from '../../services/recepieController.service';


@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.css']
})
export class RecipeIngredientComponent implements OnInit {

  recepie:any;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private recepieService:RecepieControllerService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getSingleRecepie(params['id']);
    });
  }


  getSingleRecepie(id) {
    this.recepieService.get(id)
      .subscribe((recepie) => {
        this.recepie = recepie;
      });
  }

}
