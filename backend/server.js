require("dotenv").config();
const express = require("express");
const connectDB = require("../backend/config/bd.js");
const productRoutes = require("./routes/productRoutes");
const postForm = require("./routes/formRouter.js");
const soapForm = require("./routes/soapRouter");

//DataBase conection
connectDB();

const app = express();

//parse
app.use(express.json());
//Routers

app.use("/api/product", productRoutes);

app.use("/api/PaymentForm", postForm);

app.use("/api/soapForm", soapForm);

//Server Ports
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Up in port ${PORT}`);
});
