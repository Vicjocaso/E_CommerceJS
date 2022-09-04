import "./HomeScreen.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/* components */
import Product from "../Product/Product";

/*Actions getProduct as listProduct */
import { getProducts as listProducts } from "../../Redux/Actions/productActions";

const Homescreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <div className="homescreen_products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((products) => (
            <Product
              key={products._id}
              productId={products._id}
              name={products.name}
              price={products.price}
              description={products.description}
              urlImage={products.urlImage}
            />
          ))
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "49px",
        }}
      ></div>
    </div>
  );
};

export default Homescreen;
