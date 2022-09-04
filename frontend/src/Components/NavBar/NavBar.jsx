import React from "react";
import "./NavBar.css";
import { useSelector } from "react-redux";

//React-Bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

const NavBar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    // return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    return cartItems.length;
  };
  return (
    <div>
      {/* <div className="justify-content-end">
        <a href="/">
          <Image src="./LogoVisaNet.png" rounded width="35" height="60" />
        </a>
      </div>
      <Card
        className="justify-content-end"
        style={{ width: "521px", height: "80px", backgroundColor: "#1A1F71" }}
      >
        <Navbar
          className="justify-content-end"
          variant="dark"
          bg="flat"
          style={{ width: "490px", height: "50px", backgroundColor: "#1A1F71" }}
        >
          <Nav variant="light">
            <Nav.Link href="/cart">
              Carrito
              <i className="fas fa-shopping-cart">
                <span className="mb-2">{getCartCount()}</span>
              </i>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Card> */}

      <Navbar
        style={{ width: "100%", height: "70px", backgroundColor: "black" }}
        variant="dark"
      >
        <Navbar.Brand href="/">
          <Image src="./logo192.png" rounded width="30" height="50" />
        </Navbar.Brand>
        <Nav className="me-5">
          <Nav.Link style={{ color: "white" }} href="/cart">
            <div style={{ display: "flex" }}>
              <div>Carrito</div>
              <div>
                <i className="fas fa-shopping-cart" s></i>
              </div>
              <div>
                <span className="mb-2">{getCartCount()}</span>
              </div>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar
        style={{
          width: "100%",
          height: "0.9px",
          backgroundColor: "white",
        }}
      ></Navbar>
    </div>
  );
};

export default NavBar;
