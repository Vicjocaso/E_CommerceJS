import axios from "axios";

export const formPost = async (cardObj) => {

  JSON.stringify(cardObj);

  console.log(cardObj);

  try {
    const response = await axios.post("/api/PaymentForm", cardObj)
    return response

  } catch (error) {
    console.log(error);
  }
};
