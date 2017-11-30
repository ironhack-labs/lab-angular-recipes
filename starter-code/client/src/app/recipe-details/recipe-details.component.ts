import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe:any;
  constructor(
    public router:Router,
    public recipesService: RecipesService,
    public route:ActivatedRoute) {
    route.params.subscribe(params => {
      this.recipesService.getRecipeByID(params['id'])
        .subscribe(recipe => this.recipe = recipe)
    })
     }

  ngOnInit() {
  }

}


// import { Component, OnInit } from '@angular/core';
// import {PhoneService} from '../../services/phone.service';
//
// import {ActivatedRoute, Router} from '@angular/router';
//
// @Component({
//   selector: 'app-phone-details',
//   templateUrl: './phone-details.component.html',
//   styleUrls: ['./phone-details.component.css']
// })
// export class PhoneDetailsComponent implements OnInit {
//
//   phone:any;
//   constructor(
//     public router:Router,
//     public phoneService:PhoneService,
//     public route:ActivatedRoute) {
//     route.params.subscribe(params => {
//       this.phoneService.getPhoneByID(params['id'])
//         .subscribe(phone => this.phone = phone);
//     })
//   }
//
//   deletePhone(id){
//     this.phoneService.deletePhone(id).subscribe(() =>{
//       this.router.navigate(['']);
//     });
//   }
//
//   ngOnInit() {
//   }
//
// }
