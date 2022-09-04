const simple_authorization_internet = require("../Samples/Payments/Payments/simple-authorizationinternet")

// connectDB();

const postForm = (req, res) => {
  try {
    const jsonForm = req.body;

    const responseCode = (error, data, response) => {
      if (response === 201) {
        res.status(200).json({ messege: "Success 201" });
      }
      else if (response === 401 ) {
        res.status(500).json({ messege: "Server Error 401" });
      }
      else {
        res.status(500).json({ messege: "Server Error" });
      }
    }
    simple_authorization_internet((error, data, response) => responseCode(error, data, response), enable_capture  = true , jsonForm)

  } catch (error) {
    console.log(error);
    res.status(500).json({ messege: "Server Error" });
  }

  // try {
  //   await format.insertMany(data);
  // } catch (error) {
  //   console.log("Error with data import");
  //   process.exit(1);
  // }
};

module.exports = postForm;

//CyberSourceApi   authorization_with_capturesale(cardNumber, dateMonth, dateYear, name, lastName, address, email, CVV);
