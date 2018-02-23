'use strict';

const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/recipes-app', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

const Ingredient = require('../models/ingredient');

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
];

Ingredient.create(ingredients, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${ingredients.length} ingredients`);
});
