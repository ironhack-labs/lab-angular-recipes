const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');
const Dish = require('../models/dish');

const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients = [
  {
    name: "tomate",
    description: "tomate rico."
  },
  {
    name: "cebolla",
    description: "cebolla rico."
  },
  {
    name: "pila",
    description: "pila rico."
  },
];

Ingredient.create(ingredients, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${ingredients.length} ingredients`)
});
