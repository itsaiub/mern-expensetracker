const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      required: [true, "Please add some text"]
    },
    amount: {
      type: Number,
      required: [true, "Please add a positive or negative number"]
    }
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
