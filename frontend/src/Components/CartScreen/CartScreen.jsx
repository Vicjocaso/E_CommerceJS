import React from "react";
import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

/* componets*/
import CartItem from "../Cart/CartItem";
import { addToCart, removeFromCart } from "../../Redux/Actions/cartActions";
import { Container } from "react-bootstrap";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // const getCartCount = () => {
  //   return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  // };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  return (
    <div className="cartscreen">
      <div style={{ margin: "90px" }} className="cartscreen_left wrapper ">
        <Container>
          <Row sm={4}>
            <Col>
              <div className="col-6"></div>
            </Col>
            <Col>
              <div className="col-6">Articulo:</div>
            </Col>
            <Col>
              <div className="col-6">Cantidad:</div>
            </Col>
            <div className="col-6">Action:</div>
          </Row>
        </Container>
        {cartItems.length === 0 ? (
          <div>
            <Link to="/">Volver a la tienda</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen_right wrapper">
        <Container>
          <div>
            <h5 style={{ fontWeight: "bold" }}>Resumen del pedido:</h5>
          </div>
          <Row sm={2}>
            <Col style={{ fontWeight: "bold" }}>
              <p className="col-6">SubTotal:</p>
              <p className="col-6">TOTAL:</p>
            </Col>
            <Col>
              <p className="col-6">DOP${getCartSubTotal()}</p>
              <p className="col-6">DOP${getCartSubTotal()}</p>
            </Col>
          </Row>
        </Container>

        <th>Nosotros aceptamos:</th>
        <div className="cardAcc">
          {/* <i
                    className="fa-brands fa-cc-visa fa-2xl"
                    style={{ color: "#1A1F71" }}
                  ></i> */}
          <img
            src="./mastercard.png"
            alt="Mastercard"
            style={{ width: "65px", padding: "10px" }}
          />
          <img
            src="./visa.png"
            alt="Visa"
            style={{ width: "65px", padding: "10px" }}
          />
          <img
            src="./amex.png"
            alt="Visa"
            style={{ width: "65px", padding: "10px" }}
          />
        </div>
        <div>
          {cartItems.length === 0 ? (
            <div>
              <Button style={{ background: "#1A1F71" }} disabled variant="dark">
                Proceso de pago
              </Button>
            </div>
          ) : (
            <div>
              <Link to="/PaymentOption">
                <Button style={{ background: "#1A1F71" }} variant="dark">
                  Proceso de pago
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
