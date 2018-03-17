const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  image: String
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
  }
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
