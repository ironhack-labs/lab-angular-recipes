import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../Service/my-service.service';
import { ServiceIngredientsService } from '../Service/service-ingredients.service';

@Component({
  selector: 'app-getElement',
  templateUrl: './getElement.component.html',
  styleUrls: ['./getElement.component.css']
})
export class GetElementComponent implements OnInit {

  element: Object;
  ingredients: Object[] = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private myServiceService: MyServiceService,
    private serviceIngredientsService:ServiceIngredientsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.myServiceService.getElement(params.id).subscribe(element => this.element = element)
    })
    this.serviceIngredientsService.getIng().subscribe(i =>{
      i.forEach(element => {
        if (!/(jpg|png|jpeg)$/g.test(element.image))
        element.image = "https://www.spreadshirt.com/image-server/v1/mp/designs/1008669354,width=178,height=178/squidward-pepe.png";
        this.ingredients.push(element);
      });
    });

  }
  addIng(dishId, ingredientsId, quantity){
    this.serviceIngredientsService.postElement(dishId, ingredientsId, quantity).subscribe(e => this.element = e);
  }

}
