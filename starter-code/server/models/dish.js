const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DishSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  slug: {
    type: String,
    required: [true, 'a slug is required'],
    unique: true,
    index: { unique: true}
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

module.exports = mongoose.model('Dish', DishSchema);
