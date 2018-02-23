'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  image: String
});

const Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
