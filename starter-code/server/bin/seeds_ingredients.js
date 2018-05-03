const mongoose = require('mongoose');
const Dish = require('../models/dish')
const Ingredient = require('../models/ingredient');

const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients = [
  {
    name: "Tomate",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://biotrendies.com/wp-content/uploads/2015/07/tomate.jpg"
  },
  {
    name: "Aceite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://biotrendies.com/wp-content/uploads/2015/07/tomate.jpg"
  },
  {
    name: "Queso",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://biotrendies.com/wp-content/uploads/2015/07/tomate.jpg"
  },
]

Ingredient.create(ingredients, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${ingredients.length} ingredient`)
});