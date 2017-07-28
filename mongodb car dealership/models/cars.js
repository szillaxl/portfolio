const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

// Create a schema.
const carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  dealership_id: ObjectId,
  created_at: Date,
  updated_at: Date
});

// Create a model using schema.
const Car = mongoose.model('Car', carSchema);


module.exports = Car;