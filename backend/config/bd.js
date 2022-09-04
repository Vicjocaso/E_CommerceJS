require("dotenv").config();

/* 
DataBase conection
*/
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect("MongoURI", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connection SUCCESS");
  } catch (error) {
    console.log(error);
    console.log("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
