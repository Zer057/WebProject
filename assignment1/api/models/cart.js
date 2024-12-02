const mongoose = require('mongoose');

// Define the Cart schema
const CartSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  item_id: { type: String, required: true },
  item_name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
}, { timestamps: true }); // Automatically add createdAt and updatedAt

// Create the Cart model
module.exports = mongoose.model('Cart', CartSchema);
