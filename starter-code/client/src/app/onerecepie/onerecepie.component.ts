import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../service/retrieve.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onerecepie',
  templateUrl: './onerecepie.component.html',
  styleUrls: ['./onerecepie.component.css']
})
export class OnerecepieComponent implements OnInit {
  dishId;
  dish;
  constructor(public retrieve:RetrieveService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe((params) => this.dishId = String(params['id']));

         this.retrieve.getAll().subscribe( ey => {
             this.dish = ey
           });
  }

}
