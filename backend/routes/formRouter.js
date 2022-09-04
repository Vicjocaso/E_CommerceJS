const express = require("express");
const router = express.Router();

const postForm = require("../controller/formController");

//Post PaymentForm

router.post("/", postForm);

module.exports = router;
