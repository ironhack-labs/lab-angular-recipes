const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');
const Dish = require('../models/dish');

const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients = [
  {
    name: "Tomato",
    image: "http://img8.irna.ir/1396/13960707/82681047/n82681047-71898884.jpg",
    description: "Tomato ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Cheese",
    image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/11/01/17/shutterstock-343034981.jpg?w968h681",
    description: "Cheese ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Pepperoni",
    image: "http://cdn3.bigcommerce.com/s-5pwjrn/products/14/images/22/16oz_Pepperoni_Stick_DSC_0001__85102.1446138804.500.500.jpg?c=2",
    description: "Pepperoni ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

]

Ingredient.create(ingredients, (err) => {
  if (err) { throw(err) }
});