const mongoose = require('mongoose')
const Ingredient = require('../models/ingredient')
const Dish = require('../models/dish')

const dbName = 'recipe-app'
mongoose.connect(`mongodb://localhost/${dbName}`)

const ingredients = [{
  name: 'carrots',
  description: 'sdnfisdnfisdnf',
  image: 'none'
}, {
  name: 'mango',
  description: 'hvjf',
  image: 'none'
}, {
  name: 'peanuts',
  description: 'dhfytfu',
  image: 'none'
}

]

Ingredient.create(ingredients, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${ingredients.length} dishes`)
})
