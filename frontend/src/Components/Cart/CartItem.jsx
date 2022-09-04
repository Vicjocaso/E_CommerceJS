import React from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div>
      {/* <div className="cartitem_image">
        <img src={item.urlImage} alt={item.name} />
      </div> */}

      {/* <Link to={`/products/${item.product}`} className="cartitem_name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem_price">{item.pice}</p>
      <select
        className="cartitem_select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <Button
        variant="dark"
        className="cartitem_deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </Button>
      <hr /> */}
      <Container style={{ padding: "0rem" }}>
        <hr />
        <Row sm={4}>
          <Col>
            <div className="col-6">
              <img src={item.urlImage} alt={item.name} />
            </div>
          </Col>
          <Col>
            <div className="col-6">
              <Link to={`/products/${item.product}`} className="cartitem_name">
                <p>{item.name}</p>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="col-6">
              <select
                className="cartitem_select"
                value={item.qty}
                onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          </Col>
          <div className="col-6">
            <Button
              variant="dark"
              className="cartitem_deleteBtn"
              onClick={() => removeHandler(item.product)}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default CartItem;
