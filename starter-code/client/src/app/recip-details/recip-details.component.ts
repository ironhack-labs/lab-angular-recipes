import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipService } from 'services/recip.service';

@Component({
  selector: 'app-recip-details',
  templateUrl: './recip-details.component.html',
  styleUrls: ['./recip-details.component.css']
})
export class RecipDetailsComponent implements OnInit {

  recip:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private recipService: recipService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRecipDetails(params['id']);
  });
}

  getRecipDetails(id) {
    this.recipService.get(id)
      .subscribe((recip) => {
        this.recip = recip;
      });
  }


}
