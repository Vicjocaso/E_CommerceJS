const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getProductById,
} = require("../controller/productControllers");

// get all product from DB
router.get("/", getAllProduct);

router.get("/:id", getProductById);

module.exports = router;
