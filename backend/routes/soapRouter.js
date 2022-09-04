const express = require("express");
const router = express.Router();

const soapForm = require("../controller/soapController");

//Post PaymentForm

router.post("/", soapForm);

module.exports = router;
