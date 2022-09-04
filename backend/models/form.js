const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  cardNumber: {
    type: Number,
    required: true,
  },
  cardCVV: {
    type: Number,
    required: true,
  },
  expMonth: {
    type: Number,
    required: true,
  },
  expYear: {
    type: Number,
    required: true,
  },
  cardName: {
    type: String,
    required: true,
  },
});

const form = mongoose.model("paymentForm", formSchema);

module.exports = form;
