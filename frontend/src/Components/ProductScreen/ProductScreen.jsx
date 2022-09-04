import "./ProductScreen.css";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

// Actions
import { getProductDetails } from "../../Redux/Actions/productActions";
import { addToCart } from "../../Redux/Actions/cartActions";
import { useNavigate } from "react-router-dom";

const ProductScreen = ({ match }) => {
  const nagivate = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;

  const { id } = useParams();
  useEffect(() => {
    console.log(product);
    console.log(id);

    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, product, match, id]); //id

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    nagivate("../cart");
    // history.push("/cart");
  };

  return (
    <div className="productscreen" style={{ padding: "70px" }}>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div style={{ margin: "1rem", height: "35rem" }} className="wrapper">
            <div className="left_image">
              <img
                className="center"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                }}
                src={product.urlImage}
                alt={product.name}
              />
              <div>
                <p className="left_name">{product.name}</p>
                <p>RD${product.price} </p>
                <div style={{ width: "35rem" }}>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="productscreen_right">
            <div className="right_info">
              <th>
                <h5>Titulo</h5>
              </th>
              <p>
                Precio: <span>RD${product.price}</span>
              </p>
              <p>
                Estado:
                <span>
                  {product.countInStock > 0 ? "Disponible" : "No Disponible"}
                </span>
              </p>
              <p>
                Cantidad
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <Button
                  style={{ background: "#1A1F71" }}
                  variant="dark"
                  onClick={addToCartHandler}
                >
                  Agregar al carrito
                </Button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
