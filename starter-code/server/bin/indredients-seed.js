const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');
const Dish = require('../models/dish');

const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients = [
{
  name: "tomato",
  description:"wonderful red tomato"
},
{
  name: "cheese",
  description:"great french cheese"
},
{
  name: "Onio",
  description:"will make you cry"
},
{
  name: "Meat",
  description:"from a cow or from a pig"
}
]

Ingredient.create(ingredients, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${ingredients.length} ingredients`)
});
