// import * as actionTypes from "../Constants/formConstants";
import axios from "axios";

export const soapForm = async (paymentObj) => {
  try {
    await axios
      .post("/api/soapForm", paymentObj)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
