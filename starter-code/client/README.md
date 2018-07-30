# generate DishCardComponent to practice @Input()

```
<app-dish-card>
DishCardComponent
ng g c components/dish-card
```

```typescript
  @Input() dish: any
```

```
<a class="card" [routerLink]="['detail', dish._id]">
  <p>Name: {{dish.name}}</p>
  <p>Description: {{dish.description}}</p>
  <img [src]="dish.image" />
</a>
```

# generate AddIngredientFormComponent to practice @Output()

```
<app-add-ingredient-form>
AddIngredientFormComponent
ng g c components/add-ingredient-form

  ingredientId: string;
  quantity: number;
  ingredients: Array<Object>;

  @Output() submit .....

  constructor(....)
      this.ingredientsService.retrieveAll()
      .then(result => this.ingredients = result);

  handleSubmit(form) {
    if (form.valid) {
      const eventData = {
        quantity: ...
        ingredientId: ...
      }
      this.submit.????(eventData);
    }
  }





<form (ngSubmit)="handleAddIngredient(form)" #form="ngForm">
  <select [(ngModel)]="ingredientId" name="ingredientId" required>
    <option value="">-- choose ingredient --</option>
    <option *ngFor="let ingredient of ingredients" [value]="ingredient._id">{{ingredient.name}}</option>
  </select>
  <input [(ngModel)]="quantity" name="quantity" type="number" placeholder="e.g.: 3" required/>
  <button>add to ingredients</button>
</form>
```
