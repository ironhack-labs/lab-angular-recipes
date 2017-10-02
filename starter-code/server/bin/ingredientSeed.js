const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');

const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients = [
  {
    name: "Mayo",
    image: "http://www.seriouseats.com/images/2013/08/20130806-mayo-taste-test-hellmans.jpg",
    description: "A white sticky substance"
  },
  {
    name: "Sugar",
    image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/sugar_rmq/650x350_sugar_rmq.jpg",
    description: "Ants and children like this"
  },
  {
    name: "Chives",
    image: "https://i1.wp.com/www.livingherbs.com/wp-content/uploads/2015/11/chives-potted.jpg?fit=300%2C300",
    description: "No information"
  }
]

Ingredient.create(ingredients, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${ingredients.length} dishes`)
});
