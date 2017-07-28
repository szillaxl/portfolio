const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const dealershipSchema = new Schema({
  make: String,
  year: Number,
  created_at: Date,
  updated_at: Date,
  city: String,
  province: String,
  postal_code: String,
  street: String,
});

// Create a model using schema.
const Dealership = mongoose.model('Dealership', dealershipSchema);

// Make this available to our Node applications.
module.exports = Dealership;