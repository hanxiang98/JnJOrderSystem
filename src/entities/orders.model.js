const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  productName:{
    type: String,
    required: true,
    trim: true
  },
  quantity:{
    type: Number,
    required: true
  }
}, {
  timestamps: true,
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;