export class Ingredient {
  _id: string;
  name: string;
  description: string;
  constructor(data = {}) {
    Object.assign(this, data);
  }
}
