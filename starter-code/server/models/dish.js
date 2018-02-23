'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DishSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  description: {
    type: String,
    required: [true, 'description is required']
  },
  image: String,
  ingredients: [
    {
      ingredientId: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
      },
      quantity: Number,
      _id: false
    }
  ]
});

const Dish = mongoose.model('Dish', DishSchema);

module.exports = Dish;
