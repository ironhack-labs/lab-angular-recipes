const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');

const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients = [
  {
    name: 'salt',
    description: 'salty'
  },
  {
    name: 'pepper',
    description: 'spicy'
  },
  {
    name: 'cheese',
    description: 'cheesy'
  },
  {
    name: 'milk',
    description: 'dairy'
  },
  {
    name: 'bread',
    description: 'carbs'
  },
  {
    name: 'water',
    description: 'h2o'
  }
  ]

Ingredient.create(ingredients, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${ingredients.length} ingredients`)
});
