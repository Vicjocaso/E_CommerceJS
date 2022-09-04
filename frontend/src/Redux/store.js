import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/*Reducers */
import { cartReducer } from "./Reducers/cartReducers";
import {
  getProductReducer,
  getProductDetailsReducer,
} from "./Reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cartFromLocalStorage =  JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];



const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage|| [],
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
