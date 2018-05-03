const mongoose = require("mongoose");
const Ingredient = require("../models/ingredient");
const Dish = require("../models/dish");

const dbName = "recipeApp";
mongoose.connect(`mongodb://localhost/${dbName}`);

const ingredient = [
  {
    name: "Tomato",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
    description:
      "Tomato is consumed in diverse ways, including raw, as an ingredient in many dishes, sauces, salads, and drinks. While tomatoes are botanically berry-type fruits, they are considered culinary vegetables as an ingredient or side dish for savory meals"
  },
  {
    name: "Cheese",
    image:
      "http://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2015/08/cheese.jpg",
    description:
      "Cheese is a dairy product derived from milk that is produced in a wide range of flavors, textures, and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk, usually the milk of cows, buffalo, goats, or sheep."
  },
  {
    name: "Potato",
    image:
      "https://cdn.shopify.com/s/files/1/1017/2183/t/2/assets/live-preview-potato.png?5104689971902438090",
    description:
      "The potato is a starchy, tuberous crop from the perennial nightshade Solanum tuberosum. Potato may be applied to both the plant and the edible tuber.[2] Potatoes have become a staple food in many parts of the world and an integral part of much of the world's food supply."
  }
];

Ingredient.create(ingredient, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${ingredient.length} ingredients`);
});
