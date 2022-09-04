const Product = require("../models/product");

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ messege: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ messege: "Server Error" });
  }
};

module.exports = {
  getAllProduct,
  getProductById,
};
