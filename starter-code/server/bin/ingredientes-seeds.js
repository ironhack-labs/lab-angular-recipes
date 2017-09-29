const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');
const Dish = require('../models/dish');

const dbName = 'recipe-app';
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredients = [
  { name: "kosher salt", description:"kosher salt description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "bay leaves", description:"bay leaves description", image:"https://www.meghantelpner.com/wp-content/uploads/2011/02/Health-benefits-of-bay-leaves.jpg"  },
  { name: "brown lentils", description:"brown lentils description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png"  },
  { name: "parsnips", description:"parsnips description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "sherry vinegar", description:"sherry vinegar description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "baking potatoes", description:"baking potatoes description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "olive oil", description:"olive oil description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "shallots", description:"shallots description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "carrots", description:"carrots description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "fat free less sodium chicken broth", description:"fat free less sodium chicken broth description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "ground black pepper", description:"ground black pepper description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "chopped celery", description:"chopped celery description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "arborio rice", description:"arborio rice description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "olive oil", description:"olive oil description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "dry white wine", description:"dry white wine description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "brown butter", description:"brown butter description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "grated parmesan cheese", description:"grated parmesan cheese description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" },
  { name: "vegetable stock", description:"vegetable stock description", image:"http://4.bp.blogspot.com/-ZWgkIcBZeRk/VCFj1vQQqMI/AAAAAAAADVA/blFGYDnVW60/s1600/sal-670xXx80.png" }
]

Ingredient.create(ingredients, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${ingredients.length} ingredients`)
});
