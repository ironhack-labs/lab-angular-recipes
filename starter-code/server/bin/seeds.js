const Dish = require('../models/dish');
const mongoose     = require('mongoose');
mongoose.connect('mongodb://localhost/recipe-app');


const dishes = [
  {
    name: 'Soup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/14/2/FNM060109WN014_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382538959763.jpeg',
    ingredients: []
  },
  {
    name: 'Cookie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://www.kfc.com/assets/products/G15022_KFC_83-dozen-cookies-Enviro_1291_RGB-copy-3c79d7ef6ea6f6afbc31347a8419e6229ebbfb347b8396f3d05fff5343c36dbf.jpg',
    ingredients: []
  }
];



Dish.create(dishes, (err, list) => {
  if (err){ throw(err); }
  console.log("Success", list);
  mongoose.connection.close();
});
