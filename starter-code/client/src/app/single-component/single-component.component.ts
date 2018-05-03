import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MyServiceService } from '../services/my-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent implements OnInit {
  single: Object;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private myServiceService: MyServiceService
  ) {
    route.params.subscribe(params => {
      myServiceService.getId(params.id).subscribe(single => {
        this.single = single;
      });
    });
  }

  ngOnInit() {}
}
