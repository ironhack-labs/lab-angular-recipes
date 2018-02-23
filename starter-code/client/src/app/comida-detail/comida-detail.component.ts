import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../../services/retrieve.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comida-detail',
  templateUrl: './comida-detail.component.html',
  styleUrls: ['./comida-detail.component.css']
})
export class ComidaDetailComponent implements OnInit {
comida:any;
  constructor(public cd:RetrieveService, 
    private router:Router, 
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
    this.getComidaId(params["id"]) ;

    })
  }
getComidaId(id){
  this.cd.get(id).subscribe((comida => this.comida = comida))
}
}
