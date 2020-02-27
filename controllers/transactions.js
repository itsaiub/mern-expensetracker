const Transaction = require("../models/Transaction");

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access public

const getTransactions = async (req, res, next) => {
  try {
    const tranasctions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: tranasctions.length,
      data: tranasctions
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

// @desc post transaction
// @route POST /api/v1/transactions
// @access public

const addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const tranasction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: tranasction
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

// @desc delete transaction
// @route DELETE /api/v1/transactions/:id
// @access public

const deleteTransaction = async (req, res, next) => {
  try {
    const tranasction = await Transaction.findById(req.params.id);

    if (!tranasction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found"
      });
    }

    await tranasction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

module.exports = {
  getTransactions,
  addTransaction,
  deleteTransaction
};
