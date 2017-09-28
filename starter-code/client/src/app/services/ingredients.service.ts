import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class IngredientsService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
//
//   addIngredient() {
//     /* CREATE a new Phone. */
// router.post('/phones', (req, res, next) => {
//   const thePhone = new Phone({
//     brand: req.body.brand,
//     name: req.body.name,
//     specs: req.body.specs,
//     image: req.body.image || ''
//   });
//
//   thePhone.save((err) => {
//     if (err) {
//       res.json(err);
//       return;
//     }
//
//     res.json({
//       message: 'New Phone created!',
//       id: thePhone._id
//     });
//   });
// });
//   }

  getIngredientsList() {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .map((res: Response) => res.json());
  }

  // get(id) {
  //   return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
  //     .map((res) => res.json());
  // }


}
