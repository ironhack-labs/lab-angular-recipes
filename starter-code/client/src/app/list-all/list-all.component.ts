import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../services/my-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  showAll$: Observable<any>;

  constructor(private service: MyServiceService, public router: Router) {
    this.showAll$ = service.getList();
   }

  ngOnInit() {
  }

}
