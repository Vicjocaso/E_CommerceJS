import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const product = ({ urlImage, name, price, description, productId }) => {
  return (
    <div className="product">
      <img src={urlImage} alt={name} />

      <div className="product_info">
        <p className="info_name">{name}</p>
        <p className="info_description">{description.substring(0, 100)}...</p>
        <p className="info_price">RD${price}</p>
        <div>
          <Link to={`/products/${productId}`}>
            <Button style={{ background: "#1A1F71" }} variant="dark" size="lg">
              Ver detalles
            </Button>
          </Link>
        </div>
        {/* <Link to={`/products/${productId}`} className="info_button">
          view
        </Link> */}
      </div>
    </div>
  );
};

export default product;
