export class Dish {
  _id: string;
  name: string;
  description: string;
  image: string;
  constructor(data = {}) {
    Object.assign(this, data);
  }
}
