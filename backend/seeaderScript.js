require("dotenv").config();

const productData = require("./data/products.js");
const connectDB = require("./config/bd.js");
const product = require("./models/product.js");

const importData = async () => {
  try {
    connectDB();
    await product.deleteMany({});

    await product.insertMany(productData);

    console.log("Data Import SUCCESS");

    process.exit();
  } catch (error) {
    console.error(error);
    console.log("Error with data import");
    process.exit(1);
  }
};

importData();
