const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  id_payment: {
    type: String,
  },
  date: {
    type: Date,
  },
  amount: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
