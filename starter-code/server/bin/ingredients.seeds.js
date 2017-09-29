const mongoose = require('mongoose')
const Ingredient = require('../models/ingredient')

const dbName = 'recipe-app'
mongoose.connect(`mongodb://localhost/${dbName}`)

const ingredients = [
  { name: "kosher salt", },
  { name: "bay leaves" },
  { name: "brown lentils" },
  { name: "parsnips" },
  { name: "sherry vinegar" },
  { name: "baking potatoes" },
  { name: "olive oil" },
  { name: "shallots" },
  { name: "carrots" },
  { name: "fat free less sodium chicken broth" },
  { name: "ground black pepper" },
  { name: "chopped celery" },
  { name: "arborio rice" },
  { name: "olive oil" },
  { name: "dry white wine" },
  { name: "brown butter" },
  { name: "grated parmesan cheese" },
  { name: "vegetable stock" },
]

Ingredient.create(ingredients, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${ingredients.length} ingredients`)
})
