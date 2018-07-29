const express = require("express");
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const router = express.Router();
const Ingredient = require("../../models/ingredient");
const Dish = require("../../models/dish");

router.post("/dishes/:dishId/ingredients/:id/add", (req, res) => {
  const { dishId, id } = req.params;
  let { quantity } = req.body;
  quantity = Number(quantity);

  Dish.findById(dishId)
    .populate("ingredients.ingredientId")
    .then(dish => {
      let possibleIngred = dish.ingredients.filter(ingred => {
        return ingred.ingredientId._id.toString() === id;
      })[0];

      if (possibleIngred) {
        possibleIngred.quantity += quantity;
      } else {
        possibleIngred = { ingredientId: id, quantity: quantity };
        dish.ingredients.push(possibleIngred);
      }
      const d = new Dish(dish)
      d.save()
      .then(dish => {
        Ingredient.findById(dish._id).then(ingredient => {
          const lastIndex = dish.ingredients.length - 1;
          dish.ingredients[lastIndex].ingredientId = ingredient;

          return res.status(200).json(dish);
        });
      });
    })
    .catch(e => console.log(e));
});

module.exports = router;
