import { Component, OnInit } from '@angular/core';
import {ListdishService} from '../../services/listdish.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment'
import {Observable} from 'rxjs';
import "rxjs"

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  entryRecipe: any;

  constructor(private route:ActivatedRoute, private rec:ListdishService ) {
    route.params
  .mergeMap( (p:any) => rec.getDish(p.id))
  .subscribe( entryRecipe => {
    this.entryRecipe=entryRecipe;
  });
   }

  ngOnInit() {
  }

}
