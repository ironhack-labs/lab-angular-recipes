const express    = require('express');
const mongoose   = require('mongoose');
const ObjectId   = mongoose.Schema.Types.ObjectId;
const router     = express.Router();
const Ingredient = require('../../models/ingredient');
const Dish       = require('../../models/dish');

router.post('/:dishId/ingredients/:id/add', (req, res) => {

  console.log(req.body, req.params.dishId, req.params.id);
  console.log("params" + req.params);

  const { dishId, id } = req.params;
  let { quantity } = req.body;
  quantity = Number(quantity);

  Dish
    .findById(dishId)
    .populate('ingredients.ingredientId')
    .exec(
     (err, dish) => {
      if (err)    { return res.status(500).json(err) };
      if (!dish)  { return res.status(404).json(new Error('404')) };

      let possibleIngred = dish.ingredients.filter(ingred => {
         return ingred.ingredientId._id.toString() === id;
      })[0];

      if (possibleIngred){
        possibleIngred.quantity += quantity;
        console.log("cantidad");
        res.status(200).json(dish);
      } else {
        possibleIngred = { ingredientId: id, quantity: quantity }
        console.log("entro");
        //dish.ingredients.push(possibleIngred);
        Dish.findByIdAndUpdate(dishId, {$push: {ingredients: possibleIngred}})
          .then( () => {
            console.log("Ingredient add")
            res.status(200).json(dish);
          })
          .catch( (e) => console.log(`error ${e}`))
          
      }


      /* dish.save( (err) => {
        if (err) { return res.status(500).json(err) }

        Ingredient.findById(id, (err, ingredient) => {
          if (err) { return res.status(500).json(err) }

          const lastIndex = dish.ingredients.length - 1;
          dish.ingredients[lastIndex].ingredientId = ingredient;

        });
      }); */
    });
});

module.exports = router;
